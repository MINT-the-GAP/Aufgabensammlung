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

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=0{,}5x+2$ und $g(x)=-\frac{2}{3}x+\frac{13}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*x+2`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2/3*x+13/3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 0{,}5x+2 = -\frac{2}{3}x+\frac{13}{3} \\
\frac{7}{6}x &= \frac{7}{3} &&\quad |:\frac{7}{6} \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(2\right) \\
&= 0{,}5\cdot\left(2\right)+2 \\
&= 3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= -\frac{2}{3}\cdot\left(2\right)+\frac{13}{3} \\
&= 3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=1{,}2x+4{,}6$ und $p(x)=-\frac{3}{4}x-\frac{5}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1.2*x+4.6`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-3/4*x-5/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff 1{,}2x+4{,}6 = -\frac{3}{4}x-\frac{5}{4} \\
\frac{39}{20}x &= -\frac{117}{20} &&\quad |:\frac{39}{20} \\
x_S &= -3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(-3\right) \\
&= 1{,}2\cdot\left(-3\right)+4{,}6 \\
&= 1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-3\right)
&= -\frac{3}{4}\cdot\left(-3\right)-\frac{5}{4} \\
&= 1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-3\mid 1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=0{,}8x-3{,}2$ und $r(x)=-2x+1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=0.8*x-3.2`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-2*x+1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 0{,}8x-3{,}2 = -2x+1 \\
\frac{14}{5}x &= \frac{21}{5} &&\quad |:\frac{14}{5} \\
x_S &= 1{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(1{,}5\right) \\
&= 0{,}8\cdot\left(1{,}5\right)-3{,}2 \\
&= -2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(1{,}5\right)
&= -2\cdot\left(1{,}5\right)+1 \\
&= -2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(1{,}5\mid -2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=\frac{1}{5}x+\frac{14}{5}$ und $t(x)=-\frac{3}{2}x-4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=1/5*x+14/5`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-3/2*x-4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff \frac{1}{5}x+\frac{14}{5} = -\frac{3}{2}x-4 \\
\frac{17}{10}x &= -\frac{34}{5} &&\quad |:\frac{17}{10} \\
x_S &= -4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(-4\right) \\
&= \frac{1}{5}\cdot\left(-4\right)+\frac{14}{5} \\
&= 2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(-4\right)
&= -\frac{3}{2}\cdot\left(-4\right)-4 \\
&= 2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-4\mid 2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
