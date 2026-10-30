const assert = require('node:assert/strict')
const path = require('node:path')
const generator = require('../assets/course-generator.js')
const catalog = require('../assets/course-catalog.js')
const {
  buildSachsenCurriculum,
  resolveClassRange,
} = require('../scripts/sachsen-curriculum.cjs')

const root = path.resolve(__dirname, '..')
const fromSource = buildSachsenCurriculum(path.join(root, 'Lehrplan.md'))

assert.deepEqual(catalog.curriculum, fromSource, 'Der Katalog muss direkt aus Lehrplan.md gebaut sein')
assert.equal(catalog.curriculum.schema, 'schullia-sachsen-curriculum')
assert.equal(catalog.curriculum.version, 1)
assert.equal(catalog.curriculum.jurisdiction, 'DE-SN')
assert.ok(Object.isFrozen(catalog.curriculum) && Object.isFrozen(catalog.curriculum.themes))
assert.deepEqual(resolveClassRange('11/12 LK'), { startGrade: 11, endGrade: 12 })
assert.deepEqual(catalog.curriculum.classRanges.bgy['12GK'], { startGrade: 12, endGrade: 13 })

function context(observedThemes, options) {
  return generator.deriveCurriculumContext(catalog, {
    observedThemes,
    ...(options || {}),
  })
}

function keys(themes) {
  return new Set(themes.map(generator.normalizeTag))
}

let result = context(['Addition'])
assert.equal(result.grade, 5)
assert.equal(result.gradeSource, 'themes')
assert.deepEqual(result.priorThemes, [])
assert.deepEqual(result.allowedThemes, ['Addition'])

result = context(['Bruchrechnung'])
assert.equal(
  result.grade,
  5,
  'Ohne Schulart gilt die fruehestmoegliche Einfuehrung (Oberschule 5 statt Gymnasium 6)'
)
assert.deepEqual(result.priorThemes, [], 'Andere Themen derselben Klassenstufe sind nicht automatisch bekannt')

result = context(['Negative Zahlen'])
let prior = keys(result.priorThemes)
assert.equal(result.grade, 7)
for (const theme of ['Addition', 'Bruchrechnung', 'Dezimalzahlen']) {
  assert.ok(prior.has(generator.normalizeTag(theme)), theme + ' muss vor Klasse 7 in allen plausiblen Pfaden liegen')
}
assert.ok(!prior.has(generator.normalizeTag('Algebra')), 'Ein Thema aus Klasse 7 ist noch kein Vorkenntnis')

result = context(['Addition'], { grade: 6 })
prior = keys(result.priorThemes)
assert.ok(prior.has('dezimalzahlen'))
assert.ok(!prior.has('bruchrechnung'), 'Bruchrechnung liegt im Gymnasium erst in Klasse 6')
assert.ok(!prior.has('negative zahlen'))

result = context(['Addition'], { grade: 7 })
prior = keys(result.priorThemes)
assert.ok(prior.has('bruchrechnung'), 'Bruchrechnung liegt in beiden plausiblen Pfaden vor Klasse 7')
assert.ok(!prior.has('negative zahlen'))

result = context(['Addition'], { grade: 6, schoolType: 'Oberschule' })
assert.equal(result.schoolType, 'oberschule')
assert.ok(keys(result.priorThemes).has('bruchrechnung'), 'Mit expliziter Oberschule gilt deren eigener Pfad')

result = context(['Addition'], { grade: 9, schoolType: 'Oberschule' })
assert.ok(
  !keys(result.priorThemes).has('baumdiagramm'),
  'Ein nur im RS-Zweig belegtes Thema ist bei unbekanntem Oberschulzweig kein sicheres Vorwissen'
)

result = context(['Addition'], { grade: 6, schoolType: 'Gymnasium' })
assert.equal(result.schoolType, 'gymnasium')
assert.ok(!keys(result.priorThemes).has('bruchrechnung'), 'Im Gymnasium ist Bruchrechnung in Klasse 6 noch aktuell')

