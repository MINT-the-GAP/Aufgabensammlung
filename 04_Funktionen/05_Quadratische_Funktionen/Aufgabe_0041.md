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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Bruchrechnung, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0041A;1;1;1`)
@AxisLabel(`id=QF0041A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0041A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0041A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-\frac{6}{5}x^2-\frac{8}{5}x-\frac{61}{30}$.`)

@Rekonstruktion(`QF0041A;-6/5*x^2-8/5*x-61/30;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-\frac{6}{5}$. In der Parameterform gelten $a=-\frac{6}{5}$, $b=-\frac{8}{5}$ und $c=-\frac{61}{30}$. Der Scheitelpunkt ist $S(-\frac{2}{3}\mid -\frac{3}{2})$, die Symmetrieachse lautet $x=-\frac{2}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{3}\mid -\frac{27}{10})$ und $(\frac{1}{3}\mid -\frac{27}{10})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0041B;1;1;1`)
@AxisLabel(`id=QF0041B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0041B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0041B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{6}{5}\left(x+\frac{1}{6}\right)^2-\frac{3}{2}$.`)

@Rekonstruktion(`QF0041B;-6/5*(x+1/6)^2-3/2;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=-\frac{6}{5}$. In der Scheitelpunktsform gelten $a=-\frac{6}{5}$, $h=-\frac{1}{6}$ und $e=-\frac{3}{2}$. Der Scheitelpunkt ist $S(-\frac{1}{6}\mid -\frac{3}{2})$, die Symmetrieachse lautet $x=-\frac{1}{6}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{6}\mid -\frac{27}{10})$ und $(\frac{5}{6}\mid -\frac{27}{10})$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{2}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0041C;1;1;1`)
@AxisLabel(`id=QF0041C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0041C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0041C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{6}{5}x^2+\frac{8}{5}x-\frac{29}{30}$.`)

@Rekonstruktion(`QF0041C;6/5*x^2+8/5*x-29/30;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=\frac{6}{5}$. In der Parameterform gelten $a=\frac{6}{5}$, $b=\frac{8}{5}$ und $c=-\frac{29}{30}$. Der Scheitelpunkt ist $S(-\frac{2}{3}\mid -\frac{3}{2})$, die Symmetrieachse lautet $x=-\frac{2}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{3}\mid -\frac{3}{10})$ und $(\frac{1}{3}\mid -\frac{3}{10})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=-\frac{3}{2}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
