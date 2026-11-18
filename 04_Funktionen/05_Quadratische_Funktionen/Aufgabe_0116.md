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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameterform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=4x^2-11x+15$ und $g(x)=2x^2-x+7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=4*x^2-11*x+15`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2*x^2-x+7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
4x^2-11x+15 &= 2x^2-x+7 &&\quad |-\left(2x^2-x+7\right) \\
2x^2-10x+8 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x-1\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 1, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(1\right) \\
&= 4\cdot\left(1\right)^2-11\cdot\left(1\right)+15 \\
&= 8 \\
y_2 &= f\left(4\right) \\
&= 4\cdot\left(4\right)^2-11\cdot\left(4\right)+15 \\
&= 35
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= 2\cdot\left(1\right)^2-1\cdot\left(1\right)+7 \\
&= 8=y_1 \\
g\left(4\right)
&= 2\cdot\left(4\right)^2-1\cdot\left(4\right)+7 \\
&= 35=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 8\right)$ und $S_2\left(4\mid 35\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=x^2+16x-11$ und $p(x)=3x^2+2x+9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=x^2+16*x-11`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*x^2+2*x+9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
x^2+16x-11 &= 3x^2+2x+9 &&\quad |-\left(3x^2+2x+9\right) \\
-2x^2+14x-20 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x-2\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= 2, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(2\right) \\
&= 1\cdot\left(2\right)^2+16\cdot\left(2\right)-11 \\
&= 25 \\
y_2 &= h\left(5\right) \\
&= 1\cdot\left(5\right)^2+16\cdot\left(5\right)-11 \\
&= 94
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(2\right)
&= 3\cdot\left(2\right)^2+2\cdot\left(2\right)+9 \\
&= 25=y_1 \\
p\left(5\right)
&= 3\cdot\left(5\right)^2+2\cdot\left(5\right)+9 \\
&= 94=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 25\right)$ und $S_2\left(5\mid 94\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-x^2+13x-21$ und $r(x)=x^2-3x+9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-x^2+13*x-21`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=x^2-3*x+9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-x^2+13x-21 &= x^2-3x+9 &&\quad |-\left(x^2-3x+9\right) \\
-2x^2+16x-30 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x-3\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-3 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= 3, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(3\right) \\
&= -1\cdot\left(3\right)^2+13\cdot\left(3\right)-21 \\
&= 9 \\
y_2 &= q\left(5\right) \\
&= -1\cdot\left(5\right)^2+13\cdot\left(5\right)-21 \\
&= 19
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(3\right)
&= 1\cdot\left(3\right)^2-3\cdot\left(3\right)+9 \\
&= 9=y_1 \\
r\left(5\right)
&= 1\cdot\left(5\right)^2-3\cdot\left(5\right)+9 \\
&= 19=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(3\mid 9\right)$ und $S_2\left(5\mid 19\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
