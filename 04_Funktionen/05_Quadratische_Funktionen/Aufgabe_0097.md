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

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}5x^2-0{,}8x+1{,}9$ und $g(x)=1{,}2x+0{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*x^2-0.8*x+1.9`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1.2*x+0.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}5x^2-0{,}8x+1{,}9 &= 1{,}2x+0{,}4 &&\quad |-\left(1{,}2x+0{,}4\right) \\
0{,}5x^2-2x+1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x-1\right)\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= 1, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= g\left(1\right) \\
&= 1{,}2\cdot\left(1\right)+0{,}4 \\
&= 1{,}6 \\
y_2 &= g\left(3\right) \\
&= 1{,}2\cdot\left(3\right)+0{,}4 \\
&= 4
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(1\right)
&= 0{,}5\cdot\left(1\right)^2-0{,}8\cdot\left(1\right)+1{,}9 \\
&= 1{,}6=y_1 \\
f\left(3\right)
&= 0{,}5\cdot\left(3\right)^2-0{,}8\cdot\left(3\right)+1{,}9 \\
&= 4=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 1{,}6\right)$ und $S_2\left(3\mid 4\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}4x^2-1{,}5x+3{,}7$ und $p(x)=-1{,}5x+2{,}1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.4*x^2-1.5*x+3.7`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-1.5*x+2.1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}4x^2-1{,}5x+3{,}7 &= -1{,}5x+2{,}1 &&\quad |-\left(-1{,}5x+2{,}1\right) \\
-0{,}4x^2+1{,}6 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}4\left(x+2\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -2, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= p\left(-2\right) \\
&= -1{,}5\cdot\left(-2\right)+2{,}1 \\
&= 5{,}1 \\
y_2 &= p\left(2\right) \\
&= -1{,}5\cdot\left(2\right)+2{,}1 \\
&= -0{,}9
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -0{,}4\cdot\left(-2\right)^2-1{,}5\cdot\left(-2\right)+3{,}7 \\
&= 5{,}1=y_1 \\
h\left(2\right)
&= -0{,}4\cdot\left(2\right)^2-1{,}5\cdot\left(2\right)+3{,}7 \\
&= -0{,}9=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 5{,}1\right)$ und $S_2\left(2\mid -0{,}9\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}25x^2-3{,}4x+1{,}2$ und $r(x)=0{,}6x-1{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.25*x^2-3.4*x+1.2`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=0.6*x-1.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}25x^2-3{,}4x+1{,}2 &= 0{,}6x-1{,}2 &&\quad |-\left(0{,}6x-1{,}2\right) \\
1{,}25x^2-4x+2{,}4 &= 0 &&\quad |\text{faktorisieren} \\
1{,}25\left(x-0{,}8\right)\left(x-2{,}4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}8 = 0 &\quad \text{oder} \quad x-2{,}4 = 0 \\
x_1 &= 0{,}8, \qquad x_2 = 2{,}4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}8\right) \\
&= 0{,}6\cdot\left(0{,}8\right)-1{,}2 \\
&= -0{,}72 \\
y_2 &= r\left(2{,}4\right) \\
&= 0{,}6\cdot\left(2{,}4\right)-1{,}2 \\
&= 0{,}24
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}8\right)
&= 1{,}25\cdot\left(0{,}8\right)^2-3{,}4\cdot\left(0{,}8\right)+1{,}2 \\
&= -0{,}72=y_1 \\
q\left(2{,}4\right)
&= 1{,}25\cdot\left(2{,}4\right)^2-3{,}4\cdot\left(2{,}4\right)+1{,}2 \\
&= 0{,}24=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}8\mid -0{,}72\right)$ und $S_2\left(2{,}4\mid 0{,}24\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}75x^2-0{,}5x+2$ und $t(x)=-0{,}8x+0{,}56$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.75*x^2-0.5*x+2`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-0.8*x+0.56;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}75x^2-0{,}5x+2 &= -0{,}8x+0{,}56 &&\quad |-\left(-0{,}8x+0{,}56\right) \\
-0{,}75x^2+0{,}3x+1{,}44 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x+1{,}2\right)\left(x-1{,}6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}2 = 0 &\quad \text{oder} \quad x-1{,}6 = 0 \\
x_1 &= -1{,}2, \qquad x_2 = 1{,}6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-1{,}2\right) \\
&= -0{,}8\cdot\left(-1{,}2\right)+0{,}56 \\
&= 1{,}52 \\
y_2 &= t\left(1{,}6\right) \\
&= -0{,}8\cdot\left(1{,}6\right)+0{,}56 \\
&= -0{,}72
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-1{,}2\right)
&= -0{,}75\cdot\left(-1{,}2\right)^2-0{,}5\cdot\left(-1{,}2\right)+2 \\
&= 1{,}52=y_1 \\
s\left(1{,}6\right)
&= -0{,}75\cdot\left(1{,}6\right)^2-0{,}5\cdot\left(1{,}6\right)+2 \\
&= -0{,}72=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}2\mid 1{,}52\right)$ und $S_2\left(1{,}6\mid -0{,}72\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
