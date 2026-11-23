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

tags: Ableitungen, Produktregel, Kettenregel, Logarithmus, schwer, normal, Angeben

comment: Gib die erste Ableitung der Funktionen mit natürlichem Logarithmus an und verwende die Produktregel und die Kettenregel.
-->

# Produkt- und Kettenregel mit verschachtelten Faktoren

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzung: normal" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(3x^4-2x^2+x)\ln(2x^4+x^2+1),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (12*x^3-4*x+1)*ln(2*x^4+x^2+1)+(((3*x^4-2*x^2+x)*(8*x^3+2*x))/(2*x^4+x^2+1)) ]] @canvas
@Algebrite.check(`(12*x^3-4*x+1)*ln(2*x^4+x^2+1)+(((3*x^4-2*x^2+x)*(8*x^3+2*x))/(2*x^4+x^2+1))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=3x^4-2x^2+x$ mit $u'(x)=12x^3-4x+1$.

Der zweite Faktor ist $v(x)=\ln(2x^4+x^2+1)$. Die innere Funktion ist $a(x)=2x^4+x^2+1$ mit $a'(x)=8x^3+2x$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{8x^3+2x}{2x^4+x^2+1}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(12x^3-4x+1)\ln(2x^4+x^2+1)+\frac{(3x^4-2x^2+x)(8x^3+2x)}{2x^4+x^2+1}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\sin(2x-1)\ln(3+\cos(x^2)),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 2*cos(2*x-1)*ln(3+cos(x^2))-((2*x*sin(2*x-1)*sin(x^2))/(3+cos(x^2))) ]] @canvas
@Algebrite.check(`2*cos(2*x-1)*ln(3+cos(x^2))-((2*x*sin(2*x-1)*sin(x^2))/(3+cos(x^2)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\sin(2x-1)$. Die innere Funktion ist $m(x)=2x-1$ mit $m'(x)=2$. Die äußere Funktion ist $n(t)=\sin(t)$ mit $n'(t)=\cos(t)$.

$$
u'(x)=n'(m(x))\cdot m'(x)=2\cos(2x-1).
$$

Der zweite Faktor ist $v(x)=\ln(3+\cos(x^2))$. Die innere Funktion ist $a(x)=3+\cos(x^2)$ mit $a'(x)=-2x\sin(x^2)$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=-\frac{2x\sin(x^2)}{3+\cos(x^2)}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=2\cos(2x-1)\ln(3+\cos(x^2))-\frac{2x\sin(2x-1)\sin(x^2)}{3+\cos(x^2)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=e^{x^2-x}\ln(2+e^{-x}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (2*x-1)*exp(x^2-x)*ln(2+exp(-x))-((exp(x^2-x)*exp(-x))/(2+exp(-x))) ]] @canvas
@Algebrite.check(`(2*x-1)*exp(x^2-x)*ln(2+exp(-x))-((exp(x^2-x)*exp(-x))/(2+exp(-x)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=e^{x^2-x}$. Die innere Funktion ist $m(x)=x^2-x$ mit $m'(x)=2x-1$. Die äußere Funktion ist $n(t)=e^t$ mit $n'(t)=e^t$.

$$
u'(x)=n'(m(x))\cdot m'(x)=(2x-1)e^{x^2-x}.
$$

Der zweite Faktor ist $v(x)=\ln(2+e^{-x})$. Die innere Funktion ist $a(x)=2+e^{-x}$ mit $a'(x)=-e^{-x}$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=-\frac{e^{-x}}{2+e^{-x}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(2x-1)e^{x^2-x}\ln(2+e^{-x})-\frac{e^{x^2-x}e^{-x}}{2+e^{-x}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=(x^3-x+2)\ln(3+\sin(2x^2-x)),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (3*x^2-1)*ln(3+sin(2*x^2-x))+(((x^3-x+2)*(4*x-1)*cos(2*x^2-x))/(3+sin(2*x^2-x))) ]] @canvas
@Algebrite.check(`(3*x^2-1)*ln(3+sin(2*x^2-x))+(((x^3-x+2)*(4*x-1)*cos(2*x^2-x))/(3+sin(2*x^2-x)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-x+2$ mit $u'(x)=3x^2-1$.

Der zweite Faktor ist $v(x)=\ln(3+\sin(2x^2-x))$. Die innere Funktion ist $a(x)=3+\sin(2x^2-x)$ mit $a'(x)=(4x-1)\cos(2x^2-x)$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{(4x-1)\cos(2x^2-x)}{3+\sin(2x^2-x)}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-1)\ln(3+\sin(2x^2-x))+\frac{(x^3-x+2)(4x-1)\cos(2x^2-x)}{3+\sin(2x^2-x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\sqrt{x^2+1}\ln(2+e^{x^2}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ ((x*ln(2+exp(x^2)))/((x^2+1)^(1/2)))+((2*x*exp(x^2)*(x^2+1)^(1/2))/(2+exp(x^2))) ]] @canvas
@Algebrite.check(`((x*ln(2+exp(x^2)))/((x^2+1)^(1/2)))+((2*x*exp(x^2)*(x^2+1)^(1/2))/(2+exp(x^2)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\sqrt{x^2+1}$. Die innere Funktion ist $m(x)=x^2+1$ mit $m'(x)=2x$. Die äußere Funktion ist $n(t)=\sqrt{t}$ mit $n'(t)=\frac{1}{2\sqrt{t}}$.

$$
u'(x)=n'(m(x))\cdot m'(x)=\frac{x}{\sqrt{x^2+1}}.
$$

Der zweite Faktor ist $v(x)=\ln(2+e^{x^2})$. Die innere Funktion ist $a(x)=2+e^{x^2}$ mit $a'(x)=2xe^{x^2}$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{2xe^{x^2}}{2+e^{x^2}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=\frac{x\ln(2+e^{x^2})}{\sqrt{x^2+1}}+\frac{2xe^{x^2}\sqrt{x^2+1}}{2+e^{x^2}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\cos(x^2+1)\ln(1+\sqrt{2x^2+3}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ -2*x*sin(x^2+1)*ln(1+(2*x^2+3)^(1/2))+((2*x*cos(x^2+1))/((2*x^2+3)^(1/2)*(1+(2*x^2+3)^(1/2)))) ]] @canvas
@Algebrite.check(`-2*x*sin(x^2+1)*ln(1+(2*x^2+3)^(1/2))+((2*x*cos(x^2+1))/((2*x^2+3)^(1/2)*(1+(2*x^2+3)^(1/2))))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\cos(x^2+1)$. Die innere Funktion ist $m(x)=x^2+1$ mit $m'(x)=2x$. Die äußere Funktion ist $n(t)=\cos(t)$ mit $n'(t)=-\sin(t)$.

$$
u'(x)=n'(m(x))\cdot m'(x)=-2x\sin(x^2+1).
$$

Der zweite Faktor ist $v(x)=\ln(1+\sqrt{2x^2+3})$. Die innere Funktion ist $a(x)=1+\sqrt{2x^2+3}$ mit $a'(x)=\frac{2x}{\sqrt{2x^2+3}}$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{2x}{\sqrt{2x^2+3}(1+\sqrt{2x^2+3})}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=-2x\sin(x^2+1)\ln(1+\sqrt{2x^2+3})+\frac{2x\cos(x^2+1)}{\sqrt{2x^2+3}(1+\sqrt{2x^2+3})}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

</section>
