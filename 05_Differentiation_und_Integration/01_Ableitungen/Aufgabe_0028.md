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

tags: Ableitungen, Kettenregel, Wurzeln, mittel, niedrig, Angeben

comment: Gib mithilfe der Kettenregel die erste Ableitung von Wurzelfunktionen mit nichtlinearem Radikanden an.
-->

# Kettenregel bei Wurzelfunktionen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=2\sqrt{2x^2+1}$ für $x\in\mathbb{R}$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 4*x*(2*x^2+1)^(-1/2) ]] @canvas
@Algebrite.check(`4*x*(2*x^2+1)^(-1/2)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2x^2+1$ mit $u'(x)=4x$.

Für $t>0$ ist die äußere Funktion $v(t)=2\sqrt{t}=2t^{\frac{1}{2}}$ mit $v'(t)=t^{-\frac{1}{2}}$.

Mit $f(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
f'(x)&=v'(u(x))\cdot u'(x)\\
&=(2x^2+1)^{-\frac{1}{2}}\cdot 4x\\
&=4x(2x^2+1)^{-\frac{1}{2}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3\sqrt[3]{x^2+9}$ für $x\in\mathbb{R}$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 2*x*(x^2+9)^(-2/3) ]] @canvas
@Algebrite.check(`2*x*(x^2+9)^(-2/3)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2+9$ mit $u'(x)=2x$.

Für $t>0$ ist die äußere Funktion $v(t)=3\sqrt[3]{t}=3t^{\frac{1}{3}}$ mit $v'(t)=t^{-\frac{2}{3}}$.

Mit $g(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
g'(x)&=v'(u(x))\cdot u'(x)\\
&=(x^2+9)^{-\frac{2}{3}}\cdot 2x\\
&=2x(x^2+9)^{-\frac{2}{3}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\sqrt{9-x^2}$ für $-3<x<3$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ -x*(9-x^2)^(-1/2) ]] @canvas
@Algebrite.check(`-x*(9-x^2)^(-1/2)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=9-x^2$ mit $u'(x)=-2x$.

Für $t>0$ ist die äußere Funktion $v(t)=\sqrt{t}=t^{\frac{1}{2}}$ mit $v'(t)=\frac{1}{2}t^{-\frac{1}{2}}$.

Mit $h(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
h'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{1}{2}(9-x^2)^{-\frac{1}{2}}\cdot (-2x)\\
&=-x(9-x^2)^{-\frac{1}{2}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=2\sqrt[4]{x^2-2x+3}$ für $x\in\mathbb{R}$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (x-1)*(x^2-2*x+3)^(-3/4) ]] @canvas
@Algebrite.check(`(x-1)*(x^2-2*x+3)^(-3/4)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^2-2x+3$ mit $u'(x)=2x-2$.

Für $t>0$ ist die äußere Funktion $v(t)=2\sqrt[4]{t}=2t^{\frac{1}{4}}$ mit $v'(t)=\frac{1}{2}t^{-\frac{3}{4}}$.

Mit $p(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
p'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{1}{2}(x^2-2x+3)^{-\frac{3}{4}}\cdot (2x-2)\\
&=(x-1)(x^2-2x+3)^{-\frac{3}{4}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=-2\sqrt[3]{x^3+1}$ für $x>-1$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -2*x^2*(x^3+1)^(-2/3) ]] @canvas
@Algebrite.check(`-2*x^2*(x^3+1)^(-2/3)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=x^3+1$ mit $u'(x)=3x^2$.

Für $t>0$ ist die äußere Funktion $v(t)=-2\sqrt[3]{t}=-2t^{\frac{1}{3}}$ mit $v'(t)=-\frac{2}{3}t^{-\frac{2}{3}}$.

Mit $q(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
q'(x)&=v'(u(x))\cdot u'(x)\\
&=-\frac{2}{3}(x^3+1)^{-\frac{2}{3}}\cdot 3x^2\\
&=-2x^2(x^3+1)^{-\frac{2}{3}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=2\sqrt[5]{27-x^3}$ für $x<3$.

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ -6/5*x^2*(27-x^3)^(-4/5) ]] @canvas
@Algebrite.check(`-6/5*x^2*(27-x^3)^(-4/5)`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=27-x^3$ mit $u'(x)=-3x^2$.

Für $t>0$ ist die äußere Funktion $v(t)=2\sqrt[5]{t}=2t^{\frac{1}{5}}$ mit $v'(t)=\frac{2}{5}t^{-\frac{4}{5}}$.

Mit $r(x)=v(u(x))$ ergibt die Kettenregel

$$
\begin{aligned}
r'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{2}{5}(27-x^3)^{-\frac{4}{5}}\cdot (-3x^2)\\
&=-\frac{6}{5}x^2(27-x^3)^{-\frac{4}{5}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Wurzeln`)

</div>

</section>
