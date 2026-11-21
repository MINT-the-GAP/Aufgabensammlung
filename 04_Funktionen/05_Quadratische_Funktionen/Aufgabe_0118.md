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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform quadratischer Funktionen, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameterform berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{4}{5}x^2-\frac{14}{15}x+\frac{179}{30}$ und $g(x)=x^2-\frac{1}{3}x+\frac{31}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=4/5*x^2-14/15*x+179/30`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=x^2-1/3*x+31/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{4}{5}x^2-\frac{14}{15}x+\frac{179}{30} &= x^2-\frac{1}{3}x+\frac{31}{6} &&\quad |-\left(x^2-\frac{1}{3}x+\frac{31}{6}\right) \\
-\frac{1}{5}x^2-\frac{3}{5}x+\frac{4}{5} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{5}\left(x+4\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+4 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -4, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-4\right) \\
&= \frac{4}{5}\cdot\left(-4\right)^2-\frac{14}{15}\cdot\left(-4\right)+\frac{179}{30} \\
&= \frac{45}{2} \\
y_2 &= f\left(1\right) \\
&= \frac{4}{5}\cdot\left(1\right)^2-\frac{14}{15}\cdot\left(1\right)+\frac{179}{30} \\
&= \frac{35}{6}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-4\right)
&= 1\cdot\left(-4\right)^2-\frac{1}{3}\cdot\left(-4\right)+\frac{31}{6} \\
&= \frac{45}{2}=y_1 \\
g\left(1\right)
&= 1\cdot\left(1\right)^2-\frac{1}{3}\cdot\left(1\right)+\frac{31}{6} \\
&= \frac{35}{6}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-4\mid \frac{45}{2}\right)$ und $S_2\left(1\mid \frac{35}{6}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{1}{2}x^2+\frac{1}{3}x+\frac{41}{8}$ und $p(x)=\frac{1}{3}x^2+\frac{1}{2}x+\frac{49}{8}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1/2*x^2+1/3*x+41/8`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=1/3*x^2+1/2*x+49/8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{1}{2}x^2+\frac{1}{3}x+\frac{41}{8} &= \frac{1}{3}x^2+\frac{1}{2}x+\frac{49}{8} &&\quad |-\left(\frac{1}{3}x^2+\frac{1}{2}x+\frac{49}{8}\right) \\
\frac{1}{6}x^2-\frac{1}{6}x-1 &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{6}\left(x+2\right)\left(x-3\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-3 = 0 \\
x_1 &= -2, \qquad x_2 = 3
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-2\right) \\
&= \frac{1}{2}\cdot\left(-2\right)^2+\frac{1}{3}\cdot\left(-2\right)+\frac{41}{8} \\
&= \frac{155}{24} \\
y_2 &= h\left(3\right) \\
&= \frac{1}{2}\cdot\left(3\right)^2+\frac{1}{3}\cdot\left(3\right)+\frac{41}{8} \\
&= \frac{85}{8}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-2\right)
&= \frac{1}{3}\cdot\left(-2\right)^2+\frac{1}{2}\cdot\left(-2\right)+\frac{49}{8} \\
&= \frac{155}{24}=y_1 \\
p\left(3\right)
&= \frac{1}{3}\cdot\left(3\right)^2+\frac{1}{2}\cdot\left(3\right)+\frac{49}{8} \\
&= \frac{85}{8}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid \frac{155}{24}\right)$ und $S_2\left(3\mid \frac{85}{8}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{11}{40}x^2-\frac{3}{4}x+\frac{299}{40}$ und $r(x)=\frac{2}{5}x^2-\frac{1}{2}x+\frac{71}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=11/40*x^2-3/4*x+299/40`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=2/5*x^2-1/2*x+71/10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{11}{40}x^2-\frac{3}{4}x+\frac{299}{40} &= \frac{2}{5}x^2-\frac{1}{2}x+\frac{71}{10} &&\quad |-\left(\frac{2}{5}x^2-\frac{1}{2}x+\frac{71}{10}\right) \\
-\frac{1}{8}x^2-\frac{1}{4}x+\frac{3}{8} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{8}\left(x+3\right)\left(x-1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x-1 = 0 \\
x_1 &= -3, \qquad x_2 = 1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-3\right) \\
&= \frac{11}{40}\cdot\left(-3\right)^2-\frac{3}{4}\cdot\left(-3\right)+\frac{299}{40} \\
&= \frac{61}{5} \\
y_2 &= q\left(1\right) \\
&= \frac{11}{40}\cdot\left(1\right)^2-\frac{3}{4}\cdot\left(1\right)+\frac{299}{40} \\
&= 7
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-3\right)
&= \frac{2}{5}\cdot\left(-3\right)^2-\frac{1}{2}\cdot\left(-3\right)+\frac{71}{10} \\
&= \frac{61}{5}=y_1 \\
r\left(1\right)
&= \frac{2}{5}\cdot\left(1\right)^2-\frac{1}{2}\cdot\left(1\right)+\frac{71}{10} \\
&= 7=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid \frac{61}{5}\right)$ und $S_2\left(1\mid 7\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
