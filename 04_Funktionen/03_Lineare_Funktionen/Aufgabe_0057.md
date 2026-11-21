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

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-10;ymax=1;width=400;id=LF0057A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0057A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0057A;f;4*x-5;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 4*x-5 ]] @canvas
@Algebrite.check(`4*x-5`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -5\right)$ und $Q\left(1\mid -1\right)$. Die Steigung ist $m=4$, der Ordinatenachsenabschnitt ist $b=-5$. Daher gilt $f(x)=4x-5$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-3.5;ymax=7.5;width=400;id=LF0057B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0057B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0057B;g;-5*x+2;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -5*x+2 ]] @canvas
@Algebrite.check(`-5*x+2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 2\right)$ und $Q\left(1\mid -3\right)$. Die Steigung ist $m=-5$, der Ordinatenachsenabschnitt ist $b=2$. Daher gilt $g(x)=-5x+2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-1.5;ymax=9.5;width=400;id=LF0057C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0057C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0057C;h;2*x+6;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 2*x+6 ]] @canvas
@Algebrite.check(`2*x+6`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 6\right)$ und $Q\left(1\mid 8\right)$. Die Steigung ist $m=2$, der Ordinatenachsenabschnitt ist $b=6$. Daher gilt $h(x)=2x+6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-5.5;xmax=5.5;ymin=-10;ymax=1;width=400;id=LF0057D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0057D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0057D;k;-3*x-6;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -3*x-6 ]] @canvas
@Algebrite.check(`-3*x-6`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -6\right)$ und $Q\left(1\mid -9\right)$. Die Steigung ist $m=-3$, der Ordinatenachsenabschnitt ist $b=-6$. Daher gilt $k(x)=-3x-6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung)

</div>

</section>
