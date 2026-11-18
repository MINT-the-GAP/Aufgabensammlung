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

tags: Quadratische Funktionen, Nullstellen, Scheitelpunktsform, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Nullstellen von vier quadratischen Funktionen in Scheitelpunktsform mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen quadratischer Funktionen berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstellen der angegebenen quadratischen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=0{,}5\left(x-1{,}5\right)^2-2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*(x-1.5)^2-2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 0{,}5\left(x-1{,}5\right)^2-2 \\
2 &= 0{,}5\left(x-1{,}5\right)^2 &&\quad |:0{,}5 \\
4 &= \left(x-1{,}5\right)^2 \\
x-1{,}5 &= \pm 2 \\
x_{1,2} &= 1{,}5 \pm 2 \\
x_1 &= -0{,}5, \qquad x_2 = 3{,}5
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-0{,}5$ und $x_2=3{,}5$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-1{,}2\left(x+0{,}5\right)^2+1{,}2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-1.2*(x+0.5)^2+1.2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -1{,}2\left(x+0{,}5\right)^2+1{,}2 \\
-1{,}2 &= -1{,}2\left(x+0{,}5\right)^2 &&\quad |:\left(-1{,}2\right) \\
1 &= \left(x+0{,}5\right)^2 \\
x+0{,}5 &= \pm 1 \\
x_{1,2} &= -0{,}5 \pm 1 \\
x_1 &= -1{,}5, \qquad x_2 = 0{,}5
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-1{,}5$ und $x_2=0{,}5$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=0{,}75\left(x-2{,}25\right)^2-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=0.75*(x-2.25)^2-3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 0{,}75\left(x-2{,}25\right)^2-3 \\
3 &= 0{,}75\left(x-2{,}25\right)^2 &&\quad |:0{,}75 \\
4 &= \left(x-2{,}25\right)^2 \\
x-2{,}25 &= \pm 2 \\
x_{1,2} &= 2{,}25 \pm 2 \\
x_1 &= 0{,}25, \qquad x_2 = 4{,}25
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=0{,}25$ und $x_2=4{,}25$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-2{,}5\left(x-1{,}2\right)^2+1{,}6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-2.5*(x-1.2)^2+1.6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -2{,}5\left(x-1{,}2\right)^2+1{,}6 \\
-1{,}6 &= -2{,}5\left(x-1{,}2\right)^2 &&\quad |:\left(-2{,}5\right) \\
0{,}64 &= \left(x-1{,}2\right)^2 \\
x-1{,}2 &= \pm 0{,}8 \\
x_{1,2} &= 1{,}2 \pm 0{,}8 \\
x_1 &= 0{,}4, \qquad x_2 = 2
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=0{,}4$ und $x_2=2$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

</section>
