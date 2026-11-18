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

comment: Berechne die Nullstellen von vier weiteren linearen Funktionen mit Brüchen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit Brüchen berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=\frac{2}{5}x-8$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=2/5*x-8`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \frac{2}{5}x-8 &&\quad |+8 \\
8 &= \frac{2}{5}x &&\quad |:\frac{2}{5} \\
20 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=20$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-\frac{5}{8}x-10$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-5/8*x-10`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{5}{8}x-10 &&\quad |+10 \\
10 &= -\frac{5}{8}x &&\quad |:(-\frac{5}{8}) \\
-16 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-16$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=6x+\frac{9}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=6*x+9/10`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 6x+\frac{9}{10} &&\quad |-\frac{9}{10} \\
-\frac{9}{10} &= 6x &&\quad |:6 \\
-\frac{3}{20} &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-\frac{3}{20}$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-4x+\frac{11}{12}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-4*x+11/12`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -4x+\frac{11}{12} &&\quad |-\frac{11}{12} \\
-\frac{11}{12} &= -4x &&\quad |:(-4) \\
\frac{11}{48} &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=\frac{11}{48}$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung)

</div>

</section>
