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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Dezimalzahlen, Bruchrechnung, mittel, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0056A;1;1;1`)
@AxisLabel(`id=QF0056A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0056A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0056A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}8x^2-\frac{12}{25}x-2{,}322$.`)

@Rekonstruktion(`QF0056A;-0.8*x^2-12/25*x-2.322;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}8$. In der Parameterform gelten $a=-0{,}8$, $b=-\frac{12}{25}$ und $c=-2{,}322$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid -2{,}25)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid -3{,}05)$ und $(\frac{7}{10}\mid -3{,}05)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0056B;1;1;1`)
@AxisLabel(`id=QF0056B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0056B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0056B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}8x^2-\frac{8}{25}x-2{,}282$.`)

@Rekonstruktion(`QF0056B;-0.8*x^2-8/25*x-2.282;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}8$. In der Parameterform gelten $a=-0{,}8$, $b=-\frac{8}{25}$ und $c=-2{,}282$. Der Scheitelpunkt ist $S(-\frac{1}{5}\mid -2{,}25)$, die Symmetrieachse lautet $x=-\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{6}{5}\mid -3{,}05)$ und $(\frac{4}{5}\mid -3{,}05)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{10}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0056C;1;1;1`)
@AxisLabel(`id=QF0056C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0056C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0056C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}8x^2+\frac{12}{25}x-2{,}178$.`)

@Rekonstruktion(`QF0056C;0.8*x^2+12/25*x-2.178;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}8$. In der Parameterform gelten $a=0{,}8$, $b=\frac{12}{25}$ und $c=-2{,}178$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid -2{,}25)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid -1{,}45)$ und $(\frac{7}{10}\mid -1{,}45)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-2{,}25$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
