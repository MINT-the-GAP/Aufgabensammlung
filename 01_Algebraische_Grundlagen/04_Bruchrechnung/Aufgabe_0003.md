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

comment: Welcher Nenner und welcher Zähler ist dargestellt?

author: Martin Lommatzsch

-->




# Brüche erkennen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Nenner und Zähler des jeweiligen dargestellten Bruchs **an**. (Es ist der jeweilige graue Anteil gefragt.)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.2;xmax=8.2;ymin=-0.2;ymax=8.2;width=220;id=BR0003a;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003a;[[-0.12;-0.12];[8.12;-0.12];[8.12;8.12];[-0.12;8.12]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[0;7];[1;7];[1;8];[0;8]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[7;7];[8;7];[8;8];[7;8]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[2;5];[3;5];[3;7];[2;7]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[5;5];[6;5];[6;7];[5;7]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[1;3];[2;3];[2;4];[1;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[6;3];[7;3];[7;4];[6;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[2;2];[3;2];[3;3];[2;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[5;2];[6;2];[6;3];[5;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[0;1];[1;1];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[3;1];[5;1];[5;2];[3;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[7;1];[8;1];[8;2];[7;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[0;0];[2;0];[2;1];[0;1]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003a;[[6;0];[8;0];[8;1];[6;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003a;[[1;0];[1;8];[2;8];[2;0];[3;0];[3;8];[4;8];[4;0];[5;0];[5;8];[6;8];[6;0];[7;0];[7;8]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003a;[[0;1];[8;1];[8;2];[0;2];[0;3];[8;3];[8;4];[0;4];[0;5];[8;5];[8;6];[0;6];[0;7];[8;7]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003a;[[0;0];[8;0];[8;8];[0;8];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[ 18  ]] @canvas \
Nenner: [[ 64  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=3.1;ymin=-0.1;ymax=3.1;width=220;id=BR0003b;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003b;[[-0.07;-0.07];[3.07;-0.07];[3.07;3.07];[-0.07;3.07]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003b;[[1;2];[2;2];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003b;[[0;1];[1;1];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003b;[[2;1];[3;1];[3;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003b;[[1;0];[2;0];[2;1];[1;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003b;[[1;0];[1;3];[2;3];[2;0]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003b;[[0;1];[3;1];[3;2];[0;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003b;[[0;0];[3;0];[3;3];[0;3];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  4  ]] @canvas \
Nenner: [[  9  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003c;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003c;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[0;5];[1;5];[1;6];[0;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[5;5];[6;5];[6;6];[5;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[1;4];[2;4];[2;5];[1;5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[4;4];[5;4];[5;5];[4;5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[1;2];[5;2];[5;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[1;1];[2;1];[2;2];[1;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003c;[[4;1];[5;1];[5;2];[4;2]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003c;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003c;[[0;1];[6;1];[6;2];[0;2];[0;3];[6;3];[6;4];[0;4];[0;5];[6;5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003c;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[ 10  ]] @canvas \
Nenner: [[ 36  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003d;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003d;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003d;[[1;3];[2;3];[2;6];[1;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003d;[[4;3];[5;3];[5;6];[4;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003d;[[2;0];[4;0];[4;3];[2;3]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003d;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003d;[[0;3];[6;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003d;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  4  ]] @canvas \
Nenner: [[  12 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.2;xmax=8.2;ymin=-0.2;ymax=8.2;width=220;id=BR0003e;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003e;[[-0.12;-0.12];[8.12;-0.12];[8.12;8.12];[-0.12;8.12]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[1;5];[3;5];[3;7];[1;7]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[5;5];[7;5];[7;7];[5;7]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[3;3];[5;3];[5;4];[3;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[2;2];[6;2];[6;3];[2;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[2;1];[3;1];[3;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003e;[[5;1];[6;1];[6;2];[5;2]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003e;[[1;0];[1;8];[2;8];[2;0];[3;0];[3;8];[4;8];[4;0];[5;0];[5;8];[6;8];[6;0];[7;0];[7;8]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003e;[[0;1];[8;1];[8;2];[0;2];[0;3];[8;3];[8;4];[0;4];[0;5];[8;5];[8;6];[0;6];[0;7];[8;7]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003e;[[0;0];[8;0];[8;8];[0;8];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  16 ]] @canvas \
Nenner: [[  64 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003f;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003f;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[1;4.5];[2;4.5];[2;6];[1;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[5;4.5];[6;4.5];[6;6];[5;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[2;3];[3;3];[3;4.5];[2;4.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[0;1.5];[1;1.5];[1;3];[0;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[4;1.5];[5;1.5];[5;3];[4;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003f;[[1;0];[2;0];[2;1.5];[1;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003f;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003f;[[0;1.5];[6;1.5];[6;3];[0;3];[0;4.5];[6;4.5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003f;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  6  ]] @canvas \
Nenner: [[ 24  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003g;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003g;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003g;[[1;0];[2;0];[2;6];[1;6]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003g;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003g;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  6  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003h;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003h;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[0;4];[1;4];[1;6];[0;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[2;4];[3;4];[3;6];[2;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[3;2];[4;2];[4;4];[3;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[5;2];[6;2];[6;4];[5;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[1;0];[2;0];[2;2];[1;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003h;[[5;0];[6;0];[6;2];[5;2]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003h;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003h;[[0;2];[6;2];[6;4];[0;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003h;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  6  ]] @canvas \
Nenner: [[ 18  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0003i;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003i;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[3;3.5];[4;3.5];[4;4];[3;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[0;3];[1;3];[1;3.5];[0;3.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[1;2.5];[2;2.5];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[1;2];[2;2];[2;2.5];[1;2.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[3;2];[4;2];[4;2.5];[3;2.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[0;1.5];[1;1.5];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[2;1.5];[4;1.5];[4;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[1;1];[2;1];[2;1.5];[1;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003i;[[1;0.5];[2;0.5];[2;1];[1;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003i;[[1;0];[1;4];[2;4];[2;0];[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003i;[[0;0.5];[4;0.5];[4;1];[0;1];[0;1.5];[4;1.5];[4;2];[0;2];[0;2.5];[4;2.5];[4;3];[0;3];[0;3.5];[4;3.5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003i;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  10 ]] @canvas \
Nenner: [[  32 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0003j;achsen=0;grid=0;border=0`)

@Flaeche(`BR0003j;[[-0.1;-0.1];[6.1;-0.1];[6.1;6.1];[-0.1;6.1]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003j;[[0;3];[5;3];[5;6];[0;6]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003j;[[1;0];[2;0];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0003j;[[3;0];[6;0];[6;3];[3;3]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0003j;[[1;0];[1;6];[2;6];[2;0];[3;0];[3;6];[4;6];[4;0];[5;0];[5;6]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003j;[[0;3];[6;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0003j;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;\,=0;design=-;4px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  9  ]] @canvas \
Nenner: [[  12 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>







