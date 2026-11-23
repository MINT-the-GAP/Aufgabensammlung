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

# Produktregel und Kettenregel

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzung: normal" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" alt="Schwierigkeit: schwer" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(2x^2-3)e^{3x^2-4}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 4*x*exp(3*x^2-4)+6*x*(2*x^2-3)*exp(3*x^2-4) ]] @canvas
@Algebrite.check(`4*x*exp(3*x^2-4)+6*x*(2*x^2-3)*exp(3*x^2-4)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^2-3$ mit $u'(x)=4x$.

Für den zweiten Faktor $v(x)=e^{3x^2-4}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=3x^2-4$ mit $a'(x)=6x$. Die äußere Funktion ist $c(t)=e^t$ mit $c'(t)=e^t$.

$$
v'(x)=c'(a(x))\cdot a'(x)=6xe^{3x^2-4}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=4xe^{3x^2-4}+6x(2x^2-3)e^{3x^2-4}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=(x+2)\sin(x^2-1)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ sin(x^2-1)+2*x*(x+2)*cos(x^2-1) ]] @canvas
@Algebrite.check(`sin(x^2-1)+2*x*(x+2)*cos(x^2-1)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x+2$ mit $u'(x)=1$.

Für den zweiten Faktor $v(x)=\sin(x^2-1)$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=x^2-1$ mit $a'(x)=2x$. Die äußere Funktion ist $c(t)=\sin(t)$ mit $c'(t)=\cos(t)$.

$$
v'(x)=c'(a(x))\cdot a'(x)=2x\cos(x^2-1).
$$

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=\sin(x^2-1)+2x(x+2)\cos(x^2-1).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=(x^2-1)\cos(2x^2+x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 2*x*cos(2*x^2+x)-(x^2-1)*(4*x+1)*sin(2*x^2+x) ]] @canvas
@Algebrite.check(`2*x*cos(2*x^2+x)-(x^2-1)*(4*x+1)*sin(2*x^2+x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^2-1$ mit $u'(x)=2x$.

Für den zweiten Faktor $v(x)=\cos(2x^2+x)$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=2x^2+x$ mit $a'(x)=4x+1$. Die äußere Funktion ist $c(t)=\cos(t)$ mit $c'(t)=-\sin(t)$.

$$
v'(x)=c'(a(x))\cdot a'(x)=-(4x+1)\sin(2x^2+x).
$$

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=2x\cos(2x^2+x)-(x^2-1)(4x+1)\sin(2x^2+x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=(3x-1)\sqrt{x^2+4}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ 3*(x^2+4)^(1/2)+x*(3*x-1)*(x^2+4)^(-1/2) ]] @canvas
@Algebrite.check(`3*(x^2+4)^(1/2)+x*(3*x-1)*(x^2+4)^(-1/2)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=3x-1$ mit $u'(x)=3$.

Für den zweiten Faktor $v(x)=\sqrt{x^2+4}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=x^2+4$ mit $a'(x)=2x$. Die äußere Funktion ist $c(t)=\sqrt{t}$ mit $c'(t)=\frac{1}{2\sqrt{t}}$.

$$
v'(x)=c'(a(x))\cdot a'(x)=\frac{x}{\sqrt{x^2+4}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=3\sqrt{x^2+4}+\frac{x(3x-1)}{\sqrt{x^2+4}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=(x^2+x)e^{2x-x^2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ (2*x+1)*exp(2*x-x^2)+(x^2+x)*(2-2*x)*exp(2*x-x^2) ]] @canvas
@Algebrite.check(`(2*x+1)*exp(2*x-x^2)+(x^2+x)*(2-2*x)*exp(2*x-x^2)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^2+x$ mit $u'(x)=2x+1$.

Für den zweiten Faktor $v(x)=e^{2x-x^2}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=2x-x^2$ mit $a'(x)=2-2x$. Die äußere Funktion ist $c(t)=e^t$ mit $c'(t)=e^t$.

$$
v'(x)=c'(a(x))\cdot a'(x)=(2-2x)e^{2x-x^2}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(2x+1)e^{2x-x^2}+(x^2+x)(2-2x)e^{2x-x^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(2x+1)\sqrt[3]{x^2+1}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 2*(x^2+1)^(1/3)+2*x*(2*x+1)/3*(x^2+1)^(-2/3) ]] @canvas
@Algebrite.check(`2*(x^2+1)^(1/3)+2*x*(2*x+1)/3*(x^2+1)^(-2/3)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x+1$ mit $u'(x)=2$.

Für den zweiten Faktor $v(x)=\sqrt[3]{x^2+1}$ wird die Kettenregel angewandt. Die innere Funktion ist $a(x)=x^2+1$ mit $a'(x)=2x$. Die äußere Funktion ist $c(t)=\sqrt[3]{t}$ mit $c'(t)=\frac{1}{3\sqrt[3]{t^2}}$.

$$
v'(x)=c'(a(x))\cdot a'(x)=\frac{2x}{3\sqrt[3]{(x^2+1)^2}}.
$$

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=2\sqrt[3]{x^2+1}+\frac{2x(2x+1)}{3\sqrt[3]{(x^2+1)^2}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Kettenregel`)

</div>

</section>
