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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Dezimalzahlen, Bruchrechnung, mittel, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Dezimalzahlen und Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0055A;1;1;1`)
@AxisLabel(`id=QF0055A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0055A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0055A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=0{,}75x^2-\frac{9}{20}x-1{,}7325$.`)

@Rekonstruktion(`QF0055A;0.75*x^2-9/20*x-1.7325;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}75$. In der Parameterform gelten $a=0{,}75$, $b=-\frac{9}{20}$ und $c=-1{,}7325$. Der Scheitelpunkt ist $S(\frac{3}{10}\mid -1{,}8)$, die Symmetrieachse lautet $x=\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{10}\mid -1{,}05)$ und $(\frac{13}{10}\mid -1{,}05)$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0055B;1;1;1`)
@AxisLabel(`id=QF0055B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0055B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0055B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=0{,}75x^2-\frac{3}{5}x-1{,}68$.`)

@Rekonstruktion(`QF0055B;0.75*x^2-3/5*x-1.68;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=0{,}75$. In der Parameterform gelten $a=0{,}75$, $b=-\frac{3}{5}$ und $c=-1{,}68$. Der Scheitelpunkt ist $S(\frac{2}{5}\mid -1{,}8)$, die Symmetrieachse lautet $x=\frac{2}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{5}\mid -1{,}05)$ und $(\frac{7}{5}\mid -1{,}05)$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{10}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0055C;1;1;1`)
@AxisLabel(`id=QF0055C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0055C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0055C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-0{,}75x^2+\frac{9}{20}x-1{,}8675$.`)

@Rekonstruktion(`QF0055C;-0.75*x^2+9/20*x-1.8675;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-0{,}75$. In der Parameterform gelten $a=-0{,}75$, $b=\frac{9}{20}$ und $c=-1{,}8675$. Der Scheitelpunkt ist $S(\frac{3}{10}\mid -1{,}8)$, die Symmetrieachse lautet $x=\frac{3}{10}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{10}\mid -2{,}55)$ und $(\frac{13}{10}\mid -2{,}55)$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-1{,}8$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
