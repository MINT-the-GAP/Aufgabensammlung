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








#### Übungsaufgaben zur Bruchrechnung 1 bis 10





<!--  Bruchrechnung 0001  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha1.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  4  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha2.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  4  ]] \
Nenner: [[  16 ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha3.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  6  ]] \
Nenner: [[ 16  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha4.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  8  ]] \
Nenner: [[  16 ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha5.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  12 ]] \
Nenner: [[  16 ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha6.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  4  ]] \
Nenner: [[ 16  ]] 

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha7.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  3  ]] 

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha8.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  2  ]] \
Nenner: [[  9  ]] 

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha9.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  16 ]] \
Nenner: [[  32 ]] 

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha10.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  3  ]] \
Nenner: [[  6  ]] 

</div>

</section>







<!--  Bruchrechnung 0002  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha11.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  4  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha12.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha13.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[ 16  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha14.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  1  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha15.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  2  ]] \
Nenner: [[  3  ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha16.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[ 13  ]] \
Nenner: [[ 16  ]] 

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha17.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  0  ]] \
Nenner: [[  1  ]] 

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha18.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[  8  ]] 

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha19.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[  12 ]] 

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha20.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  16 ]] 

</div>

</section>













<!--  Bruchrechnung 0003  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)




<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha21.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[ 18  ]] \
Nenner: [[ 64  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha22.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  4  ]] \
Nenner: [[  9  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha23.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[ 10  ]] \
Nenner: [[ 36  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha24.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  4  ]] \
Nenner: [[  12 ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha25.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  16 ]] \
Nenner: [[  64 ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha26.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  6  ]] \
Nenner: [[ 24  ]] 

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha27.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  6  ]] 

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha28.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  6  ]] \
Nenner: [[ 18  ]] 

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha29.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  10 ]] \
Nenner: [[  32 ]] 

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha30.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  9  ]] \
Nenner: [[  12 ]] 

</div>

</section>







<!--  Bruchrechnung 0004  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)




<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha31.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  3  ]] \
Nenner: [[  4  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha32.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[ 12  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha33.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  7  ]] \
Nenner: [[ 16  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha34.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  12 ]] \
Nenner: [[  16 ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha35.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[  6  ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha36.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  8  ]] \
Nenner: [[ 16  ]] 

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha37.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  6  ]] \
Nenner: [[  6  ]] 

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha38.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  2  ]] \
Nenner: [[  8  ]] 

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha39.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  8  ]] \
Nenner: [[  12 ]] 

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="width:150px" -->
![](Kap2/brucha40.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  0  ]] \
Nenner: [[  16 ]] 

</div>

</section>







<!--  Bruchrechnung 0005  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha41.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  3  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha42.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  2  ]] 

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha43.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  4  ]] 

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha44.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  5  ]] \
Nenner: [[  8  ]] 

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha45.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  7  ]] \
Nenner: [[ 16  ]] 

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:400px" -->
![](Kap2/brucha46.png)

</center>

<!-- data-solution-button="5"-->
Zähler: [[  1  ]] \
Nenner: [[  8  ]] 

</div>


</section>











<!--  Bruchrechnung 0006  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{1}{5}$ [[$>$|$=$|($<$)]] $\dfrac{1}{3}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{5}{10}$ [[$>$|($=$)|$<$]] $\dfrac{1}{2}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{4}{7}$ [[($>$)|$=$|$<$]] $\dfrac{3}{7}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{3}{4}$ [[($>$)|$=$|$<$]] $\dfrac{4}{8}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{3}{20}$ [[$>$|$=$|($<$)]] $\dfrac{3}{8}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{9}{8}$ [[($>$)|$=$|$<$]] $\dfrac{7}{7}$ 


</div>
</section>











<!--  Bruchrechnung 0007  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{2}{5}$ [[$>$|($=$)|$<$]] $\dfrac{4}{10}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{3}{8}$ [[($>$)|$=$|$<$]] $\dfrac{1}{2}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{5}{15}$ [[$>$|($=$)|$<$]] $\dfrac{2}{6}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{5}{3}$ [[($>$)|$=$|$<$]] $\dfrac{7}{4}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{17}{100}$ [[$>$|$=$|($<$)]] $\dfrac{2}{10}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{7}{6}$ [[$>$|$=$|($<$)]] $\dfrac{4}{3}$ 


</div>
</section>


















<!--  Bruchrechnung 0008  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.




<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{7}{10}$ [[$>$|$=$|($<$)]] $\dfrac{9}{10}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{8}{5}$ [[$>$|$=$|($<$)]] $\dfrac{7}{4}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{2}{3}$ [[($>$)|$=$|$<$]] $\dfrac{3}{7}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{36}{27}$ [[$>$|($=$)|$<$]] $\dfrac{4}{3}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{17}{20}$ [[($>$)|$=$|$<$]] $\dfrac{7}{8}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{11}{9}$ [[($>$)|$=$|$<$]] $\dfrac{8}{7}$ 


</div>
</section>


















<!--  Bruchrechnung 0009  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.




<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{5}{8}$ [[$>$|$=$|($<$)]] $\dfrac{3}{4}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{9}{7}$ [[($>$)|$=$|$<$]] $\dfrac{8}{9}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{15}{60}$ [[$>$|($=$)|$<$]] $\dfrac{3}{12}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{5}{9}$ [[$>$|$=$|($<$)]] $\dfrac{4}{7}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{12}{5}$ [[$>$|$=$|($<$)]] $\dfrac{11}{4}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{7}{11}$ [[($>$)|$=$|$<$]] $\dfrac{5}{9}$ 


</div>
</section>











<!--  Bruchrechnung 0010  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Entscheide** welches Relationszeichen eine wahre mathematische Aussage darstellt.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $\dfrac{8}{9}$ [[($>$)|$=$|$<$]] $\dfrac{2}{3}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $\dfrac{9}{24}$ [[$>$|($=$)|$<$]] $\dfrac{3}{8}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\dfrac{12}{11}$ [[($>$)|$=$|$<$]] $\dfrac{11}{12}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{5}{6}$ [[($>$)|$=$|$<$]] $\dfrac{7}{10}$ 

</div>
<div class="flex-child">

__$e)\;\;$__ $\dfrac{13}{25}$ [[($>$)|$=$|$<$]] $\dfrac{27}{61}$ 

</div>
<div class="flex-child">

__$f)\;\;$__ $\dfrac{17}{6}$ [[$>$|$=$|($<$)]] $\dfrac{22}{7}$ 


</div>
</section>





#### Übungsaufgaben zur Bruchrechnung 11 bis 20


<!--  Bruchrechnung 0011  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{1}{8} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{1}{8} & = \dfrac{1 \cdot 4}{2 \cdot 4} + \dfrac{1}{8}  \\
 & = \dfrac{4}{8} + \dfrac{1}{8}  \\
 & = \dfrac{4+1}{8}  \\
 & = \dfrac{5}{8} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{1}{3} + \dfrac{1}{6} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{1}{6} & = \dfrac{1 \cdot 2}{3 \cdot 2} + \dfrac{1}{6}  \\
 & = \dfrac{2}{6} + \dfrac{1}{6}  \\
 & = \dfrac{2+1}{6}  \\
 & = \dfrac{3}{6} = \dfrac{1}{2} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{5} + \dfrac{1}{10} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{1}{10} & = \dfrac{2 \cdot 2}{5 \cdot 2} + \dfrac{1}{10}  \\
 & = \dfrac{4}{10} + \dfrac{1}{10}  \\
 & = \dfrac{4+1}{10}  \\
 & = \dfrac{5}{10} = \dfrac{1}{2} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{4} + \dfrac{1}{8} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{1}{8} & = \dfrac{3 \cdot 2}{4 \cdot 2} + \dfrac{1}{8}  \\
 & = \dfrac{6}{8} + \dfrac{1}{8}  \\
 & = \dfrac{6+1}{8}  \\
 & = \dfrac{7}{8} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{6} + \dfrac{1}{12} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{1}{12} & = \dfrac{5 \cdot 2}{6 \cdot 2} + \dfrac{1}{12}  \\
 & = \dfrac{10}{12} + \dfrac{1}{12}  \\
 & = \dfrac{10+1}{12}  \\
 & = \dfrac{11}{12} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{10} + \dfrac{1}{5} = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\dfrac{7}{10} + \dfrac{1}{5} & = \dfrac{7}{10} + \dfrac{1 \cdot 2}{5 \cdot 2}  \\
 & = \dfrac{7}{10} + \dfrac{2}{10}  \\
 & = \dfrac{7+2}{10}  \\
 & = \dfrac{9}{10} \\
\end{align*}
$$
************
</div>

</section>













<!--  Bruchrechnung 0012  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{14} + \dfrac{1}{7} = $ [[  5/14  ]]
@Algebrite.check(5/14)
************
$$
\begin{align*}
\dfrac{3}{14} + \dfrac{1}{7} &= \dfrac{3}{14} + \dfrac{1 \cdot 2}{7 \cdot 2} \\
&= \dfrac{3}{14} + \dfrac{2}{14} \\
&= \dfrac{5}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{1}{9} + \dfrac{1}{3} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{1}{9} + \dfrac{1}{3} &= \dfrac{1}{9} + \dfrac{1 \cdot 3}{3 \cdot 3} \\
&= \dfrac{1}{9} + \dfrac{3}{9} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{8} + \dfrac{1}{4} = $ [[  9/8  ]]
@Algebrite.check(9/8)
************
$$
\begin{align*}
\dfrac{7}{8} + \dfrac{1}{4} &= \dfrac{7}{8} + \dfrac{1 \cdot 2}{4 \cdot 2} \\
&= \dfrac{7}{8} + \dfrac{2}{8} \\
&= \dfrac{9}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{20} + \dfrac{1}{5} = $ [[  17/20  ]]
@Algebrite.check(17/20)
************
$$
\begin{align*}
\dfrac{13}{20} + \dfrac{1}{5} &= \dfrac{13}{20} + \dfrac{1 \cdot 4}{5 \cdot 4} \\
&= \dfrac{13}{20} + \dfrac{4}{20} \\
&= \dfrac{17}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{15} + \dfrac{1}{5} = $ [[  7/15  ]]
@Algebrite.check(7/15)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{1}{5} &= \dfrac{4}{15} + \dfrac{1 \cdot 3}{5 \cdot 3} \\
&= \dfrac{4}{15} + \dfrac{3}{15} \\
&= \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{28} + \dfrac{1}{14} = $ [[  13/28  ]]
@Algebrite.check(13/28)
************
$$
\begin{align*}
\dfrac{11}{28} + \dfrac{1}{14} &= \dfrac{11}{28} + \dfrac{1 \cdot 2}{14 \cdot 2} \\
&= \dfrac{11}{28} + \dfrac{2}{28} \\
&= \dfrac{13}{28}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0013  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** den Wert des Terms.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{12} + \dfrac{1}{6} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{12} + \dfrac{1}{6} &= \dfrac{5}{12} + \dfrac{1 \cdot 2}{6 \cdot 2} \\
&= \dfrac{5}{12} + \dfrac{2}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{16} + \dfrac{1}{8} = $ [[  11/16  ]]
@Algebrite.check(11/16)
************
$$
\begin{align*}
\dfrac{9}{16} + \dfrac{1}{8} &= \dfrac{9}{16} + \dfrac{1 \cdot 2}{8 \cdot 2} \\
&= \dfrac{9}{16} + \dfrac{2}{16} \\
&= \dfrac{11}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{18} + \dfrac{1}{9} = $ [[  7/18  ]]
@Algebrite.check(7/18)
************
$$
\begin{align*}
\dfrac{5}{18} + \dfrac{1}{9} &= \dfrac{5}{18} + \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{5}{18} + \dfrac{2}{18} \\
&= \dfrac{7}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{15}{28} + \dfrac{1}{7} = $ [[  19/28  ]]
@Algebrite.check(19/28)
************
$$
\begin{align*}
\dfrac{15}{28} + \dfrac{1}{7} &= \dfrac{15}{28} + \dfrac{1 \cdot 4}{7 \cdot 4} \\
&= \dfrac{15}{28} + \dfrac{4}{28} \\
&= \dfrac{19}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{8}{21} + \dfrac{1}{7} = $ [[  11/21  ]]
@Algebrite.check(11/21)
************
$$
\begin{align*}
\dfrac{8}{21} + \dfrac{1}{7} &= \dfrac{8}{21} + \dfrac{1 \cdot 3}{7 \cdot 3} \\
&= \dfrac{8}{21} + \dfrac{3}{21} \\
&= \dfrac{11}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{16}{30} + \dfrac{1}{10} = $ [[  19/30  ]]
@Algebrite.check(22/30)
************
$$
\begin{align*}
\dfrac{16}{30} + \dfrac{1}{10} &= \dfrac{16}{30} + \dfrac{1 \cdot 3}{10 \cdot 3} \\
&= \dfrac{16}{30} + \dfrac{3}{30} \\
&= \dfrac{19}{30}
\end{align*}
$$
************
</div>

</section>









<!--  Bruchrechnung 0014  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 14:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{12} + \dfrac{1}{6} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{12} + \dfrac{1}{6} &= \dfrac{5}{12} + \dfrac{1 \cdot 2}{6 \cdot 2} \\
&= \dfrac{5}{12} + \dfrac{2}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{15} + \dfrac{2}{5} = $ [[  17/15  ]]
@Algebrite.check(17/15)
************
$$
\begin{align*}
\dfrac{11}{15} + \dfrac{2}{5} &= \dfrac{11}{15} + \dfrac{2 \cdot 3}{5 \cdot 3} \\
&= \dfrac{11}{15} + \dfrac{6}{15} \\
&= \dfrac{17}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{21} + \dfrac{2}{7} = $ [[  11/21  ]]
@Algebrite.check(11/21)
************
$$
\begin{align*}
\dfrac{5}{21} + \dfrac{2}{7} &= \dfrac{5}{21} + \dfrac{2 \cdot 3}{7 \cdot 3} \\
&= \dfrac{5}{21} + \dfrac{6}{21} \\
&= \dfrac{11}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{18} + \dfrac{1}{9} = $ [[  7/18  ]]
@Algebrite.check(7/18)
************
$$
\begin{align*}
\dfrac{5}{18} + \dfrac{1}{9} &= \dfrac{5}{18} + \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{5}{18} + \dfrac{2}{18} \\
&= \dfrac{7}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{28} + \dfrac{2}{7} = $ [[  11/28  ]]
@Algebrite.check(11/28)
************
$$
\begin{align*}
\dfrac{3}{28} + \dfrac{2}{7} &= \dfrac{3}{28} + \dfrac{2 \cdot 4}{7 \cdot 4} \\
&= \dfrac{3}{28} + \dfrac{8}{28} \\
&= \dfrac{11}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{3}{20} + \dfrac{1}{2} = $ [[  13/20  ]]
@Algebrite.check(13/20)
************
$$
\begin{align*}
\dfrac{3}{20} + \dfrac{1}{2} &= \dfrac{3}{20} + \dfrac{1 \cdot 10}{2 \cdot 10} \\
&= \dfrac{3}{20} + \dfrac{10}{20} \\
&= \dfrac{13}{20}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0015  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3 + \dfrac{5}{11} = $ [[  38/11  ]]
@Algebrite.check(38/11)
************
$$
\begin{align*}
3 + \dfrac{5}{11} &= \dfrac{3 \cdot 11}{1 \cdot 11} + \dfrac{5}{11} \\
&= \dfrac{33}{11} + \dfrac{5}{11} \\
&= \dfrac{33+5}{11} \\
&= \dfrac{38}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  1 + \dfrac{7}{12} = $ [[  19/12  ]]
@Algebrite.check(19/12)
************
$$
\begin{align*}
1 + \dfrac{7}{12} &= \dfrac{1 \cdot 12}{1 \cdot 12} + \dfrac{7}{12} \\
&= \dfrac{12}{12} + \dfrac{7}{12} \\
&= \dfrac{12+7}{12} \\
&= \dfrac{19}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  4 + \dfrac{2}{9} = $ [[  38/9  ]]
@Algebrite.check(38/9)
************
$$
\begin{align*}
4 + \dfrac{2}{9} &= \dfrac{4 \cdot 9}{1 \cdot 9} + \dfrac{2}{9} \\
&= \dfrac{36}{9} + \dfrac{2}{9} \\
&= \dfrac{36+2}{9} \\
&= \dfrac{38}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5 + \dfrac{3}{14} = $ [[  73/14  ]]
@Algebrite.check(73/14)
************
$$
\begin{align*}
5 + \dfrac{3}{14} &= \dfrac{5 \cdot 14}{1 \cdot 14} + \dfrac{3}{14} \\
&= \dfrac{70}{14} + \dfrac{3}{14} \\
&= \dfrac{70+3}{14} \\
&= \dfrac{73}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2 + \dfrac{11}{15} = $ [[  41/15  ]]
@Algebrite.check(41/15)
************
$$
\begin{align*}
2 + \dfrac{11}{15} &= \dfrac{2 \cdot 15}{1 \cdot 15} + \dfrac{11}{15} \\
&= \dfrac{30}{15} + \dfrac{11}{15} \\
&= \dfrac{30+11}{15} \\
&= \dfrac{41}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  6 + \dfrac{1}{8} = $ [[  49/8  ]]
@Algebrite.check(49/8)
************
$$
\begin{align*}
6 + \dfrac{1}{8} &= \dfrac{6 \cdot 8}{1 \cdot 8} + \dfrac{1}{8} \\
&= \dfrac{48}{8} + \dfrac{1}{8} \\
&= \dfrac{48+1}{8} \\
&= \dfrac{49}{8}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0016  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 16:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  7 + \dfrac{3}{10} = $ [[  73/10  ]]
@Algebrite.check(73/10)
************
$$
\begin{align*}
7 + \dfrac{3}{10} &= \dfrac{7 \cdot 10}{1 \cdot 10} + \dfrac{3}{10} \\
&= \dfrac{70}{10} + \dfrac{3}{10} \\
&= \dfrac{70+3}{10} \\
&= \dfrac{73}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  2 + \dfrac{9}{13} = $ [[  35/13  ]]
@Algebrite.check(35/13)
************
$$
\begin{align*}
2 + \dfrac{9}{13} &= \dfrac{2 \cdot 13}{1 \cdot 13} + \dfrac{9}{13} \\
&= \dfrac{26}{13} + \dfrac{9}{13} \\
&= \dfrac{26+9}{13} \\
&= \dfrac{35}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  5 + \dfrac{4}{9} = $ [[  49/9  ]]
@Algebrite.check(49/9)
************
$$
\begin{align*}
5 + \dfrac{4}{9} &= \dfrac{5 \cdot 9}{1 \cdot 9} + \dfrac{4}{9} \\
&= \dfrac{45}{9} + \dfrac{4}{9} \\
&= \dfrac{45+4}{9} \\
&= \dfrac{49}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  8 + \dfrac{7}{12} = $ [[  103/12  ]]
@Algebrite.check(103/12)
************
$$
\begin{align*}
8 + \dfrac{7}{12} &= \dfrac{8 \cdot 12}{1 \cdot 12} + \dfrac{7}{12} \\
&= \dfrac{96}{12} + \dfrac{7}{12} \\
&= \dfrac{96+7}{12} \\
&= \dfrac{103}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  3 + \dfrac{5}{14} = $ [[  47/14  ]]
@Algebrite.check(47/14)
************
$$
\begin{align*}
3 + \dfrac{5}{14} &= \dfrac{3 \cdot 14}{1 \cdot 14} + \dfrac{5}{14} \\
&= \dfrac{42}{14} + \dfrac{5}{14} \\
&= \dfrac{42+5}{14} \\
&= \dfrac{47}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  4 + \dfrac{11}{15} = $ [[  71/15  ]]
@Algebrite.check(71/15)
************
$$
\begin{align*}
4 + \dfrac{11}{15} &= \dfrac{4 \cdot 15}{1 \cdot 15} + \dfrac{11}{15} \\
&= \dfrac{60}{15} + \dfrac{11}{15} \\
&= \dfrac{60+11}{15} \\
&= \dfrac{71}{15}
\end{align*}
$$
************
</div>

</section>









<!--  Bruchrechnung 0017  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{4} &= \dfrac{7}{8} - \dfrac{1 \cdot 2}{4 \cdot 2} \\
&= \dfrac{7}{8} - \dfrac{2}{8} \\
&= \dfrac{7-2}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{13}{12} - \dfrac{1}{6} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\dfrac{13}{12} - \dfrac{1}{6} &= \dfrac{13}{12} - \dfrac{1 \cdot 2}{6 \cdot 2} \\
&= \dfrac{13}{12} - \dfrac{2}{12} \\
&= \dfrac{13-2}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{10} - \dfrac{1}{5} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{1}{5} &= \dfrac{9}{10} - \dfrac{1 \cdot 2}{5 \cdot 2} \\
&= \dfrac{9}{10} - \dfrac{2}{10} \\
&= \dfrac{9-2}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{14} - \dfrac{2}{7} = $ [[  11/14  ]]
@Algebrite.check(11/14)
************
$$
\begin{align*}
\dfrac{13}{14} - \dfrac{2}{7} &= \dfrac{13}{14} - \dfrac{2 \cdot 2}{7 \cdot 2} \\
&= \dfrac{13}{14} - \dfrac{4}{14} \\
&= \dfrac{13-4}{14} \\
&= \dfrac{11}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{15}{18} - \dfrac{1}{9} = $ [[  13/18  ]]
@Algebrite.check(13/18)
************
$$
\begin{align*}
\dfrac{15}{18} - \dfrac{1}{9} &= \dfrac{15}{18} - \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{15}{18} - \dfrac{2}{18} \\
&= \dfrac{15-2}{18} \\
&= \dfrac{13}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{24}{20} - \dfrac{1}{4} = $ [[  19/20  ]]
@Algebrite.check(19/20)
************
$$
\begin{align*}
\dfrac{24}{20} - \dfrac{1}{4} &= \dfrac{19}{20} - \dfrac{1 \cdot 5}{4 \cdot 5} \\
&= \dfrac{24}{20} - \dfrac{5}{20} \\
&= \dfrac{24-5}{20} \\
&= \dfrac{19}{20}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0018  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 18:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{3} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{3} &= \dfrac{5}{6} - \dfrac{1 \cdot 2}{3 \cdot 2} \\
&= \dfrac{5}{6} - \dfrac{2}{6} \\
&= \dfrac{5-2}{6} \\
&= \dfrac{3}{6} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{10} - \dfrac{1}{5} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{7}{10} - \dfrac{1}{5} &= \dfrac{7}{10} - \dfrac{1 \cdot 2}{5 \cdot 2} \\
&= \dfrac{7}{10} - \dfrac{2}{10} \\
&= \dfrac{7-2}{10} \\
&= \dfrac{5}{10} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{12} - \dfrac{1}{4} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{11}{12} - \dfrac{1}{4} &= \dfrac{11}{12} - \dfrac{1 \cdot 3}{4 \cdot 3} \\
&= \dfrac{11}{12} - \dfrac{3}{12} \\
&= \dfrac{11-3}{12} \\
&= \dfrac{8}{12} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{15} - \dfrac{1}{5} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{13}{15} - \dfrac{1}{5} &= \dfrac{13}{15} - \dfrac{1 \cdot 3}{5 \cdot 3} \\
&= \dfrac{13}{15} - \dfrac{3}{15} \\
&= \dfrac{13-3}{15} \\
&= \dfrac{10}{15} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{17}{18} - \dfrac{2}{9} = $ [[  13/18  ]]
@Algebrite.check(13/18)
************
$$
\begin{align*}
\dfrac{17}{18} - \dfrac{2}{9} &= \dfrac{17}{18} - \dfrac{2 \cdot 2}{9 \cdot 2} \\
&= \dfrac{17}{18} - \dfrac{4}{18} \\
&= \dfrac{17-4}{18} \\
&= \dfrac{13}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{19}{20} - \dfrac{1}{10} = $ [[  17/20  ]]
@Algebrite.check(17/20)
************
$$
\begin{align*}
\dfrac{19}{20} - \dfrac{1}{10} &= \dfrac{19}{20} - \dfrac{1 \cdot 2}{10 \cdot 2} \\
&= \dfrac{19}{20} - \dfrac{2}{20} \\
&= \dfrac{19-2}{20} \\
&= \dfrac{17}{20}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0019  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 19:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{4} &= \dfrac{7}{8} - \dfrac{1 \cdot 2}{4 \cdot 2} \\
&= \dfrac{7}{8} - \dfrac{2}{8} \\
&= \dfrac{7-2}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{5} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{5} &= \dfrac{9}{10} - \dfrac{2 \cdot 2}{5 \cdot 2} \\
&= \dfrac{9}{10} - \dfrac{4}{10} \\
&= \dfrac{9-4}{10} \\
&= \dfrac{5}{10} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{12} - \dfrac{5}{6} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\dfrac{11}{12} - \dfrac{5}{6} &= \dfrac{11}{12} - \dfrac{5 \cdot 2}{6 \cdot 2} \\
&= \dfrac{11}{12} - \dfrac{10}{12} \\
&= \dfrac{11-10}{12} \\
&= \dfrac{1}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{15} - \dfrac{2}{5} = $ [[  7/15  ]]
@Algebrite.check(7/15)
************
$$
\begin{align*}
\dfrac{13}{15} - \dfrac{2}{5} &= \dfrac{13}{15} - \dfrac{2 \cdot 3}{5 \cdot 3} \\
&= \dfrac{13}{15} - \dfrac{6}{15} \\
&= \dfrac{13-6}{15} \\
&= \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{19}{18} - \dfrac{4}{9} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{19}{18} - \dfrac{4}{9} &= \dfrac{19}{18} - \dfrac{4 \cdot 2}{9 \cdot 2} \\
&= \dfrac{19}{18} - \dfrac{8}{18} \\
&= \dfrac{19-8}{18} \\
&= \dfrac{11}{18} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{19}{20} - \dfrac{3}{10} = $ [[  13/20  ]]
@Algebrite.check(13/20)
************
$$
\begin{align*}
\dfrac{19}{20} - \dfrac{3}{10} &= \dfrac{19}{20} - \dfrac{3 \cdot 2}{10 \cdot 2} \\
&= \dfrac{19}{20} - \dfrac{6}{20} \\
&= \dfrac{19-6}{20} \\
&= \dfrac{13}{20}
\end{align*}
$$
************
</div>

</section>










<!--  Bruchrechnung 0020  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 20:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{13}{18} - \dfrac{1}{9} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{13}{18} - \dfrac{1}{9} &= \dfrac{13}{18} - \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{13}{18} - \dfrac{2}{18} \\
&= \dfrac{13-2}{18} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{20} - \dfrac{1}{5} = $ [[  7/20  ]]
@Algebrite.check(7/20)
************
$$
\begin{align*}
\dfrac{11}{20} - \dfrac{1}{5} &= \dfrac{11}{20} - \dfrac{1 \cdot 4}{5 \cdot 4} \\
&= \dfrac{11}{20} - \dfrac{4}{20} \\
&= \dfrac{11-4}{20} \\
&= \dfrac{7}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{14} - \dfrac{1}{7} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\dfrac{11}{14} - \dfrac{1}{7} &= \dfrac{11}{14} - \dfrac{1 \cdot 2}{7 \cdot 2} \\
&= \dfrac{11}{14} - \dfrac{2}{14} \\
&= \dfrac{11-2}{14} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{15} - \dfrac{1}{5} = $ [[  4/15  ]]
@Algebrite.check(4/15)
************
$$
\begin{align*}
\dfrac{7}{15} - \dfrac{1}{5} &= \dfrac{7}{15} - \dfrac{1 \cdot 3}{5 \cdot 3} \\
&= \dfrac{7}{15} - \dfrac{3}{15} \\
&= \dfrac{7-3}{15} \\
&= \dfrac{4}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{16} - \dfrac{1}{8} = $ [[  9/16  ]]
@Algebrite.check(9/16)
************
$$
\begin{align*}
\dfrac{11}{16} - \dfrac{1}{8} &= \dfrac{11}{16} - \dfrac{1 \cdot 2}{8 \cdot 2} \\
&= \dfrac{11}{16} - \dfrac{2}{16} \\
&= \dfrac{11-2}{16} \\
&= \dfrac{9}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{9} - \dfrac{1}{3} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{1}{3} &= \dfrac{7}{9} - \dfrac{1 \cdot 3}{3 \cdot 3} \\
&= \dfrac{7}{9} - \dfrac{3}{9} \\
&= \dfrac{7-3}{9} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

</section>





#### Übungsaufgaben zur Bruchrechnung 21 bis 30



<!--  Bruchrechnung 0021  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 21:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2 - \dfrac{3}{5} = $ [[  7/5  ]]
@Algebrite.check(7/5)
************
$$
\begin{align*}
2 - \dfrac{3}{5} &= \dfrac{2 \cdot 5}{1 \cdot 5} - \dfrac{3}{5} \\
&= \dfrac{10}{5} - \dfrac{3}{5} \\
&= \dfrac{10-3}{5} \\
&= \dfrac{7}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3 - \dfrac{7}{8} = $ [[  17/8  ]]
@Algebrite.check(17/8)
************
$$
\begin{align*}
3 - \dfrac{7}{8} &= \dfrac{3 \cdot 8}{1 \cdot 8} - \dfrac{7}{8} \\
&= \dfrac{24}{8} - \dfrac{7}{8} \\
&= \dfrac{24-7}{8} \\
&= \dfrac{17}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{19}{6} - 2 = $ [[  7/6  ]]
@Algebrite.check(7/6)
************
$$
\begin{align*}
\dfrac{19}{6} - 2 &= \dfrac{19}{6} - \dfrac{2 \cdot 6}{1 \cdot 6} \\
&= \dfrac{19}{6} - \dfrac{12}{6} \\
&= \dfrac{19-12}{6} \\
&= \dfrac{7}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  4 - \dfrac{9}{10} = $ [[  31/10  ]]
@Algebrite.check(31/10)
************
$$
\begin{align*}
4 - \dfrac{9}{10} &= \dfrac{4 \cdot 10}{1 \cdot 10} - \dfrac{9}{10} \\
&= \dfrac{40}{10} - \dfrac{9}{10} \\
&= \dfrac{40-9}{10} \\
&= \dfrac{31}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{17}{4} - 3 = $ [[  5/4  ]]
@Algebrite.check(5/4)
************
$$
\begin{align*}
\dfrac{17}{4} - 3 &= \dfrac{17}{4} - \dfrac{3 \cdot 4}{1 \cdot 4} \\
&= \dfrac{17}{4} - \dfrac{12}{4} \\
&= \dfrac{17-12}{4} \\
&= \dfrac{5}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  5 - \dfrac{11}{12} = $ [[  49/12  ]]
@Algebrite.check(49/12)
************
$$
\begin{align*}
5 - \dfrac{11}{12} &= \dfrac{5 \cdot 12}{1 \cdot 12} - \dfrac{11}{12} \\
&= \dfrac{60}{12} - \dfrac{11}{12} \\
&= \dfrac{60-11}{12} \\
&= \dfrac{49}{12}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0022  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 22:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3 - \dfrac{2}{9} = $ [[  25/9  ]]
@Algebrite.check(25/9)
************
$$
\begin{align*}
3 - \dfrac{2}{9} &= \dfrac{3 \cdot 9}{1 \cdot 9} - \dfrac{2}{9} \\
&= \dfrac{27}{9} - \dfrac{2}{9} \\
&= \dfrac{27-2}{9} \\
&= \dfrac{25}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{6} - 1 = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{11}{6} - 1 &= \dfrac{11}{6} - \dfrac{1 \cdot 6}{1 \cdot 6} \\
&= \dfrac{11}{6} - \dfrac{6}{6} \\
&= \dfrac{11-6}{6} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7 - \dfrac{5}{12} = $ [[  79/12  ]]
@Algebrite.check(79/12)
************
$$
\begin{align*}
7 - \dfrac{5}{12} &= \dfrac{7 \cdot 12}{1 \cdot 12} - \dfrac{5}{12} \\
&= \dfrac{84}{12} - \dfrac{5}{12} \\
&= \dfrac{84-5}{12} \\
&= \dfrac{79}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{5} - 1 = $ [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
\dfrac{9}{5} - 1 &= \dfrac{9}{5} - \dfrac{1 \cdot 5}{1 \cdot 5} \\
&= \dfrac{9}{5} - \dfrac{5}{5} \\
&= \dfrac{9-5}{5} \\
&= \dfrac{4}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  4 - \dfrac{7}{16} = $ [[  57/16  ]]
@Algebrite.check(57/16)
************
$$
\begin{align*}
4 - \dfrac{7}{16} &= \dfrac{4 \cdot 16}{1 \cdot 16} - \dfrac{7}{16} \\
&= \dfrac{64}{16} - \dfrac{7}{16} \\
&= \dfrac{64-7}{16} \\
&= \dfrac{57}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{13}{8} - 1 = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{13}{8} - 1 &= \dfrac{13}{8} - \dfrac{1 \cdot 8}{1 \cdot 8} \\
&= \dfrac{13}{8} - \dfrac{8}{8} \\
&= \dfrac{13-8}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

</section>









<!--  Bruchrechnung 0023  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 23:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{4} = $ [[  23/20  ]]
@Algebrite.check(23/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{4}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{3\cdot 5}{4\cdot 5} \\
&= \dfrac{8}{20} + \dfrac{15}{20} \\
&= \dfrac{8+15}{20} \\
&= \dfrac{23}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{7} + \dfrac{2}{3} = $ [[  23/21  ]]
@Algebrite.check(23/21)
************
$$
\begin{align*}
\dfrac{3}{7} + \dfrac{2}{3}
&= \dfrac{3\cdot 3}{7\cdot 3} + \dfrac{2\cdot 7}{3\cdot 7} \\
&= \dfrac{9}{21} + \dfrac{14}{21} \\
&= \dfrac{9+14}{21} \\
&= \dfrac{23}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{1}{4} = $ [[  13/12  ]]
@Algebrite.check(13/12)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{1}{4}
&= \dfrac{5\cdot 2}{6\cdot 2} + \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{10}{12} + \dfrac{3}{12} \\
&= \dfrac{10+3}{12} \\
&= \dfrac{13}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{4}{9} + \dfrac{2}{5} = $ [[  38/45  ]]
@Algebrite.check(38/45)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{2}{5}
&= \dfrac{4\cdot 5}{9\cdot 5} + \dfrac{2\cdot 9}{5\cdot 9} \\
&= \dfrac{20}{45} + \dfrac{18}{45} \\
&= \dfrac{20+18}{45} \\
&= \dfrac{38}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{1}{3} + \dfrac{4}{7} = $ [[  19/21  ]]
@Algebrite.check(19/21)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{4}{7}
&= \dfrac{1\cdot 7}{3\cdot 7} + \dfrac{4\cdot 3}{7\cdot 3} \\
&= \dfrac{7}{21} + \dfrac{12}{21} \\
&= \dfrac{7+12}{21} \\
&= \dfrac{19}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{7} + \dfrac{3}{8} = $ [[  37/56  ]]
@Algebrite.check(37/56)
************
$$
\begin{align*}
\dfrac{2}{7} + \dfrac{3}{8}
&= \dfrac{2\cdot 8}{7\cdot 8} + \dfrac{3\cdot 7}{8\cdot 7} \\
&= \dfrac{16}{56} + \dfrac{21}{56} \\
&= \dfrac{16+21}{56} \\
&= \dfrac{37}{56}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0024  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 24:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{4} + \dfrac{2}{9} = $ [[  35/36  ]]
@Algebrite.check(35/36)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{2}{9}
&= \dfrac{3\cdot 9}{4\cdot 9} + \dfrac{2\cdot 4}{9\cdot 4} \\
&= \dfrac{27}{36} + \dfrac{8}{36} \\
&= \dfrac{27+8}{36} \\
&= \dfrac{35}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} + \dfrac{2}{7} = $ [[  47/42  ]]
@Algebrite.check(47/42)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{2}{7}
&= \dfrac{5\cdot 7}{6\cdot 7} + \dfrac{2\cdot 6}{7\cdot 6} \\
&= \dfrac{35}{42} + \dfrac{12}{42} \\
&= \dfrac{35+12}{42} \\
&= \dfrac{47}{42}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{8} = $ [[  31/40  ]]
@Algebrite.check(31/40)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{8}
&= \dfrac{2\cdot 8}{5\cdot 8} + \dfrac{3\cdot 5}{8\cdot 5} \\
&= \dfrac{16}{40} + \dfrac{15}{40} \\
&= \dfrac{16+15}{40} \\
&= \dfrac{31}{40}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{1}{6} + \dfrac{4}{10} = $ [[  17/30  ]]
@Algebrite.check(17/30)
************
$$
\begin{align*}
\dfrac{1}{6} + \dfrac{4}{10}
&= \dfrac{1\cdot 5}{6\cdot 5} + \dfrac{4\cdot 3}{10\cdot 3} \\
&= \dfrac{5}{30} + \dfrac{12}{30} \\
&= \dfrac{5+12}{30} \\
&= \dfrac{17}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{9} = $ [[  50/63  ]]
@Algebrite.check(50/63)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{9}
&= \dfrac{4\cdot 9}{7\cdot 9} + \dfrac{2\cdot 7}{9\cdot 7} \\
&= \dfrac{36}{63} + \dfrac{14}{63} \\
&= \dfrac{36+14}{63} \\
&= \dfrac{50}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{3}{8} + \dfrac{5}{12} = $ [[  29/24  ]]
@Algebrite.check(29/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{5}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{5\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{10}{24} \\
&= \dfrac{9+10}{24} \\
&= \dfrac{19}{24}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0025  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 25:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{4} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{4}
&= \dfrac{5\cdot 2}{6\cdot 2} - \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{10}{12} - \dfrac{3}{12} \\
&= \dfrac{10-3}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{6} = $ [[  17/24  ]]
@Algebrite.check(17/24)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{6}
&= \dfrac{7\cdot 3}{8\cdot 3} - \dfrac{1\cdot 4}{6\cdot 4} \\
&= \dfrac{21}{24} - \dfrac{4}{24} \\
&= \dfrac{21-4}{24} \\
&= \dfrac{17}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{5} - \dfrac{1}{10} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{4}{5} - \dfrac{1}{10}
&= \dfrac{4\cdot 2}{5\cdot 2} - \dfrac{1}{10} \\
&= \dfrac{8}{10} - \dfrac{1}{10} \\
&= \dfrac{8-1}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{15} = $ [[  23/30  ]]
@Algebrite.check(19/30)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{15}
&= \dfrac{9\cdot 3}{10\cdot 3} - \dfrac{2\cdot 2}{15\cdot 2} \\
&= \dfrac{27}{30} - \dfrac{4}{30} \\
&= \dfrac{27-4}{30} \\
&= \dfrac{23}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{12} - \dfrac{3}{8} = $ [[  13/24  ]]
@Algebrite.check(13/24)
************
$$
\begin{align*}
\dfrac{11}{12} - \dfrac{3}{8}
&= \dfrac{11\cdot 2}{12\cdot 2} - \dfrac{3\cdot 3}{8\cdot 3} \\
&= \dfrac{22}{24} - \dfrac{9}{24} \\
&= \dfrac{22-9}{24} \\
&= \dfrac{13}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{15} = $ [[  23/45  ]]
@Algebrite.check(23/45)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{15}
&= \dfrac{7\cdot 5}{9\cdot 5} - \dfrac{2\cdot 3}{15\cdot 3} \\
&= \dfrac{35}{45} - \dfrac{6}{45} \\
&= \dfrac{35-6}{45} \\
&= \dfrac{29}{45}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0026  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 26:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{7} - \dfrac{1}{14} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\dfrac{5}{7} - \dfrac{1}{14}
&= \dfrac{5\cdot 2}{7\cdot 2} - \dfrac{1}{14} \\
&= \dfrac{10}{14} - \dfrac{1}{14} \\
&= \dfrac{10-1}{14} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{8} - \dfrac{1}{16} = $ [[  5/16  ]]
@Algebrite.check(5/16)
************
$$
\begin{align*}
\dfrac{3}{8} - \dfrac{1}{16}
&= \dfrac{3\cdot 2}{8\cdot 2} - \dfrac{1}{16} \\
&= \dfrac{6}{16} - \dfrac{1}{16} \\
&= \dfrac{6-1}{16} \\
&= \dfrac{5}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{13}{20} - \dfrac{1}{10} = $ [[  11/20  ]]
@Algebrite.check(11/20)
************
$$
\begin{align*}
\dfrac{13}{20} - \dfrac{1}{10}
&= \dfrac{13}{20} - \dfrac{1\cdot 2}{10\cdot 2} \\
&= \dfrac{13}{20} - \dfrac{2}{20} \\
&= \dfrac{13-2}{20} \\
&= \dfrac{11}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{8}{21} - \dfrac{1}{7} = $ [[  5/21  ]]
@Algebrite.check(5/21)
************
$$
\begin{align*}
\dfrac{8}{21} - \dfrac{1}{7}
&= \dfrac{8}{21} - \dfrac{1\cdot 3}{7\cdot 3} \\
&= \dfrac{8}{21} - \dfrac{3}{21} \\
&= \dfrac{8-3}{21} \\
&= \dfrac{5}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{6} = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{6}
&= \dfrac{7}{12} - \dfrac{1\cdot 2}{6\cdot 2} \\
&= \dfrac{7}{12} - \dfrac{2}{12} \\
&= \dfrac{7-2}{12} \\
&= \dfrac{5}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{9} - \dfrac{1}{27} = $ [[  11/27  ]]
@Algebrite.check(11/27)
************
$$
\begin{align*}
\dfrac{4}{9} - \dfrac{1}{27}
&= \dfrac{4\cdot 3}{9\cdot 3} - \dfrac{1}{27} \\
&= \dfrac{12}{27} - \dfrac{1}{27} \\
&= \dfrac{12-1}{27} \\
&= \dfrac{11}{27}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0027  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 27:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{10} + \dfrac{1}{5} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{3}{10} + \dfrac{1}{5}
&= \dfrac{3}{10} + \dfrac{1\cdot 2}{5\cdot 2} \\
&= \dfrac{3}{10} + \dfrac{2}{10} \\
&= \dfrac{3+2}{10} \\
&= \dfrac{5}{10} \;=\; \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{9} - \dfrac{1}{6} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{1}{6}
&= \dfrac{7\cdot 2}{9\cdot 2} - \dfrac{1\cdot 3}{6\cdot 3} \\
&= \dfrac{14}{18} - \dfrac{3}{18} \\
&= \dfrac{14-3}{18} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{15} + \dfrac{2}{9} = $ [[  22/45  ]]
@Algebrite.check(22/45)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{2}{9}
&= \dfrac{4\cdot 3}{15\cdot 3} + \dfrac{2\cdot 5}{9\cdot 5} \\
&= \dfrac{12}{45} + \dfrac{10}{45} \\
&= \dfrac{12+10}{45} \\
&= \dfrac{22}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{10} - \dfrac{3}{20} = $ [[  11/20  ]]
@Algebrite.check(11/20)
************
$$
\begin{align*}
\dfrac{7}{10} - \dfrac{3}{20}
&= \dfrac{7\cdot 2}{10\cdot 2} - \dfrac{3}{20} \\
&= \dfrac{14}{20} - \dfrac{3}{20} \\
&= \dfrac{14-3}{20} \\
&= \dfrac{11}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{3} + \dfrac{4}{9} = $ [[  10/9  ]]
@Algebrite.check(10/9)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{4}{9}
&= \dfrac{2\cdot 3}{3\cdot 3} + \dfrac{4}{9} \\
&= \dfrac{6}{9} + \dfrac{4}{9} \\
&= \dfrac{6+4}{9} \\
&= \dfrac{10}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{18} = $ [[  13/36  ]]
@Algebrite.check(13/36)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{18}
&= \dfrac{5\cdot 3}{12\cdot 3} - \dfrac{1\cdot 2}{18\cdot 2} \\
&= \dfrac{15}{36} - \dfrac{2}{36} \\
&= \dfrac{15-2}{36} \\
&= \dfrac{13}{36}
\end{align*}
$$
************
</div>

</section>






<!--  Bruchrechnung 0028  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 28:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{8} + \dfrac{5}{12} = $ [[  19/24  ]]
@Algebrite.check(19/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{5}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{5\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{10}{24} \\
&= \dfrac{19}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{15} = $ [[  29/45  ]]
@Algebrite.check(29/45)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{15}
&= \dfrac{7\cdot 5}{9\cdot 5} - \dfrac{2\cdot 3}{15\cdot 3} \\
&= \dfrac{35}{45} - \dfrac{6}{45} \\
&= \dfrac{29}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{7}{18} = $ [[  11/9  ]]
@Algebrite.check(11/9)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{7}{18}
&= \dfrac{5\cdot 3}{6\cdot 3} + \dfrac{7}{18} \\
&= \dfrac{15}{18} + \dfrac{7}{18} \\
&= \dfrac{22}{18} \\
&= \dfrac{11}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{20} - \dfrac{1}{10} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\dfrac{11}{20} - \dfrac{1}{10}
&= \dfrac{11}{20} - \dfrac{1\cdot 2}{10\cdot 2} \\
&= \dfrac{11}{20} - \dfrac{2}{20} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{7} + \dfrac{3}{14} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{2}{7} + \dfrac{3}{14}
&= \dfrac{2\cdot 2}{7\cdot 2} + \dfrac{3}{14} \\
&= \dfrac{4}{14} + \dfrac{3}{14} \\
&= \dfrac{7}{14} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{16} - \dfrac{1}{8} = $ [[  7/16  ]]
@Algebrite.check(7/16)
************
$$
\begin{align*}
\dfrac{9}{16} - \dfrac{1}{8}
&= \dfrac{9}{16} - \dfrac{1\cdot 2}{8\cdot 2} \\
&= \dfrac{9}{16} - \dfrac{2}{16} \\
&= \dfrac{7}{16}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0029  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 29:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{12} + \dfrac{1}{4} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{5}{12} + \dfrac{1}{4}
&= \dfrac{5}{12} + \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{5}{12} + \dfrac{3}{12} \\
&= \dfrac{5+3}{12} \\
&= \dfrac{8}{12} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{4}{15} + \dfrac{1}{6} = $ [[  13/30  ]]
@Algebrite.check(13/30)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{1}{6}
&= \dfrac{4\cdot 2}{15\cdot 2} + \dfrac{1\cdot 5}{6\cdot 5} \\
&= \dfrac{8}{30} + \dfrac{5}{30} \\
&= \dfrac{8+5}{30} \\
&= \dfrac{13}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{18} - \dfrac{1}{6} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{11}{18} - \dfrac{1}{6}
&= \dfrac{11}{18} - \dfrac{1\cdot 3}{6\cdot 3} \\
&= \dfrac{11}{18} - \dfrac{3}{18} \\
&= \dfrac{11-3}{18} \\
&= \dfrac{8}{18} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{10} + \dfrac{2}{5} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{3}{10} + \dfrac{2}{5}
&= \dfrac{3}{10} + \dfrac{2\cdot 2}{5\cdot 2} \\
&= \dfrac{3}{10} + \dfrac{4}{10} \\
&= \dfrac{3+4}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{8} + \dfrac{3}{12} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{5}{8} + \dfrac{3}{12}
&= \dfrac{5\cdot 3}{8\cdot 3} + \dfrac{3\cdot 2}{12\cdot 2} \\
&= \dfrac{15}{24} + \dfrac{6}{24} \\
&= \dfrac{15+6}{24} \\
&= \dfrac{21}{24} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{8} = $ [[  11/24  ]]
@Algebrite.check(11/24)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{8}
&= \dfrac{7\cdot 2}{12\cdot 2} - \dfrac{1\cdot 3}{8\cdot 3} \\
&= \dfrac{14}{24} - \dfrac{3}{24} \\
&= \dfrac{14-3}{24} \\
&= \dfrac{11}{24}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0030  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 30:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{4}{9} + \dfrac{5}{12} = $ [[  31/36  ]]
@Algebrite.check(31/36)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{5}{12}
&= \dfrac{4\cdot 4}{9\cdot 4} + \dfrac{5\cdot 3}{12\cdot 3} \\
&= \dfrac{16}{36} + \dfrac{15}{36} \\
&= \dfrac{31}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{10} - \dfrac{1}{4} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\dfrac{7}{10} - \dfrac{1}{4}
&= \dfrac{7\cdot 2}{10\cdot 2} - \dfrac{1\cdot 5}{4\cdot 5} \\
&= \dfrac{14}{20} - \dfrac{5}{20} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{8} + \dfrac{7}{12} = $ [[  23/24  ]]
@Algebrite.check(23/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{7}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{7\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{14}{24} \\
&= \dfrac{23}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{18} - \dfrac{5}{12} = $ [[  7/36  ]]
@Algebrite.check(7/36)
************
$$
\begin{align*}
\dfrac{11}{18} - \dfrac{5}{12}
&= \dfrac{11\cdot 2}{18\cdot 2} - \dfrac{5\cdot 3}{12\cdot 3} \\
&= \dfrac{22}{36} - \dfrac{15}{36} \\
&= \dfrac{7}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{14} + \dfrac{9}{21} = $ [[  33/42  ]]
@Algebrite.check(33/42)
************
$$
\begin{align*}
\dfrac{5}{14} + \dfrac{9}{21}
&= \dfrac{5\cdot 3}{14\cdot 3} + \dfrac{9\cdot 2}{21\cdot 2} \\
&= \dfrac{15}{42} + \dfrac{18}{42} \\
&= \dfrac{33}{42} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{13}{20} - \dfrac{3}{8} = $ [[  11/40  ]]
@Algebrite.check(11/40)
************
$$
\begin{align*}
\dfrac{13}{20} - \dfrac{3}{8}
&= \dfrac{13\cdot 2}{20\cdot 2} - \dfrac{3\cdot 5}{8\cdot 5} \\
&= \dfrac{26}{40} - \dfrac{15}{40} \\
&= \dfrac{11}{40}
\end{align*}
$$
************
</div>

</section>





#### Übungsaufgaben zur Bruchrechnung 31 bis 40



<!--  Bruchrechnung 0031  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 31:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{2}{7} \cdot 5 = $ [[  10/7  ]]
@Algebrite.check(10/7)
************
$$
\begin{align*}
\dfrac{2}{7} \cdot 5 &= \dfrac{2}{7} \cdot \dfrac{5}{1} \\
&= \dfrac{2 \cdot 5}{7 \cdot 1} \\
&= \dfrac{10}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{9} \cdot 4 = $ [[  20/9  ]]
@Algebrite.check(20/9)
************
$$
\begin{align*}
\dfrac{5}{9} \cdot 4 &= \dfrac{5}{9} \cdot \dfrac{4}{1} \\
&= \dfrac{5 \cdot 4}{9 \cdot 1} \\
&= \dfrac{20}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{11} \cdot 3 = $ [[  21/11  ]]
@Algebrite.check(21/11)
************
$$
\begin{align*}
\dfrac{7}{11} \cdot 3 &= \dfrac{7}{11} \cdot \dfrac{3}{1} \\
&= \dfrac{7 \cdot 3}{11 \cdot 1} \\
&= \dfrac{21}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{13} \cdot 6 = $ [[  24/13  ]]
@Algebrite.check(24/13)
************
$$
\begin{align*}
\dfrac{4}{13} \cdot 6 &= \dfrac{4}{13} \cdot \dfrac{6}{1} \\
&= \dfrac{4 \cdot 6}{13 \cdot 1} \\
&= \dfrac{24}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{14} \cdot 5 = $ [[  25/14  ]]
@Algebrite.check(25/14)
************
$$
\begin{align*}
\dfrac{5}{14} \cdot 5 &= \dfrac{5}{14} \cdot \dfrac{5}{1} \\
&= \dfrac{5 \cdot 5}{14 \cdot 1} \\
&= \dfrac{25}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{9}{25} \cdot 7 = $ [[  63/25  ]]
@Algebrite.check(63/25)
************
$$
\begin{align*}
\dfrac{9}{25} \cdot 7 &= \dfrac{9}{25} \cdot \dfrac{7}{1} \\
&= \dfrac{9 \cdot 7}{25 \cdot 1} \\
&= \dfrac{63}{25}
\end{align*}
$$
************
</div>

</section>








<!--  Bruchrechnung 0032  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 32:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{8} \cdot 5 = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{3}{8} \cdot 5 &= \dfrac{3}{8} \cdot \dfrac{5}{1} \\
&= \dfrac{3 \cdot 5}{8 \cdot 1} \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{12} \cdot 4 = $ [[  7/4  ]]
@Algebrite.check(7/4)
************
$$
\begin{align*}
\dfrac{7}{12} \cdot 4 &= \dfrac{7}{12} \cdot \dfrac{4}{1} \\
&= \dfrac{7 \cdot 4}{12 \cdot 1} \\
&= \dfrac{28}{12} \\
&= \dfrac{7}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{9} \cdot 7 = $ [[  14/9  ]]
@Algebrite.check(14/9)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot 7 &= \dfrac{2}{9} \cdot \dfrac{7}{1} \\
&= \dfrac{2 \cdot 7}{9 \cdot 1} \\
&= \dfrac{14}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{15} \cdot 3 = $ [[  33/15  ]]
@Algebrite.check(33/15)
************
$$
\begin{align*}
\dfrac{11}{15} \cdot 3 &= \dfrac{11}{15} \cdot \dfrac{3}{1} \\
&= \dfrac{11 \cdot 3}{15 \cdot 1} \\
&= \dfrac{33}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{6}{17} \cdot 5 = $ [[  30/17  ]]
@Algebrite.check(30/17)
************
$$
\begin{align*}
\dfrac{6}{17} \cdot 5 &= \dfrac{6}{17} \cdot \dfrac{5}{1} \\
&= \dfrac{6 \cdot 5}{17 \cdot 1} \\
&= \dfrac{30}{17}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{19} \cdot 2 = $ [[  16/19  ]]
@Algebrite.check(16/19)
************
$$
\begin{align*}
\dfrac{8}{19} \cdot 2 &= \dfrac{8}{19} \cdot \dfrac{2}{1} \\
&= \dfrac{8 \cdot 2}{19 \cdot 1} \\
&= \dfrac{16}{19}
\end{align*}
$$
************
</div>

</section>









<!--  Bruchrechnung 0033  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 33:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{4} : 2 = $ [[  3/8  ]]
@Algebrite.check(3/8)
************
$$
\begin{align*}
\dfrac{3}{4} : 2 &= \dfrac{3}{4} : \dfrac{2}{1} \\
&= \dfrac{3}{4} \cdot \dfrac{1}{2} \\
&= \dfrac{3 \cdot 1}{4 \cdot 2} \\
&= \dfrac{3}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} : 5 = $ [[  1/6  ]]
@Algebrite.check(1/6)
************
$$
\begin{align*}
\dfrac{5}{6} : 5 &= \dfrac{5}{6} : \dfrac{5}{1} \\
&= \dfrac{5}{6} \cdot \dfrac{1}{5} \\
&= \dfrac{5 \cdot 1}{6 \cdot 5} \\
&= \dfrac{1}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{8} : 7 = $ [[  1/8  ]]
@Algebrite.check(1/8)
************
$$
\begin{align*}
\dfrac{7}{8} : 7 &= \dfrac{7}{8} : \dfrac{7}{1} \\
&= \dfrac{7}{8} \cdot \dfrac{1}{7} \\
&= \dfrac{7 \cdot 1}{8 \cdot 7} \\
&= \dfrac{1}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} : 3 = $ [[  3/10  ]]
@Algebrite.check(3/10)
************
$$
\begin{align*}
\dfrac{9}{10} : 3 &= \dfrac{9}{10} : \dfrac{3}{1} \\
&= \dfrac{9}{10} \cdot \dfrac{1}{3} \\
&= \dfrac{9 \cdot 1}{10 \cdot 3} \\
&= \dfrac{9}{30} \\
&= \dfrac{3}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{9} : 2 = $ [[  2/9  ]]
@Algebrite.check(2/9)
************
$$
\begin{align*}
\dfrac{4}{9} : 2 &= \dfrac{4}{9} : \dfrac{2}{1} \\
&= \dfrac{4}{9} \cdot \dfrac{1}{2} \\
&= \dfrac{4 \cdot 1}{9 \cdot 2} \\
&= \dfrac{4}{18} \\
&= \dfrac{2}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{11} : 5 = $ [[  2/11  ]]
@Algebrite.check(2/11)
************
$$
\begin{align*}
\dfrac{10}{11} : 5 &= \dfrac{10}{11} : \dfrac{5}{1} \\
&= \dfrac{10}{11} \cdot \dfrac{1}{5} \\
&= \dfrac{10 \cdot 1}{11 \cdot 5} \\
&= \dfrac{10}{55} \\
&= \dfrac{2}{11}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0034  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 34:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{5}{12} : 5 = $ [[  1/12  ]]
@Algebrite.check(1/12)
************
$$
\begin{align*}
\dfrac{5}{12} : 5
&= \dfrac{5}{12} : \dfrac{5}{1} \\
&= \dfrac{5}{12} \cdot \dfrac{1}{5} \\
&= \dfrac{5 \cdot 1}{12 \cdot 5} \\
&= \dfrac{5}{60}
= \dfrac{1}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{7}{15} : 3 = $ [[  7/45  ]]
@Algebrite.check(7/45)
************
$$
\begin{align*}
\dfrac{7}{15} : 3
&= \dfrac{7}{15} : \dfrac{3}{1} \\
&= \dfrac{7}{15} \cdot \dfrac{1}{3} \\
&= \dfrac{7 \cdot 1}{15 \cdot 3} \\
&= \dfrac{7}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{9}{14} : 6 = $ [[  3/28  ]]
@Algebrite.check(3/28)
************
$$
\begin{align*}
\dfrac{9}{14} : 6
&= \dfrac{9}{14} : \dfrac{6}{1} \\
&= \dfrac{9}{14} \cdot \dfrac{1}{6} \\
&= \dfrac{9 \cdot 1}{14 \cdot 6} \\
&= \dfrac{9}{84}
= \dfrac{3}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{18} : 2 = $ [[  11/36  ]]
@Algebrite.check(11/36)
************
$$
\begin{align*}
\dfrac{11}{18} : 2
&= \dfrac{11}{18} : \dfrac{2}{1} \\
&= \dfrac{11}{18} \cdot \dfrac{1}{2} \\
&= \dfrac{11 \cdot 1}{18 \cdot 2} \\
&= \dfrac{11}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{8}{9} : 4 = $ [[  2/9  ]]
@Algebrite.check(2/9)
************
$$
\begin{align*}
\dfrac{8}{9} : 4
&= \dfrac{8}{9} : \dfrac{4}{1} \\
&= \dfrac{8}{9} \cdot \dfrac{1}{4} \\
&= \dfrac{8 \cdot 1}{9 \cdot 4} \\
&= \dfrac{8}{36}
= \dfrac{2}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{13}{20} : 5 = $ [[  13/100  ]]
@Algebrite.check(13/100)
************
$$
\begin{align*}
\dfrac{13}{20} : 5
&= \dfrac{13}{20} : \dfrac{5}{1} \\
&= \dfrac{13}{20} \cdot \dfrac{1}{5} \\
&= \dfrac{13 \cdot 1}{20 \cdot 5} \\
&= \dfrac{13}{100}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0035  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 35:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{3} \cdot \dfrac{5}{7} = $ [[  10/21  ]]
@Algebrite.check(10/21)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{5}{7}
&= \dfrac{2 \cdot 5}{3 \cdot 7} \\
&= \dfrac{10}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} \cdot \dfrac{5}{7} = $ [[  15/28  ]]
@Algebrite.check(15/28)
************
$$
\begin{align*}
\dfrac{3}{4} \cdot \dfrac{5}{7}
&= \dfrac{3 \cdot 5}{4 \cdot 7} \\
&= \dfrac{15}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{9} \cdot \dfrac{5}{7} = $ [[  20/63  ]]
@Algebrite.check(20/63)
************
$$
\begin{align*}
\dfrac{4}{9} \cdot \dfrac{5}{7}
&= \dfrac{4 \cdot 5}{9 \cdot 7} \\
&= \dfrac{20}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{8} \cdot \dfrac{7}{9} = $ [[  35/72  ]]
@Algebrite.check(35/72)
************
$$
\begin{align*}
\dfrac{5}{8} \cdot \dfrac{7}{9}
&= \dfrac{5 \cdot 7}{8 \cdot 9} \\
&= \dfrac{35}{72}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \cdot \dfrac{7}{11} = $ [[  21/110  ]]
@Algebrite.check(21/110)
************
$$
\begin{align*}
\dfrac{3}{10} \cdot \dfrac{7}{11}
&= \dfrac{3 \cdot 7}{10 \cdot 11} \\
&= \dfrac{21}{110}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{7}{13} = $ [[  35/156  ]]
@Algebrite.check(35/156)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{7}{13}
&= \dfrac{5 \cdot 7}{12 \cdot 13} \\
&= \dfrac{35}{156}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0036  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 36:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{5} \cdot \dfrac{3}{7} = $ [[  6/35  ]]
@Algebrite.check(6/35)
************
$$
\begin{align*}
\dfrac{2}{5} \cdot \dfrac{3}{7}
&= \dfrac{2 \cdot 3}{5 \cdot 7} \\
&= \dfrac{6}{35}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{2}{9} \cdot \dfrac{5}{7} = $ [[  10/63  ]]
@Algebrite.check(10/63)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot \dfrac{5}{7}
&= \dfrac{2 \cdot 5}{9 \cdot 7} \\
&= \dfrac{10}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{11} \cdot \dfrac{2}{9} = $ [[  14/99  ]]
@Algebrite.check(14/99)
************
$$
\begin{align*}
\dfrac{7}{11} \cdot \dfrac{2}{9}
&= \dfrac{7 \cdot 2}{11 \cdot 9} \\
&= \dfrac{14}{99}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{14} \cdot \dfrac{3}{11} = $ [[  15/154  ]]
@Algebrite.check(15/154)
************
$$
\begin{align*}
\dfrac{5}{14} \cdot \dfrac{3}{11}
&= \dfrac{5 \cdot 3}{14 \cdot 11} \\
&= \dfrac{15}{154}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \cdot \dfrac{7}{13} = $ [[  21/130  ]]
@Algebrite.check(21/130)
************
$$
\begin{align*}
\dfrac{3}{10} \cdot \dfrac{7}{13}
&= \dfrac{3 \cdot 7}{10 \cdot 13} \\
&= \dfrac{21}{130}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{15} \cdot \dfrac{7}{11} = $ [[  56/165  ]]
@Algebrite.check(56/165)
************
$$
\begin{align*}
\dfrac{8}{15} \cdot \dfrac{7}{11}
&= \dfrac{8 \cdot 7}{15 \cdot 11} \\
&= \dfrac{56}{165}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0037  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 37:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{8} \cdot \dfrac{5}{7} = $ [[  15/56  ]]
@Algebrite.check(15/56)
************
$$
\begin{align*}
\dfrac{3}{8} \cdot \dfrac{5}{7}
&= \dfrac{3 \cdot 5}{8 \cdot 7} \\
&= \dfrac{15}{56}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{9} \cdot \dfrac{7}{10} = $ [[  77/90  ]]
@Algebrite.check(28/90)
************
$$
\begin{align*}
\dfrac{11}{9} \cdot \dfrac{7}{10}
&= \dfrac{11 \cdot 7}{9 \cdot 10} \\
&= \dfrac{77}{90}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{11} \cdot \dfrac{9}{13} = $ [[  18/143  ]]
@Algebrite.check(18/143)
************
$$
\begin{align*}
\dfrac{2}{11} \cdot \dfrac{9}{13}
&= \dfrac{2 \cdot 9}{11 \cdot 13} \\
&= \dfrac{18}{143}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{7}{8} = $ [[  35/96  ]]
@Algebrite.check(35/96)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{7}{8}
&= \dfrac{5 \cdot 7}{12 \cdot 8} \\
&= \dfrac{35}{96}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{13} \cdot \dfrac{5}{14} = $ [[  25/182  ]]
@Algebrite.check(30/182)
************
$$
\begin{align*}
\dfrac{5}{13} \cdot \dfrac{5}{14}
&= \dfrac{5 \cdot 5}{13 \cdot 14} \\
&= \dfrac{25}{182}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{15} \cdot \dfrac{4}{11} = $ [[  28/165  ]]
@Algebrite.check(28/165)
************
$$
\begin{align*}
\dfrac{7}{15} \cdot \dfrac{4}{11}
&= \dfrac{7 \cdot 4}{15 \cdot 11} \\
&= \dfrac{28}{165}
\end{align*}
$$
************
</div>

</section>









<!--  Bruchrechnung 0038  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 38:__ **Gib** den Kehrwert **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{4}{5} \;\;\Rightarrow\;\; $ [[  5/4  ]] 
@Algebrite.check(5/4)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{9}{7} \;\;\Rightarrow\;\; $ [[  7/9  ]] 
@Algebrite.check(7/9)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{8}{3} \;\;\Rightarrow\;\; $ [[  3/8  ]] 
@Algebrite.check(3/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{4} \;\;\Rightarrow\;\; $ [[  4/11  ]] 
@Algebrite.check(4/11)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{7}{13} \;\;\Rightarrow\;\; $ [[  13/7  ]] 
@Algebrite.check(13/7)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{8}{5} \;\;\Rightarrow\;\; $ [[  5/8  ]] 
@Algebrite.check(5/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ \dfrac{9}{4} \;\;\Rightarrow\;\; $ [[  4/9  ]] 
@Algebrite.check(4/9)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ \dfrac{23}{12} \;\;\Rightarrow\;\; $ [[  12/23  ]] 
@Algebrite.check(12/23)
</div>

</section>




<!--  Bruchrechnung 0039  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 39:__ **Gib** den Kehrwert **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{8}{17} \;\;\Rightarrow\;\; $ [[  17/8  ]] 
@Algebrite.check(17/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{5}{11} \;\;\Rightarrow\;\; $ [[  11/5  ]] 
@Algebrite.check(11/5)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{6}{7} \;\;\Rightarrow\;\; $ [[  7/6  ]] 
@Algebrite.check(7/6)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{12}{13} \;\;\Rightarrow\;\; $ [[  13/12  ]] 
@Algebrite.check(13/12)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{21}{83} \;\;\Rightarrow\;\; $ [[  83/21  ]] 
@Algebrite.check(83/21)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{25}{19} \;\;\Rightarrow\;\; $ [[  19/25  ]] 
@Algebrite.check(19/25)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ \dfrac{8}{13} \;\;\Rightarrow\;\; $ [[  13/8  ]] 
@Algebrite.check(13/8)
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ \dfrac{51}{23} \;\;\Rightarrow\;\; $ [[  23/51  ]] 
@Algebrite.check(23/51)
</div>

</section>













<!--  Bruchrechnung 0040  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 40:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{4}{9} : \dfrac{7}{6} = $ [[  8/21  ]]
@Algebrite.check(8/21)
************
$$
\begin{align*}
\dfrac{4}{9} : \dfrac{7}{6}  & =  \dfrac{4}{9} \cdot \dfrac{6}{7}   \\
 & = \dfrac{4 \cdot 6}{9 \cdot 7}  \\
 & = \dfrac{4 \cdot 2}{3 \cdot 7}  \\
 & = \dfrac{8}{21} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{8} : \dfrac{3}{4} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{5}{8} : \dfrac{3}{4}
&= \dfrac{5}{8} \cdot \dfrac{4}{3} \\
&= \dfrac{5 \cdot 4}{8 \cdot 3} \\
&= \dfrac{20}{24} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{12} : \dfrac{5}{18} = $ [[  21/10  ]]
@Algebrite.check(21/10)
************
$$
\begin{align*}
\dfrac{7}{12} : \dfrac{5}{18}
&= \dfrac{7}{12} \cdot \dfrac{18}{5} \\
&= \dfrac{7 \cdot 18}{12 \cdot 5} \\
&= \dfrac{126}{60} \\
&= \dfrac{21}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{14} : \dfrac{3}{7} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{9}{14} : \dfrac{3}{7}
&= \dfrac{9}{14} \cdot \dfrac{7}{3} \\
&= \dfrac{9 \cdot 7}{14 \cdot 3} \\
&= \dfrac{63}{42} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{15} : \dfrac{22}{45} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{11}{15} : \dfrac{22}{45}
&= \dfrac{11}{15} \cdot \dfrac{45}{22} \\
&= \dfrac{11 \cdot 45}{15 \cdot 22} \\
&= \dfrac{495}{330} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{21} : \dfrac{4}{9} = $ [[  6/7  ]]
@Algebrite.check(6/7)
************
$$
\begin{align*}
\dfrac{8}{21} : \dfrac{4}{9}
&= \dfrac{8}{21} \cdot \dfrac{9}{4} \\
&= \dfrac{8 \cdot 9}{21 \cdot 4} \\
&= \dfrac{72}{84} \\
&= \dfrac{6}{7}
\end{align*}
$$
************
</div>

</section>





#### Übungsaufgaben zur Bruchrechnung 41 bis 50


<!--  Bruchrechnung 0041  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 41:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{6}{11} : \dfrac{3}{22} = $ [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
\dfrac{6}{11} : \dfrac{3}{22}
&= \dfrac{6}{11} \cdot \dfrac{22}{3} \\
&= \dfrac{6 \cdot 22}{11 \cdot 3} \\
&= \dfrac{132}{33} \\
&= 4
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{12} : \dfrac{10}{18} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{12} : \dfrac{10}{18}
&= \dfrac{5}{12} \cdot \dfrac{18}{10} \\
&= \dfrac{5 \cdot 18}{12 \cdot 10} \\
&= \dfrac{90}{120} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{16} : \dfrac{14}{24} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{7}{16} : \dfrac{14}{24}
&= \dfrac{7}{16} \cdot \dfrac{24}{14} \\
&= \dfrac{7 \cdot 24}{16 \cdot 14} \\
&= \dfrac{168}{224} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{20} : \dfrac{3}{25} = $ [[  15/4  ]]
@Algebrite.check(15/4)
************
$$
\begin{align*}
\dfrac{9}{20} : \dfrac{3}{25}
&= \dfrac{9}{20} \cdot \dfrac{25}{3} \\
&= \dfrac{9 \cdot 25}{20 \cdot 3} \\
&= \dfrac{225}{60} \\
&= \dfrac{15}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{9} : \dfrac{2}{15} = $ [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{4}{9} : \dfrac{2}{15}
&= \dfrac{4}{9} \cdot \dfrac{15}{2} \\
&= \dfrac{4 \cdot 15}{9 \cdot 2} \\
&= \dfrac{60}{18} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{21} : \dfrac{5}{14} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{10}{21} : \dfrac{5}{14}
&= \dfrac{10}{21} \cdot \dfrac{14}{5} \\
&= \dfrac{10 \cdot 14}{21 \cdot 5} \\
&= \dfrac{140}{105} \\
&= \dfrac{4}{3}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0042  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 42:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{7} : \dfrac{9}{14} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{3}{7} : \dfrac{9}{14}
&= \dfrac{3}{7} \cdot \dfrac{14}{9} \\
&= \dfrac{3 \cdot 14}{7 \cdot 9} \\
&= \dfrac{42}{63} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{8 \cdot 9}{15 \cdot 4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{12} : \dfrac{10}{21} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{5}{12} : \dfrac{10}{21}
&= \dfrac{5}{12} \cdot \dfrac{21}{10} \\
&= \dfrac{5 \cdot 21}{12 \cdot 10} \\
&= \dfrac{105}{120} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{18} : \dfrac{14}{27} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{7}{18} : \dfrac{14}{27}
&= \dfrac{7}{18} \cdot \dfrac{27}{14} \\
&= \dfrac{7 \cdot 27}{18 \cdot 14} \\
&= \dfrac{189}{252} \\
&= \dfrac{27}{36} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{9}{20} : \dfrac{3}{25} = $ [[  15/4  ]]
@Algebrite.check(15/4)
************
$$
\begin{align*}
\dfrac{9}{20} : \dfrac{3}{25}
&= \dfrac{9}{20} \cdot \dfrac{25}{3} \\
&= \dfrac{9 \cdot 25}{20 \cdot 3} \\
&= \dfrac{225}{60} \\
&= \dfrac{15}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{24} : \dfrac{22}{36} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{11}{24} : \dfrac{22}{36}
&= \dfrac{11}{24} \cdot \dfrac{36}{22} \\
&= \dfrac{11 \cdot 36}{24 \cdot 22} \\
&= \dfrac{396}{528} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0043  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 43:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{3} \cdot \dfrac{5}{7} = $ [[  10/21  ]]
@Algebrite.check(10/21)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{5}{7}
&= \dfrac{2 \cdot 5}{3 \cdot 7} \\
&= \dfrac{10}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{14} : \dfrac{3}{7} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{9}{14} : \dfrac{3}{7}
&= \dfrac{9}{14} \cdot \dfrac{7}{3} \\
&= \dfrac{63}{42} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{8} \cdot \dfrac{6}{11} = $ [[  21/44  ]]
@Algebrite.check(21/44)
************
$$
\begin{align*}
\dfrac{7}{8} \cdot \dfrac{6}{11}
&= \dfrac{7 \cdot 6}{8 \cdot 11} \\
&= \dfrac{42}{88} \\
&= \dfrac{21}{44}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{10}{21} : \dfrac{5}{14} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{10}{21} : \dfrac{5}{14}
&= \dfrac{10}{21} \cdot \dfrac{14}{5} \\
&= \dfrac{140}{105} \\
&= \dfrac{4}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \cdot \dfrac{7}{9} = $ [[  7/30  ]]
@Algebrite.check(7/30)
************
$$
\begin{align*}
\dfrac{3}{10} \cdot \dfrac{7}{9}
&= \dfrac{3 \cdot 7}{10 \cdot 9} \\
&= \dfrac{21}{90} \\
&= \dfrac{7}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{12} : \dfrac{22}{18} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{11}{12} : \dfrac{22}{18}
&= \dfrac{11}{12} \cdot \dfrac{18}{22} \\
&= \dfrac{198}{264} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{4}{9} \cdot \dfrac{7}{10} = $ [[  14/45  ]]
@Algebrite.check(14/45)
************
$$
\begin{align*}
\dfrac{4}{9} \cdot \dfrac{7}{10}
&= \dfrac{4 \cdot 7}{9 \cdot 10} \\
&= \dfrac{28}{90} \\
&= \dfrac{14}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__ $  \dfrac{6}{11} : \dfrac{3}{22} = $ [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
\dfrac{6}{11} : \dfrac{3}{22}
&= \dfrac{6}{11} \cdot \dfrac{22}{3} \\
&= \dfrac{132}{33} \\
&= 4
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0044  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 44:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{5} \cdot \dfrac{7}{8} = $ [[  21/40  ]]
@Algebrite.check(21/40)
************
$$
\begin{align*}
\dfrac{3}{5} \cdot \dfrac{7}{8}
&= \dfrac{3 \cdot 7}{5 \cdot 8} \\
&= \dfrac{21}{40}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} : \dfrac{10}{9} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{6} : \dfrac{10}{9}
&= \dfrac{5}{6} \cdot \dfrac{9}{10} \\
&= \dfrac{45}{60} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{7} \cdot \dfrac{6}{11} = $ [[  24/77  ]]
@Algebrite.check(24/77)
************
$$
\begin{align*}
\dfrac{4}{7} \cdot \dfrac{6}{11}
&= \dfrac{4 \cdot 6}{7 \cdot 11} \\
&= \dfrac{24}{77}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} : \dfrac{3}{20} = $ [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
\dfrac{9}{10} : \dfrac{3}{20}
&= \dfrac{9}{10} \cdot \dfrac{20}{3} \\
&= \dfrac{180}{30} \\
&= 6
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} \cdot \dfrac{5}{9} = $ [[  35/108  ]]
@Algebrite.check(35/108)
************
$$
\begin{align*}
\dfrac{7}{12} \cdot \dfrac{5}{9}
&= \dfrac{7 \cdot 5}{12 \cdot 9} \\
&= \dfrac{35}{108}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{9}{14} = $ [[  15/56  ]]
@Algebrite.check(15/56)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{9}{14}
&= \dfrac{5 \cdot 9}{12 \cdot 14} \\
&= \dfrac{45}{168} \\
&= \dfrac{15}{56}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>


</section>




<!--  Bruchrechnung 0045  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 45:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{3} \cdot \dfrac{5}{6} : \dfrac{4}{7} = $ [[  35/36  ]]
@Algebrite.check(35/36)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{5}{6} : \dfrac{4}{7}
&= \dfrac{2}{3} \cdot \dfrac{5}{6} \cdot \dfrac{7}{4} \\
&= \dfrac{2 \cdot 5 \cdot 7}{3 \cdot 6 \cdot 4} \\
&= \dfrac{70}{72} \\
&= \dfrac{35}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} : \dfrac{2}{5} \cdot \dfrac{7}{6} = $ [[  35/16  ]]
@Algebrite.check(35/16)
************
$$
\begin{align*}
\dfrac{3}{4} : \dfrac{2}{5} \cdot \dfrac{7}{6}
&= \dfrac{3}{4} \cdot \dfrac{5}{2} \cdot \dfrac{7}{6} \\
&= \dfrac{3 \cdot 5 \cdot 7}{4 \cdot 2 \cdot 6} \\
&= \dfrac{105}{48} \\
&= \dfrac{35}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{8} \cdot \dfrac{3}{7} : \dfrac{2}{9} = $ [[  135/112  ]]
@Algebrite.check(135/112)
************
$$
\begin{align*}
\dfrac{5}{8} \cdot \dfrac{3}{7} : \dfrac{2}{9}
&= \dfrac{5}{8} \cdot \dfrac{3}{7} \cdot \dfrac{9}{2} \\
&= \dfrac{5 \cdot 3 \cdot 9}{8 \cdot 7 \cdot 2} \\
&= \dfrac{135}{112}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{9} : \dfrac{5}{6} \cdot \dfrac{2}{3} = $ [[  14/45  ]]
@Algebrite.check(14/45)
************
$$
\begin{align*}
\dfrac{7}{9} : \dfrac{5}{6} \cdot \dfrac{2}{3}
&= \dfrac{7}{9} \cdot \dfrac{6}{5} \cdot \dfrac{2}{3} \\
&= \dfrac{7 \cdot 6 \cdot 2}{9 \cdot 5 \cdot 3} \\
&= \dfrac{84}{135} \\
&= \dfrac{14}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{5} \cdot \dfrac{7}{8} : \dfrac{3}{10} = $ [[  14/3  ]]
@Algebrite.check(14/3)
************
$$
\begin{align*}
\dfrac{4}{5} \cdot \dfrac{7}{8} : \dfrac{3}{10}
&= \dfrac{4}{5} \cdot \dfrac{7}{8} \cdot \dfrac{10}{3} \\
&= \dfrac{4 \cdot 7 \cdot 10}{5 \cdot 8 \cdot 3} \\
&= \dfrac{280}{120} \\
&= \dfrac{14}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{10} : \dfrac{3}{4} \cdot \dfrac{5}{6} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{9}{10} : \dfrac{3}{4} \cdot \dfrac{5}{6}
&= \dfrac{9}{10} \cdot \dfrac{4}{3} \cdot \dfrac{5}{6} \\
&= \dfrac{9 \cdot 4 \cdot 5}{10 \cdot 3 \cdot 6} \\
&= \dfrac{180}{180} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0046  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 46:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{4} \cdot \dfrac{5}{6} : \dfrac{2}{7} = $ [[  35/16  ]]
@Algebrite.check(35/16)
************
$$
\begin{align*}
\dfrac{3}{4} \cdot \dfrac{5}{6} : \dfrac{2}{7}
&= \dfrac{3}{4} \cdot \dfrac{5}{6} \cdot \dfrac{7}{2} \\
&= \dfrac{3 \cdot 5 \cdot 7}{4 \cdot 6 \cdot 2} \\
&= \dfrac{105}{48} \\
&= \dfrac{35}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} : \dfrac{2}{3} \cdot \dfrac{5}{6} = $ [[  35/32  ]]
@Algebrite.check(35/32)
************
$$
\begin{align*}
\dfrac{7}{8} : \dfrac{2}{3} \cdot \dfrac{5}{6}
&= \dfrac{7}{8} \cdot \dfrac{3}{2} \cdot \dfrac{5}{6} \\
&= \dfrac{7 \cdot 3 \cdot 5}{8 \cdot 2 \cdot 6} \\
&= \dfrac{105}{96} \\
&= \dfrac{35}{32}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{10} \cdot \dfrac{4}{7} : \dfrac{6}{5} = $ [[  3/7  ]]
@Algebrite.check(3/7)
************
$$
\begin{align*}
\dfrac{9}{10} \cdot \dfrac{4}{7} : \dfrac{6}{5}
&= \dfrac{9}{10} \cdot \dfrac{4}{7} \cdot \dfrac{5}{6} \\
&= \dfrac{9 \cdot 4 \cdot 5}{10 \cdot 7 \cdot 6} \\
&= \dfrac{180}{420} \\
&= \dfrac{3}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} : \dfrac{3}{10} \cdot \dfrac{7}{9} = $ [[  14/27  ]]
@Algebrite.check(14/27)
************
$$
\begin{align*}
\dfrac{2}{5} : \dfrac{3}{10} \cdot \dfrac{7}{9}
&= \dfrac{2}{5} \cdot \dfrac{10}{3} \cdot \dfrac{7}{9} \\
&= \dfrac{2 \cdot 10 \cdot 7}{5 \cdot 3 \cdot 9} \\
&= \dfrac{140}{135} \\
&= \dfrac{14}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{8}{9} \cdot \dfrac{3}{4} : \dfrac{2}{5} = $ [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{8}{9} \cdot \dfrac{3}{4} : \dfrac{2}{5}
&= \dfrac{8}{9} \cdot \dfrac{3}{4} \cdot \dfrac{5}{2} \\
&= \dfrac{8 \cdot 3 \cdot 5}{9 \cdot 4 \cdot 2} \\
&= \dfrac{120}{72} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{6} : \dfrac{10}{9} \cdot \dfrac{7}{8} = $ [[  21/32  ]]
@Algebrite.check(21/32)
************
$$
\begin{align*}
\dfrac{5}{6} : \dfrac{10}{9} \cdot \dfrac{7}{8}
&= \dfrac{5}{6} \cdot \dfrac{9}{10} \cdot \dfrac{7}{8} \\
&= \dfrac{5 \cdot 9 \cdot 7}{6 \cdot 10 \cdot 8} \\
&= \dfrac{315}{480} \\
&= \dfrac{21}{32}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0047  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 47:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{6} = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{6}
&= \dfrac{1\cdot 3}{2\cdot 3} + \dfrac{1\cdot 2}{3\cdot 2} + \dfrac{1}{6} \\
&= \dfrac{3}{6} + \dfrac{2}{6} + \dfrac{1}{6} \\
&= \dfrac{3+2+1}{6} \\
&= \dfrac{6}{6} \;=\; 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} - \dfrac{1}{6} + \dfrac{1}{12} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{3}{4} - \dfrac{1}{6} + \dfrac{1}{12}
&= \dfrac{3\cdot 3}{4\cdot 3} - \dfrac{1\cdot 2}{6\cdot 2} + \dfrac{1}{12} \\
&= \dfrac{9}{12} - \dfrac{2}{12} + \dfrac{1}{12} \\
&= \dfrac{9-2+1}{12} \\
&= \dfrac{8}{12} \;=\; \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{8} + \dfrac{1}{4} - \dfrac{1}{16} = $ [[  13/16  ]]
@Algebrite.check(13/16)
************
$$
\begin{align*}
\dfrac{5}{8} + \dfrac{1}{4} - \dfrac{1}{16}
&= \dfrac{5\cdot 2}{8\cdot 2} + \dfrac{1\cdot 4}{4\cdot 4} - \dfrac{1}{16} \\
&= \dfrac{10}{16} + \dfrac{4}{16} - \dfrac{1}{16} \\
&= \dfrac{10+4-1}{16} \\
&= \dfrac{13}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} + \dfrac{3}{10} + \dfrac{1}{4} = $ [[  19/20  ]]
@Algebrite.check(19/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{3}{10} + \dfrac{1}{4}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{3\cdot 2}{10\cdot 2} + \dfrac{1\cdot 5}{4\cdot 5} \\
&= \dfrac{8}{20} + \dfrac{6}{20} + \dfrac{5}{20} \\
&= \dfrac{8+6+5}{20} \\
&= \dfrac{19}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{8} - \dfrac{1}{6} = $ [[  7/24  ]]
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{8} - \dfrac{1}{6}
&= \dfrac{7\cdot 2}{12\cdot 2} - \dfrac{1\cdot 3}{8\cdot 3} - \dfrac{1\cdot 4}{6\cdot 4} \\
&= \dfrac{14}{24} - \dfrac{3}{24} - \dfrac{4}{24} \\
&= \dfrac{14-3-4}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{9} + \dfrac{2}{15} - \dfrac{1}{10} = $ [[  43/90  ]]
@Algebrite.check(43/90)
************
$$
\begin{align*}
\dfrac{4}{9} + \dfrac{2}{15} - \dfrac{1}{10}
&= \dfrac{4\cdot 10}{9\cdot 10} + \dfrac{2\cdot 6}{15\cdot 6} - \dfrac{1\cdot 9}{10\cdot 9} \\
&= \dfrac{40}{90} + \dfrac{12}{90} - \dfrac{9}{90} \\
&= \dfrac{40+12-9}{90} \\
&= \dfrac{43}{90}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0048  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 48:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{3} + \dfrac{1}{4} + \dfrac{1}{6} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{1}{4} + \dfrac{1}{6}
&= \dfrac{1\cdot 4}{3\cdot 4} + \dfrac{1\cdot 3}{4\cdot 3} + \dfrac{1\cdot 2}{6\cdot 2} \\
&= \dfrac{4}{12} + \dfrac{3}{12} + \dfrac{2}{12} \\
&= \dfrac{4+3+2}{12} \\
&= \dfrac{9}{12} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{3} + \dfrac{1}{12} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{3} + \dfrac{1}{12}
&= \dfrac{5\cdot 2}{6\cdot 2} - \dfrac{1\cdot 4}{3\cdot 4} + \dfrac{1}{12} \\
&= \dfrac{10}{12} - \dfrac{4}{12} + \dfrac{1}{12} \\
&= \dfrac{10-4+1}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{8} + \dfrac{1}{16} - \dfrac{1}{4} = $ [[  3/16  ]]
@Algebrite.check(1/16)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{1}{16} - \dfrac{1}{4}
&= \dfrac{3\cdot 2}{8\cdot 2} + \dfrac{1}{16} - \dfrac{1\cdot 4}{4\cdot 4} \\
&= \dfrac{6}{16} + \dfrac{1}{16} - \dfrac{4}{16} \\
&= \dfrac{6+1-4}{16} \\
&= \dfrac{3}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} + \dfrac{1}{10} + \dfrac{3}{20} = $ [[  13/20  ]]
@Algebrite.check(13/20)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{1}{10} + \dfrac{3}{20}
&= \dfrac{2\cdot 4}{5\cdot 4} + \dfrac{1\cdot 2}{10\cdot 2} + \dfrac{3}{20} \\
&= \dfrac{8}{20} + \dfrac{2}{20} + \dfrac{3}{20} \\
&= \dfrac{8+2+3}{20} \\
&= \dfrac{13}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{3} + \dfrac{1}{6} = $ [[  5/18  ]]
@Algebrite.check(5/18)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{3} + \dfrac{1}{6}
&= \dfrac{14}{18} - \dfrac{12}{18} + \dfrac{3}{18} \\
&= \dfrac{14-12+3}{18} \\
&= \dfrac{5}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{21} - \dfrac{1}{3} = $ [[  1/3  ]]
@Algebrite.check(1/3)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{21} - \dfrac{1}{3}
&= \dfrac{12}{21} + \dfrac{2}{21} - \dfrac{7}{21} \\
&= \dfrac{12+2-7}{21} \\
&= \dfrac{7}{21} \\
&= \dfrac{1}{3}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0049  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 49:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4} = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4}
&= \dfrac{1}{2} + \dfrac{6}{12} \\
&= \dfrac{1}{2} + \dfrac{1}{2} \\
&= 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3}
&= \dfrac{5}{6} - \dfrac{2}{6} \\
&= \dfrac{5-2}{6} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2} = $ [[  31/20  ]]
@Algebrite.check(31/20)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2}
&= \dfrac{3}{4} + \dfrac{2}{5} \cdot \dfrac{2}{1} \\
&= \dfrac{3}{4} + \dfrac{4}{5} \\
&= \dfrac{15}{20} + \dfrac{16}{20} \\
&= \dfrac{31}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2} = $ [[  3/8  ]]
@Algebrite.check(3/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2}
&= \dfrac{7}{8} - \dfrac{3}{4} \cdot \dfrac{2}{3} \\
&= \dfrac{7}{8} - \dfrac{6}{12} \\
&= \dfrac{7}{8} - \dfrac{1}{2} \\
&= \dfrac{7}{8} - \dfrac{4}{8} \\
&= \dfrac{3}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8}
&= \dfrac{2}{3} + \dfrac{12}{72} \\
&= \dfrac{2}{3} + \dfrac{1}{6} \\
&= \dfrac{4}{6} + \dfrac{1}{6} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4} = $ [[  7/24  ]]
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4}
&= \dfrac{5}{12} - \dfrac{3}{24} \\
&= \dfrac{5}{12} - \dfrac{1}{8} \\
&= \dfrac{10}{24} - \dfrac{3}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0050  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 50:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{5} \cdot \dfrac{3}{4} + \dfrac{1}{2} = $ [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
\dfrac{2}{5} \cdot \dfrac{3}{4} + \dfrac{1}{2}
&= \dfrac{6}{20} + \dfrac{1}{2} \\
&= \dfrac{6}{20} + \dfrac{10}{20} \\
&= \dfrac{16}{20} \\
&= \dfrac{4}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{2} \cdot \dfrac{3}{4} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{2} \cdot \dfrac{3}{4}
&= \dfrac{7}{8} - \dfrac{3}{8} \\
&= \dfrac{4}{8} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{2}{3} : \dfrac{4}{9} = $ [[  7/3  ]]
@Algebrite.check(7/3)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{2}{3} : \dfrac{4}{9}
&= \dfrac{5}{6} + \dfrac{2}{3} \cdot \dfrac{9}{4} \\
&= \dfrac{5}{6} + \dfrac{18}{12} \\
&= \dfrac{5}{6} + \dfrac{3}{2} \\
&= \dfrac{5}{6} + \dfrac{9}{6} \\
&= \dfrac{14}{6} = \dfrac{7}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{10} : \dfrac{3}{5} - \dfrac{1}{4} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\dfrac{3}{10} : \dfrac{3}{5} - \dfrac{1}{4}
&= \dfrac{3}{10} \cdot \dfrac{5}{3} - \dfrac{1}{4} \\
&= \dfrac{15}{30} - \dfrac{1}{4} \\
&= \dfrac{1}{2} - \dfrac{1}{4} \\
&= \dfrac{1}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{3} \cdot \dfrac{3}{8} = $ [[  23/28  ]]
@Algebrite.check(23/28)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{3} \cdot \dfrac{3}{8}
&= \dfrac{4}{7} + \dfrac{6}{24} \\
&= \dfrac{4}{7} + \dfrac{1}{4} \\
&= \dfrac{16}{28} + \dfrac{7}{28} \\
&= \dfrac{23}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{5} : \dfrac{3}{4} = $ [[  11/30  ]]
@Algebrite.check(11/30)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{5} : \dfrac{3}{4}
&= \dfrac{9}{10} - \dfrac{2}{5} \cdot \dfrac{4}{3} \\
&= \dfrac{9}{10} - \dfrac{8}{15} \\
&= \dfrac{27}{30} - \dfrac{16}{30} \\
&= \dfrac{11}{30}
\end{align*}
$$
************
</div>

</section>





#### Übungsaufgaben zur Bruchrechnung 51 bis 60


<!--  Bruchrechnung 0051  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 51:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12} = $ [[  11/4  ]]
@Algebrite.check(11/4)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12}
&= \dfrac{3}{4} + \dfrac{5}{6} \cdot \dfrac{12}{5} \\
&= \dfrac{3}{4} + 2 \\
&= \dfrac{3}{4} + \dfrac{8}{4} \\
&= \dfrac{11}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} - \dfrac{1}{2} \cdot \dfrac{1}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{3}{4} - \dfrac{1}{2} \cdot \dfrac{1}{4}
&= \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{6}{8} - \dfrac{1}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{3} + \dfrac{3}{5} : \dfrac{3}{10} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{3}{5} : \dfrac{3}{10}
&= \dfrac{2}{3} + \dfrac{3}{5} \cdot \dfrac{10}{3} \\
&= \dfrac{2}{3} + 2 \\
&= \dfrac{2}{3} + \dfrac{6}{3} \\
&= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4} = $ [[  7/24  ]]
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4}
&= \dfrac{5}{12} - \dfrac{3}{24} \\
&= \dfrac{5}{12} - \dfrac{1}{8} \\
&= \dfrac{10}{24} - \dfrac{3}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{3} \cdot \dfrac{1}{2} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{3} \cdot \dfrac{1}{2}
&= \dfrac{5}{6} - \dfrac{1}{6} \\
&= \dfrac{4}{6} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{8} + \dfrac{1}{4} : \dfrac{1}{2} = $ [[  11/8  ]]
@Algebrite.check(11/8)
************
$$
\begin{align*}
\dfrac{7}{8} + \dfrac{1}{4} : \dfrac{1}{2}
&= \dfrac{7}{8} + \dfrac{1}{4} \cdot \dfrac{2}{1} \\
&= \dfrac{7}{8} + \dfrac{2}{4} \\
&= \dfrac{7}{8} + \dfrac{1}{2} \\
&= \dfrac{7}{8} + \dfrac{4}{8} \\
&= \dfrac{11}{8}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0052  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 52:__ **Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \left(\dfrac{2}{3} - \dfrac{4}{7}\right) \cdot \dfrac{4}{5} = $ [[  8/105  ]]
@Algebrite.check(8/105)
************
$$
\begin{align*}
\left(\dfrac{2}{3} - \dfrac{5}{7}\right) \cdot \dfrac{4}{5}   & = \left(\dfrac{14}{21} - \dfrac{12}{21}\right) \cdot \dfrac{4}{5} \\
 & = \dfrac{2}{21} \cdot \dfrac{4}{5} \\
 & = \dfrac{8}{105}  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \left(\dfrac{3}{4} + \dfrac{1}{6}\right) \cdot \dfrac{2}{3} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\left(\dfrac{3}{4} + \dfrac{1}{6}\right) \cdot \dfrac{2}{3}
&= \left(\dfrac{3\cdot 3}{4\cdot 3} + \dfrac{1\cdot 2}{6\cdot 2}\right) \cdot \dfrac{2}{3} \\
&= \left(\dfrac{9}{12} + \dfrac{2}{12}\right) \cdot \dfrac{2}{3} \\
&= \dfrac{11}{12} \cdot \dfrac{2}{3} \\
&= \dfrac{22}{36} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{2}{5} = $ [[  15/16  ]]
@Algebrite.check(15/16)
************
$$
\begin{align*}
\left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{2}{5}
&= \left(\dfrac{5}{8} - \dfrac{1\cdot 2}{4\cdot 2}\right) : \dfrac{2}{5} \\
&= \left(\dfrac{5}{8} - \dfrac{2}{8}\right) : \dfrac{2}{5} \\
&= \dfrac{3}{8} : \dfrac{2}{5} \\
&= \dfrac{3}{8} \cdot \dfrac{5}{2} \\
&= \dfrac{15}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{5} \cdot \left(\dfrac{2}{3} + \dfrac{1}{6}\right) = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{3}{5} \cdot \left(\dfrac{2}{3} + \dfrac{1}{6}\right)
&= \dfrac{3}{5} \cdot \left(\dfrac{2\cdot 2}{3\cdot 2} + \dfrac{1}{6}\right) \\
&= \dfrac{3}{5} \cdot \left(\dfrac{4}{6} + \dfrac{1}{6}\right) \\
&= \dfrac{3}{5} \cdot \dfrac{5}{6} \\
&= \dfrac{3}{6} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} : \left(\dfrac{1}{2} + \dfrac{1}{14}\right) = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{4}{7} : \left(\dfrac{1}{2} + \dfrac{1}{14}\right)
&= \dfrac{4}{7} : \left(\dfrac{7}{14} + \dfrac{1}{14}\right) \\
&= \dfrac{4}{7} : \dfrac{8}{14} \\
&= \dfrac{4}{7} : \dfrac{4}{7} \\
&= \dfrac{4}{7} \cdot \dfrac{7}{4} \\
&= 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \left(\dfrac{3}{10} + \dfrac{1}{5}\right) : \dfrac{2}{3} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left(\dfrac{3}{10} + \dfrac{1}{5}\right) : \dfrac{2}{3}
&= \left(\dfrac{3}{10} + \dfrac{1\cdot 2}{5\cdot 2}\right) : \dfrac{2}{3} \\
&= \left(\dfrac{3}{10} + \dfrac{2}{10}\right) : \dfrac{2}{3} \\
&= \dfrac{5}{10} : \dfrac{2}{3} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{2} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>


</section>




<!--  Bruchrechnung 0053  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 53:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left(\dfrac{1}{2} + \dfrac{1}{3}\right) \cdot \dfrac{3}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\left(\dfrac{1}{2} + \dfrac{1}{3}\right) \cdot \dfrac{3}{4}
&= \left(\dfrac{3}{6} + \dfrac{2}{6}\right) \cdot \dfrac{3}{4} \\
&= \dfrac{5}{6} \cdot \dfrac{3}{4} \\
&= \dfrac{15}{24} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left(\dfrac{5}{6} - \dfrac{1}{4}\right) : \dfrac{2}{3} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\left(\dfrac{5}{6} - \dfrac{1}{4}\right) : \dfrac{2}{3}
&= \left(\dfrac{10}{12} - \dfrac{3}{12}\right) : \dfrac{2}{3} \\
&= \dfrac{7}{12} \cdot \dfrac{3}{2} \\
&= \dfrac{21}{24} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left(\dfrac{3}{5} + \dfrac{1}{10}\right) : \dfrac{3}{4} = $ [[  14/15  ]]
@Algebrite.check(14/15)
************
$$
\begin{align*}
\left(\dfrac{3}{5} + \dfrac{1}{10}\right) : \dfrac{3}{4}
&= \left(\dfrac{6}{10} + \dfrac{1}{10}\right) : \dfrac{3}{4} \\
&= \dfrac{7}{10} \cdot \dfrac{4}{3} \\
&= \dfrac{28}{30} \\
&= \dfrac{14}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{4}{7} \cdot \left(\dfrac{1}{2} + \dfrac{3}{14}\right) = $ [[  20/49  ]]
@Algebrite.check(20/49)
************
$$
\begin{align*}
\dfrac{4}{7} \cdot \left(\dfrac{1}{2} + \dfrac{3}{14}\right)
&= \dfrac{4}{7} \cdot \left(\dfrac{7}{14} + \dfrac{3}{14}\right) \\
&= \dfrac{4}{7} \cdot \dfrac{10}{14} \\
&= \dfrac{4}{7} \cdot \dfrac{5}{7} \\
&= \dfrac{20}{49}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left(\dfrac{5}{12} + \dfrac{1}{3}\right) \cdot \dfrac{3}{5} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\left(\dfrac{5}{12} + \dfrac{1}{3}\right) \cdot \dfrac{3}{5}
&= \left(\dfrac{5}{12} + \dfrac{4}{12}\right) \cdot \dfrac{3}{5} \\
&= \dfrac{9}{12} \cdot \dfrac{3}{5} \\
&= \dfrac{27}{60} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left(\dfrac{7}{8} - \dfrac{1}{2}\right) : \dfrac{7}{12} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\left(\dfrac{7}{8} - \dfrac{1}{2}\right) : \dfrac{7}{12}
&= \left(\dfrac{7}{8} - \dfrac{4}{8}\right) : \dfrac{7}{12} \\
&= \dfrac{3}{8} \cdot \dfrac{12}{7} \\
&= \dfrac{36}{56} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0054  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 54:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left(\dfrac{1}{3} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} = $ [[  3/8  ]]
@Algebrite.check(3/8)
************
$$
\begin{align*}
\left(\dfrac{1}{3} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4}
&= \left(\dfrac{1\cdot 2}{3\cdot 2} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} \\
&= \left(\dfrac{2}{6} + \dfrac{1}{6}\right) \cdot \dfrac{3}{4} \\
&= \dfrac{3}{6} \cdot \dfrac{3}{4} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{4} \\
&= \dfrac{3}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{5}{6} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\left(\dfrac{5}{8} - \dfrac{1}{4}\right) : \dfrac{5}{6}
&= \left(\dfrac{5}{8} - \dfrac{1\cdot 2}{4\cdot 2}\right) : \dfrac{5}{6} \\
&= \left(\dfrac{5}{8} - \dfrac{2}{8}\right) : \dfrac{5}{6} \\
&= \dfrac{3}{8} : \dfrac{5}{6} \\
&= \dfrac{3}{8} \cdot \dfrac{6}{5} \\
&= \dfrac{18}{40} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{3}{5} : \left(\dfrac{1}{2} + \dfrac{1}{10}\right) = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{3}{5} : \left(\dfrac{1}{2} + \dfrac{1}{10}\right)
&= \dfrac{3}{5} : \left(\dfrac{1\cdot 5}{2\cdot 5} + \dfrac{1}{10}\right) \\
&= \dfrac{3}{5} : \left(\dfrac{5}{10} + \dfrac{1}{10}\right) \\
&= \dfrac{3}{5} : \dfrac{6}{10} \\
&= \dfrac{3}{5} : \dfrac{3}{5} \\
&= \dfrac{3}{5} \cdot \dfrac{5}{3} \\
&= 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{5}{6} \cdot \left(\dfrac{3}{7} + \dfrac{1}{14}\right) = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{5}{6} \cdot \left(\dfrac{3}{7} + \dfrac{1}{14}\right)
&= \dfrac{5}{6} \cdot \left(\dfrac{3\cdot 2}{7\cdot 2} + \dfrac{1}{14}\right) \\
&= \dfrac{5}{6} \cdot \left(\dfrac{6}{14} + \dfrac{1}{14}\right) \\
&= \dfrac{5}{6} \cdot \dfrac{7}{14} \\
&= \dfrac{5}{6} \cdot \dfrac{1}{2} \\
&= \dfrac{5}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{4}{9} : \left(\dfrac{1}{6} + \dfrac{1}{9}\right) = $ [[  8/5  ]]
@Algebrite.check(8/5)
************
$$
\begin{align*}
\dfrac{4}{9} : \left(\dfrac{1}{6} + \dfrac{1}{9}\right)
&= \dfrac{4}{9} : \left(\dfrac{1\cdot 3}{6\cdot 3} + \dfrac{1\cdot 2}{9\cdot 2}\right) \\
&= \dfrac{4}{9} : \left(\dfrac{3}{18} + \dfrac{2}{18}\right) \\
&= \dfrac{4}{9} : \dfrac{5}{18} \\
&= \dfrac{4}{9} \cdot \dfrac{18}{5} \\
&= \dfrac{4\cdot 2}{5} \quad (\text{da } \dfrac{18}{9}=2) \\
&= \dfrac{8}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left(\dfrac{2}{3} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} = $ [[  3/10  ]]
@Algebrite.check(3/10)
************
$$
\begin{align*}
\left(\dfrac{2}{3} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5}
&= \left(\dfrac{2\cdot 2}{3\cdot 2} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} \\
&= \left(\dfrac{4}{6} - \dfrac{1}{6}\right) \cdot \dfrac{3}{5} \\
&= \dfrac{3}{6} \cdot \dfrac{3}{5} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{5} \\
&= \dfrac{3}{10}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0055  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 55:__ **Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left( \dfrac{2}{3} \right) }{ \left( \dfrac{5}{7} \right) } = $ [[  14/15  ]] 
@Algebrite.check(14/15)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{2}{3} \right) }{ \left( \dfrac{5}{7} \right) } & = \dfrac{2}{3} : \dfrac{5}{7} \\
& = \dfrac{2}{3} \cdot \dfrac{7}{5} \\
& = \dfrac{14}{15}  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{\left(\dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)} = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
&= \dfrac{3}{4} : \dfrac{2}{5} \\
&= \dfrac{3}{4} \cdot \dfrac{5}{2} \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{1}{3}\right)} = $ [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{1}{3}\right)}
&= \dfrac{5}{6} : \dfrac{1}{3} \\
&= \dfrac{5}{6} \cdot \dfrac{3}{1} \\
&= \dfrac{15}{6} \\
&= \dfrac{5}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{7}{12}\right)} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{7}{12}\right)}
&= \dfrac{7}{9} : \dfrac{7}{12} \\
&= \dfrac{7}{9} \cdot \dfrac{12}{7} \\
&= \dfrac{12}{9} \\
&= \dfrac{4}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{3}\right)} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{3}\right)}
&= \dfrac{4}{9} : \dfrac{2}{3} \\
&= \dfrac{4}{9} \cdot \dfrac{3}{2} \\
&= \dfrac{12}{18} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{4}{25}\right)} = $ [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{4}{25}\right)}
&= \dfrac{8}{15} : \dfrac{4}{25} \\
&= \dfrac{8}{15} \cdot \dfrac{25}{4} \\
&= \dfrac{200}{60} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

</section>




<!--  Bruchrechnung 0056  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 56:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{1}{10}\right)} = $ [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{1}{10}\right)}
&= \dfrac{2}{5} : \dfrac{1}{10} \\
&= \dfrac{2}{5} \cdot \dfrac{10}{1} \\
&= \dfrac{20}{5} \\
&= 4
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{9}{14}\right)} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{9}{14}\right)}
&= \dfrac{3}{7} : \dfrac{9}{14} \\
&= \dfrac{3}{7} \cdot \dfrac{14}{9} \\
&= \dfrac{42}{63} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{27}\right)} = $ [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{4}{9}\right)}{\left(\dfrac{2}{27}\right)}
&= \dfrac{4}{9} : \dfrac{2}{27} \\
&= \dfrac{4}{9} \cdot \dfrac{27}{2} \\
&= \dfrac{108}{18} \\
&= 6
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{\left(\dfrac{7}{12}\right)}{\left(\dfrac{14}{15}\right)} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{7}{12}\right)}{\left(\dfrac{14}{15}\right)}
&= \dfrac{7}{12} : \dfrac{14}{15} \\
&= \dfrac{7}{12} \cdot \dfrac{15}{14} \\
&= \dfrac{105}{168} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{\left(\dfrac{9}{20}\right)}{\left(\dfrac{3}{25}\right)} = $ [[  15/4  ]]
@Algebrite.check(15/4)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{9}{20}\right)}{\left(\dfrac{3}{25}\right)}
&= \dfrac{9}{20} : \dfrac{3}{25} \\
&= \dfrac{9}{20} \cdot \dfrac{25}{3} \\
&= \dfrac{225}{60} \\
&= \dfrac{15}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{6}{25}\right)} = $ [[  10/9  ]]
@Algebrite.check(10/9)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{8}{15}\right)}{\left(\dfrac{6}{25}\right)}
&= \dfrac{8}{15} : \dfrac{6}{25} \\
&= \dfrac{8}{15} \cdot \dfrac{25}{6} \\
&= \dfrac{200}{90} \\
&= \dfrac{10}{9}
\end{align*}
$$
************
</div>

</section>








<!--  Bruchrechnung 0057  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 57:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 3 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ 4 } \;= $ [[  5/48  ]]
@Algebrite.check(5/48)
************
$$
\begin{align*}
\dfrac{ \left[ \dfrac{ \left(\dfrac{1}{3}\right) }{ \left(\dfrac{4}{5}\right) } \right] }{4}
&= \dfrac{\left(\dfrac{1}{3} : \dfrac{4}{5}\right)}{4} \\
&= \dfrac{\left(\dfrac{1}{3} \cdot \dfrac{5}{4}\right)}{4} \\
&= \dfrac{\dfrac{5}{12}}{4}
= \dfrac{5}{12} \cdot \dfrac{1}{4}
= \dfrac{5}{48}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{ 8 }{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 5 }\right) }{  \left(\dfrac{ 3 }{ 4 }\right) }  \right] } \;= $ [[  15  ]]
@Algebrite.check(15)
************
$$
\begin{align*}
\dfrac{8}{\left[ \dfrac{\left(\dfrac{2}{5}\right)}{\left(\dfrac{3}{4}\right)} \right]}
&= 8 : \left( \dfrac{2}{5} : \dfrac{3}{4} \right) \\
&= 8 : \left( \dfrac{2}{5} \cdot \dfrac{4}{3} \right)
= 8 : \dfrac{8}{15} \\
&= 8 \cdot \dfrac{15}{8}
= 15
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{ \left[\dfrac{2}{3}\right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 7 }\right) }{  6 }  \right] } \;= $ [[  28/9  ]]
@Algebrite.check(28/9)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{2}{3}\right)}{\left[ \dfrac{\left(\dfrac{9}{7}\right)}{6} \right]}
&= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} : 6 \right)}
= \dfrac{\dfrac{2}{3}}{\left( \dfrac{9}{7} \cdot \dfrac{1}{6} \right)} \\
&= \dfrac{\dfrac{2}{3}}{\dfrac{9}{42}}
= \dfrac{2}{3} \cdot \dfrac{42}{9}
= \dfrac{84}{27}
= \dfrac{28}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 6 }\right) }{  \left(\dfrac{ 4 }{ 3 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 3 }\right) }{  \left(\dfrac{ 7 }{ 8 }\right) }  \right] } \;= $ [[  105/256  ]]
@Algebrite.check(105/256)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{6}\right)}{\left(\dfrac{4}{3}\right)}
&= \dfrac{5}{6} : \dfrac{4}{3}
= \dfrac{5}{6} \cdot \dfrac{3}{4}
= \dfrac{15}{24}
= \dfrac{5}{8} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{4}{3}\right)}{\left(\dfrac{7}{8}\right)}
&= \dfrac{4}{3} : \dfrac{7}{8}
= \dfrac{4}{3} \cdot \dfrac{8}{7}
= \dfrac{32}{21} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{5}{8}}{\dfrac{32}{21}}
&= \dfrac{5}{8} \cdot \dfrac{21}{32}
= \dfrac{105}{256}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 2 }{ 3 } + \dfrac{1}{2}\right) }{  \left(\dfrac{ 3 }{ 7 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 8 }{ 3 }\right) }{  \left(\dfrac{ 8 }{ 9 }\right) }  \right] } \;= $ [[  49/54  ]]
@Algebrite.check(49/54)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{2}{3} + \dfrac{1}{2}\right)}{\left(\dfrac{3}{7}\right)}
&= \dfrac{\left(\dfrac{4}{6} + \dfrac{3}{6}\right)}{\left(\dfrac{3}{7}\right)}
= \dfrac{\dfrac{7}{6}}{\dfrac{3}{7}}
= \dfrac{7}{6} \cdot \dfrac{7}{3}
= \dfrac{49}{18} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{8}{3}\right)}{\left(\dfrac{8}{9}\right)}
&= \dfrac{8}{3} : \dfrac{8}{9}
= \dfrac{8}{3} \cdot \dfrac{9}{8}
= 3 \\
\text{Gesamt:}\quad \dfrac{\dfrac{49}{18}}{3}
&= \dfrac{49}{18} \cdot \dfrac{1}{3}
= \dfrac{49}{54}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 5 }{ 7 }\right) }{  \left(\dfrac{ 4 }{ 5 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 8 }\right) }{  \left(\dfrac{ 11 }{ 3 } + \dfrac{3}{5}\right) }  \right] } \;= $ [[  640/189  ]]
@Algebrite.check(640/189)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{5}{7}\right)}{\left(\dfrac{4}{5}\right)}
&= \dfrac{5}{7} : \dfrac{4}{5}
= \dfrac{5}{7} \cdot \dfrac{5}{4}
= \dfrac{25}{28} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{9}{8}\right)}{\left(\dfrac{11}{3} + \dfrac{3}{5}\right)}
&= \dfrac{9}{8} : \left( \dfrac{55}{15} + \dfrac{9}{15} \right)
= \dfrac{9}{8} : \dfrac{64}{15}
= \dfrac{9}{8} \cdot \dfrac{15}{64}
= \dfrac{135}{512} \\
\text{Gesamt:}\quad 
\dfrac{\dfrac{25}{28}}{\dfrac{135}{512}}
&= \dfrac{25}{28} \cdot \dfrac{512}{135} \\
&= \dfrac{25}{135} \cdot \dfrac{512}{28}
= \dfrac{5}{27} \cdot \dfrac{128}{7} \\
&= \dfrac{640}{189}
\end{align*}
$$
************
</div>


</section>







<!--  Bruchrechnung 0058  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 58:__ **Berechne** den Wert des Terms.



<section class="flex-container">


<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 4 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] }{ 3 } \;= $ [[  1/10  ]]
@Algebrite.check(1/10)
************
$$
\begin{align*}
\dfrac{ \left[ \dfrac{ \left(\dfrac{1}{4}\right) }{ \left(\dfrac{5}{6}\right) } \right] }{3}
&= \dfrac{\left(\dfrac{1}{4} : \dfrac{5}{6}\right)}{3}
= \dfrac{\left(\dfrac{1}{4} \cdot \dfrac{6}{5}\right)}{3}
= \dfrac{\dfrac{6}{20}}{3}
= \dfrac{\dfrac{3}{10}}{3} \\
&= \dfrac{3}{10}\cdot\dfrac{1}{3}
= \dfrac{3}{30}
= \dfrac{1}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{ 9 }{ \left[ \dfrac{ \left(\dfrac{ 3 }{ 7 }\right) }{  \left(\dfrac{ 2 }{ 5 }\right) }  \right] } \;= $ [[  42/5  ]]
@Algebrite.check(42/5)
************
$$
\begin{align*}
\dfrac{9}{\left[ \dfrac{\left(\dfrac{3}{7}\right)}{\left(\dfrac{2}{5}\right)} \right]}
&= 9 : \left( \dfrac{3}{7} : \dfrac{2}{5} \right)
= 9 : \left( \dfrac{3}{7}\cdot\dfrac{5}{2} \right)
= 9 : \dfrac{15}{14} \\
&= 9 \cdot \dfrac{14}{15}
= \dfrac{126}{15}
= \dfrac{42}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{ \left[\dfrac{3}{4}\right] }{ \left[ \dfrac{ \left(\dfrac{ 7 }{ 5 }\right) }{  2 }  \right] } \;= $ [[  15/14  ]]
@Algebrite.check(15/14)
************
$$
\begin{align*}
\dfrac{\left(\dfrac{3}{4}\right)}{\left[ \dfrac{\left(\dfrac{7}{5}\right)}{2} \right]}
&= \dfrac{\dfrac{3}{4}}{\left( \dfrac{7}{5} : 2 \right)}
= \dfrac{\dfrac{3}{4}}{\left( \dfrac{7}{5}\cdot\dfrac{1}{2} \right)}
= \dfrac{\dfrac{3}{4}}{\dfrac{7}{10}} \\
&= \dfrac{3}{4}\cdot\dfrac{10}{7}
= \dfrac{30}{28}
= \dfrac{15}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 5 }\right) }{  \left(\dfrac{ 3 }{ 2 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 3 }{ 2 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] } \;= $ [[  8/27  ]]
@Algebrite.check(8/27)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{4}{5}\right)}{\left(\dfrac{3}{2}\right)}
&= \dfrac{4}{5} : \dfrac{3}{2}
= \dfrac{4}{5}\cdot\dfrac{2}{3}
= \dfrac{8}{15} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{3}{2}\right)}{\left(\dfrac{5}{6}\right)}
&= \dfrac{3}{2} : \dfrac{5}{6}
= \dfrac{3}{2}\cdot\dfrac{6}{5}
= \dfrac{18}{10}
= \dfrac{9}{5} \\
\text{Gesamt:}\quad \dfrac{\dfrac{8}{15}}{\dfrac{9}{5}}
&= \dfrac{8}{15}\cdot\dfrac{5}{9}
= \dfrac{40}{135}
= \dfrac{8}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 1 }{ 2 } + \dfrac{3}{4}\right) }{  \left(\dfrac{ 2 }{ 5 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 9 }{ 4 }\right) }{  \left(\dfrac{ 9 }{ 10 }\right) }  \right] } \;= $ [[  5/4  ]]
@Algebrite.check(5/4)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{1}{2} + \dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
&= \dfrac{\left(\dfrac{2}{4} + \dfrac{3}{4}\right)}{\left(\dfrac{2}{5}\right)}
= \dfrac{\dfrac{5}{4}}{\dfrac{2}{5}}
= \dfrac{5}{4}\cdot\dfrac{5}{2}
= \dfrac{25}{8} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{9}{4}\right)}{\left(\dfrac{9}{10}\right)}
&= \dfrac{9}{4} : \dfrac{9}{10}
= \dfrac{9}{4}\cdot\dfrac{10}{9}
= \dfrac{10}{4}
= \dfrac{5}{2} \\
\text{Gesamt:}\quad \dfrac{\dfrac{25}{8}}{\dfrac{5}{2}}
&= \dfrac{25}{8}\cdot\dfrac{2}{5}
= \dfrac{50}{40}
= \dfrac{5}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ \left[ \dfrac{ \left(\dfrac{ 7 }{ 9 }\right) }{  \left(\dfrac{ 5 }{ 6 }\right) }  \right] }{ \left[ \dfrac{ \left(\dfrac{ 4 }{ 3 }\right) }{  \left(\dfrac{ 7 }{ 2 } + \dfrac{1}{3}\right) }  \right] } \;= $ [[  161/60  ]]
@Algebrite.check(161/60)
************
$$
\begin{align*}
\text{Zähler:}\quad \dfrac{\left(\dfrac{7}{9}\right)}{\left(\dfrac{5}{6}\right)}
&= \dfrac{7}{9} : \dfrac{5}{6}
= \dfrac{7}{9}\cdot\dfrac{6}{5}
= \dfrac{42}{45}
= \dfrac{14}{15} \\
\text{Nenner:}\quad \dfrac{\left(\dfrac{4}{3}\right)}{\left(\dfrac{7}{2} + \dfrac{1}{3}\right)}
&= \dfrac{4}{3} : \left(\dfrac{21}{6} + \dfrac{2}{6}\right)
= \dfrac{4}{3} : \dfrac{23}{6}
= \dfrac{4}{3}\cdot\dfrac{6}{23}
= \dfrac{24}{69}
= \dfrac{8}{23} \\
\text{Gesamt:}\quad \dfrac{\dfrac{14}{15}}{\dfrac{8}{23}}
&= \dfrac{14}{15}\cdot\dfrac{23}{8}
= \dfrac{322}{120}
= \dfrac{161}{60}
\end{align*}
$$
************
</div>


</section>






<!--  Bruchrechnung 0059  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 59:__ **Bestimme** den Wert zwischen den gegeneben beiden Brüchen, der exakt in der Mitte liegt.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{4} \;\;\wedge\;\; \dfrac{5}{6}  \;\;\Rightarrow\;\; $ [[  19/24  ]] 
@Algebrite.check(19/24)
************
$$
\begin{align*}
 \left( \dfrac{1}{4} + \dfrac{5}{6} \right) : 2 
&= \left( \dfrac{3}{12} + \dfrac{10}{12} \right) : 2  \\ 
&=  \dfrac{13}{12} : 2  \\
&=  \dfrac{13}{24}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{7} \;\;\wedge\;\; \dfrac{5}{9}  \;\;\Rightarrow\;\; $ [[  43/126  ]] 
@Algebrite.check(43/126)
************
$$
\begin{align*}
 \left( \dfrac{3}{7} + \dfrac{5}{9} \right) : 2 
&= \left( \dfrac{27}{63} + \dfrac{35}{63} \right) : 2  \\ 
&=  \dfrac{62}{63} : 2  \\
&=  \dfrac{31}{63} 
= \dfrac{43}{126}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{3} \;\;\wedge\;\; \dfrac{4}{5}  \;\;\Rightarrow\;\; $ [[  19/30  ]] 
@Algebrite.check(19/30)
************
$$
\begin{align*}
 \left( \dfrac{2}{3} + \dfrac{4}{5} \right) : 2 
&= \left( \dfrac{10}{15} + \dfrac{12}{15} \right) : 2  \\ 
&=  \dfrac{22}{15} : 2  \\
&=  \dfrac{22}{30} 
= \dfrac{11}{15} 
= \dfrac{19}{30}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{1}{8} \;\;\wedge\;\; \dfrac{3}{4}  \;\;\Rightarrow\;\; $ [[  13/32  ]] 
@Algebrite.check(13/32)
************
$$
\begin{align*}
 \left( \dfrac{1}{8} + \dfrac{3}{4} \right) : 2 
&= \left( \dfrac{1}{8} + \dfrac{6}{8} \right) : 2  \\ 
&=  \dfrac{7}{8} : 2  \\
&=  \dfrac{7}{16} 
= \dfrac{13}{32}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{12} \;\;\wedge\;\; \dfrac{7}{10}  \;\;\Rightarrow\;\; $ [[  59/120  ]] 
@Algebrite.check(59/120)
************
$$
\begin{align*}
 \left( \dfrac{5}{12} + \dfrac{7}{10} \right) : 2 
&= \left( \dfrac{25}{60} + \dfrac{42}{60} \right) : 2  \\ 
&=  \dfrac{67}{60} : 2  \\
&=  \dfrac{67}{120} 
= \dfrac{59}{120}   \\
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{5} \;\;\wedge\;\; \dfrac{7}{8}  \;\;\Rightarrow\;\; $ [[  51/80  ]] 
@Algebrite.check(14/15)
************
$$
\begin{align*}
 \left( \dfrac{2}{5} + \dfrac{7}{8} \right) : 2 & = \left( \dfrac{16}{40} + \dfrac{35}{40} \right) : 2  \\ 
 & =  \dfrac{51}{40} : 2  \\
 & =  \dfrac{51}{80}   \\
\end{align*}
$$
************
</div>

</section>














<!--  Bruchrechnung 0060  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 60:__ **Bestimme** den Wert zwischen den gegeneben beiden Brüchen, der exakt in der Mitte liegt.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{1}{3} \;\;\wedge\;\; \dfrac{3}{5}  \;\;\Rightarrow\;\; $ [[  7/15  ]] 
@Algebrite.check(7/15)
************
$$
\begin{align*}
\left(\dfrac{1}{3} + \dfrac{3}{5}\right) : 2
&= \left(\dfrac{5}{15} + \dfrac{9}{15}\right) : 2 \\
&= \dfrac{14}{15} : 2 \\
&= \dfrac{14}{30} \;=\; \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{2}{7} \;\;\wedge\;\; \dfrac{5}{6}  \;\;\Rightarrow\;\; $ [[  47/84  ]] 
@Algebrite.check(47/84)
************
$$
\begin{align*}
\left(\dfrac{2}{7} + \dfrac{5}{6}\right) : 2
&= \left(\dfrac{12}{42} + \dfrac{35}{42}\right) : 2 \\
&= \dfrac{47}{42} : 2 \\
&= \dfrac{47}{84}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{9} \;\;\wedge\;\; \dfrac{2}{3}  \;\;\Rightarrow\;\; $ [[  5/9  ]] 
@Algebrite.check(5/9)
************
$$
\begin{align*}
\left(\dfrac{4}{9} + \dfrac{2}{3}\right) : 2
&= \left(\dfrac{4}{9} + \dfrac{6}{9}\right) : 2 \\
&= \dfrac{10}{9} : 2 \\
&= \dfrac{10}{18} \;=\; \dfrac{5}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{8} \;\;\wedge\;\; \dfrac{1}{12}  \;\;\Rightarrow\;\; $ [[  17/48  ]] 
@Algebrite.check(17/48)
************
$$
\begin{align*}
\left(\dfrac{5}{8} + \dfrac{1}{12}\right) : 2
&= \left(\dfrac{15}{24} + \dfrac{2}{24}\right) : 2 \\
&= \dfrac{17}{24} : 2 \\
&= \dfrac{17}{48}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \;\;\wedge\;\; \dfrac{7}{12}  \;\;\Rightarrow\;\; $ [[  53/120  ]] 
@Algebrite.check(53/120)
************
$$
\begin{align*}
\left(\dfrac{3}{10} + \dfrac{7}{12}\right) : 2
&= \left(\dfrac{18}{60} + \dfrac{35}{60}\right) : 2 \\
&= \dfrac{53}{60} : 2 \\
&= \dfrac{53}{120}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{20} \;\;\wedge\;\; \dfrac{3}{4}  \;\;\Rightarrow\;\; $ [[  13/20  ]] 
@Algebrite.check(13/20)
************
$$
\begin{align*}
\left(\dfrac{11}{20} + \dfrac{3}{4}\right) : 2
&= \left(\dfrac{11}{20} + \dfrac{15}{20}\right) : 2 \\
&= \dfrac{26}{20} : 2 \\
&= \dfrac{13}{10} : 2
= \dfrac{13}{20}
\end{align*}
$$
************
</div>

</section>





#### Übungsaufgaben zur Bruchrechnung 61 bis 70





<!--  Bruchrechnung 0061  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 61:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{2}{3} - \dfrac{1}{6} \right) = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{2}{3} - \dfrac{1}{6} \right)
&= \left( \dfrac{2}{4} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{4}{6} - \dfrac{1}{6} \right) \\
&= \left( \dfrac{3}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{3}{6} \right) \\
&= \dfrac{9}{20} : \dfrac{1}{2} \\
&= \dfrac{9}{20}\cdot\dfrac{2}{1} \\
&= \dfrac{18}{20} \\
&= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{4} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\left( \dfrac{3}{4} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3}
&= \left( \dfrac{6}{8} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} \\
&= \left( \dfrac{5}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} \\
&= \dfrac{5}{8}\cdot\dfrac{2}{1} - \dfrac{1}{3} \\
&= \dfrac{10}{8} - \dfrac{1}{3} \\
&= \dfrac{5}{4} - \dfrac{1}{3} \\
&= \dfrac{15}{12} - \dfrac{4}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{1}{2} : \dfrac{2}{5} + \left( \dfrac{3}{10} - \dfrac{1}{5} \right) = $ [[  27/20  ]]
@Algebrite.check(27/20)
************
$$
\begin{align*}
\dfrac{1}{2} : \dfrac{2}{5} + \left( \dfrac{3}{10} - \dfrac{1}{5} \right)
&= \dfrac{1}{2}\cdot\dfrac{5}{2} + \left( \dfrac{3}{10} - \dfrac{2}{10} \right) \\
&= \dfrac{5}{4} + \dfrac{1}{10} \\
&= \dfrac{25}{20} + \dfrac{2}{20} \\
&= \dfrac{27}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{5}{6} + \dfrac{1}{3} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} = $ [[  28/45  ]]
@Algebrite.check(28/45)
************
$$
\begin{align*}
\left( \dfrac{5}{6} + \dfrac{1}{3} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4}
&= \left( \dfrac{5}{6} + \dfrac{2}{6} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} \\
&= \left( \dfrac{7}{6} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} \\
&= \dfrac{14}{30} : \dfrac{3}{4} \\
&= \dfrac{7}{15} : \dfrac{3}{4} \\
&= \dfrac{7}{15}\cdot\dfrac{4}{3} \\
&= \dfrac{28}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) - \dfrac{1}{6} + \dfrac{1}{4} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left( \dfrac{4}{9} : \dfrac{2}{3} \right) - \dfrac{1}{6} + \dfrac{1}{4}
&= \left( \dfrac{4}{9}\cdot\dfrac{3}{2} \right) - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{12}{18} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{2}{3} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{4}{6} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{3}{6} + \dfrac{1}{4} \\
&= \dfrac{1}{2} + \dfrac{1}{4} \\
&= \dfrac{2}{4} + \dfrac{1}{4} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{1}{5} + \dfrac{3}{10} \right) : \left( \dfrac{1}{2}\cdot\dfrac{2}{3} \right) = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\left( \dfrac{1}{5} + \dfrac{3}{10} \right) : \left( \dfrac{1}{2}\cdot\dfrac{2}{3} \right)
&= \left( \dfrac{2}{10} + \dfrac{3}{10} \right) : \left( \dfrac{2}{6} \right) \\
&= \left( \dfrac{5}{10} \right) : \left( \dfrac{1}{3} \right) \\
&= \dfrac{1}{2} : \dfrac{1}{3} \\
&= \dfrac{1}{2}\cdot\dfrac{3}{1} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0062  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 62:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{3}{4} - \dfrac{1}{6} = $ [[  17/18  ]]
@Algebrite.check(17/18)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{3}{4} - \dfrac{1}{6}
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right) : \dfrac{3}{4} - \dfrac{1}{6} \\
&= \left( \dfrac{5}{6} \right) : \dfrac{3}{4} - \dfrac{1}{6} \\
&= \left( \dfrac{5}{6} \cdot \dfrac{4}{3} \right) - \dfrac{1}{6} \\
&= \dfrac{20}{18} - \dfrac{1}{6}
= \dfrac{10}{9} - \dfrac{1}{6} \\
&= \dfrac{20}{18} - \dfrac{3}{18}
= \dfrac{17}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{5} : \dfrac{1}{2} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} = $ [[  21/20  ]]
@Algebrite.check(21/20)
************
$$
\begin{align*}
\left( \dfrac{3}{5} : \dfrac{1}{2} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4}
&= \left( \dfrac{3}{5} \cdot \dfrac{2}{1} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} \\
&= \left( \dfrac{6}{5} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} \\
&= \dfrac{12}{15} + \dfrac{1}{4}
= \dfrac{4}{5} + \dfrac{1}{4} \\
&= \dfrac{16}{20} + \dfrac{5}{20}
= \dfrac{21}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) : \left( \dfrac{1}{4} + \dfrac{1}{8} \right) = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\left( \dfrac{5}{6} - \dfrac{1}{3} \right) : \left( \dfrac{1}{4} + \dfrac{1}{8} \right)
&= \left( \dfrac{5}{6} - \dfrac{2}{6} \right) : \left( \dfrac{2}{8} + \dfrac{1}{8} \right) \\
&= \left( \dfrac{3}{6} \right) : \left( \dfrac{3}{8} \right) \\
&= \dfrac{1}{2} : \dfrac{3}{8}
= \dfrac{1}{2} \cdot \dfrac{8}{3} \\
&= \dfrac{8}{6}
= \dfrac{4}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\left( \dfrac{2}{5} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8}
&= \left( \dfrac{4}{10} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \left( \dfrac{5}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{3}{8} - \dfrac{1}{8}
= \dfrac{2}{8}
= \dfrac{1}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{6} - \dfrac{1}{12} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{6} - \dfrac{1}{12}
&= \left( \dfrac{4}{9} \cdot \dfrac{3}{2} \right) + \dfrac{1}{6} - \dfrac{1}{12} \\
&= \dfrac{12}{18} + \dfrac{1}{6} - \dfrac{1}{12}
= \dfrac{2}{3} + \dfrac{1}{6} - \dfrac{1}{12} \\
&= \dfrac{4}{6} + \dfrac{1}{6} - \dfrac{1}{12}
= \dfrac{5}{6} - \dfrac{1}{12} \\
&= \dfrac{10}{12} - \dfrac{1}{12}
= \dfrac{9}{12}
= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{3}{7} + \dfrac{2}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3} = $ [[  25/21  ]]
@Algebrite.check(25/21)
************
$$
\begin{align*}
\left( \dfrac{3}{7} + \dfrac{2}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3}
&= \left( \dfrac{5}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3} \\
&= \left( \dfrac{5}{7} \cdot \dfrac{6}{5} \right) + \dfrac{1}{3} \\
&= \dfrac{6}{7} + \dfrac{1}{3}
= \dfrac{18}{21} + \dfrac{7}{21} \\
&= \dfrac{25}{21}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0063  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 63:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( \dfrac{2}{3} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2} = $ [[  7/6  ]]
@Algebrite.check(7/6)
************
$$
\begin{align*}
\left( \dfrac{2}{3} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2}
&= \left( \dfrac{4}{6} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{3}{6} : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{1}{2} : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{1}{2} \cdot \dfrac{4}{3} + \dfrac{1}{2} \\
&= \dfrac{4}{6} + \dfrac{1}{2} \\
&= \dfrac{2}{3} + \dfrac{1}{2} \\
&= \dfrac{4}{6} + \dfrac{3}{6} \\
&= \dfrac{7}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{5}{8} + \dfrac{1}{4} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6} = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\left( \dfrac{5}{8} + \dfrac{1}{4} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6}
&= \left( \dfrac{5}{8} + \dfrac{2}{8} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6} \\
&= \dfrac{7}{8} \cdot \dfrac{2}{3} - \dfrac{1}{6} \\
&= \dfrac{14}{24} - \dfrac{1}{6} \\
&= \dfrac{7}{12} - \dfrac{1}{6} \\
&= \dfrac{7}{12} - \dfrac{2}{12} \\
&= \dfrac{5}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{3}{4} : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{6} = $ [[  16/15  ]]
@Algebrite.check(16/15)
************
$$
\begin{align*}
\dfrac{3}{4} : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{6}
&= \dfrac{3}{4} : \left( \dfrac{3}{6} + \dfrac{2}{6} \right) + \dfrac{1}{6} \\
&= \dfrac{3}{4} : \dfrac{5}{6} + \dfrac{1}{6} \\
&= \dfrac{3}{4} \cdot \dfrac{6}{5} + \dfrac{1}{6} \\
&= \dfrac{18}{20} + \dfrac{1}{6} \\
&= \dfrac{9}{10} + \dfrac{1}{6} \\
&= \dfrac{27}{30} + \dfrac{5}{30} \\
&= \dfrac{32}{30} \\
&= \dfrac{16}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{2}{5} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3} = $ [[  11/15  ]]
@Algebrite.check(11/15)
************
$$
\begin{align*}
\left( \dfrac{2}{5} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3}
&= \left( \dfrac{4}{10} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3} \\
&= \dfrac{7}{10} : \dfrac{1}{2} - \dfrac{2}{3} \\
&= \dfrac{7}{10} \cdot \dfrac{2}{1} - \dfrac{2}{3} \\
&= \dfrac{14}{10} - \dfrac{2}{3} \\
&= \dfrac{7}{5} - \dfrac{2}{3} \\
&= \dfrac{21}{15} - \dfrac{10}{15} \\
&= \dfrac{11}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} - \dfrac{1}{6} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left( \dfrac{4}{9} - \dfrac{1}{6} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3}
&= \left( \dfrac{8}{18} - \dfrac{3}{18} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} \\
&= \left( \dfrac{5}{18} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} \\
&= \dfrac{15}{36} + \dfrac{1}{3} \\
&= \dfrac{5}{12} + \dfrac{1}{3} \\
&= \dfrac{5}{12} + \dfrac{4}{12} \\
&= \dfrac{9}{12} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{5}{6} : \left( \dfrac{1}{3} + \dfrac{1}{2} \right) - \dfrac{1}{4} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{6} : \left( \dfrac{1}{3} + \dfrac{1}{2} \right) - \dfrac{1}{4}
&= \dfrac{5}{6} : \left( \dfrac{2}{6} + \dfrac{3}{6} \right) - \dfrac{1}{4} \\
&= \dfrac{5}{6} : \dfrac{5}{6} - \dfrac{1}{4} \\
&= 1 - \dfrac{1}{4} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0064  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 64:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{3} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{4}{5} - \dfrac{1}{10} \right) = $ [[  5/7  ]]
@Algebrite.check(5/7)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{3} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{4}{5} - \dfrac{1}{10} \right)
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{8}{10} - \dfrac{1}{10} \right) \\
&= \left( \dfrac{5}{6} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{7}{10} \right) \\
&= \dfrac{5\cdot 3}{6\cdot 5} : \dfrac{7}{10} \\
&= \dfrac{3}{6} : \dfrac{7}{10} \\
&= \dfrac{1}{2} \cdot \dfrac{10}{7} \\
&= \dfrac{10}{14}
= \dfrac{5}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{4} - \dfrac{1}{6} \right) : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{5} = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\left( \dfrac{3}{4} - \dfrac{1}{6} \right) : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{5}
&= \left( \dfrac{9}{12} - \dfrac{2}{12} \right) : \left( \dfrac{3}{6} + \dfrac{2}{6} \right) + \dfrac{1}{5} \\
&= \left( \dfrac{7}{12} \right) : \left( \dfrac{5}{6} \right) + \dfrac{1}{5} \\
&= \dfrac{7}{12}\cdot\dfrac{6}{5} + \dfrac{1}{5} \\
&= \dfrac{42}{60} + \dfrac{12}{60} \\
&= \dfrac{54}{60}
= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( \dfrac{2}{3} : \dfrac{4}{5} \right) + \left( \dfrac{1}{4} : \dfrac{1}{8} \right) - \dfrac{1}{6} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\left( \dfrac{2}{3} : \dfrac{4}{5} \right) + \left( \dfrac{1}{4} : \dfrac{1}{8} \right) - \dfrac{1}{6}
&= \left( \dfrac{2}{3}\cdot\dfrac{5}{4} \right) + \left( \dfrac{1}{4}\cdot\dfrac{8}{1} \right) - \dfrac{1}{6} \\
&= \dfrac{10}{12} + 2 - \dfrac{1}{6} \\
&= \dfrac{5}{6} + 2 - \dfrac{1}{6} \\
&= 2 + \dfrac{4}{6}
= 2 + \dfrac{2}{3}
= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{5}{8} + \dfrac{1}{4} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\left( \dfrac{5}{8} + \dfrac{1}{4} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3}
&= \left( \dfrac{5}{8} + \dfrac{2}{8} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \left( \dfrac{7}{8} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \dfrac{14}{40} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \dfrac{7}{20}\cdot\dfrac{10}{3} - \dfrac{1}{3} \\
&= \dfrac{70}{60} - \dfrac{1}{3}
= \dfrac{7}{6} - \dfrac{1}{3} \\
&= \dfrac{7}{6} - \dfrac{2}{6}
= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{1}{2} : \left( \dfrac{1}{3} + \dfrac{1}{6} \right) + \left( \dfrac{3}{5} - \dfrac{1}{2} \right) = $ [[  11/10  ]]
@Algebrite.check(11/10)
************
$$
\begin{align*}
\dfrac{1}{2} : \left( \dfrac{1}{3} + \dfrac{1}{6} \right) + \left( \dfrac{3}{5} - \dfrac{1}{2} \right)
&= \dfrac{1}{2} : \left( \dfrac{2}{6} + \dfrac{1}{6} \right) + \left( \dfrac{6}{10} - \dfrac{5}{10} \right) \\
&= \dfrac{1}{2} : \left( \dfrac{3}{6} \right) + \dfrac{1}{10} \\
&= \dfrac{1}{2} : \dfrac{1}{2} + \dfrac{1}{10} \\
&= 1 + \dfrac{1}{10}
= \dfrac{11}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{12} : \dfrac{1}{3} - \dfrac{1}{4} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{12} : \dfrac{1}{3} - \dfrac{1}{4}
&= \left( \dfrac{4}{9}\cdot\dfrac{3}{2} \right) + \left( \dfrac{1}{12}\cdot 3 \right) - \dfrac{1}{4} \\
&= \dfrac{12}{18} + \dfrac{3}{12} - \dfrac{1}{4} \\
&= \dfrac{2}{3} + \dfrac{1}{4} - \dfrac{1}{4} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

</section>














<!--  Bruchrechnung 0065  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 65:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( 2a : b \right) \cdot c = $ [[  10/3  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{5}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{5}{2}$
@Algebrite.check(10/3)
************
$$
\begin{align*}
\left( 2a : b \right) \cdot c
&= \left( 2\cdot\dfrac{3}{5} : \dfrac{9}{10} \right) \cdot \dfrac{5}{2} \\
&= \left( \dfrac{6}{5} \cdot \dfrac{10}{9} \right) \cdot \dfrac{5}{2} \\
&= \dfrac{6\cdot 10\cdot 5}{5\cdot 9\cdot 2}
= \dfrac{60}{18}
= \dfrac{10}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( a + b \right) : c = $ [[  1  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{1}{3}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(1)
************
$$
\begin{align*}
\left( a + b \right) : c
&= \left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{5}{6} \\
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right) : \dfrac{5}{6}
= \dfrac{5}{6} : \dfrac{5}{6} \\
&= \dfrac{5}{6}\cdot\dfrac{6}{5}
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( a : b \right)\cdot\left( c : a \right) = $ [[  15/4  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{7}\;\; \wedge\;\; b=\dfrac{2}{5}\;\; \wedge\;\; c=\dfrac{3}{2}$
@Algebrite.check(15/4)
************
$$
\begin{align*}
\left( a : b \right)\cdot\left( c : a \right)
&= \left( \dfrac{4}{7} : \dfrac{2}{5} \right) \cdot \left( \dfrac{3}{2} : \dfrac{4}{7} \right) \\
&= \left( \dfrac{4}{7}\cdot\dfrac{5}{2} \right)\cdot\left( \dfrac{3}{2}\cdot\dfrac{7}{4} \right) \\
&= \dfrac{4\cdot5}{7\cdot2}\cdot\dfrac{3\cdot7}{2\cdot4}
= \dfrac{20}{14}\cdot\dfrac{21}{8} \\
&= \dfrac{20\cdot21}{14\cdot8}
= \dfrac{420}{112}
= \dfrac{15}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3a \cdot \left( b : c \right) = $ [[  3  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{3}{5}$
@Algebrite.check(3)
************
$$
\begin{align*}
3a \cdot \left( b : c \right)
&= 3\cdot\dfrac{2}{3} \cdot \left( \dfrac{9}{10} : \dfrac{3}{5} \right) \\
&= 2 \cdot \left( \dfrac{9}{10}\cdot\dfrac{5}{3} \right)
= 2 \cdot \dfrac{45}{30} \\
&= 2 \cdot \dfrac{3}{2}
= 3
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( a + c \right)\cdot\left( b : 2a \right) = $ [[  25/36  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{5}{6}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(25/36)
************
$$
\begin{align*}
\left( a + c \right)\cdot\left( b : 2a \right)
&= \left( \dfrac{3}{4} + \dfrac{1}{2} \right)\cdot\left( \dfrac{5}{6} : 2\cdot\dfrac{3}{4} \right) \\
&= \left( \dfrac{3}{4} + \dfrac{2}{4} \right)\cdot\left( \dfrac{5}{6} : \dfrac{3}{2} \right) \\
&= \dfrac{5}{4}\cdot\left( \dfrac{5}{6}\cdot\dfrac{2}{3} \right)
= \dfrac{5}{4}\cdot\dfrac{10}{18} \\
&= \dfrac{5}{4}\cdot\dfrac{5}{9}
= \dfrac{25}{36}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ab + c}{\,\dfrac{b}{2}\,} = $ [[  64/25  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{5}{8}\;\; \wedge\;\; c=\dfrac{3}{10}$
@Algebrite.check(64/25)
************
$$
\begin{align*}
\dfrac{ab + c}{\,\dfrac{b}{2}\,}
&= \dfrac{\left(\dfrac{4}{5}\cdot\dfrac{5}{8}\right) + \dfrac{3}{10}}{\,\dfrac{5}{8}\cdot\dfrac{1}{2}\,} \\
&= \dfrac{\dfrac{4}{8} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{\dfrac{1}{2} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,} \\
&= \dfrac{\dfrac{5}{10} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{\dfrac{8}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{4}{5} : \dfrac{5}{16} \\
&= \dfrac{4}{5}\cdot\dfrac{16}{5}
= \dfrac{64}{25}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0066  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 66:__ **Berechne** den Wert des Terms.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( 3a + b \right) : \left( 2c \right) = $ [[  7/3  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{3}\;\; \wedge\;\; b=\dfrac{1}{6}\;\; \wedge\;\; c=\dfrac{1}{4}$
@Algebrite.check(7/3)
************
$$
\begin{align*}
\left( 3a + b \right) : \left( 2c \right)
&= \left( 3\cdot\dfrac{1}{3} + \dfrac{1}{6} \right) : \left( 2\cdot\dfrac{1}{4} \right) \\
&= \left( 1 + \dfrac{1}{6} \right) : \dfrac{1}{2}
= \left( \dfrac{6}{6} + \dfrac{1}{6} \right) : \dfrac{1}{2} \\
&= \dfrac{7}{6} : \dfrac{1}{2}
= \dfrac{7}{6} \cdot \dfrac{2}{1} \\
&= \dfrac{14}{6}
= \dfrac{7}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( a : b \right) + \left( c : a \right) = $ [[  31/20  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{5}\;\; \wedge\;\; b=\dfrac{1}{2}\;\; \wedge\;\; c=\dfrac{3}{10}$
@Algebrite.check(31/20)
************
$$
\begin{align*}
\left( a : b \right) + \left( c : a \right)
&= \left( \dfrac{2}{5} : \dfrac{1}{2} \right) + \left( \dfrac{3}{10} : \dfrac{2}{5} \right) \\
&= \left( \dfrac{2}{5}\cdot\dfrac{2}{1} \right) + \left( \dfrac{3}{10}\cdot\dfrac{5}{2} \right) \\
&= \dfrac{4}{5} + \dfrac{15}{20}
= \dfrac{16}{20} + \dfrac{15}{20} \\
&= \dfrac{31}{20}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( 2a - b \right)\cdot\left( c : a \right) = $ [[  6/5  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{8}\;\; \wedge\;\; b=\dfrac{1}{4}\;\; \wedge\;\; c=\dfrac{9}{10}$
@Algebrite.check(6/5)
************
$$
\begin{align*}
\left( 2a - b \right)\cdot\left( c : a \right)
&= \left( 2\cdot\dfrac{3}{8} - \dfrac{1}{4} \right)\cdot\left( \dfrac{9}{10} : \dfrac{3}{8} \right) \\
&= \left( \dfrac{6}{8} - \dfrac{2}{8} \right)\cdot\left( \dfrac{9}{10}\cdot\dfrac{8}{3} \right) \\
&= \dfrac{4}{8}\cdot \dfrac{72}{30}
= \dfrac{1}{2}\cdot \dfrac{12}{5} \\
&= \dfrac{12}{10}
= \dfrac{6}{5}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( a + c \right) : \left( b - a \right) = $ [[  5/2  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{6}\;\; \wedge\;\; b=\dfrac{1}{2}\;\; \wedge\;\; c=\dfrac{2}{3}$
@Algebrite.check(5/2)
************
$$
\begin{align*}
\left( a + c \right) : \left( b - a \right)
&= \left( \dfrac{1}{6} + \dfrac{2}{3} \right) : \left( \dfrac{1}{2} - \dfrac{1}{6} \right) \\
&= \left( \dfrac{1}{6} + \dfrac{4}{6} \right) : \left( \dfrac{3}{6} - \dfrac{1}{6} \right) \\
&= \dfrac{5}{6} : \dfrac{2}{6}
= \dfrac{5}{6}\cdot\dfrac{6}{2} \\
&= \dfrac{5}{2}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( a : 2 + b : 3 \right)\cdot \left( 3c \right) = $ [[  13/8  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(13/8)
************
$$
\begin{align*}
\left( a : 2 + b : 3 \right)\cdot \left( 3c \right)
&= \left( \dfrac{4}{5} : 2 + \dfrac{3}{4} : 3 \right)\cdot \left( 3\cdot\dfrac{5}{6} \right) \\
&= \left( \dfrac{4}{5}\cdot\dfrac{1}{2} + \dfrac{3}{4}\cdot\dfrac{1}{3} \right)\cdot \dfrac{15}{6} \\
&= \left( \dfrac{2}{5} + \dfrac{1}{4} \right)\cdot \dfrac{5}{2} \\
&= \left( \dfrac{8}{20} + \dfrac{5}{20} \right)\cdot \dfrac{5}{2} \\
&= \dfrac{13}{20}\cdot \dfrac{5}{2}
= \dfrac{65}{40}
= \dfrac{13}{8}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( a + b \right) : \left( c - a \right)\cdot b = $ [[  13/25  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{4}\;\; \wedge\;\; b=\dfrac{2}{5}\;\; \wedge\;\; c=\dfrac{3}{4}$
@Algebrite.check(13/25)
************
$$
\begin{align*}
\left( a + b \right) : \left( c - a \right)\cdot b
&= \left( \dfrac{1}{4} + \dfrac{2}{5} \right) : \left( \dfrac{3}{4} - \dfrac{1}{4} \right) \cdot \dfrac{2}{5} \\
&= \left( \dfrac{5}{20} + \dfrac{8}{20} \right) : \dfrac{1}{2} \cdot \dfrac{2}{5} \\
&= \dfrac{13}{20} : \dfrac{1}{2} \cdot \dfrac{2}{5}
= \dfrac{13}{20}\cdot\dfrac{2}{1}\cdot\dfrac{2}{5} \\
&= \dfrac{52}{20}\cdot\dfrac{1}{5}
= \dfrac{52}{100}
= \dfrac{13}{25}
\end{align*}
$$
************
</div>

</section>








<!--  Bruchrechnung 0067  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 67:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \; 2a + b : c \; = $ [[  7/2  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{5}{6}\;\; \wedge\;\; c=\dfrac{5}{12}$
@Algebrite.check(7/2)
************
$$
\begin{align*}
2a + b : c
&= 2\cdot\dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12} \\
&= \dfrac{6}{4} + \dfrac{5}{6}\cdot\dfrac{12}{5} \\
&= \dfrac{3}{2} + 2 \\
&= \dfrac{3}{2} + \dfrac{4}{2} \\
&= \dfrac{7}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \; a : 2 + bc \; = $ [[  9/10  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{5}{3}$
@Algebrite.check(9/10)
************
$$
\begin{align*}
a : 2 + bc
&= \dfrac{4}{5} : 2 + \dfrac{3}{10}\cdot\dfrac{5}{3} \\
&= \dfrac{4}{5}\cdot\dfrac{1}{2} + \dfrac{15}{30} \\
&= \dfrac{4}{10} + \dfrac{1}{2} \\
&= \dfrac{2}{5} + \dfrac{1}{2} \\
&= \dfrac{4}{10} + \dfrac{5}{10} \\
&= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \; 3a : b + c : 2 \; = $ [[  59/12  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{4}{9}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(59/12)
************
$$
\begin{align*}
3a : b + c : 2
&= 3\cdot\dfrac{2}{3} : \dfrac{4}{9} + \dfrac{5}{6} : 2 \\
&= 2 : \dfrac{4}{9} + \dfrac{5}{6}\cdot\dfrac{1}{2} \\
&= 2\cdot\dfrac{9}{4} + \dfrac{5}{12} \\
&= \dfrac{18}{4} + \dfrac{5}{12}
= \dfrac{9}{2} + \dfrac{5}{12} \\
&= \dfrac{54}{12} + \dfrac{5}{12}
= \dfrac{59}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \; a + b : 3 + 2c \; = $ [[  25/12  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{2}{3}$
@Algebrite.check(25/12)
************
$$
\begin{align*}
a + b : 3 + 2c
&= \dfrac{1}{2} + \dfrac{3}{4} : 3 + 2\cdot\dfrac{2}{3} \\
&= \dfrac{1}{2} + \dfrac{3}{4}\cdot\dfrac{1}{3} + \dfrac{4}{3} \\
&= \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{4}{3} \\
&= \dfrac{6}{12} + \dfrac{3}{12} + \dfrac{16}{12} \\
&= \dfrac{25}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; ab + a : 2 - c : b \; = $ [[  1/8  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{2}{3}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(1/8)
************
$$
\begin{align*}
ab + a : 2 - c : b
&= \dfrac{3}{4}\cdot\dfrac{2}{3} + \dfrac{3}{4} : 2 - \dfrac{1}{2} : \dfrac{2}{3} \\
&= \dfrac{6}{12} + \dfrac{3}{4}\cdot\dfrac{1}{2} - \dfrac{1}{2}\cdot\dfrac{3}{2} \\
&= \dfrac{1}{2} + \dfrac{3}{8} - \dfrac{3}{4} \\
&= \dfrac{4}{8} + \dfrac{3}{8} - \dfrac{6}{8} \\
&= \dfrac{1}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \; 4a - b : 2 + c : a \; = $ [[  27/10  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{5}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(27/10)
************
$$
\begin{align*}
4a - b : 2 + c : a
&= 4\cdot\dfrac{2}{5} - \dfrac{3}{10} : 2 + \dfrac{1}{2} : \dfrac{2}{5} \\
&= \dfrac{8}{5} - \dfrac{3}{10}\cdot\dfrac{1}{2} + \dfrac{1}{2}\cdot\dfrac{5}{2} \\
&= \dfrac{8}{5} - \dfrac{3}{20} + \dfrac{5}{4} \\
&= \dfrac{32}{20} - \dfrac{3}{20} + \dfrac{25}{20} \\
&= \dfrac{54}{20}
= \dfrac{27}{10}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0068  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 68:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \; a : b + 2c \; = $ [[  11/6  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{5}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{7}{12}$
@Algebrite.check(11/6)
************
$$
\begin{align*}
a : b + 2c
&= \dfrac{3}{5} : \dfrac{9}{10} + 2\cdot\dfrac{7}{12} \\
&= \dfrac{3}{5}\cdot\dfrac{10}{9} + \dfrac{14}{12} \\
&= \dfrac{30}{45} + \dfrac{7}{6}
= \dfrac{2}{3} + \dfrac{7}{6} \\
&= \dfrac{4}{6} + \dfrac{7}{6}
= \dfrac{11}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \; 3a - b : 2 + c : b \; = $ [[  161/72  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(161/72)
************
$$
\begin{align*}
3a - b : 2 + c : b
&= 3\cdot\dfrac{1}{2} - \dfrac{3}{4} : 2 + \dfrac{5}{6} : \dfrac{3}{4} \\
&= \dfrac{3}{2} - \dfrac{3}{4}\cdot\dfrac{1}{2} + \dfrac{5}{6}\cdot\dfrac{4}{3} \\
&= \dfrac{3}{2} - \dfrac{3}{8} + \dfrac{20}{18}
= \dfrac{3}{2} - \dfrac{3}{8} + \dfrac{10}{9} \\
&= \left(\dfrac{12}{8} - \dfrac{3}{8}\right) + \dfrac{10}{9}
= \dfrac{9}{8} + \dfrac{10}{9} \\
&= \dfrac{81}{72} + \dfrac{80}{72}
= \dfrac{161}{72}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \; ab + c : 2 - a : c \; = $ [[  1/45  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{5}{4}\;\; \wedge\;\; c=\dfrac{3}{5}$
@Algebrite.check(1/45)
************
$$
\begin{align*}
ab + c : 2 - a : c
&= \left(\dfrac{2}{3}\cdot\dfrac{5}{4}\right) + \dfrac{3}{5} : 2 - \dfrac{2}{3} : \dfrac{3}{5} \\
&= \dfrac{10}{12} + \dfrac{3}{5}\cdot\dfrac{1}{2} - \dfrac{2}{3}\cdot\dfrac{5}{3} \\
&= \dfrac{5}{6} + \dfrac{3}{10} - \dfrac{10}{9} \\
&= \dfrac{75}{90} + \dfrac{27}{90} - \dfrac{100}{90} \\
&= \dfrac{2}{90}
= \dfrac{1}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \; a : (3b) + 2c - b : a \; = $ [[  17/30  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{2}{3}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(17/30)
************
$$
\begin{align*}
a : (3b) + 2c - b : a
&= \dfrac{4}{5} : \big(3\cdot\dfrac{2}{3}\big) + 2\cdot\dfrac{1}{2} - \dfrac{2}{3} : \dfrac{4}{5} \\
&= \dfrac{4}{5} : 2 + 1 - \dfrac{2}{3}\cdot\dfrac{5}{4} \\
&= \dfrac{4}{5}\cdot\dfrac{1}{2} + 1 - \dfrac{10}{12} \\
&= \dfrac{2}{5} + 1 - \dfrac{5}{6} \\
&= \dfrac{12}{30} + \dfrac{30}{30} - \dfrac{25}{30} \\
&= \dfrac{17}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 2a + bc : a - c : 2 \; = $ [[  89/27  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{8}\;\; \wedge\;\; b=\dfrac{4}{3}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(89/27)
************
$$
\begin{align*}
2a + bc : a - c : 2
&= 2\cdot\dfrac{3}{8} + \left(\dfrac{4}{3}\cdot\dfrac{5}{6}\right) : \dfrac{3}{8} - \dfrac{5}{6} : 2 \\
&= \dfrac{3}{4} + \dfrac{20}{18} : \dfrac{3}{8} - \dfrac{5}{6}\cdot\dfrac{1}{2} \\
&= \dfrac{3}{4} + \dfrac{10}{9}\cdot\dfrac{8}{3} - \dfrac{5}{12} \\
&= \dfrac{3}{4} + \dfrac{80}{27} - \dfrac{5}{12} \\
&= \dfrac{81}{108} + \dfrac{320}{108} - \dfrac{45}{108} \\
&= \dfrac{356}{108}
= \dfrac{89}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \; a : b + c : (2a) + 3b - a \; = $ [[  263/90  ]] $\;\;\text{mit:}\;\; a=\dfrac{5}{12}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{7}{8}$
@Algebrite.check(263/90)
************
$$
\begin{align*}
a : b + c : (2a) + 3b - a
&= \dfrac{5}{12} : \dfrac{3}{10} + \dfrac{7}{8} : \big(2\cdot\dfrac{5}{12}\big) + 3\cdot\dfrac{3}{10} - \dfrac{5}{12} \\
&= \dfrac{5}{12}\cdot\dfrac{10}{3} + \dfrac{7}{8} : \dfrac{5}{6} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{50}{36} + \dfrac{7}{8}\cdot\dfrac{6}{5} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{25}{18} + \dfrac{42}{40} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{250}{180} + \dfrac{189}{180} + \dfrac{162}{180} - \dfrac{75}{180} \\
&= \dfrac{526}{180}
= \dfrac{263}{90}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0069  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 69:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{2}{3} \cdot \dfrac{7}{4}  \cdot \dfrac{8}{9}  \cdot \dfrac{9}{7} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{7}{4}  \cdot \dfrac{8}{9}  \cdot \dfrac{9}{7} &= \dfrac{2}{3} \cdot \dfrac{ \cancel{7} }{ \xcancel{4} }  \cdot \dfrac{\xcancel{8} \,\textcolor{red}{2}  }{\bcancel{9}}  \cdot \dfrac{\bcancel{9} }{\cancel{7} }  \\
 &= \dfrac{2  \cdot  1  \cdot  2  \cdot  1}{3 \cdot 1 \cdot 1 \cdot 1 }\\
 &= \dfrac{4}{3 }\\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{6}{5} \cdot \dfrac{9}{2}  \cdot \dfrac{10}{6}  \cdot \dfrac{7}{9} = $ [[  7  ]]
@Algebrite.check(7)
************
$$
\begin{align*}
\dfrac{6}{5} \cdot \dfrac{9}{2}  \cdot \dfrac{10}{6}  \cdot \dfrac{7}{9} & = \dfrac{\cancel{6}}{\xcancel{5}} \cdot \dfrac{\bcancel{9}}{2}  \cdot \dfrac{\xcancel{10}\,\textcolor{red}{2} }{\cancel{6}}  \cdot \dfrac{7}{\bcancel{9}}  \\
& = \dfrac{1}{1} \cdot \dfrac{1}{\cancel{2}}  \cdot \dfrac{\cancel{2} }{1}  \cdot \dfrac{7}{1}  \\
& = 7  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{12}{18} \cdot \dfrac{20}{15} \cdot \dfrac{14}{7} \cdot \dfrac{9}{6} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\dfrac{12}{18} \cdot \dfrac{20}{15} \cdot \dfrac{14}{7} \cdot \dfrac{9}{6}
&= \dfrac{\cancel{12}\,\textcolor{orange}{2}}{ 18 }
   \cdot \dfrac{\bcancel{20}\,\textcolor{red}{4}}{\bcancel{15}\,\textcolor{red}{3}}
   \cdot \dfrac{\xcancel{14}\,\textcolor{blue}{2}}{\xcancel{7}\,\textcolor{blue}{1}}
   \cdot \dfrac{ 9 }{\cancel{6}\,\textcolor{orange}{2}} \\[6pt]
&= \dfrac{ 2 \cdot 4 \cdot \bcancel{2} \cdot \cancel{9}\,\textcolor{lime}{3} }{ \bcancel{18}\,\textcolor{violet}{9} \cdot \cancel{3} \cdot 1 \cdot 2 } \\[6pt]
&= \dfrac{ 2 \cdot 4 \cdot 1 \cdot 3 }{ 9 \cdot 1 \cdot 1 \cdot 2 } \\[6pt]
&= \dfrac{ \cancel{2} \cdot 4 \cdot 2\cdot \cancel{3} }{ \cancel{9}\,\textcolor{red}{3}  \cdot 1 \cdot 1 \cdot \cancel{2} } \\[6pt]
&= \dfrac{ 4 \cdot 2  }{ 3 \cdot 1  } \\[6pt]
&= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{6}{8} \cdot \dfrac{2}{3}  \cdot \dfrac{20}{9}  \cdot \dfrac{15}{2} \cdot \dfrac{7}{3} \cdot \dfrac{18}{5} = $ [[  70  ]]
@Algebrite.check(70)
************
$$
\begin{align*}
\dfrac{6}{8} \cdot \dfrac{2}{3}  \cdot \dfrac{20}{9}  \cdot \dfrac{15}{2} \cdot \dfrac{7}{3} \cdot \dfrac{18}{5} 
& = \dfrac{6}{\xcancel{8}\,\textcolor{orange}{2}} \cdot \dfrac{2}{3}  \cdot \dfrac{\xcancel{20}\,\textcolor{orange}{5}}{\cancel{9}}  \cdot \dfrac{\bcancel{15}\,\textcolor{blue}{3}}{2} \cdot \dfrac{7}{3} \cdot \dfrac{\cancel{18}\,\textcolor{red}{2}}{\bcancel{5}}  \\
& = \dfrac{6}{\bcancel{2}} \cdot \dfrac{\bcancel{2}}{3}  \cdot \dfrac{5}{1}  \cdot \dfrac{\cancel{3}}{\xcancel{2}} \cdot \dfrac{7}{\cancel{3}} \cdot \dfrac{\xcancel{2}}{1}  \\
& = \dfrac{\cancel{6}\,\textcolor{red}{2}}{1} \cdot \dfrac{1}{\cancel{3}}  \cdot \dfrac{5}{1}  \cdot \dfrac{1}{1} \cdot \dfrac{7}{1} \cdot \dfrac{1}{1}  \\
& = \dfrac{2 \cdot 5 \cdot 7 }{1}   \\
& = 70   \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{6}{7} \cdot \dfrac{7}{10}  \cdot \dfrac{5}{9}  \cdot \dfrac{4}{3} \cdot \dfrac{9}{8} \cdot \dfrac{5}{6}  = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\dfrac{6}{7} \cdot \dfrac{7}{10}  \cdot \dfrac{5}{9}  \cdot \dfrac{4}{3} \cdot \dfrac{9}{8} \cdot \dfrac{5}{6} 
& = \dfrac{\cancel{6}}{\xcancel{7}} \cdot \dfrac{\xcancel{7}}{10}  \cdot \dfrac{5}{\bcancel{9}}  \cdot \dfrac{4}{3} \cdot \dfrac{\bcancel{9}}{8} \cdot \dfrac{5}{\cancel{6}} \\
& = \dfrac{1}{1} \cdot \dfrac{1}{\bcancel{10}\,\textcolor{blue}{2}}  \cdot \dfrac{\bcancel{5}}{1}  \cdot \dfrac{\cancel{4}}{3} \cdot \dfrac{1}{\cancel{8}\,\textcolor{red}{2}} \cdot \dfrac{5}{1} \\
& = \dfrac{1}{1} \cdot \dfrac{1}{2}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{3} \cdot \dfrac{1}{2} \cdot \dfrac{5}{1} \\
& = \dfrac{5}{ 2 \cdot 3 \cdot 2 } \\
& = \dfrac{5}{ 12 } \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{12}{7} \cdot \dfrac{15}{33} \cdot \dfrac{8}{45} \cdot \dfrac{14}{3} \cdot \dfrac{9}{8} \cdot \dfrac{11}{5} = $ [[  8/5  ]]
@Algebrite.check(8/5)
************
$$
\begin{align*}
\dfrac{12}{7} \cdot \dfrac{15}{33} \cdot \dfrac{8}{45} \cdot \dfrac{14}{3} \cdot \dfrac{9}{8} \cdot \dfrac{11}{5}
&= \dfrac{12}{\cancel{7}} \cdot \dfrac{15}{\bcancel{33}\,\textcolor{blue}{3}} \cdot \dfrac{\xcancel{8}}{45} \cdot \dfrac{\cancel{14}\,\textcolor{red}{2}}{3} \cdot \dfrac{9}{\xcancel{8}} \cdot \dfrac{\bcancel{11}}{5}  \\
&= \dfrac{\xcancel{12}\,\textcolor{blue}{4}}{1} \cdot \dfrac{\bcancel{15}}{\xcancel{3}} \cdot \dfrac{1}{\bcancel{45}\,\textcolor{orange}{3}} \cdot \dfrac{2}{\cancel{3}} \cdot \dfrac{\cancel{9}\,\textcolor{red}{3}}{1} \cdot \dfrac{1}{5}  \\
&= \dfrac{4}{1} \cdot \dfrac{1}{1} \cdot \dfrac{1}{\cancel{3}} \cdot \dfrac{2}{1} \cdot \dfrac{\cancel{3}}{1} \cdot \dfrac{1}{5}  \\
&= \dfrac{4 \cdot 1 \cdot 1 \cdot 2 \cdot 1 \cdot 1}{1 \cdot 1 \cdot 1 \cdot 1 \cdot 1 \cdot 5} \\
&= \dfrac{8}{5} \\
\end{align*}
$$
************
</div>

</section>












<!--  Bruchrechnung 0070  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 70:__ 


**Berechne** den Wert des Terms.


<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \dfrac{9}{8} \cdot \dfrac{4}{5}  \cdot \dfrac{25}{2}  \cdot \dfrac{4}{15} = $ [[  3/16  ]]
@Algebrite.check(3/16)
************
$$
\begin{align*}
\dfrac{9}{8} \cdot \dfrac{4}{5}  \cdot \dfrac{25}{2}  \cdot \dfrac{4}{15} 
& = \dfrac{\cancel{9}\,\textcolor{blue}{3}}{8} \cdot \dfrac{\xcancel{4}}{\bcancel{5}}  \cdot \dfrac{\bcancel{25}\,\textcolor{red}{5}}{2}  \cdot \dfrac{\xcancel{4}}{\cancel{15}\,\textcolor{blue}{5}} \\
& = \dfrac{3}{8} \cdot \dfrac{1}{1}  \cdot \dfrac{\bcancel{5}}{2}  \cdot \dfrac{1}{\bcancel{5}} \\
& = \dfrac{3}{8} \cdot \dfrac{1}{2}  \\
& = \dfrac{3}{16}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{8}{13} \cdot \dfrac{7}{2}  \cdot \dfrac{9}{7}  \cdot \dfrac{13}{4} = $ [[  9  ]]
@Algebrite.check(9)
************
$$
\begin{align*}
 \dfrac{8}{13} \cdot \dfrac{7}{2}  \cdot \dfrac{9}{7}  \cdot \dfrac{13}{4} 
 & =  \dfrac{\xcancel{8}  \,\textcolor{red}{4}  }{\bcancel{13}} \cdot \dfrac{\cancel{7}}{\xcancel{2}}  \cdot \dfrac{9}{\cancel{7}}  \cdot \dfrac{\bcancel{13}}{4} \\
 & =  \dfrac{\xcancel{4} }{1} \cdot \dfrac{1}{1}  \cdot \dfrac{9}{1}  \cdot \dfrac{1}{\xcancel{4}} \\
 & =  9 \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{2}{9} \cdot \dfrac{12}{5}  \cdot \dfrac{9}{8}  \cdot \dfrac{7}{6} \cdot \dfrac{7}{4}  = $ [[  49/40  ]]
@Algebrite.check(49/40)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot \dfrac{12}{5}  \cdot \dfrac{9}{8}  \cdot \dfrac{7}{6} \cdot \dfrac{7}{4}
 &= \dfrac{\bcancel{4}}{\cancel{9}} \cdot \dfrac{\xcancel{12} \,\textcolor{red}{2} }{5}  \cdot \dfrac{\cancel{9}}{8}  \cdot \dfrac{7}{\xcancel{6}} \cdot \dfrac{7}{\bcancel{4} \,\textcolor{blue}{2}} \\ 
 &= \dfrac{1}{1} \cdot \dfrac{\cancel{2} }{5}  \cdot \dfrac{1}{8}  \cdot \dfrac{7}{1} \cdot \dfrac{7}{\cancel{2}} \\
 &= \dfrac{7  \cdot 7 }{5  \cdot 8}   \\
 &= \dfrac{ 49 }{ 40 }   \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{4} \cdot \dfrac{10}{9}  \cdot \dfrac{4}{7}  \cdot \dfrac{7}{11} \cdot \dfrac{6}{5} =  $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{11}{4} \cdot \dfrac{10}{9}  \cdot \dfrac{4}{7}  \cdot \dfrac{7}{11} \cdot \dfrac{6}{5}
 &= \dfrac{\cancel{11}}{\bcancel{4}} \cdot \dfrac{\xcancel{10} \,\textcolor{blue}{2}}{9}  \cdot \dfrac{\bcancel{4}}{7}  \cdot \dfrac{7}{\cancel{11}} \cdot \dfrac{6}{\xcancel{5}} \\
 &= \dfrac{1}{1} \cdot \dfrac{2}{\xcancel{9} \,\textcolor{blue}{3}}  \cdot \dfrac{1}{\bcancel{7}}  \cdot \dfrac{\bcancel{7}}{1} \cdot \dfrac{\xcancel{6} \,\textcolor{red}{2}}{1} \\
 &= \dfrac{1}{1} \cdot \dfrac{2}{3}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{1} \cdot \dfrac{2}{1} \\
 &= \dfrac{4}{3}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{16}{15}  \cdot \dfrac{9}{4}  \cdot \dfrac{7}{8} \cdot \dfrac{2}{3} \cdot \dfrac{4}{7} = $ [[  1/3  ]]
@Algebrite.check(1/3)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{16}{15}  \cdot \dfrac{9}{4}  \cdot \dfrac{7}{8} \cdot \dfrac{2}{3} \cdot \dfrac{4}{7}
 &= \dfrac{\bcancel{5}}{\cancel{12} \,\textcolor{orange}{4}} \cdot \dfrac{\xcancel{16} \,\textcolor{blue}{2}}{\bcancel{15} \,\textcolor{red}{3}}  \cdot \dfrac{\cancel{9} \,\textcolor{orange}{3}}{4}  \cdot \dfrac{7}{\xcancel{8} } \cdot \dfrac{2}{3} \cdot \dfrac{4}{7} \\
 &= \dfrac{1}{\cancel{4} \,\textcolor{blue}{2}} \cdot \dfrac{\cancel{2}}{3}  \cdot \dfrac{3}{\bcancel{4}}  \cdot \dfrac{\xcancel{7}}{1 } \cdot \dfrac{2}{3} \cdot \dfrac{\bcancel{4}}{\xcancel{7}} \\
 &= \dfrac{1}{\bcancel{2}} \cdot \dfrac{1}{3}  \cdot \dfrac{\cancel{3}}{1}  \cdot \dfrac{1}{1 } \cdot \dfrac{\bcancel{2}}{\cancel{3}} \cdot \dfrac{1}{1} \\
 &= \dfrac{1}{3}  \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{18} \cdot \dfrac{7}{8}  \cdot \dfrac{3}{8}  \cdot \dfrac{9}{4} \cdot \dfrac{16}{5} \cdot \dfrac{5}{21} = $ [[  5/16  ]]
@Algebrite.check(5/16)
************
$$
\begin{align*}
\dfrac{10}{18} \cdot \dfrac{7}{8}  \cdot \dfrac{3}{8}  \cdot \dfrac{9}{4} \cdot \dfrac{16}{5} \cdot \dfrac{5}{21}
&= \dfrac{10}{\xcancel{18} \,\textcolor{red}{2} } \cdot \dfrac{7}{8}  \cdot \dfrac{3}{\cancel{8}}  \cdot \dfrac{\xcancel{9}}{4} \cdot \dfrac{\cancel{16}\,\textcolor{blue}{2}}{\bcancel{5}} \cdot \dfrac{\bcancel{5}}{21} \\
&= \dfrac{\xcancel{10} \,\textcolor{red}{5}}{\cancel{2} } \cdot \dfrac{7}{\xcancel{8} \,\textcolor{red}{4}}  \cdot \dfrac{\bcancel{3}}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{\cancel{2}}{1} \cdot \dfrac{1}{\bcancel{21}\,\textcolor{blue}{7}} \\
&= \dfrac{5}{1 } \cdot \dfrac{\bcancel{7}}{4}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{1}{1} \cdot \dfrac{1}{\bcancel{7}} \\
&= \dfrac{5}{1 } \cdot \dfrac{1}{4}  \cdot \dfrac{1}{1}  \cdot \dfrac{1}{4} \cdot \dfrac{1}{1} \cdot \dfrac{1}{1} \\
&= \dfrac{5}{16 } \\
\end{align*}
$$
************
</div>

</section>




#### Übungsaufgaben zur Bruchrechnung 71 bis 80


<!--  Bruchrechnung 0071  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 71:__ **Bestimme** unechten Bruch aus der gemischten Zahl.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2\tfrac{5}{6} = $ [[  17/6  ]] 
@Algebrite.check(17/6)
************
$$
\begin{align*}
2\tfrac{5}{6} &= 2 + \dfrac{5}{6} \\
              &= \dfrac{12}{6} + \dfrac{5}{6} \\
              &= \dfrac{17}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 7\tfrac{1}{3} = $ [[  22/3  ]] 
@Algebrite.check(22/3)
************
$$
\begin{align*}
7\tfrac{1}{3} &= 7 + \dfrac{1}{3} \\
              &= \dfrac{21}{3} + \dfrac{1}{3} \\
              &= \dfrac{22}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 4\tfrac{7}{8} = $ [[  39/8  ]] 
@Algebrite.check(39/8)
************
$$
\begin{align*}
4\tfrac{7}{8} &= 4 + \dfrac{7}{8} \\
              &= \dfrac{32}{8} + \dfrac{7}{8} \\
              &= \dfrac{39}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 9\tfrac{2}{5} = $ [[  47/5  ]] 
@Algebrite.check(47/5)
************
$$
\begin{align*}
9\tfrac{2}{5} &= 9 + \dfrac{2}{5} \\
              &= \dfrac{45}{5} + \dfrac{2}{5} \\
              &= \dfrac{47}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3\tfrac{3}{10} = $ [[  33/10  ]] 
@Algebrite.check(33/10)
************
$$
\begin{align*}
3\tfrac{3}{10} &= 3 + \dfrac{3}{10} \\
               &= \dfrac{30}{10} + \dfrac{3}{10} \\
               &= \dfrac{33}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 6\tfrac{5}{12} = $ [[  77/12  ]] 
@Algebrite.check(77/12)
************
$$
\begin{align*}
6\tfrac{5}{12} &= 6 + \dfrac{5}{12} \\
               &= \dfrac{72}{12} + \dfrac{5}{12} \\
               &= \dfrac{77}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 1\tfrac{7}{9} = $ [[  16/9  ]] 
@Algebrite.check(16/9)
************
$$
\begin{align*}
1\tfrac{7}{9} &= 1 + \dfrac{7}{9} \\
              &= \dfrac{9}{9} + \dfrac{7}{9} \\
              &= \dfrac{16}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{11}{12} = $ [[  107/12  ]] 
@Algebrite.check(107/12)
************
$$
\begin{align*}
8\tfrac{11}{12} &= 8 + \dfrac{11}{12} \\
                &= \dfrac{96}{12} + \dfrac{11}{12} \\
                &= \dfrac{107}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 10\tfrac{1}{2} = $ [[  21/2  ]] 
@Algebrite.check(21/2)
************
$$
\begin{align*}
10\tfrac{1}{2} &= 10 + \dfrac{1}{2} \\
               &= \dfrac{20}{2} + \dfrac{1}{2} \\
               &= \dfrac{21}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 2\tfrac{4}{7} = $ [[  18/7  ]] 
@Algebrite.check(18/7)
************
$$
\begin{align*}
2\tfrac{4}{7} &= 2 + \dfrac{4}{7} \\
              &= \dfrac{14}{7} + \dfrac{4}{7} \\
              &= \dfrac{18}{7}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0072  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 72:__ **Bestimme** unechten Bruch aus der gemischten Zahl.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 3\tfrac{2}{7} = $ [[  23/7  ]] 
@Algebrite.check(23/7)
************
$$
\begin{align*}
3\tfrac{2}{7} &= 3 + \dfrac{2}{7} \\
              &= \dfrac{21}{7} + \dfrac{2}{7} \\
              &= \dfrac{23}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6\tfrac{5}{8} = $ [[  53/8  ]] 
@Algebrite.check(53/8)
************
$$
\begin{align*}
6\tfrac{5}{8} &= 6 + \dfrac{5}{8} \\
              &= \dfrac{48}{8} + \dfrac{5}{8} \\
              &= \dfrac{53}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1\tfrac{3}{10} = $ [[  13/10  ]] 
@Algebrite.check(13/10)
************
$$
\begin{align*}
1\tfrac{3}{10} &= 1 + \dfrac{3}{10} \\
               &= \dfrac{10}{10} + \dfrac{3}{10} \\
               &= \dfrac{13}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 9\tfrac{4}{9} = $ [[  85/9  ]] 
@Algebrite.check(85/9)
************
$$
\begin{align*}
9\tfrac{4}{9} &= 9 + \dfrac{4}{9} \\
              &= \dfrac{81}{9} + \dfrac{4}{9} \\
              &= \dfrac{85}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 7\tfrac{11}{12} = $ [[  95/12  ]] 
@Algebrite.check(95/12)
************
$$
\begin{align*}
7\tfrac{11}{12} &= 7 + \dfrac{11}{12} \\
                &= \dfrac{84}{12} + \dfrac{11}{12} \\
                &= \dfrac{95}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2\tfrac{5}{13} = $ [[  31/13  ]] 
@Algebrite.check(31/13)
************
$$
\begin{align*}
2\tfrac{5}{13} &= 2 + \dfrac{5}{13} \\
               &= \dfrac{26}{13} + \dfrac{5}{13} \\
               &= \dfrac{31}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 4\tfrac{7}{15} = $ [[  67/15  ]] 
@Algebrite.check(67/15)
************
$$
\begin{align*}
4\tfrac{7}{15} &= 4 + \dfrac{7}{15} \\
               &= \dfrac{60}{15} + \dfrac{7}{15} \\
               &= \dfrac{67}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 10\tfrac{3}{4} = $ [[  43/4  ]] 
@Algebrite.check(43/4)
************
$$
\begin{align*}
10\tfrac{3}{4} &= 10 + \dfrac{3}{4} \\
               &= \dfrac{40}{4} + \dfrac{3}{4} \\
               &= \dfrac{43}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 5\tfrac{1}{6} = $ [[  31/6  ]] 
@Algebrite.check(31/6)
************
$$
\begin{align*}
5\tfrac{1}{6} &= 5 + \dfrac{1}{6} \\
              &= \dfrac{30}{6} + \dfrac{1}{6} \\
              &= \dfrac{31}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 8\tfrac{2}{11} = $ [[  90/11  ]] 
@Algebrite.check(90/11)
************
$$
\begin{align*}
8\tfrac{2}{11} &= 8 + \dfrac{2}{11} \\
               &= \dfrac{88}{11} + \dfrac{2}{11} \\
               &= \dfrac{90}{11}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0073  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 73:__ **Bestimme** unechten Bruch aus der gemischten Zahl.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2\tfrac{7}{9} = $ [[  25/9  ]] 
@Algebrite.check(25/9)
************
$$
\begin{align*}
2\tfrac{7}{9} &= 2 + \dfrac{7}{9} \\
              &= \dfrac{18}{9} + \dfrac{7}{9} \\
              &= \dfrac{25}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6\tfrac{1}{5} = $ [[  31/5  ]] 
@Algebrite.check(31/5)
************
$$
\begin{align*}
6\tfrac{1}{5} &= 6 + \dfrac{1}{5} \\
              &= \dfrac{30}{5} + \dfrac{1}{5} \\
              &= \dfrac{31}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 9\tfrac{2}{7} = $ [[  65/7  ]] 
@Algebrite.check(65/7)
************
$$
\begin{align*}
9\tfrac{2}{7} &= 9 + \dfrac{2}{7} \\
              &= \dfrac{63}{7} + \dfrac{2}{7} \\
              &= \dfrac{65}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 4\tfrac{3}{11} = $ [[  47/11  ]] 
@Algebrite.check(47/11)
************
$$
\begin{align*}
4\tfrac{3}{11} &= 4 + \dfrac{3}{11} \\
               &= \dfrac{44}{11} + \dfrac{3}{11} \\
               &= \dfrac{47}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 7\tfrac{9}{10} = $ [[  79/10  ]] 
@Algebrite.check(79/10)
************
$$
\begin{align*}
7\tfrac{9}{10} &= 7 + \dfrac{9}{10} \\
               &= \dfrac{70}{10} + \dfrac{9}{10} \\
               &= \dfrac{79}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 5\tfrac{8}{13} = $ [[  73/13  ]] 
@Algebrite.check(73/13)
************
$$
\begin{align*}
5\tfrac{8}{13} &= 5 + \dfrac{8}{13} \\
               &= \dfrac{65}{13} + \dfrac{8}{13} \\
               &= \dfrac{73}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 3\tfrac{11}{12} = $ [[  47/12  ]] 
@Algebrite.check(47/12)
************
$$
\begin{align*}
3\tfrac{11}{12} &= 3 + \dfrac{11}{12} \\
                &= \dfrac{36}{12} + \dfrac{11}{12} \\
                &= \dfrac{47}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{4}{9} = $ [[  76/9  ]] 
@Algebrite.check(76/9)
************
$$
\begin{align*}
8\tfrac{4}{9} &= 8 + \dfrac{4}{9} \\
              &= \dfrac{72}{9} + \dfrac{4}{9} \\
              &= \dfrac{76}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 1\tfrac{5}{6} = $ [[  11/6  ]] 
@Algebrite.check(11/6)
************
$$
\begin{align*}
1\tfrac{5}{6} &= 1 + \dfrac{5}{6} \\
              &= \dfrac{6}{6} + \dfrac{5}{6} \\
              &= \dfrac{11}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 10\tfrac{7}{8} = $ [[  87/8  ]] 
@Algebrite.check(87/8)
************
$$
\begin{align*}
10\tfrac{7}{8} &= 10 + \dfrac{7}{8} \\
               &= \dfrac{80}{8} + \dfrac{7}{8} \\
               &= \dfrac{87}{8}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0074  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 74:__ **Bestimme** unechten Bruch aus der gemischten Zahl.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 4\tfrac{2}{5} = $ [[  22/5  ]] 
@Algebrite.check(22/5)
************
$$
\begin{align*}
4\tfrac{2}{5} &= 4 + \dfrac{2}{5} \\
              &= \dfrac{20}{5} + \dfrac{2}{5} \\
              &= \dfrac{22}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 3\tfrac{7}{8} = $ [[  31/8  ]] 
@Algebrite.check(31/8)
************
$$
\begin{align*}
3\tfrac{7}{8} &= 3 + \dfrac{7}{8} \\
              &= \dfrac{24}{8} + \dfrac{7}{8} \\
              &= \dfrac{31}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 7\tfrac{5}{6} = $ [[  47/6  ]] 
@Algebrite.check(47/6)
************
$$
\begin{align*}
7\tfrac{5}{6} &= 7 + \dfrac{5}{6} \\
              &= \dfrac{42}{6} + \dfrac{5}{6} \\
              &= \dfrac{47}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2\tfrac{9}{10} = $ [[  29/10  ]] 
@Algebrite.check(29/10)
************
$$
\begin{align*}
2\tfrac{9}{10} &= 2 + \dfrac{9}{10} \\
               &= \dfrac{20}{10} + \dfrac{9}{10} \\
               &= \dfrac{29}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 5\tfrac{11}{12} = $ [[  71/12  ]] 
@Algebrite.check(71/12)
************
$$
\begin{align*}
5\tfrac{11}{12} &= 5 + \dfrac{11}{12} \\
                &= \dfrac{60}{12} + \dfrac{11}{12} \\
                &= \dfrac{71}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 9\tfrac{4}{7} = $ [[  67/7  ]] 
@Algebrite.check(67/7)
************
$$
\begin{align*}
9\tfrac{4}{7} &= 9 + \dfrac{4}{7} \\
              &= \dfrac{63}{7} + \dfrac{4}{7} \\
              &= \dfrac{67}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 6\tfrac{3}{11} = $ [[  69/11  ]] 
@Algebrite.check(69/11)
************
$$
\begin{align*}
6\tfrac{3}{11} &= 6 + \dfrac{3}{11} \\
               &= \dfrac{66}{11} + \dfrac{3}{11} \\
               &= \dfrac{69}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{2}{9} = $ [[  74/9  ]] 
@Algebrite.check(74/9)
************
$$
\begin{align*}
8\tfrac{2}{9} &= 8 + \dfrac{2}{9} \\
              &= \dfrac{72}{9} + \dfrac{2}{9} \\
              &= \dfrac{74}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 1\tfrac{6}{7} = $ [[  13/7  ]] 
@Algebrite.check(13/7)
************
$$
\begin{align*}
1\tfrac{6}{7} &= 1 + \dfrac{6}{7} \\
              &= \dfrac{7}{7} + \dfrac{6}{7} \\
              &= \dfrac{13}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 10\tfrac{5}{6} = $ [[  65/6  ]] 
@Algebrite.check(65/6)
************
$$
\begin{align*}
10\tfrac{5}{6} &= 10 + \dfrac{5}{6} \\
               &= \dfrac{60}{6} + \dfrac{5}{6} \\
               &= \dfrac{65}{6}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0075  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 75:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \;(3:4)\,\cdot\,(7:9)\;-\;(1:8)\;=\; $ [[  11/24  ]]
@Algebrite.check(11/24)
************
$$
\begin{align*}
(3:4)\cdot(7:9)-(1:8)
&= \dfrac{3}{4}\cdot\dfrac{7}{9}-\dfrac{1}{8} \\
&= \dfrac{21}{36}-\dfrac{1}{8}
= \dfrac{7}{12}-\dfrac{1}{8} \\
&= \dfrac{14}{24}-\dfrac{3}{24}
= \dfrac{11}{24}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \;(5:6)\;+\;(3:8):(9:4)\;=\; $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
(5:6)+(3:8):(9:4)
&= \dfrac{5}{6}+\left(\dfrac{3}{8}:\dfrac{9}{4}\right) \\
&= \dfrac{5}{6}+\left(\dfrac{3}{8}\cdot\dfrac{4}{9}\right)
= \dfrac{5}{6}+\dfrac{12}{72} \\
&= \dfrac{5}{6}+\dfrac{1}{6}
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \;(2:5):(3:10)\;+\;(1:2)\cdot(3:7)\;=\; $ [[  65/42  ]]
@Algebrite.check(65/42)
************
$$
\begin{align*}
(2:5):(3:10)+(1:2)\cdot(3:7)
&= \left(\dfrac{2}{5}:\dfrac{3}{10}\right)+\dfrac{1}{2}\cdot\dfrac{3}{7} \\
&= \left(\dfrac{2}{5}\cdot\dfrac{10}{3}\right)+\dfrac{3}{14}
= \dfrac{20}{15}+\dfrac{3}{14} \\
&= \dfrac{4}{3}+\dfrac{3}{14}
= \dfrac{56}{42}+\dfrac{9}{42}
= \dfrac{65}{42}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \;(7:12)\;+\;(5:18)\;-\;(1:9)\cdot(3:2)\;=\; $ [[  25/36  ]]
@Algebrite.check(25/36)
************
$$
\begin{align*}
(7:12)+(5:18)-(1:9)\cdot(3:2)
&= \dfrac{7}{12}+\dfrac{5}{18}-\left(\dfrac{1}{9}\cdot\dfrac{3}{2}\right) \\
&= \dfrac{7}{12}+\dfrac{5}{18}-\dfrac{3}{18}
= \dfrac{7}{12}+\dfrac{1}{6} \\
&= \dfrac{21}{36}+\dfrac{6}{36}
= \dfrac{25}{36}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \;(4:9):(2:3)\;+\;(5:12):(5:18)\;=\; $ [[  13/6  ]]
@Algebrite.check(13/6)
************
$$
\begin{align*}
(4:9):(2:3)+(5:12):(5:18)
&= \left(\dfrac{4}{9}:\dfrac{2}{3}\right)+\left(\dfrac{5}{12}:\dfrac{5}{18}\right) \\
&= \dfrac{4}{9}\cdot\dfrac{3}{2}+\dfrac{5}{12}\cdot\dfrac{18}{5} \\
&= \dfrac{12}{18}+\dfrac{18}{12}
= \dfrac{2}{3}+\dfrac{3}{2} \\
&= \dfrac{4}{6}+\dfrac{9}{6}
= \dfrac{13}{6}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \;(3:5)\cdot\big((7:8)-(1:4)\big)\;+\;(2:3):(4:9)\;=\; $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
(3:5)\cdot\big((7:8)-(1:4)\big)+(2:3):(4:9)
&= \dfrac{3}{5}\cdot\left(\dfrac{7}{8}-\dfrac{1}{4}\right)+\left(\dfrac{2}{3}:\dfrac{4}{9}\right) \\
&= \dfrac{3}{5}\cdot\left(\dfrac{7}{8}-\dfrac{2}{8}\right)+\dfrac{2}{3}\cdot\dfrac{9}{4} \\
&= \dfrac{3}{5}\cdot\dfrac{5}{8}+\dfrac{18}{12}
= \dfrac{3}{8}+\dfrac{3}{2} \\
&= \dfrac{3}{8}+\dfrac{12}{8}
= \dfrac{15}{8}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0076  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 76:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \;(2:3)\;+\;(5:12)\;-\;(1:6)\;=\; $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
(2:3)+(5:12)-(1:6)
&= \dfrac{2}{3}+\dfrac{5}{12}-\dfrac{1}{6} \\
&= \dfrac{8}{12}+\dfrac{5}{12}-\dfrac{2}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \;(5:8)\;+\;(7:12):(7:18)\;=\; $ [[  17/8  ]]
@Algebrite.check(17/8)
************
$$
\begin{align*}
(5:8)+(7:12):(7:18)
&= \dfrac{5}{8}+\left(\dfrac{7}{12}:\dfrac{7}{18}\right) \\
&= \dfrac{5}{8}+\left(\dfrac{7}{12}\cdot\dfrac{18}{7}\right) \\
&= \dfrac{5}{8}+\dfrac{18}{12}
= \dfrac{5}{8}+\dfrac{3}{2} \\
&= \dfrac{5}{8}+\dfrac{12}{8}
= \dfrac{17}{8}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \;(4:9)\cdot(9:8)\;+\;(1:6)\;=\; $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
(4:9)\cdot(9:8)+(1:6)
&= \left(\dfrac{4}{9}\cdot\dfrac{9}{8}\right)+\dfrac{1}{6} \\
&= \dfrac{4}{8}+\dfrac{1}{6}
= \dfrac{1}{2}+\dfrac{1}{6} \\
&= \dfrac{3}{6}+\dfrac{1}{6}
= \dfrac{2}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \;(7:15)\;-\;(1:5)\cdot(3:2)\;+\;(2:3)\;=\; $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
(7:15)-(1:5)\cdot(3:2)+(2:3)
&= \dfrac{7}{15}-\left(\dfrac{1}{5}\cdot\dfrac{3}{2}\right)+\dfrac{2}{3} \\
&= \dfrac{7}{15}-\dfrac{3}{10}+\dfrac{2}{3} \\
&= \dfrac{14}{30}-\dfrac{9}{30}+\dfrac{20}{30} \\
&= \dfrac{25}{30}
= \dfrac{5}{6}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \;(6:7):(3:14)\;-\;(2:5)\;+\;(1:2)\;=\; $ [[  41/10  ]]
@Algebrite.check(41/10)
************
$$
\begin{align*}
(6:7):(3:14)-(2:5)+(1:2)
&= \left(\dfrac{6}{7}:\dfrac{3}{14}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= \left(\dfrac{6}{7}\cdot\dfrac{14}{3}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= 4 - \dfrac{2}{5} + \dfrac{1}{2}
= 4 + \left(-\dfrac{4}{10}+\dfrac{5}{10}\right) \\
&= 4 + \dfrac{1}{10}
= \dfrac{41}{10}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \;(3:4)\cdot\big((5:6)+(1:3)\big)\;:\;(9:8)\;=\; $ [[  7/9  ]]
@Algebrite.check(7/9)
************
$$
\begin{align*}
(3:4)\cdot\big((5:6)+(1:3)\big):(9:8)
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{1}{3}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{2}{6}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\dfrac{7}{6}\right):\dfrac{9}{8}
= \dfrac{21}{24}:\dfrac{9}{8} \\
&= \dfrac{7}{8}\cdot\dfrac{8}{9}
= \dfrac{7}{9}
\end{align*}
$$
************
</div>

</section>







<!--  Bruchrechnung 0077  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 77:__ **Gib** den beschriebenen Anteilswert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $2500\,$kg?  

<!-- data-solution-button="5"-->
[[  2000  ]]kg

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $\dfrac{5}{9}$ von $180\,$cm?  

<!-- data-solution-button="5"-->
[[  100  ]]cm

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $\dfrac{1}{4}$ von $300\,$min?  

<!-- data-solution-button="5"-->
[[  75  ]]min

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $\dfrac{6}{7}$ von $42\,$m?  

<!-- data-solution-button="5"-->
[[  36  ]]m

</div>
</section>







<!--  Bruchrechnung 0078  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 78:__ **Gib** den beschriebenen Anteilswert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $\dfrac{3}{10}$ von $90\,$€?  

<!-- data-solution-button="5"-->
[[  27  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $840\,$kg?  

<!-- data-solution-button="5"-->
[[  147  ]]kg

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $\dfrac{2}{3}$ von $6\,$m$^3$?  

<!-- data-solution-button="5"-->
[[  4  ]]m$^3$

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $\dfrac{11}{6}$ von $240\,\ell$?  

<!-- data-solution-button="5"-->
[[  440  ]] $\ell$

</div>
</section>







<!--  Bruchrechnung 0079  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 79:__ **Gib** den beschriebenen Anteilswert **an**.





<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $\dfrac{1}{7}$ von $84\,$€?  

<!-- data-solution-button="5"-->
[[  12  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $\dfrac{8}{3}$ von $45\,$min?  

<!-- data-solution-button="5"-->
[[  120  ]]min

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $\dfrac{3}{5}$ von $8000\,$dm$^2$?  

<!-- data-solution-button="5"-->
[[  4800  ]]dm$^2$

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $\dfrac{5}{12}$ von $144\,\ell$?  

<!-- data-solution-button="5"-->
[[  60  ]] $\ell$

</div>
</section>











<!--  Bruchrechnung 0080  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 80:__ **Gib** den beschriebenen Anteilswert **an**.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ Wie viel sind $\dfrac{9}{4}$ von $72\,$kg?  \
 [[  162  ]]kg
***************
$$
\begin{align*}
  \dfrac{9}{4} \cdot 72\,\text{kg} & = \dfrac{9 \cdot 72}{4} \,\text{kg} \\
  & = 9 \cdot 18 \,\text{kg} 
  & = 162 \,\text{kg} 
\end{align*}
$$
***************

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ Wie viel sind $\dfrac{7}{10}$ von $120\,$kg?  \
 [[  84  ]]kg
***************
$$
\begin{align*}
  \dfrac{7}{10} \cdot 120\,\text{kg} & = \dfrac{7 \cdot 12}{10} \,\text{kg} \\
  & = 7 \cdot 12 \,\text{kg} 
  & = 84 \,\text{kg} 
\end{align*}
$$
***************

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ Wie viel sind $\dfrac{1}{8}$ von $480\,$m?  \
 [[  60  ]]m
***************
$$
\begin{align*}
  \dfrac{1}{8} \cdot 480\,\text{m} & = \dfrac{480}{8} \,\text{m} \\
  & = 480 : 8 \,\text{m} 
  & = 60 \,\text{m} 
\end{align*}
$$
***************

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ Wie viel sind $\dfrac{3}{20}$ von $500\,$€?  \
 [[  75  ]]€
***************
$$
\begin{align*}
  \dfrac{3}{20} \cdot 500\,\text{€} & = \dfrac{3 \cdot 500}{20} \,\text{€} \\
  & = \dfrac{3 \cdot 50}{2} \,\text{€} 
  & = 3 \cdot 25 \,\text{€} 
  & = 75 \,\text{€} 
\end{align*}
$$
***************

</div>
</section>




#### Übungsaufgaben zur Bruchrechnung 81 bis 90



<!--  Bruchrechnung 0081  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 81:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb1.png)

</center>

<!-- data-solution-button="5"-->
[[  10/32  ]]
@Algebrite.check(10/32)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb2.png)

</center>

<!-- data-solution-button="5"-->
[[  3/8  ]]
@Algebrite.check(3/8)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb3.png)

</center>

<!-- data-solution-button="5"-->
[[  14/32  ]]
@Algebrite.check(14/32)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb4.png)

</center>

<!-- data-solution-button="5"-->
[[  8/19  ]]
@Algebrite.check(8/19)

</div>

<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb5.png)

</center>

<!-- data-solution-button="5"-->
[[  4/12  ]]
@Algebrite.check(4/12)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb6.png)

</center>

<!-- data-solution-button="5"-->
[[  5/12  ]]
@Algebrite.check(5/12)

</div>

</section>




<!--  Bruchrechnung 0082  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 82:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb7.png)

</center>

<!-- data-solution-button="5"-->
[[  9/21  ]]
@Algebrite.check(9/21)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb8.png)

</center>

<!-- data-solution-button="5"-->
[[  3/6  ]]
@Algebrite.check(3/6)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb9.png)

</center>

<!-- data-solution-button="5"-->
[[  11/24  ]]
@Algebrite.check(11/24)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb10.png)

</center>

<!-- data-solution-button="5"-->
[[  7/16  ]]
@Algebrite.check(7/16)

</div>

<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb11.png)

</center>

<!-- data-solution-button="5"-->
[[  4/16  ]]
@Algebrite.check(4/16)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb12.png)

</center>

<!-- data-solution-button="5"-->
[[  5/6  ]]
@Algebrite.check(5/6)

</div>

</section>










<!--  Bruchrechnung 0083  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 83:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb13.png)

</center>

<!-- data-solution-button="5"-->
[[  5/18  ]]
@Algebrite.check(5/18)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb14.png)

</center>

<!-- data-solution-button="5"-->
[[  2/3  ]]
@Algebrite.check(2/3)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb15.png)

</center>

<!-- data-solution-button="5"-->
[[  32/72  ]]
@Algebrite.check(32/72)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb16.png)

</center>

<!-- data-solution-button="5"-->
[[  4/9  ]]
@Algebrite.check(4/9)

</div>

<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb17.png)

</center>

<!-- data-solution-button="5"-->
[[  4/12  ]]
@Algebrite.check(4/12)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb18.png)

</center>

<!-- data-solution-button="5"-->
[[  1/6  ]]
@Algebrite.check(1/6)

</div>

</section>




<!--  Bruchrechnung 0084  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 84:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb19.png)

</center>

<!-- data-solution-button="5"-->
[[  11/25  ]]
@Algebrite.check(11/25)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb20.png)

</center>

<!-- data-solution-button="5"-->
[[  14/37  ]]
@Algebrite.check(14/37)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb21.png)

</center>

<!-- data-solution-button="5"-->
[[  9/14  ]]
@Algebrite.check(9/14)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb22.png)

</center>

<!-- data-solution-button="5"-->
[[  13/37  ]]
@Algebrite.check(13/37)

</div>

<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb23.png)

</center>

<!-- data-solution-button="5"-->
[[  9/14  ]]
@Algebrite.check(9/14)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb24.png)

</center>

<!-- data-solution-button="5"-->
[[  6/9  ]]
@Algebrite.check(6/9)

</div>

</section>




<!--  Bruchrechnung 0085  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 85:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb25.png)

</center>

<!-- data-solution-button="5"-->
[[  2/6  ]]
@Algebrite.check(2/6)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb26.png)

</center>

<!-- data-solution-button="5"-->
[[  5/12  ]]
@Algebrite.check(5/12)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb27.png)

</center>

<!-- data-solution-button="5"-->
[[  1/4  ]]
@Algebrite.check(1/4)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb28.png)

</center>

<!-- data-solution-button="5"-->
[[  5/8  ]]
@Algebrite.check(5/8)

</div>

</section>







<!--  Bruchrechnung 0086  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 86:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb29.png)

</center>

<!-- data-solution-button="5"-->
[[  1/2  ]]
@Algebrite.check(1/2)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb30.png)

</center>

<!-- data-solution-button="5"-->
[[  1/3  ]]
@Algebrite.check(1/3)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb31.png)

</center>

<!-- data-solution-button="5"-->
[[  3/4  ]]
@Algebrite.check(3/4)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:400px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb32.png)

</center>

<!-- data-solution-button="5"-->
[[  10/24  ]]
@Algebrite.check(10/24)

</div>

</section>





<!--  Bruchrechnung 0087  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 87:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb33.png)

</center>

<!-- data-solution-button="5"-->
[[  1/4  ]]
@Algebrite.check(1/4)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb34.png)

</center>

<!-- data-solution-button="5"-->
[[  11/30  ]]
@Algebrite.check(11/30)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb35.png)

</center>

<!-- data-solution-button="5"-->
[[  2/5  ]]
@Algebrite.check(2/5)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb36.png)

</center>

<!-- data-solution-button="5"-->
[[  19/40  ]]
@Algebrite.check(19/40)

</div>

</section>





<!--  Bruchrechnung 0088  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 88:__ **Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb37.png)

</center>

<!-- data-solution-button="5"-->
[[  1/6  ]]
@Algebrite.check(1/6)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb38.png)

</center>

<!-- data-solution-button="5"-->
[[  5/12  ]]
@Algebrite.check(5/12)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb39.png)

</center>

<!-- data-solution-button="5"-->
[[  4/15  ]]
@Algebrite.check(4/15)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruchb40.png)

</center>

<!-- data-solution-button="5"-->
[[  11/15  ]]
@Algebrite.check(11/15)

</div>

</section>








<!--  Bruchrechnung 0089  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 89:__ **Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{12}$ von $54\,$kg?  \
[[  63/2  ]]kg
@Algebrite.check(63/2)
************
$$
\begin{align*}
\dfrac{7}{12}\cdot 54\;\text{kg}
&= \dfrac{7\cdot 54}{12}\;\text{kg} \\
&= \dfrac{7\cdot \,9}{2}\;\text{kg} \\
&= \dfrac{63}{2}\;\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $49\,$m$^2$?  \
[[  245/6  ]]m$^2$
@Algebrite.check(245/6)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot 49\;\text{m$^2$}
&= \dfrac{5\cdot 49}{6}\;\text{m$^2$} \\
&= \dfrac{245}{6}\;\text{m$^2$} 
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $20\,$h?  \
[[  45/2  ]]h
@Algebrite.check(45/2)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot 20\;\text{h}
&= \dfrac{9\cdot 20}{8}\;\text{h} \\
&= \dfrac{9\cdot \,5}{2}\;\text{h} \\
&= \dfrac{45}{2}\;\text{h}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{13}{15}$ von $36\,$kg?  \
[[  156/5  ]]kg
@Algebrite.check(156/5)
************
$$
\begin{align*}
\dfrac{13}{15}\cdot 36\;\text{kg}
&= \dfrac{13\cdot 36}{15}\;\text{kg} \\
&= \dfrac{13\cdot 12}{5}\;\text{kg} \\
&= \dfrac{156}{5}\;\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{3}{7}$ von $85\,$min?  \
[[  255/7  ]]min
@Algebrite.check(255/7)
************
$$
\begin{align*}
\dfrac{3}{7}\cdot 85\;\text{min}
&= \dfrac{3\cdot 85}{7}\;\text{min} \\
&= \dfrac{255}{7}\;\text{min} 
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{17}{12}$ von $18\,$m?  \
[[  51/2  ]]m
@Algebrite.check(51/2)
************
$$
\begin{align*}
\dfrac{17}{12}\cdot 18\;\text{m}
&= \dfrac{17\cdot 18}{12}\;\text{m} \\
&= \dfrac{17\cdot \,3}{2}\;\text{m} \\
&= \dfrac{51}{2}\;\text{m}
\end{align*}
$$
************
</div>

</section>





<!--  Bruchrechnung 0090  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 90:__ **Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{12}$ von $50\,$kg?  \
[[  175/6  ]]kg
@Algebrite.check(175/6)
************
$$
\begin{align*}
\dfrac{7}{12}\cdot 50\,\text{kg}
&= \dfrac{7\cdot 50\,\text{kg}}{12} \\
&= \dfrac{350}{12}\,\text{kg} \\
&= \dfrac{175}{6}\,\text{kg}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{14}$ von $25\,\ell$?  \
[[  225/14  ]] $\ell$
@Algebrite.check(225/14)
************
$$
\begin{align*}
\dfrac{9}{14}\cdot 25\,\ell
&= \dfrac{9\cdot 25}{14}\,\ell \\
&= \dfrac{225}{14}\,\ell
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{11}{15}$ von $40\,$m?  \
[[  88/3  ]]m
@Algebrite.check(88/3)
************
$$
\begin{align*}
\dfrac{11}{15}\cdot 40\,\text{m}
&= \dfrac{11\cdot 40\,\text{m}}{15} \\
&= \dfrac{440}{15}\,\text{m} \\
&= \dfrac{88}{3}\,\text{m}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{5}{9}$ von $22\,$cm?  \
[[  110/9  ]]cm
@Algebrite.check(110/9)
************
$$
\begin{align*}
\dfrac{5}{9}\cdot 22\,\text{cm}
&= \dfrac{5\cdot 22\,\text{cm}}{9} \\
&= \dfrac{110}{9}\,\text{cm}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{13}{16}$ von $18\,$kg?  \
[[  117/8  ]]kg
@Algebrite.check(117/8)
************
$$
\begin{align*}
\dfrac{13}{16}\cdot 18\,\text{kg}
&= \dfrac{13\cdot 18\,\text{kg}}{16} \\
&= \dfrac{234}{16} \,\text{kg}\\
&= \dfrac{117}{8}\,\text{kg}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{7}{20}$ von $33\,$m?  \
[[  231/20  ]]m
@Algebrite.check(231/20)
************
$$
\begin{align*}
\dfrac{7}{20}\cdot 33\,\text{m}
&= \dfrac{7\cdot 33\,\text{m}}{20} \\
&= \dfrac{231}{20}\,\text{m}
\end{align*}
$$
************
</div>

</section>




#### Übungsaufgaben zur Bruchrechnung 91 bis 100



<!--  Bruchrechnung 0091  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 91:__ **Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $\dfrac{5}{6}$ von $36\,$€?  \
[[  105/2  ]]€
@Algebrite.check(105/2)
************
$$
\begin{align*}
\dfrac{7}{4}\cdot\dfrac{5}{6}\cdot 36\,\text{€}
&= \dfrac{7\cdot 5\cdot 36\,\text{€}}{4\cdot 6}
= \dfrac{35\cdot36}{24}\,\text{€}
= \dfrac{35\cdot 3}{2}\,\text{€}
= \dfrac{105}{2}\,\text{€}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $\dfrac{2}{3}$ von $45\,$kg?  \
[[  135/4  ]]kg
@Algebrite.check(135/4)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot\dfrac{2}{3}\cdot 45\,\text{kg}
&= \dfrac{9\cdot 2\cdot 45\,\text{kg}}{8\cdot 3}
= \dfrac{810}{24}\,\text{kg}
= \dfrac{135}{4}\,\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $\dfrac{7}{9}$ von $80\,$min?  \
[[  448/9  ]]min
@Algebrite.check(448/9)
************
$$
\begin{align*}
\dfrac{4}{5}\cdot\dfrac{7}{9}\cdot 80\,\text{min}
&= \dfrac{4\cdot 7\cdot 80\,\text{min}}{5\cdot 9}
= \dfrac{2240}{45}\,\text{min}
= \dfrac{448}{9}\,\text{min}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{11}{12}$ von $\dfrac{3}{5}$ von $95\,\ell$?  \
[[  209/4  ]] $\ell$
@Algebrite.check(209/4)
************
$$
\begin{align*}
\dfrac{11}{12}\cdot\dfrac{3}{5}\cdot 95\,\ell
&= \dfrac{11\cdot 3\cdot 95\,\ell}{12\cdot 5} 
= \dfrac{3135}{60}\,\ell
= \dfrac{209}{4}\,\ell
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $\dfrac{7}{8}$ von $64\,$m?  \
[[  140/3  ]]m
@Algebrite.check(140/3)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot\dfrac{7}{8}\cdot 64\,\text{m}
&= \dfrac{5\cdot 7\cdot 64}{6\cdot 8}\,\text{m}
= \dfrac{2240}{48}\,\text{m}
= \dfrac{140}{3}\,\text{m}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{7}{5}$ von $\dfrac{3}{8}$ von $50\,$€?  \
[[  105/4  ]]€
@Algebrite.check(105/4)
************
$$
\begin{align*}
\dfrac{7}{5}\cdot\dfrac{3}{8}\cdot 50\,\text{€}
&= \dfrac{7\cdot 3\cdot 50\,\text{€}}{5\cdot 8}
= \dfrac{1050}{40}\,\text{€}
= \dfrac{105}{4}\,\text{€}
\end{align*}
$$
************
</div>

</section>








<!--  Bruchrechnung 0092  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 92:__ **Berechne** den Wert des Terms hinter der Fragestellung.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $\dfrac{2}{3}$ von $35\,$€?  \
[[  245/6  ]]€
@Algebrite.check(245/6)
************
$$
\begin{align*}
\dfrac{7}{4}\cdot\dfrac{2}{3}\cdot 35\,\text{€}
&= \dfrac{7\cdot 2 \cdot 35\,\text{€}}{4\cdot 3} \\
&= \dfrac{490}{12}\,\text{€} \\
&= \dfrac{245}{6}\,\text{€}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $\dfrac{2}{5}$ von $55\,$kg?  \
[[  99/4  ]]kg
@Algebrite.check(99/4)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot\dfrac{2}{5}\cdot 55\,\text{kg}
&= \dfrac{9\cdot 2 \cdot 55}{8\cdot 5}\,\text{kg} \\
&= \dfrac{990}{40}\,\text{kg} \\
&= \dfrac{99}{4}\,\text{kg}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{11}{12}$ von $\dfrac{5}{7}$ von $80\,\ell$?  \
[[  1100/21  ]] $\ell$
@Algebrite.check(1100/21)
************
$$
\begin{align*}
\dfrac{11}{12}\cdot\dfrac{5}{7}\cdot 80\,\ell
&= \dfrac{11\cdot 5 \cdot 80\,\ell}{12\cdot 7} \\
&= \dfrac{4400}{84} \,\ell \\
&= \dfrac{1100}{21}\,\ell
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $\dfrac{7}{9}$ von $65\,$m?  \
[[  2275/54  ]]m
@Algebrite.check(2275/54)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot\dfrac{7}{9}\cdot 65\,\text{m}
&= \dfrac{5\cdot 7 \cdot 65\,\text{m}}{6\cdot 9} \\
&= \dfrac{2275}{54}\,\text{m}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $\dfrac{3}{8}$ von $96\,$min?  \
[[  144/5  ]]min
@Algebrite.check(144/5)
************
$$
\begin{align*}
\dfrac{4}{5}\cdot\dfrac{3}{8}\cdot 96\,\text{min}
&= \dfrac{4\cdot 3 \cdot 96\,\text{min}}{5\cdot 8} \\
&= \dfrac{1152}{40}\,\text{min} \\
&= \dfrac{144}{5}\,\text{min}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{13}{10}$ von $\dfrac{3}{4}$ von $30\,$€?  \
[[  117/4  ]]€
@Algebrite.check(117/4)
************
$$
\begin{align*}
\dfrac{13}{10}\cdot\dfrac{3}{4}\cdot 30\,\text{€}
&= \dfrac{13\cdot 3 \cdot 30\,\text{€}}{10\cdot 4} \\
&= \dfrac{1170}{40}\,\text{€} \\
&= \dfrac{117}{4}\,\text{€}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0093  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 93:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ 
$ \dfrac{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }{ \left( \dfrac{5}{8} - \dfrac{1}{4} \right) } = $ [[  22/9  ]]
@Algebrite.check(22/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }{ \left( \dfrac{5}{8} - \dfrac{1}{4} \right) }
&= \dfrac{ \left( \dfrac{9}{12} + \dfrac{2}{12} \right) }{ \left( \dfrac{5}{8} - \dfrac{2}{8} \right) } \\
&= \dfrac{ \dfrac{11}{12} }{ \dfrac{3}{8} }
= \dfrac{11}{12} : \dfrac{3}{8}
= \dfrac{11}{12} \cdot \dfrac{8}{3} \\
&= \dfrac{88}{36}
= \dfrac{22}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) }{ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) } = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) }{ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{5}{6} - \dfrac{2}{6} \right) }{ \left( \dfrac{4}{10} + \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{3}{6} }{ \dfrac{5}{10} }
= \dfrac{ \dfrac{1}{2} }{ \dfrac{1}{2} }
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ 
$ \dfrac{ \left( \dfrac{3}{5} \cdot \dfrac{10}{9} \right) }{ \left( \dfrac{7}{12} : \dfrac{7}{18} \right) } = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{5} \cdot \dfrac{10}{9} \right) }{ \left( \dfrac{7}{12} : \dfrac{7}{18} \right) }
&= \dfrac{ \dfrac{30}{45} }{ \left( \dfrac{7}{12} \cdot \dfrac{18}{7} \right) } \\
&= \dfrac{ \dfrac{2}{3} }{ \dfrac{18}{12} }
= \dfrac{ \dfrac{2}{3} }{ \dfrac{3}{2} }
= \dfrac{2}{3} \cdot \dfrac{2}{3}
= \dfrac{4}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ 
$ \dfrac{ \left( \dfrac{4}{7} + \dfrac{5}{14} \right) }{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) } = $ [[  65/49  ]]
@Algebrite.check(65/49)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{4}{7} + \dfrac{5}{14} \right) }{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{8}{14} + \dfrac{5}{14} \right) }{ \left( \dfrac{6}{10} + \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{13}{14} }{ \dfrac{7}{10} }
= \dfrac{13}{14} : \dfrac{7}{10}
= \dfrac{13}{14} \cdot \dfrac{10}{7} \\
&= \dfrac{130}{98}
= \dfrac{65}{49}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ 
$ \dfrac{ \left( \dfrac{9}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) } = $ [[  51/44  ]]
@Algebrite.check(51/44)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{9}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{3}{4} + \dfrac{1}{6} \right) }
&= \dfrac{ \left( \dfrac{18}{16} - \dfrac{1}{16} \right) }{ \left( \dfrac{9}{12} + \dfrac{2}{12} \right) } \\
&= \dfrac{ \dfrac{17}{16} }{ \dfrac{11}{12} }
= \dfrac{17}{16} : \dfrac{11}{12}
= \dfrac{17}{16} \cdot \dfrac{12}{11} \\
&= \dfrac{204}{176}
= \dfrac{51}{44}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ 
$ \dfrac{ \left( \dfrac{2}{3} : \dfrac{5}{9} \right) }{ \left( \dfrac{7}{10} - \dfrac{1}{5} \right) } = $ [[  12/5  ]]
@Algebrite.check(12/5)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{2}{3} : \dfrac{5}{9} \right) }{ \left( \dfrac{7}{10} - \dfrac{1}{5} \right) }
&= \dfrac{ \left( \dfrac{2}{3} \cdot \dfrac{9}{5} \right) }{ \left( \dfrac{7}{10} - \dfrac{2}{10} \right) } \\
&= \dfrac{ \dfrac{18}{15} }{ \dfrac{5}{10} }
= \dfrac{ \dfrac{6}{5} }{ \dfrac{1}{2} }
= \dfrac{6}{5} \cdot 2
= \dfrac{12}{5}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0094  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 94:__ **Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ 
$ \dfrac{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{1}{4} \right) } = $ [[  21/10  ]]
@Algebrite.check(21/10)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{3}{5} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{1}{4} \right) }
&= \dfrac{ \left( \dfrac{6}{10} + \dfrac{1}{10} \right) }{ \left( \dfrac{7}{12} - \dfrac{3}{12} \right) } \\
&= \dfrac{ \dfrac{7}{10} }{ \dfrac{4}{12} }
= \dfrac{7}{10} : \dfrac{4}{12}
= \dfrac{7}{10} \cdot \dfrac{12}{4} \\
&= \dfrac{84}{40}
= \dfrac{21}{10}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{2}{3} + \dfrac{1}{6} \right) } = $ [[  27/40  ]]
@Algebrite.check(27/40)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{8} - \dfrac{1}{16} \right) }{ \left( \dfrac{2}{3} + \dfrac{1}{6} \right) }
&= \dfrac{ \left( \dfrac{10}{16} - \dfrac{1}{16} \right) }{ \left( \dfrac{4}{6} + \dfrac{1}{6} \right) } \\
&= \dfrac{ \dfrac{9}{16} }{ \dfrac{5}{6} }
= \dfrac{9}{16} : \dfrac{5}{6}
= \dfrac{9}{16} \cdot \dfrac{6}{5} \\
&= \dfrac{54}{80}
= \dfrac{27}{40}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ 
$ \dfrac{ \left( \dfrac{4}{9} + \dfrac{1}{3} \right) }{ \left( \dfrac{7}{10} : \dfrac{7}{5} \right) } = $ [[  14/9  ]]
@Algebrite.check(14/9)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{4}{9} + \dfrac{1}{3} \right) }{ \left( \dfrac{7}{10} : \dfrac{7}{5} \right) }
&= \dfrac{ \left( \dfrac{4}{9} + \dfrac{3}{9} \right) }{ \left( \dfrac{7}{10} \cdot \dfrac{5}{7} \right) } \\
&= \dfrac{ \dfrac{7}{9} }{ \dfrac{5}{10} }
= \dfrac{7}{9} : \dfrac{1}{2}
= \dfrac{7}{9} \cdot 2 \\
&= \dfrac{14}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ 
$ \dfrac{ \left( \dfrac{5}{6} : \dfrac{5}{12} \right) }{ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) } = $ [[  12/5  ]]
@Algebrite.check(12/5)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{5}{6} : \dfrac{5}{12} \right) }{ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) }
&= \dfrac{ \left( \dfrac{5}{6} \cdot \dfrac{12}{5} \right) }{ \left( \dfrac{3}{6} + \dfrac{2}{6} \right) } \\
&= \dfrac{ 2 }{ \dfrac{5}{6} }
= 2 : \dfrac{5}{6}
= 2 \cdot \dfrac{6}{5} \\
&= \dfrac{12}{5}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ 
$ \dfrac{ \left( \dfrac{9}{10} - \dfrac{2}{5} \right) }{ \left( \dfrac{1}{4} \cdot \dfrac{8}{3} \right) } = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{9}{10} - \dfrac{2}{5} \right) }{ \left( \dfrac{1}{4} \cdot \dfrac{8}{3} \right) }
&= \dfrac{ \left( \dfrac{9}{10} - \dfrac{4}{10} \right) }{ \left( \dfrac{8}{12} \right) } \\
&= \dfrac{ \dfrac{1}{2} }{ \dfrac{2}{3} }
= \dfrac{1}{2} : \dfrac{2}{3}
= \dfrac{1}{2} \cdot \dfrac{3}{2} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ 
$ \dfrac{ \left( \dfrac{7}{8} + \dfrac{1}{16} \right) }{ \left( \dfrac{3}{5} - \dfrac{1}{10} \right) } = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{ \left( \dfrac{7}{8} + \dfrac{1}{16} \right) }{ \left( \dfrac{3}{5} - \dfrac{1}{10} \right) }
&= \dfrac{ \left( \dfrac{14}{16} + \dfrac{1}{16} \right) }{ \left( \dfrac{6}{10} - \dfrac{1}{10} \right) } \\
&= \dfrac{ \dfrac{15}{16} }{ \dfrac{5}{10} }
= \dfrac{15}{16} : \dfrac{1}{2}
= \dfrac{15}{16} \cdot 2 \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

</section>



<!--  Bruchrechnung 0095  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 95:__ **Gib** die Zahl **an**, die $x$ sein muss, sodass die Brüche gleichwertig sind.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ 
$ \dfrac{ 3 }{ 5 } = \dfrac{ 21 }{ x }  $ \
$x = $ [[  35  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$ \dfrac{ 4 }{ 7 } = \dfrac{ x }{ 21 } $ \
$x = $ [[  12  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$ \dfrac{ x }{ 8 } = \dfrac{ 9 }{ 12 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$ \dfrac{ 5 }{ x } = \dfrac{ 15 }{ 18 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$ \dfrac{ 11 }{ 22 } = \dfrac{ x }{ 6 } $ \
$x = $ [[  3  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$ \dfrac{ 7 }{ x } = \dfrac{ 14 }{ 20 } $ \
$x = $ [[  10  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$ \dfrac{ 8 }{ 12 } = \dfrac{ 2 }{ x } $ \
$x = $ [[  3  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__  
$ \dfrac{ x }{ 15 } = \dfrac{ 6 }{ 10 } $ \
$x = $ [[  9  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__  
$ \dfrac{ 3 }{ 9 } = \dfrac{ 4 }{ x } $ \
$x = $ [[  12  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$i)\;\;$__  
$ \dfrac{ x }{ 18 } = \dfrac{ 5 }{ 9 } $ \
$x = $ [[  10  ]]
</div>

</section>



<!--  Bruchrechnung 0096  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 96:__ **Gib** die Zahl **an**, die $x$ sein muss, sodass die Brüche gleichwertig sind.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$ \dfrac{ 2 }{ 3 } = \dfrac{ x }{ 12 } $ \
$x = $ [[  8  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$ \dfrac{ 7 }{ x } = \dfrac{ 14 }{ 30 } $ \
$x = $ [[  15  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$ \dfrac{ x }{ 9 } = \dfrac{ 5 }{ 15 } $ \
$x = $ [[  3  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$ \dfrac{ 6 }{ 8 } = \dfrac{ x }{ 20 } $ \
$x = $ [[  15  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$ \dfrac{ x }{ 14 } = \dfrac{ 9 }{ 21 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$ \dfrac{ 10 }{ x } = \dfrac{ 15 }{ 12 } $ \
$x = $ [[  8  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__  
$ \dfrac{ x }{ 5 } = \dfrac{ 12 }{ 15 } $ \
$x = $ [[  4  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__  
$ \dfrac{ 8 }{ 20 } = \dfrac{ x }{ 25 } $ \
$x = $ [[  10  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$i)\;\;$__  
$ \dfrac{ x }{ 16 } = \dfrac{ 9 }{ 24 } $ \
$x = $ [[  6  ]]
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$j)\;\;$__  
$ \dfrac{ 4 }{ x } = \dfrac{ 6 }{ 18 } $ \
$x = $ [[  12  ]]
</div>

</section>



<!--  Bruchrechnung 0097  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 97:__ **Bestimme** den farbigen Anteil an der Gesamtfläche. 



<section class="flex-container">


<div class="flex-child">

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $20\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc1.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  6  ]] m$^2$ \
blau: [[  4  ]] m$^2$ \
violett: [[  4  ]] m$^2$

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $80\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc2.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  48  ]] m$^2$ \
blau: [[  4   ]] m$^2$ \
violett: [[  12  ]] m$^2$

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $120\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc3.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  18  ]] m$^2$ \
blau: [[  45  ]] m$^2$ \
violett: [[  27  ]] m$^2$

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $240\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc4.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  105 ]] m$^2$ \
blau: [[  27  ]] m$^2$ \
violett: [[  45  ]] m$^2$

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $200\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc5.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  35  ]] m$^2$ \
blau: [[  45  ]] m$^2$ \
violett: [[  15  ]] m$^2$

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $60\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc6.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  9  ]] m$^2$ \
blau: [[  12 ]] m$^2$ \
violett: [[  6  ]] m$^2$

</div>

</section>








<!--  Bruchrechnung 0098  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 98:__ **Bestimme** den farbigen Anteil an der Gesamtfläche. 



<section class="flex-container">


<div class="flex-child">

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $90\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc7.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  5  ]] m$^2$ \
blau: [[  50 ]] m$^2$ \
violett: [[ 25  ]] m$^2$

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $96\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc8.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  4   ]] m$^2$ \
blau: [[  20  ]] m$^2$ \
violett: [[  10  ]] m$^2$

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $81\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc9.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  21  ]] m$^2$ \
blau: [[  12  ]] m$^2$ \
violett: [[  42  ]] m$^2$

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $560\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc10.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  98  ]] m$^2$ \
blau: [[  126 ]] m$^2$ \
violett: [[  42  ]] m$^2$

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $126\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc11.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  40  ]] m$^2$ \
blau: [[  24  ]] m$^2$ \
violett: [[  32  ]] m$^2$

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $192\,$m$^2$.

<center>

<!-- style="width:150px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Bruchc12.png)

</center>

<!-- data-solution-button="5"-->
rot: [[  60  ]] m$^2$ \
blau: [[  36  ]] m$^2$ \
violett: [[  60  ]] m$^2$

</div>

</section>








<!--  Bruchrechnung 0099  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 99:__ **Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.


<center>

<!-- style="width:750px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruch99.png)

</center>


__$a)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten Linien in wie viele Teile geteilt? 


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  5  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  4  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3  ]]
</div>
</section>

__$b)\;\;$__ Das jeweilige Rechteck wird durch die gepunkteten Linien in wie viele Teile geteilt? 


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  3  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  4  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  6  ]]
</div>
</section>

__$c)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten und die gepunkteten Linien in wie viele Teile geteilt? 


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  15  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  16  ]]
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  18  ]]
</div>
</section>









<!--  Bruchrechnung 0100  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 100:__ **Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.



<center>

<!-- style="width:750px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/bruch100.png)

</center>



__$a)\;\;$__ Welcher Bruchanteil des jeweiligen Rechteck ist farbig markiert?


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  1/3  ]]
@Algebrite.check(1/3)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  3/4  ]]
@Algebrite.check(3/4)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3/5  ]]
@Algebrite.check(3/5)
</div>
</section>

__$b)\;\;$__ Welcher Bruchanteil der farbigen Markierung ist bläulich markiert?


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  2/3  ]]
@Algebrite.check(2/3)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  1/6  ]]
@Algebrite.check(1/6)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  3/4  ]]
@Algebrite.check(3/4)
</div>
</section>

__$c)\;\;$__ Welcher Bruchanteil der jeweiligen Rechteck ist bläulich markiert? 


<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$I\;\;$__ [[  2/9  ]]
@Algebrite.check(2/9)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$II\;\;$__ [[  3/24 ]]
@Algebrite.check(3/24)
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$III\;\;$__ [[  9/20  ]]
@Algebrite.check(9/20)
</div>
</section>






#### Übungsaufgaben zur Bruchrechnung 101 bis 110





<!--  Bruchrechnung 0101  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 101:__ Eine Pizza wird in $16$ gleich große Stücke geteilt. $\dfrac{3}{8}$ der Pizza werden gegessen.  
**Bestimme**, wie viele Stücke das sind. 

<!-- data-solution-button="5"-->
 [[  6  ]] 
@Algebrite.check(6)
************
$$
\dfrac{3}{8}\cdot 16 &= \dfrac{3}{8}\cdot \dfrac{16}{1}  \\
  & = \dfrac{48}{8}  \\
  & = 48:8  \\
  & = 6
$$
************





<!--  Bruchrechnung 0102  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 102:__ Ein Wasserkanister fasst $12$ Liter Wasser. Es wird $\dfrac{1}{3}$ des Wassers entnommen.  
**Bestimme**, wie viele Liter entnommen werden. 


<!-- data-solution-button="5"-->
[[  4  ]] $\ell$
@Algebrite.check(4)
************
$$
\dfrac{1}{3}\cdot 12\,\ell & = \dfrac{1}{3} \cdot  \dfrac{12}{1}\,\ell \\
 & = \dfrac{12}{3}\,\ell \\
  & = 12\,\ell:3 \\
  & = 4\,\ell
$$
************











<!--  Bruchrechnung 0103  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 103:__ Ein Weg ist $9$ km lang. Mit dem Fahrrad werden $\dfrac{2}{3}$ gefahren, der Rest wird zu Fuß zurückgelegt.  
**Bestimme**, wie viele Kilometer zu Fuß gegangen werden.  

<!-- data-solution-button="5"-->
[[  3  ]] km
@Algebrite.check(3)
************
$$
 9\,\text{km} - \dfrac{2}{3}\cdot 9\,\text{km} & = 9\,\text{km} - \dfrac{2}{3}\cdot  \dfrac{9}{1}\,\text{km} \\
 & = 9\,\text{km} - \dfrac{18}{3}\,\text{km} \\
 & = 9\,\text{km} - 6\,\text{km} \\
 & = 3\,\text{km}
$$
************






<!--  Bruchrechnung 0104  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 104:__ Ein Kuchen hat eine Masse von $2\,$kg. Davon bleiben $\dfrac{1}{4}$ übrig.  
**Bestimme** die Masse des restlichen Kuchens.  

<!-- data-solution-button="5"-->
[[  1/2  ]] kg
@Algebrite.check(1/2)
************
$$
\dfrac{1}{4}\cdot 2\,\text{kg} = \dfrac{2}{4}\,\text{kg} = \dfrac{1}{2}\,\text{kg}
$$
************












<!--  Bruchrechnung 0105  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 105:__ Ein Behälter enthält $18$ Liter Saft. Davon werden $\dfrac{3}{6}$ ausgeschänkt.  
**Bestimme**, wie viele Liter im Behälter verbleiben. 

<!-- data-solution-button="5"-->
[[  9  ]] $\ell$
************
$$
18\,\ell - \dfrac{3}{6}\cdot 18\,\ell
= 18\,\ell - \dfrac{3}{6}\cdot \dfrac{18}{1}\,\ell
= 18\,\ell - \dfrac{54}{6}\,\ell
= 18\,\ell - 9\,\ell
= 9\,\ell
$$
************









<!--  Bruchrechnung 0106  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 106:__ Eine Strecke ist $15$ km lang. Davon werden $\dfrac{2}{5}$ mit dem Bus zurückgelegt, der Rest zu Fuß.  
**Bestimme**, wie viele Kilometer zu Fuß gegangen werden.  

<!-- data-solution-button="5"-->
[[  9  ]] km
************
$$
15\,\text{km} - \dfrac{2}{5}\cdot 15\,\text{km}
= 15\,\text{km} - \dfrac{2}{5}\cdot \dfrac{15}{1}\,\text{km}
= 15\,\text{km} - \dfrac{30}{5}\,\text{km}
= 15\,\text{km} - 6\,\text{km}
= 9\,\text{km}
$$
************








<!--  Bruchrechnung 0107  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 107:__ Ein Rechteck hat eine Seite von $20$ cm. Die zweite Seite beträgt $\dfrac{2}{5}$ der ersten.  
**Bestimme** die Länge der zweiten Seite.  

<!-- data-solution-button="5"-->
[[  8  ]] cm
************
$$
\dfrac{2}{5}\cdot 20\,\text{cm}
= \dfrac{2}{5}\cdot \dfrac{20}{1}\,\text{cm}
= \dfrac{40}{5}\,\text{cm}
= 8\,\text{cm}
$$
************



















<!--  Bruchrechnung 0108  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 108:__ Ein Geldbetrag von $30$ € steht zur Verfügung. Es werden $\dfrac{1}{6}$ davon ausgegeben.  
**Bestimme**, wie viele Euro übrig bleiben. 

[[  25  ]] €
************
$$
30\,\text{€} - \dfrac{1}{6}\cdot 30\,\text{€}
= 30\,\text{€} - \dfrac{1}{6}\cdot \dfrac{30}{1}\,\text{€}
= 30\,\text{€} - \dfrac{30}{6}\,\text{€}
= 30\,\text{€} - 5\,\text{€}
= 25\,\text{€}
$$
************







<!--  Bruchrechnung 0109  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 109:__ Eine Arbeitszeit beträgt $90$ Minuten. Davon sind $\dfrac{3}{10}$ Pause.  
**Bestimme**, wie viele Minuten gearbeitet werden. 

<!-- data-solution-button="5"-->
[[  63  ]] min
************
$$
90\,\text{min} - \dfrac{3}{10}\cdot 90\,\text{min}
= 90\,\text{min} - \dfrac{3}{10}\cdot \dfrac{90}{1}\,\text{min}
= 90\,\text{min} - \dfrac{270}{10}\,\text{min}
= 90\,\text{min} - 27\,\text{min}
= 63\,\text{min}
$$
************






<!--  Bruchrechnung 0110  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 110:__ Für ein Rezept werden $\dfrac{3}{8}$ eines Mehlsacks mit $4$ kg Inhalt benötigt.  
**Bestimme** die benötigte Mehlmenge als Bruch in kg. 

<!-- data-solution-button="5"-->
[[  3/2  ]] kg
@Algebrite.check(3/2)
************
$$
\dfrac{3}{8}\cdot 4\,\text{kg}
= \dfrac{3}{8}\cdot \dfrac{4}{1}\,\text{kg}
= \dfrac{12}{8}\,\text{kg}
= \dfrac{3}{2}\,\text{kg}
$$
************








#### Übungsaufgaben zur Bruchrechnung 111 bis 120






<!--  Bruchrechnung 0111  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 111:__ Ein Wasserbecken fasst $200$ Liter. Es ist zu $\dfrac{7}{10}$ gefüllt.  
**Bestimme**, wie viele Liter Wasser im Becken sind.  

<!-- data-solution-button="5"-->
[[  140  ]] $\ell$
************
$$
\dfrac{7}{10}\cdot 200\,\ell
= \dfrac{7}{10}\cdot \dfrac{200}{1}\,\ell
= \dfrac{1400}{10}\,\ell
= 140\,\ell
$$
************






<!--  Bruchrechnung 0112  -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 112:__ Eine Trainingsrunde beträgt $8$ km. Bereits $\dfrac{1}{4}$ der Strecke sind geschafft.  
**Bestimme**, wie viele Kilometer noch zu laufen sind. 

<!-- data-solution-button="5"-->
[[  6  ]] km
************
$$
8\,\text{km} - \dfrac{1}{4}\cdot 8\,\text{km}
= 8\,\text{km} - \dfrac{1}{4}\cdot \dfrac{8}{1}\,\text{km}
= 8\,\text{km} - \dfrac{8}{4}\,\text{km}
= 8\,\text{km} - 2\,\text{km}
= 6\,\text{km}
$$
************






<!--  Bruchrechnung 0113  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 113:__ Ein Tank enthält $60$ Liter Benzin. Davon werden $\dfrac{2}{5}$ verbraucht.  
**Bestimme**, wie viele Liter übrig bleiben. 

<!-- data-solution-button="5"-->
[[ 36 ]] $\ell$
************
$$
60\,\ell - \dfrac{2}{5}\cdot 60\,\ell = 60\,\ell - \dfrac{120}{5} = 60\,\ell - 24\,\ell = 36\,\ell
$$
************









<!--  Bruchrechnung 0114  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 114:__ Ein Rechteck hat eine Seitenlänge von $12$ cm. Die andere Seitenlänge beträgt $\dfrac{3}{4}$ davon.  
**Bestimme** die zweite Seitenlänge. 

<!-- data-solution-button="5"-->
[[ 9 ]] cm
************
$$
\dfrac{3}{4}\cdot 12\,\text{cm} = \dfrac{36}{4}\,\text{cm} = 9\,\text{cm}
$$
************










<!--  Bruchrechnung 0115  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 115:__ Ein Läufer hat eine Strecke von $18$ km zurückzulegen. Am Vormittag läuft er $\dfrac{5}{9}$ der Strecke.  
**Bestimme**, wie viele Kilometer am Nachmittag noch zu laufen sind. 

<!-- data-solution-button="5"-->
[[ 8 ]] km
************
$$
18\,\text{km} - \dfrac{5}{9}\cdot 18\,\text{km} = 18\,\text{km} - 10\,\text{km} = 8\,\text{km}
$$
************












<!--  Bruchrechnung 0116  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 116:__ Ein Wassertank fasst $250$ Liter. Er ist zu $\dfrac{3}{10}$ gefüllt.  
**Bestimme**, wie viele Liter sich im Tank befinden. 

<!-- data-solution-button="5"-->
[[ 75 ]] $\ell$
************
$$
\dfrac{3}{10}\cdot 250\,\ell = \dfrac{750}{10}\,\ell = 75\,\ell
$$
************










<!--  Bruchrechnung 0117  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 117:__ Ein Seil ist $24$ m lang. Es wird $\dfrac{5}{8}$ der Länge benötigt.  
**Bestimme** die benötigte Seillänge.  

<!-- data-solution-button="5"-->
[[  15  ]] m
************
$$
\dfrac{5}{8}\cdot 24\,\text{m}
= \dfrac{5}{8}\cdot \dfrac{24}{1}\,\text{m}
= \dfrac{120}{8}\,\text{m}
= 120\,\text{m}:8
= 15\,\text{m}
$$
************








<!--  Bruchrechnung 0118  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 118:__ Eine Strecke ist $18$ cm lang. Davon werden $\dfrac{2}{3}$ markiert, der Rest bleibt unmarkiert.  
**Bestimme** die unmarkierte Länge.  

<!-- data-solution-button="5"-->
[[  6  ]] cm
@Algebrite.check(6)
************
$$
18\,\text{cm} - \dfrac{2}{3}\cdot 18\,\text{cm}
= 18\,\text{cm} - \dfrac{2}{3}\cdot \dfrac{18}{1}\,\text{cm}
= 18\,\text{cm} - \dfrac{36}{3}\,\text{cm}
= 18\,\text{cm} - 12\,\text{cm}
= 6\,\text{cm}
$$
************











<!--  Bruchrechnung 0119  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 119:__ Ein Budget umfasst $50$ €. Davon werden $\dfrac{3}{5}$ verplant.  
**Bestimme** den verbleibenden Betrag.  

<!-- data-solution-button="5"-->
[[  20  ]] €
************
$$
50\,\text{€} - \dfrac{3}{5}\cdot 50\,\text{€}
= 50\,\text{€} - \dfrac{3}{5}\cdot \dfrac{50}{1}\,\text{€}
= 50\,\text{€} - \dfrac{150}{5}\,\text{€}
= 50\,\text{€} - 30\,\text{€}
= 20\,\text{€}
$$
************

















<!--  Bruchrechnung 0120  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 120:__ Die Fläche eines Rechtecks beträgt $40\,\text{cm}^2$. Ein Anteil von $\dfrac{3}{8}$ wird farbig markiert.  
**Bestimme** die markierte Fläche. 

<!-- data-solution-button="5"-->
[[  15  ]] cm$^2$
************
$$
\dfrac{3}{8}\cdot 40\,\text{cm}^2
= \dfrac{3}{8}\cdot \dfrac{40}{1}\,\text{cm}^2
= \dfrac{120}{8}\,\text{cm}^2
= 120\,\text{cm}^2:8
= 15\,\text{cm}^2
$$
************








#### Übungsaufgaben zur Bruchrechnung 121 bis 130




<!--  Bruchrechnung 0121  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 121:__ Eine Übung dauert $80$ Minuten. Die Aufwärmphase umfasst $\dfrac{3}{8}$ der Gesamtzeit.  
**Berechne** die Dauer der Aufwärmphase. 

<!-- data-solution-button="5"-->
[[  30  ]] min
************
$$
\dfrac{3}{8}\cdot 80\,\text{min}
= \dfrac{3}{8}\cdot \dfrac{80}{1}\,\text{min}
= \dfrac{240}{8}\,\text{min}
= 30\,\text{min}
$$
************









<!--  Bruchrechnung 0122  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 122:__ Ein Reissack enthält $6$ kg. Für ein Projekt wird $\dfrac{5}{12}$ des Inhalts benötigt.  
**Bestimme** die benötigte Masse als Bruch.  

<!-- data-solution-button="5"-->
[[  5/2  ]] kg
@Algebrite.check(5/2)
************
$$
\dfrac{5}{12}\cdot 6\,\text{kg}
= \dfrac{5}{12}\cdot \dfrac{6}{1}\,\text{kg}
= \dfrac{30}{12}\,\text{kg}
= 30\,\text{kg}:12
= \dfrac{5}{2}\,\text{kg}
$$
************









<!--  Bruchrechnung 0123  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 123:__ In der Werkhalle liegt eine Papierrolle von $30\,\text{m}$ Länge bereit. Für einen Zuschnitt wird ein Anteil von $\dfrac{3}{10}$ der Rolle verwendet.  
**Bestimme** die Länge des zugeschnittenen Stücks. 

<!-- data-solution-button="5"-->
[[  9  ]] m
************
$$
\dfrac{3}{10}\cdot 30\,\text{m}
= \dfrac{3}{10}\cdot \dfrac{30}{1}\,\text{m}
= \dfrac{90}{10}\,\text{m}
= 9\,\text{m}
$$
************













<!--  Bruchrechnung 0124  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 124:__ Ein Vorratstank enthält zu Beginn $48\,\ell$ Wasser. Am Vormittag werden $\dfrac{3}{8}$ des Inhalts verwendet, am Nachmittag danach $\dfrac{1}{4}$ des verbleibenden Inhalts.  
**Berechne** das Restvolumen im Tank.  

<!-- data-solution-button="5"-->
[[  45/2  ]] $\ell$
@Algebrite.check(45/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 48\,\ell
= \dfrac{144}{8}\,\ell
= 18\,\ell \\
\text{Rest 1:}\quad & 48\,\ell - 18\,\ell = 30\,\ell \\
\text{Nachmittag:}\quad & \dfrac{1}{4}\cdot 30\,\ell
= \dfrac{30}{4}\,\ell
= \dfrac{15}{2}\,\ell \\
\text{Endrest:}\quad & 30\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{60}{2}\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{45}{2}\,\ell
\end{align*}
$$
************





<!--  Bruchrechnung 0125  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 125:__ Ein rechteckiger Garten besitzt eine Länge von $18\,\text{m}$. Die Breite beträgt $\dfrac{3}{4}$ der Länge. Für ein Blumenbeet wird ein Anteil von $\dfrac{2}{5}$ der gesamten Fläche genutzt.  
**Berechne** die Fläche des Blumenbeets.   

<!-- data-solution-button="5"-->
[[  486/5  ]] m$^2$
@Algebrite.check(486/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{3}{4}\cdot 18\,\text{m}
= \dfrac{54}{4}\,\text{m}
= \dfrac{27}{2}\,\text{m} \\
\text{Fläche ges.:}\quad & 18\,\text{m}\cdot \dfrac{27}{2}\,\text{m}
= \dfrac{486}{2}\,\text{m}^2
= 243\,\text{m}^2 \\
\text{Beet:}\quad & \dfrac{2}{5}\cdot 243\,\text{m}^2
= \dfrac{486}{5}\,\text{m}^2
\end{align*}
$$
************







<!--  Bruchrechnung 0126  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 126:__ Für die Reinigung steht eine $5\,\ell$-Kanisterlösung bereit. Zuerst verschüttet sich $\dfrac{3}{10}$ des Inhalts, danach wird $\dfrac{1}{4}$ der verbleibenden Menge für die Gerätepflege genutzt.  
**Berechne** das restliche Volumen im Kanister. 

<!-- data-solution-button="5"-->
[[  21/8  ]] $\ell$
@Algebrite.check(21/8)
************
$$
\begin{align*}
\text{Verschüttet:}\quad & \dfrac{3}{10}\cdot 5\,\ell
= \dfrac{15}{10}\,\ell
= \dfrac{3}{2}\,\ell \\
\text{Rest 1:}\quad & 5\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{10}{2}\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{7}{2}\,\ell \\
\text{Verbrauch:}\quad & \dfrac{1}{4}\cdot \dfrac{7}{2}\,\ell
= \dfrac{7}{8}\,\ell \\
\text{Endrest:}\quad & \dfrac{7}{2}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{28}{8}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{21}{8}\,\ell
\end{align*}
$$
************







<!--  Bruchrechnung 0127  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 127:__ In einer Bibliothek werden neue Bücher geliefert. Insgesamt kommen $40$ Exemplare an.  
Am Vormittag wird $\dfrac{1}{5}$ der Bücher sofort in die Regale einsortiert.  
Am Nachmittag wird von den übrigen Büchern erneut die Hälfte in die Regale gestellt.  
**Bestimme**, wie viele Bücher am Ende des Tages noch nicht einsortiert sind.  

<!-- data-solution-button="5"-->
 [[  16  ]] 
************
$$
\text{Vormittag:}\quad \dfrac{1}{5}\cdot 40 = 8 \quad \Rightarrow \; 40-8 = 32 \text{ Bücher übrig} \\
\text{Nachmittag:}\quad \dfrac{1}{2}\cdot 32 = 16 \quad \Rightarrow \; 32-16 = 16 \text{ Bücher übrig}
$$
************







<!--  Bruchrechnung 0128  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 128:__ Ein Markthändler bringt $24$ Kisten Obst auf den Wochenmarkt.  
Am Vormittag verkauft er $\dfrac{2}{3}$ seiner Kisten. Danach beschließt er, von den verbleibenden Kisten $\dfrac{1}{4}$ an eine Nachbarhändlerin abzugeben.  
**Bestimme**, wie viele Kisten er schließlich noch selbst behalten kann. 

<!-- data-solution-button="5"-->
 [[  6  ]] 
************
$$
\text{Verkauf:}\quad \dfrac{2}{3}\cdot 24 = 16 \quad \Rightarrow \; 24-16=8 \text{ Kisten übrig} \\
\text{Abgabe:}\quad \dfrac{1}{4}\cdot 8 = 2 \quad \Rightarrow \; 8-2=6 \text{ Kisten übrig}
$$
************
















<!--  Bruchrechnung 0129  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 129:__ Ein rechteckiger Sportplatz hat eine Länge von $30\,\text{m}$. Die Breite beträgt $\dfrac{2}{3}$ dieser Länge.  
Von der gesamten Fläche soll für ein Turnier nur $\dfrac{5}{6}$ genutzt werden, der Rest wird gesperrt.  
**Bestimme**, wie groß die gesperrte Fläche ist. 

<!-- data-solution-button="5"-->
[[  100  ]] m$^2$
************
$$
\text{Breite:}\quad \dfrac{2}{3}\cdot 30\,\text{m} = 20\,\text{m} \\
\text{Gesamtfläche:}\quad 30\,\text{m}\cdot 20\,\text{m} = 600\,\text{m}^2 \\
\text{Turnierfläche:}\quad \dfrac{5}{6}\cdot 600 = 500\,\text{m}^2 \\
\text{Gesperrt:}\quad 600-500 = 100\,\text{m}^2
$$
************









<!--  Bruchrechnung 0130  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 130:__ Ein Wasserbecken fasst insgesamt $120\,\ell$. Am Morgen wird es nur zu $\dfrac{2}{5}$ gefüllt.  
Im Laufe des Tages werden zusätzlich $\dfrac{1}{4}$ des **vollen Beckens** nachgefüllt.  
**Bestimme**, wie viele Liter Wasser am Abend im Becken sind. 

<!-- data-solution-button="5"-->
[[  78  ]] $\ell$
************
$$
\text{Morgenfüllung:}\quad \dfrac{2}{5}\cdot 120 = 48\,\ell \\
\text{Nachfüllung:}\quad \dfrac{1}{4}\cdot 120 = 30\,\ell \\
\text{Gesamt:}\quad 48\,\ell + 30\,\ell = 78\,\ell
$$
************









#### Übungsaufgaben zur Bruchrechnung 131 bis 140




<!--  Bruchrechnung 0131  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 131:__ Eine Schulklasse soll neue Hefte bekommen. Insgesamt werden $60$ Hefte geliefert.  
Zuerst verteilt die Lehrerin $\dfrac{1}{3}$ der Hefte an die Schülerinnen.  
Von den verbleibenden Heften werden später $\dfrac{1}{2}$ an die Schüler verteilt.  
**Bestimme**, wie viele Hefte am Ende noch übrig bleiben. 

<!-- data-solution-button="5"-->
[[  20  ]] Hefte
************
$$
\text{Erste Verteilung:}\quad \dfrac{1}{3}\cdot 60 = 20 \quad \Rightarrow \; 60-20=40 \text{ Hefte} \\
\text{Zweite Verteilung:}\quad \dfrac{1}{2}\cdot 40 = 20 \quad \Rightarrow \; 40-20=20 \text{ Hefte} \\
\text{Rest: } 20 \text{ Hefte}
$$
************















<!--  Bruchrechnung 0132  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 132:__ Ein rechteckiger Garten ist $24\,\text{m}$ lang. Die Breite beträgt $\dfrac{5}{8}$ der Länge.  
Für ein Schulfest wird $\dfrac{3}{4}$ der gesamten Gartenfläche genutzt.  
**Bestimme**, wie viele Quadratmeter nicht genutzt werden. 

<!-- data-solution-button="5"-->
[[  90  ]] m$^2$
************
$$
\text{Breite:}\quad \dfrac{5}{8}\cdot 24 = 15\,\text{m} \\
\text{Fläche:}\quad 24\cdot 15 = 360\,\text{m}^2 \\
\text{Nutzung:}\quad \dfrac{3}{4}\cdot 360 = 270\,\text{m}^2 \\
\text{Nicht genutzt: } 360-270 = 90\,\text{m}^2
$$
************













<!--  Bruchrechnung 0133  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 133:__ Eine Obstkiste wiegt $48\,\text{kg}$. Darin befinden sich Äpfel und Birnen.  
Die Äpfel machen $\dfrac{5}{12}$ der gesamten Masse aus. Von den restlichen Kilogramm entfallen $\dfrac{2}{3}$ auf Birnen.  
**Bestimme**, wie viele Kilogramm Obst weder Äpfel noch Birnen sind. 

<!-- data-solution-button="5"-->
[[  28/3  ]] kg
@Algebrite.check(28/3)
************
$$
\text{Äpfel:}\quad \dfrac{5}{12}\cdot 48 = 20\,\text{kg} \\
\text{Rest:}\quad 48-20 = 28\,\text{kg} \\
\text{Birnen:}\quad \dfrac{2}{3}\cdot 28 = \dfrac{56}{3}\,\text{kg} \\
\text{Sonstiges: } 28-\dfrac{56}{3} = \dfrac{28}{3}\,\text{kg}
$$
************












<!--  Bruchrechnung 0134  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 134:__ Ein Zug fährt $180\,\text{km}$. Auf der ersten Teilstrecke werden $\dfrac{2}{5}$ der Gesamtlänge zurückgelegt.  
Von der verbleibenden Strecke werden anschließend nochmals $\dfrac{3}{4}$ gefahren.  
**Bestimme**, wie viele Kilometer am Ende noch übrig sind. 

<!-- data-solution-button="5"-->
[[  27  ]] km
************
$$
\text{Erste Strecke:}\quad \dfrac{2}{5}\cdot 180 = 72\,\text{km} \quad \Rightarrow \; 180-72=108\,\text{km} \\
\text{Zweite Strecke:}\quad \dfrac{3}{4}\cdot 108 = 81\,\text{km} \quad \Rightarrow \; 108-81=27\,\text{km} \\
\text{Rest: } 27\,\text{km}
$$
************








<!--  Bruchrechnung 0135  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 135:__ Eine Schulbibliothek besitzt $240$ Bücher. Davon sind $\dfrac{3}{8}$ Romane.  
Von den verbleibenden Büchern sind $\dfrac{2}{5}$ Sachbücher, der Rest sind Zeitschriften.  
**Bestimme**, wie viele Zeitschriften es gibt. 

<!-- data-solution-button="5"-->
[[  90  ]] Zeitschriften
************
$$
\text{Romane: } \dfrac{3}{8}\cdot 240 = 90 \\
\text{Rest: } 240 - 90 = 150 \\
\text{Sachbücher: } \dfrac{2}{5}\cdot 150 = 60 \\
\text{Zeitschriften: } 150 - 60 = 90
$$
************













<!--  Bruchrechnung 0136  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 136:__ Ein Schwimmbecken fasst $120\,\text{m}^3$ Wasser.  
Zunächst wird es zu $\dfrac{5}{6}$ gefüllt.  
Dann werden $\dfrac{3}{10}$ des gefüllten Wassers wieder abgelassen.  
**Bestimme**, wie viele Kubikmeter Wasser nun im Becken sind. 

<!-- data-solution-button="5"-->
[[  70  ]] m$^3$
************
$$
\text{Gefüllt: } \dfrac{5}{6}\cdot 120 = 100\,\text{m}^3 \\
\text{Abgelassen: } \dfrac{3}{10}\cdot 100 = 30\,\text{m}^3 \\
\text{Rest: } 100-30 = 70\,\text{m}^3
$$
************











<!--  Bruchrechnung 0137  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 137:__ Ein rechteckiges Grundstück ist $48\,\text{m}$ lang und $\dfrac{3}{4}$ so breit.  
Von der Fläche wird ein Teil als Garten angelegt, der $\dfrac{2}{3}$ der Gesamtfläche einnimmt.  
**Bestimme**, wie groß die Gartenfläche ist. 

<!-- data-solution-button="5"-->
[[  576  ]] m$^2$
************
$$
\text{Breite: } \dfrac{3}{4}\cdot 48 = 36\,\text{m} \\
\text{Fläche: } 48\cdot 36 = 1728\,\text{m}^2 \\
\text{Gartenfläche: } \dfrac{2}{3}\cdot 1728 = 576\,\text{m}^2
$$
************












<!--  Bruchrechnung 0138  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 138:__ Ein Vorratssilo enthält $90\,\text{kg}$ Getreide.  
Davon werden zunächst $\dfrac{2}{9}$ verfüttert.  
Von der verbleibenden Menge werden dann $\dfrac{3}{5}$ für den Verkauf abgefüllt.  
**Bestimme**, wie viele Kilogramm Getreide am Ende noch im Silo verbleiben. 

<!-- data-solution-button="5"-->
[[  28  ]] kg
************
$$
\text{Verfüttert: } \dfrac{2}{9}\cdot 90 = 20\,\text{kg} \\
\text{Rest: } 90-20 = 70\,\text{kg} \\
\text{Verkauf: } \dfrac{3}{5}\cdot 70 = 42\,\text{kg} \\
\text{Endbestand: } 70-42 = 28\,\text{kg}
$$
************















<!--  Bruchrechnung 0139  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 139:__ In der Schulküche wird eine große Suppenportion vorbereitet. Ein Kessel enthält zu Beginn $36\,\ell$ Brühe.  
In der ersten Pause werden $\dfrac{2}{9}$ der gesamten Brühe ausgegeben.  
In der zweiten Pause werden anschließend $\dfrac{3}{8}$ der verbleibenden Brühe ausgegeben.  
**Berechne** das Restvolumen im Kessel nach der zweiten Pause. 

<!-- data-solution-button="5"-->
[[  35/2  ]]  $\ell$
@Algebrite.check(35/2)
************
$$
\begin{align*}
\text{1. Ausgabe:}\quad & \dfrac{2}{9}\cdot 36\,\ell
= \dfrac{2}{9}\cdot \dfrac{36}{1}\,\ell
= \dfrac{72}{9}\,\ell
= 8\,\ell \\[4pt]
\text{Rest 1:}\quad & 36\,\ell - 8\,\ell = 28\,\ell \\[4pt]
\text{2. Ausgabe:}\quad & \dfrac{3}{8}\cdot 28\,\ell
= \dfrac{3}{8}\cdot \dfrac{28}{1}\,\ell
= \dfrac{84}{8}\,\ell
= \dfrac{21}{2}\,\ell \\[4pt]
\text{Rest ges.:}\quad & 28\,\ell - \dfrac{21}{2}\,\ell
= \dfrac{56}{2}\,\ell - \dfrac{21}{2}\,\ell
= \dfrac{35}{2}\,\ell
\end{align*}
$$
************


















<!--  Bruchrechnung 0140  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 140:__ In der Backstube steht ein Mehlsack mit $24\,\text{kg}$.  
Am Vormittag werden für Teiglinge $\dfrac{3}{8}$ der Gesamtmasse verbraucht.  
Am Nachmittag wird für eine zweite Charge die Hälfte der verbleibenden Masse genutzt.  
**Berechne** die am Ende noch vorhandene Mehlmenge als Bruch. 

<!-- data-solution-button="5"-->
[[  15/2  ]] kg
@Algebrite.check(15/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 24\,\text{kg}
= \dfrac{72}{8}\,\text{kg}
= 9\,\text{kg} \\[4pt]
\text{Rest 1:}\quad & 24\,\text{kg} - 9\,\text{kg} = 15\,\text{kg} \\[4pt]
\text{Nachmittag:}\quad & \dfrac{1}{2}\cdot 15\,\text{kg}
= \dfrac{15}{2}\,\text{kg} \\[4pt]
\text{Rest ges.:}\quad & 15\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{30}{2}\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{15}{2}\,\text{kg}
\end{align*}
$$
************








#### Übungsaufgaben zur Bruchrechnung 141 bis 150






<!--  Bruchrechnung 0141  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 141__ Für einen Schulgarten wird eine rechteckige Fläche abgesteckt. Die Länge beträgt $18\,\text{m}$, die Breite ist $\dfrac{7}{12}$ der Länge.  
Zunächst werden für Beete $\dfrac{2}{3}$ der gesamten Rasenfläche vorgesehen.  
Von der verbleibenden Fläche wird anschließend $\dfrac{1}{5}$ für Wege reserviert.  
**Berechne** die am Ende nutzbare Gartenfläche. 

<!-- data-solution-button="5"-->
[[  252/5  ]] m^2
@Algebrite.check(252/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{7}{12}\cdot 18\,\text{m}
= \dfrac{7}{12}\cdot \dfrac{18}{1}\,\text{m}
= \dfrac{126}{12}\,\text{m}
= \dfrac{21}{2}\,\text{m} \\[4pt]
\text{Gesamtfläche:}\quad & 18\,\text{m}\cdot \dfrac{21}{2}\,\text{m}
= \dfrac{378}{2}\,\text{m}^2
= 189\,\text{m}^2 \\[4pt]
\text{Beete:}\quad & \dfrac{2}{3}\cdot 189\,\text{m}^2
= 126\,\text{m}^2 \\[4pt]
\text{Rest 1:}\quad & 189\,\text{m}^2 - 126\,\text{m}^2
= 63\,\text{m}^2 \\[4pt]
\text{Wege:}\quad & \dfrac{1}{5}\cdot 63\,\text{m}^2
= \dfrac{63}{5}\,\text{m}^2 \\[4pt]
\text{Nutzfläche:}\quad & 63\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{315}{5}\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{252}{5}\,\text{m}^2
\end{align*}
$$
************
















<!--  Bruchrechnung 0142  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 142:__ Für ein Technikprojekt steht ein Budget von $85\,\text{€}$ zur Verfügung.  
Zunächst werden für Materialien $\dfrac{3}{10}$ des Budgets ausgegeben.  
Später erhält die Gruppe eine Rückerstattung in Höhe von $\dfrac{1}{8}$ des **gesamten** Budgets (Gutschrift).  
**Berechne** den am Ende verfügbare Betrag als Bruch. 

<!-- data-solution-button="5"-->
[[  561/8  ]] €
@Algebrite.check(561/8)
************
$$
\begin{align*}
\text{Ausgabe:}\quad & \dfrac{3}{10}\cdot 85\,\text{€}
= \dfrac{255}{10}\,\text{€}
= \dfrac{51}{2}\,\text{€} \\[4pt]
\text{Rest nach Kauf:}\quad & 85\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{170}{2}\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{119}{2}\,\text{€} \\[4pt]
\text{Gutschrift:}\quad & \dfrac{1}{8}\cdot 85\,\text{€}
= \dfrac{85}{8}\,\text{€} \\[4pt]
\text{Endbetrag:}\quad & \dfrac{119}{2}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{476}{8}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{561}{8}\,\text{€}
\end{align*}
$$
************
















<!--  Bruchrechnung 0143  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 143:__ In einer Textilwerkstatt liegt eine Stoffrolle mit $50\,\text{m}$ Länge bereit.  
Zunächst wird ein Anteil von $\dfrac{3}{5}$ der gesamten Rolle für Vorhänge zugeschnitten.  
Aus der **verbleibenden** Stoffmenge wird anschließend noch $\dfrac{1}{4}$ für Tischdecken verwendet.  
**Berechne** die am Ende übrig bleibende Stofflänge. 

<!-- data-solution-button="5"-->
[[  15  ]] m
@Algebrite.check(15)
************
$$
\begin{align*}
\text{Erster Zuschnitt:}\;& \dfrac{3}{5}\cdot 50\,\text{m}
= \dfrac{150}{5}\,\text{m}
= 30\,\text{m} \\
\text{Rest 1:}\;& 50\,\text{m} - 30\,\text{m} = 20\,\text{m} \\
\text{Zweiter Zuschnitt:}\;& \dfrac{1}{4}\cdot 20\,\text{m}
= 5\,\text{m} \\
\text{Endrest:}\;& 20\,\text{m} - 5\,\text{m} = 15\,\text{m}
\end{align*}
$$
************












<!--  Bruchrechnung 0144  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 144:__ In einem Labor steht ein Kanister mit $25\,\ell$ Desinfektionslösung.  
Zunächst werden $\dfrac{3}{10}$ der gesamten Menge entnommen.  
Am Abend wird eine feste Nachfüllmenge von $\dfrac{1}{8}$ des vollen Kanisters wieder aufgefüllt.  
**Berechne** das Flüssigkeitsvolumen im Kanister am Ende des Tages als Bruch. 

<!-- data-solution-button="5"-->
[[  165/8  ]]  $\ell$
@Algebrite.check(165/8)
************
$$
\begin{align*}
\text{Entnahme:}\;& \dfrac{3}{10}\cdot 25\,\ell
= \dfrac{75}{10}\,\ell
= \dfrac{15}{2}\,\ell \\[4pt]
\text{Rest nach Entnahme:}\;& 25\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{50}{2}\,\ell - \dfrac{15}{2}\,\ell
= \dfrac{35}{2}\,\ell \\[4pt]
\text{Nachfüllung (fest):}\;& \dfrac{1}{8}\cdot 25\,\ell
= \dfrac{25}{8}\,\ell \\[4pt]
\text{Endmenge:}\;& \dfrac{35}{2}\,\ell + \dfrac{25}{8}\,\ell
= \dfrac{140}{8}\,\ell + \dfrac{25}{8}\,\ell
= \dfrac{165}{8}\,\ell
\end{align*}
$$
************














<!--  Bruchrechnung 0145  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 145:__ Für eine Ausstellungsfläche wird eine Holzplatte als Rechteck verwendet.  
Die Länge beträgt $32\,\text{cm}$, die Breite ist $\dfrac{5}{12}$ der Länge.  
Von der gesamten Fläche wird zunächst $\dfrac{3}{8}$ für Befestigungen reserviert.  
Von der **verbleibenden** Fläche wird anschließend $\dfrac{1}{3}$ farbig lackiert.  
**Berechne** die am Ende **nicht** lackierte Nutzfläche als Bruch. 

<!-- data-solution-button="5"-->
[[  1600/9  ]] cm^2
@Algebrite.check(1600/9)
************
$$
\begin{align*}
\text{Breite:}\;& \dfrac{5}{12}\cdot 32\,\text{cm}
= \dfrac{160}{12}\,\text{cm}
= \dfrac{40}{3}\,\text{cm} \\[4pt]
\text{Gesamtfläche:}\;& 32\,\text{cm}\cdot \dfrac{40}{3}\,\text{cm}
= \dfrac{1280}{3}\,\text{cm}^2 \\[6pt]
\text{Reserviert:}\;& \dfrac{3}{8}\cdot \dfrac{1280}{3}\,\text{cm}^2
= \dfrac{1280}{8}\,\text{cm}^2
= 160\,\text{cm}^2 \\[4pt]
\text{Rest 1:}\;& \dfrac{1280}{3}\,\text{cm}^2 - 160\,\text{cm}^2
= \dfrac{1280-480}{3}\,\text{cm}^2
= \dfrac{800}{3}\,\text{cm}^2 \\[6pt]
\text{Lackiert:}\;& \dfrac{1}{3}\cdot \dfrac{800}{3}\,\text{cm}^2
= \dfrac{800}{9}\,\text{cm}^2 \\[4pt]
\text{Nicht lackiert:}\;& \dfrac{800}{3}\,\text{cm}^2 - \dfrac{800}{9}\,\text{cm}^2
= \dfrac{2400-800}{9}\,\text{cm}^2
= \dfrac{1600}{9}\,\text{cm}^2
\end{align*}
$$
************












<!--  Bruchrechnung 0146  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 146:__ Eine Buslinie hat eine Tagesetappe von $54\,\text{km}$.  
Am Morgen werden $\dfrac{4}{9}$ der Gesamtdistanz gefahren.  
Von der **verbleibenden** Strecke wird nach der Pause nochmals $\dfrac{5}{12}$ zurückgelegt.  
**Berechne** die am Ende noch ausstehende Strecke als Bruch. 

<!-- data-solution-button="5"-->
[[  35/2  ]] km
@Algebrite.check(35/2)
************
$$
\begin{align*}
\text{Morgens:}\;& \dfrac{4}{9}\cdot 54\,\text{km}
= \dfrac{216}{9}\,\text{km}
= 24\,\text{km} \\[4pt]
\text{Rest 1:}\;& 54\,\text{km} - 24\,\text{km} = 30\,\text{km} \\[6pt]
\text{Nach der Pause:}\;& \dfrac{5}{12}\cdot 30\,\text{km}
= \dfrac{150}{12}\,\text{km}
= \dfrac{25}{2}\,\text{km} \\[4pt]
\text{Endrest:}\;& 30\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{60}{2}\,\text{km} - \dfrac{25}{2}\,\text{km}
= \dfrac{35}{2}\,\text{km}
\end{align*}
$$
************















<!--  Bruchrechnung 0147  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 147:__ In einer Werkstatt sollen identische Musterstücke aus Stoff vorbereitet werden.  
Pro Musterstück werden $\dfrac{2}{3}\,\text{m}$ Stoff für die Fläche und zusätzlich $\dfrac{1}{4}\,\text{m}$ für Säume benötigt.  
Es werden $3$ Musterstücke gefertigt; anschließend wird für eine Probe noch $\dfrac{1}{2}\,\text{m}$ Stoff bereitgelegt.  
**Berechne** die gesamte Stofflänge. 

<!-- data-solution-button="5"-->
[[  13/4  ]] m
@Algebrite.check(13/4)
************
$$
\begin{align*}
\text{Term:}\quad & 3\cdot\Big(\dfrac{2}{3}\,\text{m}+\dfrac{1}{4}\,\text{m}\Big)+\dfrac{1}{2}\,\text{m} \\[4pt]
\text{(Distributivgesetz)}\quad & = 3\cdot\dfrac{2}{3}\,\text{m} + 3\cdot\dfrac{1}{4}\,\text{m} + \dfrac{1}{2}\,\text{m} \\
&= 2\,\text{m} + \dfrac{3}{4}\,\text{m} + \dfrac{1}{2}\,\text{m}
= 2\,\text{m} + \Big(\dfrac{3}{4}+\dfrac{2}{4}\Big)\text{m} \\
&= 2\,\text{m} + \dfrac{5}{4}\,\text{m}
= \dfrac{8}{4}\,\text{m} + \dfrac{5}{4}\,\text{m}
= \dfrac{13}{4}\,\text{m}
\end{align*}
$$
************








<!--  Bruchrechnung 0148  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 148:__ In einem Labor werden Reinigungsmischungen angesetzt.  
Eine Mischung besteht aus $\dfrac{3}{8}\,\ell$ Lösung A und $\dfrac{1}{4}\,\ell$ Lösung B.  
Es werden $6$ Mischungen hergestellt; danach werden für Tests $\dfrac{2}{3}\,\ell$ des **Gesamtergebnisses** entnommen.  
**Bestimme** die verbleibende Flüssigkeitsmenge. 

<!-- data-solution-button="5"-->
[[  37/12  ]]  $\ell$
@Algebrite.check(37/12)
************
$$
\begin{align*}
\text{Term:}\quad & 6\cdot\Big(\dfrac{3}{8}\,\ell+\dfrac{1}{4}\,\ell\Big)-\dfrac{2}{3}\,\ell \\[4pt]
\text{(Distributivgesetz)}\quad & = 6\cdot\dfrac{3}{8}\,\ell + 6\cdot\dfrac{1}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{18}{8}\,\ell + \dfrac{6}{4}\,\ell - \dfrac{2}{3}\,\ell
= \dfrac{9}{4}\,\ell + \dfrac{3}{2}\,\ell - \dfrac{2}{3}\,\ell \\
&= \Big(\dfrac{9}{4}+\dfrac{6}{4}\Big)\ell - \dfrac{2}{3}\,\ell
= \dfrac{15}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{45}{12}\,\ell - \dfrac{8}{12}\,\ell
= \dfrac{37}{12}\,\ell
\end{align*}
$$
************






<!--  Bruchrechnung 0149  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 149:__ Für ein Ausstellungsmodell werden Rahmen gebaut.  
Jeder Rahmen benötigt $\dfrac{3}{2}\,\text{m}$ Leisten für die langen Kanten und $\dfrac{3}{4}\,\text{m}$ für die kurzen Kanten.  
Beim Anpassen fällt pro Rahmen Verschnitt von $\dfrac{1}{6}\,\text{m}$ an, der von der benötigten Länge abgezogen wird.  
Es werden $4$ identische Rahmen gefertigt.  
**Berechne** die gesamte tatsächlich benötigte Leistenlänge. 

<!-- data-solution-button="5"-->
[[  25/3  ]] m
@Algebrite.check(25/3)
************
$$
\begin{align*}
\text{Term:}\quad & 4\cdot\Big( \big(\dfrac{3}{2}+\dfrac{3}{4}\big)\text{ m} - \dfrac{1}{6}\,\text{m} \Big) \\[4pt]
\text{Klammer:}\quad & \dfrac{3}{2}+\dfrac{3}{4}=\dfrac{6}{4}+\dfrac{3}{4}=\dfrac{9}{4} \\
&\Rightarrow \; 4\cdot\Big(\dfrac{9}{4}\,\text{m} - \dfrac{1}{6}\,\text{m}\Big)
= 4\cdot\Big(\dfrac{27}{12}-\dfrac{2}{12}\Big)\text{ m} \\
&= 4\cdot\dfrac{25}{12}\,\text{m}
= \dfrac{100}{12}\,\text{m}
= \dfrac{25}{3}\,\text{m}
\end{align*}
$$
************






<!--  Bruchrechnung 0150  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 150:__ Ein modularer Garten besteht aus drei identischen Beeten.  
Jedes Beet setzt sich aus einer Hauptfläche mit Breite $\dfrac{4}{5}\,\text{m}$ und einer Seitenfläche mit Breite $\dfrac{1}{2}\,\text{m}$ zusammen; die Länge beträgt jeweils $6\,\text{m}$.  
Aus ästhetischen Gründen bleibt je Beet ein Randstreifen von $\dfrac{1}{10}$ der jeweiligen **Beetfläche** unbepflanzt.  
**Berechne** die gesamte bepflanzte Fläche der drei Beete. 

<!-- data-solution-button="5"-->
[[  1053/50  ]] m$^2$
@Algebrite.check(1053/50)
************
$$
\begin{align*}
\text{Beetfläche:}\quad & 6\,\text{m}\cdot\Big(\dfrac{4}{5}\,\text{m}+\dfrac{1}{2}\,\text{m}\Big)
= 6\cdot\Big(\dfrac{4}{5}+\dfrac{1}{2}\Big)\text{ m}^2 \\[2pt]
&= 6\cdot\Big(\dfrac{8}{10}+\dfrac{5}{10}\Big)\text{ m}^2
= 6\cdot\dfrac{13}{10}\,\text{m}^2
= \dfrac{78}{10}\,\text{m}^2
= \dfrac{39}{5}\,\text{m}^2 \\[6pt]
\text{Bepflanzt je Beet:}\quad & \Big(1-\dfrac{1}{10}\Big)\cdot\dfrac{39}{5}
= \dfrac{9}{10}\cdot\dfrac{39}{5}
= \dfrac{351}{50}\,\text{m}^2 \\[6pt]
\text{Gesamt (3 Beete):}\quad & 3\cdot\dfrac{351}{50}
= \dfrac{1053}{50}\,\text{m}^2
\end{align*}
$$
************








#### Übungsaufgaben zur Bruchrechnung 151 bis 160








<!--  Bruchrechnung 0151  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 151:__ Für eine Ausstellung werden vier identische Rahmen gebaut.  
Je Rahmen werden zunächst $\dfrac{5}{6}\,\text{m}$ Leisten für die langen Kanten und $\dfrac{1}{3}\,\text{m}$ für die kurzen Kanten benötigt.  
Zusätzlich wird pro Rahmen ein Verschnitt von $\dfrac{1}{8}$ der je Rahmen benötigten Leistenlänge einkalkuliert.  
Am Ende bleiben insgesamt $\dfrac{1}{2}\,\text{m}$ Rest übrig, der abgezogen wird.  
**Berechne** die gesamte tatsächlich benötigte Leistenlänge.  


<!-- data-solution-button="5"-->
[[  19/4  ]] m
@Algebrite.check(19/4)
************
$$
\begin{align*}
\text{Basis je Rahmen:}\quad 
&\left(\dfrac{5}{6} + \dfrac{1}{3}\right)\,\text{m}
= \left(\dfrac{5}{6} + \dfrac{2}{6}\right)\,\text{m}
= \dfrac{7}{6}\,\text{m} \\[4pt]
\text{Mit Verschnitt je Rahmen:}\quad
&\left(1+\dfrac{1}{8}\right)\cdot \dfrac{7}{6}\,\text{m}
= \dfrac{9}{8}\cdot \dfrac{7}{6}\,\text{m}
= \dfrac{63}{48}\,\text{m}
= \dfrac{21}{16}\,\text{m} \\[6pt]
\text{Für 4 Rahmen:}\quad 
&4\cdot \dfrac{21}{16}\,\text{m} 
= \dfrac{84}{16}\,\text{m}
= \dfrac{21}{4}\,\text{m} \\[6pt]
\text{Abzug Rest:}\quad 
&\dfrac{21}{4}\,\text{m} - \dfrac{1}{2}\,\text{m}
= \dfrac{21}{4}\,\text{m} - \dfrac{2}{4}\,\text{m}
= \dfrac{19}{4}\,\text{m}
\end{align*}
$$
************






<!--  Bruchrechnung 0152  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 152:__ In einem Labor werden Mischungen angesetzt.  
Eine \emph{Mischung} besteht aus $\dfrac{3}{5}\,\ell$ Lösung A und $\dfrac{1}{4}\,\ell$ Lösung B.  
Es werden sieben Mischungen hergestellt. Anschließend werden $\dfrac{2}{7}$ der gesamten hergestellten Menge zur Kalibrierung entnommen, danach werden noch $\dfrac{1}{3}\,\ell$ destilliertes Wasser zugegeben.  
**Berechne** das endgültige Volumen.  


<!-- data-solution-button="5"-->
[[  55/12  ]]  $\ell$
@Algebrite.check(55/12)
************
$$
\begin{align*}
\text{Summe je Mischung:}\quad 
&\left(\dfrac{3}{5}+\dfrac{1}{4}\right)\,\ell
= \left(\dfrac{12}{20}+\dfrac{5}{20}\right)\,\ell
= \dfrac{17}{20}\,\ell \\[4pt]
\text{Gesamt vor Entnahme:}\quad 
&7\cdot \dfrac{17}{20}\,\ell
= \dfrac{119}{20}\,\ell \\[6pt]
\text{Kalibrier-Entnahme:}\quad 
&\dfrac{2}{7}\cdot \dfrac{119}{20}\,\ell
= \dfrac{238}{140}\,\ell
= \dfrac{17}{10}\,\ell \\[6pt]
\text{Nach Entnahme:}\quad 
&\dfrac{119}{20}\,\ell - \dfrac{17}{10}\,\ell
= \dfrac{119}{20}\,\ell - \dfrac{34}{20}\,\ell
= \dfrac{85}{20}\,\ell
= \dfrac{17}{4}\,\ell \\[6pt]
\text{Zugabe Wasser:}\quad 
&\dfrac{17}{4}\,\ell + \dfrac{1}{3}\,\ell
= \dfrac{51}{12}\,\ell + \dfrac{4}{12}\,\ell
= \dfrac{55}{12}\,\ell
\end{align*}
$$
************






<!--  Bruchrechnung 0153  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 153:__ Für eine Sammelaktion bringt jede der \textbf{8} Klassen denselben Beitrag:  
pro Klasse $\left(\dfrac{3}{5}\,\text{kg} + \dfrac{1}{4}\,\text{kg}\right)$ Papier.  
Von der gesamten eingesammelten Masse wird anschließend $\dfrac{1}{5}$ direkt recycelt.  
Der verbleibende Rest wird gleichmäßig auf sechs Kisten verteilt.  
**Berechne** die Masse pro Kiste als Bruch. 


<!-- data-solution-button="5"-->
[[  68/75  ]] kg
@Algebrite.check(68/75)
************
$$
\begin{align*}
\text{Pro Klasse:}\quad 
&\left(\dfrac{3}{5}+\dfrac{1}{4}\right)\,\text{kg}
= \left(\dfrac{12}{20}+\dfrac{5}{20}\right)\,\text{kg}
= \dfrac{17}{20}\,\text{kg} \\[4pt]
\text{Gesamt:}\quad 
&8\cdot \dfrac{17}{20}\,\text{kg}
= \dfrac{136}{20}\,\text{kg}
= \dfrac{34}{5}\,\text{kg} \\[6pt]
\text{Nach Recycling:}\quad 
&\left(1-\dfrac{1}{5}\right)\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{4}{5}\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{136}{25}\,\text{kg} \\[6pt]
\text{Gleichmäßig auf 6 Kisten:}\quad 
&\dfrac{136}{25}\,\text{kg} : 6
= \dfrac{136}{25}\,\text{kg} \cdot \dfrac{1}{6}
= \dfrac{136}{150}\,\text{kg}
= \dfrac{68}{75}\,\text{kg}
\end{align*}
$$
************






<!--  Bruchrechnung 0154  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 154:__ In einer Druckerei werden großformatige Plakate produziert. Für jedes Plakat werden $\dfrac{7}{10}\,\text{m}^2$ Papier für die Druckfläche und zusätzlich $\dfrac{1}{8}\,\text{m}^2$ als Rand verwendet.  
Es werden insgesamt acht Plakate hergestellt. Nach dem Zuschneiden gehen $\dfrac{3}{20}$ der gesamten bisher verwendeten Fläche als Verschnitt verloren.  
Anschließend muss wegen eines Fehldrucks noch einmal $\dfrac{1}{4}\,\text{m}^2$ nachgedruckt werden.  
**Berechne** die schließlich verbrauchte Papierfläche. 


<!-- data-solution-button="5"-->
[[  293/50  ]] m$^2$
@Algebrite.check(293/50)
************
$$
\begin{align*}
\text{Term:}\quad 
&\left[\,8\cdot\left(\dfrac{7}{10}+\dfrac{1}{8}\right)\right]\cdot\left(1-\dfrac{3}{20}\right)\;+\;\dfrac{1}{4}\;\;\text{m}^2 \\[6pt]
\text{Pro Plakat:}\quad 
&\left(\dfrac{7}{10}+\dfrac{1}{8}\right)
= \left(\dfrac{28}{40}+\dfrac{5}{40}\right)
= \dfrac{33}{40} \\[6pt]
\text{Für 8 Plakate:}\quad 
&8\cdot\dfrac{33}{40}
= \dfrac{264}{40}
= \dfrac{33}{5} \\[6pt]
\text{Nach Verschnitt:}\quad 
&\dfrac{33}{5}\cdot\left(1-\dfrac{3}{20}\right)
= \dfrac{33}{5}\cdot\dfrac{17}{20}
= \dfrac{561}{100} \\[6pt]
\text{Nachdruck addieren:}\quad 
&\dfrac{561}{100} + \dfrac{1}{4}
= \dfrac{561}{100} + \dfrac{25}{100}
= \dfrac{586}{100}
= \dfrac{293}{50} \\[4pt]
&\Rightarrow\;\; \dfrac{293}{50}\,\text{m}^2
\end{align*}
$$
************







<!--  Bruchrechnung 0155  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 155:__ Für eine Materialserie werden identische Stoff-Kits vorbereitet.  
Je Kit werden $\dfrac{7}{12}\,\text{m}$ Stoff für die Außenflächen und $\dfrac{3}{8}\,\text{m}$ für das Innenfutter bereitgelegt.  
Pro Kit fällt zusätzlich Verschnitt in Höhe von $\dfrac{1}{6}$ der Kit-Grundlänge an (die Kit-Grundlänge ist die Summe aus Außen- und Innenanteil).  
Es werden fünf Kits gefertigt. Zusätzlich werden drei Teststreifen geschnitten, wobei jeder Teststreifen $\dfrac{1}{4}$ der Kit-Grundlänge entspricht (ohne Verschnitt).  
Von der bis dahin vorbereiteten Gesamtlänge werden anschließend $\dfrac{2}{15}$ zurückgegeben. Zum Abschluss kommen $\dfrac{1}{5}\,\text{m}$ aus Restbeständen dazu.  
**Berechne** die schließlich benötigte Stofflänge. 


<!-- data-solution-button="5"-->
[[  4897/864  ]] m
@Algebrite.check(4897/864)
************
$$
\begin{align*}
\text{Kit-Grundlänge:}\quad 
& \dfrac{7}{12}\,\text{m}+\dfrac{3}{8}\,\text{m}
= \dfrac{14}{24}\,\text{m}+\dfrac{9}{24}\,\text{m}
= \dfrac{23}{24}\,\text{m} \\[6pt]
\text{Verschnitt je Kit:}\quad 
& \dfrac{1}{6}\cdot \dfrac{23}{24}\,\text{m}
= \dfrac{23}{144}\,\text{m} \\[6pt]
\text{Je Kit inkl. Verschnitt:}\quad 
& \dfrac{23}{24}\,\text{m}+\dfrac{23}{144}\,\text{m}
= \dfrac{161}{144}\,\text{m} \\[6pt]
\text{Fünf Kits:}\quad 
& 5\cdot\dfrac{161}{144}\,\text{m}
= \dfrac{805}{144}\,\text{m} \\[6pt]
\text{Drei Teststreifen:}\quad 
& 3\cdot\left(\dfrac{1}{4}\cdot\dfrac{23}{24}\right)\,\text{m}
= 3\cdot\dfrac{23}{96}\,\text{m}
= \dfrac{23}{32}\,\text{m} \\[6pt]
\text{Zwischensumme:}\quad 
& \dfrac{805}{144}\,\text{m}+\dfrac{23}{32}\,\text{m}
= \dfrac{1817}{288}\,\text{m} \\[6pt]
\text{Rückgabe:}\quad 
& \left(1-\dfrac{2}{15}\right)\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{13}{15}\cdot\dfrac{1817}{288}\,\text{m}
= \dfrac{23621}{4320}\,\text{m} \\[6pt]
\text{Restbestand hinzu:}\quad 
& \dfrac{23621}{4320}\,\text{m}+\dfrac{1}{5}\,\text{m}
= \dfrac{23621}{4320}\,\text{m}+\dfrac{864}{4320}\,\text{m} \\[4pt]
&= \dfrac{24485}{4320}\,\text{m}
= \dfrac{4897}{864}\,\text{m}
\end{align*}
$$
************






<!--  Bruchrechnung 0156  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 156:__ 
Für eine Laborreihe werden Mischungen angesetzt.  
Pro Dose werden $\dfrac{2}{3}\,\ell$ Grundlösung und $\dfrac{3}{10}\,\ell$ Zusatzlösung kombiniert.  
Beim Ansetzen geht je Dose $\dfrac{1}{12}$ der Mischsumme als Verlust ab (die Mischsumme ist $\dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell$).  
Es werden sechs Dosen hergestellt. Danach wird $\dfrac{3}{8}$ der bis dahin vorhandenen Gesamtmenge für Tests entnommen.  
Zum Schluss werden pro hergestellter Dose nochmals $\dfrac{1}{5}\,\ell$ destilliertes Wasser zugegeben.  
**Bestimme** das endgültige Volumen. 



<!-- data-solution-button="5"-->
[[  2171/480  ]] $\ell$
@Algebrite.check(2171/480)
************
$$
\begin{align*}
\text{Mischsumme je Dose:}\quad
& \dfrac{2}{3}\,\ell+\dfrac{3}{10}\,\ell
= \dfrac{20}{30}\,\ell+\dfrac{9}{30}\,\ell
= \dfrac{29}{30}\,\ell \\[6pt]
\text{Verlust je Dose:}\quad
& \dfrac{1}{12}\cdot\dfrac{29}{30}\,\ell
= \dfrac{29}{360}\,\ell \\[6pt]
\text{Je Dose nach Verlust:}\quad
& \left(\dfrac{29}{30}-\dfrac{29}{360}\right)\,\ell
= \dfrac{319}{360}\,\ell \\[6pt]
\text{Sechs Dosen:}\quad
& 6\cdot\dfrac{319}{360}\,\ell
= \dfrac{319}{60}\,\ell \\[6pt]
\text{Entnahme Tests:}\quad
& \left(1-\dfrac{3}{8}\right)\cdot\dfrac{319}{60}\,\ell
= \dfrac{5}{8}\cdot\dfrac{319}{60}\,\ell
= \dfrac{319}{96}\,\ell \\[6pt]
\text{Zugabe Wasser:}\quad
& 6\cdot\dfrac{1}{5}\,\ell
= \dfrac{6}{5}\,\ell
= \dfrac{576}{480}\,\ell \\[6pt]
\text{Endvolumen:}\quad
& \dfrac{319}{96}\,\ell + \dfrac{6}{5}\,\ell
= \dfrac{1595}{480}\,\ell + \dfrac{576}{480}\,\ell
= \dfrac{2171}{480}\,\ell
\end{align*}
$$
************



<!--  Bruchrechnung 0157  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 157:__ Für eine Kleinserie werden identische Montagesets vorbereitet.  
Pro Set werden für die Grundplatte $\dfrac{3}{4}\,\text{m}$ Metallleiste und für die Verstärkung $\dfrac{2}{5}\,\text{m}$ zusätzlich benötigt.  
Je Set kommt ein Verstärkungszuschlag in Höhe von $\dfrac{1}{6}$ der Set-Grundlänge (Summe aus Grundplatte und Verstärkung) hinzu.  
Es werden sechs Sets fertiggestellt. Anschließend werden $\dfrac{2}{9}$ der bis dahin insgesamt verwendeten Länge als Ausschuss verworfen.  
Zum Schluss können $\dfrac{1}{4}\,\text{m}$ aus Reststücken wiederverwendet werden (werden addiert).  
**Berechne** die schließlich benötigte Leistenlänge.  

<!-- data-solution-button="5"-->
[[  293/45  ]] m
@Algebrite.check(293/45)
************
$$
\begin{align*}
\text{Set-Grundlänge:}\quad
& \dfrac{3}{4}\,\text{m} + \dfrac{2}{5}\,\text{m}
= \left(\dfrac{15}{20}+\dfrac{8}{20}\right)\text{m}
= \dfrac{23}{20}\,\text{m} \\[6pt]
\text{Zuschlag je Set:}\quad
& \dfrac{1}{6}\cdot \dfrac{23}{20}\,\text{m}
= \dfrac{23}{120}\,\text{m} \\[6pt]
\text{Summe je Set:}\quad
& \dfrac{23}{20}\,\text{m} + \dfrac{23}{120}\,\text{m}
= \left(\dfrac{138}{120}+\dfrac{23}{120}\right)\text{m}
= \dfrac{161}{120}\,\text{m} \\[6pt]
\text{Vor Ausschuss (6 Sets):}\quad
& 6\cdot \dfrac{161}{120}\,\text{m}
= \dfrac{161}{20}\,\text{m} \\[6pt]
\text{Nach Ausschuss:}\quad
& \left(1-\dfrac{2}{9}\right)\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{7}{9}\cdot \dfrac{161}{20}\,\text{m}
= \dfrac{1127}{180}\,\text{m} \\[6pt]
\text{Reststücke addieren:}\quad
& \dfrac{1127}{180}\,\text{m} + \dfrac{1}{4}\,\text{m}
= \dfrac{1127}{180}\,\text{m} + \dfrac{45}{180}\,\text{m}
= \dfrac{1172}{180}\,\text{m}
= \dfrac{293}{45}\,\text{m}
\end{align*}
$$
************



<!--  Bruchrechnung 0158  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 158:__ Für einen Schulhof wird eine rechteckige Aktionsfläche angelegt.  
Die Länge beträgt $27\,\text{m}$, die Breite ist $\dfrac{2}{3}$ der Länge.  
Zuerst werden für Spielfelder $\dfrac{5}{12}$ der gesamten Fläche markiert.  
Von der verbleibenden Fläche werden anschließend $\dfrac{3}{7}$ als Rasen angelegt.  
Zum Schluss wird ein Materialschuppen aufgebaut, der $\dfrac{1}{8}$ der Gesamtfläche beansprucht.  
**Berechne** die am Ende frei nutzbare Fläche (ohne Spielfelder, ohne Rasen, ohne Schuppen). 

<!-- data-solution-button="5"-->
[[  405/4  ]] m$^2$
@Algebrite.check(405/4)
************
$$
\begin{align*}
\text{Breite:}\quad
& \dfrac{2}{3}\cdot 27\,\text{m}
= 18\,\text{m} \\[4pt]
\text{Gesamtfläche:}\quad
& 27\,\text{m}\cdot 18\,\text{m}
= 486\,\text{m}^2 \\[6pt]
\text{Spielfelder:}\quad
& \dfrac{5}{12}\cdot 486\,\text{m}^2
= \dfrac{5}{12}\cdot \dfrac{486}{1}\,\text{m}^2
= \dfrac{2430}{12}\,\text{m}^2
= \dfrac{405}{2}\,\text{m}^2 \\[6pt]
\text{Rest 1:}\quad
& 486\,\text{m}^2 - \dfrac{405}{2}\,\text{m}^2
= \dfrac{972}{2}\,\text{m}^2 - \dfrac{405}{2}\,\text{m}^2
= \dfrac{567}{2}\,\text{m}^2 \\[6pt]
\text{Rasen:}\quad
& \dfrac{3}{7}\cdot \dfrac{567}{2}\,\text{m}^2
= \dfrac{1701}{14}\,\text{m}^2 \\[6pt]
\text{Rest 2:}\quad
& \dfrac{567}{2}\,\text{m}^2 - \dfrac{1701}{14}\,\text{m}^2
= \left(\dfrac{3969}{14}-\dfrac{1701}{14}\right)\text{m}^2
= \dfrac{2268}{14}\,\text{m}^2
= 162\,\text{m}^2 \\[6pt]
\text{Schuppen:}\quad
& \dfrac{1}{8}\cdot 486\,\text{m}^2
= \dfrac{243}{4}\,\text{m}^2 \\[6pt]
\text{Frei nutzbar:}\quad
& 162\,\text{m}^2 - \dfrac{243}{4}\,\text{m}^2
= \dfrac{648}{4}\,\text{m}^2 - \dfrac{243}{4}\,\text{m}^2
= \dfrac{405}{4}\,\text{m}^2
\end{align*}
$$
************




<!--  Bruchrechnung 0159  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 159:__ Für eine Veranstaltung wird eine rechteckige Halle vorbereitet.  
Die Länge beträgt $ 25\,\text{m} $, die Breite ist $ \dfrac{4}{5} $ der Länge. Zunächst wird eine Sicherheitszone von $ \dfrac{3}{10} $ der Gesamtfläche abgesperrt (nicht begehbar).  
Von der anschließend verbleibenden Fläche werden Schutzmatten auf $ \dfrac{2}{3} $ ausgelegt (ebenfalls nicht begehbar).  
Zum Schluss blockiert eine Bühne $ \dfrac{1}{5} $ der Gesamtfläche.  
**Berechne** die am Ende frei begehbare Fläche. 


<!-- data-solution-button="5"-->
[[  50/3  ]] m$^2$
@Algebrite.check(50/3)
************
$$
\begin{align*}
\text{Breite:}&\quad \dfrac{4}{5}\cdot 25\,\text{m} = 20\,\text{m} \\[4pt]
\text{Gesamtfläche:}&\quad 25\,\text{m}\cdot 20\,\text{m} = 500\,\text{m}^2 \\[6pt]
\text{Sicherheitszone:}&\quad \dfrac{3}{10}\cdot 500\,\text{m}^2 = 150\,\text{m}^2 \\[4pt]
\text{Rest 1:}&\quad 500\,\text{m}^2 - 150\,\text{m}^2 = 350\,\text{m}^2 \\[6pt]
\text{Matten (vom Rest 1):}&\quad \dfrac{2}{3}\cdot 350\,\text{m}^2
= \dfrac{700}{3}\,\text{m}^2 \\[6pt]
\text{Rest 2:}&\quad 350\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{1050}{3}\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{350}{3}\,\text{m}^2 \\[6pt]
\text{Bühne (von Gesamt):}&\quad \dfrac{1}{5}\cdot 500\,\text{m}^2 = 100\,\text{m}^2 = \dfrac{300}{3}\,\text{m}^2 \\[6pt]
\text{Frei begehbar:}&\quad \dfrac{350}{3}\,\text{m}^2 - \dfrac{300}{3}\,\text{m}^2
= \dfrac{50}{3}\,\text{m}^2
\end{align*}
$$
************





<!--  Bruchrechnung 0160  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 160:__ Für eine Regalanlage werden identische Fachböden vorbereitet.  
Je Fachboden werden $\dfrac{4}{9}\,\text{m}$ Leiste für die Auflage und $\dfrac{5}{12}\,\text{m}$ für die Rückwand zugeschnitten.  
Zusätzlich wird pro Fachboden eine Verstärkung in Höhe von $\dfrac{1}{8}$ der Fachboden-Summe (Auflage plus Rückwand) angebracht.  
Es werden elf Fachböden hergestellt. Danach fällt beim Endbeschnitt ein Verlust von $\dfrac{1}{11}$ der bis dahin verwendeten Gesamtlänge an.  
Zum Schluss werden noch zwei Zusatzleisten zu je $\dfrac{3}{20}\,\text{m}$ ergänzt.  
**Berechne** die schließlich benötigte Leistenlänge.  


<!-- data-solution-button="5"-->
[[  799/80  ]] m
@Algebrite.check(799/80)
************
$$
\begin{align*}
\text{Fachboden-Summe:}\quad
& \dfrac{4}{9}\,\text{m} + \dfrac{5}{12}\,\text{m}
= \left(\dfrac{16}{36} + \dfrac{15}{36}\right)\text{m}
= \dfrac{31}{36}\,\text{m} \\[6pt]
\text{Mit Verstärkung je Fachboden:}\quad
& \left(1+\dfrac{1}{8}\right)\cdot \dfrac{31}{36}\,\text{m}
= \dfrac{9}{8}\cdot \dfrac{31}{36}\,\text{m}
= \dfrac{31}{32}\,\text{m} \\[6pt]
\text{Für 11 Fachböden:}\quad
& 11\cdot \dfrac{31}{32}\,\text{m}
= \dfrac{341}{32}\,\text{m} \\[6pt]
\text{Endbeschnitt (Verlust } \dfrac{1}{11}\text{):}\quad
& \left(1-\dfrac{1}{11}\right)\cdot \dfrac{341}{32}\,\text{m}
= \dfrac{10}{11}\cdot \dfrac{341}{32}\,\text{m}
= \dfrac{155}{16}\,\text{m} \\[6pt]
\text{Zusatzleisten:}\quad
& 2\cdot \dfrac{3}{20}\,\text{m}
= \dfrac{3}{10}\,\text{m} \\[6pt]
\text{Endlänge:}\quad
& \dfrac{155}{16}\,\text{m} + \dfrac{3}{10}\,\text{m}
= \dfrac{775}{80}\,\text{m} + \dfrac{24}{80}\,\text{m}
= \dfrac{799}{80}\,\text{m}
\end{align*}
$$
************





#### Übungsaufgaben zur Bruchrechnung 161 bis 170


<!--  Bruchrechnung 0161  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 161:__ **Sortiere** die Brüche nach ihrer Größe.



<!-- data-solution-button="5" 
data-randomize="true" -->
__$a)\;\;$__
[->[($\dfrac{4}{3 }$)]] $<$ 
[->[($\dfrac{11}{8}$)]] $<$ 
[->[($\dfrac{9}{5 }$)]] $<$ 
[->[($\dfrac{13}{6 }$)]] $<$ 
[->[($\dfrac{23}{8 }$)]] $<$ 
[->[($\dfrac{13}{4 }$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$b)\;\;$__
[->[($\dfrac{3}{10 }$)]] $<$ 
[->[($\dfrac{3}{4 }$)]] $<$ 
[->[($\dfrac{6}{7 }$)]] $<$ 
[->[($\dfrac{6}{5 }$)]] $<$ 
[->[($\dfrac{5}{3 }$)]] $<$ 
[->[($\dfrac{17}{9 }$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$c)\;\;$__
[->[($\dfrac{2}{9 }$)]] $<$ 
[->[($\dfrac{3}{11}$)]] $<$ 
[->[($\dfrac{2}{7 }$)]] $<$ 
[->[($\dfrac{3}{5 }$)]] $<$ 
[->[($\dfrac{2}{3 }$)]] $<$ 
[->[($\dfrac{5}{6 }$)]]








<!--  Bruchrechnung 0162  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 162:__ **Sortiere** die Brüche nach ihrer Größe.



<!-- data-solution-button="5" 
data-randomize="true" -->
__$a)\;\;$__
[->[($\dfrac{3}{7}$)]] $<$ 
[->[($\dfrac{3}{5}$)]] $<$ 
[->[($\dfrac{7}{8}$)]] $<$ 
[->[($\dfrac{3}{2}$)]] $<$ 
[->[($\dfrac{5}{3}$)]] $<$ 
[->[($\dfrac{7}{4}$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$b)\;\;$__
[->[($\dfrac{2}{11}$)]] $<$ 
[->[($\dfrac{1}{3}$)]] $<$ 
[->[($\dfrac{5}{12}$)]] $<$ 
[->[($\dfrac{5}{8}$)]] $<$ 
[->[($\dfrac{7}{10}$)]] $<$ 
[->[($\dfrac{8}{9}$)]]



<!-- data-solution-button="5" 
data-randomize="true" -->
__$c)\;\;$__
[->[($\dfrac{2}{5}$)]] $<$ 
[->[($\dfrac{7}{12}$)]] $<$ 
[->[($\dfrac{2}{3}$)]] $<$ 
[->[($\dfrac{7}{9}$)]] $<$ 
[->[($\dfrac{7}{6}$)]] $<$ 
[->[($\dfrac{8}{7}$)]]







<!--  Bruchrechnung 0163  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 163:__ Höre die Tonspur an und **gib** den Wert des beschriebenen Terms **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe zwei Siebtel und bekomme drei Siebtel hinzu.

<!-- data-solution-button="5"-->
[[  5/7  ]] 
@Algebrite.check(5/7)


</div>

<div class="flex-child">

__$b)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Was habe ich, wenn ich sieben Neuntel und vier Neuntel habe?

<!-- data-solution-button="5"-->
[[  11/9  ]] 
@Algebrite.check(11/9)


</div>

<div class="flex-child">

__$c)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Zu meinen drei Achtel kommen zwei Achtel hinzu.

<!-- data-solution-button="5"-->
[[  5/8  ]] 
@Algebrite.check(5/8)


</div>

<div class="flex-child">

__$d)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe ein Drittel und noch ein Drittel.

<!-- data-solution-button="5"-->
[[  2/3  ]] 
@Algebrite.check(2/3)


</div>

</section>






<!--  Bruchrechnung 0164  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 164:__ Höre die Tonspur an und **gib** den Wert des beschriebenen Terms **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Zu meinen drei Elftel werden vier Elftel hinzugefügt.

<!-- data-solution-button="5"-->
[[  7/11  ]] 
@Algebrite.check(7/11)


</div>

<div class="flex-child">

__$b)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Ich habe drei Zehntel und nochmal vier Zehntel.

<!-- data-solution-button="5"-->
[[  7/10  ]] 
@Algebrite.check(7/10)


</div>

<div class="flex-child">

__$c)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Zu meinen ein Sechstel, zu denen vier Sechstel hinzukommen.

<!-- data-solution-button="5"-->
[[  5/6  ]] 
@Algebrite.check(5/6)


</div>

<div class="flex-child">

__$d)\;\;$__ 

{{|> Deutsch Female}}
<!-- style="position: absolute; left: -9999px;" -->
Was habe ich, wenn ich fünf Zwölftel und sechs Zwölftel habe?

<!-- data-solution-button="5"-->
[[  11/12  ]] 
@Algebrite.check(11/12)


</div>

</section>







<!--  Bruchrechnung 0165  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 165:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.

<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{5}{6}$ 
 [->[$\left. \boxed{ = \dfrac{2}{3} + \dfrac{1}{6}} \right\| \boxed{ \dfrac{4}{5} \cdot \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{4} - \dfrac{3}{20} } \right\|\boxed{ \dfrac{9}{7} : \dfrac{3}{4}  }  $]]
 [->[$\left. \boxed{ =  \dfrac{36}{56} \cdot \dfrac{8}{3} } \right\|\boxed{ \dfrac{5}{8} + \dfrac{1}{2} }  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{4} \cdot \dfrac{3}{2} } \right\|\boxed{ \dfrac{7}{10} - \dfrac{1}{2} }  $]]
$= \dfrac{1}{5}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__ $\dfrac{1}{5}$ 
 [->[$\left. \boxed{ =  \dfrac{8}{15} : \dfrac{8}{3} } \right\|\boxed{ \dfrac{8}{9} \cdot \dfrac{15}{24} }  $]]
 [->[$\left. \boxed{ =  \dfrac{2}{3} - \dfrac{1}{9} } \right\|\boxed{ \dfrac{5}{12} + \dfrac{3}{4} }  $]]
 [->[$\left. \boxed{ =  \dfrac{11}{6} - \dfrac{2}{3} } \right\|\boxed{ \dfrac{7}{8} \cdot \dfrac{6}{21} }  $]]
 [->[$\left. \boxed{ =  \dfrac{7}{12} - \dfrac{1}{4} } \right\|\boxed{ \dfrac{6}{5} - \dfrac{3}{4} }  $]]  
$= \dfrac{9}{20}$

<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__ $\dfrac{5}{6}$ 
 [->[$\left. \boxed{ = \dfrac{2}{3} + \dfrac{1}{6}} \right\| \boxed{ \dfrac{4}{5} \cdot \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{4} + \dfrac{9}{20} } \right\|\boxed{ \dfrac{9}{7} : \dfrac{3}{4}  }  $]]
 [->[$\left. \boxed{ =  \dfrac{36}{56} \cdot \dfrac{8}{3} } \right\|\boxed{ \dfrac{5}{8} + \dfrac{1}{2} }  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{4} \cdot \dfrac{3}{2} } \right\|\boxed{ \dfrac{7}{10} - \dfrac{1}{2} }  $]]
$= \dfrac{1}{5}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__ $\dfrac{7}{12}$
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{14}{15} \cdot \dfrac{5}{14}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{2}} \right\| \boxed{ \dfrac{2}{5} + \dfrac{1}{15}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{5} \cdot \dfrac{1}{3}} \right\| \boxed{ \dfrac{11}{12} - \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{4}{9} : \dfrac{2}{3}} \right\| \boxed{ \dfrac{5}{6} - \dfrac{1}{3}} $]]
$= \dfrac{1}{2}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__ $\dfrac{3}{4}$
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{5}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{2} - \dfrac{3}{5}} \right\| \boxed{ \dfrac{3}{4} \cdot \dfrac{8}{9}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{6}} \right\| \boxed{ \dfrac{7}{8} - \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{4} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{1}{3} + \dfrac{5}{12}} $]]
$= \dfrac{3}{4}$




<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__ $\dfrac{4}{7}$
 [->[$\left. \boxed{ = \dfrac{6}{7} - \dfrac{2}{7}} \right\| \boxed{ \dfrac{5}{6} \cdot \dfrac{3}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{4} : \dfrac{3}{2}} \right\| \boxed{ \dfrac{9}{10} : \dfrac{3}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} - \dfrac{1}{5}} \right\| \boxed{ \dfrac{7}{12} + \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{2} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{15}{28} - \dfrac{5}{28}} $]]
$= \dfrac{5}{14}$





<!--  Bruchrechnung 0166  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 166:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__ $\dfrac{3}{4}$ 
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{5}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{3}{6}} \right\|\boxed{ \dfrac{3}{5} + \dfrac{1}{10}}  $]]
 [->[$\left. \boxed{ =  \dfrac{14}{20}} \right\|\boxed{ \dfrac{7}{8} : \dfrac{7}{12}}  $]]
 [->[$\left. \boxed{ =  \dfrac{9}{6}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
$= \dfrac{2}{3}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__ $\dfrac{2}{5}$ 
 [->[$\left. \boxed{ =  \dfrac{4}{10}} \right\|\boxed{ \dfrac{3}{2} \cdot \dfrac{2}{5}}  $]]
 [->[$\left. \boxed{ =  \dfrac{6}{10}} \right\|\boxed{ \dfrac{9}{4} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{12}{8}} \right\|\boxed{ 1 - \dfrac{1}{3}}  $]]
 [->[$\left. \boxed{ =  \dfrac{4}{6}} \right\|\boxed{ \dfrac{1}{2} + \dfrac{1}{3}}  $]]
$= \dfrac{5}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__ $\dfrac{7}{10}$ 
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{5}} \right\| \boxed{ \dfrac{3}{4} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{2}{4}} \right\|\boxed{ \dfrac{9}{8} : \dfrac{3}{2}}  $]]
 [->[$\left. \boxed{ =  \dfrac{6}{8}} \right\|\boxed{ \dfrac{3}{2} : \dfrac{3}{1}}  $]]
 [->[$\left. \boxed{ =  \dfrac{5}{10}} \right\|\boxed{ \dfrac{1}{2} : \dfrac{2}{1}}  $]]
$= \dfrac{1}{4}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__ $\dfrac{5}{12}$
 [->[$\left. \boxed{ = \dfrac{10}{24}} \right\| \boxed{ \dfrac{3}{2} - \dfrac{5}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{12}} \right\| \boxed{ \dfrac{7}{4} - \dfrac{5}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{22}{24}} \right\| \boxed{ \dfrac{11}{8} : \dfrac{11}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{6}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
$= \dfrac{7}{9}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{9}} \right\| \boxed{ \dfrac{8}{3} : \dfrac{4}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{9}} \right\| \boxed{ \dfrac{3}{5} + \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{51}{60}} \right\| \boxed{ \dfrac{17}{10} : \dfrac{17}{24}} $]]
 [->[$\left. \boxed{ = \dfrac{24}{10}} \right\| \boxed{ \dfrac{5}{6} - \dfrac{5}{12}} $]]
$= \dfrac{5}{12}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__ $\dfrac{2}{7}$
 [->[$\left. \boxed{ = \dfrac{4}{14}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{15}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{10}} \right\| \boxed{ \dfrac{7}{6} - \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{10}{12}} \right\| \boxed{ \dfrac{9}{5} - \dfrac{3}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{8}} \right\| \boxed{ \dfrac{9}{5} : \dfrac{3}{1}} $]]
$= \dfrac{3}{5}$





<!--  Bruchrechnung 0167  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 167:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__  $\dfrac{3}{5}$
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{10}} \right\| \boxed{ \dfrac{12}{7} \cdot \dfrac{7}{18}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{6}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{3}{5} \cdot \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{5} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{6} - \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{16} \cdot \dfrac{4}{3}} \right\| \boxed{ \dfrac{3}{4} : \dfrac{1}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{5} \cdot \dfrac{5}{2}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{1}{6}} $]]
$= \dfrac{5}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{2}{3} \cdot \dfrac{2}{3}} \right\| \boxed{ \dfrac{7}{5} - \dfrac{2}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{8} + \dfrac{3}{8}} \right\| \boxed{ \dfrac{10}{7} : \dfrac{5}{7}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{3} - \dfrac{1}{3}} \right\| \boxed{ \dfrac{9}{8} + \dfrac{3}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} + \dfrac{2}{3}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{2}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{9} : \dfrac{2}{3}} \right\| \boxed{ \dfrac{11}{12} + \dfrac{1}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{9} : \dfrac{2}{3}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{4}} $]]
$= \dfrac{1}{2}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__ $\dfrac{3}{8}$
 [->[$\left. \boxed{ = \dfrac{1}{2} - \dfrac{1}{8}} \right\| \boxed{ \dfrac{3}{4} \cdot \dfrac{3}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{16}} \right\| \boxed{ \dfrac{5}{12} + \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{2} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{5}{8} + \dfrac{5}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{4} + \dfrac{3}{16}} \right\| \boxed{ \dfrac{5}{6} - \dfrac{5}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{12}} \right\| \boxed{ \dfrac{1}{6} + \dfrac{1}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{4}{3} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
$= \dfrac{7}{9}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__ $\dfrac{4}{9}$
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{9}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6} - \dfrac{1}{6}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{4} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{10} : \dfrac{3}{2}} \right\| \boxed{ 1 - \dfrac{1}{8}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{4} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{4} + \dfrac{1}{6}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
$= \dfrac{2}{3}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__ $\dfrac{5}{14}$
 [->[$\left. \boxed{ = \dfrac{3}{7} - \dfrac{1}{14}} \right\| \boxed{ \dfrac{3}{2} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{4}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = 1 + \dfrac{1}{6}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{8}} \right\| \boxed{ \dfrac{3}{5} + \dfrac{3}{10}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{10}} \right\| \boxed{ \dfrac{9}{7} : \dfrac{3}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{7} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{2}{3} - \dfrac{1}{6}} $]]
$= \dfrac{1}{2}$



<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__ $\dfrac{5}{18}$
 [->[$\left. \boxed{ = \dfrac{2}{9} + \dfrac{1}{18}} \right\| \boxed{ \dfrac{7}{6} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{3} + \dfrac{1}{4}} \right\| \boxed{ \dfrac{5}{4} : \dfrac{2}{1}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{4} \cdot \dfrac{1}{2}} \right\| \boxed{ \dfrac{3}{4} + \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{1}{12}} \right\| \boxed{ \dfrac{8}{9} : \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{4}{3} : \dfrac{2}{1}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{3}{1}} $]]
 [->[$\left. \boxed{ = 1 - \dfrac{2}{9}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{2}{9}} $]]
$= \dfrac{13}{18}$







<!--  Bruchrechnung 0168  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 168:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$a)\;\;$__  $\dfrac{2}{3}$
 [->[$\left. \boxed{ = \dfrac{4}{6}} \right\| \boxed{ \dfrac{7}{8} - \dfrac{5}{24}} $]]
 [->[$\left. \boxed{ = \dfrac{16}{24}} \right\| \boxed{ \dfrac{4}{5} \cdot \dfrac{5}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{2}{3} + \dfrac{1}{12}} \right\| \boxed{ \dfrac{9}{10} : \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{5}} \right\| \boxed{ \dfrac{5}{9} + \dfrac{2}{9}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{6} - \dfrac{1}{2}} \right\| \boxed{ \dfrac{5}{12} + \dfrac{11}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2} + \dfrac{1}{6}} \right\| \boxed{ \dfrac{3}{2} : \dfrac{9}{4}} $]]
$= \dfrac{5}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$b)\;\;$__  $\dfrac{3}{7}$
 [->[$\left. \boxed{ = \dfrac{6}{14}} \right\| \boxed{ \dfrac{9}{8} : \dfrac{21}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{24}{32}} \right\| \boxed{ \dfrac{7}{5} - \dfrac{2}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{20}} \right\| \boxed{ \dfrac{3}{4} \cdot \dfrac{2}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{10}} \right\| \boxed{ \dfrac{4}{3} - \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{3}{3}} \right\| \boxed{ 1 - \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{6}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{1}{6}} $]]
$= \dfrac{2}{3}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$c)\;\;$__  $\dfrac{5}{12}$
 [->[$\left. \boxed{ = \dfrac{10}{24}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{6}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{12}} \right\| \boxed{ \dfrac{7}{3} : \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{21}{12} : \dfrac{7}{6}} \right\| \boxed{ \dfrac{2}{5} + \dfrac{3}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{7}{10}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{9}{18}} \right\| \boxed{ \dfrac{2}{3} \cdot \dfrac{3}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{1}{2}} \right\| \boxed{ \dfrac{3}{4} - \dfrac{1}{4}} $]]
$= \dfrac{3}{4}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$d)\;\;$__  $\dfrac{2}{9}$
 [->[$\left. \boxed{ = \dfrac{4}{18}} \right\| \boxed{ \dfrac{7}{6} - \dfrac{5}{18}} $]]
 [->[$\left. \boxed{ = \dfrac{21}{18} - \dfrac{5}{18}} \right\| \boxed{ \dfrac{8}{5} \cdot \dfrac{5}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{40}{60}} \right\| \boxed{ \dfrac{10}{15}} $]]
 [->[$\left. \boxed{ = \dfrac{2}{3}} \right\| \boxed{ \dfrac{1}{3} + \dfrac{1}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{18}} \right\| \boxed{ \dfrac{2}{3} : \dfrac{3}{2}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{12}} \right\| \boxed{ \dfrac{2}{4} + \dfrac{2}{6}} $]]
$= \dfrac{4}{6}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$e)\;\;$__  $\dfrac{7}{8}$
 [->[$\left. \boxed{ = 1 - \dfrac{1}{8}} \right\| \boxed{ \dfrac{3}{2} \cdot \dfrac{7}{12}} $]]
 [->[$\left. \boxed{ = \dfrac{21}{24}} \right\| \boxed{ \dfrac{9}{10} - \dfrac{3}{20}} $]]
 [->[$\left. \boxed{ = \dfrac{15}{20}} \right\| \boxed{ \dfrac{3}{4}} $]]
 [->[$\left. \boxed{ = \dfrac{6}{8}} \right\| \boxed{ \dfrac{5}{6} \cdot \dfrac{9}{10}} $]]
 [->[$\left. \boxed{ = \dfrac{45}{60}} \right\| \boxed{ \dfrac{3}{4} : \dfrac{6}{5}} $]]
 [->[$\left. \boxed{ = \dfrac{15}{20} : \dfrac{6}{5}} \right\| \boxed{ \dfrac{1}{2} + \dfrac{1}{4}} $]]
$= \dfrac{3}{4}$


<!-- data-randomize="true"  
data-solution-button="5"  -->
__$f)\;\;$__  $\dfrac{5}{16}$
 [->[$\left. \boxed{ = \dfrac{10}{32}} \right\| \boxed{ \dfrac{1}{2} - \dfrac{3}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{5}{16}} \right\| \boxed{ \dfrac{3}{8} + \dfrac{7}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{13}{16}} \right\| \boxed{ \dfrac{13}{12} : \dfrac{13}{16}} $]]
 [->[$\left. \boxed{ = \dfrac{16}{12}} \right\| \boxed{ \dfrac{4}{3}} $]]
 [->[$\left. \boxed{ = \dfrac{12}{9}} \right\| \boxed{ \dfrac{2}{3} + \dfrac{2}{9}} $]]
 [->[$\left. \boxed{ = \dfrac{8}{9}} \right\| \boxed{ \dfrac{7}{9} + \dfrac{1}{9}} $]]
$= 1$










<!--  Bruchrechnung 0169  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 169:__ **Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$a)\;\;$__ \
$4 \cdot 4 =$ [[  16 ]] \
 \
$4 \cdot 2 =$ [[  8  ]] \
 \
$4 \cdot 1 =$ [[  4  ]] \
 \
$4 \cdot \dfrac{1}{2} =$ [[  2  ]] \
 \
$4 \cdot \dfrac{1}{4} =$ [[  1  ]] \
 \
$4 \cdot \dfrac{1}{8} =$ [[ 1/2 ]] \
 \
$4 \cdot \dfrac{1}{16} =$ [[ 1/4 ]] \
@Algebrite.check([ 16;8;4;2;1;1/2;1/4 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 \cdot 8 =$ [[  192 ]] \
 \
$24 \cdot 4 =$ [[  96  ]] \
 \
$24 \cdot 2 =$ [[  48  ]] \
 \
$24 \cdot 1 =$ [[  24  ]] \
 \
$24 \cdot \dfrac{1}{2} =$ [[  12  ]] \
 \
$24 \cdot \dfrac{1}{4} =$ [[   6  ]] \
 \
$24 \cdot \dfrac{1}{8} =$ [[  3   ]] \
@Algebrite.check([ 192;96;48;24;12;6;3 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 \cdot \dfrac{1}{81} =$ [[  1/3 ]] \
 \
$27 \cdot \dfrac{1}{27} =$ [[  1   ]] \
 \
$27 \cdot \dfrac{1}{9} =$ [[  3   ]] \
 \
$27 \cdot \dfrac{1}{3} =$ [[  9   ]] \
 \
$27 \cdot 1 =$ [[  27  ]] \
 \
$27 \cdot 3 =$ [[  81  ]] \
 \
$27 \cdot 9 =$ [[ 243  ]] \
@Algebrite.check([ 1/3;1;3;9;27;81;243 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 \cdot 100 =$ [[  1000  ]] \
 \
$10 \cdot 10 =$  [[  100   ]] \
 \
$10 \cdot 1 =$                [[  10    ]] \
 \
$10 \cdot \dfrac{1}{10} =$    [[  1     ]] \
 \
$10 \cdot \dfrac{1}{100} =$   [[  1/10  ]] \
 \
$10 \cdot \dfrac{1}{1000} =$  [[ 1/100  ]] \
 \
$10 \cdot \dfrac{1}{10000} =$ [[ 1/1000 ]] \
@Algebrite.check([ 1000;100;10;1;1/10;1/100;1/1000 ])
</div>

</section>







<!--  Bruchrechnung 0170  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 170:__ **Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$a)\;\;$__ \
$4 : 4 =$ [[  1 ]] \
 \
$4 : 2 =$ [[  2  ]] \
 \
$4 : 1 =$ [[  4  ]] \
 \
$4 : \dfrac{1}{2} =$ [[  8  ]] \
 \
$4 : \dfrac{1}{4} =$ [[  16 ]] \
 \
$4 : \dfrac{1}{8} =$ [[  32 ]] \
 \
$4 : \dfrac{1}{16} =$ [[ 64  ]] \
@Algebrite.check([ 1;2;4;8;16;32;64 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 : 8 =$ [[  3  ]] \
 \
$24 : 4 =$ [[  6  ]] \
 \
$24 : 2 =$ [[  12  ]] \
 \
$24 : 1 =$ [[  24  ]] \
 \
$24 : \dfrac{1}{2} =$ [[  48  ]] \
 \
$24 : \dfrac{1}{4} =$ [[  96  ]] \
 \
$24 : \dfrac{1}{8} =$ [[  192 ]] \
@Algebrite.check([ 3;6;12;24;48;96;192 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 : \dfrac{1}{9} =$ [[  243   ]] \
 \
$27 : \dfrac{1}{3} =$ [[  81   ]] \
 \
$27 : 1 =$ [[  27  ]] \
 \
$27 : 3 =$ [[  9   ]] \
 \
$27 : 9 =$ [[ 3    ]] \
 \
$27 : 27 =$ [[  1   ]] \
 \
$27 : 81 =$ [[ 1/3  ]] \
@Algebrite.check([ 243;81;27;9;3;1;1/3 ])
</div>
<div class="flex-child">

<!-- data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 : 100 =$              [[  1/10  ]] \
 \
$10 : 10 =$               [[  1     ]] \
 \
$10 : 1 =$                [[  10    ]] \
 \
$10 : \dfrac{1}{10} =$    [[  100   ]] \
 \
$10 : \dfrac{1}{100} =$   [[  1000  ]] \
 \
$10 : \dfrac{1}{1000} =$  [[ 10000  ]] \
 \
$10 : \dfrac{1}{10000} =$ [[ 100000 ]] \
@Algebrite.check([ 1/10;1;10;100;1000;10000;100000 ])
</div>

</section>








#### Übungsaufgaben zur Bruchrechnung 171 bis 180











<!--  Bruchrechnung 0171  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 171:__ **Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.




<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $\dfrac{4}{5}$


@circleQuiz(4/5)

</div>
<div class="flex-child">
__$b)\;\;$__ $\dfrac{7}{11}$


@circleQuiz(7/11)

</div>
<div class="flex-child">
__$c)\;\;$__ $\dfrac{13}{15}$


@circleQuiz(13/15)

</div>
<div class="flex-child">
__$d)\;\;$__ $\dfrac{11}{24}$


@circleQuiz(11/24)

</div>
<div class="flex-child">
__$e)\;\;$__ $\dfrac{17}{29}$


@circleQuiz(17/29)

</div>
<div class="flex-child">
__$f)\;\;$__ $\dfrac{7}{32}$


@circleQuiz(7/32)

</div>

</section>



<!--  Bruchrechnung 0172  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 172:__ **Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.




<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $\dfrac{7}{8}$


@circleQuiz(7/8)

</div>
<div class="flex-child">
__$b)\;\;$__ $\dfrac{2}{13}$


@circleQuiz(2/13)

</div>
<div class="flex-child">
__$c)\;\;$__ $\dfrac{4}{17}$


@circleQuiz(4/17)

</div>
<div class="flex-child">
__$d)\;\;$__ $\dfrac{15}{22}$


@circleQuiz(15/22)

</div>
<div class="flex-child">
__$e)\;\;$__ $\dfrac{3}{20}$


@circleQuiz(3/20)

</div>
<div class="flex-child">
__$f)\;\;$__ $\dfrac{8}{19}$


@circleQuiz(8/19)

</div>

</section>



<!--  Bruchrechnung 0173  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 173:__ **Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.




<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $\dfrac{7}{10}$


@rectQuiz(7/10)



</div>
<div class="flex-child">
__$b)\;\;$__ $\dfrac{11}{15}$


@rectQuiz(11/15)


</div>
<div class="flex-child">
__$c)\;\;$__ $\dfrac{17}{24}$

@rectQuiz(17/24)



</div>
<div class="flex-child">
__$d)\;\;$__ $\dfrac{5}{9}$

@rectQuiz(5/9)



</div>
<div class="flex-child">
__$e)\;\;$__ $\dfrac{19}{28}$


@rectQuiz(19/28)


</div>
<div class="flex-child">
__$f)\;\;$__ $\dfrac{7}{45}$


@rectQuiz(7/45)


</div>

</section>



<!--  Bruchrechnung 0174  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 174:__ **Stelle** die passende Teilung der Fläche **ein** und **markiere** den passenden Anteil, sodass der Bruch dargestellt wird.




<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $\dfrac{11}{18}$


@rectQuiz(11/18)


</div>
<div class="flex-child">
__$b)\;\;$__ $\dfrac{23}{42}$

@rectQuiz(23/42)



</div>
<div class="flex-child">
__$c)\;\;$__ $\dfrac{5}{72}$


@rectQuiz(5/72)


</div>
<div class="flex-child">
__$d)\;\;$__ $\dfrac{13}{36}$


@rectQuiz(13/36)


</div>
<div class="flex-child">
__$e)\;\;$__ $\dfrac{9}{70}$


@rectQuiz(9/70)


</div>
<div class="flex-child">
__$f)\;\;$__ $\dfrac{7}{150}$

@rectQuiz(7/150)



</div>

</section>






















<!--  Bruchrechnung noch keine  -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 175:__ **Bestimme** die richtige Reihenfolge der Dominos.


??[](https://www.bildung-bedeutet-freiheit.de/GeoGebra/Dominoes-Demo.html)




