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
**Bestimme** die fehlenden Zahlen. Ergänze mit der ersten Lücke jeweils die beiden Terme davor zu einem binomischen Quadrat.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+x+$ [[ 1/4 ]] @canvas $-\dfrac{1}{4}+0{,}75=\bigl(x+$ [[ 0,5 ]] @canvas $\bigr)^2+$ [[ 1/2 ]] @canvas
@Algebrite.check(`[ 1/4; 1/2; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1&=0{,}5, & \left(0{,}5\right)^2&=\dfrac{1}{4} \\
x^2+x+0{,}75&=x^2+x+\dfrac{1}{4}-\dfrac{1}{4}+0{,}75 \\
&=\left(x+0{,}5\right)^2+\dfrac{1}{2}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-1{,}5x+$ [[ 9/16 ]] @canvas $-\dfrac{9}{16}+0{,}8125=\bigl(x-$ [[ 0,75 ]] @canvas $\bigr)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 9/16; 3/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}5&=0{,}75, & \left(0{,}75\right)^2&=\dfrac{9}{16} \\
x^2-1{,}5x+0{,}8125&=x^2-1{,}5x+\dfrac{9}{16}-\dfrac{9}{16}+0{,}8125 \\
&=\left(x-0{,}75\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+0{,}8x+$ [[ 4/25 ]] @canvas $-\dfrac{4}{25}+0{,}36=\bigl(x+$ [[ 0,4 ]] @canvas $\bigr)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 4/25; 2/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 0{,}8&=0{,}4, & \left(0{,}4\right)^2&=\dfrac{4}{25} \\
x^2+0{,}8x+0{,}36&=x^2+0{,}8x+\dfrac{4}{25}-\dfrac{4}{25}+0{,}36 \\
&=\left(x+0{,}4\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-1{,}2x+$ [[ 9/25 ]] @canvas $-\dfrac{9}{25}+0{,}16=\bigl(x-$ [[ 0,6 ]] @canvas $\bigr)^2-$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 9/25; 3/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}2&=0{,}6, & \left(0{,}6\right)^2&=\dfrac{9}{25} \\
x^2-1{,}2x+0{,}16&=x^2-1{,}2x+\dfrac{9}{25}-\dfrac{9}{25}+0{,}16 \\
&=\left(x-0{,}6\right)^2-\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+2{,}5x+$ [[ 25/16 ]] @canvas $-\dfrac{25}{16}+1{,}8125=\bigl(x+$ [[ 1,25 ]] @canvas $\bigr)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 25/16; 5/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 2{,}5&=1{,}25, & \left(1{,}25\right)^2&=\dfrac{25}{16} \\
x^2+2{,}5x+1{,}8125&=x^2+2{,}5x+\dfrac{25}{16}-\dfrac{25}{16}+1{,}8125 \\
&=\left(x+1{,}25\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-1{,}4x+$ [[ 49/100 ]] @canvas $-\dfrac{49}{100}+0{,}69=\bigl(x-$ [[ 0,7 ]] @canvas $\bigr)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 49/100; 7/10; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1{,}4&=0{,}7, & \left(0{,}7\right)^2&=\dfrac{49}{100} \\
x^2-1{,}4x+0{,}69&=x^2-1{,}4x+\dfrac{49}{100}-\dfrac{49}{100}+0{,}69 \\
&=\left(x-0{,}7\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
