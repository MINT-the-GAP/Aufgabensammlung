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

tags: Quadratische Funktionen, Nullstellen, Scheitelpunktsform, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Nullstellen von vier quadratischen Funktionen in Scheitelpunktsform mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen quadratischer Funktionen berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstellen der angegebenen quadratischen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=\left(x-4\right)^2-9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=(x-4)^2-9`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \left(x-4\right)^2-9 \\
9 &= \left(x-4\right)^2 \\
x-4 &= \pm 3 \\
x_{1,2} &= 4 \pm 3 \\
x_1 &= 1, \qquad x_2 = 7
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=1$ und $x_2=7$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-2\left(x-3\right)^2+8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-2*(x-3)^2+8`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -2\left(x-3\right)^2+8 \\
-8 &= -2\left(x-3\right)^2 &&\quad |:\left(-2\right) \\
4 &= \left(x-3\right)^2 \\
x-3 &= \pm 2 \\
x_{1,2} &= 3 \pm 2 \\
x_1 &= 1, \qquad x_2 = 5
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=1$ und $x_2=5$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=3\left(x-5\right)^2-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=3*(x-5)^2-3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 3\left(x-5\right)^2-3 \\
3 &= 3\left(x-5\right)^2 &&\quad |:3 \\
1 &= \left(x-5\right)^2 \\
x-5 &= \pm 1 \\
x_{1,2} &= 5 \pm 1 \\
x_1 &= 4, \qquad x_2 = 6
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=4$ und $x_2=6$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-4\left(x-6\right)^2+16$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-4*(x-6)^2+16`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -4\left(x-6\right)^2+16 \\
-16 &= -4\left(x-6\right)^2 &&\quad |:\left(-4\right) \\
4 &= \left(x-6\right)^2 \\
x-6 &= \pm 2 \\
x_{1,2} &= 6 \pm 2 \\
x_1 &= 4, \qquad x_2 = 8
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=4$ und $x_2=8$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle)

</div>

</section>
