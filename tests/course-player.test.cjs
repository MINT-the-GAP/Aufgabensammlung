const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { webcrypto } = require('node:crypto')
const { createHash } = require('node:crypto')
const { gunzipSync } = require('node:zlib')
const assembler = require('../assets/course-source.js')
const generator = require('../assets/course-generator.js')
const fflate = require('../assets/vendor/fflate-0.8.2.min.js')

const code = fs.readFileSync(path.join(__dirname, '../assets/course-player.js'), 'utf8')
const origin = 'https://school.example'
const sourceUrl = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/11_Logarithmen/Aufgabe_0001.md'
const markdown = '<!--\nlanguage: de\nversion: 1.0.0\nedit: true\n-->\n\n# Brüche äöü 🧮\n\n[[ 3 ]]'
const manifest = { v: 1, urls: [sourceUrl], group: 'einsteiger', themes: ['Brüche 🧮'] }
const hash = value => '#course=' + encodeURIComponent(JSON.stringify(value))
const settle = () => new Promise(resolve => setImmediate(resolve))
async function waitFor(predicate, label) {
  for (let attempt = 0; attempt < 300; attempt++) {
    if (predicate()) return
    await new Promise(resolve => setTimeout(resolve, 10))
  }
  assert.fail('Zeitüberschreitung: ' + label)
}

function harness(options = {}) {
  const handlers = new Map()
  const timers = new Map()
  const posts = []
  const requests = []
  const replacements = []
  const elements = new Map()
  let nextTimer = 0
  for (const id of ['courseFrame', 'courseLoading', 'courseHeading', 'courseStatus', 'courseRetry']) {
    const classes = new Set()
    elements.set(id, {
      hidden: false, textContent: '', src: '',
      classList: { add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name) },
      addEventListener(name, callback) { this[name] = callback }
    })
  }
  const frame = elements.get('courseFrame')
  frame.contentWindow = { postMessage: (data, target) => posts.push({ data, target }) }
  const location = { hash: options.hash === undefined ? hash(manifest) : options.hash }
  location.href = origin + '/Aufgabensammlung/course.html' + (options.search || '') + location.hash
  location.replace = url => {
    replacements.push(url)
    if (options.replaceThrows) throw new Error('Navigation blocked')
    location.href = url
  }
  const window = {
    location,
    document: { title: '', getElementById: id => elements.get(id) },
    SchulLiaCourseSource: options.missingAssembler ? undefined : assembler,
    SchulLiaCourseGenerator: options.missingGenerator ? undefined : generator,
    fflate: options.codec === false ? undefined : fflate,
    TextEncoder, btoa,
    async fetch(url, request) {
      requests.push({ url, signal: request.signal })
      return options.fetch ? options.fetch(url, request) : { ok: true, text: async () => markdown }
    },
    addEventListener(name, callback) {
      if (!handlers.has(name)) handlers.set(name, [])
      handlers.get(name).push(callback)
    }
  }
  const context = vm.createContext({
    window, URL, URLSearchParams, AbortController, TextEncoder,
    setTimeout(callback, delay) { const id = ++nextTimer; timers.set(id, { callback, delay }); return id },
    clearTimeout(id) { timers.delete(id) }
  })
  vm.runInContext(code, context, { filename: 'assets/course-player.js' })
  const dispatch = (name, event = {}) => (handlers.get(name) || []).forEach(callback => callback(event))
  const uri = () => new URL(frame.src).search.slice(1)
  const message = (data, overrides = {}) => dispatch('message', { origin, source: frame.contentWindow, data, ...overrides })
  return { window, elements, frame, timers, requests, posts, replacements, dispatch, uri, message, api: window.SchulLiaCoursePlayer }
}

function sourceFromOfficialUrl(url) {
  const prefix = 'https://liascript.github.io/course/?data:text/plain;charset=utf-8;Content-Encoding=gzip;base64,'
  assert.ok(url.startsWith(prefix), 'Der Redirect verwendet den offiziellen gzip-Data-URI-Viewer')
  assert.ok(!url.includes('%3Atext%2Fplain'), 'Die Data-URI darf nicht als Ganzes percentkodiert werden')
  return gunzipSync(Buffer.from(url.slice(prefix.length), 'base64')).toString('utf8')
}

