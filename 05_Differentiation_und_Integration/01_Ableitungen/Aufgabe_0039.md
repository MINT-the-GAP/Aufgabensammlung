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

# Produktregel mit dem natürlichen Logarithmus

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeit: mittel" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

Für alle Funktionen gilt $x>0$.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=x\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ ln(x)+1 ]] @canvas
@Algebrite.check(`ln(x)+1`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x$ mit $u'(x)=1$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
f'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=\ln(x)+1.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3x^2\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 6*x*ln(x)+3*x ]] @canvas
@Algebrite.check(`6*x*ln(x)+3*x`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=3x^2$ mit $u'(x)=6x$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
g'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=6x\ln(x)+3x.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=x^3\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 3*x^2*ln(x)+x^2 ]] @canvas
@Algebrite.check(`3*x^2*ln(x)+x^2`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^3$ mit $u'(x)=3x^2$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
h'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=3x^2\ln(x)+x^2.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=-2x^4\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ -8*x^3*ln(x)-2*x^3 ]] @canvas
@Algebrite.check(`-8*x^3*ln(x)-2*x^3`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=-2x^4$ mit $u'(x)=-8x^3$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
p'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=-8x^3\ln(x)-2x^3.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=(2x+1)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 2*ln(x)+((2*x+1)/(x)) ]] @canvas
@Algebrite.check(`2*ln(x)+((2*x+1)/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=2x+1$ mit $u'(x)=2$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
q'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=2\ln(x)+\frac{2x+1}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=(x^2-3)\ln(x)$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 2*x*ln(x)+((x^2-3)/(x)) ]] @canvas
@Algebrite.check(`2*x*ln(x)+((x^2-3)/(x))`)
[[?]] @Explain
*****************
Der erste Faktor ist $u(x)=x^2-3$ mit $u'(x)=2x$.

Der zweite Faktor ist $v(x)=\ln(x)$ mit $v'(x)=\frac{1}{x}$.

Die Produktregel ergibt

$$
\begin{aligned}
r'(x)&=u'(x)v(x)+u(x)v'(x)\\
&=2x\ln(x)+\frac{x^2-3}{x}.
\end{aligned}
$$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Produktregel, Logarithmus`)

</div>

</section>
