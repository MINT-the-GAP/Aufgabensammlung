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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Scheitelpunktsform, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Scheitelpunktsform mit linearen Funktionen mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Scheitelpunktsform mit linearen Funktionen berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\left(x+2\right)^2-1$ und $g(x)=2x+6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=(x+2)^2-1`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2*x+6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\left(x+2\right)^2-1 &= 2x+6 &&\quad |\text{linke Seite ausmultiplizieren} \\
x^2+4x+3 &= 2x+6 &&\quad |-\left(2x+6\right) \\
x^2+2x-3 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+3\right)\left(x-1\right) &= 0
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
y_1 &= g\left(-3\right) \\
&= 2\cdot\left(-3\right)+6 \\
&= 0 \\
y_2 &= g\left(1\right) \\
&= 2\cdot\left(1\right)+6 \\
&= 8
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(-3\right)
&= 1\cdot\left(\left(-3\right)+2\right)^2-1 \\
&= 0=y_1 \\
f\left(1\right)
&= 1\cdot\left(\left(1\right)+2\right)^2-1 \\
&= 8=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid 0\right)$ und $S_2\left(1\mid 8\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-2\left(x-1\right)^2+3$ und $p(x)=4x-7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-2*(x-1)^2+3`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=4*x-7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-2\left(x-1\right)^2+3 &= 4x-7 &&\quad |\text{linke Seite ausmultiplizieren} \\
-2x^2+4x+1 &= 4x-7 &&\quad |-\left(4x-7\right) \\
-2x^2+8 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x+2\right)\left(x-2\right) &= 0
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
y_1 &= p\left(-2\right) \\
&= 4\cdot\left(-2\right)-7 \\
&= -15 \\
y_2 &= p\left(2\right) \\
&= 4\cdot\left(2\right)-7 \\
&= 1
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -2\cdot\left(\left(-2\right)-1\right)^2+3 \\
&= -15=y_1 \\
h\left(2\right)
&= -2\cdot\left(\left(2\right)-1\right)^2+3 \\
&= 1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid -15\right)$ und $S_2\left(2\mid 1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=3\left(x+2\right)^2-4$ und $r(x)=3x+20$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=3*(x+2)^2-4`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=3*x+20;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
3\left(x+2\right)^2-4 &= 3x+20 &&\quad |\text{linke Seite ausmultiplizieren} \\
3x^2+12x+8 &= 3x+20 &&\quad |-\left(3x+20\right) \\
3x^2+9x-12 &= 0 &&\quad |\text{faktorisieren} \\
3\left(x+4\right)\left(x-1\right) &= 0
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
y_1 &= r\left(-4\right) \\
&= 3\cdot\left(-4\right)+20 \\
&= 8 \\
y_2 &= r\left(1\right) \\
&= 3\cdot\left(1\right)+20 \\
&= 23
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(-4\right)
&= 3\cdot\left(\left(-4\right)+2\right)^2-4 \\
&= 8=y_1 \\
q\left(1\right)
&= 3\cdot\left(\left(1\right)+2\right)^2-4 \\
&= 23=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-4\mid 8\right)$ und $S_2\left(1\mid 23\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-\left(x-3\right)^2+2$ und $t(x)=2x-7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-(x-3)^2+2`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=2*x-7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-\left(x-3\right)^2+2 &= 2x-7 &&\quad |\text{linke Seite ausmultiplizieren} \\
-x^2+6x-7 &= 2x-7 &&\quad |-\left(2x-7\right) \\
-x^2+4x &= 0 &&\quad |\text{faktorisieren} \\
-x\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 0, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(0\right) \\
&= 2\cdot\left(0\right)-7 \\
&= -7 \\
y_2 &= t\left(4\right) \\
&= 2\cdot\left(4\right)-7 \\
&= 1
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(0\right)
&= -1\cdot\left(\left(0\right)-3\right)^2+2 \\
&= -7=y_1 \\
s\left(4\right)
&= -1\cdot\left(\left(4\right)-3\right)^2+2 \\
&= 1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid -7\right)$ und $S_2\left(4\mid 1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

</section>
