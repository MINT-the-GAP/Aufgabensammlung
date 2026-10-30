// Run against the clean Pages artifact, mounted at the real project subpath.
// Native checks use the public interpreter and real public task sources.
const fs = require('node:fs')
const path = require('node:path')
const http = require('node:http')
const assert = require('node:assert/strict')
const { gunzipSync } = require('node:zlib')
const { createHash } = require('node:crypto')
const pw = require(process.env.SCHULLIA_PLAYWRIGHT_PATH || 'playwright')
const root = path.resolve(__dirname, '../..')
const runtimeRelease = require(path.join(root, 'assets/course-generator.js')).release
const runLabel = String(process.env.SCHULLIA_TEST_RUN || 'all').replace(/[^a-z0-9_-]/gi, '_')
const output = path.join(root, 'test-results/push-check/browser', runLabel)
const stage = path.resolve(process.env.SCHULLIA_PAGES_DIR || process.argv[2] || '')
assert.ok(fs.existsSync(path.join(stage, 'course-frame.html')), 'Provide the prepared Pages artifact in SCHULLIA_PAGES_DIR')
fs.mkdirSync(output, { recursive: true })
const prefix = '/Aufgabensammlung/'
const rawBase = 'https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/'
const tasks = {
  log: '01_Algebraische_Grundlagen/11_Logarithmen/Aufgabe_0001.md',
  tree: '06_Stochastik/02_Baumdiagramme/Aufgabe_0001.md',
  circle: '02_Geometrie/09_Kreis/Aufgabe_0001.md',
  coordinate: '02_Geometrie/02_Koordinatensystem/Aufgabe_0001.md'
}
const learningFractions = [
  '01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0027.md',
  '01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0028.md',
  '01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0029.md',
  '01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0030.md',
]
const results = []
const local404 = []
let base
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  if (!pathname.startsWith(prefix)) { local404.push(pathname); response.writeHead(404).end('Outside Pages project'); return }
  const relative = pathname.slice(prefix.length) || 'index.html'
  const target = path.resolve(stage, relative)
  if (!target.startsWith(stage + path.sep)) { response.writeHead(403).end(); return }
  try {
    const ext = path.extname(target)
    const type = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2' }[ext] || 'application/octet-stream'
    response.writeHead(200, { 'content-type': type + (['.html', '.js', '.css'].includes(ext) ? ';charset=utf-8' : '') })
    response.end(fs.readFileSync(target))
  } catch (_) { local404.push(pathname); response.writeHead(404).end('Not in the Pages artifact') }
})
function courseUrl(paths) {
  return base + 'course.html?v=' + encodeURIComponent(runtimeRelease) + '#course=' + encodeURIComponent(JSON.stringify({ v: 1, urls: paths.map(task => rawBase + task), group: 'einsteiger', themes: ['logarithmen'] }))
}
function learningPathCourseUrl(paths) {
  const manifest = {
    v: 1,
    kind: 'lernpfad',
    offer: 'weitere-uebungen',
    topic: 'Addition',
    level: 'einsteiger',
    urls: paths.map(task => rawBase + task),
  }
  return base + 'course.html?v=' + encodeURIComponent(runtimeRelease) +
    '#course=' + encodeURIComponent(JSON.stringify(manifest))
}
async function canonicalCodecUrls(engines) {
  const probe = 'deterministic ä🧮'
  const prefix = 'https://liascript.github.io/course/?data:text/plain;charset=utf-8;Content-Encoding=gzip;base64,'
  const outcomes = []
  for (const engine of engines) {
    const browser = await pw[engine].launch({ headless: true })
    try {
      const page = await browser.newPage()
      await page.goto(base + 'course.html?v=' + encodeURIComponent(runtimeRelease) + '#course=invalid', { waitUntil: 'load' })
      await page.waitForFunction(() => !!window.SchulLiaCoursePlayer && !!window.fflate)
      const result = await page.evaluate(async source => ({
        url: await window.SchulLiaCoursePlayer.officialCourseUrl(source),
        options: window.SchulLiaCoursePlayer.gzipOptions,
      }), probe)
      assert.deepEqual(result.options, { level: 6, mem: 8, mtime: 0 }, engine + ' verwendet die kanonischen fflate-Optionen')
      assert.ok(result.url && result.url.startsWith(prefix), engine + ' erzeugt eine offizielle gzip-Data-URI')
      outcomes.push({ engine, url: result.url })
    } finally {
      await browser.close()
    }
  }
  assert.ok(outcomes.length > 0, 'Mindestens eine Browser-Engine muss den Codec prüfen')
  for (const outcome of outcomes.slice(1)) {
    assert.equal(outcome.url, outcomes[0].url, outcome.engine + ' erzeugt exakt dieselben gzip-Bytes und dieselbe URL wie ' + outcomes[0].engine)
  }
  const bytes = Buffer.from(outcomes[0].url.slice(prefix.length), 'base64')
  assert.equal(gunzipSync(bytes).toString('utf8'), probe)
  assert.deepEqual([...bytes.subarray(4, 8)], [0, 0, 0, 0], 'Der gzip-mtime-Header ist kanonisch null')
  return {
    engines: outcomes.map(item => item.engine),
    gzipSha256: createHash('sha256').update(bytes).digest('hex'),
    urlCharacters: outcomes[0].url.length,
    byteIdentical: true,
  }
}
async function test(name, action) {
  const began = Date.now()
  try { const data = await action(); results.push({ name, status: 'PASS', milliseconds: Date.now() - began, ...data }); console.log('PASS ' + name) }
  catch (error) { results.push({ name, status: 'FAIL', milliseconds: Date.now() - began, error: error.stack, evidence: error.evidence }); console.error('FAIL ' + name + ': ' + error.message.slice(0, 700)) }
  fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ stage, base, results, local404 }, null, 2))
}
function observe(page) {
  const evidence = { errors: [], failedRequests: [], httpErrors: [], pendingRequests: [], consoleErrors: [] }
  const pending = new Map()
  const update = () => { evidence.pendingRequests.splice(0, evidence.pendingRequests.length, ...pending.values()) }
  page.on('request', request => { pending.set(request, { url: request.url(), type: request.resourceType() }); update() })
  page.on('requestfinished', request => { pending.delete(request); update() })
  page.on('requestfailed', request => { pending.delete(request); update() })
  page.on('pageerror', error => evidence.errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') evidence.consoleErrors.push({ text: message.text(), location: message.location() }) })
  page.on('requestfailed', request => evidence.failedRequests.push({ url: request.url(), message: request.failure()?.errorText }))
  page.on('response', response => { if (response.status() >= 400) evidence.httpErrors.push({ url: response.url(), status: response.status() }) })
  return evidence
}
function unexpectedNetworkFailures(evidence, engine) {
  return evidence.failedRequests.filter(item => {
    if (/favicon/.test(item.url)) return false
    // Firefox can cancel an unused font preload while the official entry
    // document is reparsed. Keep those events in the evidence without
    // confusing them with a failed runtime or course resource download.
    if (engine === 'firefox' && item.message === 'NS_BINDING_ABORTED' && /\.woff2(?:\?|$)/.test(item.url)) return false
    return true
  })
}
async function readyFrame(page) {
  await page.locator('#courseFrame').waitFor({ state: 'visible', timeout: 60000 })
  const frame = await (await page.locator('#courseFrame').elementHandle()).contentFrame()
  assert.ok(frame.url().startsWith(base + 'course-frame.html?parent:'), 'Interpreter stays inside the Pages project')
  await frame.locator('.lia-quiz').first().waitFor({ state: 'visible', timeout: 90000 })
  await frame.getByText(/Loading scripts and styles required by this course/).first().waitFor({ state: 'hidden', timeout: 90000 })
  return frame
}
async function checkFormulaRendering(frame) {
  const formula = frame.locator('lia-formula').filter({ visible: true }).first()
  await formula.waitFor({ state: 'visible', timeout: 30000 })
  const evidence = await formula.evaluate(element => {
    const root = element.shadowRoot
    const mathml = root && root.querySelector('.katex-mathml')
    const html = root && root.querySelector('.katex-html')
    const mathmlStyle = mathml && getComputedStyle(mathml)
    const htmlStyle = html && getComputedStyle(html)
    const mathmlBox = mathml && mathml.getBoundingClientRect()
    const htmlBox = html && html.getBoundingClientRect()
    return {
      hasShadow: !!root,
      hasKatexBaseCss: !!root && Array.from(root.querySelectorAll('style'))
        .some(style => style.textContent.includes('.katex .katex-mathml')),
      mathmlPosition: mathmlStyle && mathmlStyle.position,
      mathmlClipPath: mathmlStyle && mathmlStyle.clipPath,
      mathmlWidth: mathmlBox && mathmlBox.width,
      mathmlHeight: mathmlBox && mathmlBox.height,
      htmlDisplay: htmlStyle && htmlStyle.display,
      htmlWidth: htmlBox && htmlBox.width,
    }
  })
  assert.equal(evidence.hasShadow, true, 'LiaScript-Formel besitzt ein Shadow-DOM')
  assert.equal(evidence.hasKatexBaseCss, true, 'KaTeX-Basis-CSS muss aus der offiziellen Stylesheet-CSSOM übernommen werden')
  assert.equal(evidence.mathmlPosition, 'absolute', 'Barrierefreies MathML darf nicht als zweite sichtbare Formel erscheinen')
  assert.ok(evidence.mathmlWidth <= 1.5 && evidence.mathmlHeight <= 1.5, 'MathML bleibt visuell verborgen')
  assert.notEqual(evidence.htmlDisplay, 'none', 'Die formatierte KaTeX-HTML-Ausgabe bleibt sichtbar')
  assert.ok(evidence.htmlWidth > 4, 'Die sichtbare KaTeX-Ausgabe besitzt eine echte Breite')
  return evidence
}
async function answer(frame, value, expected) {
  const block = frame.locator('.flex-child').first()
  const edit = block.getByText('Bearbeiten', { exact: true }).first()
  if (await edit.isVisible()) await edit.click()
  const field = block.locator('input[placeholder="?"], textarea.lia-quiz__input, [contenteditable="true"], .lia-quiz input[type="text"]').filter({ visible: true }).first()
  await field.fill(value)
  const check = frame.locator('.lia-quiz').first().locator('button').filter({ hasText: /Prüfen|Check/i }).first()
  await check.click()
  await frame.locator('.lia-quiz').first().getByText(expected).waitFor({ state: 'visible', timeout: 20000 })
}
async function checkSourceAccess(frame) {
  const access = await frame.evaluate(async () => {
    const response = await fetch(decodeURIComponent(location.search.slice(1)), { cache: 'force-cache' })
    const source = await response.text()
    return { status: response.status, length: source.length, hasDetails: source.includes('@ADetails'), hasTitle: source.includes('# Logarithmuswerte') }
  })
  assert.ok(access.status === 200 && access.length > 1000 && access.hasDetails && access.hasTitle, 'Freeze can refetch the complete parent-provided course source')
  return access
}
async function waitForBoards(frame, predicate) {
  const deadline = Date.now() + 30000
  let boards = []
  do {
    boards = await frame.locator('svg').evaluateAll(items => items.map(svg => { const box = svg.getBoundingClientRect(); return { width: box.width, height: box.height } }).filter(box => box.width > 100 && box.height > 100))
    if (predicate(boards)) return boards
    await frame.waitForTimeout(100)
  } while (Date.now() < deadline)
  assert.fail('Expected visible coordinate SVG boards; got ' + JSON.stringify(boards))
}
async function choose(page, theme = 'logarithmen', count = '4') {
  await page.locator('#courseGeneratorOpenButton').click()
  await page.locator('#courseBundeslandSelect').selectOption('anderes')
  await page.locator('#courseThemeToggle').click()
  await page.locator('#courseThemeMenu button[data-value="' + theme + '"]').click()
  await page.locator('#courseTaskCountInput').fill(count)
  await page.locator('#courseTargetGroupSelect').selectOption('einsteiger')
}
async function boundary(engine) {
  const browser = await pw[engine].launch({ headless: true })
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, locale: 'de-DE', serviceWorkers: 'block' })
    context.setDefaultTimeout(30000)
    const state = { fail: false, synthetic: null, sources: [] }
    await context.route('**/*', async route => {
      const url = new URL(route.request().url())
      if (url.href.startsWith(base + 'course-frame.html')) {
        return route.fulfill({ contentType: 'text/html', body: '<!doctype html><pre id="source"></pre><script>const uri=decodeURIComponent(location.search.slice(1));addEventListener("message",e=>{if(e.data.cmd==="lia-course")document.getElementById("source").textContent=e.data.param.body});parent.postMessage({cmd:"lia-course",param:{uri}},location.origin)</script>' })
      }
      if (url.origin === 'https://raw.githubusercontent.com' && url.pathname.startsWith('/MINT-the-GAP/Aufgabensammlung/') && /\/Aufgabe_[^/]+\.md$/i.test(url.pathname)) {
        state.sources.push(url.href)
        if (state.fail) return route.fulfill({ status: 503, body: 'Controlled failure', headers: { 'access-control-allow-origin': '*' } })
        const relative = decodeURIComponent(url.pathname.replace(/^\/MINT-the-GAP\/Aufgabensammlung\/(?:refs\/heads\/)?main\//, ''))
        const file = path.resolve(root, relative)
        if (file.startsWith(root + path.sep) && fs.existsSync(file)) return route.fulfill({ contentType: 'text/plain;charset=utf-8', body: state.synthetic || fs.readFileSync(file, 'utf8'), headers: { 'access-control-allow-origin': '*' } })
      }
      if (url.href.startsWith('https://liascript.github.io/LiveEditor/')) return route.fulfill({ contentType: 'text/html', body: '<!doctype html><textarea></textarea>' })
      return route.continue()
    })
    const page = await context.newPage()
    const evidence = observe(page)
    await page.goto(base, { waitUntil: 'load' })
    await choose(page)
    assert.equal(await page.locator('#courseGeneratorSubmit').innerText(), 'Kurs im LiveEditor generieren')
    assert.equal(await page.locator('#courseGeneratorDirectSubmit').innerText(), 'Kurs direkt generieren')
    await page.setViewportSize({ width: 390, height: 844 })
    const one = await page.locator('#courseGeneratorSubmit').boundingBox()
    const two = await page.locator('#courseGeneratorDirectSubmit').boundingBox()
    assert.ok(two.y >= one.y + one.height && two.x >= 0 && two.x + two.width <= 390)
    await page.locator('#courseGeneratorDirectSubmit').scrollIntoViewIfNeeded()
    await page.screenshot({ path: path.join(output, engine + '-mobile-buttons.png'), fullPage: false })
    await page.setViewportSize({ width: 1280, height: 1000 })
    const opened = context.waitForEvent('page')
    await page.locator('#courseGeneratorDirectSubmit').click()
    const popup = await opened
    await popup.waitForURL(url => url.href.startsWith(base + 'course.html?v=' + runtimeRelease + '#course='))
    const manifest = JSON.parse(decodeURIComponent(new URL(popup.url()).hash.slice('#course='.length)))
    assert.equal(manifest.urls.length, 4)
    assert.equal(new Set(manifest.urls).size, 4)
    assert.ok(manifest.urls.every(url => url.includes('/11_Logarithmen/')))
    await popup.frameLocator('#courseFrame').locator('#source').waitFor()
    const source = await popup.frameLocator('#courseFrame').locator('#source').innerText()
    assert.ok(source.includes('Logarithmuswerte') && source.includes('@ADetails'))
    const stableLink = popup.url()
    await popup.reload()
    await popup.frameLocator('#courseFrame').locator('#source').waitFor()
    assert.equal(await popup.frameLocator('#courseFrame').locator('#source').innerText(), source)
    state.fail = true
    await popup.reload()
    await popup.locator('#courseRetry').waitFor({ state: 'visible' })
    state.fail = false
    await popup.locator('#courseRetry').click()
    await popup.frameLocator('#courseFrame').locator('#source').waitFor()
    await popup.close()
    const fresh = await browser.newContext({ serviceWorkers: 'block' })
    await fresh.route('**/course-frame.html?*', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><script>parent.postMessage({cmd:"lia-course",param:{uri:decodeURIComponent(location.search.slice(1))}},location.origin)</script>' }))
    const independent = await fresh.newPage()
    await independent.goto(stableLink)
    await independent.locator('#courseFrame').waitFor({ state: 'visible', timeout: 60000 })
    await fresh.close()
    await choose(page, 'logarithmen', '1')
    const editorEvent = context.waitForEvent('page')
    await page.locator('#courseGeneratorSubmit').click()
    const editor = await editorEvent
    await editor.waitForURL(url => url.href.startsWith('https://liascript.github.io/LiveEditor/'))
    const route = decodeURIComponent(new URL(editor.url()).search.slice(1))
    assert.ok(gunzipSync(Buffer.from(route.slice('/show/code/'.length), 'base64')).toString('utf8').includes('Logarithmuswerte'))
    await editor.close()
    state.synthetic = '# Großer Testkurs\n\n' + Array.from({ length: 1200 }, (_, index) => createHash('sha256').update(String(index)).digest('hex')).join('\n')
    await choose(page, 'logarithmen', '1')
    await page.locator('#courseGeneratorSubmit').click()
    await page.locator('#courseGeneratorCopy').waitFor({ state: 'visible' })
    await page.locator('#courseGeneratorSource').waitFor({ state: 'attached' })
    assert.ok((await page.locator('#courseGeneratorSource').inputValue()).includes(state.synthetic))
    state.synthetic = null
    await page.locator('#courseGeneratorCloseButton').click()
    await choose(page, 'bruchrechnung', '100')
    const stressEvent = context.waitForEvent('page')
    await page.locator('#courseGeneratorDirectSubmit').click()
    const stress = await stressEvent
    await stress.waitForURL(url => url.href.startsWith(base + 'course.html?v=' + runtimeRelease + '#course='))
    const stressUrl = new URL(stress.url())
    const stressManifest = JSON.parse(decodeURIComponent(stressUrl.hash.slice('#course='.length)))
    assert.equal(stressManifest.urls.length, 100)
    assert.equal(new Set(stressManifest.urls).size, 100)
    assert.equal(stressUrl.searchParams.get('v'), runtimeRelease)
    assert.equal([...stressUrl.searchParams].length, 1, 'A 100-task course keeps sources out of the HTTP query')
    await stress.frameLocator('#courseFrame').locator('#source').waitFor({ timeout: 60000 })
    const stressCharacters = (await stress.frameLocator('#courseFrame').locator('#source').innerText()).length
    assert.ok(stressCharacters > 10000)
    await stress.close()
    await choose(page, 'logarithmen', '1')
    await page.evaluate(() => { window.open = () => null })
    await page.locator('#courseGeneratorDirectSubmit').click()
    const fallback = page.locator('#courseGeneratorManualOpen a')
    await fallback.waitFor()
    assert.ok((await fallback.getAttribute('href')).startsWith(base + 'course.html?v=' + runtimeRelease + '#course='))
    await page.goto(base + 'course.html?v=' + runtimeRelease + '#course=invalid')
    await page.locator('#courseRetry').waitFor({ state: 'visible' })
    assert.match(await page.locator('#courseStatus').innerText(), /unvollständig|Format|Aufgaben/)
    assert.deepEqual(evidence.errors.filter(error => !error.includes('ResizeObserver loop completed')), [])
    await context.close()
    return { engine, sourcesFixture: 'local task Markdown', interpreter: 'controlled Parent boundary', independentFreshContext: true, stress: { sources: 100, sourceCharacters: stressCharacters, linkCharacters: stress.url().length }, checks: ['real built UI', 'project subpath', 'mobile buttons', '4 unique tasks', 'direct popup', 'reload', 'source failure/retry', 'fresh context without opener', 'small editor handoff', 'large editor fallback', '100 unique sources without HTTP query', 'blocked popup link', 'invalid manifest'], evidence }
  } finally { await browser.close() }
}
async function native(engine, mobile = false) {
  const browser = await pw[engine].launch({ headless: true })
  const evidence = { errors: [], failedRequests: [], httpErrors: [] }
  try {
    const context = await browser.newContext({ viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 }, hasTouch: mobile, locale: 'de-DE', serviceWorkers: 'block' })
    context.setDefaultTimeout(30000)
    const page = await context.newPage()
    Object.assign(evidence, observe(page))
    const paths = [tasks.log, tasks.tree, tasks.circle, tasks.coordinate]
    await page.goto(courseUrl(paths), { waitUntil: 'domcontentloaded' })
    const frame = await readyFrame(page)
    const formula = await checkFormulaRendering(frame)
    await answer(frame, '999', /Die richtige Antwort wurde noch nicht gegeben|falsch|wrong/i)
    await answer(frame, '3', /richtige Antwort|correct/i)
    const sourceAccess = await checkSourceAccess(frame)
    await frame.locator('button[title="Inhaltsverzeichnis"]').first().click()
    const treeLink = frame.locator('a[href]').filter({ hasText: 'Fragen zum Baumdiagramm' }).first()
    await treeLink.click()
    await frame.locator('.lia-quiz').first().getByRole('button', { name: /Zeige.*Lösung|Show.*solution/i }).click()
    await frame.locator('svg.tree3').waitFor({ state: 'visible', timeout: 30000 })
    const treeStyle = await frame.locator('svg.tree3').evaluate(el => ({ width: getComputedStyle(el).width, family: getComputedStyle(el).fontFamily, height: el.getBoundingClientRect().height }))
    assert.ok(treeStyle.height > 100 && treeStyle.family.includes('sans-serif'), 'Merged @style remains active')
    await page.screenshot({ path: path.join(output, engine + (mobile ? '-mobile' : '') + '-native-tree.png'), fullPage: false })
    const circleLink = frame.locator('a[href]').filter({ hasText: 'Grundaufgaben zum Kreis' }).first()
    if (await circleLink.getAttribute('aria-hidden') === 'true' || !(await circleLink.isVisible())) await frame.locator('button[title="Inhaltsverzeichnis"]').first().click()
    await frame.locator('a[href]').filter({ hasText: 'Grundaufgaben zum Kreis' }).first().click()
    await frame.getByText('Grundaufgaben zum Kreis', { exact: true }).last().waitFor({ state: 'visible' })
    await answer(frame, '6', /richtige Antwort|correct/i)
    const coordinateLink = frame.locator('a[href]').filter({ hasText: 'Stellen ablesen' }).first()
    if (await coordinateLink.getAttribute('aria-hidden') === 'true' || !(await coordinateLink.isVisible())) await frame.locator('button[title="Inhaltsverzeichnis"]').first().click()
    await frame.locator('a[href]').filter({ hasText: 'Stellen ablesen' }).first().click()
    await frame.locator('.jxgbox, .JXGbox, svg').filter({ visible: true }).first().waitFor({ state: 'visible' })
    await frame.getByText('Stellen ablesen', { exact: true }).last().waitFor({ state: 'visible' })
    const current = new URL(frame.url())
    assert.equal(current.origin, new URL(base).origin)
    assert.ok(current.pathname.startsWith(prefix) && current.search.includes('parent:schullia-'))
    await frame.locator('button[title="zurück"]').first().click()
    await frame.getByText('Grundaufgaben zum Kreis', { exact: true }).last().waitFor({ state: 'visible' })
    await frame.locator('button[title="weiter"]').first().click()
    await frame.getByText('Stellen ablesen', { exact: true }).last().waitFor({ state: 'visible' })
    await page.screenshot({ path: path.join(output, engine + (mobile ? '-mobile' : '') + '-native-coordinate.png'), fullPage: false })
    const nativeUrl = page.url()
    await page.reload()
    const reloaded = await readyFrame(page)
    assert.ok(reloaded.url().includes('parent:schullia-'))
    assert.equal(page.url(), nativeUrl)
    assert.deepEqual(evidence.errors, [], 'No browser JavaScript errors')
    assert.deepEqual(unexpectedNetworkFailures(evidence, engine), [], 'No failed external resource requests')
    await context.close()
    return { engine, mobile, sources: 'real public Markdown and imports over HTTPS', interpreter: 'real current LiaScript', taskPaths: paths, checks: ['four-source course', 'KaTeX shadow CSS without visible MathML duplicate', 'wrong and correct Algebrite answer', 'tree SVG and CSS', 'circle check2 answer', 'coordinate rendering', 'ToC', 'previous/next', 'reload', 'project subpath', 'no script/resource errors'], formula, treeStyle, evidence }
  } catch (error) {
    error.evidence = evidence
    error.message += '\nEvidence: ' + JSON.stringify(evidence)
    const page = browser.contexts()[0]?.pages()[0]
    if (page) await page.screenshot({ path: path.join(output, engine + (mobile ? '-mobile' : '') + '-native-failed.png'), fullPage: false }).catch(() => {})
    throw error
  } finally { await browser.close() }
}
async function learningPathFormula() {
  const browser = await pw.chromium.launch({ headless: true })
  const evidence = { errors: [], failedRequests: [], httpErrors: [] }
  try {
    const context = await browser.newContext({ viewport: { width: 1800, height: 900 }, locale: 'de-DE', serviceWorkers: 'block' })
    context.setDefaultTimeout(30000)
    const page = await context.newPage()
    Object.assign(evidence, observe(page))
    await page.goto(learningPathCourseUrl(learningFractions), { waitUntil: 'domcontentloaded' })
    await page.waitForURL(url => url.href.startsWith('https://liascript.github.io/course/?data:text/plain;charset=utf-8;Content-Encoding=gzip;base64,'), { timeout: 60000 })
    assert.ok(!page.url().includes('%3Atext%2Fplain'), 'Die LiaScript-Data-URI bleibt wörtlich und wird nicht als relativer Pfad interpretiert')
    await page.locator('.lia-mode--presentation').waitFor({ state: 'visible', timeout: 90000 })
    const intro = page.getByText(/Hier findest du vier weitere Aufgaben zum gleichen Thema/, { exact: false }).first()
    await intro.waitFor({ state: 'visible', timeout: 90000 })
    const tutorial = page.getByRole('link', { name: 'Tutorial öffnen', exact: true }).first()
    await tutorial.waitFor({ state: 'visible', timeout: 30000 })
    assert.equal(
      await tutorial.getAttribute('href'),
      'https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/00_00_00_Tutorial.md',
      'Die Startfolie verweist auf den belegten LiaScript-Tutorialkurs'
    )
    const officialUrl = page.url()
    await page.reload({ waitUntil: 'domcontentloaded' })
    await page.locator('.lia-mode--presentation').waitFor({ state: 'visible', timeout: 90000 })
    assert.equal(page.url(), officialUrl, 'Die stabile offizielle Data-URI funktioniert nach einem Reload unverändert')
    for (let advance = 0; advance < 12 && !(await page.locator('.lia-quiz').first().isVisible()); advance++) {
      await page.locator('button[title="weiter"]').first().click()
    }
    await page.locator('.lia-quiz').first().waitFor({ state: 'visible', timeout: 90000 })
    const formula = await checkFormulaRendering(page)
    const mode = await page.locator('.lia-canvas').first().getAttribute('class')
    assert.match(mode, /\blia-mode--presentation\b/, 'Lernpfadkurs bewahrt mode: Presentation')
    assert.ok(await page.locator('button[title="Inhaltsverzeichnis"]').first().isVisible(), 'Der normale LiaScript-Viewer zeigt seine Navigation')
    assert.equal(await page.getByText('Subtraktion oder Addition von Brüchen', { exact: true }).count() >= 4, true)
    await page.screenshot({ path: path.join(output, 'chromium-learning-path-formula.png'), fullPage: false })
    assert.deepEqual(evidence.errors, [])
    assert.deepEqual(unexpectedNetworkFailures(evidence, 'chromium'), [])
    return {
      engine: 'chromium',
      sources: 'four real public fraction tasks',
      checks: ['official LiaScript viewer', 'offer-specific start slide', 'Tutorial link', 'Presentation mode', 'KaTeX formatting', 'hidden MathML duplicate'],
      formula,
      evidence,
    }
  } catch (error) {
    error.evidence = evidence
    error.message += '\nEvidence: ' + JSON.stringify(evidence)
    throw error
  } finally { await browser.close() }
}
async function extraNative(kind) {
  const browser = await pw.chromium.launch({ headless: true })
  const evidence = {}
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'de-DE', serviceWorkers: 'block' })
    context.setDefaultTimeout(30000)
    const page = await context.newPage()
    Object.assign(evidence, observe(page))
    let data
    if (kind === 'random') {
      await page.goto(courseUrl(['01_Algebraische_Grundlagen/09_Prozentrechnung/Aufgabe_9900.md']))
      const frame = await readyFrame(page)
      const field = frame.locator('input[placeholder="?"], textarea.lia-quiz__input, [contenteditable="true"], .lia-quiz input[type="text"]').filter({ visible: true }).first()
      await field.fill('123456')
      const controls = await frame.locator('input,button').evaluateAll(items => items.map(item => ({ tag: item.tagName, type: item.type, value: item.value, text: item.textContent, html: item.outerHTML })).filter(item => /Neue Aufgabe/.test(item.value || item.text || '')))
      fs.writeFileSync(path.join(output, 'random-controls.json'), JSON.stringify(controls, null, 2))
      const regenerate = frame.getByText('Neue Aufgabe', { exact: true }).first()
      const inputControl = frame.locator('input[value="Neue Aufgabe"]').first()
      if (await inputControl.count()) {
        const type = await inputControl.getAttribute('type')
        if (!type || type === 'text') await inputControl.press('Enter')
        else await inputControl.click()
      } else await regenerate.click()
      await frame.waitForFunction(() => !Array.from(document.querySelectorAll('input')).some(input => input.value === '123456'))
      await frame.locator('.lia-quiz').first().waitFor({ state: 'visible' })
      data = { checks: ['real authored random task', 'dynamic native quiz', 'New task action resets answer'] }
    } else {
      await page.goto(courseUrl(['01_Algebraische_Grundlagen/04_Bruchrechnung/Aufgabe_0087.md', tasks.coordinate]))
      const frame = await readyFrame(page)
      const staticBoards = await waitForBoards(frame, boards => boards.length >= 4)
      await frame.locator('button[title="Inhaltsverzeichnis"]').first().click()
      await frame.locator('a[href]').filter({ hasText: 'Stellen ablesen' }).first().click()
      await frame.getByText('Stellen ablesen', { exact: true }).last().waitFor({ state: 'visible' })
      await waitForBoards(frame, boards => boards.some(box => box.width > 500 && box.height > 200))
      await answer(frame, '3', /richtige Antwort|correct/i)
      data = { checks: ['static fraction diagrams and normal coordinate import in one course', 'four static diagrams', 'normal coordinate board', 'correct answer after switching'], staticBoards }
    }
    await page.screenshot({ path: path.join(output, 'chromium-native-' + kind + '.png'), fullPage: false })
    assert.deepEqual(evidence.errors, [])
    assert.deepEqual(unexpectedNetworkFailures(evidence, 'chromium'), [])
    return { engine: 'chromium', sources: 'real public task Markdown', ...data, evidence }
  } catch (error) {
    error.evidence = evidence
    error.message += '\nEvidence: ' + JSON.stringify(evidence)
    const page = browser.contexts()[0]?.pages()[0]
    if (page) {
      fs.writeFileSync(path.join(output, 'chromium-native-' + kind + '-failed.txt'), await page.locator('body').innerText())
      await page.screenshot({ path: path.join(output, 'chromium-native-' + kind + '-failed.png'), fullPage: false }).catch(() => {})
    }
    throw error
  } finally { await browser.close() }
}
async function nativeSmoke(engine) {
  const browser = await pw[engine].launch({ headless: true })
  const evidence = {}
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 950 }, locale: 'de-DE', serviceWorkers: 'block' })
    context.setDefaultTimeout(30000)
    if (process.env.SCHULLIA_NATIVE_DEBUG === '1') {
      await context.addInitScript(() => {
        window.__nativeDiagnostics = []
        window.addEventListener('message', event => { if (/^test-native-/.test(event.data?.cmd || '')) window.__nativeDiagnostics.push(event.data) })
      })
      await context.route('**/course-frame.html?*', route => {
        const instrument = function () {
          const blobs = new WeakMap()
          window.Blob = new Proxy(window.Blob, { construct(target, args, newTarget) {
            const blob = Reflect.construct(target, args, newTarget)
            if (Array.isArray(args[0]) && args[0].every(part => typeof part === 'string')) blobs.set(blob, args[0].join(''))
            return blob
          } })
          const original = URL.createObjectURL.bind(URL)
          URL.createObjectURL = function (blob) {
            const url = original(blob)
            const source = blobs.get(blob)
            if (source) parent.postMessage({ cmd: 'test-native-blob', url, length: source.length, start: source.slice(0, 250), excerpt: source.slice(13800, 14500), parentAt: source.indexOf('parent:') }, location.origin)
            return url
          }
          window.addEventListener('error', event => parent.postMessage({ cmd: 'test-native-error', message: event.message, filename: event.filename, line: event.lineno, column: event.colno, stack: event.error && event.error.stack }, location.origin))
        }
        const source = fs.readFileSync(path.join(stage, 'course-frame.html'), 'utf8').replace('const NativeBlob = window.Blob', '(' + instrument.toString() + ')();const NativeBlob = window.Blob')
        return route.fulfill({ contentType: 'text/html', body: source })
      })
    }
    const page = await context.newPage()
    Object.assign(evidence, observe(page))
    await page.goto(courseUrl([tasks.log]))
    const frame = await readyFrame(page)
    await answer(frame, '999', /Die richtige Antwort wurde noch nicht gegeben|falsch|wrong/i)
    await answer(frame, '3', /richtige Antwort|correct/i)
    const sourceAccess = await checkSourceAccess(frame)
    await page.screenshot({ path: path.join(output, engine + '-native-logarithm.png'), fullPage: false })
    if (process.env.SCHULLIA_NATIVE_DEBUG === '1') evidence.diagnostics = await page.evaluate(() => window.__nativeDiagnostics || [])
    if (process.env.SCHULLIA_NATIVE_DEBUG === '1') fs.writeFileSync(path.join(output, engine + '-native-diagnostics.json'), JSON.stringify(evidence, null, 2))
    assert.deepEqual(evidence.errors, [], 'The real runtime/worker/template bootstrap must work in this engine')
    assert.deepEqual(unexpectedNetworkFailures(evidence, engine), [])
    return { engine, sources: 'real public Logarithmen/Aufgabe_0001.md and its normal imports', interpreter: 'real current LiaScript', checks: ['same-origin runtime loader', 'Parcel worker bootstrap', 'wrong answer', 'editing after wrong answer', 'correct answer', 'Freeze-compatible complete source refetch', 'Pages project path'], sourceAccess, evidence }
  } catch (error) {
    error.evidence = evidence
    error.message += '\nEvidence: ' + JSON.stringify(evidence)
    const page = browser.contexts()[0]?.pages()[0]
    if (page) await page.screenshot({ path: path.join(output, engine + '-native-logarithm-failed.png'), fullPage: false }).catch(() => {})
    throw error
  } finally { await browser.close() }
}
async function main() {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
  base = 'http://127.0.0.1:' + server.address().port + prefix
  const engines = (process.env.SCHULLIA_BROWSERS || 'chromium,firefox,webkit').split(',').filter(Boolean)
  if (engines.length) await test('canonical gzip URL is byte-identical across browser engines', () => canonicalCodecUrls(engines))
  if (process.env.SCHULLIA_CODEC_ONLY !== '1' && process.env.SCHULLIA_NATIVE_ONLY !== '1') for (const engine of engines) await test(engine + ' published UI/transport', () => boundary(engine))
  if (process.env.SCHULLIA_CODEC_ONLY !== '1' && process.env.SCHULLIA_BOUNDARY_ONLY !== '1') for (const engine of engines) await test(engine + ' real public course', () => process.env.SCHULLIA_NATIVE_SMOKE === '1' ? nativeSmoke(engine) : native(engine))
  if (process.env.SCHULLIA_CODEC_ONLY !== '1' && process.env.SCHULLIA_BOUNDARY_ONLY !== '1') await test('chromium generated learning path formula in official Presentation viewer', learningPathFormula)
  if (process.env.SCHULLIA_CODEC_ONLY !== '1' && process.env.SCHULLIA_MOBILE === '1') await test('chromium mobile real public course', () => native('chromium', true))
  if (process.env.SCHULLIA_CODEC_ONLY !== '1' && process.env.SCHULLIA_EXTRA === '1') {
    for (const kind of (process.env.SCHULLIA_EXTRA_CASES || 'random,coordinate-mix').split(',')) {
      assert.ok(['random', 'coordinate-mix'].includes(kind))
      await test('chromium real ' + kind, () => extraNative(kind))
    }
  }
  assert.ok(results.length && results.every(result => result.status === 'PASS'), 'Every requested browser check must pass')
}
main().catch(error => { console.error(error); process.exitCode = 1 }).finally(() => server.close())
