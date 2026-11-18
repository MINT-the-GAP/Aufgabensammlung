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

tags: Lineare Funktionen, Nullstellen, Dezimalzahlen, Bruchrechnung, Ganze Zahlen, mittel, normal, Berechnen

comment: Berechne die Nullstellen von vier weiteren linearen Funktionen mit Dezimalzahlen, Brüchen und ganzen Zahlen.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit gemischten Zahlenarten berechnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=\frac{3}{4}x-1{,}5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=3/4*x-1.5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= \frac{3}{4}x-1{,}5 &&\quad |+1{,}5 \\
1{,}5 &= \frac{3}{4}x &&\quad |:\frac{3}{4} \\
2 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=2$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-0{,}8x-\frac{12}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-0.8*x-12/5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -0{,}8x-\frac{12}{5} &&\quad |+\frac{12}{5} \\
\frac{12}{5} &= -0{,}8x &&\quad |:(-0{,}8) \\
-3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=5x+0{,}4$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=5*x+0.4`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 5x+0{,}4 &&\quad |-0{,}4 \\
-0{,}4 &= 5x &&\quad |:5 \\
-0{,}08 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-0{,}08$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-\frac{5}{6}x+2{,}5$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-5/6*x+2.5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -\frac{5}{6}x+2{,}5 &&\quad |-2{,}5 \\
-2{,}5 &= -\frac{5}{6}x &&\quad |:(-\frac{5}{6}) \\
3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

</section>
