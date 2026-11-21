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

tags: Binomische Formeln, Bruchrechnung, Dezimalzahlen, leicht, normal, Bestimmen

comment: Bestimme die ausmultiplizierte und zusammengefasste Form von Termen mit Brüchen und Dezimalzahlen.

author: Martin Lommatzsch
-->

# Klammern auflösen und Terme zusammenfassen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzungsgrad 3" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die ausmultiplizierte und zusammengefasste Form der folgenden Terme.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(x+\dfrac{1}{2}\right)^2+0{,}25 =$ [[ x^2+x+0,5 ]] @canvas
@Algebrite.check(`x^2+x+0.5`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{1}{2}\right)^2+0{,}25
=x^2+x+\dfrac{1}{4}+0{,}25
=x^2+x+0{,}25+0{,}25
=x^2+x+0{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(x-0{,}5\right)^2+\dfrac{1}{4} =$ [[ x^2-x+0,5 ]] @canvas
@Algebrite.check(`x^2-x+0.5`)
[[?]] @Explain
****************
$$
\left(x-0{,}5\right)^2+\dfrac{1}{4}
=x^2-x+0{,}25+\dfrac{1}{4}
=x^2-x+0{,}25+0{,}25
=x^2-x+0{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(x+\dfrac{3}{2}\right)\left(x-\dfrac{3}{2}\right)+0{,}25 =$ [[ x^2-2 ]] @canvas
@Algebrite.check(`x^2-2`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{3}{2}\right)\left(x-\dfrac{3}{2}\right)+0{,}25
=x^2-\dfrac{9}{4}+0{,}25
=x^2-2{,}25+0{,}25
=x^2-2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+1{,}2\right)^2-\dfrac{11}{25} =$ [[ x^2+2,4x+1 ]] @canvas
@Algebrite.check(`x^2+2.4*x+1`)
[[?]] @Explain
****************
$$
\left(x+1{,}2\right)^2-\dfrac{11}{25}
=x^2+2{,}4x+1{,}44-\dfrac{11}{25}
=x^2+2{,}4x+\dfrac{36}{25}-\dfrac{11}{25}
=x^2+2{,}4x+1
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\dfrac{1}{2}\left(x+2\right)^2+0{,}5 =$ [[ 1/2x^2+2x+2,5 ]] @canvas
@Algebrite.check(`1/2*x^2+2*x+2.5`)
[[?]] @Explain
****************
$$
\dfrac{1}{2}\left(x+2\right)^2+0{,}5
=\dfrac{1}{2}\left(x^2+4x+4\right)+0{,}5
=\dfrac{1}{2}x^2+2x+2+0{,}5
=\dfrac{1}{2}x^2+2x+2{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $0{,}5\left(x-3\right)^2+\dfrac{1}{2} =$ [[ 0,5x^2-3x+5 ]] @canvas
@Algebrite.check(`0.5*x^2-3*x+5`)
[[?]] @Explain
****************
$$
0{,}5\left(x-3\right)^2+\dfrac{1}{2}
=0{,}5\left(x^2-6x+9\right)+\dfrac{1}{2}
=0{,}5x^2-3x+4{,}5+0{,}5
=0{,}5x^2-3x+5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
