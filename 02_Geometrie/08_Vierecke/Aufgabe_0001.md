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











tags: Koordinatensystem, Punkt, Vierecke, sehr leicht, sehr niedrig, Angeben

comment: Ein Punkt fehlt für das beschriebene Viereck im Koordinatensystem. Kannst du die Koordinaten des Punktes finden?

author: Martin Lommatzsch

-->




# Fehlende Punkte von Vierecken


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Koordinaten des fehlenden Punktes für das beschriebene Viereck **an**.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__


@CoordinateSystem(`xmin=-0.5;xmax=10.5;ymin=-0.5;ymax=10.5;width=500;id=VQ0001a;1;1;0`)
@AxisLabel(`id=VQ0001a;xlabel=$x$;ylabel=$y$`)

@Punkt(`VQ0001a;A;1;2;#ff00ff;1;fix`)
@Punkt(`VQ0001a;B;6;2;#ff00ff;1;fix`)
@Punkt(`VQ0001a;C;8;6;#ff00ff;1;fix`)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Es handelt sich um ein Parallelogramm. \
$D($[[  3  ]]$|$[[  6  ]]$)$ \


@ADetails(1=BE; Viereck, Parallelogramm, Koordinatensystem)

</div> 




<div class="flex-child">

__$b)\;\;$__


@CoordinateSystem(`xmin=-0.5;xmax=10.5;ymin=-0.5;ymax=10.5;width=500;id=VQ0001b;1;1;0`)
@AxisLabel(`id=VQ0001b;xlabel=$x$;ylabel=$y$`)

@Punkt(`VQ0001b;A;4;1;#ff00ff;1;fix`)
@Punkt(`VQ0001b;B;6;5;#ff00ff;1;fix`)
@Punkt(`VQ0001b;D;2;5;#ff00ff;1;fix`)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Es handelt sich um eine Raute. \
$C($[[  4  ]]$|$[[  9  ]]$)$ \


@ADetails(1=BE; Viereck, Raute, Koordinatensystem)


</div> 


</section>






