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
__$a)\;\;$__ $\left(x+1{,}2\right)^2 =$ [[ x^2+2,4x+1,44 ]] @canvas
@Algebrite.check(`x^2+2.4*x+1.44`)
[[?]] @Explain
****************
$$
\left(x+1{,}2\right)^2
=x^2+2\cdot 1{,}2x+1{,}2^2
=x^2+2{,}4x+1{,}44
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(x-0{,}7\right)^2 =$ [[ x^2-1,4x+0,49 ]] @canvas
@Algebrite.check(`x^2-1.4*x+0.49`)
[[?]] @Explain
****************
$$
\left(x-0{,}7\right)^2
=x^2-2\cdot 0{,}7x+0{,}7^2
=x^2-1{,}4x+0{,}49
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(x+1{,}1\right)\left(x-1{,}1\right) =$ [[ x^2-1,21 ]] @canvas
@Algebrite.check(`x^2-1.21`)
[[?]] @Explain
****************
$$
\left(x+1{,}1\right)\left(x-1{,}1\right)
=x^2-1{,}1^2
=x^2-1{,}21
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+0{,}8\right)^2+0{,}2 =$ [[ x^2+1,6x+0,84 ]] @canvas
@Algebrite.check(`x^2+1.6*x+0.84`)
[[?]] @Explain
****************
$$
\left(x+0{,}8\right)^2+0{,}2
=x^2+1{,}6x+0{,}64+0{,}2
=x^2+1{,}6x+0{,}84
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(x-0{,}6\right)\left(x+0{,}6\right)-0{,}4 =$ [[ x^2-0,76 ]] @canvas
@Algebrite.check(`x^2-0.76`)
[[?]] @Explain
****************
$$
\left(x-0{,}6\right)\left(x+0{,}6\right)-0{,}4
=x^2-0{,}36-0{,}4
=x^2-0{,}76
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(x-1{,}5\right)^2+0{,}5 =$ [[ x^2-3x+2,75 ]] @canvas
@Algebrite.check(`x^2-3*x+2.75`)
[[?]] @Explain
****************
$$
\left(x-1{,}5\right)^2+0{,}5
=x^2-3x+2{,}25+0{,}5
=x^2-3x+2{,}75
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

</section>
