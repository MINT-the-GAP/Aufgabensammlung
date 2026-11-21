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

tags: Lineare Funktionen, Schnittpunkt, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Schnittpunkte der Graphen von vier Paaren linearer Funktionen mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte linearer Funktionen mit ganzen Zahlen berechnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=2x+7$ und $g(x)=-3x-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*x+7`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-3*x-3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 2x+7 = -3x-3 \\
5x &= -10 &&\quad |:5 \\
x_S &= -2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(-2\right) \\
&= 2\cdot\left(-2\right)+7 \\
&= 3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-2\right)
&= -3\cdot\left(-2\right)-3 \\
&= 3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-2\mid 3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=-2x+3$ und $p(x)=x-9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-2*x+3`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=x-9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff -2x+3 = x-9 \\
-3x &= -12 &&\quad |:\left(-3\right) \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(4\right) \\
&= -2\cdot\left(4\right)+3 \\
&= -5
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(4\right)
&= \left(4\right)-9 \\
&= -5=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid -5\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=3x+5$ und $r(x)=-x-7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=3*x+5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-x-7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 3x+5 = -x-7 \\
4x &= -12 &&\quad |:4 \\
x_S &= -3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(-3\right) \\
&= 3\cdot\left(-3\right)+5 \\
&= -4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-3\right)
&= -\left(-3\right)-7 \\
&= -4=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-3\mid -4\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=-4x+14$ und $t(x)=2x+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-4*x+14`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=2*x+2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff -4x+14 = 2x+2 \\
-6x &= -12 &&\quad |:\left(-6\right) \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(2\right) \\
&= -4\cdot\left(2\right)+14 \\
&= 6
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(2\right)
&= 2\cdot\left(2\right)+2 \\
&= 6=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 6\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt)

</div>

</section>
