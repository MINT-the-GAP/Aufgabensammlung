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

tags: Lineare Funktionen, Funktionsgraph, Bruchrechnung, leicht, niedrig, Zeichnen

comment: Zeichne drei Graphen linearer Funktionen mit unterschiedlichen größeren Bruchnennern.

author: Martin Lommatzsch
-->

# Graphen linearer Funktionen mit größeren Bruchnennern zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen linearen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0021A;1;1;1`)
@AxisLabel(`id=LF0021A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0021A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0021A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{2}{5}x+2$.`)

@Rekonstruktion(`LF0021A;2/5*x+2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{2}{5}$ und dem Ordinatenachsenabschnitt $b=2$. Er verläuft beispielsweise durch die Punkte $(0\mid 2)$ und $(\frac{5}{2}\mid 3)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0021B;1;1;1`)
@AxisLabel(`id=LF0021B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0021B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0021B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{3}{10}x-2$.`)

@Rekonstruktion(`LF0021B;-3/10*x-2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-\frac{3}{10}$ und dem Ordinatenachsenabschnitt $b=-2$. Er verläuft beispielsweise durch die Punkte $(0\mid -2)$ und $(-\frac{10}{3}\mid -1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0021C;1;1;1`)
@AxisLabel(`id=LF0021C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0021C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0021C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{5}{6}x+3$.`)

@Rekonstruktion(`LF0021C;5/6*x+3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=\frac{5}{6}$ und dem Ordinatenachsenabschnitt $b=3$. Er verläuft beispielsweise durch die Punkte $(0\mid 3)$ und $(-\frac{6}{5}\mid 2)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
