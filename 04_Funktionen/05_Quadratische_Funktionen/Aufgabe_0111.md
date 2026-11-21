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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameterform berechnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=2x^2-2x+6$ und $g(x)=x^2+x+4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*x^2-2*x+6`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=x^2+x+4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
2x^2-2x+6 &= x^2+x+4 &&\quad |-\left(x^2+x+4\right) \\
x^2-3x+2 &= 0 &&\quad |\text{faktorisieren} \\
\left(x-1\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= 1, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(1\right) \\
&= 2\cdot\left(1\right)^2-2\cdot\left(1\right)+6 \\
&= 6 \\
y_2 &= f\left(2\right) \\
&= 2\cdot\left(2\right)^2-2\cdot\left(2\right)+6 \\
&= 10
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= 1\cdot\left(1\right)^2+1\cdot\left(1\right)+4 \\
&= 6=y_1 \\
g\left(2\right)
&= 1\cdot\left(2\right)^2+1\cdot\left(2\right)+4 \\
&= 10=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 6\right)$ und $S_2\left(2\mid 10\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=x^2+2x+2$ und $p(x)=2x^2-2x+5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=x^2+2*x+2`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2*x^2-2*x+5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
x^2+2x+2 &= 2x^2-2x+5 &&\quad |-\left(2x^2-2x+5\right) \\
-x^2+4x-3 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x-1\right)\left(x-3\right) &= 0
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
y_1 &= h\left(1\right) \\
&= 1\cdot\left(1\right)^2+2\cdot\left(1\right)+2 \\
&= 5 \\
y_2 &= h\left(3\right) \\
&= 1\cdot\left(3\right)^2+2\cdot\left(3\right)+2 \\
&= 17
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(1\right)
&= 2\cdot\left(1\right)^2-2\cdot\left(1\right)+5 \\
&= 5=y_1 \\
p\left(3\right)
&= 2\cdot\left(3\right)^2-2\cdot\left(3\right)+5 \\
&= 17=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 5\right)$ und $S_2\left(3\mid 17\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=4x^2-3x+14$ und $r(x)=3x^2+3x+6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=4*x^2-3*x+14`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=3*x^2+3*x+6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
4x^2-3x+14 &= 3x^2+3x+6 &&\quad |-\left(3x^2+3x+6\right) \\
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
y_1 &= q\left(2\right) \\
&= 4\cdot\left(2\right)^2-3\cdot\left(2\right)+14 \\
&= 24 \\
y_2 &= q\left(4\right) \\
&= 4\cdot\left(4\right)^2-3\cdot\left(4\right)+14 \\
&= 66
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(2\right)
&= 3\cdot\left(2\right)^2+3\cdot\left(2\right)+6 \\
&= 24=y_1 \\
r\left(4\right)
&= 3\cdot\left(4\right)^2+3\cdot\left(4\right)+6 \\
&= 66=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 24\right)$ und $S_2\left(4\mid 66\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
