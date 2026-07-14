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











tags: Koordinatensystem, Stelle, Punkt, sehr leicht, sehr niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit negativen Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte anordnen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Ziehe** den jweiligen Punkt **auf** die angegebenen Koordinaten.




@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=600;id=GKA0017`)

@AchsenBeschriftung(`id=GKA0017;xlabel=$x$;ylabel=$y$`)


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(3|8)$.

@ErzeugePunkt(`GKA0017;A;3;8`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)
@ADetails(BE=1;Koordinatensystem, Punkt)

</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(7|5)$.

@ErzeugePunkt(`GKA0017;B;7;5`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3"  -->`)

@ADetails(BE=1;Koordinatensystem, Punkt)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(2|4)$.

@ErzeugePunkt(`GKA0017;C;2;4`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3"  -->`)

@ADetails(BE=1;Koordinatensystem, Punkt)

</div>

<div class="flex-child">

__$d)\;\;$__ **Ziehe** den Punkt $D$ **auf** die Koordinaten $(9|2)$.

@ErzeugePunkt(`GKA0017;D;9;2`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3"  -->`)

@ADetails(BE=1;Koordinatensystem, Punkt)

</div>

<div class="flex-child">

__$e)\;\;$__ **Ziehe** den Punkt $E$ **auf** die Koordinaten $(5|7)$.

@ErzeugePunkt(`GKA0017;E;5;7`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3"  -->`)

@ADetails(BE=1;Koordinatensystem, Punkt)

</div>

<div class="flex-child">

__$f)\;\;$__ **Ziehe** den Punkt $F$ **auf** die Koordinaten $(1|6)$.

@ErzeugePunkt(`GKA0017;F;1;6`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3"  -->`)

@ADetails(BE=1;Koordinatensystem, Punkt)

</div>


</section>



