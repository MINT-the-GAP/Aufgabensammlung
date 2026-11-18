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

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0066A;1;1;1`)
@AxisLabel(`id=QF0066A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0066A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0066A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-0{,}6\left(x-\frac{1}{4}\right)^2+1{,}8$.`)

@Rekonstruktion(`QF0066A;-0.6*(x-1/4)^2+1.8;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}6$. In der Scheitelpunktsform gelten $a=-0{,}6$, $h=\frac{1}{4}$ und $e=1{,}8$. Der Scheitelpunkt ist $S(\frac{1}{4}\mid 1{,}8)$, die Symmetrieachse lautet $x=\frac{1}{4}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{4}\mid 1{,}2)$ und $(\frac{5}{4}\mid 1{,}2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0066B;1;1;1`)
@AxisLabel(`id=QF0066B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0066B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0066B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}6x^2-\frac{3}{10}x+1{,}8375$.`)

@Rekonstruktion(`QF0066B;0.6*x^2-3/10*x+1.8375;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}6$. In der Parameterform gelten $a=0{,}6$, $b=-\frac{3}{10}$ und $c=1{,}8375$. Der Scheitelpunkt ist $S(\frac{1}{4}\mid 1{,}8)$, die Symmetrieachse lautet $x=\frac{1}{4}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{4}\mid 2{,}4)$ und $(\frac{5}{4}\mid 2{,}4)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=1{,}8$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0066C;1;1;1`)
@AxisLabel(`id=QF0066C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0066C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0066C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}2\left(x-\frac{7}{20}\right)^2+2{,}3$.`)

@Rekonstruktion(`QF0066C;1.2*(x-7/20)^2+2.3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=1{,}2$. In der Scheitelpunktsform gelten $a=1{,}2$, $h=\frac{7}{20}$ und $e=2{,}3$. Der Scheitelpunkt ist $S(\frac{7}{20}\mid 2{,}3)$, die Symmetrieachse lautet $x=\frac{7}{20}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{13}{20}\mid 3{,}5)$ und $(\frac{27}{20}\mid 3{,}5)$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{10}$ nach rechts und um $0{,}5$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
