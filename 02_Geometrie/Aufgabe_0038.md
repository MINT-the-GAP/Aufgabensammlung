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










tags: Koordinatensystem, negative Zahlen, Dezimalzahlen, Brüche, Stelle, Punkt, mittel, normal, Zeichnen

comment: Punkte im Koordinatensystem von -6 bis 6 mit negativen Zahlen, Dezimalzahlen und Brüchen anordnen.

author: Martin Lommatzsch

-->



# Punkte anordnen gemischt II


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Ziehe** den jeweiligen Punkt **auf** die angegebenen Koordinaten.




@Koordinatensystem(`xmin=-6;xmax=6;ymin=-6;ymax=6;width=600;id=GKA0038`)

@AchsenBeschriftung(`id=GKA0038;xlabel=$x$;ylabel=$y$`)


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(-5|1)$.

@ErzeugePunkt(`GKA0038;A;-5;1`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, negative Zahlen)

</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(-2{,}4|-3{,}3)$.

@ErzeugePunkt(`GKA0038;B;-2.4;-3.3`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Dezimalzahlen, negative Zahlen)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(\frac{9}{2}|-\frac{13}{4})$.

@ErzeugePunkt(`GKA0038;C;4.5;-3.25`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, negative Zahlen)

</div>

<div class="flex-child">

__$d)\;\;$__ **Ziehe** den Punkt $D$ **auf** die Koordinaten $(3{,}\overline{6}|-0{,}8)$.

@ErzeugePunkt(`GKA0038;D;3.6666666667;-0.8`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Dezimalzahlen, negative Zahlen, Periodizität)

</div>

<div class="flex-child">

__$e)\;\;$__ **Ziehe** den Punkt $E$ **auf** die Koordinaten $(-\frac{6}{5}|4)$.

@ErzeugePunkt(`GKA0038;E;-1.2;4`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, negative Zahlen)

</div>

<div class="flex-child">

__$f)\;\;$__ **Ziehe** den Punkt $F$ **auf** die Koordinaten $(1{,}9|0)$.

@ErzeugePunkt(`GKA0038;F;1.9;0`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Dezimalzahlen)

</div>


</section>