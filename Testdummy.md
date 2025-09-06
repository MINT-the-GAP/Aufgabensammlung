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
-->



# Zahlenstrahl




# Koordinatensystem

# Downloadbalken



> Klicke/ziehe den Balken auf **77 %** und drücke **Prüfen**.

<div>
  <progress id="prog77" value="0" max="100" style="width:33%; transform:scale(3); position:relative; left:calc(100% / 3); margin-bottom:1rem">0%</progress>
</div>

<script>
(() => {
  const bar = document.getElementById('prog77');
  if (!bar) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  function setValue(val) {
    const max = Number(bar.max) || 100;
    const v = clamp(Math.round(val), 0, max);
    bar.value = v;
    bar.textContent = v + '%'; // Fallback-Anzeige
  }
  function handlePointer(clientX) {
    const rect = bar.getBoundingClientRect();
    const frac = (clientX - rect.left) / rect.width;
    setValue(frac * (bar.max || 100));
  }

  // Klick & Drag
  bar.addEventListener('click', (e) => handlePointer(e.clientX));
  let dragging = false;
  bar.addEventListener('mousedown', (e) => { dragging = true; handlePointer(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => { if (dragging) handlePointer(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Anfangswert
  setValue(bar.value || 0);
})();
</script>

<!-- Optional: Anzahl Fehlversuche bis "Auflösen"-Button -->
<!-- data-solution-button="3" -->

```js
// LiaScript prüft nur das Rückgabe-Ergebnis dieses Snippets.
// Gib TRUE zurück, wenn der Balken exakt 77 ist, sonst FALSE.
(() => {
  const bar = document.getElementById('prog77');
  return !!bar && Number(bar.value) === 77;
})()
```











# Inline-Effekt Algebrite?


P( [[ 3/4 ]] | [[ 2/5 ]] )


P( [[ 3/4 ]] @Algebrite.check(3/4) | [[ 2/5 ]] @Algebrite.check(2/5) )


# Vernetzte Lücken





Entweder [[  positiv  ]] oder [[  negativ  ]] oder [[  magnetisch  ]]?
<script>
@input.map(s => s.toLowerCase()).sort().join() === "magnetisch,negativ,positiv"
</script>


# Dominos Bruch

Test:

__Aufgabe 1:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.

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







__Aufgabe 1:__ **Ordne** die Dominosteine in der richtigen Reihenfolge **an**.


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







# Algebrite


6 + 6

[[12]]
@Algebrite.check(12)

---

try different expressions of `x ^ 2 - 1`

[[x ^ 2 - 1]]
@Algebrite.check(x^2-1)

---

x=[[ 1/3 ]]m
@Algebrite.check2(1/3,0.001)

---

[[ 5,5 ]] m
@Algebrite.check_margin(5.1,6.1)


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
