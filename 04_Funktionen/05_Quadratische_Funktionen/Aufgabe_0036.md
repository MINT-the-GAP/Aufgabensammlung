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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0036A;1;1;1`)
@AxisLabel(`id=QF0036A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0036A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0036A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-1{,}5\left(x+0{,}75\right)^2+0{,}5$.`)

@Rekonstruktion(`QF0036A;-1.5*(x+0.75)^2+0.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}5$. In der Scheitelpunktsform gelten $a=-1{,}5$, $h=-0{,}75$ und $e=0{,}5$. Der Scheitelpunkt ist $S(-0{,}75\mid 0{,}5)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid -1)$ und $(0{,}25\mid -1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0036B;1;1;1`)
@AxisLabel(`id=QF0036B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0036B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0036B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}85x^2+2{,}04x-0{,}876$.`)

@Rekonstruktion(`QF0036B;0.85*x^2+2.04*x-0.876;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}85$. In der Parameterform gelten $a=0{,}85$, $b=2{,}04$ und $c=-0{,}876$. Der Scheitelpunkt ist $S(-1{,}2\mid -2{,}1)$, die Symmetrieachse lautet $x=-1{,}2$. Der Graph verläuft beispielsweise durch die Punkte $(-2{,}2\mid -1{,}25)$ und $(-0{,}2\mid -1{,}25)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0036C;1;1;1`)
@AxisLabel(`id=QF0036C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0036C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0036C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}85\left(x-1{,}4\right)^2+2{,}3$.`)

@Rekonstruktion(`QF0036C;0.85*(x-1.4)^2+2.3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}85$. In der Scheitelpunktsform gelten $a=0{,}85$, $h=1{,}4$ und $e=2{,}3$. Der Scheitelpunkt ist $S(1{,}4\mid 2{,}3)$, die Symmetrieachse lautet $x=1{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(0{,}4\mid 3{,}15)$ und $(2{,}4\mid 3{,}15)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
