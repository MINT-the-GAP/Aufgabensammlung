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

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{2}{3}\left(x-1{,}5\right)^2+0{,}5$ und $g(x)=\frac{2}{3}x+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2/3*(x-1.5)^2+0.5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=2/3*x+2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{2}{3}\left(x-1{,}5\right)^2+0{,}5 &= \frac{2}{3}x+2 &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{2}{3}x^2-2x+2 &= \frac{2}{3}x+2 &&\quad |-\left(\frac{2}{3}x+2\right) \\
\frac{2}{3}x^2-\frac{8}{3}x &= 0 &&\quad |\text{faktorisieren} \\
\frac{2}{3}x\left(x-4\right) &= 0
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
&= \frac{2}{3}\cdot\left(0\right)+2 \\
&= 2 \\
y_2 &= g\left(4\right) \\
&= \frac{2}{3}\cdot\left(4\right)+2 \\
&= \frac{14}{3}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(0\right)
&= \frac{2}{3}\cdot\left(\left(0\right)-1{,}5\right)^2+0{,}5 \\
&= 2=y_1 \\
f\left(4\right)
&= \frac{2}{3}\cdot\left(\left(4\right)-1{,}5\right)^2+0{,}5 \\
&= \frac{14}{3}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid 2\right)$ und $S_2\left(4\mid \frac{14}{3}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-0{,}4\left(x+1\right)^2+\frac{3}{5}$ und $p(x)=-0{,}4x-0{,}6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-0.4*(x+1)^2+3/5`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-0.4*x-0.6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-0{,}4\left(x+1\right)^2+\frac{3}{5} &= -0{,}4x-0{,}6 &&\quad |\text{linke Seite ausmultiplizieren} \\
-\frac{2}{5}x^2-\frac{4}{5}x+\frac{1}{5} &= -0{,}4x-0{,}6 &&\quad |-\left(-0{,}4x-0{,}6\right) \\
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
&= -0{,}4\cdot\left(-2\right)-0{,}6 \\
&= 0{,}2 \\
y_2 &= p\left(1\right) \\
&= -0{,}4\cdot\left(1\right)-0{,}6 \\
&= -1
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-2\right)
&= -0{,}4\cdot\left(\left(-2\right)+1\right)^2+\frac{3}{5} \\
&= 0{,}2=y_1 \\
h\left(1\right)
&= -0{,}4\cdot\left(\left(1\right)+1\right)^2+\frac{3}{5} \\
&= -1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 0{,}2\right)$ und $S_2\left(1\mid -1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{3}{8}\left(x-2{,}5\right)^2-1$ und $r(x)=-\frac{3}{16}x+\frac{19}{32}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=3/8*(x-2.5)^2-1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-3/16*x+19/32;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{3}{8}\left(x-2{,}5\right)^2-1 &= -\frac{3}{16}x+\frac{19}{32} &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{3}{8}x^2-\frac{15}{8}x+\frac{43}{32} &= -\frac{3}{16}x+\frac{19}{32} &&\quad |-\left(-\frac{3}{16}x+\frac{19}{32}\right) \\
\frac{3}{8}x^2-\frac{27}{16}x+\frac{3}{4} &= 0 &&\quad |\text{faktorisieren} \\
\frac{3}{8}\left(x-0{,}5\right)\left(x-4\right) &= 0
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
&= -\frac{3}{16}\cdot\left(0{,}5\right)+\frac{19}{32} \\
&= \frac{1}{2} \\
y_2 &= r\left(4\right) \\
&= -\frac{3}{16}\cdot\left(4\right)+\frac{19}{32} \\
&= -\frac{5}{32}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(0{,}5\right)
&= \frac{3}{8}\cdot\left(\left(0{,}5\right)-2{,}5\right)^2-1 \\
&= \frac{1}{2}=y_1 \\
q\left(4\right)
&= \frac{3}{8}\cdot\left(\left(4\right)-2{,}5\right)^2-1 \\
&= -\frac{5}{32}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid \frac{1}{2}\right)$ und $S_2\left(4\mid -\frac{5}{32}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-0{,}75\left(x+\frac{1}{2}\right)^2+1{,}4$ und $t(x)=-\frac{3}{8}x+0{,}0875$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-0.75*(x+1/2)^2+1.4`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-3/8*x+0.0875;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-0{,}75\left(x+\frac{1}{2}\right)^2+1{,}4 &= -\frac{3}{8}x+0{,}0875 &&\quad |\text{linke Seite ausmultiplizieren} \\
-\frac{3}{4}x^2-\frac{3}{4}x+\frac{97}{80} &= -\frac{3}{8}x+0{,}0875 &&\quad |-\left(-\frac{3}{8}x+0{,}0875\right) \\
-\frac{3}{4}x^2-\frac{3}{8}x+\frac{9}{8} &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x+1{,}5\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}5 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -1{,}5, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= t\left(-1{,}5\right) \\
&= -\frac{3}{8}\cdot\left(-1{,}5\right)+0{,}0875 \\
&= \frac{13}{20} \\
y_2 &= t\left(1\right) \\
&= -\frac{3}{8}\cdot\left(1\right)+0{,}0875 \\
&= -\frac{23}{80}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-1{,}5\right)
&= -0{,}75\cdot\left(\left(-1{,}5\right)+\frac{1}{2}\right)^2+1{,}4 \\
&= \frac{13}{20}=y_1 \\
s\left(1\right)
&= -0{,}75\cdot\left(\left(1\right)+\frac{1}{2}\right)^2+1{,}4 \\
&= -\frac{23}{80}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid \frac{13}{20}\right)$ und $S_2\left(1\mid -\frac{23}{80}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
