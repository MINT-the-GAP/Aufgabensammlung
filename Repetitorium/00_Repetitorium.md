<!--

version:  0.0.1
language: de
narrator: Deutsch Female


logo:     https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/logo.png
email:    info@bildung-bedeutet-freiheit.de

tags: Repetitorium

comment: Hier entsteht ein mathematisches Repetitorium in LiaScript. https://mint-the-gap.github.io/Aufgabensammlung/

author: Martin Lommatzsch



@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}






@onload
window.segments = window.segments || {}

window.toggleSegments = function (uid, i) {
  segments[uid][i] = !segments[uid][i]
}

window.rects    = window.rects    || {}
window.rectDims = window.rectDims || {}

window.toggleRect = function (uid, i) {
  rects[uid][i] = !rects[uid][i]}
@end

@circleQuiz: @circleQuiz_(@uid,@0)

@circleQuiz_
<script modify="false">
const segments = @input(`segments-@0`);
const cx = 145, cy = 150, r = 140;

const circleFill = "white";  // Hintergrundfarbe Kreis
const lineColor  = "black";          // Linienfarbe
const segmentFill = "orange";     // Füllfarbe aktiver Segmente

const step = 360 / segments;
const startOffset = -90;

let lines = "";
let slices = "";

if (segments > 1) {
  for (let i = 0; i < segments; i++) {
    const a0 = (startOffset + step * i) * Math.PI / 180;
    const a1 = (startOffset + step * (i + 1)) * Math.PI / 180;

    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);

    const largeArc = (step > 180) ? 1 : 0;
    const sweep = 1;

    const isActive = window.segments['@0'][i];
    slices += `
      <path class="slice@0 slice@0 ${isActive ? 'active' : ''}"
            d="M ${cx},${cy} L ${x0},${y0} A ${r},${r} 0 ${largeArc},${sweep} ${x1},${y1} Z"
            onclick="
              this.classList.toggle('active');
              toggleSegments('@0', ${i});
            ">
      </path>
    `;

    lines += `<line x1="${cx}" y1="${cy}" x2="${x0}" y2="${y0}" stroke="${lineColor}" stroke-width="2"/>`;
  }
} else {
    const isActive = window.segments['@0'][0];
    slices = `
    <circle class="slice@0 ${isActive ? 'active' : ''}"
            cx="${cx}" cy="${cy}" r="${r}"
            onclick="this.classList.toggle('active'); toggleSegments('@0', 0);">
    </circle>
  `;
}

`HTML:
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300" 
     style="--line:${lineColor}; --segment:${segmentFill}">
  <style>
    .slice@0 { fill: transparent; cursor: pointer; }
    .slice@0.active { fill: var(--segment); }
  </style>

  <circle cx="${cx}" cy="${cy}" r="${r}" stroke="${lineColor}" stroke-width="2" fill="${circleFill}"/>
  ${slices}
  ${lines}
</svg>
`
</script>






<script run-once modify="false" input="range" output="segments-@0" value="1" min="1" max="32" input-always-active>
if (!segments["@0"] || @input != segments["@0"].length) {
  segments["@0"] = Array(@input).fill(false);
}

@input
</script>

[[!]]
<script>
@1 === ((window.segments["@0"].filter(i => i).length) / window.segments["@0"].length)
</script>
@end











@rectQuiz: @rectQuiz_(@uid,@0)

@rectQuiz_
<script modify="false">
/*
  WICHTIG:
  - Rows/Cols kommen NUR aus window.rectDims['@0'].
  - Die folgenden zwei Dummy-Zeilen dienen ausschließlich als REAKTIONS-TRIGGER,
    damit LiaScript das SVG neu rendert, wenn die Slider bewegt werden.
    Sie werden NICHT als Datenquelle verwendet.
*/
const _rowsTrigger = @input(`rows-@0`);
const _colsTrigger = @input(`cols-@0`);

/* Quelle der Wahrheit: globale Variable */
const dims = window.rectDims['@0'] || { rows: 1, cols: 1 };
const rows = Math.max(1, +dims.rows || 1);
const cols = Math.max(1, +dims.cols || 1);

const W = 300, H = 300, padding = 8;
const usableW = W - 2*padding, usableH = H - 2*padding;


