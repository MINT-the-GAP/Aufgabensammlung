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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Dezimalzahlen, Bruchrechnung, mittel, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0062A;1;1;1`)
@AxisLabel(`id=QF0062A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0062A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0062A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}4x^2+\frac{8}{25}x-1{,}336$.`)

@Rekonstruktion(`QF0062A;0.4*x^2+8/25*x-1.336;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}4$. In der Parameterform gelten $a=0{,}4$, $b=\frac{8}{25}$ und $c=-1{,}336$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid -1{,}4)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid -1)$ und $(\frac{3}{5}\mid -1)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0062B;1;1;1`)
@AxisLabel(`id=QF0062B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0062B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0062B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}4x^2-\frac{8}{25}x-1{,}464$.`)

@Rekonstruktion(`QF0062B;-0.4*x^2-8/25*x-1.464;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}4$. In der Parameterform gelten $a=-0{,}4$, $b=-\frac{8}{25}$ und $c=-1{,}464$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid -1{,}4)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid -1{,}8)$ und $(\frac{3}{5}\mid -1{,}8)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-1{,}4$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0062C;1;1;1`)
@AxisLabel(`id=QF0062C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0062C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0062C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}8x^2-\frac{12}{25}x-0{,}972$.`)

@Rekonstruktion(`QF0062C;-0.8*x^2-12/25*x-0.972;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}8$. In der Parameterform gelten $a=-0{,}8$, $b=-\frac{12}{25}$ und $c=-0{,}972$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid -0{,}9)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid -1{,}7)$ und $(\frac{7}{10}\mid -1{,}7)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{10}$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
