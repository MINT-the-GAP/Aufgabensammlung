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

tags: Lineare Funktionen, Schnittpunkt, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte der Graphen von vier Paaren linearer Funktionen mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte linearer Funktionen mit Bruchrechnung berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=\frac{1}{2}x+2$ und $g(x)=-\frac{1}{3}x+\frac{11}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1/2*x+2`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-1/3*x+11/3;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff \frac{1}{2}x+2 = -\frac{1}{3}x+\frac{11}{3} \\
\frac{5}{6}x &= \frac{5}{3} &&\quad |:\frac{5}{6} \\
x_S &= 2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(2\right) \\
&= \frac{1}{2}\cdot\left(2\right)+2 \\
&= 3
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(2\right)
&= -\frac{1}{3}\cdot\left(2\right)+\frac{11}{3} \\
&= 3=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(2\mid 3\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=\frac{3}{4}x+\frac{13}{4}$ und $p(x)=-2x-5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=3/4*x+13/4`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-2*x-5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff \frac{3}{4}x+\frac{13}{4} = -2x-5 \\
\frac{11}{4}x &= -\frac{33}{4} &&\quad |:\frac{11}{4} \\
x_S &= -3
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(-3\right) \\
&= \frac{3}{4}\cdot\left(-3\right)+\frac{13}{4} \\
&= 1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-3\right)
&= -2\cdot\left(-3\right)-5 \\
&= 1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-3\mid 1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=-\frac{5}{6}x+\frac{4}{3}$ und $r(x)=\frac{1}{5}x-\frac{14}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-5/6*x+4/3`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1/5*x-14/5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff -\frac{5}{6}x+\frac{4}{3} = \frac{1}{5}x-\frac{14}{5} \\
-\frac{31}{30}x &= -\frac{62}{15} &&\quad |:\left(-\frac{31}{30}\right) \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(4\right) \\
&= -\frac{5}{6}\cdot\left(4\right)+\frac{4}{3} \\
&= -2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(4\right)
&= \frac{1}{5}\cdot\left(4\right)-\frac{14}{5} \\
&= -2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid -2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=2x+\frac{1}{2}$ und $t(x)=-\frac{3}{8}x+\frac{23}{8}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=2*x+1/2`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-3/8*x+23/8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff 2x+\frac{1}{2} = -\frac{3}{8}x+\frac{23}{8} \\
\frac{19}{8}x &= \frac{19}{8} &&\quad |:\frac{19}{8} \\
x_S &= 1
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(1\right) \\
&= 2\cdot\left(1\right)+\frac{1}{2} \\
&= \frac{5}{2}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(1\right)
&= -\frac{3}{8}\cdot\left(1\right)+\frac{23}{8} \\
&= \frac{5}{2}=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(1\mid \frac{5}{2}\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
