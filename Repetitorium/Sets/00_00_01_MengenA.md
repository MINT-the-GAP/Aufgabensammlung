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







#### Übungsaufgaben zu Mengen 1 bis 10





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -4 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ 6 $ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 0,03 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \frac{7}{8} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
</section>


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -\frac{3}{7} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \sqrt{3} $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 13^2 $ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -7 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ 7,23 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ -2 $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \pi $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ 3,\bar{3} $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Wähle** die kleinste Zahlenmenge **aus**, in der die jeweilige Zahl ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \frac{12}{4} $ [[$(\mathbb{N})$|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ 0,0001 $ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ -\sqrt{9} $ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -\sqrt[5]{7} $ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ 41:7 + 57:7 \in$ [[$(\mathbb{N})$|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \sqrt{49}-11,5 \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \dfrac{2}{3}-\dfrac{14}{9}-0,\bar{1} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \dfrac{8}{7}-\pi  \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \dfrac{3}{8} + 1,625 \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ (-5)^3-\sqrt{81} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ \dfrac{7}{3}+\dfrac{8}{7} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ \pi^0-4 \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ \sqrt{2^5-3^2} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \dfrac{\sqrt{8}+\sqrt{18}}{\sqrt{2}} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 0,15-\dfrac{23}{20} \in$ [[$\mathbb{N}$|($\mathbb{Z}$)|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ 1,\bar{4} + 0,\bar{5} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5" -->
__$a)\;\;$__ $ -4^3+(-3)^4 \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$b)\;\;$__ $ \left(\sqrt{7}+\sqrt{11}\right)^2 \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$c)\;\;$__ $ 8-\sqrt{6,25} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5" -->
__$d)\;\;$__ $ -0,45+\sqrt{0,25}+\dfrac{19}{20} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 9:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.




__$a)\;\;$__ $ \mathbb{K} = \{ 15,28,17,34,26,24,14,32,29,22 \} $\

$\min(\mathbb{K}) = $ [[ 14 ]] \
$\max(\mathbb{K}) = $ [[ 34 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 21,24,28,24,26,25,23,24,19,25,27,29,21,22,26 \} $\


$\min(\mathbb{K}) = $ [[ 19 ]] \
$\max(\mathbb{K}) = $ [[ 29 ]] \



__$c)\;\;$__ $ \mathbb{K} = \{ 14,19,16,15,17,15,18,9,19,11,13,17 \} $\


$\min(\mathbb{K}) = $ [[  9 ]] \
$\max(\mathbb{K}) = $ [[ 19 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 83,46,55,64,91,75,61,39,84,55,47 \} $\


$\min(\mathbb{K}) = $ [[ 39 ]] \
$\max(\mathbb{K}) = $ [[ 91 ]] \



__$b)\;\;$__ $ \mathbb{K} = \{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \} $\


$\min(\mathbb{K}) = $ [[ 52 ]] \
$\max(\mathbb{K}) = $ [[ 58 ]] \



__$c)\;\;$__ $ \mathbb{K} = \{ 29,33,28,31,35,24,36,32,28,27,35,34,29,30,35 \} $\


$\min(\mathbb{K}) = $ [[ 24 ]] \
$\max(\mathbb{K}) = $ [[ 36 ]] \



#### Übungsaufgaben zu Mengen 11 bis 20




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 45,39,48,51,37,52,46,50,47,38,43,46,51,39,40 \} $\


