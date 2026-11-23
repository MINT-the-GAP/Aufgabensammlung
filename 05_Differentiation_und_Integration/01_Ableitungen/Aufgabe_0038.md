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

tags: Ableitungen, Produktregel, Kettenregel, schwer, normal, Angeben

comment: Gib mithilfe der Produkt- und Kettenregel die erste Ableitung von Produkten aus Polynomen und verketteten Funktionen an.
-->

# Produktregel und Kettenregel bei längeren Termen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzung: normal" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(x^3-2x+1)e^{2x^3-3x^2+x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (3*x^2-2)*exp(2*x^3-3*x^2+x)+(x^3-2*x+1)*(6*x^2-6*x+1)*exp(2*x^3-3*x^2+x) ]] @canvas
@Algebrite.check(`(3*x^2-2)*exp(2*x^3-3*x^2+x)+(x^3-2*x+1)*(6*x^2-6*x+1)*exp(2*x^3-3*x^2+x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-2x+1$ mit $u'(x)=3x^2-2$.

Für den zweiten Faktor $v(x)=e^{2x^3-3x^2+x}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=2x^3-3x^2+x$ mit $a'(x)=6x^2-6x+1$. Die äußere Funktion ist $c(t)=e^t$ mit $c'(t)=e^t$.

$$
v'(x)=c'(a(x))\cdot a'(x)=(6x^2-6x+1)e^{2x^3-3x^2+x}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-2)e^{2x^3-3x^2+x}+(x^3-2x+1)(6x^2-6x+1)e^{2x^3-3x^2+x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=(2x^3-x^2+1)\sin(3x^3-2x^2+x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (6*x^2-2*x)*sin(3*x^3-2*x^2+x)+(2*x^3-x^2+1)*(9*x^2-4*x+1)*cos(3*x^3-2*x^2+x) ]] @canvas
@Algebrite.check(`(6*x^2-2*x)*sin(3*x^3-2*x^2+x)+(2*x^3-x^2+1)*(9*x^2-4*x+1)*cos(3*x^3-2*x^2+x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^3-x^2+1$ mit $u'(x)=6x^2-2x$.

Für den zweiten Faktor $v(x)=\sin(3x^3-2x^2+x)$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=3x^3-2x^2+x$ mit $a'(x)=9x^2-4x+1$. Die äußere Funktion ist $c(t)=\sin(t)$ mit $c'(t)=\cos(t)$.

$$
v'(x)=c'(a(x))\cdot a'(x)=(9x^2-4x+1)\cos(3x^3-2x^2+x).
$$

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(6x^2-2x)\sin(3x^3-2x^2+x)+(2x^3-x^2+1)(9x^2-4x+1)\cos(3x^3-2x^2+x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=(x^3-2x+4)\cos(2\sin(x^2-x))$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (3*x^2-2)*cos(2*sin(x^2-x))-2*(x^3-2*x+4)*(2*x-1)*cos(x^2-x)*sin(2*sin(x^2-x)) ]] @canvas
@Algebrite.check(`(3*x^2-2)*cos(2*sin(x^2-x))-2*(x^3-2*x+4)*(2*x-1)*cos(x^2-x)*sin(2*sin(x^2-x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-2x+4$ mit $u'(x)=3x^2-2$.

Für den zweiten Faktor $v(x)=\cos(2\sin(x^2-x))$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=x^2-x$ mit $a'(x)=2x-1$. Die mittlere Funktion ist $b(t)=2\sin(t)$ mit $b'(t)=2\cos(t)$. Die äußere Funktion ist $c(s)=\cos(s)$ mit $c'(s)=-\sin(s)$.

$$
v'(x)=c'(b(a(x)))\cdot b'(a(x))\cdot a'(x)=-2(2x-1)\cos(x^2-x)\sin(2\sin(x^2-x)).
$$

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-2)\cos(2\sin(x^2-x))-2(x^3-2x+4)(2x-1)\cos(x^2-x)\sin(2\sin(x^2-x)).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=(x^3-x^2+2)\sqrt[4]{2x^4+x^2+1}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (3*x^2-2*x)*(2*x^4+x^2+1)^(1/4)+(x^3-x^2+2)*(4*x^3+x)/2*(2*x^4+x^2+1)^(-3/4) ]] @canvas
@Algebrite.check(`(3*x^2-2*x)*(2*x^4+x^2+1)^(1/4)+(x^3-x^2+2)*(4*x^3+x)/2*(2*x^4+x^2+1)^(-3/4)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-x^2+2$ mit $u'(x)=3x^2-2x$.

Für den zweiten Faktor $v(x)=\sqrt[4]{2x^4+x^2+1}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=2x^4+x^2+1$ mit $a'(x)=8x^3+2x$. Die äußere Funktion ist $c(t)=\sqrt[4]{t}$ mit $c'(t)=\frac{1}{4\sqrt[4]{t^3}}$.

$$
v'(x)=c'(a(x))\cdot a'(x)=\frac{4x^3+x}{2\sqrt[4]{(2x^4+x^2+1)^3}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-2x)\sqrt[4]{2x^4+x^2+1}+\frac{(x^3-x^2+2)(4x^3+x)}{2\sqrt[4]{(2x^4+x^2+1)^3}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=(2x^2-3x+1)e^{\cos(2x^2-3x)}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (4*x-3)*exp(cos(2*x^2-3*x))-(2*x^2-3*x+1)*(4*x-3)*sin(2*x^2-3*x)*exp(cos(2*x^2-3*x)) ]] @canvas
@Algebrite.check(`(4*x-3)*exp(cos(2*x^2-3*x))-(2*x^2-3*x+1)*(4*x-3)*sin(2*x^2-3*x)*exp(cos(2*x^2-3*x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^2-3x+1$ mit $u'(x)=4x-3$.

Für den zweiten Faktor $v(x)=e^{\cos(2x^2-3x)}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=2x^2-3x$ mit $a'(x)=4x-3$. Die mittlere Funktion ist $b(t)=\cos(t)$ mit $b'(t)=-\sin(t)$. Die äußere Funktion ist $c(s)=e^s$ mit $c'(s)=e^s$.

$$
v'(x)=c'(b(a(x)))\cdot b'(a(x))\cdot a'(x)=-(4x-3)\sin(2x^2-3x)e^{\cos(2x^2-3x)}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(4x-3)e^{\cos(2x^2-3x)}-(2x^2-3x+1)(4x-3)\sin(2x^2-3x)e^{\cos(2x^2-3x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(x^3+x-1)\sqrt{1+e^{x^2-2x}}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (3*x^2+1)*(1+exp(x^2-2*x))^(1/2)+(x^3+x-1)*(x-1)*exp(x^2-2*x)*(1+exp(x^2-2*x))^(-1/2) ]] @canvas
@Algebrite.check(`(3*x^2+1)*(1+exp(x^2-2*x))^(1/2)+(x^3+x-1)*(x-1)*exp(x^2-2*x)*(1+exp(x^2-2*x))^(-1/2)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3+x-1$ mit $u'(x)=3x^2+1$.

Für den zweiten Faktor $v(x)=\sqrt{1+e^{x^2-2x}}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=x^2-2x$ mit $a'(x)=2x-2$. Die mittlere Funktion ist $b(t)=1+e^t$ mit $b'(t)=e^t$. Die äußere Funktion ist $c(s)=\sqrt{s}$ mit $c'(s)=\frac{1}{2\sqrt{s}}$.

$$
v'(x)=c'(b(a(x)))\cdot b'(a(x))\cdot a'(x)=\frac{(x-1)e^{x^2-2x}}{\sqrt{1+e^{x^2-2x}}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2+1)\sqrt{1+e^{x^2-2x}}+\frac{(x^3+x-1)(x-1)e^{x^2-2x}}{\sqrt{1+e^{x^2-2x}}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

</section>
