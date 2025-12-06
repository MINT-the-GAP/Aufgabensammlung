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







#### Übungsaufgaben zum Einsetzungsverfahren 1 bis 10










<!-- Parameter 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" data-solution-button="5"-->
|  $a$  |   $b$   |  $a+b$   |  $a \cdot b$ |  $b-a$   | $2 \cdot a$ |
| :---: | :-----: | :------: | :----------: | :------: | :---------: |
|   3   |     7   | [[ 10 ]] |   [[  21 ]]  | [[  4 ]] |  [[  6 ]]   |
|   5   |     6   | [[ 11 ]] |   [[  30 ]]  | [[  1 ]] |  [[ 10 ]]   |
|   9   |    14   | [[ 23 ]] |   [[ 126 ]]  | [[  5 ]] |  [[ 18 ]]   |
|   8   |    16   | [[ 24 ]] |   [[ 144 ]]  | [[  8 ]] |  [[ 16 ]]   |





<!-- Parameter 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" data-solution-button="5"-->
|  $a$  |   $b$   |   $c$   |  $a+c$   |  $c + b$     |  $b : a$ | $2 \cdot a \cdot c$ |
| :---: | :-----: | :-----: | :------: | :----------: | :------: | :---------: |
|   4   |     8   |     2   | [[ 6  ]] |   [[  10 ]]  | [[  2 ]] |  [[ 16 ]]   |
|   6   |    12   |     7   | [[ 13 ]] |   [[  19 ]]  | [[  2 ]] |  [[ 84 ]]   |
|   5   |    25   |     3   | [[ 8  ]] |   [[  8  ]]  | [[  5 ]] |  [[ 30 ]]   |
|   9   |    27   |     2   | [[ 11 ]] |   [[  11 ]]  | [[  3 ]] |  [[ 36 ]]   |





<!-- Parameter 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" data-solution-button="5"-->
|  $r$  |   $s$   |  $4\cdot s$   |  $r + s$     | $s \cdot s$ | $r \cdot r \cdot r$ |
| :---: | :-----: | :-----------: | :----------: | :---------: | :---------: |
|   4   |    6   |    [[ 24 ]]    |   [[ 10 ]]   |  [[ 36  ]]  |  [[ 64  ]]  |
|   3   |    4   |    [[ 16 ]]    |   [[ 7  ]]   |  [[ 16  ]]  |  [[ 27  ]]  |
|   6   |    8   |    [[ 32 ]]    |   [[ 14 ]]   |  [[ 64  ]]  |  [[ 216 ]]  |
|   5   |    11  |    [[ 44 ]]    |   [[ 16 ]]   |  [[ 121 ]]  |  [[ 125 ]]  |






<!-- Parameter 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" data-solution-button="5" -->
|  $u$  |   $v$   |   $x$   |  $v-u$   |  $v - x$     | $u \cdot x$  | $v \cdot x$ |
| :---: | :-----: | :-----: | :------: | :----------: | :---------:  | :---------: |
|   7   |    28   |     5   | [[ 21 ]] |   [[  23 ]]  |  [[  35  ]]  |  [[ 140 ]]  |
|   3   |    13   |     2   | [[ 10 ]] |   [[  11 ]]  |  [[  39  ]]  |  [[ 26  ]]  |
|   9   |    18   |     3   | [[ 9  ]] |   [[  15 ]]  |  [[  162 ]]  |  [[ 54  ]]  |
|   4   |    22   |     8   | [[ 18 ]] |   [[  14 ]]  |  [[  88  ]]  |  [[ 176 ]]  |






<!-- Parameter 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" 
data-solution-button="5" -->
|  $a$  |   $c$  |   $r$   |  $a\cdot c - r$  |  $ r + a \cdot c$ | $(r+c)\cdot a$ |
| :---: | :----: | :-----: | :------:         | :----------:      | :-----------:  |
|   8   |    7   |     6   | [[ 50 ]]         |   [[ 62 ]]        |  [[  104  ]]   |
|   6   |    5   |     8   | [[ 22 ]]         |   [[ 38 ]]        |  [[  78  ]]    |
|   4   |    9   |     3   | [[ 33 ]]         |   [[ 39 ]]        |  [[  48  ]]    |
|   9   |    3   |     5   | [[ 22 ]]         |   [[ 33 ]]        |  [[  135  ]]   |





