const assert = require('assert')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

// Optionale, gitignorierte Inhaltspruefungen nur auf ausdruecklichen lokalen Aufruf.
// PowerShell: $env:SCHULLIA_LOCAL_CONTENT_TESTS='1'; node scripts/test-site.js <index.html>
if (process.env.SCHULLIA_LOCAL_CONTENT_TESTS === '1') {
  const localTests = fs.readdirSync(__dirname)
    .filter(name => /^test-.*\.cjs$/.test(name) && name !== 'test-template-macros.cjs')
    .sort()
  assert.ok(localTests.length > 0, 'Keine lokalen Inhaltspruefungen vorhanden')
  localTests.forEach(name => require(path.join(__dirname, name)))
}

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

// Every own-repository URL must resolve in the checked-out push. This also
// catches a YAML entry whose new Markdown file was not included in the commit.
urls.forEach(function (url) {
  const match = url.match(/^https:\/\/raw\.githubusercontent\.com\/MINT-the-GAP\/Aufgabensammlung\/(?:refs\/heads\/)?main\/(.+)$/)
  if (!match) return
  const sourcePath = path.resolve(repositoryRoot, decodeURIComponent(match[1]))
  assert.ok(sourcePath.startsWith(repositoryRoot + path.sep), 'Kurs liegt ausserhalb des Repositorys: ' + url)
  assert.ok(fs.existsSync(sourcePath) && fs.statSync(sourcePath).isFile(), 'Kursdatei fehlt im Checkout: ' + match[1])
})

