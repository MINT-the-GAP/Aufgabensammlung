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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Koordinatensystem, Stelle, Punkt, Dezimalzahlen, leicht, niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte ablesen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** die fehlende Information zu den Punkten als Dezimalzahl **an**.



@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=700;id=K0009`)

@AchsenBeschriftung(`id=K0009;xlabel=$x$;ylabel=$y$`)


@Punkt(`K0009;A;4.4;8.2;fix`)
@Punkt(`K0009;B;1.7;2.8;fix`)
@Punkt(`K0009;C;5.9;3.8;fix`)
@Punkt(`K0009;D;7.4;6.7;fix`)
@Punkt(`K0009;E;9.4;0.3;fix`)



<section class="dynFlex">

<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A($[[  4,4  ]]$|$[[  8,2  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $B($[[  1,7  ]]$|$[[  2,8  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 [[  E  ]]$( 9,4 | 0,3 )$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)


</div>

</section>





