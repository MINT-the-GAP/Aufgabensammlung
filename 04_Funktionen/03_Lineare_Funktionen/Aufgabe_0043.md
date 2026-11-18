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

tags: Lineare Funktionen, Schnittpunkt, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte der Graphen von vier Paaren linearer Funktionen mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte linearer Funktionen mit natürlichen Zahlen berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=2x+1$ und $g(x)=-x+7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*x+1`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-x+7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 2x+1 = -x+7 \\
3x &= 6 &&\quad |:3 \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(2\right) \\
&= 2\cdot\left(2\right)+1 \\
&= 5
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= -\left(2\right)+7 \\
&= 5=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 5\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=x+5$ und $p(x)=3x-1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=x+5`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=3*x-1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff x+5 = 3x-1 \\
-2x &= -6 &&\quad |:\left(-2\right) \\
x_S &= 3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(3\right) \\
&= \left(3\right)+5 \\
&= 8
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(3\right)
&= 3\cdot\left(3\right)-1 \\
&= 8=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(3\mid 8\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=-2x+14$ und $r(x)=x+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-2*x+14`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=x+2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff -2x+14 = x+2 \\
-3x &= -12 &&\quad |:\left(-3\right) \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(4\right) \\
&= -2\cdot\left(4\right)+14 \\
&= 6
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(4\right)
&= \left(4\right)+2 \\
&= 6=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid 6\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=2x-6$ und $t(x)=-3x+19$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=2*x-6`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-3*x+19;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff 2x-6 = -3x+19 \\
5x &= 25 &&\quad |:5 \\
x_S &= 5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(5\right) \\
&= 2\cdot\left(5\right)-6 \\
&= 4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(5\right)
&= -3\cdot\left(5\right)+19 \\
&= 4=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(5\mid 4\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

</section>
