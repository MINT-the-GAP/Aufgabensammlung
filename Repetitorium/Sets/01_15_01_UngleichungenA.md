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







#### Übungsaufgaben zu Ungleichungen 1 bis 10






<!-- Ungleichungen 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.



<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $2x < 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  6  ]]   $\left.   \right\}$
</div>
<div class="flex-child">
__$b)\;\;$__  $x \geq 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
</div>
<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{3} \leq 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  12 ]]   $\left.   \right\}$
</div>
<div class="flex-child">
__$d)\;\;$__  $ x + 14 > 32$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  18 ]]   $\left.   \right\}$
</div>

</section>





<!-- Ungleichungen 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $3x < 21$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  7  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x \geq 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{2} \leq 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  18  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $ x + 9 > 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  11  ]]   $\left.   \right\}$
</div>

</section>




<!-- Ungleichungen 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $4x < 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  5  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x : 5 \geq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  10  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{5} \leq 6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  30  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $ x - 3 > 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  15  ]]   $\left.   \right\}$
</div>
</section>





<!-- Ungleichungen 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $3x < 24$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  8  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x - 6 \leq 10$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  16  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{7} \geq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  14  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $x + 5 > 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  13  ]]   $\left.   \right\}$
</div>

</section>






<!-- Ungleichungen 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $ 2x \leq 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x < $   [[  8  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x + 8 \leq 17$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  9  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{6} \geq 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x > $   [[  42  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $x - 6 > 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  3  ]]   $\left.   \right\}$
</div>


<div class="flex-child">
__$e)\;\;$__  $x + 4 \leq 15$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$f)\;\;$__  $5x < 40$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
</div>

</section>




<!-- Ungleichungen 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $3x < 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  6  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x + 7 \geq 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{4} \leq 6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  24  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $x - 5 > 10$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x > $   [[  15  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$e)\;\;$__  $2x \geq 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x > $   [[  6  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$f)\;\;$__  $\dfrac{x}{9} \geq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x > $   [[  17  ]]   $\left.   \right\}$
</div>

</section>













<!-- Ungleichungen 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $2x + 6 \leq 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
2x + 6 &\leq 20 \quad \left| -6 \right. \\
2x &\leq 14 \quad \left| :2 \right. \\
x &\leq 7
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 4 < 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
3x - 4 &< 14 \quad \left| +4 \right. \\
3x &< 18 \quad \left| :3 \right. \\
x &< 6 \;\;\Rightarrow\;\; x \le 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{4} + 5 \geq 11$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  24  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{4} + 5 &\ge 11 \quad \left| -5 \right. \\
\frac{x}{4} &\ge 6 \quad \left| \cdot 4 \right. \\
x &\ge 24
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5x + 3 > 28$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  6  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
5x + 3 &> 28 \quad \left| -3 \right. \\
5x &> 25 \quad \left| :5 \right. \\
x &> 5 \;\;\Rightarrow\;\; x \ge 6 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{x}{3} + 2 \leq 13$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  33  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{3} + 2 &\le 13 \quad \left| -2 \right. \\
\frac{x}{3} &\le 11 \quad \left| \cdot 3 \right. \\
x &\le 33
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $6x - 6 > 30$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
6x - 6 &> 30 \quad \left| +6 \right. \\
6x &> 36 \quad \left| :6 \right. \\
x &> 6 \;\;\Rightarrow\;\; x \ge 7 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>


</section>



<!-- Ungleichungen 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $3x + 9 \leq 30$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
3x + 9 &\le 30 \quad \left| -9 \right. \\
3x &\le 21 \quad \left| :3 \right. \\
x &\le 7
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{x}{2} + 4 > 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  17  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{2} + 4 &> 12 \quad \left| -4 \right. \\
\frac{x}{2} &> 8 \quad \left| \cdot 2 \right. \\
x &> 16 \;\;\Rightarrow\;\; x \ge 17 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $5x - 5 \geq 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
5x - 5 &\ge 20 \quad \left| +5 \right. \\
5x &\ge 25 \quad \left| :5 \right. \\
x &\ge 5
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{x}{6} + 3 < 10$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  41  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{6} + 3 &< 10 \quad \left| -3 \right. \\
\frac{x}{6} &< 7 \quad \left| \cdot 6 \right. \\
x &< 42 \;\;\Rightarrow\;\; x \le 41 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $4x + 2 \geq 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
4x + 2 &\ge 18 \quad \left| -2 \right. \\
4x &\ge 16 \quad \left| :4 \right. \\
x &\ge 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $6x - 12 < 24$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
6x - 12 &< 24 \quad \left| +12 \right. \\
6x &< 36 \quad \left| :6 \right. \\
x &< 6 \;\;\Rightarrow\;\; x \le 5 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

</section>



<!-- Ungleichungen 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-3x + 9 \geq 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-3x + 9 &\geq 0 \quad \left| -9 \right. \\
-3x &\geq -9 \quad \left| :(-3) \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 7 \leq -1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
2x - 7 &\leq -1 \quad \left| +7 \right. \\
2x &\leq 6 \quad \left| :2 \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-5x - 10 < 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  -3  ]]   $\left.   \right\}$
@Algebrite.check(-3)
******************
$$
\begin{align*}
-5x - 10 &< 5 \quad \left| +10 \right. \\
-5x &< 15 \quad \left| :(-5) \right. \\
x &> -3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $7 - 2x > 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
7 - 2x &> 3 \quad \left| -7 \right. \\
-2x &> -4 \quad \left| :(-2) \right. \\
x &< 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-4x + 2 \geq -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-4x + 2 &\geq -6 \quad \left| -2 \right. \\
-4x &\geq -8 \quad \left| :(-4) \right. \\
x &\leq 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-6x - 12 > 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
-6x - 12 &> 0 \quad \left| +12 \right. \\
-6x &> 12 \quad \left| :(-6) \right. \\
x &< -2
\end{align*}
$$
******************
</div>

