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











tags: Zahlenstrahl, Zahlenverständnis, Negative Zahlen, sehr leicht, niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Ganze Zahlen auf dem Zahlenstrahl

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4201;achsen=0;grid=0;border=0`)

@Vektor(`NZ4201;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`NZ4201;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4201;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4201;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4201;[63;-5.1];$1$;#000000;1`)
@KoordText(`NZ4201;[72;-5.1];$6$;#000000;1`)
@KoordText(`NZ4201;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -34  ]] @canvas 
@Algebrite.check([ -34 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4202;achsen=0;grid=0;border=0`)

@Vektor(`NZ4202;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4202;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Bogen(`NZ4202;[27;-0.8];90;[27;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4202;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4202;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4202;[54;-5.1];$0$;#000000;1`)
@KoordText(`NZ4202;[72;-5.1];$12$;#000000;1`)
@KoordText(`NZ4202;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -18  ]] @canvas 
@Algebrite.check([ -18 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4203;achsen=0;grid=0;border=0`)

@Vektor(`NZ4203;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4203;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4203;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Bogen(`NZ4203;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`NZ4203;[0;-5.1];$-24$;#000000;1`)
@KoordText(`NZ4203;[27;-5.1];$-6$;#000000;1`)
@KoordText(`NZ4203;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[   24  ]] @canvas 
@Algebrite.check([ 24 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4204;achsen=0;grid=0;border=0`)

@Vektor(`NZ4204;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4204;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Bogen(`NZ4204;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4204;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4204;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4204;[9;-5.1];$-84$;#000000;1`)
@KoordText(`NZ4204;[18;-5.1];$0$;#000000;1`)
@KoordText(`NZ4204;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  168  ]] @canvas 
@Algebrite.check([ 168 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>
