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

tags: Quadratische Funktionen, Nullstellen, Scheitelpunktsform, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Nullstellen von vier quadratischen Funktionen in Scheitelpunktsform mit Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen quadratischer Funktionen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstellen der angegebenen quadratischen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=2\left(x-\frac{5}{6}\right)^2-2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2*(x-5/6)^2-2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 2\left(x-\frac{5}{6}\right)^2-2 \\
2 &= 2\left(x-\frac{5}{6}\right)^2 &&\quad |:2 \\
1 &= \left(x-\frac{5}{6}\right)^2 \\
x-\frac{5}{6} &= \pm 1 \\
x_{1,2} &= \frac{5}{6} \pm 1 \\
x_1 &= -\frac{1}{6}, \qquad x_2 = \frac{11}{6}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{1}{6}$ und $x_2=\frac{11}{6}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-\left(x+\frac{3}{8}\right)^2+4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-(x+3/8)^2+4`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\left(x+\frac{3}{8}\right)^2+4 \\
-4 &= -\left(x+\frac{3}{8}\right)^2 \\
4 &= \left(x+\frac{3}{8}\right)^2 \\
x+\frac{3}{8} &= \pm 2 \\
x_{1,2} &= -\frac{3}{8} \pm 2 \\
x_1 &= -\frac{19}{8}, \qquad x_2 = \frac{13}{8}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{19}{8}$ und $x_2=\frac{13}{8}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=3\left(x-\frac{7}{10}\right)^2-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=3*(x-7/10)^2-3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 3\left(x-\frac{7}{10}\right)^2-3 \\
3 &= 3\left(x-\frac{7}{10}\right)^2 &&\quad |:3 \\
1 &= \left(x-\frac{7}{10}\right)^2 \\
x-\frac{7}{10} &= \pm 1 \\
x_{1,2} &= \frac{7}{10} \pm 1 \\
x_1 &= -\frac{3}{10}, \qquad x_2 = \frac{17}{10}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{3}{10}$ und $x_2=\frac{17}{10}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-2\left(x+\frac{5}{12}\right)^2+8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-2*(x+5/12)^2+8`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -2\left(x+\frac{5}{12}\right)^2+8 \\
-8 &= -2\left(x+\frac{5}{12}\right)^2 &&\quad |:\left(-2\right) \\
4 &= \left(x+\frac{5}{12}\right)^2 \\
x+\frac{5}{12} &= \pm 2 \\
x_{1,2} &= -\frac{5}{12} \pm 2 \\
x_1 &= -\frac{29}{12}, \qquad x_2 = \frac{19}{12}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{29}{12}$ und $x_2=\frac{19}{12}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung)

</div>

</section>
