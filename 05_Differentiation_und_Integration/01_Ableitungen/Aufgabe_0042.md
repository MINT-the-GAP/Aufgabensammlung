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

tags: Ableitungen, Kettenregel, Logarithmus, mittel, niedrig, Angeben

comment: Gib die erste Ableitung der Funktionen mit natürlichem Logarithmus an und verwende die Kettenregel.
-->

# Kettenregel mit verschiedenen Logarithmusargumenten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=\ln(2x^4+x^2+1),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ ((8*x^3+2*x)/(2*x^4+x^2+1)) ]] @canvas
@Algebrite.check(`((8*x^3+2*x)/(2*x^4+x^2+1))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2x^4+x^2+1$ mit $u'(x)=8x^3+2x$.

Die äußere Funktion ist $v(t)=\ln(t)$ mit $v'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
f'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{8x^3+2x}{2x^4+x^2+1}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=-2\ln(9-x^2),\qquad -3<x<3$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ ((4*x)/(9-x^2)) ]] @canvas
@Algebrite.check(`((4*x)/(9-x^2))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=9-x^2$ mit $u'(x)=-2x$.

Die äußere Funktion ist $v(t)=-2\ln(t)$ mit $v'(t)=\frac{-2}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
g'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{4x}{9-x^2}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\ln(2+e^{2x}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ ((2*exp(2*x))/(2+exp(2*x))) ]] @canvas
@Algebrite.check(`((2*exp(2*x))/(2+exp(2*x)))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2+e^{2x}$ mit $u'(x)=2e^{2x}$.

Die äußere Funktion ist $v(t)=\ln(t)$ mit $v'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
h'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{2e^{2x}}{2+e^{2x}}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=3\ln(3+\sin(x)),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ ((3*cos(x))/(3+sin(x))) ]] @canvas
@Algebrite.check(`((3*cos(x))/(3+sin(x)))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=3+\sin(x)$ mit $u'(x)=\cos(x)$.

Die äußere Funktion ist $v(t)=3\ln(t)$ mit $v'(t)=\frac{3}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
p'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{3\cos(x)}{3+\sin(x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\ln(2+\cos(2x)),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -((2*sin(2*x))/(2+cos(2*x))) ]] @canvas
@Algebrite.check(`-((2*sin(2*x))/(2+cos(2*x)))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=2+\cos(2x)$ mit $u'(x)=-2\sin(2x)$.

Die äußere Funktion ist $v(t)=\ln(t)$ mit $v'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
q'(x)&=v'(u(x))\cdot u'(x)\\
&=-\frac{2\sin(2x)}{2+\cos(2x)}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\ln(1+\sqrt{x^2+4}),\qquad x\in\mathbb{R}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ ((x)/((x^2+4)^(1/2)*(1+(x^2+4)^(1/2)))) ]] @canvas
@Algebrite.check(`((x)/((x^2+4)^(1/2)*(1+(x^2+4)^(1/2))))`)
[[?]] @Explain
*****************
Die innere Funktion ist $u(x)=1+\sqrt{x^2+4}$ mit $u'(x)=\frac{x}{\sqrt{x^2+4}}$.

Die äußere Funktion ist $v(t)=\ln(t)$ mit $v'(t)=\frac{1}{t}$.

Die Kettenregel ergibt

$$
\begin{aligned}
r'(x)&=v'(u(x))\cdot u'(x)\\
&=\frac{x}{\sqrt{x^2+4}(1+\sqrt{x^2+4})}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Kettenregel, Logarithmus`)

</div>

</section>
