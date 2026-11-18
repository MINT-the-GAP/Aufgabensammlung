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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, sehr leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0013A;1;1;1`)
@AxisLabel(`id=QF0013A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0013A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0013A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=2x^2-8x+6$.`)

@Rekonstruktion(`QF0013A;2*x^2-8*x+6;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2$. In der Parameterform gelten $a=2$, $b=-8$ und $c=6$. Der Scheitelpunkt ist $S(2\mid -2)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid 0)$ und $(3\mid 0)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0013B;1;1;1`)
@AxisLabel(`id=QF0013B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0013B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0013B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-x^2-4x-5$.`)

@Rekonstruktion(`QF0013B;-1*x^2-4*x-5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Parameterform gelten $a=-1$, $b=-4$ und $c=-5$. Der Scheitelpunkt ist $S(-2\mid -1)$, die Symmetrieachse lautet $x=-2$. Der Graph verläuft beispielsweise durch die Punkte $(-3\mid -2)$ und $(-1\mid -2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0013C;1;1;1`)
@AxisLabel(`id=QF0013C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0013C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0013C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-2x^2-8x-5$.`)

@Rekonstruktion(`QF0013C;-2*x^2-8*x-5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-2$. In der Parameterform gelten $a=-2$, $b=-8$ und $c=-5$. Der Scheitelpunkt ist $S(-2\mid 3)$, die Symmetrieachse lautet $x=-2$. Der Graph verläuft beispielsweise durch die Punkte $(-3\mid 1)$ und $(-1\mid 1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
