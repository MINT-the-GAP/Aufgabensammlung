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

tags: Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen, leicht, niedrig, Bestimmen

comment: Bestimme die fehlenden Brüche und Dezimalzahlen bei der quadratischen Ergänzung.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(\dfrac{1}{2}\cdot 0{,}5\right)^2 =$ [[ 1/16 ]] @canvas  \
$x^2+0{,}5x+0{,}3125=x^2+0{,}5x+\dfrac{1}{16}-\dfrac{1}{16}+0{,}3125=\left(x+$ [[ 0,25 ]] @canvas $\right)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 1/16; 1/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}5&=0{,}25, & \left(0{,}25\right)^2&=\dfrac{1}{16} \\
x^2+0{,}5x+0{,}3125&=x^2+0{,}5x+\dfrac{1}{16}-\dfrac{1}{16}+0{,}3125 \\
&=\left(x+0{,}25\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(\dfrac{1}{2}\cdot 0{,}75\right)^2 =$ [[ 9/64 ]] @canvas  \
$x^2-0{,}75x+0{,}265625=x^2-0{,}75x+\dfrac{9}{64}-\dfrac{9}{64}+0{,}265625=\left(x-$ [[ 0,375 ]] @canvas $\right)^2+$ [[ 1/8 ]] @canvas
@Algebrite.check(`[ 9/64; 3/8; 1/8 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}75&=0{,}375, & \left(0{,}375\right)^2&=\dfrac{9}{64} \\
x^2-0{,}75x+0{,}265625&=x^2-0{,}75x+\dfrac{9}{64}-\dfrac{9}{64}+0{,}265625 \\
&=\left(x-0{,}375\right)^2+\dfrac{1}{8}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}6\right)^2 =$ [[ 16/25 ]] @canvas  \
$x^2+1{,}6x+0{,}84=x^2+1{,}6x+\dfrac{16}{25}-\dfrac{16}{25}+0{,}84=\left(x+$ [[ 0,8 ]] @canvas $\right)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 16/25; 4/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}6&=0{,}8, & \left(0{,}8\right)^2&=\dfrac{16}{25} \\
x^2+1{,}6x+0{,}84&=x^2+1{,}6x+\dfrac{16}{25}-\dfrac{16}{25}+0{,}84 \\
&=\left(x+0{,}8\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}25\right)^2 =$ [[ 25/64 ]] @canvas  \
$x^2-1{,}25x+0{,}140625=x^2-1{,}25x+\dfrac{25}{64}-\dfrac{25}{64}+0{,}140625=\left(x-$ [[ 0,625 ]] @canvas $\right)^2-$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 25/64; 5/8; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}25&=0{,}625, & \left(0{,}625\right)^2&=\dfrac{25}{64} \\
x^2-1{,}25x+0{,}140625&=x^2-1{,}25x+\dfrac{25}{64}-\dfrac{25}{64}+0{,}140625 \\
&=\left(x-0{,}625\right)^2-\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(\dfrac{1}{2}\cdot 2{,}4\right)^2 =$ [[ 36/25 ]] @canvas  \
$x^2+2{,}4x+1{,}69=x^2+2{,}4x+\dfrac{36}{25}-\dfrac{36}{25}+1{,}69=\left(x+$ [[ 1,2 ]] @canvas $\right)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 36/25; 6/5; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2{,}4&=1{,}2, & \left(1{,}2\right)^2&=\dfrac{36}{25} \\
x^2+2{,}4x+1{,}69&=x^2+2{,}4x+\dfrac{36}{25}-\dfrac{36}{25}+1{,}69 \\
&=\left(x+1{,}2\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(\dfrac{1}{2}\cdot 1{,}8\right)^2 =$ [[ 81/100 ]] @canvas  \
$x^2-1{,}8x+0{,}61=x^2-1{,}8x+\dfrac{81}{100}-\dfrac{81}{100}+0{,}61=\left(x-$ [[ 0,9 ]] @canvas $\right)^2-$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 81/100; 9/10; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}8&=0{,}9, & \left(0{,}9\right)^2&=\dfrac{81}{100} \\
x^2-1{,}8x+0{,}61&=x^2-1{,}8x+\dfrac{81}{100}-\dfrac{81}{100}+0{,}61 \\
&=\left(x-0{,}9\right)^2-\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
