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

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0081a;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081a;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[0;3];[0;4];[1;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[2;3];[2;4];[3;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[3;4];[4;4];[4;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[1;2];[2;2];[2;3];[1;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[2;2];[2;3];[3;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[2;1];[3;1];[3;2];[2;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081a;[[0;0];[1;0];[1;1];[0;1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081a;[[1;0];[1;4];[2;4];[2;0];[3;0];[3;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081a;[[0;1];[4;1];[4;2];[0;2];[0;3];[4;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081a;[[0;4];[1;3];[1;4];[2;3];[2;4];[3;3];[3;4];[4;3];[0;3];[1;2];[1;3];[2;2];[2;3];[3;2];[3;3];[4;2];[0;2];[1;1];[1;2];[2;1];[2;2];[3;1];[3;2];[4;1];[0;1];[1;0];[1;1];[2;0];[2;1];[3;0];[3;1];[4;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081a;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  10/32  ]] @canvas
@Algebrite.check(10/32)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=2.1;ymin=-0.1;ymax=2.1;width=220;id=BR0081b;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081b;[[-0.08;-0.08];[2.08;-0.08];[2.08;2.08];[-0.08;2.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081b;[[0;1];[0;2];[1;1]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081b;[[1;0];[2;0];[2;1];[1;1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081b;[[1;0];[1;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081b;[[0;1];[2;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081b;[[0;2];[1;1];[1;2];[2;1];[0;1];[1;0];[1;1];[2;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081b;[[0;0];[2;0];[2;2];[0;2];[0;0]];#000000;\,=0;design=-;4px`)

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

<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=4.1;ymin=-0.1;ymax=4.1;width=220;id=BR0081c;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081c;[[-0.08;-0.08];[4.08;-0.08];[4.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[0;3];[1;3];[1;4];[0;4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[2;3];[3;3];[3;4];[2;4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[3;3];[3;4];[4;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[1;2];[2;2];[2;3];[1;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[0;1];[1;1];[1;2];[0;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[2;1];[3;1];[3;2];[2;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[0;1];[1;1];[1;0]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081c;[[3;0];[4;0];[4;1];[3;1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081c;[[1;0];[1;4];[2;4];[2;0];[3;0];[3;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081c;[[0;1];[4;1];[4;2];[0;2];[0;3];[4;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081c;[[0;4];[1;3];[1;4];[2;3];[2;4];[3;3];[3;4];[4;3];[0;3];[1;2];[1;3];[2;2];[2;3];[3;2];[3;3];[4;2];[0;2];[1;1];[1;2];[2;1];[2;2];[3;1];[3;2];[4;1];[0;1];[1;0];[1;1];[2;0];[2;1];[3;0];[3;1];[4;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081c;[[0;0];[4;0];[4;4];[0;4];[0;0]];#000000;\,=0;design=-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  14/32  ]] @canvas
@Algebrite.check(14/32)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=5.1;ymin=-0.1;ymax=4.1;width=300;id=BR0081d;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081d;[[-0.08;-0.08];[5.08;-0.08];[5.08;4.08];[-0.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[2;3];[3;3];[3;4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[4;3];[5;3];[5;4]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[2;2];[2;3];[3;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[3;2];[4;2];[4;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[4;2];[4;3];[5;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[2;1];[3;1];[3;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[3;1];[3;2];[4;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081d;[[2;0];[2;1];[3;1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081d;[[2;0];[2;2];[0;2];[1;3];[2;4];[5;4];[5;3];[4;2];[3;1];[2;0]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[2;1];[3;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[0;2];[4;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[1;3];[5;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[1;2];[1;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[2;0];[2;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[3;1];[3;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[4;2];[4;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[2;3];[3;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[3;3];[4;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[4;3];[5;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[1;2];[2;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[2;2];[3;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[3;2];[4;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081d;[[2;1];[3;2]];#000000;\,=0;design=-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  8/19  ]] @canvas
@Algebrite.check(8/19)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=3.1;ymin=-0.1;ymax=4.1;width=220;id=BR0081e;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081e;[[-1.08;-0.08];[3.08;-0.08];[3.08;4.08];[-1.08;4.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081e;[[1;3];[1;4];[2;3]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081e;[[0;3];[1;3];[1;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081e;[[1;2];[1;3];[2;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081e;[[1;1];[1;2];[2;1]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081e;[[0;4];[2;4];[2;0];[1;1];[0;2];[0;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[0;3];[2;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[0;2];[2;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[1;1];[2;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[1;1];[1;4]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[0;4];[1;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[1;4];[2;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[0;3];[1;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[1;3];[2;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081e;[[1;2];[2;1]];#000000;\,=0;design=-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  4/12  ]] @canvas
@Algebrite.check(4/12)
[[?]] @Explain



@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-0.1;xmax=3.1;ymin=-0.1;ymax=3.1;width=220;id=BR0081f;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0081f;[[-0.08;-0.08];[3.08;-0.08];[3.08;3.08];[-0.08;3.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081f;[[1;2];[1;3];[2;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081f;[[1;1];[2;1];[2;2];[1;2]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081f;[[2;1];[2;2];[3;1]];#c3c3c3;1;inhalt=0;umfang=0`)
@Flaeche(`BR0081f;[[0;1];[1;1];[1;0]];#c3c3c3;1;inhalt=0;umfang=0`)

@Strecke(`BR0081f;[[1;3];[2;3];[3;2];[3;1];[2;1];[2;0];[1;0];[0;1];[0;2];[1;2];[1;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[0;2];[3;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[0;1];[3;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[1;1];[1;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[2;0];[2;3]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[1;3];[2;2]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[0;2];[1;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[1;2];[2;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[2;2];[3;1]];#000000;\,=0;design=-;4px`)
@Strecke(`BR0081f;[[1;1];[2;0]];#000000;\,=0;design=-;4px`)

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

</section>






