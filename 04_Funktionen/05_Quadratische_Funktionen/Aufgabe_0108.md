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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Scheitelpunktsform, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Scheitelpunktsform mit linearen Funktionen mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Scheitelpunktsform mit linearen Funktionen berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}6\left(x-1\right)^2+0{,}4$ und $g(x)=0{,}3x+0{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.6*(x-1)^2+0.4`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.3*x+0.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}6\left(x-1\right)^2+0{,}4 &= 0{,}3x+0{,}4 &&\quad |\text{linke Seite ausmultiplizieren} \\
0{,}6x^2-1{,}2x+1 &= 0{,}3x+0{,}4 &&\quad |-\left(0{,}3x+0{,}4\right) \\
0{,}6x^2-1{,}5x+0{,}6 &= 0 &&\quad |\text{faktorisieren} \\
0{,}6\left(x-0{,}5\right)\left(x-2\right) &= 0
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
y_1 &= g\left(0{,}5\right) \\
&= 0{,}3\cdot\left(0{,}5\right)+0{,}4 \\
&= 0{,}55 \\
y_2 &= g\left(2\right) \\
&= 0{,}3\cdot\left(2\right)+0{,}4 \\
&= 1
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(0{,}5\right)
&= 0{,}6\cdot\left(\left(0{,}5\right)-1\right)^2+0{,}4 \\
&= 0{,}55=y_1 \\
f\left(2\right)
&= 0{,}6\cdot\left(\left(2\right)-1\right)^2+0{,}4 \\
&= 1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 0{,}55\right)$ und $S_2\left(2\mid 1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}8\left(x+0{,}5\right)^2+1{,}2$ und $p(x)=-0{,}4x-0{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.8*(x+0.5)^2+1.2`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.4*x-0.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}8\left(x+0{,}5\right)^2+1{,}2 &= -0{,}4x-0{,}2 &&\quad |\text{linke Seite ausmultiplizieren} \\
-0{,}8x^2-0{,}8x+1 &= -0{,}4x-0{,}2 &&\quad |-\left(-0{,}4x-0{,}2\right) \\
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
&= -0{,}4\cdot\left(-1{,}5\right)-0{,}2 \\
&= 0{,}4 \\
y_2 &= p\left(1\right) \\
&= -0{,}4\cdot\left(1\right)-0{,}2 \\
&= -0{,}6
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-1{,}5\right)
&= -0{,}8\cdot\left(\left(-1{,}5\right)+0{,}5\right)^2+1{,}2 \\
&= 0{,}4=y_1 \\
h\left(1\right)
&= -0{,}8\cdot\left(\left(1\right)+0{,}5\right)^2+1{,}2 \\
&= -0{,}6=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid 0{,}4\right)$ und $S_2\left(1\mid -0{,}6\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}2\left(x-2\right)^2-0{,}4$ und $r(x)=-0{,}6x+2{,}6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.2*(x-2)^2-0.4`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.6*x+2.6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}2\left(x-2\right)^2-0{,}4 &= -0{,}6x+2{,}6 &&\quad |\text{linke Seite ausmultiplizieren} \\
1{,}2x^2-4{,}8x+4{,}4 &= -0{,}6x+2{,}6 &&\quad |-\left(-0{,}6x+2{,}6\right) \\
1{,}2x^2-4{,}2x+1{,}8 &= 0 &&\quad |\text{faktorisieren} \\
1{,}2\left(x-0{,}5\right)\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}5\right) \\
&= -0{,}6\cdot\left(0{,}5\right)+2{,}6 \\
&= 2{,}3 \\
y_2 &= r\left(3\right) \\
&= -0{,}6\cdot\left(3\right)+2{,}6 \\
&= 0{,}8
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}5\right)
&= 1{,}2\cdot\left(\left(0{,}5\right)-2\right)^2-0{,}4 \\
&= 2{,}3=y_1 \\
q\left(3\right)
&= 1{,}2\cdot\left(\left(3\right)-2\right)^2-0{,}4 \\
&= 0{,}8=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 2{,}3\right)$ und $S_2\left(3\mid 0{,}8\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}5\left(x+1\right)^2+2{,}2$ und $t(x)=-0{,}5x+0{,}7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.5*(x+1)^2+2.2`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-0.5*x+0.7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}5\left(x+1\right)^2+2{,}2 &= -0{,}5x+0{,}7 &&\quad |\text{linke Seite ausmultiplizieren} \\
-0{,}5x^2-x+1{,}7 &= -0{,}5x+0{,}7 &&\quad |-\left(-0{,}5x+0{,}7\right) \\
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
y_1 &= t\left(-2\right) \\
&= -0{,}5\cdot\left(-2\right)+0{,}7 \\
&= 1{,}7 \\
y_2 &= t\left(1\right) \\
&= -0{,}5\cdot\left(1\right)+0{,}7 \\
&= 0{,}2
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-2\right)
&= -0{,}5\cdot\left(\left(-2\right)+1\right)^2+2{,}2 \\
&= 1{,}7=y_1 \\
s\left(1\right)
&= -0{,}5\cdot\left(\left(1\right)+1\right)^2+2{,}2 \\
&= 0{,}2=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 1{,}7\right)$ und $S_2\left(1\mid 0{,}2\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
