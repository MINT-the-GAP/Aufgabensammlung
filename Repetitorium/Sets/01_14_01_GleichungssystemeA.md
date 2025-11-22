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







#### Übungsaufgaben zu Gleichungssystemen 1 bis 10





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.



<!-- style="width:600px"  data-solution-button="5"-->
__$a)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1a.png)  
$x=$ [[  1  ]] Streichhölzer \
$y=$ [[  4  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$b)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2a.png)  
$x=$ [[  2  ]] Streichhölzer \
$y=$ [[ 12  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$c)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3a.png)  
$x=$ [[  3  ]] Streichhölzer \
$y=$ [[  5  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$d)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4a.png)  
$x=$ [[  1  ]] Streichhölzer \
$y=$ [[  7  ]] Streichhölzer \
$z=$ [[  2  ]] Streichhölzer






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer, gleiches gilt für die $y$-Schachteln und $z$-Schachteln. Auf jeder Seite des Gleichheitszeichen befindet sich die gleiche Anzahl an Streichhölzern. **Bestimme** bei allen Gleichungssystemen wie viele Streichhölzer sich in den einzelnen $x$-, $y$- und $z$-Schachteln befinden.




<!-- style="width:600px"  data-solution-button="5"-->
__$a)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem1b.png)  
$x=$ [[  2  ]] Streichhölzer \
$y=$ [[  6  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$b)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem2b.png)  
$x=$ [[  2   ]] Streichhölzer \
$y=$ [[  3   ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$c)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem3b.png)  
$x=$ [[  1  ]] Streichhölzer \
$y=$ [[  2  ]] Streichhölzer

<!-- style="width:600px"  data-solution-button="5"-->
__$d)\;\;$__ ![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/streichholzsystem4b.png)  
$x=$ [[  2  ]] Streichhölzer \
$y=$ [[  6  ]] Streichhölzer \
$z=$ [[  4  ]] Streichhölzer











<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** das verwendete Lösungsverfahren **an**.



__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\
II.& \qquad 3x - y = 4 \\ \hline
I.+II.& \qquad (2x+3x) + (y-y) = 11+4 \\
& \qquad 5x = 15 \quad \left| :5 \right. \\
& \qquad x = 3 \\
x \cap I.& \qquad 2\cdot 3 + y = 11 \\
& \qquad 6 + y = 11 \quad \left| -6 \right. \\
& \qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]


__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + 2y = 16 \\  
II.& \qquad x - y = 2  \\  \hline
II. &\qquad x - y = 2 \quad \left| -x \right. \\
&\qquad -y = 2 - x \quad \left| \cdot(-1) \right. \\
&\qquad y = x - 2 \\ \hline
I. \cap II. &\qquad 3x + 2(x-2) = 16 \\
&\qquad 3x + 2x - 4 = 16 \\
&\qquad 5x - 4 = 16 \quad \left| +4 \right. \\
&\qquad 5x = 20 \quad \left| :5 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad y = 4 - 2 = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]


__$c)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x - y = 10 \\  
II.& \qquad 2x + 3y = 12  \\  \hline
I. &\qquad 4x - y = 10 \quad \left| -4x \right. \\
&\qquad -y = 10 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = 4x - 10 \\ \hline
I. \cap II. &\qquad 2x + 3(4x - 10) = 12 \\
&\qquad 2x + 12x - 30 = 12 \\
&\qquad 14x - 30 = 12 \quad \left| +30 \right. \\
&\qquad 14x = 42 \quad \left| :14 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 4\cdot 3 - y = 10 \\
&\qquad 12 - y = 10 \quad \left| -12 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]


__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x \right. \\
II. &\qquad x + 2y = 13 \quad \left| -x \right. \\ \hline
I. &\qquad y = 11 - 2x \\
II. &\qquad 2y = 13 - x \quad \left| :2 \right. \\
II. &\qquad y = \dfrac{13 - x}{2} \\[4pt]
I. \cap II. &\qquad 11 - 2x = \dfrac{13 - x}{2} \\
&\qquad 2(11 - 2x) = 13 - x \\
&\qquad 22 - 4x = 13 - x \quad \left| -13 \right. \\
&\qquad 9 - 4x = -x \quad \left| +4x \right. \\
&\qquad 9 = 3x \quad \left| :3 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 2\cdot 3 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]


__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 4x + 2y = 20 \\  
II.& \qquad 3x + y = 11  \\ \hline
II.& \qquad 3x + y = 11 \quad \left|\cdot 2 \right. \\
& \qquad 6x + 2y = 22 \\ 
I.& \qquad 4x + 2y = 20 \\ \hline
(II.-I.)& \qquad (6x-4x) + (2y-2y) = 22-20 \\
& \qquad 2x = 2 \quad \left| :2 \right. \\
& \qquad x = 1 \\
x \cap II.& \qquad 3\cdot 1 + y = 11 \\
& \qquad 3 + y = 11 \quad \left| -3 \right. \\
& \qquad y = 8
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]


__$f)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x - y = 2 \quad \left| -3x \right. \\
II.&\qquad x + 2y = 17 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 2 - 3x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 3x - 2 \\
II.&\qquad 2y = 17 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{17 - x}{2} \\ 
I. \cap II. &\qquad 3x - 2 = \dfrac{17 - x}{2} \\
&\qquad 2(3x - 2) = 17 - x \\
&\qquad 6x - 4 = 17 - x \quad \left| +x \right. \\
&\qquad 7x - 4 = 17 \quad \left| +4 \right. \\
&\qquad 7x = 21 \quad \left| :7 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 3\cdot 3 - y = 2 \\
&\qquad 9 - y = 2 \quad \left| -9 \right. \\
&\qquad -y = -7 \quad \left| \cdot(-1) \right. \\
&\qquad y = 7
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]














<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** das verwendete Lösungsverfahren **an**.





__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + y = 16 \\  
II.& \qquad x + 4y = 9   \\ \hline
I. &\qquad 3x + y = 16 \quad \left| -3x \right. \\
&\qquad y = 16 - 3x \\ \hline
I. \cap II. &\qquad x + 4(16 - 3x) = 9 \\
&\qquad x + 64 - 12x = 9 \\
&\qquad -11x + 64 = 9 \quad \left| -64 \right. \\
&\qquad -11x = -55 \quad \left| :(-11) \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 + y = 16 \\
&\qquad 15 + y = 16 \quad \left| -15 \right. \\
&\qquad y = 1
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]


__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 5x + 2y = 19 \\
II.& \qquad 2x + 3y = 17 \\ \hline
I.& \qquad 5x + 2y = 19 \quad \left|\cdot 3 \right. \\
& \qquad 15x + 6y = 57 \\
II.& \qquad 2x + 3y = 17 \quad \left|\cdot 2 \right. \\
& \qquad 4x + 6y = 34 \\ \hline
(I.-II.)& \qquad (15x-4x) + (6y-6y) = 57-34 \\
& \qquad 11x = 23 \quad \left| :11 \right. \\
& \qquad x = 2 \\
x \cap II.& \qquad 2\cdot 2 + 3y = 17 \\
& \qquad 4 + 3y = 17 \quad \left| -4 \right. \\
& \qquad 3y = 13 \quad \left| :3 \right. \\
& \qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]


__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 5x + 2y = 26 \quad \left| -5x \right. \\
II.&\qquad 3x - y = 9 \quad \left| -3x \right. \\ \hline
I. &\qquad 2y = 26 - 5x \quad \left| :2 \right. \\
I. &\qquad y = \dfrac{26 - 5x}{2} \\
II.&\qquad -y = 9 - 3x \quad \left| \cdot(-1) \right. \\
II.&\qquad y = 3x - 9 \\[4pt]
I. \cap II. &\qquad \dfrac{26 - 5x}{2} = 3x - 9 \\
&\qquad 26 - 5x = 6x - 18 \\
&\qquad 26 + 18 = 6x + 5x \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad 3\cdot 4 - y = 9 \\
&\qquad 12 - y = 9 \quad \left| -12 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]


__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + y = 11 \quad \left| -3x \right. \\
II.&\qquad 2x + 3y = 19 \quad \left| -2x \right. \\ \hline
I. &\qquad y = 11 - 3x \\
II.&\qquad 3y = 19 - 2x \quad \left| :3 \right. \\
II.&\qquad y = \dfrac{19 - 2x}{3} \\[4pt]
I. \cap II. &\qquad 11 - 3x = \dfrac{19 - 2x}{3} \\
&\qquad 3(11 - 3x) = 19 - 2x \\
&\qquad 33 - 9x = 19 - 2x \quad \left| -19 \right. \\
&\qquad 14 - 9x = -2x \quad \left| +9x \right. \\
&\qquad 14 = 7x \quad \left| :7 \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 3\cdot 2 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]


__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 10 \\  
II.& \qquad x + 3y = 15   \\ \hline
II. &\qquad x + 3y = 15 \quad \left| -3y \right. \\
&\qquad x = 15 - 3y \\ \hline
I. \cap II. &\qquad 2(15 - 3y) + y = 10 \\
&\qquad 30 - 6y + y = 10 \\
&\qquad -5y = -20 \quad \left| :(-5) \right. \\
&\qquad y = 4 \\
y \cap II. &\qquad x + 3\cdot 4 = 15 \\
&\qquad x + 12 = 15 \quad \left| -12 \right. \\
&\qquad x = 3
\end{align*}
$$

<!-- data-solution-button="2"-->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]


__$f)\;\;$__ 
$$
\begin{align*}
I.& \qquad x + 4y = 22 \quad \left|\cdot 2 \right. \\
& \qquad 2x + 8y = 44 \\
II.& \qquad 2x + 3y = 19 \\ \hline
(I.-II.)& \qquad (2x-2x) + (8y-3y) = 44-19 \\
& \qquad 5y = 25 \quad \left| :5 \right. \\
& \qquad y = 5 \\
y \cap I.& \qquad x + 4\cdot 5 = 22 \\
& \qquad x + 20 = 22 \quad \left| -20 \right. \\
& \qquad x = 2
\end{align*}
$$

<!-- data-solution-button="2"-->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]











<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 5:__ **Fülle** alle Lücken des Lückentextes **aus**, der die präsentierte Musterlösung zum gegebenen Gleichungssystem beschreibt.





__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x - y = 13 \\  
II.& \qquad x + 4y = 13  \\ \hline
I. &\qquad 3x - y = 13 \quad \left| -3x \right. \\
&\qquad -y = 13 - 3x \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x - 13 \\ \hline
I. \cap II. &\qquad x + 4(3x - 13) = 13 \\
&\qquad x + 12x - 52 = 13 \\
&\qquad 13x - 52 = 13 \quad \left| +52 \right. \\
&\qquad 13x = 65 \quad \left| :13 \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 - y = 13 \\
&\qquad 15 - y = 13 \quad \left| -15 \right. \\
&\qquad -y = -2 \quad \left| \cdot(-1) \right. \\
&\qquad y = 2
\end{align*}
$$

<!-- data-solution-button="5" data-show-partial-solution -->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[    Einsetzungsverfahren    ]] angewendet.  
Zunächst wird eine der beiden [[   Gleichungen   ]] gewählt, hier die erste, und nach [[  y  ]] umgestellt.  
Aus $3x - y = 13$ folgt durch Umformen, dass $y = 3x - 13$. Diesen Ausdruck setzen wir in die zweite [[  Gleichung  ]] ein.  
Dadurch entsteht $x + 4(3x - 13) =$ [[  13  ]]. Nach dem [[  Ausmultiplizieren  ]] der Klammern ergibt sich $x + 12x - 52 = 13$, was sich zu $13x - 52 = 13$ zusammenfassen lässt. Wird $52$ auf beiden Seiten [[ addiert ]], so folgt $13x = 65$. Abschließend muss durch $13$ dividiert werden. Zum Schluss wird $x=5$ in die [[  erste  ]] Gleichung [[  eingesetzt ]], sodass $y = 2$ resultiert.  



__$b)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + 2y = 17 \\
II. &\qquad 5x - y = 11 \\ \hline
II. &\qquad 5x - y = 11 \quad \left| \cdot 2 \right. \\
II.\cdot 2 &\qquad 10x - 2y = 22 \\
I. &\qquad 3x + 2y = 17 \\ \hline
I. + (II.\cdot 2)\, &\qquad (3x+10x) + (2y-2y) = 17 + 22 \\
&\qquad 13x = 39 \quad \left| :13 \right. \\
&\qquad x = 3 \\
x \cap II.\, &\qquad 5\cdot 3 - y = 11 \\
&\qquad 15 - y = 11 \quad \left| -15 \right. \\
&\qquad -y = -4 \quad \left| \cdot(-1) \right. \\
&\qquad y = 4
\end{align*}
$$