const bgFill     = "white";      // Hintergrundfarbe der Fläche
const lineColor  = "black";  // Linienfarbe
const cellFill   = "orange";    // Füllfarbe aktiver Zellen
const cellGap    = 0;            // Lücke zwischen Zellen (px)

const rw = usableW / cols;
const rh = usableH / rows;

/* Auswahlarray-Größe absichern */
const total = rows * cols;
if (!window.rects['@0'] || window.rects['@0'].length !== total) {
  window.rects['@0'] = Array(total).fill(false);
}

let gridRects = "";
let gridLines = "";

/* Zellen (anklickbar) */
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const i = r*cols + c;
    const x = padding + c*rw + cellGap/2;
    const y = padding + r*rh + cellGap/2;
    const w = rw - cellGap;
    const h = rh - cellGap;

    const isActive = window.rects['@0'][i];

    gridRects += `
      <rect class="cell@0 ${isActive ? 'active' : ''}"
            x="${x}" y="${y}" width="${Math.max(0,w)}" height="${Math.max(0,h)}"
            onclick="this.classList.toggle('active'); toggleRect('@0', ${i});">
      </rect>
    `;
  }
}

/* Gitterlinien */
for (let r = 0; r <= rows; r++) {
  const y = padding + r*rh;
  gridLines += `<line x1="${padding}" y1="${y}" x2="${W-padding}" y2="${y}" stroke="${lineColor}" stroke-width="2"/>`;
}
for (let c = 0; c <= cols; c++) {
  const x = padding + c*rw;
  gridLines += `<line x1="${x}" y1="${padding}" x2="${x}" y2="${H-padding}" stroke="${lineColor}" stroke-width="2"/>`;
}

`HTML:
<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"
     style="--line:${lineColor}; --cell:${cellFill}">
  <style>
    .cell@0 { fill: transparent; cursor: pointer; }
    .cell@0.active { fill: var(--cell); }
  </style>

  <rect x="0" y="0" width="${W}" height="${H}" fill="${bgFill}" stroke="${lineColor}" stroke-width="2"/>
  ${gridRects}
  ${gridLines}
</svg>
`
</script>

<script run-once modify="false" input="range" output="rows-@0" value="1" min="1" max="20" input-always-active>
/* Initialisieren, falls nötig */
window.rectDims = window.rectDims || {};
const current = window.rectDims['@0'] || { rows: 1, cols: 1 };
const newRows = Math.max(1, +@input || 1);
const cols    = Math.max(1, +current.cols || 1);

window.rectDims['@0'] = { rows: newRows, cols };

/* Auswahlarray-Größe anpassen */
window.rects = window.rects || {};
const total = newRows * cols;
if (!window.rects['@0'] || window.rects['@0'].length !== total) {
  window.rects['@0'] = Array(total).fill(false);
}

/* @input zurückgeben (Anzeige im UI), aber NICHT als Logikquelle genutzt */
@input
</script>

<script run-once modify="false" input="range" output="cols-@0" value="1" min="1" max="20" input-always-active>
window.rectDims = window.rectDims || {};
const current = window.rectDims['@0'] || { rows: 1, cols: 1 };
const newCols = Math.max(1, +@input || 1);
const rows    = Math.max(1, +current.rows || 1);

window.rectDims['@0'] = { rows, cols: newCols };

/* Auswahlarray-Größe anpassen */
window.rects = window.rects || {};
const total = rows * newCols;
if (!window.rects['@0'] || window.rects['@0'].length !== total) {
  window.rects['@0'] = Array(total).fill(false);
}

/* @input zurückgeben (Anzeige im UI), aber NICHT als Logikquelle genutzt */
@input
</script>

[[!]]
<script>
@1 === (
  (window.rects["@0"].filter(i => i).length) /
  Math.max(1, window.rects["@0"].length)
)
</script>
@end

















import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md


-->




# Repetitorium der Mathematik


{{|>}}
*******************************

> "Die Bildung kommt nicht vom Lesen, sondern vom Nachdenken über das Gelesene." \
-Carl Hilty


> "Gebildet ist der Mensch, der die höchsten Ergebnisse des Geistes in physiologische Reflexe umformt." \
-Nicolás Gómez Dávila



