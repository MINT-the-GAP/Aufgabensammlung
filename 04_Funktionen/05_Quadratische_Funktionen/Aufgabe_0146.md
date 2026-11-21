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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Bruchrechnung, Dezimalzahlen, leicht, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln ohne Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-0.4;xmax=1.8;ymin=-1.6;ymax=0.6;width=400;id=QF0146A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0146A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0146A;f;(x-1.4)^2-1;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ (x-1,4)^2-1 ]] @canvas
@Algebrite.check(`(x-1.4)^2-1`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(1{,}4\mid -1\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $f(x)=\left(x-1{,}4\right)^2-1$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-1.3;xmax=0.9;ymin=-0.4;ymax=1.8;width=400;id=QF0146B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0146B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0146B;g;-1*(x+0.2)^2+7/5;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -(x+0,2)^2+7/5 ]] @canvas
@Algebrite.check(`-(x+0.2)^2+7/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-0{,}2\mid \frac{7}{5}\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $g(x)=-\left(x+0{,}2\right)^2+\frac{7}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-1.5;xmax=0.7;ymin=-1.9;ymax=0.3;width=400;id=QF0146C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0146C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0146C;h;(x+0.4)^2-8/5;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ (x+0,4)^2-8/5 ]] @canvas
@Algebrite.check(`(x+0.4)^2-8/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-0{,}4\mid -\frac{8}{5}\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $h(x)=\left(x+0{,}4\right)^2-\frac{8}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-1;xmax=4.5;ymin=-3.25;ymax=2.25;width=400;id=QF0146D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0146D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0146D;k;-1*(x-2.5)^2;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -(x-2,5)^2 ]] @canvas
@Algebrite.check(`-(x-2.5)^2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(2{,}5\mid 0\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $k(x)=-\left(x-2{,}5\right)^2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

</section>
