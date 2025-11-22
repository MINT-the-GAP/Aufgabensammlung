<!--

version:  0.0.1
language: de
narrator: Deutsch Female



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







#### Übungsaufgaben zu Grundgrößen der Wahrscheinlichkeit 1 bis 10





<!-- Chance 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** die Spannweite **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$R=$ [[  3  ]]
*******************
$R = x_{max} - x_{min} = 4 - 1 = 3$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> 
$\} \}$

<!-- data-solution-button="5" -->
$R=$ [[  3  ]]
*******************
$R = x_{max} - x_{min} = 9 - 6 = 5$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> 
$\} \}$

<!-- data-solution-button="5" -->
$R=$ [[  8  ]]
*******************
$R = x_{max} - x_{min} = 11 - 3 = 8$
*******************






<!-- Chance 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** die Spannweite **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$R=$ [[  5  ]]
*******************
$R = x_{max} - x_{min} = 6 - 2 = 5$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> 
$\} \}$

<!-- data-solution-button="5" -->
$R=$ [[  0  ]]
*******************
$R = x_{max} - x_{min} = 8 - 8 = 0$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> 
$\} \}$

<!-- data-solution-button="5" -->
$R=$ [[  9  ]]
*******************
$R = x_{max} - x_{min} = 12 - 3 = 9$
*******************






<!-- Chance 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den Median **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  4  ]]
*******************
$\{ 1;1;1;2;3;\textcolor{red}{4};4;5;5;6;6 \}$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> 
$\} \}$

<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 4;5;6;\textcolor{red}{7};8;9;9 \}$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 2;3;4;6;7;\textcolor{red}{7};8;10;11;11;11 \}$
*******************



<!-- Chance 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den Median **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  2  ]]
*******************
$\{ 1;1;1;1;2;\textcolor{red}{2};4;4;5;6;6 \}$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 6;7;7;\textcolor{red}{7};7;7;10; \}$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 2;3;4;4;7;\textcolor{red}{7};7;8;9;9;12  \}$
*******************



<!-- Chance 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** das arithmetisches Mittel **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$\bar{x}=$ [[  3,9  ]]
@Algebrite.check(39/10)
*******************
$\bar{x} = \dfrac{2+3+1+4+5+4+5+6+3+6}{10}$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\bar{x}=$ [[  7,125  ]]
@Algebrite.check(57/8)
*******************
$\bar{x} = \dfrac{7+8+4+9+10+10+9+3+7}{8}$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> 
$\} \}$



<!-- data-solution-button="5" -->
$\bar{x}=$ [[  6,6  ]]
@Algebrite.check(66/10)
*******************
$\bar{x} = \dfrac{9+4+6+8+5+4+6+10+9+5}{10}$
*******************





<!-- Chance 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** das arithmetisches Mittel **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$\bar{x}=$ [[  2,7  ]]
@Algebrite.check(27/10)
*******************
$\bar{x} = \dfrac{2+4+1+2+4+1+5+6+1+1}{10}$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\bar{x}=$ [[  7,25  ]]
@Algebrite.check(58/8)
*******************
$\bar{x} = \dfrac{6+7+6+7+9+7+5+11}{8}$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> 
$\} \}$



<!-- data-solution-button="5" -->
$\bar{x}=$ [[  7,6  ]]
@Algebrite.check(76/10)
*******************
$\bar{x} = \dfrac{12+6+9+12+7+4+8+7+5+6}{10}$
*******************






<!-- Chance 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ Gegeben sei die folgende Ergebnismenge: \
$\{ 7,8,8,6,11,14,12,12,13,8,10,7,7,11,9 \}$


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[  8  ]]
*******************
$R = x_{max} - x_{min} = 14 - 6 = 8$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[  9  ]]
*******************
$\{ 6,7,7,7,8,8,8,\textcolor{red}{9},10,11,11,12,12,13,14 \}$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ **Gib** das arithmetische Mittel gerundet auf drei Nachkommastellen **an**.\
$\bar{x}=$ [[  9,533  ]]


</div> 

</section>


<!-- Chance 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 8:__ Gegeben sei die folgende Ergebnismenge: \
$\{ 83,46,55,64,91,75,61,39,84,55,47 \}$


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[ 52  ]]
*******************
$R = x_{max} - x_{min} = 91 - 39 = 52$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[  61  ]]
*******************
$\{ 39,46,47,55,55,\textcolor{red}{61},64,75,83,84,91 \}$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ **Gib** das arithmetische Mittel gerundet auf drei Nachkommastellen **an**.\
$\bar{x}=$ [[  63,636  ]]


</div> 

</section>


