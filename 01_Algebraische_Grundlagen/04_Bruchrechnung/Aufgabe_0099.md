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

comment: Eine Fläche wurde in Bruchanteile unterteilt. Beantworte die Fragen dazu.

author: Martin Lommatzsch

-->




# Bruchunterteilung einer Fläche


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Antwort auf die Fragen zu jeder Darstellung **an**.


<center>

<!-- style="max-width:800px" -->
@Koordinatensystem(`xmin=-0.5;xmax=32.5;ymin=-0.5;ymax=8.2;width=800;id=BR0099;achsen=0;grid=0;border=0;static=1`)

@KoordText(`BR0099;[0.4;7.2];I);#000000;1`)
@KoordText(`BR0099;[12.4;7.2];II);#000000;1`)
@KoordText(`BR0099;[24.4;7.2];III);#000000;1`)

@Flaeche(`BR0099;[[-0.12;-0.12];[8.12;-0.12];[8.12;6.12];[-0.12;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BR0099;[[1.6;0];[1.6;6];[3.2;6];[3.2;0];[4.8;0];[4.8;6];[6.4;6];[6.4;0]];#000000;;-;2px;linestyle=dashed`)
@Strecke(`BR0099;[[0;2];[8;2];[8;4];[0;4]];#000000;;-;2px;linestyle=dotted`)
@Strecke(`BR0099;[[0;0];[8;0];[8;6];[0;6];[0;0]];#000000;;-;4px`)

@Flaeche(`BR0099;[[11.88;-0.12];[20.12;-0.12];[20.12;6.12];[11.88;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BR0099;[[14;0];[14;6];[16;6];[16;0];[18;0];[18;6]];#000000;;-;2px;linestyle=dashed`)
@Strecke(`BR0099;[[12;1.5];[20;1.5];[20;3];[12;3];[12;4.5];[20;4.5]];#000000;;-;2px;linestyle=dotted`)
@Strecke(`BR0099;[[12;0];[20;0];[20;6];[12;6];[12;0]];#000000;;-;4px`)

@Flaeche(`BR0099;[[23.88;-0.12];[32.12;-0.12];[32.12;6.12];[23.88;6.12]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BR0099;[[26.6667;0];[26.6667;6];[29.3333;6];[29.3333;0]];#000000;;-;2px;linestyle=dashed`)
@Strecke(`BR0099;[[24;1];[32;1];[32;2];[24;2];[24;3];[32;3];[32;4];[24;4];[24;5];[32;5]];#000000;;-;2px;linestyle=dotted`)
@Strecke(`BR0099;[[24;0];[32;0];[32;6];[24;6];[24;0]];#000000;;-;4px`)

</center>


__$a)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten Linien in wie viele Teile geteilt? 


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  5  ]] @canvas
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
__$II\;\;$__ [[  4  ]] @canvas
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
__$III\;\;$__ [[  3  ]] @canvas
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>

__$b)\;\;$__ Das jeweilige Rechteck wird durch die gepunkteten Linien in wie viele Teile geteilt? 


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  3  ]] @canvas
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
__$II\;\;$__ [[  4  ]] @canvas
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
__$III\;\;$__ [[  6  ]] @canvas
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>

__$c)\;\;$__ Das jeweilige Rechteck wird durch die gestrichelten und die gepunkteten Linien in wie viele Teile geteilt? 


<section class="dynFlex">
<div class="flex-child">


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
__$I\;\;$__ [[  15  ]] @canvas
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
__$II\;\;$__ [[  16  ]] @canvas
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
__$III\;\;$__ [[  18  ]] @canvas
[[?]] @Explain


@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
</section>

