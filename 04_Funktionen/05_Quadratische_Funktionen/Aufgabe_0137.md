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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform, Scheitelpunktsform, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-x^2+9x-26$ und $g(x)=-2\left(x-1\right)^2-18$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-x^2+9*x-26`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2*(x-1)^2-18;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-x^2+9x-26 &= -2\left(x-1\right)^2-18 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-x^2+9x-26 &= -2x^2+4x-20 &&\quad |-\left(-2x^2+4x-20\right) \\
x^2+5x-6 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+6\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+6 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -6, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-6\right) \\
&= -1\cdot\left(-6\right)^2+9\cdot\left(-6\right)-26 \\
&= -116 \\
y_2 &= f\left(1\right) \\
&= -1\cdot\left(1\right)^2+9\cdot\left(1\right)-26 \\
&= -18
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-6\right)
&= -2\cdot\left(\left(-6\right)-1\right)^2-18 \\
&= -116=y_1 \\
g\left(1\right)
&= -2\cdot\left(\left(1\right)-1\right)^2-18 \\
&= -18=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-6\mid -116\right)$ und $S_2\left(1\mid -18\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=5x^2-18x+11$ und $p(x)=3\left(x-2\right)^2+19$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5*x^2-18*x+11`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*(x-2)^2+19;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
5x^2-18x+11 &= 3\left(x-2\right)^2+19 &&\quad |\text{rechte Seite ausmultiplizieren} \\
5x^2-18x+11 &= 3x^2-12x+31 &&\quad |-\left(3x^2-12x+31\right) \\
2x^2-6x-20 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x+2\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= -2, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-2\right) \\
&= 5\cdot\left(-2\right)^2-18\cdot\left(-2\right)+11 \\
&= 67 \\
y_2 &= h\left(5\right) \\
&= 5\cdot\left(5\right)^2-18\cdot\left(5\right)+11 \\
&= 46
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= 3\cdot\left(\left(-2\right)-2\right)^2+19 \\
&= 67=y_1 \\
p\left(5\right)
&= 3\cdot\left(\left(5\right)-2\right)^2+19 \\
&= 46=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 67\right)$ und $S_2\left(5\mid 46\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-4x^2-18x-31$ und $r(x)=-3\left(x+3\right)^2-20$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-4*x^2-18*x-31`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-3*(x+3)^2-20;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-4x^2-18x-31 &= -3\left(x+3\right)^2-20 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-4x^2-18x-31 &= -3x^2-18x-47 &&\quad |-\left(-3x^2-18x-47\right) \\
-x^2+16 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x+4\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+4 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= -4, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-4\right) \\
&= -4\cdot\left(-4\right)^2-18\cdot\left(-4\right)-31 \\
&= -23 \\
y_2 &= q\left(4\right) \\
&= -4\cdot\left(4\right)^2-18\cdot\left(4\right)-31 \\
&= -167
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-4\right)
&= -3\cdot\left(\left(-4\right)+3\right)^2-20 \\
&= -23=y_1 \\
r\left(4\right)
&= -3\cdot\left(\left(4\right)+3\right)^2-20 \\
&= -167=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-4\mid -23\right)$ und $S_2\left(4\mid -167\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
