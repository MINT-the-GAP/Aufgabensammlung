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

tags: Quadratische Funktionen, Funktionsgraph, Zeichnen, Parameterform quadratischer Funktionen, Scheitelpunktsform, Gemischte Darstellungsformen, Bruchrechnung, leicht, normal

comment: Zeichne drei Graphen quadratischer Funktionen mit Brüchen.

author: Martin Lommatzsch
-->

# Graphen quadratischer Funktionen zeichnen

<img alt="Vernetzungsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Zeichne in jeder Teilaufgabe den Graphen der angegebenen quadratischen Funktion in das Koordinatensystem.

<section class="dynFlex">

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0047A;1;1;1`)
@AxisLabel(`id=QF0047A;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0047A;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0047A`,`**$a)$** **Zeichne** den Graphen der Funktion $f(x)=-\frac{11}{12}x^2-\frac{11}{9}x+\frac{241}{270}$.`)

@Rekonstruktion(`QF0047A;-11/12*x^2-11/9*x+241/270;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach unten geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=-\frac{11}{12}$. In der Parameterform gelten $a=-\frac{11}{12}$, $b=-\frac{11}{9}$ und $c=\frac{241}{270}$. Der Scheitelpunkt ist $S(-\frac{2}{3}\mid \frac{13}{10})$, die Symmetrieachse lautet $x=-\frac{2}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{3}\mid \frac{23}{60})$ und $(\frac{1}{3}\mid \frac{23}{60})$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0047B;1;1;1`)
@AxisLabel(`id=QF0047B;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0047B;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0047B`,`**$b)$** **Zeichne** den Graphen der Funktion $g(x)=\frac{11}{12}\left(x+\frac{2}{3}\right)^2+\frac{13}{10}$.`)

@Rekonstruktion(`QF0047B;11/12*(x+2/3)^2+13/10;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestauchte Parabel mit dem Öffnungsfaktor $a=\frac{11}{12}$. In der Scheitelpunktsform gelten $a=\frac{11}{12}$, $h=-\frac{2}{3}$ und $e=\frac{13}{10}$. Der Scheitelpunkt ist $S(-\frac{2}{3}\mid \frac{13}{10})$, die Symmetrieachse lautet $x=-\frac{2}{3}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{5}{3}\mid \frac{133}{60})$ und $(\frac{1}{3}\mid \frac{133}{60})$. Gegenüber dem Graphen von $f$ ist dieser Graph an der Geraden $y=\frac{13}{10}$ gespiegelt.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=400;id=QF0047C;1;1;1`)
@AxisLabel(`id=QF0047C;xlabel=$x$;ylabel=$y$`)
@DGS(`QF0047C;tools=[920;930];restrictions=[400];viewmode=2d`)

@Vollbildnotiz(`QF0047C`,`**$c)$** **Zeichne** den Graphen der Funktion $h(x)=\frac{11}{6}x^2+\frac{11}{18}x+\frac{1999}{1080}$.`)

@Rekonstruktion(`QF0047C;11/6*x^2+11/18*x+1999/1080;0.1`)
[[?]] @Explain
****************
Der Graph ist eine nach oben geöffnete, gestreckte Parabel mit dem Öffnungsfaktor $a=\frac{11}{6}$. In der Parameterform gelten $a=\frac{11}{6}$, $b=\frac{11}{18}$ und $c=\frac{1999}{1080}$. Der Scheitelpunkt ist $S(-\frac{1}{6}\mid \frac{9}{5})$, die Symmetrieachse lautet $x=-\frac{1}{6}$. Der Graph verläuft beispielsweise durch die Punkte $(-\frac{7}{6}\mid \frac{109}{30})$ und $(\frac{5}{6}\mid \frac{109}{30})$. Gegenüber dem Graphen von $g$ ist dieser Graph zusätzlich mit dem Faktor $2$ gestreckt sowie um $\frac{1}{2}$ nach rechts und um $\frac{1}{2}$ nach oben verschoben.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Bruchrechnung)

</div>

</section>
