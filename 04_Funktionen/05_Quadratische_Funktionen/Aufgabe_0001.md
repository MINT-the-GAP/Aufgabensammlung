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











tags: Quadratische Funktionen, Scheitelpunktsform, Bruchrechnung, leicht, niedrig, Angeben

comment: Welcher Graph passt zum gegebenem Funktionsterm in Scheitelpunktsform?

author: Martin Lommatzsch

-->



# Scheitelpunktsformen zuordnen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** Funktionsnamen **an**, wie er in den Graphen dargestellt ist.



<section class="dynFlex">

<div class="flex-child">


@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_f;1;1;1`)
@AxisLabel(`id=QF0001_f;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_f;f;(x+2)^2-2;#ff0000`)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_g;1;1;1`)
@AxisLabel(`id=QF0001_g;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_g;g;-0.5*(x-0.5)^2+1;#ff0000`)

</div>

<div class="flex-child">


@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_h;1;1;1`)
@AxisLabel(`id=QF0001_h;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_h;h;0.5*(x-0.5)^2-3;#ff0000`)

</div>

<div class="flex-child">


@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_k;1;1;1`)
@AxisLabel(`id=QF0001_k;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_k;k;-1*(x-3)^2+2;#ff0000`)

</div>

<div class="flex-child">

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_l;1;1;1`)
@AxisLabel(`id=QF0001_l;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_l;l;-0.25*(x+0.5)^2+3;#ff0000`)

</div>

<div class="flex-child">


@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=QF0001_m;1;1;1`)
@AxisLabel(`id=QF0001_m;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`QF0001_m;m;0.25*(x+1)^2;#ff0000`)

</div>

</section>

---


<section class="dynFlex">

<div class="flex-child">
[[$f(x)$|$g(x)$|$h(x)$|$k(x)$|($l(x)$)|$m(x)$]] $= -\dfrac{1}{4} \left( x + \dfrac{1}{2} \right)^2 + 3$ \



</div>

<div class="flex-child">


[[($f(x)$)|$g(x)$|$h(x)$|$k(x)$|$l(x)$|$m(x)$]] $= \left( x + 2 \right)^2 - 2$ \



</div>

<div class="flex-child">


[[$f(x)$|($g(x)$)|$h(x)$|$k(x)$|$l(x)$|$m(x)$]] $= -\dfrac{1}{2} \left( x - \dfrac{1}{2} \right)^2 + 1$ \


</div>

</section>