<!-- data-solution-button="5" data-show-partial-solution -->
Um das [[   Gleichungssystem   ]] zu lösen, wird das [[   Additionsverfahren   ]] angewendet.
Dazu wird zunächst die [[   zweite   ]] Gleichung so umgeformt, dass die Variable $y$ in beiden Gleichungen mit entgegengesetzten [[ Vorzeichen ]] auftritt.
Deshalb wird  die zweite Gleichung mit [[  2  ]] multiplizieren und es ergibt sich $10x - 2y = 22$.
Nun können wir diese Gleichung mit der [[   ersten   ]] addieren. Dabei fällt die Variable [[  y  ]] weg und es bleibt $13x = 39$.
Wird nun durch [[   13   ]] geteilt, so ergibt sich $x = 3$.
Dieser Wert wird anschließend in die [[   zweite   ]] Gleichung eingesetzt: $5\cdot 3 - y = 11$.
Nach dem Umformen folgt $15 - y = 11$, und nach Subtraktion von [[ 15 ]] ergibt sich $-y = -4$.
Durch Multiplikation mit [[ -1 ]] ergibt sich schließlich $y = 4$.



__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 4x - y = 13 \quad \left| -4x \right. \\
II.&\qquad x + 2y = 10 \quad \left| -x \right. \\ \hline
I. &\qquad -y = 13 - 4x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 4x - 13 \\
II.&\qquad 2y = 10 - x \quad \left| :2 \right. \\
II.&\qquad y = \dfrac{10 - x}{2} \\[4pt]
I. \cap II. &\qquad 4x - 13 = \dfrac{10 - x}{2} \\
&\qquad 2(4x - 13) = 10 - x \\
&\qquad 8x - 26 = 10 - x \quad \left| +x \right. \\
&\qquad 9x - 26 = 10 \quad \left| +26 \right. \\
&\qquad 9x = 36 \quad \left| :9 \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 4\cdot 4 - y = 13 \\
&\qquad 16 - y = 13 \quad \left| -16 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$


<!-- data-solution-button="5" data-show-partial-solution -->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Gleichsetzungsverfahren   ]] angewendet.
Zunächst wird die [[   erste   ]] Gleichung nach $y$ aufgelöst und es ergibt sich $y = 4x - 13$.
Anschließend wird die [[   zweite   ]] Gleichung ebenfalls nach $y$ umgeformt, sodass $y = \dfrac{10 - x}{2}$ resultiert.
Beide Terme für [[  y  ]] werden nun [[   gleichgesetzt   ]], wodurch $4x - 13 = \dfrac{10 - x}{2}$ entsteht.
Nach dem [[   Ausmultiplizieren   ]] folgt $8x - 26 = 10 - x$.
Durch [[  Addition  ]] von [[  x  ]] auf beiden Seiten ergibt sich $9x - 26 = 10$.
Nach Addition von [[  26  ]] resultiert $9x = 36$.
Durch [[  Division  ]] mit $9$ folgt $x = 4$.
Der Wert für $x$ wird schließlich in die [[  erste  ]] Gleichung [[  eingesetzt  ]], sodass $y = 3$ bestimmt wird.
















<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 6:__ **Fülle** alle Lücken des Lückentextes **aus**, der die präsentierte Musterlösung zum gegebenen Gleichungssystem beschreibt.




__$a)\;\;$__ 
$$
\begin{align*}
I. &\qquad 5x + y = 22 \quad \left| -5x \right. \\
II.&\qquad 2x - y = -1 \quad \left| -2x \right. \\ \hline
I. &\qquad y = 22 - 5x \\
II.&\qquad -y = -1 - 2x \quad \left| \cdot(-1) \right. \\
II.&\qquad y = 2x + 1 \\[4pt]
I. \cap II. &\qquad 22 - 5x = 2x + 1 \\
&\qquad 22 - 1 = 2x + 5x \\
&\qquad 21 = 7x \quad \left| :7 \right. \\
&\qquad x = 3 \\
x \cap I. &\qquad 5\cdot 3 + y = 22 \\
&\qquad 15 + y = 22 \quad \left| -15 \right. \\
&\qquad y = 7
\end{align*}
$$

<!-- data-solution-button="5" data-show-partial-solution -->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Gleichsetzungsverfahren   ]] angewendet.
Zunächst wird die [[   erste   ]] Gleichung nach $y$ aufgelöst und es ergibt sich $y = 22 - 5x$.
Anschließend wird die [[   zweite   ]] Gleichung nach $y$ umgeformt, sodass $y = 2x + 1$ resultiert.
Die beiden Terme für [[   y   ]] werden [[   gleichgesetzt   ]], wodurch $22 - 5x = 2x + 1$ entsteht.
Nach dem [[  Zusammenfassen  ]] folgt $21 = 7x$.
Durch Division mit [[   7   ]] ergibt sich $x = 3$.
Der Wert für $x$ wird in die [[   erste   ]] Gleichung [[   eingesetzt  ]], sodass $y = 7$ bestimmt wird.




__$b)\;\;$__ 
$$
\begin{align*}
I.& \qquad 5x + y = 26 \\  
II.& \qquad 2x + 3y = 26   \\ \hline
I. &\qquad 5x + y = 26 \quad \left| -5x \right. \\
&\qquad y = 26 - 5x \\ \hline
I. \cap II. &\qquad 2x + 3(26 - 5x) = 26 \\
&\qquad 2x + 78 - 15x = 26 \\
&\qquad -13x + 78 = 26 \quad \left| -78 \right. \\
&\qquad -13x = -52 \quad \left| :(-13) \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 5\cdot 4 + y = 26 \\
&\qquad 20 + y = 26 \quad \left| -20 \right. \\
&\qquad y = 6
\end{align*}
$$

<!-- data-solution-button="5" data-show-partial-solution -->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Einsetzungsverfahren   ]] angewendet.
Zuerst wird die [[   erste   ]] Gleichung nach $y$ umgestellt, sodass $y = 26 - 5x$ entsteht.
Dieser Ausdruck wird in die zweite [[  Gleichung  ]] eingesetzt, wodurch $2x + 3(26 - 5x) = 26$ gebildet wird.
Nach dem [[   Ausmultiplizieren   ]] der Klammer ergibt sich $2x + 78 - 15x = 26$.
Dies lässt sich zu $-13x + 78 = 26$ [[   zusammenfassen   ]].
Durch [[  Subtraktion  ]] von [[ 78 ]] auf beiden Seiten folgt $-13x = -52$.
Durch Division mit [[  -13  ]] wird $x = 4$ erhalten.
Der Wert für $x$ wird in die [[   erste  ]] Gleichung [[   eingesetzt   ]], sodass schließlich $y = 6$ bestimmt wird.




__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 2x + 3y = 23 \\
II. &\qquad 4x - y = 11 \\ \hline
II. &\qquad 4x - y = 11 \quad \left| \cdot 3 \right. \\
II.\cdot 3 &\qquad 12x - 3y = 33 \\
I. &\qquad 2x + 3y = 23 \\ \hline
(II.\cdot 3) + I.\, &\qquad (12x+2x) + (-3y+3y) = 33 + 23 \\
&\qquad 14x = 56 \quad \left| :14 \right. \\
&\qquad x = 4 \\
x \cap II.\, &\qquad 4\cdot 4 - y = 11 \\
&\qquad 16 - y = 11 \quad \left| -16 \right. \\
&\qquad -y = -5 \quad \left| \cdot(-1) \right. \\
&\qquad y = 5
\end{align*}
$$

<!-- data-solution-button="5" data-show-partial-solution -->
Zur Lösung des [[   Gleichungssystems   ]] wird das [[   Additionsverfahren   ]] angewendet.
Zuerst wird die zweite Gleichung mit [[  3  ]] [[  multipliziert  ]], sodass $12x - 3y = 33$ entsteht.
Nun wird diese Gleichung mit der ersten [[  addiert  ]]. Dabei fallen die Teile mit $y$ weg und es bleibt $14x = 56$.
Durch [[  Division  ]] mit [[  14  ]] ergibt sich $x = 4$.
Der erhaltene Wert wird in die zweite [[  Gleichung  ]] [[   eingesetzt   ]], woraus $16 - y = 11$ folgt.
Durch [[  Subtraktion  ]] von [[  16  ]] auf beiden Seiten ergibt sich $-y = -5$.
Durch [[  Multiplikation  ]] mit [[  -1  ]] wird schließlich $y = 5$ bestimmt.














<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = 11 \\  
II.& \qquad x + 3y = 13  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  3  ]]
************
$$
\begin{align*}
I. &\qquad 2x + y = 11 \quad \left| -2x  \right. \\
II. &\qquad x + 3y = 13    \\ \hline
I. &\qquad y = 11 - 2x \\  
I. \cap II.  &\qquad x + 3(11-2x) = 13   \\
& \qquad x + 33 - 6x = 13 \quad \left| -33 \right. \\
& \qquad -5x = -20 \quad \left| :(-5) \right. \\
& \qquad x = 4 \\
x \cap I. &\qquad 2\cdot 4 + y = 11 \\
& \qquad 8 + y = 11 \quad \left| -8 \right. \\
& \qquad y = 3
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 19 \\  
II.& \qquad 2x + y  = 12  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  2  ]]
************
$$
\begin{align*}
I. & \qquad 3x + 2y = 19 \\
II. & \qquad 2x + y  = 12 \quad \left| -2x \right. \\ \hline
II. &  \qquad y = 12 - 2x \\ 
I.\cap II. & \qquad 3x + 2(12 - 2x) = 19 \\
&  \qquad 3x + 24 - 4x = 19 \\
&  \qquad -x + 24 = 19 \quad \left| -24 \right. \\
&  \qquad-x = -5 \quad \left| \cdot(-1) \right. \\
&  \qquad x = 5 \\
x\cap II. &  \qquad 2\cdot 5 + y = 12 \\
&  \qquad 10 + y = 12 \quad \left| -10 \right. \\
&  \qquad y = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y &= 9 \\  
II.& \qquad 2x - y &= 3  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad x + y = 9 \quad \left| -x \right. \\
II.\ &\qquad 2x - y = 3 \\ \hline
I.\ &\qquad y = 9 - x \\
I.\cap II.\ &\qquad 2x - (9 - x) = 3 \\
&\qquad 2x - 9 + x = 3 \\
&\qquad 3x - 9 = 3 \quad \left| +9 \right. \\
&\qquad 3x = 12 \quad \left| :3 \right. \\
&\qquad x = 4 \\
x\cap I.\ &\qquad 4 + y = 9 \quad \left| -4 \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x - y &= 7 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  3  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I.\ &\qquad 4x - y = 7 \quad \left| -4x \right. \\
II.\ &\qquad x + 2y = 13 \\ \hline
I.\ &\qquad -y = 7 - 4x \quad \left| \cdot(-1) \right. \\
I.\ &\qquad y = 4x - 7 \\
I.\cap II.\ &\qquad x + 2(4x - 7) = 13 \\
&\qquad x + 8x - 14 = 13 \\
&\qquad 9x - 14 = 13 \quad \left| +14 \right. \\
&\qquad 9x = 27 \quad \left| :9 \right. \\
&\qquad x = 3 \\
x\cap I.\ &\qquad 4\cdot 3 - y = 7 \\
&\qquad 12 - y = 7 \quad \left| -12 \right. \\
&\qquad -y = -5 \quad \left| \cdot(-1) \right. \\
&\qquad y = 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + y &= 16 \\  
II.& \qquad 2x + 3y &= 20  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\ &\qquad 3x + y = 16 \quad \left| -3x \right. \\
II.\ &\qquad 2x + 3y = 20 \\ \hline
I.\ &\qquad y = 16 - 3x \\
I.\cap II.\ &\qquad 2x + 3(16 - 3x) = 20 \\
&\qquad 2x + 48 - 9x = 20 \\
&\qquad -7x + 48 = 20 \quad \left| -48 \right. \\
&\qquad -7x = -28 \quad \left| :(-7) \right. \\
&\qquad x = 4 \\
x\cap I.  &\qquad 3\cdot 4 + y = 16 \\
&\qquad 12 + y = 16 \quad \left| -12 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + y &= 24 \\  
II.& \qquad x + 2y &= 13  
\end{align*}
$$  
$x$ = [[  5  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I.\qquad &\ 4x + y = 24 \quad \left| -4x \right. \\
II.\qquad &\ x + 2y = 13 \\ \hline
I.\qquad &\ y = 24 - 4x \\
I.\cap II.\ &\qquad x + 2(24 - 4x) = 13 \\
&\qquad x + 48 - 8x = 13 \\
&\qquad -7x + 48 = 13 \quad \left| -48 \right. \\
&\qquad -7x = -35 \quad \left| :(-7) \right. \\
&\qquad x = 5 \\
x\cap I.  &\qquad 4\cdot 5 + y = 24 \\
&\qquad 20 + y = 24 \quad \left| -20 \right. \\
&\qquad y = 4
\end{align*}
$$
************
</div>
</section>














<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + y = 14 \\  
II.& \qquad x + 2y = 10  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  4  ]]
************
$$
\begin{align*}
I. &\qquad 3x + y = 14 \quad \left| -3x \right. \\
II. &\qquad x + 2y = 10 \\ \hline
I. &\qquad y = 14 - 3x \\
I. \cap II. &\qquad x + 2(14 - 3x) = 10 \\
&\qquad x + 28 - 6x = 10 \quad \left| -28 \right. \\
&\qquad -5x = -18 \quad \left| :(-5) \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 3\cdot 2 + y = 14 \\
&\qquad 6 + y = 14 \quad \left| -6 \right. \\
&\qquad y = 8
\end{align*}
$$
************

