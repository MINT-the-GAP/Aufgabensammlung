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

tags: Ableitungen, Produktregel, Kettenregel, Quotientenregel, schwer, hoch, Angeben

comment: Gib die erste Ableitung von Quotienten mit Produkten und verketteten Funktionen an.
-->

# Drei Ableitungsregeln mit einem Produkt im Nenner

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" alt="Vernetzung: hoch" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{\sin(x)}{(x+1)\cdot e^{x^2}},\qquad x\ne -1$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (cos(x)*(x+1)*exp(x^2)-sin(x)*(exp(x^2)+(x+1)*2*x*exp(x^2)))/((x+1)*exp(x^2))^2 ]] @canvas
@Algebrite.check(`(cos(x)*(x+1)*exp(x^2)-sin(x)*(exp(x^2)+(x+1)*2*x*exp(x^2)))/((x+1)*exp(x^2))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sin(x)$ mit $u'(x)=\cos(x)$.

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x+1$ mit $c'(x)=1$.

Der zweite Faktor ist $d(x)=e^{x^2}$. Die innere Funktion ist $d_1(x)=x^2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=e^{t}$ mit $d_2'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot e^{x^2}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=e^{x^2}+(x+1)\cdot 2x\cdot e^{x^2}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{\cos(x)\cdot (x+1)\cdot e^{x^2}-\sin(x)\cdot (e^{x^2}+(x+1)\cdot 2x\cdot e^{x^2})}{((x+1)\cdot e^{x^2})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{x^2+2}{(2x-1)\cdot (2+\cos(x^2))},\qquad x\ne \frac{1}{2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (2*x*(2*x-1)*(2+cos(x^2))-(x^2+2)*(2*(2+cos(x^2))-(2*x-1)*2*x*sin(x^2)))/((2*x-1)*(2+cos(x^2)))^2 ]] @canvas
@Algebrite.check(`(2*x*(2*x-1)*(2+cos(x^2))-(x^2+2)*(2*(2+cos(x^2))-(2*x-1)*2*x*sin(x^2)))/((2*x-1)*(2+cos(x^2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x^2+2$ mit $u'(x)=2x$.

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=2x-1$ mit $c'(x)=2$.

Der zweite Faktor ist $d(x)=2+\cos(x^2)$. Die innere Funktion ist $d_1(x)=x^2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=2+\cos(t)$ mit $d_2'(t)=-\sin(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=-2x\cdot \sin(x^2).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2\cdot (2+\cos(x^2))-(2x-1)\cdot 2x\cdot \sin(x^2).
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2x\cdot (2x-1)\cdot (2+\cos(x^2))-(x^2+2)\cdot (2\cdot (2+\cos(x^2))-(2x-1)\cdot 2x\cdot \sin(x^2))}{((2x-1)\cdot (2+\cos(x^2)))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{e^x}{(x^2+1)\cdot \sqrt{2x^2+3}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ (exp(x)*(x^2+1)*((2*x^2+3)^(1/2))-exp(x)*(2*x*((2*x^2+3)^(1/2))+(x^2+1)*4*x*((1)/(2*((2*x^2+3)^(1/2))))))/((x^2+1)*((2*x^2+3)^(1/2)))^2 ]] @canvas
@Algebrite.check(`(exp(x)*(x^2+1)*((2*x^2+3)^(1/2))-exp(x)*(2*x*((2*x^2+3)^(1/2))+(x^2+1)*4*x*((1)/(2*((2*x^2+3)^(1/2))))))/((x^2+1)*((2*x^2+3)^(1/2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=e^x$ mit $u'(x)=e^x$.

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x^2+1$ mit $c'(x)=2x$.

Der zweite Faktor ist $d(x)=\sqrt{2x^2+3}$. Die innere Funktion ist $d_1(x)=2x^2+3$ mit $d_1'(x)=4x$. Die äußere Funktion ist $d_2(t)=\sqrt{t}$ mit $d_2'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=4x\cdot \frac{1}{2\sqrt{2x^2+3}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2x\cdot \sqrt{2x^2+3}+(x^2+1)\cdot 4x\cdot \frac{1}{2\sqrt{2x^2+3}}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{e^x\cdot (x^2+1)\cdot \sqrt{2x^2+3}-e^x\cdot (2x\cdot \sqrt{2x^2+3}+(x^2+1)\cdot 4x\cdot \frac{1}{2\sqrt{2x^2+3}})}{((x^2+1)\cdot \sqrt{2x^2+3})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{\cos(x^2+1)}{(x-3)\cdot (2+\sin(x^2))},\qquad x\ne 3$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ (-2*x*sin(x^2+1)*(x-3)*(2+sin(x^2))-cos(x^2+1)*((2+sin(x^2))+(x-3)*2*x*cos(x^2)))/((x-3)*(2+sin(x^2)))^2 ]] @canvas
@Algebrite.check(`(-2*x*sin(x^2+1)*(x-3)*(2+sin(x^2))-cos(x^2+1)*((2+sin(x^2))+(x-3)*2*x*cos(x^2)))/((x-3)*(2+sin(x^2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\cos(x^2+1)$. Die innere Funktion ist $u_1(x)=x^2+1$ mit $u_1'(x)=2x$. Die äußere Funktion ist $u_2(t)=\cos(t)$ mit $u_2'(t)=-\sin(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
u'(x)&=u_2'(u_1(x))\cdot u_1'(x)\\
&=-2x\cdot \sin(x^2+1).
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x-3$ mit $c'(x)=1$.

Der zweite Faktor ist $d(x)=2+\sin(x^2)$. Die innere Funktion ist $d_1(x)=x^2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=2+\sin(t)$ mit $d_2'(t)=\cos(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot \cos(x^2).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=(2+\sin(x^2))+(x-3)\cdot 2x\cdot \cos(x^2).
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{-2x\cdot \sin(x^2+1)\cdot (x-3)\cdot (2+\sin(x^2))-\cos(x^2+1)\cdot ((2+\sin(x^2))+(x-3)\cdot 2x\cdot \cos(x^2))}{((x-3)\cdot (2+\sin(x^2)))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{x^2-2}{(x^2+3)\cdot \ln(x^2+2)},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (2*x*(x^2+3)*ln(x^2+2)-(x^2-2)*(2*x*ln(x^2+2)+(x^2+3)*2*x*((1)/(x^2+2))))/((x^2+3)*ln(x^2+2))^2 ]] @canvas
@Algebrite.check(`(2*x*(x^2+3)*ln(x^2+2)-(x^2-2)*(2*x*ln(x^2+2)+(x^2+3)*2*x*((1)/(x^2+2))))/((x^2+3)*ln(x^2+2))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=x^2-2$ mit $u'(x)=2x$.

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x^2+3$ mit $c'(x)=2x$.

Der zweite Faktor ist $d(x)=\ln(x^2+2)$. Die innere Funktion ist $d_1(x)=x^2+2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=\ln(t)$ mit $d_2'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot \frac{1}{x^2+2}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2x\cdot \ln(x^2+2)+(x^2+3)\cdot 2x\cdot \frac{1}{x^2+2}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2x\cdot (x^2+3)\cdot \ln(x^2+2)-(x^2-2)\cdot (2x\cdot \ln(x^2+2)+(x^2+3)\cdot 2x\cdot \frac{1}{x^2+2})}{((x^2+3)\cdot \ln(x^2+2))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{\sqrt{x^2+1}}{(x+2)\cdot e^{x^2-x}},\qquad x\ne -2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (2*x*((1)/(2*((x^2+1)^(1/2))))*(x+2)*exp(x^2-x)-((x^2+1)^(1/2))*(exp(x^2-x)+(x+2)*(2*x-1)*exp(x^2-x)))/((x+2)*exp(x^2-x))^2 ]] @canvas
@Algebrite.check(`(2*x*((1)/(2*((x^2+1)^(1/2))))*(x+2)*exp(x^2-x)-((x^2+1)^(1/2))*(exp(x^2-x)+(x+2)*(2*x-1)*exp(x^2-x)))/((x+2)*exp(x^2-x))^2`)
[[?]] @Explain
*****************
Der Zähler ist $u(x)=\sqrt{x^2+1}$. Die innere Funktion ist $u_1(x)=x^2+1$ mit $u_1'(x)=2x$. Die äußere Funktion ist $u_2(t)=\sqrt{t}$ mit $u_2'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
u'(x)&=u_2'(u_1(x))\cdot u_1'(x)\\
&=2x\cdot \frac{1}{2\sqrt{x^2+1}}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x+2$ mit $c'(x)=1$.

Der zweite Faktor ist $d(x)=e^{x^2-x}$. Die innere Funktion ist $d_1(x)=x^2-x$ mit $d_1'(x)=2x-1$. Die äußere Funktion ist $d_2(t)=e^{t}$ mit $d_2'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=(2x-1)\cdot e^{x^2-x}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=e^{x^2-x}+(x+2)\cdot (2x-1)\cdot e^{x^2-x}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{2x\cdot \frac{1}{2\sqrt{x^2+1}}\cdot (x+2)\cdot e^{x^2-x}-\sqrt{x^2+1}\cdot (e^{x^2-x}+(x+2)\cdot (2x-1)\cdot e^{x^2-x})}{((x+2)\cdot e^{x^2-x})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

</section>
