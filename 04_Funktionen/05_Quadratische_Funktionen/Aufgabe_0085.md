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

tags: Quadratische Funktionen, Nullstellen, Scheitelpunktsform, Dezimalzahlen, Bruchrechnung, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Nullstellen von vier quadratischen Funktionen in Scheitelpunktsform mit Dezimalzahlen, Bruchrechnung und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen quadratischer Funktionen berechnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstellen der angegebenen quadratischen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstellen der Funktion $f(x)=0{,}5\left(x-\frac{1}{2}\right)^2-2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.5*(x-1/2)^2-2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 0{,}5\left(x-\frac{1}{2}\right)^2-2 \\
2 &= 0{,}5\left(x-\frac{1}{2}\right)^2 &&\quad |:0{,}5 \\
4 &= \left(x-\frac{1}{2}\right)^2 \\
x-\frac{1}{2} &= \pm 2 \\
x_{1,2} &= \frac{1}{2} \pm 2 \\
x_1 &= -\frac{3}{2}, \qquad x_2 = \frac{5}{2}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{3}{2}$ und $x_2=\frac{5}{2}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstellen der Funktion $g(x)=-\frac{3}{4}\left(x-1{,}5\right)^2+3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-3/4*(x-1.5)^2+3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{3}{4}\left(x-1{,}5\right)^2+3 \\
-3 &= -\frac{3}{4}\left(x-1{,}5\right)^2 &&\quad |:\left(-\frac{3}{4}\right) \\
4 &= \left(x-1{,}5\right)^2 \\
x-1{,}5 &= \pm 2 \\
x_{1,2} &= \frac{3}{2} \pm 2 \\
x_1 &= -\frac{1}{2}, \qquad x_2 = \frac{7}{2}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{1}{2}$ und $x_2=\frac{7}{2}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstellen der Funktion $h(x)=1{,}25\left(x+\frac{2}{5}\right)^2-5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=1.25*(x+2/5)^2-5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 1{,}25\left(x+\frac{2}{5}\right)^2-5 \\
5 &= 1{,}25\left(x+\frac{2}{5}\right)^2 &&\quad |:1{,}25 \\
4 &= \left(x+\frac{2}{5}\right)^2 \\
x+\frac{2}{5} &= \pm 2 \\
x_{1,2} &= -\frac{2}{5} \pm 2 \\
x_1 &= -\frac{12}{5}, \qquad x_2 = \frac{8}{5}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{12}{5}$ und $x_2=\frac{8}{5}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstellen der Funktion $p(x)=-\frac{1}{2}\left(x+0{,}75\right)^2+2$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-1/2*(x+0.75)^2+2`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -\frac{1}{2}\left(x+0{,}75\right)^2+2 \\
-2 &= -\frac{1}{2}\left(x+0{,}75\right)^2 &&\quad |:\left(-\frac{1}{2}\right) \\
4 &= \left(x+0{,}75\right)^2 \\
x+0{,}75 &= \pm 2 \\
x_{1,2} &= -\frac{3}{4} \pm 2 \\
x_1 &= -\frac{11}{4}, \qquad x_2 = \frac{5}{4}
\end{aligned}
$$

Die Nullstellen der Funktion sind $x_1=-\frac{11}{4}$ und $x_2=\frac{5}{4}$.
****************

@ADetails(1=BE; Quadratische Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

</section>