// Check actual rendered card links, not merely URLs in JSON-LD or search data.
const geometryExplanations = [
  ['02_01_01_Zahlenstrahl.md', 'Zahlenstrahl'],
  ['02_01_02_Symmetrie.md', 'Symmetrie'],
  ['02_01_03_Streckung.md', 'Streckungen und Drehungen'],
  ['02_01_04_Tangente.md', 'Tangenten und Sekanten'],
  ['02_01_05_Zirkelkonstruktion.md', 'Zirkelkonstruktionen'],
  ['02_04_01_Rechteck.md', 'Rechteck'],
  ['02_05_01_Winkel.md', 'Winkel'],
  ['02_05_02_Winkelbeziehungen.md', 'Winkelbeziehungen'],
  ['02_06_01_Dreieck.md', 'Dreieck'],
  ['02_06_02_Dreieckseigenschaften.md', 'Dreieckseigenschaften'],
  ['02_06_03_Dreieckssaetze.md', 'Dreieckssätze'],
  ['02_07_01_Aehnlichkeit.md', 'Ähnlichkeit'],
  ['02_07_02_Kongruenz.md', 'Kongruenz'],
  ['02_07_04_Strahlensatz.md', 'Strahlensatz'],
  ['02_08_01_Quadrat.md', 'Quadrat'],
  ['02_08_02_Rechteck.md', 'Rechteck'],
  ['02_08_03_Raute.md', 'Raute'],
  ['02_08_04_Parallelogramm.md', 'Parallelogramm'],
  ['02_08_05_Trapez.md', 'Trapez'],
  ['02_08_06_SymmetrischesTrapez.md', 'Symmetrisches Trapez'],
  ['02_08_07_Drachen.md', 'Drachen'],
  ['02_08_08_HausDerVierecke.md', 'Haus der Vierecke'],
  ['02_09_01_Kreis.md', 'Kreis'],
  ['02_09_02_Kreisteile.md', 'Kreisteile'],
  ['02_09_06_Kugel.md', 'Kugel'],
  ['02_10_01_Quader.md', 'Quader'],
  ['02_10_02_Prisma.md', 'Prisma'],
  ['02_10_04_Zylinder.md', 'Zylinder'],
  ['02_11_01_Pyramide.md', 'Pyramide'],
  ['02_11_02_Pyramidenstumpf.md', 'Pyramidenstumpf'],
  ['02_11_03_Spitzkoerper.md', 'Spitzkörper'],
  ['02_11_04_Kegel.md', 'Kegel'],
  ['02_11_05_Kegelstumpf.md', 'Kegelstumpf'],
  ['03_01_01_Trigonometrie.md', 'Trigonometrie'],
  ['04_00_00_Funktion.md', 'Funktion'],
  ['04_00_02_Wertetabellen.md', 'Wertetabellen'],
  ['04_00_05_Reihen.md', 'Reihen'],
  ['04_01_01_Proportional.md', 'Proportionalitäten'],
  ['04_02_01_Diagramme.md', 'Darstellungen durch Diagramme'],
  ['04_03_01_Geraden.md', 'Geraden – lineare Funktionen'],
  ['04_04_01_Stufen.md', 'Betragsfunktion und Stufenfunktionen'],
  ['04_05_01_Parabeln.md', 'Parabeln – quadratische Funktionen'],
  ['04_05_05_Verschiebungen.md', 'Verschiebungen und Parametereinflüsse'],
  ['04_05_08_Umkehrfunktion.md', 'Umkehrfunktionen'],
  ['04_06_01_Hyperbel.md', 'Hyperbeln'],
  ['04_07_01_Polynomfunktion.md', 'Polynomfunktionen'],
  ['04_08_01_Gebrochen.md', 'Gebrochen rationale Funktionen'],
  ['04_09_01_Trigono.md', 'Trigonometrische Funktionen'],
  ['04_10_01_ExpFkt.md', 'Exponentialfunktionen'],
  ['04_11_06_Grenzwert.md', 'Grenzwerte'],
  ['05_01_05_DiffQuo.md', 'Differentialquotient'],
  ['05_01_05_Taylor.md', 'Taylorentwicklung'],
  ['05_01_06_Tangenten.md', 'Tangentengleichungen'],
  ['05_01_07_Partiell.md', 'Partielle und totale Differentiation'],
  ['05_02_01_Extrem.md', 'Extrempunkte'],
  ['05_02_02_Wende.md', 'Wende- und Sattelpunkte'],
  ['05_03_01_Monotonie.md', 'Monotonie'],
  ['05_03_02_Konvex.md', 'Konvexe und konkave Funktionen'],
  ['05_04_01_Integration.md', 'Integration'],
  ['05_04_02_Integrationsregeln.md', 'Integrationsregeln'],
  ['05_04_05_OberUnterSummen.md', 'Ober- und Untersummen'],
  ['05_05_01_Kurvendiskussion.md', 'Kurvendiskussion'],
  ['05_06_01_Rekonstruktion.md', 'Rekonstruktion von Funktionen'],
  ['05_07_01_Extremwert.md', 'Extremwertaufgaben mit Nebenbedingungen'],
  ['05_08_01_Funktionsscharen.md', 'Funktionsscharen'],
  ['05_09_01_Rotation.md', 'Rotationskörper'],
  ['06_04_01_Binomial.md', 'Binomialverteilung'],
  ['06_05_01_Hypergeo.md', 'Hypergeometrische Verteilung'],
  ['06_06_01_Normal.md', 'Normalverteilung'],
  ['07_01_01_Vektor.md', 'Vektoren'],
  ['07_01_02_Vektornorm.md', 'Länge von Vektoren'],
  ['07_01_03_Skalarprodukt.md', 'Skalarprodukt'],
  ['07_01_03_Vektorprodukt.md', 'Vektorprodukt'],
  ['07_02_01_Vektorgerade.md', 'Vektorielle Geraden'],
  ['07_03_01_Ebene.md', 'Vektorielle Ebenen'],
  ['07_03_02_Formen.md', 'Wechsel von Darstellungsformen'],
  ['07_04_01_VekGeo.md', 'Vektorielle Geometrie']
]
const bodyStart = html.search(/<body\b/i)
assert.ok(bodyStart >= 0, 'HTML-Body fehlt')
const pageBody = html.slice(bodyStart)
const explanationSection = pageBody.match(/<h4\b[^>]*\bid=['"]erklaerungen['"][^>]*>/i)
const nextSection = pageBody.match(/<h4\b[^>]*\bid=['"]algebraische-grundlagen['"][^>]*>/i)
assert.ok(explanationSection && nextSection, 'Erklaerungsbereich fehlt in der erzeugten Seite')
const cardLinks = Array.from(pageBody.matchAll(/<a\b([^>]*\bhref=(['"])(.*?)\2[^>]*)>([\s\S]*?)<\/a>/gi))
  .filter(function (match) { return /\bstretched-link\b/.test(match[1]) })
let previousYamlPosition = -1
let previousCardPosition = explanationSection.index
geometryExplanations.forEach(function (entry) {
  const url = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/' + encodeURIComponent(entry[0])
  const yamlPosition = urls.indexOf(url)
  assert.ok(yamlPosition > previousYamlPosition, 'Geometrie-Erklaerung fehlt oder steht falsch in project.yml: ' + entry[0])
  previousYamlPosition = yamlPosition
  const matches = cardLinks.filter(function (match) {
    return decodeHtml(match[3]) === 'https://liascript.github.io/course/?' + url
  })
  assert.strictEqual(matches.length, 1, 'Erwartete Erklaerungskarte fehlt oder ist doppelt: ' + entry[0])
  assert.ok(matches[0].index > previousCardPosition && matches[0].index < nextSection.index, 'Falsche Kartenreihenfolge oder Rubrik: ' + entry[0])
  assert.ok(matches[0][4].includes('>' + entry[1] + '</h6>'), 'Falscher Kartentitel: ' + entry[0])
  previousCardPosition = matches[0].index
})
const triangleContentThemes = ['schwerpunkt', 'inkreis', 'umkreis', 'eulersche gerade']
const numberLineContentThemes = ['zahlenstrahl', 'intervalle']
numberLineContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Zahlenstrahlthema fehlt in der Themenauswahl: ' + theme)
})
const numberLineExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_01_01_Zahlenstrahl.md'), 'utf8')
const numberLineTagLine = numberLineExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(numberLineTagLine, 'Themen-Tags der Zahlenstrahlerklaerung fehlen')
const numberLineTags = numberLineTagLine[1].split(',').map(normalizeTag)
numberLineContentThemes.forEach(function (theme) {
  assert.ok(numberLineTags.includes(theme), 'Inhaltstag fehlt im Zahlenstrahl-Kurskopf: ' + theme)
})
const symmetryContentThemes = ['achsenspiegelung', 'punktspiegelung']
const symmetryExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_01_02_Symmetrie.md'), 'utf8')
const symmetryTagLine = symmetryExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(symmetryTagLine, 'Themen-Tags der Symmetrieerklaerung fehlen')
const symmetryTags = symmetryTagLine[1].split(',').map(normalizeTag)
symmetryContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Spiegelungsthema fehlt in der Themenauswahl: ' + theme)
  assert.ok(symmetryTags.includes(theme), 'Inhaltstag fehlt im Symmetrie-Kurskopf: ' + theme)
})
assert.ok(!symmetryTags.includes('radiale symmetrie'), 'Der kurze Ausblick darf kein zusaetzliches Lehrplanthema voraussetzen')
const transformationContentThemes = ['zentrische streckung', 'drehung']
const transformationExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_01_03_Streckung.md'), 'utf8')
const transformationTagLine = transformationExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(transformationTagLine, 'Themen-Tags der Streckungserklaerung fehlen')
const transformationTags = transformationTagLine[1].split(',').map(normalizeTag)
transformationContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Abbildungsthema fehlt in der Themenauswahl: ' + theme)
  assert.ok(transformationTags.includes(theme), 'Inhaltstag fehlt im Streckungs-Kurskopf: ' + theme)
})
const quadrilateralContentThemes = ['drachen', 'parallelogramm', 'raute', 'symmetrisches trapez', 'trapez', 'vierecke']
const tangentContentThemes = ['tangente', 'sekante']
const tangentExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_01_04_Tangente.md'), 'utf8')
const tangentTagLine = tangentExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(tangentTagLine, 'Themen-Tags der Tangenten- und Sekantenerklaerung fehlen')
const tangentTags = tangentTagLine[1].split(',').map(normalizeTag)
assert.deepStrictEqual(tangentTags, ['erklarung'].concat(tangentContentThemes), 'Geometrische Tangenten und Sekanten brauchen keine Stützgeraden-, Kreisberechnungs- oder Analysis-Tags')
tangentContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Kreis-Gerade-Thema fehlt in der Themenauswahl: ' + theme)
})
assert.ok(normalizedOptions.includes('tangentengleichung'), 'Tangentengleichung fehlt als eigenstaendiges Analysis-Thema im Export')
for (const tag of ['differenzenquotient', 'differentialquotient']) assert.ok(normalizedOptions.includes(tag), 'Quotienten-Thema fehlt im Export: ' + tag)
assert.ok(normalizedOptions.includes('extrempunkte'), 'Extrempunkte fehlen als eigenstaendiges Analysis-Thema im Export')
for (const theme of ['monotonie', "satz von l'hopital"]) assert.ok(normalizedOptions.includes(theme), 'Monotonie-Thema fehlt im Export: ' + theme)
for (const theme of ['wendepunkte', 'sattelpunkte']) assert.ok(normalizedOptions.includes(theme), 'Wende-/Sattelpunkt-Thema fehlt im Export: ' + theme)
for (const theme of ['konvex', 'konkav']) assert.ok(normalizedOptions.includes(theme), 'Kruemmungsthema fehlt im Export: ' + theme)
assert.ok(normalizedOptions.includes('kurvendiskussion'), 'Kurvendiskussion fehlt im Export')
assert.ok(normalizedOptions.includes('rekonstruktion'), 'Rekonstruktion fehlt im Export')
assert.ok(normalizedOptions.includes('extremwertaufgaben'), 'Extremwertaufgaben fehlen im Export')
for (const tag of ['funktionsschar', 'ortskurve']) assert.ok(normalizedOptions.includes(tag), 'Schar-Thema fehlt im Export: ' + tag)
const compassContentThemes = ['konstruktion', 'mittelsenkrechte', 'winkelhalbierende', 'satz des thales']
const compassExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_01_05_Zirkelkonstruktion.md'), 'utf8')
const compassTagLine = compassExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(compassTagLine, 'Themen-Tags der Zirkelkonstruktionen fehlen')
const compassTags = compassTagLine[1].split(',').map(normalizeTag)
assert.deepStrictEqual(compassTags, ['erklarung'].concat(compassContentThemes), 'Zirkelkonstruktionen brauchen die vier zentralen Inhaltstags, keine zusaetzlichen Anwendungstags')
compassContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Zirkelkonstruktionsthema fehlt in der Themenauswahl: ' + theme)
})
const trigonometryContentThemes = ['trigonometrie', 'sinus', 'kosinus', 'tangens', 'kotangens', 'sinussatz', 'kosinussatz']
const trigonometryExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '03_01_01_Trigonometrie.md'), 'utf8')
const trigonometryTagLine = trigonometryExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(trigonometryTagLine, 'Themen-Tags der Trigonometrieerklaerung fehlen')
const trigonometryTags = trigonometryTagLine[1].split(',').map(normalizeTag)
assert.deepStrictEqual(trigonometryTags, ['erklarung'].concat(trigonometryContentThemes), 'Trigonometrie braucht die sieben zentralen Inhaltstags ohne zusaetzliche Funktions- oder Arcus-Sammelthemen')
trigonometryContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Trigonometrisches Inhaltsthema fehlt in der Themenauswahl: ' + theme)
})
const functionContentThemes = ['koordinatensystem', 'definitionsbereich', 'wertebereich', 'funktionssymmetrie']
const functionExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_00_00_Funktion.md'), 'utf8')
const functionTagLine = functionExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(functionTagLine, 'Themen-Tags der Funktionserklaerung fehlen')
assert.deepStrictEqual(functionTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(functionContentThemes), 'Funktion braucht die vier zentralen Inhaltstags ohne Funktionsbegriff')
assert.ok(!normalizedOptions.includes('funktionsbegriff'), 'Entferntes Tag Funktionsbegriff darf nicht in der Themenauswahl bleiben')
functionContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Funktionsgrundlage fehlt in der Themenauswahl: ' + theme)
})
const valueTableContentThemes = ['wertetabelle', 'funktionswert', 'wertepaar', 'funktionsgraph']
const valueTableExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_00_02_Wertetabellen.md'), 'utf8')
const valueTableTagLine = valueTableExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(valueTableTagLine, 'Themen-Tags der Wertetabellen fehlen')
assert.deepStrictEqual(valueTableTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(valueTableContentThemes))
valueTableContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Wertetabellen-Thema fehlt in der Themenauswahl: ' + theme)
})
const linearContentThemes = ['lineare funktionen', 'steigung', 'steigungsdreieck', 'ordinatenabschnitt', 'nullstellen', 'schnittpunkt']
const linearExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_03_01_Geraden.md'), 'utf8')
const linearTagLine = linearExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(linearTagLine, 'Themen-Tags der Geradenerklaerung fehlen')
assert.deepStrictEqual(linearTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(linearContentThemes))
linearContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Geradenthema fehlt in der Themenauswahl: ' + theme)
})
const piecewiseContentThemes = ['betragsfunktion', 'stufenfunktion']
const piecewiseExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_04_01_Stufen.md'), 'utf8')
const piecewiseTagLine = piecewiseExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(piecewiseTagLine, 'Themen-Tags der abschnittsweisen Funktionen fehlen')
assert.deepStrictEqual(piecewiseTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(piecewiseContentThemes))
assert.ok(!normalizedOptions.includes('abschnittsweise definierte funktionen'), 'Ersetztes Tag darf nicht in der Themenauswahl bleiben')
piecewiseContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Abschnittsweises Funktionsthema fehlt: ' + theme)
})
const quadraticContentThemes = ['quadratische funktionen', 'scheitelpunktsform', 'quadratische erganzung']
const quadraticExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_05_01_Parabeln.md'), 'utf8')
const quadraticTagLine = quadraticExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(quadraticTagLine, 'Themen-Tags der Parabelerklaerung fehlen')
assert.deepStrictEqual(quadraticTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(quadraticContentThemes))
quadraticContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Parabelthema fehlt in der Themenauswahl: ' + theme)
})
const graphTransformationThemes = ['graphverschiebung', 'graphstreckung', 'graphspiegelung']
const graphTransformationExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_05_05_Verschiebungen.md'), 'utf8')
const graphTransformationTagLine = graphTransformationExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(graphTransformationTagLine, 'Themen-Tags der Verschiebungserklaerung fehlen')
assert.deepStrictEqual(graphTransformationTagLine[1].split(',').map(normalizeTag), ['erklarung'].concat(graphTransformationThemes))
graphTransformationThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Graphtransformation fehlt in der Themenauswahl: ' + theme)
})
const inverseContentThemes = ['hyperbel', 'asymptote', 'umkehrfunktion']
const seriesExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_00_05_Reihen.md'), 'utf8')
const seriesTagLine = seriesExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(seriesTagLine, 'Themen-Tag der Reihenerklaerung fehlt')
assert.deepStrictEqual(seriesTagLine[1].split(',').map(normalizeTag), ['erklarung', 'reihen'])
assert.ok(normalizedOptions.includes('reihen'), 'Reihen fehlen in der Themenauswahl')
const polynomialExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_07_01_Polynomfunktion.md'), 'utf8')
const polynomialTagLine = polynomialExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(polynomialTagLine, 'Themen-Tag der Polynomerklaerung fehlt')
assert.deepStrictEqual(polynomialTagLine[1].split(',').map(normalizeTag), ['erklarung', 'polynomfunktion'])
assert.ok(normalizedOptions.includes('polynomfunktion'), 'Polynomfunktion fehlt in der Themenauswahl')
const rationalExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_08_01_Gebrochen.md'), 'utf8')
const rationalTagLine = rationalExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(rationalTagLine, 'Themen-Tags der gebrochen rationalen Funktionen fehlen')
const rationalThemes = ['gebrochen rationale funktionen', 'polynomdivision']
assert.deepStrictEqual(rationalTagLine[1].split(',').map(normalizeTag), ['erklarung', ...rationalThemes])
rationalThemes.forEach(theme => assert.ok(normalizedOptions.includes(theme), 'Thema fehlt: ' + theme))
const trigonoExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_09_01_Trigono.md'), 'utf8')
const trigonoThemes = ['trigonometrische funktionen', 'additionstheoreme']
const trigonoTagLine = trigonoExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(trigonoTagLine, 'Themen-Tags der trigonometrischen Funktionen fehlen')
assert.deepStrictEqual(trigonoTagLine[1].split(',').map(normalizeTag), ['erklarung', ...trigonoThemes])
trigonoThemes.forEach(theme => assert.ok(normalizedOptions.includes(theme), 'Thema fehlt: ' + theme))
const expExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_10_01_ExpFkt.md'), 'utf8')
const expThemes = ['exponentialfunktion', 'logarithmische skala']
const expTagLine = expExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(expTagLine, 'Themen-Tags der Exponentialfunktionen fehlen')
assert.deepStrictEqual(expTagLine[1].split(',').map(normalizeTag), ['erklarung', ...expThemes])
expThemes.forEach(theme => assert.ok(normalizedOptions.includes(theme), 'Thema fehlt: ' + theme))
const limitExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_11_06_Grenzwert.md'), 'utf8')
const limitTagLine = limitExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(limitTagLine, 'Themen-Tag der Grenzwerterklaerung fehlt')
assert.deepStrictEqual(limitTagLine[1].split(',').map(normalizeTag), ['erklarung', 'grenzwerte'])
assert.ok(normalizedOptions.includes('grenzwerte'), 'Grenzwerte fehlen in der Themenauswahl')
const inverseExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_05_08_Umkehrfunktion.md'), 'utf8')
const inverseTagLine = inverseExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(inverseTagLine, 'Themen-Tag der Umkehrfunktionserklaerung fehlt')
assert.deepStrictEqual(inverseTagLine[1].split(',').map(normalizeTag), ['erklarung', 'umkehrfunktion'])
const hyperbolaExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_06_01_Hyperbel.md'), 'utf8')
const hyperbolaTagLine = hyperbolaExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(hyperbolaTagLine, 'Themen-Tags der Hyperbelerklaerung fehlen')
assert.deepStrictEqual(hyperbolaTagLine[1].split(',').map(normalizeTag), ['erklarung', 'hyperbel', 'asymptote'])
inverseContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Hyperbel-/Umkehrfunktionsthema fehlt in der Themenauswahl: ' + theme)
})
const comparisonExplanations = [
  ['02_07_01_Aehnlichkeit.md', ['ahnlichkeit']],
  ['02_07_02_Kongruenz.md', ['kongruenz', 'konstruktion']]
]
comparisonExplanations.forEach(function (entry) {
  const source = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', entry[0]), 'utf8')
  const tagLine = source.split('-->')[0].match(/^tags:\s*(.+)$/m)
  assert.ok(tagLine, 'Themen-Tags der Vergleichserklaerung fehlen: ' + entry[0])
  const tags = tagLine[1].split(',').map(normalizeTag)
  entry[1].forEach(function (theme) {
    assert.ok(tags.includes(theme), 'Inhaltstag fehlt im Kurskopf: ' + entry[0] + ': ' + theme)
    assert.ok(normalizedOptions.includes(theme), 'Vergleichsthema fehlt in der Themenauswahl: ' + theme)
  })
  if (entry[0] === '02_07_02_Kongruenz.md') {
    assert.ok(!tags.includes('ahnlichkeit'), 'Kongruenzkurs darf nicht durch einen Aehnlichkeits-Ausblick bis Klasse 8 gesperrt werden')
  }
})
const angleContentThemes = ['winkel', 'lagebeziehung', 'strecke']
const solidExplanations = [
  ['02_10_01_Quader.md', ['quader', 'wurfel']],
  ['02_10_02_Prisma.md', ['prisma']],
  ['02_11_01_Pyramide.md', ['pyramide']],
  ['02_11_02_Pyramidenstumpf.md', ['pyramidenstumpf']],
  ['02_11_03_Spitzkoerper.md', ['oktaeder', 'tetraeder']]
]
solidExplanations.forEach(function (entry) {
  const source = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', entry[0]), 'utf8')
  const tagLine = source.split('-->')[0].match(/^tags:\s*(.+)$/m)
  assert.ok(tagLine, 'Themen-Tags der Koerpererklaerung fehlen: ' + entry[0])
  const tags = tagLine[1].split(',').map(normalizeTag)
  assert.deepStrictEqual(tags, ['erklarung'].concat(entry[1]), 'Koerpererklaerung braucht die vereinbarten konkreten Inhaltstags: ' + entry[0])
  entry[1].forEach(function (theme) {
    assert.ok(normalizedOptions.includes(theme), 'Koerperthema fehlt in der Themenauswahl: ' + theme)
  })
})
assert.ok(!normalizedOptions.includes('spitzkorper'), 'Spitzkoerper darf kein Sammel-Tag statt Oktaeder und Tetraeder werden')
const interceptExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_07_04_Strahlensatz.md'), 'utf8')
const interceptTagLine = interceptExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(interceptTagLine, 'Themen-Tags der Strahlensatzerklaerung fehlen')
const interceptTags = interceptTagLine[1].split(',').map(normalizeTag)
assert.deepStrictEqual(interceptTags, ['erklarung', 'strahlensatz'], 'Strahlensatzkurs braucht genau den starken Inhaltstag Strahlensatz')
assert.ok(normalizedOptions.includes('strahlensatz'), 'Strahlensatz fehlt in der Themenauswahl')
assert.ok(!normalizedOptions.includes('strahlensatze'), 'Strahlensatz darf kein zusaetzliches Plural-Synonym erhalten')
const angleExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_05_01_Winkel.md'), 'utf8')
const angleTagLine = angleExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(angleTagLine, 'Themen-Tags der Winkelerklaerung fehlen')
const angleTags = angleTagLine[1].split(',').map(normalizeTag)
angleContentThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Winkel-Grundlagenthema fehlt in der Themenauswahl: ' + theme)
  assert.ok(angleTags.includes(theme), 'Inhaltstag fehlt im Winkel-Kurskopf: ' + theme)
})
assert.ok(!angleTags.includes('winkelbeziehungen'), 'Winkelgrundlagen duerfen nicht als unbehandelte Winkelbeziehungen getaggt werden')
const angleRelationsExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_05_02_Winkelbeziehungen.md'), 'utf8')
const angleRelationsTagLine = angleRelationsExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(angleRelationsTagLine, 'Themen-Tags der Winkelbeziehungserklaerung fehlen')
const angleRelationsTags = angleRelationsTagLine[1].split(',').map(normalizeTag)
assert.ok(angleRelationsTags.includes('winkelbeziehungen'), 'Inhaltstag Winkelbeziehungen fehlt im Kurskopf')
assert.ok(normalizedOptions.includes('winkelbeziehungen'), 'Winkelbeziehungen fehlt in der Themenauswahl')
;['quadrat'].concat(quadrilateralContentThemes).forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Viereckthema fehlt in der Themenauswahl: ' + theme)
})
;['rechteck', 'dreiecke', 'satz des pythagoras', 'hohensatz', 'kathetensatz', 'kreis', 'kreisabschnitt', 'kreisausschnitt', 'bogenmass', 'kugel', 'zylinder', 'kegel', 'kegelstumpf'].concat(triangleContentThemes).forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Geometriethema fehlt in der Themenauswahl: ' + theme)
})
assert.ok(!normalizedOptions.includes('dreieckseigenschaften'), 'Sammel-Tag Dreieckseigenschaften darf nicht mehr als Thema erscheinen')
assert.ok(categoryAttributes.every(function (value) {
  return !value.split('|').map(normalizeTag).includes('dreieckseigenschaften')
}), 'Sammel-Tag Dreieckseigenschaften ist noch an einer Karte vorhanden')
const triangleExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '02_06_02_Dreieckseigenschaften.md'), 'utf8')
const triangleTagLine = triangleExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)
assert.ok(triangleTagLine, 'Themen-Tags der Dreieckserklaerung fehlen')
const triangleTags = triangleTagLine[1].split(',').map(normalizeTag)
assert.ok(!triangleTags.includes('dreieckseigenschaften'), 'Sammel-Tag steht noch im Kurskopf')
triangleContentThemes.forEach(function (theme) {
  assert.ok(triangleTags.includes(theme), 'Inhaltstag fehlt im Kurskopf: ' + theme)
})

