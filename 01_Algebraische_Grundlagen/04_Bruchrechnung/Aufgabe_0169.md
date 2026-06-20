<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md


















tags: Bruchrechnung, Multiplikation, sehr leicht, sehr niedrig, Angeben

comment: Bestimme mittels einer Permanenzreihe die Regeln der Multiplikation von Brüchen.

author: Martin Lommatzsch

-->




# Permanenzreihen - Multiplikation mit Brüchen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Wert der Terme **an**. Achte dabei auf die Muster dieser Permanenzreihe.


<section class="dynFlex">

<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$a)\;\;$__ \
$4 \cdot 4 =$ [[  16 ]] @canvas \
 \
$4 \cdot 2 =$ [[  8  ]] @canvas \
 \
$4 \cdot 1 =$ [[  4  ]] @canvas \
 \
$4 \cdot \dfrac{1}{2} =$ [[  2  ]] @canvas \
 \
$4 \cdot \dfrac{1}{4} =$ [[  1  ]] @canvas \
 \
$4 \cdot \dfrac{1}{8} =$ [[ 1/2 ]] @canvas \
 \
$4 \cdot \dfrac{1}{16} =$ [[ 1/4 ]] @canvas \
@Algebrite.check([ 16;8;4;2;1;1/2;1/4 ])


@ADetails(1=BE; Bruchrechnung, Multiplikation, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 \cdot 8 =$ [[  192 ]] @canvas \
 \
$24 \cdot 4 =$ [[  96  ]] @canvas \
 \
$24 \cdot 2 =$ [[  48  ]] @canvas \
 \
$24 \cdot 1 =$ [[  24  ]] @canvas \
 \
$24 \cdot \dfrac{1}{2} =$ [[  12  ]] @canvas \
 \
$24 \cdot \dfrac{1}{4} =$ [[   6  ]] @canvas \
 \
$24 \cdot \dfrac{1}{8} =$ [[  3   ]] @canvas \
@Algebrite.check([ 192;96;48;24;12;6;3 ])


@ADetails(1=BE; Bruchrechnung, Multiplikation, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 \cdot \dfrac{1}{81} =$ [[  1/3 ]] @canvas \
 \
$27 \cdot \dfrac{1}{27} =$ [[  1   ]] @canvas \
 \
$27 \cdot \dfrac{1}{9} =$ [[  3   ]] @canvas \
 \
$27 \cdot \dfrac{1}{3} =$ [[  9   ]] @canvas \
 \
$27 \cdot 1 =$ [[  27  ]] @canvas \
 \
$27 \cdot 3 =$ [[  81  ]] @canvas \
 \
$27 \cdot 9 =$ [[ 243  ]] @canvas \
@Algebrite.check([ 1/3;1;3;9;27;81;243 ])


@ADetails(1=BE; Bruchrechnung, Multiplikation, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 \cdot 100 =$ [[  1000  ]] @canvas \
 \
$10 \cdot 10 =$  [[  100   ]] @canvas \
 \
$10 \cdot 1 =$                [[  10    ]] @canvas \
 \
$10 \cdot \dfrac{1}{10} =$    [[  1     ]] @canvas \
 \
$10 \cdot \dfrac{1}{100} =$   [[  1/10  ]] @canvas \
 \
$10 \cdot \dfrac{1}{1000} =$  [[ 1/100  ]] @canvas \
 \
$10 \cdot \dfrac{1}{10000} =$ [[ 1/1000 ]] @canvas \
@Algebrite.check([ 1000;100;10;1;1/10;1/100;1/1000 ])


@ADetails(1=BE; Bruchrechnung, Multiplikation, Zahlenverständnis)
</div>


</section>





