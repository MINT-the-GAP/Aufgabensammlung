const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const assembler = require('../assets/course-source.js')
const root = path.resolve(__dirname, '..')
const prefix = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/'
const yaml = fs.readFileSync(path.join(root, 'project.yml'), 'utf8')
const urls = Array.from(new Set(Array.from(yaml.matchAll(/^\s*-\s+url:\s*(\S+)\s*$/gm), match => match[1])
  .filter(url => /\/Aufgabe_[^/]+\.md$/.test(url))))
assert.ok(urls.length > 1000, 'Den tatsächlichen Aufgabenbestand prüfen')

function localPath(url) {
  const parsed = new URL(url)
  assert.equal(parsed.hostname, 'raw.githubusercontent.com')
  const relative = decodeURIComponent(parsed.pathname.replace(/^\/MINT-the-GAP\/Aufgabensammlung\/(?:refs\/heads\/)?main\//, ''))
  const target = path.resolve(root, relative)
  assert.ok(target.startsWith(root + path.sep), 'Aufgabenquelle muss im Repository liegen')
  return target
}

const directoryEntries = new Map()
function existsWithExactCase(file) {
  let current = root
  for (const part of path.relative(root, file).split(path.sep)) {
    if (!directoryEntries.has(current)) directoryEntries.set(current, new Set(fs.readdirSync(current)))
    if (!directoryEntries.get(current).has(part)) return false
    current = path.join(current, part)
  }
  return true
}

const documents = urls.map(url => ({ url, content: fs.readFileSync(localPath(url), 'utf8') }))
let checkedResources = 0
for (const document of documents) {
  const built = assembler.build([document], { edit: false })
  assert.match(assembler.split(built).header, /^edit: false$/m)
  for (const match of built.matchAll(/https:\/\/raw\.githubusercontent\.com\/MINT-the-GAP\/Aufgabensammlung\/(?:refs\/heads\/)?main\/[^\s"'<>)]*/g)) {
    const url = match[0].replace(/[;`,]+$/, '')
    if (/[${}]/.test(url)) continue // No invented values for runtime-generated links.
    const file = localPath(url)
    if (!/\.(png|jpe?g|svg|gif|webp|mp[34]|ogg|js|css|md)$/i.test(file)) continue
    assert.ok(existsWithExactCase(file), 'Ressource fehlt oder hat falsche Groß-/Kleinschreibung: ' + path.relative(root, file) + ' aus ' + document.url)
    checkedResources++
  }
}

// The three real image tasks previously pointed to a nonexistent adjacent
// Kap2 folder. Check the corrected source and the generated absolute URL.
for (const [number, letters] of [['0005', ['a', 'd', 'g']], ['0006', ['b', 'e', 'h']], ['0007', ['c', 'f', 'i']]]) {
  const url = prefix + '01_Algebraische_Grundlagen/12_Aequivalenzumformung/Aufgabe_' + number + '.md'
  const document = documents.find(document => document.url === url)
  assert.ok(document)
  const course = assembler.build([document])
  for (const letter of letters) {
    const target = 'Repetitorium/Kap2/waage1' + letter + '.png'
    assert.ok(document.content.includes('../../' + target))
    assert.ok(course.includes(prefix + target), 'Waagebild muss relativ zur Aufgabendatei korrekt aufgelöst sein')
  }
}

// Combining the full catalog exercises all authored header variants together
// without running any generated mathematical scripts.
const combined = assembler.build(documents, { edit: false })
assert.ok(combined.length > 1000000)
assert.equal((assembler.split(combined).header.match(/^language:/gm) || []).length, 1)
assert.equal((assembler.split(combined).header.match(/^edit:/gm) || []).length, 1)

const coordinateBase = 'https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/'
function coordinateDocument(template, number) {
  return { url: prefix + 'Aufgabe_' + number + '.md', content: '<!--\nimport: ' + template + '\n-->\n# Koordinaten ' + number + '\n\n@Koordinatensystem(`static=1`)\n' }
}
const staticCourse = coordinateDocument(coordinateBase + 'refs/heads/main/README.static.md', 1)
const normalCourse = coordinateDocument(coordinateBase + 'main/README.md', 2)
const staticOnly = assembler.build([staticCourse])
assert.ok(staticOnly.includes('README.static.md'), 'Reine statische Kurse behalten das leichte Template')
for (const mixed of [[staticCourse, normalCourse], [normalCourse, staticCourse]]) {
  const merged = assembler.build(mixed)
  assert.ok(merged.includes(coordinateBase + 'main/README.md'))
  assert.ok(!merged.includes('README.static.md'), 'Statische und interaktive Makrodefinitionen nicht gemeinsam importieren')
  assert.equal((merged.match(/@Koordinatensystem/g) || []).length, 2, 'Aufgabeninhalt und static=1 erhalten')
}
assert.throws(() => assembler.build([
  staticCourse,
  coordinateDocument(coordinateBase + '0.0.4/README.md', 3),
]), /unterschiedliche Versionen/, 'Verschiedene Versionen nicht stillschweigend überschreiben')
assert.ok(!assembler.split(combined).header.includes('README.static.md'))

for (const relative of [
  '06_Stochastik/02_Baumdiagramme/Aufgabe_0001.md',
  '06_Stochastik/05_Hypergeometrische_Verteilung/Aufgabe_0001.md',
]) {
  const original = fs.readFileSync(path.join(root, relative), 'utf8').replace(/\r\n?/g, '\n')
  const style = original.match(/@style\n([\s\S]*?)\n@end/)
  assert.ok(style && combined.includes(style[1].trim()), 'Jeden vollständigen realen CSS-Block beim Zusammenführen erhalten')
}
for (const relative of [
  '01_Algebraische_Grundlagen/01_Grundrechenarten/Aufgabe_9900.md',
  '01_Algebraische_Grundlagen/09_Prozentrechnung/Aufgabe_9900.md',
]) {
  const original = fs.readFileSync(path.join(root, relative), 'utf8').replace(/\r\n?/g, '\n')
  for (const script of assembler.split(original).body.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)) {
    assert.ok(combined.includes(script[0]), 'Zufallsgeneratoren einschließlich ihrer JavaScript-Strings unverändert erhalten')
  }
}

console.log('Kursquellen: ' + documents.length + ' Aufgaben einzeln/gemeinsam und ' + checkedResources + ' Ressourcen mit Linux-Schreibweise bestanden.')
