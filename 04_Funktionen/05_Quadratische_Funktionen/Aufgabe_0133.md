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

tags: Quadratische Funktionen, Schnittpunkt, Parameterform, Scheitelpunktsform, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Parameterform und Scheitelpunktsform mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Parameter- und Scheitelpunktsform berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{7}{10}x^2+\frac{13}{5}x+\frac{85}{6}$ und $g(x)=\frac{1}{2}\left(x+2\right)^2+\frac{85}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=7/10*x^2+13/5*x+85/6`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1/2*(x+2)^2+85/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{7}{10}x^2+\frac{13}{5}x+\frac{85}{6} &= \frac{1}{2}\left(x+2\right)^2+\frac{85}{6} &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{7}{10}x^2+\frac{13}{5}x+\frac{85}{6} &= \frac{1}{2}x^2+2x+\frac{97}{6} &&\quad |-\left(\frac{1}{2}x^2+2x+\frac{97}{6}\right) \\
\frac{1}{5}x^2+\frac{3}{5}x-2 &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{5}\left(x+5\right)\left(x-2\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+5 = 0 &\quad \text{oder} \quad x-2 = 0 \\
x_1 &= -5, \qquad x_2 = 2
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-5\right) \\
&= \frac{7}{10}\cdot\left(-5\right)^2+\frac{13}{5}\cdot\left(-5\right)+\frac{85}{6} \\
&= \frac{56}{3} \\
y_2 &= f\left(2\right) \\
&= \frac{7}{10}\cdot\left(2\right)^2+\frac{13}{5}\cdot\left(2\right)+\frac{85}{6} \\
&= \frac{133}{6}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-5\right)
&= \frac{1}{2}\cdot\left(\left(-5\right)+2\right)^2+\frac{85}{6} \\
&= \frac{56}{3}=y_1 \\
g\left(2\right)
&= \frac{1}{2}\cdot\left(\left(2\right)+2\right)^2+\frac{85}{6} \\
&= \frac{133}{6}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-5\mid \frac{56}{3}\right)$ und $S_2\left(2\mid \frac{133}{6}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{1}{2}x^2+2x+\frac{133}{8}$ und $p(x)=\frac{2}{3}\left(x+1\right)^2+\frac{121}{8}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1/2*x^2+2*x+133/8`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2/3*(x+1)^2+121/8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{1}{2}x^2+2x+\frac{133}{8} &= \frac{2}{3}\left(x+1\right)^2+\frac{121}{8} &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{1}{2}x^2+2x+\frac{133}{8} &= \frac{2}{3}x^2+\frac{4}{3}x+\frac{379}{24} &&\quad |-\left(\frac{2}{3}x^2+\frac{4}{3}x+\frac{379}{24}\right) \\
-\frac{1}{6}x^2+\frac{2}{3}x+\frac{5}{6} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{6}\left(x+1\right)\left(x-5\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 = 0 &\quad \text{oder} \quad x-5 = 0 \\
x_1 &= -1, \qquad x_2 = 5
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= h\left(-1\right) \\
&= \frac{1}{2}\cdot\left(-1\right)^2+2\cdot\left(-1\right)+\frac{133}{8} \\
&= \frac{121}{8} \\
y_2 &= h\left(5\right) \\
&= \frac{1}{2}\cdot\left(5\right)^2+2\cdot\left(5\right)+\frac{133}{8} \\
&= \frac{313}{8}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-1\right)
&= \frac{2}{3}\cdot\left(\left(-1\right)+1\right)^2+\frac{121}{8} \\
&= \frac{121}{8}=y_1 \\
p\left(5\right)
&= \frac{2}{3}\cdot\left(\left(5\right)+1\right)^2+\frac{121}{8} \\
&= \frac{313}{8}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-1\mid \frac{121}{8}\right)$ und $S_2\left(5\mid \frac{313}{8}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{13}{40}x^2-\frac{1}{8}x+\frac{73}{5}$ und $r(x)=\frac{1}{5}\left(x\right)^2+\frac{161}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=13/40*x^2-1/8*x+73/5`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1/5*(x)^2+161/10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{13}{40}x^2-\frac{1}{8}x+\frac{73}{5} &= \frac{1}{5}\left(x\right)^2+\frac{161}{10} &&\quad |\text{rechte Seite ausmultiplizieren} \\
\frac{13}{40}x^2-\frac{1}{8}x+\frac{73}{5} &= \frac{1}{5}x^2+\frac{161}{10} &&\quad |-\left(\frac{1}{5}x^2+\frac{161}{10}\right) \\
\frac{1}{8}x^2-\frac{1}{8}x-\frac{3}{2} &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{8}\left(x+3\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= -3, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-3\right) \\
&= \frac{13}{40}\cdot\left(-3\right)^2-\frac{1}{8}\cdot\left(-3\right)+\frac{73}{5} \\
&= \frac{179}{10} \\
y_2 &= q\left(4\right) \\
&= \frac{13}{40}\cdot\left(4\right)^2-\frac{1}{8}\cdot\left(4\right)+\frac{73}{5} \\
&= \frac{193}{10}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-3\right)
&= \frac{1}{5}\cdot\left(\left(-3\right)\right)^2+\frac{161}{10} \\
&= \frac{179}{10}=y_1 \\
r\left(4\right)
&= \frac{1}{5}\cdot\left(\left(4\right)\right)^2+\frac{161}{10} \\
&= \frac{193}{10}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid \frac{179}{10}\right)$ und $S_2\left(4\mid \frac{193}{10}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
