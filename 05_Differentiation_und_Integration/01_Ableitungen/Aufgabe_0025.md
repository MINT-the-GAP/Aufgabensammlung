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

tags: Ableitungen, Kettenregel, mittel, niedrig, Angeben

comment: Gib mithilfe der Kettenregel die erste Ableitung von trigonometrischen und Exponentialfunktionen mit nichtlinearem innerem Term an.
-->

# Kettenregel bei trigonometrischen und Exponentialfunktionen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=2\sin(x^2)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 4*x*cos(x^2) ]] @canvas
@Algebrite.check(`4*x*cos(x^2)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2$ mit $u'(x)=2x$.

Die äußere Funktion ist $v(t)=2\sin(t)$ mit $v'(t)=2\cos(t)$.

Mit $f(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
f'(x)&=v'(u(x))\cdot u'(x)\\
&=2\cos(x^2)\cdot 2x\\
&=4x\cos(x^2).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3e^{x^2+1}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 6*x*exp(x^2+1) ]] @canvas
@Algebrite.check(`6*x*exp(x^2+1)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2+1$ mit $u'(x)=2x$.

Die äußere Funktion ist $v(t)=3e^{t}$ mit $v'(t)=3e^{t}$.

Mit $g(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
g'(x)&=v'(u(x))\cdot u'(x)\\
&=3e^{x^2+1}\cdot 2x\\
&=6xe^{x^2+1}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2\cos(3x^2-x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ -2*(6*x-1)*sin(3*x^2-x) ]] @canvas
@Algebrite.check(`-2*(6*x-1)*sin(3*x^2-x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=3x^2-x$ mit $u'(x)=6x-1$.

Die äußere Funktion ist $v(t)=2\cos(t)$ mit $v'(t)=-2\sin(t)$.

Mit $h(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
h'(x)&=v'(u(x))\cdot u'(x)\\
&=-2\sin(3x^2-x)\cdot (6x-1)\\
&=-2(6x-1)\sin(3x^2-x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=4e^{2-x^2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ -8*x*exp(2-x^2) ]] @canvas
@Algebrite.check(`-8*x*exp(2-x^2)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2-x^2$ mit $u'(x)=-2x$.

Die äußere Funktion ist $v(t)=4e^{t}$ mit $v'(t)=4e^{t}$.

Mit $p(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
p'(x)&=v'(u(x))\cdot u'(x)\\
&=4e^{2-x^2}\cdot (-2x)\\
&=-8xe^{2-x^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=-3\sin(x^3+x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -3*(3*x^2+1)*cos(x^3+x) ]] @canvas
@Algebrite.check(`-3*(3*x^2+1)*cos(x^3+x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^3+x$ mit $u'(x)=3x^2+1$.

Die äußere Funktion ist $v(t)=-3\sin(t)$ mit $v'(t)=-3\cos(t)$.

Mit $q(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
q'(x)&=v'(u(x))\cdot u'(x)\\
&=-3\cos(x^3+x)\cdot (3x^2+1)\\
&=-3(3x^2+1)\cos(x^3+x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=2e^{x^3-2x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 2*(3*x^2-2)*exp(x^3-2*x) ]] @canvas
@Algebrite.check(`2*(3*x^2-2)*exp(x^3-2*x)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^3-2x$ mit $u'(x)=3x^2-2$.

Die äußere Funktion ist $v(t)=2e^{t}$ mit $v'(t)=2e^{t}$.

Mit $r(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
r'(x)&=v'(u(x))\cdot u'(x)\\
&=2e^{x^3-2x}\cdot (3x^2-2)\\
&=2(3x^2-2)e^{x^3-2x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel`)

</div>

</section>
