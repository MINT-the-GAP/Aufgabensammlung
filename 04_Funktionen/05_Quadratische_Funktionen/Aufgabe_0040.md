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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Dezimalzahlen, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0040A;1;1;1`)
@AxisLabel(`id=QF0040A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0040A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0040A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}5\left(x+0{,}4\right)^2-2{,}5$.`)

@Rekonstruktion(`QF0040A;-0.5*(x+0.4)^2-2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}5$. In der Scheitelpunktsform gelten $a=-0{,}5$, $h=-0{,}4$ und $e=-2{,}5$. Der Scheitelpunkt ist $S(-0{,}4\mid -2{,}5)$, die Symmetrieachse lautet $x=-0{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}4\mid -3)$ und $(0{,}6\mid -3)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0040B;1;1;1`)
@AxisLabel(`id=QF0040B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0040B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0040B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}5\left(x-0{,}1\right)^2-2{,}5$.`)

@Rekonstruktion(`QF0040B;-0.5*(x-0.1)^2-2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}5$. In der Scheitelpunktsform gelten $a=-0{,}5$, $h=0{,}1$ und $e=-2{,}5$. Der Scheitelpunkt ist $S(0{,}1\mid -2{,}5)$, die Symmetrieachse lautet $x=0{,}1$. Der Graph verläuft beispielsweise durch die Punkte $(-0{,}9\mid -3)$ und $(1{,}1\mid -3)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $0{,}5$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0040C;1;1;1`)
@AxisLabel(`id=QF0040C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0040C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0040C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}5\left(x+0{,}4\right)^2-2{,}5$.`)

@Rekonstruktion(`QF0040C;0.5*(x+0.4)^2-2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}5$. In der Scheitelpunktsform gelten $a=0{,}5$, $h=-0{,}4$ und $e=-2{,}5$. Der Scheitelpunkt ist $S(-0{,}4\mid -2{,}5)$, die Symmetrieachse lautet $x=-0{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}4\mid -2)$ und $(0{,}6\mid -2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-2{,}5$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