</section>



<!-- Ungleichungen 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 4 < -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
-2x + 4 &< -6 \quad \left| -4 \right. \\
-2x &< -10 \quad \left| :(-2) \right. \\
x &> 5
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 12 \geq -3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
3x - 12 &\geq -3 \quad \left| +12 \right. \\
3x &\geq 9 \quad \left| :3 \right. \\
x &\geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-4x - 2 \geq 6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
-4x - 2 &\geq 6 \quad \left| +2 \right. \\
-4x &\geq 8 \quad \left| :(-4) \right. \\
x &\leq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5 - x < 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
5 - x &< 1 \quad \left| -5 \right. \\
-x &< -4 \quad \left| :(-1) \right. \\
x &> 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{x}{-2} + 7 > 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  -8  ]]   $\left.   \right\}$
@Algebrite.check(-8)
******************
$$
\begin{align*}
\frac{x}{-2} + 7 &> 3 \quad \left| -7 \right. \\
\frac{x}{-2} &> -4 \quad \left| \cdot (-2) \right. \\
x &< -8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-6x + 9 \leq -3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-6x + 9 &\leq -3 \quad \left| -9 \right. \\
-6x &\leq -12 \quad \left| :(-6) \right. \\
x &\geq 2
\end{align*}
$$
******************
</div>
</section>






#### Übungsaufgaben zu Ungleichungen 11 bis 20


<!-- Ungleichungen 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 11:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-3x + 7 \leq 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-3x + 7 &\leq 1 \quad \left| -7 \right. \\
-3x &\leq -6 \quad \left| :(-3) \right. \\
x &\geq 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 5 < 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  6  ]]   $\left.   \right\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
2x - 5 &< 9 \quad \left| +5 \right. \\
2x &< 14 \quad \left| :2 \right. \\
x &< 7 \;\;\Rightarrow\;\; x \leq 6 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{-4} + 3 \geq -2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  20  ]]   $\left.   \right\}$
@Algebrite.check(20)
******************
$$
\begin{align*}
\frac{x}{-4} + 3 &\geq -2 \quad \left| -3 \right. \\
\frac{x}{-4} &\geq -5 \quad \left| \cdot (-4) \right. \\
x &\leq 20
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-2x - 8 > 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  -5  ]]   $\left.   \right\}$
@Algebrite.check(-5)
******************
$$
\begin{align*}
-2x - 8 &> 0 \quad \left| +8 \right. \\
-2x &> 8 \quad \left| :(-2) \right. \\
x &< -4 \;\;\Rightarrow\;\; x \leq -5 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $4x + 6 \geq -2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
4x + 6 &\geq -2 \quad \left| -6 \right. \\
4x &\geq -8 \quad \left| :4 \right. \\
x &\geq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{x}{3} - 5 < -1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
\frac{x}{3} - 5 &< -1 \quad \left| +5 \right. \\
\frac{x}{3} &< 4 \quad \left| \cdot 3 \right. \\
x &< 12 \;\;\Rightarrow\;\; x \leq 11 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>




<!-- Ungleichungen 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 12:__ **Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 10 \geq 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-2x + 10 &\geq 4 \quad \left| -10 \right. \\
-2x &\geq -6 \quad \left| :(-2) \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 2 < 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
3x - 2 &< 7 \quad \left| +2 \right. \\
3x &< 9 \quad \left| :3 \right. \\
x &< 3 \;\;\Rightarrow\;\; x \leq 2 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{-5} - 1 \leq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  -15  ]]   $\left.   \right\}$
@Algebrite.check(-15)
******************
$$
\begin{align*}
\frac{x}{-5} - 1 &\leq 2 \quad \left| +1 \right. \\
\frac{x}{-5} &\leq 3 \quad \left| \cdot (-5) \right. \\
x &\geq -15
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-4x - 6 > 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  -3  ]]   $\left.   \right\}$
@Algebrite.check(-3)
******************
$$
\begin{align*}
-4x - 6 &> 2 \quad \left| +6 \right. \\
-4x &> 8 \quad \left| :(-4) \right. \\
x &< -2 \;\;\Rightarrow\;\; x \leq -3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $5x + 4 \geq -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
5x + 4 &\geq -6 \quad \left| -4 \right. \\
5x &\geq -10 \quad \left| :5 \right. \\
x &\geq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{x}{3} + 2 > -4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  -17  ]]   $\left.   \right\}$
@Algebrite.check(-17)
******************
$$
\begin{align*}
\frac{x}{3} + 2 &> -4 \quad \left| -2 \right. \\
\frac{x}{3} &> -6 \quad \left| \cdot 3 \right. \\
x &> -18 \;\;\Rightarrow\;\; x \geq -17 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>