const deployWorkflow = fs.readFileSync(path.join(repositoryRoot, '.github', 'workflows', 'deploy.yaml'), 'utf8')
;[
  'actions/setup-node@v4',
  'node scripts/test-template-macros.cjs',
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
  assert.ok(!themes.includes('dreieckseigenschaften'), 'Sammel-Tag Dreieckseigenschaften steht noch in der Lehrplantabelle')
})

// The deployment must contain the current Lehrplan.md, not the old curriculum
// snapshot embedded in the HTML design template.
const curriculumMatch = html.match(/\/\* SCHULLIA_SACHSEN_LB_START \*\/([\s\S]*?)\/\* SCHULLIA_SACHSEN_LB_END \*\//)
assert.ok(curriculumMatch, 'Eingebetteter Lehrplan fehlt')
const curriculum = JSON.parse(curriculumMatch[1])
let curriculumSchool = null
lehrplan.split(/\r?\n/).forEach(function (line) {
  const heading = line.match(/^##\s+(.+?)\s*$/)
  if (heading) {
    curriculumSchool = { Oberschule: 'oberschule', 'Berufliches Gymnasium': 'bgy', Gymnasium: 'gymnasium' }[heading[1]] || null
    return
  }
  if (!curriculumSchool || !line.trim().startsWith('|')) return
  const cells = line.split('|').slice(1, -1).map(function (cell) { return cell.trim() })
  const grade = cells[0].match(/^(\d+)/)
  const lb = cells[1] && cells[1].match(/^LB\s+(\d+):/)
  if (!grade || !lb) return
  const track = cells[0].match(/\b(HS|RS|GK|LK)\b/)
  const classKey = grade[1] + (track ? track[1] : '')
  const expectedThemes = cells[2].split(',').map(function (theme) { return theme.trim().toLowerCase() }).filter(Boolean)
  const actualThemes = ((curriculum.themes[curriculumSchool] || {})[classKey] || {})[lb[1]] || []
  assert.deepStrictEqual(actualThemes, expectedThemes, 'Veraltete Lehrplan-Zuordnung: ' + curriculumSchool + '/' + classKey + '/LB' + lb[1])
})
assert.ok(curriculum.themes.oberschule['10RS']['4'].includes('kegelstumpf'), 'Kegelstumpf fehlt in Oberschule 10 RS, LB 4')
assert.ok(curriculum.themes.gymnasium['10']['3'].includes('kegelstumpf'), 'Kegelstumpf fehlt als Vertiefung in Gymnasium 10, LB 3')
assert.ok(!Object.values(curriculum.themes.oberschule['9HS']).flat().includes('kegelstumpf'), 'Kegelstumpf darf nicht in Klasse 9 HS vorgezogen werden')
assert.ok(curriculum.themes.oberschule['9RS']['2'].includes('kugel'), 'Kugel fehlt in Oberschule 9 RS, LB 2')
assert.ok(curriculum.themes.oberschule['9HS']['2'].includes('kugel'), 'Kugel fehlt als Differenzierung in Oberschule 9 HS, LB 2')
assert.ok(curriculum.themes.gymnasium['9']['2'].includes('kugel'), 'Kugel fehlt in Gymnasium 9, LB 2')
const solidCurriculumAssignments = [
  ['oberschule', '5', '3', ['würfel']],
  ['oberschule', '6', '4', ['quader']],
  ['gymnasium', '5', '4', ['quader', 'würfel']],
  ['oberschule', '7HS', '4', ['prisma']],
  ['oberschule', '7RS', '4', ['prisma']],
  ['gymnasium', '6', '4', ['prisma']],
  ['oberschule', '9HS', '2', ['pyramide', 'oktaeder', 'tetraeder']],
  ['oberschule', '9RS', '2', ['pyramide', 'oktaeder', 'tetraeder']],
  ['gymnasium', '9', '3', ['pyramide', 'oktaeder', 'tetraeder']],
  ['oberschule', '10RS', '4', ['pyramidenstumpf']],
  ['gymnasium', '10', '3', ['pyramidenstumpf']]
]
solidCurriculumAssignments.forEach(function (entry) {
  entry[3].forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Koerperthema fehlt im passenden Lernbereich: ' + entry.slice(0, 3).join('/') + ': ' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    const themes = Object.values(entry[1]).flat()
    const grade = parseInt(entry[0], 10)
    if (grade < (school === 'oberschule' ? 6 : 5)) assert.ok(!themes.includes('quader'), 'Quaderkurs darf an der Oberschule nicht vor Klasse 6 freigegeben werden')
    if (grade < (school === 'oberschule' ? 7 : 6)) assert.ok(!themes.includes('prisma'), 'Prisma-Berechnungskurs wird zu frueh freigegeben: ' + school + '/' + entry[0])
    if (grade < 9) {
      ;['pyramide', 'oktaeder', 'tetraeder'].forEach(function (theme) {
        assert.ok(!themes.includes(theme), 'Pythagoras-basierter Koerperkurs darf nicht vor Klasse 9 freigegeben werden: ' + school + '/' + entry[0] + ': ' + theme)
      })
    }
    if (grade < 10 || /HS$/.test(entry[0])) assert.ok(!themes.includes('pyramidenstumpf'), 'Pyramidenstumpf-Berechnungskurs darf nicht frueher oder im HS eingeordnet werden: ' + school + '/' + entry[0])
  })
})
;['quader', 'würfel', 'prisma', 'pyramide', 'pyramidenstumpf', 'oktaeder', 'tetraeder'].forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Koerperthema muss im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
assert.ok(curriculum.themes.oberschule['5']['3'].includes('rechteck'), 'Rechteck fehlt in Oberschule 5, LB 3')
assert.ok(curriculum.themes.gymnasium['5']['4'].includes('rechteck'), 'Rechteck fehlt in Gymnasium 5, LB 4')
assert.ok(curriculum.themes.oberschule['5']['3'].includes('quadrat'), 'Quadrat fehlt in Oberschule 5, LB 3')
assert.ok(curriculum.themes.gymnasium['5']['4'].includes('quadrat'), 'Quadrat fehlt in Gymnasium 5, LB 4')
assert.ok(curriculum.themes.oberschule['6']['3'].includes('winkelbeziehungen'), 'Winkelbeziehungen fehlen in Oberschule 6, LB 3')
assert.ok(!Object.values(curriculum.themes.oberschule['5']).flat().includes('winkelbeziehungen'), 'Winkelbeziehungen duerfen an der Oberschule nicht in Klasse 5 vorgezogen werden')
assert.ok(curriculum.themes.gymnasium['5']['3'].includes('winkelbeziehungen'), 'Winkelbeziehungen fehlen in Gymnasium 5, LB 3')
symmetryContentThemes.forEach(function (theme) {
  assert.ok(curriculum.themes.oberschule['5']['4'].includes(theme), 'Spiegelungsthema fehlt in Oberschule 5, LB 4: ' + theme)
  assert.ok(!curriculum.themes.oberschule['5']['3'].includes(theme), 'Spiegelungsthema gehoert in Oberschule 5 zu LB 4, nicht LB 3: ' + theme)
  assert.ok(curriculum.themes.gymnasium['5']['3'].includes(theme), 'Spiegelungsthema fehlt in Gymnasium 5, LB 3: ' + theme)
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Spiegelungsthema muss im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
assert.ok(curriculum.themes.oberschule['5']['4'].includes('drehung'), 'Drehung fehlt als Ergaenzung in Oberschule 5, LB 4')
assert.ok(curriculum.themes.gymnasium['5']['3'].includes('drehung'), 'Drehung fehlt in Gymnasium 5, LB 3')
;[['oberschule', '8HS', '5'], ['oberschule', '8RS', '4'], ['gymnasium', '8', '4']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('zentrische streckung'), 'Zentrische Streckung fehlt im Lehrplan: ' + entry.join('/'))
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) >= 8) return
    assert.ok(!Object.values(entry[1]).flat().includes('zentrische streckung'), 'Zentrische Streckung darf nicht vor Klasse 8 freigegeben werden: ' + school + '/' + entry[0])
  })
})
transformationContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Abbildungsthema muss im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
;[['oberschule', '8HS', '3'], ['oberschule', '8RS', '3'], ['gymnasium', '7', '1']].forEach(function (entry) {
  tangentContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Kreis-Gerade-Thema fehlt im passenden Lernbereich: ' + entry.join('/') + ': ' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) >= (school === 'oberschule' ? 8 : 7)) return
    tangentContentThemes.forEach(function (theme) {
      assert.ok(!Object.values(entry[1]).flat().includes(theme), 'Geometrische Tangenten/Sekanten werden zu frueh freigegeben: ' + school + '/' + entry[0] + ': ' + theme)
    })
  })
})
tangentContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Tangenten/Sekanten muessen im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
;[['oberschule', '8HS', '3'], ['oberschule', '8RS', '3'], ['gymnasium', '7', '1']].forEach(function (entry) {
  ;['ableitungen', 'grafisches ableiten', 'tangentengleichung'].forEach(function (theme) {
    assert.ok(!curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Geometrische Tangenten duerfen keine Analysisfreigabe vorziehen: ' + entry.join('/') + ': ' + theme)
  })
})
;[['gymnasium', '11GK', '1'], ['gymnasium', '11LK', '1'], ['bgy', '12GK', '2'], ['bgy', '12LK', '2']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('tangentengleichung'), 'Tangentengleichung fehlt in der exportierten Differentialrechnung: ' + entry.join('/'))
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('extrempunkte'), 'Extrempunkte fehlen in der exportierten Differentialrechnung: ' + entry.join('/'))
  for (const theme of ['monotonie', "satz von l'hopital"]) assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].map(normalizeTag).includes(theme), 'Monotonie-Thema fehlt in Differentialrechnung: ' + entry.join('/') + ': ' + theme)
  for (const theme of ['wendepunkte', 'sattelpunkte']) assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Wende-/Sattelpunkt-Thema fehlt in Differentialrechnung: ' + entry.join('/') + ': ' + theme)
  for (const theme of ['konvex', 'konkav']) assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Kruemmungsthema fehlt in Differentialrechnung: ' + entry.join('/') + ': ' + theme)
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('kurvendiskussion'), 'Kurvendiskussion fehlt in Differentialrechnung: ' + entry.join('/'))
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('rekonstruktion'), 'Rekonstruktion fehlt in Differentialrechnung: ' + entry.join('/'))
  for (const tag of ['differenzenquotient', 'differentialquotient']) assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(tag), 'Quotienten-Thema fehlt in Differentialrechnung: ' + entry.join('/') + ': ' + tag)
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('extremwertaufgaben'), 'Extremwertaufgaben fehlen in Differentialrechnung: ' + entry.join('/'))
  for (const tag of ['funktionsschar', 'ortskurve']) assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(tag), 'Schar-Thema fehlt in Differentialrechnung: ' + entry.join('/') + ': ' + tag)
})
;['oberschule', 'gymnasium', 'bgy'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function ([grade, areas]) {
    if (school !== 'oberschule' && parseInt(grade, 10) >= (school === 'gymnasium' ? 11 : 12)) return
    assert.ok(!Object.values(areas).flat().includes('tangentengleichung'), 'Tangentengleichung wird zu frueh freigegeben: ' + school + '/' + grade)
    assert.ok(!Object.values(areas).flat().includes('extrempunkte'), 'Extrempunkte mit Ableitungen werden zu frueh freigegeben: ' + school + '/' + grade)
    for (const theme of ['monotonie', "satz von l'hopital"]) assert.ok(!Object.values(areas).flat().map(normalizeTag).includes(theme), 'Monotonie mit Ableitungen wird zu frueh freigegeben: ' + school + '/' + grade + ': ' + theme)
    for (const theme of ['wendepunkte', 'sattelpunkte']) assert.ok(!Object.values(areas).flat().includes(theme), 'Wende-/Sattelpunkte werden zu frueh freigegeben: ' + school + '/' + grade + ': ' + theme)
    for (const theme of ['konvex', 'konkav']) assert.ok(!Object.values(areas).flat().includes(theme), 'Kruemmung mit Ableitungen wird zu frueh freigegeben: ' + school + '/' + grade + ': ' + theme)
    assert.ok(!Object.values(areas).flat().includes('kurvendiskussion'), 'Kurvendiskussion wird zu frueh freigegeben: ' + school + '/' + grade)
    assert.ok(!Object.values(areas).flat().includes('rekonstruktion'), 'Rekonstruktion mit Ableitungsbedingungen wird zu frueh freigegeben: ' + school + '/' + grade)
    assert.ok(!Object.values(areas).flat().includes('extremwertaufgaben'), 'Extremwertaufgaben mit Ableitungen werden zu frueh freigegeben: ' + school + '/' + grade)
    for (const tag of ['funktionsschar', 'ortskurve']) assert.ok(!Object.values(areas).flat().includes(tag), 'Schar-Thema wird zu frueh freigegeben: ' + school + '/' + grade + ': ' + tag)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  ;['konstruktion', 'mittelsenkrechte', 'winkelhalbierende'].forEach(function (theme) {
    assert.ok(curriculum.themes[school]['6']['3'].includes(theme), 'Grundkonstruktion fehlt in Klasse 6, LB 3: ' + school + ': ' + theme)
    assert.ok(!Object.values(curriculum.themes[school]['5']).flat().includes(theme), 'Grundkonstruktion darf nicht in Klasse 5 vorgezogen werden: ' + school + ': ' + theme)
  })
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) >= (school === 'oberschule' ? 8 : 7)) return
    assert.ok(!Object.values(entry[1]).flat().includes('satz des thales'), 'Der Thaleskreis muss den vollstaendigen Zirkelkurs bis zum passenden Lernbereich sperren: ' + school + '/' + entry[0])
  })
})
;[['oberschule', '8HS', '3'], ['oberschule', '8RS', '3'], ['gymnasium', '7', '1']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('satz des thales'), 'Satz des Thales fehlt im passenden Lernbereich: ' + entry.join('/'))
})
compassContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Zirkelkonstruktionen muessen im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  ;['kongruenz', 'konstruktion'].forEach(function (theme) {
    assert.ok(curriculum.themes[school]['6']['3'].includes(theme), 'Kongruenzinhalt fehlt in Klasse 6, LB 3: ' + school + ': ' + theme)
    assert.ok(!Object.values(curriculum.themes[school]['5']).flat().includes(theme), 'Kongruenzsaetze duerfen nicht in Klasse 5 vorgezogen werden: ' + school + ': ' + theme)
  })
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) >= 8) return
    assert.ok(!Object.values(entry[1]).flat().includes('ähnlichkeit'), 'Aehnlichkeitssaetze duerfen nicht vor Klasse 8 freigegeben werden: ' + school + '/' + entry[0])
  })
})
;[['oberschule', '8HS', '5'], ['oberschule', '8RS', '4'], ['gymnasium', '8', '4']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('ähnlichkeit'), 'Aehnlichkeit fehlt im Lehrplan: ' + entry.join('/'))
})
;['ähnlichkeit', 'kongruenz', 'konstruktion'].forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Vergleichsthema muss im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})
;[['oberschule', '8HS', '5'], ['oberschule', '8RS', '4'], ['gymnasium', '8', '4']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('strahlensatz'), 'Strahlensatz fehlt im passenden Lernbereich: ' + entry.join('/'))
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) >= 8) return
    assert.ok(!Object.values(entry[1]).flat().includes('strahlensatz'), 'Strahlensatz darf nicht vor Klasse 8 freigegeben werden: ' + school + '/' + entry[0])
  })
})
assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes('strahlensatz'), 'Strahlensatz muss im BGY ueber Vorkenntnisse erreichbar sein')
;['oberschule', 'gymnasium'].forEach(function (school) {
  angleContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[school]['5']['3'].includes(theme), 'Winkel-Grundlagenthema fehlt in Klasse 5, LB 3: ' + school + ': ' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  assert.ok(curriculum.themes[school]['5']['1'].includes('zahlenstrahl'), 'Zahlenstrahl fehlt in Klasse 5, LB 1: ' + school)
  ;['5', '6'].forEach(function (grade) {
    assert.ok(!Object.values(curriculum.themes[school][grade]).flat().includes('intervalle'), 'Intervalle duerfen nicht vor Klasse 7 freigegeben werden: ' + school + '/' + grade)
  })
})
;[['oberschule', '7HS', '3'], ['oberschule', '7RS', '3'], ['gymnasium', '7', '2']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('intervalle'), 'Intervalle fehlen als ergaenzende Vertiefung im Lehrplan: ' + entry.join('/'))
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  quadrilateralContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[school]['6']['3'].includes(theme), 'Viereckthema fehlt in Klasse 6, LB 3: ' + school + ': ' + theme)
    assert.ok(!Object.values(curriculum.themes[school]['5']).flat().includes(theme), 'Viereckthema darf nicht in Klasse 5 vorgezogen werden: ' + school + ': ' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  triangleContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[school]['6']['3'].includes(theme), 'Dreiecksinhalt fehlt in Klasse 6, LB 3: ' + school + ': ' + theme)
  })
  ;['satz des pythagoras', 'höhensatz', 'kathetensatz'].forEach(function (theme) {
    assert.ok(!Object.values(curriculum.themes[school]['6']).flat().includes(theme), 'Dreieckssätze dürfen nicht in Klasse 6 vorgezogen werden: ' + theme)
  })
})
;[['oberschule', '9HS', '1'], ['oberschule', '9RS', '1'], ['gymnasium', '9', '3']].forEach(function (entry) {
  ;['satz des pythagoras', 'höhensatz', 'kathetensatz'].forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Dreieckssatz fehlt im Lehrplan: ' + entry.join('/') + ': ' + theme)
  })
})

