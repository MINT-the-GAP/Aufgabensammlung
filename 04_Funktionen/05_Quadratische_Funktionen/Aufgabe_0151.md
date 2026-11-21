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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Dezimalzahlen, mittel, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln mit Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-1.5;xmax=0.7;ymin=-1.4;ymax=0.8;width=400;id=QF0151A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0151A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0151A;f;0.2*(x+0.4)^2-0.6;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 0,2*(x+0,4)^2-0,6 ]] @canvas
@Algebrite.check(`0.2*(x+0.4)^2-0.6`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-0{,}4\mid -0{,}6\right)$. Der Graph verläuft außerdem durch $P\left(0{,}6\mid -0{,}4\right)$. Damit ist der Öffnungsfaktor $a=\frac{0{,}2}{1^2}=0{,}2$. Daher gilt $f(x)=0{,}2\left(x+0{,}4\right)^2-0{,}6$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-0.3;xmax=1.9;ymin=-1.6;ymax=0.6;width=400;id=QF0151B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0151B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0151B;g;1.8*(x-0.8)^2-1.4;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 1,8*(x-0,8)^2-1,4 ]] @canvas
@Algebrite.check(`1.8*(x-0.8)^2-1.4`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(0{,}8\mid -1{,}4\right)$. Der Graph verläuft außerdem durch $P\left(1{,}8\mid 0{,}4\right)$. Damit ist der Öffnungsfaktor $a=\frac{1{,}8}{1^2}=1{,}8$. Daher gilt $g(x)=1{,}8\left(x-0{,}8\right)^2-1{,}4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Dezimalzahlen)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-1.7;xmax=0.5;ymin=-1.1;ymax=1.1;width=400;id=QF0151C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0151C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0151C;h;-0.8*(x+1.2)^2+0.4;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ -0,8*(x+1,2)^2+0,4 ]] @canvas
@Algebrite.check(`-0.8*(x+1.2)^2+0.4`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-1{,}2\mid 0{,}4\right)$. Der Graph verläuft außerdem durch $P\left(-0{,}2\mid -0{,}4\right)$. Damit ist der Öffnungsfaktor $a=\frac{-0{,}8}{1^2}=-0{,}8$. Daher gilt $h(x)=-0{,}8\left(x+1{,}2\right)^2+0{,}4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Dezimalzahlen)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-1.5;xmax=4;ymin=-2;ymax=3.5;width=400;id=QF0151D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0151D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0151D;k;-2.5*(x-1.5)^2+2;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -2,5*(x-1,5)^2+2 ]] @canvas
@Algebrite.check(`-2.5*(x-1.5)^2+2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(1{,}5\mid 2\right)$. Der Graph verläuft außerdem durch $P\left(2{,}5\mid -0{,}5\right)$. Damit ist der Öffnungsfaktor $a=\frac{-2{,}5}{1^2}=-2{,}5$. Daher gilt $k(x)=-2{,}5\left(x-1{,}5\right)^2+2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Dezimalzahlen)

</div>

</section>
