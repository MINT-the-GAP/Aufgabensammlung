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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Dezimalzahlen, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0034A;1;1;1`)
@AxisLabel(`id=QF0034A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0034A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0034A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=1{,}25\left(x+0{,}4\right)^2-1{,}6$.`)

@Rekonstruktion(`QF0034A;1.25*(x+0.4)^2-1.6;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}25$. In der Scheitelpunktsform gelten $a=1{,}25$, $h=-0{,}4$ und $e=-1{,}6$. Der Scheitelpunkt ist $S(-0{,}4\mid -1{,}6)$, die Symmetrieachse lautet $x=-0{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}4\mid -0{,}35)$ und $(0{,}6\mid -0{,}35)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0034B;1;1;1`)
@AxisLabel(`id=QF0034B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0034B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0034B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-1{,}5\left(x+1{,}2\right)^2+2{,}3$.`)

@Rekonstruktion(`QF0034B;-1.5*(x+1.2)^2+2.3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}5$. In der Scheitelpunktsform gelten $a=-1{,}5$, $h=-1{,}2$ und $e=2{,}3$. Der Scheitelpunkt ist $S(-1{,}2\mid 2{,}3)$, die Symmetrieachse lautet $x=-1{,}2$. Der Graph verläuft beispielsweise durch die Punkte $(-2{,}2\mid 0{,}8)$ und $(-0{,}2\mid 0{,}8)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0034C;1;1;1`)
@AxisLabel(`id=QF0034C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0034C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0034C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}85\left(x+1{,}5\right)^2+1{,}2$.`)

@Rekonstruktion(`QF0034C;0.85*(x+1.5)^2+1.2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}85$. In der Scheitelpunktsform gelten $a=0{,}85$, $h=-1{,}5$ und $e=1{,}2$. Der Scheitelpunkt ist $S(-1{,}5\mid 1{,}2)$, die Symmetrieachse lautet $x=-1{,}5$. Der Graph verläuft beispielsweise durch die Punkte $(-2{,}5\mid 2{,}05)$ und $(-0{,}5\mid 2{,}05)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
