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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, Bruchrechnung, mittel, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0054A;1;1;1`)
@AxisLabel(`id=QF0054A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0054A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0054A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}4\left(x-\frac{1}{10}\right)^2+1{,}8$.`)

@Rekonstruktion(`QF0054A;0.4*(x-1/10)^2+1.8;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}4$. In der Scheitelpunktsform gelten $a=0{,}4$, $h=\frac{1}{10}$ und $e=1{,}8$. Der Scheitelpunkt ist $S(\frac{1}{10}\mid 1{,}8)$, die Symmetrieachse lautet $x=\frac{1}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{9}{10}\mid 2{,}2)$ und $(\frac{11}{10}\mid 2{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0054B;1;1;1`)
@AxisLabel(`id=QF0054B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0054B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0054B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}6x^2-\frac{6}{25}x-0{,}624$.`)

@Rekonstruktion(`QF0054B;-0.6*x^2-6/25*x-0.624;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}6$. In der Parameterform gelten $a=-0{,}6$, $b=-\frac{6}{25}$ und $c=-0{,}624$. Der Scheitelpunkt ist $S(-\frac{1}{5}\mid -0{,}6)$, die Symmetrieachse lautet $x=-\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{6}{5}\mid -1{,}2)$ und $(\frac{4}{5}\mid -1{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0054C;1;1;1`)
@AxisLabel(`id=QF0054C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0054C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0054C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}75\left(x+\frac{3}{10}\right)^2-1{,}8$.`)

@Rekonstruktion(`QF0054C;0.75*(x+3/10)^2-1.8;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}75$. In der Scheitelpunktsform gelten $a=0{,}75$, $h=-\frac{3}{10}$ und $e=-1{,}8$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid -1{,}8)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid -1{,}05)$ und $(\frac{7}{10}\mid -1{,}05)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
