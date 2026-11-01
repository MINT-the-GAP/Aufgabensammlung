const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const required = [
  'index.html', 'course.html', 'course-frame.html',
  'assets/course-source.js', 'assets/course-generator.js', 'assets/course-player.js',
  'assets/vendor/fflate-0.8.2.min.js', 'assets/vendor/fflate-LICENSE.txt',
  'assets/course-catalog.js', 'assets/course-catalog.json'
]
const prefix = '/Aufgabensammlung/'
const site = 'https://deployment.example'

function exactFile(directory, relative) {
  let current = directory
  for (const segment of relative.split('/').filter(Boolean)) {
    assert.ok(fs.readdirSync(current).includes(segment), 'Fehlende Datei oder falsche Gross-/Kleinschreibung: ' + relative)
    current = path.join(current, segment)
  }
  assert.ok(fs.statSync(current).isFile(), 'Keine Datei: ' + relative)
  return current
}

function testDeployment(directory) {
  const root = path.resolve(directory)
  for (const file of required) exactFile(root, file)
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  const generator = require(path.join(root, 'assets/course-generator.js'))
  assert.equal(generator.release, '1.0.9')
  assert.match(index, /id="courseGeneratorSubmit"[^>]*>Kurs im LiveEditor generieren</)
  assert.match(index, /id="courseGeneratorDirectSubmit"[^>]*>Kurs direkt generieren</)
  assert.match(index, /function buildDirectCourseUrl\(/)
  assert.match(index, /src=[\x22\x27]assets\/course-generator\.js\?v=1\.0\.9[\x22\x27]/)
  assert.match(index, /src=[\x22\x27]assets\/course-catalog\.js\?v=1\.0\.9[\x22\x27]/)
  assert.match(index, /src=[\x22\x27]assets\/course-source\.js\?v=1\.0\.9[\x22\x27]/)
  let resources = 0
  let scripts = 0
  for (const file of required) {
    const source = fs.readFileSync(path.join(root, file), 'utf8')
    assert.ok(!/file:\/\/|[A-Z]:[\\/](?:Users|Windows|Program Files)[\\/]|https?:\/\/(?:localhost|127\.0\.0\.1)(?=[:/])/i.test(source), 'Lokale Entwicklungsadresse im Produkt: ' + file)
    if (file.endsWith('.js')) {
      new vm.Script(source, { filename: file })
      scripts++
      continue
    }
    for (const script of source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (/application\/ld\+json/.test(script[1]) || !script[2].trim()) continue
      new vm.Script(script[2], { filename: file })
      scripts++
    }
    const markup = source.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>')
    for (const tag of markup.matchAll(/<(?:script|link|img|source|video|audio|iframe)\b[^>]*>/gi)) {
      for (const attr of tag[0].matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/gi)) {
        const value = attr[2].replace(/&amp;/g, '&')
        if (!value || value.startsWith('#')) continue
        const url = new URL(value, site + prefix + file)
        if (url.origin !== site) continue
        assert.ok(url.pathname.startsWith(prefix), 'Ressource verlaesst den GitHub-Pages-Unterpfad: ' + value)
        exactFile(root, decodeURIComponent(url.pathname.slice(prefix.length)))
        resources++
      }
    }
  }
  assert.ok(resources >= 4, 'Keine lokalen Produktressourcen geprueft')
  return { files: required.length, resources, scripts }
}

module.exports = { testDeployment }
if (require.main === module) {
  assert.ok(process.argv[2], 'Aufruf: node tests/deployment.test.cjs PAGES_VERZEICHNIS')
  console.log('Deployment-Dateien erfolgreich geprueft: ' + JSON.stringify(testDeployment(process.argv[2])))
}
