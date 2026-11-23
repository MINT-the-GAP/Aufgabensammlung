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

comment: Vereinfache gemischte Wurzel- und Potenzterme und gib die erste Ableitung an.
-->

# Potenzgesetze vor dem Ableiten anwenden

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzung: niedrig" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeit: leicht" width="120" height="30">

Für alle Funktionen gilt $x>0$.

**Gib** jeweils die erste Ableitung **an**.

<section class="dynFlex" data-columns="2" data-min="30%">

<div class="flex-child">

__$a)$__ $f(x)=3\left(x^{\frac{2}{3}}\right)^2-5$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$f'(x)=$ [[ 4*x^(1/3) ]] @canvas
@Algebrite.check(`4*x^(1/3)`)
[[?]] @Explain
*****************
$f'(x)=4x^{\frac{1}{3}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$b)$__ $g(x)=\frac{2x^{\frac{1}{2}}}{x^{\frac{3}{2}}}+3x$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$g'(x)=$ [[ -2*x^(-2)+3 ]] @canvas
@Algebrite.check(`-2*x^(-2)+3`)
[[?]] @Explain
*****************
$g'(x)=-2x^{-2}+3$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$c)$__ $h(x)=\frac{2}{x\sqrt[3]{x}}+x^2$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$h'(x)=$ [[ -8/3*x^(-7/3)+2*x ]] @canvas
@Algebrite.check(`-8/3*x^(-7/3)+2*x`)
[[?]] @Explain
*****************
$h'(x)=-\frac{8}{3}x^{-\frac{7}{3}}+2x$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$d)$__ $p(x)=4\left(\sqrt[4]{x}\right)^3-2x^{-\frac{1}{2}}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$p'(x)=$ [[ 3*x^(-1/4)+x^(-3/2) ]] @canvas
@Algebrite.check(`3*x^(-1/4)+x^(-3/2)`)
[[?]] @Explain
*****************
$p'(x)=3x^{-\frac{1}{4}}+x^{-\frac{3}{2}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$e)$__ $q(x)=3\sqrt{x}\cdot\sqrt[3]{x}+\frac{2}{x^{\frac{3}{2}}}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$q'(x)=$ [[ 5/2*x^(-1/6)-3*x^(-5/2) ]] @canvas
@Algebrite.check(`5/2*x^(-1/6)-3*x^(-5/2)`)
[[?]] @Explain
*****************
$q'(x)=\frac{5}{2}x^{-\frac{1}{6}}-3x^{-\frac{5}{2}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

<div class="flex-child">

__$f)$__ $r(x)=\frac{2\sqrt[3]{x^2}}{x^{\frac{3}{2}}}-\sqrt[4]{x^3}$

<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->
$r'(x)=$ [[ -5/3*x^(-11/6)-3/4*x^(-1/4) ]] @canvas
@Algebrite.check(`-5/3*x^(-11/6)-3/4*x^(-1/4)`)
[[?]] @Explain
*****************
$r'(x)=-\frac{5}{3}x^{-\frac{11}{6}}-\frac{3}{4}x^{-\frac{1}{4}}$
*****************

@resetter

@ADetails(`1=BE; Ableitungen, Potenzen`)

</div>

</section>
