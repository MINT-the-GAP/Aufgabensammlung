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

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0024A;1;1;1`)
@AxisLabel(`id=LF0024A;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0024A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0024A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}4x+2{,}4$.`)

@Rekonstruktion(`LF0024A;0.4*x+2.4;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=0{,}4$ und dem Ordinatenachsenabschnitt $b=2{,}4$. Er verläuft beispielsweise durch die Punkte $(-1\mid 2)$ und $(4\mid 4)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0024B;1;1;1`)
@AxisLabel(`id=LF0024B;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0024B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0024B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-0{,}75x+1{,}5$.`)

@Rekonstruktion(`LF0024B;-0.75*x+1.5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine fallende Gerade mit der Steigung $m=-0{,}75$ und dem Ordinatenachsenabschnitt $b=1{,}5$. Er verläuft beispielsweise durch die Punkte $(-2\mid 3)$ und $(2\mid 0)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=LF0024C;1;1;1`)
@AxisLabel(`id=LF0024C;xlabel=$x$;ylabel=$y$`)
@DGS(`LF0024C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`LF0024C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=1{,}15x-1{,}3$.`)

@Rekonstruktion(`LF0024C;1.15*x-1.3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine Gerade mit der Steigung $m=1{,}15$ und dem Ordinatenachsenabschnitt $b=-1{,}3$. Er verläuft beispielsweise durch die Punkte $(0\mid -1{,}3)$ und $(2\mid 1)$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
