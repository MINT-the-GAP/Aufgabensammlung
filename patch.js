const fs = require('fs')
const path = require('path')

const TARGET_FILE = 'ziel.html'
const SCRIPT_START = '<!-- SCHULLIA_CUSTOM_SCRIPT_START -->'
const SCRIPT_END = '<!-- SCHULLIA_CUSTOM_SCRIPT_END -->'
const STYLE_START = '<!-- SCHULLIA_THEME_START -->'
const STYLE_END = '<!-- SCHULLIA_THEME_END -->'
const NAVBAR_FIX_SCRIPT_START = '<!-- SCHULLIA_NAVBAR_FIX_SCRIPT_START -->'
const NAVBAR_FIX_SCRIPT_END = '<!-- SCHULLIA_NAVBAR_FIX_SCRIPT_END -->'
const NAVBAR_FIX_STYLE_START = '<!-- SCHULLIA_NAVBAR_FIX_STYLE_START -->'
const NAVBAR_FIX_STYLE_END = '<!-- SCHULLIA_NAVBAR_FIX_STYLE_END -->'
const CARD_DECORATION_STYLE_START = '<!-- SCHULLIA_CARD_DECORATION_STYLE_START -->'
const CARD_DECORATION_STYLE_END = '<!-- SCHULLIA_CARD_DECORATION_STYLE_END -->'
const CARD_DECORATION_SCRIPT_START = '<!-- SCHULLIA_CARD_DECORATION_SCRIPT_START -->'
const CARD_DECORATION_SCRIPT_END = '<!-- SCHULLIA_CARD_DECORATION_SCRIPT_END -->'

