const assert = require('node:assert/strict')
const generator = require('../assets/course-generator.js')
const assembler = require('../assets/course-source.js')

const raw = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/'

function task(index, topics, difficulty, network, operator) {
  return {
    id: 'topic/Aufgabe_' + String(index).padStart(4, '0') + '.md',
    url: raw + 'topic/Aufgabe_' + String(index).padStart(4, '0') + '.md',
    title: 'Aufgabe ' + index,
    tags: topics.concat(['mittel']),
    topics,
    difficulty,
    network,
    operator,
  }
}

const tasks = Array.from({ length: 20 }, (_, index) => task(
  index + 1,
  index < 12 ? ['Bruchrechnung', index % 2 ? 'Addition' : 'Subtraktion'] : ['Dreiecke'],
  index % 5 + 1,
  Math.floor(index / 5) % 5 + 1,
  ['berechnen', 'angeben', 'ermitteln_bestimmen'][index % 3]
))
const catalog = {
  schema: generator.catalogSchema,
  version: generator.catalogVersion,
  tasks,
}

async function main() {
  assert.equal(generator.schema, 'schullia-course-generator')
  assert.equal(generator.version, 1)
  assert.equal(generator.release, '1.0.3')
  assert.equal(generator.validateCatalog(catalog), catalog)
  assert.throws(
    () => generator.validateCatalog({ ...catalog, version: 2 }),
    error => error.code === 'INVALID_CATALOG'
  )
  const classified = generator.classifyTags([
    'Brüche', 'sehr leicht', 'sehr niedrig', 'Bestimme', 'Dreieck',
  ])
  assert.deepEqual(classified.topics, ['Bruchrechnung', 'Dreiecke'])
  assert.equal(classified.difficulty, 1)
  assert.equal(classified.network, 1)
  assert.equal(classified.operator, 'ermitteln_bestimmen')

  assert.equal(generator.filterTasks(catalog, { themes: ['Brüche'] }).length, 12)
  assert.equal(generator.filterTasks(catalog, {
    themes: ['Bruchrechnung'],
    blockedThemes: ['Addition'],
  }).length, 6)
  assert.equal(generator.filterTasks(catalog, {
    allowedThemes: ['Addition'],
    curriculumThemes: ['Addition', 'Subtraktion', 'Dreiecke'],
  }).length, 6)

  for (const group of generator.groups) {
    const selected = generator.selectTasks(catalog, {
      themes: ['Bruchrechnung'],
      count: 4,
      group,
      strictCount: true,
      seed: 'same-seed',
    })
    assert.equal(selected.length, 4)
    assert.equal(new Set(selected.map(item => item.url)).size, 4)
    const repeat = generator.selectTasks(catalog, {
      themes: ['Bruchrechnung'],
      count: 4,
      group,
      strictCount: true,
      seed: 'same-seed',
    })
    assert.deepEqual(repeat.map(item => item.id), selected.map(item => item.id))
    assert.deepEqual(
      selected.map(item => item.difficulty),
      selected.map(item => item.difficulty).slice().sort((a, b) => a - b)
    )
  }
  assert.throws(
    () => generator.selectTasks(catalog, {
      themes: ['Dreiecke'], count: 9, group: 'experten', strictCount: true,
    }),
    error => error.code === 'INSUFFICIENT_TASKS' && error.details.available === 8
  )
  assert.throws(
    () => generator.selectTasks(catalog, { themes: ['Unbekannt'], count: 4 }),
    error => error.code === 'NO_TASKS'
  )

  const sourceByUrl = new Map(tasks.map(item => [
    item.url,
    '<!--\nlanguage: de\n-->\n# ' + item.title + '\n\n[[ ' + item.difficulty + ' ]]',
  ]))
  const fetched = []
  const fetch = async url => {
    fetched.push(url)
    return sourceByUrl.has(url)
      ? { ok: true, text: async () => sourceByUrl.get(url) }
      : { ok: false, status: 404 }
  }
  const generated = await generator.generate(catalog, {
    themes: ['Bruchrechnung'],
    count: 4,
    group: 'einsteiger',
    strictCount: true,
    seed: 'build-seed',
  }, {
    fetch,
    assembler,
    sourceOptions: { edit: false },
  })
  assert.equal(generated.tasks.length, 4)
  assert.equal(generated.documents.length, 4)
  assert.equal(fetched.length, 4)
  assert.match(generated.source, /^<!--/)
  assert.match(generated.source, /^edit: false$/m)

  const manifest = {
    v: 1,
    kind: 'lernpfad',
    offer: 'vertiefungen',
    topic: 'Bruchrechnung',
    level: 'experten',
    urls: generated.tasks.map(item => item.url),
  }
  const options = generator.learningPathSourceOptions(manifest)
  assert.deepEqual(options.header, ['lernpfad-level: Experte'])
  assert.equal(options.mode, 'Presentation')
  assert.equal(options.resourceFilter('import', 'https://example.org/template.md'), true)
  assert.equal(
    options.resourceFilter('import', 'https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md'),
    false
  )
  const direct = new URL(generator.buildDirectCourseUrl(
    'https://mint-the-gap.github.io/Aufgabensammlung/index.html',
    manifest
  ))
  assert.equal(direct.pathname, '/Aufgabensammlung/course.html')
  assert.equal(direct.searchParams.get('v'), generator.release)
  assert.deepEqual(JSON.parse(new URLSearchParams(direct.hash.slice(1)).get('course')), manifest)

  const sharedImport = 'https://example.org/shared-template.md'
  const mathPathImport = 'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md'
  const firstDetails = '@ADetails(`BE=0;Bruchrechnung, Terme`)'
  const secondDetails = '@ADetails(`BE=0.5;Bruchrechnung, Addition`)'
  const firstBody = '## Nullpunkte\n\n[[ 0 ]]\n\n' + firstDetails + '\n\n[[?]] @Explain'
  const secondBody = '## Teilpunkte\n\n[[ 0.5 ]]\n\n' + secondDetails + '\n\n[[?]] @Explain'
  const sharedDocuments = [
    {
      url: tasks[0].url,
      content: '<!--\nlanguage: de\nmode: Presentation\nimport: ' + sharedImport + '\nimport: ' + mathPathImport +
        '\nimport: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md\n-->\n\n' +
        firstBody,
    },
    {
      url: tasks[1].url,
      content: '<!--\nlanguage: de\nmode: Presentation\nimport: ' + sharedImport + '\nimport: ' + mathPathImport +
        '\nimport: https://raw.githubusercontent.com/MINT-the-GAP/Freeze/main/FreezeREADME.md\n-->\n\n' +
        secondBody,
    },
  ]
  const sharedSource = generator.buildCourse(sharedDocuments, {
    assembler,
    sourceOptions: generator.learningPathSourceOptions({
      offer: 'weitere-uebungen',
      topic: 'Bruchrechnung',
      level: 'fortgeschrittene',
    }),
  })
  const sharedHeader = assembler.split(sharedSource).header
  assert.equal((sharedHeader.match(new RegExp('^import: ' + sharedImport + '$', 'gm')) || []).length, 1)
  assert.equal((sharedHeader.match(new RegExp('^import: ' + mathPathImport + '$', 'gm')) || []).length, 1)
  assert.ok(!/lia-freeze|FreezeREADME/i.test(sharedHeader))
  assert.equal((sharedHeader.match(/^lernpfad-level: Fortgeschritten$/gm) || []).length, 1)
  assert.equal((sharedHeader.match(/^mode: Presentation$/gm) || []).length, 1)
  assert.ok(!/^mode: Textbook$/m.test(sharedHeader))
  assert.ok(sharedSource.includes(firstBody), 'Backticks, Komma-Tags und BE=0 bytegetreu erhalten')
  assert.ok(sharedSource.includes(secondBody), 'Backticks, Komma-Tags und Teilpunkte bytegetreu erhalten')
  assert.equal((sharedSource.match(/\[\[\?\]\] @Explain/g) || []).length, 2)
  assert.equal((sharedSource.match(/^@Lernpfad\s*$/gm) || []).length, 1)
  assert.ok(sharedSource.trim().endsWith('# Dein weiterer Lernpfad\n\n@Lernpfad'))

  await assert.rejects(
    generator.loadDocuments([tasks[0]], { fetch: async () => ({ ok: false, status: 503 }) }),
    error => error.code === 'FETCH_FAILED'
  )
  console.log('Gemeinsamer Kursgenerator: Katalog, Filter, Profile, Seed, Build und Fehler bestanden.')
}

main().catch(error => { console.error(error); process.exitCode = 1 })
