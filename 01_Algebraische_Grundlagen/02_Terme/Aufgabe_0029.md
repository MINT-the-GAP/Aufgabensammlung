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












tags: Terme, Bruchrechnung, Dezimalzahlen, negative Zahlen, Vorrangsregeln, mittel, hoch, Bestimmen

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Rationalen Zahlen





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
$\;\;\;\; -0{,}8 + \dfrac{3}{5} \cdot 0{,}5$ \
$= -0{,}8 +$ [[ 0,3 ]] @canvas \
$=$ [[ -0,5 ]] @canvas
@Algebrite.check([ 3/10; -1/2 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(-1{,}2 + \dfrac{3}{5}\right) : 0{,}75 - \dfrac{1}{3}$ \
$=$ [[ -3/5 ]] @canvas $ : 0{,}75 - \dfrac{1}{3}$ \
$=$ [[ -4/5 ]] @canvas $ - \dfrac{1}{3}$ \
$=$ [[ -17/15 ]] @canvas
@Algebrite.check([ -3/5; -4/5; -17/15 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ \
$\;\;\;\; 1{,}5 - \left(-\dfrac{2}{3}\right) \cdot 0{,}9 + \left(\dfrac{1}{4} - 0{,}5\right) : \left(-\dfrac{3}{2}\right)$ \
$= 1{,}5 - \biggl($ [[ -3/5 ]] @canvas $\biggr) + \left(\dfrac{1}{4} - 0{,}5\right) : \left(-\dfrac{3}{2}\right)$ \
$= 1{,}5 + \dfrac{3}{5} +$ [[ -1/4 ]] @canvas $ : \left(-\dfrac{3}{2}\right)$ \
$= 2{,}1 +$ [[ 1/6 ]] @canvas \
$=$ [[ 34/15 ]] @canvas
@Algebrite.check([ -3/5; -1/4; 1/6; 34/15 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(-0{,}75 - \dfrac{1}{2}\right) \cdot \left(-\dfrac{4}{5}\right) + \left(1{,}2 - \dfrac{7}{10}\right) : \left(-\dfrac{5}{4}\right)$ \
$=$ [[ -5/4 ]] @canvas $ \cdot \left(-\dfrac{4}{5}\right) +$ [[ 1/2 ]] @canvas $ : \left(-\dfrac{5}{4}\right)$ \
$=$ [[ 1 ]] @canvas $ +$ [[ -2/5 ]] @canvas \
$=$ [[ 3/5 ]] @canvas
@Algebrite.check([ -5/4; 1/2; 1; -2/5; 3/5 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

</section>