;[['oberschule', '9HS', '1'], ['oberschule', '9RS', '1'], ['gymnasium', '9', '3']].forEach(function (entry) {
  ;['trigonometrie', 'sinus', 'kosinus', 'tangens', 'kotangens'].forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Trigonometriegrundlage fehlt im passenden Lernbereich: ' + entry.join('/') + ': ' + theme)
  })
})
;[['oberschule', '10RS', '1'], ['gymnasium', '10', '3']].forEach(function (entry) {
  ;['sinussatz', 'kosinussatz'].forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Trigonometrischer Dreieckssatz fehlt in Klasse 10: ' + entry.join('/') + ': ' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    const themes = Object.values(entry[1]).flat()
    const grade = parseInt(entry[0], 10)
    if (grade < 9) trigonometryContentThemes.forEach(function (theme) {
      assert.ok(!themes.includes(theme), 'Trigonometrie darf nicht vor Klasse 9 freigegeben werden: ' + school + '/' + entry[0] + ': ' + theme)
    })
    if (grade < 10 || /HS$/.test(entry[0])) {
      ;['sinussatz', 'kosinussatz'].forEach(function (theme) {
        assert.ok(!themes.includes(theme), 'Vollstaendiger Trigonometriekurs darf nicht in Klasse 9 oder HS freigegeben werden: ' + school + '/' + entry[0] + ': ' + theme)
      })
    }
  })
})
trigonometryContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Geometrische Trigonometrie muss im BGY ueber Vorkenntnisse erreichbar sein: ' + theme)
})

