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

















tags: Bruchrechnung, leicht, niedrig, Bestimmen

comment: Bestimme den markierten Anteil einer Fläche.

author: Martin Lommatzsch

-->




# Anteile bestimmen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den farbigen Anteil an der Gesamtfläche. 



<section class="dynFlex">


<div class="flex-child">

__$a)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $90\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098a;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098a;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098a;[[0;5];[2;5];[2;6];[0;6]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098a;[[0;0];[2;0];[2;5];[0;5]];#C6538C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098a;[[2;0];[6;0];[6;5];[2;5]];#8C8CFF;1;inhalt=0;umfang=0`)
@Strecke(`BR0098a;[[2;0];[2;6];[4;6];[4;0]];#000000;;-;2px`)
@Strecke(`BR0098a;[[0;1];[6;1];[6;2];[0;2];[0;3];[6;3];[6;4];[0;4];[0;5];[6;5]];#000000;;-;2px`)
@Strecke(`BR0098a;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  5  ]]  m$^2$  @canvas\
blau: [[  50 ]]  m$^2$  @canvas\
violett: [[ 25  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$b)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $96\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098b;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098b;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098b;[[0;0];[0.75;0];[0.75;4];[0;4]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098b;[[0;4];[0.75;4];[0.75;6];[0;6]];#C6538C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098b;[[0.75;4];[6;4];[6;6];[0.75;6]];#8C8CFF;1;inhalt=0;umfang=0`)
@Strecke(`BR0098b;[[0.75;0];[0.75;6];[1.5;6];[1.5;0];[2.25;0];[2.25;6];[3;6];[3;0];[3.75;0];[3.75;6];[4.5;6];[4.5;0];[5.25;0];[5.25;6]];#000000;;-;2px`)
@Strecke(`BR0098b;[[0;1];[6;1];[6;2];[0;2];[0;3];[6;3];[6;4];[0;4];[0;5];[6;5]];#000000;;-;2px`)
@Strecke(`BR0098b;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  4   ]]  m$^2$  @canvas\
blau: [[  20  ]]  m$^2$  @canvas\
violett: [[  10  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$c)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $81\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098c;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098c;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098c;[[1.3333;0];[6;0];[6;2];[1.3333;2]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098c;[[0;2];[1.3333;2];[1.3333;6];[0;6]];#8C8CFF;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098c;[[1.3333;2];[6;2];[6;6];[1.3333;6]];#C6538C;1;inhalt=0;umfang=0`)
@Strecke(`BR0098c;[[0.6667;0];[0.6667;6];[1.3333;6];[1.3333;0];[2;0];[2;6];[2.6667;6];[2.6667;0];[3.3333;0];[3.3333;6];[4;6];[4;0];[4.6667;0];[4.6667;6];[5.3333;6];[5.3333;0]];#000000;;-;2px`)
@Strecke(`BR0098c;[[0;2];[6;2];[6;4];[0;4]];#000000;;-;2px`)
@Strecke(`BR0098c;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  21  ]]  m$^2$  @canvas\
blau: [[  12  ]]  m$^2$  @canvas\
violett: [[  42  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$d)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $560\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098d;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098d;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098d;[[4.5;0];[6;0];[6;4.2];[4.5;4.2]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098d;[[0;4.2];[4.5;4.2];[4.5;6];[0;6]];#8C8CFF;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098d;[[4.5;4.2];[6;4.2];[6;6];[4.5;6]];#C6538C;1;inhalt=0;umfang=0`)
@Strecke(`BR0098d;[[0.75;0];[0.75;6];[1.5;6];[1.5;0];[2.25;0];[2.25;6];[3;6];[3;0];[3.75;0];[3.75;6];[4.5;6];[4.5;0];[5.25;0];[5.25;6]];#000000;;-;2px`)
@Strecke(`BR0098d;[[0;0.6];[6;0.6];[6;1.2];[0;1.2];[0;1.8];[6;1.8];[6;2.4];[0;2.4];[0;3];[6;3];[6;3.6];[0;3.6];[0;4.2];[6;4.2];[6;4.8];[0;4.8];[0;5.4];[6;5.4]];#000000;;-;2px`)
@Strecke(`BR0098d;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  98  ]]  m$^2$  @canvas\
blau: [[  126 ]]  m$^2$  @canvas\
violett: [[  42  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$e)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $126\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098e;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098e;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098e;[[0;0];[3.4286;0];[3.4286;3.3333];[0;3.3333]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098e;[[0;3.3333];[3.4286;3.3333];[3.4286;6];[0;6]];#C6538C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098e;[[3.4286;3.3333];[6;3.3333];[6;6];[3.4286;6]];#8C8CFF;1;inhalt=0;umfang=0`)
@Strecke(`BR0098e;[[0.8571;0];[0.8571;6];[1.7143;6];[1.7143;0];[2.5714;0];[2.5714;6];[3.4286;6];[3.4286;0];[4.2857;0];[4.2857;6];[5.1429;6];[5.1429;0]];#000000;;-;2px`)
@Strecke(`BR0098e;[[0;0.6667];[6;0.6667];[6;1.3333];[0;1.3333];[0;2];[6;2];[6;2.6667];[0;2.6667];[0;3.3333];[6;3.3333];[6;4];[0;4];[0;4.6667];[6;4.6667];[6;5.3333];[0;5.3333]];#000000;;-;2px`)
@Strecke(`BR0098e;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  40  ]]  m$^2$  @canvas\
blau: [[  24  ]]  m$^2$  @canvas\
violett: [[  32  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>
<div class="flex-child">

__$f)\;\;$__ Die Gesamtfläche besitzt einen Flächeninhalt von $192\,$m$^2$.

<center>

<!-- style="max-width:220px" -->
@Koordinatensystem(`xmin=-0.15;xmax=6.15;ymin=-0.15;ymax=6.15;width=220;id=BR0098f;achsen=0;grid=0;border=0;static=1`)

@Flaeche(`BR0098f;[[-0.08;-0.08];[6.08;-0.08];[6.08;6.08];[-0.08;6.08]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098f;[[0;0];[3.75;0];[3.75;3];[0;3]];#FF8C8C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098f;[[0;3];[3.75;3];[3.75;6];[0;6]];#C6538C;1;inhalt=0;umfang=0`)
@Flaeche(`BR0098f;[[3.75;3];[6;3];[6;6];[3.75;6]];#8C8CFF;1;inhalt=0;umfang=0`)
@Strecke(`BR0098f;[[0.75;0];[0.75;6];[1.5;6];[1.5;0];[2.25;0];[2.25;6];[3;6];[3;0];[3.75;0];[3.75;6];[4.5;6];[4.5;0];[5.25;0];[5.25;6]];#000000;;-;2px`)
@Strecke(`BR0098f;[[0;1];[6;1];[6;2];[0;2];[0;3];[6;3];[6;4];[0;4];[0;5];[6;5]];#000000;;-;2px`)
@Strecke(`BR0098f;[[0;0];[6;0];[6;6];[0;6];[0;0]];#000000;;-;4px`)

</center>



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
rot: [[  60  ]]  m$^2$  @canvas\
blau: [[  36  ]]  m$^2$  @canvas\
violett: [[  60  ]]  m$^2$ @canvas
[[?]] @Explain



@resetter

@ADetails(1=BE; Bruchrechnung, Anteil, Zahlenverständnis)

</div>

</section>



