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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Bruchrechnung, leicht, niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0037A;1;1;1`)
@AxisLabel(`id=QF0037A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0037A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0037A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-\frac{4}{5}x^2+\frac{12}{5}x-\frac{21}{20}$.`)

@Rekonstruktion(`QF0037A;-4/5*x^2+12/5*x-21/20;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{4}{5}$. In der Parameterform gelten $a=-\frac{4}{5}$, $b=\frac{12}{5}$ und $c=-\frac{21}{20}$. Der Scheitelpunkt ist $S(\frac{3}{2}\mid \frac{3}{4})$, die Symmetrieachse lautet $x=\frac{3}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(\frac{1}{2}\mid -\frac{1}{20})$ und $(\frac{5}{2}\mid -\frac{1}{20})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0037B;1;1;1`)
@AxisLabel(`id=QF0037B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0037B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0037B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{4}{5}x^2+\frac{16}{5}x-\frac{49}{20}$.`)

@Rekonstruktion(`QF0037B;-4/5*x^2+16/5*x-49/20;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{4}{5}$. In der Parameterform gelten $a=-\frac{4}{5}$, $b=\frac{16}{5}$ und $c=-\frac{49}{20}$. Der Scheitelpunkt ist $S(2\mid \frac{3}{4})$, die Symmetrieachse lautet $x=2$. Der Graph verläuft beispielsweise durch die Punkte $(1\mid -\frac{1}{20})$ und $(3\mid -\frac{1}{20})$. Gegenüber dem Graphen von $f$ ist dieser Graph um $\frac{1}{2}$ nach rechts verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0037C;1;1;1`)
@AxisLabel(`id=QF0037C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0037C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0037C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{4}{5}x^2-\frac{12}{5}x+\frac{51}{20}$.`)

@Rekonstruktion(`QF0037C;4/5*x^2-12/5*x+51/20;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{4}{5}$. In der Parameterform gelten $a=\frac{4}{5}$, $b=-\frac{12}{5}$ und $c=\frac{51}{20}$. Der Scheitelpunkt ist $S(\frac{3}{2}\mid \frac{3}{4})$, die Symmetrieachse lautet $x=\frac{3}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(\frac{1}{2}\mid \frac{31}{20})$ und $(\frac{5}{2}\mid \frac{31}{20})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=\frac{3}{4}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