$\min(\mathbb{K}) = $ [[ 37 ]] \
$\max(\mathbb{K}) = $ [[ 52 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 34,37,31,32,39,33,34,35,38,32,30,34,39,38,34,33,31 \} $\


$\min(\mathbb{K}) = $ [[ 30 ]] \
$\max(\mathbb{K}) = $ [[ 39 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 64,67,61,58,60,64,66,68,63,64,60,69,64,65,59,67,68,60 \} $\


$\min(\mathbb{K}) = $ [[ 58 ]] \
$\max(\mathbb{K}) = $ [[ 69 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** die obere beziehungsweise untere Schranke der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 15,28,17,34,26,24,14,32,29,22 \} $\


$\inf(\mathbb{K}) = $ [[ 13 ]] \
$\sup(\mathbb{K}) = $ [[ 35 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 21,24,28,24,26,25,23,24,19,25,27,29,21,22,26 \} $\


$\inf(\mathbb{K}) = $ [[ 18 ]] \
$\sup(\mathbb{K}) = $ [[ 30 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 14,19,16,15,17,15,18,9,19,11,13,17 \} $\


$\inf(\mathbb{K}) = $ [[  8 ]] \
$\sup(\mathbb{K}) = $ [[ 20 ]] \



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 83,46,55,64,91,75,61,39,84,55,47 \} $\


$\inf(\mathbb{K}) = $ [[ 38 ]] \
$\sup(\mathbb{K}) = $ [[ 92 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 56,54,55,56,57,55,56,54,53,58,55,56,54,52,56,57 \} $\


$\inf(\mathbb{K}) = $ [[ 51 ]] \
$\sup(\mathbb{K}) = $ [[ 59 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 29,33,28,31,35,24,36,32,28,27,35,34,29,30,35 \} $\


$\inf(\mathbb{K}) = $ [[ 26 ]] \
$\sup(\mathbb{K}) = $ [[ 37 ]] \





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** die kleinste beziehungsweise größte Zahl der gegebenen Zahlenmenge **an**. Es gilt $\mathbb{K} \subset \mathbb{N}$.


__$a)\;\;$__ $ \mathbb{K} = \{ 45,39,48,51,37,52,46,50,47,38,43,46,51,39,40 \} $\


$\inf(\mathbb{K}) = $ [[ 36 ]] \
$\sup(\mathbb{K}) = $ [[ 53 ]] \


__$b)\;\;$__ $ \mathbb{K} = \{ 34,37,31,32,39,33,34,35,38,32,30,34,39,38,34,33,31 \} $\


$\inf(\mathbb{K}) = $ [[ 29 ]] \
$\sup(\mathbb{K}) = $ [[ 40 ]] \


__$c)\;\;$__ $ \mathbb{K} = \{ 64,67,61,58,60,64,66,68,63,64,60,69,64,65,59,67,68,60 \} $\


$\inf(\mathbb{K}) = $ [[ 57 ]] \
$\sup(\mathbb{K}) = $ [[ 70 ]] \





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.
 
__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $  und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,3,4,5,6,8,9}   ]]  
 
__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,2,3,4,5,6,7}   ]] 
 
__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {4,5,7,8,9,10,11}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 16:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.
 
__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,2,3,4,5,6,7,8}   ]]  
 
__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[      {2,3,5,6,8,9}    ]]  
 
__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cup \mathbb{M} =  $ [[   {1,3,4,5,6,7,9}     ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 17:__ 
**Gib** den Durchschnitt der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.


__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $  und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {6}           ]]  


__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {1,2,3,5,7}   ]]  


__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {}            ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 18:__ **Gib** die Vereinigung der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {2,5,8}   ]] 

__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[    {3,6}    ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \cap \mathbb{M} =  $ [[   {3,5,7}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 19:__ 
**Gib** die Differenz der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 1,5,6,9 \} $ und $\mathbb{M} = \{ 3,4,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {3,4,8}   ]]  

__$b)\;\;$__ $  \mathbb{K} = \{ 1,2,3,4,5,6,7 \} $  und $\mathbb{M} = \{ 1,2,3,5,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {}        ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {5,7,9,11}   ]]  

__$d)\;\;$__ $  \mathbb{K} = \{ 5,7,9,11 \} $  und $\mathbb{M} = \{ 4,5,8,10 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{M} \setminus \mathbb{K} =  $ [[   {4,5,8,10}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 20:__ **Gib** die Differenz der beiden gegebenen Mengen $\mathbb{K}$ und $\mathbb{M}$ **an**.

__$a)\;\;$__ $ \mathbb{K} = \{ 2,3,5,6,8 \} $  und $\mathbb{M} = \{ 1,2,4,5,7,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {1,4,7}   ]]   

__$b)\;\;$__ $  \mathbb{K} = \{ 3,6,9 \} $  und $\mathbb{M} = \{ 2,3,5,6,8 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[  {2,5,8}    ]]  

__$c)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{K} \setminus \mathbb{M} =  $ [[   {4,6}     ]] 


__$d)\;\;$__ $  \mathbb{K} = \{ 1,3,5,7,9 \} $  und $\mathbb{M} = \{ 3,4,5,6,7 \} $ 

<!-- data-solution-button="5" -->
$\mathbb{M} \setminus \mathbb{K} =  $ [[   {1,9}     ]]  



#### Übungsaufgaben zu Mengen 21 bis 30


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 21:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,3,5,6,8 \}$, $\mathbb{L} = \{ 3,6,9 \} $  und $\mathbb{K} = \{ 1,3,5,7,9 \}$.

<!-- data-solution-button="5" -->
__$a)\;\;$__  $ \left(\mathbb{K} \setminus \mathbb{M}\right) \cup \mathbb{L} =  $     [[   {1,3,6,7,9}   ]]    


<!-- data-solution-button="5" -->
__$b)\;\;$__    $ \left(\mathbb{K} \cap \mathbb{L} \right) \setminus \mathbb{M} =  $  [[     {9}         ]]    


<!-- data-solution-button="5" -->
__$c)\;\;$__    $\mathbb{K} \cup  \left( \mathbb{L} \setminus \mathbb{M} \right) =  $ [[   {1,3,5,7,9}   ]]  




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 22:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.


