const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const root = path.resolve(__dirname, '..')
const source = fs.readFileSync(process.argv[2] || path.join(root, 'index.html'), 'utf8')
const assembler = require('../assets/course-source.js')
const raw = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/'

function between(start, end) {
  const from = source.indexOf(start)
  assert.ok(from >= 0, 'Generatorfunktion fehlt: ' + start)
  const to = source.indexOf(end, from)
  assert.ok(to > from, 'Generatorgrenze fehlt: ' + end)
  return source.slice(from, to)
}

const context = vm.createContext({ URL, console })
vm.runInContext([
  between('            function normalizeTag(value)', '            const OPERATOR_CANONICAL_KEYS'),
  between('            function normalizeThemeTagKey(value)', '            function syncCategoryDropdownFromCards()'),
  between('    function normalizeText(value)', '    function getHeaderColumn()'),
  between('        function getCourseTaskCards()', '    const LIVE_EDITOR_EMPTY_URL'),
].join('\n'), context)

let cards = []
let controls = {}
let checkedAreas = []
let radios = {}
context.window = {
  location: { href: 'https://mint-the-gap.github.io/Aufgabensammlung/index.html' },
  SchulLiaCourseSource: assembler,
}
context.document = {
  querySelectorAll: selector => selector.includes('courseLbGroup') ? checkedAreas.map(value => ({ value })) : cards,
  getElementById: id => controls[id] ? { value: controls[id] } : null,
  querySelector: selector => {
    const name = selector.match(/name="([^"]+)"/)
    return name && radios[name[1]] ? { value: radios[name[1]] } : null
  },
}

function card(id, tags, filename, options = {}) {
  const body = {
    dataset: {
      schulliaDifficultyLevel: String(options.difficulty || 1),
      schulliaNetworkLevel: String(options.network || 1),
      schulliaOperatorKey: options.operator || 'berechnen',
    },
    querySelectorAll: () => [],
  }
  return {
    id,
    dataset: { category: tags },
    parentElement: { closest: () => options.section ? { querySelector: () => ({ id: options.section }) } : null },
    querySelector: selector => selector === '.card-body' ? body : filename ? {
      getAttribute: () => 'https://liascript.github.io/course/?' + raw + filename,
    } : null,
  }
}

const ids = list => Array.from(list, item => item.id)

