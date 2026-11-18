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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Scheitelpunktsform, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=2x^2-12x+39$ und $g(x)=\left(x-1\right)^2+17$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*x^2-12*x+39`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=(x-1)^2+17;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
2x^2-12x+39 &= \left(x-1\right)^2+17 &&\quad |\text{rechte Seite ausmultiplizieren} \\
2x^2-12x+39 &= x^2-2x+18 &&\quad |-\left(x^2-2x+18\right) \\
x^2-10x+21 &= 0 &&\quad |\text{faktorisieren} \\
\left(x-3\right)\left(x-7\right) &= 0
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
y_1 &= f\left(3\right) \\
&= 2\cdot\left(3\right)^2-12\cdot\left(3\right)+39 \\
&= 21 \\
y_2 &= f\left(7\right) \\
&= 2\cdot\left(7\right)^2-12\cdot\left(7\right)+39 \\
&= 53
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(3\right)
&= 1\cdot\left(\left(3\right)-1\right)^2+17 \\
&= 21=y_1 \\
g\left(7\right)
&= 1\cdot\left(\left(7\right)-1\right)^2+17 \\
&= 53=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(3\mid 21\right)$ und $S_2\left(7\mid 53\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=x^2+18$ und $p(x)=2\left(x-2\right)^2+17$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=x^2+18`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2*(x-2)^2+17;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
x^2+18 &= 2\left(x-2\right)^2+17 &&\quad |\text{rechte Seite ausmultiplizieren} \\
x^2+18 &= 2x^2-8x+25 &&\quad |-\left(2x^2-8x+25\right) \\
-x^2+8x-7 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x-1\right)\left(x-7\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-7 = 0 \\
x_1 &= 1, \qquad x_2 = 7
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(1\right) \\
&= 1\cdot\left(1\right)^2+18 \\
&= 19 \\
y_2 &= h\left(7\right) \\
&= 1\cdot\left(7\right)^2+18 \\
&= 67
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(1\right)
&= 2\cdot\left(\left(1\right)-2\right)^2+17 \\
&= 19=y_1 \\
p\left(7\right)
&= 2\cdot\left(\left(7\right)-2\right)^2+17 \\
&= 67=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 19\right)$ und $S_2\left(7\mid 67\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=4x^2-28x+69$ und $r(x)=3\left(x-3\right)^2+18$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=4*x^2-28*x+69`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=3*(x-3)^2+18;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
4x^2-28x+69 &= 3\left(x-3\right)^2+18 &&\quad |\text{rechte Seite ausmultiplizieren} \\
4x^2-28x+69 &= 3x^2-18x+45 &&\quad |-\left(3x^2-18x+45\right) \\
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
&= 4\cdot\left(4\right)^2-28\cdot\left(4\right)+69 \\
&= 21 \\
y_2 &= q\left(6\right) \\
&= 4\cdot\left(6\right)^2-28\cdot\left(6\right)+69 \\
&= 45
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(4\right)
&= 3\cdot\left(\left(4\right)-3\right)^2+18 \\
&= 21=y_1 \\
r\left(6\right)
&= 3\cdot\left(\left(6\right)-3\right)^2+18 \\
&= 45=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(4\mid 21\right)$ und $S_2\left(6\mid 45\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
