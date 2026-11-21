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

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}5\left(x-1{,}2\right)^2+0{,}8$ und $g(x)=0{,}2x+1{,}26$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*(x-1.2)^2+0.8`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.2*x+1.26;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}5\left(x-1{,}2\right)^2+0{,}8 &= 0{,}2x+1{,}26 &&\quad |\text{linke Seite ausmultiplizieren} \\
0{,}5x^2-1{,}2x+1{,}52 &= 0{,}2x+1{,}26 &&\quad |-\left(0{,}2x+1{,}26\right) \\
0{,}5x^2-1{,}4x+0{,}26 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x-0{,}2\right)\left(x-2{,}6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}2 = 0 &\quad \text{oder} \quad x-2{,}6 = 0 \\
x_1 &= 0{,}2, \qquad x_2 = 2{,}6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= g\left(0{,}2\right) \\
&= 0{,}2\cdot\left(0{,}2\right)+1{,}26 \\
&= 1{,}3 \\
y_2 &= g\left(2{,}6\right) \\
&= 0{,}2\cdot\left(2{,}6\right)+1{,}26 \\
&= 1{,}78
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(0{,}2\right)
&= 0{,}5\cdot\left(\left(0{,}2\right)-1{,}2\right)^2+0{,}8 \\
&= 1{,}3=y_1 \\
f\left(2{,}6\right)
&= 0{,}5\cdot\left(\left(2{,}6\right)-1{,}2\right)^2+0{,}8 \\
&= 1{,}78=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}2\mid 1{,}3\right)$ und $S_2\left(2{,}6\mid 1{,}78\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}4\left(x+0{,}5\right)^2+2{,}1$ und $p(x)=-0{,}2x+1{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.4*(x+0.5)^2+2.1`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.2*x+1.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}4\left(x+0{,}5\right)^2+2{,}1 &= -0{,}2x+1{,}4 &&\quad |\text{linke Seite ausmultiplizieren} \\
-0{,}4x^2-0{,}4x+2 &= -0{,}2x+1{,}4 &&\quad |-\left(-0{,}2x+1{,}4\right) \\
-0{,}4x^2-0{,}2x+0{,}6 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}4\left(x+1{,}5\right)\left(x-1\right) &= 0
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
&= -0{,}2\cdot\left(-1{,}5\right)+1{,}4 \\
&= 1{,}7 \\
y_2 &= p\left(1\right) \\
&= -0{,}2\cdot\left(1\right)+1{,}4 \\
&= 1{,}2
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-1{,}5\right)
&= -0{,}4\cdot\left(\left(-1{,}5\right)+0{,}5\right)^2+2{,}1 \\
&= 1{,}7=y_1 \\
h\left(1\right)
&= -0{,}4\cdot\left(\left(1\right)+0{,}5\right)^2+2{,}1 \\
&= 1{,}2=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid 1{,}7\right)$ und $S_2\left(1\mid 1{,}2\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}25\left(x-2\right)^2-0{,}5$ und $r(x)=-0{,}5x+1{,}7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.25*(x-2)^2-0.5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.5*x+1.7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}25\left(x-2\right)^2-0{,}5 &= -0{,}5x+1{,}7 &&\quad |\text{linke Seite ausmultiplizieren} \\
1{,}25x^2-5x+4{,}5 &= -0{,}5x+1{,}7 &&\quad |-\left(-0{,}5x+1{,}7\right) \\
1{,}25x^2-4{,}5x+2{,}8 &= 0 &&\quad |\text{faktorisieren} \\
1{,}25\left(x-0{,}8\right)\left(x-2{,}8\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}8 = 0 &\quad \text{oder} \quad x-2{,}8 = 0 \\
x_1 &= 0{,}8, \qquad x_2 = 2{,}8
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}8\right) \\
&= -0{,}5\cdot\left(0{,}8\right)+1{,}7 \\
&= 1{,}3 \\
y_2 &= r\left(2{,}8\right) \\
&= -0{,}5\cdot\left(2{,}8\right)+1{,}7 \\
&= 0{,}3
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}8\right)
&= 1{,}25\cdot\left(\left(0{,}8\right)-2\right)^2-0{,}5 \\
&= 1{,}3=y_1 \\
q\left(2{,}8\right)
&= 1{,}25\cdot\left(\left(2{,}8\right)-2\right)^2-0{,}5 \\
&= 0{,}3=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}8\mid 1{,}3\right)$ und $S_2\left(2{,}8\mid 0{,}3\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}75\left(x+1{,}2\right)^2+0{,}6$ und $t(x)=-0{,}6x-1{,}08$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.75*(x+1.2)^2+0.6`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-0.6*x-1.08;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}75\left(x+1{,}2\right)^2+0{,}6 &= -0{,}6x-1{,}08 &&\quad |\text{linke Seite ausmultiplizieren} \\
-0{,}75x^2-1{,}8x-0{,}48 &= -0{,}6x-1{,}08 &&\quad |-\left(-0{,}6x-1{,}08\right) \\
-0{,}75x^2-1{,}2x+0{,}6 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x+2\right)\left(x-0{,}4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-0{,}4 = 0 \\
x_1 &= -2, \qquad x_2 = 0{,}4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-2\right) \\
&= -0{,}6\cdot\left(-2\right)-1{,}08 \\
&= 0{,}12 \\
y_2 &= t\left(0{,}4\right) \\
&= -0{,}6\cdot\left(0{,}4\right)-1{,}08 \\
&= -1{,}32
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-2\right)
&= -0{,}75\cdot\left(\left(-2\right)+1{,}2\right)^2+0{,}6 \\
&= 0{,}12=y_1 \\
s\left(0{,}4\right)
&= -0{,}75\cdot\left(\left(0{,}4\right)+1{,}2\right)^2+0{,}6 \\
&= -1{,}32=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 0{,}12\right)$ und $S_2\left(0{,}4\mid -1{,}32\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
