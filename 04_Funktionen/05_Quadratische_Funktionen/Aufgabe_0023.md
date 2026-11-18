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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, sehr leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0023A;1;1;1`)
@AxisLabel(`id=QF0023A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0023A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0023A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-x^2-2x+2$.`)

@Rekonstruktion(`QF0023A;-1*x^2-2*x+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Parameterform gelten $a=-1$, $b=-2$ und $c=2$. Der Scheitelpunkt ist $S(-1\mid 3)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid 2)$ und $(0\mid 2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0023B;1;1;1`)
@AxisLabel(`id=QF0023B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0023B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0023B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\left(x-0\right)^2+3$.`)

@Rekonstruktion(`QF0023B;-1*(x-0)^2+3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=-1$. In der Scheitelpunktsform gelten $a=-1$, $h=0$ und $e=3$. Der Scheitelpunkt ist $S(0\mid 3)$, die Symmetrieachse lautet $x=0$. Der Graph verläuft beispielsweise durch die Punkte $(-1\mid 2)$ und $(1\mid 2)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $1$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0023C;1;1;1`)
@AxisLabel(`id=QF0023C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0023C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0023C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=x^2+2x+4$.`)

@Rekonstruktion(`QF0023C;1*x^2+2*x+4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, normalbreite Parabel mit dem Öffnungsfaktor $a=1$. In der Parameterform gelten $a=1$, $b=2$ und $c=4$. Der Scheitelpunkt ist $S(-1\mid 3)$, die Symmetrieachse lautet $x=-1$. Der Graph verläuft beispielsweise durch die Punkte $(-2\mid 4)$ und $(0\mid 4)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=3$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