Object.values(curriculum.themes).forEach(function (grades) {
  Object.values(grades).forEach(function (learningAreas) {
    assert.ok(!Object.values(learningAreas).flat().includes('funktionsbegriff'), 'Entferntes Tag Funktionsbegriff darf nicht im Lehrplanmodell bleiben')
  })
})
;[['oberschule', '10RS', '2'], ['gymnasium', '8', '3']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('funktionssymmetrie'), 'Funktionssymmetrie fehlt im passenden Lernbereich: ' + entry.join('/'))
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    const themes = Object.values(entry[1]).flat()
    if (parseInt(entry[0], 10) < 8) {
      assert.ok(!themes.includes('funktionssymmetrie'), 'Geometrische Symmetrie ersetzt keine Funktionssymmetrie')
    }
    if (school === 'oberschule' && (parseInt(entry[0], 10) < 10 || /HS$/.test(entry[0]))) {
      assert.ok(!themes.includes('funktionssymmetrie'), 'Vollstaendiger Funktionskurs darf in der OS nicht vor Klasse 10 RS freigegeben werden')
    }
  })
})
functionContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Funktionsgrundlagen sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

;['oberschule', 'gymnasium'].forEach(function (school) {
  ;['wertetabelle', 'wertepaar'].forEach(function (theme) {
    assert.ok(curriculum.themes[school]['6']['2'].includes(theme), 'Tabellen und Wertepaare fehlen in Klasse 6, LB 2: ' + school + '/' + theme)
  })
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) < 8 || (school === 'oberschule' && entry[0] === '8HS')) {
      ;['funktionswert', 'funktionsgraph'].forEach(function (theme) {
        assert.ok(!Object.values(entry[1]).flat().includes(theme), 'Funktionsdarstellung darf nicht vorgezogen werden: ' + school + '/' + entry[0] + '/' + theme)
      })
    }
  })
})
;[['oberschule', '8RS', '2'], ['oberschule', '9HS', '3'], ['gymnasium', '8', '3']].forEach(function (entry) {
  ;['funktionswert', 'funktionsgraph'].forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Funktionsdarstellung fehlt: ' + entry.join('/') + '/' + theme)
  })
})
valueTableContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Wertetabellen sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

