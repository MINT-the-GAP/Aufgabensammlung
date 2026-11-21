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

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-5;ymax=6;width=400;id=QF0149A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0149A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0149A;f;5*x^2-2;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 5*x^2-2 ]] @canvas
@Algebrite.check(`5*x^2-2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(0\mid -2\right)$. Der Graph verläuft außerdem durch $P\left(1\mid 3\right)$. Damit ist der Öffnungsfaktor $a=\frac{5}{1^2}=5$. Daher gilt $f(x)=5x^2-2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-3.5;xmax=7.5;ymin=-5.5;ymax=5.5;width=400;id=QF0149B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0149B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0149B;g;-6*(x-3)^2+3;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -6*(x-3)^2+3 ]] @canvas
@Algebrite.check(`-6*(x-3)^2+3`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(3\mid 3\right)$. Der Graph verläuft außerdem durch $P\left(4\mid -3\right)$. Damit ist der Öffnungsfaktor $a=\frac{-6}{1^2}=-6$. Daher gilt $g(x)=-6\left(x-3\right)^2+3$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-7;xmax=4;ymin=-9.5;ymax=1.5;width=400;id=QF0149C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0149C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0149C;h;7*(x+2)^2-8;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 7*(x+2)^2-8 ]] @canvas
@Algebrite.check(`7*(x+2)^2-8`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-2\mid -8\right)$. Der Graph verläuft außerdem durch $P\left(-1\mid -1\right)$. Damit ist der Öffnungsfaktor $a=\frac{7}{1^2}=7$. Daher gilt $h(x)=7\left(x+2\right)^2-8$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-4.5;xmax=6.5;ymin=-4.5;ymax=6.5;width=400;id=QF0149D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0149D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0149D;k;-8*(x-1)^2+5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -8*(x-1)^2+5 ]] @canvas
@Algebrite.check(`-8*(x-1)^2+5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(1\mid 5\right)$. Der Graph verläuft außerdem durch $P\left(2\mid -3\right)$. Damit ist der Öffnungsfaktor $a=\frac{-8}{1^2}=-8$. Daher gilt $k(x)=-8\left(x-1\right)^2+5$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

</section>
