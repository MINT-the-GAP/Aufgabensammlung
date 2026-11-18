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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameterform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-x^2+7x-10$ und $g(x)=-2x^2+4x-6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-x^2+7*x-10`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2*x^2+4*x-6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-x^2+7x-10 &= -2x^2+4x-6 &&\quad |-\left(-2x^2+4x-6\right) \\
x^2+3x-4 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+4\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+4 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -4, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-4\right) \\
&= -1\cdot\left(-4\right)^2+7\cdot\left(-4\right)-10 \\
&= -54 \\
y_2 &= f\left(1\right) \\
&= -1\cdot\left(1\right)^2+7\cdot\left(1\right)-10 \\
&= -4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-4\right)
&= -2\cdot\left(-4\right)^2+4\cdot\left(-4\right)-6 \\
&= -54=y_1 \\
g\left(1\right)
&= -2\cdot\left(1\right)^2+4\cdot\left(1\right)-6 \\
&= -4=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-4\mid -54\right)$ und $S_2\left(1\mid -4\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=5x^2-4x-5$ und $p(x)=3x^2-2x+7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5*x^2-4*x-5`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*x^2-2*x+7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
5x^2-4x-5 &= 3x^2-2x+7 &&\quad |-\left(3x^2-2x+7\right) \\
2x^2-2x-12 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x+2\right)\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= -2, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-2\right) \\
&= 5\cdot\left(-2\right)^2-4\cdot\left(-2\right)-5 \\
&= 23 \\
y_2 &= h\left(3\right) \\
&= 5\cdot\left(3\right)^2-4\cdot\left(3\right)-5 \\
&= 28
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= 3\cdot\left(-2\right)^2-2\cdot\left(-2\right)+7 \\
&= 23=y_1 \\
p\left(3\right)
&= 3\cdot\left(3\right)^2-2\cdot\left(3\right)+7 \\
&= 28=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 23\right)$ und $S_2\left(3\mid 28\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-4x^2-x-5$ und $r(x)=-3x^2+x-8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-4*x^2-x-5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-3*x^2+x-8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-4x^2-x-5 &= -3x^2+x-8 &&\quad |-\left(-3x^2+x-8\right) \\
-x^2-2x+3 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x+3\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -3, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-3\right) \\
&= -4\cdot\left(-3\right)^2-1\cdot\left(-3\right)-5 \\
&= -38 \\
y_2 &= q\left(1\right) \\
&= -4\cdot\left(1\right)^2-1\cdot\left(1\right)-5 \\
&= -10
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-3\right)
&= -3\cdot\left(-3\right)^2+1\cdot\left(-3\right)-8 \\
&= -38=y_1 \\
r\left(1\right)
&= -3\cdot\left(1\right)^2+1\cdot\left(1\right)-8 \\
&= -10=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid -38\right)$ und $S_2\left(1\mid -10\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
