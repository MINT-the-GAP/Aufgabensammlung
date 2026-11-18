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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0042A;1;1;1`)
@AxisLabel(`id=QF0042A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0042A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0042A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}6\left(x+0{,}75\right)^2+1{,}8$.`)

@Rekonstruktion(`QF0042A;0.6*(x+0.75)^2+1.8;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}6$. In der Scheitelpunktsform gelten $a=0{,}6$, $h=-0{,}75$ und $e=1{,}8$. Der Scheitelpunkt ist $S(-0{,}75\mid 1{,}8)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid 2{,}4)$ und $(0{,}25\mid 2{,}4)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0042B;1;1;1`)
@AxisLabel(`id=QF0042B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0042B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0042B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}6x^2+0{,}3x+1{,}8375$.`)

@Rekonstruktion(`QF0042B;0.6*x^2+0.3*x+1.8375;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}6$. In der Parameterform gelten $a=0{,}6$, $b=0{,}3$ und $c=1{,}8375$. Der Scheitelpunkt ist $S(-0{,}25\mid 1{,}8)$, die Symmetrieachse lautet $x=-0{,}25$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}25\mid 2{,}4)$ und $(0{,}75\mid 2{,}4)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $0{,}5$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0042C;1;1;1`)
@AxisLabel(`id=QF0042C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0042C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0042C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}6\left(x+0{,}75\right)^2+1{,}8$.`)

@Rekonstruktion(`QF0042C;-0.6*(x+0.75)^2+1.8;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}6$. In der Scheitelpunktsform gelten $a=-0{,}6$, $h=-0{,}75$ und $e=1{,}8$. Der Scheitelpunkt ist $S(-0{,}75\mid 1{,}8)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid 1{,}2)$ und $(0{,}25\mid 1{,}2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=1{,}8$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
