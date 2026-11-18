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

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=1{,}5\left(x+1{,}5\right)^2-6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1.5*(x+1.5)^2-6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 1{,}5\left(x+1{,}5\right)^2-6 \\
6 &= 1{,}5\left(x+1{,}5\right)^2 &&\quad |:1{,}5 \\
4 &= \left(x+1{,}5\right)^2 \\
x+1{,}5 &= \pm 2 \\
x_{1,2} &= -1{,}5 \pm 2 \\
x_1 &= -3{,}5, \qquad x_2 = 0{,}5
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-3{,}5$ und $x_2=0{,}5$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-0{,}8\left(x-2{,}4\right)^2+1{,}8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-0.8*(x-2.4)^2+1.8`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -0{,}8\left(x-2{,}4\right)^2+1{,}8 \\
-1{,}8 &= -0{,}8\left(x-2{,}4\right)^2 &&\quad |:\left(-0{,}8\right) \\
2{,}25 &= \left(x-2{,}4\right)^2 \\
x-2{,}4 &= \pm 1{,}5 \\
x_{1,2} &= 2{,}4 \pm 1{,}5 \\
x_1 &= 0{,}9, \qquad x_2 = 3{,}9
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=0{,}9$ und $x_2=3{,}9$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=2{,}25\left(x-0{,}75\right)^2-9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=2.25*(x-0.75)^2-9`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 2{,}25\left(x-0{,}75\right)^2-9 \\
9 &= 2{,}25\left(x-0{,}75\right)^2 &&\quad |:2{,}25 \\
4 &= \left(x-0{,}75\right)^2 \\
x-0{,}75 &= \pm 2 \\
x_{1,2} &= 0{,}75 \pm 2 \\
x_1 &= -1{,}25, \qquad x_2 = 2{,}75
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-1{,}25$ und $x_2=2{,}75$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-1{,}25\left(x+2{,}5\right)^2+5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-1.25*(x+2.5)^2+5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -1{,}25\left(x+2{,}5\right)^2+5 \\
-5 &= -1{,}25\left(x+2{,}5\right)^2 &&\quad |:\left(-1{,}25\right) \\
4 &= \left(x+2{,}5\right)^2 \\
x+2{,}5 &= \pm 2 \\
x_{1,2} &= -2{,}5 \pm 2 \\
x_1 &= -4{,}5, \qquad x_2 = -0{,}5
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-4{,}5$ und $x_2=-0{,}5$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Dezimalzahlen)

</div>

</section>
