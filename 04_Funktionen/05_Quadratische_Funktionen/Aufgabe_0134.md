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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Scheitelpunktsform, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}75x^2+0{,}75x+14{,}5125$ und $g(x)=0{,}5\left(x+1\right)^2+14{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.75*x^2+0.75*x+14.5125`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.5*(x+1)^2+14.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}75x^2+0{,}75x+14{,}5125 &= 0{,}5\left(x+1\right)^2+14{,}2 &&\quad |\text{rechte Seite ausmultiplizieren} \\
0{,}75x^2+0{,}75x+14{,}5125 &= 0{,}5x^2+x+14{,}7 &&\quad |-\left(0{,}5x^2+x+14{,}7\right) \\
0{,}25x^2-0{,}25x-0{,}1875 &= 0 &&\quad |\text{faktorisieren} \\
0{,}25\left(x+0{,}5\right)\left(x-1{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+0{,}5 = 0 &\quad \text{oder} \quad x-1{,}5 = 0 \\
x_1 &= -0{,}5, \qquad x_2 = 1{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-0{,}5\right) \\
&= 0{,}75\cdot\left(-0{,}5\right)^2+0{,}75\cdot\left(-0{,}5\right)+14{,}5125 \\
&= 14{,}325 \\
y_2 &= f\left(1{,}5\right) \\
&= 0{,}75\cdot\left(1{,}5\right)^2+0{,}75\cdot\left(1{,}5\right)+14{,}5125 \\
&= 17{,}325
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-0{,}5\right)
&= 0{,}5\cdot\left(\left(-0{,}5\right)+1\right)^2+14{,}2 \\
&= 14{,}325=y_1 \\
g\left(1{,}5\right)
&= 0{,}5\cdot\left(\left(1{,}5\right)+1\right)^2+14{,}2 \\
&= 17{,}325=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-0{,}5\mid 14{,}325\right)$ und $S_2\left(1{,}5\mid 17{,}325\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=0{,}25x^2+2x+15{,}8875$ und $p(x)=0{,}75\left(x+0{,}5\right)^2+15{,}7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=0.25*x^2+2*x+15.8875`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=0.75*(x+0.5)^2+15.7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
0{,}25x^2+2x+15{,}8875 &= 0{,}75\left(x+0{,}5\right)^2+15{,}7 &&\quad |\text{rechte Seite ausmultiplizieren} \\
0{,}25x^2+2x+15{,}8875 &= 0{,}75x^2+0{,}75x+15{,}8875 &&\quad |-\left(0{,}75x^2+0{,}75x+15{,}8875\right) \\
-0{,}5x^2+1{,}25x &= 0 &&\quad |\text{faktorisieren} \\
-0{,}5x\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 0, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(0\right) \\
&= 0{,}25\cdot\left(0\right)^2+2\cdot\left(0\right)+15{,}8875 \\
&= 15{,}8875 \\
y_2 &= h\left(2{,}5\right) \\
&= 0{,}25\cdot\left(2{,}5\right)^2+2\cdot\left(2{,}5\right)+15{,}8875 \\
&= 22{,}45
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(0\right)
&= 0{,}75\cdot\left(\left(0\right)+0{,}5\right)^2+15{,}7 \\
&= 15{,}8875=y_1 \\
p\left(2{,}5\right)
&= 0{,}75\cdot\left(\left(2{,}5\right)+0{,}5\right)^2+15{,}7 \\
&= 22{,}45=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid 15{,}8875\right)$ und $S_2\left(2{,}5\mid 22{,}45\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=1{,}6x^2-2{,}8x+17{,}3$ und $r(x)=1{,}2\left(x-0{,}5\right)^2+16{,}3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1.6*x^2-2.8*x+17.3`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1.2*(x-0.5)^2+16.3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
1{,}6x^2-2{,}8x+17{,}3 &= 1{,}2\left(x-0{,}5\right)^2+16{,}3 &&\quad |\text{rechte Seite ausmultiplizieren} \\
1{,}6x^2-2{,}8x+17{,}3 &= 1{,}2x^2-1{,}2x+16{,}6 &&\quad |-\left(1{,}2x^2-1{,}2x+16{,}6\right) \\
0{,}4x^2-1{,}6x+0{,}7 &= 0 &&\quad |\text{faktorisieren} \\
0{,}4\left(x-0{,}5\right)\left(x-3{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-3{,}5 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 3{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(0{,}5\right) \\
&= 1{,}6\cdot\left(0{,}5\right)^2-2{,}8\cdot\left(0{,}5\right)+17{,}3 \\
&= 16{,}3 \\
y_2 &= q\left(3{,}5\right) \\
&= 1{,}6\cdot\left(3{,}5\right)^2-2{,}8\cdot\left(3{,}5\right)+17{,}3 \\
&= 27{,}1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(0{,}5\right)
&= 1{,}2\cdot\left(\left(0{,}5\right)-0{,}5\right)^2+16{,}3 \\
&= 16{,}3=y_1 \\
r\left(3{,}5\right)
&= 1{,}2\cdot\left(\left(3{,}5\right)-0{,}5\right)^2+16{,}3 \\
&= 27{,}1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 16{,}3\right)$ und $S_2\left(3{,}5\mid 27{,}1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
