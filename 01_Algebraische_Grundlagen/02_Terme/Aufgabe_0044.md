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
__$a)\;\;$__ $1{,}2\left(x+\dfrac{3}{4}\right)^2-0{,}675 =$ [[ 1,2x^2+1,8x ]] @canvas
@Algebrite.check(`1.2*x^2+1.8*x`)
[[?]] @Explain
****************
$$
1{,}2\left(x+\dfrac{3}{4}\right)^2-0{,}675
=1{,}2\left(x^2+\dfrac{3}{2}x+\dfrac{9}{16}\right)-0{,}675
=1{,}2x^2+1{,}8x+0{,}675-0{,}675
=1{,}2x^2+1{,}8x
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\dfrac{3}{5}\left(x-1{,}5\right)^2+0{,}15 =$ [[ 0,6x^2-1,8x+1,5 ]] @canvas
@Algebrite.check(`0.6*x^2-1.8*x+1.5`)
[[?]] @Explain
****************
$$
\dfrac{3}{5}\left(x-1{,}5\right)^2+0{,}15
=0{,}6\left(x^2-3x+2{,}25\right)+0{,}15
=0{,}6x^2-1{,}8x+1{,}35+0{,}15
=0{,}6x^2-1{,}8x+1{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $0{,}8\left(x+\dfrac{5}{4}\right)\left(x-\dfrac{5}{4}\right)+1{,}25 =$ [[ 0,8x^2 ]] @canvas
@Algebrite.check(`0.8*x^2`)
[[?]] @Explain
****************
$$
0{,}8\left(x+\dfrac{5}{4}\right)\left(x-\dfrac{5}{4}\right)+1{,}25
=0{,}8\left(x^2-\dfrac{25}{16}\right)+1{,}25
=0{,}8x^2-1{,}25+1{,}25
=0{,}8x^2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\dfrac{7}{10}\left(x+0{,}5\right)^2-0{,}175 =$ [[ 0,7x^2+0,7x ]] @canvas
@Algebrite.check(`0.7*x^2+0.7*x`)
[[?]] @Explain
****************
$$
\dfrac{7}{10}\left(x+0{,}5\right)^2-0{,}175
=0{,}7\left(x^2+x+0{,}25\right)-0{,}175
=0{,}7x^2+0{,}7x+0{,}175-0{,}175
=0{,}7x^2+0{,}7x
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $0{,}6\left(x-\dfrac{2}{3}\right)^2+\dfrac{7}{30} =$ [[ 0,6x^2-0,8x+0,5 ]] @canvas
@Algebrite.check(`0.6*x^2-0.8*x+0.5`)
[[?]] @Explain
****************
$$
0{,}6\left(x-\dfrac{2}{3}\right)^2+\dfrac{7}{30}
=0{,}6\left(x^2-\dfrac{4}{3}x+\dfrac{4}{9}\right)+\dfrac{7}{30}
=0{,}6x^2-0{,}8x+\dfrac{4}{15}+\dfrac{7}{30}
=0{,}6x^2-0{,}8x+\dfrac{8}{30}+\dfrac{7}{30}
=0{,}6x^2-0{,}8x+0{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\dfrac{5}{8}\left(x-1{,}2\right)\left(x+1{,}2\right)+0{,}9 =$ [[ 0,625x^2 ]] @canvas
@Algebrite.check(`0.625*x^2`)
[[?]] @Explain
****************
$$
\dfrac{5}{8}\left(x-1{,}2\right)\left(x+1{,}2\right)+0{,}9
=0{,}625\left(x^2-1{,}44\right)+0{,}9
=0{,}625x^2-0{,}9+0{,}9
=0{,}625x^2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
