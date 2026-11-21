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

tags: Lineare Funktionen, Funktionsgraph, Bruchrechnung, leicht, niedrig, Angeben

comment: Gib die Funktionsterme von vier dargestellten Geraden durch Ablesen an. Steigung und Ordinatenachsenabschnitt sind rationale Zahlen.

author: Martin Lommatzsch
-->

# Funktionsterme linearer Funktionen aus Graphen ablesen

<img alt="Vernetzungsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img alt="Schwierigkeitsgrad 2" src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

**Gib** zu jedem Graphen den zugehörigen Funktionsterm durch Ablesen **an**.

<section class="dynFlex" data-columns="2">

<div class="flex-child">

__$a)$__

@CoordinateSystem(`xmin=-1;xmax=4.5;ymin=-2;ymax=3.5;width=400;id=LF0060A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0060A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0060A;f;-3/7*x+3/2;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ -3/7*x+3/2 ]] @canvas
@Algebrite.check(`-3/7*x+3/2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid \frac{3}{2}\right)$ und $Q\left(\frac{7}{2}\mid 0\right)$. Die Steigung ist $m=-\frac{3}{7}$, der Ordinatenachsenabschnitt ist $b=\frac{3}{2}$. Daher gilt $f(x)=-\frac{3}{7}x+\frac{3}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-2.75;xmax=2.75;ymin=-4.75;ymax=0.75;width=400;id=LF0060B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0060B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0060B;g;5/4*x-2;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ 5/4*x-2 ]] @canvas
@Algebrite.check(`5/4*x-2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -2\right)$ und $Q\left(2\mid \frac{1}{2}\right)$. Die Steigung ist $m=\frac{5}{4}$, der Ordinatenachsenabschnitt ist $b=-2$. Daher gilt $g(x)=\frac{5}{4}x-2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-0.75;xmax=4.75;ymin=-1.5;ymax=4;width=400;id=LF0060C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0060C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0060C;h;7/8*x-1/2;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 7/8*x-1/2 ]] @canvas
@Algebrite.check(`7/8*x-1/2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -\frac{1}{2}\right)$ und $Q\left(4\mid 3\right)$. Die Steigung ist $m=\frac{7}{8}$, der Ordinatenachsenabschnitt ist $b=-\frac{1}{2}$. Daher gilt $h(x)=\frac{7}{8}x-\frac{1}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-0.6;xmax=1.6;ymin=-0.7;ymax=1.5;width=400;id=LF0060D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0060D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0060D;k;-8/5*x+6/5;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -8/5*x+6/5 ]] @canvas
@Algebrite.check(`-8/5*x+6/5`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid \frac{6}{5}\right)$ und $Q\left(1\mid -\frac{2}{5}\right)$. Die Steigung ist $m=-\frac{8}{5}$, der Ordinatenachsenabschnitt ist $b=\frac{6}{5}$. Daher gilt $k(x)=-\frac{8}{5}x+\frac{6}{5}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

</section>