;[['oberschule', '8RS', '2'], ['oberschule', '9HS', '3'], ['gymnasium', '8', '3']].forEach(function (entry) {
  linearContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Lineare Funktionen fehlen: ' + entry.join('/') + '/' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function (entry) {
    if (parseInt(entry[0], 10) < 8 || (school === 'oberschule' && entry[0] === '8HS')) {
      linearContentThemes.forEach(function (theme) {
        assert.ok(!Object.values(entry[1]).flat().includes(theme), 'Geradenkurs darf nicht vorgezogen werden: ' + school + '/' + entry[0] + '/' + theme)
      })
    }
  })
})
linearContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Lineare Grundlagen sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

;[['oberschule', '9RS', '3'], ['gymnasium', '9', '1']].forEach(function (entry) {
  piecewiseContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Abschnittsweise Funktionen fehlen: ' + entry.join('/') + '/' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function ([grade, areas]) {
    if (parseInt(grade, 10) < 9 || grade.endsWith('HS')) {
      piecewiseContentThemes.forEach(function (theme) {
        assert.ok(!Object.values(areas).flat().includes(theme), 'Abschnittsweise Funktionen zu frueh oder im HS zugeordnet: ' + school + '/' + grade)
      })
    }
  })
})
piecewiseContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Abschnittsweise Funktionen sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

;[['oberschule', '9RS', '3'], ['gymnasium', '9', '1']].forEach(function (entry) {
  quadraticContentThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].map(normalizeTag).includes(theme), 'Parabelthema fehlt: ' + entry.join('/') + '/' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function ([grade, areas]) {
    if (parseInt(grade, 10) < 9 || grade.endsWith('HS')) {
      quadraticContentThemes.forEach(function (theme) {
        assert.ok(!Object.values(areas).flat().map(normalizeTag).includes(theme), 'Parabelerklaerung zu frueh oder im HS zugeordnet: ' + school + '/' + grade)
      })
    }
  })
})
quadraticContentThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().map(normalizeTag).includes(theme), 'Parabeln sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

;[['oberschule', '9RS', '3'], ['gymnasium', '9', '1']].forEach(function (entry) {
  graphTransformationThemes.forEach(function (theme) {
    assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Graphtransformation fehlt: ' + entry.join('/') + '/' + theme)
  })
})
;['oberschule', 'gymnasium'].forEach(function (school) {
  Object.entries(curriculum.themes[school]).forEach(function ([grade, areas]) {
    if (parseInt(grade, 10) < 9 || grade.endsWith('HS')) {
      graphTransformationThemes.forEach(function (theme) {
        assert.ok(!Object.values(areas).flat().includes(theme), 'Graphtransformation zu frueh oder im HS zugeordnet: ' + school + '/' + grade)
      })
    }
  })
})
graphTransformationThemes.forEach(function (theme) {
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Graphtransformationen sind im BGY ueber Vorkenntnisse erreichbar: ' + theme)
})

inverseContentThemes.forEach(function (theme) {
  assert.ok(curriculum.themes.oberschule['10RS']['2'].includes(theme), 'Hyperbel-/Umkehrfunktionsthema fehlt in OS10 RS LB2: ' + theme)
  const gymGrade = theme === 'umkehrfunktion' ? '10' : '9'
  const gymArea = theme === 'umkehrfunktion' ? '4' : '1'
  assert.ok(curriculum.themes.gymnasium[gymGrade][gymArea].includes(theme), 'Hyperbel-/Umkehrfunktionsthema fehlt im Gymnasium: ' + theme)
  ;['oberschule', 'gymnasium'].forEach(function (school) {
    const firstGrade = school === 'oberschule' ? 10 : Number(gymGrade)
    Object.entries(curriculum.themes[school]).forEach(function ([grade, areas]) {
      if (parseInt(grade, 10) < firstGrade || grade.endsWith('HS')) {
        assert.ok(!Object.values(areas).flat().includes(theme), 'Hyperbel-/Umkehrfunktionsthema zu frueh oder im HS: ' + school + '/' + grade + '/' + theme)
      }
    })
  })
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Im BGY sind Hyperbeln und Umkehrfunktionen bereits ueber Vorkenntnisse erreichbar: ' + theme)
})

;[['gymnasium', '10', '4'], ['bgy', '12GK', '2'], ['bgy', '12LK', '2']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('grenzwerte'), 'Grenzwerte fehlen im erzeugten Lehrplanfilter: ' + entry.join('/'))
})
Object.values(curriculum.themes.oberschule).forEach(function (areas) {
  assert.ok(!Object.values(areas).flat().includes('grenzwerte'), 'Grenzwerte duerfen nicht ueber Oberschul-Vorkenntnisse vorgezogen werden')
})
Object.entries(curriculum.themes.gymnasium).forEach(function ([grade, areas]) {
  if (parseInt(grade, 10) < 10) assert.ok(!Object.values(areas).flat().includes('grenzwerte'), 'Grenzwerte vor Klasse 10: ' + grade)
})
assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes('grenzwerte'), 'Grenzwerte im BGY erst ab Jahrgang 12/13')

