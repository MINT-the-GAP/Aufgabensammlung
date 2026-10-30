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
  assert.equal(generator.release, '1.0.7')
  assert.equal(generator.mathPathRelease, '0.0.20')
  assert.equal(
    generator.mathPathImport,
    'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md?v=0.0.20'
  )
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
    allowedThemes: ['Addition', 'Bruchrechnung'],
    curriculumThemes: ['Addition', 'Subtraktion', 'Dreiecke'],
  }).length, 6)

  const learningContextTasks = [
    task(101, ['Addition', 'Grundrechenarten'], 1, 1, 'berechnen'),
    task(102, ['Addition', 'Grundrechenarten'], 2, 1, 'berechnen'),
    task(103, ['Addition'], 1, 1, 'berechnen'),
    task(104, ['Addition'], 2, 1, 'berechnen'),
    task(105, ['Addition', 'Negative Zahlen'], 1, 1, 'berechnen'),
    task(106, ['Addition', 'Bruchrechnung'], 1, 1, 'berechnen'),
    task(107, ['Addition', 'Dezimalzahlen'], 1, 1, 'berechnen'),
  ]
  const learningContextCatalog = {
    schema: generator.catalogSchema,
    version: generator.catalogVersion,
    tasks: learningContextTasks,
  }
  const curriculumThemes = Array.from(new Set(
    learningContextTasks.flatMap(item => item.topics)
  ))
  const safeContextRequest = {
    themes: ['Addition'],
    allowedThemes: ['Addition', 'Grundrechenarten'],
    curriculumThemes,
  }
  assert.deepEqual(
    generator.filterTasks(learningContextCatalog, safeContextRequest).map(item => item.id),
    learningContextTasks.slice(0, 4).map(item => item.id)
  )
  assert.throws(
    () => generator.selectTasks(learningContextCatalog, {
      ...safeContextRequest, count: 5, group: 'einsteiger', strictCount: true,
    }),
    error => error.code === 'INSUFFICIENT_TASKS' && error.details.available === 4
  )
  assert.ok(generator.selectTasks(learningContextCatalog, {
    ...safeContextRequest, count: 4, group: 'einsteiger', strictCount: true, seed: 'context',
  }).every(item => !item.topics.includes('Negative Zahlen') &&
    !item.topics.includes('Bruchrechnung') && !item.topics.includes('Dezimalzahlen')))

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
    grade: 7,
    schoolType: 'gymnasium',
    urls: generated.tasks.map(item => item.url),
  }
  const options = generator.learningPathSourceOptions(manifest)
  assert.deepEqual(options.header, ['lernpfad-level: Experte'])
  assert.equal(options.mode, 'Presentation')
  assert.deepEqual(options.imports, [generator.mathPathImport])
  assert.deepEqual(options.tags, ['Mathematik', 'Klasse 7', 'Gymnasium'])
  const tutorialUrl = 'https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/00_00_00_Tutorial.md'
  const fourSpacers = ['---', '---', '---', '---'].join('\n\n')
  const weeklyTutorialBlock = fourSpacers + '\n\n> [!CAUTION]\n> <h2>[Tutorial öffnen](' + tutorialUrl + ')</h2>\n\n' + fourSpacers
  const offerIntros = [
    [
      'schwaechen-ueben',
      'Grundlagen wiederholen',
      'wichtige Grundlagen noch einmal wiederholen und festigen',
      'Wiederhole wichtige Grundlagen zum Thema „Bruchrechnung“ und festige Inhalte, bei denen du noch unsicher bist.',
    ],
    [
      'weitere-uebungen',
      'Weitere Übungen',
      'auf deinem bisherigen Schwierigkeitsniveau',
      'Übe das Thema „Bruchrechnung“ auf deinem bisherigen Niveau weiter und gewinne mehr Sicherheit.',
    ],
    [
      'vertiefungen',
      'Vertiefungen',
      'auf der nächsten Schwierigkeitsstufe',
      'Stelle dich neuen Herausforderungen und vertiefe das Thema „Bruchrechnung“ auf der nächsten Schwierigkeitsstufe.',
    ],
  ]
  for (const [offer, label, excerpt, comment] of offerIntros) {
    const sourceOptions = generator.learningPathSourceOptions({ ...manifest, offer })
    assert.equal(sourceOptions.title, label + ': Bruchrechnung')
    assert.equal(sourceOptions.comment, comment)
    assert.match(sourceOptions.prependBody, new RegExp(excerpt))
    assert.equal((sourceOptions.prependBody.match(/^---$/gm) || []).length, 8)
    assert.equal((sourceOptions.prependBody.match(/\[Tutorial öffnen\]\(/g) || []).length, 1)
    assert.ok(sourceOptions.prependBody.includes('> [!CAUTION]\n> <h2>[Tutorial öffnen](' + tutorialUrl + ')</h2>'))
    assert.ok(sourceOptions.prependBody.includes('nutzt die Schrifterkennung'))
    assert.ok(sourceOptions.prependBody.includes('Viel Erfolg!'))
    assert.ok(!sourceOptions.prependBody.includes('wenn du Fragen oder Ideen hast, melde dich einfach bei mir'))
    assert.ok(sourceOptions.prependBody.endsWith(weeklyTutorialBlock))
  }
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
  const mathPathImport = generator.mathPathImport
  const inheritedMathPathImports = [
    'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md',
    'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/master/README.md?v=0.0.17',
    'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/tags/0.0.16/README.md',
  ]
  const firstDetails = '@ADetails(`BE=0;Bruchrechnung, Terme`)'
  const secondDetails = '@ADetails(`BE=0.5;Bruchrechnung, Addition`)'
  const firstBody = '## Nullpunkte\n\n[[ 0 ]]\n\n' + firstDetails + '\n\n[[?]] @Explain'
  const secondBody = '## Teilpunkte\n\n[[ 0.5 ]]\n\n' + secondDetails + '\n\n[[?]] @Explain'
  const sharedDocuments = [
    {
      url: tasks[0].url,
      content: '<!--\nlanguage: de\nmode: Presentation\ncomment: Erste technische Aufgabenbeschreibung\nimport: ' + sharedImport + '\nimport: ' + inheritedMathPathImports[0] +
        '\nimport: ' + inheritedMathPathImports[1] +
        '\nimport: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md\n-->\n\n' +
        firstBody,
    },
    {
      url: tasks[1].url,
      content: '<!--\nlanguage: de\nmode: Presentation\ncomment: Zweite technische Aufgabenbeschreibung\nimport: ' + sharedImport + '\nimport: ' + inheritedMathPathImports[2] +
        '\nimport: ' + mathPathImport +
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
  assert.deepEqual(
    sharedHeader.split('\n').filter(line => /^import: .*lia-mathpath.*README\.md/i.test(line)),
    ['import: ' + mathPathImport]
  )
  assert.ok(!/lia-freeze|FreezeREADME/i.test(sharedHeader))
  assert.equal((sharedHeader.match(/^lernpfad-level: Fortgeschritten$/gm) || []).length, 1)
  assert.equal((sharedHeader.match(/^mode: Presentation$/gm) || []).length, 1)
  assert.match(sharedHeader, /^tags: .*Mathematik/m)
  assert.deepEqual(
    sharedHeader.split('\n').filter(line => /^comment:/i.test(line)),
    ['comment: Übe das Thema „Bruchrechnung“ auf deinem bisherigen Niveau weiter und gewinne mehr Sicherheit.']
  )
  assert.ok(!/technische Aufgabenbeschreibung/.test(sharedHeader))
  assert.ok(!/^mode: Textbook$/m.test(sharedHeader))
  assert.ok(sharedSource.includes(firstBody), 'Backticks, Komma-Tags und BE=0 bytegetreu erhalten')
  assert.ok(sharedSource.includes(secondBody), 'Backticks, Komma-Tags und Teilpunkte bytegetreu erhalten')
  assert.equal((sharedSource.match(/\[\[\?\]\] @Explain/g) || []).length, 2)
  assert.equal((sharedSource.match(/^@Lernpfad\s*$/gm) || []).length, 1)
  const firstTaskOffset = sharedSource.indexOf(firstBody)
  assert.ok(firstTaskOffset > sharedSource.indexOf('Hier findest du vier weitere Aufgaben'))
  assert.ok(firstTaskOffset > sharedSource.indexOf('[Tutorial öffnen](' + tutorialUrl + ')'))
  assert.equal((sharedSource.slice(0, firstTaskOffset).match(/^---$/gm) || []).length, 8)
  assert.ok(sharedSource.trim().endsWith('# Dein weiterer Lernpfad\n\n@Lernpfad'))

  await assert.rejects(
    generator.loadDocuments([tasks[0]], { fetch: async () => ({ ok: false, status: 503 }) }),
    error => error.code === 'FETCH_FAILED'
  )
  console.log('Gemeinsamer Kursgenerator: Katalog, Filter, Profile, Seed, Build und Fehler bestanden.')
}

main().catch(error => { console.error(error); process.exitCode = 1 })
