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

tags: Ableitungen, Produktregel, leicht, niedrig, Angeben

comment: Gib mithilfe der Produktregel die erste Ableitung von Produkten aus einer Potenz mit Koeffizient und einer Sinus-, Kosinus- oder Exponentialfunktion an.
-->

# Einfache Produktregel

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=2x\sin(3x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 2*sin(3*x)+6*x*cos(3*x) ]] @canvas
@Algebrite.check(`2*sin(3*x)+6*x*cos(3*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x$ mit $u'(x)=2$.

Der zweite Faktor ist $v(x)=\sin(3x)$. Mit der Kettenregel gilt $v'(x)=\cos(3x)\cdot 3=3\cos(3x)$.

Für $f(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
f'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=2\cdot \sin(3x)+2x\cdot 3\cos(3x)\\
&=2\sin(3x)+6x\cos(3x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3x\cos(4x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 3*cos(4*x)-12*x*sin(4*x) ]] @canvas
@Algebrite.check(`3*cos(4*x)-12*x*sin(4*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=3x$ mit $u'(x)=3$.

Der zweite Faktor ist $v(x)=\cos(4x)$. Mit der Kettenregel gilt $v'(x)=-\sin(4x)\cdot 4=-4\sin(4x)$.

Für $g(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
g'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=3\cdot \cos(4x)-3x\cdot 4\sin(4x)\\
&=3\cos(4x)-12x\sin(4x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2x^2e^{2x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 4*x*exp(2*x)+4*x^2*exp(2*x) ]] @canvas
@Algebrite.check(`4*x*exp(2*x)+4*x^2*exp(2*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^2$ mit $u'(x)=4x$.

Der zweite Faktor ist $v(x)=e^{2x}$. Mit der Kettenregel gilt $v'(x)=e^{2x}\cdot 2=2e^{2x}$.

Für $h(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
h'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=4x\cdot e^{2x}+2x^2\cdot 2e^{2x}\\
&=4xe^{2x}+4x^2e^{2x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=3x^2\sin(2x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ 6*x*sin(2*x)+6*x^2*cos(2*x) ]] @canvas
@Algebrite.check(`6*x*sin(2*x)+6*x^2*cos(2*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=3x^2$ mit $u'(x)=6x$.

Der zweite Faktor ist $v(x)=\sin(2x)$. Mit der Kettenregel gilt $v'(x)=\cos(2x)\cdot 2=2\cos(2x)$.

Für $p(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
p'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=6x\cdot \sin(2x)+3x^2\cdot 2\cos(2x)\\
&=6x\sin(2x)+6x^2\cos(2x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=4x^2\cos(3x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 8*x*cos(3*x)-12*x^2*sin(3*x) ]] @canvas
@Algebrite.check(`8*x*cos(3*x)-12*x^2*sin(3*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=4x^2$ mit $u'(x)=8x$.

Der zweite Faktor ist $v(x)=\cos(3x)$. Mit der Kettenregel gilt $v'(x)=-\sin(3x)\cdot 3=-3\sin(3x)$.

Für $q(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
q'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=8x\cdot \cos(3x)-4x^2\cdot 3\sin(3x)\\
&=8x\cos(3x)-12x^2\sin(3x).
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=2x^2e^{-3x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 4*x*exp(-3*x)-6*x^2*exp(-3*x) ]] @canvas
@Algebrite.check(`4*x*exp(-3*x)-6*x^2*exp(-3*x)`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^2$ mit $u'(x)=4x$.

Der zweite Faktor ist $v(x)=e^{-3x}$. Mit der Kettenregel gilt $v'(x)=e^{-3x}\cdot (-3)=-3e^{-3x}$.

Für $r(x)=u(x)\cdot v(x)$ ergibt die Produktregel

$$
\begin{aligned}
r'(x)&=u'(x)\cdot v(x)+u(x)\cdot v'(x)\\
&=4x\cdot e^{-3x}-2x^2\cdot 3e^{-3x}\\
&=4xe^{-3x}-6x^2e^{-3x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel`)

</div>

</section>
