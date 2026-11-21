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

tags: Quadratische Ergänzung, Dezimalzahlen, leicht, niedrig, Bestimmen

comment: Bestimme die fehlenden Dezimalzahlen bei der quadratischen Ergänzung.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(\dfrac{1}{2}\cdot 1\right)^2 =$ [[ 0,25 ]] @canvas  \
$x^2+x+0{,}75=x^2+x+0{,}25-0{,}25+0{,}75=\left(x+$ [[ 0,5 ]] @canvas $\right)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 1/4; 1/2; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1&=0{,}5, & \left(0{,}5\right)^2&=0{,}25 \\
x^2+x+0{,}75&=x^2+x+0{,}25-0{,}25+0{,}75 \\
&=\left(x+0{,}5\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(\dfrac{1}{2}\cdot 0{,}8\right)^2 =$ [[ 0,16 ]] @canvas  \
$x^2-0{,}8x+0{,}36=x^2-0{,}8x+0{,}16-0{,}16+0{,}36=\left(x-$ [[ 0,4 ]] @canvas $\right)^2+$ [[ 0,2 ]] @canvas
@Algebrite.check(`[ 4/25; 2/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}8&=0{,}4, & \left(0{,}4\right)^2&=0{,}16 \\
x^2-0{,}8x+0{,}36&=x^2-0{,}8x+0{,}16-0{,}16+0{,}36 \\
&=\left(x-0{,}4\right)^2+0{,}2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}2\right)^2 =$ [[ 0,36 ]] @canvas  \
$x^2+1{,}2x+0{,}16=x^2+1{,}2x+0{,}36-0{,}36+0{,}16=\left(x+$ [[ 0,6 ]] @canvas $\right)^2-$ [[ 0,2 ]] @canvas
@Algebrite.check(`[ 9/25; 3/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}2&=0{,}6, & \left(0{,}6\right)^2&=0{,}36 \\
x^2+1{,}2x+0{,}16&=x^2+1{,}2x+0{,}36-0{,}36+0{,}16 \\
&=\left(x+0{,}6\right)^2-0{,}2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}5\right)^2 =$ [[ 0,5625 ]] @canvas  \
$x^2-1{,}5x+0{,}8125=x^2-1{,}5x+0{,}5625-0{,}5625+0{,}8125=\left(x-$ [[ 0,75 ]] @canvas $\right)^2+$ [[ 0,25 ]] @canvas
@Algebrite.check(`[ 9/16; 3/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}5&=0{,}75, & \left(0{,}75\right)^2&=0{,}5625 \\
x^2-1{,}5x+0{,}8125&=x^2-1{,}5x+0{,}5625-0{,}5625+0{,}8125 \\
&=\left(x-0{,}75\right)^2+0{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(\dfrac{1}{2}\cdot 2{,}4\right)^2 =$ [[ 1,44 ]] @canvas  \
$x^2+2{,}4x+1{,}94=x^2+2{,}4x+1{,}44-1{,}44+1{,}94=\left(x+$ [[ 1,2 ]] @canvas $\right)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 36/25; 6/5; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2{,}4&=1{,}2, & \left(1{,}2\right)^2&=1{,}44 \\
x^2+2{,}4x+1{,}94&=x^2+2{,}4x+1{,}44-1{,}44+1{,}94 \\
&=\left(x+1{,}2\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}8\right)^2 =$ [[ 0,81 ]] @canvas  \
$x^2-1{,}8x+0{,}51=x^2-1{,}8x+0{,}81-0{,}81+0{,}51=\left(x-$ [[ 0,9 ]] @canvas $\right)^2-$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 81/100; 9/10; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}8&=0{,}9, & \left(0{,}9\right)^2&=0{,}81 \\
x^2-1{,}8x+0{,}51&=x^2-1{,}8x+0{,}81-0{,}81+0{,}51 \\
&=\left(x-0{,}9\right)^2-0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

</section>
