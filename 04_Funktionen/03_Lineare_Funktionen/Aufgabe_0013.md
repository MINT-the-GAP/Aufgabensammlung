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

tags: Lineare Funktionen, Funktionsgraph, sehr leicht, sehr niedrig, Zeichnen

comment: Zeichne drei Graphen linearer Funktionen anhand ihrer Funktionsgleichungen.

author: Martin Lommatzsch
-->

# Graphen linearer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0013A;1;1;1`)
@AxisLabel(`id=LF0013A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0013A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0013A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=2x-1$.`)

@Rekonstruktion(`LF0013A;2*x-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=2$ und dem Ordinatenachsenabschnitt $b=-1$. Er verläuft beispielsweise durch die Punkte $(0\mid -1)$ und $(1\mid 1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0013B;1;1;1`)
@AxisLabel(`id=LF0013B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0013B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0013B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-x+3$.`)

@Rekonstruktion(`LF0013B;-x+3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-1$ und dem Ordinatenachsenabschnitt $b=3$. Er verläuft beispielsweise durch die Punkte $(0\mid 3)$ und $(3\mid 0)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0013C;1;1;1`)
@AxisLabel(`id=LF0013C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0013C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0013C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=x-2$.`)

@Rekonstruktion(`LF0013C;x-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1$ und dem Ordinatenachsenabschnitt $b=-2$. Er verläuft beispielsweise durch die Punkte $(0\mid -2)$ und $(2\mid 0)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
