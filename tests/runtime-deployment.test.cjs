const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const repository = path.resolve(__dirname, '..')
const expectedRelease = '1.0.1'
const required = [
  'course.html',
  'course-frame.html',
  'assets/course-source.js',
  'assets/course-generator.js',
  'assets/course-player.js',
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

function assertVersionedScripts(source, files, label, prefix) {
  for (const file of files) {
    const reference = 'src="' + (prefix || '') + file + '?v=' + expectedRelease + '"'
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

  const frame = fs.readFileSync(path.join(root, 'course-frame.html'), 'utf8')
  const player = fs.readFileSync(path.join(root, 'assets/course-player.js'), 'utf8')
  assert.match(frame, /courseUri\.startsWith\('parent:'\)/, 'course-frame.html muss parent:-Quellen weiter annehmen')
  assert.match(player, /const uri = 'parent:' \+ identity/, 'course-player.js muss den parent:-Handshake weiter verwenden')

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