const NAVBAR_FIX_SCRIPT = `${NAVBAR_FIX_SCRIPT_START}
<script>
  (function () {
    function normalizeText(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/\\s+/g, ' ')
        .trim()
    }

    function getHeaderColumn() {
      return (
        document.querySelector('section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto') ||
        document.querySelector('section.py-5.text-center.container .row.py-lg-5 > .col-12')
      )
    }

    function populateCourseThemeOptions() {
      const sourceSelect = document.getElementById('categorySelect')
      const themeSelect = document.getElementById('courseThemeSelect')
      if (!sourceSelect || !themeSelect) return

      const seen = new Set()
      const options = []

      Array.from(sourceSelect.options).forEach(function (opt) {
        const value = String(opt.value || '').trim()
        const text = String(opt.textContent || '').trim()
        const key = normalizeText(value || text)

        if (!value) return
        if (!key || key === 'alle themen') return
        if (seen.has(key)) return

        seen.add(key)
        options.push({ value: value, text: text || value })
      })

      options.sort(function (a, b) {
        return a.text.localeCompare(b.text, 'de')
      })

      themeSelect.innerHTML = ''
      const placeholder = document.createElement('option')
      placeholder.value = ''
      placeholder.textContent = 'Thema wählen'
      placeholder.selected = true
      themeSelect.appendChild(placeholder)

      options.forEach(function (entry) {
        const option = document.createElement('option')
        option.value = entry.value
        option.textContent = entry.text
        themeSelect.appendChild(option)
      })
    }

    function getCandidateCardsForTheme(themeValue) {
      const normalizedTheme = normalizeText(themeValue)
      if (!normalizedTheme) return []

      return Array.from(document.querySelectorAll('.card.shadow-sm[data-category]')).filter(function (card) {
        const categories = String(card.dataset.category || '')
          .split('|')
          .map(function (entry) {
            return normalizeText(entry)
          })
        return categories.includes(normalizedTheme)
      })
    }

    function extractRawTaskUrl(card) {
      if (!card) return ''

      const link = card.querySelector('a.stretched-link[href], a[href]')
      if (!link) return ''

      const href = String(link.getAttribute('href') || '').trim()
      if (!href) return ''

      try {
        const url = new URL(href, window.location.href)
        if (url.pathname.toLowerCase().includes('/course/') && url.search.length > 1) {
          const embedded = decodeURIComponent(url.search.slice(1))
          const cleaned = embedded.split('#')[0].split('?')[0].trim()
          return cleaned
        }

        if (url.href.toLowerCase().endsWith('.md')) {
          return url.href.split('#')[0].split('?')[0]
        }
      } catch (error) {
        return ''
      }

      return ''
    }

    function pickRandomItems(items, count) {
      const pool = items.slice()
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = pool[i]
        pool[i] = pool[j]
        pool[j] = temp
      }
      return pool.slice(0, count)
    }

    function splitHeaderAndBody(markdown) {
      const source = String(markdown || '')
      const match = source.match(/^\\s*<!--[\\r\\n]*([\\s\\S]*?)-->[\\r\\n]*/)

      if (!match) {
        return {
          headerLines: [],
          body: source.trim(),
        }
      }

      const headerLines = match[1]
        .split(/\\r?\\n/)
        .map(function (line) {
          return String(line || '').trim()
        })
        .filter(function (line) {
          return line.length > 0
        })

      return {
        headerLines: headerLines,
        body: source.slice(match[0].length).trim(),
      }
    }

    function splitDashList(value) {
      return String(value || '')
        .split(/\\s+-\\s+|\\s*,\\s*|\\s*;\\s*/)
        .map(function (entry) {
          return String(entry || '').trim()
        })
        .filter(function (entry) {
          return entry.length > 0
        })
    }

    function mergeCourseHeaders(rawTexts) {
      const seenGenericLines = new Set()
      const genericLines = []
      const tags = []
      const tagsSeen = new Set()
      const authors = []
      const authorsSeen = new Set()
      const comments = []

      rawTexts.forEach(function (text) {
        const parsed = splitHeaderAndBody(text)

        parsed.headerLines.forEach(function (line) {
          const kv = line.match(/^([A-Za-z0-9_-]+)\\s*:\\s*(.*)$/)
          if (!kv) {
            if (!seenGenericLines.has(line)) {
              seenGenericLines.add(line)
              genericLines.push(line)
            }
            return
          }

          const key = String(kv[1] || '').toLowerCase()
          const value = String(kv[2] || '').trim()

          if (key === 'tags') {
            splitDashList(value).forEach(function (entry) {
              const normalized = normalizeText(entry)
              if (!normalized || tagsSeen.has(normalized)) return
              tagsSeen.add(normalized)
              tags.push(entry)
            })
            return
          }

          if (key === 'author') {
            splitDashList(value).forEach(function (entry) {
              const normalized = normalizeText(entry)
              if (!normalized || authorsSeen.has(normalized)) return
              authorsSeen.add(normalized)
              authors.push(entry)
            })
            return
          }

          if (key === 'comment') {
            if (value) comments.push(value)
            return
          }

          if (!seenGenericLines.has(line)) {
            seenGenericLines.add(line)
            genericLines.push(line)
          }
        })
      })

      const mergedLines = genericLines.slice()

      if (tags.length) {
        mergedLines.push('tags: ' + tags.join(' - '))
      }

      if (comments.length) {
        mergedLines.push('comment: ' + comments.join(' - '))
      }

      if (authors.length) {
        mergedLines.push('author: ' + authors.join(' - '))
      }

      return mergedLines.length ? '<!--\\n\\n' + mergedLines.join('\\n') + '\\n\\n-->\\n\\n' : ''
    }

    async function buildCourseSource(themeValue, requestedCount) {
      const candidates = getCandidateCardsForTheme(themeValue)
      if (!candidates.length) {
        throw new Error('Keine Aufgaben zum gewaehlten Thema gefunden.')
      }

      const selectionCount = Math.max(1, Math.min(requestedCount, candidates.length))
      const selectedCards = pickRandomItems(candidates, selectionCount)
      const selectedUrls = selectedCards
        .map(extractRawTaskUrl)
        .filter(function (url) {
          return !!url
        })

      if (!selectedUrls.length) {
        throw new Error('Es konnten keine Aufgaben-Quellen aufgeloest werden.')
      }

      const rawContents = await Promise.all(
        selectedUrls.map(async function (url) {
          const response = await fetch(url)
          if (!response.ok) {
            throw new Error('Aufgabe konnte nicht geladen werden: ' + url)
          }
          return response.text()
        })
      )

      const chunks = rawContents
        .map(function (text) {
          return splitHeaderAndBody(text)
        })
        .filter(function (entry) {
          return entry.body.length > 0
        })

      if (!chunks.length) {
        throw new Error('Die geladenen Aufgaben waren leer.')
      }

      const mergedHeader = mergeCourseHeaders(rawContents)
      const mergedBody = chunks
        .map(function (entry) {
          return entry.body
        })
        .join('\\n\\n\\n')

      return mergedHeader + mergedBody
    }

    async function copyTextToClipboard(text) {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text)
        return
      }

      const helper = document.createElement('textarea')
      helper.value = text
      helper.setAttribute('readonly', '')
      helper.style.position = 'fixed'
      helper.style.left = '-9999px'
      helper.style.top = '-9999px'
      document.body.appendChild(helper)
      helper.focus()
      helper.select()

      const ok = document.execCommand('copy')
      document.body.removeChild(helper)

      if (!ok) {
        throw new Error('Zwischenablage konnte nicht beschrieben werden.')
      }
    }

    async function gzipToBase64(text) {
      if (typeof CompressionStream !== 'function') {
        throw new Error('CompressionStream ist nicht verfuegbar.')
      }

      const stream = new CompressionStream('gzip')
      const writer = stream.writable.getWriter()
      writer.write(new TextEncoder().encode(text))
      writer.close()

      const compressed = new Uint8Array(await new Response(stream.readable).arrayBuffer())
      let binary = ''

      const chunkSize = 0x8000
      for (let i = 0; i < compressed.length; i += chunkSize) {
        const chunk = compressed.subarray(i, i + chunkSize)
        binary += String.fromCharCode.apply(null, Array.from(chunk))
      }

      return btoa(binary)
    }

    async function buildLiveEditorShowCodeUrl(content) {
      const zipCode = await gzipToBase64(content)
      const route = '/show/code/' + zipCode
      return 'https://liascript.github.io/LiveEditor/?' + encodeURIComponent(route)
    }

    function setManualOpenFallback(url, message) {
      const holder = document.getElementById('courseGeneratorManualOpen')
      if (!holder) return

      holder.style.display = 'block'
      holder.innerHTML =
        '<p style="margin:0.6rem 0 0.45rem 0;">' + (message || 'Browser blockiert Auto-Tab. Bitte manuell oeffnen:') + '</p>' +
        '<a href="' + url + '" target="_blank" rel="noopener" class="schullia-course-submit-btn" style="display:inline-block;text-decoration:none;">Kurs im neuen Tab oeffnen</a>'
    }

    function clearManualOpenFallback() {
      const holder = document.getElementById('courseGeneratorManualOpen')
      if (!holder) return
      holder.style.display = 'none'
      holder.innerHTML = ''
    }

    async function openLiveEditorWithCourseSource(content, popup) {
      try {
        const targetUrl = await buildLiveEditorShowCodeUrl(content)
        popup.location.href = targetUrl
      } catch (error) {
        await copyTextToClipboard(content)
        window.alert('Der LiveEditor wurde in einem neuen Tab geoeffnet. Der Kursinhalt ist in der Zwischenablage. Bitte im Editor Strg+V druecken.')
      }
    }

    function closeCourseGeneratorOverlay() {
      const overlay = document.getElementById('courseGeneratorOverlay')
      if (!overlay) return
      overlay.classList.remove('is-open')
      document.body.classList.remove('schullia-modal-open')
    }

    function openCourseGeneratorOverlay() {
      const overlay = document.getElementById('courseGeneratorOverlay')
      if (!overlay) return
      populateCourseThemeOptions()
      overlay.classList.add('is-open')
      document.body.classList.add('schullia-modal-open')

      const amountInput = document.getElementById('courseTaskCountInput')
      if (amountInput) amountInput.focus()
    }

    function ensureCourseGeneratorUI() {
      const host = getHeaderColumn()
      if (!host) return

      let launchContainer = document.getElementById('courseGeneratorLaunchContainer')
      if (!launchContainer) {
        launchContainer = document.createElement('div')
        launchContainer.id = 'courseGeneratorLaunchContainer'
        launchContainer.className = 'schullia-course-launch-wrap'

        const openButton = document.createElement('button')
        openButton.type = 'button'
        openButton.id = 'courseGeneratorOpenButton'
        openButton.className = 'schullia-course-launch-btn'
        openButton.textContent = 'Erzeuge Kurs'
        openButton.addEventListener('click', openCourseGeneratorOverlay)

        launchContainer.appendChild(openButton)
      }

      const category = document.getElementById('categorySelectCustom')
      if (category && launchContainer.parentElement !== host) {
        host.insertBefore(launchContainer, category)
      } else if (!launchContainer.parentElement) {
        host.appendChild(launchContainer)
      }

      let overlay = document.getElementById('courseGeneratorOverlay')
      if (!overlay) {
        overlay = document.createElement('div')
        overlay.id = 'courseGeneratorOverlay'
        overlay.className = 'schullia-course-overlay'
        overlay.innerHTML =
          '<div class="schullia-course-modal" role="dialog" aria-modal="true" aria-labelledby="courseGeneratorTitle">' +
          '<button type="button" class="schullia-course-close" id="courseGeneratorCloseButton" aria-label="Schliessen">&times;</button>' +
          '<h3 id="courseGeneratorTitle">Kurs Erzeugen</h3>' +
          '<label for="courseThemeSelect">Hauptthema:</label>' +
          '<select id="courseThemeSelect" class="form-select" aria-label="Hauptthema"></select>' +
          '<label for="courseTaskCountInput">Anzahl Aufgaben:</label>' +
          '<input id="courseTaskCountInput" type="number" min="1" step="1" value="5" class="form-control" aria-label="Anzahl Aufgaben" />' +
          '<button type="button" id="courseGeneratorSubmit" class="schullia-course-submit-btn">Kurs Generieren</button>' +
          '<div id="courseGeneratorManualOpen" style="display:none;"></div>' +
          '</div>'

        overlay.addEventListener('click', function (event) {
          if (event.target === overlay) {
            closeCourseGeneratorOverlay()
          }
        })

        document.body.appendChild(overlay)
      }

      const closeButton = document.getElementById('courseGeneratorCloseButton')
      if (closeButton && !closeButton.dataset.bound) {
        closeButton.addEventListener('click', closeCourseGeneratorOverlay)
        closeButton.dataset.bound = '1'
      }

      const submitButton = document.getElementById('courseGeneratorSubmit')
      if (submitButton && !submitButton.dataset.bound) {
        submitButton.addEventListener('click', async function () {
          const theme = document.getElementById('courseThemeSelect')
          const taskCount = document.getElementById('courseTaskCountInput')

          const themeValue = theme ? String(theme.value || '').trim() : ''
          const requestedCount = taskCount ? Number.parseInt(taskCount.value || '5', 10) : 5

          if (!themeValue) {
            window.alert('Bitte zuerst ein Hauptthema waehlen.')
            return
          }

          submitButton.disabled = true
          const oldText = submitButton.textContent
          submitButton.textContent = 'Kurs wird erzeugt...'
          clearManualOpenFallback()

          const popup = window.open('https://liascript.github.io/LiveEditor/?/edit', '_blank', 'noopener')
          const popupBlocked = !popup

          try {
            const courseSource = await buildCourseSource(themeValue, Number.isFinite(requestedCount) ? requestedCount : 5)

            if (popupBlocked) {
              try {
                const targetUrl = await buildLiveEditorShowCodeUrl(courseSource)
                setManualOpenFallback(targetUrl, 'Auto-Tab wurde blockiert. Bitte hier klicken:')
              } catch (error) {
                await copyTextToClipboard(courseSource)
                setManualOpenFallback('https://liascript.github.io/LiveEditor/?/edit', 'Auto-Tab wurde blockiert. LiveEditor oeffnen und Inhalt mit Strg+V einfuegen:')
              }
            } else {
              await openLiveEditorWithCourseSource(courseSource, popup)
              closeCourseGeneratorOverlay()
            }
          } catch (error) {
            if (popup && !popup.closed) {
              popup.close()
            }
            window.alert('Kurs konnte nicht erzeugt werden. ' + (error && error.message ? error.message : ''))
          } finally {
            submitButton.disabled = false
            submitButton.textContent = oldText || 'Kurs Generieren'
          }
        })
        submitButton.dataset.bound = '1'
      }

      if (!window.__schulliaCourseOverlayEscBound) {
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            closeCourseGeneratorOverlay()
          }
        })
        window.__schulliaCourseOverlayEscBound = true
      }

      populateCourseThemeOptions()
    }

    function reorderHeaderFilters() {
      const category = document.getElementById('categorySelectCustom')
      const operator = document.getElementById('operatorSelectCustom')
      const difficulty = document.getElementById('difficultySelect')
      const networking = document.getElementById('networkingSelect')

      if (!category || !operator || !difficulty || !networking) return

      const parent = category.parentElement
      if (!parent) return

      parent.append(category, operator, difficulty, networking)
    }

    function applyNavbarFix() {
      const navbar =
        document.getElementById('mainNavbar') ||
        document.querySelector('nav.navbar.sticky-top')
      if (navbar) {
        navbar.style.background = '#147375'
        navbar.style.backgroundColor = '#147375'

        const brand = navbar.querySelector('.navbar-brand')
        if (brand) {
          brand.style.fontWeight = '700'

          if (!brand.querySelector('img')) {
            const img = document.createElement('img')
            img.src = './pics/grad/SchulLia.png'
            img.alt = 'SchulLia Icon'
            img.style.height = '1.1em'
            img.style.width = '1.1em'
            img.style.marginRight = '0.35em'
            img.style.verticalAlign = '-0.12em'
            brand.prepend(img)
          }
        }

        navbar.querySelectorAll('.nav-link, .btn.nav-link').forEach(function (link) {
          link.style.fontWeight = '700'
        })
      }

      reorderHeaderFilters()
      ensureCourseGeneratorUI()
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyNavbarFix)
    } else {
      applyNavbarFix()
    }

    window.addEventListener('load', applyNavbarFix)
    window.setTimeout(applyNavbarFix, 600)
  })()
</script>
${NAVBAR_FIX_SCRIPT_END}`

