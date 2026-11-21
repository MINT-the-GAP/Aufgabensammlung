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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameterform berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-0{,}1x^2-1{,}05x+5{,}9$ und $g(x)=-0{,}4x^2-0{,}6x+5{,}9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-0.1*x^2-1.05*x+5.9`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-0.4*x^2-0.6*x+5.9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-0{,}1x^2-1{,}05x+5{,}9 &= -0{,}4x^2-0{,}6x+5{,}9 &&\quad |-\left(-0{,}4x^2-0{,}6x+5{,}9\right) \\
0{,}3x^2-0{,}45x &= 0 &&\quad |\text{faktorisieren} \\
0{,}3x\left(x-1{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-1{,}5 = 0 \\
x_1 &= 0, \qquad x_2 = 1{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(0\right) \\
&= -0{,}1\cdot\left(0\right)^2-1{,}05\cdot\left(0\right)+5{,}9 \\
&= 5{,}9 \\
y_2 &= f\left(1{,}5\right) \\
&= -0{,}1\cdot\left(1{,}5\right)^2-1{,}05\cdot\left(1{,}5\right)+5{,}9 \\
&= 4{,}1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(0\right)
&= -0{,}4\cdot\left(0\right)^2-0{,}6\cdot\left(0\right)+5{,}9 \\
&= 5{,}9=y_1 \\
g\left(1{,}5\right)
&= -0{,}4\cdot\left(1{,}5\right)^2-0{,}6\cdot\left(1{,}5\right)+5{,}9 \\
&= 4{,}1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid 5{,}9\right)$ und $S_2\left(1{,}5\mid 4{,}1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=0{,}5x^2+2{,}95x+5{,}4625$ und $p(x)=1{,}25x^2+0{,}7x+6{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=0.5*x^2+2.95*x+5.4625`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=1.25*x^2+0.7*x+6.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
0{,}5x^2+2{,}95x+5{,}4625 &= 1{,}25x^2+0{,}7x+6{,}4 &&\quad |-\left(1{,}25x^2+0{,}7x+6{,}4\right) \\
-0{,}75x^2+2{,}25x-0{,}9375 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x-0{,}5\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(0{,}5\right) \\
&= 0{,}5\cdot\left(0{,}5\right)^2+2{,}95\cdot\left(0{,}5\right)+5{,}4625 \\
&= 7{,}0625 \\
y_2 &= h\left(2{,}5\right) \\
&= 0{,}5\cdot\left(2{,}5\right)^2+2{,}95\cdot\left(2{,}5\right)+5{,}4625 \\
&= 15{,}9625
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(0{,}5\right)
&= 1{,}25\cdot\left(0{,}5\right)^2+0{,}7\cdot\left(0{,}5\right)+6{,}4 \\
&= 7{,}0625=y_1 \\
p\left(2{,}5\right)
&= 1{,}25\cdot\left(2{,}5\right)^2+0{,}7\cdot\left(2{,}5\right)+6{,}4 \\
&= 15{,}9625=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 7{,}0625\right)$ und $S_2\left(2{,}5\mid 15{,}9625\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-0{,}3x^2-3{,}45x+9{,}85$ und $r(x)=-0{,}8x^2-1{,}2x+8{,}1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-0.3*x^2-3.45*x+9.85`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.8*x^2-1.2*x+8.1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-0{,}3x^2-3{,}45x+9{,}85 &= -0{,}8x^2-1{,}2x+8{,}1 &&\quad |-\left(-0{,}8x^2-1{,}2x+8{,}1\right) \\
0{,}5x^2-2{,}25x+1{,}75 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x-1\right)\left(x-3{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-3{,}5 = 0 \\
x_1 &= 1, \qquad x_2 = 3{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(1\right) \\
&= -0{,}3\cdot\left(1\right)^2-3{,}45\cdot\left(1\right)+9{,}85 \\
&= 6{,}1 \\
y_2 &= q\left(3{,}5\right) \\
&= -0{,}3\cdot\left(3{,}5\right)^2-3{,}45\cdot\left(3{,}5\right)+9{,}85 \\
&= -5{,}9
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(1\right)
&= -0{,}8\cdot\left(1\right)^2-1{,}2\cdot\left(1\right)+8{,}1 \\
&= 6{,}1=y_1 \\
r\left(3{,}5\right)
&= -0{,}8\cdot\left(3{,}5\right)^2-1{,}2\cdot\left(3{,}5\right)+8{,}1 \\
&= -5{,}9=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 6{,}1\right)$ und $S_2\left(3{,}5\mid -5{,}9\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
