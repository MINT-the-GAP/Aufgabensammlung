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







#### Übungsaufgaben zu Dezimalzahlen 1 bis 10








<!-- Dezimalzalen 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 1:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,75$ [[$>$|$=$|($<$)]] $\dfrac{4}{5}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $\dfrac{9}{4}$ [[$>$|($=$)|$<$]] $2,25$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,13$ [[($>$)|$=$|($<$)]] $\dfrac{3}{20}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $\dfrac{8}{100}$ [[($>$)|$=$|$<$]] $0,009$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $\dfrac{7}{8}$ [[$>$|($=$)|$<$]] $0,875$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $0,825$ [[($>$)|$=$|$<$]] $\dfrac{4}{5}$ 

</div>
</section>







<!-- Dezimalzalen 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 2:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $1,1$ [[$>$|$=$|($<$)]] $\dfrac{4}{3}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $\dfrac{3}{7}$ [[$>$|$=$|($<$)]] $0,49$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $\dfrac{7}{5}$ [[($>$)|($=$)|$<$]] $1,400$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $1,9$ [[($>$)|$=$|$<$]] $\dfrac{199}{200}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $\dfrac{0}{75}$ [[$>$|$=$|($<$)]] $0,00001$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $0,6$ [[$>$|$=$|($<$)]] $\dfrac{2}{3}$ 

</div>
</section>


<!-- data-solution-button="5"-->


<!-- Dezimalzalen 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 3:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $\dfrac{1}{4}$ [[($>$)|$=$|$<$]] $0,225$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $0,375$ [[$>$|($=$)|$<$]] $\dfrac{3}{8}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $\dfrac{8}{9}$ [[($>$)|$=$|($<$)]] $0,89$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $\dfrac{11}{5}$ [[$>$|$=$|($<$)]] $11,5$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $0,45$ [[$>$|($=$)|$<$]] $\dfrac{9}{20}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $\dfrac{1}{3}$ [[($>$)|$=$|$<$]] $0,333$ 

</div>
</section>





<!-- Dezimalzalen 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 4:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\bar{7}$ [[$>$|($=$)|$<$]] $\dfrac{7}{9}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $\dfrac{5}{6}$ [[$>$|$=$|($<$)]] $0,85$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $\dfrac{5}{3}$ [[($>$)|$=$|($<$)]] $1,6667$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $0,\bar{9}$ [[$>$|($=$)|$<$]] $\dfrac{7}{7}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $0,125$ [[$>$|$=$|($<$)]] $\dfrac{1}{7}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $\dfrac{9}{8}$ [[($>$)|$=$|$<$]] $\dfrac{10}{9}$ 

</div>
</section>



<!-- Dezimalzalen 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 5:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $\dfrac{1}{40}$ [[$>$|$=$|($<$)]] $0,03$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $0,45$ [[($>$)|$=$|$<$]] $\dfrac{4}{9}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,\overline{428571}$ [[($>$)|($=$)|$<$]] $\dfrac{3}{7}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $\dfrac{7}{6}$ [[$>$|$=$|($<$)]] $1,2$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $5,2$ [[($>$)|$=$|$<$]] $\dfrac{5}{2}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $\dfrac{5}{12}$ [[$>$|$=$|($<$)]] $0,\bar{4}$ 

</div>
</section>

<!-- data-solution-button="5"-->


<!-- Dezimalzalen 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 6:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,78$ [[($>$)|$=$|$<$]] $\dfrac{12}{16}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $\dfrac{5}{6}$ [[$>$|($=$)|$<$]] $0,8\bar{3}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $\dfrac{8}{3}$ [[($>$)|$=$|($<$)]] $2,7$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $\dfrac{20}{9}$ [[$>$|$=$|($<$)]] $2,25$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $0,85$ [[$>$|($=$)|$<$]] $\dfrac{17}{20}$ 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $\dfrac{8}{25}$ [[$>$|$=$|($<$)]] $0,\bar{3}$ 

</div>
</section>



<!-- Dezimalzalen 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 7:__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |     3     |    0       |       2      |        9       |                  |


<!-- data-solution-button="5"-->
 [[  3,029  ]]


__$b)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |           |            |       6      |        0       |         2         |


<!-- data-solution-button="5"-->
 [[   0,0602   ]]


__$c)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|      4      |    0     |    2      |    1       |       6      |        3       |         9         |


<!-- data-solution-button="5"-->
 [[  402,1639   ]]





<!-- Dezimalzalen 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 8:__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |    2     |    0      |    0       |       5      |                |                   |


<!-- data-solution-button="5"-->
 [[  20,05     ]]


__$b)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |           |            |              |                |         2         |


