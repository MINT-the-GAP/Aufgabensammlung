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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Dezimalzahlen, leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0044A;1;1;1`)
@AxisLabel(`id=QF0044A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0044A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0044A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}75x^2-1{,}125x+0{,}078125$.`)

@Rekonstruktion(`QF0044A;-0.75*x^2-1.125*x+0.078125;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}75$. In der Parameterform gelten $a=-0{,}75$, $b=-1{,}125$ und $c=0{,}078125$. Der Scheitelpunkt ist $S(-0{,}75\mid 0{,}5)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid -0{,}25)$ und $(0{,}25\mid -0{,}25)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0044B;1;1;1`)
@AxisLabel(`id=QF0044B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0044B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0044B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}75x^2+1{,}125x+0{,}921875$.`)

@Rekonstruktion(`QF0044B;0.75*x^2+1.125*x+0.921875;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}75$. In der Parameterform gelten $a=0{,}75$, $b=1{,}125$ und $c=0{,}921875$. Der Scheitelpunkt ist $S(-0{,}75\mid 0{,}5)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid 1{,}25)$ und $(0{,}25\mid 1{,}25)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=0{,}5$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0044C;1;1;1`)
@AxisLabel(`id=QF0044C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0044C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0044C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}5x^2+0{,}75x+1{,}09375$.`)

@Rekonstruktion(`QF0044C;1.5*x^2+0.75*x+1.09375;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}5$. In der Parameterform gelten $a=1{,}5$, $b=0{,}75$ und $c=1{,}09375$. Der Scheitelpunkt ist $S(-0{,}25\mid 1)$, die Symmetrieachse lautet $x=-0{,}25$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}25\mid 2{,}5)$ und $(0{,}75\mid 2{,}5)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $0{,}5$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
