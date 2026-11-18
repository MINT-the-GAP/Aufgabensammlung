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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Dezimalzahlen, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0032A;1;1;1`)
@AxisLabel(`id=QF0032A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0032A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0032A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-1{,}2x^2+0{,}6x-2{,}575$.`)

@Rekonstruktion(`QF0032A;-1.2*x^2+0.6*x-2.575;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}2$. In der Parameterform gelten $a=-1{,}2$, $b=0{,}6$ und $c=-2{,}575$. Der Scheitelpunkt ist $S(0{,}25\mid -2{,}5)$, die Symmetrieachse lautet $x=0{,}25$. Der Graph verläuft beispielsweise durch die Punkte $(-0{,}75\mid -3{,}7)$ und $(1{,}25\mid -3{,}7)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0032B;1;1;1`)
@AxisLabel(`id=QF0032B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0032B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0032B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=1{,}25x^2+1{,}875x+1{,}903125$.`)

@Rekonstruktion(`QF0032B;1.25*x^2+1.875*x+1.903125;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}25$. In der Parameterform gelten $a=1{,}25$, $b=1{,}875$ und $c=1{,}903125$. Der Scheitelpunkt ist $S(-0{,}75\mid 1{,}2)$, die Symmetrieachse lautet $x=-0{,}75$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}75\mid 2{,}45)$ und $(0{,}25\mid 2{,}45)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0032C;1;1;1`)
@AxisLabel(`id=QF0032C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0032C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0032C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-1{,}5x^2-3{,}6x-2{,}96$.`)

@Rekonstruktion(`QF0032C;-1.5*x^2-3.6*x-2.96;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}5$. In der Parameterform gelten $a=-1{,}5$, $b=-3{,}6$ und $c=-2{,}96$. Der Scheitelpunkt ist $S(-1{,}2\mid -0{,}8)$, die Symmetrieachse lautet $x=-1{,}2$. Der Graph verläuft beispielsweise durch die Punkte $(-2{,}2\mid -2{,}3)$ und $(-0{,}2\mid -2{,}3)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
