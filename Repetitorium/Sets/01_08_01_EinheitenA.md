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







<!-- data-solution-button="5"-->


<!-- Einheiten 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Fülle** die Lücken **aus**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ [[ 1000 ]] Millimeter sind ein Meter. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Eine Tonne sind [[ 1000 ]] Kilogramm. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Ein Dezimeter entsprechen [[ 100  ]] Millimeter. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Eine Minute besitzt [[ 60   ]] Sekunden. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $10$ Dezimeter sind [[   1  ]] Meter. \

</div>


</section>





<!-- Einheiten 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** die Antwort auf die Frage **an**.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viele Millimeter sind ein Meter? \
[[1000]] mm


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viele Minuten sind eine Stunde? \
[[60  ]] min


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viele Meter sind ein Kilometer? \
[[1000]] m


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viele Gramm sind ein Kilogramm? \
[[1000]] g


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viele Stunden sind ein Tag? \
[[24  ]] h

</div>


</section>





<!-- Einheiten 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Fülle** die Lücken **aus**.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ [[  120  ]] Sekunden entsprechen $2$ Minuten. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ [[ 1000 ]] Milliliter entsprechen ein Liter. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Ein Zentimeter entsprechen [[  10  ]] Millimeter. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Ein Kilogramm entspricht [[ 1000000 ]] Milligramm. \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ [[   1  ]] Dezimeter entspricht $10$ Zentrimeter. \


</div>


</section>





<!-- Einheiten 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 4:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $9\,\text{m} = $ [[ 900   ]] $\,\text{cm}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $85000\,\text{g} = $ [[ 85    ]] $\,\text{kg}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $3\,\text{h} = $ [[ 180   ]] $\,\text{min}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $5000\,\text{mm} = $ [[  50   ]] $\,\text{dm}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $1\,\text{m}^2 = $ [[  100  ]] $\,\text{dm}^2$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $3600\,\text{h} = $ [[   1   ]] $\,\text{s}$ \


</div>


</section>





<!-- Einheiten 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $1\,\text{m}^3 = $ [[ 1000  ]] $\,\text{dm}^3$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $7\,\text{t} = $ [[ 7000  ]] $\,\text{kg}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $240\,\text{s} = $ [[   4   ]] $\,\text{min}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $34000\,\text{cm} = $ [[  340  ]] $\,\text{m}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $1\,\text{h} = $ [[ 3600  ]] $\,\text{s}$ \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $8\,\text{km} = $ [[ 80000 ]] $\,\text{dm}$ \


</div>


</section>





