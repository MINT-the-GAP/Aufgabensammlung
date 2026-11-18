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

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0026A;1;1;1`)
@AxisLabel(`id=LF0026A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0026A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0026A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=1{,}2x-1{,}6$.`)

@Rekonstruktion(`LF0026A;1.2*x-1.6;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1{,}2$ und dem Ordinatenachsenabschnitt $b=-1{,}6$. Er verläuft beispielsweise durch die Punkte $(-2\mid -4)$ und $(3\mid 2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0026B;1;1;1`)
@AxisLabel(`id=LF0026B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0026B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0026B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}5x+2{,}5$.`)

@Rekonstruktion(`LF0026B;-0.5*x+2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-0{,}5$ und dem Ordinatenachsenabschnitt $b=2{,}5$. Er verläuft beispielsweise durch die Punkte $(-3\mid 4)$ und $(3\mid 1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0026C;1;1;1`)
@AxisLabel(`id=LF0026C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0026C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0026C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=0{,}85x-1{,}4$.`)

@Rekonstruktion(`LF0026C;0.85*x-1.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}85$ und dem Ordinatenachsenabschnitt $b=-1{,}4$. Er verläuft beispielsweise durch die Punkte $(0\mid -1{,}4)$ und $(4\mid 2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
