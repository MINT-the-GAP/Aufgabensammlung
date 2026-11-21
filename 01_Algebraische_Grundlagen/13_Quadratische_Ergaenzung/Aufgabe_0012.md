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

tags: Quadratische Ergänzung, Binomische Formeln, Bruchrechnung, Dezimalzahlen, leicht, niedrig, Bestimmen

comment: Bestimme fehlende Brüche und Dezimalzahlen in binomischen Quadraten.

author: Martin Lommatzsch
-->

# Quadratische Terme ergänzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen stimmen.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+$ [[ 3/2 ]] @canvas $x+0{,}5625=\left(x+0{,}75\right)^2$
@Algebrite.check([ 3/2 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+0{,}75\right)^2&=x^2+2\cdot 0{,}75x+0{,}75^2 \\
&=x^2+\dfrac{3}{2}x+0{,}5625
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-$ [[ 2,4 ]] @canvas $x+\dfrac{36}{25}=\left(x-\dfrac{6}{5}\right)^2$
@Algebrite.check([ 2.4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{6}{5}\right)^2&=x^2-2\cdot\dfrac{6}{5}x+\left(\dfrac{6}{5}\right)^2 \\
&=x^2-2{,}4x+\dfrac{36}{25}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+$ [[ 5/2 ]] @canvas $x+$ [[ 25/16 ]] @canvas $=\left(x+1{,}25\right)^2$
@Algebrite.check(`[ 5/2; 25/16 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+1{,}25\right)^2&=x^2+2\cdot 1{,}25x+1{,}25^2 \\
&=x^2+\dfrac{5}{2}x+\dfrac{25}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-$ [[ 1,6 ]] @canvas $x+$ [[ 16/25 ]] @canvas $=\left(x-\dfrac{4}{5}\right)^2$
@Algebrite.check(`[ 1.6; 16/25 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{4}{5}\right)^2&=x^2-2\cdot\dfrac{4}{5}x+\left(\dfrac{4}{5}\right)^2 \\
&=x^2-1{,}6x+\dfrac{16}{25}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+0{,}5x+\dfrac{1}{16}=\left(x+$ [[ 0,25 ]] @canvas $\right)^2$
@Algebrite.check([ 0.25 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+0{,}25\right)^2&=x^2+2\cdot 0{,}25x+0{,}25^2 \\
&=x^2+0{,}5x+\dfrac{1}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{9}{5}x+0{,}81=\left(x-$ [[ 9/10 ]] @canvas $\right)^2$
@Algebrite.check([ 9/10 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{9}{10}\right)^2&=x^2-2\cdot\dfrac{9}{10}x+\left(\dfrac{9}{10}\right)^2 \\
&=x^2-\dfrac{9}{5}x+0{,}81
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
