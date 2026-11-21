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
__$a)\;\;$__ $\left(x+\dfrac{3}{2}\right)^2 =$ [[ x^2+3x+9/4 ]] @canvas
@Algebrite.check(`x^2+3*x+9/4`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{3}{2}\right)^2
=x^2+2\cdot\dfrac{3}{2}x+\left(\dfrac{3}{2}\right)^2
=x^2+3x+\dfrac{9}{4}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\left(x-\dfrac{2}{5}\right)^2 =$ [[ x^2-4/5x+4/25 ]] @canvas
@Algebrite.check(`x^2-4/5*x+4/25`)
[[?]] @Explain
****************
$$
\left(x-\dfrac{2}{5}\right)^2
=x^2-2\cdot\dfrac{2}{5}x+\left(\dfrac{2}{5}\right)^2
=x^2-\dfrac{4}{5}x+\dfrac{4}{25}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\left(x+\dfrac{3}{4}\right)\left(x-\dfrac{3}{4}\right) =$ [[ x^2-9/16 ]] @canvas
@Algebrite.check(`x^2-9/16`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{3}{4}\right)\left(x-\dfrac{3}{4}\right)
=x^2-\left(\dfrac{3}{4}\right)^2
=x^2-\dfrac{9}{16}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\left(x+\dfrac{1}{2}\right)^2+\dfrac{1}{4} =$ [[ x^2+x+1/2 ]] @canvas
@Algebrite.check(`x^2+x+1/2`)
[[?]] @Explain
****************
$$
\left(x+\dfrac{1}{2}\right)^2+\dfrac{1}{4}
=x^2+x+\dfrac{1}{4}+\dfrac{1}{4}
=x^2+x+\dfrac{1}{2}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\left(x-\dfrac{2}{3}\right)\left(x+\dfrac{2}{3}\right)-\dfrac{1}{9} =$ [[ x^2-5/9 ]] @canvas
@Algebrite.check(`x^2-5/9`)
[[?]] @Explain
****************
$$
\left(x-\dfrac{2}{3}\right)\left(x+\dfrac{2}{3}\right)-\dfrac{1}{9}
=x^2-\dfrac{4}{9}-\dfrac{1}{9}
=x^2-\dfrac{5}{9}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\left(x-\dfrac{1}{4}\right)^2+\dfrac{3}{8} =$ [[ x^2-1/2x+7/16 ]] @canvas
@Algebrite.check(`x^2-1/2*x+7/16`)
[[?]] @Explain
****************
$$
\left(x-\dfrac{1}{4}\right)^2+\dfrac{3}{8}
=x^2-\dfrac{1}{2}x+\dfrac{1}{16}+\dfrac{3}{8}
=x^2-\dfrac{1}{2}x+\dfrac{1}{16}+\dfrac{6}{16}
=x^2-\dfrac{1}{2}x+\dfrac{7}{16}
$$
****************

@resetter

@ADetails(`1=BE; Terme, Binomische Formeln, Bruchrechnung`)

</div>

</section>
