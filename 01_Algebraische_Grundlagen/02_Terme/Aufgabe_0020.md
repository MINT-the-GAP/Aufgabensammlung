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
data-solution-button="5"  -->
__$a)\;\;$__ \
$\;\;\;\; \dfrac{5}{8} \cdot \dfrac{12}{25} + \dfrac{1}{10}$ \
$=$ [[ 3/10 ]] @canvas $ + \dfrac{1}{10}$ \
$=$ [[ 2/5 ]] @canvas
@Algebrite.check([ 3/10; 2/5 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(\dfrac{5}{12} + \dfrac{7}{12}\right) : \dfrac{4}{3} + \dfrac{1}{8}$ \
$=$ [[ 1 ]] @canvas $ : \dfrac{4}{3} + \dfrac{1}{8}$ \
$=$ [[ 3/4 ]] @canvas $ + \dfrac{1}{8}$ \
$=$ [[ 7/8 ]] @canvas
@Algebrite.check([ 1; 3/4; 7/8 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$c)\;\;$__ \
$\;\;\;\; \dfrac{7}{10} - \dfrac{3}{5} \cdot \dfrac{5}{9} + \dfrac{4}{7} : \dfrac{8}{7}$ \
$= \dfrac{7}{10} -$ [[ 1/3 ]] @canvas $ + \dfrac{4}{7} : \dfrac{8}{7}$ \
$= \dfrac{7}{10} - \dfrac{1}{3} +$ [[ 1/2 ]] @canvas \
$=$ [[ 11/30 ]] @canvas $ + \dfrac{1}{2}$ \
$=$ [[ 13/15 ]] @canvas
@Algebrite.check([ 1/3; 1/2; 11/30; 13/15 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(\dfrac{3}{4} - \dfrac{1}{6}\right) : \dfrac{7}{12} + \left(\dfrac{5}{8} + \dfrac{1}{4}\right) \cdot \dfrac{4}{7}$ \
$=$ [[ 7/12 ]] @canvas $ : \dfrac{7}{12} + \left(\dfrac{5}{8} + \dfrac{1}{4}\right) \cdot \dfrac{4}{7}$ \
$=$ [[ 1 ]] @canvas $ +$ [[ 7/8 ]] @canvas $ \cdot \dfrac{4}{7}$ \
$= 1 +$ [[ 1/2 ]] @canvas \
$=$ [[ 3/2 ]] @canvas
@Algebrite.check([ 7/12; 1; 7/8; 1/2; 3/2 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

</section>


