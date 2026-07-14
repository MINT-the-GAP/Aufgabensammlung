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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Ableitungen, grafisches Ableiten, mittel, niedrig, Angeben

comment: Welcher Graph ist die Ableitung welchen Graphen?

author: Martin Lommatzsch

-->




# Grafische Ableitung finden


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Gib an**, welcher Graphen die Ableitung welches Graphen ist.



<section class="dynFlex">

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_f;1;1;1`)
@AxisLabel(`id=ABL0005_f;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_f;f;-0.5*(x-1.2)^2-2.25;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_g;1;1;1`)
@AxisLabel(`id=ABL0005_g;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_g;g;2*x-1.2;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_h;1;1;1`)
@AxisLabel(`id=ABL0005_h;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_h;h;0.5*(x-1.2)^2-2.25;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_k;1;1;1`)
@AxisLabel(`id=ABL0005_k;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_k;k;-2*x+1.2;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_l;1;1;1`)
@AxisLabel(`id=ABL0005_l;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_l;l;-0.25*(x-1.2)^2-2.25;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=ABL0005_m;1;1;1`)
@AxisLabel(`id=ABL0005_m;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`ABL0005_m;m;-x+1.2;#ff0000`)
</div>

</section>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[ m ]] ist äquivalent zur ersten Ableitung von [[ f ]]. \


@ADetails(1=BE; Differentiation)