</div>
<div class="flex-child">
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x - y = 7 \\  
II.& \qquad x + 3y = 19  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
I. &\qquad 4x - y = 7 \quad \left| -4x \right. \\
II. &\qquad x + 3y = 19 \\ \hline
I. &\qquad -y = 7 - 4x \quad \left| \cdot(-1) \right. \\
I. &\qquad y = 4x - 7 \\
I. \cap II. &\qquad x + 3(4x - 7) = 19 \\
&\qquad x + 12x - 21 = 19 \\
&\qquad 13x - 21 = 19 \quad \left| +21 \right. \\
&\qquad 13x = 40 \quad \left| :13 \right. \\
&\qquad x = 4 \\
x \cap I. &\qquad 4\cdot 4 - y = 7 \\
&\qquad 16 - y = 7 \quad \left| -16 \right. \\
&\qquad -y = -9 \quad \left| \cdot(-1) \right. \\
&\qquad y = 9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + 3y = 18 \\  
II.& \qquad x - y = 1  
\end{align*}
$$  
$x$ = [[  3  ]]  und  $y$ = [[  2  ]]
************
$$
\begin{align*}
II. &\qquad x - y = 1 \quad \left| -x \right. \\
I.  &\qquad 2x + 3y = 18 \\ \hline
II. &\qquad -y = 1 - x \quad \left| \cdot(-1) \right. \\
II. &\qquad y = x - 1 \\
I. \cap II. &\qquad 2x + 3(x - 1) = 18 \\
&\qquad 2x + 3x - 3 = 18 \\
&\qquad 5x - 3 = 18 \quad \left| +3 \right. \\
&\qquad 5x = 21 \quad \left| :5 \right. \\
&\qquad x = 3 \\
x \cap II. &\qquad y = 3 - 1 \\
&\qquad y = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 2y = 20 \\  
II.& \qquad 3x - y = 4  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  5  ]]
************
$$
\begin{align*}
II. &\qquad 3x - y = 4 \quad \left| -3x \right. \\
I.  &\qquad 5x + 2y = 20 \\ \hline
II. &\qquad -y = 4 - 3x \quad \left| \cdot(-1) \right. \\
II. &\qquad y = 3x - 4 \\
I. \cap II. &\qquad 5x + 2(3x - 4) = 20 \\
&\qquad 5x + 6x - 8 = 20 \\
&\qquad 11x - 8 = 20 \quad \left| +8 \right. \\
&\qquad 11x = 28 \quad \left| :11 \right. \\
&\qquad x = 2 \\
x \cap II. &\qquad y = 3\cdot 2 - 4 \\
&\qquad y = 6 - 4 = 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = 10 \\  
II.& \qquad 4x - y = 6  
\end{align*}
$$  
$x$ = [[  2  ]]  und  $y$ = [[  6  ]]
************
$$
\begin{align*}
I. &\qquad 2x + y = 10 \quad \left| -2x \right. \\
II. &\qquad 4x - y = 6 \\ \hline
I. &\qquad y = 10 - 2x \\
I. \cap II. &\qquad 4x - (10 - 2x) = 6 \\
&\qquad 4x - 10 + 2x = 6 \\
&\qquad 6x - 10 = 6 \quad \left| +10 \right. \\
&\qquad 6x = 16 \quad \left| :6 \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 2\cdot 2 + y = 10 \\
&\qquad 4 + y = 10 \quad \left| -4 \right. \\
&\qquad y = 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 22 \\  
II.& \qquad x + y = 7  
\end{align*}
$$  
$x$ = [[  4  ]]  und  $y$ = [[  3  ]]
************
$$
\begin{align*}
II. &\qquad x + y = 7 \quad \left| -x \right. \\
I.  &\qquad 3x + 2y = 22 \\ \hline
II. &\qquad y = 7 - x \\
I. \cap II. &\qquad 3x + 2(7 - x) = 22 \\
&\qquad 3x + 14 - 2x = 22 \\
&\qquad x + 14 = 22 \quad \left| -14 \right. \\
&\qquad x = 8 \\
x \cap II. &\qquad 8 + y = 7 \quad \left| -8 \right. \\
&\qquad y = -1
\end{align*}
$$
************
</div>
</section>




















<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 2y - z = 1  \\  \hline
I. &\qquad x + y + z = 12 \quad \left| -x - y \right. \\
&\qquad z = 12 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (12 - x - y) = 8 \\
&\qquad x - 2y + 12 = 8 \quad \left| -12 \right. \\
&\qquad x - 2y = -4   \quad \left| +2y \right. \\
&\qquad x = 2y -4  \\ 
I. \cap III.\; &\qquad x + 2y - (12 - x - y) = 1 \\
&\qquad 2x + 3y - 12 = 1 \quad \left| +12 \right. \\
&\qquad 2x + 3y = 13 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 4 \\
 &\qquad 2(2y-4) + 3y = 13 \\
&\qquad 4y - 8 + 3y = 13 \\
&\qquad 7y = 21 \quad \left| :7 \right. \\
&\qquad y = 3 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-4 = 2 \cdot 3-4 = 2 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 12 - 2 - 3 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 10 \\  
II.& \qquad 2x - y + z = 9 \\  
III.& \qquad x + 3y - z = 4  \\  \hline
I. &\qquad x + y + z = 10 \quad \left| -x - y \right. \\
&\qquad z = 10 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (10 - x - y) = 9 \\
&\qquad x - 2y + 10 = 9 \quad \left| -10 \right. \\
&\qquad x - 2y = -1 \quad \left| +2y \right. \\
&\qquad x = 2y - 1 \\ 
I. \cap III.\; &\qquad x + 3y - (10 - x - y) = 4 \\
&\qquad 2x + 4y - 10 = 4 \quad \left| +10 \right. \\
&\qquad 2x + 4y = 14 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y - 1 \\
 &\qquad 2(2y-1) + 4y = 14 \\
&\qquad 4y - 2 + 4y = 14 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y-1 = 2\cdot 2 - 1 = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 10 - 3 - 2 = 5
\end{align*}
$$
************


