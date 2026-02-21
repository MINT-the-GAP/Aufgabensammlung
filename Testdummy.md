<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md














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




-->



# Tests




































# Zahlenstrahl



2/8

@circleQuiz(2/8)


2/8

@rectQuiz(2/8)










# Vernetzte Lücken





Entweder [[  positiv  ]] oder [[  negativ  ]] oder [[  magnetisch  ]]?
<script>
@input.map(s => s.toLowerCase()).sort().join() === "magnetisch,negativ,positiv"
</script>









Vorher Text [[ Kohlendioxid ]] Nachher Text
<script>
  const raw = (`@input`).trim(); 
  let s = raw;

  try {
    const v = JSON.parse(raw);
    if (Array.isArray(v)) s = String(v[0] ?? "");
  } catch (e) {}

  s = s.trim(); 

  s === "Kohlendioxid" ||
  s === "Kohlenstoffdioxid" ||
  s === "CO2" ||
  s === "CO₂";
</script>




# Algebrite


6 + 6

[[12]]
@Algebrite.check(12)

---

0.4?

[[0,4]]
@Algebrite.check(0.4)

---

try different expressions of `x ^ 2 - 1`

[[x ^ 2 - 1]]
@Algebrite.check(x^2-1)

---

x=[[ 1/3 ]] m
@Algebrite.check2(1/3,0.001)

---

44,444

x=[[ 44,444 ]] m
@Algebrite.check2(44.44,0.1)

---

Inline 3/4 und 2/5

P( [[ 3/4 ]] | [[ 2/5 ]] )
@Algebrite.check([ 3/4 ; 2/5 ])

P( [[ 3/4 ]] | [[ 2/5 ]] )
@Algebrite.check2([ 3/4 ; 2/5 ] , [ 0.01 ; 0.1 ])

---

[[ 5,5 ]] m
@Algebrite.check_margin(5.1,6.1)



---

$P(t) =$ [[ - (K / 2) * t^(-3/2) ]]
@Algebrite.check(`- (K/2) * t^(-3/2)`)
*************

Die richtige Lösung ist:

$- (K / 2) * t^(-3/2)$

*************

---


[[x ^ 2 - 1 = 2x]]
@Algebrite.check_expression(x^2-1-2x=0)

# Lösungen
 
You have only two trials, without a solution button ;-)

<!--
  data-max-trials="2"
  data-solution-button="off"
  data-randomize
-->
[( )] Wrong
[(X)] Right


<!--
  data-max-trials="4"
  data-solution-button="2"
  data-randomize
-->
[( )] Wrong
[(X)] Right

# circuitikz
 


<center>

```latex  @tikz

\begin{tikzpicture} [scale=2, >=latex]

    \draw[thick] (0,0) to [R] (2,0) ; 

\end{tikzpicture}

```
</center>

# Math

A = (<script input="range" min="0" max="100" value="50" step="1" default="50" output="A0">
@input
</script>,
<script input="range" min="-100" max="100" value="50" step="1" default="50" output="A1">
@input
</script>
)

B = (<script input="range" min="0" max="100" value="96" step="1" default="96" output="B0">
@input
</script>,
<script input="range" min="-100" max="100" value="27" step="1" default="27" output="B1">
@input
</script>
)


C = (<script input="range" min="0" max="100" value="20" step="1" default="20" output="C0">
@input
</script>,
<script input="range" min="-100" max="100" value="20" step="1" default="20" output="C1">
@input
</script>
)

Rotation: 
<script input="range" min="0" max="360" value="0" step="1" default="0" output="rotation">
@input
</script>°


``` js @GGBScript
UserAxisLimits(0,150,0,60);

const A = Punkt(@input(`A0`), @input(`A1`), "A");
const B = Punkt(@input(`B0`), @input(`B1`), "B");
const C = Punkt(@input(`C0`), @input(`C1`), "C");

const P = Polygon("A", "B", "C");

Farbe(P, "red");

const M = Mittelpunkt(P);

const P2 = Rotation(P, M, @input(`rotation`), "P2");

Farbe("P2", "green");

Kreis(M, 16, "Kreis");
```




<!-- data-type="none"
data-sortable="false" 
data-orientation="vertical|horizontal"-->




### Energieabrechnung im Makerspace

Das Jugendzentrum „FutureLab“ betreibt einen Makerspace, in dem Besucherinnen und Besucher Maschinen wie 3D-Drucker, Lasercutter und CNC-Fräsen nutzen können, um eigene Projekte zu verwirklichen. Da diese Geräte teilweise über längere Zeit laufen und einen hohen Stromverbrauch haben, muss das FutureLab eine faire und transparente Abrechnung sicherstellen. Um den Energieverbrauch einfach kalkulieren zu können, hat das Jugendzentrum einen speziellen Stromtarif mit dem Namen „Standard“ eingeführt:

- Grundgebühr: **48,00 € pro Monat**
- Strompreis: **1,30 € pro kWh**


---

__$a)\;\;$__   
Bestimme den Ordinatenabschnitt und die Steigung der linearen Funktion $K(x)$,
die den Standardtarif beschreibt.
Gib den Funktionsterm $K(x)$ an.

---

__$b)\;\;$__  
Trage den Punkt für $x=0$ und $x=20$ in ein Koordinatensystem ein und zeichne die Gerade $K(x)$ für den Bereich $0 \leq x \leq 50$.

---

