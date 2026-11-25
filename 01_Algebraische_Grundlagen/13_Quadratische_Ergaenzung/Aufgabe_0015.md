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

tags: Quadratische Ergänzung, Bruchrechnung, leicht, niedrig, Bestimmen

comment: Bestimme die fehlenden Brüche bei der quadratischen Ergänzung.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" alt="Vernetzungsgrad 2" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" alt="Schwierigkeitsgrad 2" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen. Ergänze mit der ersten Lücke jeweils die beiden Terme davor zu einem binomischen Quadrat.

<section class="dynFlex" data-columns="1" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $x^2+x+$ [[ 1/4 ]] @canvas $-\dfrac{1}{4}+\dfrac{3}{4}=\bigl(x+$ [[ 1/2 ]] @canvas $\bigr)^2+$ [[ 1/2 ]] @canvas
@Algebrite.check(`[ 1/4; 1/2; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot 1&=\dfrac{1}{2}, & \left(\dfrac{1}{2}\right)^2&=\dfrac{1}{4} \\
x^2+x+\dfrac{3}{4}&=x^2+x+\dfrac{1}{4}-\dfrac{1}{4}+\dfrac{3}{4} \\
&=\left(x+\dfrac{1}{2}\right)^2+\dfrac{1}{2}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-\dfrac{2}{3}x+$ [[ 1/9 ]] @canvas $-\dfrac{1}{9}+\dfrac{4}{9}=\bigl(x-$ [[ 1/3 ]] @canvas $\bigr)^2+$ [[ 1/3 ]] @canvas
@Algebrite.check(`[ 1/9; 1/3; 1/3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{2}{3}&=\dfrac{1}{3}, & \left(\dfrac{1}{3}\right)^2&=\dfrac{1}{9} \\
x^2-\dfrac{2}{3}x+\dfrac{4}{9}&=x^2-\dfrac{2}{3}x+\dfrac{1}{9}-\dfrac{1}{9}+\dfrac{4}{9} \\
&=\left(x-\dfrac{1}{3}\right)^2+\dfrac{1}{3}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+\dfrac{4}{3}x+$ [[ 4/9 ]] @canvas $-\dfrac{4}{9}+\dfrac{1}{9}=\bigl(x+$ [[ 2/3 ]] @canvas $\bigr)^2-$ [[ 1/3 ]] @canvas
@Algebrite.check(`[ 4/9; 2/3; 1/3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{4}{3}&=\dfrac{2}{3}, & \left(\dfrac{2}{3}\right)^2&=\dfrac{4}{9} \\
x^2+\dfrac{4}{3}x+\dfrac{1}{9}&=x^2+\dfrac{4}{3}x+\dfrac{4}{9}-\dfrac{4}{9}+\dfrac{1}{9} \\
&=\left(x+\dfrac{2}{3}\right)^2-\dfrac{1}{3}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-\dfrac{3}{2}x+$ [[ 9/16 ]] @canvas $-\dfrac{9}{16}+\dfrac{13}{16}=\bigl(x-$ [[ 3/4 ]] @canvas $\bigr)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 9/16; 3/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{3}{2}&=\dfrac{3}{4}, & \left(\dfrac{3}{4}\right)^2&=\dfrac{9}{16} \\
x^2-\dfrac{3}{2}x+\dfrac{13}{16}&=x^2-\dfrac{3}{2}x+\dfrac{9}{16}-\dfrac{9}{16}+\dfrac{13}{16} \\
&=\left(x-\dfrac{3}{4}\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+\dfrac{4}{5}x+$ [[ 4/25 ]] @canvas $-\dfrac{4}{25}+\dfrac{9}{25}=\bigl(x+$ [[ 2/5 ]] @canvas $\bigr)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 4/25; 2/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{4}{5}&=\dfrac{2}{5}, & \left(\dfrac{2}{5}\right)^2&=\dfrac{4}{25} \\
x^2+\dfrac{4}{5}x+\dfrac{9}{25}&=x^2+\dfrac{4}{5}x+\dfrac{4}{25}-\dfrac{4}{25}+\dfrac{9}{25} \\
&=\left(x+\dfrac{2}{5}\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{6}{5}x+$ [[ 9/25 ]] @canvas $-\dfrac{9}{25}+\dfrac{4}{25}=\bigl(x-$ [[ 3/5 ]] @canvas $\bigr)^2-$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 9/25; 3/5; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{6}{5}&=\dfrac{3}{5}, & \left(\dfrac{3}{5}\right)^2&=\dfrac{9}{25} \\
x^2-\dfrac{6}{5}x+\dfrac{4}{25}&=x^2-\dfrac{6}{5}x+\dfrac{9}{25}-\dfrac{9}{25}+\dfrac{4}{25} \\
&=\left(x-\dfrac{3}{5}\right)^2-\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
