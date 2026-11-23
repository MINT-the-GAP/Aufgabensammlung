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

tags: Ableitungen, Produktregel, Kettenregel, Quotientenregel, sehr schwer, hoch, Angeben

comment: Gib die erste Ableitung von Quotienten mit Produkten und verketteten Funktionen an.
-->

# Drei Ableitungsregeln mit Produkten in Zähler und Nenner

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" alt="Vernetzung: hoch" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" alt="Schwierigkeit: sehr schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="1" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{(x^3+1)\cdot e^{\sin(x^2)}}{(x^2+1)\cdot \sqrt{x^2+2}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ ((3*x^2*exp(sin(x^2))+(x^3+1)*2*x*cos(x^2)*exp(sin(x^2)))*(x^2+1)*((x^2+2)^(1/2))-(x^3+1)*exp(sin(x^2))*(2*x*((x^2+2)^(1/2))+(x^2+1)*2*x*((1)/(2*((x^2+2)^(1/2))))))/((x^2+1)*((x^2+2)^(1/2)))^2 ]] @canvas
@Algebrite.check(`((3*x^2*exp(sin(x^2))+(x^3+1)*2*x*cos(x^2)*exp(sin(x^2)))*(x^2+1)*((x^2+2)^(1/2))-(x^3+1)*exp(sin(x^2))*(2*x*((x^2+2)^(1/2))+(x^2+1)*2*x*((1)/(2*((x^2+2)^(1/2))))))/((x^2+1)*((x^2+2)^(1/2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^3+1$ mit $a'(x)=3x^2$.

Der zweite Faktor ist $b(x)=e^{\sin(x^2)}$. Die innere Funktion ist $b_1(x)=x^2$ mit $b_1'(x)=2x$. Die mittlere Funktion ist $b_2(t)=\sin(t)$ mit $b_2'(t)=\cos(t)$. Die äußere Funktion ist $b_3(t)=e^{t}$ mit $b_3'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_3'(b_2(b_1(x)))\cdot b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \cos(x^2)\cdot e^{\sin(x^2)}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=3x^2\cdot e^{\sin(x^2)}+(x^3+1)\cdot 2x\cdot \cos(x^2)\cdot e^{\sin(x^2)}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x^2+1$ mit $c'(x)=2x$.

Der zweite Faktor ist $d(x)=\sqrt{x^2+2}$. Die innere Funktion ist $d_1(x)=x^2+2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=\sqrt{t}$ mit $d_2'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot \frac{1}{2\sqrt{x^2+2}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2x\cdot \sqrt{x^2+2}+(x^2+1)\cdot 2x\cdot \frac{1}{2\sqrt{x^2+2}}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(3x^2\cdot e^{\sin(x^2)}+(x^3+1)\cdot 2x\cdot \cos(x^2)\cdot e^{\sin(x^2)})\cdot (x^2+1)\cdot \sqrt{x^2+2}-(x^3+1)\cdot e^{\sin(x^2)}\cdot (2x\cdot \sqrt{x^2+2}+(x^2+1)\cdot 2x\cdot \frac{1}{2\sqrt{x^2+2}})}{((x^2+1)\cdot \sqrt{x^2+2})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{\sin(x^2+1)\cdot \ln(2+e^{x^2-x})}{(x+1)\cdot (3+\cos(x^2))},\qquad x\ne -1$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ ((2*x*cos(x^2+1)*ln(2+exp(x^2-x))+sin(x^2+1)*(2*x-1)*exp(x^2-x)*((1)/(2+exp(x^2-x))))*(x+1)*(3+cos(x^2))-sin(x^2+1)*ln(2+exp(x^2-x))*((3+cos(x^2))-(x+1)*2*x*sin(x^2)))/((x+1)*(3+cos(x^2)))^2 ]] @canvas
@Algebrite.check(`((2*x*cos(x^2+1)*ln(2+exp(x^2-x))+sin(x^2+1)*(2*x-1)*exp(x^2-x)*((1)/(2+exp(x^2-x))))*(x+1)*(3+cos(x^2))-sin(x^2+1)*ln(2+exp(x^2-x))*((3+cos(x^2))-(x+1)*2*x*sin(x^2)))/((x+1)*(3+cos(x^2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=\sin(x^2+1)$. Die innere Funktion ist $a_1(x)=x^2+1$ mit $a_1'(x)=2x$. Die äußere Funktion ist $a_2(t)=\sin(t)$ mit $a_2'(t)=\cos(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
a'(x)&=a_2'(a_1(x))\cdot a_1'(x)\\
&=2x\cdot \cos(x^2+1).
\end{aligned}
$$

Der zweite Faktor ist $b(x)=\ln(2+e^{x^2-x})$. Die innere Funktion ist $b_1(x)=x^2-x$ mit $b_1'(x)=2x-1$. Die mittlere Funktion ist $b_2(t)=2+e^{t}$ mit $b_2'(t)=e^{t}$. Die äußere Funktion ist $b_3(t)=\ln(t)$ mit $b_3'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_3'(b_2(b_1(x)))\cdot b_2'(b_1(x))\cdot b_1'(x)\\
&=(2x-1)\cdot e^{x^2-x}\cdot \frac{1}{2+e^{x^2-x}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot \cos(x^2+1)\cdot \ln(2+e^{x^2-x})+\sin(x^2+1)\cdot (2x-1)\cdot e^{x^2-x}\cdot \frac{1}{2+e^{x^2-x}}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x+1$ mit $c'(x)=1$.

Der zweite Faktor ist $d(x)=3+\cos(x^2)$. Die innere Funktion ist $d_1(x)=x^2$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=3+\cos(t)$ mit $d_2'(t)=-\sin(t)$.

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
&=(3+\cos(x^2))-(x+1)\cdot 2x\cdot \sin(x^2).
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot \cos(x^2+1)\cdot \ln(2+e^{x^2-x})+\sin(x^2+1)\cdot (2x-1)\cdot e^{x^2-x}\cdot \frac{1}{2+e^{x^2-x}})\cdot (x+1)\cdot (3+\cos(x^2))-\sin(x^2+1)\cdot \ln(2+e^{x^2-x})\cdot ((3+\cos(x^2))-(x+1)\cdot 2x\cdot \sin(x^2))}{((x+1)\cdot (3+\cos(x^2)))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{(x^2-2)\cdot \sqrt{2+\cos(x^2)}}{(x^4+2)\cdot e^{x^2+x}},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ ((2*x*((2+cos(x^2))^(1/2))-(x^2-2)*2*x*sin(x^2)*((1)/(2*((2+cos(x^2))^(1/2)))))*(x^4+2)*exp(x^2+x)-(x^2-2)*((2+cos(x^2))^(1/2))*(4*x^3*exp(x^2+x)+(x^4+2)*(2*x+1)*exp(x^2+x)))/((x^4+2)*exp(x^2+x))^2 ]] @canvas
@Algebrite.check(`((2*x*((2+cos(x^2))^(1/2))-(x^2-2)*2*x*sin(x^2)*((1)/(2*((2+cos(x^2))^(1/2)))))*(x^4+2)*exp(x^2+x)-(x^2-2)*((2+cos(x^2))^(1/2))*(4*x^3*exp(x^2+x)+(x^4+2)*(2*x+1)*exp(x^2+x)))/((x^4+2)*exp(x^2+x))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^2-2$ mit $a'(x)=2x$.

Der zweite Faktor ist $b(x)=\sqrt{2+\cos(x^2)}$. Die innere Funktion ist $b_1(x)=x^2$ mit $b_1'(x)=2x$. Die mittlere Funktion ist $b_2(t)=2+\cos(t)$ mit $b_2'(t)=-\sin(t)$. Die äußere Funktion ist $b_3(t)=\sqrt{t}$ mit $b_3'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_3'(b_2(b_1(x)))\cdot b_2'(b_1(x))\cdot b_1'(x)\\
&=-2x\cdot \sin(x^2)\cdot \frac{1}{2\sqrt{2+\cos(x^2)}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot \sqrt{2+\cos(x^2)}-(x^2-2)\cdot 2x\cdot \sin(x^2)\cdot \frac{1}{2\sqrt{2+\cos(x^2)}}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x^4+2$ mit $c'(x)=4x^3$.

Der zweite Faktor ist $d(x)=e^{x^2+x}$. Die innere Funktion ist $d_1(x)=x^2+x$ mit $d_1'(x)=2x+1$. Die äußere Funktion ist $d_2(t)=e^{t}$ mit $d_2'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=(2x+1)\cdot e^{x^2+x}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=4x^3\cdot e^{x^2+x}+(x^4+2)\cdot (2x+1)\cdot e^{x^2+x}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot \sqrt{2+\cos(x^2)}-(x^2-2)\cdot 2x\cdot \sin(x^2)\cdot \frac{1}{2\sqrt{2+\cos(x^2)}})\cdot (x^4+2)\cdot e^{x^2+x}-(x^2-2)\cdot \sqrt{2+\cos(x^2)}\cdot (4x^3\cdot e^{x^2+x}+(x^4+2)\cdot (2x+1)\cdot e^{x^2+x})}{((x^4+2)\cdot e^{x^2+x})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{(x^2-1)\cdot \cos(\ln(x^2+2))}{e^{\sin(x^2)}\cdot \ln(x^2+3)},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ ((2*x*cos(ln(x^2+2))-(x^2-1)*2*x*((1)/(x^2+2))*sin(ln(x^2+2)))*exp(sin(x^2))*ln(x^2+3)-(x^2-1)*cos(ln(x^2+2))*(2*x*cos(x^2)*exp(sin(x^2))*ln(x^2+3)+exp(sin(x^2))*2*x*((1)/(x^2+3))))/(exp(sin(x^2))*ln(x^2+3))^2 ]] @canvas
@Algebrite.check(`((2*x*cos(ln(x^2+2))-(x^2-1)*2*x*((1)/(x^2+2))*sin(ln(x^2+2)))*exp(sin(x^2))*ln(x^2+3)-(x^2-1)*cos(ln(x^2+2))*(2*x*cos(x^2)*exp(sin(x^2))*ln(x^2+3)+exp(sin(x^2))*2*x*((1)/(x^2+3))))/(exp(sin(x^2))*ln(x^2+3))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^2-1$ mit $a'(x)=2x$.

Der zweite Faktor ist $b(x)=\cos(\ln(x^2+2))$. Die innere Funktion ist $b_1(x)=x^2+2$ mit $b_1'(x)=2x$. Die mittlere Funktion ist $b_2(t)=\ln(t)$ mit $b_2'(t)=\frac{1}{t}$. Die äußere Funktion ist $b_3(t)=\cos(t)$ mit $b_3'(t)=-\sin(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_3'(b_2(b_1(x)))\cdot b_2'(b_1(x))\cdot b_1'(x)\\
&=-2x\cdot \frac{1}{x^2+2}\cdot \sin(\ln(x^2+2)).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot \cos(\ln(x^2+2))-(x^2-1)\cdot 2x\cdot \frac{1}{x^2+2}\cdot \sin(\ln(x^2+2)).
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=e^{\sin(x^2)}$. Die innere Funktion ist $c_1(x)=x^2$ mit $c_1'(x)=2x$. Die mittlere Funktion ist $c_2(t)=\sin(t)$ mit $c_2'(t)=\cos(t)$. Die äußere Funktion ist $c_3(t)=e^{t}$ mit $c_3'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
c'(x)&=c_3'(c_2(c_1(x)))\cdot c_2'(c_1(x))\cdot c_1'(x)\\
&=2x\cdot \cos(x^2)\cdot e^{\sin(x^2)}.
\end{aligned}
$$

Der zweite Faktor ist $d(x)=\ln(x^2+3)$. Die innere Funktion ist $d_1(x)=x^2+3$ mit $d_1'(x)=2x$. Die äußere Funktion ist $d_2(t)=\ln(t)$ mit $d_2'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot \frac{1}{x^2+3}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2x\cdot \cos(x^2)\cdot e^{\sin(x^2)}\cdot \ln(x^2+3)+e^{\sin(x^2)}\cdot 2x\cdot \frac{1}{x^2+3}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot \cos(\ln(x^2+2))-(x^2-1)\cdot 2x\cdot \frac{1}{x^2+2}\cdot \sin(\ln(x^2+2)))\cdot e^{\sin(x^2)}\cdot \ln(x^2+3)-(x^2-1)\cdot \cos(\ln(x^2+2))\cdot (2x\cdot \cos(x^2)\cdot e^{\sin(x^2)}\cdot \ln(x^2+3)+e^{\sin(x^2)}\cdot 2x\cdot \frac{1}{x^2+3})}{(e^{\sin(x^2)}\cdot \ln(x^2+3))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{(x^3-x)\cdot \ln(3+\sin(x^2))}{(x-2)\cdot \sqrt{1+e^{x^2}}},\qquad x\ne 2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (((3*x^2-1)*ln(3+sin(x^2))+(x^3-x)*2*x*cos(x^2)*((1)/(3+sin(x^2))))*(x-2)*((1+exp(x^2))^(1/2))-(x^3-x)*ln(3+sin(x^2))*(((1+exp(x^2))^(1/2))+(x-2)*2*x*exp(x^2)*((1)/(2*((1+exp(x^2))^(1/2))))))/((x-2)*((1+exp(x^2))^(1/2)))^2 ]] @canvas
@Algebrite.check(`(((3*x^2-1)*ln(3+sin(x^2))+(x^3-x)*2*x*cos(x^2)*((1)/(3+sin(x^2))))*(x-2)*((1+exp(x^2))^(1/2))-(x^3-x)*ln(3+sin(x^2))*(((1+exp(x^2))^(1/2))+(x-2)*2*x*exp(x^2)*((1)/(2*((1+exp(x^2))^(1/2))))))/((x-2)*((1+exp(x^2))^(1/2)))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^3-x$ mit $a'(x)=3x^2-1$.

Der zweite Faktor ist $b(x)=\ln(3+\sin(x^2))$. Die innere Funktion ist $b_1(x)=x^2$ mit $b_1'(x)=2x$. Die mittlere Funktion ist $b_2(t)=3+\sin(t)$ mit $b_2'(t)=\cos(t)$. Die äußere Funktion ist $b_3(t)=\ln(t)$ mit $b_3'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_3'(b_2(b_1(x)))\cdot b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \cos(x^2)\cdot \frac{1}{3+\sin(x^2)}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=(3x^2-1)\cdot \ln(3+\sin(x^2))+(x^3-x)\cdot 2x\cdot \cos(x^2)\cdot \frac{1}{3+\sin(x^2)}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x-2$ mit $c'(x)=1$.

Der zweite Faktor ist $d(x)=\sqrt{1+e^{x^2}}$. Die innere Funktion ist $d_1(x)=x^2$ mit $d_1'(x)=2x$. Die mittlere Funktion ist $d_2(t)=1+e^{t}$ mit $d_2'(t)=e^{t}$. Die äußere Funktion ist $d_3(t)=\sqrt{t}$ mit $d_3'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_3'(d_2(d_1(x)))\cdot d_2'(d_1(x))\cdot d_1'(x)\\
&=2x\cdot e^{x^2}\cdot \frac{1}{2\sqrt{1+e^{x^2}}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=\sqrt{1+e^{x^2}}+(x-2)\cdot 2x\cdot e^{x^2}\cdot \frac{1}{2\sqrt{1+e^{x^2}}}.
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{((3x^2-1)\cdot \ln(3+\sin(x^2))+(x^3-x)\cdot 2x\cdot \cos(x^2)\cdot \frac{1}{3+\sin(x^2)})\cdot (x-2)\cdot \sqrt{1+e^{x^2}}-(x^3-x)\cdot \ln(3+\sin(x^2))\cdot (\sqrt{1+e^{x^2}}+(x-2)\cdot 2x\cdot e^{x^2}\cdot \frac{1}{2\sqrt{1+e^{x^2}}})}{((x-2)\cdot \sqrt{1+e^{x^2}})^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{\sin(e^{x^2-1})\cdot \sqrt{x^2+1}}{(x^2+2)\cdot (2+\cos(x^2+x))},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ ((2*x*exp(x^2-1)*cos(exp(x^2-1))*((x^2+1)^(1/2))+sin(exp(x^2-1))*2*x*((1)/(2*((x^2+1)^(1/2)))))*(x^2+2)*(2+cos(x^2+x))-sin(exp(x^2-1))*((x^2+1)^(1/2))*(2*x*(2+cos(x^2+x))-(x^2+2)*(2*x+1)*sin(x^2+x)))/((x^2+2)*(2+cos(x^2+x)))^2 ]] @canvas
@Algebrite.check(`((2*x*exp(x^2-1)*cos(exp(x^2-1))*((x^2+1)^(1/2))+sin(exp(x^2-1))*2*x*((1)/(2*((x^2+1)^(1/2)))))*(x^2+2)*(2+cos(x^2+x))-sin(exp(x^2-1))*((x^2+1)^(1/2))*(2*x*(2+cos(x^2+x))-(x^2+2)*(2*x+1)*sin(x^2+x)))/((x^2+2)*(2+cos(x^2+x)))^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=\sin(e^{x^2-1})$. Die innere Funktion ist $a_1(x)=x^2-1$ mit $a_1'(x)=2x$. Die mittlere Funktion ist $a_2(t)=e^{t}$ mit $a_2'(t)=e^{t}$. Die äußere Funktion ist $a_3(t)=\sin(t)$ mit $a_3'(t)=\cos(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
a'(x)&=a_3'(a_2(a_1(x)))\cdot a_2'(a_1(x))\cdot a_1'(x)\\
&=2x\cdot e^{x^2-1}\cdot \cos(e^{x^2-1}).
\end{aligned}
$$

Der zweite Faktor ist $b(x)=\sqrt{x^2+1}$. Die innere Funktion ist $b_1(x)=x^2+1$ mit $b_1'(x)=2x$. Die äußere Funktion ist $b_2(t)=\sqrt{t}$ mit $b_2'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \frac{1}{2\sqrt{x^2+1}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot e^{x^2-1}\cdot \cos(e^{x^2-1})\cdot \sqrt{x^2+1}+\sin(e^{x^2-1})\cdot 2x\cdot \frac{1}{2\sqrt{x^2+1}}.
\end{aligned}
$$

Der Nenner ist das Produkt $v(x)=c(x)\cdot d(x)$.

Der erste Faktor ist $c(x)=x^2+2$ mit $c'(x)=2x$.

Der zweite Faktor ist $d(x)=2+\cos(x^2+x)$. Die innere Funktion ist $d_1(x)=x^2+x$ mit $d_1'(x)=2x+1$. Die äußere Funktion ist $d_2(t)=2+\cos(t)$ mit $d_2'(t)=-\sin(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
d'(x)&=d_2'(d_1(x))\cdot d_1'(x)\\
&=-(2x+1)\cdot \sin(x^2+x).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
v'(x)&=c'(x)d(x)+c(x)d'(x)\\
&=2x\cdot (2+\cos(x^2+x))-(x^2+2)\cdot (2x+1)\cdot \sin(x^2+x).
\end{aligned}
$$

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot e^{x^2-1}\cdot \cos(e^{x^2-1})\cdot \sqrt{x^2+1}+\sin(e^{x^2-1})\cdot 2x\cdot \frac{1}{2\sqrt{x^2+1}})\cdot (x^2+2)\cdot (2+\cos(x^2+x))-\sin(e^{x^2-1})\cdot \sqrt{x^2+1}\cdot (2x\cdot (2+\cos(x^2+x))-(x^2+2)\cdot (2x+1)\cdot \sin(x^2+x))}{((x^2+2)\cdot (2+\cos(x^2+x)))^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

</section>