async function main() {
  const h = harness()
  await settle()
  assert.equal(h.requests.length, 1)
  assert.equal(h.requests[0].url, sourceUrl)
  assert.ok(h.frame.src.startsWith(origin + '/Aufgabensammlung/course-frame.html?parent:schullia-'), 'Unterpfad und gleicher Ursprung bleiben erhalten')
  assert.equal(h.frame.hidden, true, 'Kurs erst nach passendem Handshake zeigen')
  assert.deepEqual(Array.from(h.api.readManifest().themes), manifest.themes, 'UTF-8 im Kurslink bleibt erhalten')
  const data = { cmd: 'lia-course', param: { uri: h.uri() } }
  h.message(data, { origin: 'https://other.example' })
  h.message(data, { source: { postMessage() { throw new Error('Falsches Fenster') } } })
  h.message({ cmd: 'lia-course', param: { uri: 'parent:other' } })
  assert.equal(h.posts.length, 0, 'Nur der eigene Kursframe darf die Kursquelle abrufen')
  h.message(data)
  assert.equal(h.posts.length, 1)
  assert.equal(h.posts[0].target, origin)
  assert.match(h.posts[0].data.param.body, /edit: false/)
  assert.ok(h.posts[0].data.param.body.includes('Brüche äöü 🧮'))
  assert.equal(h.frame.hidden, false)
  assert.equal(h.elements.get('courseLoading').hidden, true)
  assert.equal(h.timers.size, 0)

  const initialIdentity = h.uri()
  await h.api.start()
  assert.equal(h.uri(), initialIdentity, 'Neuladen derselben Auswahl behält die Kurskennung')
  h.window.fetch = async () => ({ ok: true, text: async () => markdown + '\n\n[[ 4 ]]' })
  await h.api.start()
  assert.notEqual(h.uri(), initialIdentity, 'Geänderte Aufgabenstruktur bekommt einen eigenen Lernstand')
  h.message({ cmd: 'schullia-course-error', param: { uri: initialIdentity, message: 'Veralteter Fehler' } })
  assert.notEqual(h.elements.get('courseStatus').textContent, 'Veralteter Fehler')
  h.message({ cmd: 'schullia-course-error', param: { uri: h.uri(), message: 'Runtime nicht erreichbar' } })
  assert.equal(h.elements.get('courseStatus').textContent, 'Runtime nicht erreichbar')
  assert.equal(h.elements.get('courseRetry').hidden, false)
  await h.elements.get('courseRetry').click()
  assert.ok(h.frame.src.includes('?parent:'))
  h.dispatch('pagehide')
  assert.equal(h.requests[0].signal.aborted, true)
  assert.equal(h.timers.size, 0)
  h.dispatch('pageshow', { persisted: true })
  await settle()
  assert.ok(h.frame.src.includes('?parent:'), 'Zurücknavigation aus dem Browsercache startet den Kurs erneut')
  h.dispatch('pagehide')

  const invalidSources = [
    'javascript:alert(1)',
    'https://example.org/Aufgabe_0001.md',
    sourceUrl.replace('https:', 'http:'),
    sourceUrl.replace('https://', 'https://user:pass@'),
    sourceUrl + '?other=1', sourceUrl + '#other',
    sourceUrl.replace('Aufgabe_0001.md', 'README.md')
  ]
  for (const url of invalidSources) assert.throws(() => h.api.normalizeManifest({ ...manifest, urls: [url] }), /Aufgabenquelle/)
  assert.throws(() => h.api.normalizeManifest({ ...manifest, v: 2 }), /Format/)
  assert.throws(() => h.api.normalizeManifest({ ...manifest, urls: [] }), /Aufgabenauswahl/)
  assert.throws(() => h.api.normalizeManifest({ ...manifest, group: 'unknown' }), /Zielgruppe/)
  assert.throws(() => h.api.normalizeManifest({ ...manifest, themes: ['broken\nvalue'] }), /Themenauswahl/)
  const learningUrls = [1, 2, 3, 4].map(number =>
    sourceUrl.replace('Aufgabe_0001.md', 'Aufgabe_000' + number + '.md')
  )
  const learningManifest = {
    v: 1,
    kind: 'lernpfad',
    offer: 'weitere-uebungen',
    topic: 'Bruchrechnung',
    level: 'fortgeschrittene',
    urls: learningUrls,
  }
  const normalizedLearning = h.api.normalizeManifest(learningManifest)
  assert.equal(normalizedLearning.group, 'fortgeschrittene')
  assert.deepEqual(Array.from(normalizedLearning.themes), ['Bruchrechnung'])
  assert.throws(() => h.api.normalizeManifest({ ...learningManifest, urls: learningUrls.slice(0, 3) }), /genau vier/)
  assert.throws(() => h.api.normalizeManifest({ ...learningManifest, urls: [learningUrls[0], learningUrls[0], learningUrls[2], learningUrls[3]] }), /verschiedene/)
  assert.throws(() => h.api.normalizeManifest({ ...learningManifest, offer: 'unknown' }), /Angebot/)
  assert.throws(() => h.api.normalizeManifest({ ...learningManifest, level: 'unknown' }), /Niveau/)
  const learningMarkdown = '<!--\nlanguage: de\nimport: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md\n-->\n# Aufgabe\n\n[[ 2 ]]\n\n@ADetails(BE=2;Bruchrechnung)\n\n[[?]] @Explain'
  const learning = harness({
    hash: hash(learningManifest),
    fetch: async () => ({ ok: true, text: async () => learningMarkdown }),
  })
  await waitFor(() => learning.replacements.length > 0, 'offizieller Lernpfad-Redirect')
  assert.equal(learning.requests.length, 4)
  assert.equal(learning.replacements.length, 1, 'Lernpfad ersetzt den Launcher genau einmal im selben Fenster')
  const learningSource = sourceFromOfficialUrl(learning.replacements[0])
  assert.equal(await learning.api.officialCourseUrl(learningSource), learning.replacements[0], 'Gleicher Quelltext erzeugt eine stabile Data-URI')
  assert.equal(await learning.api.officialCourseUrl(learningSource), learning.replacements[0], 'Auch der zweite Neuaufbau bleibt byteidentisch')
  assert.deepEqual(
    { ...learning.api.gzipOptions },
    { level: 6, mem: 8, mtime: 0 },
    'Kompressionsstufe, Speicherprofil und Zeitstempel sind vollständig gepinnt'
  )
  assert.equal(
    await learning.api.officialCourseUrl('deterministic ä🧮'),
    'https://liascript.github.io/course/?data:text/plain;charset=utf-8;Content-Encoding=gzip;base64,H4sIAAAAAAAAA0tJLUktys3MyywuyUxWOLzkw/zl6wDEnoOwFAAAAA==',
    'fflate 0.8.2 erzeugt für die kanonische Probe exakt die festgelegten gzip-Bytes'
  )
  assert.ok(!/lia-freeze|FreezeREADME/i.test(learningSource))
  assert.match(learningSource, /lia-mathpath/)
  assert.match(learningSource, /^lernpfad-level: Fortgeschritten$/m)
  assert.match(learningSource, /^mode: Presentation$/m)
  assert.ok(!/^mode: Textbook$/m.test(learningSource))
  const learningTaskOffset = learningSource.indexOf('# Aufgabe')
  assert.ok(learningSource.indexOf('Hier findest du vier weitere Aufgaben') < learningTaskOffset)
  assert.ok(learningSource.indexOf('[Tutorial öffnen](https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/00_00_00_Tutorial.md)') < learningTaskOffset)
  assert.equal((learningSource.slice(0, learningTaskOffset).match(/^---$/gm) || []).length, 8)
  assert.ok(learningSource.trim().endsWith('# Dein weiterer Lernpfad\n\n@Lernpfad'))
  learning.dispatch('pagehide')

  const legacyLauncher = harness({
    hash: hash(learningManifest),
    search: '?v=1.0.2',
    fetch: async () => ({ ok: true, text: async () => learningMarkdown }),
  })
  await waitFor(() => legacyLauncher.replacements.length > 0, 'Legacy-Launcher-Redirect')
  assert.equal(legacyLauncher.replacements.length, 1, 'Alte 1.0.2-Launcherlinks bleiben kompatibel')
  sourceFromOfficialUrl(legacyLauncher.replacements[0])
  legacyLauncher.dispatch('pagehide')

  const noCompression = harness({
    hash: hash(learningManifest),
    codec: false,
    fetch: async () => ({ ok: true, text: async () => learningMarkdown }),
  })
  await waitFor(() => noCompression.frame.src.includes('?parent:'), 'Fallback ohne fflate')
  assert.equal(noCompression.replacements.length, 0)
  assert.ok(noCompression.frame.src.includes('?parent:'), 'Ohne fflate bleibt der parent:-Fallback erhalten')
  noCompression.dispatch('pagehide')

  const blockedNavigation = harness({
    hash: hash(learningManifest),
    replaceThrows: true,
    fetch: async () => ({ ok: true, text: async () => learningMarkdown }),
  })
  await waitFor(() => blockedNavigation.frame.src.includes('?parent:'), 'Fallback bei blockierter Navigation')
  assert.equal(blockedNavigation.replacements.length, 1, 'Der offizielle Redirect wird genau einmal versucht')
  blockedNavigation.dispatch('pagehide')

  const largeBody = Array.from({ length: 1800 }, (_, index) =>
    createHash('sha256').update('large-learning-path-' + index).digest('hex')
  ).join('\n')
  const largeCourse = harness({
    hash: hash(learningManifest),
    fetch: async () => ({ ok: true, text: async () => '<!--\nlanguage: de\nmode: Presentation\n-->\n\n# Umfangreich\n\n' + largeBody }),
  })
  await waitFor(() => largeCourse.frame.src.includes('?parent:'), 'Fallback für zu lange Viewer-URL')
  assert.equal(largeCourse.replacements.length, 0)
  assert.ok(largeCourse.frame.src.includes('?parent:'), 'Zu lange Viewer-URLs verwenden den parent:-Fallback')
  largeCourse.dispatch('pagehide')
  for (const malformed of ['', '#course=%7Bbroken', hash({ ...manifest, urls: ['https://other.example/Aufgabe.md'] })]) {
    const broken = harness({ hash: malformed })
    await settle()
    assert.equal(broken.requests.length, 0)
    assert.equal(broken.frame.hidden, true)
    assert.equal(broken.elements.get('courseRetry').hidden, false)
    broken.dispatch('pagehide')
  }

  const unavailable = harness({ fetch: async () => ({ ok: false, status: 503 }) })
  await settle()
  assert.match(unavailable.elements.get('courseStatus').textContent, /HTTP 503/)
  unavailable.window.fetch = async () => ({ ok: true, text: async () => markdown })
  await unavailable.elements.get('courseRetry').click()
  assert.ok(unavailable.frame.src.includes('?parent:'))
  unavailable.dispatch('pagehide')

  const missing = harness({ missingAssembler: true })
  await settle()
  assert.match(missing.elements.get('courseStatus').textContent, /Kursvorbereitung/)
  assert.equal(missing.requests.length, 0)
  missing.dispatch('pagehide')

  const pending = harness({ fetch: (url, { signal }) => new Promise((resolve, reject) => {
    signal.addEventListener('abort', () => reject(new Error('Aborted')))
  }) })
  const timeout = Array.from(pending.timers.values()).find(timer => timer.delay === 30000)
  timeout.callback()
  await settle()
  assert.match(pending.elements.get('courseStatus').textContent, /dauert zu lange/)
  assert.equal(pending.elements.get('courseRetry').hidden, false)
  pending.dispatch('pagehide')

  const waiting = harness()
  await settle()
  Array.from(waiting.timers.values()).find(timer => timer.delay === 35000).callback()
  assert.match(waiting.elements.get('courseStatus').textContent, /nicht gestartet/)
  waiting.dispatch('pagehide')

  h.window.crypto = webcrypto
  const identity = await h.api.courseIdentity(manifest, markdown)
  assert.match(identity, /^schullia-[a-f0-9]{64}$/)
  assert.equal(await h.api.courseIdentity(manifest, markdown), identity)
  assert.notEqual(await h.api.courseIdentity(manifest, markdown + '\n[[5]]'), identity)
  console.log('Schülerkurs: Unterpfad, Kurslink, Nachrichten, Wiederherstellung, Fehler und Timeouts bestanden.')
}

main().catch(error => { console.error(error); process.exitCode = 1 })
