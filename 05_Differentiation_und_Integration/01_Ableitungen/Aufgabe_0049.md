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

comment: Gib die erste Ableitung für Quotienten aus Sinus-, Kosinus- und Exponentialfunktionen an.
-->

# Quotientenregel mit Sinus, Kosinus und Exponentialfunktionen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{\sin(x)}{e^x},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (cos(x)*exp(x)-sin(x)*exp(x))/(exp(x))^2 ]] @canvas
@Algebrite.check(`(cos(x)*exp(x)-sin(x)*exp(x))/(exp(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(x)$ mit $u'(x)=\cos(x)$.

Der Nenner ist $v(x)=e^x$ mit $v'(x)=e^x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{\cos(x)\cdot e^x-\sin(x)\cdot e^x}{(e^x)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{e^x}{\cos(x)},\qquad \cos(x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (exp(x)*cos(x)+exp(x)*sin(x))/(cos(x))^2 ]] @canvas
@Algebrite.check(`(exp(x)*cos(x)+exp(x)*sin(x))/(cos(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^x$ mit $u'(x)=e^x$.

Der Nenner ist $v(x)=\cos(x)$ mit $v'(x)=-\sin(x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{e^x\cdot \cos(x)+e^x\cdot \sin(x)}{\cos^2(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{\cos(x)}{e^x},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (-sin(x)*exp(x)-cos(x)*exp(x))/(exp(x))^2 ]] @canvas
@Algebrite.check(`(-sin(x)*exp(x)-cos(x)*exp(x))/(exp(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(x)$ mit $u'(x)=-\sin(x)$.

Der Nenner ist $v(x)=e^x$ mit $v'(x)=e^x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-\sin(x)\cdot e^x-\cos(x)\cdot e^x}{(e^x)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{e^x}{\sin(x)},\qquad \sin(x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (exp(x)*sin(x)-exp(x)*cos(x))/(sin(x))^2 ]] @canvas
@Algebrite.check(`(exp(x)*sin(x)-exp(x)*cos(x))/(sin(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^x$ mit $u'(x)=e^x$.

Der Nenner ist $v(x)=\sin(x)$ mit $v'(x)=\cos(x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{e^x\cdot \sin(x)-e^x\cdot \cos(x)}{\sin^2(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{\sin(3x)}{\cos(x)},\qquad \cos(x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (3*cos(3*x)*cos(x)+sin(3*x)*sin(x))/(cos(x))^2 ]] @canvas
@Algebrite.check(`(3*cos(3*x)*cos(x)+sin(3*x)*sin(x))/(cos(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(3x)$ mit $u'(x)=3\cos(3x)$.

Der Nenner ist $v(x)=\cos(x)$ mit $v'(x)=-\sin(x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{3\cos(3x)\cdot \cos(x)+\sin(3x)\cdot \sin(x)}{\cos^2(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{\cos(2x)}{\sin(x)},\qquad \sin(x)\ne 0$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (-2*sin(2*x)*sin(x)-cos(2*x)*cos(x))/(sin(x))^2 ]] @canvas
@Algebrite.check(`(-2*sin(2*x)*sin(x)-cos(2*x)*cos(x))/(sin(x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(2x)$ mit $u'(x)=-2\sin(2x)$.

Der Nenner ist $v(x)=\sin(x)$ mit $v'(x)=\cos(x)$.

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-2\sin(2x)\cdot \sin(x)-\cos(2x)\cdot \cos(x)}{\sin^2(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Quotientenregel`)

</div>

</section>
