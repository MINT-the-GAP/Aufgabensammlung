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

tags: Quadratische Funktionen, Schnittpunkt, Scheitelpunktsform, Bruchrechnung, Dezimalzahlen, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Scheitelpunktsform mit Bruchrechnung, Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{5}{6}\left(x+1\right)^2+8{,}5$ und $g(x)=\frac{1}{3}\left(x+1\right)^2+9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=5/6*(x+1)^2+8.5`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1/3*(x+1)^2+9;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{5}{6}\left(x+1\right)^2+8{,}5 &= \frac{1}{3}\left(x+1\right)^2+9 &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{5}{6}x^2+\frac{5}{3}x+\frac{28}{3} &= \frac{1}{3}x^2+\frac{2}{3}x+\frac{28}{3} &&\quad |-\left(\frac{1}{3}x^2+\frac{2}{3}x+\frac{28}{3}\right) \\
0{,}5x^2+x &= 0 &&\quad |\text{faktorisieren} \\
0{,}5\left(x+2\right)x &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x = 0 \\
x_1 &= -2, \qquad x_2 = 0
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-2\right) \\
&= \frac{5}{6}\cdot\left(\left(-2\right)+1\right)^2+8{,}5 \\
&= \frac{28}{3} \\
y_2 &= f\left(0\right) \\
&= \frac{5}{6}\cdot\left(\left(0\right)+1\right)^2+8{,}5 \\
&= \frac{28}{3}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-2\right)
&= \frac{1}{3}\cdot\left(\left(-2\right)+1\right)^2+9 \\
&= \frac{28}{3}=y_1 \\
g\left(0\right)
&= \frac{1}{3}\cdot\left(\left(0\right)+1\right)^2+9 \\
&= \frac{28}{3}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid \frac{28}{3}\right)$ und $S_2\left(0\mid \frac{28}{3}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{5}{12}\left(x+0{,}5\right)^2+11{,}3125$ und $p(x)=\frac{2}{3}\left(x+0{,}5\right)^2+10{,}75$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5/12*(x+0.5)^2+11.3125`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2/3*(x+0.5)^2+10.75;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{5}{12}\left(x+0{,}5\right)^2+11{,}3125 &= \frac{2}{3}\left(x+0{,}5\right)^2+10{,}75 &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{5}{12}x^2+\frac{5}{12}x+\frac{137}{12} &= \frac{2}{3}x^2+\frac{2}{3}x+\frac{131}{12} &&\quad |-\left(\frac{2}{3}x^2+\frac{2}{3}x+\frac{131}{12}\right) \\
-0{,}25x^2-0{,}25x+0{,}5 &= 0 &&\quad |\text{faktorisieren} \\
-0{,}25\left(x+2\right)\left(x-1\right) &= 0
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
y_1 &= h\left(-2\right) \\
&= \frac{5}{12}\cdot\left(\left(-2\right)+0{,}5\right)^2+11{,}3125 \\
&= 12{,}25 \\
y_2 &= h\left(1\right) \\
&= \frac{5}{12}\cdot\left(\left(1\right)+0{,}5\right)^2+11{,}3125 \\
&= 12{,}25
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= \frac{2}{3}\cdot\left(\left(-2\right)+0{,}5\right)^2+10{,}75 \\
&= 12{,}25=y_1 \\
p\left(1\right)
&= \frac{2}{3}\cdot\left(\left(1\right)+0{,}5\right)^2+10{,}75 \\
&= 12{,}25=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid 12{,}25\right)$ und $S_2\left(1\mid 12{,}25\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{1}{15}\left(x-0{,}5\right)^2+9{,}6$ und $r(x)=-\frac{1}{3}\left(x-0{,}5\right)^2+11{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=1/15*(x-0.5)^2+9.6`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=-1/3*(x-0.5)^2+11.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{1}{15}\left(x-0{,}5\right)^2+9{,}6 &= -\frac{1}{3}\left(x-0{,}5\right)^2+11{,}2 &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{1}{15}x^2-\frac{1}{15}x+\frac{577}{60} &= -\frac{1}{3}x^2+\frac{1}{3}x+\frac{667}{60} &&\quad |-\left(-\frac{1}{3}x^2+\frac{1}{3}x+\frac{667}{60}\right) \\
0{,}4x^2-0{,}4x-1{,}5 &= 0 &&\quad |\text{faktorisieren} \\
0{,}4\left(x+1{,}5\right)\left(x-2{,}5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1{,}5 = 0 &\quad \text{oder} \quad x-2{,}5 = 0 \\
x_1 &= -1{,}5, \qquad x_2 = 2{,}5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-1{,}5\right) \\
&= \frac{1}{15}\cdot\left(\left(-1{,}5\right)-0{,}5\right)^2+9{,}6 \\
&= \frac{148}{15} \\
y_2 &= q\left(2{,}5\right) \\
&= \frac{1}{15}\cdot\left(\left(2{,}5\right)-0{,}5\right)^2+9{,}6 \\
&= \frac{148}{15}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-1{,}5\right)
&= -\frac{1}{3}\cdot\left(\left(-1{,}5\right)-0{,}5\right)^2+11{,}2 \\
&= \frac{148}{15}=y_1 \\
r\left(2{,}5\right)
&= -\frac{1}{3}\cdot\left(\left(2{,}5\right)-0{,}5\right)^2+11{,}2 \\
&= \frac{148}{15}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1{,}5\mid \frac{148}{15}\right)$ und $S_2\left(2{,}5\mid \frac{148}{15}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
