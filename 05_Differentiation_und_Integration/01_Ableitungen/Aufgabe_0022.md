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

tags: Ableitungen, Kettenregel, leicht, niedrig, Angeben

comment: Gib mithilfe der Kettenregel die erste Ableitung von Sinus-, Kosinus- und Exponentialfunktionen an.
-->

# Einfache Kettenregel

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=3\sin(2x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 6*cos(2*x) ]] @canvas
@Algebrite.check(`6*cos(2*x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2x$ mit $u'(x)=2$.

Die äußere Funktion ist $v(t)=3\sin(t)$ mit $v'(t)=3\cos(t)$.

Mit $f(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
f'(x)&=v'(u(x))\cdot u'(x)\\
&=3\cos(2x)\cdot 2\\
&=6\cos(2x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=2e^{4x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 8*exp(4*x) ]] @canvas
@Algebrite.check(`8*exp(4*x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=4x$ mit $u'(x)=4$.

Die äußere Funktion ist $v(t)=2e^t$ mit $v'(t)=2e^t$.

Mit $g(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
g'(x)&=v'(u(x))\cdot u'(x)\\
&=2e^{4x}\cdot 4\\
&=8e^{4x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2\cos(3x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ -6*sin(3*x) ]] @canvas
@Algebrite.check(`-6*sin(3*x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=3x$ mit $u'(x)=3$.

Die äußere Funktion ist $v(t)=2\cos(t)$ mit $v'(t)=-2\sin(t)$.

Mit $h(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
h'(x)&=v'(u(x))\cdot u'(x)\\
&=-2\sin(3x)\cdot 3\\
&=-6\sin(3x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=3e^{-2x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ -6*exp(-2*x) ]] @canvas
@Algebrite.check(`-6*exp(-2*x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=-2x$ mit $u'(x)=-2$.

Die äußere Funktion ist $v(t)=3e^t$ mit $v'(t)=3e^t$.

Mit $p(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
p'(x)&=v'(u(x))\cdot u'(x)\\
&=3e^{-2x}\cdot (-2)\\
&=-6e^{-2x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=-2\cos(2x-1)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 4*sin(2*x-1) ]] @canvas
@Algebrite.check(`4*sin(2*x-1)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2x-1$ mit $u'(x)=2$.

Die äußere Funktion ist $v(t)=-2\cos(t)$ mit $v'(t)=2\sin(t)$.

Mit $q(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
q'(x)&=v'(u(x))\cdot u'(x)\\
&=2\sin(2x-1)\cdot 2\\
&=4\sin(2x-1).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=4e^{3x+1}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 12*exp(3*x+1) ]] @canvas
@Algebrite.check(`12*exp(3*x+1)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=3x+1$ mit $u'(x)=3$.

Die äußere Funktion ist $v(t)=4e^t$ mit $v'(t)=4e^t$.

Mit $r(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
r'(x)&=v'(u(x))\cdot u'(x)\\
&=4e^{3x+1}\cdot 3\\
&=12e^{3x+1}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

</section>