async function main() {
  cards = [
    card('first', 'Bruchrechnung|Koordinatensystem', 'Aufgabe_0001.md'),
    card('alias', 'Brüche|Koordinatensystem', 'Aufgabe_0002.md'),
    card('duplicate-source', 'Bruchrechnung|Koordinatensystem', 'Aufgabe_0001.md'),
    card('blocked', 'Bruchrechnung|Negative Zahlen', 'Aufgabe_0003.md'),
    card('different', 'Dreieck', 'Aufgabe_0004.md'),
    card('explanation-tag', 'Erklärung|Bruchrechnung', 'Example.md'),
    card('explanation-path', 'Bruchrechnung', 'Repetitorium/Erklaerungen/Example.md'),
    card('explanation-section', 'Bruchrechnung', 'Example.md', { section: 'erklaerungen' }),
    card('course-set', 'Bruchrechnung', 'Example.md', { section: 'aufgabensets' }),
    card('no-link', 'Bruchrechnung', ''),
  ]
  assert.deepEqual(ids(context.getCourseTaskCards()), ['first', 'alias', 'duplicate-source', 'blocked', 'different'])
  assert.deepEqual(ids(context.getCandidateCardsForThemes(['Brüche', 'Koordinatensystem'], [])), ['first', 'alias', 'duplicate-source'])
  assert.deepEqual(ids(context.getCandidateCardsForThemes(['Bruchrechnung'], ['Brüche'])), [])
  assert.deepEqual(ids(context.getCandidateCardsForThemes(['Brüche'], ['Negative Zahlen'])), ['first', 'alias', 'duplicate-source'])

  // Both start buttons share this selection. Count applies to unique source
  // files, and must never be spent twice on two cards for the same source.
  const selected = Array.from(context.selectCourseTaskUrls(['Brüche'], ['Negative Zahlen'], 100, 'einsteiger', null))
  assert.equal(selected.length, 2)
  assert.equal(new Set(selected).size, 2)
  assert.ok(selected.every(url => !url.includes('Example') && !url.endsWith('0003.md')))
  assert.throws(() => context.selectCourseTaskUrls(['Unknown'], [], 4, 'einsteiger', null), /Keine Aufgaben/)
  assert.throws(() => context.selectCourseTaskUrls(['Brüche'], ['Bruchrechnung'], 4, 'einsteiger', null), /Keine Aufgaben/)

  // Exercise the actual weighted selector at each target profile and several
  // course lengths, including a request larger than the available pool.
  cards = Array.from({ length: 45 }, (_, index) => card('task-' + index, 'Bruchrechnung', 'Aufgabe_' + index + '.md', {
    difficulty: index % 5 + 1,
    network: Math.floor(index / 5) % 5 + 1,
    operator: ['berechnen', 'angeben', 'ermitteln_bestimmen'][index % 3],
  }))
  for (const group of ['einsteiger', 'fortgeschrittene', 'experten']) {
    for (const count of [1, 4, 5, 17, 100]) {
      const result = context.selectCardsByCourseCriteria(cards, count, group)
      assert.equal(result.length, Math.min(count, cards.length), group + '/' + count)
      assert.equal(new Set(result).size, result.length)
      const levels = Array.from(result, item => context.getCardDifficultyLevel(item))
      assert.deepEqual(levels, levels.slice().sort((a, b) => a - b), 'Aufgaben bleiben nach Schwierigkeit geordnet')
    }
  }
  assert.notEqual(context.getTargetGroupProfile('einsteiger').difficulty.get(1), context.getTargetGroupProfile('experten').difficulty.get(1))

  // Curriculum selection grants prerequisites and checked current learning
  // areas, while explicitly excluding tasks that require a later topic.
  controls = { courseBundeslandSelect: 'sachsen', courseSchulartSelect: 'gymnasium', courseKlasseSelect: '8' }
  checkedAreas = []
  let allowed = context.computeCurriculumAllowedSet()
  assert.ok(allowed.has('potenzen'))
  assert.ok(!allowed.has('lineare funktionen'))
  assert.ok(!allowed.has('quadratische funktionen'))
  checkedAreas = ['3']
  allowed = context.computeCurriculumAllowedSet()
  assert.ok(allowed.has('lineare funktionen'))
  cards = [
    card('prerequisite', 'Potenzen', 'Aufgabe_0001.md'),
    card('current', 'Lineare Funktionen', 'Aufgabe_0002.md'),
    card('future', 'Lineare Funktionen|Quadratische Funktionen', 'Aufgabe_0003.md'),
  ]
  assert.deepEqual(ids(context.getCurriculumCandidateCards(allowed, [], [])), ['prerequisite', 'current'])
  assert.deepEqual(ids(context.getCurriculumCandidateCards(allowed, ['Lineare Funktionen'], [])), ['current'])
  assert.deepEqual(ids(context.getCurriculumCandidateCards(allowed, [], ['Potenzen'])), ['current'])
  controls.courseBundeslandSelect = 'anderes'
  assert.equal(context.computeCurriculumAllowedSet(), null)
  assert.equal(context.schulliaResolveClassKey('oberschule', '8', 'hs', ''), '8HS')
  assert.equal(context.schulliaResolveClassKey('oberschule', '8', 'rs', ''), '8RS')
  assert.equal(context.schulliaResolveClassKey('gymnasium', '12', '', 'lk'), '11LK')
  assert.equal(context.schulliaResolveClassKey('bgy', '12', '', 'gk'), '12GK')

  // The real editor path must fetch only selected sources and preserve every
  // chosen body through the shared assembler; a failed source is explicit.
  cards = [card('first', 'Bruchrechnung', 'Aufgabe_0001.md'), card('second', 'Bruchrechnung', 'Aufgabe_0002.md')]
  const fetched = []
  context.fetch = async url => {
    fetched.push(url)
    return { ok: true, text: async () => '<!--\nlanguage: de\n-->\n# ' + url.split('/').pop() + '\n\n[[ 42 ]]' }
  }
  const generated = await context.buildCourseSource(['Bruchrechnung'], [], 2, 'experten', null)
  assert.equal(fetched.length, 2)
  assert.ok(generated.includes('# Aufgabe_0001.md') && generated.includes('# Aufgabe_0002.md'))
  context.fetch = async () => ({ ok: false })
  await assert.rejects(context.buildCourseSource(['Bruchrechnung'], [], 2, 'experten', null), /nicht geladen/)

  const manifest = { v: 1, urls: selected, group: 'einsteiger', themes: ['Brüche'] }
  const direct = new URL(context.buildDirectCourseUrl(manifest))
  assert.equal(direct.pathname, '/Aufgabensammlung/course.html', 'GitHub-Pages-Unterpfad erhalten')
  assert.equal(direct.search, '', 'Keine vollständigen Kursquellen in HTTP-Query übertragen')
  assert.deepEqual(JSON.parse(new URLSearchParams(direct.hash.slice(1)).get('course')), manifest)
  console.log('Kursauswahl: Themen, Ausschlüsse, Duplikate, Zielgruppen, Anzahl, Sachsen-Lehrplan und Pages-Unterpfad bestanden.')
}

main().catch(error => { console.error(error); process.exitCode = 1 })
