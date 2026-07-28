const assert = require('assert')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const repositoryRoot = path.resolve(__dirname, '..')
const configuredIndex = process.argv[2] || process.env.SCHULLIA_INDEX_PATH || 'index.html'
const indexPath = path.resolve(configuredIndex)
const html = fs.readFileSync(indexPath, 'utf8')

function normalizeTag(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u00df/g, 'ss')
    .trim()
    .toLowerCase()
}

function occurrences(text, needle) {
  return text.split(needle).length - 1
}

function decodeHtml(value) {
  return String(value || '')
    .replace(/&quot;/g, '\x22')
    .replace(/&#39;/g, String.fromCharCode(39))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

const markerNames = [
  'SCHULLIA_CUSTOM_SCRIPT',
  'SCHULLIA_THEME',
  'SCHULLIA_NAVBAR_FIX_SCRIPT',
  'SCHULLIA_NAVBAR_FIX_STYLE',
  'SCHULLIA_CARD_DECORATION_STYLE',
  'SCHULLIA_CARD_DECORATION_SCRIPT',
  'SCHULLIA_SECTION_COLLAPSE_STYLE',
  'SCHULLIA_SECTION_COLLAPSE_SCRIPT',
  'SCHULLIA_SECTION_META_STYLE',
  'SCHULLIA_SECTION_META_SCRIPT'
]

markerNames.forEach(function (name) {
  const start = '<!-- ' + name + '_START -->'
  const end = '<!-- ' + name + '_END -->'
  assert.strictEqual(occurrences(html, start), 1, start + ' muss genau einmal vorkommen')
  assert.strictEqual(occurrences(html, end), 1, end + ' muss genau einmal vorkommen')
})

const requiredFeatures = [
  'function setupCustomDropdownKeyboard',
  'function syncCategoryDropdownFromCards',
  'function operatorOverflowPenalty',
  'preferredMax: preferredMax',
  'Math.floor(rule.min * total + 1e-9)',
  'Math.ceil(rule.max * total - 1e-9)',
  'berechne',
  'skizziere'
]

requiredFeatures.forEach(function (feature) {
  assert.ok(html.includes(feature), 'Erwartete Build-Funktion fehlt: ' + feature)
})

const categorySelectMatch = html.match(/<select\b(?=[^>]*\bid=(?:'categorySelect'|\x22categorySelect\x22))[^>]*>([\s\S]*?)<\/select>/i)
assert.ok(categorySelectMatch, 'categorySelect fehlt')

const optionValues = []
const optionPattern = /<option\b[^>]*\bvalue=(?:'([^']*)'|\x22([^\x22]*)\x22)[^>]*>[\s\S]*?<\/option>/gi
let optionMatch
while ((optionMatch = optionPattern.exec(categorySelectMatch[1])) !== null) {
  optionValues.push(decodeHtml(optionMatch[1] === undefined ? optionMatch[2] : optionMatch[1]))
}

const normalizedOptions = optionValues.map(normalizeTag).filter(Boolean)
assert.ok(!normalizedOptions.includes('dreieck'), 'Veraltete Themenoption dreieck gefunden')
assert.strictEqual(normalizedOptions.filter(function (value) { return value === 'dreiecke' }).length, 1, 'Dreiecke muss genau einmal in der Themenauswahl stehen')
assert.strictEqual(new Set(normalizedOptions).size, normalizedOptions.length, 'Doppelte normalisierte Themenoptionen gefunden')

const categoryAttributes = []
const categoryPattern = /data-category=(?:'([^']*)'|\x22([^\x22]*)\x22)/gi
let categoryMatch
while ((categoryMatch = categoryPattern.exec(html)) !== null) {
  categoryAttributes.push(decodeHtml(categoryMatch[1] === undefined ? categoryMatch[2] : categoryMatch[1]))
}

const triangleCards = categoryAttributes.filter(function (value) {
  return value.split('|').map(normalizeTag).includes('dreiecke')
})
assert.ok(triangleCards.length > 0, 'Keine Karten zum Thema Dreiecke gefunden')
assert.ok(categoryAttributes.every(function (value) {
  return !value.split('|').map(normalizeTag).includes('dreieck')
}), 'Veraltetes Karten-Tag dreieck gefunden')

