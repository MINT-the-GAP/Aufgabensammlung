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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Bruchrechnung, Dezimalzahlen, mittel, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln mit Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 3" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-4.25;xmax=1.25;ymin=-3.75;ymax=1.75;width=400;id=QF0152A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0152A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0152A;f;3/8*(x+1.5)^2-2;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 3/8*(x+1,5)^2-2 ]] @canvas
@Algebrite.check(`3/8*(x+1.5)^2-2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-1{,}5\mid -2\right)$. Der Graph verläuft außerdem durch $P\left(0{,}5\mid -\frac{1}{2}\right)$. Damit ist der Öffnungsfaktor $a=\frac{\frac{3}{2}}{2^2}=\frac{3}{8}$. Daher gilt $f(x)=\frac{3}{8}\left(x+1{,}5\right)^2-2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-2.25;xmax=3.25;ymin=-1.75;ymax=3.75;width=400;id=QF0152B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0152B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0152B;g;-8/9*(x-0.5)^2+2;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -8/9*(x-0,5)^2+2 ]] @canvas
@Algebrite.check(`-8/9*(x-0.5)^2+2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(0{,}5\mid 2\right)$. Der Graph verläuft außerdem durch $P\left(2\mid 0\right)$. Damit ist der Öffnungsfaktor $a=\frac{-2}{\left(1{,}5\right)^2}=-\frac{8}{9}$. Daher gilt $g(x)=-\frac{8}{9}\left(x-0{,}5\right)^2+2$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-3.25;xmax=2.25;ymin=-2.25;ymax=3.25;width=400;id=QF0152C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0152C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0152C;h;4/3*(x+0.5)^2-1;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 4/3*(x+0,5)^2-1 ]] @canvas
@Algebrite.check(`4/3*(x+0.5)^2-1`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-0{,}5\mid -1\right)$. Der Graph verläuft außerdem durch $P\left(1\mid 2\right)$. Damit ist der Öffnungsfaktor $a=\frac{3}{\left(1{,}5\right)^2}=\frac{4}{3}$. Daher gilt $h(x)=\frac{4}{3}\left(x+0{,}5\right)^2-1$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-0.7;xmax=1.5;ymin=-0.7;ymax=1.5;width=400;id=QF0152D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0152D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0152D;k;-5/3*(x-0.4)^2+4/5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -5/3*(x-0,4)^2+4/5 ]] @canvas
@Algebrite.check(`-5/3*(x-0.4)^2+4/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(0{,}4\mid \frac{4}{5}\right)$. Der Graph verläuft außerdem durch $P\left(1\mid \frac{1}{5}\right)$. Damit ist der Öffnungsfaktor $a=\frac{-\frac{3}{5}}{\left(0{,}6\right)^2}=-\frac{5}{3}$. Daher gilt $k(x)=-\frac{5}{3}\left(x-0{,}4\right)^2+\frac{4}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen)

</div>

</section>
