/* Shared, versioned task selection and course generation for SchulLia. */
(function (root, factory) {
  const api = factory(root)
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.SchulLiaCourseGenerator = api
})(typeof window === 'object' ? window : typeof globalThis === 'object' ? globalThis : this, function (root) {
  'use strict'

  const RELEASE = '1.0.0'
  const CATALOG_SCHEMA = 'schullia-course-catalog'
  const CATALOG_VERSION = 1
  const GROUPS = ['einsteiger', 'fortgeschrittene', 'experten']
  const MATHPATH_IMPORT = 'https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md'
  const profiles = {
    einsteiger: {
      difficulty: { 1: 0.35, 2: 0.25, 3: 0.15, 4: 0.15, 5: 0.1 },
      network: { 1: 0.6, 2: 0.3, 3: 0.05, 4: 0.05, 5: 0.0 },
    },
    fortgeschrittene: {
      difficulty: { 1: 0.1, 2: 0.25, 3: 0.4, 4: 0.15, 5: 0.1 },
      network: { 1: 0.1, 2: 0.25, 3: 0.4, 4: 0.15, 5: 0.1 },
    },
    experten: {
      difficulty: { 1: 0.1, 2: 0.2, 3: 0.35, 4: 0.2, 5: 0.15 },
      network: { 1: 0.1, 2: 0.2, 3: 0.3, 4: 0.2, 5: 0.2 },
    },
  }
  const difficultyTags = new Map([
    ['sehr leicht', 1], ['leicht', 2], ['mittel', 3], ['schwer', 4], ['sehr schwer', 5],
  ])
  const networkTags = new Map([
    ['sehr niedrig', 1], ['niedrig', 2], ['normal', 3], ['hoch', 4], ['sehr hoch', 5],
  ])
  const operatorAliases = new Map()
  const operatorRules = [
    ['angeben', 0.05, 0.15], ['ordnen', 0, 0.05], ['skizzieren', 0, 0.2],
    ['zeichnen', 0, 0.4], ['abschaetzen', 0, 0.1], ['vergleichen', 0, 0.1],
    ['aufstellen', 0, 0.05], ['ermitteln_bestimmen', 0.2, 0.5],
    ['berechnen', 0.3, 0.75], ['planen', 0, 0.05], ['untersuchen', 0, 0.1],
    ['ableiten', 0, 0.1], ['herleiten', 0, 0.1], ['beschreiben', 0, 0.1],
    ['erklaeren', 0, 0.1], ['erlaeutern', 0, 0.05], ['eroertern', 0, 0.05],
    ['diskutieren', 0, 0.05], ['beurteilen', 0, 0.1], ['bewerten', 0, 0.1],
    ['begruenden', 0, 0.1], ['interpretieren_deuten', 0, 0.1],
    ['analysieren', 0, 0.1], ['auswerten', 0, 0.1], ['darstellen', 0, 0.1],
  ].map(function (entry) { return { key: entry[0], min: entry[1], max: entry[2] } })

  function addOperator(key, aliases) {
    aliases.forEach(function (alias) { operatorAliases.set(alias, key) })
  }
  addOperator('angeben', ['angeben', 'gib an', 'ausfullen', 'fulle aus', 'auswahlen', 'wahle aus', 'ankreuzen', 'kreuze an'])
  addOperator('ordnen', ['ordnen', 'ordne'])
  addOperator('skizzieren', ['skizzieren', 'skizziere'])
  addOperator('zeichnen', ['zeichnen', 'zeichne'])
  addOperator('abschaetzen', ['abschatzen', 'schatze ab'])
  addOperator('vergleichen', ['vergleichen', 'vergleiche'])
  addOperator('aufstellen', ['aufstellen', 'stelle auf'])
  addOperator('ermitteln_bestimmen', ['ermitteln', 'ermittle', 'bestimmen', 'bestimme'])
  addOperator('berechnen', ['berechnen', 'berechne'])
  addOperator('planen', ['planen', 'plane'])
  addOperator('untersuchen', ['untersuchen', 'untersuche'])
  addOperator('ableiten', ['ableiten', 'leite ab'])
  addOperator('herleiten', ['herleiten', 'leite her'])
  addOperator('beschreiben', ['beschreiben', 'beschreibe'])
  addOperator('erklaeren', ['erklaren', 'erklare'])
  addOperator('erlaeutern', ['erlautern', 'erlautere'])
  addOperator('eroertern', ['erortern', 'erortere'])
  addOperator('diskutieren', ['diskutieren', 'diskutiere'])
  addOperator('beurteilen', ['beurteilen', 'beurteile'])
  addOperator('bewerten', ['bewerten', 'bewerte'])
  addOperator('begruenden', ['begrunden', 'begrunde', 'begruenden'])
  addOperator('interpretieren_deuten', ['interpretieren', 'interpretiere', 'deuten', 'deute'])
  addOperator('analysieren', ['analysieren', 'analysiere'])
  addOperator('auswerten', ['auswerten', 'werte aus'])
  addOperator('darstellen', ['darstellen', 'stelle dar'])

  class CourseGeneratorError extends Error {
    constructor(code, message, details) {
      super(message)
      this.name = 'CourseGeneratorError'
      this.code = code
      if (details !== undefined) this.details = details
    }
  }

  function normalizeTag(value) {
    return String(value == null ? '' : value)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss').replace(/\u00a0/g, ' ')
      .toLowerCase().replace(/\s+/g, ' ').trim()
  }

  function canonicalTopic(value) {
    const topic = String(value == null ? '' : value).trim()
    const key = normalizeTag(topic)
    if (key === 'bruch' || key === 'bruche' || key === 'brueche' || key === 'bruchrechnung') return 'Bruchrechnung'
    if (key === 'dreieck' || key === 'dreiecke') return 'Dreiecke'
    return topic
  }

  function topicKey(value) { return normalizeTag(canonicalTopic(value)) }

  function classifyTags(values) {
    const tags = []
    const topics = []
    const seenTags = new Set()
    const seenTopics = new Set()
    let difficulty = null
    let network = null
    let operator = null
    ;(Array.isArray(values) ? values : []).forEach(function (value) {
      const tag = String(value == null ? '' : value).trim()
      const key = normalizeTag(tag)
      if (!key) return
      if (!seenTags.has(key)) { seenTags.add(key); tags.push(tag) }
      if (difficultyTags.has(key)) { if (difficulty === null) difficulty = difficultyTags.get(key); return }
      if (networkTags.has(key)) { if (network === null) network = networkTags.get(key); return }
      if (operatorAliases.has(key)) { if (operator === null) operator = operatorAliases.get(key); return }
      if (key === 'erklaerung' || key === 'erklaerungen') return
      const topic = canonicalTopic(tag)
      const canonicalKey = topicKey(topic)
      if (canonicalKey && !seenTopics.has(canonicalKey)) {
        seenTopics.add(canonicalKey)
        topics.push(topic)
      }
    })
    return { tags: tags, topics: topics, difficulty: difficulty, network: network, operator: operator }
  }

  function validTaskUrl(value) {
    try {
      const url = new URL(value)
      return url.protocol === 'https:' && url.hostname === 'raw.githubusercontent.com' && !url.port &&
        !url.username && !url.password && !url.search && !url.hash &&
        /^\/MINT-the-GAP\/Aufgabensammlung\/.+\/Aufgabe_[^/]+\.md$/i.test(url.pathname)
    } catch (_) { return false }
  }

  function validateCatalog(catalog) {
    if (!catalog || typeof catalog !== 'object' || catalog.schema !== CATALOG_SCHEMA ||
        catalog.version !== CATALOG_VERSION || !Array.isArray(catalog.tasks)) {
      throw new CourseGeneratorError('INVALID_CATALOG', 'Der Aufgabenkatalog hat ein unbekanntes Format.')
    }
    const ids = new Set()
    const urls = new Set()
    catalog.tasks.forEach(function (task, index) {
      const prefix = 'Aufgabe ' + (index + 1)
      if (!task || typeof task !== 'object' || typeof task.id !== 'string' || !task.id || ids.has(task.id)) {
        throw new CourseGeneratorError('INVALID_CATALOG', prefix + ' hat keine eindeutige ID.')
      }
      if (typeof task.url !== 'string' || !validTaskUrl(task.url) || urls.has(task.url)) {
        throw new CourseGeneratorError('INVALID_CATALOG', prefix + ' hat keine eindeutige gültige Quelle.')
      }
      if (!Array.isArray(task.tags) || !Array.isArray(task.topics) ||
          task.tags.some(function (tag) { return typeof tag !== 'string' }) ||
          task.topics.some(function (tag) { return typeof tag !== 'string' })) {
        throw new CourseGeneratorError('INVALID_CATALOG', prefix + ' hat ungültige Tags.')
      }
      if (task.difficulty !== null && task.difficulty !== undefined &&
          (!Number.isInteger(task.difficulty) || task.difficulty < 1 || task.difficulty > 5)) {
        throw new CourseGeneratorError('INVALID_CATALOG', prefix + ' hat einen ungültigen Schwierigkeitsgrad.')
      }
      if (task.network !== null && task.network !== undefined &&
          (!Number.isInteger(task.network) || task.network < 1 || task.network > 5)) {
        throw new CourseGeneratorError('INVALID_CATALOG', prefix + ' hat einen ungültigen Vernetzungsgrad.')
      }
      ids.add(task.id)
      urls.add(task.url)
    })
    return catalog
  }

  function taskList(catalog) {
    if (Array.isArray(catalog)) return catalog
    return validateCatalog(catalog).tasks
  }

  function normalizedSet(values) {
    const list = Array.isArray(values) ? values : values == null ? [] : [values]
    return new Set(list.map(topicKey).filter(Boolean))
  }

  function filterTasks(catalog, request) {
    const settings = request || {}
    const required = normalizedSet(settings.themes)
    const blocked = normalizedSet(settings.blockedThemes)
    const allowed = normalizedSet(settings.allowedThemes)
    const curriculum = normalizedSet(settings.curriculumThemes)
    const useCurriculum = Array.isArray(settings.allowedThemes)
    const seen = new Set()
    return taskList(catalog).filter(function (task) {
      if (!task || seen.has(task.url)) return false
      seen.add(task.url)
      const topics = new Set((task.topics || []).map(topicKey).filter(Boolean))
      if (required.size && !Array.from(required).every(function (key) { return topics.has(key) })) return false
      if (Array.from(blocked).some(function (key) { return topics.has(key) })) return false
      if (useCurriculum) {
        if (!Array.from(topics).some(function (key) { return allowed.has(key) })) return false
        if (Array.from(topics).some(function (key) { return curriculum.has(key) && !allowed.has(key) })) return false
      }
      return true
    })
  }

  function createSeededRandom(seed) {
    let state = 2166136261
    const text = String(seed == null ? '' : seed)
    for (let index = 0; index < text.length; index++) {
      state ^= text.charCodeAt(index)
      state = Math.imul(state, 16777619)
    }
    state >>>= 0
    return function () {
      state += 0x6D2B79F5
      let value = state
      value = Math.imul(value ^ value >>> 15, value | 1)
      value ^= value + Math.imul(value ^ value >>> 7, value | 61)
      return ((value ^ value >>> 14) >>> 0) / 4294967296
    }
  }

  function shuffle(items, random) {
    const pool = items.slice()
    for (let index = pool.length - 1; index > 0; index--) {
      const target = Math.floor(random() * (index + 1))
      const value = pool[index]
      pool[index] = pool[target]
      pool[target] = value
    }
    return pool
  }

  function allocateTargets(total, weights, availability) {
    const targets = new Map()
    const active = Object.keys(weights).map(Number).filter(function (level) {
      return Number(availability.get(level) || 0) > 0 && Number(weights[level] || 0) > 0
    })
    const weightSum = active.reduce(function (sum, level) { return sum + Number(weights[level]) }, 0)
    if (!active.length || !weightSum) return targets
    const bucket = []
    let assigned = 0
    active.forEach(function (level) {
      const available = Number(availability.get(level) || 0)
      const expected = total * Number(weights[level]) / weightSum
      const base = Math.min(available, Math.floor(expected))
      targets.set(level, base)
      assigned += base
      bucket.push({ level: level, rest: expected - base, room: Math.max(0, available - base) })
    })
    let remaining = total - assigned
    while (remaining > 0) {
      bucket.sort(function (a, b) { return b.rest !== a.rest ? b.rest - a.rest : b.room - a.room })
      const entry = bucket.find(function (item) { return item.room > 0 })
      if (!entry) break
      targets.set(entry.level, Number(targets.get(entry.level) || 0) + 1)
      entry.room--
      entry.rest = 0
      remaining--
    }
    return targets
  }

  function buildOperatorConstraints(total, availability, random) {
    const entries = operatorRules.map(function (rule) {
      const available = Number(availability.get(rule.key) || 0)
      if (!available) {
        return { key: rule.key, min: 0, max: 0, preferredMax: 0, maxShare: rule.max }
      }
      let min = Math.min(available, Math.floor(rule.min * total + 1e-9))
      const max = Math.min(available, Math.ceil(rule.max * total - 1e-9))
      if (max < min) min = max
      let preferredMax = max
      if (rule.min > 0) {
        const exact = ((rule.min + rule.max) / 2) * total
        preferredMax = Math.max(min, Math.min(max, available,
          Math.floor(exact) + (random() < exact - Math.floor(exact) ? 1 : 0)))
      }
      return {
        key: rule.key,
        min: min,
        max: max,
        preferredMax: preferredMax,
        maxShare: rule.max,
      }
    })
    const sum = entries.reduce(function (value, entry) { return value + entry.min }, 0)
    if (sum > total) {
      const scaled = entries.filter(function (entry) { return entry.min > 0 }).map(function (entry) {
        const exact = entry.min * total / sum
        return { entry: entry, base: Math.floor(exact), rest: exact - Math.floor(exact) }
      })
      let remaining = total - scaled.reduce(function (value, item) { return value + item.base }, 0)
      scaled.sort(function (a, b) { return b.rest - a.rest })
      scaled.forEach(function (item) {
        item.entry.min = item.base + (remaining > 0 ? 1 : 0)
        if (remaining > 0) remaining--
      })
    }
    return new Map(entries.map(function (entry) { return [entry.key, entry] }))
  }

  function selectTasks(catalog, request) {
    const settings = request || {}
    const requested = Number(settings.count)
    if (!Number.isInteger(requested) || requested < 1) {
      throw new CourseGeneratorError('INVALID_REQUEST', 'Die Aufgabenanzahl muss eine positive ganze Zahl sein.')
    }
    const candidates = filterTasks(catalog, settings)
    if (!candidates.length) {
      throw new CourseGeneratorError('NO_TASKS', 'Keine Aufgaben für das gewählte Thema und Niveau gefunden.')
    }
    if (settings.strictCount && candidates.length < requested) {
      throw new CourseGeneratorError(
        'INSUFFICIENT_TASKS',
        'Für diese Auswahl sind nur ' + candidates.length + ' statt ' + requested + ' verschiedener Aufgaben verfügbar.',
        { available: candidates.length, required: requested }
      )
    }
    const count = Math.min(requested, candidates.length)
    const group = GROUPS.includes(settings.group) ? settings.group : 'fortgeschrittene'
    const profile = profiles[group]
    const random = typeof settings.random === 'function'
      ? settings.random
      : settings.seed !== undefined ? createSeededRandom(settings.seed) : Math.random
    const pool = shuffle(candidates, random)
    const selected = []
    const availability = { difficulty: new Map(), network: new Map(), operator: new Map() }
    candidates.forEach(function (task) {
      if (Number.isInteger(task.difficulty)) {
        availability.difficulty.set(task.difficulty, Number(availability.difficulty.get(task.difficulty) || 0) + 1)
      }
      if (Number.isInteger(task.network)) {
        availability.network.set(task.network, Number(availability.network.get(task.network) || 0) + 1)
      }
      if (task.operator) {
        availability.operator.set(task.operator, Number(availability.operator.get(task.operator) || 0) + 1)
      }
    })
    const targets = {
      difficulty: allocateTargets(count, profile.difficulty, availability.difficulty),
      network: allocateTargets(count, profile.network, availability.network),
    }
    const constraints = buildOperatorConstraints(count, availability.operator, random)
    const counts = { difficulty: new Map(), network: new Map(), operator: new Map() }

    function increment(map, key) {
      if (key !== null && key !== undefined) map.set(key, Number(map.get(key) || 0) + 1)
    }
    function register(task) {
      selected.push(task)
      pool.splice(pool.indexOf(task), 1)
      if (Number.isInteger(task.difficulty)) increment(counts.difficulty, task.difficulty)
      if (Number.isInteger(task.network)) increment(counts.network, task.network)
      if (task.operator) increment(counts.operator, task.operator)
    }
    function score(task) {
      let value = random() * 0.05
      if (Number.isInteger(task.difficulty)) {
        value += Number(counts.difficulty.get(task.difficulty) || 0) <
          Number(targets.difficulty.get(task.difficulty) || 0) ? 22 : -6
      }
      if (Number.isInteger(task.network)) {
        value += Number(counts.network.get(task.network) || 0) <
          Number(targets.network.get(task.network) || 0) ? 16 : -4
      }
      return value
    }
    function respectsMax(task) {
      const rule = task.operator && constraints.get(task.operator)
      return !rule || Number(counts.operator.get(task.operator) || 0) < rule.preferredMax
    }
    function overflowPenalty(task) {
      const rule = task.operator && constraints.get(task.operator)
      if (!rule) return 0
      const next = Number(counts.operator.get(task.operator) || 0) + 1
      const preference = next > rule.preferredMax ? (next - rule.preferredMax) * 100 : 0
      if (next <= rule.max) return preference
      return preference + Math.max(0, next / count - rule.maxShare) * 1000 +
        (next - rule.max) * 10
    }
    function pick(predicate, bonus, penalty) {
      let best = null
      let bestScore = -Infinity
      pool.forEach(function (task) {
        if (!predicate(task)) return
        const value = score(task) + (bonus || 0) - (penalty ? penalty(task) : 0)
        if (value > bestScore) { best = task; bestScore = value }
      })
      return best
    }

    Array.from(constraints.values())
      .filter(function (rule) { return rule.min > 0 })
      .sort(function (a, b) { return b.min - a.min })
      .forEach(function (rule) {
        while (selected.length < count && Number(counts.operator.get(rule.key) || 0) < rule.min) {
          const task = pick(function (entry) { return entry.operator === rule.key }, 35)
          if (!task) break
          register(task)
        }
      })
    Array.from(targets.difficulty.keys()).sort().forEach(function (level) {
      while (selected.length < count &&
          Number(counts.difficulty.get(level) || 0) < Number(targets.difficulty.get(level) || 0)) {
        const task = pick(function (entry) { return entry.difficulty === level && respectsMax(entry) }, 18)
        if (!task) break
        register(task)
      }
    })
    Array.from(targets.network.keys()).sort().forEach(function (level) {
      while (selected.length < count &&
          Number(counts.network.get(level) || 0) < Number(targets.network.get(level) || 0)) {
        const task = pick(function (entry) { return entry.network === level && respectsMax(entry) }, 14)
        if (!task) break
        register(task)
      }
    })
    while (selected.length < count && pool.length) {
      const task = pick(respectsMax, 0) ||
        pick(function () { return true }, 0, overflowPenalty)
      if (!task) break
      register(task)
    }
    return selected.sort(function (a, b) {
      const difficulty = (Number.isInteger(a.difficulty) ? a.difficulty : 99) -
        (Number.isInteger(b.difficulty) ? b.difficulty : 99)
      return difficulty || (Number.isInteger(a.network) ? a.network : 99) -
        (Number.isInteger(b.network) ? b.network : 99)
    })
  }

  async function loadCatalog(url, options) {
    const fetcher = options && options.fetch || root && root.fetch
    if (typeof fetcher !== 'function') {
      throw new CourseGeneratorError('FETCH_FAILED', 'Der Aufgabenkatalog kann in dieser Umgebung nicht geladen werden.')
    }
    let response
    try {
      response = await fetcher(url, options && options.signal ? { signal: options.signal } : undefined)
    } catch (error) {
      throw new CourseGeneratorError('FETCH_FAILED', 'Der Aufgabenkatalog konnte nicht geladen werden.', { cause: error })
    }
    if (!response.ok) {
      throw new CourseGeneratorError(
        'FETCH_FAILED',
        'Der Aufgabenkatalog konnte nicht geladen werden (HTTP ' + response.status + ').'
      )
    }
    let catalog
    try { catalog = await response.json() } catch (error) {
      throw new CourseGeneratorError(
        'INVALID_CATALOG',
        'Der Aufgabenkatalog enthält kein gültiges JSON.',
        { cause: error }
      )
    }
    return validateCatalog(catalog)
  }

  async function loadDocuments(tasks, options) {
    const fetcher = options && options.fetch || root && root.fetch
    if (typeof fetcher !== 'function') {
      throw new CourseGeneratorError('FETCH_FAILED', 'Aufgaben können in dieser Umgebung nicht geladen werden.')
    }
    return Promise.all(tasks.map(async function (task, index) {
      let response
      try {
        response = await fetcher(task.url, options && options.signal ? { signal: options.signal } : undefined)
      } catch (error) {
        throw new CourseGeneratorError(
          'FETCH_FAILED',
          'Aufgabe ' + (index + 1) + ' konnte nicht geladen werden.',
          { task: task, cause: error }
        )
      }
      if (!response.ok) {
        throw new CourseGeneratorError(
          'FETCH_FAILED',
          'Aufgabe ' + (index + 1) + ' konnte nicht geladen werden (HTTP ' + response.status + ').',
          { task: task }
        )
      }
      return { url: task.url, content: await response.text() }
    }))
  }

  function buildCourse(documents, options) {
    const assembler = options && options.assembler || root && root.SchulLiaCourseSource
    if (!assembler || typeof assembler.build !== 'function') {
      throw new CourseGeneratorError('ASSEMBLER_MISSING', 'Der Kursgenerator konnte nicht geladen werden.')
    }
    try {
      return assembler.build(documents, options && options.sourceOptions || {})
    } catch (error) {
      if (error instanceof CourseGeneratorError) throw error
      throw new CourseGeneratorError(
        'BUILD_FAILED',
        String(error && error.message || 'Der Kurstext konnte nicht erstellt werden.'),
        { cause: error }
      )
    }
  }

  async function generate(catalog, request, options) {
    const tasks = selectTasks(catalog, request)
    const documents = await loadDocuments(tasks, options)
    const source = buildCourse(documents, options)
    return { tasks: tasks, documents: documents, source: source }
  }

  function isNotFreezeResource(key, url) {
    return key !== 'import' ||
      !/(?:\/lia-freeze(?:-v2)?\/|\/Freeze\/|FreezeREADME\.md)/i.test(String(url || ''))
  }

  function learningPathSourceOptions(manifest, options) {
    const settings = options || {}
    const labels = {
      'schwaechen-ueben': 'Schwächen üben',
      'weitere-uebungen': 'Weitere Übungen',
      vertiefungen: 'Vertiefungen',
    }
    const levelLabels = {
      einsteiger: 'Einsteiger',
      fortgeschrittene: 'Fortgeschritten',
      experten: 'Experte',
    }
    return {
      edit: false,
      title: (labels[manifest.offer] || 'Lernpfad') + ': ' + String(manifest.topic || '').trim(),
      imports: [settings.mathPathImport || MATHPATH_IMPORT],
      header: ['lernpfad-level: ' + (levelLabels[manifest.level] || manifest.level)],
      resourceFilter: isNotFreezeResource,
      appendBody: '# Dein weiterer Lernpfad\n\n@Lernpfad',
    }
  }

  function buildDirectCourseUrl(base, manifest) {
    const url = new URL('course.html', base)
    url.searchParams.set('v', RELEASE)
    url.hash = 'course=' + encodeURIComponent(JSON.stringify(manifest))
    return url.href
  }

  return {
    schema: 'schullia-course-generator',
    version: 1,
    release: RELEASE,
    catalogSchema: CATALOG_SCHEMA,
    catalogVersion: CATALOG_VERSION,
    groups: GROUPS.slice(),
    profiles: profiles,
    CourseGeneratorError: CourseGeneratorError,
    normalizeTag: normalizeTag,
    canonicalTopic: canonicalTopic,
    classifyTags: classifyTags,
    validateCatalog: validateCatalog,
    filterTasks: filterTasks,
    selectTasks: selectTasks,
    createSeededRandom: createSeededRandom,
    loadCatalog: loadCatalog,
    loadDocuments: loadDocuments,
    buildCourse: buildCourse,
    generate: generate,
    learningPathSourceOptions: learningPathSourceOptions,
    buildDirectCourseUrl: buildDirectCourseUrl,
  }
})
