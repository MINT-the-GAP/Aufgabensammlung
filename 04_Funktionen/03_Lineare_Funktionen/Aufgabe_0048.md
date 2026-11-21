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

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe den Schnittpunkt der Graphen der beiden linearen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $f(x)=\frac{2}{5}x+\frac{7}{5}$ und $g(x)=-\frac{3}{4}x-\frac{9}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2/5*x+7/5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-3/4*x-9/10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) &\iff \frac{2}{5}x+\frac{7}{5} = -\frac{3}{4}x-\frac{9}{10} \\
\frac{23}{20}x &= -\frac{23}{10} &&\quad |:\frac{23}{20} \\
x_S &= -2
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= f\left(-2\right) \\
&= \frac{2}{5}\cdot\left(-2\right)+\frac{7}{5} \\
&= \frac{3}{5}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-2\right)
&= -\frac{3}{4}\cdot\left(-2\right)-\frac{9}{10} \\
&= \frac{3}{5}=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-2\mid \frac{3}{5}\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $h(x)=\frac{5}{6}x-\frac{9}{4}$ und $p(x)=-\frac{1}{2}x-\frac{1}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5/6*x-9/4`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-1/2*x-1/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) &\iff \frac{5}{6}x-\frac{9}{4} = -\frac{1}{2}x-\frac{1}{4} \\
\frac{4}{3}x &= 2 &&\quad |:\frac{4}{3} \\
x_S &= \frac{3}{2}
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= h\left(\frac{3}{2}\right) \\
&= \frac{5}{6}\cdot\left(\frac{3}{2}\right)-\frac{9}{4} \\
&= -1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(\frac{3}{2}\right)
&= -\frac{1}{2}\cdot\left(\frac{3}{2}\right)-\frac{1}{4} \\
&= -1=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(\frac{3}{2}\mid -1\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $q(x)=\frac{1}{8}x-2$ und $r(x)=-\frac{5}{12}x+\frac{1}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1/8*x-2`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-5/12*x+1/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) &\iff \frac{1}{8}x-2 = -\frac{5}{12}x+\frac{1}{6} \\
\frac{13}{24}x &= \frac{13}{6} &&\quad |:\frac{13}{24} \\
x_S &= 4
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= q\left(4\right) \\
&= \frac{1}{8}\cdot\left(4\right)-2 \\
&= -\frac{3}{2}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(4\right)
&= -\frac{5}{12}\cdot\left(4\right)+\frac{1}{6} \\
&= -\frac{3}{2}=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(4\mid -\frac{3}{2}\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** den Schnittpunkt der Graphen der Funktionen $s(x)=-\frac{2}{3}x-\frac{4}{3}$ und $t(x)=\frac{3}{10}x+\frac{7}{2}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-2/3*x-4/3`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=3/10*x+7/2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) &\iff -\frac{2}{3}x-\frac{4}{3} = \frac{3}{10}x+\frac{7}{2} \\
-\frac{29}{30}x &= \frac{29}{6} &&\quad |:\left(-\frac{29}{30}\right) \\
x_S &= -5
\end{aligned}
$$

Für die zweite Koordinate gilt:

$$
\begin{aligned}
y_S &= s\left(-5\right) \\
&= -\frac{2}{3}\cdot\left(-5\right)-\frac{4}{3} \\
&= 2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
t\left(-5\right)
&= \frac{3}{10}\cdot\left(-5\right)+\frac{7}{2} \\
&= 2=y_S
\end{aligned}
$$

Der Schnittpunkt der Graphen ist $S\left(-5\mid 2\right)$.
****************

@ADetails(1=BE; Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