<!-- Ungleichungen 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 13:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 10 \geq 4 - 5x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -4  ]]   $\left.   \right\}$
@Algebrite.check(-4)
******************
$$
\begin{align*}
-2x + 10 &\geq 4 - 5x + 2 \\
-2x + 10 &\geq -5x + 6 \quad \left| +5x \right. \\
3x + 10 &\geq 6 \quad \left| -10 \right. \\
3x &\geq -4 \quad \left| :3 \right. \\
x &\geq -\tfrac{4}{3}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 7 < 2x + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
3x - 7 &< 2x + 5 \quad \left| -2x \right. \\
x - 7 &< 5 \quad \left| +7 \right. \\
x &< 12 \;\;\Rightarrow\;\; x \leq 11 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $4x + 3 > 2x + 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
4x + 3 &> 2x + 9 \quad \left| -2x \right. \\
2x + 3 &> 9 \quad \left| -3 \right. \\
2x &> 6 \quad \left| :2 \right. \\
x &> 3 \;\;\Rightarrow\;\; x \geq 4 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $7 - 2x \leq x + 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
7 - 2x &\leq x + 4 \quad \left| -7 \right. \\
-2x &\leq x - 3 \quad \left| -x \right. \\
-3x &\leq -3 \quad \left| :(-3) \right. \\
x &\geq 1
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $5x - 8 \geq 3x - 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
5x - 8 &\geq 3x - 2 \quad \left| -3x \right. \\
2x - 8 &\geq -2 \quad \left| +8 \right. \\
2x &\geq 6 \quad \left| :2 \right. \\
x &\geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-4x + 5 < 2x - 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-4x + 5 &< 2x - 7 \quad \left| -2x \right. \\
-6x + 5 &< -7 \quad \left| -5 \right. \\
-6x &< -12 \quad \left| :(-6) \right. \\
x &> 2 \;\;\Rightarrow\;\; x \geq 2 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>




<!-- Ungleichungen 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 14:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $2x + 5 > x + 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
2x + 5 &> x + 9 \quad \left| -x \right. \\
x + 5 &> 9 \quad \left| -5 \right. \\
x &> 4 \;\;\Rightarrow\;\; x \geq 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $-3x + 7 \leq 2x - 8$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-3x + 7 &\leq 2x - 8 \quad \left| +3x \right. \\
7 &\leq 5x - 8 \quad \left| +8 \right. \\
15 &\leq 5x \quad \left| :5 \right. \\
3 &\leq x \;\;\Rightarrow\;\; x \geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $4x - 6 < 3x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
4x - 6 &< 3x + 2 \quad \left| -3x \right. \\
x - 6 &< 2 \quad \left| +6 \right. \\
x &< 8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5x + 4 \geq 2x + 16$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
5x + 4 &\geq 2x + 16 \quad \left| -2x \right. \\
3x + 4 &\geq 16 \quad \left| -4 \right. \\
3x &\geq 12 \quad \left| :3 \right. \\
x &\geq 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $7 - 2x > 5x - 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
7 - 2x &> 5x - 14 \quad \left| -5x \right. \\
7 - 7x &> -14 \quad \left| -7 \right. \\
-7x &> -21 \quad \left| :(-7) \right. \\
x &< 3 \;\;\Rightarrow\;\; x \leq 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-4x + 9 \leq 3x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
-4x + 9 &\leq 3x + 2 \quad \left| -3x \right. \\
-7x + 9 &\leq 2 \quad \left| -9 \right. \\
-7x &\leq -7 \quad \left| :(-7) \right. \\
x &\geq 1
\end{align*}
$$
******************
</div>
</section>





<!-- Ungleichungen 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 15:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\dfrac{5}{6}x - 1 > \dfrac{1}{2}x + \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x > $   [[  9/2  ]]   $\left.   \right\}$
@Algebrite.check(9/2)
******************
$$
\begin{align*}
\dfrac{5}{6}x - 1 &> \dfrac{1}{2}x + \dfrac{1}{2} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{3}x - 1 &> \dfrac{1}{2} \quad \left| +1 \right. \\
\dfrac{1}{3}x &> \dfrac{3}{2} \quad \left| \cdot 3 \right. \\
x &> \dfrac{9}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 1 < x + \dfrac{5}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
2x - 1 &< x + \dfrac{5}{2} \quad \left| -x \right. \\
x - 1 &< \dfrac{5}{2} \quad \left| +1 \right. \\
x &< \dfrac{7}{2} \;\;\Rightarrow\;\; x \leq 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-\,\dfrac{3}{2}x + 4 \geq \dfrac{1}{2}x - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  5/2  ]]   $\left.   \right\}$
@Algebrite.check(5/2)
******************
$$
\begin{align*}
-\,\dfrac{3}{2}x + 4 &\geq \dfrac{1}{2}x - 1 \quad \left| -\dfrac{1}{2}x \right. \\
-2x + 4 &\geq -1 \quad \left| -4 \right. \\
-2x &\geq -5 \quad \left| :(-2) \right. \\
x &\leq \dfrac{5}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{2}{3}x - 1 > \dfrac{1}{2}x - \dfrac{1}{4}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
\dfrac{2}{3}x - 1 &> \dfrac{1}{2}x - \dfrac{1}{4} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{6}x - 1 &> -\dfrac{1}{4} \quad \left| +1 \right. \\
\dfrac{1}{6}x &> \dfrac{3}{4} \quad \left| \cdot 6 \right. \\
x &> \dfrac{9}{2} \;\;\Rightarrow\;\; x \geq 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $3x - 4 > 2x + \dfrac{7}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
3x - 4 &> 2x + \dfrac{7}{2} \quad \left| -2x \right. \\
x - 4 &> \dfrac{7}{2} \quad \left| +4 \right. \\
x &> \dfrac{15}{2} \;\;\Rightarrow\;\; x \geq 8 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{1}{2}x + 1 \leq -x + \dfrac{4}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  2/9  ]]   $\left.   \right\}$
@Algebrite.check(2/9)
******************
$$
\begin{align*}
\dfrac{1}{2}x + 1 &\leq -x + \dfrac{4}{3} \quad \left| +x \right. \\
\dfrac{3}{2}x + 1 &\leq \dfrac{4}{3} \quad \left| -1 \right. \\
\dfrac{3}{2}x &\leq \dfrac{1}{3} \quad \left| :\dfrac{3}{2} \right. \\
x &\leq \dfrac{2}{9}
\end{align*}
$$
******************
</div>
</section>





