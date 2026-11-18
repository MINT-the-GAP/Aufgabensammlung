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

comment: Berechne die Nullstellen von vier gemischten linearen Funktionen mit unterschiedlichen Zahlenarten.

author: Martin Lommatzsch
-->

# Nullstellen linearer Funktionen mit gemischten Zahlenarten berechnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** in jeder Teilaufgabe die Nullstelle der angegebenen linearen Funktion.

<section class="dynFlex">

<div class="flex-child">

**$a)$** **Berechne** die Nullstelle der Funktion $f(x)=0{,}6x-\frac{9}{10}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`f(x)=0.6*x-9/10`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
f(x) \stackrel{!}{=} 0 &= 0{,}6x-\frac{9}{10} &&\quad |+\frac{9}{10} \\
\frac{9}{10} &= 0{,}6x &&\quad |:0{,}6 \\
1{,}5 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=1{,}5$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$b)$** **Berechne** die Nullstelle der Funktion $g(x)=-\frac{5}{4}x-3{,}75$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`g(x)=-5/4*x-3.75`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
g(x) \stackrel{!}{=} 0 &= -\frac{5}{4}x-3{,}75 &&\quad |+3{,}75 \\
3{,}75 &= -\frac{5}{4}x &&\quad |:(-\frac{5}{4}) \\
-3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$c)$** **Berechne** die Nullstelle der Funktion $h(x)=6x+0{,}9$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`h(x)=6*x+0.9`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
h(x) \stackrel{!}{=} 0 &= 6x+0{,}9 &&\quad |-0{,}9 \\
-0{,}9 &= 6x &&\quad |:6 \\
-0{,}15 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=-0{,}15$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

**$d)$** **Berechne** die Nullstelle der Funktion $p(x)=-0{,}4x+\frac{6}{5}$.

<!-- data-hint-button="1" data-solution-button="3" -->
@BerechneOCR(`p(x)=-0.4*x+6/5`,`aufgabe=nullstellen;zeilenrueckmeldung=1`)
[[?]] @Explain
****************
$$
\begin{aligned}
p(x) \stackrel{!}{=} 0 &= -0{,}4x+\frac{6}{5} &&\quad |-\frac{6}{5} \\
-\frac{6}{5} &= -0{,}4x &&\quad |:(-0{,}4) \\
3 &= x
\end{aligned}
$$

Die Nullstelle ist $x_N=3$.
****************

@ADetails(1=BE; Lineare Funktionen, Nullstelle, Bruchrechnung, Dezimalzahlen)

</div>

</section>
