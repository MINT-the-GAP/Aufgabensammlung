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

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3901;achsen=0;grid=0;border=0`)

@Vektor(`G3901;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3901;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3901;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Bogen(`G3901;[24;-0.8];90;[24;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3901;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3901;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3901;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3901;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3901;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3901;[12;-5.1];$3$;#000000;1`)
@KoordText(`G3901;[48;-5.1];$12$;#000000;1`)
@KoordText(`G3901;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   6   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G3902;achsen=0;grid=0;border=0`)

@Vektor(`G3902;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G3902;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3902;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3902;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3902;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3902;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3902;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`G3902;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`G3902;[0;-5.1];$0$;#000000;1`)
@KoordText(`G3902;[36;-5.1];$51$;#000000;1`)
@KoordText(`G3902;[72;-5.1];$102$;#ff0000;1`)
@KoordText(`G3902;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  102  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3903;achsen=0;grid=0;border=0`)

@Vektor(`G3903;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`G3903;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3903;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G3903;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G3903;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3903;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3903;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3903;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3903;[36;-5.1];$57$;#000000;1`)
@KoordText(`G3903;[72;-5.1];$66$;#000000;1`)
@KoordText(`G3903;[84.8;-0.15];$x$;#000000;1`)

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

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G3904;achsen=0;grid=0;border=0`)

@Vektor(`G3904;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G3904;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G3904;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Bogen(`G3904;[24;-0.8];90;[24;0.8];270;;-;5px;#ff0000`)
@Strecke(`G3904;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G3904;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G3904;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G3904;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G3904;[0;-5.1];$16$;#000000;1`)
@KoordText(`G3904;[60;-5.1];$96$;#000000;1`)
@KoordText(`G3904;[84.8;-0.15];$x$;#000000;1`)

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
</section>
