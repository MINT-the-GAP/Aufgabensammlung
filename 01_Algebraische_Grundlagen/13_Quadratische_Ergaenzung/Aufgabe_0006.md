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
__$a)\;\;$__ $x^2+$ [[ 4 ]] @canvas $x+4=\left(x+2\right)^2$
@Algebrite.check([ 4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+2\right)^2&=x^2+2\cdot 2x+2^2 \\
&=x^2+4x+4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-$ [[ 10 ]] @canvas $x+25=\left(x-5\right)^2$
@Algebrite.check([ 10 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-5\right)^2&=x^2-2\cdot 5x+5^2 \\
&=x^2-10x+25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+$ [[ 16 ]] @canvas $x+$ [[ 64 ]] @canvas $=\left(x+8\right)^2$
@Algebrite.check(`[ 16; 64 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+8\right)^2&=x^2+2\cdot 8x+8^2 \\
&=x^2+16x+64
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-$ [[ 6 ]] @canvas $x+$ [[ 9 ]] @canvas $=\left(x-3\right)^2$
@Algebrite.check(`[ 6; 9 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-3\right)^2&=x^2-2\cdot 3x+3^2 \\
&=x^2-6x+9
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+20x+$ [[ 100 ]] @canvas $=\bigl(x+$ [[ 10 ]] @canvas $\bigr)^2$
@Algebrite.check(`[ 100; 10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+10\right)^2&=x^2+2\cdot 10x+10^2 \\
&=x^2+20x+100
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-22x+121=\bigl(x-$ [[ 11 ]] @canvas $\bigr)^2$
@Algebrite.check([ 11 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-11\right)^2&=x^2-2\cdot 11x+11^2 \\
&=x^2-22x+121
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