<!-- Ungleichungen 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 16:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\,\dfrac{3}{5}x + 2 \leq \dfrac{1}{5}x + \dfrac{11}{5}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  1/2  ]]   $\left.   \right\}$
@Algebrite.check(1/2)
******************
$$
\begin{align*}
\dfrac{3}{5}x + 2 &\le \dfrac{1}{5}x + \dfrac{11}{5} \quad \left| -\dfrac{1}{5}x \right. \\
\dfrac{2}{5}x + 2 &\le \dfrac{11}{5} \quad \left| -2 \right. \\
\dfrac{2}{5}x &\le \dfrac{1}{5} \quad \left| :\dfrac{2}{5} \right. \\
x &\le \dfrac{1}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\,\dfrac{2}{3}x - \dfrac{5}{3} > \dfrac{1}{6}x + \dfrac{1}{3}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
\dfrac{2}{3}x - \dfrac{5}{3} &> \dfrac{1}{6}x + \dfrac{1}{3} \quad \left| -\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x - \dfrac{5}{3} &> \dfrac{1}{3} \quad \left| +\dfrac{5}{3} \right. \\
\dfrac{1}{2}x &> 2 \quad \left| \cdot 2 \right. \\
x &> 4 \;\;\Rightarrow\;\; x \ge 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-\dfrac{3}{4}x + \dfrac{7}{2} \ge \dfrac{1}{4}x - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  9/2  ]]   $\left.   \right\}$
@Algebrite.check(9/2)
******************
$$
\begin{align*}
-\dfrac{3}{4}x + \dfrac{7}{2} &\ge \dfrac{1}{4}x - 1 \quad \left| +\dfrac{3}{4}x \right. \\
\dfrac{7}{2} &\ge x - 1 \quad \left| +1 \right. \\
\dfrac{9}{2} &\ge x \quad \Rightarrow\; x \le \dfrac{9}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\,5x - \dfrac{7}{2} < 3x + \dfrac{1}{2}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
5x - \dfrac{7}{2} &< 3x + \dfrac{1}{2} \quad \left| -3x \right. \\
2x - \dfrac{7}{2} &< \dfrac{1}{2} \quad \left| +\dfrac{7}{2} \right. \\
2x &< 4 \quad \left| :2 \right. \\
x &< 2 \;\;\Rightarrow\;\; x \le 1 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\, -2x + \dfrac{5}{3} > -\dfrac{1}{3}x + 1 \,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x < $   [[  2/5  ]]   $\left.   \right\}$
@Algebrite.check(2/5)
******************
$$
\begin{align*}
-2x + \dfrac{5}{3} &> -\dfrac{1}{3}x + 1 \quad \left| +\dfrac{1}{3}x \right. \\
-\dfrac{5}{3}x + \dfrac{5}{3} &> 1 \quad \left| -\dfrac{5}{3} \right. \\
-\dfrac{5}{3}x &> -\dfrac{2}{3} \quad \left| :\left(-\dfrac{5}{3}\right) \right. \\
x &< \dfrac{2}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\,\dfrac{1}{2}x + \dfrac{5}{4} \ge -\dfrac{3}{4}x + \dfrac{1}{2}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  0  ]]   $\left.   \right\}$
@Algebrite.check(0)
******************
$$
\begin{align*}
\dfrac{1}{2}x + \dfrac{5}{4} &\ge -\dfrac{3}{4}x + \dfrac{1}{2} \quad \left| +\dfrac{3}{4}x \right. \\
\dfrac{5}{4}x + \dfrac{5}{4} &\ge \dfrac{1}{2} \quad \left| -\dfrac{5}{4} \right. \\
\dfrac{5}{4}x &\ge -\dfrac{3}{4} \quad \left| :\dfrac{5}{4} \right. \\
x &\ge -\dfrac{3}{5} \;\;\Rightarrow\;\; x \ge 0 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>





