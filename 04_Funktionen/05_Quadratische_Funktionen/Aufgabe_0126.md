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

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=4\left(x-3\right)^2+5$ und $g(x)=2\left(x-3\right)^2+13$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=4*(x-3)^2+5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2*(x-3)^2+13;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
4\left(x-3\right)^2+5 &= 2\left(x-3\right)^2+13 &&\quad |\text{beide Seiten ausmultiplizieren} \\
4x^2-24x+41 &= 2x^2-12x+31 &&\quad |-\left(2x^2-12x+31\right) \\
2x^2-12x+10 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x-1\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= 1, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(1\right) \\
&= 4\cdot\left(\left(1\right)-3\right)^2+5 \\
&= 21 \\
y_2 &= f\left(5\right) \\
&= 4\cdot\left(\left(5\right)-3\right)^2+5 \\
&= 21
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= 2\cdot\left(\left(1\right)-3\right)^2+13 \\
&= 21=y_1 \\
g\left(5\right)
&= 2\cdot\left(\left(5\right)-3\right)^2+13 \\
&= 21=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 21\right)$ und $S_2\left(5\mid 21\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\left(x-4\right)^2+17$ und $p(x)=3\left(x-4\right)^2+15$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=(x-4)^2+17`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*(x-4)^2+15;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\left(x-4\right)^2+17 &= 3\left(x-4\right)^2+15 &&\quad |\text{beide Seiten ausmultiplizieren} \\
x^2-8x+33 &= 3x^2-24x+63 &&\quad |-\left(3x^2-24x+63\right) \\
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
y_1 &= h\left(3\right) \\
&= 1\cdot\left(\left(3\right)-4\right)^2+17 \\
&= 18 \\
y_2 &= h\left(5\right) \\
&= 1\cdot\left(\left(5\right)-4\right)^2+17 \\
&= 18
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(3\right)
&= 3\cdot\left(\left(3\right)-4\right)^2+15 \\
&= 18=y_1 \\
p\left(5\right)
&= 3\cdot\left(\left(5\right)-4\right)^2+15 \\
&= 18=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(3\mid 18\right)$ und $S_2\left(5\mid 18\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-\left(x-5\right)^2+23$ und $r(x)=\left(x-5\right)^2+15$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-(x-5)^2+23`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=(x-5)^2+15;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-\left(x-5\right)^2+23 &= \left(x-5\right)^2+15 &&\quad |\text{beide Seiten ausmultiplizieren} \\
-x^2+10x-2 &= x^2-10x+40 &&\quad |-\left(x^2-10x+40\right) \\
-2x^2+20x-42 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x-3\right)\left(x-7\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-3 = 0 &\quad \text{oder} \quad x-7 = 0 \\
x_1 &= 3, \qquad x_2 = 7
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(3\right) \\
&= -1\cdot\left(\left(3\right)-5\right)^2+23 \\
&= 19 \\
y_2 &= q\left(7\right) \\
&= -1\cdot\left(\left(7\right)-5\right)^2+23 \\
&= 19
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(3\right)
&= 1\cdot\left(\left(3\right)-5\right)^2+15 \\
&= 19=y_1 \\
r\left(7\right)
&= 1\cdot\left(\left(7\right)-5\right)^2+15 \\
&= 19=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(3\mid 19\right)$ und $S_2\left(7\mid 19\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
