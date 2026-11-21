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

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0027A;1;1;1`)
@AxisLabel(`id=QF0027A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0027A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0027A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-\left(x-2\right)^2$.`)

@Rekonstruktion(`QF0027A;-1*(x-2)^2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Scheitelpunktsform gelten $a=-1$, $h=2$ und $e=0$. Der Scheitelpunkt ist $S(2\mid 0)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid -1)$ und $(3\mid -1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0027B;1;1;1`)
@AxisLabel(`id=QF0027B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0027B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0027B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\left(x-2\right)^2$.`)

@Rekonstruktion(`QF0027B;(x-2)^2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=1$. In der Scheitelpunktsform gelten $a=1$, $h=2$ und $e=0$. Der Scheitelpunkt ist $S(2\mid 0)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid 1)$ und $(3\mid 1)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=0$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0027C;1;1;1`)
@AxisLabel(`id=QF0027C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0027C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0027C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=2\left(x-3\right)^2+1$.`)

@Rekonstruktion(`QF0027C;2*(x-3)^2+1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2$. In der Scheitelpunktsform gelten $a=2$, $h=3$ und $e=1$. Der Scheitelpunkt ist $S(3\mid 1)$, die Symmetrieachse lautet $x=3$. Der Graph verläuft beispielsweise durch die Punkte $(2\mid 3)$ und $(4\mid 3)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $1$ nach rechts und um $1$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
