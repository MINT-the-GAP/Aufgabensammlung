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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Scheitelpunktsform, Bruchrechnung, Dezimalzahlen, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Scheitelpunktsform mit linearen Funktionen mit Bruchrechnung, Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Scheitelpunktsform mit linearen Funktionen berechnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{1}{2}\left(x-1{,}5\right)^2+2$ und $g(x)=0{,}5x+3{,}125$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1/2*(x-1.5)^2+2`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.5*x+3.125;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{1}{2}\left(x-1{,}5\right)^2+2 &= 0{,}5x+3{,}125 &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{1}{2}x^2-\frac{3}{2}x+\frac{25}{8} &= 0{,}5x+3{,}125 &&\quad |-\left(0{,}5x+3{,}125\right) \\
\frac{1}{2}x^2-2x &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{2}x\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 0, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= g\left(0\right) \\
&= 0{,}5\cdot\left(0\right)+3{,}125 \\
&= 3{,}125 \\
y_2 &= g\left(4\right) \\
&= 0{,}5\cdot\left(4\right)+3{,}125 \\
&= 5{,}125
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(0\right)
&= \frac{1}{2}\cdot\left(\left(0\right)-1{,}5\right)^2+2 \\
&= 3{,}125=y_1 \\
f\left(4\right)
&= \frac{1}{2}\cdot\left(\left(4\right)-1{,}5\right)^2+2 \\
&= 5{,}125=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid 3{,}125\right)$ und $S_2\left(4\mid 5{,}125\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}75\left(x+1\right)^2+\frac{1}{3}$ und $p(x)=-0{,}75x-\frac{23}{12}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.75*(x+1)^2+1/3`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.75*x-23/12;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}75\left(x+1\right)^2+\frac{1}{3} &= -0{,}75x-\frac{23}{12} &&\quad |\text{linke Seite ausmultiplizieren} \\
-0{,}75x^2-\frac{3}{2}x-\frac{5}{12} &= -0{,}75x-\frac{23}{12} &&\quad |-\left(-0{,}75x-\frac{23}{12}\right) \\
-0{,}75x^2-\frac{3}{4}x+\frac{3}{2} &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x+2\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -2, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= p\left(-2\right) \\
&= -0{,}75\cdot\left(-2\right)-\frac{23}{12} \\
&= -\frac{5}{12} \\
y_2 &= p\left(1\right) \\
&= -0{,}75\cdot\left(1\right)-\frac{23}{12} \\
&= -\frac{8}{3}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -0{,}75\cdot\left(\left(-2\right)+1\right)^2+\frac{1}{3} \\
&= -\frac{5}{12}=y_1 \\
h\left(1\right)
&= -0{,}75\cdot\left(\left(1\right)+1\right)^2+\frac{1}{3} \\
&= -\frac{8}{3}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid -\frac{5}{12}\right)$ und $S_2\left(1\mid -\frac{8}{3}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{2}{5}\left(x-2{,}5\right)^2-1$ und $r(x)=-0{,}2x+0{,}7$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=2/5*(x-2.5)^2-1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.2*x+0.7;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{2}{5}\left(x-2{,}5\right)^2-1 &= -0{,}2x+0{,}7 &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{2}{5}x^2-2x+\frac{3}{2} &= -0{,}2x+0{,}7 &&\quad |-\left(-0{,}2x+0{,}7\right) \\
\frac{2}{5}x^2-\frac{9}{5}x+\frac{4}{5} &= 0 &&\quad |\text{faktorisieren} \\
\frac{2}{5}\left(x-0{,}5\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}5\right) \\
&= -0{,}2\cdot\left(0{,}5\right)+0{,}7 \\
&= 0{,}6 \\
y_2 &= r\left(4\right) \\
&= -0{,}2\cdot\left(4\right)+0{,}7 \\
&= -0{,}1
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}5\right)
&= \frac{2}{5}\cdot\left(\left(0{,}5\right)-2{,}5\right)^2-1 \\
&= 0{,}6=y_1 \\
q\left(4\right)
&= \frac{2}{5}\cdot\left(\left(4\right)-2{,}5\right)^2-1 \\
&= -0{,}1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 0{,}6\right)$ und $S_2\left(4\mid -0{,}1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-\frac{1}{6}\left(x+1{,}2\right)^2+2{,}5$ und $t(x)=-0{,}1x+2{,}02$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-1/6*(x+1.2)^2+2.5`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-0.1*x+2.02;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-\frac{1}{6}\left(x+1{,}2\right)^2+2{,}5 &= -0{,}1x+2{,}02 &&\quad |\text{linke Seite ausmultiplizieren} \\
-\frac{1}{6}x^2-\frac{2}{5}x+\frac{113}{50} &= -0{,}1x+2{,}02 &&\quad |-\left(-0{,}1x+2{,}02\right) \\
-\frac{1}{6}x^2-\frac{3}{10}x+\frac{6}{25} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{6}\left(x+2{,}4\right)\left(x-0{,}6\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2{,}4 = 0 &\quad \text{oder} \quad x-0{,}6 = 0 \\
x_1 &= -2{,}4, \qquad x_2 = 0{,}6
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-2{,}4\right) \\
&= -0{,}1\cdot\left(-2{,}4\right)+2{,}02 \\
&= 2{,}26 \\
y_2 &= t\left(0{,}6\right) \\
&= -0{,}1\cdot\left(0{,}6\right)+2{,}02 \\
&= 1{,}96
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-2{,}4\right)
&= -\frac{1}{6}\cdot\left(\left(-2{,}4\right)+1{,}2\right)^2+2{,}5 \\
&= 2{,}26=y_1 \\
s\left(0{,}6\right)
&= -\frac{1}{6}\cdot\left(\left(0{,}6\right)+1{,}2\right)^2+2{,}5 \\
&= 1{,}96=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2{,}4\mid 2{,}26\right)$ und $S_2\left(0{,}6\mid 1{,}96\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
