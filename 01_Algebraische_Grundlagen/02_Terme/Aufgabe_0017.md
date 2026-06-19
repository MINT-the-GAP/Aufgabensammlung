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

<section class="dynFlex"  style="line-height: 3;">

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$a)\;\;$__ \
$\;\;\;\; \dfrac{3}{4} : \dfrac{9}{8} + \dfrac{1}{6}$ \
$=$ [[ 2/3 ]] @canvas $ + \dfrac{1}{6}$ \
$=$ [[ 5/6 ]] @canvas
@Algebrite.check([ 2/3; 5/6 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(\dfrac{5}{6} - \dfrac{1}{3}\right) \cdot \dfrac{9}{5} + \dfrac{1}{10}$ \
$=$ [[ 1/2 ]] @canvas $ \cdot \dfrac{9}{5} + \dfrac{1}{10}$ \
$=$ [[ 9/10 ]] @canvas $ + \dfrac{1}{10}$ \
$=$ [[ 1 ]] @canvas
@Algebrite.check([ 1/2; 9/10; 1 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$c)\;\;$__ \
$\;\;\;\; \dfrac{3}{4} + \dfrac{5}{6} \cdot \dfrac{9}{10} - \dfrac{2}{3} : \dfrac{8}{9}$ \
$= \dfrac{3}{4} +$ [[ 3/4 ]] @canvas $ - \dfrac{2}{3} : \dfrac{8}{9}$ \
$= \dfrac{3}{4} + \dfrac{3}{4} -$ [[ 3/4 ]] @canvas \
$=$ [[ 3/2 ]] @canvas $ - \dfrac{3}{4}$ \
$=$ [[ 3/4 ]] @canvas
@Algebrite.check([ 3/4; 3/4; 3/2; 3/4 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(\dfrac{7}{10} + \dfrac{1}{5}\right) : \dfrac{9}{5} + \left(\dfrac{5}{6} - \dfrac{1}{2}\right) \cdot \dfrac{3}{2}$ \
$=$ [[ 9/10 ]] @canvas $ : \dfrac{9}{5} +$ [[ 1/3 ]] @canvas $ \cdot \dfrac{3}{2}$ \
$=$ [[ 1/2 ]] @canvas $ + \dfrac{1}{3} \cdot \dfrac{3}{2}$ \
$= \dfrac{1}{2} +$ [[ 1/2 ]] @canvas \
$=$ [[ 1 ]] @canvas
@Algebrite.check([ 9/10; 1/3; 1/2; 1/2; 1 ])

@ADetails(1=BE;Bruchrechnung, Terme)

</div>

</section>





