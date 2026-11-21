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

tags: Quadratische Ergänzung, Binomische Formeln, Bruchrechnung, leicht, niedrig, Bestimmen

comment: Bestimme fehlende Brüche in binomischen Quadraten.

author: Martin Lommatzsch
-->

# Quadratische Terme ergänzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen so, dass die Gleichungen stimmen.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+$ [[ 4/3 ]] @canvas $x+\dfrac{4}{9}=\left(x+\dfrac{2}{3}\right)^2$
@Algebrite.check([ 4/3 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{2}{3}\right)^2&=x^2+2\cdot\dfrac{2}{3}x+\left(\dfrac{2}{3}\right)^2 \\
&=x^2+\dfrac{4}{3}x+\dfrac{4}{9}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-$ [[ 6/5 ]] @canvas $x+\dfrac{9}{25}=\left(x-\dfrac{3}{5}\right)^2$
@Algebrite.check([ 6/5 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{3}{5}\right)^2&=x^2-2\cdot\dfrac{3}{5}x+\left(\dfrac{3}{5}\right)^2 \\
&=x^2-\dfrac{6}{5}x+\dfrac{9}{25}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+$ [[ 1/2 ]] @canvas $x+$ [[ 1/16 ]] @canvas $=\left(x+\dfrac{1}{4}\right)^2$
@Algebrite.check(`[ 1/2; 1/16 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{1}{4}\right)^2&=x^2+2\cdot\dfrac{1}{4}x+\left(\dfrac{1}{4}\right)^2 \\
&=x^2+\dfrac{1}{2}x+\dfrac{1}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-$ [[ 3/2 ]] @canvas $x+$ [[ 9/16 ]] @canvas $=\left(x-\dfrac{3}{4}\right)^2$
@Algebrite.check(`[ 3/2; 9/16 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{3}{4}\right)^2&=x^2-2\cdot\dfrac{3}{4}x+\left(\dfrac{3}{4}\right)^2 \\
&=x^2-\dfrac{3}{2}x+\dfrac{9}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+\dfrac{7}{5}x+$ [[ 49/100 ]] @canvas $=\left(x+$ [[ 7/10 ]] @canvas $\right)^2$
@Algebrite.check(`[ 49/100; 7/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{7}{10}\right)^2&=x^2+2\cdot\dfrac{7}{10}x+\left(\dfrac{7}{10}\right)^2 \\
&=x^2+\dfrac{7}{5}x+\dfrac{49}{100}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{5}{6}x+\dfrac{25}{144}=\left(x-$ [[ 5/12 ]] @canvas $\right)^2$
@Algebrite.check([ 5/12 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{5}{12}\right)^2&=x^2-2\cdot\dfrac{5}{12}x+\left(\dfrac{5}{12}\right)^2 \\
&=x^2-\dfrac{5}{6}x+\dfrac{25}{144}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
