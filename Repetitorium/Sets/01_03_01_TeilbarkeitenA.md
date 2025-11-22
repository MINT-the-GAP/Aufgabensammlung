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







#### Übungsaufgaben zu Teilbarkeiten 1 bis 10




<!-- Teilbarkeit  0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** den Wert der Quersumme **an**.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $z= 20355726$ \
$Q(z) =$ [[ 30 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $z=  94101501$ \
$Q(z) =$ [[ 21 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $z=  34620512$\
$Q(z) =$ [[ 23 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $z=  23500325$\
$Q(z) =$ [[ 20 ]]

</div>
</section>






<!-- Teilbarkeit 0035 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** den Wert der Quersumme **an**.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $z= 34786396$ \
$Q(z) =$ [[ 46 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $z= 78258003$ \
$Q(z) =$ [[ 33 ]]


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $z= 28359015$ \
$Q(z) =$ [[ 33 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $z= 81015806$ \
$Q(z) =$ [[ 29 ]]

</div>
</section>






<!-- Teilbarkeit 0036 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den Wert der Quersumme **an**.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $z= 72650261$ \
$Q(z) =$ [[ 29 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $z= 14062678$ \
$Q(z) =$ [[ 34 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $z= 35800135$ \
$Q(z) =$ [[ 25 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $z= 34789179$ \
$Q(z) =$ [[ 48 ]]

</div>
</section>





<!-- Teilbarkeit 0037 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den Wert der Quersumme **an**.



<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $z= 75946873$ \
$Q(z) =$ [[ 49 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $z= 64838390$ \
$Q(z) =$ [[ 41 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $z= 23758627$ \
$Q(z) =$ [[ 40 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $z= 32950250$ \
$Q(z) =$ [[ 26 ]]

</div>
</section>





<!-- Teilbarkeit 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Kreuze** die zutreffenden Antworten auf die Fragen **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Welche der folgenden Zahlen ist durch $2$ teilbar?

<!-- data-solution-button="5"-->
- [[X]] $952$
- [[ ]] $843$
- [[ ]] $657$
- [[X]] $254$
- [[X]] $380$

</div>
<div class="flex-child">

__$b)\;\;$__ Welche der folgenden Zahlen ist durch $5$ teilbar?

<!-- data-solution-button="5"-->
- [[X]] $325$
- [[ ]] $621$
- [[X]] $840$
- [[ ]] $942$
- [[ ]] $674$

</div>


<div class="flex-child">

__$c)\;\;$__ Welche der folgenden Zahlen ist durch $3$ teilbar?


<!-- data-solution-button="5"-->
- [[ ]] $512$
- [[X]] $360$
- [[X]] $135$
- [[ ]] $784$
- [[X]] $681$

</div>


<div class="flex-child">

__$d)\;\;$__ Welche der folgenden Zahlen ist durch $8$ teilbar?

<!-- data-solution-button="5"-->
- [[ ]] $355$
- [[X]] $464$
- [[ ]] $789$
- [[ ]] $388$
- [[ ]] $639$

</div>


<div class="flex-child">

__$e)\;\;$__ Welche der folgenden Zahlen ist durch $9$ teilbar?

<!-- data-solution-button="5"-->
- [[X]] $504$
- [[ ]] $821$
- [[X]] $927$
- [[ ]] $487$
- [[X]] $1017$

</div>


<div class="flex-child">

__$f)\;\;$__ Welche der folgenden Zahlen ist durch $4$ teilbar?

<!-- data-solution-button="5"-->
- [[ ]] $474$
- [[ ]] $954$
- [[X]] $796$
- [[ ]] $326$
- [[X]] $512$

</div>
</section>










<!-- Teilbarkeit 0029 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $3$ [[ $\mid$ | ($\nmid$) ]] $6436$ \

</div>
<div class="flex-child">
__$b)\;\;$__ $6$ [[ $\mid$ | ($\nmid$) ]] $8431$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $5$ [[ ($\mid$) | $\nmid$ ]] $6505$ \

</div>
<div class="flex-child">
__$d)\;\;$__ $4$ [[ ($\mid$) | $\nmid$ ]] $3120$ \

</div>
<div class="flex-child">
__$e)\;\;$__ $8$ [[ $\mid$ | ($\nmid$) ]] $8744$ \

</div>
<div class="flex-child">
__$f)\;\;$__ $3$ [[ ($\mid$) | $\nmid$ ]] $9093$ 

</div>
</section>








<!-- Teilbarkeit 0030 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $2$ [[ ($\mid$) | $\nmid$ ]] $7613$ \

</div>
<div class="flex-child">
__$b)\;\;$__ $8$ [[ ($\mid$) | $\nmid$ ]] $7896$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $4$ [[ ($\mid$) | $\nmid$ ]] $1364$ \

</div>
<div class="flex-child">
__$d)\;\;$__ $9$ [[ ($\mid$) | $\nmid$ ]] $6795$ \

</div>
<div class="flex-child">
__$e)\;\;$__ $6$ [[ $\mid$ | ($\nmid$) ]] $4630$ \

</div>
<div class="flex-child">
__$f)\;\;$__ $9$ [[ ($\mid$) | $\nmid$ ]] $8658$ 

</div>
</section>








<!-- Teilbarkeit 0031 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $7$ [[ ($\mid$) | $\nmid$ ]] $7399$ \

</div>
<div class="flex-child">
__$b)\;\;$__ $5$ [[ $\mid$ | ($\nmid$) ]] $2046$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $6$ [[ ($\mid$) | $\nmid$ ]] $3408$ \

</div>
<div class="flex-child">
__$d)\;\;$__ $3$ [[ $\mid$ | ($\nmid$) ]] $6410$ \

</div>
<div class="flex-child">
__$e)\;\;$__ $4$ [[ $\mid$ | ($\nmid$) ]] $8211$ \

</div>
<div class="flex-child">
__$f)\;\;$__ $8$ [[ $\mid$ | ($\nmid$) ]] $7924$ 

</div>
</section>







<!-- Teilbarkeit 0032 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $8$ [[ ($\mid$) | $\nmid$ ]] $1416$ \

</div>
<div class="flex-child">
__$b)\;\;$__ $9$ [[ $\mid$ | ($\nmid$) ]] $6707$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $6$ [[ ($\mid$) | $\nmid$ ]] $8424$ \

</div>
<div class="flex-child">
__$d)\;\;$__ $10$ [[ ($\mid$) | $\nmid$ ]] $9200$ \

</div>
<div class="flex-child">
__$e)\;\;$__ $4$ [[ $\mid$ | ($\nmid$) ]] $9846$ \

</div>
<div class="flex-child">
__$f)\;\;$__ $7$ [[ ($\mid$) | $\nmid$ ]] $7098$ 

</div>
</section>








<!-- Teilbarkeit 0033 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $8425$ [[ $\mid$ | ($\nmid$) ]] $5$ \

</div>
<div class="flex-child">
__$b)\;\;$__ $3609$ [[ $\mid$ | ($\nmid$) ]] $9$ \

