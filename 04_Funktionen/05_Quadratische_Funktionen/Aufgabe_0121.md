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

tags: Quadratische Funktionen, Schnittpunkt, Scheitelpunktsform, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Scheitelpunktsform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=2\left(x-3\right)^2+9$ und $g(x)=\left(x-3\right)^2+10$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*(x-3)^2+9`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=(x-3)^2+10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
2\left(x-3\right)^2+9 &= \left(x-3\right)^2+10 &&\quad |\text{beide Seiten ausmultiplizieren} \\
2x^2-12x+27 &= x^2-6x+19 &&\quad |-\left(x^2-6x+19\right) \\
x^2-6x+8 &= 0 &&\quad |\text{faktorisieren} \\
\left(x-2\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 2, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(2\right) \\
&= 2\cdot\left(\left(2\right)-3\right)^2+9 \\
&= 11 \\
y_2 &= f\left(4\right) \\
&= 2\cdot\left(\left(4\right)-3\right)^2+9 \\
&= 11
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= 1\cdot\left(\left(2\right)-3\right)^2+10 \\
&= 11=y_1 \\
g\left(4\right)
&= 1\cdot\left(\left(4\right)-3\right)^2+10 \\
&= 11=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 11\right)$ und $S_2\left(4\mid 11\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\left(x-4\right)^2+15$ und $p(x)=2\left(x-4\right)^2+11$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=(x-4)^2+15`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2*(x-4)^2+11;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\left(x-4\right)^2+15 &= 2\left(x-4\right)^2+11 &&\quad |\text{beide Seiten ausmultiplizieren} \\
x^2-8x+31 &= 2x^2-16x+43 &&\quad |-\left(2x^2-16x+43\right) \\
-x^2+8x-12 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x-2\right)\left(x-6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 = 0 &\quad \text{oder} \quad x-6 = 0 \\
x_1 &= 2, \qquad x_2 = 6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(2\right) \\
&= 1\cdot\left(\left(2\right)-4\right)^2+15 \\
&= 19 \\
y_2 &= h\left(6\right) \\
&= 1\cdot\left(\left(6\right)-4\right)^2+15 \\
&= 19
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(2\right)
&= 2\cdot\left(\left(2\right)-4\right)^2+11 \\
&= 19=y_1 \\
p\left(6\right)
&= 2\cdot\left(\left(6\right)-4\right)^2+11 \\
&= 19=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 19\right)$ und $S_2\left(6\mid 19\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=4\left(x-5\right)^2+11$ und $r(x)=3\left(x-5\right)^2+12$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=4*(x-5)^2+11`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=3*(x-5)^2+12;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
4\left(x-5\right)^2+11 &= 3\left(x-5\right)^2+12 &&\quad |\text{beide Seiten ausmultiplizieren} \\
4x^2-40x+111 &= 3x^2-30x+87 &&\quad |-\left(3x^2-30x+87\right) \\
x^2-10x+24 &= 0 &&\quad |\text{faktorisieren} \\
\left(x-4\right)\left(x-6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-4 = 0 &\quad \text{oder} \quad x-6 = 0 \\
x_1 &= 4, \qquad x_2 = 6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(4\right) \\
&= 4\cdot\left(\left(4\right)-5\right)^2+11 \\
&= 15 \\
y_2 &= q\left(6\right) \\
&= 4\cdot\left(\left(6\right)-5\right)^2+11 \\
&= 15
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(4\right)
&= 3\cdot\left(\left(4\right)-5\right)^2+12 \\
&= 15=y_1 \\
r\left(6\right)
&= 3\cdot\left(\left(6\right)-5\right)^2+12 \\
&= 15=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(4\mid 15\right)$ und $S_2\left(6\mid 15\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