{{|>}} Das Wort „Mathematik“ geht auf das griechische mathema zurück, was so viel bedeutet wie „das, was man lernt“ oder „die Wissenschaft des Lernens“. Schon dieser Ursprung deutet an, dass Mathematik immer eng mit Erkenntnis und Bildung verbunden war. Während die frühen Hochkulturen in Mesopotamien, Ägypten oder China praktische Verfahren entwickelten, etwa zum Rechnen mit großen Zahlen, zum Planen von Bauwerken oder zur Berechnung des Kalenders, gingen die Griechen einen Schritt weiter: Sie suchten nach allgemeinen Regeln und Beweisen. Mathematik wurde zur Wissenschaft, die nicht nur praktische Aufgaben löst, sondern auch grundlegende Strukturen und Muster sichtbar macht.


{{|>}} Bis heute prägt uns dieses doppelte Gesicht der Mathematik: Einerseits ist sie ein Werkzeug, mit dem wir Probleme in Naturwissenschaft, Technik oder Wirtschaft bewältigen. Andererseits ist sie eine Sprache der Strukturen, die unabhängig von der Wirklichkeit gilt. Ob in der Algebra, Geometrie oder Stochastik – Mathematik lädt uns ein, Zusammenhänge zu entdecken, präzise zu denken und die Welt aus einer besonderen Perspektive zu betrachten.
*******************************


## Wichtige Hinweise




{{|>}}
*******************************

    Dieses Repetitorium der Mathematik ist aus der Motivation heraus entstanden, den naturwissenschaftlichen Unterricht an Schulen zu erleichtern. Die ersten Kapitel führen grundlegende mathematische „Vokabeln“, Zahleneigenschaften, Rechenoperationen und gebräuchliche Abkürzungen ein. Da viele Schülerinnen und Schüler durch die gesellschaftlich verbreitete Meinung, Mathematik und Naturwissenschaften seien „schwierig“, zu Ausreden und geringerer Leistungsbereitschaft neigen, soll in diesem Buch bewusst auf die Einfachheit und Klarheit der mathematischen Sprache hingewiesen werden. Diese Einfachheit erschließt sich jedoch oft erst nach der Schulzeit: Mathematik lebt von eindeutig definierten Begriffen, deren Abkürzungen und Symbolen. Anders als in Sprachen wie Deutsch oder Englisch ergibt sich ihre Bedeutung nicht erst aus dem Satzkontext. Zudem gibt es in der Mathematik im Gegensatz zu anderen Sprachen keine Ausnahmen von den Regeln.

    {{|>}} Das Buch versteht sich als Leitfaden für den Mathematikunterricht und als Wiederholungswerkzeug für die naturwissenschaftlichen Fächer. Es wird kontinuierlich weiterentwickelt und am Verständnis der Lernenden ausgerichtet. Zum Verständnis genügt der sichere Umgang mit Zahlen und Grundrechenarten, sodass das Werk für alle Schülerinnen und Schüler weiterführender Schulen geeignet ist. Es wird deutlich, dass mathematisches Verständnis eng mit der korrekten Verwendung definierter Begriffe verbunden ist. Daher sollte jede eingeführte „Vokabel“ verinnerlicht werden.

    {{|>}} Zu jedem Abschnitt gibt es Übungsaufgaben, deren Lösungen im Anhang stehen. Die Aufgaben sind so gestaltet, dass sie das Verständnis überprüfen und vertiefen; sie sollten vollständig bearbeitet und erst danach mit den Lösungen verglichen werden. In der Geometrie werden auch Zeichenaufgaben gestellt, zu denen im Anhang keine fertigen Zeichnungen enthalten sind. Manche Aufgaben erfordern Kenntnisse aus späteren Kapiteln; diese können nach Erwerb des entsprechenden Wissens bearbeitet werden, um vorhandene Kenntnisse zu festigen und zu erweitern. Oft steigert sich der Schwierigkeitsgrad innerhalb einer Aufgabe, sodass binnendifferenzierte Förderung möglich ist und jede Schülerin und jeder Schüler gefordert und gefördert werden kann.

    {{|>}} Alle *leicht schräg/kursiv* markierten Begriffe sind im mathematischen Wörterverzeichnis im Anhang erläutert. Dieser Abschnitt soll den Umgang mit der mathematischen Sprache erleichtern und deren logischen Aufbau verdeutlichen.

    {{|>}} Abschließend sei angemerkt, dass in Zukunft deutlich mehr Aufgaben mit Lösungen ergänzt werden, darunter auch solche, die auf weiter hinten behandelten Themen basieren. Hierzu werden Querverweise angegeben, um je nach Vorwissen auch komplexere Aufgaben bearbeiten zu können. Grundsätzlich gilt: Alle fehlerfreien Rechenwege sind zugelassen – entscheidend ist das korrekte Ergebnis.


