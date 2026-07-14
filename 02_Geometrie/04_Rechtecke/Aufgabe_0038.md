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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md










tags: Koordinatensystem, Punkt, Rechteck, Fläche, sehr leicht, niedrig, Angeben

comment: Im Koodinatensystem ist ein Rechteck dargestellt. Bestimme den Flächeninhalt.

author: Martin Lommatzsch

-->




# Fehlende Punkte von Vierecken


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Flächeninhalt des dargestellten Vierecks **an**.


<section class="dynFlex">

<div class="flex-child">


__$a)\;\;$__


@CoordinateSystem(`xmin=-1;xmax=11;ymin=-1;ymax=11;width=500;id=RA0038a;1;1;0`)

@Flaeche(`RA0038a;[[6;1];[10;1];[10;10];[6;10]];#00ff00;0.5;inhalt=0;umfang=0`)





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A=$[[  36  ]]$FE$ \
@Algebrite.check( 36 )

@ADetails(1=BE; Fläche)

</div> 




<div class="flex-child">

__$b)\;\;$__



@CoordinateSystem(`xmin=-1;xmax=11;ymin=-1;ymax=11;width=500;id=RA0038b;1;1;0`)

@Flaeche(`RA0038b;[[0;2];[10;2];[10;7];[0;7]];#00ff00;0.5;inhalt=0;umfang=0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A=$[[  50  ]]$FE$ \
@Algebrite.check( 50 )

@ADetails(1=BE; Fläche)

</div> 


</section>






