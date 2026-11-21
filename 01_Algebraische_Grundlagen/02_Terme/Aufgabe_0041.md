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
__$a)\;\;$__ $2\left(x+0{,}5\right)^2 =$ [[ 2x^2+2x+0,5 ]] @canvas
@Algebrite.check(`2*x^2+2*x+0.5`)
[[?]] @Explain
****************
$$
2\left(x+0{,}5\right)^2
=2\left(x^2+x+0{,}25\right)
=2x^2+2x+0{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $0{,}5\left(x-2\right)^2 =$ [[ 0,5x^2-2x+2 ]] @canvas
@Algebrite.check(`0.5*x^2-2*x+2`)
[[?]] @Explain
****************
$$
0{,}5\left(x-2\right)^2
=0{,}5\left(x^2-4x+4\right)
=0{,}5x^2-2x+2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $0{,}25\left(x+4\right)\left(x-4\right) =$ [[ 0,25x^2-4 ]] @canvas
@Algebrite.check(`0.25*x^2-4`)
[[?]] @Explain
****************
$$
0{,}25\left(x+4\right)\left(x-4\right)
=0{,}25\left(x^2-16\right)
=0{,}25x^2-4
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $1{,}5\left(x+0{,}4\right)^2+0{,}1 =$ [[ 1,5x^2+1,2x+0,34 ]] @canvas
@Algebrite.check(`1.5*x^2+1.2*x+0.34`)
[[?]] @Explain
****************
$$
1{,}5\left(x+0{,}4\right)^2+0{,}1
=1{,}5\left(x^2+0{,}8x+0{,}16\right)+0{,}1
=1{,}5x^2+1{,}2x+0{,}24+0{,}1
=1{,}5x^2+1{,}2x+0{,}34
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $0{,}4\left(x-1{,}5\right)\left(x+1{,}5\right)-0{,}1 =$ [[ 0,4x^2-1 ]] @canvas
@Algebrite.check(`0.4*x^2-1`)
[[?]] @Explain
****************
$$
0{,}4\left(x-1{,}5\right)\left(x+1{,}5\right)-0{,}1
=0{,}4\left(x^2-2{,}25\right)-0{,}1
=0{,}4x^2-0{,}9-0{,}1
=0{,}4x^2-1
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $0{,}2\left(x-2{,}5\right)^2+0{,}5 =$ [[ 0,2x^2-x+1,75 ]] @canvas
@Algebrite.check(`0.2*x^2-x+1.75`)
[[?]] @Explain
****************
$$
0{,}2\left(x-2{,}5\right)^2+0{,}5
=0{,}2\left(x^2-5x+6{,}25\right)+0{,}5
=0{,}2x^2-x+1{,}25+0{,}5
=0{,}2x^2-x+1{,}75
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Dezimalzahlen`)

</div>

</section>
