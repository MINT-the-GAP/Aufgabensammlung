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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Bruchrechnung, leicht, sehr niedrig

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0035A;1;1;1`)
@AxisLabel(`id=QF0035A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0035A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0035A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=\frac{3}{4}x^2+\frac{3}{4}x+\frac{97}{48}$.`)

@Rekonstruktion(`QF0035A;3/4*x^2+3/4*x+97/48;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{3}{4}$. In der Parameterform gelten $a=\frac{3}{4}$, $b=\frac{3}{4}$ und $c=\frac{97}{48}$. Der Scheitelpunkt ist $S(-\frac{1}{2}\mid \frac{11}{6})$, die Symmetrieachse lautet $x=-\frac{1}{2}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{3}{2}\mid \frac{31}{12})$ und $(\frac{1}{2}\mid \frac{31}{12})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0035B;1;1;1`)
@AxisLabel(`id=QF0035B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0035B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0035B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{3}{4}\left(x-\frac{4}{5}\right)^2+\frac{7}{5}$.`)

@Rekonstruktion(`QF0035B;3/4*(x-4/5)^2+7/5;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{3}{4}$. In der Scheitelpunktsform gelten $a=\frac{3}{4}$, $h=\frac{4}{5}$ und $e=\frac{7}{5}$. Der Scheitelpunkt ist $S(\frac{4}{5}\mid \frac{7}{5})$, die Symmetrieachse lautet $x=\frac{4}{5}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{1}{5}\mid \frac{43}{20})$ und $(\frac{9}{5}\mid \frac{43}{20})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0035C;1;1;1`)
@AxisLabel(`id=QF0035C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0035C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0035C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=-\frac{4}{5}x^2+\frac{8}{15}x+\frac{59}{45}$.`)

@Rekonstruktion(`QF0035C;-4/5*x^2+8/15*x+59/45;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{4}{5}$. In der Parameterform gelten $a=-\frac{4}{5}$, $b=\frac{8}{15}$ und $c=\frac{59}{45}$. Der Scheitelpunkt ist $S(\frac{1}{3}\mid \frac{7}{5})$, die Symmetrieachse lautet $x=\frac{1}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{2}{3}\mid \frac{3}{5})$ und $(\frac{4}{3}\mid \frac{3}{5})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
