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

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4601;achsen=0;grid=0;border=0`)

@Vektor(`NZ4601;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4601;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`NZ4601;[45;-0.8];90;[45;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4601;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4601;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4601;[0;-5.1];$-0{,}8$;#000000;1`)
@KoordText(`NZ4601;[63;-5.1];$0{,}6$;#000000;1`)
@KoordText(`NZ4601;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  0,2  ]] @canvas 
@Algebrite.check([ 0.2 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4602;achsen=0;grid=0;border=0`)

@Vektor(`NZ4602;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4602;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4602;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Bogen(`NZ4602;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`NZ4602;[9;-5.1];$-3{,}6$;#000000;1`)
@KoordText(`NZ4602;[36;-5.1];$-2{,}475$;#000000;1`)
@KoordText(`NZ4602;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -0,975  ]] @canvas 
@Algebrite.check([ -0.975 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4603;achsen=0;grid=0;border=0`)

@Vektor(`NZ4603;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4603;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Bogen(`NZ4603;[27;-0.8];90;[27;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4603;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4603;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4603;[0;-5.1];$-9$;#000000;1`)
@KoordText(`NZ4603;[72;-5.1];$-8$;#000000;1`)
@KoordText(`NZ4603;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -8,625  ]] @canvas 
@Algebrite.check([ -8.625 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4604;achsen=0;grid=0;border=0`)

@Vektor(`NZ4604;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4604;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Bogen(`NZ4604;[54;-0.8];90;[54;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4604;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4604;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4604;[0;-5.1];$-7{,}5$;#000000;1`)
@KoordText(`NZ4604;[63;-5.1];$-2{,}25$;#000000;1`)
@KoordText(`NZ4604;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[   -3   ]] @canvas 
@Algebrite.check([ -3 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>