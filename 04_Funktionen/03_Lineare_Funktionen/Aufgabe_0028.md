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

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0028A;1;1;1`)
@AxisLabel(`id=LF0028A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0028A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0028A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}25x-\frac{5}{2}$.`)

@Rekonstruktion(`LF0028A;0.25*x-5/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}25$ und dem Ordinatenachsenabschnitt $b=-\frac{5}{2}$. Er verläuft beispielsweise durch die Punkte $(-2\mid -3)$ und $(2\mid -2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0028B;1;1;1`)
@AxisLabel(`id=LF0028B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0028B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0028B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{5}{6}x+1{,}5$.`)

@Rekonstruktion(`LF0028B;5/6*x+1.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{5}{6}$ und dem Ordinatenachsenabschnitt $b=1{,}5$. Er verläuft beispielsweise durch die Punkte $(-3\mid -1)$ und $(3\mid 4)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0028C;1;1;1`)
@AxisLabel(`id=LF0028C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0028C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0028C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-1{,}25x+\frac{3}{4}$.`)

@Rekonstruktion(`LF0028C;-1.25*x+3/4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-1{,}25$ und dem Ordinatenachsenabschnitt $b=\frac{3}{4}$. Er verläuft beispielsweise durch die Punkte $(-1{,}8\mid 3)$ und $(3\mid -3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
