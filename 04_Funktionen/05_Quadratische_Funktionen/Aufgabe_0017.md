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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Scheitelpunktsform, Gemischte Darstellungsformen, sehr leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0017A;1;1;1`)
@AxisLabel(`id=QF0017A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0017A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0017A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=x^2+2x-2$.`)

@Rekonstruktion(`QF0017A;1*x^2+2*x-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=1$. In der Parameterform gelten $a=1$, $b=2$ und $c=-2$. Der Scheitelpunkt ist $S(-1\mid -3)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid -2)$ und $(0\mid -2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0017B;1;1;1`)
@AxisLabel(`id=QF0017B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0017B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0017B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=2\left(x-2\right)^2+2$.`)

@Rekonstruktion(`QF0017B;2*(x-2)^2+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2$. In der Scheitelpunktsform gelten $a=2$, $h=2$ und $e=2$. Der Scheitelpunkt ist $S(2\mid 2)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid 4)$ und $(3\mid 4)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0017C;1;1;1`)
@AxisLabel(`id=QF0017C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0017C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0017C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-x^2-2x-3$.`)

@Rekonstruktion(`QF0017C;-1*x^2-2*x-3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Parameterform gelten $a=-1$, $b=-2$ und $c=-3$. Der Scheitelpunkt ist $S(-1\mid -2)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid -3)$ und $(0\mid -3)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
