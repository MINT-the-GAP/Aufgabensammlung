const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const repository = path.resolve(__dirname, '..')
const expectedRelease = '1.0.7'
const required = [
  'course.html',
  'course-frame.html',
  'assets/course-source.js',
  'assets/course-generator.js',
  'assets/course-player.js',
  'assets/vendor/fflate-0.8.2.min.js',
  'assets/vendor/fflate-LICENSE.txt',
  'assets/course-catalog.js',
  'assets/course-catalog.json',
]

function exactFile(directory, relative) {
  let current = directory
  for (const segment of relative.split('/').filter(Boolean)) {
    assert.ok(
      fs.readdirSync(current).includes(segment),
      'Fehlende Runtime-Datei oder falsche Gross-/Kleinschreibung: ' + relative
    )
    current = path.join(current, segment)
  }
  assert.ok(fs.statSync(current).isFile(), 'Keine Runtime-Datei: ' + relative)
  return current
}

function assertVersionedScripts(source, files, label, prefix, release) {
  for (const file of files) {
    const reference = 'src="' + (prefix || '') + file + '?v=' + (release || expectedRelease) + '"'
    assert.ok(source.includes(reference), label + ' muss ' + reference + ' laden')
  }
}

function testRuntimeDeployment(directory) {
  const root = path.resolve(directory)
  for (const file of required) exactFile(root, file)

  const generatorPath = path.join(root, 'assets/course-generator.js')
  delete require.cache[require.resolve(generatorPath)]
  const generator = require(generatorPath)
  assert.equal(generator.release, expectedRelease, 'Die öffentliche Runtime-Release muss stabil sein')

  const course = fs.readFileSync(path.join(root, 'course.html'), 'utf8')
  assertVersionedScripts(
    course,
    ['course-generator.js', 'course-source.js', 'course-player.js'],
    'course.html',
    './assets/'
  )
  assertVersionedScripts(
    course,
    ['fflate-0.8.2.min.js'],
    'course.html',
    './assets/vendor/',
    '0.8.2'
  )
  assert.ok(
    course.indexOf('fflate-0.8.2.min.js?v=0.8.2') < course.indexOf('course-player.js?v=' + expectedRelease),
    'Der gepinnte gzip-Codec muss vor course-player.js geladen werden'
  )
  assert.doesNotMatch(course, /(?:unpkg|jsdelivr|cdnjs)[^"']*fflate/i, 'Der Codec darf nicht von einem CDN abhängen')

  const codec = fs.readFileSync(path.join(root, 'assets/vendor/fflate-0.8.2.min.js'), 'utf8')
  const codecLicense = fs.readFileSync(path.join(root, 'assets/vendor/fflate-LICENSE.txt'), 'utf8')
  assert.match(codec, /^\/\*! fflate 0\.8\.2 \| MIT License \| Copyright \(c\) 2023 Arjun Barrett/)
  assert.match(codecLicense, /MIT License[\s\S]*Copyright \(c\) 2023 Arjun Barrett/)

  const frame = fs.readFileSync(path.join(root, 'course-frame.html'), 'utf8')
  const player = fs.readFileSync(path.join(root, 'assets/course-player.js'), 'utf8')
  assert.match(frame, /courseUri\.startsWith\('parent:'\)/, 'course-frame.html muss parent:-Quellen weiter annehmen')
  assert.match(frame, /link\[rel~="stylesheet"\]\[href\]/, 'Offizielle Stylesheets müssen vor dem Frame-Start markiert werden')
  assert.match(frame, /crossOrigin\s*=\s*'anonymous'/, 'Shadow-DOM-CSSOM benötigt einen anonymen CORS-Stylesheetabruf')
  assert.match(player, /const uri = 'parent:' \+ identity/, 'course-player.js muss den parent:-Handshake weiter verwenden')
  assert.match(player, /const RUNTIME_RELEASE = '1\.0\.7'/, 'Die Frame-Identität muss die Runtime-Release cache-busten')
  assert.match(player, /https:\/\/liascript\.github\.io\/course\/\?/, 'Lernpfade müssen den offiziellen LiaScript-Viewer verwenden')
  assert.match(player, /Content-Encoding=gzip;base64,/, 'Lernpfade müssen als komprimierte LiaScript-Data-URI übergeben werden')
  assert.match(player, /Object\.freeze\(\{ level: 6, mem: 8, mtime: 0 \}\)/, 'Die gzip-Ausgabe braucht vollständig gepinnte Optionen')
  assert.match(player, /codec\.gzipSync\(new window\.TextEncoder\(\)\.encode\(source\), GZIP_OPTIONS\)/, 'course-player.js muss den lokalen synchronen Codec verwenden')
  assert.doesNotMatch(player, /CompressionStream/, 'Engine-abhängiges CompressionStream darf die kanonische URL nicht erzeugen')

  const index = fs.readFileSync(path.join(repository, 'index.html'), 'utf8')
  const patch = fs.readFileSync(path.join(repository, 'patch.js'), 'utf8')
  const indexScripts = ['assets/course-generator.js', 'assets/course-catalog.js', 'assets/course-source.js']
  assertVersionedScripts(index, indexScripts, 'index.html')
  assertVersionedScripts(patch, indexScripts, 'patch.js')

  return { release: generator.release, files: required.length }
}

function workflowStep(workflow, name) {
  const marker = '      - name: ' + name
  const position = workflow.indexOf(marker)
  assert.ok(position >= 0, 'Workflow-Schritt fehlt: ' + name)
  return position
}

function testWorkflow() {
  const workflow = fs.readFileSync(path.join(repository, '.github/workflows/deploy.yaml'), 'utf8')
  assert.match(workflow, /concurrency:\s*\n\s+group: aufgabensammlung-pages\s*\n\s+cancel-in-progress: true/)

  const coreTests = workflowStep(workflow, 'Test course generation')
  const prepareRuntime = workflowStep(workflow, 'Prepare shared runtime deployment')
  const testRuntime = workflowStep(workflow, 'Test shared runtime deployment')
  const deployRuntime = workflowStep(workflow, 'Deploy shared runtime to GitHub Pages')
  const setupExporter = workflowStep(workflow, 'Set up dependencies')
  const generateSite = workflowStep(workflow, 'Generate WebSite')
  const deploySite = workflowStep(workflow, 'Deploy to GitHub Pages')

  assert.ok(
    coreTests < prepareRuntime &&
    prepareRuntime < testRuntime &&
    testRuntime < deployRuntime &&
    deployRuntime < setupExporter &&
    setupExporter < generateSite &&
    generateSite < deploySite,
    'Die kleine Runtime muss nach den Coretests und vor Liaex veröffentlicht werden'
  )

  const earlyBlock = workflow.slice(deployRuntime, setupExporter)
  assert.match(earlyBlock, /uses: peaceiris\/actions-gh-pages@v4/)
  assert.match(earlyBlock, /publish_dir: runtime-deploy/)
  assert.match(earlyBlock, /keep_files: true/)

  const prepareBlock = workflow.slice(prepareRuntime, testRuntime)
  for (const file of required) {
    assert.ok(
      prepareBlock.includes('runtime-deploy/' + file),
      'Runtime-Staging fehlt im Workflow: ' + file
    )
  }

  const fullBlock = workflow.slice(deploySite)
  assert.match(fullBlock, /uses: peaceiris\/actions-gh-pages@v4/)
  assert.match(fullBlock, /publish_dir: gh-pages-deploy/)
  assert.match(fullBlock, /force_orphan: true/, 'Der vollständige spätere Pages-Deploy muss erhalten bleiben')
}

module.exports = { testRuntimeDeployment, testWorkflow }

if (require.main === module) {
  const directory = process.argv[2] || repository
  const result = testRuntimeDeployment(directory)
  testWorkflow()
  console.log('Runtime-Deployment und Workflow-Reihenfolge erfolgreich geprüft: ' + JSON.stringify(result))
}
