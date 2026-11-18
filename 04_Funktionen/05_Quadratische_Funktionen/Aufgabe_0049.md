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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Dezimalzahlen, Bruchrechnung, mittel, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0049A;1;1;1`)
@AxisLabel(`id=QF0049A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0049A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0049A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}9x^2+\frac{27}{50}x+1{,}331$.`)

@Rekonstruktion(`QF0049A;0.9*x^2+27/50*x+1.331;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}9$. In der Parameterform gelten $a=0{,}9$, $b=\frac{27}{50}$ und $c=1{,}331$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid 1{,}25)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid 2{,}15)$ und $(\frac{7}{10}\mid 2{,}15)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0049B;1;1;1`)
@AxisLabel(`id=QF0049B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0049B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0049B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}55x^2-\frac{11}{25}x-1{,}488$.`)

@Rekonstruktion(`QF0049B;-0.55*x^2-11/25*x-1.488;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Parameterform gelten $a=-0{,}55$, $b=-\frac{11}{25}$ und $c=-1{,}488$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid -1{,}4)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid -1{,}95)$ und $(\frac{3}{5}\mid -1{,}95)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0049C;1;1;1`)
@AxisLabel(`id=QF0049C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0049C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0049C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}55x^2+\frac{11}{40}x-2{,}284375$.`)

@Rekonstruktion(`QF0049C;-0.55*x^2+11/40*x-2.284375;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Parameterform gelten $a=-0{,}55$, $b=\frac{11}{40}$ und $c=-2{,}284375$. Der Scheitelpunkt ist $S(\frac{1}{4}\mid -2{,}25)$, die Symmetrieachse lautet $x=\frac{1}{4}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{4}\mid -2{,}8)$ und $(\frac{5}{4}\mid -2{,}8)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
