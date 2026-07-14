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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md












tags: Terme, Bruchrechnung, Dezimalzahlen, Vorrangsregeln, mittel, normal, Bestimmen

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Bruchrechnung und Dezimalzahlen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** die Werte in den Lücken der Rechnung.

<section class="dynFlex" style="line-height: 3;">

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$a)\;\;$__ \
$\;\;\;\; 0{,}6 + \dfrac{3}{4} \cdot \dfrac{4}{5}$ \
$= 0{,}6 +$ [[ 3/5 ]] @canvas \
$=$ [[ 1,2 ]] @canvas
@Algebrite.check([ 3/5; 6/5 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(1{,}25 + \dfrac{3}{4}\right) : 2{,}5 + \dfrac{1}{5}$ \
$=$ [[ 2 ]] @canvas $ : 2{,}5 + \dfrac{1}{5}$ \
$=$ [[ 0,8 ]] @canvas $ + \dfrac{1}{5}$ \
$=$ [[ 1 ]] @canvas
@Algebrite.check([ 2; 4/5; 1 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ \
$\;\;\;\; \dfrac{2}{3} : 0{,}5 + \left(1{,}2 - \dfrac{1}{5}\right) \cdot \dfrac{3}{4}$ \
$=$ [[ 4/3 ]] @canvas $ + \left(1{,}2 - \dfrac{1}{5}\right) \cdot \dfrac{3}{4}$ \
$= \dfrac{4}{3} +$ [[ 1 ]] @canvas $ \cdot \dfrac{3}{4}$ \
$= \dfrac{4}{3} +$ [[ 3/4 ]] @canvas \
$=$ [[ 25/12 ]] @canvas
@Algebrite.check([ 4/3; 1; 3/4; 25/12 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(1{,}5 - \dfrac{3}{4}\right) : 0{,}5 + \left(\dfrac{2}{3} + 0{,}5\right) \cdot \dfrac{6}{7}$ \
$=$ [[ 3/4 ]] @canvas $ : 0{,}5 + \left(\dfrac{2}{3} + 0{,}5\right) \cdot \dfrac{6}{7}$ \
$=$ [[ 1,5 ]] @canvas $ +$ [[ 7/6 ]] @canvas $ \cdot \dfrac{6}{7}$ \
$= 1{,}5 +$ [[ 1 ]] @canvas \
$=$ [[ 2,5 ]] @canvas
@Algebrite.check([ 3/4; 3/2; 7/6; 1; 5/2 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

</section>






