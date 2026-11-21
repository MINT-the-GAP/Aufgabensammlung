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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Dezimalzahlen, Bruchrechnung, mittel, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0065A;1;1;1`)
@AxisLabel(`id=QF0065A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0065A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0065A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}75x^2+\frac{3}{5}x+0{,}87$.`)

@Rekonstruktion(`QF0065A;0.75*x^2+3/5*x+0.87;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}75$. In der Parameterform gelten $a=0{,}75$, $b=\frac{3}{5}$ und $c=0{,}87$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid 0{,}75)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid 1{,}5)$ und $(\frac{3}{5}\mid 1{,}5)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0065B;1;1;1`)
@AxisLabel(`id=QF0065B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0065B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0065B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}75\left(x+\frac{2}{5}\right)^2+0{,}75$.`)

@Rekonstruktion(`QF0065B;-0.75*(x+2/5)^2+0.75;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}75$. In der Scheitelpunktsform gelten $a=-0{,}75$, $h=-\frac{2}{5}$ und $e=0{,}75$. Der Scheitelpunkt ist $S(-\frac{2}{5}\mid 0{,}75)$, die Symmetrieachse lautet $x=-\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{5}\mid 0)$ und $(\frac{3}{5}\mid 0)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=0{,}75$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0065C;1;1;1`)
@AxisLabel(`id=QF0065C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0065C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0065C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-1{,}5x^2-\frac{9}{10}x+1{,}115$.`)

@Rekonstruktion(`QF0065C;-1.5*x^2-9/10*x+1.115;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-1{,}5$. In der Parameterform gelten $a=-1{,}5$, $b=-\frac{9}{10}$ und $c=1{,}115$. Der Scheitelpunkt ist $S(-\frac{3}{10}\mid 1{,}25)$, die Symmetrieachse lautet $x=-\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{10}\mid -0{,}25)$ und $(\frac{7}{10}\mid -0{,}25)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{10}$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
