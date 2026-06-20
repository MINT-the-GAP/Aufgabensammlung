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
$\;\;\;\; 1{,}5 - \dfrac{3}{4} : \dfrac{3}{2}$ \
$= 1{,}5 -$ [[ 0,5 ]] @canvas \
$=$ [[ 1 ]] @canvas
@Algebrite.check([ 1/2; 1 ])

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
$\;\;\;\; \left(0{,}6 + \dfrac{7}{10}\right) \cdot \dfrac{5}{13} + 0{,}2$ \
$=$ [[ 1,3 ]] @canvas $ \cdot \dfrac{5}{13} + 0{,}2$ \
$=$ [[ 0,5 ]] @canvas $ + 0{,}2$ \
$=$ [[ 0,7 ]] @canvas
@Algebrite.check([ 13/10; 1/2; 7/10 ])

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
$\;\;\;\; 2{,}1 : \dfrac{7}{5} - \left(\dfrac{3}{4} - 0{,}25\right) \cdot \dfrac{2}{3}$ \
$=$ [[ 1,5 ]] @canvas $ - \left(\dfrac{3}{4} - 0{,}25\right) \cdot \dfrac{2}{3}$ \
$= 1{,}5 -$ [[ 0,5 ]] @canvas $ \cdot \dfrac{2}{3}$ \
$= 1{,}5 -$ [[ 1/3 ]] @canvas \
$=$ [[ 7/6 ]] @canvas
@Algebrite.check([ 3/2; 1/2; 1/3; 7/6 ])

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
$\;\;\;\; \left(1{,}75 - \dfrac{1}{2}\right) \cdot \dfrac{4}{5} + \left(0{,}9 + \dfrac{3}{5}\right) : 3$ \
$=$ [[ 1,25 ]] @canvas $ \cdot \dfrac{4}{5} + \left(0{,}9 + \dfrac{3}{5}\right) : 3$ \
$=$ [[ 1 ]] @canvas $ +$ [[ 1,5 ]] @canvas $ : 3$ \
$= 1 +$ [[ 0,5 ]] @canvas \
$=$ [[ 1,5 ]] @canvas
@Algebrite.check([ 5/4; 1; 3/2; 1/2; 3/2 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, Terme)

</div>

</section>


