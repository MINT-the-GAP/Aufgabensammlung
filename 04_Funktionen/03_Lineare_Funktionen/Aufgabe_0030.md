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

tags: Lineare Funktionen, Funktionsgraph, Dezimalzahlen, Bruchrechnung, mittel, normal, Zeichnen

comment: Zeichne drei Graphen linearer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen linearer Funktionen mit Dezimalzahlen und Brüchen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0030A;1;1;1`)
@AxisLabel(`id=LF0030A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0030A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0030A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}8x-\frac{9}{5}$.`)

@Rekonstruktion(`LF0030A;0.8*x-9/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}8$ und dem Ordinatenachsenabschnitt $b=-\frac{9}{5}$. Er verläuft beispielsweise durch die Punkte $(1\mid -1)$ und $(3{,}5\mid 1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0030B;1;1;1`)
@AxisLabel(`id=LF0030B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0030B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0030B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{5}{4}x+2{,}5$.`)

@Rekonstruktion(`LF0030B;-5/4*x+2.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-\frac{5}{4}$ und dem Ordinatenachsenabschnitt $b=2{,}5$. Er verläuft beispielsweise durch die Punkte $(-1{,}2\mid 4)$ und $(2\mid 0)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0030C;1;1;1`)
@AxisLabel(`id=LF0030C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0030C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0030C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}5x-\frac{1}{2}$.`)

@Rekonstruktion(`LF0030C;1.5*x-1/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1{,}5$ und dem Ordinatenachsenabschnitt $b=-\frac{1}{2}$. Er verläuft beispielsweise durch die Punkte $(-1\mid -2)$ und $(3\mid 4)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