<!-- data-solution-button="5" -->
__$a)\;\;$__  $\mathbb{K} \setminus \left( \mathbb{M} \cup \mathbb{L} \right) =  $ [[   {7}         ]]  


<!-- data-solution-button="5" -->
__$b)\;\;$__    $\mathbb{L} \cap \left( \mathbb{K} \cup \mathbb{M} \right) =  $    [[  {1,8,9}      ]]  


<!-- data-solution-button="5" -->
__$c)\;\;$__   $ \left( \mathbb{L} \cap \mathbb{K}  \right) \cup \mathbb{M} =  $   [[ {1,4,7,8,9}   ]]  








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 23:__ **Gib** die resultierende Menge **an**. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.


<!-- data-solution-button="5" -->
__$a)\;\;$__  $  \mathbb{K} \cap \left( \mathbb{M} \setminus \mathbb{L} \right)  =  $       [[   {9}       ]] 


<!-- data-solution-button="5" -->
__$b)\;\;$__ $   \mathbb{K} \setminus \left( \mathbb{M} \setminus  \mathbb{L} \right)  =  $ [[  {2,3,4}    ]] 


<!-- data-solution-button="5" -->
__$c)\;\;$__ $  \left( \mathbb{K} \cap  \mathbb{L} \right) \cap  \mathbb{M} =  $            [[   {2}       ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.

__$a)\;\;$__   $  \text{sup} \left(  \mathbb{K} \cap \mathbb{M}  \right) =  $                                      [[   8   ]] 

__$b)\;\;$__   $  \text{max} \left(  \mathbb{L} \setminus \mathbb{M}  \right) =  $                                 [[  9    ]] 

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $                                      [[   1   ]] 

__$d)\;\;$__   $  \text{min} \left(  \mathbb{M} \setminus \left( \mathbb{L} \cup  \mathbb{K}  \right) \right) =  $ [[   7   ]] 





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 1,4,7,8 \}$, $\mathbb{L} = \{ 1,5,8,9 \} $  und $\mathbb{K} = \{ 2,4,8,9 \}$.

__$a)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cup \mathbb{M}  \right) =  $                                    [[   1   ]] 

__$b)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $                               [[  2    ]] 

__$c)\;\;$__   $  \text{sup}  \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $                                   [[   8   ]] 

__$d)\;\;$__   $  \text{max} \left( \left(  \mathbb{M} \cap \mathbb{K}  \right)  \cap \mathbb{L}  \right) =  $   [[   8   ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ **Bestimme** das resultierende Mengenelement. Gegebenen sind die Mengen $\mathbb{M}= \{ 2,6,7,8,9 \}$, $\mathbb{L} = \{ 1,2,4,6,8 \} $  und $\mathbb{K} = \{ 2,3,4,9 \}$.

__$a)\;\;$__   $  \text{min} \left(  \mathbb{K} \setminus \mathbb{L}  \right) =  $ [[   3   ]] 

__$b)\;\;$__   $  \text{max} \left(  \mathbb{K} \cup \mathbb{M}  \right) =  $ [[   9   ]] 

__$c)\;\;$__   $  \text{inf} \left(  \mathbb{L} \cap \mathbb{M}  \right) =  $ [[   2   ]] 

__$d)\;\;$__   $  \text{sup}  \left( \left(  \mathbb{L} \cup  \mathbb{M} \right)  \cap \mathbb{K}  \right) =  $ [[   9   ]] 




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 26:__ Gegebenen sind die Mengen $\mathbb{M}= \{ 1,2,3,6 \}$, $\mathbb{L} = \{ 4,5,7,9 \} $  und $\mathbb{K} = \{ 3,4,6,8,9 \}$.

<!-- data-solution-button="5" -->
__$a)\;\;$__  **Bestimme** das resultierende Mengenelement. $  \left(  \mathbb{L} \cup \mathbb{K}  \right) \setminus \left(  \mathbb{L} \cap \mathbb{K}  \right)  := \mathbb{L} \Delta \mathbb{K}  = $ [[   {3,5,6,7,8}   ]] 

<!-- data-solution-button="5" -->
__$b)\;\;$__  Im Aufgabenteil $a)$ wurde der Mengenoperator der symmetrischen Differenz $\Delta$ definiert. **Bestimme** das resultierende Mengenelement.  $  \mathbb{M} \Delta \mathbb{K} =  $ [[  {1,2,4,8,9}    ]] 

__$c)\;\;$__  Skizziere $ \mathbb{M} \Delta \mathbb{K} $ über Mengenkreise. 

[[!]]
<script>true</script>
**************************************

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap1/Aufgabe27.png)

**************************************





























































































