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
@Koordinatensystem(`xmin=-0.1;xmax=2.1;ymin=-0.1;ymax=2.1;width=220;id=BR0001a;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001a;[[-0.05;-0.05];[2.05;-0.05];[2.05;2.05];[-0.05;2.05]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001a;[[1;1];[2;1];[2;2];[1;2]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001a;[[0;0];[2;0];[2;2];[0;2];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001a;[[1;0];[1;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001a;[[0;1];[2;1]];#000000;\,=0;design=-;1px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  4  ]] @canvas 
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001b;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001b;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001b;[[0;0];[1;0];[1;4];[0;4]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001b;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001b;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001b;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001b;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001b;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001b;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001b;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  4  ]] @canvas \
Nenner: [[  16 ]] @canvas 
[[?]] @Explain


@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001c;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001c;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[3;3];[4;3];[4;4];[3;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[0;2];[1;2];[1;3];[0;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[1;2];[2;2];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[2;1];[3;1];[3;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[3;1];[4;1];[4;2];[3;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001c;[[0;0];[1;0];[1;1];[0;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001c;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001c;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001c;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001c;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001c;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001c;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001c;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  6  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain


@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001d;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001d;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[1;3];[2;3];[2;4];[1;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[0;2];[1;2];[1;3];[0;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[1;2];[2;2];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[3;2];[4;2];[4;3];[3;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[0;1];[1;1];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[1;1];[2;1];[2;2];[1;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[3;1];[4;1];[4;2];[3;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001d;[[1;0];[2;0];[2;1];[1;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001d;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001d;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001d;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001d;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001d;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001d;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001d;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  8  ]] @canvas \
Nenner: [[  16 ]] @canvas 
[[?]] @Explain


@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001e;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001e;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[0;3];[1;3];[1;4];[0;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[1;3];[2;3];[2;4];[1;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[2;3];[3;3];[3;4];[2;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[0;2];[1;2];[1;3];[0;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[1;2];[2;2];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[3;2];[4;2];[4;3];[3;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[0;1];[1;1];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[2;1];[3;1];[3;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[3;1];[4;1];[4;2];[3;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[1;0];[2;0];[2;1];[1;1]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[2;0];[3;0];[3;1];[2;1]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001e;[[3;0];[4;0];[4;1];[3;1]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001e;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001e;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001e;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001e;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001e;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001e;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001e;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  12 ]] @canvas \
Nenner: [[  16 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001f;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001f;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001f;[[1;1];[3;1];[3;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001f;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001f;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001f;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001f;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001f;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001f;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001f;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)

</center>

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  4  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$g)\;\;$__

<center>


<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=3.1;ymin=-0.1;ymax=3.1;width=220;id=BR0001g;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001g;[[-0.07;-0.07];[3.07;-0.07];[3.07;3.07];[-0.07;3.07]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001g;[[1;0];[2;0];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001g;[[0;0];[3;0];[3;3];[0;3];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001g;[[1;0];[1;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001g;[[2;0];[2;3]];#000000;\,=0;design=-;1px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  3  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=3.1;ymin=-0.1;ymax=3.1;width=220;id=BR0001h;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001h;[[-0.07;-0.07];[3.07;-0.07];[3.07;3.07];[-0.07;3.07]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001h;[[1;2];[2;2];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001h;[[1;1];[2;1];[2;2];[1;2]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001h;[[0;0];[3;0];[3;3];[0;3];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001h;[[1;0];[1;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001h;[[2;0];[2;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001h;[[0;1];[3;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001h;[[0;2];[3;2]];#000000;\,=0;design=-;1px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  2  ]] @canvas \
Nenner: [[  9  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0001i;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001i;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[0;3.5];[1;3.5];[1;4];[0;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[3;3.5];[4;3.5];[4;4];[3;4]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[1;3];[2;3];[2;3.5];[1;3.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[2;3];[3;3];[3;3.5];[2;3.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[1;2.5];[2;2.5];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[3;2.5];[4;2.5];[4;3];[3;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[0;2];[1;2];[1;2.5];[0;2.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[2;2];[3;2];[3;2.5];[2;2.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[0;1.5];[1;1.5];[1;2];[0;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[2;1.5];[3;1.5];[3;2];[2;2]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[1;1];[2;1];[2;1.5];[1;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[3;1];[4;1];[4;1.5];[3;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[1;0.5];[2;0.5];[2;1];[1;1]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[2;0.5];[3;0.5];[3;1];[2;1]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[0;0];[1;0];[1;0.5];[0;0.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001i;[[3;0];[4;0];[4;0.5];[3;0.5]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001i;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001i;[[1;0];[1;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[2;0];[2;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[3;0];[3;4]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;0.5];[4;0.5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;1];[4;1]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;1.5];[4;1.5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;2];[4;2]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;2.5];[4;2.5]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;3];[4;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001i;[[0;3.5];[4;3.5]];#000000;\,=0;design=-;1px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  16 ]] @canvas \
Nenner: [[  32 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=3.1;ymin=-0.1;ymax=3.1;width=220;id=BR0001j;achsen=0;grid=0;border=0`)

@Flaeche(`BR0001j;[[-0.07;-0.07];[3.07;-0.07];[3.07;3.07];[-0.07;3.07]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001j;[[1;1.5];[2;1.5];[2;3];[1;3]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001j;[[1;0];[2;0];[2;1.5];[1;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)
@Flaeche(`BR0001j;[[2;0];[3;0];[3;1.5];[2;1.5]];#8f8f8f;1;inhalt=0;umfang=0`)

@Strecke(`BR0001j;[[0;0];[3;0];[3;3];[0;3];[0;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0001j;[[1;0];[1;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001j;[[2;0];[2;3]];#000000;\,=0;design=-;1px`)
@Strecke(`BR0001j;[[0;1.5];[3;1.5]];#000000;\,=0;design=-;1px`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  3  ]] @canvas \
Nenner: [[  6  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>







