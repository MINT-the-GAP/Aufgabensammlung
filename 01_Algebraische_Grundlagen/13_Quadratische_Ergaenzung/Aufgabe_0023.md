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
__$a)\;\;$__ $2x^2+2x+\dfrac{3}{2}=2\left(x^2+$ [[ 1 ]] @canvas $x\right)+\dfrac{3}{2}$  \
$\dfrac{1}{2}\cdot 1 =$ [[ 1/2 ]] @canvas $,\qquad \left(\dfrac{1}{2}\right)^2 =$ [[ 1/4 ]] @canvas  \
$2\left(x^2+1x+\dfrac{1}{4}-\dfrac{1}{4}\right)+\dfrac{3}{2}=2\left(x+\dfrac{1}{2}\right)^2+$ [[ 1 ]] @canvas
@Algebrite.check(`[ 1; 1/2; 1/4; 1 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2\mathbin{:}2&=1 \\
\dfrac{1}{2}\cdot 1&=\dfrac{1}{2}, & \left(\dfrac{1}{2}\right)^2&=\dfrac{1}{4} \\
2x^2+2x+\dfrac{3}{2}&=2\left(x^2+1x+\dfrac{1}{4}-\dfrac{1}{4}\right)+\dfrac{3}{2} \\
&=2\left(x+\dfrac{1}{2}\right)^2+1
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $3x^2-2x+1=3\left(x^2-$ [[ 2/3 ]] @canvas $x\right)+1$  \
$\dfrac{1}{2}\cdot \dfrac{2}{3} =$ [[ 1/3 ]] @canvas $,\qquad \left(\dfrac{1}{3}\right)^2 =$ [[ 1/9 ]] @canvas  \
$3\left(x^2-\dfrac{2}{3}x+\dfrac{1}{9}-\dfrac{1}{9}\right)+1=3\left(x-\dfrac{1}{3}\right)^2+$ [[ 2/3 ]] @canvas
@Algebrite.check(`[ 2/3; 1/3; 1/9; 2/3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2\mathbin{:}3&=\dfrac{2}{3} \\
\dfrac{1}{2}\cdot \dfrac{2}{3}&=\dfrac{1}{3}, & \left(\dfrac{1}{3}\right)^2&=\dfrac{1}{9} \\
3x^2-2x+1&=3\left(x^2-\dfrac{2}{3}x+\dfrac{1}{9}-\dfrac{1}{9}\right)+1 \\
&=3\left(x-\dfrac{1}{3}\right)^2+\dfrac{2}{3}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $2x^2+\dfrac{8}{3}x+\dfrac{5}{9}=2\left(x^2+$ [[ 4/3 ]] @canvas $x\right)+\dfrac{5}{9}$  \
$\dfrac{1}{2}\cdot \dfrac{4}{3} =$ [[ 2/3 ]] @canvas $,\qquad \left(\dfrac{2}{3}\right)^2 =$ [[ 4/9 ]] @canvas  \
$2\left(x^2+\dfrac{4}{3}x+\dfrac{4}{9}-\dfrac{4}{9}\right)+\dfrac{5}{9}=2\left(x+\dfrac{2}{3}\right)^2-$ [[ 1/3 ]] @canvas
@Algebrite.check(`[ 4/3; 2/3; 4/9; 1/3 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{8}{3}\mathbin{:}2&=\dfrac{4}{3} \\
\dfrac{1}{2}\cdot \dfrac{4}{3}&=\dfrac{2}{3}, & \left(\dfrac{2}{3}\right)^2&=\dfrac{4}{9} \\
2x^2+\dfrac{8}{3}x+\dfrac{5}{9}&=2\left(x^2+\dfrac{4}{3}x+\dfrac{4}{9}-\dfrac{4}{9}\right)+\dfrac{5}{9} \\
&=2\left(x+\dfrac{2}{3}\right)^2-\dfrac{1}{3}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $4x^2-6x+\dfrac{11}{4}=4\left(x^2-$ [[ 3/2 ]] @canvas $x\right)+\dfrac{11}{4}$  \
$\dfrac{1}{2}\cdot \dfrac{3}{2} =$ [[ 3/4 ]] @canvas $,\qquad \left(\dfrac{3}{4}\right)^2 =$ [[ 9/16 ]] @canvas  \
$4\left(x^2-\dfrac{3}{2}x+\dfrac{9}{16}-\dfrac{9}{16}\right)+\dfrac{11}{4}=4\left(x-\dfrac{3}{4}\right)^2+$ [[ 1/2 ]] @canvas
@Algebrite.check(`[ 3/2; 3/4; 9/16; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
6\mathbin{:}4&=\dfrac{3}{2} \\
\dfrac{1}{2}\cdot \dfrac{3}{2}&=\dfrac{3}{4}, & \left(\dfrac{3}{4}\right)^2&=\dfrac{9}{16} \\
4x^2-6x+\dfrac{11}{4}&=4\left(x^2-\dfrac{3}{2}x+\dfrac{9}{16}-\dfrac{9}{16}\right)+\dfrac{11}{4} \\
&=4\left(x-\dfrac{3}{4}\right)^2+\dfrac{1}{2}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $3x^2+\dfrac{12}{5}x+\dfrac{7}{25}=3\left(x^2+$ [[ 4/5 ]] @canvas $x\right)+\dfrac{7}{25}$  \
$\dfrac{1}{2}\cdot \dfrac{4}{5} =$ [[ 2/5 ]] @canvas $,\qquad \left(\dfrac{2}{5}\right)^2 =$ [[ 4/25 ]] @canvas  \
$3\left(x^2+\dfrac{4}{5}x+\dfrac{4}{25}-\dfrac{4}{25}\right)+\dfrac{7}{25}=3\left(x+\dfrac{2}{5}\right)^2-$ [[ 1/5 ]] @canvas
@Algebrite.check(`[ 4/5; 2/5; 4/25; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
\dfrac{12}{5}\mathbin{:}3&=\dfrac{4}{5} \\
\dfrac{1}{2}\cdot \dfrac{4}{5}&=\dfrac{2}{5}, & \left(\dfrac{2}{5}\right)^2&=\dfrac{4}{25} \\
3x^2+\dfrac{12}{5}x+\dfrac{7}{25}&=3\left(x^2+\dfrac{4}{5}x+\dfrac{4}{25}-\dfrac{4}{25}\right)+\dfrac{7}{25} \\
&=3\left(x+\dfrac{2}{5}\right)^2-\dfrac{1}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $5x^2-6x+\dfrac{11}{5}=5\left(x^2-$ [[ 6/5 ]] @canvas $x\right)+\dfrac{11}{5}$  \
$\dfrac{1}{2}\cdot \dfrac{6}{5} =$ [[ 3/5 ]] @canvas $,\qquad \left(\dfrac{3}{5}\right)^2 =$ [[ 9/25 ]] @canvas  \
$5\left(x^2-\dfrac{6}{5}x+\dfrac{9}{25}-\dfrac{9}{25}\right)+\dfrac{11}{5}=5\left(x-\dfrac{3}{5}\right)^2+$ [[ 2/5 ]] @canvas
@Algebrite.check(`[ 6/5; 3/5; 9/25; 2/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
6\mathbin{:}5&=\dfrac{6}{5} \\
\dfrac{1}{2}\cdot \dfrac{6}{5}&=\dfrac{3}{5}, & \left(\dfrac{3}{5}\right)^2&=\dfrac{9}{25} \\
5x^2-6x+\dfrac{11}{5}&=5\left(x^2-\dfrac{6}{5}x+\dfrac{9}{25}-\dfrac{9}{25}\right)+\dfrac{11}{5} \\
&=5\left(x-\dfrac{3}{5}\right)^2+\dfrac{2}{5}
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung`)

</div>

</section>
