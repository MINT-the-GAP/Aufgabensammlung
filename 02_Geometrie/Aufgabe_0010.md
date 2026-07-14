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











tags: Koordinatensystem, Stelle, Punkt, Dezimalzahlen, leicht, niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte ablesen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** die fehlende Information zu den Punkten als Dezimalzahl **an**.




@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=700;id=K0010`)

@AchsenBeschriftung(`id=K0010;xlabel=$x$;ylabel=$y$`)


@Punkt(`K0010;A;1;6.7;fix`)
@Punkt(`K0010;B;8.6;4.1;fix`)
@Punkt(`K0010;C;6.6;8.6;fix`)
@Punkt(`K0010;D;8.6;6.6;fix`)
@Punkt(`K0010;E;6.6;4.1;fix`)


<section class="dynFlex">

<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A($[[  1    ]]$|$[[  6,7  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $B($[[  8,6  ]]$|$[[  4,1  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 [[  C  ]]$( 6,6 | 8,6 )$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Punkt)


</div>

</section>





