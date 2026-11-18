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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform, Scheitelpunktsform, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=4x^2-36x+83$ und $g(x)=2\left(x-4\right)^2+19$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=4*x^2-36*x+83`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2*(x-4)^2+19;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
4x^2-36x+83 &= 2\left(x-4\right)^2+19 &&\quad |\text{rechte Seite ausmultiplizieren} \\
4x^2-36x+83 &= 2x^2-16x+51 &&\quad |-\left(2x^2-16x+51\right) \\
2x^2-20x+32 &= 0 &&\quad |\text{faktorisieren} \\
2\left(x-2\right)\left(x-8\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 = 0 &\quad \text{oder} \quad x-8 = 0 \\
x_1 &= 2, \qquad x_2 = 8
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(2\right) \\
&= 4\cdot\left(2\right)^2-36\cdot\left(2\right)+83 \\
&= 27 \\
y_2 &= f\left(8\right) \\
&= 4\cdot\left(8\right)^2-36\cdot\left(8\right)+83 \\
&= 51
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= 2\cdot\left(\left(2\right)-4\right)^2+19 \\
&= 27=y_1 \\
g\left(8\right)
&= 2\cdot\left(\left(8\right)-4\right)^2+19 \\
&= 51=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 27\right)$ und $S_2\left(8\mid 51\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=x^2+16x-25$ und $p(x)=3\left(x-1\right)^2+20$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=x^2+16*x-25`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*(x-1)^2+20;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
x^2+16x-25 &= 3\left(x-1\right)^2+20 &&\quad |\text{rechte Seite ausmultiplizieren} \\
x^2+16x-25 &= 3x^2-6x+23 &&\quad |-\left(3x^2-6x+23\right) \\
-2x^2+22x-48 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x-3\right)\left(x-8\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-3 = 0 &\quad \text{oder} \quad x-8 = 0 \\
x_1 &= 3, \qquad x_2 = 8
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(3\right) \\
&= 1\cdot\left(3\right)^2+16\cdot\left(3\right)-25 \\
&= 32 \\
y_2 &= h\left(8\right) \\
&= 1\cdot\left(8\right)^2+16\cdot\left(8\right)-25 \\
&= 167
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(3\right)
&= 3\cdot\left(\left(3\right)-1\right)^2+20 \\
&= 32=y_1 \\
p\left(8\right)
&= 3\cdot\left(\left(8\right)-1\right)^2+20 \\
&= 167=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(3\mid 32\right)$ und $S_2\left(8\mid 167\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-x^2+22x-55$ und $r(x)=\left(x-2\right)^2+21$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-x^2+22*x-55`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=(x-2)^2+21;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-x^2+22x-55 &= \left(x-2\right)^2+21 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-x^2+22x-55 &= x^2-4x+25 &&\quad |-\left(x^2-4x+25\right) \\
-2x^2+26x-80 &= 0 &&\quad |\text{faktorisieren} \\
-2\left(x-5\right)\left(x-8\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-5 = 0 &\quad \text{oder} \quad x-8 = 0 \\
x_1 &= 5, \qquad x_2 = 8
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(5\right) \\
&= -1\cdot\left(5\right)^2+22\cdot\left(5\right)-55 \\
&= 30 \\
y_2 &= q\left(8\right) \\
&= -1\cdot\left(8\right)^2+22\cdot\left(8\right)-55 \\
&= 57
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(5\right)
&= 1\cdot\left(\left(5\right)-2\right)^2+21 \\
&= 30=y_1 \\
r\left(8\right)
&= 1\cdot\left(\left(8\right)-2\right)^2+21 \\
&= 57=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(5\mid 30\right)$ und $S_2\left(8\mid 57\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt)

</div>

</section>
