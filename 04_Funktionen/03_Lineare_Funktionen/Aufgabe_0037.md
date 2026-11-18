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

tags: Lineare Funktionen, Nullstellen, Dezimalzahlen, Ganze Zahlen, leicht, niedrig, Berechnen

comment: Berechne die Nullstellen von vier linearen Funktionen mit Dezimalzahlen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit Dezimalzahlen berechnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=1{,}5x-6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=1.5*x-6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 1{,}5x-6 &&\quad |+6 \\
6 &= 1{,}5x &&\quad |:1{,}5 \\
4 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=4$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-0{,}8x+4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-0.8*x+4`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -0{,}8x+4 &&\quad |-4 \\
-4 &= -0{,}8x &&\quad |:(-0{,}8) \\
5 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=5$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=2x+3{,}6$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=2*x+3.6`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 2x+3{,}6 &&\quad |-3{,}6 \\
-3{,}6 &= 2x &&\quad |:2 \\
-1{,}8 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-1{,}8$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-2{,}5x-7{,}5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-2.5*x-7.5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -2{,}5x-7{,}5 &&\quad |+7{,}5 \\
7{,}5 &= -2{,}5x &&\quad |:(-2{,}5) \\
-3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Dezimalzahlen)

</div>

</section>
