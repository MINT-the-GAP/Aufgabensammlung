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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Scheitelpunktsform, Bruchrechnung, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0033A;1;1;1`)
@AxisLabel(`id=QF0033A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0033A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0033A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{3}{4}\left(x+\frac{3}{2}\right)^2+\frac{3}{4}$.`)

@Rekonstruktion(`QF0033A;3/4*(x+3/2)^2+3/4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{3}{4}$. In der Scheitelpunktsform gelten $a=\frac{3}{4}$, $h=-\frac{3}{2}$ und $e=\frac{3}{4}$. Der Scheitelpunkt ist $S(-\frac{3}{2}\mid \frac{3}{4})$, die Symmetrieachse lautet $x=-\frac{3}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{2}\mid \frac{3}{2})$ und $(-\frac{1}{2}\mid \frac{3}{2})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0033B;1;1;1`)
@AxisLabel(`id=QF0033B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0033B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0033B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{3}{4}\left(x-\frac{3}{2}\right)^2+\frac{5}{4}$.`)

@Rekonstruktion(`QF0033B;3/4*(x-3/2)^2+5/4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{3}{4}$. In der Scheitelpunktsform gelten $a=\frac{3}{4}$, $h=\frac{3}{2}$ und $e=\frac{5}{4}$. Der Scheitelpunkt ist $S(\frac{3}{2}\mid \frac{5}{4})$, die Symmetrieachse lautet $x=\frac{3}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(\frac{1}{2}\mid 2)$ und $(\frac{5}{2}\mid 2)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0033C;1;1;1`)
@AxisLabel(`id=QF0033C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0033C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0033C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-\frac{4}{5}\left(x-\frac{1}{3}\right)^2-\frac{3}{2}$.`)

@Rekonstruktion(`QF0033C;-4/5*(x-1/3)^2-3/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{4}{5}$. In der Scheitelpunktsform gelten $a=-\frac{4}{5}$, $h=\frac{1}{3}$ und $e=-\frac{3}{2}$. Der Scheitelpunkt ist $S(\frac{1}{3}\mid -\frac{3}{2})$, die Symmetrieachse lautet $x=\frac{1}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{2}{3}\mid -\frac{23}{10})$ und $(\frac{4}{3}\mid -\frac{23}{10})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
