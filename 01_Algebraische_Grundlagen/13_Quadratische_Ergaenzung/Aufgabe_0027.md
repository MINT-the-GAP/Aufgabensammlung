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

tags: Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen, mittel, normal, Bestimmen

comment: Bestimme die fehlenden Brüche und Dezimalzahlen bei der quadratischen Ergänzung mit Vorfaktor.

author: Martin Lommatzsch
-->

# Quadratische Ergänzung mit Vorfaktor

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" alt="Vernetzungsgrad 3" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" alt="Schwierigkeitsgrad 3" width="120" height="30">  \
**Bestimme** die fehlenden Zahlen mithilfe der quadratischen Ergänzung.

<section class="dynFlex" data-columns="2" style="line-height: 3;">

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$a)\;\;$__ $\dfrac{3}{2}x^2+1{,}5x+\dfrac{7}{8}=\dfrac{3}{2}\left(x^2+$ [[ 1 ]] @canvas $x\right)+\dfrac{7}{8}$  \
$\dfrac{1}{2}\cdot 1 =$ [[ 0,5 ]] @canvas $,\qquad \left(0{,}5\right)^2 =$ [[ 1/4 ]] @canvas  \
$\dfrac{3}{2}\left(x^2+1x+\dfrac{1}{4}-\dfrac{1}{4}\right)+\dfrac{7}{8}=\dfrac{3}{2}\left(x+0{,}5\right)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 1; 1/2; 1/4; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}5\mathbin{:}\dfrac{3}{2}&=1 \\
\dfrac{1}{2}\cdot 1&=0{,}5, & \left(0{,}5\right)^2&=\dfrac{1}{4} \\
\dfrac{3}{2}x^2+1{,}5x+\dfrac{7}{8}&=\dfrac{3}{2}\left(x^2+1x+\dfrac{1}{4}-\dfrac{1}{4}\right)+\dfrac{7}{8} \\
&=\dfrac{3}{2}\left(x+0{,}5\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$b)\;\;$__ $\dfrac{5}{4}x^2-2x+\dfrac{11}{10}=\dfrac{5}{4}\left(x^2-$ [[ 1,6 ]] @canvas $x\right)+\dfrac{11}{10}$  \
$\dfrac{1}{2}\cdot 1{,}6 =$ [[ 0,8 ]] @canvas $,\qquad \left(0{,}8\right)^2 =$ [[ 16/25 ]] @canvas  \
$\dfrac{5}{4}\left(x^2-1{,}6x+\dfrac{16}{25}-\dfrac{16}{25}\right)+\dfrac{11}{10}=\dfrac{5}{4}\left(x-0{,}8\right)^2+$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 8/5; 4/5; 16/25; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
2\mathbin{:}\dfrac{5}{4}&=1{,}6 \\
\dfrac{1}{2}\cdot 1{,}6&=0{,}8, & \left(0{,}8\right)^2&=\dfrac{16}{25} \\
\dfrac{5}{4}x^2-2x+\dfrac{11}{10}&=\dfrac{5}{4}\left(x^2-1{,}6x+\dfrac{16}{25}-\dfrac{16}{25}\right)+\dfrac{11}{10} \\
&=\dfrac{5}{4}\left(x-0{,}8\right)^2+0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$c)\;\;$__ $\dfrac{2}{5}x^2+1{,}2x+\dfrac{7}{5}=\dfrac{2}{5}\left(x^2+$ [[ 3 ]] @canvas $x\right)+\dfrac{7}{5}$  \
$\dfrac{1}{2}\cdot 3 =$ [[ 1,5 ]] @canvas $,\qquad \left(1{,}5\right)^2 =$ [[ 9/4 ]] @canvas  \
$\dfrac{2}{5}\left(x^2+3x+\dfrac{9}{4}-\dfrac{9}{4}\right)+\dfrac{7}{5}=\dfrac{2}{5}\left(x+1{,}5\right)^2+$ [[ 0,5 ]] @canvas
@Algebrite.check(`[ 3; 3/2; 9/4; 1/2 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}2\mathbin{:}\dfrac{2}{5}&=3 \\
\dfrac{1}{2}\cdot 3&=1{,}5, & \left(1{,}5\right)^2&=\dfrac{9}{4} \\
\dfrac{2}{5}x^2+1{,}2x+\dfrac{7}{5}&=\dfrac{2}{5}\left(x^2+3x+\dfrac{9}{4}-\dfrac{9}{4}\right)+\dfrac{7}{5} \\
&=\dfrac{2}{5}\left(x+1{,}5\right)^2+0{,}5
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$d)\;\;$__ $\dfrac{7}{4}x^2-1{,}4x+\dfrac{12}{25}=\dfrac{7}{4}\left(x^2-$ [[ 0,8 ]] @canvas $x\right)+\dfrac{12}{25}$  \
$\dfrac{1}{2}\cdot 0{,}8 =$ [[ 0,4 ]] @canvas $,\qquad \left(0{,}4\right)^2 =$ [[ 4/25 ]] @canvas  \
$\dfrac{7}{4}\left(x^2-0{,}8x+\dfrac{4}{25}-\dfrac{4}{25}\right)+\dfrac{12}{25}=\dfrac{7}{4}\left(x-0{,}4\right)^2+$ [[ 0,2 ]] @canvas
@Algebrite.check(`[ 4/5; 2/5; 4/25; 1/5 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}4\mathbin{:}\dfrac{7}{4}&=0{,}8 \\
\dfrac{1}{2}\cdot 0{,}8&=0{,}4, & \left(0{,}4\right)^2&=\dfrac{4}{25} \\
\dfrac{7}{4}x^2-1{,}4x+\dfrac{12}{25}&=\dfrac{7}{4}\left(x^2-0{,}8x+\dfrac{4}{25}-\dfrac{4}{25}\right)+\dfrac{12}{25} \\
&=\dfrac{7}{4}\left(x-0{,}4\right)^2+0{,}2
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$e)\;\;$__ $\dfrac{3}{5}x^2+1{,}5x+\dfrac{19}{16}=\dfrac{3}{5}\left(x^2+$ [[ 2,5 ]] @canvas $x\right)+\dfrac{19}{16}$  \
$\dfrac{1}{2}\cdot 2{,}5 =$ [[ 1,25 ]] @canvas $,\qquad \left(1{,}25\right)^2 =$ [[ 25/16 ]] @canvas  \
$\dfrac{3}{5}\left(x^2+2{,}5x+\dfrac{25}{16}-\dfrac{25}{16}\right)+\dfrac{19}{16}=\dfrac{3}{5}\left(x+1{,}25\right)^2+$ [[ 0,25 ]] @canvas
@Algebrite.check(`[ 5/2; 5/4; 25/16; 1/4 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}5\mathbin{:}\dfrac{3}{5}&=2{,}5 \\
\dfrac{1}{2}\cdot 2{,}5&=1{,}25, & \left(1{,}25\right)^2&=\dfrac{25}{16} \\
\dfrac{3}{5}x^2+1{,}5x+\dfrac{19}{16}&=\dfrac{3}{5}\left(x^2+2{,}5x+\dfrac{25}{16}-\dfrac{25}{16}\right)+\dfrac{19}{16} \\
&=\dfrac{3}{5}\left(x+1{,}25\right)^2+0{,}25
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

<div class="flex-child">

<!-- data-hint-button="1" data-solution-button="3" -->
__$f)\;\;$__ $\dfrac{9}{10}x^2-1{,}08x+\dfrac{78}{125}=\dfrac{9}{10}\left(x^2-$ [[ 1,2 ]] @canvas $x\right)+\dfrac{78}{125}$  \
$\dfrac{1}{2}\cdot 1{,}2 =$ [[ 0,6 ]] @canvas $,\qquad \left(0{,}6\right)^2 =$ [[ 9/25 ]] @canvas  \
$\dfrac{9}{10}\left(x^2-1{,}2x+\dfrac{9}{25}-\dfrac{9}{25}\right)+\dfrac{78}{125}=\dfrac{9}{10}\left(x-0{,}6\right)^2+$ [[ 0,3 ]] @canvas
@Algebrite.check(`[ 6/5; 3/5; 9/25; 3/10 ]`)
[[?]] @Explain
****************
$$
\begin{aligned}
1{,}08\mathbin{:}\dfrac{9}{10}&=1{,}2 \\
\dfrac{1}{2}\cdot 1{,}2&=0{,}6, & \left(0{,}6\right)^2&=\dfrac{9}{25} \\
\dfrac{9}{10}x^2-1{,}08x+\dfrac{78}{125}&=\dfrac{9}{10}\left(x^2-1{,}2x+\dfrac{9}{25}-\dfrac{9}{25}\right)+\dfrac{78}{125} \\
&=\dfrac{9}{10}\left(x-0{,}6\right)^2+0{,}3
\end{aligned}
$$
****************

@resetter

@ADetails(`1=BE; Quadratische Ergänzung, Bruchrechnung, Dezimalzahlen`)

</div>

</section>