<!-- Ungleichungen 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 17:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\dfrac{4}{5}x + \dfrac{2}{3} \geq \dfrac{1}{2}x + \dfrac{5}{6}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  5/9  ]]   $\left.   \right\}$
@Algebrite.check(5/9)
******************
$$
\begin{align*}
\dfrac{4}{5}x + \dfrac{2}{3} &\ge \dfrac{1}{2}x + \dfrac{5}{6} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{10}x + \dfrac{2}{3} &\ge \dfrac{5}{6} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{3}{10}x &\ge \dfrac{1}{6} \quad \left| :\dfrac{3}{10} \right. \\
x &\ge \dfrac{5}{9}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{3}{4}x - \dfrac{5}{2} < \dfrac{1}{2}x + 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  13  ]]   $\left.   \right\}$
@Algebrite.check(13)
******************
$$
\begin{align*}
\dfrac{3}{4}x - \dfrac{5}{2} &< \dfrac{1}{2}x + 1 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{4}x - \dfrac{5}{2} &< 1 \quad \left| +\dfrac{5}{2} \right. \\
\dfrac{1}{4}x &< \dfrac{7}{2} \quad \left| \cdot 4 \right. \\
x &< 14 \;\;\Rightarrow\;\; x \le 13 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{2}{3}x + \dfrac{1}{3} > x - \dfrac{4}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
\dfrac{2}{3}x + \dfrac{1}{3} &> x - \dfrac{4}{3} \quad \left| -x \right. \\
-\dfrac{1}{3}x + \dfrac{1}{3} &> -\dfrac{4}{3} \quad \left| -\dfrac{1}{3} \right. \\
-\dfrac{1}{3}x &> -\dfrac{5}{3} \quad \left| :\left(-\dfrac{1}{3}\right) \right. \\
x &< 5 \;\;\Rightarrow\;\; x \le 4 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-\dfrac{3}{2}x - 1 \ge \dfrac{1}{4}x - \dfrac{3}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  2/7  ]]   $\left.   \right\}$
@Algebrite.check(2/7)
******************
$$
\begin{align*}
-\dfrac{3}{2}x - 1 &\ge \dfrac{1}{4}x - \dfrac{3}{2} \quad \left| +\dfrac{3}{2}x \right. \\
-1 &\ge \dfrac{7}{4}x - \dfrac{3}{2} \quad \left| +\dfrac{3}{2} \right. \\
\dfrac{1}{2} &\ge \dfrac{7}{4}x \quad \left| :\dfrac{7}{4} \right. \\
x &\le \dfrac{2}{7}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{1}{3}x + \dfrac{2}{3} > -\dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
\dfrac{1}{3}x + \dfrac{2}{3} &> -\dfrac{1}{6}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x + \dfrac{2}{3} &> -\dfrac{1}{2} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{1}{2}x &> -\dfrac{7}{6} \quad \left| \cdot 2 \right. \\
x &> -\dfrac{7}{3} \;\;\Rightarrow\;\; x \ge -2 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-\dfrac{1}{2}x + \dfrac{1}{3} > \dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  5/4  ]]   $\left.   \right\}$
@Algebrite.check(5/4)
******************
$$
\begin{align*}
-\dfrac{1}{2}x + \dfrac{1}{3} &> \dfrac{1}{6}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{2}x \right. \\
\dfrac{1}{3} &> \dfrac{2}{3}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{2} \right. \\
\dfrac{5}{6} &> \dfrac{2}{3}x \quad \left| :\dfrac{2}{3} \right. \\
\dfrac{5}{4} &> x \quad \Rightarrow\; x < \dfrac{5}{4}
\end{align*}
$$
******************
</div>
</section>




<!-- Ungleichungen 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 18:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\dfrac{1}{3}x + 1 \leq \dfrac{3}{5}x + \dfrac{2}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  5/4  ]]   $\left.   \right\}$
@Algebrite.check(5/4)
******************
$$
\begin{align*}
\dfrac{1}{3}x + 1 &\leq \dfrac{3}{5}x + \dfrac{2}{3} \quad \left| -\dfrac{1}{3}x \right. \\
1 &\leq \left(\dfrac{3}{5}-\dfrac{1}{3}\right)x + \dfrac{2}{3} = \dfrac{4}{15}x + \dfrac{2}{3} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{1}{3} &\leq \dfrac{4}{15}x \quad \left| :\dfrac{4}{15} \right. \\
x &\geq \dfrac{5}{4}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{2}{3}x - \dfrac{5}{3} > \dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
\dfrac{2}{3}x - \dfrac{5}{3} &> \dfrac{1}{6}x - \dfrac{1}{2} \quad \left| -\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x - \dfrac{5}{3} &> -\dfrac{1}{2} \quad \left| +\dfrac{5}{3} \right. \\
\dfrac{1}{2}x &> \dfrac{7}{6} \quad \left| \cdot 2 \right. \\
x &> \dfrac{7}{3} \;\;\Rightarrow\;\; x \ge 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-\dfrac{3}{4}x + 2 \leq \dfrac{1}{2}x - \dfrac{1}{4}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  9/5  ]]   $\left.   \right\}$
@Algebrite.check(9/5)
******************
$$
\begin{align*}
-\dfrac{3}{4}x + 2 &\leq \dfrac{1}{2}x - \dfrac{1}{4} \quad \left| -\dfrac{1}{2}x \right. \\
-\dfrac{5}{4}x + 2 &\leq -\dfrac{1}{4} \quad \left| -2 \right. \\
-\dfrac{5}{4}x &\leq -\dfrac{9}{4} \quad \left| :\left(-\dfrac{5}{4}\right) \right. \\
x &\geq \dfrac{9}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-x + \dfrac{7}{2} < \dfrac{1}{3}x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-x + \dfrac{7}{2} &< \dfrac{1}{3}x + 2 \quad \left| +x \right. \\
\dfrac{7}{2} &< \dfrac{4}{3}x + 2 \quad \left| -2 \right. \\
\dfrac{3}{2} &< \dfrac{4}{3}x \quad \left| :\dfrac{4}{3} \right. \\
x &> \dfrac{9}{8} \;\;\Rightarrow\;\; x \ge 2 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{1}{2}x - 1 \geq \dfrac{3}{4}x - \dfrac{5}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  6  ]]   $\left.   \right\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
\dfrac{1}{2}x - 1 &\geq \dfrac{3}{4}x - \dfrac{5}{2} \quad \left| -\dfrac{1}{2}x \right. \\
-1 &\geq \dfrac{1}{4}x - \dfrac{5}{2} \quad \left| +\dfrac{5}{2} \right. \\
\dfrac{3}{2} &\geq \dfrac{1}{4}x \quad \left| :\dfrac{1}{4} \right. \\
6 &\geq x \;\;\Rightarrow\;\; x \le 6
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-\dfrac{5}{6}x + \dfrac{1}{3} > \dfrac{1}{6}x - \dfrac{2}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  0  ]]   $\left.   \right\}$
@Algebrite.check(0)
******************
$$
\begin{align*}
-\dfrac{5}{6}x + \dfrac{1}{3} &> \dfrac{1}{6}x - \dfrac{2}{3} \quad \left| -\dfrac{1}{6}x \right. \\
- x + \dfrac{1}{3} &> -\dfrac{2}{3} \quad \left| -\dfrac{1}{3} \right. \\
- x &> -1 \quad \left| :(-1) \right. \\
x &< 1 \;\;\Rightarrow\;\; x \le 0 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>