</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 15 \\  
II.& \qquad x + 2y + 3z = 24 \\  
III.& \qquad 3x - y + z = 17  \\  \hline
I. &\qquad 2x + y + z = 15 \quad \left| -2x - z \right. \\
&\qquad y = 15 - 2x - z \\
III. &\qquad 3x - y + z = 17 \quad \left| -3x - z \right. \\
&\qquad -y = 17 - 3x - z \quad \left| \cdot(-1) \right. \\
&\qquad y = 3x + z - 17 \\ \hline
I = III\; &\qquad 15 - 2x - z = 3x + z - 17 \\
&\qquad 32 = 5x + 2z \quad (A) \\
I \cap II\; &\qquad x + 2(15 - 2x - z) + 3z = 24 \\
&\qquad x + 30 - 4x - 2z + 3z = 24 \\
&\qquad -3x + z + 30 = 24 \quad \left| -30 \right. \\
&\qquad z = 3x - 6 \quad (B) \\ \hline
(A) \cap (B)\; &\qquad 32 = 5x + 2(3x - 6) \\
&\qquad 32 = 11x - 12 \quad \left| +12 \right. \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4,\;\; z = 3\cdot 4 - 6 = 6, \;\; y = 15 - 2\cdot 4 - 6 = 1
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  4  ]], $z$ = [[  3  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 16 \\  
II.& \qquad 2x + y - z = 11 \\  
III.& \qquad x - y + 2z = 7  \\  \hline
I.+II.\; &\qquad (x+2y+z) + (2x+y-z) = 16 + 11 \\
&\qquad 3x + 3y = 27 \quad \left| :3 \right. \\
&\qquad x + y = 9 \quad (A) \\
I.\cdot 2 \; &\qquad 2x + 4y + 2z = 32 \\
(I.\cdot 2) - III.\; &\qquad (2x - x) + (4y - (-y)) + (2z - 2z) = 32 - 7 \\
&\qquad x + 5y = 25 \quad (B) \\ \hline
(A) &\qquad x = 9 - y \\
(A) \cap (B) &\qquad (9 - y) + 5y = 25 \\
&\qquad 4y + 9 = 25 \quad \left| -9 \right. \\
&\qquad 4y = 16 \quad \left| :4 \right. \\
&\qquad y = 4,\;\; x = 9 - 4 = 5,\;\; z: \; 5 + 2\cdot 4 + z = 16 \Rightarrow z = 3
\end{align*}
$$
************

</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 2y - z = 0  \\  \hline
I. &\qquad x + y + z = 11 \quad \left| -x - y \right. \\
&\qquad z = 11 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (11 - x - y) = 13 \\
&\qquad x - 2y + 11 = 13 \quad \left| -11 \right. \\
&\qquad x - 2y = 2 \quad \left| +2y \right. \\
&\qquad x = 2y + 2 \\ 
I. \cap III.\; &\qquad x + 2y - (11 - x - y) = 0 \\
&\qquad 2x + 3y - 11 = 0 \quad \left| +11 \right. \\
&\qquad 2x + 3y = 11 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y + 2 \\
&\qquad 2(2y+2) + 3y = 11 \\
&\qquad 4y + 4 + 3y = 11 \\
&\qquad 7y = 7 \quad \left| :7 \right. \\
&\qquad y = 1 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y+2 = 2 \cdot 1 + 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 11 - 4 - 1 = 6
\end{align*}
$$
************


</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  5  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 12 \\  
II.& \qquad 2x + y - z = 7 \\  
III.& \qquad x + 3y + z = 22  \\  \hline
III. - I.\; &\qquad (x+3y+z) - (x+y+z) = 22 - 12 \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\ \hline
I. + II.\; &\qquad (x+y+z) + (2x+y-z) = 12 + 7 \\
&\qquad 3x + 2y = 19 \\
y \cap (I.+II.)\; &\qquad 3x + 2\cdot 5 = 19 \\
&\qquad 3x + 10 = 19 \quad \left| -10 \right. \\
&\qquad 3x = 9 \quad \left| :3 \right. \\
&\qquad x = 3 \\ \hline
\left( x \wedge y \right) \cap I.\; &\qquad 3 + 5 + z = 12 \\
&\qquad z = 12 - 8 = 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  2  ]], $z$ = [[  7  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x - y + z = 13 \\  
III.& \qquad x + 3y - z = 3  \\  \hline
I. &\qquad x + y + z = 13 \quad \left| -x - y \right. \\
&\qquad z = 13 - x - y \\ \hline
I. \cap II.\; &\qquad 2x - y + (13 - x - y) = 13 \\
&\qquad x - 2y + 13 = 13 \quad \left| -13 \right. \\
&\qquad x - 2y = 0 \quad \left| +2y \right. \\
&\qquad x = 2y \\ 
I. \cap III.\; &\qquad x + 3y - (13 - x - y) = 3 \\
&\qquad 2x + 4y - 13 = 3 \quad \left| +13 \right. \\
&\qquad 2x + 4y = 16 \\ \hline
\left( I. \cap II. \right)  \cap \left(  I. \cap III. \right)\;  &\qquad x = 2y \\
 &\qquad 2(2y) + 4y = 16 \\
&\qquad 4y + 4y = 16 \\
&\qquad 8y = 16 \quad \left| :8 \right. \\
&\qquad y = 2 \\
y \cap \left( I. \cap II. \right)  &\qquad  x = 2y = 2 \cdot 2 = 4 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 13 - 4 - 2 = 7
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  
\end{align*}
$$  
$x$ = [[  6  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\  
II.& \qquad 2x + y - z = 10 \\  
III.& \qquad x + 2y + 3z = 27  \\  \hline
I. &\qquad x + y + z = 14 \quad \left| -x - y \right. \\
&\qquad z = 14 - x - y \\ \hline
I. \cap II.\; &\qquad 2x + y - (14 - x - y) = 10 \\
&\qquad 3x + 2y - 14 = 10 \quad \left| +14 \right. \\
&\qquad 3x + 2y = 24 \quad (A) \\ 
I. \cap III.\; &\qquad x + 2y + 3(14 - x - y) = 27 \\
&\qquad x + 2y + 42 - 3x - 3y = 27 \\
&\qquad -2x - y + 42 = 27 \quad \left| -42 \right. \\
&\qquad -2x - y = -15 \quad \left| \cdot(-1) \right. \\
&\qquad 2x + y = 15 \quad (B) \\ \hline
(B)\cdot 2\; &\qquad 4x + 2y = 30 \\
\big((B)\cdot 2\big) - (A)\; &\qquad (4x - 3x) + (2y - 2y) = 30 - 24 \\
&\qquad x = 6 \\
x \cap (B)\; &\qquad 2\cdot 6 + y = 15 \;\Rightarrow\; y = 3 \\
\left( x \wedge y \right) \cap  I. &\qquad  z = 14 - 6 - 3 = 5
\end{align*}
$$
************

</div>
</section>







#### Übungsaufgaben zu Gleichungssystemen 11 bis 20


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 11:__ **Berechne** die Lösungen des gegebenen Gleichungssystems mit dem Additionsverfahren.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 8 \\  
III.& \qquad x + 3y - z = 5  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  2  ]], $z$ = [[  4  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 8 \\
III.& \qquad x + 3y - z = 5 \\ \hline
\text{(Eliminiere } z\text{): } I.+III.& \qquad (x+x) + (y+3y) + (z - z) = 9 + 5 \\
& \qquad 2x + 4y = 14 \quad (A) \\
II.+III.& \qquad (2x+x) + (-y+3y) + (z - z) = 8 + 5 \\
& \qquad 3x + 2y = 13 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (6x+4y) - (2x+4y) = 26 - 14 \\
& \qquad 4x = 12 \quad \left| :4 \right. \\
& \qquad x = 3 \\
x \cap (A):& \qquad 2\cdot 3 + 4y = 14 \\
& \qquad 6 + 4y = 14 \quad \left| -6 \right. \\
& \qquad 4y = 8 \quad \left| :4 \right. \\
& \qquad y = 2 \\
(x \wedge y) \cap I.:& \qquad 3 + 2 + z = 9 \\
& \qquad z = 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\  
II.& \qquad x + 2y - z = 5 \\  
III.& \qquad 3x - y + 2z = 19  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  3  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad 2x + y + z = 16 \\
II.& \qquad x + 2y - z = 5 \\
III.& \qquad 3x - y + 2z = 19 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (2x+x) + (y+2y) + (z - z) = 16 + 5 \\
& \qquad 3x + 3y = 21 \quad (A) \\ 
III. + 2\cdot II.& \qquad (3x+2x) + (-y+4y) + (2z - 2z) = 19 + 10 \\
& \qquad 5x + 3y = 29 \quad (B) \\ \hline
(B) - (A)& \qquad (5x+3y) - (3x+3y) = 29 - 21 \\
& \qquad 2x = 8 \quad \left| :2 \right. \\
& \qquad x = 4 \\
x \cap (A):& \qquad 3\cdot 4 + 3y = 21 \\
& \qquad 12 + 3y = 21 \quad \left| -12 \right. \\
& \qquad 3y = 9 \quad \left| :3 \right. \\
& \qquad y = 3 \\
(x \wedge y) \cap I.:& \qquad 2\cdot 4 + 3 + z = 16 \\
& \qquad 8 + 3 + z = 16 \\
& \qquad z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 11 \\  
III.& \qquad 3x - y + 2z = 12  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  4  ]], $z$ = [[  5  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 11 \\
III.& \qquad 3x - y + 2z = 12 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 11 \\
& \qquad 3x + 4y = 22 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.+2\cdot II.& \qquad (3x+4x) + (-y+6y) + (2z - 2z) = 12 + 22 \\
& \qquad 7x + 5y = 34 \quad (B) \\ \hline
(B)\cdot 4 - (A)\cdot 5\!:& \qquad (28x-15x) + (20y-20y) = 136 - 110 \\
& \qquad 13x = 26 \quad \left| :13 \right. \\
& \qquad x = 2 \\[6pt]
x \cap (A):& \qquad 3\cdot 2 + 4y = 22 \\
& \qquad 6 + 4y = 22 \quad \left| -6 \right. \\
& \qquad 4y = 16 \quad \left| :4 \right. \\
& \qquad y = 4 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 4 + z = 11 \;\Rightarrow\; z = 5
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 3x + y - z = 11 \\  
III.& \qquad 2x + 3y + z = 22  
\end{align*}
$$  
$x$ = [[  5  ]], $y$ = [[  2  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 3x + y - z = 11 \\
III.& \qquad 2x + 3y + z = 22 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+3x) + (y+y) + (z - z) = 13 + 11 \\
& \qquad 4x + 2y = 24 \quad \left| :2 \right. \\
& \qquad 2x + y = 12 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-I.& \qquad (2x - x) + (3y - y) + (z - z) = 22 - 13 \\
& \qquad x + 2y = 9 \quad (B) \\ \hline
2\cdot(B) - (A)\!:& \qquad (2x+4y) - (2x+y) = 18 - 12 \\
& \qquad 3y = 6 \quad \left| :3 \right. \\
& \qquad y = 2 \\[6pt]
y \cap (A):& \qquad 2x + 2 = 12 \quad \left| -2 \right. \\
& \qquad 2x = 10 \quad \left| :2 \right. \\
& \qquad x = 5 \\[6pt]
(x \wedge y) \cap I.:& \qquad 5 + 2 + z = 13 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
</section>


<!-- Gleichungssysteme 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** die Lösungen des gegebenen Gleichungssystems mit dem Additionsverfahren.




<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\  
II.& \qquad 2x + 3y - z = 7 \\  
III.& \qquad 3x - y + 2z = 15  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  3  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 11 \\
II.& \qquad 2x + 3y - z = 7 \\
III.& \qquad 3x - y + 2z = 15 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+3y) + (z - z) = 11 + 7 \\
& \qquad 3x + 4y = 18 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } III.-2\cdot I.& \qquad (3x-2x) + (-y-2y) + (2z-2z) = 15 - 22 \\
& \qquad x - 3y = -7 \quad (B) \\ \hline
(A) - 3\cdot (B)\!:& \qquad (3x-3x) + (4y-(-9y)) = 18 - (-21) \\
& \qquad 13y = 39 \quad \left| :13 \right. \\
& \qquad y = 3 \\[6pt]
y \cap (B):& \qquad x - 3\cdot 3 = -7 \;\Rightarrow\; x = 2 \\[6pt]
(x \wedge y) \cap I.:& \qquad 2 + 3 + z = 11 \;\Rightarrow\; z = 6
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\  
II.& \qquad 2x + y - z = 1 \\  
III.& \qquad x + 2y + 3z = 30  
\end{align*}
$$  
$x$ = [[  4  ]], $y$ = [[  1  ]], $z$ = [[  8  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 13 \\
II.& \qquad 2x + y - z = 1 \\
III.& \qquad x + 2y + 3z = 30 \\ \hline
\text{(Eliminiere } z\text{): } I.+II.& \qquad (x+2x) + (y+y) + (z - z) = 13 + 1 \\
& \qquad 3x + 2y = 14 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } (III.+II.) - 2\cdot I.& \qquad (3x-2x) + (3y-2y) + (2z-2z) = 31 - 26 \\
& \qquad x + y = 5 \quad (B) \\ \hline
2\cdot (B) - (A)\!:& \qquad (2x+2y) - (3x+2y) = 10 - 14 \\
& \qquad -x = -4 \;\Rightarrow\; x = 4 \\[6pt]
x \cap (B):& \qquad 4 + y = 5 \;\Rightarrow\; y = 1 \\[6pt]
(x \wedge y) \cap I.:& \qquad 4 + 1 + z = 13 \;\Rightarrow\; z = 8
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\  
II.& \qquad 2x - y + z = 4 \\  
III.& \qquad 3x + y - z = 11  
\end{align*}
$$  
$x$ = [[  3  ]], $y$ = [[  4  ]], $z$ = [[  2  ]]
************
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 2x - y + z = 4 \\
III.& \qquad 3x + y - z = 11 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (2x+3x) + (-y+y) + (z - z) = 4 + 11 \\
&\qquad 5x = 15 \quad \left| :5 \right. \\
&\qquad x = 3 \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-2x) + (y - (-y)) + (z - z) = 9 - 4 \\
&\qquad -x + 2y = 5 \quad (A) \\[6pt]
x \cap (A)\; &\qquad -3 + 2y = 5 \quad \left| +3 \right. \\
&\qquad 2y = 8 \quad \left| :2 \right. \\
&\qquad y = 4 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 3 + 4 + z = 9 \\
&\qquad z = 2
\end{align*}
$$
************


</div>
<div class="flex-child">


<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\  
II.& \qquad 3x - y + z = 7 \\  
III.& \qquad 2x + 3y - z = 13  
\end{align*}
$$  
$x$ = [[  2  ]], $y$ = [[  5  ]], $z$ = [[  6  ]]
************
$$
\begin{align*}
I.& \qquad x + 2y + z = 18 \\
II.& \qquad 3x - y + z = 7 \\
III.& \qquad 2x + 3y - z = 13 \\ \hline
\text{(Eliminiere } z\text{): } II.+III.\; &\qquad (3x+2x) + (-y+3y) + (z - z) = 7 + 13 \\
&\qquad 5x + 2y = 20 \quad (A) \\[6pt]
\text{(Eliminiere } z\text{): } I.-II.\; &\qquad (x-3x) + (2y - (-y)) + (z - z) = 18 - 7 \\
&\qquad -2x + 3y = 11 \quad (B) \\ \hline
(A)\cdot 3 - (B)\cdot 2\; &\qquad (15x+6y) - (-4x+6y) = 60 - 22 \\
&\qquad 19x = 38 \quad \left| :19 \right. \\
&\qquad x = 2 \\[6pt]
x \cap (A)\; &\qquad 5\cdot 2 + 2y = 20 \\
&\qquad 10 + 2y = 20 \quad \left| -10 \right. \\
&\qquad 2y = 10 \quad \left| :2 \right. \\
&\qquad y = 5 \\[6pt]
(x \wedge y) \cap I.\; &\qquad 2 + 2\cdot 5 + z = 18 \\
&\qquad 12 + z = 18 \quad \left| -12 \right. \\
&\qquad z = 6
\end{align*}
$$
************

</div>
</section>





<!-- Gleichungssysteme 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 13:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x + 2y = 7 \\  
II.& \qquad 4x - y = 1  
\end{align*}
$$
$x$ = [[  9/11  ]] und  $y$ = [[  25/11  ]] 
@Algebrite.check([ 9/11; 25/11 ])
************
$$
\begin{align*}
I.& \qquad 3x + 2y = 7 \\  
II.& \qquad 4x - y = 1   \\ \hline
II. &\qquad 4x - y = 1 \quad \left| -4x \right. \\
&\qquad -y = 1 - 4x \quad \left| \cdot(-1) \right. \\
&\qquad y = 4x - 1 \\ \hline
I. \cap II. &\qquad 3x + 2(4x - 1) = 7 \\
&\qquad 3x + 8x - 2 = 7 \\
&\qquad 11x - 2 = 7 \quad \left| +2 \right. \\
&\qquad 11x = 9 \quad \left| :11 \right. \\
&\qquad x = \dfrac{9}{11} \\[6pt]
x \cap II. &\qquad 4 \cdot \dfrac{9}{11} - y = 1 \\
&\qquad \dfrac{36}{11} - y = 1 \quad \left| -\dfrac{36}{11} \right. \\
&\qquad -y = 1 - \dfrac{36}{11} = -\dfrac{25}{11} \quad \left| \cdot(-1) \right. \\
&\qquad y = \dfrac{25}{11}
\end{align*}
$$
************

</div>
<div class="flex-child">



<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x - 2y = 3 \\  
II.& \qquad x + 3y = 8  
\end{align*}
$$  
$x$ = [[  25/17  ]] und  $y$ = [[  37/17  ]] 
@Algebrite.check([ 25/17; 37/17 ])
************
$$
\begin{align*}
I.& \qquad 5x - 2y = 3 \\  
II.& \qquad x + 3y = 8  \\ \hline
II. &\qquad x + 3y = 8 \quad \left| -3y \right. \\
&\qquad x = 8 - 3y \\ \hline
I. \cap II. &\qquad 5(8 - 3y) - 2y = 3 \\
&\qquad 40 - 15y - 2y = 3 \\
&\qquad 40 - 17y = 3 \quad \left| -40 \right. \\
&\qquad -17y = -37 \quad \left| :(-17) \right. \\
&\qquad y = \dfrac{37}{17} \\[6pt]
y \cap II. &\qquad x + 3\cdot \dfrac{37}{17} = 8 \\
&\qquad x + \dfrac{111}{17} = 8 \quad \left| -\dfrac{111}{17} \right. \\
&\qquad x = \dfrac{136}{17} - \dfrac{111}{17} = \dfrac{25}{17}
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + y = -1 \\  
II.& \qquad 3x - 2y = -16  
\end{align*}
$$  
$x$ = [[  -18/7  ]]  und  $y$ = [[  29/7  ]] 
@Algebrite.check([ -18/7; 29/7 ])
************
$$
\begin{align*}
I.& \qquad 2x + y = -1 \\  
II.& \qquad 3x - 2y = -16  \\ \hline
I. &\qquad 2x + y = -1 \quad \left| -2x \right. \\
&\qquad y = -1 - 2x \\ \hline
I. \cap II.\; &\qquad 3x - 2(-1 - 2x) = -16 \\
&\qquad 3x + 2 + 4x = -16 \\
&\qquad 7x + 2 = -16 \quad \left| -2 \right. \\
&\qquad 7x = -18 \quad \left| :7 \right. \\
&\qquad x = -\dfrac{18}{7} \\[6pt]
x \cap I.\; &\qquad 2\!\left(-\dfrac{18}{7}\right) + y = -1 \\
&\qquad -\dfrac{36}{7} + y = -1 \quad \left| +\dfrac{36}{7} \right. \\
&\qquad y = -\dfrac{7}{7} + \dfrac{36}{7} = \dfrac{29}{7}
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 4x + 3y = 7 \\  
II.& \qquad 2x - y = -5  
\end{align*}
$$  
$x$ = [[  -2/5  ]]   und  $y$ = [[  13/5  ]] 
@Algebrite.check([ -2/5; 13/5 ])
************
$$
\begin{align*}
I.& \qquad 4x + 3y = 7 \\  
II.& \qquad 2x - y = -5   \\ \hline
II.& \qquad 2x - y = -5 \quad \left| -2x \right. \\
&\qquad -y = -5 - 2x \quad \left| \cdot(-1) \right. \\
&\qquad y = 5 + 2x \\ \hline
I. \cap II.\; &\qquad 4x + 3(5 + 2x) = 7 \\
&\qquad 4x + 15 + 6x = 7 \\
&\qquad 10x + 15 = 7 \quad \left| -15 \right. \\
&\qquad 10x = -8 \quad \left| :10 \right. \\
&\qquad x = -\dfrac{2}{5} \\[6pt]
x \cap II.\; &\qquad 2\!\left(-\dfrac{2}{5}\right) - y = -5 \\
&\qquad -\dfrac{4}{5} - y = -5 \quad \left| +\dfrac{4}{5} \right. \\
&\qquad -y = -\dfrac{21}{5} \quad \left| \cdot(-1) \right. \\
&\qquad y = \dfrac{21}{5} = \dfrac{13}{5}
\end{align*}
$$
************

</div>
</section>











<!-- Gleichungssysteme 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 14:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + 3y = 7 \\  
II.& \qquad 5x - y = 4  
\end{align*}
$$  
$x$ = [[  19/17  ]] und  $y$ = [[  23/17  ]] 
@Algebrite.check([ 19/17; 23/17 ])
************
$$
\begin{align*}
I.& \qquad 2x + 3y = 7 \\  
II.& \qquad 5x - y = 4  \\ \hline
II.& \qquad 5x - y = 4 \quad \left| -5x \right. \\
& \qquad -y = 4 - 5x \quad \left| \cdot(-1) \right. \\
& \qquad y = 5x - 4 \\ \hline
I. \cap II.& \qquad 2x + 3(5x - 4) = 7 \\
& \qquad 2x + 15x - 12 = 7 \\
& \qquad 17x - 12 = 7 \quad \left| +12 \right. \\
& \qquad 17x = 19 \quad \left| :17 \right. \\
& \qquad x = \dfrac{19}{17} \\[6pt]
x \cap II.& \qquad y = 5\cdot \dfrac{19}{17} - 4 \\
& \qquad = \dfrac{95}{17} - \dfrac{68}{17} = \dfrac{27}{17} 
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x - 2y = 1 \\  
II.& \qquad 4x + y = 7  
\end{align*}
$$  
$x$ = [[  3/2  ]] und  $y$ = [[  1  ]] 
@Algebrite.check([ 3/2; 1 ])
************
$$
\begin{align*}
I.& \qquad 3x - 2y = 1 \\  
II.& \qquad 4x + y = 7  \\ \hline
II.& \qquad 4x + y = 7 \quad \left| -4x \right. \\
& \qquad y = 7 - 4x \\ \hline
I. \cap II.& \qquad 3x - 2(7 - 4x) = 1 \\
& \qquad 3x - 14 + 8x = 1 \\
& \qquad 11x - 14 = 1 \quad \left| +14 \right. \\
& \qquad 11x = 15 \quad \left| :11 \right. \\
& \qquad x = \dfrac{15}{11} \\[6pt]
x \cap II.& \qquad y = 7 - 4\cdot \dfrac{15}{11} \\
& \qquad = \dfrac{77}{11} - \dfrac{60}{11} = \dfrac{17}{11}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 2y = 8 \\  
II.& \qquad 3x - y = 2  
\end{align*}
$$  
$x$ = [[  12/13  ]] und  $y$ = [[  14/13  ]] 
@Algebrite.check([ 12/13; 14/13 ])
************
$$
\begin{align*}
I.& \qquad 5x + 2y = 8 \\  
II.& \qquad 3x - y = 2  \\ \hline
II.& \qquad 3x - y = 2 \quad \left| -3x \right. \\
& \qquad -y = 2 - 3x \quad \left| \cdot(-1) \right. \\
& \qquad y = 3x - 2 \\ \hline
I. \cap II.& \qquad 5x + 2(3x - 2) = 8 \\
& \qquad 5x + 6x - 4 = 8 \\
& \qquad 11x - 4 = 8 \quad \left| +4 \right. \\
& \qquad 11x = 12 \quad \left| :11 \right. \\
& \qquad x = \dfrac{12}{11} \\[6pt]
x \cap II.& \qquad y = 3\cdot \dfrac{12}{11} - 2 \\
& \qquad = \dfrac{36}{11} - \dfrac{22}{11} = \dfrac{14}{11}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 7x - 3y = 5 \\  
II.& \qquad 2x + y = 4  
\end{align*}
$$  
$x$ = [[  17/13  ]] und  $y$ = [[  34/13  ]] 
@Algebrite.check([ 17/13; 34/13 ])
************
$$
\begin{align*}
I.& \qquad 7x - 3y = 5 \\  
II.& \qquad 2x + y = 4  \\ \hline
II.& \qquad 2x + y = 4 \quad \left| -2x \right. \\
& \qquad y = 4 - 2x \\ \hline
I. \cap II.& \qquad 7x - 3(4 - 2x) = 5 \\
& \qquad 7x - 12 + 6x = 5 \\
& \qquad 13x - 12 = 5 \quad \left| +12 \right. \\
& \qquad 13x = 17 \quad \left| :13 \right. \\
& \qquad x = \dfrac{17}{13} \\[6pt]
x \cap II.& \qquad y = 4 - 2\cdot \dfrac{17}{13} \\
& \qquad = \dfrac{52}{13} - \dfrac{34}{13} = \dfrac{18}{13}
\end{align*}
$$
************
</div>


</section>
















<!-- Gleichungssysteme 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 15:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 12x + 12y + 12z = 5 \\
II.& \qquad 24x - 12y + 36z = -23 \\
III.& \qquad -3x + 12y - 6z = 11
\end{align*}
$$
$x$ = [[  1/2  ]],  $y$ = [[  2/3  ]]  und  $z$ = [[  -3/4  ]]
@Algebrite.check([ 1/2; 2/3; -3/4 ])
************
$$
\begin{align*}
I.& \qquad 12x + 12y + 12z = 5 \\
II.& \qquad 24x - 12y + 36z = -23 \\
III.& \qquad -3x + 12y - 6z = 11 \\ \hline
IV := I + II:&\qquad 36x + 0y + 48z = -18 \quad \left| :6 \right. \\
IV: &\qquad 6x + 8z = -3 \\[6pt]
V := I - III:&\qquad 15x + 0y + 18z = -6 \quad \left| :3 \right. \\
V:&\qquad 5x + 6z = -2 \\[6pt]
IV\cdot 5:&\qquad 30x + 40z = -15 \\
V\cdot 6:&\qquad 30x + 36z = -12 \\ \hline
IV\cdot 5 - V\cdot 6 &\qquad 4z = -3 \;\Rightarrow\; z = -\dfrac{3}{4} \\[6pt]
z \cap V:&\qquad 5x + 6\left(-\dfrac{3}{4}\right) = -2 \\
&\qquad 5x - \dfrac{9}{2} = -2 \;\Rightarrow\; 5x = \dfrac{5}{2} \;\Rightarrow\; x = \dfrac{1}{2} \\[6pt]
z,x \cap I:&\qquad 12\cdot\dfrac{1}{2} + 12y + 12\cdot\left(-\dfrac{3}{4}\right) = 5 \\
&\qquad 6 + 12y - 9 = 5 \;\Rightarrow\; 12y = 8 \;\Rightarrow\; y = \dfrac{2}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 14x + 6y + 6z = 7 \\
II.& \qquad 7x - 3y + 12z = 15 \\
III.& \qquad -21x + 12y - 6z = -22
\end{align*}
$$
$x$ = [[  3/7  ]],  $y$ = [[  -2/3  ]]  und  $z$ = [[  5/6  ]]
@Algebrite.check([ 3/7; -2/3; 5/6 ])
************
$$
\begin{align*}
I.& \qquad 14x + 6y + 6z = 7 \\
II.& \qquad 7x - 3y + 12z = 15 \\
III.& \qquad -21x + 12y - 6z = -22 \\ \hline
IV := I + 2\cdot II:& \qquad 28x + 0y + 30z = 37 \\
& \qquad \Rightarrow\; 28x + 30z = 37 \\[6pt]
V := 2\cdot I - III:& \qquad 49x + 0y + 18z = 36 \\
& \qquad \Rightarrow\; 49x + 18z = 36 \\[6pt]
(IV)\cdot 7:& \qquad 196x + 210z = 259 \\
(V)\cdot 4:& \qquad 196x + 72z = 144 \\ \hline
(IV)\cdot 7 - (V)\cdot 4:& \qquad 138z = 115 \;\Rightarrow\; z = \dfrac{115}{138} = \dfrac{5}{6} \\[6pt]
z \cap V:& \qquad 49x + 18\cdot \dfrac{5}{6} = 36 \;\Rightarrow\; 49x + 15 = 36 \;\Rightarrow\; x = \dfrac{21}{49} = \dfrac{3}{7} \\[6pt]
z,x \cap II:& \qquad 7\cdot \dfrac{3}{7} - 3y + 12\cdot \dfrac{5}{6} = 15 \\
& \qquad 3 - 3y + 10 = 15 \;\Rightarrow\; -3y = 2 \;\Rightarrow\; y = -\dfrac{2}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 6x + 8y + 5z = 10 \\
II.& \qquad 9x - 4y + 10z = -4 \\
III.& \qquad -12x + 12y - 15z = 13
\end{align*}
$$
$x$ = [[  -1/3  ]],  $y$ = [[  5/4  ]]  und  $z$ = [[  2/5  ]]
@Algebrite.check([ -1/3; 5/4; 2/5 ])
************
$$
\begin{align*}
I.& \qquad 6x + 8y + 5z = 10 \\
II.& \qquad 9x - 4y + 10z = -4 \\
III.& \qquad -12x + 12y - 15z = 13 \\ \hline
IV := I + 2\cdot II:& \qquad 24x + 0y + 25z = 2 \\
& \qquad \Rightarrow\; 24x + 25z = 2 \\[6pt]
V := 3\cdot I - 2\cdot III:& \qquad 42x + 0y + 45z = 4 \\
& \qquad \Rightarrow\; 42x + 45z = 4 \\[6pt]
(IV)\cdot 7:& \qquad 168x + 175z = 14 \\
(V)\cdot 4:& \qquad 168x + 180z = 16 \\ \hline
(V)\cdot 4 - (IV)\cdot 7:& \qquad 5z = 2 \;\Rightarrow\; z = \dfrac{2}{5} \\[6pt]
z \cap IV:& \qquad 24x + 25\cdot \dfrac{2}{5} = 2 \;\Rightarrow\; 24x + 10 = 2 \;\Rightarrow\; 24x = -8 \;\Rightarrow\; x = -\dfrac{1}{3} \\[6pt]
z,x \cap I:& \qquad 6\cdot \left(-\dfrac{1}{3}\right) + 8y + 5\cdot \dfrac{2}{5} = 10 \\
& \qquad -2 + 8y + 2 = 10 \;\Rightarrow\; 8y = 10 \;\Rightarrow\; y = \dfrac{5}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 3 \\
II.& \qquad 18x - 12y + 6z = 26 \\
III.& \qquad -9x + 12y - 15z = -22
\end{align*}
$$
$x$ = [[  7/9  ]],  $y$ = [[  -5/6  ]]  und  $z$ = [[  1/3  ]]
@Algebrite.check([ 7/9; -5/6; 1/3 ])
************
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 3 \\
II.& \qquad 18x - 12y + 6z = 26 \\
III.& \qquad -9x + 12y - 15z = -22 \\ \hline
IV := 2\cdot I + II:& \qquad 36x + 0y + 12z = 32 \quad \left| :4 \right. \\
IV:& \qquad 9x + 3z = 8 \\[6pt]
V := 2\cdot I - III:& \qquad 27x + 0y + 21z = 28 \\
& \qquad \Rightarrow\; 27x + 21z = 28 \\[6pt]
(IV)\cdot 3:& \qquad 27x + 9z = 24 \\ \hline
V - (IV)\cdot 3:& \qquad 12z = 4 \;\Rightarrow\; z = \dfrac{1}{3} \\[6pt]
z \cap IV:& \qquad 9x + 3\cdot \dfrac{1}{3} = 8 \;\Rightarrow\; 9x + 1 = 8 \;\Rightarrow\; 9x = 7 \;\Rightarrow\; x = \dfrac{7}{9} \\[6pt]
z,x \cap I:& \qquad 9\cdot \dfrac{7}{9} + 6y + 3\cdot \dfrac{1}{3} = 3 \\
& \qquad 7 + 6y + 1 = 3 \;\Rightarrow\; 6y = -5 \;\Rightarrow\; y = -\dfrac{5}{6}
\end{align*}
$$
************
</div>



</section>






<!-- Gleichungssysteme 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 16:__ **Berechne** die Lösungen des gegebenen Gleichungssystems.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__  
$$
\begin{align*}
I.& \qquad 8x + 6y + 5z = 6 \\
II.& \qquad 4x - 6y + 10z = -3 \\
III.& \qquad -4x + 12y - 30z = 13
\end{align*}
$$
$x$ = [[  3/4  ]],  $y$ = [[  1/3  ]]  und  $z$ = [[  -2/5  ]]
@Algebrite.check([ 3/4; 1/3; -2/5 ])
************
$$
\begin{align*}
I.& \qquad 8x + 6y + 5z = 6 \\
II.& \qquad 4x - 6y + 10z = -3 \\
III.& \qquad -4x + 12y - 30z = 13 \\ \hline
IV := I + II:&\qquad 12x + 15z = 3 \\[6pt]
V := 2\cdot I - III:&\qquad 20x + 40z = -1 \\[6pt]
(IV)\cdot 5 \;+\; (V)\cdot(-3):&\qquad -45z = 18 \;\Rightarrow\; z = -\dfrac{2}{5} \\[6pt]
z \cap IV:&\qquad 12x + 15\!\left(-\dfrac{2}{5}\right) = 3 \;\Rightarrow\; 12x - 6 = 3 \;\Rightarrow\; x = \dfrac{3}{4} \\[6pt]
z,x \cap I:&\qquad 8\cdot\dfrac{3}{4} + 6y + 5\!\left(-\dfrac{2}{5}\right) = 6 \;\Rightarrow\; 6 + 6y - 2 = 6 \;\Rightarrow\; y = \dfrac{1}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__  
$$
\begin{align*}
I.& \qquad 6x + 8y + 9z = 9 \\
II.& \qquad 12x - 8y + 3z = -10 \\
III.& \qquad -6x + 16y - 12z = 7
\end{align*}
$$
$x$ = [[  -1/2  ]],  $y$ = [[  3/4  ]]  und  $z$ = [[  2/3  ]]
@Algebrite.check([ -1/2; 3/4; 2/3 ])
************
$$
\begin{align*}
I.& \qquad 6x + 8y + 9z = 9 \\
II.& \qquad 12x - 8y + 3z = -10 \\
III.& \qquad -6x + 16y - 12z = 7 \\ \hline
IV := I + II:&\qquad 18x + 12z = -1 \\[6pt]
V := 2\cdot I - III:&\qquad 18x + 30z = 11 \\[6pt]
V - IV:&\qquad 18z = 12 \;\Rightarrow\; z = \dfrac{2}{3} \\[6pt]
z \cap IV:&\qquad 18x + 12\!\left(\dfrac{2}{3}\right) = -1 \;\Rightarrow\; 18x + 8 = -1 \;\Rightarrow\; x = -\dfrac{1}{2} \\[6pt]
x,z \cap I:&\qquad 6\!\left(-\dfrac{1}{2}\right) + 8y + 9\!\left(\dfrac{2}{3}\right) = 9 \;\Rightarrow\; -3 + 8y + 6 = 9 \;\Rightarrow\; y = \dfrac{3}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__  
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 7 \\
II.& \qquad 12x - 6y + 6z = 15 \\
III.& \qquad -9x + 12y - 15z = -19
\end{align*}
$$
$x$ = [[  5/6  ]],  $y$ = [[  -1/3  ]]  und  $z$ = [[  1/2  ]]
@Algebrite.check([ 5/6; -1/3; 1/2 ])
************
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 7 \\
II.& \qquad 12x - 6y + 6z = 15 \\
III.& \qquad -9x + 12y - 15z = -19 \\ \hline
IV := I + II:&\qquad 21x + 9z = 22 \\[6pt]
V := 2\cdot I - III:&\qquad 27x + 21z = 33 \\[6pt]
(IV)\cdot 7 \;+\; (V)\cdot(-3):&\qquad 66x = 55 \;\Rightarrow\; x = \dfrac{5}{6} \\[6pt]
x \cap IV:&\qquad 21\!\left(\dfrac{5}{6}\right) + 9z = 22 \;\Rightarrow\; \dfrac{105}{6} + 9z = 22 \;\Rightarrow\; 9z = \dfrac{9}{2} \;\Rightarrow\; z = \dfrac{1}{2} \\[6pt]
x,z \cap I:&\qquad 9\!\left(\dfrac{5}{6}\right) + 6y + 3\!\left(\dfrac{1}{2}\right) = 7 \;\Rightarrow\; \dfrac{15}{2} + 6y + \dfrac{3}{2} = 7 \;\Rightarrow\; 6y = -2 \;\Rightarrow\; y = -\dfrac{1}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 10y + 4z = 8 \\
II.& \qquad 15x - 10y + 8z = -3 \\
III.& \qquad -5x + 20y - 12z = 15
\end{align*}
$$
$x$ = [[  2/5  ]],  $y$ = [[  7/10  ]]  und  $z$ = [[  -1/4  ]]
@Algebrite.check([ 2/5; 7/10; -1/4 ])
************
$$
\begin{align*}
I.& \qquad 5x + 10y + 4z = 8 \\
II.& \qquad 15x - 10y + 8z = -3 \\
III.& \qquad -5x + 20y - 12z = 15 \\ \hline
IV := I + II:&\qquad 20x + 12z = 5 \\[6pt]
V := 2\cdot I - III:&\qquad 15x + 20z = 1 \\[6pt]
(IV)\cdot 5 \;+\; (V)\cdot(-3):&\qquad 55x = 22 \;\Rightarrow\; x = \dfrac{2}{5} \\[6pt]
x \cap IV:&\qquad 20\!\left(\dfrac{2}{5}\right) + 12z = 5 \;\Rightarrow\; 8 + 12z = 5 \;\Rightarrow\; z = -\dfrac{1}{4} \\[6pt]
x,z \cap I:&\qquad 5\!\left(\dfrac{2}{5}\right) + 10y + 4\!\left(-\dfrac{1}{4}\right) = 8 \;\Rightarrow\; 2 + 10y - 1 = 8 \;\Rightarrow\; y = \dfrac{7}{10}
\end{align*}
$$
************
</div>


</section>








<!-- Gleichungssysteme 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 17:__ Beim Schulfest verkauft die betrachtet Klasse Kuchenstücke und Waffeln. Am Ende stehen insgesamt 26 verkaufte Teile auf der Liste. Ein Kuchenstück kostet 2 €, eine Waffel 3 €. Zusammen wurden 62 € eingenommen. **Berechne**, wie viele Kuchenstücke und wie viele Waffeln verkauft wurden.



<!-- data-solution-button="5"-->
$x$ = [[  16  ]] und $y$ = [[  10  ]] 
@Algebrite.check([ 16; 10 ])
************
Bezeichne mit $x$ die Anzahl der Kuchenstücke und mit $y$ die Anzahl der Waffeln.
$$
\begin{align*}
I.& \qquad x + y = 26 \\
II.& \qquad 2x + 3y = 62  \\ \hline
I.& \qquad x + y = 26 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 52 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 62 - 52 \\
& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 26 \quad \left| -10 \right. \\
& \qquad x = 16
\end{align*}
$$
Es wurden 16 Kuchenstücke und 10 Waffeln verkauft.
************




<!-- Gleichungssysteme 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 18:__ Beim Klassenflohmarkt verkauft die betrachte Klasse Postkarten und Lesezeichen. Insgesamt wurden 34 Artikel verkauft. Eine Postkarte kostet 1 €, ein Lesezeichen 2 €. Am Ende zählen die Schüler:innen 44 € Einnahmen. **Berechne**, wie viele Postkarten und wie viele Lesezeichen verkauft wurden.


<!-- data-solution-button="5"-->
$x$ = [[  24  ]] und $y$ = [[  10  ]]
@Algebrite.check([ 24; 10 ])
************
Bezeichne mit $x$ die Anzahl der Postkarten und mit $y$ die Anzahl der Lesezeichen.
$$
\begin{align*}
I.& \qquad x + y = 34 \\
II.& \qquad x + 2y = 44 \\ \hline
2\cdot I:& \qquad 2x + 2y = 68 \\[4pt]
(2\cdot I) - II:& \qquad (2x + 2y) - (x + 2y) = 68 - 44 \\
& \qquad x = 24 \\[6pt]
x \cap I:& \qquad 24 + y = 34 \quad \left| -24 \right. \\
& \qquad y = 10
\end{align*}
$$
Es wurden 24 Postkarten und 10 Lesezeichen verkauft.
************




<!-- Gleichungssysteme 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 19:__ Auf einem Parkplatz stehen insgesamt 28 Fahrzeuge. Darunter befinden sich Autos und Motorräder. Zusammen haben alle Fahrzeuge 80 Räder.  
**Berechne** die Anzahl der Autos und Motorräder.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]] und $y$ = [[  16  ]]
@Algebrite.check([ 12; 16 ])
************
Bezeichnen wir mit $x$ die Anzahl der Autos und mit $y$ die Anzahl der Motorräder.
$$
\begin{align*}
I.& \qquad x + y = 28 \\
II.& \qquad 4x + 2y = 80 \\ \hline
II.& \qquad 4x + 2y = 80 \quad \left| :2 \right. \\
& \qquad 2x + y = 40 \\[6pt]
(2x + y) - (x + y):& \qquad x = 12 \\[6pt]
x \cap I:& \qquad 12 + y = 28 \;\Rightarrow\; y = 16
\end{align*}
$$
Es stehen 12 Autos und 16 Motorräder auf dem Parkplatz.
************





<!-- Gleichungssysteme 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 20:__ Auf einem Innenhof stehen Bänke: einige sind 2er-Bänke, andere 3er-Bänke. Insgesamt sind es 22 Bänke mit zusammen 56 Sitzplätzen.  
**Berechne** die Anzahl der 2er-Bänke und der 3er-Bänke.

<!-- data-solution-button="5"-->
$x$ = [[  10  ]] und $y$ = [[  12  ]]
@Algebrite.check([ 10; 12 ])
************
Bezeichne mit $x$ die Anzahl der 2er-Bänke und mit $y$ die Anzahl der 3er-Bänke.
$$
\begin{align*}
I.& \qquad x + y = 22 \\
II.& \qquad 2x + 3y = 56 \\ \hline
I.& \qquad x + y = 22 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 44 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 56 - 44 \\
& \qquad y = 12 \\[6pt]
y \cap I:& \qquad x + 12 = 22 \quad \left| -12 \right. \\
& \qquad x = 10
\end{align*}
$$
Es gibt 10 2er-Bänke und 12 3er-Bänke.
************





#### Übungsaufgaben zu Gleichungssystemen 21 bis 30



<!-- Gleichungssysteme 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 21:__ Auf einer Weide sind Hühner und Ziegen. Insgesamt zählst du 21 Tiere. Zusammen haben die Tiere 62 Beine.  
**Berechne** die Anzahl der Hühner und der Ziegen.

<!-- data-solution-button="5"-->
$x$ = [[  11  ]] und $y$ = [[  10  ]]
@Algebrite.check([ 11; 10 ])
************
Bezeichne mit $x$ die Anzahl der Hühner (je 2 Beine) und mit $y$ die Anzahl der Ziegen (je 4 Beine).
$$
\begin{align*}
I.& \qquad x + y = 21 \\
II.& \qquad 2x + 4y = 62 \\ \hline
II.& \qquad 2x + 4y = 62 \quad \left| :2 \right. \\
& \qquad x + 2y = 31 \\ \hline
(x + 2y) - (x + y):& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 21 \quad \left| -10 \right. \\
& \qquad x = 11
\end{align*}
$$
Es gibt 11 Hühner und 10 Ziegen.
************



<!-- Gleichungssysteme 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 22:__ Ein Kartenspiel besteht aus grünen und blauen Karten. Insgesamt sind es 28 Karten. Jede grüne Karte zählt 3 Punkte, jede blaue Karte 5 Punkte. Zusammen ergeben alle Karten 112 Punkte.  
**Berechne** die Anzahl der grünen und der blauen Karten.

<!-- data-solution-button="5"-->
$x$ = [[  14  ]] und $y$ = [[  14  ]]
@Algebrite.check([ 14; 14 ])
************
Bezeichne mit $x$ die Anzahl der grünen Karten (3 Punkte) und mit $y$ die Anzahl der blauen Karten (5 Punkte).
$$
\begin{align*}
I.& \qquad x + y = 28 \\
II.& \qquad 3x + 5y = 112 \\ \hline
I.& \qquad x + y = 28 \quad \left| \cdot 3 \right. \\
& \qquad 3x + 3y = 84 \\ \hline
II. - 3\cdot I:& \qquad (3x + 5y) - (3x + 3y) = 112 - 84 \\
& \qquad 2y = 28 \quad \left| :2 \right. \\
& \qquad y = 14 \\[6pt]
y \cap I:& \qquad x + 14 = 28 \quad \left| -14 \right. \\
& \qquad x = 14
\end{align*}
$$
Es gibt 14 grüne und 14 blaue Karten.
************





<!-- Gleichungssysteme 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 23:__ Zwei Tätigkeiten werden an einem Tag erledigt. Zusammen beträgt die Arbeitszeit 8 Stunden. Die eine Tätigkeit wird mit 12 € pro Stunde vergütet, die andere mit 8 € pro Stunde. Insgesamt werden 85 € ausgezahlt.  
**Berechne** die gearbeiteten Stunden der beiden Tätigkeiten.

<!-- data-solution-button="5"-->
$x$ = [[  21/4  ]] und $y$ = [[  11/4  ]]
@Algebrite.check([ 21/4; 11/4 ])
************
Bezeichne mit $x$ die Stunden der höher vergüteten Tätigkeit $\left( 12\, \dfrac{\text{€}}{\text{h}} \right)$ und mit $y$ die Stunden der anderen Tätigkeit $\left( 8\, \dfrac{\text{€}}{\text{h}} \right)$.
$$
\begin{align*}
I.& \qquad x + y = 8 \\
II.& \qquad 12x + 8y = 85 \\ \hline
8\cdot I:& \qquad 8x + 8y = 64 \\[4pt]
II - (8\cdot I):& \qquad (12x + 8y) - (8x + 8y) = 85 - 64 \\
& \qquad 4x = 21 \;\Rightarrow\; x = \dfrac{21}{4} \\[6pt]
x \cap I:& \qquad \dfrac{21}{4} + y = 8 
\;\Rightarrow\; y = 8 - \dfrac{21}{4} 
= \dfrac{32 - 21}{4} 
= \dfrac{11}{4}
\end{align*}
$$
Die Arbeitszeiten betragen $\dfrac{21}{4}$ h und $\dfrac{11}{4}$ h.
************

<!-- Gleichungssysteme 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ Zwei Geräte laufen an einem Tag zusammen 5 Stunden. Gerät A kostet pro Stunde 1,40 €, Gerät B pro Stunde 0,90 €. Am Ende betragen die Gesamtkosten 6,70 €.  
**Berechne** die Laufzeiten beider Geräte.

<!-- data-solution-button="5"-->
$x$ = [[  22/5  ]] und $y$ = [[  3/5  ]]
@Algebrite.check([ 22/5; 3/5 ])
************
Bezeichne mit $x$ die Laufzeit von Gerät A (in Stunden) und mit $y$ die Laufzeit von Gerät B.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 1{,}4x + 0{,}9y = 6{,}7 \\ \hline
\text{Zehnfaches von } II\!:& \qquad 14x + 9y = 67 \\
9\cdot I\!:& \qquad 9x + 9y = 45 \\ \hline
(14x{+}9y) - (9x{+}9y):& \qquad 5x = 22 \;\Rightarrow\; x = \dfrac{22}{5} \\[6pt]
x \cap I:& \qquad \dfrac{22}{5} + y = 5 \;\Rightarrow\; y = 5 - \dfrac{22}{5} = \dfrac{3}{5}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{22}{5}\,\text{h} $ und $ \dfrac{3}{5}\,\text{h} $.
************



<!-- Gleichungssysteme 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ Ein Mensch legt an einem Tag eine Strecke zurück: Einen Teil fährt der Mensch mit dem Fahrrad $\left(15 \,\dfrac{\text{km}}{\text{h}} \right)$, den anderen geht dieser zu Fuß $\left(5 \,\dfrac{\text{km}}{\text{h}} \right)$. Insgesamt ist der Mensch 3 Stunden unterwegs und die Strecke ist 24 km lang.  
**Berechne** die Zeitanteile der beiden Abschnitte.

<!-- data-solution-button="5"-->
$x$ = [[  9/10  ]] und $y$ = [[  21/10  ]]
@Algebrite.check([ 9/10; 21/10 ])
************
Bezeichne mit $x$ die Fahrzeit mit dem Fahrrad (in Stunden) und mit $y$ die Gehzeit.
$$
\begin{align*}
I.& \qquad x + y = 3 \\
II.& \qquad 15x + 5y = 24 \\ \hline
5\cdot I:& \qquad 5x + 5y = 15 \\ \hline
II - (5\cdot I):& \qquad (15x + 5y) - (5x + 5y) = 24 - 15 \\
& \qquad 10x = 9 \;\Rightarrow\; x = \dfrac{9}{10} \\[6pt]
x \cap I:& \qquad \dfrac{9}{10} + y = 3 
\;\Rightarrow\; y = 3 - \dfrac{9}{10} 
= \dfrac{30 - 9}{10} 
= \dfrac{21}{10}
\end{align*}
$$
Die Zeiten betragen $\dfrac{9}{10}\,\text{h}$ (Fahrrad) und $\dfrac{21}{10}\,\text{h}$ (zu Fuß).
************






<!-- Gleichungssysteme 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ Ein Mensch bearbeitet an einem Nachmittag zwei Textkapitel. Insgesamt arbeitet dieser 5 Stunden. Beim ersten Kapitel schafft er 60 Seiten pro Stunde, beim zweiten 40 Seiten pro Stunde. Am Ende hast der Mensch zusammen 255 Seiten bearbeitet.  
**Berechne** die Arbeitszeiten für beide Kapitel.

<!-- data-solution-button="5"-->
$x$ = [[  11/4  ]] und $y$ = [[  9/4  ]]
@Algebrite.check([ 11/4; 9/4 ])
************
Bezeichne mit $x$ die Zeit am ersten Kapitel (in Stunden) und mit $y$ die Zeit am zweiten Kapitel.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 60x + 40y = 255 \\ \hline
40\cdot I\!:& \qquad 40x + 40y = 200 \\ \hline
II - (40\cdot I)\!:& \qquad (60x + 40y) - (40x + 40y) = 255 - 200 \\
& \qquad 20x = 55 \;\Rightarrow\; x = \dfrac{55}{20} = \dfrac{11}{4} \\[6pt]
x \cap I\!:& \qquad \dfrac{11}{4} + y = 5 
\;\Rightarrow\; y = 5 - \dfrac{11}{4} 
= \dfrac{20 - 11}{4} 
= \dfrac{9}{4}
\end{align*}
$$
Die Arbeitszeiten betragen $ \dfrac{11}{4}\,\text{h}$ (erstes Kapitel) und $ \dfrac{9}{4}\,\text{h}$ (zweites Kapitel).
************



<!-- Gleichungssysteme 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 27:__ In einem Kassenfach liegen 1-€, 2-€ und 50-Cent-Münzen. Insgesamt sind es 30 Münzen. Der Gesamtwert beträgt 33 €. Außerdem gibt es zwei 50-Cent-Münzen weniger als 1-€-Münzen.  
**Berechne** die Anzahl der 1-€, 2-€ und 50-Cent-Münzen.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]], $y$ = [[  8  ]] und $z$ = [[  10  ]]
@Algebrite.check([ 12; 8; 10 ])
************
Bezeichne mit $x$ die Anzahl der 1-€-Münzen, mit $y$ die Anzahl der 2-€-Münzen und mit $z$ die Anzahl der 50-Cent-Münzen.
$$
\begin{align*}
I.& \qquad x + y + z = 30 \\
II.& \qquad 100x + 200y + 50z = 3300 \\
III.& \qquad z = x - 2 \\ \hline
I \cap III:& \qquad x + y + (x - 2) = 30 \\
& \qquad 2x + y = 32 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 100x + 200y + 50(x - 2) = 3300 \\
& \qquad 150x + 200y = 3400 \quad \left| :50 \right. \\
& \qquad 3x + 4y = 68 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad y = 32 - 2x \\[6pt]
\text{In (V):}& \qquad 3x + 4(32 - 2x) = 68 \\
& \qquad 3x + 128 - 8x = 68 \\
& \qquad -5x = -60 \;\Rightarrow\; x = 12 \\[6pt]
\text{Dann:}& \qquad y = 32 - 2\cdot 12 = 8 \\
& \qquad z = x - 2 = 10
\end{align*}
$$
Es liegen $12$ Stück 1-€-Münzen, $8$ Stück 2-€-Münzen und $10$ Stück 50-Cent-Münzen im Kassenfach.
************




