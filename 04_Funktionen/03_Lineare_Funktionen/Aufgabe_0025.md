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

tags: Lineare Funktionen, Funktionsgraph, Dezimalzahlen, leicht, niedrig, Zeichnen

comment: Zeichne drei Graphen linearer Funktionen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Graphen linearer Funktionen mit Dezimalzahlen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0025A;1;1;1`)
@AxisLabel(`id=LF0025A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0025A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0025A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}25x+2{,}5$.`)

@Rekonstruktion(`LF0025A;0.25*x+2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}25$ und dem Ordinatenachsenabschnitt $b=2{,}5$. Er verläuft beispielsweise durch die Punkte $(-2\mid 2)$ und $(2\mid 3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0025B;1;1;1`)
@AxisLabel(`id=LF0025B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0025B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0025B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}6x-1{,}6$.`)

@Rekonstruktion(`LF0025B;-0.6*x-1.6;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-0{,}6$ und dem Ordinatenachsenabschnitt $b=-1{,}6$. Er verläuft beispielsweise durch die Punkte $(-1\mid -1)$ und $(4\mid -4)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0025C;1;1;1`)
@AxisLabel(`id=LF0025C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0025C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0025C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}35x-1{,}7$.`)

@Rekonstruktion(`LF0025C;1.35*x-1.7;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1{,}35$ und dem Ordinatenachsenabschnitt $b=-1{,}7$. Er verläuft beispielsweise durch die Punkte $(0\mid -1{,}7)$ und $(2\mid 1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
