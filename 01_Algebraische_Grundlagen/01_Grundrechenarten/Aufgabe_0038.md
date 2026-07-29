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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3801;achsen=0;grid=0;border=0`)

@Vektor(`G3801;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3801;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3801;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3801;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3801;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3801;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3801;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`G3801;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`G3801;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3801;[12;-5.1];$5$;#000000;1`)
@KoordText(`G3801;[24;-5.1];$10$;#000000;1`)
@KoordText(`G3801;[79.3;-0.15];$x$;#000000;1`)

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

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3802;achsen=0;grid=0;border=0`)

@Vektor(`G3802;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3802;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3802;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3802;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Bogen(`G3802;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3802;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3802;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3802;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3802;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3802;[48;-5.1];$56$;#000000;1`)
@KoordText(`G3802;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  42   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3803;achsen=0;grid=0;border=0`)

@Vektor(`G3803;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G3803;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3803;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3803;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3803;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`G3803;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3803;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3803;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3803;[0;-5.1];$27$;#000000;1`)
@KoordText(`G3803;[72;-5.1];$33$;#000000;1`)
@KoordText(`G3803;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   31  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3804;achsen=0;grid=0;border=0`)

@Vektor(`G3804;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`G3804;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3804;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3804;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3804;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3804;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3804;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3804;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3804;[36;-5.1];$116$;#000000;1`)
@KoordText(`G3804;[72;-5.1];$128$;#000000;1`)
@KoordText(`G3804;[84.8;-0.15];$x$;#000000;1`)

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
