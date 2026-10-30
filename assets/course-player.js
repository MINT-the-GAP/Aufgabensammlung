/* Starts a native LiaScript course from a reproducible selection of sources. */
;(function (window) {
  'use strict'

  const COURSE_URL = new URL('./course-frame.html', window.location.href).href
  const RUNTIME_RELEASE = '1.0.2'
  const COURSE_ORIGIN = new URL(COURSE_URL).origin
  const SOURCE_TIMEOUT_MS = 30000
  const FRAME_TIMEOUT_MS = 35000
  const MAX_SOURCES = 2000
  const GROUPS = ['einsteiger', 'fortgeschrittene', 'experten']
  const LEARNING_PATH_OFFERS = ['schwaechen-ueben', 'weitere-uebungen', 'vertiefungen']

  function normalizeManifest(value) {
    if (!value || typeof value !== 'object' || value.v !== 1) {
      throw new Error('Dieser Kurslink hat ein unbekanntes Format. Bitte erzeuge den Kurs erneut.')
    }
    if (!Array.isArray(value.urls) || !value.urls.length || value.urls.length > MAX_SOURCES) {
      throw new Error('Dieser Kurslink enthält keine gültige Aufgabenauswahl.')
    }

    const urls = value.urls.map(function (entry) {
      if (typeof entry !== 'string') throw new Error('Dieser Kurslink enthält eine ungültige Aufgabenquelle.')
      let url
      try { url = new URL(entry) } catch (_) { throw new Error('Dieser Kurslink enthält eine ungültige Aufgabenquelle.') }
      if (url.protocol !== 'https:' || url.hostname !== 'raw.githubusercontent.com' || url.port ||
          url.username || url.password || url.search || url.hash ||
          !/^\/MINT-the-GAP\/Aufgabensammlung\/.+\/Aufgabe_[^/]+\.md$/i.test(url.pathname)) {
        throw new Error('Dieser Kurslink enthält eine unbekannte Aufgabenquelle.')
      }
      return url.href
    })

    if (value.kind !== undefined && value.kind !== 'lernpfad') {
      throw new Error('Dieser Kurslink enthält einen unbekannten Kurstyp.')
    }
    if (value.kind === 'lernpfad') {
      if (urls.length !== 4 || new Set(urls).size !== 4) {
        throw new Error('Ein Lernpfad muss genau vier verschiedene Aufgaben enthalten.')
      }
      if (!LEARNING_PATH_OFFERS.includes(value.offer)) {
        throw new Error('Dieser Kurslink enthält ein unbekanntes Lernpfad-Angebot.')
      }
      if (!GROUPS.includes(value.level)) {
        throw new Error('Dieser Kurslink enthält ein unbekanntes Lernpfad-Niveau.')
      }
      if (typeof value.topic !== 'string' || !value.topic.trim() ||
          /[\r\n\u0000]/.test(value.topic) || value.topic.length > 200) {
        throw new Error('Dieser Kurslink enthält ein ungültiges Lernpfad-Thema.')
      }
      const topic = value.topic.trim()
      return {
        v: 1,
        kind: 'lernpfad',
        offer: value.offer,
        topic: topic,
        level: value.level,
        urls: urls,
        group: value.level,
        themes: [topic],
      }
    }

    const group = value.group === undefined ? 'fortgeschrittene' : value.group
    if (!GROUPS.includes(group)) throw new Error('Dieser Kurslink enthält eine unbekannte Zielgruppe.')
    if (value.themes !== undefined && !Array.isArray(value.themes)) {
      throw new Error('Dieser Kurslink enthält eine ungültige Themenauswahl.')
    }
    const themes = (value.themes || []).map(function (theme) {
      if (typeof theme !== 'string' || /[\r\n\u0000]/.test(theme) || theme.length > 200) {
        throw new Error('Dieser Kurslink enthält eine ungültige Themenauswahl.')
      }
      return theme.trim()
    }).filter(Boolean)

    return { v: 1, urls: urls, group: group, themes: themes }
  }

  function readManifest(hash) {
    const params = new URLSearchParams(String(hash === undefined ? window.location.hash : hash).replace(/^#/, ''))
    const encoded = params.get('course')
    if (!encoded) throw new Error('Dieser Kurslink enthält keine Aufgabenauswahl. Bitte erzeuge den Kurs erneut.')
    let value
    try { value = JSON.parse(encoded) } catch (_) { throw new Error('Dieser Kurslink ist unvollständig. Bitte erzeuge den Kurs erneut.') }
    return normalizeManifest(value)
  }

  async function courseIdentity(manifest, source) {
    // A runtime release can change the interpreter shell without changing the
    // selected Markdown. Include it so the frame URL also cache-busts then.
    const text = RUNTIME_RELEASE + '\n' + JSON.stringify(manifest) + '\n' + source
    if (window.crypto && window.crypto.subtle && typeof TextEncoder !== 'undefined') {
      try {
        const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
        return 'schullia-' + Array.from(new Uint8Array(digest), function (byte) {
          return byte.toString(16).padStart(2, '0')
        }).join('')
      } catch (_) { /* Non-secure local previews can use the deterministic fallback. */ }
    }
    let left = 2166136261
    let right = 5381
    for (let i = 0; i < text.length; i++) {
      left = Math.imul(left ^ text.charCodeAt(i), 16777619)
      right = Math.imul(right, 33) ^ text.charCodeAt(i)
    }
    return 'schullia-' + (left >>> 0).toString(16) + '-' + (right >>> 0).toString(16) + '-' + text.length
  }

  const document = window.document
  let run = 0
  let controller = null
  let frameTimer = null
  let activeCourse = null

  function element(id) { return document.getElementById(id) }

  function showError(message) {
    activeCourse = null
    clearTimeout(frameTimer)
    element('courseFrame').hidden = true
    element('courseLoading').hidden = false
    element('courseLoading').classList.add('is-error')
    element('courseHeading').textContent = 'Der Kurs konnte nicht geöffnet werden'
    element('courseStatus').textContent = message
    element('courseRetry').hidden = false
    document.title = 'SchulLia – Kurs konnte nicht geöffnet werden'
  }

  async function start() {
    const currentRun = ++run
    if (controller) controller.abort()
    clearTimeout(frameTimer)
    activeCourse = null
    controller = new AbortController()
    const currentController = controller
    const frame = element('courseFrame')
    frame.hidden = true
    frame.src = 'about:blank'
    element('courseLoading').hidden = false
    element('courseLoading').classList.remove('is-error')
    element('courseHeading').textContent = 'Dein Kurs wird vorbereitet'
    element('courseStatus').textContent = 'Die ausgewählten Aufgaben werden geladen.'
    element('courseRetry').hidden = true
    document.title = 'SchulLia – Schülerkurs'

    let sourceTimer
    let timedOut = false
    try {
      const manifest = readManifest()
      if (!window.SchulLiaCourseSource || typeof window.SchulLiaCourseSource.build !== 'function') {
        throw new Error('Die Kursvorbereitung konnte nicht geladen werden. Bitte lade diese Seite erneut.')
      }
      if (!window.SchulLiaCourseGenerator ||
          window.SchulLiaCourseGenerator.schema !== 'schullia-course-generator' ||
          window.SchulLiaCourseGenerator.version !== 1) {
        throw new Error('Die gemeinsame Kursgenerierung konnte nicht geladen werden. Bitte lade diese Seite erneut.')
      }
      sourceTimer = setTimeout(function () {
        timedOut = true
        currentController.abort()
      }, SOURCE_TIMEOUT_MS)
      const documents = await Promise.all(manifest.urls.map(async function (url, index) {
        const response = await window.fetch(url, { signal: currentController.signal })
        if (!response.ok) throw new Error('Aufgabe ' + (index + 1) + ' konnte nicht geladen werden (HTTP ' + response.status + ').')
        return { url: url, content: await response.text() }
      }))
      clearTimeout(sourceTimer)
      if (currentRun !== run) return

      const sourceOptions = manifest.kind === 'lernpfad'
        ? window.SchulLiaCourseGenerator.learningPathSourceOptions(manifest)
        : { group: manifest.group, themes: manifest.themes, edit: false }
      const source = window.SchulLiaCourseGenerator.buildCourse(documents, {
        assembler: window.SchulLiaCourseSource,
        sourceOptions: sourceOptions,
      })
      if (typeof source !== 'string' || !source.trim()) throw new Error('Die ausgewählten Aufgaben enthalten keinen Kurstext.')
      const identity = await courseIdentity(manifest, source)
      if (currentRun !== run) return
      const uri = 'parent:' + identity
      activeCourse = { uri: uri, source: source, run: currentRun }
      element('courseStatus').textContent = 'Dein Schülerkurs wird geöffnet.'
      frameTimer = setTimeout(function () {
        if (currentRun === run) showError('LiaScript konnte nicht gestartet werden. Prüfe die Internetverbindung und versuche es erneut.')
      }, FRAME_TIMEOUT_MS)
      frame.src = COURSE_URL + '?' + uri
    } catch (error) {
      if (currentRun !== run) return
      currentController.abort()
      showError(timedOut
        ? 'Das Laden der Aufgaben dauert zu lange. Prüfe die Internetverbindung und versuche es erneut.'
        : error && error.name === 'TypeError'
          ? 'Die Aufgaben konnten nicht geladen werden. Prüfe die Internetverbindung und versuche es erneut.'
          : String(error && error.message || 'Der Kurs konnte nicht geladen werden. Bitte versuche es erneut.'))
    } finally {
      clearTimeout(sourceTimer)
    }
  }

  function handleMessage(event) {
    const frame = element('courseFrame')
    if (!activeCourse || event.origin !== COURSE_ORIGIN || event.source !== frame.contentWindow) return
    const data = event.data
    if (data && data.cmd === 'schullia-course-error' && data.param &&
        data.param.uri === activeCourse.uri && typeof data.param.message === 'string') {
      showError(data.param.message)
      return
    }
    if (!data || data.cmd !== 'lia-course' || !data.param || data.param.uri !== activeCourse.uri) return
    event.source.postMessage({
      cmd: 'lia-course',
      param: { uri: activeCourse.uri, ok: true, body: activeCourse.source }
    }, COURSE_ORIGIN)
    clearTimeout(frameTimer)
    frame.hidden = false
    element('courseLoading').hidden = true
  }

  window.SchulLiaCoursePlayer = {
    readManifest: readManifest,
    normalizeManifest: normalizeManifest,
    courseIdentity: courseIdentity,
    start: start
  }
  window.addEventListener('message', handleMessage)
  window.addEventListener('hashchange', start)
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) start()
  })
  window.addEventListener('pagehide', function () {
    ++run
    activeCourse = null
    if (controller) controller.abort()
    clearTimeout(frameTimer)
  })
  element('courseRetry').addEventListener('click', start)
  start()
})(window)