<!-- data-solution-button="5"-->
 [[   0,0002   ]]


__$c)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|      7      |    2     |    0      |    4       |       7      |        0       |         4         |


<!-- data-solution-button="5"-->
 [[  720,4704  ]]






<!-- Dezimalzalen 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 9:__ **Gib** die Zahlen, die durch die Ziffern in der Stellenwerttafel dargestellt sind **an**.





__$a)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |           |    4       |       0      |        4       |                   |


<!-- data-solution-button="5"-->
 [[   0,404  ]]


__$b)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|      1      |    9     |    4      |    0       |       2      |                |                   |


<!-- data-solution-button="5"-->
 [[  194,02  ]]


__$c)\;\;$__ 

<!-- data-type="none" -->
|  Hunderter  |  Zehner  |   Einer   |  Zehntel   |  Hundertstel |  Tausendstel   |  Zehntausendstel  |
| :---------: | :------: | :-------: | :--------: | :----------: | :------------: | :---------------: |
|             |          |    5      |            |              |        7       |         5         |


<!-- data-solution-button="5"-->
 [[  5,0075  ]]



<!-- Dezimalzalen 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 10:__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)





__$a)\;\;$__ 0,0041

<!-- data-type="none" data-solution-button="5"  -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 0 ]] |  [[ 0 ]]  |    [[ 0 ]]  |  [[ 4 ]]    |     [[ 1 ]]       |



__$b)\;\;$__ 2,45

<!-- data-type="none" data-solution-button="5"  -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 2 ]] |  [[ 4 ]]  |    [[ 5 ]]  |  [[ 0 ]]    |     [[ 0 ]]       |



__$c)\;\;$__ 32,409

<!-- data-type="none" data-solution-button="5"  -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 3 ]] | [[ 2 ]] |  [[ 4 ]]  |    [[ 0 ]]  |  [[ 9 ]]    |     [[ 0 ]]       |





#### Übungsaufgaben zu Dezimalzahlen 11 bis 20



<!-- Dezimalzalen 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 11:__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)





__$a)\;\;$__ 17,054

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 1 ]] | [[ 7 ]] |  [[ 0 ]]  |    [[ 5 ]]  |  [[ 4 ]]    |     [[ 0 ]]       |



__$b)\;\;$__ 146,7912

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 1 ]]   | [[ 4 ]] | [[ 6 ]] |  [[ 7 ]]  |    [[ 9 ]]  |  [[ 1 ]]    |     [[ 2 ]]       |



__$c)\;\;$__ 0,0077

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 0 ]] |  [[ 0 ]]  |    [[ 0 ]]  |  [[ 7 ]]    |     [[ 7 ]]       |








<!-- Dezimalzalen 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 12:__ **Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)





__$a)\;\;$__ 7,058

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 7 ]] |  [[ 0 ]]  |    [[ 5 ]]  |  [[ 8 ]]    |     [[ 0 ]]       |



__$b)\;\;$__ 614,82

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 6 ]]   | [[ 1 ]] | [[ 4 ]] |  [[ 8 ]]  |    [[ 2 ]]  |  [[ 0 ]]    |     [[ 0 ]]       |



__$c)\;\;$__ 50,1903

<!-- data-type="none"  data-solution-button="5" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 5 ]] | [[ 0 ]] |  [[ 1 ]]  |    [[ 9 ]]  |  [[ 0 ]]    |     [[ 3 ]]       |








