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







#### Übungsaufgaben zu Terme und Gleichungen 1 bis 10




<!-- Terme 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 13 \cdot 5 + 14 $ \
$=$ [[ 65 ]] $  + 14 $ \
$=$ [[ 79 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 75 - 7 \cdot 5 + 23  $ \
$=  75 - $ [[ 35 ]] $  + 23 $ \
$=$ [[ 40 ]]  $  + 23 $ \
$=$ [[ 63 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 65 : 13 + 85 : 5   $ \
$=$ $ 65 : 13 +$ [[ 17 ]]  \
$=$ [[  5 ]] $+$ [[ 17 ]]  \
$=$ [[ 22 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 9 \cdot 8 - 12 \cdot 4  $ \
$=$ [[ 72 ]] $ - 12 \cdot 4  $ \
$=$ [[ 72 ]] $-$ [[ 48 ]] \
$=$ [[ 24 ]] 

</div> 
</section>


<!-- Terme 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 72:18 + 26 + 22 $ \
$=$ [[ 4 ]] $ + 26 + 22  $ \
$=$ [[ 30 ]] $ + 22  $ \
$=$ [[ 52 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 5 \cdot 9 + 6 \cdot 7 + 2 $ \
$= $ [[ 45 ]] $ + 6 \cdot 7 + 2$ \
$=$ [[ 45 ]]  $+$ [[ 42 ]] $+ 2$  \
$=$ [[ 87 ]]  $+ 2$  \
$=$ [[ 89 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 34 + 64 + 25 + 21   $ \
$=$ $ 34 + 64 + $ [[ 46 ]]  \
$=$ $ 34 +$ [[ 110 ]]  \
$=$ [[ 144 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 7 \cdot 3 \cdot ( 14 - 2 \cdot 4 ) $ \
$= 7 \cdot 3 \cdot ( 14 -$ [[  8 ]] $) $ \
$= 7 \cdot 3 \cdot$  [[  6 ]]  \
$= 7 \cdot $  [[  18 ]] \
$=$ [[ 126 ]] 

</div> 
</section>


<!-- Terme 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 20 + 2 \cdot 3 \cdot 4 \cdot 5 $ \
$= 20 +$ [[  6  ]] $\cdot 4 \cdot 5 $ \
$= 20 +$ [[ 24  ]] $ \cdot 5 $ \
$= 20 +$ [[ 120 ]]   \
$=$ [[ 140 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 187 - 17 - 31 -25 - 41  $ \
$=$ [[ 160 ]]  $  - 31 -25 - 41 $ \
$=$ [[ 129 ]]  $   -25 - 41 $ \
$=$ [[ 104 ]]  $    - 41 $ \
$=$ [[ 63 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 81 : 3 + 105 : 5 + 6 \cdot 4  $ \
$=$ $ 81 : 3 + 105 : 5 +$ [[ 24 ]]  \
$=$ $ 81 : 3 +$ [[ 21 ]] $+$ [[ 24 ]]  \
$=$ $ 81 : 3 +$ [[ 45 ]]  \
$=$ [[ 27 ]] $+$ [[ 45 ]]  \
$=$ [[ 72 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 11 \cdot 7 - 17 \cdot 3  $ \
$=$ [[ 77 ]] $ - 17 \cdot 3  $ \
$=$ [[ 77 ]] $-$ [[ 51 ]] \
$=$ [[ 26 ]] 

</div> 
</section>

<!-- Terme 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 82 - 5 \cdot 3 - 6 \cdot 4 $ \
$= 82 - $ [[ 15 ]] $ - 6 \cdot 4  $ \
$= [[ 67 ]] $ - 6 \cdot 4  $ \
$= [[ 67 ]] $ - $[[ 24 ]] \
$=$ [[ 43 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 144 - ( 7 \cdot 6 + 17)  $ \
$= 144 - ( $[[ 42 ]]$ + 17)  $ \
$= 144 - $[[ 59 ]]$  \
$=$ [[ 85 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; ( 9 \cdot 5 + 18 ) : 7   $ \
$= ( $[[ 45 ]] $ + 18 ) : 7   $ \
$=  $[[ 63 ]] $  : 7   $ \
$=$ [[ 9 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 13 + 5 \cdot 7 + 108 : 4  $ \
$= 13 +$ [[ 35 ]] $+ 108 : 4  $ \
$= $ [[ 48 ]] $+ 108 : 4  $ \
$= $ [[ 48 ]] $+$ [[ 27 ]] \
$=$ [[ 75 ]] 

</div> 
</section>

<!-- Terme 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; -2 \cdot 7 + 8 \cdot (-3) - 34 $ \
$=$ [[ -14   ]] $ + $ [[ (-24) ]] $ - 34 $ \
$=$ [[ -38   ]] $ - 34 $ \
$=$ [[ -72   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -34-75:5-12 \cdot (-9) $ \
$= -34-75:5-$ [[ (-108) ]]  \
$= -34-$[[ 15    ]]$+$ [[ 108    ]]  \
$= -34+$[[ 93    ]]  \
$=$ [[ 59    ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 85:(-5) + (-4) \cdot (-3) \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + (-4) \cdot (-3) \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + $ [[ 12    ]] $ \cdot (-5) - 44 $ \
$=$ [[ -17   ]] $ + $ [[ (-60) ]] $ - 44 $ \
$=$ [[ -77   ]] $ - 44 $ \
$=$ [[ -121  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; - ( 3 - (-5) \cdot 7 + 23 ) + 54 $ \
$= - ( 3 - $  [[ (-35) ]]  $ + 23 ) + 54 $ \
$= - ( $ [[   -9  ]]  $  ) + 54 $ \
$=$   [[   9  ]]  $  + 54 $ \
$=$ [[  63  ]] 

</div> 
</section>


<!-- Terme 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; - 5 \cdot (-9) - 46 + 11 \cdot (-4) $ \
$= $ [[  45   ]] $ - 46 + 11 \cdot (-4) $ \
$= $ [[  -1   ]] $ + 11 \cdot (-4) $ \
$= $ [[  -1   ]] $ + $ [[ (-44) ]]   \
$=$ [[  -45  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -92 + 7 \cdot (-4) - 144 : (-4) $ \
$= -92 +$ [[ (-28) ]] $ - 144 : (-4) $ \
$= $ [[ -120 ]] $ - 144 : (-4) $ \
$= $ [[ -120 ]] $ -$ [[ (-36) ]]  \
$=$ [[ -84  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; -3 \cdot (-4) \cdot (-2) \cdot (-5) : (-6) $ \
$=$ [[  12  ]] $ \cdot (-2) \cdot (-5) : (-6) $ \
$=$ [[ -24  ]] $ \cdot (-5) : (-6) $ \
$=$ [[ 120  ]] $ : (-6) $ \
$=$ [[ -20 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; -8 \cdot (-7) - 4 \cdot (-3) + 72:(-8) $ \
$=$ [[  56   ]] $- 4 \cdot (-3) + 72:(-8) $ \
$=$ [[  56   ]] $-$ [[ (-12) ]]$ + 72:(-8) $ \
$=$ [[  56   ]] $+$ [[   12  ]]$ + 72:(-8) $ \
$=$ [[  68   ]] $ + 72:(-8) $ \
$=$ [[  68   ]] $ +$  [[  (-9) ]] \
$=$ [[  59   ]] 

</div> 
</section>








<!-- Terme 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 44 - 2 \cdot (13 - 5 \cdot (3 + 2 \cdot (-4)) ) $ \
$= 44 - 2 \cdot (13 - 5 \cdot (3 +$ [[ (-8)  ]] $ ) ) $ \
$= 44 - 2 \cdot (13 - 5 \cdot ($ [[  -5   ]] $ ) ) $ \
$= 44 - 2 \cdot (13 - ($ [[ (-25) ]] $  )) $ \
$= 44 - 2 \cdot $ [[   38  ]] $  $ \
$= 44 - $ [[   76  ]] $  $ \
$=$ [[  -32  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -45 + (-3) \cdot (-8) - 92: (-4) $ \
$= -45 +$ [[   24  ]] $- 92: (-4) $ \
$= -45 +$ [[   24  ]] $-$ [[ (-23) ]]   \
$= -45 +$ [[   47  ]] $ \
$=$ [[   2   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; -4 \cdot (-3) + 5 \cdot (-9) - 74 $ \
$= -4 \cdot (-3) +$ [[ (-45)  ]] $ - 74 $ \
$= -4 \cdot (-3) +$ [[ (-119) ]] \
$=$ [[   12   ]] $+$ [[ (-119) ]] \
$=$ [[ -107   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; -(-56 : (-2)) : (-7) - (-14) $ \
$= -(-56 : (-2)) : (-7) + $ [[ 14   ]] \
$= -($ [[ 28   ]] $) : (-7) + $ [[ 14   ]] \
$= $ [[  4   ]] $  + $ [[ 14   ]] \
$=$ [[ 18   ]] 

</div> 
</section>








<!-- Terme 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; -7 \cdot (-47 + 2 \cdot (-4) \cdot (-6) ) $ \
$= -7 \cdot (-47 + 2 \cdot $ [[  24  ]] $) $ \
$= -7 \cdot (-47 +$ [[  48  ]] $) $ \
$= -7 \cdot $ [[   1  ]]  \
$=$ [[  -7  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -65-(-25)-42+8 \cdot (-6) $ \
$= -65-(-25)-42+ $ [[ (-48) ]] \
$= -65-(-25)-$ [[   90  ]] \
$= -65+$[[   25  ]]$-$ [[   90  ]] \
$= -65-$[[   65  ]] \
$=$ [[  -130 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; -(-45:(-9) - 54:(-6)) \cdot (-2) $ \
$= -($ [[   5   ]] $ - 54:(-6)) \cdot (-2) $ \
$= -($ [[   5   ]] $ + $ [[   9   ]] $) \cdot (-2) $ \
$= -$ [[  14   ]] $ \cdot (-2) $ \
$=$ [[  28   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; -(-6 \cdot (-5) \cdot 4) : (-8) - 13 \cdot 11 $ \
$= -($ [[  30   ]] $\cdot 4) : (-8) - 13 \cdot 11 $ \
$= -($ [[  120  ]] $) : (-8) - 13 \cdot 11 $ \
$= $ [[   15  ]]  $- 13 \cdot 11 $ \
$= $ [[   15  ]]  $-$ [[  143  ]]   \
$=$  [[ -128  ]] 

</div> 
</section>








<!-- Terme 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 1,7 + 0,5 \cdot 0,3 + 1,3 \cdot 0,25 $ \
$= 1,7 +$ [[  0,15   ]] $+ 1,3 \cdot 0,25 $ \
$= 1,7 +$ [[  0,15   ]] $+$ [[  0,325  ]]  \
$= 1,7 +$ [[  0,435  ]]   \
$=$ [[  2,135  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 0,81:0,9 + 5,4:6 + 0,125 \cdot 5 $ \
$=$ [[  0,9  ]] $+ 5,4:6 + 0,125 \cdot 5 $ \
$=$ [[  0,9  ]] $+$ [[  0,9  ]] $+ 0,125 \cdot 5 $ \
$=$ [[  1,8  ]] $+ 0,125 \cdot 5 $ \
$=$ [[  1,8  ]] $+$ [[ 0,625 ]] \
$=$ [[ 2,425 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 9,2 - 0,4 \cdot 1,5 \cdot 0,6 - 0,48:0,6 $ \
$= 9,2 -$ [[  0,6  ]] $\cdot 0,6 - 0,48:0,6 $ \
$= 9,2 -$ [[ 0,36  ]] $- 0,48:0,6 $ \
$= $ [[ 8,84 ]] $- 0,48:0,6 $ \
$= $ [[ 8,84 ]] $-$ [[  0,8  ]] \
$=$ [[ 8,04 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; (0,12 \cdot 0,4) : 0,08 + 6,5 : 1,3  $ \
$= $ [[ 0,048 ]] $ : 0,08 + 6,5 : 1,3  $ \
$= $ [[  0,6   ]] $ + 6,5 : 1,3  $ \
$= $ [[  0,6   ]] $ +$ [[  5   ]] \
$=$ [[ 5,6   ]] 

</div> 
</section>








<!-- Terme 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 1,4 \cdot 6 - 0,4 \cdot 0,7 - 1,69:1,3 $ \
$=$ [[  8,4  ]] $- 0,4 \cdot 0,7 - 1,69:1,3 $ \
$=$ [[  8,4  ]] $-$ [[  0,28 ]] $- 1,69:1,3 $ \
$=$ [[  8,12 ]] $- 1,69:1,3 $ \
$=$ [[  8,12 ]] $-$ [[  1,3  ]] \
$=$ [[ 7,82 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 1,8 \cdot 0,4 + 0,75 \cdot 6,4 - 0,125 \cdot 0,96 $ \
$= 1,8 \cdot 0,4 +$ [[  4,8   ]] $- 0,125 \cdot 0,96 $ \
$= 1,8 \cdot 0,4 +$ [[  4,8   ]] $-$ [[  0,12  ]] \
$= 1,8 \cdot 0,4 +$ [[  4,68  ]] \
$=$ [[  0,72  ]] $+$ [[  4,68  ]] \
$=$ [[  5,4   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; (3,4 - 1,4 \cdot 1,6) \cdot 0,5 + 2,1 \cdot 0,75  $ \
$= (3,4 - $ [[ 2,24  ]] $) \cdot 0,5 + 2,1 \cdot 0,75  $ \
$=$ [[ 1,16  ]] $ \cdot 0,5 + 2,1 \cdot 0,75  $ \
$=$ [[ 0,58  ]] $ + 2,1 \cdot 0,75  $ \
$=$ [[ 0,58  ]] $ + $ [[ 1,575 ]] \
$=$ [[ 2,155 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; (0,056:0,7) \cdot 2,5 + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,08 ]] $ \cdot 2,5 + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,2  ]] $ + (0,42 : 0,6) \cdot 1,5  $ \
$= $ [[ 0,2  ]] $ +$ [[ 0,7  ]] $\cdot 1,5  $ \
$= $ [[ 0,2  ]] $ +$ [[ 1,05 ]]  \
$=$ [[ 1,25 ]] 

</div> 
</section>






#### Übungsaufgaben zu Terme und Gleichungen 11 bis 20



<!-- Terme 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 3,5 \cdot 2,5 - 0,8 \cdot 1,2 - 0,875 \cdot 1,6 $ \
$=$ [[ 8,75 ]] $ - 0,8 \cdot 1,2 - 0,875 \cdot 1,6 $ \
$=$ [[ 8,75 ]] $ - $ [[ 0,96 ]] $ - 0,875 \cdot 1,6 $ \
$=$ [[ 7,79  ]] $ - 0,875 \cdot 1,6 $ \
$=$ [[ 7,79  ]] $ -$ [[ 1,4  ]] \
$=$ [[ 6,39  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 0,25 \cdot 0,8 \cdot 5,2 + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 0,2  ]] $ \cdot 5,2 + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 1,3  ]] $ + 0,6 \cdot 5,5 - 2,75 $ \
$= $ [[ 1,3  ]] $ + $ [[ 3,3  ]] $ - 2,75 $ \
$= $ [[ 4,6  ]] $ - 2,75 $ \
$=$ [[ 1,85 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 9,87-2,3-0,45-0,37-1,87 $ \
$= $ [[ 7,57  ]] $ -0,45-0,37-1,87 $ \
$= $ [[ 7,12  ]] $ -0,37-1,87 $ \
$= $ [[ 6,75  ]] $ -1,87 $ \
$=$ [[ 4,88  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 0,75 \cdot (1,6 - 0,4 \cdot 0,8) + 0,9 \cdot 1,5 $ \
$= 0,75 \cdot (1,6 - $ [[ 0,32  ]] $) + 0,9 \cdot 1,5 $ \
$= 0,75 \cdot $ [[ 1,28  ]] $ + 0,9 \cdot 1,5 $ \
$= $ [[ 0,96  ]] $ + 0,9 \cdot 1,5 $ \
$= $ [[ 0,96  ]] $ + $ [[ 1,35  ]] \
$=$ [[ 2,31  ]] 

</div> 
</section>








<!-- Terme 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; 0,84 : 0,7 + 2,54 + 1,75 \cdot 4,8 $ \
$=$ [[  1,2  ]] $ + 2,54 + 1,75 \cdot 4,8 $ \
$=$ [[ 3,74  ]] $ + 1,75 \cdot 4,8 $ \
$=$ [[ 3,74  ]] $ + $ [[ 8,4   ]] \
$=$ [[ 12,14 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 1,25 \cdot 0,4 \cdot 7,5 + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 0,5  ]] $ \cdot 7,5 + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + 3,4 \cdot 3,5 \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + $ [[ 11,9 ]] $ \cdot 0,1 $ \
$=$ [[ 3,75 ]] $ + $ [[ 1,19 ]]  \
$=$ [[ 4,94 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 9,4 \cdot 0,25 + 1,4 \cdot 0,45 + 0,375 $ \
$= $ [[ 2,3   ]] $ + 1,4 \cdot 0,45 + 0,375 $ \
$= $ [[ 2,3   ]] $ + $ [[ 0,63  ]] $ + 0,375 $ \
$= $ [[ 2,93  ]] $ + 0,375 $ \
$=$  [[ 3,305 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; 1,75 \cdot 2,4 + 5,31 - 2,56 : 16 $ \
$=$ [[  4,2  ]] $ + 5,31 - 2,56 : 16 $ \
$=$ [[  9,51 ]] $ - 2,56 : 16 $ \
$=$ [[  9,51 ]] $ -$ [[  0,16 ]] \
$=$ [[  9,35 ]] 

</div> 
</section>








<!-- Terme 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; - 1,6 \cdot 4,25 - 0,85:0,5 + 1,25 \cdot 0,6 $ \
$= - 1,6 \cdot 4,25 - 0,85:0,5 + $ [[ 0,75   ]]  \
$= - 1,6 \cdot 4,25 - $ [[ 1,7   ]] $ + $ [[ 0,75   ]]  \
$= - 1,6 \cdot 4,25 - $ [[ 0,95  ]]  \
$=$ [[ -6,8  ]] $- $ [[ 0,95 ]]  \
$=$ [[ -7,75 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -0,75 \cdot 5,8 - 0,7 \cdot 2,5 + 1,2 \cdot 0,9 $ \
$=$ [[ -4,35 ]] $ - 0,7 \cdot 2,5 + 1,2 \cdot 0,9 $ \
$=$ [[ -4,35 ]] $ - $ [[  1,75 ]] $ + 1,2 \cdot 0,9 $ \
$=$ [[ -6,1  ]]  $ + 1,2 \cdot 0,9 $ \
$=$ [[ -6,1  ]]  $ + $ [[  1,08 ]] \
$=$ [[ -5,02 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 1,6 \cdot (-0,25) \cdot 2,5 - 6,3 : 70 $ \
$= 1,6 \cdot $ [[ (-0,625) ]] $ - 6,3 : 70 $ \
$= $ [[  -1   ]] $ - 6,3 : 70 $ \
$= $ [[  -1   ]] $ - $ [[   0,09   ]] \
$=$ [[  -1,09   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; -(-0,7 \cdot 0,2):0,25 + 0,8 \cdot (-4,5)  $ \
$= -($[[ -0,14   ]]$):0,25 + 0,8 \cdot (-4,5)  $ \
$=$ [[  0,14   ]]$:0,25 + 0,8 \cdot (-4,5)  $ \
$=$ [[  0,56   ]] $+ 0,8 \cdot (-4,5)  $ \
$=$ [[  0,56   ]] $+ $ [[ (-3,6) ]] \
$=$ [[ -3,04     ]] 

</div> 
</section>








<!-- Terme 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; -(-7,2:(-4)):20 - 0,4 \cdot 0,125 $ \
$= -($ [[  1,8  ]] $):20 - 0,4 \cdot 0,125 $ \
$= $ [[ -1,8  ]] $:20 - 0,4 \cdot 0,125 $ \
$= $ [[ -0,09 ]] $ - 0,4 \cdot 0,125 $ \
$= $ [[ -0,09 ]] $ - $ [[  0,05  ]]  \
$=$ [[ -0,14 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; 0,65:5 - 0,4 \cdot 1,7 - 0,7 : 0,2 $ \
$=$ [[  0,13  ]] $ - 0,4 \cdot 1,7 - 0,7 : 0,2 $ \
$=$ [[  0,13  ]] $ - $ [[  0,68  ]] $ - 0,7 : 0,2 $ \
$=$ [[ -0,55  ]] $ - 0,7 : 0,2 $ \
$=$ [[ -0,55  ]] $ - $ [[  3,5  ]]  \
$=$ [[ -4,05  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; 1,7 \cdot (-0,75) + (-0,85 : 1,7) \cdot (-3,5)   $ \
$=$ [[ -1,275 ]] $ + (-0,85 : 1,7) \cdot (-3,5)   $ \
$=$ [[ -1,275 ]] $ + $ ([[  -0,5  ]]) $ \cdot (-3,5)   \
$=$ [[ -1,275 ]] $ + $ [[  1,75  ]] $  \
$=$ [[  0,475 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; (1,9:(-0,25) - 4,2 \cdot 0,25) \cdot (-1,5) $ \
$= ($ [[  -7,6   ]] $ - 4,2 \cdot 0,25) \cdot (-1,5) $ \
$= ($ [[  -7,6   ]] $ - $ [[  1,05   ]] $) \cdot (-1,5) $ \
$= $ [[ -8,65   ]] $ \cdot (-1,5) $ \
$=$ [[  12,975 ]] 

</div> 
</section>








<!-- Terme 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 15:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\;   -0,8 \cdot (-0,3) - 1,4 \cdot (-0,75) + 2,25$  \
$=$ [[ 0,24 ]] $ - 1,4 \cdot (-0,75) + 2,25 $ \
$=$ [[   0,24  ]] $ - $ [[ (-1,05) ]] $ + 2,25 $ \
$=$ [[   1,29  ]] $ + 2,25 $ \
$=$ [[   3,54  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -0,15 : 0,2 + 0,7 \cdot (-2,1) - 2,3 $ \
$=$ [[  -0,75  ]] $ + 0,7 \cdot (-2,1) - 2,3 $ \
$=$ [[  -0,75  ]] $ + $ [[ (-1,47) ]] $ - 2,3 $ \
$=$ [[  -2,22 ]] $ - 2,3 $ \
$=$ [[ -4,52  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; (1,44 : 0,8 -2,5) \cdot 0,7 - 0,85 $ \
$= ($ [[   1,6  ]]  $ -2,5) \cdot 0,7 - 0,85 $ \
$= $  [[  -0,9  ]]  $  \cdot 0,7 - 0,85 $ \
$= $  [[  -0,63 ]]  $ - 0,85 $ \
$=$   [[  -1,48 ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; (0,12 : (-0,125) - 5,2 \cdot 0,25) : (-0,1) $ \
$=($ [[  -0,96  ]] $ - 5,2 \cdot 0,25) : (-0,1) $ \
$=($ [[  -0,96  ]] $ - $ [[  1,3   ]] $) : (-0,1) $ \
$= $ [[  -2,26  ]] $ : (-0,1) $ \
$=$ [[  -22,6  ]] 

</div> 
</section>








<!-- Terme 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/31.png" width="120" height="30">  \
__Aufgabe 16:__ **Gib** die Werte in den Lücken der Rechnung **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$a)\;\;$__ \
$\;\;\;\; (-0,63:0,9-0,25) : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= ($ [[  -0,7   ]]$-0,25) : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= $ [[  -0,95  ]]$ : (-0,05) + 2,5 \cdot (-6,5)   $ \
$= $ [[  19     ]]$  + 2,5 \cdot (-6,5)   $ \
$= $ [[  19     ]]$  + $[[ (-16,25) ]] \
$=$ [[ 2,75    ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$b)\;\;$__ \
$\;\;\;\; -0,7 : 0,125 + 3,2 \cdot (-0,125) - 2,8 $ \
$=$ [[   -5,6  ]] $ + 3,2 \cdot (-0,125) - 2,8 $ \
$=$ [[   -5,6  ]] $ + $ [[ (-0,4)  ]] $ - 2,8 $ \
$=$ [[   -6    ]] $ - 2,8 $ \
$=$ [[  -8,8   ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$c)\;\;$__ \
$\;\;\;\; -(-2,1 \cdot 0,4 +1,25) : 0,5 - 1,1 $ \
$= -( $ [[  -0,84  ]] $ +1,25) : 0,5 - 1,1 $ \
$= -( $ [[  0,41  ]] $) : 0,5 - 1,1 $ \
$= $ [[ -0,82  ]] $ - 1,1 $ \
$=$ [[ -1,92  ]] 

</div> 
<div class="flex-child">

<!-- data-solution-button="5" data-show-partial-solution -->
__$d)\;\;$__ \
$\;\;\;\; -0,225: (-1,5) + 0,8 \cdot (-4) \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + 0,8 \cdot (-4) \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + $ [[ (-3,2) ]] $ \cdot 0,375 $ \
$=  $ [[  0,15  ]] $ + $ [[ (-1,2) ]]  \
$=$   [[ -1,05  ]] 

</div> 
</section>