result = context(['Ableitungen'], { schoolType: 'Berufliches Gymnasium' })
assert.equal(result.schoolType, 'bgy')
assert.equal(result.grade, 12)
prior = keys(result.priorThemes)
assert.ok(prior.has('logarithmen'), 'Der BGY-Pfad nimmt BGY-Themen frueherer Jahrgaenge auf')
assert.ok(prior.has('addition'), 'Der BGY-Pfad nimmt Oberschul-Voraussetzungen auf')

result = context(['Addition'], { grade: 13, schoolType: 'bgy' })
assert.ok(
  !keys(result.priorThemes).has('ableitungen'),
  'Ein Thema aus 12/13 ist auch in Klasse 13 noch nicht sicher abgeschlossen'
)

result = context(['Negative Zahlen'], { grade: 5 })
assert.equal(result.grade, 5)
assert.equal(result.gradeSource, 'explicit')
assert.deepEqual(result.priorThemes, [])
assert.deepEqual(result.allowedThemes, ['Negative Zahlen'], 'Beobachtete Themen bleiben trotz Klassenkonflikt erlaubt')
assert.deepEqual(result.gradeConflicts, ['Negative Zahlen'])

result = context(['Nicht im Lehrplan'])
assert.equal(result.grade, null)
assert.equal(result.gradeSource, 'unavailable')
assert.deepEqual(result.priorThemes, [])
assert.deepEqual(result.allowedThemes, ['Nicht im Lehrplan'])
assert.deepEqual(result.unmappedObservedThemes, ['Nicht im Lehrplan'])

result = context(['Vierfeldertafeln'])
assert.equal(result.grade, null, 'Ein nur im BGY belegtes Thema darf ohne Schulart keine Klasse freischalten')
assert.deepEqual(result.priorThemes, [])
assert.deepEqual(result.unmappedObservedThemes, ['Vierfeldertafeln'])

const addition = context(['Addition'])
const safeAddition = generator.filterTasks(catalog, {
  themes: ['Addition'],
  allowedThemes: addition.allowedThemes,
  curriculumThemes: addition.curriculumThemes,
})
assert.ok(safeAddition.length >= 4)
assert.ok(safeAddition.every(task => task.topics.every(topic =>
  keys(addition.allowedThemes).has(generator.normalizeTag(generator.canonicalTopic(topic)))
)), 'Unbeobachtete aktuelle, spaetere und unbekannte Katalog-Tags bleiben ausgeschlossen')

const synthetic = {
  schema: generator.catalogSchema,
  version: generator.catalogVersion,
  curriculum: catalog.curriculum,
  tasks: [{
    id: 'synthetic/Aufgabe_0001.md',
    url: 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/synthetic/Aufgabe_0001.md',
    title: 'Unbekanntes Co-Tag',
    tags: ['Addition', 'Nicht katalogisiert'],
    topics: ['Addition', 'Nicht katalogisiert'],
    difficulty: 1,
    network: 1,
    operator: 'berechnen',
  }],
}
assert.equal(generator.filterTasks(synthetic, {
  themes: ['Addition'],
  allowedThemes: ['Addition'],
  curriculumThemes: ['Addition'],
}).length, 0, 'Auch unbekannte Co-Tags muessen explizit erlaubt sein')
assert.equal(generator.filterTasks(synthetic, {
  themes: ['Addition'],
  allowedThemes: ['Addition', 'Nicht katalogisiert'],
  curriculumThemes: ['Addition'],
}).length, 1, 'Ein beobachtetes unbekanntes Tag bleibt explizit erlaubt')

assert.throws(
  () => generator.validateCurriculum({ ...catalog.curriculum, version: 2 }),
  error => error.code === 'INVALID_CURRICULUM'
)
assert.throws(
  () => generator.deriveCurriculumContext({
    schema: generator.catalogSchema,
    version: generator.catalogVersion,
    tasks: catalog.tasks,
  }, { observedThemes: ['Addition'] }),
  error => error.code === 'CURRICULUM_MISSING'
)

console.log('Lehrplankontext: Quelle, Klassenfloor, Schulpfade, Vorkenntnisse und Konflikte bestanden.')
