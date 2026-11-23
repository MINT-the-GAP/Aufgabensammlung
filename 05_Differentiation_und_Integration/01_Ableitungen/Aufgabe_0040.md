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

tags: Ableitungen, Produktregel, Logarithmus, mittel, niedrig, Angeben

comment: Gib die erste Ableitung der Funktionen mit natürlichem Logarithmus an und verwende die Produktregel.
-->

# Produktregel mit Logarithmus und verschiedenen Faktoren

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

Für alle Funktionen gilt $x>0$.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=(2x^2-3x+1)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ (4*x-3)*ln(x)+((2*x^2-3*x+1)/(x)) ]] @canvas
@Algebrite.check(`(4*x-3)*ln(x)+((2*x^2-3*x+1)/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x^2-3x+1$ mit $u'(x)=4x-3$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(4x-3)\ln(x)+\frac{2x^2-3x+1}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=(x^3-2x+4)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ (3*x^2-2)*ln(x)+((x^3-2*x+4)/(x)) ]] @canvas
@Algebrite.check(`(3*x^2-2)*ln(x)+((x^3-2*x+4)/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3-2x+4$ mit $u'(x)=3x^2-2$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(3x^2-2)\ln(x)+\frac{x^3-2x+4}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=e^x\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ exp(x)*ln(x)+((exp(x))/(x)) ]] @canvas
@Algebrite.check(`exp(x)*ln(x)+((exp(x))/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=e^x$ mit $u'(x)=e^x$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=e^x\ln(x)+\frac{e^x}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\sin(x)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ cos(x)*ln(x)+((sin(x))/(x)) ]] @canvas
@Algebrite.check(`cos(x)*ln(x)+((sin(x))/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\sin(x)$ mit $u'(x)=\cos(x)$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=\cos(x)\ln(x)+\frac{\sin(x)}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\cos(x)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -sin(x)*ln(x)+((cos(x))/(x)) ]] @canvas
@Algebrite.check(`-sin(x)*ln(x)+((cos(x))/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=\cos(x)$ mit $u'(x)=-\sin(x)$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=-\sin(x)\ln(x)+\frac{\cos(x)}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(x^4+x^2-2)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ (4*x^3+2*x)*ln(x)+((x^4+x^2-2)/(x)) ]] @canvas
@Algebrite.check(`(4*x^3+2*x)*ln(x)+((x^4+x^2-2)/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^4+x^2-2$ mit $u'(x)=4x^3+2x$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=(4x^3+2x)\ln(x)+\frac{x^4+x^2-2}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

</section>
