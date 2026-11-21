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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Bruchrechnung, Dezimalzahlen, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Parameterform mit linearen Funktionen mit Bruchrechnung, Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Parameterform mit linearen Funktionen berechnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=0{,}5x^2-\frac{4}{3}x+2{,}5$ und $g(x)=\frac{2}{3}x+1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*x^2-4/3*x+2.5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2/3*x+1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
0{,}5x^2-\frac{4}{3}x+2{,}5 &= \frac{2}{3}x+1 &&\quad |-\left(\frac{2}{3}x+1\right) \\
0{,}5x^2-2x+1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x-1\right)\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= 1, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= g\left(1\right) \\
&= \frac{2}{3}\cdot\left(1\right)+1 \\
&= \frac{5}{3} \\
y_2 &= g\left(3\right) \\
&= \frac{2}{3}\cdot\left(3\right)+1 \\
&= 3
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(1\right)
&= 0{,}5\cdot\left(1\right)^2-\frac{4}{3}\cdot\left(1\right)+2{,}5 \\
&= \frac{5}{3}=y_1 \\
f\left(3\right)
&= 0{,}5\cdot\left(3\right)^2-\frac{4}{3}\cdot\left(3\right)+2{,}5 \\
&= 3=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid \frac{5}{3}\right)$ und $S_2\left(3\mid 3\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-\frac{3}{4}x^2+1{,}2x+2{,}8$ und $p(x)=1{,}2x-\frac{1}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-3/4*x^2+1.2*x+2.8`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=1.2*x-1/5;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-\frac{3}{4}x^2+1{,}2x+2{,}8 &= 1{,}2x-\frac{1}{5} &&\quad |-\left(1{,}2x-\frac{1}{5}\right) \\
-\frac{3}{4}x^2+3 &= 0 &&\quad |\text{faktorisieren} \\
-\frac{3}{4}\left(x+2\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -2, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= p\left(-2\right) \\
&= 1{,}2\cdot\left(-2\right)-\frac{1}{5} \\
&= -\frac{13}{5} \\
y_2 &= p\left(2\right) \\
&= 1{,}2\cdot\left(2\right)-\frac{1}{5} \\
&= \frac{11}{5}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -\frac{3}{4}\cdot\left(-2\right)^2+1{,}2\cdot\left(-2\right)+2{,}8 \\
&= -\frac{13}{5}=y_1 \\
h\left(2\right)
&= -\frac{3}{4}\cdot\left(2\right)^2+1{,}2\cdot\left(2\right)+2{,}8 \\
&= \frac{11}{5}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid -\frac{13}{5}\right)$ und $S_2\left(2\mid \frac{11}{5}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=0{,}4x^2-3x+\frac{3}{4}$ und $r(x)=-2x+\frac{3}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=0.4*x^2-3*x+3/4`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-2*x+3/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
0{,}4x^2-3x+\frac{3}{4} &= -2x+\frac{3}{4} &&\quad |-\left(-2x+\frac{3}{4}\right) \\
0{,}4x^2-x &= 0 &&\quad |\text{faktorisieren} \\
0{,}4x\left(x-\frac{5}{2}\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-\frac{5}{2} = 0 \\
x_1 &= 0, \qquad x_2 = \frac{5}{2}
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0\right) \\
&= -2\cdot\left(0\right)+\frac{3}{4} \\
&= \frac{3}{4} \\
y_2 &= r\left(\frac{5}{2}\right) \\
&= -2\cdot\left(\frac{5}{2}\right)+\frac{3}{4} \\
&= -\frac{17}{4}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0\right)
&= 0{,}4\cdot\left(0\right)^2-3\cdot\left(0\right)+\frac{3}{4} \\
&= \frac{3}{4}=y_1 \\
q\left(\frac{5}{2}\right)
&= 0{,}4\cdot\left(\frac{5}{2}\right)^2-3\cdot\left(\frac{5}{2}\right)+\frac{3}{4} \\
&= -\frac{17}{4}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid \frac{3}{4}\right)$ und $S_2\left(\frac{5}{2}\mid -\frac{17}{4}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-\frac{1}{6}x^2+\frac{53}{60}x+2{,}5$ und $t(x)=0{,}8x+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-1/6*x^2+53/60*x+2.5`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=0.8*x+2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-\frac{1}{6}x^2+\frac{53}{60}x+2{,}5 &= 0{,}8x+2 &&\quad |-\left(0{,}8x+2\right) \\
-\frac{1}{6}x^2+\frac{1}{12}x+0{,}5 &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{6}\left(x+1{,}5\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}5 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -1{,}5, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-1{,}5\right) \\
&= 0{,}8\cdot\left(-1{,}5\right)+2 \\
&= \frac{4}{5} \\
y_2 &= t\left(2\right) \\
&= 0{,}8\cdot\left(2\right)+2 \\
&= \frac{18}{5}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-1{,}5\right)
&= -\frac{1}{6}\cdot\left(-1{,}5\right)^2+\frac{53}{60}\cdot\left(-1{,}5\right)+2{,}5 \\
&= \frac{4}{5}=y_1 \\
s\left(2\right)
&= -\frac{1}{6}\cdot\left(2\right)^2+\frac{53}{60}\cdot\left(2\right)+2{,}5 \\
&= \frac{18}{5}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid \frac{4}{5}\right)$ und $S_2\left(2\mid \frac{18}{5}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
