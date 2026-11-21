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

tags: Lineare Funktionen, Funktionsgraph, Ganze Zahlen, sehr leicht, sehr niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Geraden durch Ablesen an. Steigung und Ordinatenachsenabschnitt sind ganze Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme linearer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 1" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-5;xmax=6;ymin=-5.5;ymax=5.5;width=400;id=LF0058A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0058A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0058A;f;-6*x+3;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -6*x+3 ]] @canvas
@Algebrite.check(`-6*x+3`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 3\right)$ und $Q\left(1\mid -3\right)$. Die Steigung ist $m=-6$, der Ordinatenachsenabschnitt ist $b=3$. Daher gilt $f(x)=-6x+3$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-5.5;ymax=5.5;width=400;id=LF0058B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0058B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0058B;g;x;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ x ]] @canvas
@Algebrite.check(`x`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 0\right)$ und $Q\left(1\mid 1\right)$. Die Steigung ist $m=1$, der Ordinatenachsenabschnitt ist $b=0$. Daher gilt $g(x)=x$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-5;xmax=6;ymin=-9;ymax=2;width=400;id=LF0058C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0058C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0058C;h;6*x-7;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 6*x-7 ]] @canvas
@Algebrite.check(`6*x-7`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -7\right)$ und $Q\left(1\mid -1\right)$. Die Steigung ist $m=6$, der Ordinatenachsenabschnitt ist $b=-7$. Daher gilt $h(x)=6x-7$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-9;ymax=2;width=400;id=LF0058D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0058D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0058D;k;-2*x-5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -2*x-5 ]] @canvas
@Algebrite.check(`-2*x-5`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -5\right)$ und $Q\left(1\mid -7\right)$. Die Steigung ist $m=-2$, der Ordinatenachsenabschnitt ist $b=-5$. Daher gilt $k(x)=-2x-5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
