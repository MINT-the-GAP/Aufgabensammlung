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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Scheitelpunktsform, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=-0{,}1x^2-0{,}25x+18{,}25$ und $g(x)=-0{,}4\left(x-1\right)^2+17{,}9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=-0.1*x^2-0.25*x+18.25`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=-0.4*(x-1)^2+17.9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
-0{,}1x^2-0{,}25x+18{,}25 &= -0{,}4\left(x-1\right)^2+17{,}9 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-0{,}1x^2-0{,}25x+18{,}25 &= -0{,}4x^2+0{,}8x+17{,}5 &&\quad |-\left(-0{,}4x^2+0{,}8x+17{,}5\right) \\
0{,}3x^2-1{,}05x+0{,}75 &= 0 &&\quad |\text{faktorisieren} \\
0{,}3\left(x-1\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 1, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(1\right) \\
&= -0{,}1\cdot\left(1\right)^2-0{,}25\cdot\left(1\right)+18{,}25 \\
&= 17{,}9 \\
y_2 &= f\left(2{,}5\right) \\
&= -0{,}1\cdot\left(2{,}5\right)^2-0{,}25\cdot\left(2{,}5\right)+18{,}25 \\
&= 17
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= -0{,}4\cdot\left(\left(1\right)-1\right)^2+17{,}9 \\
&= 17{,}9=y_1 \\
g\left(2{,}5\right)
&= -0{,}4\cdot\left(\left(2{,}5\right)-1\right)^2+17{,}9 \\
&= 17=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 17{,}9\right)$ und $S_2\left(2{,}5\mid 17\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=0{,}5x^2+17{,}275$ und $p(x)=1{,}25\left(x-1{,}5\right)^2+18{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=0.5*x^2+17.275`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=1.25*(x-1.5)^2+18.4;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
0{,}5x^2+17{,}275 &= 1{,}25\left(x-1{,}5\right)^2+18{,}4 &&\quad |\text{rechte Seite ausmultiplizieren} \\
0{,}5x^2+17{,}275 &= 1{,}25x^2-3{,}75x+21{,}2125 &&\quad |-\left(1{,}25x^2-3{,}75x+21{,}2125\right) \\
-0{,}75x^2+3{,}75x-3{,}9375 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}75\left(x-1{,}5\right)\left(x-3{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1{,}5 = 0 &\quad \text{oder} \quad x-3{,}5 = 0 \\
x_1 &= 1{,}5, \qquad x_2 = 3{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(1{,}5\right) \\
&= 0{,}5\cdot\left(1{,}5\right)^2+17{,}275 \\
&= 18{,}4 \\
y_2 &= h\left(3{,}5\right) \\
&= 0{,}5\cdot\left(3{,}5\right)^2+17{,}275 \\
&= 23{,}4
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(1{,}5\right)
&= 1{,}25\cdot\left(\left(1{,}5\right)-1{,}5\right)^2+18{,}4 \\
&= 18{,}4=y_1 \\
p\left(3{,}5\right)
&= 1{,}25\cdot\left(\left(3{,}5\right)-1{,}5\right)^2+18{,}4 \\
&= 23{,}4=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1{,}5\mid 18{,}4\right)$ und $S_2\left(3{,}5\mid 23{,}4\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-0{,}3x^2-0{,}05x+21{,}4$ und $r(x)=-0{,}8\left(x-2\right)^2+20{,}1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-0.3*x^2-0.05*x+21.4`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-0.8*(x-2)^2+20.1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-0{,}3x^2-0{,}05x+21{,}4 &= -0{,}8\left(x-2\right)^2+20{,}1 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-0{,}3x^2-0{,}05x+21{,}4 &= -0{,}8x^2+3{,}2x+16{,}9 &&\quad |-\left(-0{,}8x^2+3{,}2x+16{,}9\right) \\
0{,}5x^2-3{,}25x+4{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x-2\right)\left(x-4{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 = 0 &\quad \text{oder} \quad x-4{,}5 = 0 \\
x_1 &= 2, \qquad x_2 = 4{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(2\right) \\
&= -0{,}3\cdot\left(2\right)^2-0{,}05\cdot\left(2\right)+21{,}4 \\
&= 20{,}1 \\
y_2 &= q\left(4{,}5\right) \\
&= -0{,}3\cdot\left(4{,}5\right)^2-0{,}05\cdot\left(4{,}5\right)+21{,}4 \\
&= 15{,}1
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(2\right)
&= -0{,}8\cdot\left(\left(2\right)-2\right)^2+20{,}1 \\
&= 20{,}1=y_1 \\
r\left(4{,}5\right)
&= -0{,}8\cdot\left(\left(4{,}5\right)-2\right)^2+20{,}1 \\
&= 15{,}1=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 20{,}1\right)$ und $S_2\left(4{,}5\mid 15{,}1\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Dezimalzahlen)

</div>

</section>
