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


















tags: Bruchrechnung, leicht, niedrig, Bestimmen

comment: Bestimme den markierten Anteil einer Fläche.

author: Martin Lommatzsch

-->




# Anteile bestimmen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den farbigen Anteil an der Gesamtfläche. 



<section class="dynFlex">


<div class="flex-child">

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $20\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=4.15;ymin=-0.15;ymax=5.15;width=160;id=BR0097a;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097a;[[0;2];[2;2];[2;5];[0;5]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097a;[[0;0];[2;0];[2;2];[0;2]];#c6538c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097a;[[2;0];[4;0];[4;2];[2;2]];#8c8cff;1;inhalt=0;umfang=0`)

@Strecke(`BR0097a;[[0;0];[4;0];[4;5];[0;5];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[1;0];[1;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[2;0];[2;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[3;0];[3;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[0;1];[4;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[0;2];[4;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[0;3];[4;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097a;[[0;4];[4;4]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  6  ]] m$^2$  @canvas\
blau: [[  4  ]]  m$^2$  @canvas\
violett: [[  4  ]] m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $80\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=4.15;ymin=-0.15;ymax=5.15;width=160;id=BR0097b;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097b;[[0;1];[3;1];[3;5];[0;5]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097b;[[0;0];[3;0];[3;1];[0;1]];#c6538c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097b;[[3;0];[4;0];[4;1];[3;1]];#8c8cff;1;inhalt=0;umfang=0`)

@Strecke(`BR0097b;[[0;0];[4;0];[4;5];[0;5];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[1;0];[1;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[2;0];[2;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[3;0];[3;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[0;1];[4;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[0;2];[4;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[0;3];[4;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097b;[[0;4];[4;4]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  48  ]]  m$^2$  @canvas\
blau: [[  4   ]]  m$^2$  @canvas\
violett: [[  12  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $120\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=8.15;ymin=-0.15;ymax=5.15;width=160;id=BR0097c;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097c;[[0;3];[3;3];[3;5];[0;5]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097c;[[0;0];[3;0];[3;3];[0;3]];#c6538c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097c;[[3;0];[8;0];[8;3];[3;3]];#8c8cff;1;inhalt=0;umfang=0`)

@Strecke(`BR0097c;[[0;0];[8;0];[8;5];[0;5];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[1;0];[1;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[2;0];[2;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[3;0];[3;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[4;0];[4;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[5;0];[5;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[6;0];[6;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[7;0];[7;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[0;1];[8;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[0;2];[8;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[0;3];[8;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097c;[[0;4];[8;4]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  18  ]]  m$^2$  @canvas\
blau: [[  45  ]]  m$^2$  @canvas\
violett: [[  27  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $240\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=8.15;ymin=-0.15;ymax=10.15;width=160;id=BR0097d;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097d;[[0;3];[5;3];[5;10];[0;10]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097d;[[0;0];[5;0];[5;3];[0;3]];#c6538c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097d;[[5;0];[8;0];[8;3];[5;3]];#8c8cff;1;inhalt=0;umfang=0`)

@Strecke(`BR0097d;[[0;0];[8;0];[8;10];[0;10];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[1;0];[1;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[2;0];[2;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[3;0];[3;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[4;0];[4;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[5;0];[5;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[6;0];[6;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[7;0];[7;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;1];[8;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;2];[8;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;3];[8;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;4];[8;4]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;5];[8;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;6];[8;6]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;7];[8;7]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;8];[8;8]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097d;[[0;9];[8;9]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  105 ]]  m$^2$  @canvas\
blau: [[  27  ]]  m$^2$  @canvas\
violett: [[  45  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $200\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=4.15;ymin=-0.15;ymax=10.15;width=160;id=BR0097e;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097e;[[0;0];[1;0];[1;7];[0;7]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097e;[[0;7];[1;7];[1;10];[0;10]];#c6538c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097e;[[1;7];[4;7];[4;10];[1;10]];#8c8cff;1;inhalt=0;umfang=0`)

@Strecke(`BR0097e;[[0;0];[4;0];[4;10];[0;10];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[1;0];[1;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[2;0];[2;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[3;0];[3;10]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;1];[4;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;2];[4;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;3];[4;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;4];[4;4]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;5];[4;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;6];[4;6]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;7];[4;7]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;8];[4;8]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097e;[[0;9];[4;9]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  35  ]]  m$^2$  @canvas\
blau: [[  45  ]]  m$^2$  @canvas\
violett: [[  15  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $60\,$m$^2$.

<center>

@Koordinatensystem(`xmin=-0.15;xmax=4.15;ymin=-0.15;ymax=5.15;width=160;id=BR0097f;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0097f;[[3;2];[4;2];[4;5];[3;5]];#ff8c8c;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097f;[[0;0];[3;0];[3;2];[0;2]];#8c8cff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0097f;[[3;0];[4;0];[4;2];[3;2]];#c6538c;1;inhalt=0;umfang=0`)

@Strecke(`BR0097f;[[0;0];[4;0];[4;5];[0;5];[0;0]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[1;0];[1;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[2;0];[2;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[3;0];[3;5]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[0;1];[4;1]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[0;2];[4;2]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[0;3];[4;3]];#000000;\,=0;design=-;2px`)
@Strecke(`BR0097f;[[0;4];[4;4]];#000000;\,=0;design=-;2px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  9  ]]  m$^2$  @canvas\
blau: [[  18 ]]  m$^2$  @canvas\
violett: [[  6  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>

</section>

