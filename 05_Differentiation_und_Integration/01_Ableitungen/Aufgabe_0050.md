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

comment: Gib die erste Ableitung für Quotienten aus Sinus-, Kosinus- und Exponentialfunktionen mit verschiedenen linearen Argumenten an.
-->

# Quotientenregel mit verschiedenen Funktionsargumenten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{\sin(2x)}{e^{3x}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (2*cos(2*x)*exp(3*x)-sin(2*x)*3*exp(3*x))/(exp(3*x))^2 ]] @canvas
@Algebrite.check(`(2*cos(2*x)*exp(3*x)-sin(2*x)*3*exp(3*x))/(exp(3*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(2x)$ mit $u'(x)=2\cos(2x)$.

Der Nenner ist $v(x)=e^{3x}$ mit $v'(x)=3e^{3x}$.

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2\cos(2x)\cdot e^{3x}-\sin(2x)\cdot 3e^{3x}}{(e^{3x})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{e^{-2x}}{\cos(3x)},\qquad \cos(3x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (-2*exp(-2*x)*cos(3*x)+exp(-2*x)*3*sin(3*x))/(cos(3*x))^2 ]] @canvas
@Algebrite.check(`(-2*exp(-2*x)*cos(3*x)+exp(-2*x)*3*sin(3*x))/(cos(3*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^{-2x}$ mit $u'(x)=-2e^{-2x}$.

Der Nenner ist $v(x)=\cos(3x)$ mit $v'(x)=-3\sin(3x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-2e^{-2x}\cdot \cos(3x)+e^{-2x}\cdot 3\sin(3x)}{\cos^2(3x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{\cos(2x)}{e^{-x}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (-2*sin(2*x)*exp(-x)+cos(2*x)*exp(-x))/(exp(-x))^2 ]] @canvas
@Algebrite.check(`(-2*sin(2*x)*exp(-x)+cos(2*x)*exp(-x))/(exp(-x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(2x)$ mit $u'(x)=-2\sin(2x)$.

Der Nenner ist $v(x)=e^{-x}$ mit $v'(x)=-e^{-x}$.

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-2\sin(2x)\cdot e^{-x}+\cos(2x)\cdot e^{-x}}{(e^{-x})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{e^{2x}}{\sin(3x)},\qquad \sin(3x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (2*exp(2*x)*sin(3*x)-exp(2*x)*3*cos(3*x))/(sin(3*x))^2 ]] @canvas
@Algebrite.check(`(2*exp(2*x)*sin(3*x)-exp(2*x)*3*cos(3*x))/(sin(3*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^{2x}$ mit $u'(x)=2e^{2x}$.

Der Nenner ist $v(x)=\sin(3x)$ mit $v'(x)=3\cos(3x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2e^{2x}\cdot \sin(3x)-e^{2x}\cdot 3\cos(3x)}{\sin^2(3x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{\sin(3x)}{\cos(2x)},\qquad \cos(2x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (3*cos(3*x)*cos(2*x)+sin(3*x)*2*sin(2*x))/(cos(2*x))^2 ]] @canvas
@Algebrite.check(`(3*cos(3*x)*cos(2*x)+sin(3*x)*2*sin(2*x))/(cos(2*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(3x)$ mit $u'(x)=3\cos(3x)$.

Der Nenner ist $v(x)=\cos(2x)$ mit $v'(x)=-2\sin(2x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{3\cos(3x)\cdot \cos(2x)+\sin(3x)\cdot 2\sin(2x)}{\cos^2(2x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{\cos(3x)}{\sin(5x)},\qquad \sin(5x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (-3*sin(3*x)*sin(5*x)-cos(3*x)*5*cos(5*x))/(sin(5*x))^2 ]] @canvas
@Algebrite.check(`(-3*sin(3*x)*sin(5*x)-cos(3*x)*5*cos(5*x))/(sin(5*x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(3x)$ mit $u'(x)=-3\sin(3x)$.

Der Nenner ist $v(x)=\sin(5x)$ mit $v'(x)=5\cos(5x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-3\sin(3x)\cdot \sin(5x)-\cos(3x)\cdot 5\cos(5x)}{\sin^2(5x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

</section>
