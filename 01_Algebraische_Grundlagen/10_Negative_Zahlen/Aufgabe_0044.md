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

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4401;achsen=0;grid=0;border=0`)

@Vektor(`NZ4401;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4401;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`NZ4401;[45;-0.8];90;[45;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4401;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4401;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4401;[0;-5.1];$-1{,}5$;#000000;1`)
@KoordText(`NZ4401;[72;-5.1];$1{,}5$;#000000;1`)
@KoordText(`NZ4401;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  0,375  ]] @canvas 
@Algebrite.check([ 0.375 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4402;achsen=0;grid=0;border=0`)

@Vektor(`NZ4402;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4402;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Bogen(`NZ4402;[9;-0.8];90;[9;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4402;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4402;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4402;[18;-5.1];$-0{,}4$;#000000;1`)
@KoordText(`NZ4402;[72;-5.1];$0{,}5$;#000000;1`)
@KoordText(`NZ4402;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -0,55   ]] @canvas 
@Algebrite.check([ -0.55 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4403;achsen=0;grid=0;border=0`)

@Vektor(`NZ4403;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4403;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Bogen(`NZ4403;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4403;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4403;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4403;[0;-5.1];$-5{,}7$;#000000;1`)
@KoordText(`NZ4403;[63;-5.1];$-5{,}525$;#000000;1`)
@KoordText(`NZ4403;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -5,6  ]] @canvas 
@Algebrite.check([ -5.6 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4404;achsen=0;grid=0;border=0`)

@Vektor(`NZ4404;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`NZ4404;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4404;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4404;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4404;[45;-5.1];$-8{,}05$;#000000;1`)
@KoordText(`NZ4404;[72;-5.1];$0{,}2$;#000000;1`)
@KoordText(`NZ4404;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -21,8  ]] @canvas 
@Algebrite.check([ -21.8 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>
