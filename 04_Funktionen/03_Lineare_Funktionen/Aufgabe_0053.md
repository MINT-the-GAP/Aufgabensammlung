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

tags: Lineare Funktionen, Schnittpunkt, Dezimalzahlen, Bruchrechnung, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Schnittpunkte der Graphen von vier Paaren linearer Funktionen mit Dezimalzahlen, Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte linearer Funktionen mit gemischten Zahlenarten berechnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=1{,}25x+3{,}25$ und $g(x)=-\frac{3}{10}x+\frac{17}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1.25*x+3.25`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-3/10*x+17/10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 1{,}25x+3{,}25 = -\frac{3}{10}x+\frac{17}{10} \\
\frac{31}{20}x &= -\frac{31}{20} &&\quad |:\frac{31}{20} \\
x_S &= -1
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(-1\right) \\
&= 1{,}25\cdot\left(-1\right)+3{,}25 \\
&= 2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-1\right)
&= -\frac{3}{10}\cdot\left(-1\right)+\frac{17}{10} \\
&= 2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-1\mid 2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=-0{,}5x+3{,}5$ und $p(x)=\frac{2}{3}x-\frac{7}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.5*x+3.5`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2/3*x-7/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff -0{,}5x+3{,}5 = \frac{2}{3}x-\frac{7}{6} \\
-\frac{7}{6}x &= -\frac{14}{3} &&\quad |:\left(-\frac{7}{6}\right) \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(4\right) \\
&= -0{,}5\cdot\left(4\right)+3{,}5 \\
&= \frac{3}{2}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(4\right)
&= \frac{2}{3}\cdot\left(4\right)-\frac{7}{6} \\
&= \frac{3}{2}=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid \frac{3}{2}\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=0{,}6x+0{,}5$ und $r(x)=-1{,}4x-4{,}5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=0.6*x+0.5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-1.4*x-4.5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 0{,}6x+0{,}5 = -1{,}4x-4{,}5 \\
2x &= -5 &&\quad |:2 \\
x_S &= -2{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(-2{,}5\right) \\
&= 0{,}6\cdot\left(-2{,}5\right)+0{,}5 \\
&= -1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-2{,}5\right)
&= -1{,}4\cdot\left(-2{,}5\right)-4{,}5 \\
&= -1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-2{,}5\mid -1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=\frac{5}{12}x-\frac{13}{4}$ und $t(x)=-\frac{1}{4}x-\frac{5}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=5/12*x-13/4`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-1/4*x-5/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff \frac{5}{12}x-\frac{13}{4} = -\frac{1}{4}x-\frac{5}{4} \\
\frac{2}{3}x &= 2 &&\quad |:\frac{2}{3} \\
x_S &= 3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(3\right) \\
&= \frac{5}{12}\cdot\left(3\right)-\frac{13}{4} \\
&= -2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(3\right)
&= -\frac{1}{4}\cdot\left(3\right)-\frac{5}{4} \\
&= -2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(3\mid -2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
