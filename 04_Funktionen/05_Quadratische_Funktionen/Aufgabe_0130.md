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

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{7}{30}\left(x-1\right)^2+12{,}6$ und $g(x)=\frac{5}{6}\left(x-1\right)^2+12$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=7/30*(x-1)^2+12.6`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=5/6*(x-1)^2+12;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{7}{30}\left(x-1\right)^2+12{,}6 &= \frac{5}{6}\left(x-1\right)^2+12 &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{7}{30}x^2-\frac{7}{15}x+\frac{77}{6} &= \frac{5}{6}x^2-\frac{5}{3}x+\frac{77}{6} &&\quad |-\left(\frac{5}{6}x^2-\frac{5}{3}x+\frac{77}{6}\right) \\
-0{,}6x^2+1{,}2x &= 0 &&\quad |\text{faktorisieren} \\
-0{,}6x\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= 0, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(0\right) \\
&= \frac{7}{30}\cdot\left(\left(0\right)-1\right)^2+12{,}6 \\
&= \frac{77}{6} \\
y_2 &= f\left(2\right) \\
&= \frac{7}{30}\cdot\left(\left(2\right)-1\right)^2+12{,}6 \\
&= \frac{77}{6}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(0\right)
&= \frac{5}{6}\cdot\left(\left(0\right)-1\right)^2+12 \\
&= \frac{77}{6}=y_1 \\
g\left(2\right)
&= \frac{5}{6}\cdot\left(\left(2\right)-1\right)^2+12 \\
&= \frac{77}{6}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid \frac{77}{6}\right)$ und $S_2\left(2\mid \frac{77}{6}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{7}{12}\left(x-1{,}5\right)^2+12{,}0625$ und $p(x)=-\frac{1}{6}\left(x-1{,}5\right)^2+13{,}75$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=7/12*(x-1.5)^2+12.0625`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-1/6*(x-1.5)^2+13.75;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{7}{12}\left(x-1{,}5\right)^2+12{,}0625 &= -\frac{1}{6}\left(x-1{,}5\right)^2+13{,}75 &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{7}{12}x^2-1{,}75x+13{,}375 &= -\frac{1}{6}x^2+0{,}5x+13{,}375 &&\quad |-\left(-\frac{1}{6}x^2+0{,}5x+13{,}375\right) \\
0{,}75x^2-2{,}25x &= 0 &&\quad |\text{faktorisieren} \\
0{,}75x\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= 0, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(0\right) \\
&= \frac{7}{12}\cdot\left(\left(0\right)-1{,}5\right)^2+12{,}0625 \\
&= 13{,}375 \\
y_2 &= h\left(3\right) \\
&= \frac{7}{12}\cdot\left(\left(3\right)-1{,}5\right)^2+12{,}0625 \\
&= 13{,}375
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(0\right)
&= -\frac{1}{6}\cdot\left(\left(0\right)-1{,}5\right)^2+13{,}75 \\
&= 13{,}375=y_1 \\
p\left(3\right)
&= -\frac{1}{6}\cdot\left(\left(3\right)-1{,}5\right)^2+13{,}75 \\
&= 13{,}375=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid 13{,}375\right)$ und $S_2\left(3\mid 13{,}375\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=-\frac{5}{12}\left(x-2\right)^2+16{,}2$ und $r(x)=\frac{1}{12}\left(x-2\right)^2+14{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=-5/12*(x-2)^2+16.2`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1/12*(x-2)^2+14.2;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
-\frac{5}{12}\left(x-2\right)^2+16{,}2 &= \frac{1}{12}\left(x-2\right)^2+14{,}2 &&\quad |\text{beide Seiten ausmultiplizieren} \\
-\frac{5}{12}x^2+\frac{5}{3}x+\frac{218}{15} &= \frac{1}{12}x^2-\frac{1}{3}x+\frac{218}{15} &&\quad |-\left(\frac{1}{12}x^2-\frac{1}{3}x+\frac{218}{15}\right) \\
-0{,}5x^2+2x &= 0 &&\quad |\text{faktorisieren} \\
-0{,}5x\left(x-4\right) &= 0
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
y_1 &= q\left(0\right) \\
&= -\frac{5}{12}\cdot\left(\left(0\right)-2\right)^2+16{,}2 \\
&= \frac{218}{15} \\
y_2 &= q\left(4\right) \\
&= -\frac{5}{12}\cdot\left(\left(4\right)-2\right)^2+16{,}2 \\
&= \frac{218}{15}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(0\right)
&= \frac{1}{12}\cdot\left(\left(0\right)-2\right)^2+14{,}2 \\
&= \frac{218}{15}=y_1 \\
r\left(4\right)
&= \frac{1}{12}\cdot\left(\left(4\right)-2\right)^2+14{,}2 \\
&= \frac{218}{15}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid \frac{218}{15}\right)$ und $S_2\left(4\mid \frac{218}{15}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung, Dezimalzahlen)

</div>

</section>
