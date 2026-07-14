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












tags: Dreiecke, Länge, Fläche, Umfang, Dezimalzahlen, mittel, niedrig, Angeben

comment: Berechne die unbekannte Seitenlänge aus dem Umfang einer dreieckigen Fläche in Dezimalzahlen.

author: Martin Lommatzsch

-->




# Seitenlänge aus dem Dreiecksumfang


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Gib** die fehlende Seitenlänge aus den beschriebenen Werten eines Dreiecks **an**.




<section class="dynFlex">


<div class="flex-child">

__$a)\;\;$__ $u=14\,$cm $\;\;\wedge\;\; b=5,4\,$cm $\;\;\wedge\;\; c=3,8\,$cm


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$a=$[[  4,8  ]]cm
@Algebrite.check( 4.8 )


@ADetails(1=BE; Dreieck, Umfang, Einheiten, Dezimalzahlen)


</div>

<div class="flex-child">

__$b)\;\;$__ $u=0,8\,$cm $\;\;\wedge\;\; b=0,15\,$cm $\;\;\wedge\;\; c=0,34\,$cm


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$a=$[[  0,31  ]]cm
@Algebrite.check( 0.31 )


@ADetails(1=BE; Dreieck, Umfang, Einheiten, Dezimalzahlen)



</div>

</section>









