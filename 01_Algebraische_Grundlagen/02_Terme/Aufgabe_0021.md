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











tags: Terme, Bruchrechnung, negative Zahlen, Vorrangsregeln, mittel, normal, Bestimmen

comment: Verrechne Schrittweise den Term. Lerne wie Termumformungen niedergeschrieben werden.

author: Martin Lommatzsch

-->




# Termeumformen mit Bruchrechnung und negativen Zahlen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
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
$\;\;\;\; -\dfrac{5}{6} + \dfrac{3}{4} : \dfrac{9}{8}$ \
$= -\dfrac{5}{6} +$ [[ 2/3 ]] @canvas \
$=$ [[ -1/6 ]] @canvas
@Algebrite.check([ 2/3; -1/6 ])

@ADetails(1=BE;Bruchrechnung, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$b)\;\;$__ \
$\;\;\;\; \left(-\dfrac{7}{10} + \dfrac{1}{5}\right) \cdot \dfrac{5}{3} - \dfrac{1}{6}$ \
$=$ [[ -1/2 ]] @canvas $ \cdot \dfrac{5}{3} - \dfrac{1}{6}$ \
$=$ [[ -5/6 ]] @canvas $ - \dfrac{1}{6}$ \
$=$ [[ -1 ]] @canvas
@Algebrite.check([ -1/2; -5/6; -1 ])

@ADetails(1=BE;Bruchrechnung, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$c)\;\;$__ \
$\;\;\;\; \dfrac{3}{8} - \left(-\dfrac{2}{3}\right) : \dfrac{4}{9} - \dfrac{5}{8} + \dfrac{1}{4}$ \
$= \dfrac{3}{8} - \biggl($ [[ -3/2 ]] @canvas $\biggr) - \dfrac{5}{8} + \dfrac{1}{4}$ \
$=$ [[ 15/8 ]] @canvas $ - \dfrac{5}{8} + \dfrac{1}{4}$ \
$=$ [[ 5/4 ]] @canvas $ + \dfrac{1}{4}$ \
$=$ [[ 3/2 ]] @canvas
@Algebrite.check([ -3/2; 15/8; 5/4; 3/2 ])

@ADetails(1=BE;Bruchrechnung, negative Zahlen, Terme)

</div>

<div class="flex-child">

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$d)\;\;$__ \
$\;\;\;\; \left(-\dfrac{5}{6} + \dfrac{1}{3}\right) : \left(-\dfrac{3}{4}\right) + \left(\dfrac{2}{5} - \dfrac{7}{10}\right) \cdot \dfrac{5}{3}$ \
$=$ [[ -1/2 ]] @canvas $ : \left(-\dfrac{3}{4}\right) +$ [[ -3/10 ]] @canvas $ \cdot \dfrac{5}{3}$ \
$=$ [[ 2/3 ]] @canvas $ +$ [[ -1/2 ]] @canvas \
$=$ [[ 1/6 ]] @canvas
@Algebrite.check([ -1/2; -3/10; 2/3; -1/2; 1/6 ])

@ADetails(1=BE;Bruchrechnung, negative Zahlen, Terme)

</div>

</section>



