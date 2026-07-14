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
$\;\;\;\; 0{,}8 + \dfrac{3}{5} : \dfrac{3}{2}$ \
$= 0{,}8 +$ [[ 2/5 ]] @canvas \
$=$ [[ 1,2 ]] @canvas
@Algebrite.check([ 2/5; 6/5 ])

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
$\;\;\;\; \left(1{,}4 - \dfrac{3}{10}\right) \cdot \dfrac{5}{11} + 0{,}25$ \
$=$ [[ 11/10 ]] @canvas $ \cdot \dfrac{5}{11} + 0{,}25$ \
$=$ [[ 1/2 ]] @canvas $ + 0{,}25$ \
$=$ [[ 0,75 ]] @canvas
@Algebrite.check([ 11/10; 1/2; 3/4 ])

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
$\;\;\;\; 1{,}2 \cdot \dfrac{5}{6} + \left(\dfrac{7}{10} - 0{,}2\right) : \dfrac{5}{4}$ \
$=$ [[ 1 ]] @canvas $ + \left(\dfrac{7}{10} - 0{,}2\right) : \dfrac{5}{4}$ \
$= 1 +$ [[ 1/2 ]] @canvas $ : \dfrac{5}{4}$ \
$= 1 +$ [[ 2/5 ]] @canvas \
$=$ [[ 7/5 ]] @canvas
@Algebrite.check([ 1; 1/2; 2/5; 7/5 ])

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
$\;\;\;\; \left(2{,}25 - \dfrac{3}{4}\right) : \dfrac{3}{2} + \left(0{,}9 + \dfrac{3}{5}\right) \cdot \dfrac{4}{9}$ \
$=$ [[ 3/2 ]] @canvas $ : \dfrac{3}{2} +$ [[ 3/2 ]] @canvas $ \cdot \dfrac{4}{9}$ \
$=$ [[ 1 ]] @canvas $ + \dfrac{3}{2} \cdot \dfrac{4}{9}$ \
$= 1 +$ [[ 2/3 ]] @canvas \
$=$ [[ 5/3 ]] @canvas
@Algebrite.check([ 3/2; 3/2; 1; 2/3; 5/3 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

</section>






