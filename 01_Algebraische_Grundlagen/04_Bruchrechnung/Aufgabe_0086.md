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


















tags: Bruchrechnung, sehr leicht, sehr niedrig, Angeben

comment: Welcher Bruch ist dargestellt?

author: Martin Lommatzsch

-->




# Brüche erkennen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den dargestellten Bruch **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.12;xmax=2.12;ymin=-0.11;ymax=0.11;width=400;id=BR0086a;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0086a;[[0;0];[1;0];[1;0.033];[0;0.033]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0086a;[[0;0];[2;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086a;[[0;-0.055];[0;0.055]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086a;[[1;-0.055];[1;0.055]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086a;[[2;-0.055];[2;0.055]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  1/2  ]] @canvas
@Algebrite.check(1/2)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.18;xmax=3.18;ymin=-0.165;ymax=0.165;width=400;id=BR0086b;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0086b;[[1;0];[2;0];[2;0.05];[1;0.05]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0086b;[[0;0];[3;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086b;[[0;-0.083];[0;0.083]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086b;[[1;-0.083];[1;0.083]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086b;[[2;-0.083];[2;0.083]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086b;[[3;-0.083];[3;0.083]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  1/3  ]] @canvas
@Algebrite.check(1/3)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.24;xmax=4.24;ymin=-0.22;ymax=0.22;width=400;id=BR0086c;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0086c;[[1;0];[2;0];[2;0.066];[1;0.066]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086c;[[2;0];[3;0];[3;0.066];[2;0.066]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086c;[[3;0];[4;0];[4;0.066];[3;0.066]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0086c;[[0;0];[4;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086c;[[0;-0.11];[0;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086c;[[1;-0.11];[1;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086c;[[2;-0.11];[2;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086c;[[3;-0.11];[3;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086c;[[4;-0.11];[4;0.11]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3/4  ]] @canvas
@Algebrite.check(3/4)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

@Koordinatensystem(`xmin=-1.44;xmax=25.44;ymin=-1.32;ymax=1.32;width=400;id=BR0086d;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0086d;[[2;0];[3;0];[3;0.4];[2;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[6;0];[7;0];[7;0.4];[6;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[7;0];[8;0];[8;0.4];[7;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[8;0];[9;0];[9;0.4];[8;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[10;0];[11;0];[11;0.4];[10;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[19;0];[20;0];[20;0.4];[19;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[20;0];[21;0];[21;0.4];[20;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[21;0];[22;0];[22;0.4];[21;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[22;0];[23;0];[23;0.4];[22;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0086d;[[23;0];[24;0];[24;0.4];[23;0.4]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0086d;[[0;0];[24;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[0;-0.66];[0;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[1;-0.66];[1;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[2;-0.66];[2;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[3;-0.66];[3;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[4;-0.66];[4;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[5;-0.66];[5;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[6;-0.66];[6;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[7;-0.66];[7;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[8;-0.66];[8;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[9;-0.66];[9;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[10;-0.66];[10;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[11;-0.66];[11;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[12;-0.66];[12;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[13;-0.66];[13;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[14;-0.66];[14;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[15;-0.66];[15;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[16;-0.66];[16;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[17;-0.66];[17;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[18;-0.66];[18;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[19;-0.66];[19;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[20;-0.66];[20;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[21;-0.66];[21;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[22;-0.66];[22;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[23;-0.66];[23;0.66]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0086d;[[24;-0.66];[24;0.66]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  10/24  ]] @canvas
@Algebrite.check(10/24)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>


