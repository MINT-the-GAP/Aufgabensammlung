<!--
version: 1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

tags: Quadratische Ergänzung, Binomische Formeln, leicht, niedrig, Bestimmen

comment: Bestimme fehlende natürliche Zahlen in binomischen Quadraten.

author: Martin Lommatzsch
-->

# Quadratische Terme ergänzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen stimmen.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+6x+$ [[ 9 ]] @canvas $=\left(x+3\right)^2$
@Algebrite.check([ 9 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+3\right)^2&=x^2+2\cdot 3x+3^2 \\
&=x^2+6x+9
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-8x+$ [[ 16 ]] @canvas $=\left(x-4\right)^2$
@Algebrite.check([ 16 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-4\right)^2&=x^2-2\cdot 4x+4^2 \\
&=x^2-8x+16
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+10x+25=\bigl(x+$ [[ 5 ]] @canvas $\bigr)^2$
@Algebrite.check([ 5 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+5\right)^2&=x^2+2\cdot 5x+5^2 \\
&=x^2+10x+25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-12x+36=\bigl(x-$ [[ 6 ]] @canvas $\bigr)^2$
@Algebrite.check([ 6 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-6\right)^2&=x^2-2\cdot 6x+6^2 \\
&=x^2-12x+36
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+14x+$ [[ 49 ]] @canvas $=\bigl(x+$ [[ 7 ]] @canvas $\bigr)^2$
@Algebrite.check(`[ 49; 7 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+7\right)^2&=x^2+2\cdot 7x+7^2 \\
&=x^2+14x+49
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-18x+$ [[ 81 ]] @canvas $=\bigl(x-$ [[ 9 ]] @canvas $\bigr)^2$
@Algebrite.check(`[ 81; 9 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-9\right)^2&=x^2-2\cdot 9x+9^2 \\
&=x^2-18x+81
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
