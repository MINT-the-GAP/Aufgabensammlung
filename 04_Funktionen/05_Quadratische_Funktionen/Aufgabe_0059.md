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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, Bruchrechnung, mittel, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0059A;1;1;1`)
@AxisLabel(`id=QF0059A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0059A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0059A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}9x^2-\frac{9}{25}x+1{,}286$.`)

@Rekonstruktion(`QF0059A;0.9*x^2-9/25*x+1.286;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}9$. In der Parameterform gelten $a=0{,}9$, $b=-\frac{9}{25}$ und $c=1{,}286$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid 1{,}25)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid 2{,}15)$ und $(\frac{6}{5}\mid 2{,}15)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0059B;1;1;1`)
@AxisLabel(`id=QF0059B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0059B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0059B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}9\left(x-\frac{3}{10}\right)^2+1{,}25$.`)

@Rekonstruktion(`QF0059B;0.9*(x-3/10)^2+1.25;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}9$. In der Scheitelpunktsform gelten $a=0{,}9$, $h=\frac{3}{10}$ und $e=1{,}25$. Der Scheitelpunkt ist $S(\frac{3}{10}\mid 1{,}25)$, die Symmetrieachse lautet $x=\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{10}\mid 2{,}15)$ und $(\frac{13}{10}\mid 2{,}15)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{10}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0059C;1;1;1`)
@AxisLabel(`id=QF0059C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0059C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0059C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}9x^2+\frac{9}{25}x+1{,}214$.`)

@Rekonstruktion(`QF0059C;-0.9*x^2+9/25*x+1.214;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}9$. In der Parameterform gelten $a=-0{,}9$, $b=\frac{9}{25}$ und $c=1{,}214$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid 1{,}25)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid 0{,}35)$ und $(\frac{6}{5}\mid 0{,}35)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=1{,}25$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
