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

tags: Quadratische Funktionen, Funktionsgraph, Scheitelpunktsform, Bruchrechnung, leicht, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Parabeln ohne Stauchung oder Streckung durch Ablesen an. Die Parameter der Scheitelpunktsform sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme quadratischer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-0.5;xmax=1.7;ymin=-1.4;ymax=0.8;width=400;id=QF0144A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0144A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0144A;f;(x-3/5)^2-4/5;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ (x-3/5)^2-4/5 ]] @canvas
@Algebrite.check(`(x-3/5)^2-4/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(\frac{3}{5}\mid -\frac{4}{5}\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $f(x)=\left(x-\frac{3}{5}\right)^2-\frac{4}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-1.8;xmax=0.4;ymin=-0.5;ymax=1.7;width=400;id=QF0144B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0144B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0144B;g;-1*(x+7/5)^2+6/5;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -(x+7/5)^2+6/5 ]] @canvas
@Algebrite.check(`-(x+7/5)^2+6/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-\frac{7}{5}\mid \frac{6}{5}\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $g(x)=-\left(x+\frac{7}{5}\right)^2+\frac{6}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-1;xmax=4.5;ymin=-3.5;ymax=2;width=400;id=QF0144C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0144C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0144C;h;(x-5/2)^2-3/2;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ (x-5/2)^2-3/2 ]] @canvas
@Algebrite.check(`(x-5/2)^2-3/2`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(\frac{5}{2}\mid -\frac{3}{2}\right)$, der Öffnungsfaktor ist $a=1$. Daher gilt $h(x)=\left(x-\frac{5}{2}\right)^2-\frac{3}{2}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-1.9;xmax=0.3;ymin=-1.8;ymax=0.4;width=400;id=QF0144D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=QF0144D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0144D;k;-1*(x+4/5)^2-2/5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -(x+4/5)^2-2/5 ]] @canvas
@Algebrite.check(`-(x+4/5)^2-2/5`)
[[?]] @Explain
****************
Der Scheitelpunkt ist $S\left(-\frac{4}{5}\mid -\frac{2}{5}\right)$, der Öffnungsfaktor ist $a=-1$. Daher gilt $k(x)=-\left(x+\frac{4}{5}\right)^2-\frac{2}{5}$.
****************

@resetter

@ADetails(1=BE; Quadratische Funktionen, Quadratische Ergänzung, Bruchrechnung)

</div>

</section>
