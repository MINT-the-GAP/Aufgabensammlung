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

tags: Lineare Funktionen, Nullstellen, Natürliche Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Nullstellen von vier weiteren linearen Funktionen mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit natürlichen Zahlen berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=6x-30$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=6*x-30`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 6x-30 &&\quad |+30 \\
30 &= 6x &&\quad |:6 \\
5 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=5$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=16-8x$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=16-8*x`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= 16-8x &&\quad |-16 \\
-16 &= -8x &&\quad |:(-8) \\
2 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=2$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=9x-27$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=9*x-27`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 9x-27 &&\quad |+27 \\
27 &= 9x &&\quad |:9 \\
3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=28-4x$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=28-4*x`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= 28-4x &&\quad |-28 \\
-28 &= -4x &&\quad |:(-4) \\
7 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=7$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

</section>
