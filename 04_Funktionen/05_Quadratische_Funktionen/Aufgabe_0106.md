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

tags: Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Scheitelpunktsform, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von vier Parabeln in Scheitelpunktsform mit linearen Funktionen mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte von Parabeln in Scheitelpunktsform mit linearen Funktionen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Parabel mit der zugehörigen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{1}{3}\left(x-1\right)^2+\frac{1}{2}$ und $g(x)=\frac{1}{3}x+\frac{5}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1/3*(x-1)^2+1/2`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1/3*x+5/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{1}{3}\left(x-1\right)^2+\frac{1}{2} &= \frac{1}{3}x+\frac{5}{6} &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{1}{3}x^2-\frac{2}{3}x+\frac{5}{6} &= \frac{1}{3}x+\frac{5}{6} &&\quad |-\left(\frac{1}{3}x+\frac{5}{6}\right) \\
\frac{1}{3}x^2-x &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{3}x\left(x-3\right) &= 0
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
y_1 &= g\left(0\right) \\
&= \frac{1}{3}\cdot\left(0\right)+\frac{5}{6} \\
&= \frac{5}{6} \\
y_2 &= g\left(3\right) \\
&= \frac{1}{3}\cdot\left(3\right)+\frac{5}{6} \\
&= \frac{11}{6}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
f\left(0\right)
&= \frac{1}{3}\cdot\left(\left(0\right)-1\right)^2+\frac{1}{2} \\
&= \frac{5}{6}=y_1 \\
f\left(3\right)
&= \frac{1}{3}\cdot\left(\left(3\right)-1\right)^2+\frac{1}{2} \\
&= \frac{11}{6}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(0\mid \frac{5}{6}\right)$ und $S_2\left(3\mid \frac{11}{6}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=-\frac{2}{5}\left(x+2\right)^2+\frac{3}{4}$ und $p(x)=-\frac{4}{5}x-\frac{41}{20}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=-2/5*(x+2)^2+3/4`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=-4/5*x-41/20;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
-\frac{2}{5}\left(x+2\right)^2+\frac{3}{4} &= -\frac{4}{5}x-\frac{41}{20} &&\quad |\text{linke Seite ausmultiplizieren} \\
-\frac{2}{5}x^2-\frac{8}{5}x-\frac{17}{20} &= -\frac{4}{5}x-\frac{41}{20} &&\quad |-\left(-\frac{4}{5}x-\frac{41}{20}\right) \\
-\frac{2}{5}x^2-\frac{4}{5}x+\frac{6}{5} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{2}{5}\left(x+3\right)\left(x-1\right) &= 0
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
y_1 &= p\left(-3\right) \\
&= -\frac{4}{5}\cdot\left(-3\right)-\frac{41}{20} \\
&= \frac{7}{20} \\
y_2 &= p\left(1\right) \\
&= -\frac{4}{5}\cdot\left(1\right)-\frac{41}{20} \\
&= -\frac{57}{20}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
h\left(-3\right)
&= -\frac{2}{5}\cdot\left(\left(-3\right)+2\right)^2+\frac{3}{4} \\
&= \frac{7}{20}=y_1 \\
h\left(1\right)
&= -\frac{2}{5}\cdot\left(\left(1\right)+2\right)^2+\frac{3}{4} \\
&= -\frac{57}{20}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid \frac{7}{20}\right)$ und $S_2\left(1\mid -\frac{57}{20}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{3}{8}\left(x-2\right)^2-1$ und $r(x)=\frac{3}{8}x-1$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=3/8*(x-2)^2-1`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=3/8*x-1;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{3}{8}\left(x-2\right)^2-1 &= \frac{3}{8}x-1 &&\quad |\text{linke Seite ausmultiplizieren} \\
\frac{3}{8}x^2-\frac{3}{2}x+\frac{1}{2} &= \frac{3}{8}x-1 &&\quad |-\left(\frac{3}{8}x-1\right) \\
\frac{3}{8}x^2-\frac{15}{8}x+\frac{3}{2} &= 0 &&\quad |\text{faktorisieren} \\
\frac{3}{8}\left(x-1\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= 1, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= r\left(1\right) \\
&= \frac{3}{8}\cdot\left(1\right)-1 \\
&= -\frac{5}{8} \\
y_2 &= r\left(4\right) \\
&= \frac{3}{8}\cdot\left(4\right)-1 \\
&= \frac{1}{2}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
q\left(1\right)
&= \frac{3}{8}\cdot\left(\left(1\right)-2\right)^2-1 \\
&= -\frac{5}{8}=y_1 \\
q\left(4\right)
&= \frac{3}{8}\cdot\left(\left(4\right)-2\right)^2-1 \\
&= \frac{1}{2}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(1\mid -\frac{5}{8}\right)$ und $S_2\left(4\mid \frac{1}{2}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $s(x)=-\frac{1}{4}\left(x+1\right)^2+\frac{5}{6}$ und $t(x)=-\frac{1}{2}x-\frac{5}{12}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`s(x)=-1/4*(x+1)^2+5/6`,`aufgabe=schnittpunkte;zweitefunktion=t(x)=-1/2*x-5/12;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
s(x) \stackrel{!}{=} t(x) \\
-\frac{1}{4}\left(x+1\right)^2+\frac{5}{6} &= -\frac{1}{2}x-\frac{5}{12} &&\quad |\text{linke Seite ausmultiplizieren} \\
-\frac{1}{4}x^2-\frac{1}{2}x+\frac{7}{12} &= -\frac{1}{2}x-\frac{5}{12} &&\quad |-\left(-\frac{1}{2}x-\frac{5}{12}\right) \\
-\frac{1}{4}x^2+1 &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{4}\left(x+2\right)\left(x-2\right) &= 0
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
y_1 &= t\left(-2\right) \\
&= -\frac{1}{2}\cdot\left(-2\right)-\frac{5}{12} \\
&= \frac{7}{12} \\
y_2 &= t\left(2\right) \\
&= -\frac{1}{2}\cdot\left(2\right)-\frac{5}{12} \\
&= -\frac{17}{12}
\end{aligned}
$$

Die Probe mit der Parabel ergibt:

$$
\begin{aligned}
s\left(-2\right)
&= -\frac{1}{4}\cdot\left(\left(-2\right)+1\right)^2+\frac{5}{6} \\
&= \frac{7}{12}=y_1 \\
s\left(2\right)
&= -\frac{1}{4}\cdot\left(\left(2\right)+1\right)^2+\frac{5}{6} \\
&= -\frac{17}{12}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid \frac{7}{12}\right)$ und $S_2\left(2\mid -\frac{17}{12}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Lineare Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
