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











tags: Zahlenstrahl, Zahlenverständnis, Dezimalzahlen, sehr leicht, niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Dezimalzahlen auf dem Zahlenstrahl

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1701;achsen=0;grid=0;border=0`)

@Vektor(`D1701;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1701;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1701;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1701;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1701;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1701;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Bogen(`D1701;[60;-0.8];90;[60;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1701;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1701;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1701;[12;-5.1];$1$;#000000;1`)
@KoordText(`D1701;[24;-5.1];$2$;#000000;1`)
@KoordText(`D1701;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[   5   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1702;achsen=0;grid=0;border=0`)

@Vektor(`D1702;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1702;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1702;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1702;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Bogen(`D1702;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1702;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1702;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1702;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1702;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1702;[48;-5.1];$3$;#000000;1`)
@KoordText(`D1702;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  2,25   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1703;achsen=0;grid=0;border=0`)

@Vektor(`D1703;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1703;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1703;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1703;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Bogen(`D1703;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1703;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1703;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1703;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1703;[0;-5.1];$1{,}6$;#000000;1`)
@KoordText(`D1703;[24;-5.1];$1{,}85$;#000000;1`)
@KoordText(`D1703;[72;-5.1];$2{,}35$;#000000;1`)
@KoordText(`D1703;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  1,975  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1704;achsen=0;grid=0;border=0`)

@Vektor(`D1704;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1704;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1704;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1704;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1704;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1704;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1704;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`D1704;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`D1704;[0;-5.1];$2{,}5$;#000000;1`)
@KoordText(`D1704;[48;-5.1];$3$;#000000;1`)
@KoordText(`D1704;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  3,25  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 
</section>