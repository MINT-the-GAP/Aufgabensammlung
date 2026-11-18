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

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{3}{5}x^2-1{,}7x+2{,}05$ und $g(x)=0{,}7x+\frac{1}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=3/5*x^2-1.7*x+2.05`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=0.7*x+1/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{3}{5}x^2-1{,}7x+2{,}05 &= 0{,}7x+\frac{1}{4} &&\quad |-\left(0{,}7x+\frac{1}{4}\right) \\
\frac{3}{5}x^2-\frac{12}{5}x+\frac{9}{5} &= 0 &&\quad |\text{faktorisieren} \\
\frac{3}{5}\left(x-1\right)\left(x-3\right) &= 0
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
&= 0{,}7\cdot\left(1\right)+\frac{1}{4} \\
&= \frac{19}{20} \\
y_2 &= g\left(3\right) \\
&= 0{,}7\cdot\left(3\right)+\frac{1}{4} \\
&= \frac{47}{20}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(1\right)
&= \frac{3}{5}\cdot\left(1\right)^2-1{,}7\cdot\left(1\right)+2{,}05 \\
&= \frac{19}{20}=y_1 \\
f\left(3\right)
&= \frac{3}{5}\cdot\left(3\right)^2-1{,}7\cdot\left(3\right)+2{,}05 \\
&= \frac{47}{20}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid \frac{19}{20}\right)$ und $S_2\left(3\mid \frac{47}{20}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}4x^2+\frac{13}{30}x-0{,}4$ und $p(x)=\frac{5}{6}x-1{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.4*x^2+13/30*x-0.4`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=5/6*x-1.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}4x^2+\frac{13}{30}x-0{,}4 &= \frac{5}{6}x-1{,}2 &&\quad |-\left(\frac{5}{6}x-1{,}2\right) \\
-\frac{2}{5}x^2-\frac{2}{5}x+\frac{4}{5} &= 0 &&\quad |\text{faktorisieren} \\
-0{,}4\left(x+2\right)\left(x-1\right) &= 0
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
&= \frac{5}{6}\cdot\left(-2\right)-1{,}2 \\
&= -\frac{43}{15} \\
y_2 &= p\left(1\right) \\
&= \frac{5}{6}\cdot\left(1\right)-1{,}2 \\
&= -\frac{11}{30}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -0{,}4\cdot\left(-2\right)^2+\frac{13}{30}\cdot\left(-2\right)-0{,}4 \\
&= -\frac{43}{15}=y_1 \\
h\left(1\right)
&= -0{,}4\cdot\left(1\right)^2+\frac{13}{30}\cdot\left(1\right)-0{,}4 \\
&= -\frac{11}{30}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid -\frac{43}{15}\right)$ und $S_2\left(1\mid -\frac{11}{30}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{1}{8}x^2-\frac{59}{40}x+\frac{29}{32}$ und $r(x)=-1{,}1x+\frac{3}{4}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1/8*x^2-59/40*x+29/32`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-1.1*x+3/4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{1}{8}x^2-\frac{59}{40}x+\frac{29}{32} &= -1{,}1x+\frac{3}{4} &&\quad |-\left(-1{,}1x+\frac{3}{4}\right) \\
\frac{1}{8}x^2-\frac{3}{8}x+\frac{5}{32} &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{8}\left(x-0{,}5\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(0{,}5\right) \\
&= -1{,}1\cdot\left(0{,}5\right)+\frac{3}{4} \\
&= \frac{1}{5} \\
y_2 &= r\left(2{,}5\right) \\
&= -1{,}1\cdot\left(2{,}5\right)+\frac{3}{4} \\
&= -2
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}5\right)
&= \frac{1}{8}\cdot\left(0{,}5\right)^2-\frac{59}{40}\cdot\left(0{,}5\right)+\frac{29}{32} \\
&= \frac{1}{5}=y_1 \\
q\left(2{,}5\right)
&= \frac{1}{8}\cdot\left(2{,}5\right)^2-\frac{59}{40}\cdot\left(2{,}5\right)+\frac{29}{32} \\
&= -2=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid \frac{1}{5}\right)$ und $S_2\left(2{,}5\mid -2\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}75x^2+1{,}15x+3{,}1$ und $t(x)=\frac{2}{5}x+1{,}6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.75*x^2+1.15*x+3.1`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=2/5*x+1.6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}75x^2+1{,}15x+3{,}1 &= \frac{2}{5}x+1{,}6 &&\quad |-\left(\frac{2}{5}x+1{,}6\right) \\
-\frac{3}{4}x^2+\frac{3}{4}x+\frac{3}{2} &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x+1\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -1, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-1\right) \\
&= \frac{2}{5}\cdot\left(-1\right)+1{,}6 \\
&= \frac{6}{5} \\
y_2 &= t\left(2\right) \\
&= \frac{2}{5}\cdot\left(2\right)+1{,}6 \\
&= \frac{12}{5}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-1\right)
&= -0{,}75\cdot\left(-1\right)^2+1{,}15\cdot\left(-1\right)+3{,}1 \\
&= \frac{6}{5}=y_1 \\
s\left(2\right)
&= -0{,}75\cdot\left(2\right)^2+1{,}15\cdot\left(2\right)+3{,}1 \\
&= \frac{12}{5}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1\mid \frac{6}{5}\right)$ und $S_2\left(2\mid \frac{12}{5}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