;[['gymnasium', '10', '4'], ['bgy', '12GK', '2'], ['bgy', '12LK', '2']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('reihen'), 'Reihen fehlen im Lehrplanfilter: ' + entry.join('/'))
})
Object.values(curriculum.themes.oberschule).forEach(function (areas) {
  assert.ok(!Object.values(areas).flat().includes('reihen'), 'Reihen nicht ueber OS-Vorkenntnisse vorziehen')
})
Object.entries(curriculum.themes.gymnasium).forEach(function ([grade, areas]) {
  if (parseInt(grade, 10) < 10) assert.ok(!Object.values(areas).flat().includes('reihen'), 'Reihen vor Klasse 10: ' + grade)
})
assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes('reihen'), 'Vollstaendige Reihenerklaerung im BGY ab Jahrgang 12/13')

const diagramExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_02_01_Diagramme.md'), 'utf8')
const diagramThemes = ['balkendiagramm', 'saulendiagramm', 'kreisdiagramm', 'streifendiagramm']
assert.deepStrictEqual(diagramExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag), ['erklarung', ...diagramThemes])
diagramThemes.forEach(theme => assert.ok(normalizedOptions.includes(theme), 'Diagrammtyp fehlt im Katalog: ' + theme))
;[['oberschule', '5', 'extra'], ['gymnasium', '6', '2']].forEach(([school, grade, area]) => {
  diagramThemes.slice(0, 2).forEach(theme => assert.ok(curriculum.themes[school][grade][area].map(normalizeTag).includes(theme), 'Balken/Saeulen fehlen: ' + school + '/' + grade + '/' + area))
})
;[['oberschule', '7HS', '2'], ['oberschule', '7RS', '1'], ['gymnasium', '6', '5']].forEach(([school, grade, area]) => {
  diagramThemes.slice(2).forEach(theme => assert.ok(curriculum.themes[school][grade][area].map(normalizeTag).includes(theme), 'Kreis/Streifen fehlen: ' + school + '/' + grade + '/' + area))
})
for (const [school, boundary] of [['oberschule', 7], ['gymnasium', 6]]) {
  Object.entries(curriculum.themes[school]).forEach(([grade, areas]) => {
    if (parseInt(grade, 10) < boundary) diagramThemes.slice(2).forEach(theme =>
      assert.ok(!Object.values(areas).flat().includes(theme), 'Relative Diagramme zu frueh: ' + school + '/' + grade))
  })
}
diagramThemes.forEach(theme => assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().map(normalizeTag).includes(theme), 'Diagrammthemen werden im BGY aus Vorkenntnissen uebernommen'))

let compiledScripts = 0
const proportionalExplanation = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '04_01_01_Proportional.md'), 'utf8')
const proportionalThemes = ['proportional', 'antiproportional']
assert.deepStrictEqual(proportionalExplanation.split('-->')[0].match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag), ['erklarung', ...proportionalThemes])
proportionalThemes.forEach(function (theme) {
  assert.ok(normalizedOptions.includes(theme), 'Proportionalitaetstag fehlt im Katalog: ' + theme)
  for (const school of ['oberschule', 'gymnasium']) {
    assert.ok(curriculum.themes[school]['6']['2'].includes(theme), 'Proportionalitaet fehlt in Klasse 6 LB2: ' + school + '/' + theme)
    assert.ok(!Object.values(curriculum.themes[school]['5']).flat().includes(theme), 'Proportionalitaet nicht in Klasse 5 vorziehen: ' + school + '/' + theme)
  }
  assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes(theme), 'Proportionalitaet im BGY aus Vorkenntnissen statt neuer Einordnung: ' + theme)
})
;[['oberschule', '10RS', '2'], ['gymnasium', '10', '1']].forEach(function ([school, grade, area]) {
  assert.ok(curriculum.themes[school][grade][area].includes('exponentialfunktion'), 'Exponentialfunktion fehlt: ' + school + '/' + grade + '/' + area)
})
;[['gymnasium', '10', '4'], ['bgy', '11', '3']].forEach(function ([school, grade, area]) {
  assert.ok(curriculum.themes[school][grade][area].includes('logarithmische skala'), 'Logarithmische Skala fehlt: ' + school + '/' + grade + '/' + area)
})
Object.entries(curriculum.themes).forEach(function ([school, grades]) {
  Object.entries(grades).forEach(function ([grade, areas]) {
    const themes = Object.values(areas).flat()
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 10)) {
      assert.ok(!themes.includes('logarithmische skala'), 'Vollstaendige Exp-Erklaerung zu frueh: ' + school + '/' + grade)
    }
    if ((school === 'oberschule' || school === 'gymnasium') && parseInt(grade, 10) < 10) {
      assert.ok(!themes.includes('exponentialfunktion'), 'Exponentialfunktion vor Klasse 10: ' + school + '/' + grade)
    }
  })
})
;[['gymnasium', '10', '4'], ['bgy', '11', '3']].forEach(function ([school, grade, area]) {
  trigonoThemes.forEach(theme => assert.ok(curriculum.themes[school][grade][area].includes(theme), 'Trigonometrische Funktionen fehlen: ' + school + '/' + grade + '/' + area + '/' + theme))
})
Object.entries(curriculum.themes).forEach(function ([school, grades]) {
  Object.entries(grades).forEach(function ([grade, areas]) {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 10)) {
      trigonoThemes.forEach(theme => assert.ok(!Object.values(areas).flat().includes(theme), 'Vollstaendige Trigono-Erklaerung zu frueh: ' + school + '/' + grade + '/' + theme))
    }
  })
})
;[['gymnasium', '11GK', '1'], ['gymnasium', '11LK', '1'], ['bgy', '12GK', '2'], ['bgy', '12LK', '2']].forEach(function (entry) {
  rationalThemes.forEach(theme => assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes(theme), 'Gebrochen rationale Funktionen fehlen: ' + entry.join('/') + '/' + theme))
})
Object.entries(curriculum.themes).forEach(function ([school, grades]) {
  Object.entries(grades).forEach(function ([grade, areas]) {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      rationalThemes.forEach(theme => assert.ok(!Object.values(areas).flat().includes(theme), 'Vollstaendige Erklaerung zu frueh freigegeben: ' + school + '/' + grade + '/' + theme))
    }
  })
})
;[['gymnasium', '9', '1'], ['bgy', '12GK', '2'], ['bgy', '12LK', '2']].forEach(function (entry) {
  assert.ok(curriculum.themes[entry[0]][entry[1]][entry[2]].includes('polynomfunktion'), 'Polynomfunktion fehlt im Lehrplanfilter: ' + entry.join('/'))
})
Object.values(curriculum.themes.oberschule).forEach(function (areas) {
  assert.ok(!Object.values(areas).flat().includes('polynomfunktion'), 'Allgemeine Polynomfunktionen nicht ueber OS-Vorkenntnisse vorziehen')
})
Object.entries(curriculum.themes.gymnasium).forEach(function ([grade, areas]) {
  if (parseInt(grade, 10) < 9) assert.ok(!Object.values(areas).flat().includes('polynomfunktion'), 'Polynomfunktion vor Klasse 9: ' + grade)
})
assert.ok(!Object.values(curriculum.themes.bgy['11']).flat().includes('polynomfunktion'), 'Polynomfunktion im BGY ab Jahrgang 12/13')
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

const partialThemes = ['partielle ableitung', 'totales differential']
partialThemes.forEach(theme => {
  assert.ok(normalizedOptions.includes(theme), 'Partiell-Thema fehlt in der allgemeinen Themenauswahl: ' + theme)
  assert.ok(curriculum.themes.gymnasium['11LK'].extra.includes(theme), 'Partiell fehlt im LK-Wahlbereich: ' + theme)
  Object.entries(curriculum.themes).forEach(([school, grades]) => {
    Object.entries(grades).forEach(([grade, areas]) => {
      Object.entries(areas).forEach(([area, themes]) => {
        if (school !== 'gymnasium' || grade !== '11LK' || area !== 'extra') {
          assert.ok(!themes.includes(theme), 'Partiell faelschlich als Pflichtstoff freigegeben: ' + [school, grade, area, theme].join('/'))
        }
      })
    })
  })
})

assert.ok(normalizedOptions.includes('integration'), 'Integration fehlt in der erzeugten Themenauswahl')
const integrationRuleThemes = ['partielle integration', 'substitution', 'integralmittelwert']
const rotationThemes = ['rotationskorper', 'bogenlange']
rotationThemes.forEach(theme => {
  assert.ok(normalizedOptions.includes(theme), 'Rotations-Thema fehlt im Export: ' + theme)
  assert.ok(curriculum.themes.gymnasium['11LK']['5'].map(normalizeTag).includes(theme), 'Rotation fehlt in GY LK Integralrechnung')
  assert.ok(curriculum.themes.bgy['12LK']['3'].map(normalizeTag).includes(theme), 'Rotation fehlt in BGY LK Integralrechnung')
  for (const [school, grades] of Object.entries(curriculum.themes)) {
    for (const [grade, areas] of Object.entries(grades)) {
      for (const [area, themes] of Object.entries(areas)) {
        const intended = (school === 'gymnasium' && grade === '11LK' && area === '5') ||
          (school === 'bgy' && grade === '12LK' && area === '3')
        if (!intended) assert.ok(!themes.map(normalizeTag).includes(theme), 'Rotation im falschen Lernbereich: ' + [school,grade,area].join('/'))
      }
    }
  }
})
integrationRuleThemes.forEach(theme => assert.ok(normalizedOptions.includes(theme), 'Integrationsregel fehlt in der Themenauswahl: ' + theme))
;[['gymnasium', '11GK', '5'], ['gymnasium', '11LK', '5'], ['bgy', '12GK', '3'], ['bgy', '12LK', '3']].forEach(([school, grade, area]) => {
  assert.ok(curriculum.themes[school][grade][area].includes('integration'), 'Integration fehlt im passenden Lernbereich: ' + [school, grade, area].join('/'))
  integrationRuleThemes.forEach(theme => assert.ok(curriculum.themes[school][grade][area].includes(theme), 'Integrationsregel fehlt im passenden Lernbereich: ' + [school, grade, area, theme].join('/')))
})
Object.entries(curriculum.themes).forEach(([school, grades]) => {
  Object.entries(grades).forEach(([grade, areas]) => {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      assert.ok(!Object.values(areas).flat().includes('integration'), 'Geometrische Flaechen duerfen die Integration nicht zu frueh freigeben')
      assert.ok(!integrationRuleThemes.every(theme => Object.values(areas).flat().includes(theme)), 'Integrationsregeln werden zu frueh freigegeben')
    }
  })
})

