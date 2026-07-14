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











tags: Koordinatensystem, Stelle, Punkt, Dezimalzahlen, Negative Zahlen, leicht, normal, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit negativen Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte ablesen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** die fehlende Information zu den Punkten als Dezimalzahl **an**.




@Koordinatensystem(`xmin=-5;xmax=6;ymin=-5;ymax=6;width=700;id=K0013`)

@AchsenBeschriftung(`id=K0013;xlabel=$x$;ylabel=$y$`)


@Punkt(`K0013;A;-2.2;1.5;fix`)
@Punkt(`K0013;B;3.7;-4.4;fix`)
@Punkt(`K0013;C;-1.7;4.9;fix`)
@Punkt(`K0013;D;-1.7;4.9;fix`)
@Punkt(`K0013;E;2.4;-1.2;fix`)
@Punkt(`K0013;F;1.7;-4.9;fix`)


<section class="dynFlex">

<div class="flex-child">



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A($[[  -2,2  ]]$|$[[  1,5  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Negative Zahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $B($[[  3,7  ]]$|$[[  -4,4  ]]$)$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Negative Zahlen, Punkt)

</div>

<div class="flex-child">




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 [[  F  ]]$( 1,7 | -4,9 )$ \


@ADetails(1=BE; Koordinatensystem, Dezimalzahlen, Negative Zahlen, Punkt)


</div>

</section>





