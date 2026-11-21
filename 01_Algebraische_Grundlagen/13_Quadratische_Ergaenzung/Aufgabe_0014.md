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

tags: Quadratische Ergänzung, leicht, niedrig, Bestimmen

comment: Bestimme die fehlenden natürlichen Zahlen bei der quadratischen Ergänzung.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(\dfrac{1}{2}\cdot 4\right)^2 =$ [[ 4 ]] @canvas  \
$x^2+4x+1=x^2+4x+4-4+1=\left(x+$ [[ 2 ]] @canvas $\right)^2-$ [[ 3 ]] @canvas
@Algebrite.check(`[ 4; 2; 3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
x^2+4x+1&=x^2+4x+4-4+1 \\
&=\left(x+2\right)^2-3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(\dfrac{1}{2}\cdot 6\right)^2 =$ [[ 9 ]] @canvas  \
$x^2-6x+12=x^2-6x+9-9+12=\left(x-$ [[ 3 ]] @canvas $\right)^2+$ [[ 3 ]] @canvas
@Algebrite.check(`[ 9; 3; 3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 6&=3, & \left(3\right)^2&=9 \\
x^2-6x+12&=x^2-6x+9-9+12 \\
&=\left(x-3\right)^2+3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(\dfrac{1}{2}\cdot 8\right)^2 =$ [[ 16 ]] @canvas  \
$x^2+8x+9=x^2+8x+16-16+9=\left(x+$ [[ 4 ]] @canvas $\right)^2-$ [[ 7 ]] @canvas
@Algebrite.check(`[ 16; 4; 7 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 8&=4, & \left(4\right)^2&=16 \\
x^2+8x+9&=x^2+8x+16-16+9 \\
&=\left(x+4\right)^2-7
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(\dfrac{1}{2}\cdot 10\right)^2 =$ [[ 25 ]] @canvas  \
$x^2-10x+32=x^2-10x+25-25+32=\left(x-$ [[ 5 ]] @canvas $\right)^2+$ [[ 7 ]] @canvas
@Algebrite.check(`[ 25; 5; 7 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 10&=5, & \left(5\right)^2&=25 \\
x^2-10x+32&=x^2-10x+25-25+32 \\
&=\left(x-5\right)^2+7
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(\dfrac{1}{2}\cdot 14\right)^2 =$ [[ 49 ]] @canvas  \
$x^2+14x+54=x^2+14x+49-49+54=\left(x+$ [[ 7 ]] @canvas $\right)^2+$ [[ 5 ]] @canvas
@Algebrite.check(`[ 49; 7; 5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 14&=7, & \left(7\right)^2&=49 \\
x^2+14x+54&=x^2+14x+49-49+54 \\
&=\left(x+7\right)^2+5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(\dfrac{1}{2}\cdot 16\right)^2 =$ [[ 64 ]] @canvas  \
$x^2-16x+70=x^2-16x+64-64+70=\left(x-$ [[ 8 ]] @canvas $\right)^2+$ [[ 6 ]] @canvas
@Algebrite.check(`[ 64; 8; 6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 16&=8, & \left(8\right)^2&=64 \\
x^2-16x+70&=x^2-16x+64-64+70 \\
&=\left(x-8\right)^2+6
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
