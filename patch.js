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

  // 3. Ersetze das bisherige Script durch das gewünschte Script
  html = html.replace(
    /<script>[\s\S]*?<\/script>/i,
    `<script>
      // Globale Variable zum Speichern der ausgewählten Kategorien
      window.selectedCategories = []
      window.selectedDifficulty = ''

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
            window.selectedDifficulty === ''
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
              window.selectedDifficulty === '' ||
              cardCategories.indexOf(window.selectedDifficulty) !== -1
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

  return html
}

// Einlesen und Überschreiben von index.html
const indexPath = path.join(__dirname, 'index.html')
const html = fs.readFileSync(indexPath, 'utf8')
const patchedHtml = patchIndexHtml(html)
fs.writeFileSync(indexPath, patchedHtml, 'utf8')
console.log('index.html wurde gepatcht.')