const NAVBAR_FIX_STYLE = `${NAVBAR_FIX_STYLE_START}
<style>
  #mainNavbar,
  nav.navbar.sticky-top {
    background: #147375 !important;
    background-color: #147375 !important;
  }

  #mainNavbar .navbar-brand,
  nav.navbar.sticky-top .navbar-brand,
  #mainNavbar .nav-link,
  nav.navbar.sticky-top .nav-link,
  #mainNavbar .btn.nav-link,
  nav.navbar.sticky-top .btn.nav-link {
    font-weight: 700 !important;
  }

  #mainNavbar .navbar-brand img,
  nav.navbar.sticky-top .navbar-brand img {
    height: 1.1em;
    width: 1.1em;
    margin-right: 0.35em;
    vertical-align: -0.12em;
  }

  #categorySelectCustom,
  #operatorSelectCustom,
  #difficultySelect,
  #networkingSelect,
  #chipsContainer {
    width: 100%;
  }

  #categoryMenu,
  #operatorMenu,
  #difficultyMenu,
  #networkingMenu {
    width: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }

  .header-icon-strip {
    display: flex;
    flex-wrap: nowrap !important;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
  }

  .header-icon-item {
    flex: 0 0 auto;
  }

  .schullia-course-launch-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.15rem 0 0.4rem;
  }

  .schullia-course-launch-btn {
    border: 2px solid rgba(255, 255, 255, 0.55);
    border-radius: 12px;
    background: linear-gradient(135deg, #1a9b9e, #147375);
    color: #ffffff;
    font-weight: 800;
    padding: 0.48rem 1.15rem;
    letter-spacing: 0.01em;
    box-shadow: 0 10px 22px rgba(8, 34, 40, 0.2);
    transition: transform 130ms ease, box-shadow 130ms ease, filter 130ms ease;
  }

  .schullia-course-launch-btn:hover,
  .schullia-course-launch-btn:focus {
    transform: translateY(-1px);
    box-shadow: 0 14px 26px rgba(8, 34, 40, 0.27);
    filter: brightness(1.03);
  }

  .schullia-course-overlay {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(4px);
  }

  .schullia-course-overlay.is-open {
    display: flex;
  }

  .schullia-course-modal {
    width: min(520px, 94vw);
    background: rgba(0, 0, 0, 0.9);
    color: #eefcfc;
    border: 1px solid rgba(133, 243, 243, 0.35);
    border-radius: 16px;
    box-shadow: 0 26px 54px rgba(0, 0, 0, 0.35);
    padding: 1rem 1rem 1.1rem;
    position: relative;
    display: grid;
    gap: 0.62rem;
  }

  .schullia-course-modal h3 {
    margin: 0 2rem 0.2rem 0;
    font-size: 1.25rem;
    font-weight: 800;
    color: #ffffff;
  }

  .schullia-course-modal label {
    font-weight: 700;
    color: #dff6f6;
  }

  .schullia-course-modal .form-select,
  .schullia-course-modal .form-control {
    border: 1px solid rgba(133, 243, 243, 0.42);
    background: rgba(245, 255, 255, 0.95);
    color: #134648;
    font-weight: 700;
  }

  .schullia-course-submit-btn {
    margin-top: 0.35rem;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #36b9bb, #1b7f82);
    color: #ffffff;
    font-weight: 800;
    padding: 0.6rem 0.95rem;
    box-shadow: 0 12px 24px rgba(6, 26, 31, 0.28);
  }

  .schullia-course-submit-btn:hover,
  .schullia-course-submit-btn:focus {
    filter: brightness(1.05);
  }

  .schullia-course-close {
    position: absolute;
    top: 0.45rem;
    right: 0.6rem;
    border: none;
    background: transparent;
    color: #d6f8f8;
    font-size: 1.7rem;
    line-height: 1;
    padding: 0.1rem 0.45rem;
    border-radius: 10px;
  }

  .schullia-course-close:hover,
  .schullia-course-close:focus {
    background: rgba(255, 255, 255, 0.12);
  }

  body.schullia-modal-open main {
    filter: blur(3px);
  }

  body.schullia-modal-open {
    overflow: hidden;
  }

  @media (min-width: 1200px) {
    main {
      width: 94vw !important;
      max-width: none !important;
    }

    .album .container {
      max-width: 94vw !important;
      width: 94vw !important;
    }

    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto {
      max-width: 100% !important;
      flex: 0 0 100% !important;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      column-gap: 1%;
      row-gap: 0.65rem;
    }

    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > .project-title,
    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > .project-title-sub,
    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > br,
    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > .header-icon-strip,
    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > .schullia-course-launch-wrap,
    section.py-5.text-center.container .row.py-lg-5 > .col-lg-6.col-md-8.mx-auto > #chipsContainer {
      flex: 0 0 100%;
      width: 100%;
    }

    #categorySelectCustom,
    #difficultySelect,
    #networkingSelect,
    #operatorSelectCustom {
      flex: 0 0 260px !important;
      width: 260px !important;
      min-width: 0;
      margin-top: 0 !important;
    }

    #categorySelectCustom {
      order: 1;
    }

    #operatorSelectCustom {
      order: 2;
    }

    #difficultySelect {
      order: 3;
    }

    #networkingSelect {
      order: 4;
    }

    #categoryToggle,
    #difficultyToggle,
    #networkingToggle,
    #operatorToggle {
      width: 100% !important;
      white-space: nowrap;
    }

    #categoryToggle span,
    #difficultyToggle span,
    #networkingToggle span,
    #operatorToggle span,
    .difficulty-item span {
      white-space: nowrap;
    }
  }
</style>
${NAVBAR_FIX_STYLE_END}`

