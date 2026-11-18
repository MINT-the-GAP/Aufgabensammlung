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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Scheitelpunktsform, Gemischte Darstellungsformen, sehr leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0024A;1;1;1`)
@AxisLabel(`id=QF0024A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0024A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0024A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=2\left(x-1\right)^2-1$.`)

@Rekonstruktion(`QF0024A;2*(x-1)^2-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2$. In der Scheitelpunktsform gelten $a=2$, $h=1$ und $e=-1$. Der Scheitelpunkt ist $S(1\mid -1)$, die Symmetrieachse lautet $x=1$. Der Graph verläuft beispielsweise durch die Punkte $(0\mid 1)$ und $(2\mid 1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0024B;1;1;1`)
@AxisLabel(`id=QF0024B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0024B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0024B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=2x^2-8x+7$.`)

@Rekonstruktion(`QF0024B;2*x^2-8*x+7;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2$. In der Parameterform gelten $a=2$, $b=-8$ und $c=7$. Der Scheitelpunkt ist $S(2\mid -1)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid 1)$ und $(3\mid 1)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $1$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0024C;1;1;1`)
@AxisLabel(`id=QF0024C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0024C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0024C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-2\left(x-1\right)^2-1$.`)

@Rekonstruktion(`QF0024C;-2*(x-1)^2-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-2$. In der Scheitelpunktsform gelten $a=-2$, $h=1$ und $e=-1$. Der Scheitelpunkt ist $S(1\mid -1)$, die Symmetrieachse lautet $x=1$. Der Graph verläuft beispielsweise durch die Punkte $(0\mid -3)$ und $(2\mid -3)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-1$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
