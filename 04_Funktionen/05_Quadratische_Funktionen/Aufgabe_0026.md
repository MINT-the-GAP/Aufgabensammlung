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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, sehr leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0026A;1;1;1`)
@AxisLabel(`id=QF0026A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0026A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0026A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=x^2-2x+4$.`)

@Rekonstruktion(`QF0026A;1*x^2-2*x+4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=1$. In der Parameterform gelten $a=1$, $b=-2$ und $c=4$. Der Scheitelpunkt ist $S(1\mid 3)$, die Symmetrieachse lautet $x=1$. Der Graph verläuft beispielsweise durch die Punkte $(0\mid 4)$ und $(2\mid 4)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0026B;1;1;1`)
@AxisLabel(`id=QF0026B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0026B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0026B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-x^2+2x+2$.`)

@Rekonstruktion(`QF0026B;-1*x^2+2*x+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Parameterform gelten $a=-1$, $b=2$ und $c=2$. Der Scheitelpunkt ist $S(1\mid 3)$, die Symmetrieachse lautet $x=1$. Der Graph verläuft beispielsweise durch die Punkte $(0\mid 2)$ und $(2\mid 2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=3$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0026C;1;1;1`)
@AxisLabel(`id=QF0026C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0026C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0026C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-2x^2+8x-4$.`)

@Rekonstruktion(`QF0026C;-2*x^2+8*x-4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-2$. In der Parameterform gelten $a=-2$, $b=8$ und $c=-4$. Der Scheitelpunkt ist $S(2\mid 4)$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid 2)$ und $(3\mid 2)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $1$ nach rechts und um $1$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
