<!--
version:  1.0.0
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

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Zahlenstrahl, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Natürliche Zahlen auf dem Zahlenstrahl

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3601;achsen=0;grid=0;border=0`)

@Vektor(`G3601;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3601;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3601;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3601;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3601;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3601;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Bogen(`G3601;[60;-0.8];90;[60;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3601;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3601;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3601;[12;-5.1];$1$;#000000;1`)
@KoordText(`G3601;[24;-5.1];$2$;#000000;1`)
@KoordText(`G3601;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   5   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3602;achsen=0;grid=0;border=0`)

@Vektor(`G3602;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3602;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3602;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3602;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3602;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3602;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3602;[[72;-0.8];[72;0.8]];#000000;;-;3px`)
@Bogen(`G3602;[12;-0.8];90;[12;0.8];270;;-;5px;#ff0000`)


@KoordText(`G3602;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3602;[36;-5.1];$45$;#000000;1`)
@KoordText(`G3602;[60;-5.1];$60$;#000000;1`)
@KoordText(`G3602;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  15   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3603;achsen=0;grid=0;border=0`)

@Vektor(`G3603;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G3603;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3603;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3603;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3603;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`G3603;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3603;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3603;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3603;[0;-5.1];$14$;#000000;1`)
@KoordText(`G3603;[12;-5.1];$18$;#000000;1`)
@KoordText(`G3603;[72;-5.1];$38$;#000000;1`)
@KoordText(`G3603;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   30  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3604;achsen=0;grid=0;border=0`)

@Vektor(`G3604;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G3604;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3604;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3604;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3604;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`G3604;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3604;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3604;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3604;[0;-5.1];$120$;#000000;1`)
@KoordText(`G3604;[36;-5.1];$156$;#000000;1`)
@KoordText(`G3604;[72;-5.1];$192$;#000000;1`)
@KoordText(`G3604;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  168  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)

</div> 
</section>