</div>
<div class="flex-child">
__$c)\;\;$__ $6142$ [[ $\mid$ | ($\nmid$) ]] $2$ \

</div>
<div class="flex-child">
__$d)\;\;$__ $3$ [[ ($\mid$) | $\nmid$ ]] $12$ \

</div>
<div class="flex-child">
__$e)\;\;$__ $4176$ [[ $\mid$ | ($\nmid$) ]] $4$ \

</div>
<div class="flex-child">
__$f)\;\;$__ $2511$ [[ $\mid$ | ($\nmid$) ]] $3$ 

</div>
</section>






#### Übungsaufgaben zu Teilbarkeiten 11 bis 20


<!-- Teilbarkeit 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(24;40) =$ [[  8  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(39;75) =$ [[  13 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(35;85) =$ [[  5  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(63;14) =$ [[  7  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(80;110) =$ [[ 10  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(17;19) =$ [[  1  ]]

</div>

</section>







<!-- Teilbarkeit 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(12;8) =$ [[  4  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(48;56) =$ [[  8  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(77;99) =$ [[  11 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(45;25) =$ [[  5  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(42;63) =$ [[  7  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(100;20) =$ [[  20  ]]

</div>

</section>





<!-- Teilbarkeit 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(24;42) =$ [[  6  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(27;39) =$ [[  3  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(18;81) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(24;81) =$ [[  3  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(35;28) =$ [[  7  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(12;72) =$ [[ 12  ]]

</div>

</section>





<!-- Teilbarkeit 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(39;169) =$ [[ 13  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(45;75) =$ [[  15 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(95;38) =$ [[ 19 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(47;39) =$ [[  1  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(1750;4750) =$ [[ 250 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(420;960) =$ [[ 60  ]]

</div>

</section>




<!-- Teilbarkeit 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 15:__ **Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(28;91) =$ [[  7  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(23;29) =$ [[  1  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(68;51) =$ [[ 17  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(24;60) =$ [[ 12  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(81;27) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(175;325) =$ [[ 25  ]]

</div>

</section>







<!-- Teilbarkeit 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 16:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(12;56) =$ [[  4  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(81;36) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(64;48) =$ [[ 16  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(75;85) =$ [[  5  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{ggT}(102;78) =$ [[  2  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{ggT}(243;256) =$ [[  1  ]]

</div>

</section>






<!-- Teilbarkeit 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 17:__ **Gib** den Wert des Terms **an**.





<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(33;24;81) =$ [[  3  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(45;108;144) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(21;35;63) =$ [[  7  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(32;48;104) =$ [[  8  ]]

</div> 

</section>









<!-- Teilbarkeit 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 18:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(54;81;189) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(85;143;169) =$ [[  13 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(40;72;96) =$ [[  8  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(28;40;54) =$ [[  2  ]]

</div> 

</section>









<!-- Teilbarkeit 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 19:__ **Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{ggT}(35;105;115) =$ [[  5  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(20;64;96) =$ [[  4  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(36;83;144) =$ [[  1  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}(48;144;176) =$ [[  16 ]]

</div> 

</section>


















<!-- Teilbarkeit 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 20:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(4;7) =$ [[ 28  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(9;3) =$ [[  9  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(10;8) =$ [[  40 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(7;9) =$ [[  63 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(15;10) =$ [[ 30  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(11;7) =$ [[ 77  ]]

</div>

</section>







#### Übungsaufgaben zu Teilbarkeiten 21 bis 30





<!-- Teilbarkeit 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 21:__ **Gib** den Wert des Terms **an**.





<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(8;5) =$ [[ 40  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(6;9) =$ [[  18 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(16;6) =$ [[  48 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(12;18) =$ [[  36 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(10;25) =$ [[ 50  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(35;7) =$ [[ 35  ]]

</div>

</section>









<!-- Teilbarkeit 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 22:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(6;5) =$ [[ 30  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(1;17) =$ [[ 17  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(8;3) =$ [[  24 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(13;5) =$ [[ 65  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(20;15) =$ [[  60 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(36;24) =$ [[  72 ]]

</div>

</section>












<!-- Teilbarkeit 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 23:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(16;10) =$ [[ 80  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(12;7) =$ [[  84 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(6;8) =$ [[  24 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(15;12) =$ [[  60 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(13;11) =$ [[ 143 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(32;3) =$ [[  96  ]]

</div>

</section>











<!-- Teilbarkeit 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 24:__ **Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(19;5) =$ [[ 95  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(63;14) =$ [[ 126 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(16;30) =$ [[ 240 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(5;23) =$ [[ 115 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(21;18) =$ [[ 126 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(12;18) =$ [[  36 ]]

</div>

</section>










<!-- Teilbarkeit 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 25:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(18;16) =$ [[ 144 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(15;25) =$ [[ 75  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(14;42) =$ [[ 42  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(28;16) =$ [[ 112 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$e)\;\; \text{kgV}(27;18) =$ [[ 54  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$f)\;\; \text{kgV}(40;100) =$ [[ 200 ]]

</div>

</section>







<!-- Teilbarkeit 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(4;5;6) =$ [[ 60  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(9;2;5) =$ [[ 90  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(9;4;6) =$ [[ 36  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(7;3;11) =$ [[ 231 ]]

</div>

</section>


<!-- Teilbarkeit 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 27:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">


<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(24;5;9) =$ [[ 360 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(12;16;18) =$ [[ 144 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(5;8;6) =$ [[ 120 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(2;7;5) =$ [[ 70  ]]

</div>

</section>



<!-- Teilbarkeit 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ **Gib** den Wert des Terms **an**.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(6;9;8) =$ [[  72  ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(15;25;4) =$ [[  300 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}(4;11;3) =$ [[  132 ]]

</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(11;13;17) =$ [[ 2431 ]]

</div>

</section>




<!-- Teilbarkeit 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/23.png" width="120" height="30">  \
__Aufgabe 29:__ **Gib** den Wert des Terms **an**.


<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(4;6) + \text{ggT}(55;35) =$ [[ 17  ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}\left(6;\text{ggT}(24;33) \right) =$ [[  6  ]]



<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(45;81) \cdot \text{kgV}(8;6) =$ [[ 216 ]]



<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}\left( 72 ; \text{kgV}(9;4) \right) =$ [[ 36  ]]






<!-- Teilbarkeit 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ **Gib** den Wert des Terms **an**.




<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}\left(\text{kgV}(4;6);\text{kgV}(9;4)\right) =$ [[ 72  ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(9;7)-\text{ggT}(24;64) =$ [[ 55  ]]



<!-- data-solution-button="5"-->
$c)\;\; \text{ggT}(44;121) \cdot \text{ggT}(56;104) =$ [[  88 ]]



<!-- data-solution-button="5"-->
$d)\;\; \text{kgV}(5;4)+\text{kgV}(3;7;5) =$ [[ 420 ]]







#### Übungsaufgaben zu Teilbarkeiten 31 bis 40





<!-- Teilbarkeit 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 31:__ **Gib** den Wert des Terms **an**.




<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(15;35):\text{ggT}(42;91) =$ [[  15 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(72;132) \cdot \text{ggT}(105;45) =$ [[  60 ]]



<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}\left(\text{ggT}(14;49);\text{ggT}(256;36)\right) =$ [[ 28  ]]



<!-- data-solution-button="5"-->
$d)\;\; \text{ggT}\left(\text{kgV}(8;6);\text{kgV}(16;12)\right)  =$ [[ 12  ]]










<!-- Teilbarkeit 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 32:__ **Gib** den Wert des Terms **an**.





<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(6;8) + \text{kgV}(5;4) \cdot \text{ggT}(35;63) =$ [[ 164 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(16;12) : \text{ggT}(96;56) - \text{ggT}(15;33) =$ [[  3  ]]



<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}\left(\text{ggT}(45;36);\text{ggT}(24;16)\right) - \text{ggT}(75;100) =$ [[  47 ]]








<!-- Teilbarkeit 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 33:__ **Gib** den Wert des Terms **an**.





<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(12;7) - \text{ggT}(24;144;4) \cdot \text{ggT}(66;121) = $ [[  40 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}\left(3;\text{kgV}(5;7)\right)-\text{ggT}\left(24;\text{ggT}(36;60)\right) =$ [[  93 ]]



<!-- data-solution-button="5"-->
$c)\;\; \text{kgV}\left(\text{ggT}(45;115);\text{ggT}(51;187)\right) - \text{kgV}(7;3) =$ [[  44 ]]









<!-- Teilbarkeit 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 34:__ **Gib** den Wert des Terms **an**.



<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}\left(\text{kgV}(6;7);\text{kgV}(3;5)\right)-\text{kgV}(18;16) =$ [[  66 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(17;19) - \text{ggT}\left(128;\text{ggT}(1024;256)\right) =$ [[ 215 ]]



<!-- data-solution-button="5"-->
$c)\;\; \left(\text{kgV}(24;11) + \text{ggT}(83;91)\right) : \text{ggT}(105;215) =$ [[ 53 ]]








<!-- Teilbarkeit 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 35:__ **Gib** den Wert des Terms **an**.



<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}(4;3):\text{ggT}(25;15) + \text{kgV}(8;6):\text{ggT}(45;55) =$ [[  12 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}(144;20) \cdot \left( \text{ggT}(400;280;32) + \text{ggT}(256;64;786;152) \right) =$ [[ 40  ]]





<!-- Teilbarkeit 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 36:__ **Gib** den Wert des Terms **an**.




<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}\left(4;\text{kgV}\left(3;\text{ggT}\left(36;\text{kgV}\left(4;8\right)\right)\right)\right) =$ [[  12 ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{kgV}(25;15):\text{ggT}(81;93) 25- \text{kgV}\left(\text{ggT}(48;104);\text{ggT}(72;102)\right) =$ [[  1  ]]



<!-- Teilbarkeit 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 27:__ **Gib** den Wert des Terms **an**.



<!-- data-solution-button="5"-->
$a)\;\; \text{kgV}\left(6;\text{ggT}(63;49)\right):\text{ggT}(144;54) 42:18 - \text{kgV}(5;6):\text{ggT}(90;126)  =$ [[  4  ]]



<!-- data-solution-button="5"-->
$b)\;\; \text{ggT}\left(\text{kgV}(8;7);84;105\right) + \text{ggT}\left(\text{kgV}(5;4;6);25\right) \cdot 5 =$ [[ 32  ]]