<!-- Ungleichungen 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 19:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-\dfrac{3}{2}(x-4) + 1 > \dfrac{1}{3}(x+5) - 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
-\dfrac{3}{2}(x-4) + 1 &> \dfrac{1}{3}(x+5) - 2 \\
-\dfrac{3}{2}x + 6 + 1 &> \dfrac{1}{3}x + \dfrac{5}{3} - 2 \\
-\dfrac{3}{2}x + 7 &> \dfrac{1}{3}x - \dfrac{1}{3} \quad \left| +\dfrac{3}{2}x \right. \\
7 &> \dfrac{11}{6}x - \dfrac{1}{3} \quad \left| +\dfrac{1}{3} \right. \\
\dfrac{22}{3} &> \dfrac{11}{6}x \quad \left| :\dfrac{11}{6} \right. \\
4 &> x \;\;\Rightarrow\;\; x < 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{5}{4}(x+2) \leq x + \dfrac{9}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
\dfrac{5}{4}(x+2) &\le x + \dfrac{9}{2} \\
\dfrac{5}{4}x + \dfrac{5}{2} &\le x + \dfrac{9}{2} \quad \left| -x \right. \\
\dfrac{1}{4}x + \dfrac{5}{2} &\le \dfrac{9}{2} \quad \left| -\dfrac{5}{2} \right. \\
\dfrac{1}{4}x &\le 2 \quad \left| \cdot 4 \right. \\
x &\le 8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-2\!\left(x-\dfrac{3}{2}\right) + \dfrac{1}{2} \;\ge\; \dfrac{1}{2}(x-1) - 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  14/5  ]]   $\left.   \right\}$
@Algebrite.check(14/5)
******************
$$
\begin{align*}
-2\!\left(x-\dfrac{3}{2}\right) + \dfrac{1}{2} &\ge \dfrac{1}{2}(x-1) - 3 \\
-2x + 3 + \dfrac{1}{2} &\ge \dfrac{1}{2}x - \dfrac{1}{2} - 3 \\
-2x + \dfrac{7}{2} &\ge \dfrac{1}{2}x - \dfrac{7}{2} \quad \left| +2x \right. \\
\dfrac{7}{2} &\ge \dfrac{5}{2}x - \dfrac{7}{2} \quad \left| +\dfrac{7}{2} \right. \\
7 &\ge \dfrac{5}{2}x \quad \left| :\dfrac{5}{2} \right. \\
\dfrac{14}{5} &\ge x \;\;\Rightarrow\;\; x \le \dfrac{14}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{3}{2}(x-4) - \dfrac{1}{3}x \;>\; -\dfrac{1}{6}(2x-3) + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
\dfrac{3}{2}(x-4) - \dfrac{1}{3}x &> -\dfrac{1}{6}(2x-3) + 5 \\
\dfrac{3}{2}x - 6 - \dfrac{1}{3}x &> -\dfrac{1}{3}x + \dfrac{1}{2} + 5 \\
\dfrac{7}{6}x - 6 &> -\dfrac{1}{3}x + \dfrac{11}{2} \quad \left| +\dfrac{1}{3}x \right. \\
\dfrac{3}{2}x - 6 &> \dfrac{11}{2} \quad \left| +6 \right. \\
\dfrac{3}{2}x &> \dfrac{23}{2} \quad \left| :\dfrac{3}{2} \right. \\
x &> \dfrac{23}{3} \;\;\Rightarrow\;\; x \ge 8 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-\,\dfrac{2}{3}(x+6) + \dfrac{5}{3} \;\le\; \dfrac{1}{2}(3x-2) - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  -2/13  ]]   $\left.   \right\}$
@Algebrite.check(-2/13)
******************
$$
\begin{align*}
-\dfrac{2}{3}(x+6) + \dfrac{5}{3} &\le \dfrac{1}{2}(3x-2) - 1 \\
-\dfrac{2}{3}x - 4 + \dfrac{5}{3} &\le \dfrac{3}{2}x - 2 \\
-\dfrac{2}{3}x - \dfrac{7}{3} &\le \dfrac{3}{2}x - 2 \quad \left| +\dfrac{2}{3}x \right. \\
-\dfrac{7}{3} &\le \left(\dfrac{3}{2}+\dfrac{2}{3}\right)x - 2 = \dfrac{13}{6}x - 2 \quad \left| +2 \right. \\
-\dfrac{1}{3} &\le \dfrac{13}{6}x \quad \left| \cdot \dfrac{6}{13} \right. \\
-\dfrac{2}{13} &\le x \;\;\Rightarrow\;\; x \ge -\dfrac{2}{13}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{4}{3}(x-1) \;>\; \dfrac{2}{3}x + \dfrac{1}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
\dfrac{4}{3}(x-1) &> \dfrac{2}{3}x + \dfrac{1}{3} \\
\dfrac{4}{3}x - \dfrac{4}{3} &> \dfrac{2}{3}x + \dfrac{1}{3} \quad \left| -\dfrac{2}{3}x \right. \\
\dfrac{2}{3}x - \dfrac{4}{3} &> \dfrac{1}{3} \quad \left| +\dfrac{4}{3} \right. \\
\dfrac{2}{3}x &> \dfrac{5}{3} \quad \left| \cdot \dfrac{3}{2} \right. \\
x &> \dfrac{5}{2} \;\;\Rightarrow\;\; x \ge 3 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>
</section>