const CARD_DECORATION_STYLE = `${CARD_DECORATION_STYLE_START}
<style>
  .card.shadow-sm .card-body {
    position: relative;
  }

  .card.shadow-sm .card-body h6.card-title {
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
  }

  .card.shadow-sm .card-body.schullia-card-has-difficulty h6.card-title {
    padding-right: 3.4em !important;
    margin-top: 0.45em;
    margin-bottom: 1.05em;
  }

  .card.shadow-sm .card-body h6.card-title .schullia-network-icon {
    display: inline-block;
    height: 1.25em;
    width: auto;
    flex: 0 0 auto;
  }

  .card.shadow-sm .card-body .schullia-card-difficulty-badge {
    position: absolute;
    top: 0.55em;
    right: 0.35em;
    z-index: 2;
    pointer-events: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .card.shadow-sm .card-body .schullia-card-difficulty-badge img {
    display: block;
    height: 0.75em;
    width: auto;
  }

  .card.shadow-sm .card-body.schullia-card-has-difficulty p.card-text {
    margin-top: 1.9em !important;
  }
</style>
${CARD_DECORATION_STYLE_END}`

const CARD_DECORATION_SCRIPT = `${CARD_DECORATION_SCRIPT_START}
<script>
  (function () {
    const difficultyMap = new Map([
      ['sehr leicht', 1],
      ['leicht', 2],
      ['mittel', 3],
      ['schwer', 4],
      ['sehr schwer', 5],
    ])

    const networkMap = new Map([
      ['sehr niedrig', 1],
      ['niedrig', 2],
      ['normal', 3],
      ['hoch', 4],
      ['sehr hoch', 5],
    ])

    const operatorWords = new Set([
      'angeben',
      'bestimme',
      'bestimmen',
      'berechnen',
      'beschreibe',
      'begruende',
      'begrunde',
      'erklaere',
      'nenne',
      'ordne',
      'vergleiche',
      'zeichne',
      'loese',
      'setze ein',
    ])

    function normalize(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/\u00a0/g, ' ')
        .replace(/\\s+/g, ' ')
        .trim()
    }

    function removeEmptyBadgeParagraphs(cardBody) {
      cardBody.querySelectorAll('p').forEach(function (paragraph) {
        if (!paragraph.querySelector('.badge') && normalize(paragraph.textContent) === '') {
          paragraph.remove()
        }
      })
    }

    function decorateCard(cardBody) {
      if (!cardBody) return

      const title = cardBody.querySelector('h6.card-title')
      if (!title) return

      const badgeNodes = [...cardBody.querySelectorAll('.badge')]
      let difficultyLevel = null
      let networkLevel = null

      const storedDifficultyLevel = Number.parseInt(cardBody.dataset.schulliaDifficultyLevel || '', 10)
      const storedNetworkLevel = Number.parseInt(cardBody.dataset.schulliaNetworkLevel || '', 10)

      badgeNodes.forEach(function (badge) {
        const label = normalize(badge.textContent)

        if (difficultyMap.has(label)) {
          difficultyLevel = difficultyLevel || difficultyMap.get(label)
          badge.remove()
          return
        }

        if (networkMap.has(label)) {
          networkLevel = networkLevel || networkMap.get(label)
          badge.remove()
          return
        }

        if (operatorWords.has(label)) {
          badge.remove()
        }
      })

      if (!difficultyLevel && Number.isFinite(storedDifficultyLevel) && storedDifficultyLevel > 0) {
        difficultyLevel = storedDifficultyLevel
      }

      if (!networkLevel && Number.isFinite(storedNetworkLevel) && storedNetworkLevel > 0) {
        networkLevel = storedNetworkLevel
      }

      if (difficultyLevel) {
        cardBody.dataset.schulliaDifficultyLevel = String(difficultyLevel)
      }

      if (networkLevel) {
        cardBody.dataset.schulliaNetworkLevel = String(networkLevel)
      }

      cardBody.classList.toggle('schullia-card-has-difficulty', !!difficultyLevel)

      removeEmptyBadgeParagraphs(cardBody)

      const titleFontSize = getComputedStyle(title).fontSize || '1em'
      const titleFontPx = Number.parseFloat(titleFontSize) || 16
      const desiredDifficultyHeight = titleFontPx * 0.75
      const desiredNetworkHeight = titleFontPx * 1.25

      const existingDifficultyImg = cardBody.querySelector('.schullia-card-difficulty-badge img')
      const existingNetworkImg = title.querySelector('img.schullia-network-icon')
      const hasMatchingDifficulty =
        !!existingDifficultyImg &&
        !!difficultyLevel &&
        existingDifficultyImg.getAttribute('src') === './pics/sgrad/' + difficultyLevel + '.png'
      const hasMatchingNetwork =
        !!existingNetworkImg &&
        !!networkLevel &&
        existingNetworkImg.getAttribute('src') === './pics/grad/' + networkLevel + '.png'

      if ((difficultyLevel ? hasMatchingDifficulty : !existingDifficultyImg) && (networkLevel ? hasMatchingNetwork : !existingNetworkImg)) {
        if (existingDifficultyImg) existingDifficultyImg.style.height = desiredDifficultyHeight + 'px'
        if (existingNetworkImg) existingNetworkImg.style.height = desiredNetworkHeight + 'px'
        cardBody.dataset.schulliaDecorated = '1'
        return
      }

      cardBody.querySelectorAll('.schullia-card-difficulty-badge').forEach(function (node) {
        node.remove()
      })

      cardBody.querySelectorAll('h6.card-title .schullia-network-icon').forEach(function (node) {
        node.remove()
      })

      if (difficultyLevel) {
        const difficultyBadge = document.createElement('span')
        difficultyBadge.className = 'schullia-card-difficulty-badge'
        difficultyBadge.style.fontSize = titleFontSize

        const difficultyImg = document.createElement('img')
        difficultyImg.src = './pics/sgrad/' + difficultyLevel + '.png'
        difficultyImg.alt = 'Schwierigkeitsgrad'
        difficultyImg.loading = 'lazy'
        difficultyImg.decoding = 'async'
        difficultyImg.style.height = desiredDifficultyHeight + 'px'
        difficultyImg.style.width = 'auto'
        difficultyBadge.appendChild(difficultyImg)

        cardBody.insertBefore(difficultyBadge, cardBody.firstChild)
      }

      if (networkLevel) {
        const networkImg = document.createElement('img')
        networkImg.className = 'schullia-network-icon'
        networkImg.src = './pics/grad/' + networkLevel + '.png'
        networkImg.alt = 'Vernetzungsgrad'
        networkImg.loading = 'lazy'
        networkImg.decoding = 'async'
        networkImg.style.height = desiredNetworkHeight + 'px'
        networkImg.style.width = 'auto'
        title.prepend(networkImg)
      }

      cardBody.dataset.schulliaDecorated = '1'
    }

    function decorateAllCards() {
      document.querySelectorAll('.card.shadow-sm .card-body').forEach(decorateCard)
    }

    let decorateTimer = null
    function queueDecorate() {
      if (decorateTimer) window.clearTimeout(decorateTimer)
      decorateTimer = window.setTimeout(function () {
        decorateAllCards()
      }, 60)
    }

    function start() {
      decorateAllCards()
      window.requestAnimationFrame(decorateAllCards)
      window.setTimeout(decorateAllCards, 250)
      window.setTimeout(decorateAllCards, 800)

      const observer = new MutationObserver(queueDecorate)
      observer.observe(document.body, { childList: true, subtree: true })
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start)
    } else {
      start()
    }

    window.addEventListener('load', decorateAllCards)
  })()
</script>
${CARD_DECORATION_SCRIPT_END}`

