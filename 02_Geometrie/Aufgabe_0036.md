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










tags: Koordinatensystem, Brüche, Dezimalzahlen, Stelle, Punkt, leicht, normal, Zeichnen

comment: Punkte im Koordinatensystem von -1 bis 6 mit Brüchen und Dezimalzahlen zwischen 0 und 5 anordnen.

author: Martin Lommatzsch

-->



# Punkte anordnen mit Brüchen und Dezimalzahlen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Ziehe** den jeweiligen Punkt **auf** die angegebenen Koordinaten.




@Koordinatensystem(`xmin=-1;xmax=6;ymin=-1;ymax=6;width=600;id=GKA0036`)

@AchsenBeschriftung(`id=GKA0036;xlabel=$x$;ylabel=$y$`)


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Ziehe** den Punkt $A$ **auf** die Koordinaten $(0{,}75|\frac{5}{2})$.

@ErzeugePunkt(`GKA0036;A;0.75;2.5`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, Dezimalzahlen)

</div>

<div class="flex-child">

__$b)\;\;$__ **Ziehe** den Punkt $B$ **auf** die Koordinaten $(\frac{11}{4}|3{,}6)$.

@ErzeugePunkt(`GKA0036;B;2.75;3.6`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, Dezimalzahlen)

</div>

<div class="flex-child">

__$c)\;\;$__ **Ziehe** den Punkt $C$ **auf** die Koordinaten $(4{,}2|\frac{3}{5})$.

@ErzeugePunkt(`GKA0036;C;4.2;0.6`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, Dezimalzahlen)

</div>

<div class="flex-child">

__$d)\;\;$__ **Ziehe** den Punkt $D$ **auf** die Koordinaten $(1{,}\overline{4}|\frac{9}{2})$.

@ErzeugePunkt(`GKA0036;D;1.4444444444;4.5`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Dezimalzahlen, Periodizität)

</div>

<div class="flex-child">

__$e)\;\;$__ **Ziehe** den Punkt $E$ **auf** die Koordinaten $(\frac{7}{4}|1{,}2)$.

@ErzeugePunkt(`GKA0036;E;1.75;1.2`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, Dezimalzahlen)

</div>

<div class="flex-child">

__$f)\;\;$__ **Ziehe** den Punkt $F$ **auf** die Koordinaten $(3{,}25|\frac{13}{4})$.

@ErzeugePunkt(`GKA0036;F;3.25;3.25`,`<!-- data-solution-timer="180s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@ADetails(BE=1;Koordinatensystem, Brüche, Dezimalzahlen)

</div>


</section>