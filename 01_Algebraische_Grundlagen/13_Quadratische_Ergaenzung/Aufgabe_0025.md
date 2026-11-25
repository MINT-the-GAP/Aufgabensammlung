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

tags: Quadratische Ergänzung, Dezimalzahlen, mittel, normal, Bestimmen

comment: Bestimme die fehlenden Dezimalzahlen bei der quadratischen Ergänzung mit Vorfaktor.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung mit Vorfaktor

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzungsgrad 3" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeitsgrad 3" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen für alle $x$ stimmen.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $1{,}5\left(x^2+0{,}8x+0{,}16-0{,}16\right)+0{,}5=1{,}5\bigl(x+$ [[ 0,4 ]] @canvas $\bigr)^2+$ [[ 0,26 ]] @canvas
@Algebrite.check(`[ 2/5; 13/50 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}2\mathbin{:}1{,}5&=0{,}8 \\
\dfrac{1}{2}\cdot 0{,}8&=0{,}4, & \left(0{,}4\right)^2&=0{,}16 \\
1{,}5x^2+1{,}2x+0{,}5&=1{,}5\left(x^2+0{,}8x+0{,}16-0{,}16\right)+0{,}5 \\
&=1{,}5\left(x+0{,}4\right)^2+0{,}26
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $2{,}5\left(x^2-1{,}2x+0{,}36-0{,}36\right)+1{,}4=2{,}5\bigl(x-$ [[ 0,6 ]] @canvas $\bigr)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 3/5; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
3\mathbin{:}2{,}5&=1{,}2 \\
\dfrac{1}{2}\cdot 1{,}2&=0{,}6, & \left(0{,}6\right)^2&=0{,}36 \\
2{,}5x^2-3x+1{,}4&=2{,}5\left(x^2-1{,}2x+0{,}36-0{,}36\right)+1{,}4 \\
&=2{,}5\left(x-0{,}6\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $0{,}5\left(x^2+2{,}4x+1{,}44-1{,}44\right)+0{,}32=0{,}5\bigl(x+$ [[ 1,2 ]] @canvas $\bigr)^2-$ [[ 0,4 ]] @canvas
@Algebrite.check(`[ 6/5; 2/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}2\mathbin{:}0{,}5&=2{,}4 \\
\dfrac{1}{2}\cdot 2{,}4&=1{,}2, & \left(1{,}2\right)^2&=1{,}44 \\
0{,}5x^2+1{,}2x+0{,}32&=0{,}5\left(x^2+2{,}4x+1{,}44-1{,}44\right)+0{,}32 \\
&=0{,}5\left(x+1{,}2\right)^2-0{,}4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $1{,}2\left(x^2-x+0{,}25-0{,}25\right)+0{,}8=1{,}2\bigl(x-$ [[ 0,5 ]] @canvas $\bigr)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 1/2; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}2\mathbin{:}1{,}2&=1 \\
\dfrac{1}{2}\cdot 1&=0{,}5, & \left(0{,}5\right)^2&=0{,}25 \\
1{,}2x^2-1{,}2x+0{,}8&=1{,}2\left(x^2-1x+0{,}25-0{,}25\right)+0{,}8 \\
&=1{,}2\left(x-0{,}5\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $0{,}8\left(x^2+3x+2{,}25-2{,}25\right)+1{,}2=0{,}8\bigl(x+$ [[ 1,5 ]] @canvas $\bigr)^2-$ [[ 0,6 ]] @canvas
@Algebrite.check(`[ 3/2; 3/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2{,}4\mathbin{:}0{,}8&=3 \\
\dfrac{1}{2}\cdot 3&=1{,}5, & \left(1{,}5\right)^2&=2{,}25 \\
0{,}8x^2+2{,}4x+1{,}2&=0{,}8\left(x^2+3x+2{,}25-2{,}25\right)+1{,}2 \\
&=0{,}8\left(x+1{,}5\right)^2-0{,}6
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $2{,}4\left(x^2-0{,}5x+0{,}0625-0{,}0625\right)+0{,}45=2{,}4\bigl(x-$ [[ 0,25 ]] @canvas $\bigr)^2+$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 1/4; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}2\mathbin{:}2{,}4&=0{,}5 \\
\dfrac{1}{2}\cdot 0{,}5&=0{,}25, & \left(0{,}25\right)^2&=0{,}0625 \\
2{,}4x^2-1{,}2x+0{,}45&=2{,}4\left(x^2-0{,}5x+0{,}0625-0{,}0625\right)+0{,}45 \\
&=2{,}4\left(x-0{,}25\right)^2+0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

</section>
