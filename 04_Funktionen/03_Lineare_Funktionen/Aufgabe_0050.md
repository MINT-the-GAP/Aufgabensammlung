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

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=1{,}25x-6$ und $g(x)=-0{,}75x+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1.25*x-6`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-0.75*x+2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 1{,}25x-6 = -0{,}75x+2 \\
2x &= 8 &&\quad |:2 \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(4\right) \\
&= 1{,}25\cdot\left(4\right)-6 \\
&= -1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(4\right)
&= -0{,}75\cdot\left(4\right)+2 \\
&= -1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid -1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=2{,}4x+0{,}6$ und $p(x)=-1{,}6x-5{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=2.4*x+0.6`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-1.6*x-5.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff 2{,}4x+0{,}6 = -1{,}6x-5{,}4 \\
4x &= -6 &&\quad |:4 \\
x_S &= -1{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(-1{,}5\right) \\
&= 2{,}4\cdot\left(-1{,}5\right)+0{,}6 \\
&= -3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-1{,}5\right)
&= -1{,}6\cdot\left(-1{,}5\right)-5{,}4 \\
&= -3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-1{,}5\mid -3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=0{,}8x+4{,}1$ und $r(x)=-2x+5{,}5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=0.8*x+4.1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-2*x+5.5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 0{,}8x+4{,}1 = -2x+5{,}5 \\
2{,}8x &= 1{,}4 &&\quad |:2{,}8 \\
x_S &= 0{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(0{,}5\right) \\
&= 0{,}8\cdot\left(0{,}5\right)+4{,}1 \\
&= 4{,}5
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(0{,}5\right)
&= -2\cdot\left(0{,}5\right)+5{,}5 \\
&= 4{,}5=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(0{,}5\mid 4{,}5\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=-0{,}5x-0{,}8$ und $t(x)=1{,}5x+7{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.5*x-0.8`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=1.5*x+7.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff -0{,}5x-0{,}8 = 1{,}5x+7{,}2 \\
-2x &= 8 &&\quad |:\left(-2\right) \\
x_S &= -4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(-4\right) \\
&= -0{,}5\cdot\left(-4\right)-0{,}8 \\
&= 1{,}2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(-4\right)
&= 1{,}5\cdot\left(-4\right)+7{,}2 \\
&= 1{,}2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-4\mid 1{,}2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
