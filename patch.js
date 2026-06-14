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

const NAVBAR_FIX_SCRIPT = String.raw`<!-- SCHULLIA_NAVBAR_FIX_SCRIPT_START -->
<script>
  (function () {
    function normalizeText(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim()
    }

    var SCHULLIA_SACHSEN = /* SCHULLIA_SACHSEN_LB_START */{"themes":{"oberschule":{"5":{"1":["addition","assoziativgesetz","differenz","distributivgesetz","division","ggt","gleichung","grundrechenarten","kgv","kommutativgesetz","multiplikation","potenzen","quersumme","runden","subtraktion","teilbarkeiten","teilermengen","überschlagen","ungleichungen","variable","vielfachmengen","vorrangsregeln","wurzeln","zahlenstrahl","zahlenverständnis"],"2":["arithmetische mittelwert","arithmetisches mittel","bruchrechnung","dezimalzahlen","durchschnitt","einheiten","länge","masse","periodizität","prozent","sachaufgabe","zeit"],"3":["fläche","koordinatensystem","lagebeziehung","punkt","rechteck","umfang","volumen","winkel"],"extra":["zahlensysteme","häufigkeit","kombinatorik","tabelle"]},"6":{"1":["kehrwert","mengen","verhältnisse"],"2":["antiproportional","beliebige zuordnung","proportional","zuordnung"],"3":["dreieck","dreiecke","eindeutigkeit","vierecke","winkelbeziehungen"],"4":["quader"],"5":["chance","wahrscheinlichkeit"]},"7HS":{"2":["prozentrechnung"],"3":["algebra","betrag","negative zahlen","term","terme"]},"8HS":{"2":["äquivalenzumformung"]},"9HS":{"1":["trigonometrie"],"3":["lineare funktionen"],"extra":["median","spannweite"]},"7RS":{"1":["prozentrechnung"],"2":["wahrscheinlichkeit"],"3":["algebra","äquivalenzumformung","betrag","negative zahlen","terme"]},"8RS":{"2":["additionsverfahren","definitionsbereich","einsetzungsverfahren","gleichungssysteme","lineare funktionen","parameter","stelle","wertebereich"],"5":["baumdiagramm","fakultät"]},"9RS":{"1":["trigonometrie"],"3":["quadratische ergänzung","quadratische funktionen","scheitelpunktsform","verhalten"],"4":["median","spannweite"]},"10RS":{"3":["erwartungswert"]}},"bgy":{"11":{"1":["bedingte wahrscheinlichkeit","kontingenztafel","kontingenztafeln","unbedingte wahrscheinlichkeit","vereinigung","vierfeldertafel","vierfeldertafeln"],"3":["logarithmen","logarithmus"]},"12GK":{"1":["binomialkoeffizient","binomialverteilung","standardabweichung"],"2":["ableitungen","grafisches ableiten","grenzwerte"],"5":["skalarprodukt","vektoren"],"6":["abstand"],"extra":["vektorprodukt"]},"12LK":{}},"gymnasium":{"5":{"1":["addition","assoziativgesetz","differenz","distributivgesetz","division","folgen","ggt","gleichung","grundrechenarten","kgv","kommutativgesetz","multiplikation","potenzen","quersumme","runden","sachaufgabe","subtraktion","teilbarkeiten","teilermengen","terme","überschlagen","vielfachmengen","vorrangsregeln","zahlenstrahl","zahlenverständnis"],"2":["arithmetisches mittel","dezimalzahlen","durchschnitt","periodizität","prozent"],"3":["koordinatensystem","lagebeziehung","punkt","winkel","winkelbeziehungen"],"4":["fläche","quader","rechteck","umfang","volumen"],"5":["einheiten","länge","masse","zeit"],"extra":["zahlensysteme"]},"6":{"1":["bruchrechnung","kehrwert","mengen","variable"],"2":["antiproportional","beliebige zuordnung","chance","eindeutigkeit","häufigkeit","proportional","tabelle","verhältnisse","zuordnung"],"3":["dreieck","dreiecke","vierecke"]},"7":{"2":["algebra","äquivalenzumformung","betrag","negative zahlen","prozentrechnung","wurzeln"]},"8":{"1":["terme","ungleichungen"],"2":["baumdiagramm","kombinatorik","median","spannweite","unbedingte wahrscheinlichkeit","vereinigung","wahrscheinlichkeit"],"3":["additionsverfahren","definitionsbereich","einsetzungsverfahren","gleichungssysteme","lineare funktionen","parameter","stelle","verhalten","wertebereich"]},"9":{"1":["quadratische ergänzung","quadratische funktionen","scheitelpunktsform"],"3":["trigonometrie"],"4":["standardabweichung"]},"10":{"2":["erwartungswert"],"4":["grenzwerte","infimum","logarithmen","logarithmus","supremum"]},"11GK":{"1":["ableitungen","grafisches ableiten","signum"],"3":["vektoren"],"4":["bedingte wahrscheinlichkeit","binomialkoeffizient","binomialverteilung","fakultät","hypergeometrische verteilung","kontingenztafel","kontingenztafeln","vierfeldertafel"],"7":["abstand","skalarprodukt","vektorprodukt"]},"11LK":{"1":["ableitungen","grafisches ableiten","signum"],"3":["vektoren"],"4":["bedingte wahrscheinlichkeit","binomialkoeffizient","binomialverteilung","fakultät","hypergeometrische verteilung","kontingenztafel","kontingenztafeln","vierfeldertafel"],"8":["abstand","skalarprodukt","vektorprodukt"]}}},"lbCount":{"oberschule":{"5":4,"6":5,"7HS":4,"8HS":5,"9HS":4,"7RS":4,"8RS":6,"9RS":4,"10RS":4},"bgy":{"11":4,"12GK":6,"12LK":7},"gymnasium":{"5":5,"6":5,"7":4,"8":5,"9":5,"10":5,"11GK":8,"11LK":9}},"lbTitles":{"oberschule":{"5":{"1":"Natürliche Zahlen","2":"Gemeine Brüche, Dezimalzahlen und Größen","3":"Geometrische Grundformen","4":"Symmetrie und deckungsgleiche Figuren"},"6":{"1":"Gebrochene Zahlen","2":"Zuordnungen in der Umwelt","3":"Geometrie in der Ebene","4":"Geometrische Körper","5":"Mathematik im Alltag"},"7HS":{"1":"Zusammengesetzte Flächen und Körper","2":"Anteile und Prozente","3":"Rationale Zahlen","4":"Vielecke und Prismen"},"8HS":{"1":"Wirtschaftliches Rechnen","2":"Formeln und Gleichungen","3":"Vom Vieleck zum Kreis","4":"Kreiszylinder und Hohlzylinder","5":"Mathematik im Alltag"},"9HS":{"1":"Rechtwinklige Dreiecke","2":"Körperdarstellung und Körperberechnung","3":"Funktionale Zusammenhänge","4":"Mathematik im Alltag"},"7RS":{"1":"Prozent- und Zinsrechnung","2":"Elemente der Stochastik","3":"Rationale Zahlen und Gleichungen","4":"Vielecke und Prismen"},"8RS":{"1":"Lineare Gleichungen","2":"Lineare Funktionen und Gleichungssysteme","3":"Kreis und Kreiszylinder","4":"Ähnlichkeit","5":"Zufällige Ereignisse","6":"Mathematik im Alltag"},"9RS":{"1":"Rechtwinklige Dreiecke","2":"Pyramiden, Kreiskegel, Kugel","3":"Quadratische Funktionen und quadratische Gleichungen","4":"Beschreibende Statistik"},"10RS":{"1":"Dreiecke und Vierecke","2":"Funktionale Zusammenhänge","3":"Zufallsgrößen","4":"Mathematik im Alltag"}},"bgy":{"11":{"1":"Ermitteln von Wahrscheinlichkeiten bei mehrstufigen Zufallsversuchen","2":"Beschreiben und Lösen inner- und außermathematischer Probleme","3":"Funktionale Zusammenhänge","4":"Lineare Gleichungssysteme und Matrizen"},"12GK":{"1":"Diskrete Zufallsgrößen","2":"Differenzialrechnung","3":"Integralrechnung","4":"Beurteilende Statistik","5":"Vektorgeometrie","6":"Weitere Anwendungen"},"12LK":{"1":"Diskrete Zufallsgrößen","2":"Differenzialrechnung","3":"Integralrechnung","4":"Normalverteilte Zufallsgrößen","5":"Beurteilende Statistik","6":"Vektorgeometrie","7":"Weitere Anwendungen"}},"gymnasium":{"5":{"1":"Arbeiten mit natürlichen Zahlen","2":"Gemeine Brüche und Dezimalzahlen","3":"Lagebeziehungen geometrischer Objekte","4":"Rechtecke und Quader","5":"Vernetzung: Mathematik im Alltag"},"6":{"1":"Arbeiten mit gebrochenen Zahlen","2":"Zuordnungen in der Umwelt","3":"Dreiecke und Vierecke","4":"Prismen","5":"Vernetzung: Anteile"},"7":{"1":"Geometrie in der Ebene","2":"Arbeiten mit rationalen Zahlen","3":"Darstellen und Berechnen von Prismen und Pyramiden","4":"Vernetzung: Darstellen von Daten"},"8":{"1":"Arbeiten mit Termen und Gleichungen","2":"Zufallsversuche","3":"Funktionen und lineare Gleichungssysteme","4":"Ähnlichkeit","5":"Vernetzung: Heuristische Strategien"},"9":{"1":"Funktionen und Potenzen","2":"Kreise, Kreiszylinder und Kugeln","3":"Rechtwinklige Dreiecke","4":"Auswerten von Daten","5":"Vernetzung: Mathematik und moderne Rechentechnik"},"10":{"1":"Wachstumsvorgänge und periodische Vorgänge","2":"Diskrete Zufallsgrößen","3":"Algebraisches Lösen geometrischer Probleme","4":"Funktionale Zusammenhänge","5":"Vernetzung: Zinsrechnung"},"11GK":{"1":"Differentialrechnung","2":"Matrizen","3":"Vektoren, Geraden und Ebenen","4":"Binomialverteilte Zufallsgrößen","5":"Integralrechnung","6":"Beurteilende Statistik","7":"Abstände und Winkel","8":"Weitere Anwendungen"},"11LK":{"1":"Differentialrechnung","2":"Matrizen","3":"Vektoren, Geraden und Ebenen","4":"Binomialverteilte Zufallsgrößen","5":"Integralrechnung","6":"Normalverteilte Zufallsgrößen","7":"Beurteilende Statistik","8":"Abstände und Winkel","9":"Weitere Anwendungen"}}}}/* SCHULLIA_SACHSEN_LB_END */;

    function schulliaSchoolThemes(schoolType) {
      return (SCHULLIA_SACHSEN.themes && SCHULLIA_SACHSEN.themes[schoolType]) || {}
    }

    function schulliaThemesForClassKey(schoolType, classKey) {
      var lbs = schulliaSchoolThemes(schoolType)[classKey]
      var out = []
      if (!lbs) return out
      Object.keys(lbs).forEach(function (lbKey) {
        lbs[lbKey].forEach(function (theme) { out.push(theme) })
      })
      return out
    }

    function schulliaThemesForClassKeyLb(schoolType, classKey, lbNumber) {
      var lbs = schulliaSchoolThemes(schoolType)[classKey]
      if (!lbs) return []
      return lbs[String(lbNumber)] || []
    }

    function schulliaLbCount(schoolType, classKey) {
      var counts = (SCHULLIA_SACHSEN.lbCount && SCHULLIA_SACHSEN.lbCount[schoolType]) || {}
      return counts[classKey] || 0
    }

    function schulliaLbTitle(schoolType, classKey, lbNumber) {
      var titlesBySchool = (SCHULLIA_SACHSEN.lbTitles && SCHULLIA_SACHSEN.lbTitles[schoolType]) || {}
      var titlesByClass = titlesBySchool[classKey] || {}
      return titlesByClass[String(lbNumber)] || ''
    }

    function schulliaResolveClassKey(schulart, klasse, zweig, kursart) {
      if (schulart === 'oberschule') {
        if (klasse === '5' || klasse === '6') return klasse
        if (klasse === '10') return '10RS'
        if (klasse === '7' || klasse === '8' || klasse === '9') {
          if (zweig === 'hs') return klasse + 'HS'
          if (zweig === 'rs') return klasse + 'RS'
          return null
        }
        return null
      }
      if (schulart === 'bgy') {
        if (klasse === '11') return '11'
        if (klasse === '12') {
          if (kursart === 'gk') return '12GK'
          if (kursart === 'lk') return '12LK'
          return null
        }
        return null
      }
      if (schulart === 'gymnasium') {
        if (['5', '6', '7', '8', '9', '10'].indexOf(klasse) !== -1) return klasse
        if (klasse === '11' || klasse === '12') {
          if (kursart === 'gk') return '11GK'
          if (kursart === 'lk') return '11LK'
          return null
        }
        return null
      }
      return null
    }

    // Returns lower-class prerequisite references as [schoolType, classKey] pairs.
    function schulliaLowerClassRefs(schulart, klasse, zweig) {
      var refs = []
      var n = Number.parseInt(klasse, 10)
      if (schulart === 'oberschule') {
        if (n >= 6) refs.push(['oberschule', '5'])
        if (n >= 7) refs.push(['oberschule', '6'])
        var z = (klasse === '10') ? 'RS' : (zweig === 'hs' ? 'HS' : 'RS')
        for (var g = 7; g < n; g++) refs.push(['oberschule', String(g) + z])
      } else if (schulart === 'bgy') {
        Object.keys(schulliaSchoolThemes('oberschule')).forEach(function (ck) {
          refs.push(['oberschule', ck])
        })
        if (klasse === '12') refs.push(['bgy', '11'])
      } else if (schulart === 'gymnasium') {
        for (var gy = 5; gy < n && gy <= 10; gy++) refs.push(['gymnasium', String(gy)])
      }
      return refs
    }

    function schulliaCurriculumUniverse() {
      if (window.__schulliaCurriculumUniverse) return window.__schulliaCurriculumUniverse
      var set = new Set()
      var allThemes = SCHULLIA_SACHSEN.themes || {}
      Object.keys(allThemes).forEach(function (schoolType) {
        var classes = allThemes[schoolType]
        Object.keys(classes).forEach(function (classKey) {
          var lbs = classes[classKey]
          Object.keys(lbs).forEach(function (lbKey) {
            lbs[lbKey].forEach(function (theme) { set.add(normalizeText(theme)) })
          })
        })
      })
      window.__schulliaCurriculumUniverse = set
      return set
    }

    function schulliaCheckedLbNumbers() {
      var checks = document.querySelectorAll('#courseLbGroup input[name="courseLb"]:checked')
      return Array.from(checks).map(function (cb) { return String(cb.value) })
    }

    function schulliaSelectedRadioValue(name) {
      var checked = document.querySelector('input[name="' + name + '"]:checked')
      return checked ? String(checked.value) : ''
    }

    function computeCurriculumAllowedSet() {
      var bundeslandEl = document.getElementById('courseBundeslandSelect')
      var bundesland = bundeslandEl ? String(bundeslandEl.value || '') : ''
      if (bundesland !== 'sachsen') return null
      var schulartEl = document.getElementById('courseSchulartSelect')
      var schulart = schulartEl ? String(schulartEl.value || '') : ''
      if (!schulart) return null
      var klasseEl = document.getElementById('courseKlasseSelect')
      var klasse = klasseEl ? String(klasseEl.value || '') : ''
      if (!klasse) return null
      var zweig = schulliaSelectedRadioValue('courseZweig')
      var kursart = schulliaSelectedRadioValue('courseKursart')
      var classKey = schulliaResolveClassKey(schulart, klasse, zweig, kursart)
      if (!classKey) return null

      var allowed = new Set()
      schulliaLowerClassRefs(schulart, klasse, zweig).forEach(function (ref) {
        schulliaThemesForClassKey(ref[0], ref[1]).forEach(function (theme) {
          allowed.add(normalizeText(theme))
        })
      })
      schulliaCheckedLbNumbers().forEach(function (lbNumber) {
        schulliaThemesForClassKeyLb(schulart, classKey, lbNumber).forEach(function (theme) {
          allowed.add(normalizeText(theme))
        })
      })
      return allowed
    }

    function pruneCurriculumChips() {
      var allowed = computeCurriculumAllowedSet()
      if (!allowed) return
      var selected = (window.selectedCourseThemes || []).slice()
      selected.forEach(function (theme) {
        if (!allowed.has(normalizeText(theme)) && typeof removeCourseThemeChip === 'function') {
          removeCourseThemeChip(theme)
        }
      })
      var blocked = (window.blockedCourseThemes || []).slice()
      blocked.forEach(function (theme) {
        if (!allowed.has(normalizeText(theme)) && typeof removeBlockedCourseThemeChip === 'function') {
          removeBlockedCourseThemeChip(theme)
        }
      })
    }

    function refreshCourseCurriculumFilter() {
      pruneCurriculumChips()
      if (typeof populateCourseThemeOptions === 'function') populateCourseThemeOptions()
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
            const blockedThemeSelect = document.getElementById('courseBlockedThemeSelect')
            if (!sourceSelect || !themeSelect || !blockedThemeSelect) return

      const seen = new Set()
      const options = []

      Array.from(sourceSelect.options).forEach(function (opt) {
        const value = String(opt.value || '').trim()
        const text = String(opt.textContent || '').trim()
        const key = normalizeTag(value || text)

        if (!value) return
        if (!key || key === 'alle themen') return
                if (key === 'erklaerung' || key === 'erklaerungen') return
        if (isOperatorTag(value || text)) return
        if (seen.has(key)) return

        seen.add(key)
        options.push({ value: value, text: text || value })
      })

      options.sort(function (a, b) {
        var umlautKey = function(s) { return s.replace(/ä/gi, 'a').replace(/ö/gi, 'o').replace(/ü/gi, 'u').replace(/ß/g, 's') }
        return umlautKey(a.text).localeCompare(umlautKey(b.text))
      })

      var curriculumAllowed = computeCurriculumAllowedSet()
      var visibleOptions = curriculumAllowed
        ? options.filter(function (entry) { return curriculumAllowed.has(normalizeText(entry.value)) })
        : options

            function fillThemeSelect(selectEl) {
                selectEl.innerHTML = ''
                const placeholder = document.createElement('option')
                placeholder.value = ''
                placeholder.textContent = 'Thema wählen'
                placeholder.selected = true
                selectEl.appendChild(placeholder)

                visibleOptions.forEach(function (entry) {
                    const option = document.createElement('option')
                    option.value = entry.value
                    option.textContent = entry.text
                    selectEl.appendChild(option)
                })
            }

            function buildOverlayThemeMenu(selectEl, menuId, handler) {
                const menu = document.getElementById(menuId)
                if (!menu) return

                menu.innerHTML = ''
                Array.from(selectEl.options).forEach(function (opt) {
                    const normalizedValue = normalizeTag(opt.value)
                    const text = String(opt.textContent || '').trim()
                    const normalizedText = normalizeTag(text)

                    if (!normalizedValue && normalizedText !== normalizeTag('Thema wählen')) {
                        return
                    }

                    const item = document.createElement('button')
                    item.type = 'button'
                    item.className = 'difficulty-item'
                    item.dataset.value = opt.value
                    item.textContent = text || 'Thema wählen'
                    item.disabled = !!opt.disabled
                    item.addEventListener('click', function (event) {
                        event.preventDefault()
                        event.stopPropagation()
                        handler(opt.value)
                    })
                    menu.appendChild(item)
                })
            }

            fillThemeSelect(themeSelect)
            fillThemeSelect(blockedThemeSelect)
            buildOverlayThemeMenu(themeSelect, 'courseThemeMenu', setCourseThemeValue)
            buildOverlayThemeMenu(blockedThemeSelect, 'courseBlockedThemeMenu', setBlockedCourseThemeValue)

            setCustomToggleLabel('courseThemeSelectedLabel', '', 'Thema wählen')
            setCustomToggleLabel('courseBlockedThemeSelectedLabel', '', 'Thema wählen')
            updateCourseThemeSelectionState()
            updateCourseThemeChipsDisplay()
            updateBlockedCourseThemeChipsDisplay()
        }

        function getSelectedCourseThemes() {
            if (!Array.isArray(window.selectedCourseThemes)) {
                window.selectedCourseThemes = []
            }
            return window.selectedCourseThemes
        }

        function getBlockedCourseThemes() {
            if (!Array.isArray(window.blockedCourseThemes)) {
                window.blockedCourseThemes = []
            }
            return window.blockedCourseThemes
        }

        function updateCourseThemeSelectionState() {
            const includeSelect = document.getElementById('courseThemeSelect')
            const blockSelect = document.getElementById('courseBlockedThemeSelect')
            if (!includeSelect || !blockSelect) return

            const includeSet = new Set(getSelectedCourseThemes().map(normalizeText))
            const blockSet = new Set(getBlockedCourseThemes().map(normalizeText))

            Array.from(includeSelect.options).forEach(function (opt) {
                const key = normalizeText(opt.value)
                if (!key) {
                    opt.disabled = false
                    return
                }
                opt.disabled = includeSet.has(key) || blockSet.has(key)
            })

            Array.from(blockSelect.options).forEach(function (opt) {
                const key = normalizeText(opt.value)
                if (!key) {
                    opt.disabled = false
                    return
                }
                opt.disabled = includeSet.has(key) || blockSet.has(key)
            })

            syncCustomMenuDisabledState('courseThemeSelect', 'courseThemeMenu')
            syncCustomMenuDisabledState('courseBlockedThemeSelect', 'courseBlockedThemeMenu')
        }

        function updateCourseThemeChipsDisplay() {
            const chipsContainer = document.getElementById('courseThemeChips')
            if (!chipsContainer) return

            chipsContainer.innerHTML = ''
            getSelectedCourseThemes().forEach(function (theme) {
                const chip = document.createElement('span')
                chip.className = 'badge rounded-pill me-2 schullia-filter-chip'
                chip.textContent = getCategoryDisplayLabel(theme) + ' ×'
                chip.onclick = function () {
                    removeCourseThemeChip(theme)
                }
                chipsContainer.appendChild(chip)
            })
        }

        function updateBlockedCourseThemeChipsDisplay() {
            const chipsContainer = document.getElementById('courseBlockedThemeChips')
            if (!chipsContainer) return

            chipsContainer.innerHTML = ''
            getBlockedCourseThemes().forEach(function (theme) {
                const chip = document.createElement('span')
                chip.className = 'badge rounded-pill me-2 schullia-filter-chip schullia-filter-chip-blocked'
                chip.textContent = getCategoryDisplayLabel(theme) + ' ×'
                chip.onclick = function () {
                    removeBlockedCourseThemeChip(theme)
                }
                chipsContainer.appendChild(chip)
            })
        }

        function addCourseThemeChip(themeValue) {
            const value = String(themeValue || '').trim()
            if (!value) return

            const selectedThemes = getSelectedCourseThemes()
            const blockedThemes = getBlockedCourseThemes()
            const normalized = normalizeText(value)

            if (blockedThemes.some(function (entry) { return normalizeText(entry) === normalized })) return
            if (selectedThemes.some(function (entry) { return normalizeText(entry) === normalized })) return

            selectedThemes.push(value)
            updateCourseThemeSelectionState()
            updateCourseThemeChipsDisplay()
            setCustomToggleLabel('courseThemeSelectedLabel', '', 'Thema wählen')
        }

        function addBlockedCourseThemeChip(themeValue) {
            const value = String(themeValue || '').trim()
            if (!value) return

            const selectedThemes = getSelectedCourseThemes()
            const blockedThemes = getBlockedCourseThemes()
            const normalized = normalizeText(value)

            if (selectedThemes.some(function (entry) { return normalizeText(entry) === normalized })) return
            if (blockedThemes.some(function (entry) { return normalizeText(entry) === normalized })) return

            blockedThemes.push(value)
            updateCourseThemeSelectionState()
            updateBlockedCourseThemeChipsDisplay()
            setCustomToggleLabel('courseBlockedThemeSelectedLabel', '', 'Thema wählen')
        }

        function removeCourseThemeChip(themeValue) {
            const selectedThemes = getSelectedCourseThemes()
            const normalized = normalizeText(themeValue)
            const index = selectedThemes.findIndex(function (entry) {
                return normalizeText(entry) === normalized
            })
            if (index < 0) return

            selectedThemes.splice(index, 1)
            updateCourseThemeSelectionState()
            updateCourseThemeChipsDisplay()
        }

        function removeBlockedCourseThemeChip(themeValue) {
            const blockedThemes = getBlockedCourseThemes()
            const normalized = normalizeText(themeValue)
            const index = blockedThemes.findIndex(function (entry) {
                return normalizeText(entry) === normalized
            })
            if (index < 0) return

            blockedThemes.splice(index, 1)
            updateCourseThemeSelectionState()
            updateBlockedCourseThemeChipsDisplay()
        }

        function setCourseThemeValue(themeValue) {
            addCourseThemeChip(themeValue)
            closeCustomMenu('courseThemeToggle', 'courseThemeMenu')
        }

        function setBlockedCourseThemeValue(themeValue) {
            addBlockedCourseThemeChip(themeValue)
            closeCustomMenu('courseBlockedThemeToggle', 'courseBlockedThemeMenu')
        }

        function getCandidateCardsForThemes(themeValues, blockedThemeValues) {
            const normalizedThemes = new Set(
                (Array.isArray(themeValues) ? themeValues : [themeValues])
                    .map(function (entry) {
                        return normalizeText(entry)
                    })
                    .filter(Boolean)
            )
            if (!normalizedThemes.size) return []

            const blockedThemes = new Set(
                (Array.isArray(blockedThemeValues) ? blockedThemeValues : [blockedThemeValues])
                    .map(function (entry) {
                        return normalizeText(entry)
                    })
                    .filter(Boolean)
            )

            const requiredThemes = Array.from(normalizedThemes)

            return Array.from(document.querySelectorAll('.card.shadow-sm[data-category]')).filter(function (card) {
                const categories = String(card.dataset.category || '')
                    .split('|')
                    .map(function (entry) {
                        return normalizeText(entry)
                    })

                const hasAllRequired = requiredThemes.every(function (requiredTheme) {
                    return categories.indexOf(requiredTheme) !== -1
                })

                if (!hasAllRequired) return false

                return !Array.from(blockedThemes).some(function (blockedTheme) {
                    return categories.indexOf(blockedTheme) !== -1
                })
            })
        }

        function getCurriculumCandidateCards(allowedSet, manualIncludes, manualBlocks) {
            const allowed = allowedSet
            const universe = schulliaCurriculumUniverse()
            const blockedComplement = new Set()
            universe.forEach(function (theme) {
                if (!allowed.has(theme)) blockedComplement.add(theme)
            })

            const manualBlockSet = new Set(
                (Array.isArray(manualBlocks) ? manualBlocks : [])
                    .map(function (entry) { return normalizeText(entry) })
                    .filter(Boolean)
            )
            const manualIncludeList = (Array.isArray(manualIncludes) ? manualIncludes : [])
                .map(function (entry) { return normalizeText(entry) })
                .filter(Boolean)

            return Array.from(document.querySelectorAll('.card.shadow-sm[data-category]')).filter(function (card) {
                const categories = String(card.dataset.category || '')
                    .split('|')
                    .map(function (entry) { return normalizeText(entry) })

                if (!categories.some(function (cat) { return allowed.has(cat) })) return false
                if (categories.some(function (cat) { return blockedComplement.has(cat) })) return false
                if (categories.some(function (cat) { return manualBlockSet.has(cat) })) return false

                if (manualIncludeList.length) {
                    const hasAllIncludes = manualIncludeList.every(function (inc) {
                        return categories.indexOf(inc) !== -1
                    })
                    if (!hasAllIncludes) return false
                }

                return true
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

    const COURSE_TARGET_GROUP_PROFILES = {
      einsteiger: {
        difficulty: new Map([
          [1, 0.35],
          [2, 0.25],
          [3, 0.15],
          [4, 0.15],
          [5, 0.1],
        ]),
        network: new Map([
          [1, 0.6],
          [2, 0.3],
          [3, 0.05],
          [4, 0.05],
          [5, 0.0],
        ]),
      },
      fortgeschrittene: {
        difficulty: new Map([
          [1, 0.1],
          [2, 0.25],
          [3, 0.4],
          [4, 0.15],
          [5, 0.1],
        ]),
        network: new Map([
          [1, 0.1],
          [2, 0.25],
          [3, 0.4],
          [4, 0.15],
          [5, 0.1],
        ]),
      },
      experten: {
        difficulty: new Map([
          [1, 0.1],
          [2, 0.2],
          [3, 0.35],
          [4, 0.2],
          [5, 0.15],
        ]),
        network: new Map([
          [1, 0.1],
          [2, 0.2],
          [3, 0.3],
          [4, 0.2],
          [5, 0.2],
        ]),
      },
    }

    const COURSE_OPERATOR_RULES = [
      { key: 'angeben', min: 0.05, max: 0.15 },
      { key: 'ordnen', min: 0.0, max: 0.05 },
      { key: 'skizzieren', min: 0.0, max: 0.2 },
      { key: 'zeichnen', min: 0.0, max: 0.4 },
      { key: 'abschaetzen', min: 0.0, max: 0.1 },
      { key: 'vergleichen', min: 0.0, max: 0.1 },
      { key: 'aufstellen', min: 0.0, max: 0.05 },
      { key: 'ermitteln_bestimmen', min: 0.2, max: 0.5 },
      { key: 'berechnen', min: 0.3, max: 0.75 },
      { key: 'planen', min: 0.0, max: 0.05 },
      { key: 'untersuchen', min: 0.0, max: 0.1 },
      { key: 'ableiten', min: 0.0, max: 0.1 },
      { key: 'herleiten', min: 0.0, max: 0.1 },
      { key: 'beschreiben', min: 0.0, max: 0.1 },
      { key: 'erklaeren', min: 0.0, max: 0.1 },
      { key: 'erlaeutern', min: 0.0, max: 0.05 },
      { key: 'eroertern', min: 0.0, max: 0.05 },
      { key: 'diskutieren', min: 0.0, max: 0.05 },
      { key: 'beurteilen', min: 0.0, max: 0.1 },
      { key: 'bewerten', min: 0.0, max: 0.1 },
      { key: 'begruenden', min: 0.0, max: 0.1 },
      { key: 'interpretieren_deuten', min: 0.0, max: 0.1 },
      { key: 'analysieren', min: 0.0, max: 0.1 },
      { key: 'auswerten', min: 0.0, max: 0.1 },
      { key: 'darstellen', min: 0.0, max: 0.1 },
    ]

    function buildCourseOperatorAliasMap() {
      const map = new Map()

      function add(key, aliases) {
        aliases.forEach(function (alias) {
          map.set(alias, key)
        })
      }

      add('angeben', ['angeben', 'ausfullen', 'auswahlen', 'ankreuzen'])
      add('ordnen', ['ordnen'])
      add('skizzieren', ['skizzieren'])
      add('zeichnen', ['zeichnen'])
      add('abschaetzen', ['abschatzen'])
      add('vergleichen', ['vergleichen'])
      add('aufstellen', ['aufstellen'])
      add('ermitteln_bestimmen', ['ermitteln', 'bestimmen', 'bestimme'])
      add('berechnen', ['berechnen'])
      add('planen', ['planen'])
      add('untersuchen', ['untersuchen'])
      add('ableiten', ['ableiten'])
      add('herleiten', ['herleiten'])
      add('beschreiben', ['beschreiben'])
      add('erklaeren', ['erklaren', 'erklaere'])
      add('erlaeutern', ['erlautern'])
      add('eroertern', ['erortern'])
      add('diskutieren', ['diskutieren'])
      add('beurteilen', ['beurteilen'])
      add('bewerten', ['bewerten'])
      add('begruenden', ['begrunden', 'begruenden'])
      add('interpretieren_deuten', ['interpretieren', 'deuten'])
      add('analysieren', ['analysieren'])
      add('auswerten', ['auswerten'])
      add('darstellen', ['darstellen'])

      return map
    }

    const COURSE_OPERATOR_ALIAS_TO_KEY = buildCourseOperatorAliasMap()

    function normalizeOperatorText(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/ß/g, 'ss')
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/s+/g, ' ')
        .trim()
    }

    function resolveOperatorKey(value) {
      const normalized = normalizeOperatorText(value)
      return normalized ? COURSE_OPERATOR_ALIAS_TO_KEY.get(normalized) || null : null
    }

    function getTargetGroupProfile(groupValue) {
      const normalized = normalizeText(groupValue)
      return COURSE_TARGET_GROUP_PROFILES[normalized] || COURSE_TARGET_GROUP_PROFILES.fortgeschrittene
    }

    function getCardDifficultyLevel(card) {
      if (!card) return null

      const cardBody = card.querySelector('.card-body')
      if (!cardBody) return null

      const level = Number.parseInt(cardBody.dataset.schulliaDifficultyLevel || '', 10)
      return Number.isFinite(level) && level >= 1 && level <= 5 ? level : null
    }

    function getCardNetworkLevel(card) {
      if (!card) return null

      const cardBody = card.querySelector('.card-body')
      if (!cardBody) return null

      const level = Number.parseInt(cardBody.dataset.schulliaNetworkLevel || '', 10)
      return Number.isFinite(level) && level >= 1 && level <= 5 ? level : null
    }

    function getCardOperatorKey(card) {
      if (!card) return null

      const cardBody = card.querySelector('.card-body')
      if (!cardBody) return null

      const stored = String(cardBody.dataset.schulliaOperatorKey || '').trim()
      if (stored) return stored

      const badges = Array.from(cardBody.querySelectorAll('.badge'))
      for (let i = 0; i < badges.length; i += 1) {
        const key = resolveOperatorKey(badges[i].textContent)
        if (key) return key
      }

      return null
    }

    function allocateTargetsByWeights(total, weights, availability) {
      const targets = new Map()
      if (total <= 0) return targets

      const activeLevels = []
      let weightSum = 0

      weights.forEach(function (weight, level) {
        const available = Number(availability.get(level) || 0)
        if (available > 0 && weight > 0) {
          activeLevels.push(level)
          weightSum += weight
        }
      })

      if (!activeLevels.length) return targets

      const bucket = []
      let assigned = 0

      activeLevels.forEach(function (level) {
        const available = Number(availability.get(level) || 0)
        const expected = (total * weights.get(level)) / weightSum
        const base = Math.min(available, Math.floor(expected))
        targets.set(level, base)
        assigned += base
        bucket.push({
          level: level,
          rest: expected - base,
          room: Math.max(0, available - base),
        })
      })

      let remaining = total - assigned
      while (remaining > 0) {
        bucket
          .sort(function (a, b) {
            if (b.rest !== a.rest) return b.rest - a.rest
            return b.room - a.room
          })
          .some(function (entry) {
            if (entry.room <= 0) return false
            targets.set(entry.level, (targets.get(entry.level) || 0) + 1)
            entry.room -= 1
            entry.rest = 0
            remaining -= 1
            return true
          })

        const hasRoom = bucket.some(function (entry) {
          return entry.room > 0
        })
        if (!hasRoom) break
      }

      return targets
    }

    function buildOperatorConstraints(total, availability) {
      const base = COURSE_OPERATOR_RULES.map(function (rule) {
        const available = Number(availability.get(rule.key) || 0)
        if (!available) {
          return { key: rule.key, min: 0, max: 0, available: 0 }
        }

        let min = Math.min(available, Math.ceil(rule.min * total))
        let max = Math.min(available, Math.floor(rule.max * total))
        if (max < min) max = min

        return { key: rule.key, min: min, max: max, available: available }
      })

      const withMin = base.filter(function (entry) {
        return entry.min > 0
      })

      const minSum = withMin.reduce(function (sum, entry) {
        return sum + entry.min
      }, 0)

      if (minSum > total && minSum > 0) {
        const scaled = withMin.map(function (entry) {
          const exact = (entry.min * total) / minSum
          return {
            key: entry.key,
            exact: exact,
            base: Math.floor(exact),
            rest: exact - Math.floor(exact),
            max: entry.max,
          }
        })

        let assigned = scaled.reduce(function (sum, entry) {
          return sum + entry.base
        }, 0)
        let remaining = total - assigned

        scaled.sort(function (a, b) {
          return b.rest - a.rest
        })

        for (let i = 0; i < scaled.length && remaining > 0; i += 1) {
          scaled[i].base += 1
          remaining -= 1
        }

        const minByKey = new Map(
          scaled.map(function (entry) {
            return [entry.key, entry.base]
          })
        )

        base.forEach(function (entry) {
          const newMin = Number(minByKey.get(entry.key) || 0)
          entry.min = Math.min(newMin, entry.max)
        })
      }

      return new Map(
        base.map(function (entry) {
          return [entry.key, entry]
        })
      )
    }

    function scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets) {
      let score = Math.random() * 0.05

      if (Number.isFinite(entry.difficulty)) {
        const target = Number(diffTargets.get(entry.difficulty) || 0)
        const current = Number(diffCounts.get(entry.difficulty) || 0)
        score += current < target ? 22 : -6
      }

      if (Number.isFinite(entry.network)) {
        const target = Number(networkTargets.get(entry.network) || 0)
        const current = Number(networkCounts.get(entry.network) || 0)
        score += current < target ? 16 : -4
      }

      return score
    }

    function pickBestFromPool(pool, predicate, scorer) {
      const matches = pool.filter(predicate)
      if (!matches.length) return null

      let best = matches[0]
      let bestScore = scorer(best)

      for (let i = 1; i < matches.length; i += 1) {
        const current = matches[i]
        const currentScore = scorer(current)
        if (currentScore > bestScore) {
          best = current
          bestScore = currentScore
        }
      }

      return best
    }

    function removeEntry(pool, entry) {
      const index = pool.indexOf(entry)
      if (index >= 0) pool.splice(index, 1)
    }

    function selectCardsByCourseCriteria(candidates, count, groupValue) {
      const targetCount = Math.max(1, Math.min(count, candidates.length))
      const profile = getTargetGroupProfile(groupValue)
      const entries = candidates.map(function (card) {
        return {
          card: card,
          difficulty: getCardDifficultyLevel(card),
          network: getCardNetworkLevel(card),
          operator: getCardOperatorKey(card),
        }
      })

      const pool = pickRandomItems(entries, entries.length)
      const selected = []

      const diffAvailability = new Map()
      const networkAvailability = new Map()
      const operatorAvailability = new Map()

      entries.forEach(function (entry) {
        if (Number.isFinite(entry.difficulty)) {
          diffAvailability.set(entry.difficulty, Number(diffAvailability.get(entry.difficulty) || 0) + 1)
        }

        if (Number.isFinite(entry.network)) {
          networkAvailability.set(entry.network, Number(networkAvailability.get(entry.network) || 0) + 1)
        }

        if (entry.operator) {
          operatorAvailability.set(entry.operator, Number(operatorAvailability.get(entry.operator) || 0) + 1)
        }
      })

      const diffTargets = allocateTargetsByWeights(targetCount, profile.difficulty, diffAvailability)
      const networkTargets = allocateTargetsByWeights(targetCount, profile.network, networkAvailability)
      const operatorConstraints = buildOperatorConstraints(targetCount, operatorAvailability)

      const diffCounts = new Map()
      const networkCounts = new Map()
      const operatorCounts = new Map()

      function register(entry) {
        selected.push(entry)
        removeEntry(pool, entry)

        if (Number.isFinite(entry.difficulty)) {
          diffCounts.set(entry.difficulty, Number(diffCounts.get(entry.difficulty) || 0) + 1)
        }

        if (Number.isFinite(entry.network)) {
          networkCounts.set(entry.network, Number(networkCounts.get(entry.network) || 0) + 1)
        }

        if (entry.operator) {
          operatorCounts.set(entry.operator, Number(operatorCounts.get(entry.operator) || 0) + 1)
        }
      }

      const minRules = Array.from(operatorConstraints.values())
        .filter(function (entry) {
          return entry.min > 0
        })
        .sort(function (a, b) {
          return b.min - a.min
        })

      minRules.forEach(function (rule) {
        while (selected.length < targetCount && Number(operatorCounts.get(rule.key) || 0) < rule.min) {
          const best = pickBestFromPool(
            pool,
            function (entry) {
              return entry.operator === rule.key
            },
            function (entry) {
              return scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets) + 35
            }
          )

          if (!best) break
          register(best)
        }
      })

      function respectsOperatorMax(entry) {
        if (!entry.operator) return true
        const rule = operatorConstraints.get(entry.operator)
        if (!rule) return true
        return Number(operatorCounts.get(entry.operator) || 0) < rule.max
      }

      Array.from(diffTargets.keys())
        .sort(function (a, b) {
          return a - b
        })
        .forEach(function (level) {
          while (selected.length < targetCount && Number(diffCounts.get(level) || 0) < Number(diffTargets.get(level) || 0)) {
            const best = pickBestFromPool(
              pool,
              function (entry) {
                return entry.difficulty === level && respectsOperatorMax(entry)
              },
              function (entry) {
                return scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets) + 18
              }
            )
            if (!best) break
            register(best)
          }
        })

      Array.from(networkTargets.keys())
        .sort(function (a, b) {
          return a - b
        })
        .forEach(function (level) {
          while (selected.length < targetCount && Number(networkCounts.get(level) || 0) < Number(networkTargets.get(level) || 0)) {
            const best = pickBestFromPool(
              pool,
              function (entry) {
                return entry.network === level && respectsOperatorMax(entry)
              },
              function (entry) {
                return scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets) + 14
              }
            )
            if (!best) break
            register(best)
          }
        })

      while (selected.length < targetCount && pool.length) {
        const bestWithMax = pickBestFromPool(
          pool,
          function (entry) {
            return respectsOperatorMax(entry)
          },
          function (entry) {
            return scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets)
          }
        )

        const bestAny =
          bestWithMax ||
          pickBestFromPool(
            pool,
            function () {
              return true
            },
            function (entry) {
              return scoreEntryForTargets(entry, diffCounts, diffTargets, networkCounts, networkTargets)
            }
          )

        if (!bestAny) break
        register(bestAny)
      }

      return selected
        .sort(function (a, b) {
          const aLevel = Number.isFinite(a.difficulty) ? a.difficulty : 99
          const bLevel = Number.isFinite(b.difficulty) ? b.difficulty : 99
          if (aLevel !== bLevel) return aLevel - bLevel

          const aNetwork = Number.isFinite(a.network) ? a.network : 99
          const bNetwork = Number.isFinite(b.network) ? b.network : 99
          return aNetwork - bNetwork
        })
        .map(function (entry) {
          return entry.card
        })
    }

    function splitHeaderAndBody(markdown) {
      const source = String(markdown || '')
      const match = source.match(/^\s*<!--[\r\n]*([\s\S]*?)-->[\r\n]*/)

      if (!match) {
        return {
          headerLines: [],
          body: source.trim(),
        }
      }

      const headerLines = match[1]
        .split(/\r?\n/)
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
        .split(/\s+-\s+|\s*,\s*|\s*;\s*/)
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
          const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
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
        mergedLines.push('tags: ' + tags.join(', '))
      }

      if (comments.length) {
        mergedLines.push('comment: ' + comments.join(' - '))
      }

      if (authors.length) {
        mergedLines.push('author: ' + authors.join(', '))
      }

      return mergedLines.length ? '<!--\n\n' + mergedLines.join('\n') + '\n\n-->\n\n' : ''
    }

        async function buildCourseSource(themeValues, blockedThemeValues, requestedCount, groupValue, curriculumAllowed) {
            const candidates = curriculumAllowed
                ? getCurriculumCandidateCards(curriculumAllowed, themeValues, blockedThemeValues)
                : getCandidateCardsForThemes(themeValues, blockedThemeValues)
            if (!candidates.length) {
                throw new Error('Keine Aufgaben für die gewählten/gesperrten Themen gefunden.')
      }

      const selectionCount = Math.max(1, Math.min(requestedCount, candidates.length))
      const selectedCards = selectCardsByCourseCriteria(candidates, selectionCount, groupValue)
      const selectedUrls = selectedCards
        .map(extractRawTaskUrl)
        .filter(function (url) {
          return !!url
        })

      if (!selectedUrls.length) {
        throw new Error('Es konnten keine Aufgaben-Quellen aufgelöst werden.')
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
        .join('\n\n\n')

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
        throw new Error('CompressionStream ist nicht verfügbar.')
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
        '<p style="margin:0.6rem 0 0.45rem 0;">' + (message || 'Browser blockiert Auto-Tab. Bitte manuell öffnen:') + '</p>' +
        '<a href="' + url + '" target="_blank" rel="noopener" class="schullia-course-submit-btn" style="display:inline-block;text-decoration:none;">Kurs im neuen Tab öffnen</a>'
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
        window.alert('Der LiveEditor wurde in einem neuen Tab geöffnet. Der Kursinhalt ist in der Zwischenablage. Bitte im Editor Strg+V drücken.')
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
        window.selectedCourseThemes = []
        window.blockedCourseThemes = []
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
          '<button type="button" class="schullia-course-close" id="courseGeneratorCloseButton" aria-label="Schließen">&times;</button>' +
          '<h3 id="courseGeneratorTitle">Kurs Erzeugen</h3>' +
          '<label for="courseBundeslandSelect">Bundesland:</label>' +
          '<select id="courseBundeslandSelect" class="form-select" aria-label="Bundesland">' +
          '<option value="sachsen" selected>Sachsen</option>' +
          '<option value="anderes">anderes Bundesland</option>' +
          '</select>' +
          '<div id="courseSchulartWrap" class="schullia-course-conditional">' +
          '<label for="courseSchulartSelect">Schulart:</label>' +
          '<select id="courseSchulartSelect" class="form-select" aria-label="Schulart">' +
          '<option value="" selected>Schulart w\u00e4hlen</option>' +
          '<option value="gymnasium">Gymnasium</option>' +
          '<option value="bgy">Berufliches Gymnasium</option>' +
          '<option value="oberschule">Oberschule</option>' +
          '</select>' +
          '</div>' +
          '<div id="courseKlasseWrap" class="schullia-course-conditional">' +
          '<label for="courseKlasseSelect">Zielklasse:</label>' +
          '<select id="courseKlasseSelect" class="form-select" aria-label="Zielklasse">' +
          '<option value="" selected>Klasse w\u00e4hlen</option>' +
          '</select>' +
          '</div>' +
          '<div id="courseZweigWrap" class="schullia-course-conditional">' +
          '<label>Schulzweig:</label>' +
          '<div id="courseZweigGroup" class="schullia-course-radio-row" role="radiogroup" aria-label="Schulzweig">' +
          '<label class="schullia-course-radio"><input type="radio" name="courseZweig" value="hs" /> HS</label>' +
          '<label class="schullia-course-radio"><input type="radio" name="courseZweig" value="rs" /> RS</label>' +
          '</div>' +
          '</div>' +
          '<div id="courseKursartWrap" class="schullia-course-conditional">' +
          '<label>Kursart:</label>' +
          '<div id="courseKursartGroup" class="schullia-course-radio-row" role="radiogroup" aria-label="Kursart">' +
          '<label class="schullia-course-radio"><input type="radio" name="courseKursart" value="gk" /> GK</label>' +
          '<label class="schullia-course-radio"><input type="radio" name="courseKursart" value="lk" /> LK</label>' +
          '</div>' +
          '</div>' +
          '<div id="courseLbWrap" class="schullia-course-conditional">' +
          '<label>Welche Lernbereiche wurden schon unterrichtet?</label>' +
          '<div id="courseLbGroup" class="schullia-course-lb-row"></div>' +
          '</div>' +
                                        '<div id="courseThemeChips" class="schullia-theme-chip-container"></div>' +
                                        '<div id="courseBlockedThemeChips" class="schullia-theme-chip-container"></div>' +
                    '<label for="courseThemeToggle">Thema hinzufügen:</label>' +
                    '<div id="courseThemeSelectCustom" class="difficulty-dropdown">' +
                    '<button type="button" id="courseThemeToggle" class="btn difficulty-toggle form-select text-start d-flex justify-content-between align-items-center" aria-haspopup="listbox" aria-expanded="false">' +
                    '<span id="courseThemeSelectedLabel">Thema wählen</span><span aria-hidden="true">&#9662;</span>' +
                    '</button>' +
                    '<div id="courseThemeMenu" class="difficulty-menu" role="listbox" aria-label="Thema hinzufügen"></div>' +
                    '</div>' +
                    '<select id="courseThemeSelect" class="form-select native-select-source" aria-label="Thema hinzufügen"></select>' +
                    '<label for="courseBlockedThemeToggle">Thema sperren:</label>' +
                    '<div id="courseBlockedThemeSelectCustom" class="difficulty-dropdown">' +
                    '<button type="button" id="courseBlockedThemeToggle" class="btn difficulty-toggle form-select text-start d-flex justify-content-between align-items-center" aria-haspopup="listbox" aria-expanded="false">' +
                    '<span id="courseBlockedThemeSelectedLabel">Thema wählen</span><span aria-hidden="true">&#9662;</span>' +
                    '</button>' +
                    '<div id="courseBlockedThemeMenu" class="difficulty-menu" role="listbox" aria-label="Thema sperren"></div>' +
                    '</div>' +
                    '<select id="courseBlockedThemeSelect" class="form-select native-select-source" aria-label="Thema sperren"></select>' +
          '<label for="courseTargetGroupSelect">Zielgruppe:</label>' +
          '<select id="courseTargetGroupSelect" class="form-select" aria-label="Zielgruppe">' +
          '<option value="einsteiger">Einsteiger</option>' +
          '<option value="fortgeschrittene" selected>Fortgeschrittene</option>' +
          '<option value="experten">Experten</option>' +
          '</select>' +
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

      const bundeslandSelect = document.getElementById('courseBundeslandSelect')
      const schulartSelect = document.getElementById('courseSchulartSelect')
      const schulartWrap = document.getElementById('courseSchulartWrap')
      const klasseSelect = document.getElementById('courseKlasseSelect')
      const klasseWrap = document.getElementById('courseKlasseWrap')
      const zweigWrap = document.getElementById('courseZweigWrap')
      const kursartWrap = document.getElementById('courseKursartWrap')
      const lbWrap = document.getElementById('courseLbWrap')
      const lbGroup = document.getElementById('courseLbGroup')

      const SCHULART_KLASSEN = {
        gymnasium: ['5', '6', '7', '8', '9', '10', '11', '12'],
        bgy: ['11', '12'],
        oberschule: ['5', '6', '7', '8', '9', '10']
      }

      function rebuildKlasseOptions(schulart) {
        if (!klasseSelect) return
        const opts = SCHULART_KLASSEN[schulart] || []
        const prev = String(klasseSelect.value || '')
        klasseSelect.innerHTML = '<option value="" selected>Klasse w\u00e4hlen</option>'
        opts.forEach(function (k) {
          const option = document.createElement('option')
          option.value = k
          option.textContent = 'Klasse ' + k
          klasseSelect.appendChild(option)
        })
        if (opts.indexOf(prev) !== -1) klasseSelect.value = prev
      }

      function getSelectedKursart() {
        const checked = document.querySelector('input[name="courseKursart"]:checked')
        return checked ? String(checked.value) : ''
      }

      function getSelectedZweig() {
        const checked = document.querySelector('input[name="courseZweig"]:checked')
        return checked ? String(checked.value) : ''
      }

      function hideAllLbTooltips() {
        var tips = document.querySelectorAll('#courseLbGroup .schullia-lb-tooltip')
        Array.prototype.forEach.call(tips, function (t) {
          t.classList.remove('is-visible')
          t.dataset.pinned = ''
        })
      }

      function positionLbTooltip(tip) {
        var modal = document.querySelector('.schullia-course-modal')
        if (!modal) return
        tip.style.left = '0px'
        tip.style.right = 'auto'
        var tipRect = tip.getBoundingClientRect()
        var modalRect = modal.getBoundingClientRect()
        var margin = 8
        var rightEdge = modalRect.right - margin
        var leftEdge = modalRect.left + margin
        var shift = 0
        if (tipRect.right > rightEdge) shift = tipRect.right - rightEdge
        if (tipRect.left - shift < leftEdge) shift = tipRect.left - leftEdge
        if (shift !== 0) tip.style.left = (-shift) + 'px'
      }

      if (!window.__schulliaLbTooltipDocBound) {
        document.addEventListener('click', hideAllLbTooltips)
        window.__schulliaLbTooltipDocBound = true
      }

      function renderLbCheckboxes(count, schoolType, classKey) {
        if (!lbGroup) return
        lbGroup.innerHTML = ''
        for (let i = 1; i <= count; i++) {
          const wrap = document.createElement('span')
          wrap.className = 'schullia-course-lb-wrap'

          const item = document.createElement('label')
          item.className = 'schullia-course-lb-item'
          const checkbox = document.createElement('input')
          checkbox.type = 'checkbox'
          checkbox.value = String(i)
          checkbox.name = 'courseLb'
          item.appendChild(checkbox)
          item.appendChild(document.createTextNode(' LB ' + i))
          wrap.appendChild(item)

          const title = (schoolType && classKey) ? schulliaLbTitle(schoolType, classKey, i) : ''
          if (title) {
            const info = document.createElement('button')
            info.type = 'button'
            info.className = 'schullia-lb-info'
            info.setAttribute('aria-label', 'Info zu Lernbereich ' + i)
            info.textContent = 'i'
            wrap.appendChild(info)

            const tip = document.createElement('span')
            tip.className = 'schullia-lb-tooltip'
            tip.setAttribute('role', 'tooltip')
            tip.textContent = 'Lernbereich ' + i + ': ' + title
            wrap.appendChild(tip)

            info.addEventListener('mouseenter', function () {
              positionLbTooltip(tip)
              tip.classList.add('is-visible')
            })
            info.addEventListener('mouseleave', function () {
              if (tip.dataset.pinned !== '1') tip.classList.remove('is-visible')
            })
            info.addEventListener('click', function (event) {
              event.preventDefault()
              event.stopPropagation()
              const wasPinned = tip.dataset.pinned === '1'
              hideAllLbTooltips()
              if (!wasPinned) {
                tip.dataset.pinned = '1'
                positionLbTooltip(tip)
                tip.classList.add('is-visible')
              }
            })
          }

          lbGroup.appendChild(wrap)
        }
      }

      function updateCourseCascade() {
        const bundesland = bundeslandSelect ? String(bundeslandSelect.value || '') : ''
        const isSachsen = bundesland === 'sachsen'
        const schulart = schulartSelect ? String(schulartSelect.value || '') : ''

        if (schulartWrap) schulartWrap.style.display = isSachsen ? 'grid' : 'none'

        if (isSachsen && schulart && schulartSelect && schulartSelect.dataset.lastSchulart !== schulart) {
          rebuildKlasseOptions(schulart)
          schulartSelect.dataset.lastSchulart = schulart
        }

        const klasse = klasseSelect ? String(klasseSelect.value || '') : ''
        const showKlasse = isSachsen && !!schulart
        if (klasseWrap) klasseWrap.style.display = showKlasse ? 'grid' : 'none'

        const isOberschule = schulart === 'oberschule'
        const needsZweig = isSachsen && isOberschule && (klasse === '7' || klasse === '8' || klasse === '9')
        if (zweigWrap) zweigWrap.style.display = needsZweig ? 'grid' : 'none'

        const needsKursart = isSachsen && (schulart === 'gymnasium' || schulart === 'bgy') && (klasse === '11' || klasse === '12')
        if (kursartWrap) kursartWrap.style.display = needsKursart ? 'grid' : 'none'

        const zweig = getSelectedZweig()
        const kursart = getSelectedKursart()
        const classKey = (isSachsen && schulart) ? schulliaResolveClassKey(schulart, klasse, zweig, kursart) : null
        const lbCount = classKey ? schulliaLbCount(schulart, classKey) : 0
        if (lbCount > 0) {
          renderLbCheckboxes(lbCount, schulart, classKey)
          if (lbWrap) lbWrap.style.display = 'grid'
        } else {
          if (lbGroup) lbGroup.innerHTML = ''
          if (lbWrap) lbWrap.style.display = 'none'
        }

        refreshCourseCurriculumFilter()
      }

      if (bundeslandSelect && !bundeslandSelect.dataset.bound) {
        bundeslandSelect.addEventListener('change', updateCourseCascade)
        bundeslandSelect.dataset.bound = '1'
      }
      if (schulartSelect && !schulartSelect.dataset.bound) {
        schulartSelect.addEventListener('change', updateCourseCascade)
        schulartSelect.dataset.bound = '1'
      }
      if (klasseSelect && !klasseSelect.dataset.bound) {
        klasseSelect.addEventListener('change', updateCourseCascade)
        klasseSelect.dataset.bound = '1'
      }
      const zweigGroup = document.getElementById('courseZweigGroup')
      if (zweigGroup && !zweigGroup.dataset.bound) {
        zweigGroup.addEventListener('change', updateCourseCascade)
        zweigGroup.dataset.bound = '1'
      }
      const kursartGroup = document.getElementById('courseKursartGroup')
      if (kursartGroup && !kursartGroup.dataset.bound) {
        kursartGroup.addEventListener('change', updateCourseCascade)
        kursartGroup.dataset.bound = '1'
      }
      if (lbGroup && !lbGroup.dataset.bound) {
        lbGroup.addEventListener('change', refreshCourseCurriculumFilter)
        lbGroup.dataset.bound = '1'
      }

      updateCourseCascade()

            const themeToggle = document.getElementById('courseThemeToggle')
            const themeMenu = document.getElementById('courseThemeMenu')
            if (themeToggle && themeMenu && !themeToggle.dataset.bound) {
                themeToggle.addEventListener('click', function () {
                    const isOpen = themeMenu.classList.toggle('show')
                    themeToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
                })

                document.addEventListener('click', function (event) {
                    if (!themeToggle.contains(event.target) && !themeMenu.contains(event.target)) {
                        closeCustomMenu('courseThemeToggle', 'courseThemeMenu')
                    }
                })

                themeToggle.dataset.bound = '1'
            }

            const blockedThemeToggle = document.getElementById('courseBlockedThemeToggle')
            const blockedThemeMenu = document.getElementById('courseBlockedThemeMenu')
            if (blockedThemeToggle && blockedThemeMenu && !blockedThemeToggle.dataset.bound) {
                blockedThemeToggle.addEventListener('click', function () {
                    const isOpen = blockedThemeMenu.classList.toggle('show')
                    blockedThemeToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
                })

                document.addEventListener('click', function (event) {
                    if (!blockedThemeToggle.contains(event.target) && !blockedThemeMenu.contains(event.target)) {
                        closeCustomMenu('courseBlockedThemeToggle', 'courseBlockedThemeMenu')
                    }
                })

                blockedThemeToggle.dataset.bound = '1'
            }

      const submitButton = document.getElementById('courseGeneratorSubmit')
      if (submitButton && !submitButton.dataset.bound) {
        submitButton.addEventListener('click', async function () {
          const targetGroup = document.getElementById('courseTargetGroupSelect')
          const taskCount = document.getElementById('courseTaskCountInput')

          const selectedThemes = getSelectedCourseThemes().slice()
          const blockedThemes = getBlockedCourseThemes().slice()
          const targetGroupValue = targetGroup ? String(targetGroup.value || 'fortgeschrittene').trim() : 'fortgeschrittene'
          const requestedCount = taskCount ? Number.parseInt(taskCount.value || '5', 10) : 5

          const curriculumAllowed = computeCurriculumAllowedSet()

                    if (!curriculumAllowed && !selectedThemes.length) {
                        window.alert('Bitte zuerst mindestens ein Thema hinzufügen.')
            return
          }
          if (curriculumAllowed && curriculumAllowed.size === 0) {
            window.alert('Für die aktuelle Klassen- und Lernbereichsauswahl sind noch keine Themen freigegeben.')
            return
          }

          submitButton.disabled = true
          const oldText = submitButton.textContent
          submitButton.textContent = 'Kurs wird erzeugt...'
          clearManualOpenFallback()

          const popup = window.open('https://liascript.github.io/LiveEditor/?/edit', '_blank')
          const popupBlocked = !popup

          try {
            const courseSource = await buildCourseSource(
                            selectedThemes,
                            blockedThemes,
              Number.isFinite(requestedCount) ? requestedCount : 5,
              targetGroupValue,
              curriculumAllowed
            )

            if (popupBlocked) {
              try {
                const targetUrl = await buildLiveEditorShowCodeUrl(courseSource)
                setManualOpenFallback(targetUrl, 'Auto-Tab wurde blockiert. Bitte hier klicken:')
              } catch (error) {
                await copyTextToClipboard(courseSource)
                setManualOpenFallback('https://liascript.github.io/LiveEditor/?/edit', 'Auto-Tab wurde blockiert. LiveEditor öffnen und Inhalt mit Strg+V einfügen:')
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
      const blocked = document.getElementById('blockedCategorySelectCustom')
      const operator = document.getElementById('operatorSelectCustom')
      const difficulty = document.getElementById('difficultySelect')
      const networking = document.getElementById('networkingSelect')

      if (!category || !blocked || !operator || !difficulty || !networking) return

      const parent = category.parentElement
      if (!parent) return

      parent.append(category, blocked, operator, difficulty, networking)
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
<!-- SCHULLIA_NAVBAR_FIX_SCRIPT_END -->`