<!-- Gleichungssysteme 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ Bei einer Veranstaltung werden drei Ticketarten verkauft: Einzeltickets zu 2 €, Tagestickets zu 5 € und ermäßigte Tickets zu 3 €. Insgesamt werden 24 Tickets verkauft und der Umsatz beträgt 78 €. Außerdem gibt es vier ermäßigte Tickets weniger als Einzeltickets.  
**Berechne** die Anzahl der drei Ticketarten.

<!-- data-solution-button="5"-->
$x$ = [[  10  ]], $y$ = [[  8  ]] und $z$ = [[  6  ]]
@Algebrite.check([ 10; 8; 6 ])
************
Bezeichne mit $x$ die Anzahl der Einzeltickets, mit $y$ die Anzahl der Tagestickets und mit $z$ die Anzahl der ermäßigten Tickets.
$$
\begin{align*}
I.& \qquad x + y + z = 24 \\
II.& \qquad 2x + 5y + 3z = 78 \\
III.& \qquad z = x - 4 \\ \hline
I \cap III:& \qquad x + y + (x - 4) = 24 \\
& \qquad 2x + y = 28 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 2x + 5y + 3(x - 4) = 78 \\
& \qquad 5x + 5y = 90 \quad \left| :5 \right. \\
& \qquad x + y = 18 \quad \text{(V)} \\ \hline
(IV) - (V):& \qquad (2x + y) - (x + y) = 28 - 18 \\
& \qquad x = 10 \\[6pt]
\text{Dann:}& \qquad y = 18 - 10 = 8,\quad z = x - 4 = 6
\end{align*}
$$
Es wurden $10$ Einzeltickets, $8$ Tagestickets und $6$ ermäßigte Tickets verkauft.
************



