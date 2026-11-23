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

tags: Ableitungen, Kettenregel, schwer, niedrig, Angeben

comment: Gib mithilfe der Kettenregel die erste Ableitung von Verkettungen aus drei Funktionen an.
-->

# Kettenregel mit drei Funktionen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=2e^{2\sin(3x^2-4x)}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 8*(3*x-2)*cos(3*x^2-4*x)*exp(2*sin(3*x^2-4*x)) ]] @canvas
@Algebrite.check(`8*(3*x-2)*cos(3*x^2-4*x)*exp(2*sin(3*x^2-4*x))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=3x^2-4x$ mit $u'(x)=6x-4$.

Die mittlere Funktion ist $v(t)=2\sin(t)$ mit $v'(t)=2\cos(t)$.

Die äußere Funktion ist $w(s)=2e^s$ mit $w'(s)=2e^s$.

Für $f(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
f'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=2e^{2\sin(3x^2-4x)}\cdot 2\cos(3x^2-4x)\cdot (6x-4)\\
&=8(3x-2)\cdot \cos(3x^2-4x)\cdot e^{2\sin(3x^2-4x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3e^{-2\cos(x^2+1)}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 12*x*sin(x^2+1)*exp(-2*cos(x^2+1)) ]] @canvas
@Algebrite.check(`12*x*sin(x^2+1)*exp(-2*cos(x^2+1))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2+1$ mit $u'(x)=2x$.

Die mittlere Funktion ist $v(t)=-2\cos(t)$ mit $v'(t)=2\sin(t)$.

Die äußere Funktion ist $w(s)=3e^s$ mit $w'(s)=3e^s$.

Für $g(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
g'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=3e^{-2\cos(x^2+1)}\cdot 2\sin(x^2+1)\cdot 2x\\
&=12x\cdot \sin(x^2+1)\cdot e^{-2\cos(x^2+1)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2\sin(3e^{x^2-2x})$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 12*(x-1)*exp(x^2-2*x)*cos(3*exp(x^2-2*x)) ]] @canvas
@Algebrite.check(`12*(x-1)*exp(x^2-2*x)*cos(3*exp(x^2-2*x))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2-2x$ mit $u'(x)=2x-2$.

Die mittlere Funktion ist $v(t)=3e^t$ mit $v'(t)=3e^t$.

Die äußere Funktion ist $w(s)=2\sin(s)$ mit $w'(s)=2\cos(s)$.

Für $h(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
h'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=2\cos(3e^{x^2-2x})\cdot 3e^{x^2-2x}\cdot (2x-2)\\
&=12(x-1)\cdot e^{x^2-2x}\cdot \cos(3e^{x^2-2x}).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=-2\cos(2\sin(x^3-x))$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ 4*(3*x^2-1)*cos(x^3-x)*sin(2*sin(x^3-x)) ]] @canvas
@Algebrite.check(`4*(3*x^2-1)*cos(x^3-x)*sin(2*sin(x^3-x))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^3-x$ mit $u'(x)=3x^2-1$.

Die mittlere Funktion ist $v(t)=2\sin(t)$ mit $v'(t)=2\cos(t)$.

Die äußere Funktion ist $w(s)=-2\cos(s)$ mit $w'(s)=2\sin(s)$.

Für $p(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
p'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=2\sin(2\sin(x^3-x))\cdot 2\cos(x^3-x)\cdot (3x^2-1)\\
&=4(3x^2-1)\cdot \cos(x^3-x)\cdot \sin(2\sin(x^3-x)).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=4\sin(2\cos(2x^2-x))$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -8*(4*x-1)*sin(2*x^2-x)*cos(2*cos(2*x^2-x)) ]] @canvas
@Algebrite.check(`-8*(4*x-1)*sin(2*x^2-x)*cos(2*cos(2*x^2-x))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2x^2-x$ mit $u'(x)=4x-1$.

Die mittlere Funktion ist $v(t)=2\cos(t)$ mit $v'(t)=-2\sin(t)$.

Die äußere Funktion ist $w(s)=4\sin(s)$ mit $w'(s)=4\cos(s)$.

Für $q(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
q'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=4\cos(2\cos(2x^2-x))\cdot (-2\sin(2x^2-x))\cdot (4x-1)\\
&=-8(4x-1)\cdot \sin(2x^2-x)\cdot \cos(2\cos(2x^2-x)).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=e^{3\cos(x^3-3x)}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ -9*(x^2-1)*sin(x^3-3*x)*exp(3*cos(x^3-3*x)) ]] @canvas
@Algebrite.check(`-9*(x^2-1)*sin(x^3-3*x)*exp(3*cos(x^3-3*x))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^3-3x$ mit $u'(x)=3x^2-3$.

Die mittlere Funktion ist $v(t)=3\cos(t)$ mit $v'(t)=-3\sin(t)$.

Die äußere Funktion ist $w(s)=e^s$ mit $w'(s)=e^s$.

Für $r(x)=w(v(u(x)))$ ergibt die Kettenregel

$$
\begin{aligned}
r'(x)&=w'(v(u(x)))\cdot v'(u(x))\cdot u'(x)\\
&=e^{3\cos(x^3-3x)}\cdot (-3\sin(x^3-3x))\cdot (3x^2-3)\\
&=-9(x^2-1)\cdot \sin(x^3-3x)\cdot e^{3\cos(x^3-3x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

</section>
