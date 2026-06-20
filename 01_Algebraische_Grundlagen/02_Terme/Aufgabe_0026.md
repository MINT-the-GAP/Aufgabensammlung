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
$\;\;\;\; 1{,}4 - \dfrac{3}{5} \cdot 1{,}5$ \
$= 1{,}4 -$ [[ 0,9 ]] @canvas \
$=$ [[ 0,5 ]] @canvas
@Algebrite.check([ 9/10; 1/2 ])

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
$\;\;\;\; \left(0{,}75 + \dfrac{5}{8}\right) : 1{,}1 + 0{,}25$ \
$=$ [[ 11/8 ]] @canvas $ : 1{,}1 + 0{,}25$ \
$=$ [[ 1,25 ]] @canvas $ + 0{,}25$ \
$=$ [[ 1,5 ]] @canvas
@Algebrite.check([ 11/8; 5/4; 3/2 ])

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
$\;\;\;\; 2{,}4 : \dfrac{6}{5} + \left(\dfrac{7}{8} - 0{,}375\right) \cdot \dfrac{4}{3}$ \
$=$ [[ 2 ]] @canvas $ + \left(\dfrac{7}{8} - 0{,}375\right) \cdot \dfrac{4}{3}$ \
$= 2 +$ [[ 1/2 ]] @canvas $ \cdot \dfrac{4}{3}$ \
$= 2 +$ [[ 2/3 ]] @canvas \
$=$ [[ 8/3 ]] @canvas
@Algebrite.check([ 2; 1/2; 2/3; 8/3 ])

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
$\;\;\;\; \left(1{,}8 + \dfrac{3}{10}\right) \cdot \dfrac{4}{7} - \left(\dfrac{5}{6} - 0{,}5\right) : \dfrac{2}{3}$ \
$=$ [[ 21/10 ]] @canvas $ \cdot \dfrac{4}{7} -$ [[ 1/3 ]] @canvas $ : \dfrac{2}{3}$ \
$=$ [[ 6/5 ]] @canvas $ -$ [[ 1/2 ]] @canvas \
$=$ [[ 7/10 ]] @canvas
@Algebrite.check([ 21/10; 1/3; 6/5; 1/2; 7/10 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

</section>