<!-- Gleichungssysteme 0029 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 29:__ In einem Klassenzimmer sind Stühle aus Holz, Kunststoff und Metall aufgestellt. Insgesamt gibt es 36 Stühle. Die Holzstühle wiegen jeweils 5 kg, die Kunststoffstühle 3 kg und die Metallstühle 7 kg. Zusammen beträgt das Gewicht aller Stühle 180 kg. Außerdem sind doppelt so viele Kunststoffstühle vorhanden wie Metallstühle.  
**Berechne** die Anzahl der Holz-, Kunststoff- und Metallstühle.

<!-- data-solution-button="5"-->
$x$ = [[  12  ]], $y$ = [[  16  ]] und $z$ = [[  8  ]]
@Algebrite.check([ 12; 16; 8 ])
************
Bezeichne mit $x$ die Anzahl der Holzstühle, mit $y$ die Anzahl der Kunststoffstühle und mit $z$ die Anzahl der Metallstühle.
$$
\begin{align*}
I.& \qquad x + y + z = 36 \\
II.& \qquad 5x + 3y + 7z = 180 \\
III.& \qquad y = 2z \\ \hline
I \cap III:& \qquad x + 2z + z = 36 \\
& \qquad x + 3z = 36 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 5x + 3(2z) + 7z = 180 \\
& \qquad 5x + 6z + 7z = 180 \\
& \qquad 5x + 13z = 180 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad x = 36 - 3z \\[6pt]
\text{In (V):}& \qquad 5(36 - 3z) + 13z = 180 \\
& \qquad 180 - 15z + 13z = 180 \\
& \qquad -2z = 0 \;\Rightarrow\; z = 0 \;\; \text{(Fehler!)} 
\end{align*}
$$



