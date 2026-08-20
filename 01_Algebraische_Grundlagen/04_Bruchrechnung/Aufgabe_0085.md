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

@Koordinatensystem(`xmin=-0.36;xmax=6.36;ymin=-0.33;ymax=0.33;width=400;id=BR0085a;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0085a;[[0;0];[1;0];[1;0.1];[0;0.1]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085a;[[3;0];[4;0];[4;0.1];[3;0.1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0085a;[[0;0];[6;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[0;-0.165];[0;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[1;-0.165];[1;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[2;-0.165];[2;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[3;-0.165];[3;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[4;-0.165];[4;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[5;-0.165];[5;0.165]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085a;[[6;-0.165];[6;0.165]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2/6  ]] @canvas
@Algebrite.check(2/6)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.72;xmax=12.72;ymin=-0.66;ymax=0.66;width=400;id=BR0085b;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0085b;[[0;0];[1;0];[1;0.2];[0;0.2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085b;[[1;0];[2;0];[2;0.2];[1;0.2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085b;[[2;0];[3;0];[3;0.2];[2;0.2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085b;[[7;0];[8;0];[8;0.2];[7;0.2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085b;[[10;0];[11;0];[11;0.2];[10;0.2]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0085b;[[0;0];[12;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[0;-0.33];[0;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[1;-0.33];[1;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[2;-0.33];[2;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[3;-0.33];[3;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[4;-0.33];[4;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[5;-0.33];[5;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[6;-0.33];[6;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[7;-0.33];[7;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[8;-0.33];[8;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[9;-0.33];[9;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[10;-0.33];[10;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[11;-0.33];[11;0.33]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085b;[[12;-0.33];[12;0.33]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  5/12  ]] @canvas
@Algebrite.check(5/12)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$c)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.24;xmax=4.24;ymin=-0.22;ymax=0.22;width=400;id=BR0085c;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0085c;[[1;0];[2;0];[2;0.066];[1;0.066]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0085c;[[0;0];[4;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085c;[[0;-0.11];[0;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085c;[[1;-0.11];[1;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085c;[[2;-0.11];[2;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085c;[[3;-0.11];[3;0.11]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085c;[[4;-0.11];[4;0.11]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  1/4  ]] @canvas
@Algebrite.check(1/4)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

@Koordinatensystem(`xmin=-0.48;xmax=8.48;ymin=-0.44;ymax=0.44;width=400;id=BR0085d;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0085d;[[0;0];[1;0];[1;0.132];[0;0.132]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085d;[[6;0];[7;0];[7;0.132];[6;0.132]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0085d;[[7;0];[8;0];[8;0.132];[7;0.132]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0085d;[[0;0];[8;0]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[0;-0.22];[0;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[1;-0.22];[1;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[2;-0.22];[2;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[3;-0.22];[3;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[4;-0.22];[4;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[5;-0.22];[5;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[6;-0.22];[6;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[7;-0.22];[7;0.22]];#000000;\,=0;design=-;3px`)
@Strecke(`BR0085d;[[8;-0.22];[8;0.22]];#000000;\,=0;design=-;3px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3/8  ]] @canvas
@Algebrite.check(3/8)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>


