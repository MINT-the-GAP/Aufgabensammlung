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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Bruchrechnung, leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0043A;1;1;1`)
@AxisLabel(`id=QF0043A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0043A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0043A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-\frac{6}{5}x^2+\frac{48}{25}x-\frac{1259}{500}$.`)

@Rekonstruktion(`QF0043A;-6/5*x^2+48/25*x-1259/500;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-\frac{6}{5}$. In der Parameterform gelten $a=-\frac{6}{5}$, $b=\frac{48}{25}$ und $c=-\frac{1259}{500}$. Der Scheitelpunkt ist $S(\frac{4}{5}\mid -\frac{7}{4})$, die Symmetrieachse lautet $x=\frac{4}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{5}\mid -\frac{59}{20})$ und $(\frac{9}{5}\mid -\frac{59}{20})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0043B;1;1;1`)
@AxisLabel(`id=QF0043B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0043B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0043B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{6}{5}x^2-\frac{48}{25}x-\frac{491}{500}$.`)

@Rekonstruktion(`QF0043B;6/5*x^2-48/25*x-491/500;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=\frac{6}{5}$. In der Parameterform gelten $a=\frac{6}{5}$, $b=-\frac{48}{25}$ und $c=-\frac{491}{500}$. Der Scheitelpunkt ist $S(\frac{4}{5}\mid -\frac{7}{4})$, die Symmetrieachse lautet $x=\frac{4}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{5}\mid -\frac{11}{20})$ und $(\frac{9}{5}\mid -\frac{11}{20})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-\frac{7}{4}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0043C;1;1;1`)
@AxisLabel(`id=QF0043C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0043C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0043C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{12}{5}x^2-\frac{156}{25}x+\frac{1403}{500}$.`)

@Rekonstruktion(`QF0043C;12/5*x^2-156/25*x+1403/500;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=\frac{12}{5}$. In der Parameterform gelten $a=\frac{12}{5}$, $b=-\frac{156}{25}$ und $c=\frac{1403}{500}$. Der Scheitelpunkt ist $S(\frac{13}{10}\mid -\frac{5}{4})$, die Symmetrieachse lautet $x=\frac{13}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(\frac{3}{10}\mid \frac{23}{20})$ und $(\frac{23}{10}\mid \frac{23}{20})$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{2}$ nach rechts und um $\frac{1}{2}$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
