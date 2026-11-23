<!--
author: Martin Lommatzsch
version: 1.0.0
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

tags: Ableitungen, sehr leicht, sehr niedrig, Angeben

comment: Gib für sechs einfache Polynomfunktionen die erste Ableitung an.
-->

# Einfache Polynomfunktionen ableiten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" alt="Vernetzung: sehr niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" alt="Schwierigkeit: sehr leicht" width="120" height="30">

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=4x-3$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 4 ]] @canvas
@Algebrite.check(`4`)
[[?]] @Explain
*****************
$f'(x)=4$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=3x^2+2x-5$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ 6*x+2 ]] @canvas
@Algebrite.check(`6*x+2`)
[[?]] @Explain
*****************
$g'(x)=6x+2$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2x^3-4x^2+x+6$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 6*x^2-8*x+1 ]] @canvas
@Algebrite.check(`6*x^2-8*x+1`)
[[?]] @Explain
*****************
$h'(x)=6x^2-8x+1$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=-x^4+3x^2-7x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ -4*x^3+6*x-7 ]] @canvas
@Algebrite.check(`-4*x^3+6*x-7`)
[[?]] @Explain
*****************
$p'(x)=-4x^3+6x-7$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=2x^4-3x^3+5$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 8*x^3-9*x^2 ]] @canvas
@Algebrite.check(`8*x^3-9*x^2`)
[[?]] @Explain
*****************
$q'(x)=8x^3-9x^2$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=x^5-2x^3+6x-4$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 5*x^4-6*x^2+6 ]] @canvas
@Algebrite.check(`5*x^4-6*x^2+6`)
[[?]] @Explain
*****************
$r'(x)=5x^4-6x^2+6$
*****************

@resetter

@ADetails(`1=BE; Ableitungen`)

</div>

</section>
