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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G4001;achsen=0;grid=0;border=0`)

@Vektor(`G4001;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G4001;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G4001;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G4001;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G4001;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G4001;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Bogen(`G4001;[60;-0.8];90;[60;0.8];270;;-;5px;#ff0000`)
@Strecke(`G4001;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G4001;[0;-5.1];$0$;#000000;1`)
@KoordText(`G4001;[12;-5.1];$7$;#000000;1`)
@KoordText(`G4001;[72;-5.1];$42$;#000000;1`)
@KoordText(`G4001;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  35   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=G4002;achsen=0;grid=0;border=0`)

@Vektor(`G4002;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`G4002;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G4002;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G4002;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Bogen(`G4002;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`G4002;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G4002;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G4002;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G4002;[0;-5.1];$0$;#000000;1`)
@KoordText(`G4002;[72;-5.1];$78$;#000000;1`)
@KoordText(`G4002;[79.3;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  39   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G4003;achsen=0;grid=0;border=0`)

@Vektor(`G4003;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`G4003;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`G4003;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G4003;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G4003;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G4003;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G4003;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`G4003;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`G4003;[0;-5.1];$34$;#000000;1`)
@KoordText(`G4003;[12;-5.1];$36$;#000000;1`)
@KoordText(`G4003;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   46  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=G4004;achsen=0;grid=0;border=0`)

@Vektor(`G4004;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`G4004;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`G4004;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`G4004;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`G4004;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`G4004;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`G4004;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`G4004;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`G4004;[24;-5.1];$45$;#000000;1`)
@KoordText(`G4004;[72;-5.1];$61$;#000000;1`)
@KoordText(`G4004;[84.8;-0.15];$x$;#000000;1`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[   37  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(BE=1;Zahlenstrahl, Zahlenverständnis)
</div> 
</section>
