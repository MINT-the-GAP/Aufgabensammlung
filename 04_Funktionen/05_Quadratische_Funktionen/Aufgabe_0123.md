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

tags: Quadratische Funktionen, Schnittpunkt, Scheitelpunktsform, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Schnittpunkte von drei Paaren quadratischer Funktionen in Scheitelpunktsform mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Schnittpunkte quadratischer Funktionen in Scheitelpunktsform berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Schnittpunkte der Graphen der beiden quadratischen Funktionen.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $f(x)=\frac{7}{10}\left(x+2\right)^2+\frac{239}{30}$ und $g(x)=\frac{1}{2}\left(x+2\right)^2+\frac{49}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=7/10*(x+2)^2+239/30`,`aufgabe=schnittpunkte;zweitefunktion=g(x)=1/2*(x+2)^2+49/6;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} g(x) \\
\frac{7}{10}\left(x+2\right)^2+\frac{239}{30} &= \frac{1}{2}\left(x+2\right)^2+\frac{49}{6} &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{7}{10}x^2+\frac{14}{5}x+\frac{323}{30} &= \frac{1}{2}x^2+2x+\frac{61}{6} &&\quad |-\left(\frac{1}{2}x^2+2x+\frac{61}{6}\right) \\
\frac{1}{5}x^2+\frac{4}{5}x+\frac{3}{5} &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{5}\left(x+3\right)\left(x+1\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 = 0 &\quad \text{oder} \quad x+1 = 0 \\
x_1 &= -3, \qquad x_2 = -1
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= f\left(-3\right) \\
&= \frac{7}{10}\cdot\left(\left(-3\right)+2\right)^2+\frac{239}{30} \\
&= \frac{26}{3} \\
y_2 &= f\left(-1\right) \\
&= \frac{7}{10}\cdot\left(\left(-1\right)+2\right)^2+\frac{239}{30} \\
&= \frac{26}{3}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
g\left(-3\right)
&= \frac{1}{2}\cdot\left(\left(-3\right)+2\right)^2+\frac{49}{6} \\
&= \frac{26}{3}=y_1 \\
g\left(-1\right)
&= \frac{1}{2}\cdot\left(\left(-1\right)+2\right)^2+\frac{49}{6} \\
&= \frac{26}{3}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid \frac{26}{3}\right)$ und $S_2\left(-1\mid \frac{26}{3}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $h(x)=\frac{1}{2}\left(x+1\right)^2+\frac{235}{24}$ und $p(x)=\frac{2}{3}\left(x+1\right)^2+\frac{73}{8}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1/2*(x+1)^2+235/24`,`aufgabe=schnittpunkte;zweitefunktion=p(x)=2/3*(x+1)^2+73/8;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} p(x) \\
\frac{1}{2}\left(x+1\right)^2+\frac{235}{24} &= \frac{2}{3}\left(x+1\right)^2+\frac{73}{8} &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{1}{2}x^2+x+\frac{247}{24} &= \frac{2}{3}x^2+\frac{4}{3}x+\frac{235}{24} &&\quad |-\left(\frac{2}{3}x^2+\frac{4}{3}x+\frac{235}{24}\right) \\
-\frac{1}{6}x^2-\frac{1}{3}x+\frac{1}{2} &= 0 &&\quad |\text{faktorisieren} \\
-\frac{1}{6}\left(x+3\right)\left(x-1\right) &= 0
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
y_1 &= h\left(-3\right) \\
&= \frac{1}{2}\cdot\left(\left(-3\right)+1\right)^2+\frac{235}{24} \\
&= \frac{283}{24} \\
y_2 &= h\left(1\right) \\
&= \frac{1}{2}\cdot\left(\left(1\right)+1\right)^2+\frac{235}{24} \\
&= \frac{283}{24}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
p\left(-3\right)
&= \frac{2}{3}\cdot\left(\left(-3\right)+1\right)^2+\frac{73}{8} \\
&= \frac{283}{24}=y_1 \\
p\left(1\right)
&= \frac{2}{3}\cdot\left(\left(1\right)+1\right)^2+\frac{73}{8} \\
&= \frac{283}{24}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-3\mid \frac{283}{24}\right)$ und $S_2\left(1\mid \frac{283}{24}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Schnittpunkte der Graphen der Funktionen $q(x)=\frac{13}{40}\left(x-1\right)^2+\frac{359}{40}$ und $r(x)=\frac{1}{5}\left(x-1\right)^2+\frac{101}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`q(x)=13/40*(x-1)^2+359/40`,`aufgabe=schnittpunkte;zweitefunktion=r(x)=1/5*(x-1)^2+101/10;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
q(x) \stackrel{!}{=} r(x) \\
\frac{13}{40}\left(x-1\right)^2+\frac{359}{40} &= \frac{1}{5}\left(x-1\right)^2+\frac{101}{10} &&\quad |\text{beide Seiten ausmultiplizieren} \\
\frac{13}{40}x^2-\frac{13}{20}x+\frac{93}{10} &= \frac{1}{5}x^2-\frac{2}{5}x+\frac{103}{10} &&\quad |-\left(\frac{1}{5}x^2-\frac{2}{5}x+\frac{103}{10}\right) \\
\frac{1}{8}x^2-\frac{1}{4}x-1 &= 0 &&\quad |\text{faktorisieren} \\
\frac{1}{8}\left(x+2\right)\left(x-4\right) &= 0
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 = 0 &\quad \text{oder} \quad x-4 = 0 \\
x_1 &= -2, \qquad x_2 = 4
\end{aligned}
$$

Für die beiden zweiten Koordinaten gilt:

$$
\begin{aligned}
y_1 &= q\left(-2\right) \\
&= \frac{13}{40}\cdot\left(\left(-2\right)-1\right)^2+\frac{359}{40} \\
&= \frac{119}{10} \\
y_2 &= q\left(4\right) \\
&= \frac{13}{40}\cdot\left(\left(4\right)-1\right)^2+\frac{359}{40} \\
&= \frac{119}{10}
\end{aligned}
$$

Die Probe mit der zweiten Funktion ergibt:

$$
\begin{aligned}
r\left(-2\right)
&= \frac{1}{5}\cdot\left(\left(-2\right)-1\right)^2+\frac{101}{10} \\
&= \frac{119}{10}=y_1 \\
r\left(4\right)
&= \frac{1}{5}\cdot\left(\left(4\right)-1\right)^2+\frac{101}{10} \\
&= \frac{119}{10}=y_2
\end{aligned}
$$

Die Schnittpunkte sind $S_1\left(-2\mid \frac{119}{10}\right)$ und $S_2\left(4\mid \frac{119}{10}\right)$.
****************

@ADetails(1=BE; Quadratische Funktionen, Schnittpunkt, Bruchrechnung)

</div>

</section>
