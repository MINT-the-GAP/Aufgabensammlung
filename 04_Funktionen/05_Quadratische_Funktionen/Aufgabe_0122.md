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

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=2\left(x+2\right)^2+8$ und $g(x)=\left(x+2\right)^2+9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*(x+2)^2+8`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=(x+2)^2+9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
2\left(x+2\right)^2+8 &= \left(x+2\right)^2+9 &&\quad |\text{beide Seiten ausmultiplizieren} \\
2x^2+8x+16 &= x^2+4x+13 &&\quad |-\left(x^2+4x+13\right) \\
x^2+4x+3 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+3\right)\left(x+1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x+1 = 0 \\
x_1 &= -3, \qquad x_2 = -1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-3\right) \\
&= 2\cdot\left(\left(-3\right)+2\right)^2+8 \\
&= 10 \\
y_2 &= f\left(-1\right) \\
&= 2\cdot\left(\left(-1\right)+2\right)^2+8 \\
&= 10
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-3\right)
&= 1\cdot\left(\left(-3\right)+2\right)^2+9 \\
&= 10=y_1 \\
g\left(-1\right)
&= 1\cdot\left(\left(-1\right)+2\right)^2+9 \\
&= 10=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid 10\right)$ und $S_2\left(-1\mid 10\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-3\left(x+1\right)^2-2$ und $p(x)=-\left(x+1\right)^2-10$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-3*(x+1)^2-2`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-(x+1)^2-10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-3\left(x+1\right)^2-2 &= -\left(x+1\right)^2-10 &&\quad |\text{beide Seiten ausmultiplizieren} \\
-3x^2-6x-5 &= -x^2-2x-11 &&\quad |-\left(-x^2-2x-11\right) \\
-2x^2-4x+6 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x+3\right)\left(x-1\right) &= 0
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
y_1 &= h\left(-3\right) \\
&= -3\cdot\left(\left(-3\right)+1\right)^2-2 \\
&= -14 \\
y_2 &= h\left(1\right) \\
&= -3\cdot\left(\left(1\right)+1\right)^2-2 \\
&= -14
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-3\right)
&= -1\cdot\left(\left(-3\right)+1\right)^2-10 \\
&= -14=y_1 \\
p\left(1\right)
&= -1\cdot\left(\left(1\right)+1\right)^2-10 \\
&= -14=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid -14\right)$ und $S_2\left(1\mid -14\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\left(x-1\right)^2+20$ und $r(x)=2\left(x-1\right)^2+11$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=(x-1)^2+20`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=2*(x-1)^2+11;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\left(x-1\right)^2+20 &= 2\left(x-1\right)^2+11 &&\quad |\text{beide Seiten ausmultiplizieren} \\
x^2-2x+21 &= 2x^2-4x+13 &&\quad |-\left(2x^2-4x+13\right) \\
-x^2+2x+8 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x+2\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= -2, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-2\right) \\
&= 1\cdot\left(\left(-2\right)-1\right)^2+20 \\
&= 29 \\
y_2 &= q\left(4\right) \\
&= 1\cdot\left(\left(4\right)-1\right)^2+20 \\
&= 29
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-2\right)
&= 2\cdot\left(\left(-2\right)-1\right)^2+11 \\
&= 29=y_1 \\
r\left(4\right)
&= 2\cdot\left(\left(4\right)-1\right)^2+11 \\
&= 29=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 29\right)$ und $S_2\left(4\mid 29\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
