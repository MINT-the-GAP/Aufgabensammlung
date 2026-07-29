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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3701;achsen=0;grid=0;border=0`)

@Vektor(`G3701;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3701;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3701;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3701;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3701;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3701;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3701;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`G3701;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`G3701;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3701;[12;-5.1];$8$;#000000;1`)
@KoordText(`G3701;[24;-5.1];$16$;#000000;1`)
@KoordText(`G3701;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   48  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3702;achsen=0;grid=0;border=0`)

@Vektor(`G3702;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3702;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3702;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3702;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3702;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`G3702;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3702;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3702;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3702;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3702;[72;-5.1];$150$;#000000;1`)
@KoordText(`G3702;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  100  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3703;achsen=0;grid=0;border=0`)

@Vektor(`G3703;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`G3703;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3703;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3703;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3703;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3703;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3703;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3703;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3703;[36;-5.1];$77$;#000000;1`)
@KoordText(`G3703;[72;-5.1];$110$;#000000;1`)
@KoordText(`G3703;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   44  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3704;achsen=0;grid=0;border=0`)

@Vektor(`G3704;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G3704;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3704;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3704;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3704;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`G3704;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3704;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3704;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3704;[0;-5.1];$72$;#000000;1`)
@KoordText(`G3704;[72;-5.1];$120$;#000000;1`)
@KoordText(`G3704;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  104  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 
</section>
