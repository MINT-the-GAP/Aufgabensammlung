<!--
version: 1.0.0
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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Bruchrechnung, mittel, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln mit Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-3.75;xmax=1.75;ymin=-1.25;ymax=4.25;width=400;id=QF0150A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0150A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0150A;f;2/3*(x+1)^2+3/2;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2/3*(x+1)^2+3/2 ]] @canvas
@Algebrite.check(`2/3*(x+1)^2+3/2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-1\mid \frac{3}{2}\right)$. Der Graph verläuft außerdem durch $P\left(\frac{1}{2}\mid 3\right)$. Damit ist der Öffnungsfaktor $a=\frac{\frac{3}{2}}{\left(\frac{3}{2}\right)^2}=\frac{2}{3}$. Daher gilt $f(x)=\frac{2}{3}\left(x+1\right)^2+\frac{3}{2}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-0.5;xmax=1.7;ymin=-0.6;ymax=1.6;width=400;id=QF0150B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0150B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0150B;g;-3/5*(x-3/5)^2+1;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3/5*(x-3/5)^2+1 ]] @canvas
@Algebrite.check(`-3/5*(x-3/5)^2+1`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(\frac{3}{5}\mid 1\right)$. Der Graph verläuft außerdem durch $P\left(\frac{8}{5}\mid \frac{2}{5}\right)$. Damit ist der Öffnungsfaktor $a=\frac{-\frac{3}{5}}{1^2}=-\frac{3}{5}$. Daher gilt $g(x)=-\frac{3}{5}\left(x-\frac{3}{5}\right)^2+1$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-7.5;xmax=3.5;ymin=-6;ymax=5;width=400;id=QF0150C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0150C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0150C;h;5/4*(x+2)^2-3;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 5/4*(x+2)^2-3 ]] @canvas
@Algebrite.check(`5/4*(x+2)^2-3`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-2\mid -3\right)$. Der Graph verläuft außerdem durch $P\left(0\mid 2\right)$. Damit ist der Öffnungsfaktor $a=\frac{5}{2^2}=\frac{5}{4}$. Daher gilt $h(x)=\frac{5}{4}\left(x+2\right)^2-3$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-4.5;xmax=6.5;ymin=-5;ymax=6;width=400;id=QF0150D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0150D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0150D;k;-7/4*(x-1)^2+4;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -7/4*(x-1)^2+4 ]] @canvas
@Algebrite.check(`-7/4*(x-1)^2+4`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(1\mid 4\right)$. Der Graph verläuft außerdem durch $P\left(3\mid -3\right)$. Damit ist der Öffnungsfaktor $a=\frac{-7}{2^2}=-\frac{7}{4}$. Daher gilt $k(x)=-\frac{7}{4}\left(x-1\right)^2+4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

</section>
