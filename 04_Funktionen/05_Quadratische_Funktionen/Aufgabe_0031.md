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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform, Bruchrechnung, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0031A;1;1;1`)
@AxisLabel(`id=QF0031A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0031A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0031A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{1}{2}x^2+\frac{4}{5}x+\frac{81}{50}$.`)

@Rekonstruktion(`QF0031A;1/2*x^2+4/5*x+81/50;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{1}{2}$. In der Parameterform gelten $a=\frac{1}{2}$, $b=\frac{4}{5}$ und $c=\frac{81}{50}$. Der Scheitelpunkt ist $S(-\frac{4}{5}\mid \frac{13}{10})$, die Symmetrieachse lautet $x=-\frac{4}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{9}{5}\mid \frac{9}{5})$ und $(\frac{1}{5}\mid \frac{9}{5})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0031B;1;1;1`)
@AxisLabel(`id=QF0031B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0031B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0031B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=-\frac{2}{3}x^2+\frac{2}{3}x+\frac{5}{3}$.`)

@Rekonstruktion(`QF0031B;-2/3*x^2+2/3*x+5/3;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{2}{3}$. In der Parameterform gelten $a=-\frac{2}{3}$, $b=\frac{2}{3}$ und $c=\frac{5}{3}$. Der Scheitelpunkt ist $S(\frac{1}{2}\mid \frac{11}{6})$, die Symmetrieachse lautet $x=\frac{1}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{2}\mid \frac{7}{6})$ und $(\frac{3}{2}\mid \frac{7}{6})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0031C;1;1;1`)
@AxisLabel(`id=QF0031C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0031C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0031C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{3}{4}x^2+x+\frac{13}{6}$.`)

@Rekonstruktion(`QF0031C;3/4*x^2+1*x+13/6;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{3}{4}$. In der Parameterform gelten $a=\frac{3}{4}$, $b=1$ und $c=\frac{13}{6}$. Der Scheitelpunkt ist $S(-\frac{2}{3}\mid \frac{11}{6})$, die Symmetrieachse lautet $x=-\frac{2}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{3}\mid \frac{31}{12})$ und $(\frac{1}{3}\mid \frac{31}{12})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