<!-- Einheiten 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $420\,\text{min} = $ [[    7   ]] $\,\text{h}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $25\,\text{m} = $ [[  2500  ]] $\,\text{cm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $780000\,\text{kg} = $ [[   780  ]] $\,\text{t}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $87\,\text{dm} = $ [[  8700  ]] $\,\text{mm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $2\,\text{km} = $ [[ 200000 ]] $\,\text{cm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $50000\,\text{cm}^2 = $ [[   5   ]] $\,\text{m}^2$ \


</div>


</section>






<!-- Einheiten 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 7:__ **Gib** die Antwort **an**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viele Minuten sind von 10:30$\,$Uhr bis 13:30$\,$Uhr vergangen? \
[[  180  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viele Minuten sind von 06:20$\,$Uhr bis 8:40$\,$Uhr vergangen? \
[[  140  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viele Minuten sind von 18:15$\,$Uhr bis 23:30$\,$Uhr vergangen? \
[[  315  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viele Minuten sind von 08:10$\,$Uhr bis 15:45$\,$Uhr vergangen? \
[[  455  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viele Minuten sind von 01:00$\,$Uhr bis 14:22$\,$Uhr vergangen? \
[[  802  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viele Minuten sind von 07:50$\,$Uhr bis 11:17$\,$Uhr vergangen? \
[[  207  ]] $\,\text{min}$

</div>


</section>





<!-- Einheiten 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Gib** die Antwort **an**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel Zeit ist von 12:30$\,$Uhr bis 15:40$\,$Uhr vergangen? \
[[   3   ]] $\,\text{h}$ und [[   10  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel Zeit ist von 09:15$\,$Uhr bis 17:40$\,$Uhr vergangen? \
[[   8   ]] $\,\text{h}$ und [[   25  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel Zeit ist von 7:05$\,$Uhr bis 14:20$\,$Uhr vergangen? \
[[   7   ]] $\,\text{h}$ und [[   15  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel Zeit ist von 10:40$\,$Uhr bis 19:30$\,$Uhr vergangen? \
[[   8   ]] $\,\text{h}$ und [[   50  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel Zeit ist von 05:50$\,$Uhr bis 21:20$\,$Uhr vergangen? \
[[  15   ]] $\,\text{h}$ und [[   30  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel Zeit ist von 07:25$\,$Uhr bis 18:40$\,$Uhr vergangen? \
[[  11   ]] $\,\text{h}$ und [[   15  ]] $\,\text{min}$

</div>


</section>





<!-- Einheiten 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Fülle** die Lücken mit der richtigen Einheitenabkürzung **aus**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ Von 12:00$\,$Uhr bis 15:00$\,$Uhr sind $3\,$[[  h  ]] vergangen. \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Von 17:00$\,$Uhr bis 19:00$\,$Uhr sind $120\,$[[ min ]] vergangen. \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Von 14:37$\,$Uhr bis 14:38$\,$Uhr sind $60\,$[[  s  ]] vergangen. \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Von 06:15$\,$Uhr bis 17:15$\,$Uhr sind $11\,$[[  h  ]] vergangen. \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ Von 04:15$\,$Uhr bis 05:45$\,$Uhr sind $90\,$[[ min ]] vergangen. \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ Von 21:45$\,$Uhr bis 22:15$\,$Uhr sind $30\,$[[ min ]] vergangen. \

</div>


</section>





<!-- Einheiten 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** die Antwort **an**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viele Minuten sind von 14:44$\,$Uhr bis 18:52$\,$Uhr vergangen? \
[[  248  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viele Minuten sind von 07:30$\,$Uhr bis 13:28$\,$Uhr vergangen? \
[[  352  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viele Sekunden sind von 19:37$\,$Uhr bis 19:49$\,$Uhr vergangen? \
[[  720  ]] $\,\text{s}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viele Stunden sind von 09:30$\,$Uhr bis 03:30$\,$Uhr vergangen? \
[[  18   ]] $\,\text{h}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viele Minuten sind von 22:45$\,$Uhr bis 05:15$\,$Uhr vergangen? \
[[  390  ]] $\,\text{min}$

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viele Minuten sind von 23:54$\,$Uhr bis 11:32$\,$Uhr vergangen? \
[[  698  ]] $\,\text{min}$

</div>


</section>




#### Übungsaufgaben zu Einheiten 11 bis 20




<!-- Einheiten 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 11:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $9\,\text{h} = $ [[  540  ]] $\,\text{min}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $3\,\text{h} = $ [[ 10800 ]] $\,\text{s}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $12\,\text{min} = $ [[  720  ]] $\,\text{s}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $7200\,\text{s} = $ [[   2   ]] $\,\text{h}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $660\,\text{s} = $ [[   11   ]] $\,\text{min}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $960\,\text{min} = $ [[   16   ]] $\,\text{h}$ \

</div>


</section>





<!-- Einheiten 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 12:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $4\,\text{d} = $ [[   96   ]] $\,\text{h}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $22\,\text{min} = $ [[  1320  ]] $\,\text{s}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $44\,\text{s} = $ [[  44000 ]] $\,\text{ms}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $6\,\text{h} = $ [[ 216000 ]] $\,\text{s}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $420\,\text{s} = $ [[    7   ]] $\,\text{min}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $8\,\text{min} = $ [[  480   ]] $\,\text{s}$ \

</div>


</section>





<!-- Einheiten 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $3\,\text{m} = $ [[  300  ]] $\,\text{cm}$ \

</div>


<!-- data-solution-button="5"-->
<div class="flex-child">

__$b)\;\;$__ $12\,\text{m} = $ [[  120  ]] $\,\text{dm}$ \

</div>


<!-- data-solution-button="5"-->
<div class="flex-child">

__$c)\;\;$__ $8000\,\text{mm} = $ [[   8   ]] $\,\text{m}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $17\,\text{m} = $ [[ 17000 ]] $\,\text{mm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $5000\,\text{m} = $ [[   5   ]] $\,\text{km}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $37\,\text{dm} = $ [[  370  ]] $\,\text{cm}$ \

</div>


</section>






<!-- Einheiten 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 14:__ **Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $20\,\text{cm} = $ [[  200  ]] $\,\text{mm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $3400\,\text{dm} = $ [[  340  ]] $\,\text{m}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $7000\,\text{mm} = $ [[  70   ]] $\,\text{dm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $3\,\text{km} = $ [[ 30000 ]] $\,\text{dm}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $65000\,\text{cm} = $ [[  650  ]] $\,\text{m}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $4000000\,\text{cm} = $ [[   40  ]] $\,\text{km}$ \

</div>


</section>






<!-- Einheiten 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $2\,\text{cm}^2 = $ [[  200  ]] $\,\text{mm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $1\,\text{m}^2 = $ [[ 10000 ]] $\,\text{cm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $11\,\text{dm}^2 = $ [[ 1100  ]] $\,\text{cm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $3\,\text{m}^2 = $ [[  300  ]] $\,\text{dm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $400\,\text{dm}^2 = $ [[   4   ]] $\,\text{m}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $1000\,\text{mm}^2 = $ [[   10  ]] $\,\text{cm}^2$ \

</div>


</section>





<!-- Einheiten 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 16:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $7\,\text{m}^2 = $ [[  70000  ]] $\,\text{cm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $4\,\text{km}^2 = $ [[ 4000000 ]] $\,\text{m}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $5000\,\text{cm}^2 = $ [[    50   ]] $\,\text{dm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $9\,\text{m}^2 = $ [[ 9000000 ]] $\,\text{mm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $1100000\,\text{cm}^2 = $ [[   110   ]] $\,\text{m}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $70\,\text{dm}^2 = $ [[ 700000  ]] $\,\text{mm}^2$ \

</div>







<!-- Einheiten 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $5\,\text{dm}^3 = $ [[   5000  ]] $\,\text{cm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $7\,\text{m}^3 = $ [[   7000  ]] $\,\text{dm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $12000\,\text{mm}^3 = $ [[   12     ]] $\,\text{cm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $4\,\text{m}^3 = $ [[ 4000000 ]] $\,\text{cm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $17000\,\text{cm}^3 = $ [[    17    ]] $\,\text{dm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $90000\,\text{mm}^3 = $ [[    90    ]] $\,\text{cm}^3$ \

</div>


</section>





<!-- Einheiten 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 18:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $20\,\text{dm}^3 = $ [[   20000000  ]] $\,\text{mm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $49\,\text{dm}^3 = $ [[     49     ]] $\,\ell$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $51\,\ell = $ [[     51000  ]] $\,\text{m}\ell$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $2\,\text{m}^3 = $ [[ 2000000000 ]] $\,\text{mm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $8000000\,\text{cm}^3 = $ [[    8000    ]] $\,\text{dm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $117\,\ell = $ [[   117000   ]] $\,\text{cm}^3$ \

</div>


</section>






<!-- Einheiten 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 19:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $750000\,\text{m}^2 = $ [[      75      ]] $\,\text{ha}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $7\,\text{km}^2 = $ [[ 70000000000 ]] $\,\text{cm}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $8000\,\text{ha} = $ [[      80      ]] $\,\text{a}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $20000\,\text{km}^2 = $ [[      200     ]] $\,\text{ha}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $2000000000000\,\text{mm}^2 = $ [[       2      ]] $\,\text{km}^2$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $180\,\text{km}^2 = $ [[ 18000000000 ]] $\,\text{dm}^2$ \

</div>


</section>





<!-- Einheiten 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 20:__ **Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $3\,\text{dm}^3 = $ [[   3000    ]] $\,\text{ml}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__ $80\,\text{cl} = $ [[    800    ]] $\,\text{ml}$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$c)\;\;$__ $410000\,\text{dm}^3 = $ [[    410    ]] $\,\text{m}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__ $9500000000\,\text{cm}^3 = $ [[    9500   ]] $\,\text{m}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $120\,\ell = $ [[ 120000000 ]] $\,\text{mm}^3$ \

</div>

<div class="flex-child">


<!-- data-solution-button="5"-->
__$f)\;\;$__ $50000\,\ell = $ [[     50     ]] $\,\text{cm}^3$ \

</div>


</section>






#### Übungsaufgaben zu Einheiten 21 bis 30




<!-- Einheiten 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 21:__ **Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $75\,$cm$ = 7,5\,$ [[km|m|(dm)|cm|mm]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $3\,$h$ = 10800\,$ [[d|h|min|(s)]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $64000\,$mg$ = 0,064\,$ [[t|(kg)|g|mg]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $2,5\,$dm$^2 = 25000\,$ [[km$^2$|ha|m$^2$|dm$^2$|cm$^2$|(mm$^2$)]] \


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$e)\;\;$__ $43\,$l$ = 43000\,$ [[km$^3$|m$^3$|dm$^3$|(cm$^3$)|mm$^3$]] \


</div>


</section>






<!-- Einheiten 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 22:__ **Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $4,4\,$mm$ = 0,0044\,$ [[km|(m)|dm|cm|mm]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $450\,$min$ = 7,5\,$ [[d|(h)|min|s]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,00025\,$t$ = 250\,$ [[t|kg|(g)|mg]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $1410000\,$cm$^2 = 0,0141\,$ [[km$^2$|(ha)|m$^2$|dm$^2$|cm$^2$|mm$^2$]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $0,042\,$km$^3 = 42000\,$ [[km$^3$|(m$^3$)|dm$^3$|cm$^3$|mm$^3$]] \


</div>


</section>





<!-- Einheiten 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 23:__ **Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,01275\,$km$ = 127,5\,$ [[km|m|(dm)|cm|mm]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $450000\,$ml$ = 0,45\,$ [[km$^3$|(m$^3$)|dm$^3$|cm$^3$|mm$^3$]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $1200000\,$mm$ = 1,2\,$ [[(km)|m|dm|cm|mm]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $0,0053\,$ha$ = 530000\,$ [[km$^2$|ha|m$^2$|dm$^2$|(cm$^2$)|mm$^2$]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $0,0654\,$m$ = 65,4\,$ [[km|m|dm|cm|(mm)]] \


</div>


</section>





<!-- Einheiten 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Wähle** die passende Einheit **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,00021\,$t$ = 21000\,$ [[t|kg|g|dg|(cg)|mg]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $0,05\,$d$ = 72\,$ [[d|h|(min)|s|ms]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,000037\,$m$ = 0,0037\,$ [[km|m|dm|(cm)|mm]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $6300\,$s$ = 1,75\,$ [[d|(h)|min|s|ms]] \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $2,5\,$h$ = 150\,$ [[d|h|(min)|s|ms]] \


</div>


</section>





<!-- Einheiten 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 25:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 21\,$t [[$>$|($=$)|$<$]] $  21000\,$kg \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 56\,$dm [[$>$|$=$|($<$)]] $  5820\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 7\,$min [[($>$)|$=$|$<$]] $  400\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 4\,$m [[($>$)|$=$|$<$]] $  3570\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 14\,$cm$^2$ [[($>$)|$=$|$<$]] $  140\,$mm$^2$ \


</div>


</section>





<!-- Einheiten 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 26:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 764\,$mm [[$>$|$=$|($<$)]] $  2\,$m \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 150\,$kg [[($>$)|$=$|$<$]] $  95000\,$g \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 3\,$l [[$>$|($=$)|$<$]] $  3000\,$cm$^3$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 180\,$min [[$>$|$=$|($<$)]] $  4\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 6\,$min [[$>$|$=$|($<$)]] $  3000\,$s \


</div>


</section>





<!-- Einheiten 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 27:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 450\,$min [[($>$)|$=$|$<$]] $  7\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 600\,$kg [[$>$|$=$|($<$)]] $  3\,$t \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 25\,$dm [[($>$)|$=$|$<$]] $  2\,$m \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 84000\,$mm [[$>$|($=$)|$<$]] $  840\,$dm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 50\,$dm$^2$ [[$>$|($=$)|$<$]] $  500000\,$mm$^2$ \


</div>


</section>





<!-- Einheiten 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 28:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 5\,$h [[($>$)|$=$|$<$]] $  15000\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 120\,$m [[$>$|$=$|($<$)]] $  840000\,$cm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 10800\,$s [[$>$|($=$)|$<$]] $  3\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 12\,$dm$^3$ [[($>$)|$=$|$<$]] $  9000\,$cm$^3$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 800000\,$mg [[$>$|$=$|($<$)]] $  2\,$kg \


</div>


</section>





<!-- Einheiten 0029 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 29:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{7}{8}\,$kg [[($>$)|$=$|$<$]] $  \dfrac{1000}{2}\,$g \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{4}{5}\,$min [[$>$|($=$)|$<$]] $  \dfrac{36}{3}\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{40}{7}\,$m [[($>$)|$=$|$<$]] $  \dfrac{4}{70}\,$dm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{8}{9}\,cm$ [[$>$|($=$)|$<$]] $  \dfrac{80}{9}\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{8}{3}\,$mm [[($>$)|$=$|$<$]] $  \dfrac{8}{300}\,$cm \


</div>


</section>







<!-- Einheiten 0030 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{7}{50}\,$dm [[($>$)|$=$|$<$]] $  \dfrac{7}{5}\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{1}{6}\,$h [[$>$|($=$)|$<$]] $  \dfrac{4200}{7}\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{250}{3}\,$mm [[$>$|($=$)|$<$]] $  \dfrac{5}{6}\,$dm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{12}{9}\,$kg [[$>$|$=$|($<$)]] $  \dfrac{5000}{3}\,$g \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{5}{6}\,$min [[($>$)|$=$|$<$]] $  \dfrac{125}{3}\,$s \


</div>


</section>






#### Übungsaufgaben zu Einheiten 31 bis 40




<!-- Einheiten 0031 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 31:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{3}{2}\,$h [[($>$)|$=$|$<$]] $  \dfrac{125}{4}\,$min \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{3}{400}\,$m [[$>$|$=$|($<$)]] $  \dfrac{300}{4}\,mm$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{8}{3}\,$min [[$>$|($=$)|$<$]] $  \dfrac{320}{2}\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{300}{7}\,$kg [[($>$)|$=$|$<$]] $  \dfrac{3}{700}\,$g \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{5}{40}\,$dm [[$>$|$=$|($<$)]] $  \dfrac{500}{4}\,$mm \


</div>


</section>







<!-- Einheiten 0032 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 32:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,25\,$min [[$>$|($=$)|$<$]] $  15\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,023\,$m [[$>$|$=$|($<$)]] $  23\,$cm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 62,5\,$kg [[($>$)|$=$|$<$]] $  0,00625\,$t \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 45\,$min [[($>$)|$=$|$<$]] $  0,45\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3,4\,$cm [[$>$|$=$|($<$)]] $  0,34\,$m \


</div>


</section>






<!-- Einheiten 0033 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 33:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2,5\,$h [[$>$|$=$|($<$)]] $  250\,$min \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 240\,$mm [[$>$|($=$)|$<$]] $  0,24\,$m \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,0014\,$km [[($>$)|$=$|$<$]] $  63\,$cm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 310\,$mg [[($>$)|$=$|$<$]] $  0,00026\,$kg \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 80\,$min [[($>$)|$=$|$<$]] $  1,33\,$h \


</div>


</section>






<!-- Einheiten 0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 34:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 1,2\,$min [[($>$)|$=$|$<$]] $  80\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 4,5\,$dm [[($>$)|$=$|$<$]] $  45\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,025\,$kg [[($>$)|$=$|$<$]] $  25\,$mg \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 100\,$min [[$>$|($=$)|$<$]] $  1,4\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,0689\,$m [[($>$)|$=$|$<$]] $  6,89\,$mm \


</div>


</section>






<!-- Einheiten 0035 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 35:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,\bar{3}\,$kg [[($>$)|$=$|$<$]] $  300\,$g \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{5}{7}\,$min [[($>$)|$=$|$<$]] $  0,5\,$min \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 12,5\,$mm [[$>$|$=$|($<$)]] $  \dfrac{1}{8}\,$m \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,04\,$m [[$>$|$=$|($<$)]] $  \dfrac{2}{5}\,dm$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{5}{600}\,$h [[$>$|($=$)|$<$]] $  0,5\,$min \


</div>


</section>






<!-- Einheiten 0036 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 36:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{4}{3}\,$dm [[($>$)|$=$|$<$]] $  1,3\,$cm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,00225\,$t [[$>$|$=$|($<$)]] $  \dfrac{90}{4}\,$kg \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{7}{24}\,$min [[$>$|($=$)|$<$]] $  17,5\,$s \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,0001\bar{9}\,$km [[$>$|($=$)|$<$]] $  0,2\,$dm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 1,7\,$dm [[($>$)|$=$|$<$]] $  \dfrac{3}{20}\,$m \


</div>


</section>






<!-- Einheiten 0037 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 37:__ **Wähle** das passende Relationszeichen **aus**, sodass eine wahre mathematische Aussage entsteht.



<section class="flex-container">

<div class="flex-child">


<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2,3\,$min [[$>$|$=$|($<$)]] $  \dfrac{23}{60}\,$h \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{7}{400}\,$dm [[($>$)|$=$|$<$]] $  0,175\,$mm \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{500}{3}\,$cm [[$>$|$=$|($<$)]] $  1,67\,$m \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2,4\,$kg [[$>$|$=$|($<$)]] $  \dfrac{3}{1000}\,$t \

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{4000}{9}\,$mm [[$>$|($=$)|$<$]] $  0,\bar{4}\,$m \


</div>


</section>




<!-- Einheiten 0038 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 38:__ **Sortiere** das die Kacheln nach Größe und **ordne** sie der passenden Größe zu.



<!-- data-randomize="true"  
data-solution-button="5" 
data-show-partial-solution -->
Masse: [->[($\dfrac{3}{8}$ t)]]  $>$ [->[($\dfrac{2000}{6}$ kg)]] $>$ [->[($333$ kg)]] $>$ [->[($3 \cdot 10^6$ g)]]  \
Zeit:  [->[($250$ min)]] $>$ [->[(14640$ s)]] $>$ [->[($4,1$ h)]] $>$ [->[($120^2$ s)]]  \
Länge: [->[($37$ dm)]] $>$ [->[($\dfrac{1}{5}$ m)]] $>$ [->[($195$ mm)]] $>$ [->[($17,5$ cm)]]  \
Fläche: [->[($0,025 \ \text{a}$)]] $>$ [->[($\tfrac{3}{5} \ \text{m}^2$)]] $>$ [->[($2700 \ \text{cm}^2$)]] $>$ [->[($2,5 \cdot 10^3 \ \text{cm}^2$)]] \
Volumen: [->[($\dfrac{3}{50} \ \text{m}^3$)]] $>$ [->[($12 \ \ell$)]] $>$ [->[($1,2 \cdot 10^4 \ \text{cm}^3$)]] $>$ [->[($11,8  \ \text{dm}^3$)]] \




<!-- Einheiten 0039 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 39:__ **Sortiere** das die Kacheln nach Größe und **ordne** sie der passenden Größe zu.




<!-- data-randomize="true"  
data-solution-button="5" 
data-show-partial-solution -->
Masse:  [->[($\dfrac{13}{25}\ \text{t}$)]] $>$ [->[($5{,}1\cdot 10^5\ \text{g}$)]] $>$ [->[($4{,}95\cdot 10^2\ \text{kg}$)]] $>$ [->[($0{,}48\ \text{t}$)]]  \
Zeit:   [->[($2{,}11\ \text{h}$)]] $>$ [->[($7{,}55\cdot 10^3\ \text{s}$)]] $>$ [->[($125\ \text{min}$)]] $>$ [->[($7{,}35\cdot 10^3\ \text{s}$)]]  \
Länge:  [->[($2{,}01\ \text{m}$)]] $>$ [->[($2{,}0\cdot 10^3\ \text{mm}$)]] $>$ [->[($\dfrac{1995}{10}\ \text{cm}$)]] $>$ [->[($19{,}9\ \text{dm}$)]]  \
Fläche: [->[($0{,}031\ \text{a}$)]] $>$ [->[($3{,}08\ \text{m}^2$)]] $>$ [->[($3{,}06\cdot 10^4\ \text{cm}^2$)]] $>$ [->[($304\ \text{dm}^2$)]]  \
Volumen:[->[($1{,}5\cdot 10^{-2}\ \text{m}^3$)]] $>$ [->[($1{,}49\cdot 10^4\ \text{cm}^3$)]] $>$ [->[($14{,}8\ \text{dm}^3$)]] $>$ [->[($14{,}7\ \ell$)]]  \




<!-- Einheiten 0040 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 40:__ **Sortiere** das die Kacheln nach Größe und **ordne** sie der passenden Größe zu.



<!-- data-randomize="true"  
data-solution-button="5" 
data-show-partial-solution -->
Masse:  [->[($0{,}62\ \text{t}$)]] $>$ [->[($6,15\cdot 10^2\ \text{kg}$)]] $>$ [->[($\dfrac{12400}{20}\ \text{kg}$)]] $>$ [->[($615000\ \text{g}$)]]  \
Zeit:   [->[($9{,}1\cdot 10^3\ \text{s}$)]] $>$ [->[($152\ \text{min}$)]] $>$ [->[($2,55\ \text{h}$)]] $>$ [->[($9100\ \text{s}$)]]  \
Länge:  [->[($5{,}05\ \text{m}$)]] $>$ [->[($50{,}3\ \text{dm}$)]] $>$ [->[($504\ \text{cm}$)]] $>$ [->[($5,04\cdot 10^3\ \text{mm}$)]]  \
Fläche: [->[($0{,}042\ \text{a}$)]] $>$ [->[($4200\ \text{dm}^2$)]] $>$ [->[($4,18\cdot 10^4\ \text{cm}^2$)]] $>$ [->[($4,19\ \text{m}^2$)]]  \
Volumen:[->[($2,1\cdot 10^{-2}\ \text{m}^3$)]] $>$ [->[($21,2\ \ell$)]] $>$ [->[($2,11\cdot 10^4\ \text{cm}^3$)]] $>$ [->[($21,0\ \text{dm}^3$)]]  \








