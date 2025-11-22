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







#### Übungsaufgaben zur Prozentrechnung 1 bis 10



<!-- data-solution-button="5"-->


<!-- Prozent 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 0,26 =$ [[  26  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,064 =$ [[  6,4  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 2,5 =$ [[  250  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,149 =$ [[  14,9  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 0,0034 =$ [[  0,34  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,9405 =$ [[  94,05  ]]%

</div> 
</section>


<!-- Prozent 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 0,37 =$ [[  37  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 1,12 =$ [[  112  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 0,0649 =$ [[  6,49  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 644,1 =$ [[  64410  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 2,364 =$ [[  236,4  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,00061 =$ [[  0,061  ]]%

</div> 
</section>





<!-- Prozent 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 2,64 =$ [[  264  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,212 =$ [[  21,2  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 0,3658 =$ [[  36,58  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 0,025 =$ [[  2,5  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 0,84 =$ [[  84  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,9 =$ [[  90  ]]%

</div> 
</section>





<!-- Prozent 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 75 \%=$ [[  0,75  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 3,2 \%=$ [[  0,032  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 154,5 \%=$ [[  1,545  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 80 \%=$ [[  0,8  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 641 \%=$ [[  6,41  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,2 \%=$ [[  0,002  ]]

</div> 
</section>







<!-- Prozent 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 23 \%=$ [[  0,23  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,07 \%=$ [[  0,0007  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 102 \%=$ [[  1,02  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 97,3 \%=$ [[  0,973  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 2,87 \%=$ [[   0,0287 ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 42,84 \%=$ [[  0,4284  ]]

</div> 
</section>



<!-- Prozent 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** den Wert des Terms als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ 60 \%=$ [[  0,6  ]]

</div> 
<div class="flex-child">

__$b)\;\;$__ $ 0,9 \%=$ [[  0,009  ]]

</div> 
<div class="flex-child">

__$c)\;\;$__ $ 107 \%=$ [[  1,07  ]]

</div> 
<div class="flex-child">

__$d)\;\;$__ $ 4,7 \%=$ [[  0,047  ]]

</div> 
<div class="flex-child">

__$e)\;\;$__ $ 2064,2 \%=$ [[  20,642  ]]

</div> 
<div class="flex-child">

__$f)\;\;$__ $ 0,017 \%=$ [[  0,00017  ]]

</div> 
</section>



<!-- Prozent 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{2}{5} =$ [[  40  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{1}{20} =$ [[  5  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{17}{100} =$ [[ 17   ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{5}{4} =$ [[  125  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{12}{25} =$ [[  48  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{3}{8} =$ [[  37,5  ]]%

</div> 
</section>


<!-- Prozent 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 8:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{5}{8} =$ [[  62,5  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{9}{4} =$ [[  225  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{1}{500} =$ [[  0,2  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{3}{1000} =$ [[  0,3  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{1349}{10000} =$ [[  13,49  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{8}{5} =$ [[  160  ]]%

</div> 
</section>



<!-- Prozent 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 9:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{7}{8} =$ [[  87,5  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{9}{5} =$ [[  180  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{3}{50} =$ [[  6  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{3}{250} =$ [[  1,2  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{7}{10} =$ [[  70  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{8}{5000} =$ [[  0,16  ]]%

</div> 
</section>


<!-- Prozent 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** den Wert des Terms als Prozentzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $ \dfrac{7}{4} =$ [[  175  ]]%

</div> 
<div class="flex-child">

__$b)\;\;$__ $ \dfrac{3}{10000} =$ [[  0,03  ]]%

</div> 
<div class="flex-child">

__$c)\;\;$__ $ \dfrac{9}{8} =$ [[  112,5  ]]%

</div> 
<div class="flex-child">

__$d)\;\;$__ $ \dfrac{24}{25} =$ [[  96  ]]%

</div> 
<div class="flex-child">

__$e)\;\;$__ $ \dfrac{21}{20} =$ [[  105  ]]%

</div> 
<div class="flex-child">

__$f)\;\;$__ $ \dfrac{15647}{1000} =$ [[  1564,7  ]]%

</div> 
</section>



#### Übungsaufgaben zur Prozentrechnung 11 bis 20


<!-- Prozent 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** den beschriebenen Prozentwert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $20\%$ von $4500\,$€?  \

 [[  900  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $75\%$ von $60\,$€?  \

 [[  45  ]]€

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $110\%$ von $640\,$€?  \

 [[  704  ]]€

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $4\%$ von $500\,$€?  \

 [[  20  ]]€

</div>
</section>


<!-- Prozent 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** den beschriebenen Prozentwert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $80\%$ von $50\,$€?  \

 [[  40  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $125\%$ von $300\,$€?  \

 [[  375  ]]€

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $400\%$ von $125\,$€?  \

 [[  500  ]]€

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $7\%$ von $900\,$€?  \

 [[  63  ]]€

</div>
</section>



<!-- Prozent 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** den beschriebenen Prozentwert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $0,1\%$ von $850\,$€?  \

 [[ 0,85   ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $25\%$ von $460\,$€?  \

 [[  115  ]]€

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $0,5\%$ von $750\,$€?  \

 [[  3,75  ]]€

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $99\%$ von $5000\,$€?  \

 [[  4950  ]]€

</div>
</section>




<!-- Prozent 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** den beschriebenen Prozentwert **an**.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ Wie viel sind $62,5\%$ von $400\,$€?  \

 [[  250  ]]€

</div>
<div class="flex-child">

__$b)\;\;$__ Wie viel sind $0,7\%$ von $1100\,$€?  \

 [[  7,7  ]]€

</div>
<div class="flex-child">

__$c)\;\;$__ Wie viel sind $225\%$ von $360\,$€?  \

 [[  810  ]]€

</div>
<div class="flex-child">

__$d)\;\;$__ Wie viel sind $45\%$ von $6000\,$€?  \

 [[  2700  ]]€

</div>
</section>














<!-- Prozent 9900 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 15:__ **Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.


<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window.randomMath) { window.randomMath = 0 }
  "Neue Aufgabe " + window.randomMath++
</script>

---

<script run-once modify="false">
// @input(`Aufgabe`)
// Zufällige Prozentzahl (10 bis 90 in 10er-Schritten)
const percentage = (Math.floor(Math.random() * 9) + 1) * 10;
// Zufällige Basiszahl (zwischen 50 und 500, in 50er-Schritten)
const base = (Math.floor(Math.random() * 10) + 1) * 50;
// Berechnung des Ergebnisses
const result = Math.round((percentage / 100) * base);

// Auswahl einer Zahl zur Markierung (0 => Prozentsatz, 1 => Basis, 2 => Ergebnis)
const markedNumber = Math.floor(Math.random() * 3);
let problem = ""

if (markedNumber === 0) {
  // Prozentsatz unbekannt
  problem = `[[ ${percentage} ]] % von ${base} = ${result}`;
} else if (markedNumber === 1) {
  // Basis unbekannt
  problem = `${percentage}% von [[ ${base} ]] = ${result}`
} else {
  // Ergebnis unbekannt
  problem = `${percentage}% von ${base} = [[ ${result} ]]`
}

// Lösungsschritte vereinfacht und in einem aligned-Block
let solution = "***************\n\n";

if (markedNumber === 0) {
  // Prozentsatz x ist unbekannt: x% von base = result
  // => x/100 = result/base => x = (result * 100)/base
  const xVal = (result * 100) / base;
  solution += `$$
    \\begin{aligned}
      \\frac{x}{100} &= \\frac{${result}}{${base}} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${base}} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else if (markedNumber === 1) {
  // Basis x ist unbekannt: percentage% von x = result
  // => percentage/100 = result/x => x = (result * 100)/percentage
  const xVal = (result * 100) / percentage;
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{${result}}{x} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${percentage}} \\\\[5mm]
        x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else {
  // Ergebnis x ist unbekannt: percentage% von base = x
  // => percentage/100 = x/base => x = (percentage * base)/100
  const xVal = Math.round((percentage * base) / 100);
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{x}{${base}} \\\\[5mm]
      x&=\\frac{${percentage} \\cdot ${base}}{100} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
}

solution += "***************";

"LIASCRIPT: \n " + problem + "\n" + solution;
</script>









<!-- Prozent 9901 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 16:__ **Bestimme** den Wert der dargestellten Lücke. Klicke danach gerne auf "Neue Aufgabe", um eine weitere Aufgabe zu erhalten.




<script input="submit" output="Aufgabe" default="Neue Aufgabe" modify="false">
  if (!window.randomMath) { window.randomMath = 0 }
  "Neue Aufgabe " + window.randomMath++
</script>

---

<script run-once modify="false">
// @input(`Aufgabe`)
// Zufällige Prozentzahl (10 bis 990 in 2er-Schritten)
const percentage = (Math.floor(Math.random() * 99) + 1) * 2;
// Zufällige Basiszahl (zwischen 50 und 500, in 50er-Schritten)
const base = (Math.floor(Math.random() * 200) + 1) * 50;
// Berechnung des Ergebnisses
const result = Math.round((percentage / 100) * base);

// Auswahl einer Zahl zur Markierung (0 => Prozentsatz, 1 => Basis, 2 => Ergebnis)
const markedNumber = Math.floor(Math.random() * 3);
let problem = ""

if (markedNumber === 0) {
  // Prozentsatz unbekannt
  problem = `[[ ${percentage} ]] % von ${base} = ${result}`;
} else if (markedNumber === 1) {
  // Basis unbekannt
  problem = `${percentage}% von [[ ${base} ]] = ${result}`
} else {
  // Ergebnis unbekannt
  problem = `${percentage}% von ${base} = [[ ${result} ]]`
}

// Lösungsschritte vereinfacht und in einem aligned-Block
let solution = "***************\n\n";

if (markedNumber === 0) {
  // Prozentsatz x ist unbekannt: x% von base = result
  // => x/100 = result/base => x = (result * 100)/base
  const xVal = (result * 100) / base;
  solution += `$$
    \\begin{aligned}
      \\frac{x}{100} &= \\frac{${result}}{${base}} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${base}} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else if (markedNumber === 1) {
  // Basis x ist unbekannt: percentage% von x = result
  // => percentage/100 = result/x => x = (result * 100)/percentage
  const xVal = (result * 100) / percentage;
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{${result}}{x} \\\\[5mm]
      x&=\\frac{${result} \\cdot 100}{${percentage}} \\\\[5mm]
        x&=${xVal}
    \\end{aligned}
    $$\n\n`;
} else {
  // Ergebnis x ist unbekannt: percentage% von base = x
  // => percentage/100 = x/base => x = (percentage * base)/100
  const xVal = Math.round((percentage * base) / 100);
  solution += `$$
    \\begin{aligned}
      \\frac{${percentage}}{100}&=\\frac{x}{${base}} \\\\[5mm]
      x&=\\frac{${percentage} \\cdot ${base}}{100} \\\\[5mm]
      x&=${xVal}
    \\end{aligned}
    $$\n\n`;
}

solution += "***************";

"LIASCRIPT: \n " + problem + "\n" + solution;
</script>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ 


??[](https://www.bildung-bedeutet-freiheit.de/GeoGebra/Downloadbalken.html)



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 18:__ 



??[](https://www.bildung-bedeutet-freiheit.de/GeoGebra/DreisatzL.html)






