const fs = require('fs')
const path = require('path')

// Patch-Funktion für index.html
function patchIndexHtml(html) {
  html = html.replace(
    '<option value="" selected>All categories</option>',
    `<option value="" selected>Alle Kategorien</option>`
  )

  // 1. Entferne Schwierigkeitsgrade aus dem ursprünglichen Dropdown
  const difficultyOptions = [
    'sehr leicht',
    'leicht',
    'mittel',
    'schwer',
    'sehr schwer',
    'sehr hoch',
    'hoch',
    'normal',
    'niedrig',
    'sehr niedrig',
  ]
  html = html.replace(
    /(<select[^>]*id="categorySelect"[^>]*>)([\s\S]*?)(<\/select>)/,
    (match, start, options, end) => {
      // Entferne die Schwierigkeitsgrade aus den Optionen
      const filteredOptions = options.replace(
        new RegExp(
          `<option value="(?:${difficultyOptions.join(
            '|'
          )})"[^>]*>.*?<\\/option>`,
          'gi'
        ),
        ''
      )
      return start + filteredOptions + end
    }
  )

  // 2. Füge ein neues Dropdown für Schwierigkeitsgrade nach dem Kategorie-Dropdown ein
  const difficultyDropdown = `
<select id="difficultySelect" class="form-select mt-2" aria-label="Schwierigkeitsgrad wählen" onchange="addDifficultyChip(this.value)">
  <option value="" selected>Alle Schwierigkeitsgrade</option>
  <option value="sehr leicht">sehr leicht</option>
  <option value="leicht">leicht</option>
  <option value="mittel">mittel</option>
  <option value="schwer">schwer</option>
  <option value="sehr schwer">sehr schwer</option>
</select>
`
  html = html.replace(
    /(<select[^>]*id="categorySelect"[^>]*>[\s\S]*?<\/select>)/,
    `$1${difficultyDropdown}`
  )

  // 2. Füge ein neues Dropdown für Vernetzungsgrade nach dem Kategorie-Dropdown ein
  const networkingDropdown = `
   <select id="networkingSelect" class="form-select mt-2" aria-label="Vernetzungsgrad wählen" onchange="addNetworkingChip(this.value)">
     <option value="" selected>Alle Vernetzungsgrade</option>
     <option value="sehr niedrig">sehr niedrig</option>
     <option value="niedrig">niedrig</option>
     <option value="normal">normal</option>
     <option value="hoch">hoch</option>
     <option value="sehr hoch">sehr hoch</option>
   </select>
   `
  html = html.replace(
    /(<select[^>]*id="categorySelect"[^>]*>[\s\S]*?<\/select>)/,
    `$1${networkingDropdown}`
  )

  // 3. Ersetze das bisherige Script durch das gewünschte Script
  html = html.replace(
    /<script>[\s\S]*?<\/script>/i,
    `<script>
      // Globale Variable zum Speichern der ausgewählten Kategorien
      window.selectedCategories = []
      window.selectedDifficulty = ''
      window.selectedNetworking = ''

      // Fügt einen Chip hinzu, wenn eine Kategorie gewählt wurde
      function addCategoryChip(category) {
        if (!category) return // falls "All categories" gewählt wurde, nichts tun
        if (window.selectedCategories.indexOf(category) === -1) {
          window.selectedCategories.push(category)
          // Option im Select-Menü deaktivieren
          document.querySelector(
            '#categorySelect option[value="' + category + '"]'
          ).disabled = true
          updateChipsDisplay()
          filterCards()
        }
        // Setze das Select-Element zurück
        document.getElementById('categorySelect').value = ''
      }

      function addDifficultyChip(category) {
        window.selectedDifficulty = category
        filterCards()
      }

      function addNetworkingChip(category) {
        window.selectedNetworking = category
        filterCards()
      }

      // Entfernt einen Chip
      function removeCategoryChip(category) {
        const index = window.selectedCategories.indexOf(category)
        if (index > -1) {
          window.selectedCategories.splice(index, 1)
          // Option im Select-Menü wieder aktivieren
          document.querySelector(
            '#categorySelect option[value="' + category + '"]'
          ).disabled = false
          updateChipsDisplay()
          filterCards()
        }
      }

      // Aktualisiert die Anzeige der Chips
      function updateChipsDisplay() {
        const chipsContainer = document.getElementById('chipsContainer')
        chipsContainer.innerHTML = ''
        window.selectedCategories.forEach(function (cat) {
          const chip = document.createElement('span')
          chip.className = 'badge rounded-pill bg-primary me-2'
          chip.style.cursor = 'pointer'
          chip.style.fontSize = '1rem'
          chip.textContent = cat + ' ×'
          chip.onclick = function () {
            removeCategoryChip(cat)
          }
          chipsContainer.appendChild(chip)
        })
      }

      function filterCards() {
        const cards = document.querySelectorAll('div[data-category]')
        cards.forEach(function (card) {
          // Falls keine Filterkategorien ausgewählt wurden, zeige alle Karten
          if (
            window.selectedCategories.length === 0 &&
            window.selectedDifficulty === '' &&
            window.selectedNetworking === ''
          ) {
            card.parentNode.style.display = 'block'
            return
          }
          // Zerlege die im data-Attribut hinterlegten Kategorien
          const cardCategories = card.dataset.category.split('|')
          // Prüfe, ob alle ausgewählten Kategorien in der Karte vorhanden sind
          let show = window.selectedCategories.every(function (cat) {
            return cardCategories.indexOf(cat) !== -1
          })
          if (show) {
            if (
              (window.selectedDifficulty === '' ||
              cardCategories.indexOf(window.selectedDifficulty) !== -1) &&
              (window.selectedNetworking === '' ||
              cardCategories.indexOf(window.selectedNetworking) !== -1)
            ) {
              // Wenn eine Schwierigkeit ausgewählt ist, prüfe auch diese
              card.parentNode.style.display = 'block'
            } else {
              card.parentNode.style.display = 'none'
            }
          } else {
            card.parentNode.style.display = 'none'
          }
        })
      }
    </script>`
  )

  // 4. Füge Sterne zu jeder Karte anhand des Schwierigkeitsgrads hinzu (jetzt im .card-body)
  html = html.replace(
    /(<div class="card-body" style="transform[^>]*>)([\s\S]*?)(<p>([\s\S]*?)(sehr leicht|leicht|mittel|schwer|sehr schwer)([\s\S]*?)<\/p>)/g,
    (
      match,
      cardBodyStart,
      cardBodyContent,
      pBlock,
      beforeDiff,
      diffText,
      afterDiff
    ) => {
      // Schwierigkeitsgrad bestimmen
      const difficultyOrder = [
        ['sehr schwer', 5],
        ['sehr leicht', 1],
        ['leicht', 2],
        ['mittel', 3],
        ['schwer', 4],
      ]
      let found = ['sehr leicht', -1] // Standardwert, falls kein Schwierigkeitsgrad gefunden wird
      for (const diff of difficultyOrder) {
        if (pBlock.includes(diff[0])) {
          found = diff
          break
        }
      }

      if (found[1] === -1) {
        // Wenn kein Schwierigkeitsgrad gefunden wurde, gib den Inhalt unverändert zurück
        return match
      }

      const starsCount = found[1]

      // Sterne-HTML generieren (angepasster Stil)
      const star = '<span style="color:gold;font-size:1.2em;">★</span>'
      const starGray = '<span style="color:#ccc;font-size:1.2em;">★</span>'
      const starsHtml =
        '<div style="position:absolute;top:8px;right:16px;margin-bottom:57px;">' +
        star.repeat(starsCount) +
        starGray.repeat(5 - starsCount) +
        '</div><br>'

      // Sterne als erstes Element im card-body einfügen
      return cardBodyStart + starsHtml + cardBodyContent + pBlock
    }
  )

  // 5. Füge Vernetzungsgrad-Bild vor den Kartentitel ein (robust für beliebige Attribute)
  html = html.replace(
    /(<div[^>]*data-category="([^"]+)"[^>]*>[\s\S]*?<h6 class="card-title">)([\s\S]*?)(<\/h6>)/g,
    (match, before, dataCategory, title, h6End) => {
      const networkingOrder = [
        ['sehr niedrig', 1],
        ['niedrig', 2],
        ['normal', 3],
        ['hoch', 4],
        ['sehr hoch', 5],
      ]
      let found = null
      for (const [grad, num] of networkingOrder) {
        if (dataCategory.split('|').map(s => s.trim()).includes(grad)) {
          found = num
          break
        }
      }
      if (found) {
        return `${before}<img src="pic/${found}.png" style="height: 20px; margin-right: 4px;"> ${title}${h6End}`
      } else {
        return match
      }
    }
  )

  for (const diff of [
    'sehr leicht',
    'sehr schwer',
    'mittel',
    'leicht',
    'schwer',
    'sehr hoch',
    'hoch',
    'normal',
    'sehr niedrig',
    'niedrig',
  ]) {
    // 5. Entferne die Schwierigkeitsgrade aus den Karten
    html = html.replace(
      new RegExp(
        `<span style="display: inline; white-space: break-spaces;" class="badge rounded-pill bg-light text-dark">${diff}</span>`,
        'g'
      ),
      ''
    )
  }

  return html
}

// Einlesen und Überschreiben von index.html
const indexPath = path.join(__dirname, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')
const patchedHtml = patchIndexHtml(html)
fs.writeFileSync(indexPath, patchedHtml, 'utf8')
console.log('index.html wurde gepatcht.')
