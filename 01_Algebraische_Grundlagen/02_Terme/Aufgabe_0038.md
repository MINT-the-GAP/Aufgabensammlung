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

tags: Binomische Formeln, Bruchrechnung, sehr leicht, niedrig, Bestimmen

comment: Bestimme die ausmultiplizierte und zusammengefasste Form von Termen mit Brüchen.

author: Martin Lommatzsch
-->

# Klammern auflösen und Terme zusammenfassen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" alt="Schwierigkeitsgrad 1" width="120" height="30">  \
**Bestimme** die ausmultiplizierte und zusammengefasste Form der folgenden Terme.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\dfrac{1}{2}\left(x+2\right)^2 =$ [[ 1/2x^2+2x+2 ]] @canvas
@Algebrite.check(`1/2*x^2+2*x+2`)
[[?]] @Explain
****************
$$
\dfrac{1}{2}\left(x+2\right)^2
=\dfrac{1}{2}\left(x^2+4x+4\right)
=\dfrac{1}{2}x^2+2x+2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\dfrac{3}{4}\left(x-2\right)^2 =$ [[ 3/4x^2-3x+3 ]] @canvas
@Algebrite.check(`3/4*x^2-3*x+3`)
[[?]] @Explain
****************
$$
\dfrac{3}{4}\left(x-2\right)^2
=\dfrac{3}{4}\left(x^2-4x+4\right)
=\dfrac{3}{4}x^2-3x+3
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\dfrac{2}{3}\left(x+3\right)\left(x-3\right) =$ [[ 2/3x^2-6 ]] @canvas
@Algebrite.check(`2/3*x^2-6`)
[[?]] @Explain
****************
$$
\dfrac{2}{3}\left(x+3\right)\left(x-3\right)
=\dfrac{2}{3}\left(x^2-9\right)
=\dfrac{2}{3}x^2-6
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+\dfrac{5}{2}\right)^2-\dfrac{1}{4} =$ [[ x^2+5x+6 ]] @canvas
@Algebrite.check(`x^2+5*x+6`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{5}{2}\right)^2-\dfrac{1}{4}
=x^2+5x+\dfrac{25}{4}-\dfrac{1}{4}
=x^2+5x+\dfrac{24}{4}
=x^2+5x+6
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(x-\dfrac{3}{2}\right)\left(x+\dfrac{3}{2}\right)+\dfrac{1}{4} =$ [[ x^2-2 ]] @canvas
@Algebrite.check(`x^2-2`)
[[?]] @Explain
****************
$$
\left(x-\dfrac{3}{2}\right)\left(x+\dfrac{3}{2}\right)+\dfrac{1}{4}
=x^2-\dfrac{9}{4}+\dfrac{1}{4}
=x^2-\dfrac{8}{4}
=x^2-2
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\dfrac{3}{2}\left(x-\dfrac{1}{3}\right)^2-\dfrac{1}{6} =$ [[ 3/2x^2-x ]] @canvas
@Algebrite.check(`3/2*x^2-x`)
[[?]] @Explain
****************
$$
\dfrac{3}{2}\left(x-\dfrac{1}{3}\right)^2-\dfrac{1}{6}
=\dfrac{3}{2}\left(x^2-\dfrac{2}{3}x+\dfrac{1}{9}\right)-\dfrac{1}{6}
=\dfrac{3}{2}x^2-x+\dfrac{1}{6}-\dfrac{1}{6}
=\dfrac{3}{2}x^2-x
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

</section>
