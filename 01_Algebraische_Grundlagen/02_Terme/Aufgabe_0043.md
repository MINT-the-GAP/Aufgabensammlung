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
__$a)\;\;$__ $\dfrac{3}{4}\left(x+2\right)^2-0{,}5 =$ [[ 3/4x^2+3x+2,5 ]] @canvas
@Algebrite.check(`3/4*x^2+3*x+2.5`)
[[?]] @Explain
****************
$$
\dfrac{3}{4}\left(x+2\right)^2-0{,}5
=\dfrac{3}{4}\left(x^2+4x+4\right)-0{,}5
=\dfrac{3}{4}x^2+3x+3-0{,}5
=\dfrac{3}{4}x^2+3x+2{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $0{,}4\left(x-\dfrac{5}{2}\right)^2+\dfrac{1}{2} =$ [[ 0,4x^2-2x+3 ]] @canvas
@Algebrite.check(`0.4*x^2-2*x+3`)
[[?]] @Explain
****************
$$
0{,}4\left(x-\dfrac{5}{2}\right)^2+\dfrac{1}{2}
=0{,}4\left(x^2-5x+\dfrac{25}{4}\right)+\dfrac{1}{2}
=0{,}4x^2-2x+2{,}5+0{,}5
=0{,}4x^2-2x+3
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $1{,}5\left(x+\dfrac{2}{3}\right)\left(x-\dfrac{2}{3}\right)+\dfrac{2}{3} =$ [[ 1,5x^2 ]] @canvas
@Algebrite.check(`1.5*x^2`)
[[?]] @Explain
****************
$$
1{,}5\left(x+\dfrac{2}{3}\right)\left(x-\dfrac{2}{3}\right)+\dfrac{2}{3}
=1{,}5\left(x^2-\dfrac{4}{9}\right)+\dfrac{2}{3}
=1{,}5x^2-\dfrac{2}{3}+\dfrac{2}{3}
=1{,}5x^2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\dfrac{2}{5}\left(x+1{,}5\right)^2-0{,}4 =$ [[ 0,4x^2+1,2x+0,5 ]] @canvas
@Algebrite.check(`0.4*x^2+1.2*x+0.5`)
[[?]] @Explain
****************
$$
\dfrac{2}{5}\left(x+1{,}5\right)^2-0{,}4
=0{,}4\left(x^2+3x+2{,}25\right)-0{,}4
=0{,}4x^2+1{,}2x+0{,}9-0{,}4
=0{,}4x^2+1{,}2x+0{,}5
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $0{,}25\left(x-\dfrac{4}{5}\right)^2+0{,}04 =$ [[ 0,25x^2-0,4x+0,2 ]] @canvas
@Algebrite.check(`0.25*x^2-0.4*x+0.2`)
[[?]] @Explain
****************
$$
0{,}25\left(x-\dfrac{4}{5}\right)^2+0{,}04
=0{,}25\left(x^2-\dfrac{8}{5}x+\dfrac{16}{25}\right)+0{,}04
=0{,}25x^2-0{,}4x+0{,}16+0{,}04
=0{,}25x^2-0{,}4x+0{,}2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\dfrac{5}{4}\left(x-0{,}4\right)\left(x+0{,}4\right)+0{,}2 =$ [[ 1,25x^2 ]] @canvas
@Algebrite.check(`1.25*x^2`)
[[?]] @Explain
****************
$$
\dfrac{5}{4}\left(x-0{,}4\right)\left(x+0{,}4\right)+0{,}2
=1{,}25\left(x^2-0{,}16\right)+0{,}2
=1{,}25x^2-0{,}2+0{,}2
=1{,}25x^2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
