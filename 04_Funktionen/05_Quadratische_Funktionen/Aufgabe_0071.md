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

tags: Quadratische Funktionen, Nullstellen, Parameterform quadratischer Funktionen, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Nullstellen von vier quadratischen Funktionen in Parameterform mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen quadratischer Funktionen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstellen der angegebenen quadratischen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=\frac{1}{2}x^2-2x+\frac{3}{2}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1/2*x^2-2*x+3/2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \frac{1}{2}x^2-2x+\frac{3}{2} \\
0 &= \frac{1}{2}\left(x-1\right)\left(x-3\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-1 &= 0 \quad \text{oder} \quad x-3 = 0 \\
x_1 &= 1, \qquad x_2 = 3
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=1$ und $x_2=3$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-\frac{2}{3}x^2+\frac{2}{3}x+\frac{4}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-2/3*x^2+2/3*x+4/3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{2}{3}x^2+\frac{2}{3}x+\frac{4}{3} \\
0 &= -\frac{2}{3}\left(x+1\right)\left(x-2\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 &= 0 \quad \text{oder} \quad x-2 = 0 \\
x_1 &= -1, \qquad x_2 = 2
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-1$ und $x_2=2$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=\frac{3}{4}x^2-\frac{9}{2}x+6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=3/4*x^2-9/2*x+6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= \frac{3}{4}x^2-\frac{9}{2}x+6 \\
0 &= \frac{3}{4}\left(x-2\right)\left(x-4\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 &= 0 \quad \text{oder} \quad x-4 = 0 \\
x_1 &= 2, \qquad x_2 = 4
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=2$ und $x_2=4$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-\frac{4}{5}x^2-\frac{8}{5}x+\frac{12}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-4/5*x^2-8/5*x+12/5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -\frac{4}{5}x^2-\frac{8}{5}x+\frac{12}{5} \\
0 &= -\frac{4}{5}\left(x+3\right)\left(x-1\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+3 &= 0 \quad \text{oder} \quad x-1 = 0 \\
x_1 &= -3, \qquad x_2 = 1
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-3$ und $x_2=1$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

</section>
