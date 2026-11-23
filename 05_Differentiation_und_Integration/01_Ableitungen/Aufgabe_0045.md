<!--
author: Martin Lommatzsch
version: 1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

tags: Ableitungen, Quotientenregel, leicht, niedrig, Angeben

comment: Gib die erste Ableitung für Quotienten aus Polynomen an.
-->

# Quotientenregel mit Polynomen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{2x+1}{x-3},\qquad x\ne 3$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ -7/(x-3)^2 ]] @canvas
@Algebrite.check(`-7/(x-3)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=2x+1$ mit $u'(x)=2$.

Der Nenner ist $v(x)=x-3$ mit $v'(x)=1$.

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2\cdot (x-3)-(2x+1)}{(x-3)^2}\\
&=\frac{-7}{(x-3)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{x-2}{3x+1},\qquad x\ne -\frac{1}{3}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 7/(3*x+1)^2 ]] @canvas
@Algebrite.check(`7/(3*x+1)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x-2$ mit $u'(x)=1$.

Der Nenner ist $v(x)=3x+1$ mit $v'(x)=3$.

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(3x+1)-(x-2)\cdot 3}{(3x+1)^2}\\
&=\frac{7}{(3x+1)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{x^2+1}{x+2},\qquad x\ne -2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (x^2+4*x-1)/(x+2)^2 ]] @canvas
@Algebrite.check(`(x^2+4*x-1)/(x+2)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x^2+1$ mit $u'(x)=2x$.

Der Nenner ist $v(x)=x+2$ mit $v'(x)=1$.

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2x\cdot (x+2)-(x^2+1)}{(x+2)^2}\\
&=\frac{x^2+4x-1}{(x+2)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{3x-1}{x^2+1},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (-3*x^2+2*x+3)/(x^2+1)^2 ]] @canvas
@Algebrite.check(`(-3*x^2+2*x+3)/(x^2+1)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=3x-1$ mit $u'(x)=3$.

Der Nenner ist $v(x)=x^2+1$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{3\cdot (x^2+1)-(3x-1)\cdot 2x}{(x^2+1)^2}\\
&=\frac{-3x^2+2x+3}{(x^2+1)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{x^2-2x}{x-1},\qquad x\ne 1$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (x^2-2*x+2)/(x-1)^2 ]] @canvas
@Algebrite.check(`(x^2-2*x+2)/(x-1)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x^2-2x$ mit $u'(x)=2x-2$.

Der Nenner ist $v(x)=x-1$ mit $v'(x)=1$.

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x-2)\cdot (x-1)-(x^2-2x)}{(x-1)^2}\\
&=\frac{x^2-2x+2}{(x-1)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{2x^2+3}{x^2+2},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (2*x)/(x^2+2)^2 ]] @canvas
@Algebrite.check(`(2*x)/(x^2+2)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=2x^2+3$ mit $u'(x)=4x$.

Der Nenner ist $v(x)=x^2+2$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{4x\cdot (x^2+2)-(2x^2+3)\cdot 2x}{(x^2+2)^2}\\
&=\frac{2x}{(x^2+2)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

</section>
