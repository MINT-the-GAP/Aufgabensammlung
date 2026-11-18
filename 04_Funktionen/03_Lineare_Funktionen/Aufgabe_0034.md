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

tags: Lineare Funktionen, Nullstellen, Ganze Zahlen, sehr leicht, sehr niedrig, Berechnen

comment: Berechne die Nullstellen von vier weiteren linearen Funktionen mit ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit ganzen Zahlen berechnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=5x+20$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=5*x+20`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 5x+20 &&\quad |-20 \\
-20 &= 5x &&\quad |:5 \\
-4 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-4$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-3x-24$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-3*x-24`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -3x-24 &&\quad |+24 \\
24 &= -3x &&\quad |:(-3) \\
-8 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-8$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=8x-32$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=8*x-32`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 8x-32 &&\quad |+32 \\
32 &= 8x &&\quad |:8 \\
4 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=4$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-6x+18$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-6*x+18`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -6x+18 &&\quad |-18 \\
-18 &= -6x &&\quad |:(-6) \\
3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle)

</div>

</section>
