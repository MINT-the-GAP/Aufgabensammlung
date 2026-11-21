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

tags: Quadratische Ergänzung, mittel, normal, Bestimmen

comment: Bestimme die fehlenden natürlichen Zahlen bei der quadratischen Ergänzung mit Vorfaktor.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung mit Vorfaktor

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzungsgrad 3" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeitsgrad 3" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $2x^2+8x+3=2\left(x^2+$ [[ 4 ]] @canvas $x\right)+3$  \
$\dfrac{1}{2}\cdot 4 =$ [[ 2 ]] @canvas $,\qquad \left(2\right)^2 =$ [[ 4 ]] @canvas  \
$2\left(x^2+4x+4-4\right)+3=2\left(x+2\right)^2-$ [[ 5 ]] @canvas
@Algebrite.check(`[ 4; 2; 4; 5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
8\mathbin{:}2&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
2x^2+8x+3&=2\left(x^2+4x+4-4\right)+3 \\
&=2\left(x+2\right)^2-5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $3x^2-6x+7=3\left(x^2-$ [[ 2 ]] @canvas $x\right)+7$  \
$\dfrac{1}{2}\cdot 2 =$ [[ 1 ]] @canvas $,\qquad \left(1\right)^2 =$ [[ 1 ]] @canvas  \
$3\left(x^2-2x+1-1\right)+7=3\left(x-1\right)^2+$ [[ 4 ]] @canvas
@Algebrite.check(`[ 2; 1; 1; 4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
6\mathbin{:}3&=2 \\
\dfrac{1}{2}\cdot 2&=1, & \left(1\right)^2&=1 \\
3x^2-6x+7&=3\left(x^2-2x+1-1\right)+7 \\
&=3\left(x-1\right)^2+4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $2x^2+12x+20=2\left(x^2+$ [[ 6 ]] @canvas $x\right)+20$  \
$\dfrac{1}{2}\cdot 6 =$ [[ 3 ]] @canvas $,\qquad \left(3\right)^2 =$ [[ 9 ]] @canvas  \
$2\left(x^2+6x+9-9\right)+20=2\left(x+3\right)^2+$ [[ 2 ]] @canvas
@Algebrite.check(`[ 6; 3; 9; 2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
12\mathbin{:}2&=6 \\
\dfrac{1}{2}\cdot 6&=3, & \left(3\right)^2&=9 \\
2x^2+12x+20&=2\left(x^2+6x+9-9\right)+20 \\
&=2\left(x+3\right)^2+2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $4x^2-16x+10=4\left(x^2-$ [[ 4 ]] @canvas $x\right)+10$  \
$\dfrac{1}{2}\cdot 4 =$ [[ 2 ]] @canvas $,\qquad \left(2\right)^2 =$ [[ 4 ]] @canvas  \
$4\left(x^2-4x+4-4\right)+10=4\left(x-2\right)^2-$ [[ 6 ]] @canvas
@Algebrite.check(`[ 4; 2; 4; 6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
16\mathbin{:}4&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
4x^2-16x+10&=4\left(x^2-4x+4-4\right)+10 \\
&=4\left(x-2\right)^2-6
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $3x^2+24x+50=3\left(x^2+$ [[ 8 ]] @canvas $x\right)+50$  \
$\dfrac{1}{2}\cdot 8 =$ [[ 4 ]] @canvas $,\qquad \left(4\right)^2 =$ [[ 16 ]] @canvas  \
$3\left(x^2+8x+16-16\right)+50=3\left(x+4\right)^2+$ [[ 2 ]] @canvas
@Algebrite.check(`[ 8; 4; 16; 2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
24\mathbin{:}3&=8 \\
\dfrac{1}{2}\cdot 8&=4, & \left(4\right)^2&=16 \\
3x^2+24x+50&=3\left(x^2+8x+16-16\right)+50 \\
&=3\left(x+4\right)^2+2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $5x^2-20x+14=5\left(x^2-$ [[ 4 ]] @canvas $x\right)+14$  \
$\dfrac{1}{2}\cdot 4 =$ [[ 2 ]] @canvas $,\qquad \left(2\right)^2 =$ [[ 4 ]] @canvas  \
$5\left(x^2-4x+4-4\right)+14=5\left(x-2\right)^2-$ [[ 6 ]] @canvas
@Algebrite.check(`[ 4; 2; 4; 6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
20\mathbin{:}5&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
5x^2-20x+14&=5\left(x^2-4x+4-4\right)+14 \\
&=5\left(x-2\right)^2-6
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
