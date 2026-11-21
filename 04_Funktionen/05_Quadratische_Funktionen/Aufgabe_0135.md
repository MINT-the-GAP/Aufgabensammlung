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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Scheitelpunktsform, Bruchrechnung, Dezimalzahlen, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit Bruchrechnung, Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{5}{6}x^2+\frac{1}{6}x+\frac{359}{24}$ und $g(x)=\frac{1}{3}\left(x+1\right)^2+15$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=5/6*x^2+1/6*x+359/24`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1/3*(x+1)^2+15;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{5}{6}x^2+\frac{1}{6}x+\frac{359}{24} &= \frac{1}{3}\left(x+1\right)^2+15 &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{5}{6}x^2+\frac{1}{6}x+\frac{359}{24} &= \frac{1}{3}x^2+\frac{2}{3}x+\frac{46}{3} &&\quad |-\left(\frac{1}{3}x^2+\frac{2}{3}x+\frac{46}{3}\right) \\
0{,}5x^2-0{,}5x-0{,}375 &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x+0{,}5\right)\left(x-1{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+0{,}5 = 0 &\quad \text{oder} \quad x-1{,}5 = 0 \\
x_1 &= -0{,}5, \qquad x_2 = 1{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-0{,}5\right) \\
&= \frac{5}{6}\cdot\left(-0{,}5\right)^2+\frac{1}{6}\cdot\left(-0{,}5\right)+\frac{359}{24} \\
&= \frac{181}{12} \\
y_2 &= f\left(1{,}5\right) \\
&= \frac{5}{6}\cdot\left(1{,}5\right)^2+\frac{1}{6}\cdot\left(1{,}5\right)+\frac{359}{24} \\
&= \frac{205}{12}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-0{,}5\right)
&= \frac{1}{3}\cdot\left(\left(-0{,}5\right)+1\right)^2+15 \\
&= \frac{181}{12}=y_1 \\
g\left(1{,}5\right)
&= \frac{1}{3}\cdot\left(\left(1{,}5\right)+1\right)^2+15 \\
&= \frac{205}{12}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-0{,}5\mid \frac{181}{12}\right)$ und $S_2\left(1{,}5\mid \frac{205}{12}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{5}{12}x^2+\frac{31}{24}x+\frac{203}{12}$ und $p(x)=\frac{2}{3}\left(x+0{,}5\right)^2+16{,}75$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5/12*x^2+31/24*x+203/12`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2/3*(x+0.5)^2+16.75;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{5}{12}x^2+\frac{31}{24}x+\frac{203}{12} &= \frac{2}{3}\left(x+0{,}5\right)^2+16{,}75 &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{5}{12}x^2+\frac{31}{24}x+\frac{203}{12} &= \frac{2}{3}x^2+\frac{2}{3}x+\frac{203}{12} &&\quad |-\left(\frac{2}{3}x^2+\frac{2}{3}x+\frac{203}{12}\right) \\
-0{,}25x^2+0{,}625x &= 0 &&\quad |\text{faktorisieren} \\
-0{,}25x\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= 0, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(0\right) \\
&= \frac{5}{12}\cdot\left(0\right)^2+\frac{31}{24}\cdot\left(0\right)+\frac{203}{12} \\
&= \frac{203}{12} \\
y_2 &= h\left(2{,}5\right) \\
&= \frac{5}{12}\cdot\left(2{,}5\right)^2+\frac{31}{24}\cdot\left(2{,}5\right)+\frac{203}{12} \\
&= 22{,}75
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(0\right)
&= \frac{2}{3}\cdot\left(\left(0\right)+0{,}5\right)^2+16{,}75 \\
&= \frac{203}{12}=y_1 \\
p\left(2{,}5\right)
&= \frac{2}{3}\cdot\left(\left(2{,}5\right)+0{,}5\right)^2+16{,}75 \\
&= 22{,}75=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid \frac{203}{12}\right)$ und $S_2\left(2{,}5\mid 22{,}75\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{1}{15}x^2-\frac{19}{15}x+\frac{1069}{60}$ und $r(x)=-\frac{1}{3}\left(x-0{,}5\right)^2+17{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1/15*x^2-19/15*x+1069/60`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-1/3*(x-0.5)^2+17.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{1}{15}x^2-\frac{19}{15}x+\frac{1069}{60} &= -\frac{1}{3}\left(x-0{,}5\right)^2+17{,}2 &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{1}{15}x^2-\frac{19}{15}x+\frac{1069}{60} &= -\frac{1}{3}x^2+\frac{1}{3}x+\frac{1027}{60} &&\quad |-\left(-\frac{1}{3}x^2+\frac{1}{3}x+\frac{1027}{60}\right) \\
0{,}4x^2-1{,}6x+0{,}7 &= 0 &&\quad |\text{faktorisieren} \\
0{,}4\left(x-0{,}5\right)\left(x-3{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-0{,}5 = 0 &\quad \text{oder} \quad x-3{,}5 = 0 \\
x_1 &= 0{,}5, \qquad x_2 = 3{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(0{,}5\right) \\
&= \frac{1}{15}\cdot\left(0{,}5\right)^2-\frac{19}{15}\cdot\left(0{,}5\right)+\frac{1069}{60} \\
&= 17{,}2 \\
y_2 &= q\left(3{,}5\right) \\
&= \frac{1}{15}\cdot\left(3{,}5\right)^2-\frac{19}{15}\cdot\left(3{,}5\right)+\frac{1069}{60} \\
&= 14{,}2
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(0{,}5\right)
&= -\frac{1}{3}\cdot\left(\left(0{,}5\right)-0{,}5\right)^2+17{,}2 \\
&= 17{,}2=y_1 \\
r\left(3{,}5\right)
&= -\frac{1}{3}\cdot\left(\left(3{,}5\right)-0{,}5\right)^2+17{,}2 \\
&= 14{,}2=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0{,}5\mid 17{,}2\right)$ und $S_2\left(3{,}5\mid 14{,}2\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
