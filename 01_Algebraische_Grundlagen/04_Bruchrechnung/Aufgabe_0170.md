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


















tags: Bruchrechnung, Division, sehr leicht, sehr niedrig, Angeben

comment: Bestimme mittels einer Permanenzreihe die Regeln der Division von Brüchen.

author: Martin Lommatzsch

-->




# Permanenzreihen - Division mit Brüchen


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
$4 : 4 =$ [[  1 ]] @canvas \
 \
$4 : 2 =$ [[  2  ]] @canvas \
 \
$4 : 1 =$ [[  4  ]] @canvas \
 \
$4 : \dfrac{1}{2} =$ [[  8  ]] @canvas \
 \
$4 : \dfrac{1}{4} =$ [[  16 ]] @canvas \
 \
$4 : \dfrac{1}{8} =$ [[  32 ]] @canvas \
 \
$4 : \dfrac{1}{16} =$ [[ 64  ]] @canvas \
@Algebrite.check([ 1;2;4;8;16;32;64 ])


@ADetails(1=BE; Bruchrechnung, Division, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$b)\;\;$__ \
$24 : 8 =$ [[  3  ]] @canvas \
 \
$24 : 4 =$ [[  6  ]] @canvas \
 \
$24 : 2 =$ [[  12  ]] @canvas \
 \
$24 : 1 =$ [[  24  ]] @canvas \
 \
$24 : \dfrac{1}{2} =$ [[  48  ]] @canvas \
 \
$24 : \dfrac{1}{4} =$ [[  96  ]] @canvas \
 \
$24 : \dfrac{1}{8} =$ [[  192 ]] @canvas \
@Algebrite.check([ 3;6;12;24;48;96;192 ])


@ADetails(1=BE; Bruchrechnung, Division, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$c)\;\;$__ \
$27 : \dfrac{1}{9} =$ [[  243   ]] @canvas \
 \
$27 : \dfrac{1}{3} =$ [[  81   ]] @canvas \
 \
$27 : 1 =$ [[  27  ]] @canvas \
 \
$27 : 3 =$ [[  9   ]] @canvas \
 \
$27 : 9 =$ [[ 3    ]] @canvas \
 \
$27 : 27 =$ [[  1   ]] @canvas \
 \
$27 : 81 =$ [[ 1/3  ]] @canvas \
@Algebrite.check([ 243;81;27;9;3;1;1/3 ])


@ADetails(1=BE; Bruchrechnung, Division, Zahlenverständnis)
</div>
<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-show-partial-solution -->
__$d)\;\;$__ \
$10 : 100 =$              [[  1/10  ]] @canvas \
 \
$10 : 10 =$               [[  1     ]] @canvas \
 \
$10 : 1 =$                [[  10    ]] @canvas \
 \
$10 : \dfrac{1}{10} =$    [[  100   ]] @canvas \
 \
$10 : \dfrac{1}{100} =$   [[  1000  ]] @canvas \
 \
$10 : \dfrac{1}{1000} =$  [[ 10000  ]] @canvas \
 \
$10 : \dfrac{1}{10000} =$ [[ 100000 ]] @canvas \
@Algebrite.check([ 1/10;1;10;100;1000;10000;100000 ])


@ADetails(1=BE; Bruchrechnung, Division, Zahlenverständnis)
</div>

</section>









