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

tags: Lineare Funktionen, Funktionsgraph, Bruchrechnung, sehr leicht, niedrig, Zeichnen

comment: Zeichne drei Graphen linearer Funktionen mit Bruchsteigungen.

author: Martin Lommatzsch
-->

# Graphen linearer Funktionen mit Brüchen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0019A;1;1;1`)
@AxisLabel(`id=LF0019A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0019A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0019A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{2}{3}x+1$.`)

@Rekonstruktion(`LF0019A;2/3*x+1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{2}{3}$ und dem Ordinatenachsenabschnitt $b=1$. Er verläuft beispielsweise durch die Punkte $(0\mid 1)$ und $(3\mid 3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0019B;1;1;1`)
@AxisLabel(`id=LF0019B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0019B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0019B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{3}{4}x+2$.`)

@Rekonstruktion(`LF0019B;-3/4*x+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-\frac{3}{4}$ und dem Ordinatenachsenabschnitt $b=2$. Er verläuft beispielsweise durch die Punkte $(0\mid 2)$ und $(4\mid -1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0019C;1;1;1`)
@AxisLabel(`id=LF0019C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0019C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0019C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{5}{4}x-2$.`)

@Rekonstruktion(`LF0019C;5/4*x-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{5}{4}$ und dem Ordinatenachsenabschnitt $b=-2$. Er verläuft beispielsweise durch die Punkte $(0\mid -2)$ und $(4\mid 3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
