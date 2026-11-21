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

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0018A;1;1;1`)
@AxisLabel(`id=LF0018A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0018A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0018A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{1}{3}x+1$.`)

@Rekonstruktion(`LF0018A;1/3*x+1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{1}{3}$ und dem Ordinatenachsenabschnitt $b=1$. Er verläuft beispielsweise durch die Punkte $(0\mid 1)$ und $(3\mid 2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0018B;1;1;1`)
@AxisLabel(`id=LF0018B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0018B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0018B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{2}{3}x+2$.`)

@Rekonstruktion(`LF0018B;-2/3*x+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-\frac{2}{3}$ und dem Ordinatenachsenabschnitt $b=2$. Er verläuft beispielsweise durch die Punkte $(0\mid 2)$ und $(3\mid 0)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0018C;1;1;1`)
@AxisLabel(`id=LF0018C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0018C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0018C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{4}{3}x-1$.`)

@Rekonstruktion(`LF0018C;4/3*x-1;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{4}{3}$ und dem Ordinatenachsenabschnitt $b=-1$. Er verläuft beispielsweise durch die Punkte $(0\mid -1)$ und $(3\mid 3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
