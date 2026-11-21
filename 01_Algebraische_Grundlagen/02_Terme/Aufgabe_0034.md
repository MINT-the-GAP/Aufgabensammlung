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

tags: Binomische Formeln, sehr leicht, sehr niedrig, Bestimmen

comment: Bestimme die ausmultiplizierte und zusammengefasste Form von Termen mit natürlichen Zahlen.

author: Martin Lommatzsch
-->

# Klammern auflösen und Terme zusammenfassen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" alt="Vernetzungsgrad 1" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" alt="Schwierigkeitsgrad 1" width="120" height="30">  \
**Bestimme** die ausmultiplizierte und zusammengefasste Form der folgenden Terme.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\left(x+3\right)^2 =$ [[ x^2+6x+9 ]] @canvas
@Algebrite.check(`x^2+6*x+9`)
[[?]] @Explain
****************
$$
\left(x+3\right)^2
=x^2+2\cdot 3x+3^2
=x^2+6x+9
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(x-4\right)^2 =$ [[ x^2-8x+16 ]] @canvas
@Algebrite.check(`x^2-8*x+16`)
[[?]] @Explain
****************
$$
\left(x-4\right)^2
=x^2-2\cdot 4x+4^2
=x^2-8x+16
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(x+6\right)\left(x-6\right) =$ [[ x^2-36 ]] @canvas
@Algebrite.check(`x^2-36`)
[[?]] @Explain
****************
$$
\left(x+6\right)\left(x-6\right)
=x^2-6^2
=x^2-36
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+2\right)^2+3 =$ [[ x^2+4x+7 ]] @canvas
@Algebrite.check(`x^2+4*x+7`)
[[?]] @Explain
****************
$$
\left(x+2\right)^2+3
=x^2+2\cdot 2x+2^2+3
=x^2+4x+4+3
=x^2+4x+7
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(x-5\right)\left(x+5\right)+4 =$ [[ x^2-21 ]] @canvas
@Algebrite.check(`x^2-21`)
[[?]] @Explain
****************
$$
\left(x-5\right)\left(x+5\right)+4
=x^2-5^2+4
=x^2-25+4
=x^2-21
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(x-3\right)^2-2 =$ [[ x^2-6x+7 ]] @canvas
@Algebrite.check(`x^2-6*x+7`)
[[?]] @Explain
****************
$$
\left(x-3\right)^2-2
=x^2-2\cdot 3x+3^2-2
=x^2-6x+9-2
=x^2-6x+7
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln`)

</div>

</section>
