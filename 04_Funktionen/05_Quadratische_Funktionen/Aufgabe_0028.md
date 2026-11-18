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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, sehr leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0028A;1;1;1`)
@AxisLabel(`id=QF0028A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0028A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0028A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\left(x+1\right)^2-1$.`)

@Rekonstruktion(`QF0028A;(x+1)^2-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=1$. In der Scheitelpunktsform gelten $a=1$, $h=-1$ und $e=-1$. Der Scheitelpunkt ist $S(-1\mid -1)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid 0)$ und $(0\mid 0)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0028B;1;1;1`)
@AxisLabel(`id=QF0028B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0028B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0028B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\left(x+1\right)^2-1$.`)

@Rekonstruktion(`QF0028B;-1*(x+1)^2-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Scheitelpunktsform gelten $a=-1$, $h=-1$ und $e=-1$. Der Scheitelpunkt ist $S(-1\mid -1)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid -2)$ und $(0\mid -2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-1$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0028C;1;1;1`)
@AxisLabel(`id=QF0028C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0028C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0028C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-2\left(x-0\right)^2$.`)

@Rekonstruktion(`QF0028C;-2*(x-0)^2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-2$. In der Scheitelpunktsform gelten $a=-2$, $h=0$ und $e=0$. Der Scheitelpunkt ist $S(0\mid 0)$, die Symmetrieachse lautet $x=0$. Der Graph verläuft beispielsweise durch die Punkte $(-1\mid -2)$ und $(1\mid -2)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $1$ nach rechts und um $1$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
