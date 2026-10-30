const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const generator = require('../assets/course-generator.js')
const catalog = require('../assets/course-catalog.js')
const json = require('../assets/course-catalog.json')

const root = path.resolve(__dirname, '..')

function localPath(url) {
  const parsed = new URL(url)
  const relative = decodeURIComponent(parsed.pathname).replace(
    /^\/MINT-the-GAP\/Aufgabensammlung\/(?:refs\/heads\/)?main\//,
    ''
  )
  const target = path.resolve(root, relative.replace(/\//g, path.sep))
  assert.ok(target.startsWith(root + path.sep))
  return target
}

assert.equal(generator.validateCatalog(catalog), catalog)
assert.deepEqual(json, catalog)
assert.ok(Object.isFrozen(catalog) && Object.isFrozen(catalog.tasks[0]))
assert.ok(catalog.tasks.length > 1200, 'Den vollständigen Aufgabenbestand veröffentlichen')
assert.equal(new Set(catalog.tasks.map(task => task.id)).size, catalog.tasks.length)
assert.equal(new Set(catalog.tasks.map(task => task.url)).size, catalog.tasks.length)

let missingTopics = 0
let missingDifficulty = 0
let missingNetwork = 0
let missingOperator = 0
for (const task of catalog.tasks) {
  assert.ok(fs.existsSync(localPath(task.url)), 'Katalogquelle fehlt: ' + task.id)
  assert.ok(!/\/Erklaerungen?\//i.test(task.id), 'Erklärungen sind keine Übungsaufgaben')
  if (!task.topics.length) missingTopics++
  if (task.difficulty === null) missingDifficulty++
  if (task.network === null) missingNetwork++
  if (!task.operator) missingOperator++
}
assert.ok(missingTopics <= 10)
assert.ok(missingDifficulty <= 10)
assert.ok(missingNetwork <= 10)
assert.ok(missingOperator <= 10)

const topics = new Map()
catalog.tasks.forEach(task => task.topics.forEach(topic => {
  const key = generator.normalizeTag(generator.canonicalTopic(topic))
  topics.set(key, Number(topics.get(key) || 0) + 1)
}))
for (const topic of ['Bruchrechnung', 'Grundrechenarten', 'Dreiecke']) {
  assert.ok(Number(topics.get(generator.normalizeTag(topic)) || 0) >= 4, topic + ' braucht mindestens vier Aufgaben')
}

const curriculumThemes = Array.from(new Set(catalog.tasks.flatMap(task => task.topics)))
const unrestrictedAddition = generator.filterTasks(catalog, { themes: ['Addition'] })
assert.ok(unrestrictedAddition.some(task =>
  task.topics.some(topic => ['negative zahlen', 'bruchrechnung', 'dezimalzahlen'].includes(generator.normalizeTag(topic)))
), 'Der reale Addition-Bestand enthält bewusst verschiedene Lernbereiche')
const basicAdditionContext = {
  themes: ['Addition'],
  allowedThemes: ['Addition', 'Grundrechenarten'],
  curriculumThemes,
}
const safeAddition = generator.filterTasks(catalog, basicAdditionContext)
assert.ok(safeAddition.length >= 4, 'Mindestens vier Addition-Aufgaben im belegten Grundlagenkontext')
assert.ok(safeAddition.every(task => task.topics.every(topic =>
  ['addition', 'grundrechenarten'].includes(generator.normalizeTag(topic))
)), 'Keine unbekannten Lernbereiche in den gefilterten Addition-Aufgaben')
for (const group of generator.groups) {
  const selected = generator.selectTasks(catalog, {
    ...basicAdditionContext, count: 4, group, strictCount: true, seed: 'grade-context-' + group,
  })
  assert.equal(selected.length, 4)
  assert.ok(selected.every(task => safeAddition.some(candidate => candidate.id === task.id)))
}

console.log(
  'Kurskatalog: ' + catalog.tasks.length + ' Quellen; fehlend Themen/Schwierigkeit/Vernetzung/Operator = ' +
  [missingTopics, missingDifficulty, missingNetwork, missingOperator].join('/')
)
