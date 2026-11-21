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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Parameterform mit linearen Funktionen mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Parameterform mit linearen Funktionen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}6x^2-0{,}7x+1{,}3$ und $g(x)=1{,}4x-0{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.6*x^2-0.7*x+1.3`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1.4*x-0.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}6x^2-0{,}7x+1{,}3 &= 1{,}4x-0{,}2 &&\quad |-\left(1{,}4x-0{,}2\right) \\
0{,}6x^2-2{,}1x+1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}6\left(x-1\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 1, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= g\left(1\right) \\
&= 1{,}4\cdot\left(1\right)-0{,}2 \\
&= 1{,}2 \\
y_2 &= g\left(2{,}5\right) \\
&= 1{,}4\cdot\left(2{,}5\right)-0{,}2 \\
&= 3{,}3
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(1\right)
&= 0{,}6\cdot\left(1\right)^2-0{,}7\cdot\left(1\right)+1{,}3 \\
&= 1{,}2=y_1 \\
f\left(2{,}5\right)
&= 0{,}6\cdot\left(2{,}5\right)^2-0{,}7\cdot\left(2{,}5\right)+1{,}3 \\
&= 3{,}3=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 1{,}2\right)$ und $S_2\left(2{,}5\mid 3{,}3\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}8x^2-0{,}9x+3{,}6$ und $p(x)=-0{,}5x+2{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.8*x^2-0.9*x+3.6`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.5*x+2.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}8x^2-0{,}9x+3{,}6 &= -0{,}5x+2{,}4 &&\quad |-\left(-0{,}5x+2{,}4\right) \\
-0{,}8x^2-0{,}4x+1{,}2 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}8\left(x+1{,}5\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}5 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -1{,}5, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= p\left(-1{,}5\right) \\
&= -0{,}5\cdot\left(-1{,}5\right)+2{,}4 \\
&= 3{,}15 \\
y_2 &= p\left(1\right) \\
&= -0{,}5\cdot\left(1\right)+2{,}4 \\
&= 1{,}9
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-1{,}5\right)
&= -0{,}8\cdot\left(-1{,}5\right)^2-0{,}9\cdot\left(-1{,}5\right)+3{,}6 \\
&= 3{,}15=y_1 \\
h\left(1\right)
&= -0{,}8\cdot\left(1\right)^2-0{,}9\cdot\left(1\right)+3{,}6 \\
&= 1{,}9=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid 3{,}15\right)$ und $S_2\left(1\mid 1{,}9\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}2x^2-2{,}25x+0{,}1$ und $r(x)=0{,}75x-1{,}1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.2*x^2-2.25*x+0.1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=0.75*x-1.1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}2x^2-2{,}25x+0{,}1 &= 0{,}75x-1{,}1 &&\quad |-\left(0{,}75x-1{,}1\right) \\
1{,}2x^2-3x+1{,}2 &= 0 &&\quad |\text{faktorisieren} \\
1{,}2\left(x-0{,}5\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}5\right) \\
&= 0{,}75\cdot\left(0{,}5\right)-1{,}1 \\
&= -0{,}725 \\
y_2 &= r\left(2\right) \\
&= 0{,}75\cdot\left(2\right)-1{,}1 \\
&= 0{,}4
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}5\right)
&= 1{,}2\cdot\left(0{,}5\right)^2-2{,}25\cdot\left(0{,}5\right)+0{,}1 \\
&= -0{,}725=y_1 \\
q\left(2\right)
&= 1{,}2\cdot\left(2\right)^2-2{,}25\cdot\left(2\right)+0{,}1 \\
&= 0{,}4=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid -0{,}725\right)$ und $S_2\left(2\mid 0{,}4\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}25x^2-1{,}8x+1{,}4$ und $t(x)=-1{,}6x+0{,}8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.25*x^2-1.8*x+1.4`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-1.6*x+0.8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}25x^2-1{,}8x+1{,}4 &= -1{,}6x+0{,}8 &&\quad |-\left(-1{,}6x+0{,}8\right) \\
-0{,}25x^2-0{,}2x+0{,}6 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}25\left(x+2\right)\left(x-1{,}2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-1{,}2 = 0 \\
x_1 &= -2, \qquad x_2 = 1{,}2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-2\right) \\
&= -1{,}6\cdot\left(-2\right)+0{,}8 \\
&= 4 \\
y_2 &= t\left(1{,}2\right) \\
&= -1{,}6\cdot\left(1{,}2\right)+0{,}8 \\
&= -1{,}12
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-2\right)
&= -0{,}25\cdot\left(-2\right)^2-1{,}8\cdot\left(-2\right)+1{,}4 \\
&= 4=y_1 \\
s\left(1{,}2\right)
&= -0{,}25\cdot\left(1{,}2\right)^2-1{,}8\cdot\left(1{,}2\right)+1{,}4 \\
&= -1{,}12=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 4\right)$ und $S_2\left(1{,}2\mid -1{,}12\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
