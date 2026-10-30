const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const root = path.resolve(__dirname, '..')
const raw = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/'

function productFile(name) {
  for (const directory of ['imports', 'assets', 'scripts']) {
    const file = path.join(root, directory, name)
    if (fs.existsSync(file)) return file
  }
  throw new Error('Produktdatei fehlt: ' + name)
}

function testCourseAssembly() {
  const assembler = require(productFile('course-source.js'))
  const generator = require(productFile('course-generator.js'))
  assert.equal(typeof assembler.build, 'function')
  const firstUrl = raw + '06_Stochastik/02_Baumdiagramme/Aufgabe_0001.md'
  const secondUrl = raw + '01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0001.md'
  const style = '@style\n.first {\n  color: red;\n}\n.second {\n  color: blue;\n}\n@end'
  const macro = '@Evaluate\n<script>\nif (true) {\n  console.log("value");\n}\n</script>\n@end'
  const firstBody = [
    '# Wahrscheinlichkeiten äöü 🧮',
    '',
    '![Baum](./pictures/tree.svg)',
    '<img src="../shared/graph.png" alt="Grafik">',
    '',
    '[[ 0.5 ]]',
    '',
    '```markdown',
    '![Unverändert](./code-example.png)',
    '```',
    '',
    '<script>',
    'const example = "![Code](./code-string.png)";',
    '</script>'
  ].join('\n')
  const secondBody = '# Brüche\n\n![Absolut](https://example.org/absolute.png)\n\n[Hier](#abschnitt)\n\n[[ 1/2 ]]'
  const first = '<!--\nlanguage: de\nversion: 1.0.0\nimport: ./Template.md\n        ../shared/Other.md\nscript: ./local.js\nlink: ./local.css\nauthor: Anna\ntags: Dreieck, Brüche\n\n' + style + '\n\n' + macro + '\n-->\n\n' + firstBody
  const second = '<!--\nlanguage: de\nversion: 1.0.0\nimport: ' + new URL('./Template.md', firstUrl).href + '\nauthor: Ben\ntags: Bruchrechnung\n\n' + macro + '\n-->\n\n' + secondBody
  const source = assembler.build([{ url: firstUrl, content: first }, { url: secondUrl, content: second }], { group: 'einsteiger', themes: ['bruchrechnung'] })
  assert.ok(source.startsWith('<!--'), 'Genau ein vollständiger Kurskopf muss erhalten bleiben')
  const header = source.slice(0, source.indexOf('-->'))
  assert.ok(header.includes(style), 'CSS-Blöcke einschließlich Einrückung und beider Klammern erhalten')
  assert.ok(header.includes(macro), 'Vollständige Makroblöcke einschließlich @end erhalten')
  assert.equal(source.split(macro).length - 1, 1, 'Identische vollständige Makros nur einmal übernehmen')
  assert.equal(source.split(new URL('./Template.md', firstUrl).href).length - 1, 1, 'Gleiche Importadresse nur einmal übernehmen')
  assert.ok(header.includes(new URL('../shared/Other.md', firstUrl).href), 'Fortsetzungsimporte relativ zur richtigen Quelldatei auflösen')
  assert.ok(header.includes(new URL('./local.js', firstUrl).href), 'Relative Skriptressourcen auflösen')
  assert.ok(header.includes(new URL('./local.css', firstUrl).href), 'Relative Stylesheets auflösen')
  assert.ok(source.includes(new URL('./pictures/tree.svg', firstUrl).href), 'Markdownbilder relativ zur Quelle auflösen')
  assert.ok(source.includes(new URL('../shared/graph.png', firstUrl).href), 'HTMLbilder relativ zur Quelle auflösen')
  assert.ok(source.includes('![Unverändert](./code-example.png)'), 'Codebeispiele nicht in Medienverweise umschreiben')
  assert.ok(source.includes('const example = "![Code](./code-string.png)";'), 'JavaScript-Quelltexte unverändert erhalten')
  assert.ok(source.includes('![Absolut](https://example.org/absolute.png)'))
  assert.ok(source.includes('[Hier](#abschnitt)'))
  assert.ok(source.includes('[[ 0.5 ]]') && source.includes('[[ 1/2 ]]'), 'Quizsyntax und Aufgabenauswahl erhalten')
  assert.ok(source.indexOf('# Wahrscheinlichkeiten') < source.indexOf('# Brüche'), 'Auswahlreihenfolge erhalten')
  assert.match(header, /author:.*Anna.*Ben/)
  assert.match(header, /Bruchrechnung/)
  assert.equal((header.match(/^language:/gm) || []).length, 1)
  assert.equal((header.match(/^version:/gm) || []).length, 1)
  assert.ok(!source.includes('@Auswertung') && !source.includes('@Abgabe'), 'Keine unbestellten zusätzlichen Kursfolien erzeugen')

  const learningDocument = {
    url: firstUrl,
    content: '<!--\nlanguage: de\nmode: Presentation\nimport: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md\nimport: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md\nauthor: Anna\nlicense: CC BY 4.0\n-->\n\n# Aufgabe\n\n[[ 2 ]]\n\n@ADetails(BE=2;Bruchrechnung)\n\n[[?]] @Explain',
  }
  const learningManifest = {
    offer: 'weitere-uebungen',
    topic: 'Bruchrechnung',
    level: 'fortgeschrittene',
  }
  const learningSource = generator.buildCourse([learningDocument], {
    assembler,
    sourceOptions: generator.learningPathSourceOptions(learningManifest),
  })
  const learningHeader = assembler.split(learningSource).header
  assert.ok(!/lia-freeze|FreezeREADME/i.test(learningHeader), 'Lernpfad importiert Freeze nicht')
  assert.match(learningHeader, /lia-mathpath/)
  assert.match(learningHeader, /^lernpfad-level: Fortgeschritten$/m)
  assert.match(learningHeader, /^mode: Presentation$/m)
  assert.ok(!/^mode: Textbook$/m.test(learningHeader), 'Lernpfadkurse bleiben im Präsentationsmodus')
  assert.match(learningHeader, /^author: Anna$/m)
  assert.match(learningHeader, /^license: CC BY 4\.0$/m)
  assert.ok(learningSource.includes('@ADetails(BE=2;Bruchrechnung)') && learningSource.includes('@Explain'))
  assert.ok(learningSource.trim().endsWith('# Dein weiterer Lernpfad\n\n@Lernpfad'))

  // Exercise a real complex source: this catches line-wise de-duplication of
  // repeated CSS braces in addition to the small synthetic example above.
  const treeFile = path.join(root, '06_Stochastik/02_Baumdiagramme/Aufgabe_0001.md')
  const tree = fs.readFileSync(treeFile, 'utf8')
  const real = assembler.build([{ url: firstUrl, content: tree }])
  const originalStyle = tree.match(/@style\r?\n[\s\S]*?\r?\n@end/)[0].replace(/\r\n/g, '\n')
  assert.ok(real.replace(/\r\n/g, '\n').includes(originalStyle), 'Den tatsächlichen Baumdiagramm-CSS-Block vollständig erhalten')
  const conflict = '<!--\n@Evaluate\n<script>42</script>\n@end\n-->\n\n# Zweite Aufgabe'
  assert.throws(() => assembler.build([{ url: firstUrl, content: first }, { url: secondUrl, content: conflict }]), /Evaluate|Makro|macro/i, 'Widersprüchliche Makrodefinitionen dürfen nicht still überschrieben werden')
}

