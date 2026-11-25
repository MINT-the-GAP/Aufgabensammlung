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

tags: Quadratische Ergänzung, Binomische Formeln, Dezimalzahlen, leicht, niedrig, Bestimmen

comment: Bestimme fehlende Dezimalzahlen in binomischen Quadraten.

author: Martin Lommatzsch
-->

# Quadratische Terme ergänzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen stimmen.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+$ [[ 1 ]] @canvas $x+0{,}25=\left(x+0{,}5\right)^2$
@Algebrite.check([ 1 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+0{,}5\right)^2&=x^2+2\cdot 0{,}5x+0{,}5^2 \\
&=x^2+x+0{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-$ [[ 0,6 ]] @canvas $x+0{,}09=\left(x-0{,}3\right)^2$
@Algebrite.check([ 0.6 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-0{,}3\right)^2&=x^2-2\cdot 0{,}3x+0{,}3^2 \\
&=x^2-0{,}6x+0{,}09
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+$ [[ 2,8 ]] @canvas $x+$ [[ 1,96 ]] @canvas $=\left(x+1{,}4\right)^2$
@Algebrite.check(`[ 2.8; 1.96 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+1{,}4\right)^2&=x^2+2\cdot 1{,}4x+1{,}4^2 \\
&=x^2+2{,}8x+1{,}96
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-$ [[ 1,8 ]] @canvas $x+$ [[ 0,81 ]] @canvas $=\left(x-0{,}9\right)^2$
@Algebrite.check(`[ 1.8; 0.81 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-0{,}9\right)^2&=x^2-2\cdot 0{,}9x+0{,}9^2 \\
&=x^2-1{,}8x+0{,}81
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+2{,}2x+1{,}21=\bigl(x+$ [[ 1,1 ]] @canvas $\bigr)^2$
@Algebrite.check([ 1.1 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+1{,}1\right)^2&=x^2+2\cdot 1{,}1x+1{,}1^2 \\
&=x^2+2{,}2x+1{,}21
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-5x+6{,}25=\bigl(x-$ [[ 2,5 ]] @canvas $\bigr)^2$
@Algebrite.check([ 2.5 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-2{,}5\right)^2&=x^2-2\cdot 2{,}5x+2{,}5^2 \\
&=x^2-5x+6{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

</section>