> {{|>}} Diese Version kann inhaltliche und sprachliche Tippfehler enthalten und hat somit keinen Anspruch auf Richtigkeit. Außerdem kann nicht gewährleistet werden, dass der "Lehrplan" jedes Bundeslandes abgedeckt ist.


$\; $

Einige Themengebiete der Mathematik sind besonders essentiell für ein grundlegendes Verständnis der Mathematik. In diesem Buch werden nach der Einführung diese Themen immer wieder in Aufgaben oder Erklärungen vorkommen. Die Themen sind in der nachfolgenden Auflistung nach Wichtigkeit geordnet. In Klammern sind die Themenbereich beschrieben, die mit dem zentralen Thema direkt verknüpft sind:


- Bruchrechnung
- Äquivalenzumformung
- Einsetzungsverfahren
- Funktionen
- Trigonometrie (Dreiecke)
- Einheiten (Potenzen) 
 
Ohne das Verständnis dieser Themenbereiche lassen sich weiterführende Themen nur schwer erschließen. Wenn diese Themen nicht verinnerlicht wurden, sollten diese weiter erschlossen werden, da im Kern nahezu alle Aufgaben letztendlich auf diesen Grundprinzipien basieren.


*******************************

































































































## Mengen

- Link [Erklärungen zu Mengen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/00_00_01_Mengen.md)
- Link [Übungsaufgaben zu Mengen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/00_00_01_MengenA.md)






## Algebraische Grundlagen

{{|>}}
*******************************

Um den naturwissenschaftlichen Unterricht und mathematischen Erklärungen besser folgen zu können, müssen die Begrifflichkeiten der *Algebra* geklärt werden. Dazu werden im Laufe dieses Kapitels die wichtigsten mathematischen Vokabeln, Abkürzungen und Rechenvorschriften erläutert.


{{|>}} Der Begriff *Algebra* stammt aus dem Arabischen: al-ǧabr bedeutet so viel wie „das Wiederherstellen“ oder „das Ergänzen“. Geprägt wurde er im 9. Jahrhundert durch den persischen Gelehrten Muḥammad ibn Mūsā al-Ḫwārizmī in seinem Werk al-kitāb al-muḫtaṣar fī ḥisāb al-ǧabr wa’l-muqābala („Das kurzgefasste Buch über die Rechenverfahren durch Ergänzen und Ausgleichen“). Darin systematisierte er die Lösung *linearer* und *quadratischer* *Gleichungen* – ein entscheidender Schritt, um Rechnen mit Unbekannten zu einer eigenen Disziplin zu machen.

{{|>}} Die Wurzeln der *Algebra* reichen jedoch weit zurück: Bereits die Babylonier (um 1800 v. Chr.) lösten quadratische Probleme mit geometrischen Methoden, die Griechen entwickelten Proportionenlehre und Zahlentheorie, und indische Mathematiker führten die symbolische Behandlung von Unbekannten weiter aus. Al-Ḫwārizmīs Werk verband diese Traditionen, prägte den Namen und beeinflusste die Entwicklung der *Algebra* in Europa nachhaltig, insbesondere nach Übersetzungen ins Lateinische im 12. Jahrhundert.

*******************************


---

---

<h3> 1. Zahlen und Ziffern </h3>


- Link [Erklärungen zu Zahlen und Ziffern](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_00_01_ZiffernZahlen.md)
- Link [Übungsaufgaben zu Zahlen und Ziffern](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_00_01_ZiffernZahlenA.md)

---


<h3> 2. Terme und Gleichungen </h3>

- Link [Erklärungen zu Termen und Gleichungen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_00_02_TermeGleichung.md)
- Link [Übungsaufgaben zu Termen und Gleichungen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_00_02_TermeGleichungA.md)


---


<h3> 3. Runden </h3>

- Link [Erklärungen zum Runden](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_01_05_Runden.md)
- Link [Übungsaufgaben zum Runden](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_05_RundenA.md)


