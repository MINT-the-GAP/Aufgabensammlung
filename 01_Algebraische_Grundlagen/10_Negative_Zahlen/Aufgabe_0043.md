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

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4301;achsen=0;grid=0;border=0`)

@Vektor(`NZ4301;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4301;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Bogen(`NZ4301;[45;-0.8];90;[45;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4301;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4301;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4301;[0;-5.1];$-44$;#000000;1`)
@KoordText(`NZ4301;[63;-5.1];$5$;#000000;1`)
@KoordText(`NZ4301;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -9   ]] @canvas 
@Algebrite.check([ -9 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$b)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4302;achsen=0;grid=0;border=0`)

@Vektor(`NZ4302;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4302;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Bogen(`NZ4302;[18;-0.8];90;[18;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4302;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4302;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4302;[45;-5.1];$34$;#000000;1`)
@KoordText(`NZ4302;[72;-5.1];$85$;#000000;1`)
@KoordText(`NZ4302;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -17  ]] @canvas 
@Algebrite.check([ -17 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$c)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4303;achsen=0;grid=0;border=0`)

@Vektor(`NZ4303;[[-5;0];[80;0]];#000000;u=0`)

@Strecke(`NZ4303;[[0;-0.8];[0;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4303;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Bogen(`NZ4303;[72;-0.8];90;[72;0.8];270;;-;5px;#ff0000`)

@KoordText(`NZ4303;[0;-5.1];$-54$;#000000;1`)
@KoordText(`NZ4303;[27;-5.1];$-27$;#000000;1`)
@KoordText(`NZ4303;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[   18  ]] @canvas 
@Algebrite.check([ 18 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 

<div class="flex-child">

__$d)\;\;$__ 
<center>

@Koordinatensystem(`xmin=-8;xmax=86;ymin=-8;ymax=4;width=900;id=NZ4304;achsen=0;grid=0;border=0`)

@Vektor(`NZ4304;[[-5;0];[80;0]];#000000;u=0`)

@Bogen(`NZ4304;[0;-0.8];90;[0;0.8];270;;-;5px;#ff0000`)
@Strecke(`NZ4304;[[9;-0.8];[9;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[18;-0.8];[18;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[27;-0.8];[27;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[36;-0.8];[36;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[45;-0.8];[45;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[54;-0.8];[54;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[63;-0.8];[63;0.8]];#000000;;-;3px`)
@Strecke(`NZ4304;[[72;-0.8];[72;0.8]];#000000;;-;3px`)

@KoordText(`NZ4304;[36;-5.1];$-14$;#000000;1`)
@KoordText(`NZ4304;[72;-5.1];$42$;#000000;1`)
@KoordText(`NZ4304;[84.8;-0.15];$x$;#000000;1`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[  -70  ]] @canvas 
@Algebrite.check([ -70 ])
[[?]] @Explain

@resetter

@ADetails(1=BE; Negative Zahlen, Zahlenverständnis, Zahlenstrahl)

</div> 
</section>
