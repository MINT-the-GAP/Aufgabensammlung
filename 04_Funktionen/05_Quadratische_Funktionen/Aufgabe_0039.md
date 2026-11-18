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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Bruchrechnung, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0039A;1;1;1`)
@AxisLabel(`id=QF0039A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0039A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0039A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{5}{6}\left(x-\frac{1}{3}\right)^2-\frac{4}{5}$.`)

@Rekonstruktion(`QF0039A;5/6*(x-1/3)^2-4/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{5}{6}$. In der Scheitelpunktsform gelten $a=\frac{5}{6}$, $h=\frac{1}{3}$ und $e=-\frac{4}{5}$. Der Scheitelpunkt ist $S(\frac{1}{3}\mid -\frac{4}{5})$, die Symmetrieachse lautet $x=\frac{1}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{2}{3}\mid \frac{1}{30})$ und $(\frac{4}{3}\mid \frac{1}{30})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0039B;1;1;1`)
@AxisLabel(`id=QF0039B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0039B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0039B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{5}{6}\left(x-\frac{5}{6}\right)^2-\frac{4}{5}$.`)

@Rekonstruktion(`QF0039B;5/6*(x-5/6)^2-4/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{5}{6}$. In der Scheitelpunktsform gelten $a=\frac{5}{6}$, $h=\frac{5}{6}$ und $e=-\frac{4}{5}$. Der Scheitelpunkt ist $S(\frac{5}{6}\mid -\frac{4}{5})$, die Symmetrieachse lautet $x=\frac{5}{6}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{6}\mid \frac{1}{30})$ und $(\frac{11}{6}\mid \frac{1}{30})$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{2}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0039C;1;1;1`)
@AxisLabel(`id=QF0039C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0039C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0039C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-\frac{5}{6}\left(x-\frac{1}{3}\right)^2-\frac{4}{5}$.`)

@Rekonstruktion(`QF0039C;-5/6*(x-1/3)^2-4/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{5}{6}$. In der Scheitelpunktsform gelten $a=-\frac{5}{6}$, $h=\frac{1}{3}$ und $e=-\frac{4}{5}$. Der Scheitelpunkt ist $S(\frac{1}{3}\mid -\frac{4}{5})$, die Symmetrieachse lautet $x=\frac{1}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{2}{3}\mid -\frac{49}{30})$ und $(\frac{4}{3}\mid -\frac{49}{30})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-\frac{4}{5}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
