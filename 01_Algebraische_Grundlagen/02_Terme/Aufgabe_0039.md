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

tags: Binomische Formeln, Dezimalzahlen, sehr leicht, niedrig, Bestimmen

comment: Bestimme die ausmultiplizierte und zusammengefasste Form von Termen mit Dezimalzahlen.

author: Martin Lommatzsch
-->

# Klammern auflösen und Terme zusammenfassen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" alt="Schwierigkeitsgrad 1" width="120" height="30">  \
**Bestimme** die ausmultiplizierte und zusammengefasste Form der folgenden Terme.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(x+0{,}5\right)^2 =$ [[ x^2+x+0,25 ]] @canvas
@Algebrite.check(`x^2+x+0.25`)
[[?]] @Explain
****************
$$
\left(x+0{,}5\right)^2
=x^2+2\cdot 0{,}5x+0{,}5^2
=x^2+x+0{,}25
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(x-0{,}2\right)^2 =$ [[ x^2-0,4x+0,04 ]] @canvas
@Algebrite.check(`x^2-0.4*x+0.04`)
[[?]] @Explain
****************
$$
\left(x-0{,}2\right)^2
=x^2-2\cdot 0{,}2x+0{,}2^2
=x^2-0{,}4x+0{,}04
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(x+0{,}3\right)\left(x-0{,}3\right) =$ [[ x^2-0,09 ]] @canvas
@Algebrite.check(`x^2-0.09`)
[[?]] @Explain
****************
$$
\left(x+0{,}3\right)\left(x-0{,}3\right)
=x^2-0{,}3^2
=x^2-0{,}09
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+1{,}5\right)^2 =$ [[ x^2+3x+2,25 ]] @canvas
@Algebrite.check(`x^2+3*x+2.25`)
[[?]] @Explain
****************
$$
\left(x+1{,}5\right)^2
=x^2+2\cdot 1{,}5x+1{,}5^2
=x^2+3x+2{,}25
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(x-0{,}4\right)\left(x+0{,}4\right) =$ [[ x^2-0,16 ]] @canvas
@Algebrite.check(`x^2-0.16`)
[[?]] @Explain
****************
$$
\left(x-0{,}4\right)\left(x+0{,}4\right)
=x^2-0{,}4^2
=x^2-0{,}16
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(x-0{,}5\right)^2 =$ [[ x^2-x+0,25 ]] @canvas
@Algebrite.check(`x^2-x+0.25`)
[[?]] @Explain
****************
$$
\left(x-0{,}5\right)^2
=x^2-2\cdot 0{,}5x+0{,}5^2
=x^2-x+0{,}25
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

</section>