async function testFrameBootstrap(frameHtml) {
  const marker = "navigation.textContent = '(' + "
  const start = frameHtml.indexOf(marker)
  const end = frameHtml.indexOf(".toString() + ')()'", start)
  assert.ok(start >= 0 && end > start, 'Der eingebettete Frame-Bootstrap muss prüfbar sein')
  const bootstrap = frameHtml.slice(start + marker.length, end)
  const blobs = new Map()
  const released = []
  const handlers = new Map()
  const messages = new Map()
  const fetched = []
  class TestBlob {
    constructor(parts, options) { this.parts = parts; this.options = options }
  }
  class TestWorker {
    constructor(url, options) { this.url = url; this.options = options; this.handlers = new Map() }
    addEventListener(name, callback) { this.handlers.set(name, callback) }
  }
  class TestURL extends URL {
    static createObjectURL(blob) {
      const url = 'blob:course-test/' + (blobs.size + 1)
      blobs.set(url, blob)
      return url
    }
    static revokeObjectURL(url) { released.push(url) }
  }
  const ownUri = 'https://school.example/course-frame.html?parent:example-id#1'
  function themeElement(className) {
    let names = new Set(className.split(/\s+/).filter(Boolean))
    return {
      style: {},
      get className() { return Array.from(names).join(' ') },
      set className(value) { names = new Set(value.split(/\s+/).filter(Boolean)) },
      classList: { add(name) { names.add(name) }, remove(name) { names.delete(name) } }
    }
  }
  const parentRoot = themeElement('wrapper-owned lia-theme-previous lia-variant-dark')
  const parentBody = themeElement('')
  const sample = themeElement('lia-btn')
  const parent = { document: { documentElement: parentRoot, body: parentBody, getElementById: () => sample } }
  const frameRoot = themeElement('lia-theme-default lia-variant-light lia-font-scale-1')
  const frameBody = themeElement('')
  const frameButton = themeElement('lia-btn')
  const bodyStyle = { backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(75, 75, 75)', colorScheme: 'normal' }
  const accentStyle = { backgroundColor: 'rgba(0, 0, 0, 0)', borderTopColor: 'rgb(20, 115, 117)', color: 'rgb(20, 115, 117)' }
  const animationFrames = []
  const observers = []
  class TestMutationObserver {
    constructor(callback) { this.callback = callback; observers.push(this) }
    observe() {}
    disconnect() {}
  }
  const window = {
    Blob: TestBlob, Worker: TestWorker, RegExp, parent, location: new URL(ownUri),
    addEventListener(name, callback) { messages.set(name, callback) },
    fetch(...args) { fetched.push(args); return Promise.resolve(new Response('network')) },
    requestAnimationFrame(callback) { animationFrames.push(callback) },
    getComputedStyle(element) { return element === frameBody ? bodyStyle : element === frameButton ? accentStyle : { backgroundColor: 'rgba(0, 0, 0, 0)' } }
  }
  const document = {
    documentElement: frameRoot, body: frameBody,
    querySelector: () => frameButton,
    addEventListener(name, callback, capture) { handlers.set(name, { callback, capture }) }
  }
  const context = vm.createContext({ window, document, URL: TestURL, Response, DOMException, MutationObserver: TestMutationObserver })
  vm.runInContext('(' + bootstrap + ')()', context, { filename: 'course-frame-bootstrap' })

  function flushTheme() { while (animationFrames.length) animationFrames.shift()() }
  flushTheme()
  assert.equal(parentBody.style.backgroundColor, 'rgb(255, 255, 255)', 'Helle Diagramme lesen einen tatsächlich hellen Parenthintergrund')
  assert.equal(parentBody.style.color, 'rgb(75, 75, 75)')
  assert.equal(parentRoot.style.colorScheme, 'light')
  assert.equal(sample.style.borderTopColor, 'rgb(20, 115, 117)', 'Akzentfarbe für Parent-lesende Templates übernehmen')
  assert.ok(parentRoot.className.includes('wrapper-owned'), 'Eigene Klassen der Kursstartseite erhalten')
  assert.ok(!parentRoot.className.includes('lia-theme-previous') && !parentRoot.className.includes('lia-variant-dark'), 'Beim Kursneustart veraltete Theme-Klassen des vorherigen Frames entfernen')
  frameRoot.className = 'lia-theme-default lia-variant-dark lia-font-scale-1'
  bodyStyle.backgroundColor = 'rgb(50, 50, 50)'
  bodyStyle.color = 'rgb(255, 255, 255)'
  observers[0].callback([])
  flushTheme()
  assert.equal(parentBody.style.backgroundColor, 'rgb(50, 50, 50)', 'Eine echte Dunkelmodusumschaltung weiterreichen')
  assert.equal(parentBody.style.color, 'rgb(255, 255, 255)')
  assert.equal(parentRoot.style.colorScheme, 'dark')
  assert.ok(parentRoot.className.includes('lia-variant-dark') && !parentRoot.className.includes('lia-variant-light'))
  frameRoot.className = 'lia-theme-blue lia-variant-dark'
  accentStyle.borderTopColor = 'rgb(0, 80, 200)'
  accentStyle.color = 'rgb(0, 80, 200)'
  observers[0].callback([])
  flushTheme()
  assert.equal(sample.style.color, 'rgb(0, 80, 200)', 'Spätere Akzentwechsel synchronisieren')
  assert.ok(parentRoot.className.includes('lia-theme-blue') && !parentRoot.className.includes('lia-theme-default'))

  const indentation = '^' + ' '.repeat(50000)
  for (const create of [pattern => new window.RegExp(pattern, 'gm'), pattern => window.RegExp(pattern, 'gm')]) {
    const regex = create(indentation)
    assert.equal(regex.source, '^ {50000}', 'Nur überlange reine Einrückungsregex äquivalent verdichten')
    assert.equal(regex.flags, 'gm')
    assert.equal(regex.exec('not indented\n' + ' '.repeat(50000) + 'content').index, 13)
    regex.lastIndex = 0
    assert.equal(regex.test(' '.repeat(49999) + 'content'), false)
    assert.ok(regex instanceof RegExp)
  }
  for (const pattern of ['^' + ' '.repeat(100), '^' + ' '.repeat(50000) + '$', '^' + '\\t'.repeat(5000), 'x' + ' '.repeat(50000)]) {
    assert.equal(new window.RegExp(pattern).source, new RegExp(pattern).source, 'Andere Regexmuster unverändert lassen')
  }
  const existing = /unchanged/g
  assert.equal(window.RegExp(existing), existing, 'Native RegExp-Identität beim Funktionsaufruf erhalten')
  const legacy = /(legacy)/
  legacy.exec('legacy')
  assert.equal(window.RegExp.$1, RegExp.$1, 'Statische native RegExp-Getter mit richtigem Empfänger ausführen')
  class DiagramRegex extends window.RegExp {}
  const subclassed = new DiagramRegex(indentation)
  assert.ok(subclassed instanceof DiagramRegex, 'RegExp-Unterklassen erhalten')
  assert.equal(subclassed.source, '^ {50000}')

  const workerSource = 'https://liascript.github.io/course/Worker.123abc.js'
  const mappedBlob = new window.Blob(['import "' + workerSource + '";'], { type: 'application/javascript' })
  const mappedUrl = TestURL.createObjectURL(mappedBlob)
  for (const options of [undefined, { type: 'classic', name: 'native-quiz-worker' }]) {
    const worker = new window.Worker(mappedUrl, options)
    assert.notEqual(worker.url, mappedUrl, 'Parcel-ESM-Bootstrap für einen klassischen LiaScript-Worker ersetzen')
    assert.equal(blobs.get(worker.url).parts.join(''), 'importScripts("' + workerSource + '");', 'Die klassische Workerdatei mit importScripts laden')
    assert.equal(worker.options, options, 'Workeroptionen erhalten')
    assert.equal(mappedBlob.parts.join(''), 'import "' + workerSource + '";', 'Den ursprünglichen Blob nicht verändern')
    worker.handlers.get('message')()
    assert.ok(released.includes(worker.url), 'Temporären Bootstrap nach der ersten Workernachricht freigeben')
  }
  const moduleOptions = { type: 'module', name: 'explicit-module' }
  const moduleWorker = new window.Worker(mappedUrl, moduleOptions)
  assert.equal(moduleWorker.url, mappedUrl, 'Explizite Modulworker behalten ihren ursprünglichen Bootstrap')
  assert.equal(moduleWorker.options, moduleOptions)
  for (const script of ['self.onmessage = () => {};', 'import "https://other.example/Worker.123abc.js";', 'import "' + workerSource + '";\nself.extra = true;']) {
    const url = TestURL.createObjectURL(new window.Blob([script]))
    assert.equal(new window.Worker(url).url, url, 'Andere Blobworker unverändert starten')
  }

  const click = handlers.get('click')
  assert.ok(click && click.capture, 'Hashnavigation vor der nativen Linkaktion korrigieren')
  const link = {
    href: '#2',
    getAttribute(name) { return name === 'href' ? this.href : null },
    setAttribute(name, value) { if (name === 'href') this.href = value },
    closest() { return this }
  }
  click.callback({ target: link })
  assert.equal(link.href, 'https://school.example/course-frame.html?parent:example-id#2', 'Folienlinks behalten Kursframe und Parent-Kennung trotz externer Basisadresse')
  link.href = 'https://example.org/another-course#2'
  click.callback({ target: link })
  assert.equal(link.href, 'https://example.org/another-course#2', 'Normale externe Links unverändert erhalten')

  const uri = 'parent:example-id'
  const source = '<!--\nlanguage: de\n-->\n# Übung\n@ADetails\n[[ 3 ]]'
  const delivered = { cmd: 'lia-course', param: { uri, ok: true, body: source } }
  const message = messages.get('message')
  const event = { source: parent, origin: window.location.origin, data: delivered }
  for (const forged of [
    { ...event, source: {} },
    { ...event, origin: 'https://other.example' },
    { ...event, data: { ...delivered, param: { ...delivered.param, uri: 'parent:other' } } },
    { ...event, data: { ...delivered, param: { ...delivered.param, ok: false } } },
    { ...event, data: { ...delivered, param: { ...delivered.param, body: {} } } }
  ]) {
    message(forged)
    assert.equal(await (await window.fetch(uri)).text(), 'network', 'Unbestätigte oder fremde Quellen nicht übernehmen')
  }
  message(event)
  const networkCount = fetched.length
  for (const input of [uri, new URL(uri), new Request(uri)]) {
    const response = await window.fetch(input, { cache: 'force-cache' })
    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type'), /text\/markdown.*utf-8/)
    assert.equal(await response.text(), source, 'Plugins erhalten den unveränderten, eigenen Kursquelltext')
  }
  assert.equal(fetched.length, networkCount, 'parent:-Kursquelle benötigt keinen Netzwerkaufruf')
  assert.equal(await (await window.fetch(uri, { method: 'HEAD' })).text(), '')
  const aborted = new AbortController()
  aborted.abort()
  await assert.rejects(window.fetch(uri, { signal: aborted.signal }), { name: 'AbortError' })
  for (const [input, options] of [
    ['https://example.org/import.md', { cache: 'force-cache' }],
    ['parent:another-course', undefined],
    [uri, { method: 'POST' }]
  ]) {
    assert.equal(await (await window.fetch(input, options)).text(), 'network')
    assert.equal(fetched.at(-1)[0], input, 'Andere Anfragen unverändert weiterreichen')
    assert.equal(fetched.at(-1)[1], options)
  }
}

async function testDirectCourse(html) {
  const source = html || fs.readFileSync(path.join(root, 'index.html'), 'utf8')
  assert.match(source, /id="courseGeneratorSubmit"[^>]*>Kurs im LiveEditor generieren</)
  assert.match(source, /id="courseGeneratorDirectSubmit"[^>]*>Kurs direkt generieren</)
  assert.ok(source.indexOf('id="courseGeneratorSubmit"') < source.indexOf('id="courseGeneratorDirectSubmit"'), 'Direkt-Button steht unter dem LiveEditor-Button')
  const playerHtml = fs.readFileSync(path.join(root, 'course.html'), 'utf8')
  assert.match(playerHtml, /<meta[^>]*name="viewport"/)
  assert.match(playerHtml, /course-source\.js\?v=1\.0\.3/)
  assert.match(playerHtml, /course-generator\.js\?v=1\.0\.3/)
  assert.match(playerHtml, /course-player\.js\?v=1\.0\.3/)
  assert.match(playerHtml, /vendor\/fflate-0\.8\.2\.min\.js\?v=0\.8\.2/)
  assert.ok(
    playerHtml.indexOf('vendor/fflate-0.8.2.min.js?v=0.8.2') < playerHtml.indexOf('course-player.js?v=1.0.3'),
    'Der deterministische gzip-Codec wird vor dem Course-Player geladen'
  )
  assert.match(playerHtml, /id="courseThemeSample"[^>]*class="lia-btn"[^>]*hidden[^>]*aria-hidden="true"/)
  for (const name of ['course-source.js', 'course-generator.js', 'course-player.js']) {
    new vm.Script(fs.readFileSync(productFile(name), 'utf8'), { filename: name })
  }
  new vm.Script(fs.readFileSync(path.join(root, 'assets/vendor/fflate-0.8.2.min.js'), 'utf8'), { filename: 'fflate-0.8.2.min.js' })
  const frameHtml = fs.readFileSync(path.join(root, 'course-frame.html'), 'utf8')
  for (const script of frameHtml.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
    new vm.Script(script[1], { filename: 'course-frame.html' })
  }
  await testFrameBootstrap(frameHtml)
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/deploy.yaml'), 'utf8')
  assert.ok(workflow.includes('cp course.html gh-pages-deploy/course.html'), 'Die Schülerkursseite muss veröffentlicht werden')
  assert.ok(workflow.includes('cp course-frame.html gh-pages-deploy/course-frame.html'), 'Der Interpreter muss auf derselben Website starten')
  assert.ok(workflow.includes('cp -r assets gh-pages-deploy/'), 'Die Kursressourcen müssen veröffentlicht werden')
  testCourseAssembly()
}

module.exports = { testDirectCourse, testCourseAssembly, testFrameBootstrap, productFile }

if (require.main === module) {
  testDirectCourse(process.argv[2] ? fs.readFileSync(process.argv[2], 'utf8') : undefined)
    .then(() => console.log('Direkter Schülerkurs: Oberfläche und Kursaufbau erfolgreich geprüft.'))
    .catch(error => { console.error(error); process.exitCode = 1 })
}
