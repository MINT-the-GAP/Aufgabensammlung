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

















tags: Bruchrechnung, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Eine Fläche wurde in Bruchanteile von Bruchanteile eingefärbt unterteilt. Beantworte die Fragen dazu.

author: Martin Lommatzsch

-->




# Eingefärbte Anteile von Anteilen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.



<!-- style="max-width:800px" -->
@Koordinatensystem(`xmin=-0.5;xmax=32.5;ymin=-0.5;ymax=8.2;width=800;id=BR0100;achsen=0;grid=0;border=0`)

@KoordText(`BR0100;[0.4;7.2];I);#000000;1`)
@KoordText(`BR0100;[11.4;7.2];II);#000000;1`)
@KoordText(`BR0100;[24.4;7.2];III);#000000;1`)

@Flaeche(`BR0100;[[-0.12;-0.12];[6.12;-0.12];[6.12;6.12];[-0.12;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[4;4];[6;4];[6;6];[4;6]];#BF5F9F;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[4;0];[6;0];[6;4];[4;4]];#BFBFFF;1;inhalt=0;umfang=0`)

@Strecke(`BR0100;[[2;0];[2;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[4;0];[4;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[4;2];[6;2]];#000000;;-;2px`)
@Strecke(`BR0100;[[4;4];[6;4]];#000000;;-;2px`)
@Strecke(`BR0100;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

@Flaeche(`BR0100;[[10.88;-0.12];[19.12;-0.12];[19.12;6.12];[10.88;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[13;1];[19;1];[19;6];[13;6]];#BF5F9F;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[13;0];[19;0];[19;1];[13;1]];#BFBFFF;1;inhalt=0;umfang=0`)

@Strecke(`BR0100;[[13;0];[13;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[15;0];[15;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[17;0];[17;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[13;1];[19;1]];#000000;;-;2px`)
@Strecke(`BR0100;[[13;2];[19;2]];#000000;;-;2px`)
@Strecke(`BR0100;[[13;3];[19;3]];#000000;;-;2px`)
@Strecke(`BR0100;[[13;4];[19;4]];#000000;;-;2px`)
@Strecke(`BR0100;[[13;5];[19;5]];#000000;;-;2px`)
@Strecke(`BR0100;[[11;0];[19;0];[19;6];[11;6];[11;0]];#000000;;-;4px`)

@Flaeche(`BR0100;[[23.88;-0.12];[32.12;-0.12];[32.12;6.12];[23.88;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[25.6;4.5];[30.4;4.5];[30.4;6];[25.6;6]];#BF5F9F;1;inhalt=0;umfang=0`)
@Flaeche(`BR0100;[[25.6;0];[30.4;0];[30.4;4.5];[25.6;4.5]];#BFBFFF;1;inhalt=0;umfang=0`)

@Strecke(`BR0100;[[25.6;0];[25.6;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[27.2;0];[27.2;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[28.8;0];[28.8;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[30.4;0];[30.4;6]];#000000;;-;2px`)
@Strecke(`BR0100;[[25.6;1.5];[30.4;1.5]];#000000;;-;2px`)
@Strecke(`BR0100;[[25.6;3];[30.4;3]];#000000;;-;2px`)
@Strecke(`BR0100;[[25.6;4.5];[30.4;4.5]];#000000;;-;2px`)
@Strecke(`BR0100;[[24;0];[32;0];[32;6];[24;6];[24;0]];#000000;;-;4px`)



__$a)\;\;$__ Welcher Bruchanteil des jeweiligen Rechteck ist farbig markiert?


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  1/3  ]] @canvas
@Algebrite.check(1/3)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$II\;\;$__ [[  3/4  ]] @canvas
@Algebrite.check(3/4)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$III\;\;$__ [[  3/5  ]] @canvas
@Algebrite.check(3/5)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>

__$b)\;\;$__ Welcher Bruchanteil der farbigen Markierung ist bläulich markiert?


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  2/3  ]] @canvas
@Algebrite.check(2/3)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$II\;\;$__ [[  1/6  ]] @canvas
@Algebrite.check(1/6)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$III\;\;$__ [[  3/4  ]] @canvas
@Algebrite.check(3/4)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>

__$c)\;\;$__ Welcher Bruchanteil der jeweiligen Rechteck ist bläulich markiert?


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  2/9  ]] @canvas
@Algebrite.check(2/9)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$II\;\;$__ [[  3/24 ]] @canvas
@Algebrite.check(3/24)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$III\;\;$__ [[  9/20  ]] @canvas
@Algebrite.check(9/20)
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>
