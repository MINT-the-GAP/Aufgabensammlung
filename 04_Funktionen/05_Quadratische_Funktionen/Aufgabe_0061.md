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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Dezimalzahlen, Bruchrechnung, mittel, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0061A;1;1;1`)
@AxisLabel(`id=QF0061A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0061A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0061A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}55x^2+\frac{11}{50}x-0{,}622$.`)

@Rekonstruktion(`QF0061A;-0.55*x^2+11/50*x-0.622;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}55$. In der Parameterform gelten $a=-0{,}55$, $b=\frac{11}{50}$ und $c=-0{,}622$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid -0{,}6)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid -1{,}15)$ und $(\frac{6}{5}\mid -1{,}15)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0061B;1;1;1`)
@AxisLabel(`id=QF0061B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0061B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0061B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}55x^2-\frac{11}{50}x-0{,}578$.`)

@Rekonstruktion(`QF0061B;0.55*x^2-11/50*x-0.578;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}55$. In der Parameterform gelten $a=0{,}55$, $b=-\frac{11}{50}$ und $c=-0{,}578$. Der Scheitelpunkt ist $S(\frac{1}{5}\mid -0{,}6)$, die Symmetrieachse lautet $x=\frac{1}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{4}{5}\mid -0{,}05)$ und $(\frac{6}{5}\mid -0{,}05)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-0{,}6$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0061C;1;1;1`)
@AxisLabel(`id=QF0061C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0061C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0061C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}1x^2-\frac{33}{50}x-0{,}001$.`)

@Rekonstruktion(`QF0061C;1.1*x^2-33/50*x-0.001;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}1$. In der Parameterform gelten $a=1{,}1$, $b=-\frac{33}{50}$ und $c=-0{,}001$. Der Scheitelpunkt ist $S(\frac{3}{10}\mid -0{,}1)$, die Symmetrieachse lautet $x=\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{10}\mid 1)$ und $(\frac{13}{10}\mid 1)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{10}$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
