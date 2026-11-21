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

@CoordinateSystem(`xmin=-2.75;xmax=2.75;ymin=-3.75;ymax=1.75;width=400;id=LF0059A;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0059A;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0059A;f;2/3*x-1;#FF00FF`)

**Gib** den Funktionsterm von $f$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$f(x)=$ [[ 2/3*x-1 ]] @canvas
@Algebrite.check(`2/3*x-1`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -1\right)$ und $Q\left(\frac{3}{2}\mid 0\right)$. Die Steigung ist $m=\frac{2}{3}$, der Ordinatenachsenabschnitt ist $b=-1$. Daher gilt $f(x)=\frac{2}{3}x-1$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$b)$__

@CoordinateSystem(`xmin=-2.75;xmax=2.75;ymin=-0.75;ymax=4.75;width=400;id=LF0059B;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0059B;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0059B;g;-3/4*x+5/2;#FF00FF`)

**Gib** den Funktionsterm von $g$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$g(x)=$ [[ -3/4*x+5/2 ]] @canvas
@Algebrite.check(`-3/4*x+5/2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid \frac{5}{2}\right)$ und $Q\left(2\mid 1\right)$. Die Steigung ist $m=-\frac{3}{4}$, der Ordinatenachsenabschnitt ist $b=\frac{5}{2}$. Daher gilt $g(x)=-\frac{3}{4}x+\frac{5}{2}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$c)$__

@CoordinateSystem(`xmin=-1.1;xmax=1.1;ymin=-1.7;ymax=0.5;width=400;id=LF0059C;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0059C;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0059C;h;4/5*x-3/5;#FF00FF`)

**Gib** den Funktionsterm von $h$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$h(x)=$ [[ 4/5*x-3/5 ]] @canvas
@Algebrite.check(`4/5*x-3/5`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid -\frac{3}{5}\right)$ und $Q\left(1\mid \frac{1}{5}\right)$. Die Steigung ist $m=\frac{4}{5}$, der Ordinatenachsenabschnitt ist $b=-\frac{3}{5}$. Daher gilt $h(x)=\frac{4}{5}x-\frac{3}{5}$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

<div class="flex-child">

__$d)$__

@CoordinateSystem(`xmin=-1.25;xmax=4.25;ymin=-2;ymax=3.5;width=400;id=LF0059D;axes=1;grid=1;border=0;static=1`)
@AxisLabel(`id=LF0059D;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`LF0059D;k;-5/6*x+2;#FF00FF`)

**Gib** den Funktionsterm von $k$ **an**.

<!-- data-hint-button="1" data-solution-button="3" -->
$k(x)=$ [[ -5/6*x+2 ]] @canvas
@Algebrite.check(`-5/6*x+2`)
[[?]] @Explain
****************
Die Gerade verläuft durch $P\left(0\mid 2\right)$ und $Q\left(3\mid -\frac{1}{2}\right)$. Die Steigung ist $m=-\frac{5}{6}$, der Ordinatenachsenabschnitt ist $b=2$. Daher gilt $k(x)=-\frac{5}{6}x+2$.
****************

@resetter

@ADetails(1=BE; Lineare Funktionen, Gleichung, Bruchrechnung)

</div>

</section>