<!-- Chance 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 9:__ Gegeben sei die folgende Ergebnismenge: \
$\{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \}$


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[  6  ]]
*******************
$R = x_{max} - x_{min} = 58 - 52 = 8$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[ 55  ]]
*******************
$\{ 52,53,54,54,54,55,55,\textcolor{red}{55},56,56,56,56,57,57,58  \}$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ **Gib** das arithmetische Mittel **an**.\
$\bar{x}=$ [[  51,6  ]]


</div> 

</section>


<!-- Chance 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 10:__ Gegeben sei die folgende Ergebnismenge: \
$\{ 29,33,28,31,35,24,36,32,28,27,35,34,29,30,35 \}$


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ **Gib** die Spannweite **an**.\
$R=$ [[ 12  ]]
*******************
$R = x_{max} - x_{min} = 36 - 24 = 12$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ **Gib** den Median **an**.\
$\tilde{x}=$ [[ 31  ]]
*******************
$\{ 24,27,28,28,29,29,30,\textcolor{red}{31},32,33,34,35,35,35,36 \}$
*******************


</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ **Gib** das arithmetische Mittel gerundet auf drei Nachkommastellen **an**.\
$\bar{x}=$ [[  33,067  ]]


</div> 

</section>




#### Übungsaufgaben zu Grundgrößen der Wahrscheinlichkeit 11 bis 20




<!-- Chance 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 11:__ In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne5.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  4  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 25/29  ]]
@Algebrite.check(25/29)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  4/29  ]]
@Algebrite.check(4/29)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  25:4  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne6.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  6  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  6/13  ]]
@Algebrite.check(6/13)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  7/13  ]]
@Algebrite.check(7/13)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:6  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne7.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  7  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  7/23  ]]
@Algebrite.check(7/23)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  7/23  ]]
@Algebrite.check(7/23)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:16  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne8.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  27/32  ]]
@Algebrite.check(27/32)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  5/32  ]]
@Algebrite.check(5/32)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  27:5  ]]


</div>

</section>



<!-- Chance 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 12:__ In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne1.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  7  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 15/22  ]]
@Algebrite.check(15/22)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[ 7/22  ]]
@Algebrite.check(7/22)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne2.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 12/17  ]]
@Algebrite.check(12/17)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[ 12/17  ]]
@Algebrite.check(12/17)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  5:12  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne3.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  6  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[ 6/12  ]]
@Algebrite.check(6/12)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[ 6/12  ]]
@Algebrite.check(7/22)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  1:1  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne4.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  10  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  10/25  ]]
@Algebrite.check(10/25)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[  15/25  ]]
@Algebrite.check(15/25)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  3:2  ]]


</div>

</section>



<!-- Chance 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 13:__ In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 



<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne9.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  8  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 11/23  ]]
@Algebrite.check(11/23)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[ 4/23  ]]
@Algebrite.check(4/23)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  8:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne10.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  4  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  4/10  ]]
@Algebrite.check(4/10)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  4/10  ]]
@Algebrite.check(4/10)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  1:4  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne11.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der grüne Kugeln **an**.\
$p(B)=$ [[  7/23  ]]
@Algebrite.check(7/23)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[  9/23  ]]
@Algebrite.check(9/23)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:16  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne12.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  6  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  2/5  ]]
@Algebrite.check(2/5)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  3/5  ]]
@Algebrite.check(3/5)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  1:4  ]]


</div>

</section>



<!-- Chance 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 14:__ In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne13.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  6  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(B)=$ [[ 7/24  ]]
@Algebrite.check(7/24)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  7/24  ]]
@Algebrite.check(7/24)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  8:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne14.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  8/23  ]]
@Algebrite.check(8/23)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  6/23  ]]
@Algebrite.check(6/23)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  9:14  ]]


</div>

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne15.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  10/23  ]]
@Algebrite.check(10/23)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  4/23  ]]
@Algebrite.check(4/23)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  9:14  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 


<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne16.png)

<!-- data-solution-button="5" -->
**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  10  ]]

<!-- data-solution-button="5" -->
**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  8/27  ]]
@Algebrite.check(8/27)

<!-- data-solution-button="5" -->
**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[  9/27  ]]
@Algebrite.check(9/27)

<!-- data-solution-button="5" -->
**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  4:19  ]]


</div>

</section>