const triangleOperatorTags = new Set()
const knownOperators = new Set([
  'angeben', 'zeichnen', 'skizzieren', 'beschreiben', 'erklaren', 'begrunden',
  'berechnen', 'bestimmen', 'ermitteln', 'beurteilen', 'bewerten', 'analysieren'
])
triangleCards.forEach(function (value) {
  value.split('|').map(normalizeTag).forEach(function (tag) {
    if (knownOperators.has(tag)) triangleOperatorTags.add(tag)
  })
})
assert.ok(triangleOperatorTags.has('angeben'), 'Dreiecke-Pool enthaelt kein Angeben')
assert.ok(Array.from(triangleOperatorTags).some(function (tag) { return tag !== 'angeben' }), 'Dreiecke-Pool enthaelt nur Angeben')

function integerBounds(minShare, maxShare, total, available) {
  let min = Math.min(available, Math.floor(minShare * total + 1e-9))
  const max = Math.min(available, Math.ceil(maxShare * total - 1e-9))
  if (max < min) min = max
  return { min: min, max: max }
}

assert.deepStrictEqual(integerBounds(0.05, 0.15, 5, 99), { min: 0, max: 1 })
assert.deepStrictEqual(integerBounds(0.05, 0.15, 20, 99), { min: 1, max: 3 })

function preferredTarget(minShare, maxShare, total, min, max, available, randomValue) {
  const exact = ((minShare + maxShare) / 2) * total
  const base = Math.floor(exact)
  const rounded = base + (randomValue < exact - base ? 1 : 0)
  return Math.max(min, Math.min(max, available, rounded))
}

assert.strictEqual(preferredTarget(0.05, 0.15, 5, 0, 1, 99, 0.25), 1)
assert.strictEqual(preferredTarget(0.05, 0.15, 5, 0, 1, 99, 0.75), 0)

const projectYaml = fs.readFileSync(path.join(repositoryRoot, 'project.yml'), 'utf8')
const urls = Array.from(projectYaml.matchAll(/^\s*-\s+url:\s*(.+?)\s*$/gm), function (match) { return match[1] })
const duplicateUrls = urls.filter(function (url, index) { return urls.indexOf(url) !== index })
assert.deepStrictEqual(duplicateUrls, [], 'Doppelte URLs in project.yml: ' + duplicateUrls.join(', '))

const deployWorkflow = fs.readFileSync(path.join(repositoryRoot, '.github', 'workflows', 'deploy.yaml'), 'utf8')
;[
  'actions/setup-node@v4',
  '--output $RUNNER_TEMP/schullia-site/index',
  'SCHULLIA_INDEX_PATH: ${{ runner.temp }}/schullia-site/index.html',
  'SCHULLIA_TEMPLATE_PATH: ${{ github.workspace }}/index.html',
  'node scripts/test-site.js $SCHULLIA_INDEX_PATH',
  'force_orphan: true'
].forEach(function (entry) {
  assert.ok(deployWorkflow.includes(entry), 'Deploy-Absicherung fehlt: ' + entry)
})
assert.ok(!deployWorkflow.includes('cp index.html ziel.html'), 'Deploy darf index.html nicht mehr nach ziel.html kopieren')

const lehrplan = fs.readFileSync(path.join(repositoryRoot, 'Lehrplan.md'), 'utf8')
lehrplan.split(/\r?\n/).forEach(function (line) {
  if (!line.trim().startsWith('|')) return
  const cells = line.split('|').slice(1, -1).map(function (cell) { return cell.trim() })
  if (cells.length < 3) return
  const themes = cells[2].split(',').map(normalizeTag)
  assert.ok(!themes.includes('dreieck'), 'Veraltetes Lehrplan-Tag dreieck gefunden')
})

let compiledScripts = 0
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi
let scriptMatch
while ((scriptMatch = scriptPattern.exec(html)) !== null) {
  const attributes = scriptMatch[1]
  if (/\bsrc\s*=/.test(attributes)) continue
  if (/application\/ld\+json/i.test(attributes)) continue
  if (/\btype\s*=\s*(?:'module'|\x22module\x22)/i.test(attributes)) continue
  new vm.Script(scriptMatch[2], { filename: path.basename(indexPath) + ':inline-script-' + (compiledScripts + 1) })
  compiledScripts += 1
}
assert.ok(compiledScripts > 0, 'Keine eingebetteten Skripte geprueft')

console.log('Site-Pruefung erfolgreich: ' + optionValues.length + ' Themenwerte, ' + categoryAttributes.length + ' Karten, ' + compiledScripts + ' Inline-Skripte.')
