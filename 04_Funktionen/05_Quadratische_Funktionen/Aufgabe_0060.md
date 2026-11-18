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

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0060A;1;1;1`)
@AxisLabel(`id=QF0060A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0060A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0060A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}55\left(x+\frac{2}{5}\right)^2+0{,}75$.`)

@Rekonstruktion(`QF0060A;-0.55*(x+2/5)^2+0.75;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Scheitelpunktsform gelten $a=-0{,}55$, $h=-\frac{2}{5}$ und $e=0{,}75$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid 0{,}75)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid 0{,}2)$ und $(\frac{3}{5}\mid 0{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0060B;1;1;1`)
@AxisLabel(`id=QF0060B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0060B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0060B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}55x^2-\frac{33}{100}x+0{,}7005$.`)

@Rekonstruktion(`QF0060B;-0.55*x^2-33/100*x+0.7005;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Parameterform gelten $a=-0{,}55$, $b=-\frac{33}{100}$ und $c=0{,}7005$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid 0{,}75)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid 0{,}2)$ und $(\frac{7}{10}\mid 0{,}2)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{10}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0060C;1;1;1`)
@AxisLabel(`id=QF0060C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0060C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0060C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}55\left(x+\frac{2}{5}\right)^2+0{,}75$.`)

@Rekonstruktion(`QF0060C;0.55*(x+2/5)^2+0.75;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}55$. In der Scheitelpunktsform gelten $a=0{,}55$, $h=-\frac{2}{5}$ und $e=0{,}75$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid 0{,}75)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid 1{,}3)$ und $(\frac{3}{5}\mid 1{,}3)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=0{,}75$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
