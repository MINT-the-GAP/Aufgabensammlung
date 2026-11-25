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
**Bestimme** die fehlenden Zahlen. Ergänze mit der ersten Lücke jeweils die beiden Terme davor zu einem binomischen Quadrat.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+0{,}5x+$ [[ 0,0625 ]] @canvas $-0{,}0625+0{,}3125=\bigl(x+$ [[ 0,25 ]] @canvas $\bigr)^2+$ [[ 0,25 ]] @canvas
@Algebrite.check(`[ 1/16; 1/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}5&=0{,}25, & \left(0{,}25\right)^2&=0{,}0625 \\
x^2+0{,}5x+0{,}3125&=x^2+0{,}5x+0{,}0625-0{,}0625+0{,}3125 \\
&=\left(x+0{,}25\right)^2+0{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-0{,}7x+$ [[ 0,1225 ]] @canvas $-0{,}1225+0{,}2225=\bigl(x-$ [[ 0,35 ]] @canvas $\bigr)^2+$ [[ 0,1 ]] @canvas
@Algebrite.check(`[ 49/400; 7/20; 1/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}7&=0{,}35, & \left(0{,}35\right)^2&=0{,}1225 \\
x^2-0{,}7x+0{,}2225&=x^2-0{,}7x+0{,}1225-0{,}1225+0{,}2225 \\
&=\left(x-0{,}35\right)^2+0{,}1
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+1{,}6x+$ [[ 0,64 ]] @canvas $-0{,}64+0{,}89=\bigl(x+$ [[ 0,8 ]] @canvas $\bigr)^2+$ [[ 0,25 ]] @canvas
@Algebrite.check(`[ 16/25; 4/5; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}6&=0{,}8, & \left(0{,}8\right)^2&=0{,}64 \\
x^2+1{,}6x+0{,}89&=x^2+1{,}6x+0{,}64-0{,}64+0{,}89 \\
&=\left(x+0{,}8\right)^2+0{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-2{,}2x+$ [[ 1,21 ]] @canvas $-1{,}21+0{,}81=\bigl(x-$ [[ 1,1 ]] @canvas $\bigr)^2-$ [[ 0,4 ]] @canvas
@Algebrite.check(`[ 121/100; 11/10; 2/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2{,}2&=1{,}1, & \left(1{,}1\right)^2&=1{,}21 \\
x^2-2{,}2x+0{,}81&=x^2-2{,}2x+1{,}21-1{,}21+0{,}81 \\
&=\left(x-1{,}1\right)^2-0{,}4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+2{,}5x+$ [[ 1,5625 ]] @canvas $-1{,}5625+2{,}0625=\bigl(x+$ [[ 1,25 ]] @canvas $\bigr)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 25/16; 5/4; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2{,}5&=1{,}25, & \left(1{,}25\right)^2&=1{,}5625 \\
x^2+2{,}5x+2{,}0625&=x^2+2{,}5x+1{,}5625-1{,}5625+2{,}0625 \\
&=\left(x+1{,}25\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-3x+$ [[ 2,25 ]] @canvas $-2{,}25+1{,}5=\bigl(x-$ [[ 1,5 ]] @canvas $\bigr)^2-$ [[ 0,75 ]] @canvas
@Algebrite.check(`[ 9/4; 3/2; 3/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 3&=1{,}5, & \left(1{,}5\right)^2&=2{,}25 \\
x^2-3x+1{,}5&=x^2-3x+2{,}25-2{,}25+1{,}5 \\
&=\left(x-1{,}5\right)^2-0{,}75
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

</section>
