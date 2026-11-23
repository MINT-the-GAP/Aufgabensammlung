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

# Drei Ableitungsregeln mit einem Produkt im Zähler

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/4.png" alt="Vernetzung: hoch" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\dfrac{(x^2-1)\cdot e^{2x^2-x}}{x^2+2},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ ((2*x*exp(2*x^2-x)+(x^2-1)*(4*x-1)*exp(2*x^2-x))*(x^2+2)-(x^2-1)*exp(2*x^2-x)*2*x)/(x^2+2)^2 ]] @canvas
@Algebrite.check(`((2*x*exp(2*x^2-x)+(x^2-1)*(4*x-1)*exp(2*x^2-x))*(x^2+2)-(x^2-1)*exp(2*x^2-x)*2*x)/(x^2+2)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^2-1$ mit $a'(x)=2x$.

Der zweite Faktor ist $b(x)=e^{2x^2-x}$. Die innere Funktion ist $b_1(x)=2x^2-x$ mit $b_1'(x)=4x-1$. Die äußere Funktion ist $b_2(t)=e^{t}$ mit $b_2'(t)=e^{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=(4x-1)\cdot e^{2x^2-x}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot e^{2x^2-x}+(x^2-1)\cdot (4x-1)\cdot e^{2x^2-x}.
\end{aligned}
$$

Der Nenner ist $v(x)=x^2+2$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
f'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot e^{2x^2-x}+(x^2-1)\cdot (4x-1)\cdot e^{2x^2-x})\cdot (x^2+2)-(x^2-1)\cdot e^{2x^2-x}\cdot 2x}{(x^2+2)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\dfrac{(2x+1)\cdot \sin(x^2+1)}{x-2},\qquad x\ne 2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ ((2*sin(x^2+1)+(2*x+1)*2*x*cos(x^2+1))*(x-2)-(2*x+1)*sin(x^2+1))/(x-2)^2 ]] @canvas
@Algebrite.check(`((2*sin(x^2+1)+(2*x+1)*2*x*cos(x^2+1))*(x-2)-(2*x+1)*sin(x^2+1))/(x-2)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=2x+1$ mit $a'(x)=2$.

Der zweite Faktor ist $b(x)=\sin(x^2+1)$. Die innere Funktion ist $b_1(x)=x^2+1$ mit $b_1'(x)=2x$. Die äußere Funktion ist $b_2(t)=\sin(t)$ mit $b_2'(t)=\cos(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \cos(x^2+1).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2\cdot \sin(x^2+1)+(2x+1)\cdot 2x\cdot \cos(x^2+1).
\end{aligned}
$$

Der Nenner ist $v(x)=x-2$ mit $v'(x)=1$.

Die Quotientenregel ergibt

$$
\begin{aligned}
g'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2\cdot \sin(x^2+1)+(2x+1)\cdot 2x\cdot \cos(x^2+1))\cdot (x-2)-(2x+1)\cdot \sin(x^2+1)}{(x-2)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\dfrac{(x^2+3)\cdot \cos(2x^2-1)}{x^2+1},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ ((2*x*cos(2*x^2-1)-(x^2+3)*4*x*sin(2*x^2-1))*(x^2+1)-(x^2+3)*cos(2*x^2-1)*2*x)/(x^2+1)^2 ]] @canvas
@Algebrite.check(`((2*x*cos(2*x^2-1)-(x^2+3)*4*x*sin(2*x^2-1))*(x^2+1)-(x^2+3)*cos(2*x^2-1)*2*x)/(x^2+1)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^2+3$ mit $a'(x)=2x$.

Der zweite Faktor ist $b(x)=\cos(2x^2-1)$. Die innere Funktion ist $b_1(x)=2x^2-1$ mit $b_1'(x)=4x$. Die äußere Funktion ist $b_2(t)=\cos(t)$ mit $b_2'(t)=-\sin(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=-4x\cdot \sin(2x^2-1).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot \cos(2x^2-1)-(x^2+3)\cdot 4x\cdot \sin(2x^2-1).
\end{aligned}
$$

Der Nenner ist $v(x)=x^2+1$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
h'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot \cos(2x^2-1)-(x^2+3)\cdot 4x\cdot \sin(2x^2-1))\cdot (x^2+1)-(x^2+3)\cdot \cos(2x^2-1)\cdot 2x}{(x^2+1)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\dfrac{(x-1)\cdot \sqrt{x^2+4}}{x+2},\qquad x\ne -2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ ((((x^2+4)^(1/2))+(x-1)*2*x*((1)/(2*((x^2+4)^(1/2)))))*(x+2)-(x-1)*((x^2+4)^(1/2)))/(x+2)^2 ]] @canvas
@Algebrite.check(`((((x^2+4)^(1/2))+(x-1)*2*x*((1)/(2*((x^2+4)^(1/2)))))*(x+2)-(x-1)*((x^2+4)^(1/2)))/(x+2)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x-1$ mit $a'(x)=1$.

Der zweite Faktor ist $b(x)=\sqrt{x^2+4}$. Die innere Funktion ist $b_1(x)=x^2+4$ mit $b_1'(x)=2x$. Die äußere Funktion ist $b_2(t)=\sqrt{t}$ mit $b_2'(t)=\frac{1}{2\sqrt{t}}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \frac{1}{2\sqrt{x^2+4}}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=\sqrt{x^2+4}+(x-1)\cdot 2x\cdot \frac{1}{2\sqrt{x^2+4}}.
\end{aligned}
$$

Der Nenner ist $v(x)=x+2$ mit $v'(x)=1$.

Die Quotientenregel ergibt

$$
\begin{aligned}
p'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(\sqrt{x^2+4}+(x-1)\cdot 2x\cdot \frac{1}{2\sqrt{x^2+4}})\cdot (x+2)-(x-1)\cdot \sqrt{x^2+4}}{(x+2)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\dfrac{(x^2+1)\cdot \ln(x^2+2)}{2x+3},\qquad x\ne -\frac{3}{2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ ((2*x*ln(x^2+2)+(x^2+1)*2*x*((1)/(x^2+2)))*(2*x+3)-(x^2+1)*ln(x^2+2)*2)/(2*x+3)^2 ]] @canvas
@Algebrite.check(`((2*x*ln(x^2+2)+(x^2+1)*2*x*((1)/(x^2+2)))*(2*x+3)-(x^2+1)*ln(x^2+2)*2)/(2*x+3)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=x^2+1$ mit $a'(x)=2x$.

Der zweite Faktor ist $b(x)=\ln(x^2+2)$. Die innere Funktion ist $b_1(x)=x^2+2$ mit $b_1'(x)=2x$. Die äußere Funktion ist $b_2(t)=\ln(t)$ mit $b_2'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=2x\cdot \frac{1}{x^2+2}.
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=2x\cdot \ln(x^2+2)+(x^2+1)\cdot 2x\cdot \frac{1}{x^2+2}.
\end{aligned}
$$

Der Nenner ist $v(x)=2x+3$ mit $v'(x)=2$.

Die Quotientenregel ergibt

$$
\begin{aligned}
q'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{(2x\cdot \ln(x^2+2)+(x^2+1)\cdot 2x\cdot \frac{1}{x^2+2})\cdot (2x+3)-(x^2+1)\cdot \ln(x^2+2)\cdot 2}{(2x+3)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\dfrac{(2x^2-x)\cdot \sin(3x^2+x)}{x^2+3},\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (((4*x-1)*sin(3*x^2+x)+(2*x^2-x)*(6*x+1)*cos(3*x^2+x))*(x^2+3)-(2*x^2-x)*sin(3*x^2+x)*2*x)/(x^2+3)^2 ]] @canvas
@Algebrite.check(`(((4*x-1)*sin(3*x^2+x)+(2*x^2-x)*(6*x+1)*cos(3*x^2+x))*(x^2+3)-(2*x^2-x)*sin(3*x^2+x)*2*x)/(x^2+3)^2`)
[[?]] @Explain
*****************
Der Zähler ist das Produkt $u(x)=a(x)\cdot b(x)$.

Der erste Faktor ist $a(x)=2x^2-x$ mit $a'(x)=4x-1$.

Der zweite Faktor ist $b(x)=\sin(3x^2+x)$. Die innere Funktion ist $b_1(x)=3x^2+x$ mit $b_1'(x)=6x+1$. Die äußere Funktion ist $b_2(t)=\sin(t)$ mit $b_2'(t)=\cos(t)$.

Die Kettenregel ergibt

$$
\begin{aligned}
b'(x)&=b_2'(b_1(x))\cdot b_1'(x)\\
&=(6x+1)\cdot \cos(3x^2+x).
\end{aligned}
$$

Die Produktregel ergibt

$$
\begin{aligned}
u'(x)&=a'(x)b(x)+a(x)b'(x)\\
&=(4x-1)\cdot \sin(3x^2+x)+(2x^2-x)\cdot (6x+1)\cdot \cos(3x^2+x).
\end{aligned}
$$

Der Nenner ist $v(x)=x^2+3$ mit $v'(x)=2x$.

Die Quotientenregel ergibt

$$
\begin{aligned}
r'(x)&=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}\\
&=\frac{((4x-1)\cdot \sin(3x^2+x)+(2x^2-x)\cdot (6x+1)\cdot \cos(3x^2+x))\cdot (x^2+3)-(2x^2-x)\cdot \sin(3x^2+x)\cdot 2x}{(x^2+3)^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel, Quotientenregel`)

</div>

</section>