<!-- Parameter 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" 
data-solution-button="5" -->
|  $z$  |   $x$  |   $n$   |  $n - x - z$  |  $ n - x \cdot z$ | $ n - 4 \cdot z$ |
| :---: | :----: | :-----: | :------:      | :----------:      | :-----------:    |
|   8   |    6   |    96   | [[ 82 ]]      |   [[ 40 ]]        |  [[  64  ]]      |
|   12  |    5   |    84   | [[ 67 ]]      |   [[ 24 ]]        |  [[  36  ]]      |
|   3   |    14  |    67   | [[ 50 ]]      |   [[ 25 ]]        |  [[  55  ]]      |
|   7   |    9   |    79   | [[ 63 ]]      |   [[ 16 ]]        |  [[  51  ]]      |





<!-- Parameter 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" 
data-solution-button="5" -->
|  $k$  |   $g$  |   $u$   |  $ (k-g):u $  |  $ k - g \cdot u $ | $ u \cdot u + k \cdot g $ |
| :---: | :----: | :-----: | :------:      | :----------:       | :-----------:             |
|   23  |   5    |    3    | [[ 6 ]]       |   [[ 8 ]]          |  [[  124  ]]              |
|   21  |   7    |    2    | [[ 7 ]]       |   [[ 7 ]]          |  [[  151  ]]              |
|   54  |   9    |    5    | [[ 9 ]]       |   [[ 9 ]]          |  [[  511  ]]              |
|   57  |   13   |    4    | [[ 11 ]]      |   [[ 4 ]]          |  [[  757  ]]              |





<!-- Parameter 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false"
data-solution-button="5" -->
|  $t$  |   $k$  |   $d$   |  $ t+k-d $  |  $ t \cdot d $ | $ d - k \cdot t $ |
| :---: | :----: | :-----: | :------:    | :----------:   | :-----------:     |
|  5    |   -6   |    8    | [[ -9  ]]   |   [[  40 ]]    |  [[ 38  ]]        |
|  -8   |   4    |    -6   | [[ -10 ]]   |   [[  48 ]]    |  [[ 18  ]]        |
|  -4   |   -7   |    9    | [[ -20 ]]   |   [[ -36 ]]    |  [[ -19 ]]        |
|   3   |   -5   |    -8   | [[ 6   ]]   |   [[ -24 ]]    |  [[ 7   ]]        |





<!-- Parameter 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false"
data-solution-button="5" -->
|  $a$  |   $c$  |   $e$   |  $ e \cdot e - c $  |  $ |a|-|c| $ | $ a \cdot c \cdot e $ |
| :---: | :----: | :-----: | :------------:      | :----------: | :-------------------: |
|   -2  |    -7  |    -4   | [[ 23 ]]            |   [[ -5 ]]   |  [[ -56  ]]           |
|   4   |   -9   |    3    | [[ 18 ]]            |   [[ -5 ]]   |  [[ -108 ]]           |
|   -5  |   4    |   -2    | [[ 0  ]]            |   [[ 1  ]]   |  [[ 40   ]]           |
|   -7  |   -5   |    9    | [[ 86 ]]            |   [[ 2  ]]   |  [[ 315  ]]           |





<!-- Parameter 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false"
data-solution-button="5" -->
|  $z$  |   $r$  |   $s$   |  $ z+r\cdot s $  |  $ z+r+2 \cdot s $ | $ |s|\cdot s - r $ |
| :---: | :----: | :-----: | :---------:      | :----------:       | :-----------:      |
|  6    |   -5   |   -4    | [[ 26  ]]        |   [[ -7  ]]        |  [[ -11 ]]         |
|  -8   |   3    |    -6   | [[ -26 ]]        |   [[ -17 ]]        |  [[ -39 ]]         |
|   -3  |   7    |    -4   | [[ -31 ]]        |   [[ -4  ]]        |  [[ -23 ]]         |
|   7   |   -9   |    -5   | [[ 52  ]]        |   [[ -12 ]]        |  [[ -16 ]]         |



