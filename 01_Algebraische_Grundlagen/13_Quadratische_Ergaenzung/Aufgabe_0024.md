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

tags: Quadratische Ergänzung, Bruchrechnung, mittel, normal, Bestimmen

comment: Bestimme die fehlenden Brüche bei der quadratischen Ergänzung mit Vorfaktor.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung mit Vorfaktor

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzungsgrad 3" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeitsgrad 3" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $2x^2+x+\dfrac{3}{8}=2\left(x^2+$ [[ 1/2 ]] @canvas $x\right)+\dfrac{3}{8}$  \
$\dfrac{1}{2}\cdot \dfrac{1}{2} =$ [[ 1/4 ]] @canvas $,\qquad \left(\dfrac{1}{4}\right)^2 =$ [[ 1/16 ]] @canvas  \
$2\left(x^2+\dfrac{1}{2}x+\dfrac{1}{16}-\dfrac{1}{16}\right)+\dfrac{3}{8}=2\left(x+\dfrac{1}{4}\right)^2+$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 1/2; 1/4; 1/16; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1\mathbin{:}2&=\dfrac{1}{2} \\
\dfrac{1}{2}\cdot \dfrac{1}{2}&=\dfrac{1}{4}, & \left(\dfrac{1}{4}\right)^2&=\dfrac{1}{16} \\
2x^2+x+\dfrac{3}{8}&=2\left(x^2+\dfrac{1}{2}x+\dfrac{1}{16}-\dfrac{1}{16}\right)+\dfrac{3}{8} \\
&=2\left(x+\dfrac{1}{4}\right)^2+\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $3x^2-\dfrac{9}{4}x+\dfrac{35}{64}=3\left(x^2-$ [[ 3/4 ]] @canvas $x\right)+\dfrac{35}{64}$  \
$\dfrac{1}{2}\cdot \dfrac{3}{4} =$ [[ 3/8 ]] @canvas $,\qquad \left(\dfrac{3}{8}\right)^2 =$ [[ 9/64 ]] @canvas  \
$3\left(x^2-\dfrac{3}{4}x+\dfrac{9}{64}-\dfrac{9}{64}\right)+\dfrac{35}{64}=3\left(x-\dfrac{3}{8}\right)^2+$ [[ 1/8 ]] @canvas
@Algebrite.check(`[ 3/4; 3/8; 9/64; 1/8 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{9}{4}\mathbin{:}3&=\dfrac{3}{4} \\
\dfrac{1}{2}\cdot \dfrac{3}{4}&=\dfrac{3}{8}, & \left(\dfrac{3}{8}\right)^2&=\dfrac{9}{64} \\
3x^2-\dfrac{9}{4}x+\dfrac{35}{64}&=3\left(x^2-\dfrac{3}{4}x+\dfrac{9}{64}-\dfrac{9}{64}\right)+\dfrac{35}{64} \\
&=3\left(x-\dfrac{3}{8}\right)^2+\dfrac{1}{8}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $4x^2+\dfrac{20}{3}x+\dfrac{53}{18}=4\left(x^2+$ [[ 5/3 ]] @canvas $x\right)+\dfrac{53}{18}$  \
$\dfrac{1}{2}\cdot \dfrac{5}{3} =$ [[ 5/6 ]] @canvas $,\qquad \left(\dfrac{5}{6}\right)^2 =$ [[ 25/36 ]] @canvas  \
$4\left(x^2+\dfrac{5}{3}x+\dfrac{25}{36}-\dfrac{25}{36}\right)+\dfrac{53}{18}=4\left(x+\dfrac{5}{6}\right)^2+$ [[ 1/6 ]] @canvas
@Algebrite.check(`[ 5/3; 5/6; 25/36; 1/6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{20}{3}\mathbin{:}4&=\dfrac{5}{3} \\
\dfrac{1}{2}\cdot \dfrac{5}{3}&=\dfrac{5}{6}, & \left(\dfrac{5}{6}\right)^2&=\dfrac{25}{36} \\
4x^2+\dfrac{20}{3}x+\dfrac{53}{18}&=4\left(x^2+\dfrac{5}{3}x+\dfrac{25}{36}-\dfrac{25}{36}\right)+\dfrac{53}{18} \\
&=4\left(x+\dfrac{5}{6}\right)^2+\dfrac{1}{6}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $2x^2-\dfrac{5}{2}x+\dfrac{17}{32}=2\left(x^2-$ [[ 5/4 ]] @canvas $x\right)+\dfrac{17}{32}$  \
$\dfrac{1}{2}\cdot \dfrac{5}{4} =$ [[ 5/8 ]] @canvas $,\qquad \left(\dfrac{5}{8}\right)^2 =$ [[ 25/64 ]] @canvas  \
$2\left(x^2-\dfrac{5}{4}x+\dfrac{25}{64}-\dfrac{25}{64}\right)+\dfrac{17}{32}=2\left(x-\dfrac{5}{8}\right)^2-$ [[ 1/4 ]] @canvas
@Algebrite.check(`[ 5/4; 5/8; 25/64; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{5}{2}\mathbin{:}2&=\dfrac{5}{4} \\
\dfrac{1}{2}\cdot \dfrac{5}{4}&=\dfrac{5}{8}, & \left(\dfrac{5}{8}\right)^2&=\dfrac{25}{64} \\
2x^2-\dfrac{5}{2}x+\dfrac{17}{32}&=2\left(x^2-\dfrac{5}{4}x+\dfrac{25}{64}-\dfrac{25}{64}\right)+\dfrac{17}{32} \\
&=2\left(x-\dfrac{5}{8}\right)^2-\dfrac{1}{4}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $5x^2+7x+\dfrac{53}{20}=5\left(x^2+$ [[ 7/5 ]] @canvas $x\right)+\dfrac{53}{20}$  \
$\dfrac{1}{2}\cdot \dfrac{7}{5} =$ [[ 7/10 ]] @canvas $,\qquad \left(\dfrac{7}{10}\right)^2 =$ [[ 49/100 ]] @canvas  \
$5\left(x^2+\dfrac{7}{5}x+\dfrac{49}{100}-\dfrac{49}{100}\right)+\dfrac{53}{20}=5\left(x+\dfrac{7}{10}\right)^2+$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 7/5; 7/10; 49/100; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
7\mathbin{:}5&=\dfrac{7}{5} \\
\dfrac{1}{2}\cdot \dfrac{7}{5}&=\dfrac{7}{10}, & \left(\dfrac{7}{10}\right)^2&=\dfrac{49}{100} \\
5x^2+7x+\dfrac{53}{20}&=5\left(x^2+\dfrac{7}{5}x+\dfrac{49}{100}-\dfrac{49}{100}\right)+\dfrac{53}{20} \\
&=5\left(x+\dfrac{7}{10}\right)^2+\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $3x^2-\dfrac{7}{2}x+\dfrac{41}{48}=3\left(x^2-$ [[ 7/6 ]] @canvas $x\right)+\dfrac{41}{48}$  \
$\dfrac{1}{2}\cdot \dfrac{7}{6} =$ [[ 7/12 ]] @canvas $,\qquad \left(\dfrac{7}{12}\right)^2 =$ [[ 49/144 ]] @canvas  \
$3\left(x^2-\dfrac{7}{6}x+\dfrac{49}{144}-\dfrac{49}{144}\right)+\dfrac{41}{48}=3\left(x-\dfrac{7}{12}\right)^2-$ [[ 1/6 ]] @canvas
@Algebrite.check(`[ 7/6; 7/12; 49/144; 1/6 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{7}{2}\mathbin{:}3&=\dfrac{7}{6} \\
\dfrac{1}{2}\cdot \dfrac{7}{6}&=\dfrac{7}{12}, & \left(\dfrac{7}{12}\right)^2&=\dfrac{49}{144} \\
3x^2-\dfrac{7}{2}x+\dfrac{41}{48}&=3\left(x^2-\dfrac{7}{6}x+\dfrac{49}{144}-\dfrac{49}{144}\right)+\dfrac{41}{48} \\
&=3\left(x-\dfrac{7}{12}\right)^2-\dfrac{1}{6}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
