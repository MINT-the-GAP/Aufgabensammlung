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
__$a)\;\;$__ $1{,}25\left(x^2+1{,}6x+0{,}64-0{,}64\right)+1{,}1=1{,}25\bigl(x+$ [[ 0,8 ]] @canvas $\bigr)^2+$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 4/5; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2\mathbin{:}1{,}25&=1{,}6 \\
\dfrac{1}{2}\cdot 1{,}6&=0{,}8, & \left(0{,}8\right)^2&=0{,}64 \\
1{,}25x^2+2x+1{,}1&=1{,}25\left(x^2+1{,}6x+0{,}64-0{,}64\right)+1{,}1 \\
&=1{,}25\left(x+0{,}8\right)^2+0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $0{,}75\left(x^2-2{,}4x+1{,}44-1{,}44\right)+0{,}68=0{,}75\bigl(x-$ [[ 1,2 ]] @canvas $\bigr)^2-$ [[ 0,4 ]] @canvas
@Algebrite.check(`[ 6/5; 2/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}8\mathbin{:}0{,}75&=2{,}4 \\
\dfrac{1}{2}\cdot 2{,}4&=1{,}2, & \left(1{,}2\right)^2&=1{,}44 \\
0{,}75x^2-1{,}8x+0{,}68&=0{,}75\left(x^2-2{,}4x+1{,}44-1{,}44\right)+0{,}68 \\
&=0{,}75\left(x-1{,}2\right)^2-0{,}4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $1{,}6\left(x^2+1{,}5x+0{,}5625-0{,}5625\right)+1{,}4=1{,}6\bigl(x+$ [[ 0,75 ]] @canvas $\bigr)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 3/4; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2{,}4\mathbin{:}1{,}6&=1{,}5 \\
\dfrac{1}{2}\cdot 1{,}5&=0{,}75, & \left(0{,}75\right)^2&=0{,}5625 \\
1{,}6x^2+2{,}4x+1{,}4&=1{,}6\left(x^2+1{,}5x+0{,}5625-0{,}5625\right)+1{,}4 \\
&=1{,}6\left(x+0{,}75\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $2{,}5\left(x^2-0{,}8x+0{,}16-0{,}16\right)+0{,}2=2{,}5\bigl(x-$ [[ 0,4 ]] @canvas $\bigr)^2-$ [[ 0,2 ]] @canvas
@Algebrite.check(`[ 2/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2\mathbin{:}2{,}5&=0{,}8 \\
\dfrac{1}{2}\cdot 0{,}8&=0{,}4, & \left(0{,}4\right)^2&=0{,}16 \\
2{,}5x^2-2x+0{,}2&=2{,}5\left(x^2-0{,}8x+0{,}16-0{,}16\right)+0{,}2 \\
&=2{,}5\left(x-0{,}4\right)^2-0{,}2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $0{,}4\left(x^2+4x+4-4\right)+2{,}1=0{,}4\bigl(x+$ [[ 2 ]] @canvas $\bigr)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 2; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}6\mathbin{:}0{,}4&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
0{,}4x^2+1{,}6x+2{,}1&=0{,}4\left(x^2+4x+4-4\right)+2{,}1 \\
&=0{,}4\left(x+2\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $1{,}8\left(x^2-x+0{,}25-0{,}25\right)+0{,}75=1{,}8\bigl(x-$ [[ 0,5 ]] @canvas $\bigr)^2+$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 1/2; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}8\mathbin{:}1{,}8&=1 \\
\dfrac{1}{2}\cdot 1&=0{,}5, & \left(0{,}5\right)^2&=0{,}25 \\
1{,}8x^2-1{,}8x+0{,}75&=1{,}8\left(x^2-1x+0{,}25-0{,}25\right)+0{,}75 \\
&=1{,}8\left(x-0{,}5\right)^2+0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Dezimalzahlen`)

</div>

</section>