const NAVBAR_FIX_STYLE = `<!-- SCHULLIA_NAVBAR_FIX_STYLE_START -->
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
  #blockedCategorySelectCustom,
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

    #chipsContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        justify-content: center;
    }

    .schullia-theme-chip-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        justify-content: center;
        min-height: 1.8rem;
    }

    .schullia-filter-chip {
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
        background: linear-gradient(135deg, #2cb8bb, #15888b);
        color: #ffffff;
        border: 1px solid rgba(17, 109, 111, 0.75);
        box-shadow: 0 6px 14px rgba(8, 34, 40, 0.18);
        padding: 0.43rem 0.75rem;
    }

    .schullia-filter-chip:hover,
    .schullia-filter-chip:focus {
        filter: brightness(1.05);
    }

    .schullia-filter-chip-blocked {
        background: linear-gradient(135deg, #db4b5f, #b52238);
        border-color: rgba(124, 15, 28, 0.82);
    }

  .card.shadow-sm .card-body > p:last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    align-items: flex-start;
  }

  .card.shadow-sm .card-body .badge {
    white-space: nowrap !important;
  }

  .card.shadow-sm .card-body .badge:empty {
    display: none !important;
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
    width: min(560px, 94vw);
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
    overflow-x: hidden;
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

  .schullia-course-conditional {
    display: none;
    gap: 0.4rem;
  }

  .schullia-course-radio-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  .schullia-course-radio {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-weight: 700;
    color: #dff6f6;
    cursor: pointer;
  }

  .schullia-course-lb-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 0.9rem;
    align-items: center;
  }

  .schullia-course-lb-item {
    display: inline-flex;
    align-items: center;
    gap: 0.32rem;
    font-weight: 700;
    color: #eefcfc;
    cursor: pointer;
  }

  .schullia-course-lb-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.28rem;
  }

  .schullia-lb-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.05rem;
    height: 1.05rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #2bd4d4;
    color: #06363a;
    font-size: 0.72rem;
    font-weight: 800;
    font-style: italic;
    line-height: 1;
    cursor: pointer;
    flex: 0 0 auto;
  }

  .schullia-lb-info:hover,
  .schullia-lb-info:focus {
    background: #5ce8e8;
    outline: none;
  }

  .schullia-lb-tooltip {
    position: absolute;
    left: 0;
    bottom: calc(100% + 0.4rem);
    z-index: 20;
    min-width: 11rem;
    max-width: 16rem;
    padding: 0.45rem 0.6rem;
    border-radius: 8px;
    background: rgba(8, 40, 44, 0.97);
    border: 1px solid rgba(133, 243, 243, 0.5);
    color: #eefcfc;
    font-size: 0.82rem;
    font-weight: 600;
    font-style: normal;
    line-height: 1.25;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transform: translateY(4px);
    transition: opacity 0.12s ease, transform 0.12s ease;
    pointer-events: none;
    white-space: normal;
  }

  .schullia-lb-tooltip.is-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .schullia-course-close {
    position: sticky;
    top: 0;
    justify-self: end;
    margin-bottom: -2.2rem;
    z-index: 5;
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
    #blockedCategorySelectCustom {
      flex: 0 0 calc((100% - 1%) / 2) !important;
      width: calc((100% - 1%) / 2) !important;
      min-width: 0;
      margin-top: 0 !important;
    }

    #operatorSelectCustom,
    #difficultySelect,
    #networkingSelect {
      flex: 0 0 calc((100% - 2%) / 3) !important;
      width: calc((100% - 2%) / 3) !important;
      min-width: 0;
      margin-top: 0 !important;
    }

    #categorySelectCustom {
      order: 1;
    }

    #blockedCategorySelectCustom {
      order: 2;
    }

    #operatorSelectCustom {
      order: 3;
    }

    #difficultySelect {
      order: 4;
    }

    #networkingSelect {
      order: 5;
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
<!-- SCHULLIA_NAVBAR_FIX_STYLE_END -->`

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

