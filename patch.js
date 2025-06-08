const fs = require('fs')
const path = require('path')

// Patch-Funktion aus vorheriger Antwort (angepasst für Node.js)
function patchIndexHtml(html) {
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

  // 3. Füge die Filterlogik für das neue Dropdown hinzu (analog zu addCategoryChip)
  // Füge die Funktion addDifficultyChip ein, falls sie noch nicht existiert
  if (!/function\s+addDifficultyChip\s*\(/.test(html)) {
    html = html.replace(
      /(<\/body>)/i,
      `<script>
function addDifficultyChip(value) {
  // Entferne alle bestehenden Difficulty-Chips
  const chipsContainer = document.getElementById('chipsContainer');
  const existing = chipsContainer.querySelectorAll('.difficulty-chip');
  existing.forEach(e => e.remove());

  if (!value) {
    filterCards();
    return;
  }

  // Erstelle Chip
  const chip = document.createElement('span');
  chip.className = 'badge rounded-pill bg-primary text-light me-2 difficulty-chip';
  chip.textContent = value;
  chip.style.cursor = 'pointer';
  chip.onclick = function() {
    chip.remove();
    document.getElementById('difficultySelect').value = '';
    filterCards();
  };
  chipsContainer.appendChild(chip);

  filterCards();
}

// Patchierte Filterfunktion: filtert nach Kategorie und Schwierigkeitsgrad
function filterCards() {
  const category = document.getElementById('categorySelect')?.value;
  const difficulty = document.getElementById('difficultySelect')?.value;
  const cards = document.querySelectorAll('.col-sm-6.col-md-4.col-lg-3.mb-3, h6.card-title');

  cards.forEach(card => {
    let show = true;
    if (category) {
      show = Array.from(card.querySelectorAll?.('.badge') ?? []).some(b =>
        b.textContent.trim().toLowerCase() === category.toLowerCase()
      );
    }
    if (show && difficulty) {
      show = Array.from(card.querySelectorAll?.('.badge') ?? []).some(b =>
        b.textContent.trim().toLowerCase() === difficulty.toLowerCase()
      );
    }
    card.style.display = show ? '' : 'none';
  });
}

// Patchiere addCategoryChip, damit sie auch filterCards aufruft
if (typeof addCategoryChip === 'function') {
  const orig = addCategoryChip;
  window.addCategoryChip = function(value) {
    orig(value);
    filterCards();
  };
} else {
  function addCategoryChip(value) {
    // Entferne alle bestehenden Category-Chips
    const chipsContainer = document.getElementById('chipsContainer');
    const existing = chipsContainer.querySelectorAll('.category-chip');
    existing.forEach(e => e.remove());

    if (!value) {
      filterCards();
      return;
    }

    // Erstelle Chip
    const chip = document.createElement('span');
    chip.className = 'badge rounded-pill bg-success text-light me-2 category-chip';
    chip.textContent = value;
    chip.style.cursor = 'pointer';
    chip.onclick = function() {
      chip.remove();
      document.getElementById('categorySelect').value = '';
      filterCards();
    };
    chipsContainer.appendChild(chip);

    filterCards();
  }
}
</script>
$1`
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
