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

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{7}{30}x^2+\frac{13}{30}x+\frac{52}{3}$ und $g(x)=\frac{5}{6}\left(x-1\right)^2+18$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=7/30*x^2+13/30*x+52/3`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=5/6*(x-1)^2+18;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{7}{30}x^2+\frac{13}{30}x+\frac{52}{3} &= \frac{5}{6}\left(x-1\right)^2+18 &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{7}{30}x^2+\frac{13}{30}x+\frac{52}{3} &= \frac{5}{6}x^2-\frac{5}{3}x+\frac{113}{6} &&\quad |-\left(\frac{5}{6}x^2-\frac{5}{3}x+\frac{113}{6}\right) \\
-0{,}6x^2+2{,}1x-1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}6\left(x-1\right)\left(x-2{,}5\right) &= 0
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
&= \frac{7}{30}\cdot\left(1\right)^2+\frac{13}{30}\cdot\left(1\right)+\frac{52}{3} \\
&= 18 \\
y_2 &= f\left(2{,}5\right) \\
&= \frac{7}{30}\cdot\left(2{,}5\right)^2+\frac{13}{30}\cdot\left(2{,}5\right)+\frac{52}{3} \\
&= 19{,}875
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(1\right)
&= \frac{5}{6}\cdot\left(\left(1\right)-1\right)^2+18 \\
&= 18=y_1 \\
g\left(2{,}5\right)
&= \frac{5}{6}\cdot\left(\left(2{,}5\right)-1\right)^2+18 \\
&= 19{,}875=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid 18\right)$ und $S_2\left(2{,}5\mid 19{,}875\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{7}{12}x^2-3{,}25x+23{,}3125$ und $p(x)=-\frac{1}{6}\left(x-1{,}5\right)^2+19{,}75$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=7/12*x^2-3.25*x+23.3125`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-1/6*(x-1.5)^2+19.75;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{7}{12}x^2-3{,}25x+23{,}3125 &= -\frac{1}{6}\left(x-1{,}5\right)^2+19{,}75 &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{7}{12}x^2-3{,}25x+23{,}3125 &= -\frac{1}{6}x^2+0{,}5x+19{,}375 &&\quad |-\left(-\frac{1}{6}x^2+0{,}5x+19{,}375\right) \\
0{,}75x^2-3{,}75x+3{,}9375 &= 0 &&\quad |\text{faktorisieren} \\
0{,}75\left(x-1{,}5\right)\left(x-3{,}5\right) &= 0
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
&= \frac{7}{12}\cdot\left(1{,}5\right)^2-3{,}25\cdot\left(1{,}5\right)+23{,}3125 \\
&= 19{,}75 \\
y_2 &= h\left(3{,}5\right) \\
&= \frac{7}{12}\cdot\left(3{,}5\right)^2-3{,}25\cdot\left(3{,}5\right)+23{,}3125 \\
&= \frac{229}{12}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(1{,}5\right)
&= -\frac{1}{6}\cdot\left(\left(1{,}5\right)-1{,}5\right)^2+19{,}75 \\
&= 19{,}75=y_1 \\
p\left(3{,}5\right)
&= -\frac{1}{6}\cdot\left(\left(3{,}5\right)-1{,}5\right)^2+19{,}75 \\
&= \frac{229}{12}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1{,}5\mid 19{,}75\right)$ und $S_2\left(3{,}5\mid \frac{229}{12}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-\frac{5}{12}x^2+\frac{35}{12}x+\frac{481}{30}$ und $r(x)=\frac{1}{12}\left(x-2\right)^2+20{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-5/12*x^2+35/12*x+481/30`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1/12*(x-2)^2+20.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-\frac{5}{12}x^2+\frac{35}{12}x+\frac{481}{30} &= \frac{1}{12}\left(x-2\right)^2+20{,}2 &&\quad |\text{rechte Seite ausmultiplizieren} \\
-\frac{5}{12}x^2+\frac{35}{12}x+\frac{481}{30} &= \frac{1}{12}x^2-\frac{1}{3}x+\frac{308}{15} &&\quad |-\left(\frac{1}{12}x^2-\frac{1}{3}x+\frac{308}{15}\right) \\
-0{,}5x^2+3{,}25x-4{,}5 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}5\left(x-2\right)\left(x-4{,}5\right) &= 0
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
&= -\frac{5}{12}\cdot\left(2\right)^2+\frac{35}{12}\cdot\left(2\right)+\frac{481}{30} \\
&= 20{,}2 \\
y_2 &= q\left(4{,}5\right) \\
&= -\frac{5}{12}\cdot\left(4{,}5\right)^2+\frac{35}{12}\cdot\left(4{,}5\right)+\frac{481}{30} \\
&= \frac{4973}{240}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(2\right)
&= \frac{1}{12}\cdot\left(\left(2\right)-2\right)^2+20{,}2 \\
&= 20{,}2=y_1 \\
r\left(4{,}5\right)
&= \frac{1}{12}\cdot\left(\left(4{,}5\right)-2\right)^2+20{,}2 \\
&= \frac{4973}{240}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(2\mid 20{,}2\right)$ und $S_2\left(4{,}5\mid \frac{4973}{240}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
