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

tags: Ableitungen, Quotientenregel, mittel, niedrig, Angeben

comment: Gib die erste Ableitung für Quotienten aus einem Polynom und einer Sinus-, Kosinus- oder Exponentialfunktion mit linearem Argument an.
-->

# Quotientenregel mit Polynomen und veränderten Argumenten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{e^{2x}}{x^2+1},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (2*exp(2*x)*(x^2+1)-exp(2*x)*2*x)/(x^2+1)^2 ]] @canvas
@Algebrite.check(`(2*exp(2*x)*(x^2+1)-exp(2*x)*2*x)/(x^2+1)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^{2x}$ mit $u'(x)=2e^{2x}$.

Der Nenner ist $v(x)=x^2+1$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2e^{2x}\cdot (x^2+1)-e^{2x}\cdot 2x}{(x^2+1)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{3x-2}{e^{-x}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (3*exp(-x)+(3*x-2)*exp(-x))/(exp(-x))^2 ]] @canvas
@Algebrite.check(`(3*exp(-x)+(3*x-2)*exp(-x))/(exp(-x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=3x-2$ mit $u'(x)=3$.

Der Nenner ist $v(x)=e^{-x}$ mit $v'(x)=-e^{-x}$.

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{3\cdot e^{-x}+(3x-2)\cdot e^{-x}}{(e^{-x})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{\sin(2x)}{2x+3},\qquad x\ne -\frac{3}{2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (2*cos(2*x)*(2*x+3)-sin(2*x)*2)/(2*x+3)^2 ]] @canvas
@Algebrite.check(`(2*cos(2*x)*(2*x+3)-sin(2*x)*2)/(2*x+3)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(2x)$ mit $u'(x)=2\cos(2x)$.

Der Nenner ist $v(x)=2x+3$ mit $v'(x)=2$.

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2\cos(2x)\cdot (2x+3)-\sin(2x)\cdot 2}{(2x+3)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{x^2+2x+2}{\sin(3x)},\qquad \sin(3x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ ((2*x+2)*sin(3*x)-(x^2+2*x+2)*3*cos(3*x))/(sin(3*x))^2 ]] @canvas
@Algebrite.check(`((2*x+2)*sin(3*x)-(x^2+2*x+2)*3*cos(3*x))/(sin(3*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x^2+2x+2$ mit $u'(x)=2x+2$.

Der Nenner ist $v(x)=\sin(3x)$ mit $v'(x)=3\cos(3x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x+2)\cdot \sin(3x)-(x^2+2x+2)\cdot 3\cos(3x)}{\sin^2(3x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{\cos(3x)}{x^2+3},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (-3*sin(3*x)*(x^2+3)-cos(3*x)*2*x)/(x^2+3)^2 ]] @canvas
@Algebrite.check(`(-3*sin(3*x)*(x^2+3)-cos(3*x)*2*x)/(x^2+3)^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(3x)$ mit $u'(x)=-3\sin(3x)$.

Der Nenner ist $v(x)=x^2+3$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-3\sin(3x)\cdot (x^2+3)-\cos(3x)\cdot 2x}{(x^2+3)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{2x^2+x-1}{\cos(2x)},\qquad \cos(2x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ ((4*x+1)*cos(2*x)+(2*x^2+x-1)*2*sin(2*x))/(cos(2*x))^2 ]] @canvas
@Algebrite.check(`((4*x+1)*cos(2*x)+(2*x^2+x-1)*2*sin(2*x))/(cos(2*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=2x^2+x-1$ mit $u'(x)=4x+1$.

Der Nenner ist $v(x)=\cos(2x)$ mit $v'(x)=-2\sin(2x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(4x+1)\cdot \cos(2x)+(2x^2+x-1)\cdot 2\sin(2x)}{\cos^2(2x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

</section>
