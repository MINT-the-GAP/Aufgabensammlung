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







#### Übungsaufgaben zu negativen Zahlen 1 bis 10



<!-- Negative Zahlen 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-7$ [[($>$)|$=$|$<$]] $-11$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-19$ [[$>$|$=$|($<$)]] $-5$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-8$ [[($>$)|$=$|$<$]] $-9$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-15$ [[$>$|$=$|($<$)]] $5$ 

</div>
</section>



<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-1$ [[$>$|$=$|($<$)]] $4$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-7$ [[($>$)|$=$|$<$]] $-9$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-8$ [[$>$|$=$|($<$)]] $8$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-5$ [[$>$|$=$|($<$)]] $0$ 

</div>
</section>



<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0003 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 3:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-8$ [[($>$)|$=$|$<$]] $-11$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $|-5|$ [[$>$|($=$)|$<$]] $5$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-8$ [[$>$|$=$|($<$)]] $-2$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $|-9|$ [[($>$)|$=$|$<$]] $|-5|$ 

</div>
</section>


<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0004 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 4:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-5$ [[$>$|$=$|($<$)]] $-3$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $|4|$ [[$>$|($=$)|$<$]] $|-4|$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-12$ [[($>$)|$=$|$<$]] $-14$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-|3|$ [[$>$|($=$)|$<$]] $-3$ 

</div>
</section>



<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0005 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-6$ [[($>$)|$=$|$<$]] $-8$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-3$ [[$>$|$=$|($<$)]] $3$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $-15$ [[$>$|($=$)|$<$]] $-|-15|$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-1$ [[$>$|$=$|($<$)]] $0$ 

</div>
</section>


<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0006 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 6:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-0,15$ [[$>$|($=$)|$<$]] $\dfrac{-3}{20}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-1,\bar{6}$ [[$>$|$=$|($<$)]] $-1,5$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\left| -\dfrac{3}{4} \right|$ [[($>$)|$=$|$<$]] $-0,75$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-\dfrac{7}{8}$ [[$>$|$=$|($<$)]] $-\dfrac{7}{9}$ 

</div>
</section>


<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0007 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 7:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $|-0,\bar{7}|$ [[$>$|($=$)|$<$]] $\dfrac{7}{9}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $-\dfrac{5}{6}$ [[$>$|$=$|($<$)]] $-\dfrac{5}{12}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $\left|-\dfrac{7}{8}\right|$ [[($>$)|$=$|$<$]] $\left|-\dfrac{7}{16}\right|$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $-0,\bar{2}$ [[$>$|$=$|($<$)]] $-|-0,2|$ 

</div>
</section>



<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 8:__ **Entscheide**, welches Relationszeichen eine wahre mathematische Aussage darstellt.


<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $-\dfrac{6}{5}$ [[($>$)|$=$|$<$]] $-\dfrac{17}{10}$ 

</div>
<div class="flex-child">

__$b)\;\;$__ $|-1,\bar{3}|$ [[($>$)|$=$|$<$]] $-\dfrac{4}{3}$ 

</div>
<div class="flex-child">

__$c)\;\;$__ $0,04$ [[($>$)|$=$|$<$]] $-\dfrac{7}{10}$ 

</div>
<div class="flex-child">

__$d)\;\;$__ $\dfrac{1}{25}$ [[$>$|$=$|($<$)]] $|-0,05|$ 

</div>
</section>


