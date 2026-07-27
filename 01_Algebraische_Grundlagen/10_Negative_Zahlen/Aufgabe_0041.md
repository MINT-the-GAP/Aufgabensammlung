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

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4101;achsen=0;grid=0;border=0`)

@Vektor(`NZ4101;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4101;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`NZ4101;[45;-0.8];90;[45;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4101;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4101;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4101;[0;-5.1];$-9$;#000000;1`)
@KoordText(`NZ4101;[72;-5.1];$-1$;#000000;1`)
@KoordText(`NZ4101;[84.8;-0.15];$x$;#000000;1`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -4   ]] @canvas 
@Algebrite.check([ -4 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4102;achsen=0;grid=0;border=0`)

@Vektor(`NZ4102;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4102;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Bogen(`NZ4102;[9;-0.8];90;[9;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4102;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4102;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4102;[36;-5.1];$-8$;#000000;1`)
@KoordText(`NZ4102;[54;-5.1];$4$;#000000;1`)
@KoordText(`NZ4102;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -26  ]] @canvas 
@Algebrite.check([ -26 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4103;achsen=0;grid=0;border=0`)

@Vektor(`NZ4103;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4103;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Bogen(`NZ4103;[36;-0.8];90;[36;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4103;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4103;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4103;[0;-5.1];$-16$;#000000;1`)
@KoordText(`NZ4103;[72;-5.1];$8$;#000000;1`)
@KoordText(`NZ4103;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[   -4  ]] @canvas 
@Algebrite.check([ -4 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4104;achsen=0;grid=0;border=0`)

@Vektor(`NZ4104;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4104;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4104;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Bogen(`NZ4104;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`NZ4104;[0;-5.1];$-65$;#000000;1`)
@KoordText(`NZ4104;[36;-5.1];$-45$;#000000;1`)
@KoordText(`NZ4104;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -25  ]] @canvas 
@Algebrite.check([ -25 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>