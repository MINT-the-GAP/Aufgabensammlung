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

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0029A;1;1;1`)
@AxisLabel(`id=LF0029A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0029A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0029A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}6x+\frac{7}{5}$.`)

@Rekonstruktion(`LF0029A;0.6*x+7/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}6$ und dem Ordinatenachsenabschnitt $b=\frac{7}{5}$. Er verläuft beispielsweise durch die Punkte $(-4\mid -1)$ und $(1\mid 2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0029B;1;1;1`)
@AxisLabel(`id=LF0029B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0029B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0029B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{2}{3}x-1{,}5$.`)

@Rekonstruktion(`LF0029B;-2/3*x-1.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-\frac{2}{3}$ und dem Ordinatenachsenabschnitt $b=-1{,}5$. Er verläuft beispielsweise durch die Punkte $(-3\mid 0{,}5)$ und $(3\mid -3{,}5)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0029C;1;1;1`)
@AxisLabel(`id=LF0029C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0029C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0029C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}15x-\frac{3}{5}$.`)

@Rekonstruktion(`LF0029C;1.15*x-3/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1{,}15$ und dem Ordinatenachsenabschnitt $b=-\frac{3}{5}$. Er verläuft beispielsweise durch die Punkte $(0\mid -0{,}6)$ und $(4\mid 4)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