---


<h3> 4. Addition </h3>

- Link [Erklärungen zur Addition](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_01_01_Addition.md)
- Link [Übungsaufgaben zur Addition](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_01_AdditionA.md)


---


<h3> 5. Subtraktion </h3>

- Link [Erklärungen zur Subtraktion](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_01_02_Subtraktion.md)
- Link [Übungsaufgaben zur Subtraktion](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_02_SubtraktionA.md)


---


<h3> 6. Multiplikation </h3>

- Link [Erklärungen zur Multiplikation](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_01_03_Multiplikation.md)
- Link [Übungsaufgaben zur Multiplikation](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_03_MultiplikationA.md)


---


<h3> 7. Division </h3>

- Link [Erklärungen zur Division](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_01_04_Division.md)
- Link [Übungsaufgaben zur Division](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_04_DivisionA.md)


---

<h3> 8. Grundrechenarten </h3>

- Link [Übungsaufgaben zu Grundrechenarten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_01_06_MixA.md)


---


<h3> 9. Teilbarkeiten </h3>

- Link [Erklärungen zu Teilbarkeiten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_03_01_Teilbarkeiten.md)
- Link [Übungsaufgaben zu Teilbarkeiten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_03_01_TeilbarkeitenA.md)



---




<h3> 10. Bruchrechnung </h3>


- Link [Erklärungen zur Bruchrechnung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_04_01_Bruchrechnung.md)
- Link [Übungsaufgaben zur Bruchrechnung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_04_01_BruchrechnungA.md)


---



<h3> 11. Dezimalzahlen </h3>


- Link [Erklärungen zu Dezimalzahlen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_04_01_Bruchrechnung.md)
- Link [Übungsaufgaben zu Dezimalzahlen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_04_01_BruchrechnungA.md)


---


<h3> 12. Variablen und zum Einsetzungsverfahren </h3>



- Link [Erklärungen zu Variablen und zum Einsetzungsverfahren](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_06_01_Einsetzen.md)
- Link [Übungsaufgaben zu Variablen und zum Einsetzungsverfahren](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_06_01_EinsetzenA.md)


---



<h3> 13. Prozentrechnung </h3>



- Link [Erklärungen zur Prozentrechnung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_09_01_Prozent.md)
- Link [Übungsaufgaben zur Prozentrechnung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_09_01_ProzentA.md)


---



<h3> 14. Negative Zahlen </h3>


- Link [Erklärungen zu negativen Zahlen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_10_01_negativeZahlen.md)
- Link [Übungsaufgaben zu negativen Zahlen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_10_01_negativeZahlenA.md)




---



<h3> 15. Kommutativ- und Assoziativgesetz </h3>

- Link [Erklärungen zum Kommutativ- und Assoziativgesetz](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_06_02_KommuAsso.md)


---


<h3> 16. Distributivgesetz </h3>

- Link [Erklärungen zum Distributivgesetz](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_06_03_Distributiv.md)



---



<h3> 17. Potenzen und Wurzeln </h3>


- Link [Erklärungen zu Potenzen und Wurzeln](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_07_01_Potenzen.md)
- Link [Übungsaufgaben zu Potenzen und Wurzeln](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_07_01_PotenzenA.md)



---


<h3> 18. Logarithmen </h3>

- Link [Erklärungen zum Distributivgesetz](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_11_01_Logarithmen.md)




---



<h3> 19. Äquivalenzumformung </h3>


- Link [Erklärungen zur Äquivalenzumformung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_12_01_Aequivalenzumformung.md)
- Link [Übungsaufgaben zur Äquivalenzumformung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_12_01_AequivalenzumformungA.md)




---



<h3> 20. Quadratische Ergänzung </h3>


- Link [Erklärungen zur Quadratische Ergänzung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_13_01_QuadErg.md)
- Link [Übungsaufgaben zur Quadratische Ergänzung](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_13_01_QuadErgA.md)







---



<h3> 21. Gleichungssysteme </h3>


- Link [Erklärungen zu Gleichungssysteme](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_14_01_Gleichungssysteme.md)
- Link [Übungsaufgaben zu Gleichungssysteme](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_14_01_GleichungssystemeA.md)





---



<h3> 22. Ungleichungen </h3>


