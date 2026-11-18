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

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=0{,}75x-3{,}25$ und $g(x)=-\frac{2}{5}x+\frac{1}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.75*x-3.25`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-2/5*x+1/5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff 0{,}75x-3{,}25 = -\frac{2}{5}x+\frac{1}{5} \\
\frac{23}{20}x &= \frac{69}{20} &&\quad |:\frac{23}{20} \\
x_S &= 3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(3\right) \\
&= 0{,}75\cdot\left(3\right)-3{,}25 \\
&= -1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(3\right)
&= -\frac{2}{5}\cdot\left(3\right)+\frac{1}{5} \\
&= -1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(3\mid -1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=-1{,}5x+1$ und $p(x)=\frac{5}{6}x+\frac{17}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-1.5*x+1`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=5/6*x+17/3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff -1{,}5x+1 = \frac{5}{6}x+\frac{17}{3} \\
-\frac{7}{3}x &= \frac{14}{3} &&\quad |:\left(-\frac{7}{3}\right) \\
x_S &= -2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(-2\right) \\
&= -1{,}5\cdot\left(-2\right)+1 \\
&= 4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= \frac{5}{6}\cdot\left(-2\right)+\frac{17}{3} \\
&= 4=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-2\mid 4\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=0{,}4x$ und $r(x)=-1{,}2x+4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=0.4*x`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-1.2*x+4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff 0{,}4x = -1{,}2x+4 \\
\frac{8}{5}x &= 4 &&\quad |:\frac{8}{5} \\
x_S &= 2{,}5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(2{,}5\right) \\
&= 0{,}4\cdot\left(2{,}5\right) \\
&= 1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(2{,}5\right)
&= -1{,}2\cdot\left(2{,}5\right)+4 \\
&= 1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2{,}5\mid 1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=\frac{3}{8}x-\frac{7}{8}$ und $t(x)=-\frac{4}{5}x-\frac{22}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=3/8*x-7/8`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-4/5*x-22/5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff \frac{3}{8}x-\frac{7}{8} = -\frac{4}{5}x-\frac{22}{5} \\
\frac{47}{40}x &= -\frac{141}{40} &&\quad |:\frac{47}{40} \\
x_S &= -3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(-3\right) \\
&= \frac{3}{8}\cdot\left(-3\right)-\frac{7}{8} \\
&= -2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(-3\right)
&= -\frac{4}{5}\cdot\left(-3\right)-\frac{22}{5} \\
&= -2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-3\mid -2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
