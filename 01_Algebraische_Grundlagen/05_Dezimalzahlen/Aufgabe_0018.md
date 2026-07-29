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

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1801;achsen=0;grid=0;border=0`)

@Vektor(`D1801;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1801;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1801;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1801;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1801;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1801;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1801;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Bogen(`D1801;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`D1801;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1801;[24;-5.1];$0{,}\overline{6}$;#000000;1`)
@KoordText(`D1801;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[   2   ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-2;xmax=80;ymin=-8;ymax=4;width=900;id=D1802;achsen=0;grid=0;border=0`)

@Vektor(`D1802;[[0;0];[76;0]];#000000;u=0`)

@Strecke(`D1802;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Bogen(`D1802;[12;-0.8];90;[12;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1802;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1802;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`D1802;[[48;-0.8];[48;0.8]];#000000;;-;3px`)
@Strecke(`D1802;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1802;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1802;[0;-5.1];$0$;#000000;1`)
@KoordText(`D1802;[60;-5.1];$0{,}2$;#000000;1`)
@KoordText(`D1802;[79.3;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  0,04  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1803;achsen=0;grid=0;border=0`)

@Vektor(`D1803;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1803;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1803;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1803;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1803;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`D1803;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1803;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1803;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1803;[0;-5.1];$1{,}4$;#000000;1`)
@KoordText(`D1803;[72;-5.1];$1{,}88$;#000000;1`)
@KoordText(`D1803;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  1,72  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=D1804;achsen=0;grid=0;border=0`)

@Vektor(`D1804;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`D1804;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`D1804;[[12;-0.8];[12;0.8]];#000000;;-;3px`)
@Strecke(`D1804;[[24;-0.8];[24;0.8]];#000000;;-;3px`)
@Strecke(`D1804;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`D1804;[48;-0.8];90;[48;0.8];270;;-;5px;#ff0000`)
@Strecke(`D1804;[[60;-0.8];[60;0.8]];#000000;;-;3px`)
@Strecke(`D1804;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`D1804;[0;-5.1];$1{,}12$;#000000;1`)
@KoordText(`D1804;[60;-5.1];$1{,}14$;#000000;1`)
@KoordText(`D1804;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-type="none" -->
[[  1,136  ]] @canvas
[[?]] @Explain

@resetter

@ADetails(1=BE; Dezimalzahlen, Zahlenstrahl, Zahlenverständnis)

</div> 
</section>
