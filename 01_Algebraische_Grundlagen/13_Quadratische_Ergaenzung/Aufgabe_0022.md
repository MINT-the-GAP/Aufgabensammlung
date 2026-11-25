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
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen für alle $x$ stimmen.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $2\left(x^2+8x+16-16\right)+40=2\bigl(x+$ [[ 4 ]] @canvas $\bigr)^2+$ [[ 8 ]] @canvas
@Algebrite.check(`[ 4; 8 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
16\mathbin{:}2&=8 \\
\dfrac{1}{2}\cdot 8&=4, & \left(4\right)^2&=16 \\
2x^2+16x+40&=2\left(x^2+8x+16-16\right)+40 \\
&=2\left(x+4\right)^2+8
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $3\left(x^2-4x+4-4\right)+5=3\bigl(x-$ [[ 2 ]] @canvas $\bigr)^2-$ [[ 7 ]] @canvas
@Algebrite.check(`[ 2; 7 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
12\mathbin{:}3&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
3x^2-12x+5&=3\left(x^2-4x+4-4\right)+5 \\
&=3\left(x-2\right)^2-7
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $4\left(x^2+6x+9-9\right)+45=4\bigl(x+$ [[ 3 ]] @canvas $\bigr)^2+$ [[ 9 ]] @canvas
@Algebrite.check(`[ 3; 9 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
24\mathbin{:}4&=6 \\
\dfrac{1}{2}\cdot 6&=3, & \left(3\right)^2&=9 \\
4x^2+24x+45&=4\left(x^2+6x+9-9\right)+45 \\
&=4\left(x+3\right)^2+9
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $5\left(x^2-2x+1-1\right)+2=5\bigl(x-$ [[ 1 ]] @canvas $\bigr)^2-$ [[ 3 ]] @canvas
@Algebrite.check(`[ 1; 3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
10\mathbin{:}5&=2 \\
\dfrac{1}{2}\cdot 2&=1, & \left(1\right)^2&=1 \\
5x^2-10x+2&=5\left(x^2-2x+1-1\right)+2 \\
&=5\left(x-1\right)^2-3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $6\left(x^2+4x+4-4\right)+30=6\bigl(x+$ [[ 2 ]] @canvas $\bigr)^2+$ [[ 6 ]] @canvas
@Algebrite.check(`[ 2; 6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
24\mathbin{:}6&=4 \\
\dfrac{1}{2}\cdot 4&=2, & \left(2\right)^2&=4 \\
6x^2+24x+30&=6\left(x^2+4x+4-4\right)+30 \\
&=6\left(x+2\right)^2+6
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $3\left(x^2-10x+25-25\right)+70=3\bigl(x-$ [[ 5 ]] @canvas $\bigr)^2-$ [[ 5 ]] @canvas
@Algebrite.check(`[ 5; 5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
30\mathbin{:}3&=10 \\
\dfrac{1}{2}\cdot 10&=5, & \left(5\right)^2&=25 \\
3x^2-30x+70&=3\left(x^2-10x+25-25\right)+70 \\
&=3\left(x-5\right)^2-5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung`)

</div>

</section>