<!-- Gleichungssysteme 0030 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ Du planst in einer Woche Einheiten in drei Ausdauersportarten: Laufen, Radfahren und Schwimmen. Insgesamt absolvierst du 14 Einheiten. Pro Laufeinheit rechnest du mit 500 kcal, pro Radeinheit mit 300 kcal und pro Schwimmeinheit mit 200 kcal. Zusammen ergeben sich 4900 kcal. Außerdem fährst du doppelt so oft Rad wie du schwimmst.  
**Berechne** die Anzahl der Einheiten in den drei Sportarten.

<!-- data-solution-button="5"-->
$x$ = [[  5  ]], $y$ = [[  6  ]] und $z$ = [[  3  ]]
@Algebrite.check([ 5; 6; 3 ])
************
Bezeichne mit $x$ die Anzahl der Laufeinheiten, mit $y$ die Anzahl der Radeinheiten und mit $z$ die Anzahl der Schwimmeinheiten.
$$
\begin{align*}
I.& \qquad x + y + z = 14 \\
II.& \qquad 500x + 300y + 200z = 4900 \\
III.& \qquad y = 2z \\ \hline
I \cap III:& \qquad x + 2z + z = 14 \\
& \qquad x + 3z = 14 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 500x + 300(2z) + 200z = 4900 \\
& \qquad 500x + 800z = 4900 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad x = 14 - 3z \\[6pt]
\text{In (V):}& \qquad 500(14 - 3z) + 800z = 4900 \\
& \qquad 7000 - 1500z + 800z = 4900 \\
& \qquad -700z = -2100 \;\Rightarrow\; z = 3 \\[6pt]
\text{Dann:}& \qquad y = 2z = 6,\quad x = 14 - 3\cdot 3 = 5
\end{align*}
$$
Es ergeben sich $5$ Laufeinheiten, $6$ Radeinheiten und $3$ Schwimmeinheiten.
************