<!-- Chance 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Gib** die angegebene Chance als Wahrscheinlichkeit **an**.


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ Die Chance wird mit $2:3$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 2/5 ]]
@Algebrite.check(2/5)
</div>
<div class="flex-child">
__$b)\;\;$__ Die Chance wird mit $5:2$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 5/7 ]]
@Algebrite.check(5/7)
</div>
<div class="flex-child">
__$c)\;\;$__ Die Chance wird mit $11:9$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 11/20 ]]
@Algebrite.check(11/20)
</div>
<div class="flex-child">
__$d)\;\;$__ Die Chance wird mit $17:23$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 17/40 ]]
@Algebrite.check(17/40)
</div>
<div class="flex-child">
__$e)\;\;$__ Die Chance wird mit $1:22$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 1/23 ]]
@Algebrite.check(1/23)
</div>
<div class="flex-child">
__$f)\;\;$__ Die Chance wird mit $45:2$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 45/47 ]]
@Algebrite.check(45/47)
</div>

</section>


<!-- Chance 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 16:__ **Gib** die angegebene Chance als Wahrscheinlichkeit **an**.


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ Die Chance wird mit $1:5$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 1/6 ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">
__$b)\;\;$__ Die Chance wird mit $4:5$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 4/9 ]]
@Algebrite.check(4/9)
</div>
<div class="flex-child">
__$c)\;\;$__ Die Chance wird mit $18:11$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 18/29 ]]
@Algebrite.check(18/29)
</div>
<div class="flex-child">
__$d)\;\;$__ Die Chance wird mit $13:2$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 13/15 ]]
@Algebrite.check(13/15)
</div>
<div class="flex-child">
__$e)\;\;$__ Die Chance wird mit $4:81$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 4/85 ]]
@Algebrite.check(4/85)
</div>
<div class="flex-child">
__$f)\;\;$__ Die Chance wird mit $7:111$ angegeben.

<!-- data-solution-button="5" -->
$p=$[[ 7/118 ]]
@Algebrite.check(7/118)
</div>

</section>






<!-- Chance 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**.



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Eine ideale Münze wird hochgeworfen. Beim Aufkommen liegt die Kopf-Seite oben.

<!-- data-solution-button="5" -->
$p=$[[  1/2  ]]
@Algebrite.check(1/2)
</div>
<div class="flex-child">

__$b)\;\;$__ Mit einem idealen sechsseitigen Würfel wird gewürfelt. Nach dem Wurf ist die 4 oben.

<!-- data-solution-button="5" -->
$p=$[[  1/6  ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">

__$c)\;\;$__ Mit einem idealen zwanzigseitigen Würfel wird gewürfelt. Nach dem Wurf ist keine 13 oben.

<!-- data-solution-button="5" -->
$p=$[[  19/20  ]]
@Algebrite.check(19/20)
</div>
<div class="flex-child">

__$d)\;\;$__ Ein Glücksrad ist in 25 gleichgroße Flächen eingeteilt. Zwei dieser Flächen sind rot und es kommt auf einer roten Fläche zum Stoppen.

<!-- data-solution-button="5" -->
$p=$[[  2/25  ]]
@Algebrite.check(2/25)
</div>
<div class="flex-child">

__$e)\;\;$__ Ein Glücksrad ist in 10 gleichgroße unterschiedlich gefärbte Flächen eingeteilt. Das Rad kommt auf einer orangen Fläche zum Stoppen.

<!-- data-solution-button="5" -->
$p=$[[  1/10  ]]
@Algebrite.check(1/10)
</div>
</section>






<!-- Chance 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 18:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Mit einem idealen achtsseitigen Würfel wird gewürfelt. Nach dem Wurf ist die 7 oben.

<!-- data-solution-button="5" -->
$p=$[[  1/8  ]]
@Algebrite.check(1/8)
</div>
<div class="flex-child">

__$b)\;\;$__ Ein Glücksrad ist in vier gleichgroße unterschiedlich gefärbte Flächen eingeteilt. Das Rad kommt auf einer blauen Fläche zum Stoppen.

<!-- data-solution-button="5" -->
$p=$[[  1/4  ]]
@Algebrite.check(1/4)
</div>
<div class="flex-child">

__$c)\;\;$__ In einer Losbox befinden sich 3 Gewinnlose und 7 Nieten. Es wird eine Niete gezogen.

<!-- data-solution-button="5" -->
$p=$[[  7/10  ]]
@Algebrite.check(7/10)
</div>
<div class="flex-child">

__$d)\;\;$__ Mit einem idealen zwölfseitigen Würfel wird gewürfelt. Nach dem Wurf ist keine 13 oben.

<!-- data-solution-button="5" -->
$p=$[[  1  ]]
@Algebrite.check(1)
</div>
<div class="flex-child">

__$e)\;\;$__ Mit einem idealen vierseitigen Würfel wird gewürfelt. Nach dem Wurf liegt eine Primzahl oben.

