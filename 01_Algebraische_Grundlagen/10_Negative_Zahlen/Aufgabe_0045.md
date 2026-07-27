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











tags: Zahlenstrahl, Zahlenverständnis, Negative Zahlen, Dezimalzahlen, leicht, niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Ganze Zahlen auf dem Zahlenstrahl

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl als Dezimalzahl **an**.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4501;achsen=0;grid=0;border=0`)

@Vektor(`NZ4501;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4501;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4501;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Bogen(`NZ4501;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`NZ4501;[0;-5.1];$-8$;#000000;1`)
@KoordText(`NZ4501;[45;-5.1];$-2{,}5$;#000000;1`)
@KoordText(`NZ4501;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  0,8   ]] @canvas 
@Algebrite.check([ 0.8 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4502;achsen=0;grid=0;border=0`)

@Vektor(`NZ4502;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4502;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Bogen(`NZ4502;[9;-0.8];90;[9;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4502;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4502;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4502;[0;-5.1];$-1{,}3$;#000000;1`)
@KoordText(`NZ4502;[63;-5.1];$-0{,}25$;#000000;1`)
@KoordText(`NZ4502;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -1,15  ]] @canvas 
@Algebrite.check([ -1.15 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4503;achsen=0;grid=0;border=0`)

@Vektor(`NZ4503;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4503;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Bogen(`NZ4503;[18;-0.8];90;[18;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4503;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4503;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4503;[9;-5.1];$-6{,}35$;#000000;1`)
@KoordText(`NZ4503;[72;-5.1];$2{,}4$;#000000;1`)
@KoordText(`NZ4503;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -5,1  ]] @canvas 
@Algebrite.check([ -5.1 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4504;achsen=0;grid=0;border=0`)

@Vektor(`NZ4504;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`NZ4504;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4504;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4504;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4504;[27;-5.1];$-1{,}125$;#000000;1`)
@KoordText(`NZ4504;[72;-5.1];$3{,}25$;#000000;1`)
@KoordText(`NZ4504;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -3,75  ]] @canvas 
@Algebrite.check([ -3.75 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>


