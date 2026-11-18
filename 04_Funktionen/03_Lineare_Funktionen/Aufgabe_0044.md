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

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=4x+5$ und $g(x)=-2x+11$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=4*x+5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2*x+11;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 4x+5 = -2x+11 \\
6x &= 6 &&\quad |:6 \\
x_S &= 1
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(1\right) \\
&= 4\cdot\left(1\right)+5 \\
&= 9
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= -2\cdot\left(1\right)+11 \\
&= 9=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(1\mid 9\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=-x+5$ und $p(x)=5x-7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-x+5`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=5*x-7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff -x+5 = 5x-7 \\
-6x &= -12 &&\quad |:\left(-6\right) \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(2\right) \\
&= -\left(2\right)+5 \\
&= 3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(2\right)
&= 5\cdot\left(2\right)-7 \\
&= 3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=3x-3$ und $r(x)=-4x+18$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=3*x-3`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-4*x+18;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 3x-3 = -4x+18 \\
7x &= 21 &&\quad |:7 \\
x_S &= 3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(3\right) \\
&= 3\cdot\left(3\right)-3 \\
&= 6
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(3\right)
&= -4\cdot\left(3\right)+18 \\
&= 6=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(3\mid 6\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=2x-1$ und $t(x)=-x+11$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=2*x-1`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-x+11;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff 2x-1 = -x+11 \\
3x &= 12 &&\quad |:3 \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(4\right) \\
&= 2\cdot\left(4\right)-1 \\
&= 7
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(4\right)
&= -\left(4\right)+11 \\
&= 7=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid 7\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

</section>
