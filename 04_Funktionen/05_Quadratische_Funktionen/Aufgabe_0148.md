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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Ganze Zahlen, leicht, sehr niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln mit Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind ganze Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-3;xmax=8;ymin=-2;ymax=9;width=400;id=QF0148A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0148A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0148A;f;-2*(x-4)^2+7;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -2*(x-4)^2+7 ]] @canvas
@Algebrite.check(`-2*(x-4)^2+7`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(4\mid 7\right)$. Der Graph verläuft außerdem durch $P\left(5\mid 5\right)$. Damit ist der Öffnungsfaktor $a=\frac{-2}{1^2}=-2$. Daher gilt $f(x)=-2\left(x-4\right)^2+7$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-6.5;xmax=4.5;ymin=-6.5;ymax=4.5;width=400;id=QF0148B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0148B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0148B;g;6*(x+1)^2-4;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 6*(x+1)^2-4 ]] @canvas
@Algebrite.check(`6*(x+1)^2-4`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-1\mid -4\right)$. Der Graph verläuft außerdem durch $P\left(0\mid 2\right)$. Damit ist der Öffnungsfaktor $a=\frac{6}{1^2}=6$. Daher gilt $g(x)=6\left(x+1\right)^2-4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-7.5;xmax=3.5;ymin=-3;ymax=8;width=400;id=QF0148C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0148C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0148C;h;-4*(x+3)^2+5;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ -4*(x+3)^2+5 ]] @canvas
@Algebrite.check(`-4*(x+3)^2+5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-3\mid 5\right)$. Der Graph verläuft außerdem durch $P\left(-2\mid 1\right)$. Damit ist der Öffnungsfaktor $a=\frac{-4}{1^2}=-4$. Daher gilt $h(x)=-4\left(x+3\right)^2+5$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-4;xmax=7;ymin=-8.5;ymax=2.5;width=400;id=QF0148D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0148D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0148D;k;3*(x-2)^2-6;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ 3*(x-2)^2-6 ]] @canvas
@Algebrite.check(`3*(x-2)^2-6`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(2\mid -6\right)$. Der Graph verläuft außerdem durch $P\left(3\mid -3\right)$. Damit ist der Öffnungsfaktor $a=\frac{3}{1^2}=3$. Daher gilt $k(x)=3\left(x-2\right)^2-6$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

</section>
