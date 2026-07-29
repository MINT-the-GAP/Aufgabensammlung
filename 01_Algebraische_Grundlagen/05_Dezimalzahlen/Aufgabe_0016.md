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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1601;achsen=0;grid=0;border=0`)

@Vektor(`D1601;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1601;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1601;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1601;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1601;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1601;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Bogen(`D1601;[60;-0.8];90;[60;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1601;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1601;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1601;[48;-5.1];$1$;#000000;1`)
@KoordText(`D1601;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  1,25  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1602;achsen=0;grid=0;border=0`)

@Vektor(`D1602;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1602;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Bogen(`D1602;[12;-0.8];90;[12;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1602;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1602;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1602;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1602;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1602;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1602;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1602;[72;-5.1];$4{,}5$;#000000;1`)
@KoordText(`D1602;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  0,75  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1603;achsen=0;grid=0;border=0`)

@Vektor(`D1603;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1603;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1603;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1603;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1603;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`D1603;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1603;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1603;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1603;[0;-5.1];$3{,}2$;#000000;1`)
@KoordText(`D1603;[12;-5.1];$3{,}22$;#000000;1`)
@KoordText(`D1603;[72;-5.1];$3{,}32$;#000000;1`)
@KoordText(`D1603;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  3,28  ]] @canvas
[[?]] @Explain


@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1604;achsen=0;grid=0;border=0`)

@Vektor(`D1604;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1604;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1604;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1604;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1604;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`D1604;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1604;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1604;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1604;[0;-5.1];$0{,}21$;#000000;1`)
@KoordText(`D1604;[72;-5.1];$0{,}27$;#000000;1`)
@KoordText(`D1604;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  0,25  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 
</section>