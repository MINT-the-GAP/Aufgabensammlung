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











tags: Koordinatensystem, Punkt, Vierecke, Fläche, sehr leicht, niedrig, Angeben

comment: Im Koodinatensystem ist ein Viereck dargestellt. Bestimme den Flächeninhalt.

author: Martin Lommatzsch

-->




# Vierecksfläche im Koordinatensystem


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Flächeninhalt des dargestellten Vierecks **an**.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__


@CoordinateSystem(`xmin=-0.5;xmax=10.5;ymin=-0.5;ymax=10.5;width=500;id=VQ0011a;1;1;0`)
@AxisLabel(`id=VQ0011a;xlabel=$x$;ylabel=$y$`)

@Punkt(`VQ0011a;A;1;2;#ff0000;0;fix`)
@Punkt(`VQ0011a;B;7;2;#ff0000;0;fix`)
@Punkt(`VQ0011a;C;9;7;#ff0000;0;fix`)
@Punkt(`VQ0011a;D;3;7;#ff0000;0;fix`)

@Strecke(`VQ0011a;[A;B];#ff0000;1;0`)
@Strecke(`VQ0011a;[B;C];#ff0000;1;0`)
@Strecke(`VQ0011a;[C;D];#ff0000;1;0`)
@Strecke(`VQ0011a;[D;A];#ff0000;1;0`)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A=$[[  30  ]]$FE$ \


@ADetails(1=BE; Viereck)

</div> 




<div class="flex-child">

__$b)\;\;$__


@CoordinateSystem(`xmin=-0.5;xmax=10.5;ymin=-0.5;ymax=10.5;width=500;id=VQ0011b;1;1;0`)
@AxisLabel(`id=VQ0011b;xlabel=$x$;ylabel=$y$`)

@Punkt(`VQ0011b;A;5;0;#ff0000;0;fix`)
@Punkt(`VQ0011b;B;7;5;#ff0000;0;fix`)
@Punkt(`VQ0011b;C;5;10;#ff0000;0;fix`)
@Punkt(`VQ0011b;D;3;5;#ff0000;0;fix`)

@Strecke(`VQ0011b;[A;B];#ff0000;1;0`)
@Strecke(`VQ0011b;[B;C];#ff0000;1;0`)
@Strecke(`VQ0011b;[C;D];#ff0000;1;0`)
@Strecke(`VQ0011b;[D;A];#ff0000;1;0`)


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
 $A=$[[  20  ]]$FE$ \


@ADetails(1=BE; Viereck)

</div> 


</section>






