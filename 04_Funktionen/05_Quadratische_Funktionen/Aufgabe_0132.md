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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Scheitelpunktsform, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=2x^2+7x+9$ und $g(x)=\left(x+2\right)^2+15$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*x^2+7*x+9`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=(x+2)^2+15;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
2x^2+7x+9 &= \left(x+2\right)^2+15 &&\quad |\text{rechte Seite ausmultiplizieren} \\
2x^2+7x+9 &= x^2+4x+19 &&\quad |-\left(x^2+4x+19\right) \\
x^2+3x-10 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+5\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+5 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -5, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-5\right) \\
&= 2\cdot\left(-5\right)^2+7\cdot\left(-5\right)+9 \\
&= 24 \\
y_2 &= f\left(2\right) \\
&= 2\cdot\left(2\right)^2+7\cdot\left(2\right)+9 \\
&= 31
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-5\right)
&= 1\cdot\left(\left(-5\right)+2\right)^2+15 \\
&= 24=y_1 \\
g\left(2\right)
&= 1\cdot\left(\left(2\right)+2\right)^2+15 \\
&= 31=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-5\mid 24\right)$ und $S_2\left(2\mid 31\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-3x^2+6x-7$ und $p(x)=-\left(x+1\right)^2-16$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-3*x^2+6*x-7`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-(x+1)^2-16;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-3x^2+6x-7 &= -\left(x+1\right)^2-16 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-3x^2+6x-7 &= -x^2-2x-17 &&\quad |-\left(-x^2-2x-17\right) \\
-2x^2+8x+10 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x+1\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= -1, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-1\right) \\
&= -3\cdot\left(-1\right)^2+6\cdot\left(-1\right)-7 \\
&= -16 \\
y_2 &= h\left(5\right) \\
&= -3\cdot\left(5\right)^2+6\cdot\left(5\right)-7 \\
&= -52
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-1\right)
&= -1\cdot\left(\left(-1\right)+1\right)^2-16 \\
&= -16=y_1 \\
p\left(5\right)
&= -1\cdot\left(\left(5\right)+1\right)^2-16 \\
&= -52=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1\mid -16\right)$ und $S_2\left(5\mid -52\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=x^2+x+29$ und $r(x)=2\left(x\right)^2+17$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=x^2+x+29`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=2*(x)^2+17;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
x^2+x+29 &= 2\left(x\right)^2+17 &&\quad |\text{rechte Seite ausmultiplizieren} \\
x^2+x+29 &= 2x^2+17 &&\quad |-\left(2x^2+17\right) \\
-x^2+x+12 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x+3\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= -3, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-3\right) \\
&= 1\cdot\left(-3\right)^2+1\cdot\left(-3\right)+29 \\
&= 35 \\
y_2 &= q\left(4\right) \\
&= 1\cdot\left(4\right)^2+1\cdot\left(4\right)+29 \\
&= 49
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-3\right)
&= 2\cdot\left(\left(-3\right)\right)^2+17 \\
&= 35=y_1 \\
r\left(4\right)
&= 2\cdot\left(\left(4\right)\right)^2+17 \\
&= 49=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid 35\right)$ und $S_2\left(4\mid 49\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
