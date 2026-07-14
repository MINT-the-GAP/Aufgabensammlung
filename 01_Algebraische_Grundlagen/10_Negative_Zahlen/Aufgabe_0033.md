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



@Koordinatensystem(`xmin=-5;xmax=6;ymin=-5;ymax=6;width=700;id=N0033`)

@AchsenBeschriftung(`id=N0033;xlabel=$x$;ylabel=$y$`)


@Punkt(`N0033;A;3;-2;fix`)
@Punkt(`N0033;B;-4;2;fix`)
@Punkt(`N0033;C;1;-5;fix`)
@Punkt(`N0033;D;-4;-3;fix`)
@Punkt(`N0033;E;4;3;fix`)
@Punkt(`N0033;F;-1;5;fix`)



<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ33.png)

</center>

<section class="dynFlex">
<div class="flex-child">
$A($[[  3  ]] @canvas$|$[[  -2 ]] @canvas$)$ \

</div>
<div class="flex-child">

$B($[[  -4 ]] @canvas$|$[[  2  ]] @canvas$)$ \

</div>
<div class="flex-child">

[[  F  ]] @canvas$( -1 | 5 )$ \

</div>
</section>