<!-- data-solution-button="5" -->
$p=$[[  1/2  ]]
@Algebrite.check(1/2)
</div>
</section>







<!-- Chance 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 19:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**. 



__$a)\;\;$__ In einer Urne befinden sich $24$ blaue, $18$ grüne und $8$ rote Kugeln. **Gib** die Wahrscheinlichkeit in Prozent **an** eine grüne Kugel zu ziehen.

<!-- data-solution-button="5" -->
$p=$ [[ 36  ]]$\%$ 



__$b)\;\;$__ Ein Glücksrad ist in gleich große Segmente unterteilt. Dabei sind $5$ Felder rot, $13$ Felder weiß und $7$ Felder schwarz. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass beim Drehen des Glücksrades ein rotes Feld resultiert.

<!-- data-solution-button="5" -->
$p=$ [[ 20  ]]$\%$ 



__$c)\;\;$__ Bei einer Stichprobe im Supermarkt von $125$ Produkten waren $4$ fehlerhaft. **Gib** die Wahrscheinlichkeit in Prozent **an** ein fehlerhaftes Produkt zu kaufen.

<!-- data-solution-button="5" -->
$p=$ [[ 3,2 ]]$\%$ 


<!-- Chance 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 20:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**. 



__$a)\;\;$__ In einer Urne befinden sich $17$ grüne und $23$ rote Kugeln. **Gib** die Wahrscheinlichkeit in Prozent **an** eine rote Kugel zu ziehen.

<!-- data-solution-button="5" -->
$p=$ [[ 57,5 ]]$\%$ 



__$b)\;\;$__ Ein Glücksrad ist in gleich große Segmente unterteilt. Dabei sind $9$ Felder gelb, $5$ Felder blau und $6$ Felder geld. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass beim Drehen des Glücksrades ein gelbes Feld resultiert.

<!-- data-solution-button="5" -->
$p=$ [[  45  ]]$\%$ 



__$c)\;\;$__ Bei einem Kartenspiel mit $32$ Karten sind $4$ Asse. **Gib** die Wahrscheinlichkeit in Prozent **an** ein Ass als erste Karte zu ziehen.

<!-- data-solution-button="5" -->
$p=$ [[ 12,5 ]]$\%$ 





#### Übungsaufgaben zu Grundgrößen der Wahrscheinlichkeit 21 bis 30



<!-- Chance 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 21:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**. 



__$a)\;\;$__ In einer Urne befinden sich $9$ weiße, $22$ gelbe und $29$ schwarze Kugeln. **Gib** die Wahrscheinlichkeit in Prozent **an** eine weiße Kugel zu ziehen.

<!-- data-solution-button="5" -->
$p=$ [[  15   ]]$\%$ 



__$b)\;\;$__ Ein Glücksrad ist in gleich große Segmente unterteilt. Dabei sind $17$ Felder rot und $63$ Felder schwarz. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass beim Drehen des Glücksrades ein schwarzes Feld resultiert.

<!-- data-solution-button="5" -->
$p=$ [[ 78,75 ]]$\%$ 



__$c)\;\;$__ Eine Reißzwecke wurde $70$-mal hochgeworfen und landete $49$-mal auf der Seite. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass die Reißzwecke nicht auf der Seite landet.

<!-- data-solution-button="5" -->
$p=$ [[  30   ]]$\%$ 



<!-- Chance 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 22:__ **Gib** die Wahrscheinlichkeit für das beschriebene Szenario **an**. 



__$a)\;\;$__ In einer Urne befinden sich $25$ rote und $15$ grüne Kugeln. **Gib** die Wahrscheinlichkeit in Prozent **an** eine rote Kugel zu ziehen.

<!-- data-solution-button="5" -->
$p=$ [[ 62,5 ]]$\%$ 



__$b)\;\;$__ Ein Glücksrad ist in gleich große Segmente unterteilt. Dabei sind $24$ Felder blau, $36$ Felder gelb und $15$ Felder schwarz. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass beim Drehen des Glücksrades ein blaues Feld resultiert.

<!-- data-solution-button="5" -->
$p=$ [[ 32   ]]$\%$ 



__$c)\;\;$__ In einer Packung Streichhölzer sind beim Anzünden durch ein und dieselbe Person $5$ zerbrochen, während $35$ heil blieben. **Gib** die Wahrscheinlichkeit in Prozent **an**, dass ein Streichholz beim Anzünden durch diese Person zerbricht.

<!-- data-solution-button="5" -->
$p=$ [[ 12,5  ]]$\%$ 



