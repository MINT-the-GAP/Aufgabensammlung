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

tags: Lineare Funktionen, Schnittpunkt, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte der Graphen von vier Paaren linearer Funktionen mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte linearer Funktionen mit Dezimalzahlen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=0{,}5x+3$ und $g(x)=-1{,}5x+7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*x+3`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-1.5*x+7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 0{,}5x+3 = -1{,}5x+7 \\
2x &= 4 &&\quad |:2 \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(2\right) \\
&= 0{,}5\cdot\left(2\right)+3 \\
&= 4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= -1{,}5\cdot\left(2\right)+7 \\
&= 4=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 4\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=1{,}2x+6{,}1$ und $p(x)=-0{,}8x+0{,}1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1.2*x+6.1`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.8*x+0.1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff 1{,}2x+6{,}1 = -0{,}8x+0{,}1 \\
2x &= -6 &&\quad |:2 \\
x_S &= -3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(-3\right) \\
&= 1{,}2\cdot\left(-3\right)+6{,}1 \\
&= 2{,}5
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-3\right)
&= -0{,}8\cdot\left(-3\right)+0{,}1 \\
&= 2{,}5=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-3\mid 2{,}5\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=2x-5$ und $r(x)=-0{,}4x-1{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=2*x-5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.4*x-1.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 2x-5 = -0{,}4x-1{,}4 \\
2{,}4x &= 3{,}6 &&\quad |:2{,}4 \\
x_S &= 1{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(1{,}5\right) \\
&= 2\cdot\left(1{,}5\right)-5 \\
&= -2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(1{,}5\right)
&= -0{,}4\cdot\left(1{,}5\right)-1{,}4 \\
&= -2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(1{,}5\mid -2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=0{,}6x+4{,}5$ und $t(x)=-1{,}2x$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=0.6*x+4.5`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-1.2*x;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff 0{,}6x+4{,}5 = -1{,}2x \\
1{,}8x &= -4{,}5 &&\quad |:1{,}8 \\
x_S &= -2{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(-2{,}5\right) \\
&= 0{,}6\cdot\left(-2{,}5\right)+4{,}5 \\
&= 3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(-2{,}5\right)
&= -1{,}2\cdot\left(-2{,}5\right) \\
&= 3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-2{,}5\mid 3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