<!-- Ungleichungen 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 20:__ **Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-\dfrac{3}{4}(x-2) + 5 \;\leq\; \dfrac{1}{2}(x+1) + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $ [[ 16/5 ]] $\left. \right\}$
@Algebrite.check(16/5)
******************
$$
\begin{align*}
-\dfrac{3}{4}(x-2) + 5 &\le \dfrac{1}{2}(x+1) + 2 \\
-\dfrac{3}{4}x + \dfrac{3}{2} + 5 &\le \dfrac{1}{2}x + \dfrac{1}{2} + 2 \\
-\dfrac{3}{4}x + \dfrac{13}{2} &\le \dfrac{1}{2}x + \dfrac{5}{2} \quad \left| \; +\dfrac{3}{4}x \; \right. \\
\dfrac{13}{2} &\le \dfrac{5}{4}x + \dfrac{5}{2} \quad \left| \; -\dfrac{5}{2} \; \right. \\
4 &\le \dfrac{5}{4}x \quad \left| \; :\dfrac{5}{4} \; \right. \\
x &\ge \dfrac{16}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{2}{3}(x-6) \;>\; -\dfrac{1}{2}(x-4) + 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $ [[ 7 ]] $\left. \right\}$
@Algebrite.check(7)
******************
$$
\begin{align*}
\dfrac{2}{3}(x-6) &> -\dfrac{1}{2}(x-4) + 1 \\
\dfrac{2}{3}x - 4 &> -\dfrac{1}{2}x + 3 \quad \left| \; +\dfrac{1}{2}x \; \right. \\
\dfrac{7}{6}x - 4 &> 3 \quad \left| \; +4 \; \right. \\
\dfrac{7}{6}x &> 7 \quad \left| \; :\dfrac{7}{6} \; \right. \\
x &> 6 \;\;\Rightarrow\;\; x \ge 7 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-2(x+5) + \dfrac{1}{3}(3x-6) \;\ge\; \dfrac{1}{4}(8-2x) - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $ [[ -26 ]] $\left. \right\}$
@Algebrite.check(-26)
******************
$$
\begin{align*}
-2(x+5) + \dfrac{1}{3}(3x-6) &\ge \dfrac{1}{4}(8-2x) - 1 \\
-2x - 10 + x - 2 &\ge 2 - \dfrac{1}{2}x - 1 \\
-x - 12 &\ge 1 - \dfrac{1}{2}x \quad \left| \; +\dfrac{1}{2}x \; \right. \\
-\dfrac{1}{2}x - 12 &\ge 1 \quad \left| \; +12 \; \right. \\
-\dfrac{1}{2}x &\ge 13 \quad \left| \; :(-\dfrac{1}{2}) \; \right. \\
x &\le -26
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{3}{2}(x-2) - \dfrac{1}{3}(x+3) \;<\; x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $ [[ 20 ]] $\left. \right\}$
@Algebrite.check(20)
******************
$$
\begin{align*}
\dfrac{3}{2}(x-2) - \dfrac{1}{3}(x+3) &< x - \dfrac{1}{2} \\
\dfrac{3}{2}x - 3 - \dfrac{1}{3}x - 1 &< x - \dfrac{1}{2} \\
\dfrac{7}{6}x - 4 &< x - \dfrac{1}{2} \quad \left| \; -x \; \right. \\
-4 &< \left(1-\dfrac{7}{6}\right)x - \dfrac{1}{2} = -\dfrac{1}{6}x - \dfrac{1}{2} \quad \left| \; +\dfrac{1}{2} \; \right. \\
-\dfrac{7}{2} &< -\dfrac{1}{6}x \quad \left| \; \cdot(-6) \; \right. \\
21 &> x \;\;\Rightarrow\;\; x \le 20 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-\dfrac{1}{2}(2x-5) + 3 \;\ge\; \dfrac{3}{4}(x-1) + \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $ [[ 23/7 ]] $\left. \right\}$
@Algebrite.check(23/7)
******************
$$
\begin{align*}
-\dfrac{1}{2}(2x-5) + 3 &\ge \dfrac{3}{4}(x-1) + \dfrac{1}{2} \\
-x + \dfrac{5}{2} + 3 &\ge \dfrac{3}{4}x - \dfrac{3}{4} + \dfrac{1}{2} \\
-x + \dfrac{11}{2} &\ge \dfrac{3}{4}x - \dfrac{1}{4} \quad \left| \; +x \; \right. \\
\dfrac{11}{2} &\ge \dfrac{7}{4}x - \dfrac{1}{4} \quad \left| \; +\dfrac{1}{4} \; \right. \\
\dfrac{23}{4} &\ge \dfrac{7}{4}x \quad \left| \; :\dfrac{7}{4} \; \right. \\
\dfrac{23}{7} &\ge x \;\;\Rightarrow\;\; x \le \dfrac{23}{7}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $4\!\left(x+\dfrac{1}{2}\right) - \dfrac{2}{3}(3x-1) \;>\; -x + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $ [[ 1 ]] $\left. \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
4\!\left(x+\dfrac{1}{2}\right) - \dfrac{2}{3}(3x-1) &> -x + 5 \\
4x + 2 - 2x + \dfrac{2}{3} &> -x + 5 \\
2x + \dfrac{8}{3} &> -x + 5 \quad \left| \; +x \; \right. \\
3x + \dfrac{8}{3} &> 5 \quad \left| \; -\dfrac{8}{3} \; \right. \\
3x &> \dfrac{7}{3} \quad \left| \; :3 \; \right. \\
x &> \dfrac{7}{9} \;\;\Rightarrow\;\; x \ge 1 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>
</section>




#### Übungsaufgaben zu Ungleichungen 21 bis 30



