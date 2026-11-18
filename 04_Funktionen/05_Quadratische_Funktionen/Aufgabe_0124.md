<!--
version:  1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

tags: Quadratische Funktionen, Schnittpunkt, Scheitelpunktsform, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Scheitelpunktsform mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}75\left(x+1\right)^2+7{,}95$ und $g(x)=0{,}5\left(x+1\right)^2+8{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.75*(x+1)^2+7.95`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.5*(x+1)^2+8.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}75\left(x+1\right)^2+7{,}95 &= 0{,}5\left(x+1\right)^2+8{,}2 &&\quad |\text{beide Seiten ausmultiplizieren} \\
0{,}75x^2+1{,}5x+8{,}7 &= 0{,}5x^2+x+8{,}7 &&\quad |-\left(0{,}5x^2+x+8{,}7\right) \\
0{,}25x^2+0{,}5x &= 0 &&\quad |\text{faktorisieren} \\
0{,}25\left(x+2\right)x &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x = 0 \\
x_1 &= -2, \qquad x_2 = 0
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-2\right) \\
&= 0{,}75\cdot\left(\left(-2\right)+1\right)^2+7{,}95 \\
&= 8{,}7 \\
y_2 &= f\left(0\right) \\
&= 0{,}75\cdot\left(\left(0\right)+1\right)^2+7{,}95 \\
&= 8{,}7
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-2\right)
&= 0{,}5\cdot\left(\left(-2\right)+1\right)^2+8{,}2 \\
&= 8{,}7=y_1 \\
g\left(0\right)
&= 0{,}5\cdot\left(\left(0\right)+1\right)^2+8{,}2 \\
&= 8{,}7=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 8{,}7\right)$ und $S_2\left(0\mid 8{,}7\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=0{,}25\left(x+0{,}5\right)^2+10{,}825$ und $p(x)=0{,}75\left(x+0{,}5\right)^2+9{,}7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=0.25*(x+0.5)^2+10.825`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=0.75*(x+0.5)^2+9.7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
0{,}25\left(x+0{,}5\right)^2+10{,}825 &= 0{,}75\left(x+0{,}5\right)^2+9{,}7 &&\quad |\text{beide Seiten ausmultiplizieren} \\
0{,}25x^2+0{,}25x+10{,}8875 &= 0{,}75x^2+0{,}75x+9{,}8875 &&\quad |-\left(0{,}75x^2+0{,}75x+9{,}8875\right) \\
-0{,}5x^2-0{,}5x+1 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}5\left(x+2\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -2, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-2\right) \\
&= 0{,}25\cdot\left(\left(-2\right)+0{,}5\right)^2+10{,}825 \\
&= 11{,}3875 \\
y_2 &= h\left(1\right) \\
&= 0{,}25\cdot\left(\left(1\right)+0{,}5\right)^2+10{,}825 \\
&= 11{,}3875
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= 0{,}75\cdot\left(\left(-2\right)+0{,}5\right)^2+9{,}7 \\
&= 11{,}3875=y_1 \\
p\left(1\right)
&= 0{,}75\cdot\left(\left(1\right)+0{,}5\right)^2+9{,}7 \\
&= 11{,}3875=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 11{,}3875\right)$ und $S_2\left(1\mid 11{,}3875\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}6\left(x-0{,}5\right)^2+8{,}7$ und $r(x)=1{,}2\left(x-0{,}5\right)^2+10{,}3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.6*(x-0.5)^2+8.7`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1.2*(x-0.5)^2+10.3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}6\left(x-0{,}5\right)^2+8{,}7 &= 1{,}2\left(x-0{,}5\right)^2+10{,}3 &&\quad |\text{beide Seiten ausmultiplizieren} \\
1{,}6x^2-1{,}6x+9{,}1 &= 1{,}2x^2-1{,}2x+10{,}6 &&\quad |-\left(1{,}2x^2-1{,}2x+10{,}6\right) \\
0{,}4x^2-0{,}4x-1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}4\left(x+1{,}5\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}5 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= -1{,}5, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-1{,}5\right) \\
&= 1{,}6\cdot\left(\left(-1{,}5\right)-0{,}5\right)^2+8{,}7 \\
&= 15{,}1 \\
y_2 &= q\left(2{,}5\right) \\
&= 1{,}6\cdot\left(\left(2{,}5\right)-0{,}5\right)^2+8{,}7 \\
&= 15{,}1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-1{,}5\right)
&= 1{,}2\cdot\left(\left(-1{,}5\right)-0{,}5\right)^2+10{,}3 \\
&= 15{,}1=y_1 \\
r\left(2{,}5\right)
&= 1{,}2\cdot\left(\left(2{,}5\right)-0{,}5\right)^2+10{,}3 \\
&= 15{,}1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid 15{,}1\right)$ und $S_2\left(2{,}5\mid 15{,}1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
