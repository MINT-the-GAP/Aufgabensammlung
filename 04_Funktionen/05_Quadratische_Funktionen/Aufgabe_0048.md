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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0048A;1;1;1`)
@AxisLabel(`id=QF0048A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0048A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0048A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-1{,}2\left(x+0{,}75\right)^2-2{,}5$.`)

@Rekonstruktion(`QF0048A;-1.2*(x+0.75)^2-2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}2$. In der Scheitelpunktsform gelten $a=-1{,}2$, $h=-0{,}75$ und $e=-2{,}5$. Der Scheitelpunkt ist $S(-0{,}75\mid -2{,}5)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid -3{,}7)$ und $(0{,}25\mid -3{,}7)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0048B;1;1;1`)
@AxisLabel(`id=QF0048B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0048B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0048B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=1{,}2x^2+1{,}8x-1{,}825$.`)

@Rekonstruktion(`QF0048B;1.2*x^2+1.8*x-1.825;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}2$. In der Parameterform gelten $a=1{,}2$, $b=1{,}8$ und $c=-1{,}825$. Der Scheitelpunkt ist $S(-0{,}75\mid -2{,}5)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid -1{,}3)$ und $(0{,}25\mid -1{,}3)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-2{,}5$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0048C;1;1;1`)
@AxisLabel(`id=QF0048C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0048C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0048C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=2{,}4\left(x+0{,}25\right)^2-2$.`)

@Rekonstruktion(`QF0048C;2.4*(x+0.25)^2-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=2{,}4$. In der Scheitelpunktsform gelten $a=2{,}4$, $h=-0{,}25$ und $e=-2$. Der Scheitelpunkt ist $S(-0{,}25\mid -2)$, die Symmetrieachse lautet $x=-0{,}25$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}25\mid 0{,}4)$ und $(0{,}75\mid 0{,}4)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $0{,}5$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
