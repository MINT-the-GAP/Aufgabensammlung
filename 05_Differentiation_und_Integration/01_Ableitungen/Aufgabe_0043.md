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

# Produkt- und Kettenregel mit dem natürlichen Logarithmus

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzung: normal" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(2x^3-x+1)\ln(3x^2+2),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (6*x^2-1)*ln(3*x^2+2)+((6*x*(2*x^3-x+1))/(3*x^2+2)) ]] @canvas
@Algebrite.check(`(6*x^2-1)*ln(3*x^2+2)+((6*x*(2*x^3-x+1))/(3*x^2+2))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^3-x+1$ mit $u'(x)=6x^2-1$.

Der zweite Faktor ist $v(x)=\ln(3x^2+2)$. Die innere Funktion ist $a(x)=3x^2+2$ mit $a'(x)=6x$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{6x}{3x^2+2}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(6x^2-1)\ln(3x^2+2)+\frac{6x(2x^3-x+1)}{3x^2+2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=(x^2+x-2)\ln(4-x^2),\qquad -2<x<2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (2*x+1)*ln(4-x^2)-((2*x*(x^2+x-2))/(4-x^2)) ]] @canvas
@Algebrite.check(`(2*x+1)*ln(4-x^2)-((2*x*(x^2+x-2))/(4-x^2))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^2+x-2$ mit $u'(x)=2x+1$.

Der zweite Faktor ist $v(x)=\ln(4-x^2)$. Die innere Funktion ist $a(x)=4-x^2$ mit $a'(x)=-2x$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=-\frac{2x}{4-x^2}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(2x+1)\ln(4-x^2)-\frac{2x(x^2+x-2)}{4-x^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=e^x\ln(2+\sin(x)),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ exp(x)*ln(2+sin(x))+((exp(x)*cos(x))/(2+sin(x))) ]] @canvas
@Algebrite.check(`exp(x)*ln(2+sin(x))+((exp(x)*cos(x))/(2+sin(x)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=e^x$ mit $u'(x)=e^x$.

Der zweite Faktor ist $v(x)=\ln(2+\sin(x))$. Die innere Funktion ist $a(x)=2+\sin(x)$ mit $a'(x)=\cos(x)$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{\cos(x)}{2+\sin(x)}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=e^x\ln(2+\sin(x))+\frac{e^x\cos(x)}{2+\sin(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=(x^3-2x)\ln(1+e^{2x}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (3*x^2-2)*ln(1+exp(2*x))+((2*(x^3-2*x)*exp(2*x))/(1+exp(2*x))) ]] @canvas
@Algebrite.check(`(3*x^2-2)*ln(1+exp(2*x))+((2*(x^3-2*x)*exp(2*x))/(1+exp(2*x)))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-2x$ mit $u'(x)=3x^2-2$.

Der zweite Faktor ist $v(x)=\ln(1+e^{2x})$. Die innere Funktion ist $a(x)=1+e^{2x}$ mit $a'(x)=2e^{2x}$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{2e^{2x}}{1+e^{2x}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-2)\ln(1+e^{2x})+\frac{2(x^3-2x)e^{2x}}{1+e^{2x}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\cos(x)\ln(x^4+2x^2+5),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -sin(x)*ln(x^4+2*x^2+5)+(((4*x^3+4*x)*cos(x))/(x^4+2*x^2+5)) ]] @canvas
@Algebrite.check(`-sin(x)*ln(x^4+2*x^2+5)+(((4*x^3+4*x)*cos(x))/(x^4+2*x^2+5))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\cos(x)$ mit $u'(x)=-\sin(x)$.

Der zweite Faktor ist $v(x)=\ln(x^4+2x^2+5)$. Die innere Funktion ist $a(x)=x^4+2x^2+5$ mit $a'(x)=4x^3+4x$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{4x^3+4x}{x^4+2x^2+5}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=-\sin(x)\ln(x^4+2x^2+5)+\frac{(4x^3+4x)\cos(x)}{x^4+2x^2+5}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(x^2-2x+3)\ln(2+\sqrt{x^2+1}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (2*x-2)*ln(2+(x^2+1)^(1/2))+((x*(x^2-2*x+3))/((x^2+1)^(1/2)*(2+(x^2+1)^(1/2)))) ]] @canvas
@Algebrite.check(`(2*x-2)*ln(2+(x^2+1)^(1/2))+((x*(x^2-2*x+3))/((x^2+1)^(1/2)*(2+(x^2+1)^(1/2))))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^2-2x+3$ mit $u'(x)=2x-2$.

Der zweite Faktor ist $v(x)=\ln(2+\sqrt{x^2+1})$. Die innere Funktion ist $a(x)=2+\sqrt{x^2+1}$ mit $a'(x)=\frac{x}{\sqrt{x^2+1}}$. Die äußere Funktion ist $b(t)=\ln(t)$ mit $b'(t)=\frac{1}{t}$.

$$
v'(x)=b'(a(x))\cdot a'(x)=\frac{x}{\sqrt{x^2+1}(2+\sqrt{x^2+1})}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(2x-2)\ln(2+\sqrt{x^2+1})+\frac{x(x^2-2x+3)}{\sqrt{x^2+1}(2+\sqrt{x^2+1})}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Logarithmus`)

</div>

</section>