<!-- Ungleichungen 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 21:__ Tarif A kostet 8 € Grundpreis und 3 € je GB. Tarif B kostet 2 € Grundpreis und 5 € je GB.  
**Berechne**, ab welchem Datenvolumen $x$ (in GB) Tarif A nicht teurer als Tarif B ist.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 3 ]] $\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
8 + 3x &\leq 2 + 5x \quad \left|\, -2 \right.
8 -2 + 3x &\leq 2 + 5x \quad \left|\, -3x \right.
8 - 2 &\leq 5x - 3x  \\
6 &\leq 2x \quad \left|\, :2 \right. \\
x &\geq 3
\end{align*}
$$
******************




<!-- Ungleichungen 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 22:__ Für ein Schulfest werden gleich viele Wasser- und Saftflaschen beschafft. Eine Wasserflasche kostet 2 €, eine Saftflasche 6 €.  
**Berechne** die kleinste natürliche Zahl $x$ (Flaschen je Sorte), sodass mindestens 40 € ausgegeben werden.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 5 ]] $\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
2x + 6x &\geq 40 \\
8x &\geq 40 \quad \left|\, :8 \right. \\
x &\geq 5
\end{align*}
$$
******************




<!-- Ungleichungen 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 23:__ Für eine Veranstaltung stehen bereits 12 Stühle bereit. Pro zusätzlich aufgestellter Reihe kommen 5 Stühle hinzu.  
**Berechne** die kleinste natürliche Zahl $x$ (zusätzliche Reihen), sodass insgesamt mindestens 47 Stühle vorhanden sind.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 7 ]] $\}$
@Algebrite.check(7)
******************
$$
\begin{align*}
12 + 5x &\geq 47 \\
5x &\geq 47 - 12 \quad \left|\, -12 \right. \\
5x &\geq 35 \quad \left|\, :5 \right. \\
x &\geq 7
\end{align*}
$$
******************




<!-- Ungleichungen 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 24:__ Für Arbeitsblätter werden bereits 9 Kopien bereitgehalten. Ein zusätzliches Bündel enthält 12 Kopien.  
**Berechne** die kleinste natürliche Zahl $x$ (zusätzliche Bündel), sodass insgesamt mindestens 81 Kopien vorliegen.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 6 ]] $\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
9 + 12x &\geq 81 \\
12x &\geq 81 - 9 \quad \left|\, -9 \right. \\
12x &\geq 72 \quad \left|\, :12 \right. \\
x &\geq 6
\end{align*}
$$
******************





<!-- Ungleichungen 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ Ein Kühlraum hat zu Beginn eine Temperatur von $-6^\circ\mathrm{C}$. Durch Aufheizen steigt die Temperatur pro Stunde um $0,75^\circ\mathrm{C}$.  
**Bestimme** die kleinste natürliche Zahl $x$ (Stunden), sodass die Temperatur mindestens $2^\circ\mathrm{C}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 11 ]] $\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
-6 + \dfrac{3}{4}x &\ge 2 \quad \left| \; +6 \; \right. \\
\dfrac{3}{4}x &\ge 8 \quad \left| \; :\dfrac{3}{4} \; \right. \\
x &\ge \dfrac{32}{3} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 11
\end{align*}
$$
******************


<!-- Ungleichungen 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ Ein Konto weist zu Beginn einen Saldo von $-1200\,\mathrm{€}$ auf. Durch regelmäßige Einzahlungen erhöht sich der Saldo pro Woche um $450\,\mathrm{€}$.  
**Berechne** die Anzahl der Wochen, sodass der Saldo mindestens $300\,\mathrm{€}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{R} \;|\; x \geq $ [[ 10/3 ]] $\}$
@Algebrite.check(10/3)
******************
$$
\begin{align*}
-1200 + 450x &\geq 300 \quad \left| \; +1200 \; \right. \\
450x &\geq 1500 \quad \left| \; :450 \; \right. \\
x &\geq \dfrac{1500}{450} \;=\; \dfrac{30}{9} \;=\; \dfrac{10}{3} \\
\end{align*}
$$
******************


<!-- Ungleichungen 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 27:__ Ein Wassertank enthält anfangs $30\,\mathrm{l}$. Durch ein Leck verliert der Tank pro Minute $\dfrac{7}{4}\,\mathrm{l}$.  
**Berechne** die Anzahl der Minuten, sodass der Inhalt höchstens $20\,\mathrm{l}$ beträgt.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{R} \;|\; x \geq $ [[ 40/7 ]] $\}$
@Algebrite.check(40/7)
******************
$$
\begin{align*}
30 - \dfrac{7}{4}x &\le 20 \quad \left| \; -30 \; \right. \\
-\dfrac{7}{4}x &\le -10 \quad \left| \; \cdot(-1) \; \right. \\
\dfrac{7}{4}x &\ge 10 \quad \left| \; :\dfrac{7}{4} \; \right. \\
x &\ge \dfrac{40}{7} \\[4pt]
\end{align*}
$$
******************


<!-- Ungleichungen 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ Ein Regal fasst maximal $50$ Bücher. Zu Beginn stehen bereits $18$ Bücher darin. Jede neue Lieferung enthält $\dfrac{11}{3}$ Bücher im Durchschnitt (z. B. durch wechselnde Buchmengen pro Paket).  
**Berechne** die Anzahl der Lieferungen $x$, sodass die Kapazität des Regals überschritten wird.

<!-- data-solution-button="5"-->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 9 ]] $\}$
@Algebrite.check(9)
******************
$$
\begin{align*}
18 + \dfrac{11}{3}x &> 50 \quad \left| \; -18 \; \right. \\
\dfrac{11}{3}x &> 32 \quad \left| \; :\dfrac{11}{3} \; \right. \\
x &> \dfrac{96}{11} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 9
\end{align*}
$$
******************




