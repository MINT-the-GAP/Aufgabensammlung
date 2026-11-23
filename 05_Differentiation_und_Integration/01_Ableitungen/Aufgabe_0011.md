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

tags: Ableitungen, leicht, sehr niedrig, Angeben

comment: Gib die erste Ableitung von Funktionstermen mit negativen Exponenten und Bruchkoeffizienten an.
-->

# Terme mit negativen Exponenten und Bruchkoeffizienten ableiten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" alt="Vernetzung: sehr niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

Für alle Funktionen gilt $x\in\mathbb{R}\setminus\{0\}$.

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=-\frac{3}{5}x^{-1}+2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 3/5*x^(-2) ]] @canvas
@Algebrite.check(`3/5*x^(-2)`)
[[?]] @Explain
*****************
$f'(x)=\frac{3}{5}x^{-2}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\frac{1}{3}x^{-2}+\frac{1}{2}x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ -2/3*x^(-3)+1/2 ]] @canvas
@Algebrite.check(`-2/3*x^(-3)+1/2`)
[[?]] @Explain
*****************
$g'(x)=-\frac{2}{3}x^{-3}+\frac{1}{2}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\frac{2}{5}x^{-3}-x^2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ -6/5*x^(-4)-2*x ]] @canvas
@Algebrite.check(`-6/5*x^(-4)-2*x`)
[[?]] @Explain
*****************
$h'(x)=-\frac{6}{5}x^{-4}-2x$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\frac{3}{4}x^2-\frac{1}{3}x^{-2}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ 3/2*x+2/3*x^(-3) ]] @canvas
@Algebrite.check(`3/2*x+2/3*x^(-3)`)
[[?]] @Explain
*****************
$p'(x)=\frac{3}{2}x+\frac{2}{3}x^{-3}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=\frac{1}{2}x^{-4}-\frac{2}{5}x^{-1}+1$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ -2*x^(-5)+2/5*x^(-2) ]] @canvas
@Algebrite.check(`-2*x^(-5)+2/5*x^(-2)`)
[[?]] @Explain
*****************
$q'(x)=-2x^{-5}+\frac{2}{5}x^{-2}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\frac{2}{3}x^3+\frac{1}{5}x^{-5}-\frac{3}{4}x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 2*x^2-x^(-6)-3/4 ]] @canvas
@Algebrite.check(`2*x^2-x^(-6)-3/4`)
[[?]] @Explain
*****************
$r'(x)=2x^{2}-x^{-6}-\frac{3}{4}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

</section>
