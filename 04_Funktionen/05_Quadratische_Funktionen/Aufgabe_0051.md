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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Dezimalzahlen, Bruchrechnung, mittel, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0051A;1;1;1`)
@AxisLabel(`id=QF0051A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0051A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0051A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}55\left(x+\frac{2}{5}\right)^2+2{,}4$.`)

@Rekonstruktion(`QF0051A;-0.55*(x+2/5)^2+2.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Scheitelpunktsform gelten $a=-0{,}55$, $h=-\frac{2}{5}$ und $e=2{,}4$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid 2{,}4)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid 1{,}85)$ und $(\frac{3}{5}\mid 1{,}85)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0051B;1;1;1`)
@AxisLabel(`id=QF0051B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0051B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0051B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}55\left(x-\frac{1}{4}\right)^2+0{,}75$.`)

@Rekonstruktion(`QF0051B;-0.55*(x-1/4)^2+0.75;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Scheitelpunktsform gelten $a=-0{,}55$, $h=\frac{1}{4}$ und $e=0{,}75$. Der Scheitelpunkt ist $S(\frac{1}{4}\mid 0{,}75)$, die Symmetrieachse lautet $x=\frac{1}{4}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{4}\mid 0{,}2)$ und $(\frac{5}{4}\mid 0{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0051C;1;1;1`)
@AxisLabel(`id=QF0051C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0051C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0051C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}4\left(x-\frac{2}{5}\right)^2-1{,}4$.`)

@Rekonstruktion(`QF0051C;0.4*(x-2/5)^2-1.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}4$. In der Scheitelpunktsform gelten $a=0{,}4$, $h=\frac{2}{5}$ und $e=-1{,}4$. Der Scheitelpunkt ist $S(\frac{2}{5}\mid -1{,}4)$, die Symmetrieachse lautet $x=\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{5}\mid -1)$ und $(\frac{7}{5}\mid -1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