const CARD_DECORATION_SCRIPT = String.raw`${CARD_DECORATION_SCRIPT_START}
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

    const operatorAliasToKey = new Map([
      ['angeben', 'angeben'],
      ['ausfullen', 'angeben'],
      ['auswahlen', 'angeben'],
      ['ankreuzen', 'angeben'],
      ['ordnen', 'ordnen'],
      ['skizzieren', 'skizzieren'],
      ['zeichnen', 'zeichnen'],
      ['abschatzen', 'abschaetzen'],
      ['vergleichen', 'vergleichen'],
      ['aufstellen', 'aufstellen'],
      ['ermitteln', 'ermitteln_bestimmen'],
      ['bestimmen', 'ermitteln_bestimmen'],
      ['bestimme', 'ermitteln_bestimmen'],
      ['berechnen', 'berechnen'],
      ['planen', 'planen'],
      ['untersuchen', 'untersuchen'],
      ['ableiten', 'ableiten'],
      ['herleiten', 'herleiten'],
      ['beschreiben', 'beschreiben'],
      ['beschreibe', 'beschreiben'],
      ['erklaren', 'erklaeren'],
      ['erklaere', 'erklaeren'],
      ['erlautern', 'erlaeutern'],
      ['erortern', 'eroertern'],
      ['diskutieren', 'diskutieren'],
      ['beurteilen', 'beurteilen'],
      ['bewerten', 'bewerten'],
      ['begruenden', 'begruenden'],
      ['begrunden', 'begruenden'],
      ['interpretieren', 'interpretieren_deuten'],
      ['deuten', 'interpretieren_deuten'],
      ['analysieren', 'analysieren'],
      ['auswerten', 'auswerten'],
      ['darstellen', 'darstellen'],
    ])

    function normalize(value) {
      return String(value == null ? '' : value)
        .toLowerCase()
        .replace(/ß/g, 'ss')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\u00a0/g, ' ')
        .replace(/\\s+/g, ' ')
        .trim()
    }

    function getOperatorKey(label) {
      const normalized = normalize(label)
      return normalized ? operatorAliasToKey.get(normalized) || null : null
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
      let operatorKey = String(cardBody.dataset.schulliaOperatorKey || '').trim()

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

        const resolvedOperator = getOperatorKey(label)
        if (resolvedOperator) {
          operatorKey = operatorKey || resolvedOperator
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

      if (operatorKey) {
        cardBody.dataset.schulliaOperatorKey = operatorKey
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
    throw new Error('Konnte Design-Blöcke in ziel.html nicht eindeutig finden.')
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
    '<p class="card-text"><strong>In dieser Kachel befinden sich zusammengestellte Aufgaben zum Üben für Abschlussprüfungen.</strong></p>'
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
      `\n${targetParts.script}\n${targetParts.style}\n${NAVBAR_FIX_STYLE}\n${NAVBAR_FIX_SCRIPT_FINAL}\n${CARD_DECORATION_STYLE}\n${CARD_DECORATION_SCRIPT}\n</head>`
    )
  }

  // Rename category placeholder text globally, including script literals.
  html = html.replace(/Alle Kategorien/g, 'Alle Themen')
  html = html.replace(/alle kategorien/g, 'alle themen')

  return html
}

// Resolve a class label like "5", "7 HS", "10 RS", "12/13 GK", "11/12 LK"
// into a normalized curriculum class key ("5", "7HS", "10RS", "12GK", "11GK").
function resolveLehrplanClassKey(cell) {
  const c = String(cell || '').trim()
  let m = c.match(/(\d+)\s*HS/i)
  if (m) return m[1] + 'HS'
  m = c.match(/(\d+)\s*RS/i)
  if (m) return m[1] + 'RS'
  const gradeMatch = c.match(/(\d+)/)
  if (!gradeMatch) return null
  if (/GK/i.test(c)) return gradeMatch[1] + 'GK'
  if (/LK/i.test(c)) return gradeMatch[1] + 'LK'
  return gradeMatch[1]
}

// Parse Lehrplan.md at build time so the embedded curriculum stays in sync.
// Produces a structure keyed by school type:
//   { themes: { oberschule|bgy|gymnasium: { classKey: { lbKey: [themes] } } },
//     lbCount: { oberschule|bgy|gymnasium: { classKey: maxLbNumber } } }
function buildSachsenCurriculum() {
  try {
    const lehrplanPath = path.join(__dirname, 'Lehrplan.md')
    if (!fs.existsSync(lehrplanPath)) return null
    const md = fs.readFileSync(lehrplanPath, 'utf8')
    const themes = {}
    const lbCount = {}
    const lbTitles = {}
    let currentSchool = null
    md.split(/\r?\n/).forEach(function (rawLine) {
      const trimmed = rawLine.trim()
      const headerMatch = trimmed.match(/^#{1,6}\s+(.*)$/)
      if (headerMatch) {
        const title = headerMatch[1].toLowerCase()
        if (title.indexOf('berufliches gymnasium') !== -1) currentSchool = 'bgy'
        else if (title.indexOf('oberschule') !== -1) currentSchool = 'oberschule'
        else if (title.indexOf('gymnasium') !== -1) currentSchool = 'gymnasium'
        return
      }
      if (trimmed.indexOf('|') !== 0) return
      if (!currentSchool) return
      const cells = trimmed.split('|').slice(1, -1).map(function (c) { return c.trim() })
      if (cells.length < 3) return
      const klasseCell = cells[0]
      const lbCell = cells[1]
      const themenCell = cells[2]
      if (/Klasse\s*\/\s*Jahrgang|Klassenstufe/i.test(klasseCell)) return
      if (/^-+$/.test(klasseCell.replace(/[\s|]/g, ''))) return
      const classKey = resolveLehrplanClassKey(klasseCell)
      if (!classKey) return
      const themeList = themenCell.split(',').map(function (t) { return t.trim().toLowerCase() }).filter(Boolean)
      if (!themes[currentSchool]) themes[currentSchool] = {}
      if (!lbCount[currentSchool]) lbCount[currentSchool] = {}
      if (!lbTitles[currentSchool]) lbTitles[currentSchool] = {}
      if (!themes[currentSchool][classKey]) themes[currentSchool][classKey] = {}
      if (!lbTitles[currentSchool][classKey]) lbTitles[currentSchool][classKey] = {}
      const lbMatch = lbCell.match(/LB\s*(\d+)/i)
      if (lbMatch) {
        const lbNum = parseInt(lbMatch[1], 10)
        lbCount[currentSchool][classKey] = Math.max(lbCount[currentSchool][classKey] || 0, lbNum)
        const titleMatch = lbCell.match(/LB\s*\d+\s*:\s*(.+)$/i)
        if (titleMatch) {
          lbTitles[currentSchool][classKey][String(lbNum)] = titleMatch[1].trim()
        }
        if (themeList.length) {
          const key = String(lbNum)
          themes[currentSchool][classKey][key] = (themes[currentSchool][classKey][key] || []).concat(themeList)
        }
      } else if (themeList.length) {
        themes[currentSchool][classKey]['extra'] = (themes[currentSchool][classKey]['extra'] || []).concat(themeList)
      }
    })
    if (!Object.keys(themes).length) return null
    return { themes: themes, lbCount: lbCount, lbTitles: lbTitles }
  } catch (error) {
    return null
  }
}

const SACHSEN_CURRICULUM_DATA = buildSachsenCurriculum()
const NAVBAR_FIX_SCRIPT_FINAL = SACHSEN_CURRICULUM_DATA
  ? NAVBAR_FIX_SCRIPT.replace(
      /\/\* SCHULLIA_SACHSEN_LB_START \*\/[\s\S]*?\/\* SCHULLIA_SACHSEN_LB_END \*\//,
      '/* SCHULLIA_SACHSEN_LB_START */' + JSON.stringify(SACHSEN_CURRICULUM_DATA) + '/* SCHULLIA_SACHSEN_LB_END */'
    )
  : NAVBAR_FIX_SCRIPT

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
