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
__$a)\;\;$__ $x^2+x+$ [[ 1/4 ]] @canvas $=\left(x+\dfrac{1}{2}\right)^2$
@Algebrite.check([ 1/4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{1}{2}\right)^2&=x^2+2\cdot\dfrac{1}{2}x+\left(\dfrac{1}{2}\right)^2 \\
&=x^2+x+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-\dfrac{2}{3}x+$ [[ 1/9 ]] @canvas $=\left(x-\dfrac{1}{3}\right)^2$
@Algebrite.check([ 1/9 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{1}{3}\right)^2&=x^2-2\cdot\dfrac{1}{3}x+\left(\dfrac{1}{3}\right)^2 \\
&=x^2-\dfrac{2}{3}x+\dfrac{1}{9}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+\dfrac{3}{2}x+\dfrac{9}{16}=\left(x+$ [[ 3/4 ]] @canvas $\right)^2$
@Algebrite.check([ 3/4 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{3}{4}\right)^2&=x^2+2\cdot\dfrac{3}{4}x+\left(\dfrac{3}{4}\right)^2 \\
&=x^2+\dfrac{3}{2}x+\dfrac{9}{16}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-\dfrac{4}{5}x+\dfrac{4}{25}=\left(x-$ [[ 2/5 ]] @canvas $\right)^2$
@Algebrite.check([ 2/5 ])
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{2}{5}\right)^2&=x^2-2\cdot\dfrac{2}{5}x+\left(\dfrac{2}{5}\right)^2 \\
&=x^2-\dfrac{4}{5}x+\dfrac{4}{25}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+\dfrac{5}{3}x+$ [[ 25/36 ]] @canvas $=\left(x+$ [[ 5/6 ]] @canvas $\right)^2$
@Algebrite.check(`[ 25/36; 5/6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x+\dfrac{5}{6}\right)^2&=x^2+2\cdot\dfrac{5}{6}x+\left(\dfrac{5}{6}\right)^2 \\
&=x^2+\dfrac{5}{3}x+\dfrac{25}{36}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{7}{4}x+$ [[ 49/64 ]] @canvas $=\left(x-$ [[ 7/8 ]] @canvas $\right)^2$
@Algebrite.check(`[ 49/64; 7/8 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\left(x-\dfrac{7}{8}\right)^2&=x^2-2\cdot\dfrac{7}{8}x+\left(\dfrac{7}{8}\right)^2 \\
&=x^2-\dfrac{7}{4}x+\dfrac{49}{64}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
