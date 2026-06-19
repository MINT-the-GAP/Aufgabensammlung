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
data-solution-button="5"  -->
__$a)\;\;$__ \
$\;\;\;\; -0{,}9 + \dfrac{5}{6} \cdot 0{,}6$ \
$= -0{,}9 +$ [[ 0,5 ]] @canvas \
$=$ [[ -0,4 ]] @canvas
@Algebrite.check([ 1/2; -2/5 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(1{,}2 - \dfrac{7}{10}\right) : \left(-\dfrac{5}{4}\right) - 0{,}1$ \
$=$ [[ 0,5 ]] @canvas $ : \left(-\dfrac{5}{4}\right) - 0{,}1$ \
$=$ [[ -0,4 ]] @canvas $ - 0{,}1$ \
$=$ [[ -0,5 ]] @canvas
@Algebrite.check([ 1/2; -2/5; -1/2 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$c)\;\;$__ \
$\;\;\;\; \left(-\dfrac{3}{4}\right) : 0{,}5 + \left(1{,}1 - \dfrac{2}{5}\right) \cdot \left(-\dfrac{2}{3}\right)$ \
$=$ [[ -3/2 ]] @canvas $ + \left(1{,}1 - \dfrac{2}{5}\right) \cdot \left(-\dfrac{2}{3}\right)$ \
$= -\dfrac{3}{2} +$ [[ 0,7 ]] @canvas $ \cdot \left(-\dfrac{2}{3}\right)$ \
$= -\dfrac{3}{2} +$ [[ -7/15 ]] @canvas \
$=$ [[ -59/30 ]] @canvas
@Algebrite.check([ -3/2; 7/10; -7/15; -59/30 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(-1{,}4 + \dfrac{3}{5}\right) \cdot \left(-\dfrac{5}{4}\right) - \left(0{,}5 + \dfrac{1}{4}\right) : \left(-\dfrac{3}{2}\right)$ \
$=$ [[ -0,8 ]] @canvas $ \cdot \left(-\dfrac{5}{4}\right) -$ [[ 0,75 ]] @canvas $ : \left(-\dfrac{3}{2}\right)$ \
$=$ [[ 1 ]] @canvas $ -$ [[ -1/2 ]] @canvas \
$=$ [[ 3/2 ]] @canvas
@Algebrite.check([ -4/5; 3/4; 1; -1/2; 3/2 ])

@ADetails(1=BE;Bruchrechnung, Dezimalzahlen, negative Zahlen, Terme)

</div>

</section>

