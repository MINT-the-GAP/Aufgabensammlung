const fs = require('fs')
const path = require('path')

const TARGET_FILE = 'ziel.html'
const SCRIPT_START = '<!-- SCHULLIA_CUSTOM_SCRIPT_START -->'
const SCRIPT_END = '<!-- SCHULLIA_CUSTOM_SCRIPT_END -->'
const STYLE_START = '<!-- SCHULLIA_THEME_START -->'
const STYLE_END = '<!-- SCHULLIA_THEME_END -->'

function replaceOnce(html, regex, replacer) {
  return regex.test(html) ? html.replace(regex, replacer) : html
}

function extractTargetParts(targetHtml) {
  const styleMatch = targetHtml.match(/<style>[\s\S]*?--color-background[\s\S]*?<\/style>/i)
  const heroMatch = targetHtml.match(
    /<div class="col-lg-6 col-md-8 mx-auto">[\s\S]*?<\/div>\s*(?=<\/div>\s*<\/section>)/i
  )
  const scriptMatch = targetHtml.match(
    /<script>[\s\S]*?buildCustomMenuFromSelect[\s\S]*?<\/script>/i
  )

  if (!styleMatch || !heroMatch || !scriptMatch) {
    throw new Error('Konnte Design-Bloecke in ziel.html nicht eindeutig finden.')
  }

  return {
    style: `${STYLE_START}\n${styleMatch[0]}\n${STYLE_END}`,
    hero: heroMatch[0],
    script: `${SCRIPT_START}\n${scriptMatch[0]}\n${SCRIPT_END}`,
  }
}

function applyFallbackPatch(html) {
  html = html.replace(
    /<option value="" selected>All categories<\/option>/i,
    '<option value="" selected>Alle Kategorien</option>'
  )

  html = replaceOnce(
    html,
    /<h1 class="fw-light">[\s\S]*?<\/h1>/i,
    '<h1 class="fw-light"><img src="./pics/grad/SchulLia.png" alt="LiaScript Icon" style="height: 1em; width: 1em; margin-right: 0.28em; vertical-align: -0.12em;">SchulLia</h1>'
  )

  return html
}

function patchIndexHtml(html, targetParts) {
  html = html.replace(
    /<option value="" selected>All categories<\/option>/i,
    '<option value="" selected>Alle Kategorien</option>'
  )

  html = replaceOnce(
    html,
    /<div class="col-lg-6 col-md-8 mx-auto">[\s\S]*?<\/div>\s*(?=<\/div>\s*<\/section>)/i,
    targetParts.hero
  )

  html = replaceOnce(
    html,
    /<p>In dieser Aufgabensammlung[\s\S]*?Sekundarstufe I und II\.<\/p>/,
    `<div class="card">
                  <div class="card-header">In dieser Aufgabensammlung sind mehrere Schwierigkeitsgrade, Vernetzungsgrade und Anforderungsbereiche abgedeckt. Sie wird kontinuierlich weiterentwickelt und bietet eine Vielzahl an Aufgaben für die Sekundarstufe I und II.</div>
                </div>`
  )

  // Ensure category section headers are bold (e.g. #### Aufgabensets).
  html = html.replace(
    /<div class="card-header">\s*<h4 id='([^']+)'>(.*?)<\/h4>\s*<\/div>/g,
    `<div class="card-header">
                                     <h4 id='$1'><strong>$2</strong></h4>

                                </div>`
  )

  // Keep the introductory card text bold as requested.
  html = html.replace(
    /<p class="card-text">\s*In dieser Kachel befinden sich zusammengestellte Aufgaben zum Ueben fuer Abschlusspruefungen\.\s*<\/p>/g,
    '<p class="card-text"><strong>In dieser Kachel befinden sich zusammengestellte Aufgaben zum Ueben fuer Abschlusspruefungen.</strong></p>'
  )
  html = html.replace(
    /<p class="card-text">\s*In dieser Kachel befinden sich zusammengestellte Aufgaben zum Üben für Abschlussprüfungen\.\s*<\/p>/g,
    '<p class="card-text"><strong>In dieser Kachel befinden sich zusammengestellte Aufgaben zum Üben für Abschlussprüfungen.</strong></p>'
  )

  // Ensure native select class and category label are always correct.
  html = html.replace(
    /<select id="categorySelect" class="form-select"/i,
    '<select id="categorySelect" class="form-select native-select-source"'
  )
  html = html.replace(
    /<select id="operatorSelect" class="form-select mt-2"/i,
    '<select id="operatorSelect" class="form-select native-select-source"'
  )

  // Remove previous injected blocks to keep patch idempotent.
  html = html.replace(
    new RegExp(`${SCRIPT_START}[\\s\\S]*?${SCRIPT_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${STYLE_START}[\\s\\S]*?${STYLE_END}`, 'g'),
    ''
  )

  if (html.includes('</head>')) {
    html = html.replace('</head>', `\n${targetParts.script}\n${targetParts.style}\n</head>`)
  }

  return html
}

const indexPath = path.join(__dirname, 'index.html')
const targetPath = path.join(__dirname, TARGET_FILE)
const html = fs.readFileSync(indexPath, 'utf8')

let patchedHtml = html

if (!fs.existsSync(targetPath)) {
  patchedHtml = applyFallbackPatch(html)
  fs.writeFileSync(indexPath, patchedHtml, 'utf8')
  console.log('index.html wurde mit Fallback gepatcht (ziel.html nicht gefunden).')
} else {
  try {
    const targetHtml = fs.readFileSync(targetPath, 'utf8')
    const targetParts = extractTargetParts(targetHtml)
    patchedHtml = patchIndexHtml(html, targetParts)
    fs.writeFileSync(indexPath, patchedHtml, 'utf8')
    console.log('index.html wurde gepatcht (SchulLia Design aus ziel.html).')
  } catch (error) {
    patchedHtml = applyFallbackPatch(html)
    fs.writeFileSync(indexPath, patchedHtml, 'utf8')
    console.log('index.html wurde mit Fallback gepatcht (ziel.html konnte nicht ausgewertet werden).')
  }
}
