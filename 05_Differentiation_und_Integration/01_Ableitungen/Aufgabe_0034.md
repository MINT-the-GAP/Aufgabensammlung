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

tags: Ableitungen, Produktregel, schwer, niedrig, Angeben

comment: Gib mithilfe der Produktregel die erste Ableitung von Produkten aus drei Faktoren an.
-->

# Produktregel mit drei Faktoren

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(x^3+x)\cos(4x)e^{2x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ exp(2*x)*((2*x^3+3*x^2+2*x+1)*cos(4*x)-4*(x^3+x)*sin(4*x)) ]] @canvas
@Algebrite.check(`exp(2*x)*((2*x^3+3*x^2+2*x+1)*cos(4*x)-4*(x^3+x)*sin(4*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=x^3+x,& u'(x)&=3x^2+1,\\
v(x)&=\cos(4x),& v'(x)&=-\sin(4x)\cdot 4=-4\sin(4x),\\
w(x)&=e^{2x},& w'(x)&=e^{2x}\cdot 2=2e^{2x}.
\end{aligned}
$$

Die Produktregel für $f(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
f'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=(3x^2+1)\cos(4x)e^{2x}-4(x^3+x)\sin(4x)e^{2x}+2(x^3+x)\cos(4x)e^{2x}.
\end{aligned}
$$

Klammere $e^{2x}$ aus und fasse die Summanden mit $\cos(4x)$ zusammen.

$$
\begin{aligned}
f'(x)&=e^{2x}\bigl[(2x^3+3x^2+2x+1)\cos(4x)\\
&\qquad-4(x^3+x)\sin(4x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=(x^2-4)\sin(3x)e^{5x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ exp(5*x)*((5*x^2+2*x-20)*sin(3*x)+3*(x^2-4)*cos(3*x)) ]] @canvas
@Algebrite.check(`exp(5*x)*((5*x^2+2*x-20)*sin(3*x)+3*(x^2-4)*cos(3*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=x^2-4,& u'(x)&=2x,\\
v(x)&=\sin(3x),& v'(x)&=\cos(3x)\cdot 3=3\cos(3x),\\
w(x)&=e^{5x},& w'(x)&=e^{5x}\cdot 5=5e^{5x}.
\end{aligned}
$$

Die Produktregel für $g(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
g'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=2x\sin(3x)e^{5x}+3(x^2-4)\cos(3x)e^{5x}+5(x^2-4)\sin(3x)e^{5x}.
\end{aligned}
$$

Klammere $e^{5x}$ aus und fasse die Summanden mit $\sin(3x)$ zusammen.

$$
\begin{aligned}
g'(x)&=e^{5x}\bigl[(5x^2+2x-20)\sin(3x)\\
&\qquad+3(x^2-4)\cos(3x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=(2x^2+x-1)\cos(2x)e^{-2x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ exp(-2*x)*((-4*x^2+2*x+3)*cos(2*x)-2*(2*x^2+x-1)*sin(2*x)) ]] @canvas
@Algebrite.check(`exp(-2*x)*((-4*x^2+2*x+3)*cos(2*x)-2*(2*x^2+x-1)*sin(2*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=2x^2+x-1,& u'(x)&=4x+1,\\
v(x)&=\cos(2x),& v'(x)&=-\sin(2x)\cdot 2=-2\sin(2x),\\
w(x)&=e^{-2x},& w'(x)&=e^{-2x}\cdot (-2)=-2e^{-2x}.
\end{aligned}
$$

Die Produktregel für $h(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
h'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=(4x+1)\cos(2x)e^{-2x}-2(2x^2+x-1)\sin(2x)e^{-2x}-2(2x^2+x-1)\cos(2x)e^{-2x}.
\end{aligned}
$$

Klammere $e^{-2x}$ aus und fasse die Summanden mit $\cos(2x)$ zusammen.

$$
\begin{aligned}
h'(x)&=e^{-2x}\bigl[(-4x^2+2x+3)\cos(2x)\\
&\qquad-2(2x^2+x-1)\sin(2x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=(x^3-3x+2)\sin(2x)e^{4x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ exp(4*x)*((4*x^3+3*x^2-12*x+5)*sin(2*x)+2*(x^3-3*x+2)*cos(2*x)) ]] @canvas
@Algebrite.check(`exp(4*x)*((4*x^3+3*x^2-12*x+5)*sin(2*x)+2*(x^3-3*x+2)*cos(2*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=x^3-3x+2,& u'(x)&=3x^2-3,\\
v(x)&=\sin(2x),& v'(x)&=\cos(2x)\cdot 2=2\cos(2x),\\
w(x)&=e^{4x},& w'(x)&=e^{4x}\cdot 4=4e^{4x}.
\end{aligned}
$$

Die Produktregel für $p(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
p'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=(3x^2-3)\sin(2x)e^{4x}+2(x^3-3x+2)\cos(2x)e^{4x}+4(x^3-3x+2)\sin(2x)e^{4x}.
\end{aligned}
$$

Klammere $e^{4x}$ aus und fasse die Summanden mit $\sin(2x)$ zusammen.

$$
\begin{aligned}
p'(x)&=e^{4x}\bigl[(4x^3+3x^2-12x+5)\sin(2x)\\
&\qquad+2(x^3-3x+2)\cos(2x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=(2x^3-x^2+1)\cos(3x)e^{-x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ exp(-x)*((-2*x^3+7*x^2-2*x-1)*cos(3*x)-3*(2*x^3-x^2+1)*sin(3*x)) ]] @canvas
@Algebrite.check(`exp(-x)*((-2*x^3+7*x^2-2*x-1)*cos(3*x)-3*(2*x^3-x^2+1)*sin(3*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=2x^3-x^2+1,& u'(x)&=6x^2-2x,\\
v(x)&=\cos(3x),& v'(x)&=-\sin(3x)\cdot 3=-3\sin(3x),\\
w(x)&=e^{-x},& w'(x)&=e^{-x}\cdot (-1)=-e^{-x}.
\end{aligned}
$$

Die Produktregel für $q(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
q'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=(6x^2-2x)\cos(3x)e^{-x}-3(2x^3-x^2+1)\sin(3x)e^{-x}-(2x^3-x^2+1)\cos(3x)e^{-x}.
\end{aligned}
$$

Klammere $e^{-x}$ aus und fasse die Summanden mit $\cos(3x)$ zusammen.

$$
\begin{aligned}
q'(x)&=e^{-x}\bigl[(-2x^3+7x^2-2x-1)\cos(3x)\\
&\qquad-3(2x^3-x^2+1)\sin(3x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(x^3+2x^2-x)\sin(4x)e^{-3x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ exp(-3*x)*((-3*x^3-3*x^2+7*x-1)*sin(4*x)+4*(x^3+2*x^2-x)*cos(4*x)) ]] @canvas
@Algebrite.check(`exp(-3*x)*((-3*x^3-3*x^2+7*x-1)*sin(4*x)+4*(x^3+2*x^2-x)*cos(4*x))`)
[[?]] @Explain
*****************
Die Faktoren und ihre Ableitungen lauten

$$
\begin{aligned}
u(x)&=x^3+2x^2-x,& u'(x)&=3x^2+4x-1,\\
v(x)&=\sin(4x),& v'(x)&=\cos(4x)\cdot 4=4\cos(4x),\\
w(x)&=e^{-3x},& w'(x)&=e^{-3x}\cdot (-3)=-3e^{-3x}.
\end{aligned}
$$

Die Produktregel für $r(x)=u(x)v(x)w(x)$ liefert

$$
\begin{aligned}
r'(x)&=u'(x)v(x)w(x)+u(x)v'(x)w(x) +u(x)v(x)w'(x)\\
&=(3x^2+4x-1)\sin(4x)e^{-3x}+4(x^3+2x^2-x)\cos(4x)e^{-3x}-3(x^3+2x^2-x)\sin(4x)e^{-3x}.
\end{aligned}
$$

Klammere $e^{-3x}$ aus und fasse die Summanden mit $\sin(4x)$ zusammen.

$$
\begin{aligned}
r'(x)&=e^{-3x}\bigl[(-3x^3-3x^2+7x-1)\sin(4x)\\
&\qquad+4(x^3+2x^2-x)\cos(4x)\bigr].
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

</section>