const vectorLineSource = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '07_02_01_Vektorgerade.md'), 'utf8')
const vectorLineThemes = ['vektorgerade', 'abstand', 'schnittwinkel']
const vectorLineTags = vectorLineSource.match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag)
vectorLineThemes.forEach(theme => {
  assert.ok(vectorLineTags.includes(theme), 'Vektorgeraden-Inhaltstag fehlt: ' + theme)
  assert.ok(normalizedOptions.includes(theme), 'Vektorgeraden-Thema fehlt im Katalog: ' + theme)
})
;[['11GK', '7'], ['11LK', '8']].forEach(([grade, metricArea]) => {
  assert.ok(curriculum.themes.gymnasium[grade]['3'].includes('vektorgerade'), 'Vektorgerade fehlt in GY ' + grade + ' LB3')
  assert.ok(curriculum.themes.gymnasium[grade][metricArea].includes('schnittwinkel'), 'Schnittwinkel fehlt in GY ' + grade)
  assert.ok(curriculum.themes.gymnasium[grade][metricArea].includes('abstand'), 'Abstand fehlt in GY ' + grade)
})
;['12GK', '12LK'].forEach(grade => {
  ;['vektorgerade', 'schnittwinkel'].forEach(theme => {
    assert.ok(curriculum.themes.bgy[grade].extra.includes(theme), 'BGy-Wahlpflichtzuordnung fehlt: ' + grade + '/' + theme)
    assert.ok(!Object.entries(curriculum.themes.bgy[grade]).filter(([area]) => area !== 'extra').some(([, themes]) => themes.includes(theme)), 'Wahlpflichtinhalt darf nicht in reguläre BGy-Lernbereiche verschoben werden')
  })
})
Object.entries(curriculum.themes).forEach(([school, grades]) => {
  Object.entries(grades).forEach(([grade, areas]) => {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      assert.ok(!Object.values(areas).flat().includes('vektorgerade'), 'Vektorgeradenkurs wird zu früh eingeordnet')
    }
  })
})

const planeSource = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '07_03_01_Ebene.md'), 'utf8')
const planeThemes = ['vektorebene', 'abstand', 'schnittwinkel']
const planeTags = planeSource.match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag)
planeThemes.forEach(theme => {
  assert.ok(planeTags.includes(theme), 'Ebenen-Inhaltstag fehlt: ' + theme)
  assert.ok(normalizedOptions.includes(theme), 'Ebenen-Thema fehlt im Katalog: ' + theme)
})
;[['11GK', '7'], ['11LK', '8']].forEach(([grade, metricArea]) => {
  assert.ok(curriculum.themes.gymnasium[grade]['3'].includes('vektorebene'), 'Vektorebene fehlt in GY ' + grade + ' LB3')
  ;['abstand', 'schnittwinkel'].forEach(theme => {
    assert.ok(curriculum.themes.gymnasium[grade][metricArea].includes(theme), 'Metrisches Ebenenthema fehlt in GY ' + grade + ': ' + theme)
  })
})
;['12GK', '12LK'].forEach(grade => {
  assert.ok(curriculum.themes.bgy[grade].extra.includes('vektorebene'), 'BGy-Wahlpflichtzuordnung der Ebenen fehlt: ' + grade)
  assert.ok(!Object.entries(curriculum.themes.bgy[grade]).filter(([area]) => area !== 'extra').some(([, themes]) => themes.includes('vektorebene')), 'Ebenen dürfen nicht in reguläre BGy-Lernbereiche verschoben werden')
})
Object.entries(curriculum.themes).forEach(([school, grades]) => {
  Object.entries(grades).forEach(([grade, areas]) => {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      assert.ok(!Object.values(areas).flat().includes('vektorebene'), 'Vektorebenen werden zu früh eingeordnet')
    }
  })
})

const planeFormsSource = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '07_03_02_Formen.md'), 'utf8')
const planeFormsThemes = ['parameterform', 'normalenform', 'koordinatenform']
const planeFormsTags = planeFormsSource.match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag)
planeFormsThemes.forEach(theme => {
  assert.ok(planeFormsTags.includes(theme), 'Ebenenformen-Inhaltstag fehlt: ' + theme)
  assert.ok(normalizedOptions.includes(theme), 'Ebenenformen-Thema fehlt im Katalog: ' + theme)
})
;[['11GK', '7'], ['11LK', '8']].forEach(([grade, metricArea]) => {
  ;['parameterform', 'koordinatenform'].forEach(theme => {
    assert.ok(curriculum.themes.gymnasium[grade]['3'].includes(theme), 'Ebenendarstellung fehlt in GY ' + grade + ' LB3: ' + theme)
  })
  assert.ok(curriculum.themes.gymnasium[grade][metricArea].includes('normalenform'), 'Normalenform fehlt in GY ' + grade)
  assert.ok(!curriculum.themes.gymnasium[grade]['3'].includes('normalenform'), 'Vollstaendiger Formenwechsel benötigt auch Normalenvektoren')
})
;['12GK', '12LK'].forEach(grade => {
  planeFormsThemes.forEach(theme => {
    assert.ok(curriculum.themes.bgy[grade].extra.includes(theme), 'BGy-Wahlpflichtzuordnung der Ebenenformen fehlt: ' + grade + '/' + theme)
    assert.ok(!Object.entries(curriculum.themes.bgy[grade]).filter(([area]) => area !== 'extra').some(([, themes]) => themes.includes(theme)), 'Ebenenformen dürfen nicht in reguläre BGy-Lernbereiche verschoben werden')
  })
})
Object.entries(curriculum.themes).forEach(([school, grades]) => {
  Object.entries(grades).forEach(([grade, areas]) => {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      assert.ok(!planeFormsThemes.some(theme => Object.values(areas).flat().includes(theme)), 'Ebenenformen werden zu früh eingeordnet')
    }
  })
})

const vectorGeometrySource = fs.readFileSync(path.join(repositoryRoot, 'Repetitorium', 'Erklaerungen', '07_04_01_VekGeo.md'), 'utf8')
const vectorGeometryThemes = ['spatprodukt', 'kugelgleichung', 'tangentialebene', 'polarebene']
const vectorGeometryTags = vectorGeometrySource.match(/^tags:\s*(.+)$/m)[1].split(',').map(normalizeTag)
vectorGeometryThemes.forEach(theme => {
  assert.ok(vectorGeometryTags.includes(theme), 'Vektorgeometrie-Inhaltstag fehlt: ' + theme)
  assert.ok(normalizedOptions.includes(theme), 'Vektorgeometrie-Thema fehlt im Katalog: ' + theme)
  ;[['11GK', '8'], ['11LK', '9']].forEach(([grade, area]) => {
    assert.ok(curriculum.themes.gymnasium[grade][area].includes(theme), 'Vektorgeometrie-Vertiefung fehlt in GY ' + grade + ': ' + theme)
    assert.ok(!Object.entries(curriculum.themes.gymnasium[grade]).filter(([key]) => key !== area).some(([, tags]) => tags.includes(theme)), 'Vektorgeometrie-Vertiefung darf nicht vorgezogen werden')
  })
  ;['12GK', '12LK'].forEach(grade => {
    assert.ok(curriculum.themes.bgy[grade].extra.includes(theme), 'BGy-Wahlpflichtvertiefung fehlt: ' + theme)
    assert.ok(!Object.entries(curriculum.themes.bgy[grade]).filter(([area]) => area !== 'extra').some(([, tags]) => tags.includes(theme)), 'Vektorgeometrie-Vertiefung darf nicht in regulaere BGy-Lernbereiche verschoben werden')
  })
})
Object.entries(curriculum.themes).forEach(([school, grades]) => {
  Object.entries(grades).forEach(([grade, areas]) => {
    if (school === 'oberschule' || (school === 'gymnasium' && parseInt(grade, 10) < 11) || (school === 'bgy' && parseInt(grade, 10) < 12)) {
      assert.ok(!vectorGeometryThemes.some(theme => Object.values(areas).flat().includes(theme)), 'Vektorgeometrie-Vertiefung wird zu frueh eingeordnet')
    }
  })
})

console.log('Site-Pruefung erfolgreich: ' + optionValues.length + ' Themenwerte, ' + categoryAttributes.length + ' Karten, ' + compiledScripts + ' Inline-Skripte.')
