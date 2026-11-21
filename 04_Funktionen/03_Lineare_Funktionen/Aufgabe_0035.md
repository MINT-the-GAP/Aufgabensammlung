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

tags: Lineare Funktionen, Nullstellen, Bruchrechnung, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Nullstellen von vier linearen Funktionen mit Brüchen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit Brüchen berechnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=\frac{1}{2}x-3$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1/2*x-3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \frac{1}{2}x-3 &&\quad |+3 \\
3 &= \frac{1}{2}x &&\quad |:\frac{1}{2} \\
6 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=6$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-\frac{3}{4}x+6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-3/4*x+6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{3}{4}x+6 &&\quad |-6 \\
-6 &= -\frac{3}{4}x &&\quad |:(-\frac{3}{4}) \\
8 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=8$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=5x+\frac{10}{3}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5*x+10/3`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 5x+\frac{10}{3} &&\quad |-\frac{10}{3} \\
-\frac{10}{3} &= 5x &&\quad |:5 \\
-\frac{2}{3} &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-\frac{2}{3}$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-2x-\frac{5}{6}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-2*x-5/6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -2x-\frac{5}{6} &&\quad |+\frac{5}{6} \\
\frac{5}{6} &= -2x &&\quad |:(-2) \\
-\frac{5}{12} &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-\frac{5}{12}$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

</section>