function replaceOnce(html, regex, replacer) {
  return regex.test(html) ? html.replace(regex, replacer) : html
}

function extractTargetParts(targetHtml) {
  const styleMatch = targetHtml.match(/<style>[\s\S]*?--color-background[\s\S]*?<\/style>/i)
  const heroMatch = targetHtml.match(
    /<div class="col-lg-6 col-md-8 mx-auto">[\s\S]*?<\/div>\s*(?=<\/div>\s*<\/section>)/i
  )
  const scriptMatch = targetHtml.match(
    /<script>[\s\S]*?buildCustomMenuFromSelect[\s\S]*?<\/script>/i
  )

  if (!styleMatch || !heroMatch || !scriptMatch) {
    throw new Error('Konnte Design-Bloecke in ziel.html nicht eindeutig finden.')
  }

  return {
    style: `${STYLE_START}\n${styleMatch[0]}\n${STYLE_END}`,
    hero: heroMatch[0],
    script: `${SCRIPT_START}\n${scriptMatch[0]}\n${SCRIPT_END}`,
  }
}

function applyFallbackPatch(html) {
  html = html.replace(
    /<option value="" selected>All categories<\/option>/i,
    '<option value="" selected>Alle Themen</option>'
  )

  html = replaceOnce(
    html,
    /<h1 class="fw-light">[\s\S]*?<\/h1>/i,
    '<h1 class="fw-light"><img src="./pics/grad/SchulLia.png" alt="LiaScript Icon" style="height: 1em; width: 1em; margin-right: 0.28em; vertical-align: -0.12em;">SchulLia</h1>'
  )

  return html
}