__$c)\;\;$__  
Das „EcoLab“ im gleichen Gebäude hat den Tarif
$$
K_{\text{Eco}}(x) = 40 + 2,20\,x
$$
Berechne den Schnittpunkt der beiden Tarife rechnerisch.

---

__$d)\;\;$__ 
Stelle die Differenzfunktion $D(x) = K(x) - K_{\text{Eco}}(x)$ auf und
bestimme den Verbrauchsbereich, in dem der Standardtarif günstiger ist.

---

__$e)\;\;$__  
Bestimme den Funktionsterm einer Geraden, die genau durch die beiden Punkte
$P(15 \ \text{kWh}, \ 71,50 \ \text{€})$ und
$Q(35 \ \text{kWh}, \ 113,50 \ \text{€})$ verläuft.

---

__$f)\;\;$__   
Drei Teams (A, B, C) nutzen den Makerspace im Mai:

- Team A: $18$ kWh
- Team B: $26$ kWh
- Team C: $21$ kWh

Die Gesamtkosten werden nach dem Standardtarif berechnet und proportional zum Verbrauch aufgeteilt.
Berechne die Kostenanteile jedes Teams auf zwei Nachkommastellen genau.

---

__$g)\;\;$__  
Ein neuer Anbieter berechnet
$$
K_{\text{Neu}}(x) = \frac{9}{4}x + 35
$$

I. Vergleiche die Steigung mit der von $K(x)$.  

II. Bestimme den Schnittpunkt von $K_{\text{Neu}}$ und $K(x)$ rechnerisch.  

III. Bestimme den Verbrauchsbereich, in dem $K_{\text{Neu}}$ günstiger ist.

---

__$h)\;\;$__  
Der Makerspace testet einen stückweise definierten Tarif:

- bis einschließlich $25$ kWh: $1,80$ €/kWh $+\,45,00$ € Grundgebühr
- ab $26$ kWh: $1,50$ €/kWh $+\,45,00$ € Grundgebühr

I. Stelle die Funktionsgleichungen beider Abschnitte auf.  

II. Zeichne den Graphen für $0 \le x \le 50$.  

III. Bestimme, ab welchem Verbrauch dieser Tarif günstiger ist als der Standardtarif.

---

__$i)\;\;$__  
Ein Förderprogramm übernimmt alle Kosten oberhalb eines Verbrauchs von $30$ kWh.
Formuliere den effektiven Tarif $K_{\text{Förder}}(x)$ als Funktion mit $\min$-Operator:
$$
K_{\text{Förder}}(x) = K(\min(x,30))
$$
Vergleiche grafisch mit $K(x)$ und interpretiere den Unterschied.








































































































In der Schulküche werden Soßen in Batches angesetzt.  
Pro Batch werden $\dfrac{3}{7}\,\text{l}$ Tomatenbasis und $\dfrac{5}{12}\,\text{l}$ Gemüsefond gemischt.  
Beim Köcheln verdampft je Batch $\dfrac{1}{9}$ der Batch-Summe (also von Tomatenbasis plus Fond).  
Es werden insgesamt zehn Batches zubereitet. Anschließend verwirft die Qualitätskontrolle $\dfrac{1}{8}$ der bis dahin vorhandenen Gesamtmenge.  
Zum Schluss wird das Ergebnis noch mit Wasser verdünnt, und zwar um $\dfrac{1}{15}$ des ursprünglich geplanten Gesamtvolumens (ohne Verluste), also von zehn Batch-Summen.  
**Berechne** das schließlich vorhandene Soßenvolumen.  


<!-- data-solution-button="5"-->
[[  1349/189  ]] l
@Algebrite.check(1349/189)
************
$$
\begin{align*}
\text{Batch-Summe:}\quad
& \dfrac{3}{7}\,\text{l} + \dfrac{5}{12}\,\text{l}
= \left(\dfrac{36}{84} + \dfrac{35}{84}\right)\text{l}
= \dfrac{71}{84}\,\text{l} \\[6pt]
\text{Nach Verdampfen je Batch:}\quad
& \left(1-\dfrac{1}{9}\right)\cdot \dfrac{71}{84}\,\text{l}
= \dfrac{8}{9}\cdot \dfrac{71}{84}\,\text{l}
= \dfrac{142}{189}\,\text{l} \\[6pt]
\text{Nach 10 Batches:}\quad
& 10\cdot \dfrac{142}{189}\,\text{l}
= \dfrac{1420}{189}\,\text{l} \\[6pt]
\text{QC verwirft } \dfrac{1}{8}:\quad
& \left(1-\dfrac{1}{8}\right)\cdot \dfrac{1420}{189}\,\text{l}
= \dfrac{7}{8}\cdot \dfrac{1420}{189}\,\text{l}
= \dfrac{355}{54}\,\text{l} \\[6pt]
\text{Verdünnung (vom Plan-Volumen):}\quad
& \dfrac{1}{15}\cdot \left(10\cdot \dfrac{71}{84}\right)\text{l}
= \dfrac{1}{15}\cdot \dfrac{710}{84}\,\text{l}
= \dfrac{71}{126}\,\text{l} \\[6pt]
\text{Endvolumen:}\quad
& \dfrac{355}{54}\,\text{l} + \dfrac{71}{126}\,\text{l}
= \dfrac{2485}{378}\,\text{l} + \dfrac{213}{378}\,\text{l}
= \dfrac{2698}{378}\,\text{l}
= \dfrac{1349}{189}\,\text{l}
\end{align*}
$$
************
