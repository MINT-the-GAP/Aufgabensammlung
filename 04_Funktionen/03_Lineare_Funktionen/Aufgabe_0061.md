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

tags: Lineare Funktionen, Funktionsgraph, Dezimalzahlen, leicht, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Geraden durch Ablesen an. Steigung und Ordinatenachsenabschnitt sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme linearer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-1.1;xmax=1.1;ymin=-1.9;ymax=0.3;width=400;id=LF0061A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0061A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0061A;f;0.2*x-1.4;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 0,2*x-1,4 ]] @canvas
@Algebrite.check(`0.2*x-1.4`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -1{,}4\right)$ und $Q\left(1\mid -1{,}2\right)$. Die Steigung ist $m=0{,}2$, der Ordinatenachsenabschnitt ist $b=-1{,}4$. Daher gilt $f(x)=0{,}2x-1{,}4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-0.6;xmax=1.6;ymin=-1.1;ymax=1.1;width=400;id=LF0061B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0061B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0061B;g;-1.2*x+0.6;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -1,2*x+0,6 ]] @canvas
@Algebrite.check(`-1.2*x+0.6`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 0{,}6\right)$ und $Q\left(1\mid -0{,}6\right)$. Die Steigung ist $m=-1{,}2$, der Ordinatenachsenabschnitt ist $b=0{,}6$. Daher gilt $g(x)=-1{,}2x+0{,}6$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-1.1;xmax=1.1;ymin=-0.2;ymax=2;width=400;id=LF0061C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0061C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0061C;h;0.8*x+1;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 0,8*x+1 ]] @canvas
@Algebrite.check(`0.8*x+1`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 1\right)$ und $Q\left(1\mid 1{,}8\right)$. Die Steigung ist $m=0{,}8$, der Ordinatenachsenabschnitt ist $b=1$. Daher gilt $h(x)=0{,}8x+1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-1.1;xmax=1.1;ymin=-1.5;ymax=0.7;width=400;id=LF0061D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0061D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0061D;k;-0.6*x-0.4;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -0,6*x-0,4 ]] @canvas
@Algebrite.check(`-0.6*x-0.4`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -0{,}4\right)$ und $Q\left(1\mid -1\right)$. Die Steigung ist $m=-0{,}6$, der Ordinatenachsenabschnitt ist $b=-0{,}4$. Daher gilt $k(x)=-0{,}6x-0{,}4$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Dezimalzahlen)

</div>

</section>
