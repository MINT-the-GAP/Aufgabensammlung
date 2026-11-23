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

tags: Ableitungen, leicht, niedrig, Angeben

comment: Schreibe Wurzelterme als Potenzen und gib die erste Ableitung an.
-->

# Wurzelterme als Potenzen schreiben und ableiten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

Für alle Funktionen gilt $x>0$.

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=6\sqrt{x}-2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 3*x^(-1/2) ]] @canvas
@Algebrite.check(`3*x^(-1/2)`)
[[?]] @Explain
*****************
$f'(x)=3x^{-\frac{1}{2}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=4\sqrt[4]{x}+3x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ x^(-3/4)+3 ]] @canvas
@Algebrite.check(`x^(-3/4)+3`)
[[?]] @Explain
*****************
$g'(x)=x^{-\frac{3}{4}}+3$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=2\sqrt[3]{x^2}-x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ 4/3*x^(-1/3)-1 ]] @canvas
@Algebrite.check(`4/3*x^(-1/3)-1`)
[[?]] @Explain
*****************
$h'(x)=\frac{4}{3}x^{-\frac{1}{3}}-1$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=\frac{4}{\sqrt{x}}+x^2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ -2*x^(-3/2)+2*x ]] @canvas
@Algebrite.check(`-2*x^(-3/2)+2*x`)
[[?]] @Explain
*****************
$p'(x)=-2x^{-\frac{3}{2}}+2x$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=3\sqrt{x^3}-\frac{6}{\sqrt[3]{x}}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 9/2*x^(1/2)+2*x^(-4/3) ]] @canvas
@Algebrite.check(`9/2*x^(1/2)+2*x^(-4/3)`)
[[?]] @Explain
*****************
$q'(x)=\frac{9}{2}x^{\frac{1}{2}}+2x^{-\frac{4}{3}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=2x\sqrt[3]{x^2}-4\sqrt[4]{x}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ 10/3*x^(2/3)-x^(-3/4) ]] @canvas
@Algebrite.check(`10/3*x^(2/3)-x^(-3/4)`)
[[?]] @Explain
*****************
$r'(x)=\frac{10}{3}x^{\frac{2}{3}}-x^{-\frac{3}{4}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

</section>
