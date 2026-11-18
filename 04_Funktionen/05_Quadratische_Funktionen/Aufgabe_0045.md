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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Bruchrechnung, leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0045A;1;1;1`)
@AxisLabel(`id=QF0045A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0045A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0045A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{7}{10}\left(x-\frac{1}{2}\right)^2-\frac{5}{2}$.`)

@Rekonstruktion(`QF0045A;7/10*(x-1/2)^2-5/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{7}{10}$. In der Scheitelpunktsform gelten $a=\frac{7}{10}$, $h=\frac{1}{2}$ und $e=-\frac{5}{2}$. Der Scheitelpunkt ist $S(\frac{1}{2}\mid -\frac{5}{2})$, die Symmetrieachse lautet $x=\frac{1}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{2}\mid -\frac{9}{5})$ und $(\frac{3}{2}\mid -\frac{9}{5})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0045B;1;1;1`)
@AxisLabel(`id=QF0045B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0045B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0045B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{7}{10}\left(x-\frac{1}{2}\right)^2-\frac{5}{2}$.`)

@Rekonstruktion(`QF0045B;-7/10*(x-1/2)^2-5/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{7}{10}$. In der Scheitelpunktsform gelten $a=-\frac{7}{10}$, $h=\frac{1}{2}$ und $e=-\frac{5}{2}$. Der Scheitelpunkt ist $S(\frac{1}{2}\mid -\frac{5}{2})$, die Symmetrieachse lautet $x=\frac{1}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{2}\mid -\frac{16}{5})$ und $(\frac{3}{2}\mid -\frac{16}{5})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-\frac{5}{2}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0045C;1;1;1`)
@AxisLabel(`id=QF0045C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0045C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0045C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-\frac{7}{5}\left(x-1\right)^2-2$.`)

@Rekonstruktion(`QF0045C;-7/5*(x-1)^2-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-\frac{7}{5}$. In der Scheitelpunktsform gelten $a=-\frac{7}{5}$, $h=1$ und $e=-2$. Der Scheitelpunkt ist $S(1\mid -2)$, die Symmetrieachse lautet $x=1$. Der Graph verläuft beispielsweise durch die Punkte $(0\mid -\frac{17}{5})$ und $(2\mid -\frac{17}{5})$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{2}$ nach rechts und um $\frac{1}{2}$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