- Link [Erklärungen zu Ungleichungen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_15_01_Ungleichungen.md)
- Link [Übungsaufgaben zu Ungleichungen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_15_01_UngleichungenA.md)


---



<h3> 23. Fakultäten und Binomialkoeffizienten </h3>


- Link [Erklärungen zu Fakultäten und Binomialkoeffizienten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_16_01_FakulBinomial.md)
- Link [Übungsaufgaben zu Fakultäten und Binomialkoeffizienten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_16_01_FakulBinomialA.md)




---



<h3> 24. Zahlensysteme </h3>


- Link [Erklärungen zu Fakultäten und Binomialkoeffizienten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_17_01_Zahlensysteme.md)



---



<h3> 25. Einheiten </h3>


- Link [Erklärungen zu Einheiten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_08_01_Einheiten.md)
- Link [Übungsaufgaben zu Einheiten](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/01_08_01_EinheitenA.md)



---



<h3> 26. Verhältnisse </h3>


- Link [Erklärungen zu Verhältnissen](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/01_04_02_Verhaltnisse.md)




























## Geometrie


{{|>}}
**************************
Die *Geometrie* gehört zu den ältesten Bereichen der Mathematik. Schon vor tausenden von Jahren mussten Menschen *Flächen* vermessen, Felder abgrenzen oder Bauwerke planen – Aufgaben, die ohne geometrisches Wissen kaum zu lösen gewesen wären. Das Wort „*Geometrie*“ stammt aus dem Griechischen und bedeutet wörtlich „Erdmessung“ (geo = Erde, metrein = messen). Ursprünglich diente sie also ganz praktisch dazu, Land zu vermessen, beispielsweise nach den jährlichen Nilüberschwemmungen im alten Ägypten.


{{|>}} Doch bald entwickelte sich aus diesen praktischen Anfängen eine eigene Wissenschaft: Griechische Mathematiker wie Thales oder Euklid begannen, allgemeine Regeln und Beweise aufzustellen. Besonders Euklids „*Elemente*“ prägten über Jahrhunderte unser Verständnis von *Geometrie* und machten sie zu einem systematischen Gebiet der Mathematik.


{{|>}} Heute umfasst die *Geometrie* weit mehr als nur das Vermessen von *Längen*, *Flächen* oder *Körpern*. Sie hilft uns, Formen zu verstehen, Zusammenhänge zwischen *Figuren* zu entdecken und Strukturen zu beschreiben – von einfachen *Dreiecken* bis hin zu modernen Anwendungen in Architektur, Technik oder Computergrafik. *Geometrie* verbindet Anschauung und Logik und eröffnet damit einen Zugang zu einem der anschaulichsten und zugleich grundlegendsten Teile der Mathematik.
**************************










































## Funktionen


{{|>}}
****************************
Das Wort „*Funktion*“ stammt vom lateinischen fungi, was so viel bedeutet wie „verrichten“ oder „ausführen“. In der Mathematik beschreibt eine *Funktion* eine *eindeutige* *Zuordnung*: Jedem Eingangswert wird genau ein Ausgangswert zugeordnet. Diese Idee ist erstaunlich einfach, aber von grundlegender Bedeutung.

{{|>}} Die Vorstellung, Größen in Abhängigkeit voneinander zu betrachten, entstand aus praktischen Fragen: Wie hängt der Weg eines fahrenden Autos von der Zeit ab? Wie verändert sich der *Flächeninhalt* eines *Quadrats*, wenn die *Seitenlänge* wächst? Solche Zusammenhänge lassen sich durch *Funktionen* beschreiben. Bereits im 17. Jahrhundert tauchte der Begriff in der Arbeit von Leibniz und anderen Mathematikern auf; später machte Leonhard Euler die Funktionsschreibweise allgemein verständlich und nutzbar.

{{|>}} Heute bilden *Funktionen* das Rückgrat vieler mathematischer Gebiete. Sie erlauben uns, Abhängigkeiten in Formeln, Tabellen oder Graphen darzustellen und damit Strukturen sichtbar zu machen. Ob lineare Zusammenhänge, Wachstumsmodelle oder komplizierte nichtlineare Systeme – die Arbeit mit Funktionen ist ein zentrales Werkzeug, um die Welt mathematisch zu erfassen und zu erklären.
****************************


















