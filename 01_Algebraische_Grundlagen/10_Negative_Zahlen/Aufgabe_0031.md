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





tags: Negative Zahlen, Koordinatensystem, Stelle, Punkt, sehr leicht, sehr niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen.

author: Martin Lommatzsch

-->




# Punkte im Koordinatensystem


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Stelle der angegebenen Punkte **an**.



@Koordinatensystem(`xmin=-5;xmax=6;ymin=-5;ymax=6;width=700;id=N0031`)

@AchsenBeschriftung(`id=N0031;xlabel=$x$;ylabel=$y$`)


@Punkt(`N0031;A;-4;2;fix`)
@Punkt(`N0031;B;-5;-3;fix`)
@Punkt(`N0031;C;2;-4;fix`)
@Punkt(`N0031;D;3;4;fix`)
@Punkt(`N0031;E;3;-1;fix`)
@Punkt(`N0031;F;-1;2;fix`)



<section class="dynFlex">
<div class="flex-child">
$A($[[  -4 ]] @canvas$|$[[  2  ]] @canvas$)$ \

</div>
<div class="flex-child">

$B($[[  -5 ]] @canvas$|$[[  -3  ]] @canvas$)$ \

</div>
<div class="flex-child">

[[  E  ]] @canvas$( 3 | -1 )$ \

</div>
</section>










