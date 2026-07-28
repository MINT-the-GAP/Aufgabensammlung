const assert = require('assert')
const fs = require('fs')
const path = require('path')

const repositoryRoot = path.resolve(__dirname, '..')
const freezeReadme = fs.readFileSync(
  path.join(repositoryRoot, 'imports', 'FreezeREADME.md'),
  'utf8'
)

function mainHeader(markdown) {
  const match = markdown.match(/^<!--\r?\n([\s\S]*?)\r?\n-->/)
  assert.ok(match, 'FreezeREADME.md hat keinen gültigen LiaScript-Hauptheader')
  return match[1]
}

function blockMacros(header) {
  const lines = header.split(/\r?\n/)
  const macros = new Map()

  for (let index = 0; index < lines.length; index += 1) {
    const start = lines[index].match(/^@(\w[\w\d._-]*)\s*$/)
    if (!start) continue

    const body = []
    index += 1
    while (index < lines.length && lines[index] !== '@end') {
      body.push(lines[index])
      index += 1
    }

    assert.ok(index < lines.length, `Blockmakro @${start[1]} endet nicht mit @end`)
    macros.set(start[1], body.join('\n'))
  }

  return macros
}

const macros = blockMacros(mainHeader(freezeReadme))

assert.ok(macros.has('ADetails'), '@ADetails muss als eigenständiges Blockmakro definiert sein')
assert.ok(
  !macros.has('resetter'),
  'FreezeREADME.md darf @resetter nicht definieren; das Makro gehört lia-resetter'
)
assert.strictEqual(
  macros.get('ADetails').trim(),
  '<span class="lia-assignment-details" data-adetails="@0" style="display:none !important;"></span>'
)

console.log('Template-Makros erfolgreich geprüft: @ADetails ist eigenständig, @resetter kollisionsfrei.')
