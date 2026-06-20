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











tags: Terme, Bruchrechnung, Vorrangsregeln, leicht, niedrig, Bestimmen

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Bruchrechnung


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
$\;\;\;\; \dfrac{5}{6} \cdot \dfrac{9}{10} - \dfrac{1}{4}$ \
$=$ [[ 3/4 ]] @canvas $ - \dfrac{1}{4}$ \
$=$ [[ 1/2 ]] @canvas
@Algebrite.check([ 3/4; 1/2 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(\dfrac{7}{8} + \dfrac{1}{4}\right) : \dfrac{9}{5} - \dfrac{1}{6}$ \
$=$ [[ 9/8 ]] @canvas $ : \dfrac{9}{5} - \dfrac{1}{6}$ \
$=$ [[ 5/8 ]] @canvas $ - \dfrac{1}{6}$ \
$=$ [[ 11/24 ]] @canvas
@Algebrite.check([ 9/8; 5/8; 11/24 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ \
$\;\;\;\; \dfrac{2}{3} : \dfrac{4}{5} + \left(\dfrac{7}{8} - \dfrac{3}{8}\right) \cdot \dfrac{3}{2}$ \
$=$ [[ 5/6 ]] @canvas $ +$ [[ 1/2 ]] @canvas $ \cdot \dfrac{3}{2}$ \
$= \dfrac{5}{6} +$ [[ 3/4 ]] @canvas \
$=$ [[ 19/12 ]] @canvas
@Algebrite.check([ 5/6; 1/2; 3/4; 19/12 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(\dfrac{5}{6} - \dfrac{1}{3}\right) : \left(\dfrac{7}{10} + \dfrac{1}{5}\right) + \dfrac{3}{4} \cdot \dfrac{2}{9}$ \
$=$ [[ 1/2 ]] @canvas $ :$ [[ 9/10 ]] @canvas $ + \dfrac{3}{4} \cdot \dfrac{2}{9}$ \
$=$ [[ 5/9 ]] @canvas $ +$ [[ 1/6 ]] @canvas \
$=$ [[ 13/18 ]] @canvas
@Algebrite.check([ 1/2; 9/10; 5/9; 1/6; 13/18 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

</section>