## Trignometrie










## Beweisverfahren










## Differentiation und Integration


{{|>}}
****************************
Der Begriff „*Analysis*“ kommt aus dem Griechischen und bedeutet „Auflösung“ oder „Zerlegung“. Gemeint ist damit das Untersuchen und Zerlegen von Problemen in kleinere, verständliche Teile. Die Wurzeln der *Analysis* reichen zurück in die Antike, doch erst im 17. Jahrhundert entstand das Gebiet, wie wir es heute kennen. Damals entwickelten Isaac Newton und Gottfried Wilhelm Leibniz nahezu gleichzeitig die Infinitesimalrechnung – ein Werkzeug, mit dem man unendlich kleine Änderungen erfassen und damit Bewegung, Wachstum und Veränderung mathematisch beschreiben kann.

{{|>}} Die Analysis beschäftigt sich mit Funktionen, Grenzwerten, Ableitungen und Integralen. Sie erlaubt es uns, Kurvenverläufe zu untersuchen, Geschwindigkeiten zu bestimmen oder Flächeninhalte und Volumina zu berechnen. Darüber hinaus ist sie die Sprache der modernen Naturwissenschaften: Ohne Analysis wären die Gesetze der Physik, die Modelle der Biologie oder die Berechnungen in der Technik kaum vorstellbar.

{{|>}} So verbindet die Analysis praktische Anwendungen mit tiefer theoretischer Bedeutung. Sie eröffnet einen Zugang zur Welt des Wandels – und zeigt, wie Mathematik hilft, Dynamik und Veränderung zu verstehen.
****************************






































## Stochastik


{{|>}}
*******************************
Das Wort „*Stochastik*“ geht auf das griechische stochastikos zurück und bedeutet so viel wie „treffend raten“ oder „vermuten“. Schon dieser Ursprung deutet darauf hin, dass es hier um den Umgang mit Zufall und Unsicherheit geht. Während die *Geometrie* oder *Analysis* feste Strukturen und eindeutige Ergebnisse liefern, beschäftigt sich die *Stochastik* mit dem, was nicht vorhersagbar ist – zumindest nicht im Detail.

{{|>}} Erste Ideen zu Wahrscheinlichkeiten entstanden im 17. Jahrhundert, als Mathematiker wie Blaise Pascal und Pierre de Fermat Fragen aus dem Glücksspiel untersuchten. Sie legten damit den Grundstein für die Wahrscheinlichkeitsrechnung. Später kamen die *Statistik* und die *Kombinatorik* hinzu. Zusammen bilden sie die moderne *Stochastik*, die heute weit über Würfel und Karten hinausgeht.

{{|>}} Ob Wettervorhersagen, medizinische Studien, Verkehrsplanung oder künstliche Intelligenz – überall dort, wo viele mögliche Ausgänge denkbar sind, liefert die *Stochastik* Methoden, um mit *Unsicherheit* umzugehen und fundierte Entscheidungen zu treffen. Sie zeigt uns, dass Zufall nicht nur Chaos bedeutet, sondern auch in Mustern und *Wahrscheinlichkeiten* erfasst werden kann.
*******************************




---

---

<h3> 1. Grundgrößen der Wahrscheinlichkeit </h3>


- Link [Erklärungen zu Grundgrößen der Wahrscheinlichkeit](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/07_01_01_ChanceWahr.md)
- Link [Übungsaufgaben zu Grundgrößen der Wahrscheinlichkeit](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/07_01_01_ChanceWahrA.md)




---

<h3> 2. Kombinatorik </h3>


- Link [Erklärungen zur Kombinatorik](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/07_01_02_Kombinatorik.md)
- Link [Übungsaufgaben zur Kombinatorik](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/07_01_02_KombinatorikA.md)




---

<h3> 3. Baumdiagramme </h3>


- Link [Erklärungen zum "Von"-Prinzip](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/07_02_02_VonPrinzip.md)
- Link [Erklärungen zu Baumdiagrammen und bedingter Wahrscheinlichkeit](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Erklaerungen/07_02_01_Baumdiagramme.md)
- Link [Aufgaben zu Baumdiagrammen und bedingter Wahrscheinlichkeit](https://liascript.github.io/nightly/?https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Sets/07_02_01_BaumdiagrammeA.md)









































