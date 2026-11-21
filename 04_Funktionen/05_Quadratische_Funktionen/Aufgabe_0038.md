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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Dezimalzahlen, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0038A;1;1;1`)
@AxisLabel(`id=QF0038A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0038A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0038A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}4x^2+0{,}32x-1{,}536$.`)

@Rekonstruktion(`QF0038A;0.4*x^2+0.32*x-1.536;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}4$. In der Parameterform gelten $a=0{,}4$, $b=0{,}32$ und $c=-1{,}536$. Der Scheitelpunkt ist $S(-0{,}4\mid -1{,}6)$, die Symmetrieachse lautet $x=-0{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}4\mid -1{,}2)$ und $(0{,}6\mid -1{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0038B;1;1;1`)
@AxisLabel(`id=QF0038B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0038B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0038B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}4x^2-0{,}08x-1{,}596$.`)

@Rekonstruktion(`QF0038B;0.4*x^2-0.08*x-1.596;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}4$. In der Parameterform gelten $a=0{,}4$, $b=-0{,}08$ und $c=-1{,}596$. Der Scheitelpunkt ist $S(0{,}1\mid -1{,}6)$, die Symmetrieachse lautet $x=0{,}1$. Der Graph verläuft beispielsweise durch die Punkte $(-0{,}9\mid -1{,}2)$ und $(1{,}1\mid -1{,}2)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $0{,}5$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0038C;1;1;1`)
@AxisLabel(`id=QF0038C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0038C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0038C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}4x^2-0{,}32x-1{,}664$.`)

@Rekonstruktion(`QF0038C;-0.4*x^2-0.32*x-1.664;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}4$. In der Parameterform gelten $a=-0{,}4$, $b=-0{,}32$ und $c=-1{,}664$. Der Scheitelpunkt ist $S(-0{,}4\mid -1{,}6)$, die Symmetrieachse lautet $x=-0{,}4$. Der Graph verläuft beispielsweise durch die Punkte $(-1{,}4\mid -2)$ und $(0{,}6\mid -2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-1{,}6$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen)

</div>

</section>
