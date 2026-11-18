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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Dezimalzahlen, Bruchrechnung, mittel, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0057A;1;1;1`)
@AxisLabel(`id=QF0057A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0057A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0057A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}8\left(x-\frac{1}{5}\right)^2+2{,}4$.`)

@Rekonstruktion(`QF0057A;-0.8*(x-1/5)^2+2.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}8$. In der Scheitelpunktsform gelten $a=-0{,}8$, $h=\frac{1}{5}$ und $e=2{,}4$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid 2{,}4)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid 1{,}6)$ und $(\frac{6}{5}\mid 1{,}6)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0057B;1;1;1`)
@AxisLabel(`id=QF0057B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0057B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0057B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}8\left(x-\frac{3}{10}\right)^2+2{,}4$.`)

@Rekonstruktion(`QF0057B;-0.8*(x-3/10)^2+2.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}8$. In der Scheitelpunktsform gelten $a=-0{,}8$, $h=\frac{3}{10}$ und $e=2{,}4$. Der Scheitelpunkt ist $S(\frac{3}{10}\mid 2{,}4)$, die Symmetrieachse lautet $x=\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{10}\mid 1{,}6)$ und $(\frac{13}{10}\mid 1{,}6)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{10}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0057C;1;1;1`)
@AxisLabel(`id=QF0057C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0057C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0057C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}8\left(x-\frac{1}{5}\right)^2+2{,}4$.`)

@Rekonstruktion(`QF0057C;0.8*(x-1/5)^2+2.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}8$. In der Scheitelpunktsform gelten $a=0{,}8$, $h=\frac{1}{5}$ und $e=2{,}4$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid 2{,}4)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid 3{,}2)$ und $(\frac{6}{5}\mid 3{,}2)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=2{,}4$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
