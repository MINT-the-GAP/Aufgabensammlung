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

tags: Quadratische Funktionen, Schnittpunkt, Scheitelpunktsform, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Scheitelpunktsform mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-\left(x-2\right)^2-12$ und $g(x)=-2\left(x-2\right)^2-11$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-(x-2)^2-12`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2*(x-2)^2-11;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-\left(x-2\right)^2-12 &= -2\left(x-2\right)^2-11 &&\quad |\text{beide Seiten ausmultiplizieren} \\
-x^2+4x-16 &= -2x^2+8x-19 &&\quad |-\left(-2x^2+8x-19\right) \\
x^2-4x+3 &= 0 &&\quad |\text{faktorisieren} \\
\left(x-1\right)\left(x-3\right) &= 0
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
y_1 &= f\left(1\right) \\
&= -1\cdot\left(\left(1\right)-2\right)^2-12 \\
&= -13 \\
y_2 &= f\left(3\right) \\
&= -1\cdot\left(\left(3\right)-2\right)^2-12 \\
&= -13
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= -2\cdot\left(\left(1\right)-2\right)^2-11 \\
&= -13=y_1 \\
g\left(3\right)
&= -2\cdot\left(\left(3\right)-2\right)^2-11 \\
&= -13=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid -13\right)$ und $S_2\left(3\mid -13\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=5\left(x\right)^2+6$ und $p(x)=3\left(x\right)^2+14$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5*(x)^2+6`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*(x)^2+14;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
5\left(x\right)^2+6 &= 3\left(x\right)^2+14 &&\quad |\text{beide Seiten ausmultiplizieren} \\
5x^2+6 &= 3x^2+14 &&\quad |-\left(3x^2+14\right) \\
2x^2-8 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x+2\right)\left(x-2\right) &= 0
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
y_1 &= h\left(-2\right) \\
&= 5\cdot\left(\left(-2\right)\right)^2+6 \\
&= 26 \\
y_2 &= h\left(2\right) \\
&= 5\cdot\left(\left(2\right)\right)^2+6 \\
&= 26
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= 3\cdot\left(\left(-2\right)\right)^2+14 \\
&= 26=y_1 \\
p\left(2\right)
&= 3\cdot\left(\left(2\right)\right)^2+14 \\
&= 26=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 26\right)$ und $S_2\left(2\mid 26\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-4\left(x-3\right)^2-5$ und $r(x)=-3\left(x-3\right)^2-14$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-4*(x-3)^2-5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-3*(x-3)^2-14;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-4\left(x-3\right)^2-5 &= -3\left(x-3\right)^2-14 &&\quad |\text{beide Seiten ausmultiplizieren} \\
-4x^2+24x-41 &= -3x^2+18x-41 &&\quad |-\left(-3x^2+18x-41\right) \\
-x^2+6x &= 0 &&\quad |\text{faktorisieren} \\
-x\left(x-6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-6 = 0 \\
x_1 &= 0, \qquad x_2 = 6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(0\right) \\
&= -4\cdot\left(\left(0\right)-3\right)^2-5 \\
&= -41 \\
y_2 &= q\left(6\right) \\
&= -4\cdot\left(\left(6\right)-3\right)^2-5 \\
&= -41
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(0\right)
&= -3\cdot\left(\left(0\right)-3\right)^2-14 \\
&= -41=y_1 \\
r\left(6\right)
&= -3\cdot\left(\left(6\right)-3\right)^2-14 \\
&= -41=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid -41\right)$ und $S_2\left(6\mid -41\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
