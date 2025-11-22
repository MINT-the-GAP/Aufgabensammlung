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







#### Übungsaufgaben zur Äquivalenzumformung 1 bis 10




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1a.png)  
$x=$ [[  3  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1b.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1c.png)  
$x=$ [[  8  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1d.png)  
$x=$ [[  3  ]] Streichhölzer







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1e.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1f.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1g.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1h.png)  
$x=$ [[  5  ]] Streichhölzer









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 3:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1i.png)  
$x=$ [[  4  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1j.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1k.png)  
$x=$ [[  4  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1l.png)  
$x=$ [[  2  ]] Streichhölzer









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 4:__ In jeder Schachtel mit der Aufschrift $x$ befinden sich gleich viele Streichhölzer. Auf jeder Seite des Gleichheitszeichen befindet sich die selbe Anzahl an Streichhölzern. **Bestimme** bei allen Streichholzschachtelgleichungen wie viele Streichhölzer sich in einer Schachtel befinden.

<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/streichholz1m.png)  
$x=$ [[  5  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/streichholz1n.png)  
$x=$ [[  2  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/streichholz1o.png)  
$x=$ [[  1  ]] Streichhölzer

<!-- style="width:600px" data-solution-button="5" -->
__$d)\;\;$__ ![](Kap2/streichholz1p.png)  
$x=$ [[  3  ]] Streichhölzer




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 5:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1a.png)  
$x=$ [[  5    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1d.png)  
$x=$ [[  2    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1g.png)  
$x=$ [[  0,75  ]] kg







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 6:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1b.png)  
$x=$ [[  3    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1e.png)  
$x=$ [[  2    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1h.png)  
$x=$ [[  1,83  ]] kg







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 7:__ **Bestimme** die Massenwert des Massestückchens $x$.


<!-- style="width:600px" data-solution-button="5" -->
__$a)\;\;$__ ![](Kap2/waage1c.png)  
$x=$ [[  4    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$b)\;\;$__ ![](Kap2/waage1f.png)  
$x=$ [[  5    ]] kg

<!-- style="width:600px" data-solution-button="5" -->
__$c)\;\;$__ ![](Kap2/waage1i.png)  
$x=$ [[  1,56  ]] kg








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.

$$
\begin{align*}
  11+6 \cdot x & = 3 + 8 \cdot x  \quad \left|  -3  \right. \\
  8 + 6 \cdot x & = 8 \cdot x  \quad \left|  -6x  \right. \\
  8  & = 2 \cdot x  \quad \left|  : 2  \right. \\
  4  & = x   \\
\end{align*}
$$

$$
\begin{align*}
  11+6 \cdot 4 & = 3 + 8 \cdot 4   \\
  11 + 24 & = 3 + 32  \\
  35  & = 35   \\
\end{align*}
$$

<!-- data-solution-button="5" 
data-show-partial-solution -->
Um die Gleichung zu sortieren, wird zu nächst auf beiden Seiten des Gleichungszeichen [[  -3  ]] gerechnet. Anschließend wird $-6x$ auf [[     beiden Seiten des Gleichheitszeichen     ]] gerechnet, sodass alles, was mit der Variable $x$ multipliziert ist, auf einer Seite des Gleichheitszeichen ist und alles andere auf der anderen Seite. Abschließend wird durch den Vorfaktor [[  2  ]] [[  dividiert  ]]. Nachdem die [[  Lösung  ]] der Gleichung gefunden wurde, wird die [[  Probe  ]] durchgeführt, indem die Lösung für $x$ in die [[  Gleichung  ]] vom Anfang eingesetzt wird. Ist auf beiden Seiten des Gleichheitszeichen der gleiche Wert, dann ist die Lösung korrekt.




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 9:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.


$$
\begin{align*}
  \dfrac{3}{x-2} & = \dfrac{4}{3x+7}    \quad \left|  \cdot (x-2)  \right. \\
  3 & = \dfrac{4}{3x+7} (x-2)    \quad \left|  \cdot (3x+7) \right. \\
  3(3x+7) & = 4 (x-2)      \\
  9x+21 & = 4x-8     \quad \left| -4x \right.     \\
  5x+21 & = -8     \quad \left| -21 \right.     \\
  5x  & = -29     \quad \left| :5 \right.     \\
  x  & = -\dfrac{29}{5}       \\
\end{align*}
$$


<!-- data-solution-button="5" 
data-show-partial-solution -->
Bei dieser Gleichung steht die gesuchte Unbekannte auf beiden Seiten des Gleichheitszeichen im [[  Nenner  ]]. Um dies aufzuheben wird mit $(x-2)$ und dann mit $(3x+7)$ auf beiden Seiten des Gleichheitszeichen [[  multipliziert  ]]. Die [[  Klammern  ]] sind dabei wichtig, aufgrund der Regel: Punkt- vor [[  Strichrechnung  ]]. Anschließend wird das [[  Distributivgesetz  ]] benutzt, um die Klammern aufzulösen. Nun wird die Gleichung mit der Strichrechnung sortiert, indem erst $-4x$ und dann [[  -21  ]] auf beiden Seiten des Gleichheitszeichen gerechnet wird. Abschließend wird durch den [[  Vorfaktor  ]] $5$ dividiert.





<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 10:__ Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.


$$
\begin{align*}
  \dfrac{3}{5}x - 4 & = \dfrac{2}{7} + x    \quad \left|  + 4  \right. \\
  \dfrac{3}{5}x   & = \dfrac{30}{7} + x    \quad \left|  -x  \right. \\
  -\dfrac{2}{5}x   & = \dfrac{30}{7}    \quad \left|  \cdot 5  \right. \\
  -2x   & = \dfrac{150}{7}    \quad \left|  : 2  \right. \\
  -x   & = \dfrac{75}{7}    \quad \left|  \cdot (-1)  \right. \\
  x   & = -\dfrac{75}{7}     \\
\end{align*}
$$

<!-- data-solution-button="5" 
data-show-partial-solution -->
Als erstes wird die Gleichung sortiert, indem auf [[  beiden Seiten  ]] des Gleichheitszeichen $+4$ gerechnet wird. Anschließend wird [[  -x  ]] auf beiden Seiten des [[  Gleichheitszeichen  ]] gerechnet, sodass in den nächsten Schritten nur noch die Punktrechnung zum Einsatz kommen kann. Der Vorfaktor stückweise entfernt. Zu nächst wird [[ mit   ]] $5$ [[  multipliziert  ]], dann nächst wird [[ durch ]] $2$ [[  dividiert      ]]. Das Vorzeichen wird abschließend noch mit der [[  Multiplikation  ]] mit $(-1)$ von der Unbekannten gelöst.






#### Übungsaufgaben zur Äquivalenzumformung 11 bis 20




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  x - 4 = 9 $ \
$x$ = [[  13  ]]
************
$$
\begin{align*}
x - 4 & = 9 \quad \left| +4  \right. \\
x   & = 13  \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4 \cdot x = 36$ \
$x$ =  [[  9   ]]
************
$$
\begin{align*}
4 \cdot x & = 36 \quad \left| : 4  \right. \\
x   & = 9  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7 = \dfrac{x}{6}  $ \
$x$ =  [[  42  ]]
************
$$
\begin{align*}
7 & = \dfrac{x}{6} \quad \left| \cdot 6  \right. \\
42   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3 = x - 5 $ \
$x$ =  [[  8   ]]
************
$$
\begin{align*}
3 & = x - 5 \quad \left| +5  \right. \\
8   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  x + 8  = 13 $ \
$x$ =  [[  5   ]]
************
$$
\begin{align*}
x+8 & = 13 \quad \left| -8  \right. \\
x   & = 5  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  64 = 4 \cdot x  $ \
$x$ =  [[  16  ]]
************
$$
\begin{align*}
64 & = 4x \quad \left| :4  \right. \\
16 & = x  \\
\end{align*}
$$
************


</div>
</section>













<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  72 = 8 \cdot x $ \
$x$ = [[  9   ]]
************
$$
\begin{align*}
72 & = 8 \cdot x  \quad \left| : 8  \right. \\
9   & = x  \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{x}{7} = 5 $ \
$x$ =  [[  35  ]]
************
$$
\begin{align*}
\dfrac{x}{7} & = 5 \quad \left| \cdot 7  \right. \\
x   & = 35  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  x + 7 = 19  $ \
$x$ =  [[  12  ]]
************
$$
\begin{align*}
x + 7 & = 19 \quad \left|  -7  \right. \\
x   & = 12  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 17 = x - 8 $ \
$x$ =  [[  25  ]]
************
$$
\begin{align*}
17 & = x - 8 \quad \left| +8  \right. \\
25   & = x  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  7x = 84 $ \
$x$ =  [[  12  ]]
************
$$
\begin{align*}
7x & = 84 \quad \left| :7  \right. \\
x   & = 12  \\
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  3 = \dfrac{x}{17}  $ \
$x$ =  [[  51  ]]
************
$$
\begin{align*}
3 & = \dfrac{x}{17} \quad \left| \cdot 17  \right. \\
51 & = x  \\
\end{align*}
$$
************


</div>
</section>






















<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 13:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3x-7 = 8 - 2x $ \
$x$ = [[  3   ]]
************
$$
\begin{align*}
3x-7 & = 8 - 2x  \quad \left| +7  \right. \\
3x    & = 15 -2x  \quad \left| +2x  \right.  \\
5x    & = 15  \quad \left| :5  \right.  \\
x    & = 3   \\
\end{align*}
$$
************

</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 3x - 2 = 2x + 1 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
3x - 2 &= 2x + 1 \quad \left| -2x \right. \\
x - 2 &= 1 \quad \left| +2 \right. \\
x &= 3
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__    $ 5x + 3 = 2x + 18 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
5x + 3 &= 2x + 18 \quad \left| -2x \right. \\
3x + 3 &= 18 \quad \left| -3 \right. \\
3x &= 15 \quad \left| :3 \right. \\
x &= 5
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 4x - 4 = 2x + 10 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
4x - 4 &= 2x + 10 \quad \left| -2x \right. \\
2x - 4 &= 10 \quad \left| +4 \right. \\
2x &= 14 \quad \left| :2 \right. \\
x &= 7
\end{align*}
$$
************


</div>
</section>













<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 14:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__  $ 4x + 5 = 3x + 14 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
4x + 5 &= 3x + 14 \quad \left| -3x \right. \\
x + 5 &= 14 \quad \left| -5 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 7x - 4 = 3x + 16 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 4 &= 3x + 16 \quad \left| -3x \right. \\
4x - 4 &= 16 \quad \left| +4 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 6x - 8 = 2x + 20 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
6x - 8 &= 2x + 20 \quad \left| -2x \right. \\
4x - 8 &= 20 \quad \left| +8 \right. \\
4x &= 28 \quad \left| :4 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 10x - 12 = 4x + 24 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
10x - 12 &= 4x + 24 \quad \left| -4x \right. \\
6x - 12 &= 24 \quad \left| +12 \right. \\
6x &= 36 \quad \left| :6 \right. \\
x &= 6
\end{align*}
$$
************


</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 15:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2x - 8 = 3x - 10 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2x - 8 &= 3x - 10 \quad \left| -2x \right. \\
-8 &= x - 10 \quad \left| +10 \right. \\
2 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ 5x - 12 = 3x + 6 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
5x - 12 &= 3x + 6 \quad \left| -3x \right. \\
2x - 12 &= 6 \quad \left| +12 \right. \\
2x &= 18 \quad \left| :2 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 3x + 12 = 5x - 2 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
3x + 12 &= 5x - 2 \quad \left| -3x \right. \\
12 &= 2x - 2 \quad \left| +2 \right. \\
14 &= 2x \quad \left| :2 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 8x - 5 = 3x + 20 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
8x - 5 &= 3x + 20 \quad \left| -3x \right. \\
5x - 5 &= 20 \quad \left| +5 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 16:__ **Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2x + 10 = 4x - 6 $ \
$x$ = [[  8  ]]
************
$$
\begin{align*}
2x + 10 &= 4x - 6 \quad \left| -2x \right. \\
10 &= 2x - 6 \quad \left| +6 \right. \\
16 &= 2x \quad \left| :2 \right. \\
x &= 8
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  $ \;9x - 15 = 6x + 12 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
9x - 15 &= 6x + 12 \quad \left| -6x \right. \\
3x - 15 &= 12 \quad \left| +15 \right. \\
3x &= 27 \quad \left| :3 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__   $ 2x + 14 = 3x + 5 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
2x + 14 &= 3x + 5 \quad \left| -2x \right. \\
14 &= x + 5 \quad \left| -5 \right. \\
9 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  $ 7x - 9 = 2x + 16 \;$ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 9 &= 2x + 16 \quad \left| -2x \right. \\
5x - 9 &= 16 \quad \left| +9 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 17:__ **Berechne** den Lösungswert für die Unbekannte.


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2x + 5 + 9 = 6x - 3 - 7 $ \
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
2x + 5 + 9 &= 6x - 3 - 7 \\
2x + 14 &= 6x - 10 \quad \left| +10 \right. \\
2x + 24 &= 6x  \quad \left| -2x \right. \\
24 &= 4x \quad \left| :4 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3x + 5 + x = 2x + 17 - x $ \
$x$ = [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
3x + 5 + x &= 2x + 17 - x \\
4x + 5 &= x + 17 \quad \left| -x \right. \\
3x + 5 &= 17 \quad \left| -5 \right. \\
3x &= 12 \quad \left| :3 \right. \\
x &= 4
\end{align*}
$$
************
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $  5x - 7 + 2x = 3x + 13 $ \
$x$ = [[  5  ]]
@Algebrite.check(5)
************
$$
\begin{align*}
5x - 7 + 2x &= 3x + 13 \\
7x - 7 &= 3x + 13 \quad \left| -3x \right. \\
4x - 7 &= 13 \quad \left| +7 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $  2x + 4 + 9x = 6x - 3 - 7 $ \
$x$ = [[  2  ]]
@Algebrite.check(2)
************
$$
\begin{align*}
2x + 4 + 9x &= 6x - 3 - 7 \\
11x + 4 &= 6x - 10 \quad \left| -6x \right. \\
5x + 4 &= -10 \quad \left| -4 \right. \\
5x &= -14 \quad \left| :(-5) \right. \\
x &= 2
\end{align*}
$$
************
</div>
</section>



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 18:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4x + 6 - 2x + 3 = x + 17 $ \
$x$ = [[  8  ]]
************
$$
\begin{align*} 
4x + 6 - 2x + 3 &= x + 17  \\
2x + 9 &= x + 17 \quad \left| -x \right. \\
x + 9 &= 17 \quad \left| -9 \right. \\
x &= 8
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  6x - 5 + 2x = 3x + 25 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
 6x - 5 + 2x &= 3x + 25 \\
8x - 5 &= 3x + 25 \quad \left| -3x \right. \\
5x - 5 &= 25 \quad \left| +5 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7x + 3 - 2x = 4x + 8 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x + 3 - 2x &= 4x + 8 \\
5x + 3 &= 4x + 8 \quad \left| -4x \right. \\
x + 3 &= 8 \quad \left| -3 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  9x - 4 + x = 5x + 26 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
9x - 4 + x &= 5x + 26 \\
10x - 4 &= 5x + 26 \quad \left| -5x \right. \\
5x - 4 &= 26 \quad \left| +4 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
</section>




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 19:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4(2x-3) = 2x + 10 $ \
$x$ = [[  11/3  ]]
@Algebrite.check(11/3)
************
$$
\begin{align*}
4(2x-3) &= 2x + 10 \\
8x - 12 &= 2x + 10 \quad \left| -2x \right. \\
6x - 12 &= 10 \quad \left| +12 \right. \\
6x &= 22 \quad \left| :6 \right. \\
x &= \dfrac{11}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+4) = x + 19 $ \
$x$ = [[  7/5  ]]
@Algebrite.check(7/5)
************
$$
\begin{align*}
3(2x+4) &= x + 19 \\
6x + 12 &= x + 19 \quad \left| -x \right. \\
5x + 12 &= 19 \quad \left| -12 \right. \\
5x &= 7 \quad \left| :5 \right. \\
x &= \dfrac{7}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  2(3x-1) + 5 = 4x + 7 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(3x-1) + 5 &= 4x + 7 \\
6x - 2 + 5 &= 4x + 7 \\
6x + 3 &= 4x + 7 \quad \left| -4x \right. \\
2x + 3 &= 7 \quad \left| -3 \right. \\
2x &= 4 \quad \left| :2 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5(x+2) - 3 = 2x + 12 $ \
$x$ = [[  5/3  ]]
@Algebrite.check(5/3)
************
$$
\begin{align*}
5(x+2) - 3 &= 2x + 12 \\
5x + 10 - 3 &= 2x + 12 \\
5x + 7 &= 2x + 12 \quad \left| -2x \right. \\
3x + 7 &= 12 \quad \left| -7 \right. \\
3x &= 5 \quad \left| :3 \right. \\
x &= \dfrac{5}{3}
\end{align*}
$$
************
</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 20:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2(4x-5) = 3x + 13 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
2(4x-5) &= 3x + 13 \\
8x - 10 &= 3x + 13 \quad \left| -3x \right. \\
5x - 10 &= 13 \quad \left| +10 \right. \\
5x &= 23 \quad \left| :5 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+1) = 4x + 11 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
3(2x+1) &= 4x + 11 \\
6x + 3 &= 4x + 11 \quad \left| -4x \right. \\
2x + 3 &= 11 \quad \left| -3 \right. \\
2x &= 8 \quad \left| :2 \right. \\
x &= 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  2(5x-4) = 3x + 14 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(5x-4) &= 3x + 14 \\
10x - 8 &= 3x + 14 \quad \left| -3x \right. \\
7x - 8 &= 14 \quad \left| +8 \right. \\
7x &= 22 \quad \left| :7 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  7(x-2) + 1 = 3x + 8 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
 7(x-2) + 1 &= 3x + 8 \\
7x - 14 + 1 &= 3x + 8 \\
7x - 13 &= 3x + 8 \quad \left| -3x \right. \\
4x - 13 &= 8 \quad \left| +13 \right. \\
4x &= 21 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
</section>




#### Übungsaufgaben zur Äquivalenzumformung 21 bis 30



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 21:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3x - 7 = \dfrac{1}{2}x + 5 $ \
$x$ = [[  24/5  ]]
@Algebrite.check(24/5)
************
$$
\begin{align*}
3x - 7 &= \dfrac{1}{2}x + 5 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{5}{2}x - 7 &= 5 \quad \left| +7 \right. \\
\dfrac{5}{2}x &= 12 \quad \left| :\dfrac{5}{2} \right. \\
x &= \dfrac{24}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4x + 3 = 2x - \dfrac{5}{2} $ \
$x$ = [[  -11/4  ]]
@Algebrite.check(-11/4)
************
$$
\begin{align*}
4x + 3 &= 2x - \dfrac{5}{2} \quad \left| -2x \right. \\
2x + 3 &= -\dfrac{5}{2} \quad \left| -3 \right. \\
2x &= -\dfrac{5}{2} - \dfrac{6}{2} \\
2x &= -\dfrac{11}{2} \quad \left| :2 \right. \\
x &= -\dfrac{11}{4}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{3}x - 4 = x + 2 $ \
$x$ = [[  18  ]]
@Algebrite.check(18)
************
$$
\begin{align*}
\dfrac{5}{3}x - 4 &= x + 2 \quad \left| -x \right. \\
\dfrac{2}{3}x - 4 &= 2 \quad \left| +4 \right. \\
\dfrac{2}{3}x &= 6 \quad \left| :\dfrac{2}{3} \right. \\
x &= 18
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 5(x-1) = 3x + \dfrac{7}{3}$ \
$x$ = [[  11/3  ]]
@Algebrite.check(11/3)
************
$$
\begin{align*}
5(x-1) &= 3x + \dfrac{7}{3} \\
5x - 5 &= 3x + \dfrac{7}{3} \quad \left| -3x \right. \\
2x - 5 &= \dfrac{7}{3} \quad \left| +5 \right. \\
2x &= \dfrac{7}{3} + \dfrac{15}{3} \\
2x &= \dfrac{22}{3} \quad \left| :2 \right. \\
x &= \dfrac{11}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2\left(x + \dfrac{3}{2}\right) = \dfrac{1}{2}x + 5 $ \
$x$ = [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
 2\left(x + \dfrac{3}{2}\right) &= \dfrac{1}{2}x + 5 \\
2x + 3 &= \dfrac{1}{2}x + 5 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{2}x + 3 &= 5 \quad \left| -3 \right. \\
\dfrac{3}{2}x &= 2 \quad \left| :\dfrac{3}{2} \right. \\
x &= \dfrac{4}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{2}{3}(3x+6) = x - 2 $ \
$x$ = [[  -6  ]]
@Algebrite.check(-6)
************
$$
\begin{align*}
\dfrac{2}{3}(3x+6) &= x - 2  \\
2x + 4 &= x - 2 \quad \left| -x \right. \\
x + 4 &= -2 \quad \left| -4 \right. \\
x &= -6
\end{align*}
$$
************
</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 22:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \; 7x + \dfrac{1}{2} = 3x - \dfrac{7}{2} \;$ \
$x$ = [[  -1  ]]
@Algebrite.check(-1)
************
$$
\begin{align*}
7x + \dfrac{1}{2} &= 3x - \dfrac{7}{2} \quad \left| -3x \right. \\
4x + \dfrac{1}{2} &= -\dfrac{7}{2} \quad \left| -\dfrac{1}{2} \right. \\
4x &= -\dfrac{8}{2} \\
4x &= -4 \quad \left| :4 \right. \\
x &= -1
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \; 2x - \dfrac{7}{3} = \dfrac{1}{3}x + 5 \;$ \
$x$ = [[  22/5  ]]
@Algebrite.check(22/5)
************
$$
\begin{align*}
2x - \dfrac{7}{3} &= \dfrac{1}{3}x + 5 \quad \left| -\dfrac{1}{3}x \right. \\
\dfrac{5}{3}x - \dfrac{7}{3} &= 5 \quad \left| +\dfrac{7}{3} \right. \\
\dfrac{5}{3}x &= \dfrac{15}{3} + \dfrac{7}{3} \\
\dfrac{5}{3}x &= \dfrac{22}{3} \quad \left| :\dfrac{5}{3} \right. \\
x &= \dfrac{22}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \; \dfrac{3}{2}x + 4 = \dfrac{5}{4}x - 2 \;$ \
$x$ = [[  -24  ]]
@Algebrite.check(-24)
************
$$
\begin{align*}
\dfrac{3}{2}x + 4 &= \dfrac{5}{4}x - 2 \\
\dfrac{6}{4}x + 4 &= \dfrac{5}{4}x - 2 \quad \left| -\dfrac{5}{4}x \right. \\
\dfrac{1}{4}x + 4 &= -2 \quad \left| -4 \right. \\
\dfrac{1}{4}x &= -6 \quad \left| :\dfrac{1}{4} \right. \\
x &= -24
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2(x-3) = \dfrac{1}{2}x - 1 $ \
$x$ = [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
2(x-3) &= \dfrac{1}{2}x - 1  \\
2x - 3\cdot 2 &= \dfrac{1}{2}x - 1 \\
2x - 6 &= \dfrac{1}{2}x - 1 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{2}x - 6 &= -1 \quad \left| +6 \right. \\
\dfrac{3}{2}x &= 5 \quad \left| :\dfrac{3}{2} \right. \\
x &= \dfrac{10}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3(x+2) - \dfrac{5}{2} = 2x $ \
$x$ = [[  -7/2  ]]
@Algebrite.check(-7/2)
************
$$
\begin{align*}
 3(x+2) - \dfrac{5}{2} &= 2x  \\
3x + 6 - \dfrac{5}{2} &= 2x \\
3x + \dfrac{12}{2} - \dfrac{5}{2} &= 2x \\
3x + \dfrac{7}{2} &= 2x \quad \left| -2x \right. \\
x + \dfrac{7}{2} &= 0 \quad \left| -\dfrac{7}{2} \right. \\
x &= -\dfrac{7}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{3}{4}(2x-1) = x + \dfrac{1}{2} $ \
$x$ = [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
\dfrac{3}{4}(2x-1) &= x + \dfrac{1}{2} \\
\dfrac{3}{2}x - \dfrac{3}{4} &= x + \dfrac{1}{2} \quad \left| -x \right. \\
\dfrac{1}{2}x - \dfrac{3}{4} &= \dfrac{1}{2} \quad \left| +\dfrac{3}{4} \right. \\
\dfrac{1}{2}x &= \dfrac{5}{4} \quad \left| :\dfrac{1}{2} \right. \\
x &= \dfrac{5}{2}
\end{align*}
$$
************
</div>
</section>











<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 23:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2x + 3x - 7 = x + 5 $ \
$x$ = [[  3  ]]
@Algebrite.check(3)
************
$$
\begin{align*}
2x + 3x - 7 &= x + 5 \\
5x - 7 &= x + 5 \quad \left| -x \right. \\
4x - 7 &= 5 \quad \left| +7 \right. \\
4x &= 12 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  4(2x-3) = 5x + 1 $ \
$x$ = [[  13/3  ]]
@Algebrite.check(13/3)
************
$$
\begin{align*}
4(2x-3) &= 5x + 1 \\
8x - 12 &= 5x + 1 \quad \left| -5x \right. \\
3x - 12 &= 1 \quad \left| +12 \right. \\
3x &= 13 \quad \left| :3 \right. \\
x &= \dfrac{13}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{2}x - 5 = \dfrac{1}{2}x + 4 $ \
$x$ = [[  9  ]]
@Algebrite.check(9)
************
$$
\begin{align*}
\dfrac{3}{2}x - 5 &= \dfrac{1}{2}x + 4 \quad \left| -\dfrac{1}{2}x \right. \\
x - 5 &= 4 \quad \left| +5 \right. \\
x &= 9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5x + 2 - x = \dfrac{1}{3}x - 7 $ \
$x$ = [[  -27/11  ]]
@Algebrite.check(-27/11)
************
$$
\begin{align*}
5x + 2 - x &= \dfrac{1}{3}x - 7 \\
4x + 2 &= \dfrac{1}{3}x - 7 \quad \left| -\dfrac{1}{3}x \right. \\
\dfrac{11}{3}x + 2 &= -7 \quad \left| -2 \right. \\
\dfrac{11}{3}x &= -9 \quad \left| :\dfrac{11}{3} \right. \\
x &= -\dfrac{27}{11}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2(3x+4) - x = 7x - 10 $ \
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
2(3x+4) - x &= 7x - 10 \\
6x + 8 - x &= 7x - 10 \\
5x + 8 &= 7x - 10 \quad \left| -5x \right. \\
8 &= 2x - 10 \quad \left| +10 \right. \\
18 &= 2x \quad \left| :2 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{4}x + 7 = \dfrac{3}{2}x - 1 $ \
$x$ = [[  16  ]]
@Algebrite.check(16)
************
$$
\begin{align*}
\dfrac{5}{4}x + 7 &= \dfrac{3}{2}x - 1 \\
\dfrac{5}{4}x + 7 &= \dfrac{6}{4}x - 1 \quad \left| -\dfrac{5}{4}x \right. \\
7 &= \dfrac{1}{4}x - 1 \quad \left| +1 \right. \\
8 &= \dfrac{1}{4}x \quad \left| :\dfrac{1}{4} \right. \\
x &= 16
\end{align*}
$$
************
</div>
</section>






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4x - 3 = \dfrac{1}{2}x + 9 $ \
$x$ = [[  24/7  ]]
@Algebrite.check(24/7)
************
$$
\begin{align*}
4x - 3 &= \dfrac{1}{2}x + 9 \quad \left| -\dfrac{1}{2}x \right. \\
\left(4 - \dfrac{1}{2}\right)x - 3 &= 9 \\
\dfrac{7}{2}x - 3 &= 9 \quad \left| +3 \right. \\
\dfrac{7}{2}x &= 12 \quad \left| :\dfrac{7}{2} \right. \\
x &= \dfrac{24}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+1) - 4 = x + 5 $ \
$x$ = [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
3(2x+1) - 4 &= x + 5 \\
6x + 3 - 4 &= x + 5 \\
6x - 1 &= x + 5 \quad \left| -x \right. \\
5x - 1 &= 5 \quad \left| +1 \right. \\
5x &= 6 \quad \left| :5 \right. \\
x &= \dfrac{6}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{1}{3}x - 2 = \dfrac{3}{5}x + 1 $ \
$x$ = [[  -45/4  ]]
@Algebrite.check(-45/4)
************
$$
\begin{align*}
\dfrac{1}{3}x - 2 &= \dfrac{3}{5}x + 1 \quad \left| -\dfrac{3}{5}x \right. \\
\left(\dfrac{1}{3} - \dfrac{3}{5}\right)x - 2 &= 1 \\
-\dfrac{4}{15}x - 2 &= 1 \quad \left| +2 \right. \\
-\dfrac{4}{15}x &= 3 \quad \left| \cdot(-1) \right. \\
\dfrac{4}{15}x &= -3 \quad \left| :\dfrac{4}{15} \right. \\
x &= -\dfrac{45}{4}
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  2x + 5 = \dfrac{4}{3}x - 1 $ \
$x$ = [[  -9  ]]
@Algebrite.check(-9)
************
$$
\begin{align*}
2x + 5 &= \dfrac{4}{3}x - 1 \quad \left| -\dfrac{4}{3}x \right. \\
\left(2 - \dfrac{4}{3}\right)x + 5 &= -1 \\
\dfrac{2}{3}x + 5 &= -1 \quad \left| -5 \right. \\
\dfrac{2}{3}x &= -6 \quad \left| :\dfrac{2}{3} \right. \\
x &= -9
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{4}x - 3 = 2 - \dfrac{1}{2}x $ \
$x$ = [[  20/7  ]]
@Algebrite.check(20/7)
************
$$
\begin{align*}
\dfrac{5}{4}x - 3 &= 2 - \dfrac{1}{2}x \quad \left| +\dfrac{1}{2}x \right. \\
\left(\dfrac{5}{4} + \dfrac{1}{2}\right)x - 3 &= 2 \\
\dfrac{7}{4}x - 3 &= 2 \quad \left| +3 \right. \\
\dfrac{7}{4}x &= 5 \quad \left| :\dfrac{7}{4} \right. \\
x &= \dfrac{20}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  2\left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} = \dfrac{5}{3}x - 1 $ \
$x$ = [[  5  ]]
@Algebrite.check(5)
************
$$
\begin{align*}
2 \left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - 3 + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - \dfrac{8}{3} &= \dfrac{5}{3}x - 1 \quad \left| -\dfrac{5}{3}x \right. \\
\left(2 - \dfrac{5}{3}\right)x - \dfrac{8}{3} &= -1 \\
\dfrac{1}{3}x - \dfrac{8}{3} &= -1 \quad \left| +\dfrac{8}{3} \right. \\
\dfrac{1}{3}x &= \dfrac{5}{3} \quad \left| :\dfrac{1}{3} \right. \\
x &= 5
\end{align*}
$$
************
</div>
</section>







<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 25:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-1} = \dfrac{10}{x+1} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{5}{x-1} &= \dfrac{10}{x+1} \quad \left| \cdot(x-1) \right. \\
5 &= \dfrac{10(x-1)}{x+1} \quad \left| \cdot(x+1) \right. \\
5(x+1) &= 10(x-1) \\
5x+5 &= 10x-10 \quad \left| -5x \right. \\
5 &= 5x - 10 \quad \left| +10 \right. \\
15 &= 5x \quad \left| :5 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{6}{x+1} = \dfrac{9}{2x+1} $ \
$x$ = [[  1  ]]
************
$$
\begin{align*}
\dfrac{6}{x+1} &= \dfrac{9}{2x+1} \quad \left| \cdot(x+1) \right. \\
6 &= \dfrac{9(x+1)}{2x+1} \quad \left| \cdot(2x+1) \right. \\
6(2x+1) &= 9(x+1) \\
12x+6 &= 9x+9 \quad \left| -9x \right. \\
3x+6 &= 9 \quad \left| -6 \right. \\
3x &= 3 \quad \left| :3 \right. \\
x &= 1
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{2x-1} = \dfrac{3}{x-4} $ \
$x$ = [[  11  ]]
************
$$
\begin{align*}
\dfrac{9}{2x-1} &= \dfrac{3}{x-4} \quad \left| \cdot(2x-1) \right. \\
9 &= \dfrac{3(2x-1)}{x-4} \quad \left| \cdot(x-4) \right. \\
9(x-4) &= 3(2x-1) \\
9x-36 &= 6x-3 \quad \left| -6x \right. \\
3x-36 &= -3 \quad \left| +36 \right. \\
3x &= 33 \quad \left| :3 \right. \\
x &= 11
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{12}{x+3} = \dfrac{8}{x+1} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{12}{x+3} &= \dfrac{8}{x+1} \quad \left| \cdot(x+3) \right. \\
12 &= \dfrac{8(x+3)}{x+1} \quad \left| \cdot(x+1) \right. \\
12(x+1) &= 8(x+3) \\
12x+12 &= 8x+24 \quad \left| -8x \right. \\
4x+12 &= 24 \quad \left| -12 \right. \\
4x &= 12 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{x+1} = \dfrac{7}{x+5} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{3}{x+1} &= \dfrac{7}{x+5} \quad \left| \cdot(x+1) \right. \\
3 &= \dfrac{7(x+1)}{x+5} \quad \left| \cdot(x+5) \right. \\
3(x+5) &= 7(x+1) \\
3x+15 &= 7x+7 \quad \left| -3x \right. \\
15 &= 4x+7 \quad \left| -7 \right. \\
8 &= 4x \quad \left| :4 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{6}{x+2} = \dfrac{11}{2x+3} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{6}{x+2} &= \dfrac{11}{2x+3} \quad \left| \cdot(x+2) \right. \\
6 &= \dfrac{11(x+2)}{2x+3} \quad \left| \cdot(2x+3) \right. \\
6(2x+3) &= 11(x+2) \\
12x+18 &= 11x+22 \quad \left| -11x \right. \\
x+18 &= 22 \quad \left| -18 \right. \\
x &= 4
\end{align*}
$$
************
</div>
</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 26:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{6}{x-2} = \dfrac{18}{x+4} $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
\dfrac{6}{x-2} &= \dfrac{18}{x+4} \quad \left| \cdot(x-2) \right. \\
6 &= \dfrac{18(x-2)}{x+4} \quad \left| \cdot(x+4) \right. \\
6(x+4) &= 18(x-2) \\
6x + 24 &= 18x - 36 \quad \left| -6x \right. \\
24 &= 12x - 36 \quad \left| +36 \right. \\
60 &= 12x \quad \left| :12 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{2x+5} = \dfrac{3}{x+1} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{9}{2x+5} &= \dfrac{3}{x+1} \quad \left| \cdot(2x+5) \right. \\
9 &= \dfrac{3(2x+5)}{x+1} \quad \left| \cdot(x+1) \right. \\
9(x+1) &= 3(2x+5) \\
9x + 9 &= 6x + 15 \quad \left| -6x \right. \\
3x + 9 &= 15 \quad \left| -9 \right. \\
3x &= 6 \quad \left| :3 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{x+3} = \dfrac{11}{3x-1} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{7}{x+3} &= \dfrac{11}{3x-1} \quad \left| \cdot(x+3) \right. \\
7 &= \dfrac{11(x+3)}{3x-1} \quad \left| \cdot(3x-1) \right. \\
7(3x-1) &= 11(x+3) \\
21x - 7 &= 11x + 33 \quad \left| -11x \right. \\
10x - 7 &= 33 \quad \left| +7 \right. \\
10x &= 40 \quad \left| :10 \right. \\
x &= 4
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{x} = \dfrac{9}{4x-3} $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
\dfrac{3}{x} &= \dfrac{9}{4x-3} \quad \left| \cdot x \right. \\
3 &= \dfrac{9x}{4x-3} \quad \left| \cdot(4x-3) \right. \\
3(4x-3) &= 9x \\
12x - 9 &= 9x \quad \left| -9x \right. \\
3x - 9 &= 0 \quad \left| +9 \right. \\
3x &= 9 \quad \left| :3 \right. \\
x &= 3
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{x-1} = \dfrac{13}{2x+5} $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
\dfrac{3}{x-1} &= \dfrac{13}{2x+5} \quad \left| \cdot(x-1) \right. \\
3 &= \dfrac{13(x-1)}{2x+5} \quad \left| \cdot(2x+5) \right. \\
3(2x+5) &= 13(x-1) \\
6x + 15 &= 13x - 13 \quad \left| -6x \right. \\
15 &= 7x - 13 \quad \left| +13 \right. \\
28 &= 7x \quad \left| :7 \right. \\
x &= 4
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{3x+2} = \dfrac{9}{x+7} $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
\dfrac{8}{3x+2} &= \dfrac{9}{x+7} \quad \left| \cdot(3x+2) \right. \\
8 &= \dfrac{9(3x+2)}{x+7} \quad \left| \cdot(x+7) \right. \\
8(x+7) &= 9(3x+2) \\
8x + 56 &= 27x + 18 \quad \left| -8x \right. \\
56 &= 19x + 18 \quad \left| -18 \right. \\
38 &= 19x \quad \left| :19 \right. \\
x &= 2
\end{align*}
$$
************
</div>
</section>








<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 27:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-2} = \dfrac{7}{3x+1} $ \
$x$ = [[  -19/8  ]]
@Algebrite.check(-19/8)
************
$$
\begin{align*}
\dfrac{5}{x-2} &= \dfrac{7}{3x+1} \quad \left| \cdot(x-2) \right. \\
5 &= \dfrac{7(x-2)}{3x+1} \quad \left| \cdot(3x+1) \right. \\
5(3x+1) &= 7(x-2) \\
15x + 5 &= 7x - 14 \quad \left| -7x \right. \\
8x + 5 &= -14 \quad \left| -5 \right. \\
8x &= -19 \quad \left| :8 \right. \\
x &= \dfrac{-19}{8}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{4}{2x-3} = \dfrac{3}{x+5} $ \
$x$ = [[  29/2  ]]
@Algebrite.check(29/2)
************
$$
\begin{align*}
\dfrac{4}{2x-3} &= \dfrac{3}{x+5} \quad \left| \cdot(2x-3) \right. \\
4 &= \dfrac{3(2x-3)}{x+5} \quad \left| \cdot(x+5) \right. \\
4(x+5) &= 3(2x-3) \\
4x + 20 &= 6x - 9 \quad \left| -4x \right. \\
20 &= 2x - 9 \quad \left| +9 \right. \\
29 &= 2x \quad \left| :2 \right. \\
x &= \dfrac{29}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{x+4} = \dfrac{2}{x-1} $ \
$x$ = [[  17/7  ]]
@Algebrite.check(17/7)
************
$$
\begin{align*}
\dfrac{9}{x+4} &= \dfrac{2}{x-1} \quad \left| \cdot(x+4) \right. \\
9 &= \dfrac{2(x+4)}{x-1} \quad \left| \cdot(x-1) \right. \\
9(x-1) &= 2(x+4) \\
9x - 9 &= 2x + 8 \quad \left| -2x \right. \\
7x - 9 &= 8 \quad \left| +9 \right. \\
7x &= 17 \quad \left| :7 \right. \\
x &= \dfrac{17}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{3x-2} = \dfrac{5}{x+6} $ \
$x$ = [[  13/2  ]]
@Algebrite.check(13/2)
************
$$
\begin{align*}
\dfrac{7}{3x-2} &= \dfrac{5}{x+6} \quad \left| \cdot(3x-2) \right. \\
7 &= \dfrac{5(3x-2)}{x+6} \quad \left| \cdot(x+6) \right. \\
7(x+6) &= 5(3x-2) \\
7x + 42 &= 15x - 10 \quad \left| -7x \right. \\
42 &= 8x - 10 \quad \left| +10 \right. \\
52 &= 8x \quad \left| :8 \right. \\
x &= \dfrac{13}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; -\dfrac{3}{x+2} = \dfrac{6}{2x-1} \;$ \
$x$ = [[  -3/4  ]]
@Algebrite.check(-3/4)
************
$$
\begin{align*}
-\dfrac{3}{x+2} &= \dfrac{6}{2x-1} \quad \left| \cdot(x+2) \right. \\
-3 &= \dfrac{6(x+2)}{2x-1} \quad \left| \cdot(2x-1) \right. \\
-3(2x-1) &= 6(x+2) \\
-6x + 3 &= 6x + 12 \quad \left| +6x \right. \\
3 &= 12x + 12 \quad \left| -12 \right. \\
-9 &= 12x \quad \left| :12 \right. \\
x &= -\dfrac{3}{4}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{x-4} = -\dfrac{10}{3x+2} $ \
$x$ = [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{5}{x-4} &= -\dfrac{10}{3x+2} \quad \left| \cdot(x-4) \right. \\
5 &= -\,\dfrac{10(x-4)}{3x+2} \quad \left| \cdot(3x+2) \right. \\
5(3x+2) &= -10(x-4) \\
15x + 10 &= -10x + 40 \quad \left| +10x \right. \\
25x + 10 &= 40 \quad \left| -10 \right. \\
25x &= 30 \quad \left| :25 \right. \\
x &= \dfrac{6}{5}
\end{align*}
$$
************
</div>
</section>












<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ **Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{5}{x-2} = \dfrac{3}{2x+1} $ \
$x$ = [[  -11/7  ]]
@Algebrite.check(11/7)
************
$$
\begin{align*}
\dfrac{5}{x-2} &= \dfrac{3}{2x+1} \quad \left| \cdot(x-2) \right. \\
5 &= \dfrac{3(x-2)}{2x+1} \quad \left| \cdot(2x+1) \right. \\
5(2x+1) &= 3(x-2) \\
10x + 5 &= 3x - 6 \quad \left| -3x \right. \\
7x + 5 &= -6 \quad \left| -5 \right. \\
7x &= -11 \quad \left| :7 \right. \\
x &= -\dfrac{11}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{x+3} = \dfrac{2}{x-1} $ \
$x$ = [[  13/5  ]]
@Algebrite.check(13/5)
************
$$
\begin{align*}
\dfrac{7}{x+3} &= \dfrac{2}{x-1} \quad \left| \cdot(x+3) \right. \\
7 &= \dfrac{2(x+3)}{x-1} \quad \left| \cdot(x-1) \right. \\
7(x-1) &= 2(x+3) \\
7x - 7 &= 2x + 6 \quad \left| -2x \right. \\
5x - 7 &= 6 \quad \left| +7 \right. \\
5x &= 13 \quad \left| :5 \right. \\
x &= \dfrac{13}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{2x-3} = \dfrac{9}{x+6} $ \
$x$ = [[  51/14  ]]
@Algebrite.check(51/14)
************
$$
\begin{align*}
\dfrac{4}{2x-3} &= \dfrac{9}{x+6} \quad \left| \cdot(2x-3) \right. \\
4 &= \dfrac{9(2x-3)}{x+6} \quad \left| \cdot(x+6) \right. \\
4(x+6) &= 9(2x-3) \\
4x + 24 &= 18x - 27 \quad \left| -4x \right. \\
24 &= 14x - 27 \quad \left| +27 \right. \\
51 &= 14x \quad \left| :14 \right. \\
x &= \dfrac{51}{14}
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{x-4} = \dfrac{5}{2x+7} $ \
$x$ = [[  -41  ]]
@Algebrite.check(-41)
************
$$
\begin{align*}
\dfrac{3}{x-4} &= \dfrac{5}{2x+7} \quad \left| \cdot(x-4) \right. \\
3 &= \dfrac{5(x-4)}{2x+7} \quad \left| \cdot(2x+7) \right. \\
3(2x+7) &= 5(x-4) \\
6x + 21 &= 5x - 20 \quad \left| -5x \right. \\
x + 21 &= -20 \quad \left| -21 \right. \\
x &= -41
\end{align*}
$$
************

</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{x+5} = \dfrac{7}{3x-2} $ \
$x$ = [[  -39  ]]
@Algebrite.check(-39)
************
$$
\begin{align*}
\dfrac{2}{x+5} &= \dfrac{7}{3x-2} \quad \left| \cdot(x+5) \right. \\
2 &= \dfrac{7(x+5)}{3x-2} \quad \left| \cdot(3x-2) \right. \\
2(3x-2) &= 7(x+5) \\
6x - 4 &= 7x + 35 \quad \left| -6x \right. \\
-4 &= x + 35 \quad \left| -35 \right. \\
-39 &= x \\
x &= -39
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{x-1} = \dfrac{8}{x+6} $ \
$x$ = [[  38/3  ]]
@Algebrite.check(38/3)
************
$$
\begin{align*}
\dfrac{5}{x-1} &= \dfrac{8}{x+6} \quad \left| \cdot(x-1) \right. \\
5 &= \dfrac{8(x-1)}{x+6} \quad \left| \cdot(x+6) \right. \\
5(x+6) &= 8(x-1) \\
5x + 30 &= 8x - 8 \quad \left| -5x \right. \\
30 &= 3x - 8 \quad \left| +8 \right. \\
38 &= 3x \quad \left| :3 \right. \\
x &= \dfrac{38}{3}
\end{align*}
$$
************
</div>
</section>









<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 29:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  T = m g h \;\;$  mit $\;\;m=8 \;\;\wedge\;\; g=10 \;\;\wedge\;\; T=480$ \
$h$ = [[  6  ]]
************
$$
\begin{align*}
T &= m g h \quad \left| : (mg) \right. \\
h &= \dfrac{T}{m g} \\ 
h &= \dfrac{480}{8\cdot 10} \\
h &= \dfrac{480}{80}  \\
h &=   6 \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{G\,M\,m}{r} = F\;\;$  mit $\;\;F=50 \;\;\wedge\;\; r=8 \;\;\wedge\;\; m=2 \;\;\wedge\;\; G=\dfrac{1}{10}$ \
$M$ = [[  2000  ]]
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G\,M\,m &= F r \quad \left| : (Gm) \right. \\
M &= \dfrac{F r}{G m} \\ 
M &= \dfrac{50\cdot 8}{\left(\dfrac{1}{10}\right)\cdot 2} \\
M &= \dfrac{400}{\dfrac{1}{5}} \\
M &= 2000 \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{V}{A} - a = a + V  \;\;$  mit $\;\; V=36 \;\;\wedge\;\; A=7$ \
$a$ = [[  -108/7  ]]
@Algebrite.check(-108/7)
************
$$
\begin{align*}
\dfrac{V}{A} - a &= a + V \quad \left| +a \right. \\
\dfrac{V}{A} &= 2a + V \quad \left| -V \right. \\
\dfrac{V}{A} - V &= 2a \quad \left| :2 \right. \\
a &= \dfrac{1}{2} \left(\dfrac{V}{A} - V\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - 36\right) \\
a &= \dfrac{1}{2} \left(\dfrac{36}{7} - \dfrac{252}{7}\right) \\
a &= \dfrac{1}{2} \left(-\dfrac{216}{7}\right) \\
a &= -\dfrac{108}{7} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\;d=3 \;\;\wedge\;\; s=5 \;\;\wedge\;\; a=2$ \
$r$ = [[  20  ]]
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \quad \left| :d  \right. \\
0 &= \dfrac{1}{2}r - s a \quad \left| + s a \right. \\
\dfrac{1}{2}r &= s a \quad \left| \cdot 2 \right. \\
r &= 2 s a \\
r &= 2\cdot 5 \cdot 2 \\
r & = 20 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $   m n + p o = m z \;\;$  mit $\;\; m=2 \;\;\wedge\;\; p=\dfrac{3}{2} \;\;\wedge\;\; z=3 \;\;\wedge\;\; n=\dfrac{5}{4}$ \
$o$ = [[  7/3  ]]
@Algebrite.check(7/3)
************
$$
\begin{align*}
m n + p o &= m z \quad \left| -mn \right. \\
p o &= m(z-n) \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} \\ 
o &= \dfrac{2 \left(3 - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2 \left(\dfrac{12}{4} - \dfrac{5}{4}\right)}{\dfrac{3}{2}} \\ 
o &= \dfrac{2\cdot \dfrac{7}{4}}{\dfrac{3}{2}} \\ 
o &=  \dfrac{7}{2} : \dfrac{3}{2}  \\ 
o &= \dfrac{7}{2}\cdot \dfrac{2}{3} \\ 
o &= \dfrac{7}{3} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  m n + p o = m z - p q \;\;$  mit $\;\; m=\dfrac{1}{100} \;\;\wedge\;\;  p=8 \;\;\wedge\;\;  z=\dfrac{21}{5} \;\;\wedge\;\;  n=12 \;\;\wedge\;\;  q=\dfrac{3}{8}$ \
$o$ = [[  -1539/4000  ]]
@Algebrite.check(-1539/4000)
************
$$
\begin{align*}
mn + po &= mz - pq \quad \left| -mn \right. \\
po &= m(z-n) - pq \quad \left| :p \right. \\
o &= \dfrac{m(z-n)}{p} - q \\ 
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - 12\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(\dfrac{21}{5} - \dfrac{60}{5}\right)}{8} - \dfrac{3}{8} \\
o &= \dfrac{\dfrac{1}{100}\!\left(-\dfrac{39}{5}\right)}{8} - \dfrac{3}{8} \\ 
o &= \dfrac{-\dfrac{39}{500}}{8} - \dfrac{3}{8} \\
o &= -\dfrac{39}{4000} - \dfrac{3}{8} \\ 
o &= -\dfrac{39}{4000} - \dfrac{1500}{4000} \\ 
o &= -\dfrac{1539}{4000} \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $   0 = \dfrac{1}{2} d r - d s a  \;\;$  mit $\;\; r=\dfrac{5}{2} \;\;\wedge\;\;  s=\dfrac{1}{4} \;\;\wedge\;\;  a=\dfrac{7}{8}$ \
$d$ = [[  0  ]]
************
$$
\begin{align*}
0 &= d \left(\dfrac{1}{2}r - s a\right) \\
\dfrac{1}{2}r - s a &= \dfrac{1}{2}\cdot \dfrac{5}{2} - \dfrac{1}{4}\cdot \dfrac{7}{8} \\ 
&= \dfrac{5}{4} - \dfrac{7}{32} \\ 
&= \dfrac{40-7}{32} \\ 
&= \dfrac{33}{32} \neq 0 \\ 
\Rightarrow\;& \text{Damit die Gleichung }  \left(\dfrac{1}{2}r - s a\right) \text{ gilt, muss } d=0 \text{ sein.} \\
d &= 0 \\ 
\end{align*}
$$
************
</div>
</section>










<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $   F = m a \;\;$  mit $\;\;a=2 \;\;\wedge\;\; F=30$ \
$m$ = [[  15  ]]
************
$$
\begin{align*}
F &= m a \quad \left| :a \right. \\
m &= \dfrac{F}{a} \\ 
m &= \dfrac{30}{2}  \\
m &= 15  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $   U - T = \dfrac{1}{2} v \;\;$  mit $\;\; v=5 \;\;\wedge\;\; U=7$ \
$T$ = [[  9/2  ]]
@Algebrite.check(9/2)
************
$$
\begin{align*}
U - T &= \dfrac{1}{2} v \quad \left| -U \right. \\
-T &= \dfrac{1}{2} v - U \quad \left| \cdot (-1) \right. \\
T &= U - \dfrac{1}{2}v \\ 
T &= 7 - \dfrac{1}{2}\cdot 5  \\
T &= 7 - \dfrac{5}{2}  \\
T &= \dfrac{14}{2} - \dfrac{5}{2}  \\
T &= \dfrac{9}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $   r = 2x + 2y + z \;\;$  mit $\;\; r=12 \;\;\wedge\;\; x=0,4 \;\;\wedge\;\; z=1,5$ \
$y$ = [[  97/20  ]]
@Algebrite.check(97/20)
************
$$
\begin{align*}
r &= 2x + 2y + z \quad \left| -2x  \right. \\
r -2x &=  2y + z \quad \left|  - z \right. \\
r - 2x - z &= 2y \quad \left| :2 \right. \\
y &= \dfrac{r - 2x - z}{2} \\ 
y &= \dfrac{12 - 2\cdot 0,4 - 1,5}{2} \\
y &= \dfrac{12 - 0,8 - 1,5}{2} \\
y &= \dfrac{9,7}{2} \\
y &= \dfrac{97}{20} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   pV = \dfrac{3}{2}kNT \;\;$  mit $\;\; N=100 \;\;\wedge\;\; k=5 \;\;\wedge\;\; p=30 \;\;\wedge\;\; V=20$ \
$T$ = [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
pV &= \dfrac{3}{2}kNT \quad \left| : \left(\dfrac{3}{2}kN\right) \right. \\
T &= \dfrac{pV}{\dfrac{3}{2}kN} \\ 
T &= \dfrac{30\cdot 20}{\dfrac{3}{2}\cdot 5 \cdot 100} \\
T &= \dfrac{600}{750}  \\
T &= \dfrac{4}{5}  \\ 
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $   8ab - c = cb + b \;\; $  mit $ \;\; b=3 \;\;\wedge\;\; c=0,75 $ \
$a$ = [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
8ab - c &= cb + b \quad \left| +c \right. \\
8ab &= cb + b + c \quad \left| : (8b) \right. \\
a &= \dfrac{cb + b + c}{8b} \\ 
a &= \dfrac{0,75\cdot 3 + 3 + 0,75}{8\cdot 3} \\
a &= \dfrac{2,25 + 3 + 0,75}{24} \\
a &= \dfrac{6}{24} \\
a &= \dfrac{1}{4} \\
\end{align*}
$$
************
</div>
<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $   G\dfrac{M m}{r} = F \;\;$  mit $\;\; F=120 \;\;\wedge\;\; M=4,5 \;\;\wedge\;\; m=9,5 \;\;\wedge\;\; G=1,2 $ \
$r$ = [[  4275/10000  ]]
@Algebrite.check(4275/10000)
************
$$
\begin{align*}
\dfrac{G M m}{r} &= F \quad \left| \cdot r \right. \\
G M m &= F r \quad \left| :F \right. \\
r &= \dfrac{G M m}{F} \\ 
r &= \dfrac{1,2\cdot 4,5 \cdot 9,5}{120}  \\
r &= \dfrac{51,3}{120}  \\
r &= 0,4275  \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{A}{B} = \dfrac{C}{D} \;\;$  mit $\;\; A=0,2 \;\;\wedge\;\; B=0,5 \;\;\wedge\;\; C=6$ \
$D$ = [[  15  ]]
************
$$
\begin{align*}
\dfrac{A}{B} &= \dfrac{C}{D} \quad \left| \cdot D \right. \\
\dfrac{A}{B}D &= C \quad \left| \cdot B \right. \\
AD &= BC \quad \left| :A \right. \\
D &= \dfrac{B C}{A} \\ 
D &= \dfrac{0,5\cdot 6}{0,2}  \\
D &= \dfrac{3}{0,2}  \\
D &= 15
\end{align*}
$$
************
</div>
</section>








#### Übungsaufgaben zur Äquivalenzumformung 31 bis 40






<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 31:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  2a + b = c \;\;$  mit $\;\; b=4a \;\;\wedge\;\; c=24$ \
$a$ = [[  4  ]]
************
$$
\begin{align*}
2a + b &= c \\
2a + 4a &= 24  \\
6a &= 24 \quad \left| :6 \right. \\
a &= 4 \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  x + 6y = y + 9z \;\;$  mit $\;\; y=4 \;\;\wedge\;\; x=4z$ \
$z$ = [[  4  ]]
************
$$
\begin{align*}
x + 6y &= y + 9z \\
4z + 6\cdot 4 &= 4 + 9z \\
4z + 24 &= 4 + 9z \quad \left| -4z \right. \\
24 &= 4 + 5z \quad \left| -4 \right. \\
20 &= 5z \quad \left| :5 \right. \\
z &= 4 \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  11k + 2r = 5t + c \;\;$  mit $\;\; r=6 \;\;\wedge\;\; t=6 \;\;\wedge\;\; c=4k$ \
$k$ = [[  18/7  ]]
@Algebrite.check(18/7)
************
$$
\begin{align*}
11k + 2r &= 5t + c \\
11k + 2\cdot 6 &= 5\cdot 6 + 4k \\
11k + 12 &= 30 + 4k \quad \left| -4k \right. \\
7k + 12 &= 30 \quad \left| -12 \right. \\
7k &= 18 \quad \left| :7 \right. \\
k &= \dfrac{18}{7} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   5n + 3m + 9s = n\cdot m + a \;\;$  mit $\;\; n=3 \;\;\wedge\;\; m=6 \;\;\wedge\;\; a=17s$ \
$s$ = [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
5n + 3m + 9s &= n m + a \\
5\cdot 3 + 3\cdot 6 + 9s &= 3\cdot 6 + 17s \\
15 + 18 + 9s &= 18 + 17s \quad \left| -18 \right. \\
15 + 9s &= 17s \quad \left| -9s \right. \\
15 &= 8s \quad \left| :8 \right. \\
s &= \dfrac{15}{8} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  r + t = u + v \;\;$  mit $\;\; r=2+u \;\;\wedge\;\; t=7+6u \;\;\wedge\;\; v=19+2u$ \
$u$ = [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
r + t &= u + v \\
(2+u) + (7+6u) &= u + (19+2u) \\
9 + 7u &= 19 + 3u \quad \left| -3u \right. \\
9 + 4u &= 19 \quad \left| -9 \right. \\
4u &= 10 \quad \left| :4 \right. \\
u &= \dfrac{5}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $   5(c+6)+5t = 4(r+n) \;\;$  mit $\;\; c=5t+3 \;\;\wedge\;\; r=2t+2 \;\;\wedge\;\; n=4t+3$ \
$t$ = [[  -25/6  ]]
@Algebrite.check(-25/6)
************
$$
\begin{align*}
5(c+6)+5t &= 4(r+n) \\
5\left((5t+3)+6\right)+5t &= 4\left((2t+2)+(4t+3)\right) \\
5(5t+9)+5t &= 4(6t+5) \\
25t + 45 + 5t &= 24t + 20 \quad \left| -24t \right. \\
6t + 45 &= 20 \quad \left| -45 \right. \\
6t &= -25 \quad \left| :6 \right. \\
t &= -\dfrac{25}{6}  \\
\end{align*}
$$
************
</div>
</section>







<!-- quivalenzumformung 0032 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 32:__ **Berechne** den Lösungswert für die fehlende Größe.



<section class="flex-container">
<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3a + 2b = c + 4 \;\;$  mit $\;\; b = a - 5 \;\;\wedge\;\; c = 2a - 1$ \
$a$ = [[  13/3  ]]
@Algebrite.check(13/3)
************
$$
\begin{align*}
3a + 2b &= c + 4 \\
3a + 2(a-5) &= (2a-1) + 4 \\
3a + 2a - 10 &= 2a + 3 \quad \left| -2a \right. \\
3a - 10 &= 3 \quad \left| +10 \right. \\
3a &= 13 \quad \left| :3 \right. \\
a &= \dfrac{13}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $   x + 6y = y + 9z \;\;$  mit $\;\; y = 2x - 1 \;\;\wedge\;\; z = x + 2$ \
$x$ = [[  23/2  ]]
@Algebrite.check(23/2)
************
$$
\begin{align*}
x + 6y &= y + 9z \\
x + 6(2x-1) &= (2x-1) + 9(x+2) \\
x + 12x - 6 &= 2x - 1 + 9x + 18 \\
13x - 6 &= 11x + 17 \quad \left| -11x \right. \\
2x - 6 &= 17 \quad \left| +6 \right. \\
2x &= 23 \quad \left| :2 \right. \\
x &= \dfrac{23}{2} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $   r + t = u + v \;\;$  mit $\;\; r = 1 + 3u \;\;\wedge\;\; t = 2u - 4 \;\;\wedge\;\; v = 5u - 2$ \
$u$ = [[  -1  ]]
@Algebrite.check(-1)
************
$$
\begin{align*}
r + t &= u + v \\
(1+3u) + (2u-4) &= u + (5u-2) \\
5u - 3 &= 6u - 2 \quad \left| -5u \right. \\
-3 &= u - 2 \quad \left| +2 \right. \\
-1 &= u \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $   5n + 3m + 9s = n m + a \;\;$  mit $\;\; n=2 \;\;\wedge\;\; m = 4s + 1 \;\;\wedge\;\; a = s - 5$ \
$s$ = [[  -4/3  ]]
@Algebrite.check(-4/3)
************
$$
\begin{align*}
5n + 3m + 9s &= n m + a \\
5\cdot 2 + 3(4s+1) + 9s &= 2(4s+1) + (s-5) \\
10 + 12s + 3 + 9s &= 8s + 2 + s - 5 \\
21s + 13 &= 9s - 3 \quad \left| -9s \right. \\
12s + 13 &= -3 \quad \left| -13 \right. \\
12s &= -16 \quad \left| :12 \right. \\
s &= -\dfrac{4}{3} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 5(c+6) + 5t = 4(r + n) \;$  mit $\,c = 2t - 1 \;\;\wedge\;\; r = t + 3 \;\;\wedge\;\; n = 3t + 5$ \
$t$ = [[  -7  ]]
@Algebrite.check(-7)
************
$$
\begin{align*}
5(c+6) + 5t &= 4(r+n) \\
5\left((2t-1)+6\right) + 5t &= 4\left((t+3)+(3t+5)\right) \\
5(2t+5) + 5t &= 4(4t+8) \\
10t + 25 + 5t &= 16t + 32 \quad \left| -15t \right. \\
25 &= t + 32 \quad \left| -32 \right. \\
-7 &= t \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $   r + s = t \;\;$  mit $\;\; s = 2r + 1 \;\;\wedge\;\;  t = 2s + 3$ \
$r$ = [[  -4  ]]
@Algebrite.check(-4)
************
$$
\begin{align*}
r + s &= t \\
r + (2r+1) &= 2(2r+1) + 3 \\
3r + 1 &= 4r + 2 + 3 = 4r + 5 \quad \left| -3r \right. \\
1 &= r + 5 \quad \left| -5 \right. \\
-4 &= r \\
\end{align*}
$$
************
</div>
</section>







<!-- quivalenzumformung 0033 -->


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 33:__ In einem Sportzentrum kann zwischen zwei Trainingspässen gewählt werden. Die Variante A sieht eine einmalige Kartengebühr 0,50 € vor, wobei 4,00 € pro Training noch verlangt werden. Im Pass B belaufen sich die einmaligen Kartengebühren auf 6,50 € und ein Training wird mit 2,50 € berechnet. **Berechne**, nach wie vielen Trainings die Gesamtkosten beider Pässe genau gleich sind.

<!-- data-solution-button="5"-->
$x$ = [[  4  ]]
@Algebrite.check(4)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
4x + \dfrac{1}{2} \;\stackrel{!}{=}\; \dfrac{5}{2}x + \dfrac{13}{2}
$$

$$
\begin{align*}
4x + \dfrac{1}{2} &= \dfrac{5}{2}x + \dfrac{13}{2} \quad \left|\, -\dfrac{5}{2}x \right.\\[2pt]
\left(4-\dfrac{5}{2}\right)x + \dfrac{1}{2} &= \dfrac{13}{2} \quad \left|\, -\dfrac{1}{2} \right.\\[2pt]
\dfrac{3}{2}x &= 6 \quad \left|\, :\dfrac{3}{2} \right.\\[2pt]
x &= 4
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
\underbrace{4\cdot4 + \dfrac{1}{2}}_{\text{Pass A}} = 16,5\ \text{€}
\quad\text{und}\quad
\underbrace{\dfrac{5}{2}\cdot4 + \dfrac{13}{2}}_{\text{Pass B}} = 10 + 6,5 = 16,5\ \text{€}\
\end{align*}
$$


Deutung: Für $x<4$ ist Pass A günstiger; für $x>4$ ist Pass B günstiger.

************







<!-- quivalenzumformung 0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 34:__ Zwei Schüler sammeln Sticker für ein Album. Die betrachtete Schülerin startet mit sechs Stickern. Jeden Tag fügt sie drei weitere Sticker hinzu. Der betrachtete Schüler beginnt mit 18 Stickern, bekommt aber pro Tag nur ein weiteren Sticker. **Berechne**, nach wie vielen Tagen beide gleich viele Sticker haben.

<!-- data-solution-button="5"-->
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x + 6 \;\stackrel{!}{=}\; x + 18
$$

$$
\begin{align*}
3x + 6 &= x + 18 \quad \left|\, -x \right.\\[2pt]
2x + 6 &= 18 \quad \left|\, -6 \right.\\[2pt]
2x &= 12 \quad \left|\, :2 \right.\\[2pt]
x &= 6
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
\underbrace{3\cdot 6 + 6}_{\text{Schülerin}} = 24
\quad\text{und}\quad
\underbrace{1\cdot 6 + 18}_{\text{Schüler}} = 24
\end{align*}
$$


Deutung:
Nach 6 Tagen haben beide gleich viele Sticker. Für $x<6$ hat der Schüler mehr; für $x>6$ hat die Schülerin mehr.
************




<!-- quivalenzumformung 0035 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 35:__ Ein Behälter wird täglich mit vier Litern Wasser aufgefüllt. Zu Beginn sind bereits zwei Liter enthalten. Ein zweiter Behälter enthält anfangs 14 Liter Wasser, verliert jedoch jeden Tag einen Liter. **Berechne**, nach wie vielen Tagen beide Behälter gleich viel Wasser enthalten.



<!-- data-solution-button="5"-->
$x$ = [[  12/5  ]]
@Algebrite.check(12/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
4x + 2 \;\stackrel{!}{=}\; 14 - x
$$

$$
\begin{align*}
4x + 2 &= 14 - x \quad \left|\, +x \right.\\[2pt]
5x + 2 &= 14 \quad \left|\, -2 \right.\\[2pt]
5x &= 12 \quad \left|\, :5 \right.\\[2pt]
x &= \dfrac{12}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{4\cdot \dfrac{12}{5} + 2}_{\text{1. Behälter}} 
= \dfrac{48}{5} + \dfrac{10}{5} = \dfrac{58}{5} = 11,6   \\
&\quad\text{und}\quad    \\
\underbrace{14 - \dfrac{12}{5}}_{\text{2. Behälter}}
&= \dfrac{70}{5} - \dfrac{12}{5} = \dfrac{58}{5} = 11,6
\end{align*}
$$


Deutung: Nach $\dfrac{12}{5} = 2{,}4$ Tagen haben beide Behälter gleich viel Wasser.
************




<!-- quivalenzumformung 0036 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 36:__ Ein Auto fährt mit einer konstanten Geschwindigkeit von $60\,\dfrac{\text{km}}{\text{h}}$ los.  
Ein zweites Auto startet zwei Stunden später, ist aber schneller und fährt mit $90\,\dfrac{\text{km}}{\text{h}}$.  
**Berechne**, nach wie vielen Stunden beide Autos die gleiche Strecke zurückgelegt haben.

<!-- data-solution-button="5"-->
$x$ = [[  6  ]]
@Algebrite.check(6)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
60x \;\stackrel{!}{=}\; 90(x - 2)
$$

$$
\begin{align*}
60x &= 90x - 180 \quad \left|\, -90x \right.\\[2pt]
-30x &= -180 \quad \left|\, :(-30) \right.\\[2pt]
x &= 6
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{60\cdot 6}_{\text{1. Auto}} = 360\ \text{km} \\
&\quad\text{und}\quad \\
&\underbrace{90\cdot (6-2)}_{\text{2. Auto}} = 90\cdot 4 = 360\ \text{km}
\end{align*}
$$

Deutung: Nach 6 Stunden Fahrzeit des ersten Autos bzw. nach 4 Stunden des zweiten Autos haben beide die gleiche Strecke zurückgelegt.
************




<!-- quivalenzumformung 0037 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 37:__ In einem Copyshop kann zwischen zwei Bezahlmodellen gewählt werden. In Modell A fällt eine einmalige Grundgebühr von 0,75 € an; jede Kopie kostet zusätzlich 0,30 €. In Modell B beträgt die einmalige Grundgebühr 3,75 €, dafür kostet jede Kopie nur 0,15 €. **Berechne**, nach wie vielen Kopien die Gesamtkosten beider Modelle genau gleich sind.

<!-- data-solution-button="5"-->
$x$ = [[  20  ]]
@Algebrite.check(20)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{10}x + \dfrac{3}{4} \;\stackrel{!}{=}\; \dfrac{3}{20}x + \dfrac{15}{4}
$$

$$
\begin{align*}
\dfrac{3}{10}x + \dfrac{3}{4} &= \dfrac{3}{20}x + \dfrac{15}{4} \quad \left|\, -\dfrac{3}{20}x \right.\\[2pt]
\left(\dfrac{3}{10}-\dfrac{3}{20}\right)x + \dfrac{3}{4} &= \dfrac{15}{4} \quad \left|\, -\dfrac{3}{4} \right.\\[2pt]
\dfrac{3}{20}x &= \dfrac{12}{4} = 3 \quad \left|\, :\dfrac{3}{20} \right.\\[2pt]
x &= 20
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
\underbrace{\dfrac{3}{10}\cdot 20 + \dfrac{3}{4}}_{\text{Modell A}}
= 6 + 0,75
= 6,75\ \text{€}
\quad\text{und}\quad
\underbrace{\dfrac{3}{20}\cdot 20 + \dfrac{15}{4}}_{\text{Modell B}}
= 3 + 3,75
= 6,75\ \text{€}
\end{align*}
$$



Deutung: Für $x<20$ ist Modell A günstiger; für $x>20$ ist Modell B günstiger.
************




<!-- quivalenzumformung 0038 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 38:__ Ein Becken wird pro Minute um 0,75 Liter aufgefüllt; zu Beginn sind 2,5 Liter enthalten.  
Ein zweites Becken enthält anfangs 7,25 Liter, dabei werden pro Minute 0,5 Liter abgelassen.  
**Berechne**, nach wie vielen Minuten beide Becken gleich viel Wasser enthalten.

<!-- data-solution-button="5"-->
$x$ = [[  19/5  ]]
@Algebrite.check(19/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{4}x + \dfrac{5}{2} \;\stackrel{!}{=}\; \dfrac{29}{4} - \dfrac{1}{2}x
$$

$$
\begin{align*}
\dfrac{3}{4}x + \dfrac{5}{2} &= \dfrac{29}{4} - \dfrac{1}{2}x \quad \left|\, +\dfrac{1}{2}x \right.\\[2pt]
\left(\dfrac{3}{4}+\dfrac{1}{2}\right)x + \dfrac{5}{2} &= \dfrac{29}{4} \quad \left|\, -\dfrac{5}{2} \right.\\[2pt]
\dfrac{5}{4}x &= \dfrac{29}{4} - \dfrac{10}{4} = \dfrac{19}{4} \quad \left|\, :\dfrac{5}{4} \right.\\[2pt]
x &= \dfrac{19}{4}\cdot\dfrac{4}{5} = \dfrac{19}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{4}\cdot\dfrac{19}{5} + \dfrac{5}{2}}_{\text{1. Becken}}
= \dfrac{57}{20} + \dfrac{50}{20}
= \dfrac{107}{20}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{29}{4} - \dfrac{1}{2}\cdot\dfrac{19}{5}}_{\text{2. Becken}}
= \dfrac{145}{20} - \dfrac{38}{20}
= \dfrac{107}{20}
\end{align*}
$$

Deutung:
Nach $\dfrac{19}{5}\approx 3,8$ Minuten ist der Füllstand in beiden Becken gleich ( $\dfrac{107}{20}=5,35$ Liter)
************




<!-- quivalenzumformung 0039 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 39:__ Eine gesuchte Zahl wird verdreifacht und anschließend um fünf verringert.  
Nimmt man stattdessen von derselben Zahl die Hälfte und addiert sieben, so entsteht derselbe Wert.  
**Berechne** die gesuchte Zahl.

<!-- data-solution-button="5"-->
$x$ = [[  24/5  ]]
@Algebrite.check(24/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x - 5 \;\stackrel{!}{=}\; \dfrac{1}{2}x + 7
$$

$$
\begin{align*}
3x - 5 &= \dfrac{1}{2}x + 7 \quad \left|\, -\dfrac{1}{2}x \right.\\[2pt]
\left(3 - \dfrac{1}{2}\right)x - 5 &= 7 \quad \left|\, +5 \right.\\[2pt]
\dfrac{5}{2}x &= 12 \quad \left|\, :\dfrac{5}{2} \right.\\[2pt]
x &= 12\cdot \dfrac{2}{5} = \dfrac{24}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{3\cdot \dfrac{24}{5} - 5}_{\text{linke Seite}}
= \dfrac{72}{5} - \dfrac{25}{5}
= \dfrac{47}{5}   \\
&\quad\text{und}\quad   \\
&\underbrace{\dfrac{1}{2}\cdot \dfrac{24}{5} + 7}_{\text{rechte Seite}}
= \dfrac{12}{5} + \dfrac{35}{5}
= \dfrac{47}{5}
\end{align*}
$$


Deutung: Die gesuchte Zahl ist $\dfrac{24}{5}=4{,}8$.
************




<!-- quivalenzumformung 0040 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 40:__ In zwei Räumen ändert sich die Temperatur gleichmäßig: 
In Raum 1 ist es anfangs 16 °C und die Temperatur steigt pro Stunde um 1,5 °C.  
In Raum 2 ist es anfangs 28 °C und die Temperatur sinkt pro Stunde um 0,75 °C.  
**Berechne**, nach wie vielen Stunden beide Räume die gleiche Temperatur haben.

<!-- data-solution-button="5"-->
$x$ = [[  16/3  ]]
@Algebrite.check(16/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x + 16 \;\stackrel{!}{=}\; 28 - \dfrac{3}{4}x
$$

$$
\begin{align*}
\dfrac{3}{2}x + 16 &= 28 - \dfrac{3}{4}x \quad \left|\, +\dfrac{3}{4}x \right.\\[2pt]
\left(\dfrac{3}{2} + \dfrac{3}{4}\right)x + 16 &= 28 \quad \left|\, -16 \right.\\[2pt]
\dfrac{9}{4}x &= 12 \quad \left|\, :\dfrac{9}{4} \right.\\[2pt]
x &= 12 \cdot \dfrac{4}{9} \;=\; \dfrac{16}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{16 + \dfrac{3}{2}\cdot \dfrac{16}{3}}_{\text{Raum 1}}
= 16 + 8
= 24^\circ\mathrm{C}  \\
&\quad\text{und}\quad  \\
&\underbrace{28 - \dfrac{3}{4}\cdot \dfrac{16}{3}}_{\text{Raum 2}}
= 28 - 4
= 24^\circ\mathrm{C}
\end{align*}
$$


Deutung: Nach $\dfrac{16}{3}\approx 5{,}3$ Stunden haben beide Räume $24^\circ\mathrm{C}$.
************






#### Übungsaufgaben zur Äquivalenzumformung 41 bis 50


<!-- quivalenzumformung 0041 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 41:__ Ein Anstieg beginnt auf 820 m und gewinnt pro Minute 9 m an Höhe.  
Ein Abstieg startet gleichzeitig auf 1130 m und verliert pro Minute 6 m an Höhe.  
**Berechne**, nach wie vielen Minuten beide Routen auf gleicher Höhe sind.

<!-- data-solution-button="5"-->
$x$ = [[  62/3  ]]
@Algebrite.check(62/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
9x + 820 \;\stackrel{!}{=}\; 1130 - 6x
$$

$$
\begin{align*}
9x + 820 &= 1130 - 6x \quad \left|\, +6x \right.\\[2pt]
15x + 820 &= 1130 \quad \left|\, -820 \right.\\[2pt]
15x &= 310 \quad \left|\, :15 \right.\\[2pt]
x &= \dfrac{310}{15} \;=\; \dfrac{62}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{9\cdot \dfrac{62}{3} + 820}_{\text{Aufstieg}}
= 3\cdot 62 + 820
= 186 + 820
= 1006\ \text{m} \\
&\quad\text{und}\quad \\
&\underbrace{1130 - 6\cdot \dfrac{62}{3}}_{\text{Abstieg}}
= 1130 - 2\cdot 62
= 1130 - 124
= 1006\ \text{m}
\end{align*}
$$


Deutung: Nach $\dfrac{62}{3}\approx 20{,}7$ Minuten liegen beide bei 1006 m Höhe.

************



<!-- quivalenzumformung 0042 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 42:__ Zwei Pflanzen wachsen in gleichmäßiger Höhe pro Woche.  
Die erste Pflanze ist zu Beginn 26 cm hoch und wächst jede Woche um 3,5 cm.  
Die zweite Pflanze ist anfangs 48 cm hoch und wächst pro Woche um 1 cm.  
**Berechne**, nach wie vielen Wochen beide Pflanzen gleich hoch sind.



<!-- data-solution-button="5"-->
$x$ = [[  44/5  ]]
@Algebrite.check(44/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{7}{2}x + 26 \;\stackrel{!}{=}\; x + 48
$$

$$
\begin{align*}
\dfrac{7}{2}x + 26 &= x + 48 \quad \left|\, -x \right.\\[2pt]
\left(\dfrac{7}{2} - 1\right)x + 26 &= 48 \quad \left|\, -26 \right.\\[2pt]
\dfrac{5}{2}x &= 22 \quad \left|\, :\dfrac{5}{2} \right.\\[2pt]
x &= 22 \cdot \dfrac{2}{5} \;=\; \dfrac{44}{5}
\end{align*}
$$

$$
\textbf{Probe:}\quad 
\underbrace{\dfrac{7}{2}\cdot \dfrac{44}{5} + 26}_{\text{1. Pflanze}}
= \dfrac{154}{5} + \dfrac{130}{5}
= \dfrac{284}{5}
\quad\text{und}\quad
\underbrace{48 + \dfrac{44}{5}}_{\text{2. Pflanze}}
= \dfrac{240}{5} + \dfrac{44}{5}
= \dfrac{284}{5}
$$


Deutung: Nach $\dfrac{44}{5} \approx 8{,}8$ Wochen sind beide Pflanzen gleich hoch ($\dfrac{284}{5} = 56{,}8$ cm).

************






<!-- quivalenzumformung 0043 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 43:__ Auf zwei Förderbändern liegen Kisten.  
Auf Band 1 liegen zu Beginn 18 Kisten, und pro Minute kommen 1,25 Kisten dazu.  
Auf Band 2 liegen zu Beginn 44 Kisten, und pro Minute werden 1,75 Kisten abtransportiert.  
**Berechne**, nach wie vielen Minuten auf beiden Bändern gleich viele Kisten liegen.


<!-- data-solution-button="5"-->
$x$ = [[  26/3  ]]
@Algebrite.check(26/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{5}{4}x + 18 \;\stackrel{!}{=}\; 44 - \dfrac{7}{4}x
$$

$$
\begin{align*}
\dfrac{5}{4}x + 18 &= 44 - \dfrac{7}{4}x \quad \left|\, +\dfrac{7}{4}x \right.\\[2pt]
\left(\dfrac{5}{4} + \dfrac{7}{4}\right)x + 18 &= 44 \quad \left|\, -18 \right.\\[2pt]
\dfrac{12}{4}x &= 26 \quad \left|\, :\dfrac{12}{4} \right.\\[2pt]
3x &= 26 \quad \left|\, :3 \right.\\[2pt]
x &= \dfrac{26}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{5}{4}\cdot\dfrac{26}{3} + 18}_{\text{Band 1}}
= \dfrac{130}{12} + \dfrac{216}{12}
= \dfrac{346}{12}
= \dfrac{173}{6}   \\
&\quad\text{und}\quad   \\
&\underbrace{44 - \dfrac{7}{4}\cdot\dfrac{26}{3}}_{\text{Band 2}}
= \dfrac{264}{6} - \dfrac{91}{6}
= \dfrac{173}{6}
\end{align*}
$$


Deutung: Nach $\dfrac{26}{3}\approx 8{,}7$  Minuten liegen auf beiden Bändern gleich viele Kisten ($\dfrac{173}{6}\approx 28{,}8$ Kisten).

************






<!-- quivalenzumformung 0044 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 44:__ Im Wartebereich eines Bahnhofs stehen zwei Sitzplätze mit Steckdosen.  
Ein Smartphone wird an eine Schnellladestation angeschlossen. Zu Beginn zeigt es 22 Prozent Akkustand und gewinnt pro Minute 1,5 Prozentpunkte hinzu.  
Das andere Smartphone läuft ohne Netzteil mit einem grafikintensiven Spiel. Es startet bei 94 Prozent und verliert pro Minute 2 Prozentpunkte.  
**Berechne**, nach wie vielen Minuten beide Geräte den gleichen Akkustand anzeigen.

<!-- data-solution-button="5"-->
$x$ = [[  144/7  ]]
@Algebrite.check(144/7)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x + 22 \;\stackrel{!}{=}\; 94 - 2x
$$

$$
\begin{align*}
\dfrac{3}{2}x + 22 &= 94 - 2x \quad \left|\, +2x \right.\\[2pt]
\left(\dfrac{3}{2} + 2\right)x + 22 &= 94 \quad \left|\, -22 \right.\\[2pt]
\dfrac{7}{2}x &= 72 \quad \left|\, :\dfrac{7}{2} \right.\\[2pt]
x &= 72 \cdot \dfrac{2}{7} \;=\; \dfrac{144}{7}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{2}\cdot \dfrac{144}{7} + 22}_{\text{Ladegerät}}
= \dfrac{216}{7} + \dfrac{154}{7}
= \dfrac{370}{7}   \\
&\quad\text{und}\quad   \\
&\underbrace{94 - 2\cdot \dfrac{144}{7}}_{\text{ohne Netzteil}}
= \dfrac{658}{7} - \dfrac{288}{7}
= \dfrac{370}{7}
\end{align*}
$$


Deutung: Nach $\dfrac{144}{7}\approx 20{,}6$ Minuten zeigen beide etwa $\dfrac{370}{7}\approx 52{,}9\,\% Akkustand.

************





<!-- quivalenzumformung 0045 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 45:__ Im Neubau eines Museums werden die Aufzüge im Probebetrieb getestet.  
Ein Aufzug startet in der Tiefgarage Ebene −3 und fährt gleichmäßig nach oben; die Anzeige steigt dabei pro Minute um 1,5 Ebenen.  
Der andere Aufzug startet im 9. Obergeschoss und fährt gleichmäßig nach unten; die Anzeige sinkt pro Minute um 2 Ebenen.  
Die Höhenanzeige der Aufzüge kann auch Zwischenwerte zwischen zwei Ebenen anzeigen.  
**Berechne**, nach wie vielen Minuten beide Aufzüge auf gleicher Höhe sind.



<!-- data-solution-button="5"-->
$x$ = [[  24/7  ]]
@Algebrite.check(24/7)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{2}x - 3 \;\stackrel{!}{=}\; 9 - 2x
$$

$$
\begin{align*}
\dfrac{3}{2}x - 3 &= 9 - 2x \quad \left|\, +2x \right.\\[2pt]
\left(\dfrac{3}{2} + 2\right)x - 3 &= 9 \quad \left|\, +3 \right.\\[2pt]
\dfrac{7}{2}x &= 12 \quad \left|\, :\dfrac{7}{2} \right.\\[2pt]
x &= 12 \cdot \dfrac{2}{7} \;=\; \dfrac{24}{7}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-3 + \dfrac{3}{2}\cdot\dfrac{24}{7}}_{\text{Aufzug aus der Tiefgarage}}
= -\dfrac{21}{7} + \dfrac{36}{7}
= \dfrac{15}{7}
&\quad\text{und}\quad
&\underbrace{9 - 2\cdot\dfrac{24}{7}}_{\text{Aufzug von oben}}
= \dfrac{63}{7} - \dfrac{48}{7}
= \dfrac{15}{7}
\end{align*}
$$


Deutung: Nach $\dfrac{24}{7}\approx 3{,}43$ Minuten sind beide auf gleicher Höhe, nämlich bei $\dfrac{15}{7}\approx 2{,}14$ Ebenen über dem Erdgeschoss (zwischen 2. und 3. OG).

************







<!-- quivalenzumformung 0046 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 46:__ Im großen Schaubecken werden zwei Tauchroboter getestet.  
Der erste startet 60 m unter der Wasseroberfläche und steigt gleichmäßig pro Minute um 3 m auf.  
Der zweite startet 10 m unter der Wasseroberfläche und taucht gleichmäßig pro Minute um 2,5 m weiter ab.  
**Berechne**, nach wie vielen Minuten beide Roboter in der gleichen Tiefe sind.

<!-- data-solution-button="5"-->
$x$ = [[  100/11  ]]
@Algebrite.check(100/11)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
3x - 60 \;\stackrel{!}{=}\; -10 - \dfrac{5}{2}x
$$

$$
\begin{align*}
3x - 60 &= -10 - \dfrac{5}{2}x \quad \left|\, +\dfrac{5}{2}x \right.\\[2pt]
\left(3 + \dfrac{5}{2}\right)x - 60 &= -10 \quad \left|\, +60 \right.\\[2pt]
\dfrac{11}{2}x &= 50 \quad \left|\, :\dfrac{11}{2} \right.\\[2pt]
x &= 50 \cdot \dfrac{2}{11} \;=\; \dfrac{100}{11}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-60 + 3\cdot \dfrac{100}{11}}_{\text{1. Roboter}}
= -\dfrac{660}{11} + \dfrac{300}{11}
= -\dfrac{360}{11}
&\quad\text{und}\quad
&\underbrace{-10 - \dfrac{5}{2}\cdot \dfrac{100}{11}}_{\text{2. Roboter}}
= -\dfrac{110}{11} - \dfrac{250}{11}
= -\dfrac{360}{11}
\end{align*}
$$


Deutung: Nach $\dfrac{100}{11}\approx 9{,}09$ Minuten befinden sich beide in derselben Tiefe: $-\dfrac{360}{11}\approx -32{,}73$ m (also $32{,}73$ m unter der Oberfläche).


************





<!-- quivalenzumformung 0047 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 47:__ Vor der Abendshow gibt es zwei Eingänge mit separaten Warteschlangen.  
Am Nord-Eingang stehen zu Beginn 40 Personen. Pro Minute werden im Durchschnitt 2,5 Personen eingelassen, gleichzeitig kommen 1,25 Personen neu dazu.  
Am Süd-Eingang warten zunächst 64 Personen. Pro Minute werden 3,5 Personen eingelassen, während 1 Person pro Minute neu ankommt.  
Die Anzeigen der Ordner werden im Mittel über mehrere Minuten gemessen.  
**Berechne**, nach wie vielen Minuten beide Schlangen **gleich lang** sind.

<!-- data-solution-button="5"-->
$x$ = [[  96/5  ]]
@Algebrite.check(96/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
40 - \dfrac{5}{4}x \;\stackrel{!}{=}\; 64 - \dfrac{5}{2}x
$$

$$
\begin{align*}
40 - \dfrac{5}{4}x &= 64 - \dfrac{5}{2}x \quad \left|\, +\dfrac{5}{2}x \right.\\[2pt]
40 + \left(\dfrac{5}{2} - \dfrac{5}{4}\right)x &= 64 \quad \left|\, -40 \right.\\[2pt]
\left(\dfrac{10}{4} - \dfrac{5}{4}\right)x &= 24 \quad \Rightarrow \quad \dfrac{5}{4}x = 24 \quad \left|\, :\dfrac{5}{4} \right.\\[2pt]
x &= 24 \cdot \dfrac{4}{5} \;=\; \dfrac{96}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{40 - \dfrac{5}{4}\cdot\dfrac{96}{5}}_{\text{Nord-Eingang}}
= 40 - \dfrac{96}{4}
= 40 - 24
= 16   \\
&\quad\text{und}\quad   \\
&\underbrace{64 - \dfrac{5}{2}\cdot\dfrac{96}{5}}_{\text{Süd-Eingang}}
= 64 - \dfrac{96}{2}
= 64 - 48
= 16
\end{align*}
$$


Deutung: Nach $\dfrac{96}{5}\approx 19{,}2$ Minuten sind beide Schlangen gleich lang (je 16 Personen). Vorher ist die Schlange am Süd-Eingang länger, danach die am Nord-Eingang.

************




<!-- Äquivalenzumformung 0048 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 48:__ In einer großen Versuchshalle werden zwei Drohnen auf einer geraden Linie getestet.  
Der Boden ist mit einer Skala markiert: 0 m liegt in der Hallenmitte.  
Die erste Drohne startet 50 m links vom Mittelpunkt und fliegt gleichmäßig nach rechts; pro Sekunde legt sie 2,8 m zurück.  
Die zweite Drohne steht anfangs 130 m rechts vom Mittelpunkt, hebt aber erst 15 Sekunden später ab und fliegt dann gleichmäßig nach links mit 1,6 m pro Sekunde.  
**Berechne**, nach wie vielen Sekunden (ab Start der ersten Drohne) beide Drohnen an derselben Position sind.

<!-- data-solution-button="5"-->
$x$ = [[  510/11  ]]
@Algebrite.check(510/11)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
-50 + \dfrac{14}{5}x \;\stackrel{!}{=}\; 130 - \dfrac{8}{5}\,\bigl(x - 15\bigr)
$$

$$
\begin{align*}
-50 + \dfrac{14}{5}x &= 130 - \dfrac{8}{5}x + \dfrac{8}{5}\cdot 15 \\[2pt]
-50 + \dfrac{14}{5}x &= 130 + 24 - \dfrac{8}{5}x \quad \left|\, +\dfrac{8}{5}x \right.  \\[2pt]
\left(\dfrac{14}{5} + \dfrac{8}{5}\right)x - 50 &= 154 \quad \left|\, +50 \right.\\[2pt]
\dfrac{22}{5}x &= 204 \quad \left|\, :\dfrac{22}{5} \right.\\[2pt]
x &= 204 \cdot \dfrac{5}{22} \;=\; \dfrac{510}{11}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-50 + \dfrac{14}{5}\cdot \dfrac{510}{11}}_{\text{1. Drohne}}
= -\dfrac{550}{11} + \dfrac{1428}{11}
= \dfrac{878}{11}    \\
&\quad\text{und}\quad    \\
&\underbrace{130 - \dfrac{8}{5}\!\left(\dfrac{510}{11} - 15\right)}_{\text{2. Drohne}}
= \dfrac{1430}{11} - \dfrac{552}{11}
= \dfrac{878}{11}
\end{align*}
$$


Deutung: Nach $\dfrac{510}{11}\approx 46{,}36$ s treffen sich beide bei $\dfrac{878}{11}\approx 79{,}82$ m rechts vom Mittelpunkt. Die zweite Drohne war dabei $\dfrac{510}{11}-15=\dfrac{345}{11}\approx 31{,}36$ s in der Luft.
************





<!-- Äquivalenzumformung 0049 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 49:__ Im Kaminzimmer stehen zwei Kerzen auf dem Kaminsims.  
Die erste Kerze wird um 18:00 Uhr angezündet; sie ist anfangs 36 cm lang und wird pro Stunde um 1,2 cm kürzer.  
Die zweite Kerze ist anfangs 24 cm lang, wird aber erst fünf Stunden später angezündet; sie brennt dann langsamer und verliert pro Stunde 0,3 cm.  
**Berechne**, nach wie vielen Stunden seit dem Anzünden der ersten Kerze beide Kerzen gleich lang sind.  


<!-- data-solution-button="5"-->
$x$ = [[  35/3  ]]
@Algebrite.check(35/3)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
36 - \dfrac{6}{5}x \;\stackrel{!}{=}\; 24 - \dfrac{3}{10}\,\bigl(x - 5\bigr)
$$

$$
\begin{align*}
36 - \dfrac{6}{5}x &= 24 - \dfrac{3}{10}x + \dfrac{3}{2} \\[2pt]
36 - \dfrac{6}{5}x &= \dfrac{51}{2} - \dfrac{3}{10}x \quad \left|\, +\dfrac{6}{5}x \right.\\[2pt]
36 &= \dfrac{51}{2} + \left(\dfrac{6}{5} - \dfrac{3}{10}\right)x 
= \dfrac{51}{2} + \dfrac{9}{10}x \quad \left|\, -\dfrac{51}{2} \right.\\[2pt]
36 - \dfrac{51}{2} &= \dfrac{9}{10}x 
\quad\Rightarrow\quad -\dfrac{21}{2} = \dfrac{9}{10}x \quad \left|\, :\dfrac{9}{10} \right.\\[2pt]
x &= -\dfrac{21}{2}\cdot \dfrac{10}{9} = \dfrac{105}{9} = \dfrac{35}{3}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{36 - \dfrac{6}{5}\cdot \dfrac{35}{3}}_{\text{1. Kerze}}
= 36 - 14 = 22    \\
&\quad\text{und}\quad   \\
&\underbrace{24 - \dfrac{3}{10}\!\left(\dfrac{35}{3} - 5\right)}_{\text{2. Kerze}}
= 24 - \dfrac{3}{10}\cdot \dfrac{20}{3}
= 24 - 2 = 22
\end{align*}
$$

Deutung: Nach $\dfrac{35}{3} \approx 11{,}7$ Stunden (also gegen 05:40 Uhr) sind beide Kerzen 22 cm lang.
************





<!-- Äquivalenzumformung 0050 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 50:__ Entlang einer geraden Küstenlinie steht ein Leuchtturm als Nullpunkt der Entfernungsskala.  
Ein Schnellzug A startet 55 km westlich des Leuchtturms und fährt ostwärts mit $110\,\dfrac{\text{km}}{\text{h}}$.  
Ein Regionalzug B befindet sich 145 km östlich des Leuchtturms, fährt aber erst 15 Minuten später westwärts mit $80\,\dfrac{\text{km}}{\text{h}}$ los.  
**Berechne**, nach wie vielen Stunden seit Abfahrt von Zug A beide Züge an derselben Position relativ zum Leuchtturm sind.  


<!-- data-solution-button="5"-->
$x$ = [[  22/19  ]]
@Algebrite.check(22/19)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
-55 + 110x \;\stackrel{!}{=}\; 145 - 80\,\bigl(x - \tfrac{1}{4}\bigr)
$$

$$
\begin{align*}
-55 + 110x &= 145 - 80x + 20 \quad \\[2pt]
-55 + 110x &= 165 - 80x \quad \left|\, +80x \right.\\[2pt]
-55 + 190x &= 165 \quad \left|\, +55 \right.\\[2pt]
190x &= 220 \quad \left|\, :190 \right.\\[2pt]
x &= \dfrac{22}{19}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-55 + 110\cdot \dfrac{22}{19}}_{\text{Zug A}}
= -\dfrac{1045}{19} + \dfrac{2420}{19}
= \dfrac{1375}{19}    \\
&\quad\text{und}\quad    \\
&\underbrace{145 - 80\!\left(\dfrac{22}{19} - \dfrac{1}{4}\right)}_{\text{Zug B}}
= \dfrac{2755}{19} - \dfrac{1380}{19}
= \dfrac{1375}{19}
\end{align*}
$$


Deutung: Nach $\dfrac{22}{19}\approx 1{,}16$ Stunden (ca. 69,5 Minuten) treffen sich die Züge $\dfrac{1375}{19}\approx 72{,}4$ km östlich vom Leuchtturm.

************


