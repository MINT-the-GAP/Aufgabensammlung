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

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=\frac{5}{6}x^2+\frac{5}{6}x-\frac{5}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=5/6*x^2+5/6*x-5/3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \frac{5}{6}x^2+\frac{5}{6}x-\frac{5}{3} \\
0 &= \frac{5}{6}\left(x+2\right)\left(x-1\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+2 &= 0 \quad \text{oder} \quad x-1 = 0 \\
x_1 &= -2, \qquad x_2 = 1
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-2$ und $x_2=1$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-\frac{3}{8}x^2+3x-\frac{9}{2}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-3/8*x^2+3*x-9/2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{3}{8}x^2+3x-\frac{9}{2} \\
0 &= -\frac{3}{8}\left(x-2\right)\left(x-6\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x-2 &= 0 \quad \text{oder} \quad x-6 = 0 \\
x_1 &= 2, \qquad x_2 = 6
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=2$ und $x_2=6$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=\frac{7}{10}x^2-\frac{21}{10}x-\frac{14}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=7/10*x^2-21/10*x-14/5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= \frac{7}{10}x^2-\frac{21}{10}x-\frac{14}{5} \\
0 &= \frac{7}{10}\left(x+1\right)\left(x-4\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+1 &= 0 \quad \text{oder} \quad x-4 = 0 \\
x_1 &= -1, \qquad x_2 = 4
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-1$ und $x_2=4$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-\frac{5}{12}x^2-\frac{5}{6}x+\frac{10}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-5/12*x^2-5/6*x+10/3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -\frac{5}{12}x^2-\frac{5}{6}x+\frac{10}{3} \\
0 &= -\frac{5}{12}\left(x+4\right)\left(x-2\right)
\end{aligned}
$$

Nach dem Satz vom Nullprodukt gilt:

$$
\begin{aligned}
x+4 &= 0 \quad \text{oder} \quad x-2 = 0 \\
x_1 &= -4, \qquad x_2 = 2
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-4$ und $x_2=2$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

</section>
