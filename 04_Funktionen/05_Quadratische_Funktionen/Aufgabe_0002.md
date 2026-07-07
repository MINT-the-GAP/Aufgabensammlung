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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Quadratische Funktionen, Scheitelpunktsform, Bruchrechnung, leicht, niedrig, Angeben

comment: Welcher Graph passt zum gegebenem Funktionsterm in Scheitelpunktsform?

author: Martin Lommatzsch

-->




# Scheitelpunktsformen zuordnen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** Funktionsnamen **an**, wie er in den Graphen dargestellt ist.



<section class="dynFlex">

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_f;1;1;1`)
@AxisLabel(`id=QF0002_f;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_f;f;0.125*(x-3)^2-2.5;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_g;1;1;1`)
@AxisLabel(`id=QF0002_g;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_g;g;-2*(x+2)^2+3;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_h;1;1;1`)
@AxisLabel(`id=QF0002_h;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_h;h;0.5*(x+1)^2-4;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_k;1;1;1`)
@AxisLabel(`id=QF0002_k;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_k;k;-0.125*(x+3)^2+2;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_l;1;1;1`)
@AxisLabel(`id=QF0002_l;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_l;l;-0.5*(x-1.5)^2+4;#ff0000`)
</div>

<div class="flex-child">
@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0002_m;1;1;1`)
@AxisLabel(`id=QF0002_m;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0002_m;m;0.25*(x-2)^2;#ff0000`)
</div>

</section>

---

<section class="dynFlex">

<div class="flex-child">
[[$f(x)$|$g(x)$|($h(x)$)|$k(x)$|$l(x)$|$m(x)$]] $= \dfrac{1}{2} \left( x + 1 \right)^2 -4$ \



</div>

<div class="flex-child">


[[$f(x)$|($g(x)$)|$h(x)$|$k(x)$|$l(x)$|$m(x)$]] $= -2\left( x + 2 \right)^2 + 3$ \



</div>

<div class="flex-child">


[[$f(x)$|$g(x)$|$h(x)$|($k(x)$)|$l(x)$|$m(x)$]] $= -\dfrac{1}{8} \left( x +3 \right)^2 + 2$ \


</div>

</section>









