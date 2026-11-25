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
__$a)\;\;$__ $x^2+\dfrac{1}{2}x+$ [[ 1/16 ]] @canvas $-\dfrac{1}{16}+\dfrac{5}{16}=\bigl(x+$ [[ 1/4 ]] @canvas $\bigr)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 1/16; 1/4; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{1}{2}&=\dfrac{1}{4}, & \left(\dfrac{1}{4}\right)^2&=\dfrac{1}{16} \\
x^2+\dfrac{1}{2}x+\dfrac{5}{16}&=x^2+\dfrac{1}{2}x+\dfrac{1}{16}-\dfrac{1}{16}+\dfrac{5}{16} \\
&=\left(x+\dfrac{1}{4}\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $x^2-\dfrac{3}{4}x+$ [[ 9/64 ]] @canvas $-\dfrac{9}{64}+\dfrac{17}{64}=\bigl(x-$ [[ 3/8 ]] @canvas $\bigr)^2+$ [[ 1/8 ]] @canvas
@Algebrite.check(`[ 9/64; 3/8; 1/8 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{3}{4}&=\dfrac{3}{8}, & \left(\dfrac{3}{8}\right)^2&=\dfrac{9}{64} \\
x^2-\dfrac{3}{4}x+\dfrac{17}{64}&=x^2-\dfrac{3}{4}x+\dfrac{9}{64}-\dfrac{9}{64}+\dfrac{17}{64} \\
&=\left(x-\dfrac{3}{8}\right)^2+\dfrac{1}{8}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $x^2+\dfrac{5}{3}x+$ [[ 25/36 ]] @canvas $-\dfrac{25}{36}+\dfrac{31}{36}=\bigl(x+$ [[ 5/6 ]] @canvas $\bigr)^2+$ [[ 1/6 ]] @canvas
@Algebrite.check(`[ 25/36; 5/6; 1/6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{5}{3}&=\dfrac{5}{6}, & \left(\dfrac{5}{6}\right)^2&=\dfrac{25}{36} \\
x^2+\dfrac{5}{3}x+\dfrac{31}{36}&=x^2+\dfrac{5}{3}x+\dfrac{25}{36}-\dfrac{25}{36}+\dfrac{31}{36} \\
&=\left(x+\dfrac{5}{6}\right)^2+\dfrac{1}{6}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $x^2-\dfrac{5}{4}x+$ [[ 25/64 ]] @canvas $-\dfrac{25}{64}+\dfrac{9}{64}=\bigl(x-$ [[ 5/8 ]] @canvas $\bigr)^2-$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 25/64; 5/8; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{5}{4}&=\dfrac{5}{8}, & \left(\dfrac{5}{8}\right)^2&=\dfrac{25}{64} \\
x^2-\dfrac{5}{4}x+\dfrac{9}{64}&=x^2-\dfrac{5}{4}x+\dfrac{25}{64}-\dfrac{25}{64}+\dfrac{9}{64} \\
&=\left(x-\dfrac{5}{8}\right)^2-\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $x^2+\dfrac{7}{5}x+$ [[ 49/100 ]] @canvas $-\dfrac{49}{100}+\dfrac{69}{100}=\bigl(x+$ [[ 7/10 ]] @canvas $\bigr)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 49/100; 7/10; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{7}{5}&=\dfrac{7}{10}, & \left(\dfrac{7}{10}\right)^2&=\dfrac{49}{100} \\
x^2+\dfrac{7}{5}x+\dfrac{69}{100}&=x^2+\dfrac{7}{5}x+\dfrac{49}{100}-\dfrac{49}{100}+\dfrac{69}{100} \\
&=\left(x+\dfrac{7}{10}\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $x^2-\dfrac{7}{6}x+$ [[ 49/144 ]] @canvas $-\dfrac{49}{144}+\dfrac{25}{144}=\bigl(x-$ [[ 7/12 ]] @canvas $\bigr)^2-$ [[ 1/6 ]] @canvas
@Algebrite.check(`[ 49/144; 7/12; 1/6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{1}{2}\cdot \dfrac{7}{6}&=\dfrac{7}{12}, & \left(\dfrac{7}{12}\right)^2&=\dfrac{49}{144} \\
x^2-\dfrac{7}{6}x+\dfrac{25}{144}&=x^2-\dfrac{7}{6}x+\dfrac{49}{144}-\dfrac{49}{144}+\dfrac{25}{144} \\
&=\left(x-\dfrac{7}{12}\right)^2-\dfrac{1}{6}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
