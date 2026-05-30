const fs = require('fs')
const path = require('path')

function injectAfter(source, anchor, insert) {
  if (source.includes(insert)) return source
  return source.includes(anchor) ? source.replace(anchor, `${anchor}${insert}`) : source
}

function patchIndexHtml(html) {
  html = html.replace('<option value="" selected>All categories</option>', '<option value="" selected>Alle Kategorien</option>')

  // SchulLia icon (requested origami SVG)
  html = html.replace(
    /<h1 class="project-title">[\s\S]*?<\/h1>/,
    '<h1 class="project-title"><img src="https://liascript.github.io/course/icon.svg" alt="LiaScript Icon" style="height: 1em; width: 1em; margin-right: 0.28em; vertical-align: -0.12em;">SchulLia</h1>'
  )

  // Keep native sources hidden when custom dropdowns are used
  html = injectAfter(
    html,
    'select.form-select:focus {\n                border-color: var(--accent);\n                box-shadow: 0 0 0 0.2rem rgba(20, 115, 117, 0.2);\n            }',
    '\n\n            .native-select-source {\n                display: none !important;\n            }\n'
  )

  // Ensure custom dropdown max 12 lines and consistent typography
  html = html.replace(
    /select\.form-select \{[\s\S]*?\}/,
    `select.form-select {\n                border: 2px solid rgba(20, 115, 117, 0.42);\n                border-radius: 12px;\n                background-color: rgba(255, 255, 255, 0.95);\n                color: var(--accent-ink);\n                font-weight: 700;\n                font-size: 1rem;\n                line-height: 1.25;\n                box-shadow: 0 8px 18px rgba(8, 34, 40, 0.12);\n            }`
  )
  html = injectAfter(
    html,
    '.difficulty-menu {',
    '\n                max-height: calc(12 * 2.35em);\n                overflow-y: auto;'
  )

  // Hide native selects for category/operator as source stores
  html = html.replace(
    /<select id="categorySelect" class="form-select"/,
    '<select id="categorySelect" class="form-select native-select-source"'
  )
  html = html.replace(
    /<select id="operatorSelect" class="form-select mt-2"/,
    '<select id="operatorSelect" class="form-select native-select-source"'
  )

  return html
}

const indexPath = path.join(__dirname, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')
const patchedHtml = patchIndexHtml(html)
fs.writeFileSync(indexPath, patchedHtml, 'utf8')
console.log('index.html wurde gepatcht.')
