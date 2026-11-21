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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Ganze Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln ohne Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind ganze Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-6.5;xmax=4.5;ymin=-6;ymax=5;width=400;id=QF0142A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0142A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0142A;f;-1*(x+1)^2;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -(x+1)^2 ]] @canvas
@Algebrite.check(`-(x+1)^2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-1\mid 0\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $f(x)=-\left(x+1\right)^2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-3.5;xmax=7.5;ymin=-7.5;ymax=3.5;width=400;id=QF0142B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0142B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0142B;g;(x-3)^2-4;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ (x-3)^2-4 ]] @canvas
@Algebrite.check(`(x-3)^2-4`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(3\mid -4\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $g(x)=\left(x-3\right)^2-4$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-8;xmax=3;ymin=-4.5;ymax=6.5;width=400;id=QF0142C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0142C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0142C;h;-1*(x+4)^2+2;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ -(x+4)^2+2 ]] @canvas
@Algebrite.check(`-(x+4)^2+2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-4\mid 2\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $h(x)=-\left(x+4\right)^2+2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-4.5;xmax=6.5;ymin=-2.5;ymax=8.5;width=400;id=QF0142D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0142D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0142D;k;(x-1)^2+5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ (x-1)^2+5 ]] @canvas
@Algebrite.check(`(x-1)^2+5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(1\mid 5\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $k(x)=\left(x-1\right)^2+5$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung)

</div>

</section>
