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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Parameterform mit linearen Funktionen mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Parameterform mit linearen Funktionen berechnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-x^2+3x+3$ und $g(x)=2x-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-x^2+3*x+3`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2*x-3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-x^2+3x+3 &= 2x-3 &&\quad |-\left(2x-3\right) \\
-x^2+x+6 &= 0 &&\quad |\text{faktorisieren} \\
-\left(x+2\right)\left(x-3\right) &= 0
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
y_1 &= g\left(-2\right) \\
&= 2\cdot\left(-2\right)-3 \\
&= -7 \\
y_2 &= g\left(3\right) \\
&= 2\cdot\left(3\right)-3 \\
&= 3
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(-2\right)
&= -1\cdot\left(-2\right)^2+3\cdot\left(-2\right)+3 \\
&= -7=y_1 \\
f\left(3\right)
&= -1\cdot\left(3\right)^2+3\cdot\left(3\right)+3 \\
&= 3=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid -7\right)$ und $S_2\left(3\mid 3\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=2x^2-5x$ und $p(x)=-3x+4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=2*x^2-5*x`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-3*x+4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
2x^2-5x &= -3x+4 &&\quad |-\left(-3x+4\right) \\
2x^2-2x-4 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x+1\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -1, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= p\left(-1\right) \\
&= -3\cdot\left(-1\right)+4 \\
&= 7 \\
y_2 &= p\left(2\right) \\
&= -3\cdot\left(2\right)+4 \\
&= -2
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-1\right)
&= 2\cdot\left(-1\right)^2-5\cdot\left(-1\right) \\
&= 7=y_1 \\
h\left(2\right)
&= 2\cdot\left(2\right)^2-5\cdot\left(2\right) \\
&= -2=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1\mid 7\right)$ und $S_2\left(2\mid -2\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-2x^2-3x+1$ und $r(x)=x-5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-2*x^2-3*x+1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=x-5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-2x^2-3x+1 &= x-5 &&\quad |-\left(x-5\right) \\
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
y_1 &= r\left(-3\right) \\
&= 1\cdot\left(-3\right)-5 \\
&= -8 \\
y_2 &= r\left(1\right) \\
&= 1\cdot\left(1\right)-5 \\
&= -4
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(-3\right)
&= -2\cdot\left(-3\right)^2-3\cdot\left(-3\right)+1 \\
&= -8=y_1 \\
q\left(1\right)
&= -2\cdot\left(1\right)^2-3\cdot\left(1\right)+1 \\
&= -4=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid -8\right)$ und $S_2\left(1\mid -4\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=x^2-9$ und $t(x)=-2x-1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=x^2-9`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-2*x-1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
x^2-9 &= -2x-1 &&\quad |-\left(-2x-1\right) \\
x^2+2x-8 &= 0 &&\quad |\text{faktorisieren} \\
\left(x+4\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+4 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -4, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-4\right) \\
&= -2\cdot\left(-4\right)-1 \\
&= 7 \\
y_2 &= t\left(2\right) \\
&= -2\cdot\left(2\right)-1 \\
&= -5
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-4\right)
&= 1\cdot\left(-4\right)^2-9 \\
&= 7=y_1 \\
s\left(2\right)
&= 1\cdot\left(2\right)^2-9 \\
&= -5=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-4\mid 7\right)$ und $S_2\left(2\mid -5\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt)

</div>

</section>
