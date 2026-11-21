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

tags: Quadratische Ergänzung, Binomische Formeln, Bruchrechnung, Dezimalzahlen, leicht, niedrig, Bestimmen

comment: Bestimme fehlende Brüche und Dezimalzahlen in binomischen Quadraten.

author: Martin Lommatzsch
-->

# Quadratische Terme ergänzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen stimmen.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+1{,}0x+$ [[ 1/4 ]] @canvas $=\left(x+0{,}5\right)^2$
@Algebrite.check([ 1/4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+0{,}5\right)^2&=x^2+2\cdot 0{,}5x+0{,}5^2 \\
&=x^2+1{,}0x+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-\dfrac{3}{2}x+0{,}5625=\left(x-$ [[ 3/4 ]] @canvas $\right)^2$
@Algebrite.check([ 3/4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{3}{4}\right)^2&=x^2-2\cdot\dfrac{3}{4}x+\left(\dfrac{3}{4}\right)^2 \\
&=x^2-\dfrac{3}{2}x+0{,}5625
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+2{,}5x+\dfrac{25}{16}=\left(x+$ [[ 1,25 ]] @canvas $\right)^2$
@Algebrite.check([ 1.25 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+1{,}25\right)^2&=x^2+2\cdot 1{,}25x+1{,}25^2 \\
&=x^2+2{,}5x+\dfrac{25}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-\dfrac{4}{5}x+0{,}16=\left(x-$ [[ 2/5 ]] @canvas $\right)^2$
@Algebrite.check([ 2/5 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{2}{5}\right)^2&=x^2-2\cdot\dfrac{2}{5}x+\left(\dfrac{2}{5}\right)^2 \\
&=x^2-\dfrac{4}{5}x+0{,}16
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+1{,}2x+$ [[ 9/25 ]] @canvas $=\left(x+$ [[ 0,6 ]] @canvas $\right)^2$
@Algebrite.check(`[ 9/25; 0.6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+0{,}6\right)^2&=x^2+2\cdot 0{,}6x+0{,}6^2 \\
&=x^2+1{,}2x+\dfrac{9}{25}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{7}{5}x+0{,}49=\left(x-$ [[ 0,7 ]] @canvas $\right)^2$
@Algebrite.check([ 0.7 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-0{,}7\right)^2&=x^2-2\cdot 0{,}7x+0{,}7^2 \\
&=x^2-\dfrac{7}{5}x+0{,}49
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
