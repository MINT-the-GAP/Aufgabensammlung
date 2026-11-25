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
**Bestimme** die fehlenden Zahlen. Ergänze mit der ersten Lücke jeweils die beiden Terme davor zu einem binomischen Quadrat.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+2x+$ [[ 1 ]] @canvas $-1+3=\bigl(x+$ [[ 1 ]] @canvas $\bigr)^2+$ [[ 2 ]] @canvas
@Algebrite.check(`[ 1; 1; 2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2&=1, & \left(1\right)^2&=1 \\
x^2+2x+3&=x^2+2x+1-1+3 \\
&=\left(x+1\right)^2+2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-4x+$ [[ 4 ]] @canvas $-4+7=\bigl(x-$ [[ 2 ]] @canvas $\bigr)^2+$ [[ 3 ]] @canvas
@Algebrite.check(`[ 4; 2; 3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
x^2-4x+7&=x^2-4x+4-4+7 \\
&=\left(x-2\right)^2+3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+6x+$ [[ 9 ]] @canvas $-9+5=\bigl(x+$ [[ 3 ]] @canvas $\bigr)^2-$ [[ 4 ]] @canvas
@Algebrite.check(`[ 9; 3; 4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 6&=3, & \left(3\right)^2&=9 \\
x^2+6x+5&=x^2+6x+9-9+5 \\
&=\left(x+3\right)^2-4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-8x+$ [[ 16 ]] @canvas $-16+20=\bigl(x-$ [[ 4 ]] @canvas $\bigr)^2+$ [[ 4 ]] @canvas
@Algebrite.check(`[ 16; 4; 4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 8&=4, & \left(4\right)^2&=16 \\
x^2-8x+20&=x^2-8x+16-16+20 \\
&=\left(x-4\right)^2+4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+10x+$ [[ 25 ]] @canvas $-25+30=\bigl(x+$ [[ 5 ]] @canvas $\bigr)^2+$ [[ 5 ]] @canvas
@Algebrite.check(`[ 25; 5; 5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 10&=5, & \left(5\right)^2&=25 \\
x^2+10x+30&=x^2+10x+25-25+30 \\
&=\left(x+5\right)^2+5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-12x+$ [[ 36 ]] @canvas $-36+40=\bigl(x-$ [[ 6 ]] @canvas $\bigr)^2+$ [[ 4 ]] @canvas
@Algebrite.check(`[ 36; 6; 4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 12&=6, & \left(6\right)^2&=36 \\
x^2-12x+40&=x^2-12x+36-36+40 \\
&=\left(x-6\right)^2+4
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
