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
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002a;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002a;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002a;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002a;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002a;P2=0;1;0;#000000;0;fix`)
@Punkt(`BR0002a;P4=0;0;-1;#000000;0;fix`)
@Punkt(`BR0002a;P6=0;-1;0;#000000;0;fix`)
@Kreissektor(`BR0002a;[M;P2;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002a;[M;P6;P4];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002a;[[0;0];[0;1];[0;0];[0.7071;0.7071];[0;0];[1;0];[0;0];[0.7071;-0.7071];[0;0];[0;-1];[0;0];[-0.7071;-0.7071];[0;0];[-1;0];[0;0];[-0.7071;0.7071]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002a;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  4  ]] @canvas \
Nenner: [[  8  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002b;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002b;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002b;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002b;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002b;P7=0;-0.7071;0.7071;#000000;0;fix`)
@Kreissektor(`BR0002b;[M;P0;P7];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002b;[[0;0];[0;1];[0;0];[0.7071;0.7071];[0;0];[1;0];[0;0];[0.7071;-0.7071];[0;0];[0;-1];[0;0];[-0.7071;-0.7071];[0;0];[-1;0];[0;0];[-0.7071;0.7071]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002b;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  8  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002c;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002c;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002c;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002c;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002c;P1=0;0.3827;0.9239;#000000;0;fix`)
@Punkt(`BR0002c;P2=0;0.7071;0.7071;#000000;0;fix`)
@Punkt(`BR0002c;P4=0;1;0;#000000;0;fix`)
@Punkt(`BR0002c;P9=0;-0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0002c;P10=0;-0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0002c;P12=0;-1;0;#000000;0;fix`)
@Punkt(`BR0002c;P13=0;-0.9239;0.3827;#000000;0;fix`)
@Kreissektor(`BR0002c;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002c;[M;P4;P2];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002c;[M;P10;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002c;[M;P13;P12];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002c;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002c;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  5  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002d;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002d;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002d;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002d;P0=0;0;1;#000000;0;fix`)
@Kreis(`BR0002d;k_grau=0;M;#8f8f8f;1;radius=P0`)
@Kreis(`BR0002d;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  1  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$e)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002e;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002e;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002e;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002e;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002e;P1=0;0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0002e;P2=0;-0.866;-0.5;#000000;0;fix`)
@Kreissektor(`BR0002e;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002e;[M;P0;P2];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002e;[[0;0];[0;1];[0;0];[0.866;-0.5];[0;0];[-0.866;-0.5]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002e;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  2  ]] @canvas \
Nenner: [[  3  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002f;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002f;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002f;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002f;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002f;P8=0;0;-1;#000000;0;fix`)
@Punkt(`BR0002f;P9=0;-0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0002f;P10=0;-0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0002f;P11=0;-0.9239;-0.3827;#000000;0;fix`)
@Punkt(`BR0002f;P13=0;-0.9239;0.3827;#000000;0;fix`)
@Punkt(`BR0002f;P14=0;-0.7071;0.7071;#000000;0;fix`)
@Kreissektor(`BR0002f;[M;P8;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002f;[M;P10;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002f;[M;P13;P11];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002f;[M;P0;P14];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002f;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002f;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[ 13  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002g;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002g;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002g;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002g;P0=0;0;1;#000000;0;fix`)
@Kreis(`BR0002g;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  0  ]] @canvas \
Nenner: [[  1  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002h;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002h;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002h;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002h;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002h;P2=0;1;0;#000000;0;fix`)
@Punkt(`BR0002h;P4=0;0;-1;#000000;0;fix`)
@Punkt(`BR0002h;P6=0;-1;0;#000000;0;fix`)
@Punkt(`BR0002h;P7=0;-0.7071;0.7071;#000000;0;fix`)
@Kreissektor(`BR0002h;[M;P2;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002h;[M;P6;P4];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002h;[M;P0;P7];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002h;[[0;0];[0;1];[0;0];[0.7071;0.7071];[0;0];[1;0];[0;0];[0.7071;-0.7071];[0;0];[0;-1];[0;0];[-0.7071;-0.7071];[0;0];[-1;0];[0;0];[-0.7071;0.7071]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002h;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  5  ]] @canvas \
Nenner: [[  8  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002i;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002i;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002i;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002i;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002i;P1=0;0.5;0.866;#000000;0;fix`)
@Punkt(`BR0002i;P5=0;0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0002i;P7=0;-0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0002i;P8=0;-0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0002i;P9=0;-1;0;#000000;0;fix`)
@Punkt(`BR0002i;P10=0;-0.866;0.5;#000000;0;fix`)
@Punkt(`BR0002i;P11=0;-0.5;0.866;#000000;0;fix`)
@Kreissektor(`BR0002i;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002i;[M;P7;P5];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002i;[M;P9;P8];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0002i;[M;P11;P10];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002i;[[0;0];[0;1];[0;0];[0.5;0.866];[0;0];[0.866;0.5];[0;0];[1;0];[0;0];[0.866;-0.5];[0;0];[0.5;-0.866];[0;0];[0;-1];[0;0];[-0.5;-0.866];[0;0];[-0.866;-0.5];[0;0];[-1;0];[0;0];[-0.866;0.5];[0;0];[-0.5;0.866]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002i;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  5  ]] @canvas \
Nenner: [[  12 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0002j;achsen=0;grid=0;border=0`)

@Flaeche(`BR0002j;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0002j;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0002j;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0002j;P12=0;-1;0;#000000;0;fix`)
@Punkt(`BR0002j;P13=0;-0.9239;0.3827;#000000;0;fix`)
@Kreissektor(`BR0002j;[M;P13;P12];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0002j;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0002j;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  1  ]] @canvas \
Nenner: [[  16 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>