<!-- Dezimalzalen 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 13:__ **Gib** die Zahl als Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $4$ und $1 \quad$ \
[[ 2,5   ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $1$ und $1,5 \quad$ \
[[ 1,25  ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $7,7$ und $8,9 \quad$ \
[[ 8,3   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $0,1$ und $0,01 \quad$ \
[[ 0,055 ]] 
</div> 
</section>



<!-- Dezimalzalen 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 14:__ **Gib** die Zahl als Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $0$ und $0,7 \quad$ \
[[ 0,35  ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $10$ und $21 \quad$ \
[[ 15,5  ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,25$ und $1,75 \quad$ \
[[ 1     ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $4,2$ und $0,8 \quad$ \
[[  2,4  ]] 
</div> 
</section>



<!-- Dezimalzalen 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 15:__ **Gib** die Zahl als Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $6,5$ und $8 \quad$ \
[[ 7,25  ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $0,05$ und $0,75 \quad$ \
[[ 0,4   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $1,9$ und $3,5 \quad$ \
[[ 2,6   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $0,02$ und $2 \quad$ \
[[ 0,99  ]] 
</div> 
</section>





<!-- Dezimalzalen 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 16:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi16_1.png)

</center>

<!-- data-solution-button="5"-->
[[  1,25  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi16_2.png)

</center>

<!-- data-solution-button="5"-->
[[  0,75  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi16_3.png)

</center>

<!-- data-solution-button="5"-->
[[  3,28  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi16_4.png)

</center>

<!-- data-solution-button="5"-->
[[  0,25  ]]

</div> 
</section>



<!-- data-solution-button="5"-->


<!-- Dezimalzalen 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 17:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_1.png)

</center>

<!-- data-solution-button="5"-->
[[   5   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_2.png)

</center>

<!-- data-solution-button="5"-->
[[  2,25   ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_3.png)

</center>

<!-- data-solution-button="5"-->
[[  1,975  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi17_4.png)

</center>

<!-- data-solution-button="5"-->
[[  3,25  ]]

</div> 
</section>





<!-- data-solution-button="5"-->


<!-- Dezimalzalen 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 18:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi18_1.png)

</center>

<!-- data-solution-button="5"-->
[[   2   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi18_2.png)

</center>

<!-- data-solution-button="5"-->
[[  0,04  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi18_3.png)

</center>

<!-- data-solution-button="5"-->
[[  1,72  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Dezi18_4.png)

</center>

<!-- data-solution-button="5"-->
[[  1,136  ]]

</div> 
</section>







<!-- Dezimalzalen 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 19:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $2,3 + 0,39 =$ [[  2,69  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,25 + 0,84 =$ [[  2,19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 8,4 + 0,098 =$ [[  8,498  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2,27 + 6,54 =$ [[  8,81  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 5,8 + 0,89 =$ [[  6,69  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  4,78 + 0,75 =$ [[  5,53  ]]

</div> 
</section>



<!-- Dezimalzalen 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 20:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 8,7+ 2,9=$ [[  11,6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $5,45 + 2,68=$ [[  8,13  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $2,78 + 2,45=$ [[  5,23  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3,5+ 0,375=$ [[  3,875  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $6,25 + 4,875=$ [[  11,125  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 1,74+ 6,54=$ [[  8,28  ]]

</div> 
</section>





#### Übungsaufgaben zu Dezimalzahlen 21 bis 30



<!-- Dezimalzalen 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 21:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 4,2+ 1,37=$ [[  5,57  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $3,64 +2,78 =$ [[  6,42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 4,27+ 2,69=$ [[  6,96  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $5,34 + 2,87=$ [[  8,21  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,564+ 0,485=$ [[  1,049  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 1,57+ 3,74=$ [[  5,31  ]]

</div> 
</section>




<!-- Dezimalzalen 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 22:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 4,7+ 3,41=$ [[  8,11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,56+ 2,85=$ [[  4,41  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,85+ 2,846=$ [[  3,696  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3,45+ 2,97=$ [[  6,42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 8,43+ 0,76=$ [[  9,19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2,748 + 0,494=$ [[  3,242  ]]

</div> 
</section>



<!-- Dezimalzalen 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 23:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 9,3-5,5 =$ [[  3,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 2,5-0,47 =$ [[  2,03  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 6,4-2,22 =$ [[  4,18  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,28-0,125 =$ [[  0,155  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $1,75-0,8 =$ [[  0,95  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 11,6-8,9 =$ [[  2,7  ]]

</div> 
</section>




<!-- Dezimalzalen 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 24:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 5,26-1,15 =$ [[  4,11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6,3-4,88 =$ [[  1,42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 3,84-2,45 =$ [[  1,39  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 4,82-1,71 =$ [[  2,11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 6-0,375 =$ [[  5,625  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 4,53-2,68 =$ [[  1,85  ]]

</div> 
</section>



<!-- Dezimalzalen 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 25:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 5,14-2,8 =$ [[  2,34  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6,84-2,38 =$ [[  4,46  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 6,08-0,97 =$ [[  5,11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 1,34-0,809 =$ [[  0,531  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 4,78-2,54 =$ [[  2,24  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 5,97-2,64 =$ [[  3,33  ]]

</div> 
</section>






<!-- Dezimalzalen 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 26:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,94-0,008 =$ [[  0,932  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 2,3-0,48 =$ [[  1,82  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 7,49-2,84 =$ [[  4,65  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2,13-1,47 =$ [[  0,66  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 4,15-2,36 =$ [[  1,79  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2,64-1,83 =$ [[  0,81  ]]

</div> 
</section>






<!-- Dezimalzalen 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 27:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,25 \cdot 0,2 =$ [[  0,05  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,1 \cdot 0,6 =$ [[  0,66  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 2,4 \cdot 0,3 =$ [[  0,72  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 1,2 \cdot 1,3 =$ [[  1,32  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 4,5 \cdot 0,5 =$ [[  2,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2,2 \cdot 1,5 =$ [[  3,3  ]]

</div> 
</section>




<!-- Dezimalzalen 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 28:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,25 \cdot 8,4 =$ [[  2,1  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,2 \cdot 0,8 =$ [[  0,96  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 2,25 \cdot 1,2 =$ [[  2,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,9 \cdot 5,4 =$ [[  4,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3,6 \cdot 0,125 =$ [[  0,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 0,7 \cdot 4,5 =$ [[  3,15  ]]

</div> 
</section>





<!-- Dezimalzalen 0029 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 29:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2,1 \cdot 0,3 =$ [[  0,63  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,25 \cdot 0,25 =$ [[  0,0625  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,8 \cdot 25 =$ [[  20  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 6,4 \cdot 0,375 =$ [[  2,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,9 \cdot 0,12 =$ [[  0,108  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 1,3 \cdot 2,5 =$ [[  3,25  ]]

</div> 
</section>




<!-- Dezimalzalen 0030 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 30:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2,8 \cdot 0,25 =$ [[  0,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,5 \cdot 8,7 =$ [[  13,05  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1,2 \cdot 8,5 =$ [[  10,2  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,8 \cdot 0,05 =$ [[  0,04  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,3 \cdot 8,1 =$ [[  2,43  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 0,75 \cdot 0,2 =$ [[  0,15  ]]

</div> 
</section>






#### Übungsaufgaben zu Dezimalzahlen 31 bis 40



<!-- Dezimalzalen 0031 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 31:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 8,4:1,2 =$ [[  6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 5:0,2 =$ [[  25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,81:0,009 =$ [[  90  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 12,5:5 =$ [[  2,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,64:80 =$ [[  0,008  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 0,125:0,1 =$ [[  1,25  ]]

</div> 
</section>




<!-- Dezimalzalen 0032 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 32:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,35:0,7 =$ [[  0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 4:0,1 =$ [[  40  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,65:2,6 =$ [[  0,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,48:1,2 =$ [[  0,04  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 1,9:0,5 =$ [[  3,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 1,1:0,125 =$ [[  8,8  ]]

</div> 
</section>





<!-- Dezimalzalen 0033 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 33:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 4,7:0,25 =$ [[  18,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,225:1,5 =$ [[  0,15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 4,5:9 =$ [[  0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,54:0,6 =$ [[  0,9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 8,75:12,5 =$ [[  0,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 3,6:0,009 =$ [[  400  ]]

</div> 
</section>




<!-- Dezimalzalen 0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 34:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 9,6:0,12 =$ [[  80  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,85:1,7 =$ [[  0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1,11:8,88 =$ [[  0,125  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 6,25:2,5 =$ [[  2,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $6,3 :9 =$ [[  0,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 0,002:0,1 =$ [[  0,02  ]]

</div> 
</section>





<!-- Dezimalzalen 0035 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 35:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,\bar{6} \cdot 6 =$ [[  3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,\bar{3} : 0,\bar{2} =$ [[  6,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 7,\bar{5}+1,\bar{4} =$ [[  9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,\bar{7} : 0,\bar{4} =$ [[  1,75  ]]

</div> 
</section>



<!-- Dezimalzalen 0036 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 36:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 5,8\bar{7} - 0,\bar{7} =$ [[  5,1  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 3,\bar{8} \cdot 0,9 =$ [[  2,78  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 5,\bar{6} : 0,\bar{8} =$ [[  6,375  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 1,7\bar{3}+0,\bar{6} =$ [[  2,4  ]]

</div> 
</section>






<!-- Dezimalzalen 0037 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 37:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 1,\bar{8} : 0,\bar{4} =$ [[  4,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,\bar{2} \cdot 0,09 =$ [[  0,02  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1,1\bar{6} - 0,\bar{6} =$ [[  0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 5,42\bar{1}+1,5\bar{8} =$ [[  7,011  ]]

</div> 
</section>




<!-- Dezimalzalen 0038 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 38:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 1,\bar{5} : 0,\bar{8} =$ [[  1,75  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,\bar{3} \cdot 0,3 =$ [[  0,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 2,38\bar{7} - 0,\bar{7} =$ [[  1,61  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3,1\bar{4}+0,123\bar{5} =$ [[  3,268  ]]

</div> 
</section>



<!-- Dezimalzalen 0039 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 39:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 0,2 \cdot 4,5 + 0,6 =$ [[  1,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 8,4:0,14 - 22,5 =$ [[  47,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 2,56+1,28-0,75 =$ [[  3,09  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,4 \cdot 0,6 + 0,7 \cdot 0,3 =$ [[  0,45  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,75 \cdot 4,8 - 1,125 =$ [[  2,475  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 0,05:2,5+1,5 =$ [[  1,52  ]]

</div> 
</section>



<!-- Dezimalzalen 0040 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 40:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2,6 \cdot 0,25 - 0,01 =$ [[  0,64  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,56 : (1,57-1,49) =$ [[  0,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1,45 + 1,4 \cdot 0,09 =$ [[  1,566  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,2 \cdot 0,3 \cdot 0,4 =$ [[  0,024  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3,2-1,24-1,35 =$ [[  0,61  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2,4:8+2,045 =$ [[  2,345  ]]

</div> 
</section>






#### Übungsaufgaben zu Dezimalzahlen 41 bis 50



<!-- Dezimalzalen 0041 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 41:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 1,4 + 2,1 \cdot 0,3 =$ [[  2,09  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6,5 : 1,25 -1,6 =$ [[  3,6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 3,4 - 0,6 \cdot 1,1 =$ [[  2,84  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ (4,8+2,5) \cdot 0,02 =$ [[  0,146  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 5,7:6-2,1:6 =$ [[  0,6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ (0,8-0,45):0,7 =$ [[  0,5  ]]

</div> 
</section>



<!-- Dezimalzalen 0042 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 42:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 8,25 - 2,4 \cdot 2,5 =$ [[  2,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,8 \cdot 1,1 + 0,3 \cdot 0,5 =$ [[  1,03  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ (0,75-0,64) \cdot 0,5 =$ [[  0,055  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 16,9 : 13 - 0,5 =$ [[  0,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 0,25 \cdot 3,6 + 0,75 =$ [[  1,65  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 9,6:0,08 - 2,5 =$ [[  117,5  ]]

</div> 
</section>




<!-- Dezimalzalen 0043 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 43:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 16 \cdot 0,12 + 0,5 =$ [[  2,42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 0,4 \cdot 0,8 + 2 \cdot 0,09 =$ [[  0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 0,75:2,5 + 2,54 =$ [[  2,84  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 0,4 - 0,08 : 16 =$ [[  0,395  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 1,25 \cdot (5,7 - 4,2) =$ [[  1,875  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ (4,5 - 2,84) : 0,1 =$ [[  16,6  ]]

</div> 
</section>




<!-- Dezimalzalen 0044 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30"> \
__Aufgabe 44:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 7,2-1,5 \cdot 2,5 =$ [[  3,45  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 1,44:12+0,56 =$ [[  0,68  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ (2,9-2,25):0,5 =$ [[  1,3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 1,5 \cdot 7 - 0,75 \cdot 8-8 =$ [[  4,1  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 2,3:0,9 + 4:0,9 =$ [[  7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 4,5 \cdot (0,12 + 0,14 + 0,24) =$ [[  2,25  ]]

</div> 
</section>





<!-- Dezimalzalen 0045 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 45:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{2}{5} =$ [[  0,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{5}{4} =$ [[  1,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{7}{8} =$ [[  0,875  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{7}{2} =$ [[  3,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{37}{100} =$ [[  0,37  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{3}{20} =$ [[  0,15  ]]

</div> 
</section>





<!-- Dezimalzalen 0046 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 46:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{3}{4} =$ [[  0,75  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{6}{5} =$ [[  1,2  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{15}{2} =$ [[  7,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{1}{16} =$ [[  0,0625  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{1}{25} =$ [[  0,04  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{987}{1000} =$ [[  0,987  ]]

</div> 
</section>




<!-- Dezimalzalen 0047 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 47:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{9}{4} =$ [[  2,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{17}{20} =$ [[  0,85  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{19}{5} =$ [[  3,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{9}{8} =$ [[  1,125  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{548}{100} =$ [[  5,48  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{8}{50} =$ [[  0,16  ]]

</div> 
</section>




<!-- Dezimalzalen 0048 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 48:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{5}{8} =$ [[  0,625  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{7}{5} =$ [[  1,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{12}{25} =$ [[  0,48  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{9}{10} =$ [[  0,9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{17}{4} =$ [[  4,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{13}{10000} =$ [[  0,0013  ]]

</div> 
</section>



<!-- Dezimalzalen 0049 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 49:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 80 \cdot 10 =$ [[  800  ]] \
$ 80 \cdot 1 =$ [[  80   ]] \
$ 80 \cdot 0,1 =$ [[  8    ]] \
$ 80 \cdot 0,01 =$ [[  0,8  ]] \
$ 80 \cdot 0,001 =$ [[  0,08  ]] \
$ 80 \cdot 0,0001 =$ [[  0,008  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 4 \cdot 300 =$ [[  1200  ]] \
$ 4 \cdot 30 =$ [[  120   ]] \
$ 4 \cdot 3 =$ [[  12   ]] \
$ 4 \cdot 0,3 =$ [[  1,2    ]] \
$ 4 \cdot 0,03 =$ [[  0,12  ]] \
$ 4 \cdot 0,003 =$ [[  0,012  ]] \
$ 4 \cdot 0,0003 =$ [[  0,0012  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 5 \cdot 60 =$ [[  300  ]] \
$ 5 \cdot 6 =$ [[  30   ]] \
$ 0,5 \cdot 6 =$ [[  3   ]] \
$ 0,5 \cdot 0,6 =$ [[  0,3    ]] \
$ 0,5 \cdot 0,06 =$ [[  0,03  ]] \
$ 0,5 \cdot 0,006 =$ [[  0,003  ]] \
$ 0,5 \cdot 0,0006 =$ [[  0,0003  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 900 \cdot 4 =$ [[  3600  ]] \
$ 90 \cdot 4 =$ [[  360   ]] \
$ 9 \cdot 4 =$ [[  36    ]] \
$ 0,9 \cdot 4 =$ [[  3,6  ]] \
$ 0,09 \cdot 4 =$ [[  0,36  ]] \
$ 0,09 \cdot 0,4 =$ [[  0,036  ]] \
$ 0,09 \cdot 0,04 =$ [[  0,0036 ]]

</div>
</section>






<!-- Dezimalzalen 0050 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 50:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 14 \cdot 20 =$ [[  280  ]] \
$ 14 \cdot 2 =$ [[  28   ]] \
$ 14 \cdot 0,2 =$ [[  2,8    ]] \
$ 14 \cdot 0,02 =$ [[  0,28  ]] \
$ 14 \cdot 0,002 =$ [[  0,028  ]] \
$ 14 \cdot 0,0002 =$ [[  0,0028  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 5 \cdot 500 =$ [[  2500  ]] \
$ 5 \cdot 50 =$ [[  250   ]] \
$ 5 \cdot 5 =$ [[  25   ]] \
$ 5 \cdot 0,5 =$ [[  2,5    ]] \
$ 5 \cdot 0,05 =$ [[  0,25  ]] \
$ 5 \cdot 0,005 =$ [[  0,025  ]] \
$ 5 \cdot 0,0005 =$ [[  0,0025  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 400 \cdot 800 =$ [[  320000  ]] \
$ 40 \cdot 80 =$ [[  3200   ]] \
$ 4 \cdot 8 =$ [[  32     ]] \
$ 0,4 \cdot 0,8 =$ [[  0,32      ]] \
$ 0,04 \cdot 0,08 =$ [[  0,0032  ]] \
$ 0,004 \cdot 0,008 =$ [[  0,000032  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 24000 \cdot 0,004 =$ [[  96   ]] \
$ 2400 \cdot 0,04 =$ [[  96   ]] \
$ 240 \cdot 0,4 =$ [[  96   ]] \
$ 24 \cdot 4 =$ [[  96   ]] \
$ 2,4 \cdot 40 =$ [[  96   ]] \
$ 0,24 \cdot 400 =$ [[  96   ]] \
$ 0,024 \cdot 4000 =$ [[  96   ]]

</div>
</section>






#### Übungsaufgaben zu Dezimalzahlen 51 bis 60



<!-- Dezimalzalen 0051 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 51:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 500 \cdot 70 =$ [[  35000  ]] \
$ 500 \cdot 7 =$ [[  3500   ]] \
$ 500 \cdot 0,7 =$ [[  350    ]] \
$ 500 \cdot 0,07 =$ [[  35  ]] \
$ 500 \cdot 0,007 =$ [[  3,5  ]] \
$ 500 \cdot 0,0007 =$ [[  0,35  ]] \
$ 500 \cdot 0,00007 =$ [[  0,035  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 11 \cdot 60 =$ [[  660  ]] \
$ 11 \cdot 6 =$ [[  66   ]] \
$ 11 \cdot 0,6 =$ [[  6,6   ]] \
$ 11 \cdot 0,06 =$ [[  0,66    ]] \
$ 11 \cdot 0,006 =$ [[  0,066  ]] \
$ 11 \cdot 0,0006 =$ [[  0,0066  ]] \
$ 11 \cdot 0,00006 =$ [[  0,00066  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 400 \cdot 20 =$ [[  8000  ]] \
$ 40 \cdot 2 =$ [[  80   ]] \
$ 4 \cdot 0,2 =$ [[  0,8   ]] \
$ 0,4 \cdot 0,02 =$ [[  0,008    ]] \
$ 0,04 \cdot 0,002 =$ [[  0,00008  ]] \
$ 0,004 \cdot 0,0002 =$ [[  0,0000008  ]] \
$ 0,0004 \cdot 0,00002 =$ [[  0,000000008  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 900 \cdot 0,007 =$ [[  6,3  ]] \
$ 90 \cdot 0,07 =$ [[  6,3  ]] \
$ 9 \cdot 0,7 =$ [[  6,3  ]] \
$ 0,9 \cdot 7 =$ [[  6,3  ]] \
$ 0,09 \cdot 70 =$ [[  6,3  ]] \
$ 0,009 \cdot 700 =$ [[  6,3  ]] \
$ 0,0009 \cdot 7000 =$ [[  6,3  ]]

</div>
</section>




<!-- Dezimalzalen 0052 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 52:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 80 : 2 =$ [[  40   ]] \
$ 8 : 2 =$ [[  4    ]] \
$ 0,8 : 2 =$ [[  0,4   ]] \
$ 0,08 : 2 =$ [[  0,04  ]] \
$ 0,008 : 2 =$ [[  0,004  ]] \
$ 0,0008 : 2 =$ [[  0,0004  ]] \
$ 0,00008 : 2 =$ [[  0,00004  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 360 : 120 =$ [[  3       ]] \
$ 360 : 12 =$  [[  30      ]] \
$ 360 : 1,2 =$ [[  300     ]] \
$ 360 : 0,12 =$ [[  3000    ]] \
$ 360 : 0,012 =$ [[  30000   ]] \
$ 360 : 0,0012 =$ [[  300000  ]] \
$ 360 : 0,00012 =$ [[  3000000 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 540 : 9 =$ [[  60  ]] \
$ 54 : 0,9 =$ [[  60  ]] \
$ 5,4 : 0,09 =$ [[  60  ]] \
$ 0,54 : 0,009 =$ [[  60  ]] \
$ 0,054 : 0,0009 =$ [[  60  ]] \
$ 0,0054 : 0,00009 =$ [[  60  ]] \
$ 0,00054 : 0,000009 =$ [[  60  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 400 : 50 =$ [[  8    ]] \
$ 40 : 50 =$ [[  0,8  ]] \
$ 40 : 5 =$ [[  8  ]] \
$ 4 : 5 =$ [[  0,8  ]] \
$ 4 : 0,5 =$ [[  8  ]] \
$ 0,4 : 0,5 =$ [[  0,8  ]] \
$ 0,4 : 0,05 =$ [[  8  ]] 

</div>
</section>







<!-- Dezimalzalen 0053 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 53:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 250 : 5 =$ [[  50      ]] \
$ 25 : 5 =$  [[  5       ]] \
$ 2,5 : 5 =$ [[  0,5     ]] \
$ 0,25 : 5 =$ [[  0,05    ]] \
$ 0,025 : 5 =$ [[  0,005    ]] \
$ 0,0025 : 5 =$ [[  0,0005   ]] \
$ 0,00025 : 5 =$ [[  0,00005  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 84000 : 12000 =$ [[  7  ]] \
$ 8400 : 1200 =$ [[  7  ]] \
$ 840 : 120 =$ [[  7  ]] \
$ 84 : 12 =$ [[  7  ]] \
$ 8,4 : 1,2 =$ [[  7  ]] \
$ 0,84 : 0,12 =$ [[  7  ]] \
$ 0,084 : 0,012 =$ [[  7  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 1200 : 4 =$ [[  300     ]] \
$ 120 : 4 =$ [[  30      ]] \
$ 12 : 4 =$ [[  3       ]] \
$ 1,2 : 4 =$ [[  0,3     ]] \
$ 0,12 : 4 =$ [[  0,03    ]] \
$ 0,012 : 4 =$ [[  0,003   ]] \
$ 0,0012 : 4 =$ [[  0,0003  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 36 : 0,006 =$ [[  6000   ]] \
$ 36 : 0,06 =$ [[  600    ]] \
$ 36 : 0,6 =$ [[  60     ]] \
$ 36 : 6 =$ [[  6      ]] \
$ 36 : 60 =$ [[  0,6    ]] \
$ 36 : 600 =$ [[  0,06   ]] \
$ 36 : 6000 =$ [[  0,006  ]] 

</div>
</section>






<!-- Dezimalzalen 0054 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 54:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ \
$ 56 : 7000 =$ [[  0,008  ]] \
$ 56 : 700 =$ [[  0,08  ]] \
$ 56 : 70 =$ [[  0,8  ]] \
$ 56 : 7 =$ [[  8  ]] \
$ 56 : 0,7 =$ [[  80  ]] \
$ 56 : 0,07 =$ [[  800  ]] \
$ 56 : 0,007 =$ [[  8000  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ \
$ 7500 : 15 =$ [[  500  ]] \
$ 750 : 15 =$ [[  50  ]] \
$ 75 : 15 =$ [[  5  ]] \
$ 7,5 : 15 =$ [[  0,5  ]] \
$ 0,75 : 15 =$ [[  0,05  ]] \
$ 0,075 : 15 =$ [[  0,005  ]] \
$ 0,0075 : 15 =$ [[  0,0005  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ \
$ 9600 : 1600 =$ [[  6  ]] \
$ 960 : 160 =$ [[  6  ]] \
$ 96 : 16 =$ [[  6  ]] \
$ 9,6 : 1,6 =$ [[  6  ]] \
$ 0,96 : 0,16 =$ [[  6  ]] \
$ 0,096 : 0,016 =$ [[  6  ]] \
$ 0,0096 : 0,0016 =$ [[  6  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ \
$ 48000 : 0,006 =$ [[  8000000    ]] \
$ 4800 : 0,06 =$ [[  80000     ]] \
$ 480 : 0,6 =$ [[  800      ]] \
$ 48 : 6 =$ [[  8         ]] \
$ 4,8 : 60 =$ [[  0,08      ]] \
$ 0,48 : 600 =$ [[  0,0008    ]] \
$ 0,048 : 6000 =$ [[  0,000008  ]] 

</div>
</section>





<!-- Dezimalzalen 0055 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 55:__ **Gib** die durch den Term angezeigte Dezimalzahl **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{3}{10}+\dfrac{9}{100} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,39   ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{6}{10}+\dfrac{2}{100}+\dfrac{7}{1000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,627  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{5}{10}+\dfrac{5}{1000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,505  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{4}{100}+\dfrac{1}{1000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,041  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{6}{1}+\dfrac{8}{100} \qquad$  \


<!-- data-solution-button="5"-->
 [[  6,08   ]] 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{5}{1}+\dfrac{4}{100}+\dfrac{7}{10000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  5,0407 ]] 


</div>
</section>




<!-- Dezimalzalen 0056 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 56:__ **Gib** die durch den Term angezeigte Dezimalzahl **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{1}{10}+\dfrac{5}{100}+\dfrac{2}{100} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,152   ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{8}{10}+\dfrac{9}{100}+\dfrac{3}{1000}+\dfrac{5}{10000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,8935  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{9}{100}+\dfrac{8}{10000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,0908  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{7}{1000}+\dfrac{9}{10000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,0079  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{7}{1}+\dfrac{15}{1000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  7,015   ]] 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{5}{1000}+\dfrac{5}{1000000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,005005 ]] 


</div>
</section>





<!-- Dezimalzalen 0057 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 57:__ **Gib** die durch den Term angezeigte Dezimalzahl **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{129}{100} \qquad$  \


<!-- data-solution-button="5"-->
 [[  1,29   ]] 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{2}{1}+\dfrac{4}{10}+\dfrac{4}{100} \qquad$  \


<!-- data-solution-button="5"-->
 [[  2,44  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{3}{10}+\dfrac{8}{10000} \qquad$  \

<!-- data-solution-button="5"-->
 [[  0,3008  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{9}{100}+\dfrac{6}{1000}+\dfrac{11}{1} \qquad$  \


<!-- data-solution-button="5"-->
 [[  11,096  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{3}{1}+\dfrac{49}{1000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  3,049   ]] 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{7}{1000000} \qquad$  \


<!-- data-solution-button="5"-->
 [[  0,000007 ]] 


</div>
</section>





























<!-- Runden 0011 -->



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30"> \
__Aufgabe 58:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{6} \approx$ [[ 0,667 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $4,\overline{2} \approx$ [[ 4,222 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $1,\overline{633} \approx$ [[ 1,634 ]] 

</div>
</section>






<!-- Runden 0012 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 59:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{8} \approx$ [[ 0,889 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $1,\overline{35} \approx$ [[ 1,354 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $7,\overline{645891} \approx$ [[ 7,646 ]] 

</div>
</section>




<!-- Runden 0013 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 60:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $5,\overline{91} \approx$ [[ 5,919 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $2,\overline{7} \approx$ [[ 2,778 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $0,\overline{45} \approx$ [[ 0,455 ]] 

</div>
</section>



<!-- Runden 0014 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 61:__ *Gib* die Zahl gerundet auf drei Nachkommastellen *an*.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $0,\overline{9} \approx$ [[  1,000 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $13,\overline{97} \approx$ [[ 13,980 ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $3,\overline{2486} \approx$ [[  3,249 ]] 

</div>
</section>