function patchIndexHtml(html, targetParts) {
  html = html.replace(
    /<option value="" selected>All categories<\/option>/i,
    '<option value="" selected>Alle Themen</option>'
  )

  html = replaceOnce(
    html,
    /<div class="col-lg-6 col-md-8 mx-auto">[\s\S]*?<\/div>\s*(?=<\/div>\s*<\/section>)/i,
    targetParts.hero
  )

  html = replaceOnce(
    html,
    /(<section class="py-5 text-center container">[\s\S]*?<div class="row py-lg-5">\s*)<div class="col-12">/i,
    '$1<div class="col-lg-6 col-md-8 mx-auto">'
  )

  html = replaceOnce(
    html,
    /<p>In dieser Aufgabensammlung[\s\S]*?Sekundarstufe I und II\.<\/p>/,
    `<div class="card">
                  <div class="card-header">In dieser Aufgabensammlung sind mehrere Schwierigkeitsgrade, Vernetzungsgrade und Anforderungsbereiche abgedeckt. Sie wird kontinuierlich weiterentwickelt und bietet eine Vielzahl an Aufgaben für die Sekundarstufe I und II.</div>
                </div>`
  )

  // Ensure category section headers are bold (e.g. #### Aufgabensets).
  html = html.replace(
    /<div class="card-header">\s*<h4 id='([^']+)'>(.*?)<\/h4>\s*<\/div>/g,
    `<div class="card-header">
                                     <h4 id='$1'><strong>$2</strong></h4>

                                </div>`
  )

  // Keep the introductory card text bold as requested.
  html = html.replace(
    /<p class="card-text">\s*In dieser Kachel befinden sich zusammengestellte Aufgaben zum Ueben fuer Abschlusspruefungen\.\s*<\/p>/g,
    '<p class="card-text"><strong>In dieser Kachel befinden sich zusammengestellte Aufgaben zum Ueben fuer Abschlusspruefungen.</strong></p>'
  )
  html = html.replace(
    /<p class="card-text">\s*In dieser Kachel befinden sich zusammengestellte Aufgaben zum Üben für Abschlussprüfungen\.\s*<\/p>/g,
    '<p class="card-text"><strong>In dieser Kachel befinden sich zusammengestellte Aufgaben zum Üben für Abschlussprüfungen.</strong></p>'
  )

  // Ensure native select class and category label are always correct.
  html = html.replace(
    /<select id="categorySelect" class="form-select"/i,
    '<select id="categorySelect" class="form-select native-select-source"'
  )
  html = html.replace(
    /<select id="operatorSelect" class="form-select mt-2"/i,
    '<select id="operatorSelect" class="form-select native-select-source"'
  )

  // Remove previous injected blocks to keep patch idempotent.
  html = html.replace(
    new RegExp(`${SCRIPT_START}[\\s\\S]*?${SCRIPT_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${STYLE_START}[\\s\\S]*?${STYLE_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${NAVBAR_FIX_SCRIPT_START}[\\s\\S]*?${NAVBAR_FIX_SCRIPT_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${NAVBAR_FIX_STYLE_START}[\\s\\S]*?${NAVBAR_FIX_STYLE_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${CARD_DECORATION_STYLE_START}[\\s\\S]*?${CARD_DECORATION_STYLE_END}`, 'g'),
    ''
  )
  html = html.replace(
    new RegExp(`${CARD_DECORATION_SCRIPT_START}[\\s\\S]*?${CARD_DECORATION_SCRIPT_END}`, 'g'),
    ''
  )

  // Remove legacy literal template blocks that were previously injected as text.
  html = html.replace(
    /`?\$\{CARD_DECORATION_STYLE_START\}[\s\S]*?\$\{CARD_DECORATION_STYLE_END\}`?/g,
    ''
  )
  html = html.replace(
    /`?\$\{CARD_DECORATION_SCRIPT_START\}[\s\S]*?\$\{CARD_DECORATION_SCRIPT_END\}`?/g,
    ''
  )

  if (html.includes('</head>')) {
    html = html.replace(
      '</head>',
      `\n${targetParts.script}\n${targetParts.style}\n${NAVBAR_FIX_STYLE}\n${NAVBAR_FIX_SCRIPT}\n${CARD_DECORATION_STYLE}\n${CARD_DECORATION_SCRIPT}\n</head>`
    )
  }

  // Rename category placeholder text globally, including script literals.
  html = html.replace(/Alle Kategorien/g, 'Alle Themen')
  html = html.replace(/alle kategorien/g, 'alle themen')

  return html
}

const indexPath = path.join(__dirname, 'index.html')
const targetPath = path.join(__dirname, TARGET_FILE)
const html = fs.readFileSync(indexPath, 'utf8')

let patchedHtml = html

if (!fs.existsSync(targetPath)) {
  patchedHtml = applyFallbackPatch(html)
  fs.writeFileSync(indexPath, patchedHtml, 'utf8')
  console.log('index.html wurde mit Fallback gepatcht (ziel.html nicht gefunden).')
} else {
  try {
    const targetHtml = fs.readFileSync(targetPath, 'utf8')
    const targetParts = extractTargetParts(targetHtml)
    patchedHtml = patchIndexHtml(html, targetParts)
    fs.writeFileSync(indexPath, patchedHtml, 'utf8')
    console.log('index.html wurde gepatcht (SchulLia Design aus ziel.html).')
  } catch (error) {
    patchedHtml = applyFallbackPatch(html)
    fs.writeFileSync(indexPath, patchedHtml, 'utf8')
    console.log('index.html wurde mit Fallback gepatcht (ziel.html konnte nicht ausgewertet werden).')
  }
}