#### Übungsaufgaben zu Gleichungssystemen 31 bis 40


<!-- Gleichungssysteme 0031 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 31:__ Es werden drei elektrische Geräte mit den Leistungen $1{,}2\,\text{kW}$, $0{,}9\,\text{kW}$ und $0{,}6\,\text{kW}$ verwendet. Zusammen laufen sie $5$ Stunden. Insgesamt werden $5{,}1\,\text{kWh}$ zugeführt. Außerdem läuft das zweite Gerät eine halbe Stunde länger als das erste.  
**Berechne** die Laufzeiten der drei Geräte.

<!-- data-solution-button="5"-->
$x$ = [[  13/6  ]], $y$ = [[  8/3  ]] und $z$ = [[  1/6  ]]
@Algebrite.check([ 13/6; 8/3; 1/6 ])
************
Bezeichne mit $x$ die Laufzeit des ersten Geräts ($1{,}2\,\text{kW}$), mit $y$ die Laufzeit des zweiten Geräts ($0{,}9\,\text{kW}$) und mit $z$ die Laufzeit des dritten Geräts ($0{,}6\,\text{kW}$).
$$
\begin{align*}
I.& \qquad x + y + z = 5 \\
II.& \qquad 1{,}2x + 0{,}9y + 0{,}6z = 5{,}1 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
\text{Zehnfaches von } II\!:& \qquad 12x + 9y + 6z = 51 \\[6pt]
\text{Aus } I \text{ und } III\!:& \qquad x + (x + \dfrac{1}{2}) + z = 5 \\
& \qquad 2x + z = \dfrac{9}{2} \quad \text{(IV)} \\[6pt]
\text{Setze } y = x + \dfrac{1}{2} \text{ in } (10\cdot II)\!:& \qquad 12x + 9\!\left(x + \dfrac{1}{2}\right) + 6z = 51 \\
& \qquad 21x + 6z = \dfrac{93}{2} \quad \left| \cdot 2 \right. \\
& \qquad 42x + 12z = 93 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad 2x + z = \dfrac{9}{2} \;\Rightarrow\; 12x + 6z = 27 \quad \text{(VI)} \\[6pt]
\text{(V) } - 2\cdot\text{(VI):}& \qquad (42x + 12z) - (24x + 12z) = 93 - 54 \\
& \qquad 18x = 39 \;\Rightarrow\; x = \dfrac{13}{6} \\[6pt]
\text{Dann:}& \qquad y = x + \dfrac{1}{2} = \dfrac{13}{6} + \dfrac{3}{6} = \dfrac{8}{3} \\[6pt]
I:& \qquad z = 5 - x - y = 5 - \dfrac{13}{6} - \dfrac{8}{3} = \dfrac{1}{6}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{13}{6}\,\text{h}$, $ \dfrac{8}{3}\,\text{h}$ und $ \dfrac{1}{6}\,\text{h}$.
************




<!-- Gleichungssysteme 0032 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 32:__ Drei Maschinen produzieren Teile. Zusammen laufen sie 5 Stunden. Pro Stunde fertigen sie $12$, $18$ bzw. $30$ Teile. Insgesamt entstehen $79$ Teile. Außerdem läuft die zweite Maschine eine halbe Stunde länger als die erste.  
**Berechne** die Laufzeiten der drei Maschinen.

<!-- data-solution-button="5"-->
$x$ = [[  13/6  ]], $y$ = [[  8/3  ]] und $z$ = [[  1/6  ]]
@Algebrite.check([ 13/6; 8/3; 1/6 ])
************
Bezeichne mit $x$ die Laufzeit der ersten Maschine (in Stunden), mit $y$ die der zweiten und mit $z$ die der dritten.
$$
\begin{align*}
I.& \qquad x + y + z = 5 \\
II.& \qquad 12x + 18y + 30z = 79 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = 5 \\
& \qquad 2x + z = \dfrac{9}{2} \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 12x + 18\!\left(x + \dfrac{1}{2}\right) + 30z = 79 \\
& \qquad 30x + 30z = 70 \quad \left| :10 \right. \\
& \qquad 3x + 3z = 7 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad z = \dfrac{9}{2} - 2x \\[6pt]
\text{In (V):}& \qquad 3x + 3\!\left(\dfrac{9}{2} - 2x\right) = 7 \\
& \qquad 3x + \dfrac{27}{2} - 6x = 7 \\
& \qquad -3x = 7 - \dfrac{27}{2} = -\dfrac{13}{2} \\
& \qquad x = \dfrac{13}{6} \\[6pt]
\text{Dann:}& \qquad y = x + \dfrac{1}{2} = \dfrac{13}{6} + \dfrac{3}{6} = \dfrac{8}{3}, \\
& \qquad z = \dfrac{9}{2} - 2\cdot \dfrac{13}{6} = \dfrac{27}{6} - \dfrac{26}{6} = \dfrac{1}{6}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{13}{6}\,\text{h}$, $ \dfrac{8}{3}\,\text{h}$ und $ \dfrac{1}{6}\,\text{h}$.
************





<!-- Gleichungssysteme 0033 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 33:__ Es werden drei Fruchtsäfte mit unterschiedlichen Zuckergehalten gemischt: Saft A enthält $120\,\text{g}$ Zucker je Liter, Saft B $80\,\text{g}$ je Liter und Saft C $50\,\text{g}$ je Liter. Insgesamt werden $9$ Liter gemischt. Der Gesamtzuckergehalt beträgt $815\,\text{g}$. Außerdem wird von Saft B einen halben Liter mehr als von Saft A verwendet.  
**Berechne** die Literanteile der drei Säfte.

<!-- data-solution-button="5"-->
$x$ = [[  7/2  ]], $y$ = [[  4  ]] und $z$ = [[  3/2  ]]
@Algebrite.check([ 7/2; 4; 3/2 ])
************
Bezeichne mit $x$ die Liter von Saft A, mit $y$ die Liter von Saft B und mit $z$ die Liter von Saft C.
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 120x + 80y + 50z = 815 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = 9 \\
& \qquad 2x + z = \dfrac{17}{2} \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 120x + 80\!\left(x + \dfrac{1}{2}\right) + 50z = 815 \\
& \qquad 200x + 50z = 815 - 40 = 775 \quad \left| :25 \right. \\
& \qquad 8x + 2z = 31 \quad \text{(V)} \\ \hline
(V) - 2\cdot(IV):& \qquad (8x + 2z) - (4x + 2z) = 31 - 17 \\
& \qquad 4x = 14 \;\Rightarrow\; x = \dfrac{7}{2} \\[6pt]
III:& \qquad y = x + \dfrac{1}{2} = \dfrac{7}{2} + \dfrac{1}{2} = 4 \\[6pt]
I:& \qquad z = 9 - x - y = 9 - \dfrac{7}{2} - 4 = \dfrac{3}{2}
\end{align*}
$$
Die Anteile betragen $ \dfrac{7}{2}\,\ell$ (Saft A), $4\,\ell$ (Saft B) und $ \dfrac{3}{2}\,\ell$ (Saft C).
************




<!-- Gleichungssysteme 0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 34:__ Für eine Nussmischung werden Mandeln (6 €/kg), Erdnüsse (4 €/kg) und Cashews (10 €/kg) gemischt. Insgesamt entstehen $ \dfrac{15}{2}\,\text{kg} $ Mischung. Der Materialwert beträgt 47 €. Außerdem werden um ein halbes Kilogramm mehr Erdnüsse als Mandeln verwendet.  
**Berechne** die eingesetzten Kilogramm der drei Sorten.

<!-- data-solution-button="5"-->
$x$ = [[  5/2  ]], $y$ = [[  3  ]] und $z$ = [[  2  ]]
@Algebrite.check([ 5/2; 3; 2 ])
************
Bezeichne mit $x$ die Kilogramm Mandeln, mit $y$ die Kilogramm Erdnüsse und mit $z$ die Kilogramm Cashews.
$$
\begin{align*}
I.& \qquad x + y + z = \dfrac{15}{2} \\
II.& \qquad 6x + 4y + 10z = 47 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = \dfrac{15}{2} \\
& \qquad 2x + z = 7 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 6x + 4\!\left(x + \dfrac{1}{2}\right) + 10z = 47 \\
& \qquad 10x + 2 + 10z = 47 \\
& \qquad 10x + 10z = 45 \quad \left| :5 \right. \\
& \qquad 2x + 2z = 9 \quad \text{(V)} \\ \hline
\text{(V)} - 2\cdot\text{(IV)}:& \qquad (2x + 2z) - (4x + 2z) = 9 - 14 \\
& \qquad -2x = -5 \;\Rightarrow\; x = \dfrac{5}{2} \\[6pt]
III:& \qquad y = x + \dfrac{1}{2} = \dfrac{5}{2} + \dfrac{1}{2} = 3 \\[6pt]
IV:& \qquad 2\cdot \dfrac{5}{2} + z = 7 \;\Rightarrow\; 5 + z = 7 \;\Rightarrow\; z = 2
\end{align*}
$$
Es werden $ \dfrac{5}{2}\,\text{kg} $ Mandeln, $ 3\,\text{kg} $ Erdnüsse und $ 2\,\text{kg} $ Cashews verwendet.
************





