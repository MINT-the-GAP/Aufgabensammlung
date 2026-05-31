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
      if (!navbar) return

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

      reorderHeaderFilters()
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