<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 9:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $|-9|=$ [[  9   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $\text{sgn}(-5)=$ [[  -1  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $\text{sgn}(85)=$ [[  +1  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $|72|=$ [[  72  ]]

</div>
</section>








<!-- Negative Zahlen 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 10:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $\text{sgn}(17)=$ [[  +1   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $\text{sgn}(|-14|)=$ [[  +1  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-|-77|=$ [[  -77  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $|\text{sgn}(-94)|=$ [[  +1  ]]

</div>
</section>


<!-- data-solution-button="5"--> 





#### Übungsaufgaben zu negativen Zahlen 11 bis 20




<!-- Negative Zahlen 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 11:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $\text{sgn}(-8) \cdot |-4|=$ [[  -4   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $\text{sgn}(847)=$ [[  +1  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-|84|=$ [[  -84 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $\text{sgn}(-43)=$ [[  -1  ]]

</div>
</section>


<!-- data-solution-button="5"--> 








<!-- Negative Zahlen 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 12:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -\left( -\left( -4 \right) \right)=$ [[  -4  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-\left( -\left( -\left( -\left( -9 \right) \right) \right) \right)=$ [[  -9  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-\left( -\left( -\left( -12 \right) \right) \right)=$ [[  12  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-\left( -\left| -\left( -7 \right) \right| \right)=$ [[   7  ]]

</div>
</section>


<!-- data-solution-button="5"--> 








<!-- Negative Zahlen 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 13:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -\left( -\left( -\left( -11 \right) \right) \right)=$ [[  11  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-\left( -|-5| \right)=$ [[  5   ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -\left( -\left( -25 \right) \right)=$ [[  -25 ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-\left| -\left( -\left( -3 \right) \right) \right|=$ [[  -3  ]]

</div>
</section>


<!-- data-solution-button="5"--> 








<!-- Negative Zahlen 0014 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 14:__ **Gib** den Wert des Terms **an**.


<section class="flex-container">
<div class="flex-child">


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -\left( -71 \right)=$ [[  71  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-\left( -\left( -8 \right) \right)=$ [[  -8  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-\left| -\left( -\left( -6 \right) \right)  \right|=$ [[  -6  ]]

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-\left( -\left( -\left( -\left( -\left( -\left( -31 \right) \right) \right) \right) \right) \right)=$ [[ -31  ]]

</div>
</section>


<!-- data-solution-button="5"--> 








<!-- Negative Zahlen 0015 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 15:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[   0   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   1   ]] " | " [[   -1  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -3 "     |      " 4 "      |     " -5 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  -13  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  2    ]] " | " [[ -15   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 9 "      |      " -7 "     |      " -8 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```













<!-- Negative Zahlen 0016 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 16:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  -67  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[ -51   ]] " | " [[  -16  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " -14 "     |      " -37 "    |      " 21 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  -36  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -10  ]] " | " [[ -26   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 12 "     |     " -22 "     |      " -4 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```












<!-- Negative Zahlen 0017 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 17:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[   8   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   2   ]] " |      " 6 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -12 "    |      " 14 "     | " [[  -8   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  |     " -16 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -42  ]] " |     " 26 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
| " [[  -23  ]] " | " [[  -19  ]] " |      " 45 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```


<!-- data-solution-button="5"--> 









<!-- Negative Zahlen 0018 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 18:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  |     " -4 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -27  ]] " |     " 23 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " -61 "     | " [[  34   ]] " | " [[  -11  ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  |     " -37 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " -22 "     | " [[  -15  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 37 "      | " [[  -59  ]] " | " [[  44   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```














<!-- Negative Zahlen 0019 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 19:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                           +-----------------+
                           |                 |
                           |     " 12 "      |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  11   ]] " |      " 1 "      |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  4    ]] " |      " 7 "      | " [[  -6   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  -5   ]] " |      " 9 "      | " [[  -2   ]] " | " [[  -4   ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                           +-----------------+
                           |                 |
                           | " [[  61   ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 12 "     | " [[  49   ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |     " -21 "     | " [[  33   ]] " |      " 16 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  -13  ]] " |     " -8 "      | " [[  41   ]] " | " [[  -24  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```











<!-- Negative Zahlen 0020 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 20:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                                    +-----------------+
                                    |                 |
                                    |      " 73 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  11   ]] " |     " 62 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  -17  ]] " |      " 28 "     | " [[  34   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  -29  ]] " |     " 12 "      | " [[  16   ]] " |     " 18 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -16  ]] " |     " -13 "     | " [[  25   ]] " | " [[  -9   ]] " | " [[  27   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                                    +-----------------+
                                    |                 |
                                    |      " -9 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  20   ]] " | " [[ -29   ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  22   ]] " |     " -2 "      | " [[  -27  ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  15   ]] " | " [[   7   ]] " |     " -9 "      | " [[  -18  ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -9   ]] " |      " 24 "     | " [[  -17  ]] " | " [[   8   ]] " |     " -26 "     |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```





#### Übungsaufgaben zu negativen Zahlen 21 bis 30



<!-- Negative Zahlen 0021 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 21:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  300  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -10  ]] " | " [[  -30  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -2 "     |      " 5 "      |      " -6 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[ -224  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -28  ]] " | " [[   8   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -7 "     |      " 4 "      |      " 2 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```






<!-- Negative Zahlen 0022 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 22:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  60   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -12  ]] " | " [[   -5  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 12 "      |      " -1 "     |      " 5 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  -540 ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  18   ]] " | " [[  -30  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 3 "      |      " 6 "      |      " -5 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




<!-- data-solution-button="5"--> 


<!-- Negative Zahlen 0023 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 23:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.








__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[ -800  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  20   ]] " |     " -40 "     |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -4 "     |      " -5 "     | " [[   8   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[ -308  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -14  ]] " |     " 22 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 7 "      | " [[   -2  ]] " |     " -11 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




<!-- data-solution-button="5"--> 

<!-- Negative Zahlen 0024 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 24:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  |     " 576 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -4   ]] " |     " -144 "    |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
| " [[   1   ]] " |     " -4 "      | " [[  -36  ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  |    " -441 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " -21 "     | " [[  21   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 3 "      | " [[  -7   ]] " | " [[  -3   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



<!-- data-solution-button="5"--> 


<!-- Negative Zahlen 0025 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
__Aufgabe 25:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                           +-----------------+
                           |                 |
                           |    " -648 "     |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  18   ]] " |     " -36 "     |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  -3   ]] " |     " -6 "      | " [[   6   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  -1   ]] " |      " 3 "      | " [[   -2  ]] " | " [[   -3  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                           +-----------------+
                           |                 |
                           | " [[ -384  ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 24 "     | " [[  -16  ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 6 "      | " [[  4    ]] " |      " -4 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   -6  ]] " |      " -1 "     | " [[  -4   ]] " | " [[   -1  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```







<!-- Negative Zahlen 0026 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
__Aufgabe 26:__ **Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.





__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                                    +-----------------+
                                    |                 |
                                    |  " -1638400 "   |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[ -2560 ]] " |    " 640 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  80   ]] " |     " -32 "     |  " [[ -20  ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  -10  ]] " |     " -8 "      | " [[   4   ]] " |     " -5 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -5   ]] " |      " 2 "      | " [[   -4  ]] " | " [[   -1  ]] " | " [[   5   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                                    +-----------------+
                                    |                 |
                                    | " [[-80000 ]] " |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[ 1000  ]] " | " [[  -80  ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  |     " -50 "     |    " -20 "      | " [[   4   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  -5   ]] " | " [[   10  ]] " |     " -2 "      | " [[  -2   ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -1   ]] " |      " 5 "      | " [[   2   ]] " | " [[  -1   ]] " |      " 2 "      |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```






<!-- Negative Zahlen 0027 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 27:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.


<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-2$ [[($+$)|$-$|$\cdot$|$:$]] $5$ [[$+$|$-$|($\cdot$)|$:$]] $(-7) = -37$


<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-17$ [[($+$)|$-$|$\cdot$|$:$]] $(-8)$ [[$+$|($-$)|$\cdot$|$:$]] $(-15) = -10$


<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-32$ [[$+$|$-$|$\cdot$|($:$)]] $($  [[($+$)|$-$|$\cdot$|$:$]]  $(-4))$ [[$+$|($-$)|$\cdot$|$:$]] $(-5) = 13$




<!-- Negative Zahlen 0028 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 28:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.



<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-(9$ [[$+$|($-$)|$\cdot$|$:$]] $(-6))$ [[$+$|$-$|$\cdot$|($:$)]] $3 = -5$


<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-7$ [[($+$)|$-$|$\cdot$|$:$]] $(-2)$ [[$+$|$-$|($\cdot$)|$:$]] $(-8) = 5$


<!-- data-solution-button="5"--> 
__$c)\;\;$__ $8$ [[$+$|($-$)|$\cdot$|$:$]] $3$ [[$+$|$-$|($\cdot$)|$:$]] $|-4|$ [[$+$|$-$|$\cdot$|($:$)]] $(-6) = 10$




<!-- Negative Zahlen 0029 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 29:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.



<!-- data-solution-button="5"--> 
__$a)\;\;$__ $72$ [[$+$|$-$|$\cdot$|($:$)]] $(-18)$ [[$+$|($-$)|$\cdot$|$:$]] $(-48) = 52$


<!-- data-solution-button="5"--> 
__$b)\;\;$__ $(-3$ [[($+$)|$-$|$\cdot$|$:$]] $(-|-2|))$ [[$+$|$-$|$\cdot$|($:$)]]  $(-5) = 1$


<!-- data-solution-button="5"--> 
__$c)\;\;$__ $\text{sgn}(-4)$ [[$+$|$-$|($\cdot$)|$:$]] $(-5)$ [[$+$|($-$)|$\cdot$|$:$]]  $(-8)$ [[$+$|$-$|($\cdot$)|$:$]] $3 = 23$




<!-- Negative Zahlen 0030 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
__Aufgabe 30:__ **Wähle** die Rechenoperatoren **aus**, sodass die Gleichung eine wahre Aussage widerspiegelt.



<!-- data-solution-button="5"--> 
__$a)\;\;$__ $48$ [[$+$|$-$|$\cdot$|($:$)]] $($  [[$+$|($-$)|$\cdot$|$:$]]  $4)$ [[($+$)|$-$|$\cdot$|$:$]] $(-5) = -17$


<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-14$ [[$+$|($-$)|$\cdot$|$:$]] $12$ [[($+$)|$-$|$\cdot$|$:$]] $(-16) = -42$


<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-2$ [[$+$|($-$)|$\cdot$|$:$]] $(-7$ [[$+$|$-$|($\cdot$)|$:$]] $(-8)) = -58$




#### Übungsaufgaben zu negativen Zahlen 31 bis 40



<!-- Negative Zahlen 0031 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 31:__ **Gib** die Stelle der angegebenen Punkte **an**.


<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ31.png)

</center>

<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"--> 
$A($[[  -4 ]]$|$[[  2  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
$B($[[  -5 ]]$|$[[  -3  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
[[  E  ]]$( 3 | -1 )$ \

</div>
</section>



<!-- Negative Zahlen 0032 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 32:__ **Gib** die Stelle der angegebenen Punkte **an**.


<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ32.png)

</center>

<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"--> 
$A($[[ -4  ]]$|$[[  -3 ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
$B($[[  3  ]]$|$[[ -1  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
[[  F  ]]$( 2 | -5 )$ \

</div>
</section>




<!-- Negative Zahlen 0033 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 33:__ **Gib** die Stelle der angegebenen Punkte **an**.



<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ33.png)

</center>


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"--> 
$A($[[  3  ]]$|$[[  -2 ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
$B($[[  -4 ]]$|$[[  2  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
[[  F  ]]$( -1 | 5 )$ \

</div>
</section>



<!-- Negative Zahlen 0034 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 34:__ **Gib** die Stelle der angegebenen Punkte **an**.




<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ34.png)

</center>


<section class="flex-container">
<div class="flex-child">

<!-- data-solution-button="5"--> 
$A($[[  2  ]]$|$[[ -5  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
$B($[[ -3  ]]$|$[[ -1  ]]$)$ \

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
[[  E  ]]$( -5 | 4 )$ \

</div>
</section>



<!-- Negative Zahlen 0035 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 35:__ **Gib** die Zahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $7$ und $-5 \quad$ \
[[ -1   ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-6$ und $-22 \quad$ \
[[ -13  ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-7$ und $3 \quad$ \
[[ -2   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $11$ und $-7 \quad$ \
[[ 2    ]] 
</div> 
</section>



<!-- Negative Zahlen 0036 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 36:__ **Gib** die Zahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.


<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-8$ und $-24 \quad$ \
[[ -16  ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $9$ und $-1 \quad$ \
[[ 4    ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $5$ und $-13 \quad$ \
[[ -4   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-14$ und $-18 \quad$ \
[[ -16  ]] 
</div> 
</section>



<!-- Negative Zahlen 0037 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 37:__ **Gib** die Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-5,5$ und $-2,1 \quad$ \
[[ -3,8   ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $0,6$ und $-0,04 \quad$ \
[[ 0,28   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-4,2$ und $2,5 \quad$ \
[[ -1,15  ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-1,5$ und $0,25 \quad$ \
[[ -0,625  ]] 
</div> 
</section>










<!-- Negative Zahlen 0038 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 38:__ **Gib** die Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $2$ und $-10,5 \quad$ \
[[ -4,25  ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-0,5$ und $ 0,75 \quad$ \
[[  0,125 ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $0,85$ und $-2,25 \quad$ \
[[ -0,7   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-21,5$ und $-22 \quad$ \
[[ -21,75 ]] 
</div> 
</section>






<!-- Negative Zahlen 0039 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 39:__ **Gib** die Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-5$ und $-1,7 \quad$ \
[[ -3,35  ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $1,3$ und $-2,9 \quad$ \
[[ -0,8   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-6,3$ und $-0,8 \quad$ \
[[ -3,05  ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-7,5$ und $ 10 \quad$ \
[[  2,25  ]] 
</div> 
</section>




<!-- Negative Zahlen 0040 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 40:__ **Gib** die Dezimalzahl **an**, die sich genau in der Mitte zwischen den beiden gegebenen Zahlen befindet.





<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-4,4$ und $7 \quad$ \
[[ 1,3    ]] 
</div>
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$b)\;\;$__ $0,25$ und $-1,25 \quad$ \
[[ -0,5   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$c)\;\;$__ $0,65$ und $-0,85 \quad$ \
[[ -0,1   ]] 
</div> 
<div class="flex-child">
<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-7$ und $-7,75 \quad$ \
[[ -7,375 ]] 
</div> 
</section>






#### Übungsaufgaben zu negativen Zahlen 41 bis 50


<!-- Negative Zahlen 0041 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 41:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ41_1.png)

</center>

<!-- data-solution-button="5"--> 
[[  -4   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ41_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -26  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ41_3.png)

</center>

<!-- data-solution-button="5"--> 
[[   -4  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ41_4.png)

</center>
<!-- data-solution-button="5"--> 
[[  -25  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0042 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 42:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ42_1.png)

</center>

<!-- data-solution-button="5"--> 
[[  -34  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ42_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -18  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ42_3.png)

</center>

<!-- data-solution-button="5"--> 
[[   24  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ42_4.png)

</center>

<!-- data-solution-button="5"--> 
[[  168  ]]

</div> 
</section>






<!-- Negative Zahlen 0043 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 43:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ43_1.png)

</center>

<!-- data-solution-button="5"--> 
[[  -9   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ43_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -17  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ43_3.png)

</center>

<!-- data-solution-button="5"--> 
[[   18  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ43_4.png)

</center>
<!-- data-solution-button="5"--> 
[[  -70  ]]

</div> 
</section>







<!-- Negative Zahlen 0044 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 44:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ44_1.png)

</center>

<!-- data-solution-button="5"--> 
[[  0,375  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ44_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -0,55   ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ44_3.png)

</center>

<!-- data-solution-button="5"--> 
[[  -5,6  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ44_4.png)

</center>

<!-- data-solution-button="5"--> 
[[  -21,8  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0045 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 45:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ45_1.png)

</center>

<!-- data-solution-button="5"--> 
[[  0,8   ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ45_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -1,15  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ45_3.png)

</center>

<!-- data-solution-button="5"--> 
[[  -5,1  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ45_4.png)

</center>

<!-- data-solution-button="5"--> 
[[  -3,75  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0046 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 46:__ **Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ46_1.png)

</center>
<!-- data-solution-button="5"--> 
[[  0,2  ]]

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ46_2.png)

</center>

<!-- data-solution-button="5"--> 
[[  -0,975  ]]

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ46_3.png)

</center>

<!-- data-solution-button="5"--> 
[[  -8,625  ]]

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ46_4.png)

</center>

<!-- data-solution-button="5"--> 
[[   -3   ]]

</div> 
</section>





<!-- Negative Zahlen 0047 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 47:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -16+14=$ [[  -2  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -5+(-11)=$ [[  -16  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 22+(-37) =$ [[  -15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-15+26 =$ [[  11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $41+(-19) =$ [[  22  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $-35+(-26) =$ [[  -61  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0048 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 48:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-27+(-17) =$ [[  -44  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-18+26 =$ [[  8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 36+(-55)=$ [[  -19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 46+(-37)=$ [[  9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $-29+(-43) =$ [[  -72  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $23+(-48) =$ [[  -25  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0049 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 49:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $22+(-43) =$ [[  -21  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-31+(-25) =$ [[  -56  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -44+29=$ [[  -15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-36+58 =$ [[  22  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -62+(-29)=$ [[  -91  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 35+(-57)=$ [[  -22  ]]

</div> 
</section>






<!-- Negative Zahlen 0050 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 50:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 26+(-43)=$ [[  -17  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -25+(72)=$ [[  48  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -31+(-36)=$ [[  -67  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -65+48=$ [[  -17  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 48+(-23)=$ [[  25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 26+(-38)=$ [[  -12  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 





#### Übungsaufgaben zu negativen Zahlen 51 bis 60


<!-- Negative Zahlen 0051 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 51:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 14-(-62)=$ [[  76  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $-21-31 =$ [[  -52  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -29-(-14)=$ [[  -15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -41-(-63)=$ [[  22  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 36-94=$ [[  -58  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -14-54=$ [[  -68  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0052 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 52:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -37-25=$ [[  -62  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -58-(-34)=$ [[  -24  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -17+52=$ [[  35  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 43-(-28) =$ [[  71  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -23-(-18) =$ [[  -5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -37-45 =$ [[  -82  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0053 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 53:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 27-63=$ [[  -36  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -34-17=$ [[  -51  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -28-(-51)=$ [[  23  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -84-(-53)=$ [[  -31  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 35-62=$ [[  -27  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $21-(-45) =$ [[  66  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0054 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 54:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $-17-29 =$ [[  -46  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $23-59 =$ [[  -36  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-81-(-26) =$ [[  -55  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $-24-(-62) =$ [[  38  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 34-(-21)=$ [[  55  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -42-(-14)=$ [[  -28  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 





<!-- Negative Zahlen 0055 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 55:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -4 \cdot (-8) =$ [[  32  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 7 \cdot (-11) =$ [[  -77  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -8 \cdot 9 =$ [[  -72  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -12 \cdot 5 =$ [[  -60  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 15 \cdot (-7) =$ [[ -105  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -8 \cdot (-6) =$ [[  48  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0056 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 56:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -7 \cdot 4=$ [[  -28  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -6 \cdot (-7) =$ [[  42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 9 \cdot (-12) =$ [[  -108 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 11 \cdot (-13) =$ [[ -143  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -8 \cdot 15 =$ [[  -120 ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -9 \cdot (-7) =$ [[  63  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0057 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 57:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -14 \cdot 6 =$ [[  -84  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -13 \cdot (-14) =$ [[  182  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 12 \cdot (-3) =$ [[  -36  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -5 \cdot 18 =$ [[  -90  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 16 \cdot (-4) =$ [[  -64  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -25 \cdot 6 =$ [[  -150  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0058 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 58:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -8 \cdot 12 =$ [[  -96  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -7 \cdot (-20) =$ [[  140  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 5 \cdot (-45) =$ [[  -225  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -16 \cdot (-12) =$ [[  192  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 11 \cdot (-31) =$ [[  -341  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -14 \cdot 6 =$ [[  -84  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0059 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 59:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -99:9 =$ [[  -11  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -75:(-15) =$ [[  5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 144:(-12) =$ [[  -12  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -96:16 =$ [[  -6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 72:(-3) =$ [[  -24  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -48:(-8) =$ [[  6  ]]

</div> 
</section>






<!-- Negative Zahlen 0060 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 60:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -135:45 =$ [[  -3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 85:(-5) =$ [[  -17  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -76:(-4) =$ [[  19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -64:8 =$ [[  -8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -128:(-16) =$ [[  8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 125:(-5) =$ [[  -25  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 




#### Übungsaufgaben zu negativen Zahlen 61 bis 70



<!-- Negative Zahlen 0061 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 61:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -65:(-13) =$ [[  5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $96 :(-24) =$ [[  -4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $-115 :5 =$ [[  -23  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 77:(-11) =$ [[  -7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -56:(-4) =$ [[  14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -93:3 =$ [[  -31  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0062 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 62:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -35:7 =$ [[  -5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 72:(-8) =$ [[  -9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -95:(-5) =$ [[  19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -42:7 =$ [[  -6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 72:(-18) =$ [[  -4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -186:(-6) =$ [[  31  ]]

</div> 
</section>






<!-- Negative Zahlen 0063 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 63:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \left| -4 \right| \cdot (-35) =$ [[  -140  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ \left| -45 - (-12) \right| =$ [[  33  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 15-\left| -37 \right| =$ [[  -22  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ \left| -18 \right|+(-47) =$ [[  -29  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ \left| 14 - \left| -52 \right| \right| =$ [[  38  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ \left| -96 \right| : (-8) =$ [[  -12  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0064 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 64:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \left| -37 \right| - \left| -65 \right| =$ [[  -28  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -13 \cdot \left| -9 \right| =$ [[  -117  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ \left|-625:\left| -25 \right|\right| =$ [[  25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ \left| -17 \right| - 85 =$ [[  -68  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ \left| -26 - (84) \right| =$ [[  58  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ \left| -29 \right| + (-45) =$ [[  -16  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0065 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 65:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \left| -126 \right|:9 =$ [[  14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -13 + \left| -29 \right| =$ [[  16  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ \left| -76 \right| + (-98) =$ [[  -22  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ \left| 42 + (-67) \right| =$ [[  25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -8 \cdot \left| -9 \right| =$ [[  -72  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ \left| -225 \right|:\left| -15 \right| =$ [[  15  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 






<!-- Negative Zahlen 0066 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 66:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 144:\left| -12 \right| =$ [[  12  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ \left| -54-(-37) \right| =$ [[  14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ \left| -36 \right| \cdot (-5) =$ [[  -180  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ \left| 48+(-69) \right| =$ [[  21  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -11 \cdot \left| -13 \right| =$ [[  -143  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -56 + \left| -74 \right| =$ [[  18  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0067 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 67:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \text{sgn}\left(-94 \right) \cdot 92 =$ [[  -92  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -74:\text{sgn}\left( 74\right) =$ [[  -74  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -14-\text{sgn}\left( -58\right) =$ [[  -15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 19:\text{sgn}\left( -65 \right) =$ [[  -19  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0068 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 68:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \text{sgn}\left( -81\right) + (-8) =$ [[  -9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ \text{sgn}\left( -21 \right) - (-17)=$ [[  -16  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ \text{sgn}\left( -63 \right) \cdot (-83) =$ [[  83  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 81:\text{sgn}\left( 45 \right) =$ [[  81  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0069 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 69:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -31 - \text{sgn}\left( -74\right) =$ [[  -30  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -25 \cdot \text{sgn}\left( 61\right) =$ [[  -25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -14 : \text{sgn}\left( -7 \right) =$ [[  14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -74 + \text{sgn}\left( -1 \right) =$ [[  -75  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0070 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 70:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ \text{sgn}\left( -9\right) \cdot 53 =$ [[ -53   ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 99 - \text{sgn}\left( -25\right) =$ [[  100  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ \text{sgn}\left( 23 \right) + (-56) =$ [[  -55  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ \text{sgn}\left( -1 \right):(-1) =$ [[  1  ]]

</div> 
</section>




#### Übungsaufgaben zu negativen Zahlen 71 bis 80


<!-- Negative Zahlen 0071 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 71:__ **Gib** den Wert des Terms **an**.
 

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -(-(-(4))) \cdot (-(-(-(-5)))) =$ [[  -20  ]]
 

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -72:(-(-(-(-(-4))))) =$ [[  18  ]]
 

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -(-(-(-(-6)))) \cdot (-(-(-(-8)))) =$ [[  -48  ]]
 

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -(-(-3)) \cdot (-(-(-(-(-2))))) \cdot (-(-(-(-5))))  =$ [[  16  ]]
 




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0072 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 72:__ 
**Gib** den Wert des Terms **an**.
 

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -(-(-(-9))) \cdot (-(-(-(-3)))) =$ [[  27  ]]
 

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -(-(-(-(-54)))) : (-(-(-(-6)))) =$ [[  -9  ]]
 

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -48 \cdot (-(-(-(-(-(-(-(-5))))))))  =$ [[  -240  ]]
 

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -(-(-(-(-(-(-(-8))))))) \cdot (-(-3)) : (-4)  =$ [[  -6  ]]
 




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0073 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 73:__ **Gib** den Wert des Terms **an**.
 

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -(-96) : (-(-(-12))) =$ [[  -8  ]]
 

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -5 \cdot (-(-(-(-(-(-(-9))))))) =$ [[  45  ]]
 

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -(-7) \cdot (-(-(-(-(-(-(-9))))))) =$ [[  -63  ]]
 

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -(-(-(36))) : (-(-(-(-2))) \cdot (-(-(-(-2)))))  =$ [[  -8  ]]
 




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0074 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 74:__ **Gib** den Wert des Terms **an**.
 

__$a)\;\;$__ $ -(-(-(-7))) \cdot (-(-(-(-8)))) =$ [[  56  ]]
 

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -18 \cdot (-(-(-(-(-6))))) =$ [[  108  ]]
 

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -(-(-(-(-64)))) : (-(-8)) =$ [[  -8  ]]
 

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ (-(-(-(72))) : (-(-2))) : (-(-(-(-18))))  =$ [[  -2  ]]
 



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0075 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 75:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<!-- data-solution-button="5"--> 
<div class="flex-child">

__$a)\;\;$__ $ -4 \cdot (-5) - (-6) =$ [[  26  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 63 : (-7) + (-11) =$ [[  -20  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -2 \cdot (-6) - (-7) \cdot (-5) =$ [[  -23  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -61 + (-56) : 8 =$ [[  -68  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0076 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 76:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -65 + (-6) \cdot (-8) =$ [[  -17  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 23 - (-99) : (-3) =$ [[  -10  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -(-5) \cdot (-2) - 9 =$ [[  -19  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 7 \cdot (-8) + (-15) =$ [[  -71  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0077 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 77:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -91 : (-7) + (-45) =$ [[  -32  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $  -56 - 6 \cdot (-4) =$ [[  -32  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ - 6 \cdot 3 - 4 \cdot (-8) =$ [[  14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -(-24)-(-8) \cdot (-5) =$ [[  -16  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0078 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 78:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -7 \cdot 8 + (-18) =$ [[  -60  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -49:(-7)+(-14) =$ [[  -7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -5 - (-6) \cdot 4 =$ [[  -29  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 12 + 7 \cdot (-9) =$ [[  -51  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0079 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 79:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -4 \cdot (-3) - (-5) \cdot (-7) =$ [[  -23  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 44 : (-11) - (-34) =$ [[  30  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ (-11) \cdot (-8) + (-53) =$ [[  35  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 65:(-13) + 6 \cdot (-7) =$ [[  -47  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0080 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 80:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -8 + 5 \cdot (-11) =$ [[  -63  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -92:4 - (-8) =$ [[  15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -43:8-21:8 =$ [[  -8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -4 \cdot (-5) \cdot (-9) =$ [[  -180  ]]

</div> 
</section>





#### Übungsaufgaben zu negativen Zahlen 81 bis 90


<!-- Negative Zahlen 0081 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 81:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ 8+8 =$ [[  16  ]] \
$ 8+4 =$ [[  12  ]] \
$ 8+0 =$ [[  8  ]] \
$ 8+(-4) =$ [[  4  ]] \
$ 8+(-8) =$ [[  0  ]] \
$ 8+(-12) =$ [[  -4  ]] \
$ 8+(-16) =$ [[  -8  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ 10+5 =$ [[  15  ]] \
$ 10+0 =$ [[  10  ]] \
$ 10+(-5) =$ [[  5  ]] \
$ 10+(-10) =$ [[  0  ]] \
$ 10+(-15) =$ [[  -5  ]] \
$ 10+(-20) =$ [[  -10  ]] \
$ 10+(-25) =$ [[  -15  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ 6+9 =$ [[  15  ]] \
$ 6+0 =$ [[  6  ]] \
$ 6+(-9) =$ [[  -3  ]] \
$ 6+(-18) =$ [[  -12  ]] \
$ 6+(-27) =$ [[  -21  ]] \
$ 6+(-36) =$ [[  -30  ]] \
$ 6+(-45) =$ [[  -39  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ 7+12 =$ [[  19  ]] \
$ 7+6 =$ [[  13  ]] \
$ 7+0 =$ [[  7  ]] \
$ 7+(-6) =$ [[  1  ]] \
$ 7+(-12) =$ [[  -5  ]] \
$ 7+(-18) =$ [[  -11  ]] \
$ 7+(-24) =$ [[  -17  ]]  

</div>
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0082 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 82:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ 2+14 =$ [[  16  ]] \
$ 2+7 =$ [[  9  ]] \
$ 2+0 =$ [[  2  ]] \
$ 2+(-7) =$ [[  -5  ]] \
$ 2+(-14) =$ [[  -12  ]] \
$ 2+(-21) =$ [[  -19  ]] \
$ 2+(-28) =$ [[  -26  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ 5+12 =$ [[  17  ]] \
$ 5+6 =$ [[  11  ]] \
$ 5+0 =$ [[  5  ]] \
$ 5+(-6) =$ [[  -1  ]] \
$ 5+(-12) =$ [[  -7  ]] \
$ 5+(-18) =$ [[  -13  ]] \
$ 5+(-24) =$ [[  -19  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ 54+9 =$ [[  63  ]] \
$ 54+0 =$ [[  54  ]] \
$ 54+(-9) =$ [[  45  ]] \
$ 54+(-18) =$ [[  36  ]] \
$ 54+(-27) =$ [[  27  ]] \
$ 54+(-36) =$ [[  18  ]] \
$ 54+(-45) =$ [[  9  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ -7+16 =$ [[  9  ]] \
$ -7+8 =$ [[  1  ]] \
$ -7+0 =$ [[  -7  ]] \
$ -7+(-8) =$ [[  -15  ]] \
$ -7+(-16) =$ [[  -23  ]] \
$ -7+(-24) =$ [[  -31  ]] \
$ -7+(-32) =$ [[  -39  ]]  

</div>
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0083 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 83:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ 23-32 =$ [[  -9  ]] \
$ 23-24 =$ [[  -1  ]] \
$ 23-16 =$ [[  7  ]] \
$ 23-8 =$ [[  15  ]] \
$ 23-0 =$ [[  23  ]] \
$ 23-(-8) =$ [[  31  ]] \
$ 23-(-16) =$ [[  39  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ -12-20 =$ [[  -32  ]] \
$ -12-15 =$ [[  -27  ]] \
$ -12-10 =$ [[  -22  ]] \
$ -12-5 =$ [[ -17   ]] \
$ -12-0 =$ [[  -12  ]] \
$ -12-(-5) =$ [[  -7  ]] \
$ -12-(-10) =$ [[  -2  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ 13-30 =$ [[  -17  ]] \
$ 13-15 =$ [[ -2   ]] \
$ 13-0 =$ [[  13  ]] \
$ 13-(-15) =$ [[  28  ]] \
$ 13-(-30) =$ [[  43  ]] \
$ 13-(-45) =$ [[  58  ]] \
$ 13-(-60) =$ [[  73  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ -54-7 =$ [[  -61  ]] \
$ -54-0 =$ [[  -54  ]] \
$ -54-(-7) =$ [[  -47  ]] \
$ -54-(-14) =$ [[  -40  ]] \
$ -54-(-21) =$ [[  -33  ]] \
$ -54-(-28) =$ [[  -26  ]] \
$ -54-(-35) =$ [[  -19  ]]  

</div>
</section>






<!-- Negative Zahlen 0084 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 84:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ -17-18 =$ [[  -35  ]] \
$ -17-9 =$ [[  -26  ]] \
$ -17-0 =$ [[  -17  ]] \
$ -17-(-9) =$ [[  -8  ]] \
$ -17-(-18) =$ [[  1  ]] \
$ -17-(-27) =$ [[  10  ]] \
$ -17-(-36) =$ [[ 19   ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ 22-36 =$ [[  -14  ]] \
$ 22-24 =$ [[ -2   ]] \
$ 22-12 =$ [[ 10   ]] \
$ 22-0 =$ [[  22  ]] \
$ 22-(-12) =$ [[  34  ]] \
$ 22-(-24) =$ [[  46  ]] \
$ 22-(-36) =$ [[  58  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ -1-15=$ [[ -16   ]] \
$ -1-10 =$ [[ -11   ]] \
$ -1-5 =$ [[  -6  ]] \
$ -1-0 =$ [[  -1  ]] \
$ -1-(-5) =$ [[  4  ]] \
$ -1-(-10) =$ [[  9  ]] \
$ -1-(-15) =$ [[  14  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ 17-24 =$ [[  -7  ]] \
$ 17-16 =$ [[  1  ]] \
$ 17-8 =$ [[  9  ]] \
$ 17-0 =$ [[ 17   ]] \
$ 17-(-8) =$ [[  25  ]] \
$ 17-(-16) =$ [[ 33   ]] \
$ 17-(-24) =$ [[  41  ]]  

</div>
</section>






<!-- Negative Zahlen 0085 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 85:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ 2 \cdot (-3)  =$ [[  -6  ]] \
$ 2 \cdot (-(-3)) =$ [[  6  ]] \
$ 2 \cdot (-(-(-3))) =$ [[  -6  ]] \
$ 2 \cdot (-(-(-(-3)))) =$ [[  6  ]] \
$ 2 \cdot (-(-(-(-(-3))))) =$ [[  -6  ]] \
$ 2 \cdot (-(-(-(-(-(-3)))))) =$ [[  6  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ -4 \cdot 8 =$ [[  -32  ]] \
$ -4 \cdot (-8) =$ [[  32  ]] \
$ -(-4) \cdot (-8) =$ [[  -32  ]] \
$ -(-4) \cdot (-(-8)) =$ [[  32  ]] \
$ -(-(-4)) \cdot (-(-8)) =$ [[  -32  ]] \
$ -(-(-4)) \cdot (-(-(-8)))  =$ [[  32  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$  -9 \cdot 5 =$ [[  -45  ]] \
$  -(-9) \cdot 5 =$ [[  45  ]] \
$  -(-(-9)) \cdot 5 =$ [[  -45  ]] \
$  -(-(-(-9))) \cdot 5 =$ [[  45  ]] \
$  -(-(-(-(-9)))) \cdot 5 =$ [[  -45  ]] \
$  -(-(-(-(-(-9))))) \cdot 5 =$ [[  45  ]] 

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ -8 \cdot (-7)  =$ [[  56  ]] \
$ -(-8) \cdot (-(-7)) =$ [[  56  ]] \
$ -(-(-8)) \cdot (-(-(-7))) =$ [[  56  ]] \
$ -(-(-(-8))) \cdot (-(-(-(-7)))) =$ [[  56  ]] \
$ -(-(-(-(-8)))) \cdot (-(-(-(-(-7))))) =$ [[  56  ]] \
$ -(-(-(-(-(-8))))) \cdot (-(-(-(-(-(-7)))))) =$ [[  56  ]]  

</div>
</section>






<!-- Negative Zahlen 0086 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 86:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ -4 \cdot 3 =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) =$ [[  12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  =$ [[  12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  -12  ]] \
$ -4 \cdot 3 \cdot (-1) \cdot (-1)  \cdot (-1)  \cdot (-1)  \cdot (-1)  =$ [[  12  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ -5 \cdot (-12)  =$ [[  60  ]] \
$ -(-5) \cdot (-(-12)) =$ [[  60  ]] \
$ -(-(-5)) \cdot (-(-(-12))) =$ [[  60  ]] \
$ -(-(-(-5))) \cdot (-(-(-(-12)))) =$ [[  60  ]] \
$ -(-(-(-(-5)))) \cdot (-(-(-(-(-12))))) =$ [[  60  ]] \
$ -(-(-(-(-(-5))))) \cdot (-(-(-(-(-(-12)))))) =$ [[  60  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ -6 \cdot (-7)  =$ [[  42  ]] \
$ -6 \cdot (-(-7)) =$ [[  -42  ]] \
$ -6 \cdot (-(-(-7))) =$ [[  42  ]] \
$ -6 \cdot (-(-(-(-7)))) =$ [[  -42  ]] \
$ -6 \cdot (-(-(-(-(-7))))) =$ [[  42  ]] \
$ -6 \cdot (-(-(-(-(-(-7)))))) =$ [[  -42  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$  -4 \cdot (-7) =$ [[  28  ]] \
$  -(-4) \cdot (-7) =$ [[  -28  ]] \
$  -(-(-4)) \cdot (-7) =$ [[  28  ]] \
$  -(-(-(-4))) \cdot (-7) =$ [[  -28  ]] \
$  -(-(-(-(-4)))) \cdot (-7) =$ [[  28  ]] \
$  -(-(-(-(-(-4))))) \cdot (-7) =$ [[  -28  ]] 

</div>
</section>






<!-- Negative Zahlen 0087 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 87:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ -144 : (-36) =$ [[  4  ]] \
$ -(-144) : (-36) =$ [[  -4  ]] \
$ -(-144) : (-(-36)) =$ [[  4  ]] \
$ -(-(-144)) : (-(-36)) =$ [[  -4  ]] \
$ -(-(-144)) : (-(-(-36))) =$ [[  4  ]] \
$ -(-(-(-144))) : (-(-(-36))) =$ [[  -4  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ 63 : (-7) =$ [[  -9  ]] \
$ -63 : (-7) =$ [[  9  ]] \
$ -(-63) : (-7) =$ [[ -9   ]] \
$ -(-(-63)) : (-7) =$ [[  9  ]] \
$ -(-(-(-63))) : (-7) =$ [[  -9  ]] \
$ -(-(-(-(-63)))) : (-7) =$ [[  9  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ 35:(-7) =$ [[  -5  ]] \
$ 35:(-(-7)) =$ [[  5  ]] \
$ 35:(-(-(-7))) =$ [[  -5  ]] \
$ 35:(-(-(-(-7)))) =$ [[  5  ]] \
$ 35:(-(-(-(-(-7))))) =$ [[  -5  ]] \
$ 35:(-(-(-(-(-(-7)))))) =$ [[  5  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ -84 : 7 =$ [[  -12  ]] \
$ -(-84) : (-7) =$ [[  -12  ]] \
$ -(-(-84)) : (-(-7)) =$ [[  -12  ]] \
$ -(-(-(-84))) : (-(-(-7))) =$ [[  -12  ]] \
$ -(-(-(-(-84)))) : (-(-(-(-7)))) =$ [[  -12  ]] \
$ -(-(-(-(-(-84))))) : (-(-(-(-(-7))))) =$ [[  -12  ]]  

</div>
</section>






<!-- Negative Zahlen 0088 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 88:__ **Gib** den Wert des Terms **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ \
$ 18:(-2) =$ [[  -9  ]] \
$ 18:(-(-2)) =$ [[  9  ]] \
$ 18:(-(-(-2))) =$ [[  -9  ]] \
$ 18:(-(-(-(-2)))) =$ [[  9  ]] \
$ 18:(-(-(-(-(-2))))) =$ [[  -9  ]] \
$ 18:(-(-(-(-(-(-2)))))) =$ [[  9  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ \
$ -33 : 3 =$ [[  -11  ]] \
$ -(-33) : (-3) =$ [[  -11  ]] \
$ -(-(-33)) : (-(-3)) =$ [[  -11  ]] \
$ -(-(-(-33))) : (-(-(-3))) =$ [[  -11  ]] \
$ -(-(-(-(-33)))) : (-(-(-(-3)))) =$ [[  -11  ]] \
$ -(-(-(-(-(-33))))) : (-(-(-(-(-3))))) =$ [[  -11  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ \
$ 24 : (-8) =$ [[  -3  ]] \
$ -24 : (-8) =$ [[  3  ]] \
$ -(-24) : (-8) =$ [[ -3   ]] \
$ -(-(-24)) : (-8) =$ [[  3  ]] \
$ -(-(-(-24))) : (-8) =$ [[  -3  ]] \
$ -(-(-(-(-24)))) : (-8) =$ [[  3  ]]  

</div>
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ \
$ -48 : (-8) =$ [[  6  ]] \
$ -(-48) : (-8) =$ [[  -6  ]] \
$ -(-48) : (-(-8)) =$ [[  6  ]] \
$ -(-(-48)) : (-(-8)) =$ [[  -6  ]] \
$ -(-(-48)) : (-(-(-8))) =$ [[  6  ]] \
$ -(-(-(-48))) : (-(-(-8))) =$ [[  -6  ]]  

</div>
</section>



<!-- Negative Zahlen 0089 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 89:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 2,3+(-9,4) =$ [[  -6,9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -1,9+(-3,5) =$ [[  -5,4  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 2,7+(-6,2) =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -0,25+(-3,68) =$ [[  -3,93  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -0,09+(-2,18) =$ [[  -2,27  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 0,19+(-2,75) =$ [[  -2,56  ]]

</div> 
</section>






<!-- Negative Zahlen 0090 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 90:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 7,7 +(0,29) =$ [[  7,41  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -5,3+(-3,8) =$ [[  -9,1  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 4,26+(-6,84) =$ [[  -2,58  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -2,3+(-5,17) =$ [[  -7,47  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 1,9+(-6,4) =$ [[  -4,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 6,4+(2,55) =$ [[  3,85  ]]

</div> 
</section>




#### Übungsaufgaben zu negativen Zahlen 91 bis 100


<!-- Negative Zahlen 0091 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 91:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -9,2+(-4,1) =$ [[  -13,3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 2,15+(-3,6) =$ [[  -1,45  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -0,9+(-4,7) =$ [[  -5,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 3,1+(-4,44) =$ [[  -1,34  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -2,74+(-1,67) =$ [[  -4,41  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 0,85+(-6,14) =$ [[  -5,29  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0092 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 92:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 2,4+(-5,7) =$ [[  -3,3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -1,8+(-3,48) =$ [[  -5,28  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -2,8+(-0,084) =$ [[  -2,884  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 2,18+(-3,54) =$ [[  -1,36  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -0,85+(-1,68) =$ [[  -2,53  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 1,17+(-2,8) =$ [[  -1,63  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0093 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 93:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 1,4-(-2,8) =$ [[  4,2  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -2,05-(-1,1) =$ [[  -0,95  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -1,9-(-1,48) =$ [[  -0,42  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -1,3-(-3,75) =$ [[  2,45  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -4,61-(-2,48) =$ [[  -7,09  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 2,44-(-3,12) =$ [[  5,56  ]]

</div> 
</section>




<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0094 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 94:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -0,52-(-1,78) =$ [[  1,26  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 2,14-(-4,8) =$ [[  6,94  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -8,46-(-3,9) =$ [[  -4,56  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -2,5-(-0,25) =$ [[  -2,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 0,62-(-6,14) =$ [[  6,76  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -1,23-(-2,46) =$ [[  1,23  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0095 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 95:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -2,14-(-3,2) =$ [[  1,06  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 1,4-(-0,39) =$ [[  1,79  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -2,7-(1,55) =$ [[  -1,15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -6,2-(-9,75) =$ [[  3,55  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 0,65-(-3,4) =$ [[  4,05  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -0,84-(2,52) =$ [[  1,68  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0096 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 96:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -8,5-(-6,25) =$ [[  -2,25  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 3,6-(-1,1) =$ [[  4,7  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 1,25-(-3,67) =$ [[  4,92  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -6,4-(-0,25) =$ [[  -6,15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -2,3-(-5,4) =$ [[  3,1  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -4,75-(-2,17) =$ [[  -2,58  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0097 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 97:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -1,25 \cdot 2,8 =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 0,25 \cdot (-3,1) =$ [[  -1,65  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ - 1,2 \cdot (-0,9) =$ [[  1,08  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 0,7 \cdot (-0,2) =$ [[  -0,14  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -0,125 \cdot (-4,8) =$ [[  0,6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 0,75 \cdot (-4,2) =$ [[  -1,05  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0098 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 98:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -2,2 \cdot (-0,6) =$ [[  -1,32  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -0,4 \cdot (-0,375) =$ [[  0,15  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 2,5 \cdot (-4,3) =$ [[  -10,75  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -1,6 \cdot 0,9 =$ [[  -1,44  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -0,75 \cdot 0,06 =$ [[  -0,045  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -1,5 \cdot 9,5 =$ [[  -14,25  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0099 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 99:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -1,5 \cdot (-0,25) =$ [[  0,375  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 7,5 \cdot (-0,2) =$ [[  -1,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -0,03 \cdot 0,8 =$ [[  -0,24  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 1,7 \cdot (-0,4) =$ [[  -0,68  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -4,4 \cdot (-0,2) =$ [[  0,88  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -0,8 \cdot (-0,09) =$ [[  0,072  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 





#### Übungsaufgaben zu negativen Zahlen 101 bis 110



<!-- Negative Zahlen 0100 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 100:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 1,2 \cdot (-1,3) =$ [[  -1,56  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -0,9 \cdot (-1,2) =$ [[  1,08  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -0,875 \cdot 4 =$ [[  -3,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 0,4 \cdot (-0,6) =$ [[  -0,24  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -1,2 \cdot (-0,325) =$ [[  0,45  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 3,2 \cdot 0,875 =$ [[  2,8  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0101 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 101:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ 0,25 : (-0,05) =$ [[  -5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -8,1 : (-9) =$ [[  0,9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -0,4:0,025 =$ [[  -16  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -9,6 : (-120) =$ [[  0,08  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 5,5 : (-2,5) =$ [[  -2,2  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -3,5:0,07 =$ [[  -50  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0102 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 102:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -0,54:(-0,6) =$ [[  0,9  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -3 : (-8) =$ [[  0,375  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ 1,5 : (-2,5) =$ [[  -0,6  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 0,072 : (-0,8) =$ [[  -0,09  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -0,144 : (-1,2) =$ [[  0,12  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 0,49 : (-7) =$ [[  -0,07  ]]

</div> 
</section>


<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 0103 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 103:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -0,008 : (-0,2) =$ [[  0,04  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ -0,55: 1,1 =$ [[  -0,5  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -4,8:(-0,06)=$ [[  8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ -3,6:90 =$ [[  -0,04  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ 0,009:(-0,3) =$ [[  -0,03  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ 0,96:0,8 =$ [[  1,2  ]]

</div> 
</section>



<!-- data-solution-button="5"--> 



<!-- Negative Zahlen 00104 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 104:__ **Gib** den Wert des Terms in Dezimalzahlen **an**.

<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"--> 
__$a)\;\;$__ $ -0,63 : 7 =$ [[  -0,09  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$b)\;\;$__ $ 0,81:(-2,7) =$ [[  -0,3  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$c)\;\;$__ $ -48:0,25 =$ [[  -192  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$d)\;\;$__ $ 0,016:(-0,02) =$ [[  -0,8  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$e)\;\;$__ $ -7,2:0,36 =$ [[  -20  ]]

</div> 
<div class="flex-child">

<!-- data-solution-button="5"--> 
__$f)\;\;$__ $ -0,56:(-0,7) =$ [[  0,8  ]]

</div> 
</section>

