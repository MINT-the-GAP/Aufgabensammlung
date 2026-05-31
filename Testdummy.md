<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md













tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md










-->









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
