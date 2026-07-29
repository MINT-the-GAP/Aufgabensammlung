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
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004a;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004a;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004a;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004a;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004a;P1=0;1;0;#000000;0;fix`)
@Punkt(`BR0004a;P2=0;0;-1;#000000;0;fix`)
@Kreissektor(`BR0004a;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004a;[M;P0;P2];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004a;[[0;0];[0;1];[0;0];[1;0];[0;0];[0;-1];[0;0];[-1;0]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004a;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  3  ]] @canvas \
Nenner: [[  4  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$b)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004b;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004b;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004b;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004b;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004b;P1=0;0.5;0.866;#000000;0;fix`)
@Punkt(`BR0004b;P4=0;0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0004b;P5=0;0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0004b;P6=0;0;-1;#000000;0;fix`)
@Punkt(`BR0004b;P7=0;-0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0004b;P9=0;-1;0;#000000;0;fix`)
@Punkt(`BR0004b;P11=0;-0.5;0.866;#000000;0;fix`)
@Kreissektor(`BR0004b;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004b;[M;P5;P4];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004b;[M;P7;P6];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004b;[M;P11;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004b;[[0;0];[0;1];[0;0];[0.5;0.866];[0;0];[0.866;0.5];[0;0];[1;0];[0;0];[0.866;-0.5];[0;0];[0.5;-0.866];[0;0];[0;-1];[0;0];[-0.5;-0.866];[0;0];[-0.866;-0.5];[0;0];[-1;0];[0;0];[-0.866;0.5];[0;0];[-0.5;0.866]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004b;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  5  ]] @canvas \
Nenner: [[ 12  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$c)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004c;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004c;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004c;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004c;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004c;P2=0;0.7071;0.7071;#000000;0;fix`)
@Punkt(`BR0004c;P3=0;0.9239;0.3827;#000000;0;fix`)
@Punkt(`BR0004c;P6=0;0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0004c;P7=0;0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0004c;P9=0;-0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0004c;P10=0;-0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0004c;P12=0;-1;0;#000000;0;fix`)
@Kreissektor(`BR0004c;[M;P3;P2];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004c;[M;P7;P6];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004c;[M;P10;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004c;[M;P0;P12];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004c;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004c;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  7  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>
<div class="flex-child">

__$d)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004d;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004d;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004d;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004d;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004d;P1=0;0.3827;0.9239;#000000;0;fix`)
@Punkt(`BR0004d;P4=0;1;0;#000000;0;fix`)
@Punkt(`BR0004d;P5=0;0.9239;-0.3827;#000000;0;fix`)
@Punkt(`BR0004d;P8=0;0;-1;#000000;0;fix`)
@Punkt(`BR0004d;P9=0;-0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0004d;P12=0;-1;0;#000000;0;fix`)
@Punkt(`BR0004d;P13=0;-0.9239;0.3827;#000000;0;fix`)
@Kreissektor(`BR0004d;[M;P4;P1];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004d;[M;P8;P5];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004d;[M;P12;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004d;[M;P0;P13];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004d;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004d;k=0;M;#000000;0;radius=P0`)

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

__$e)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004e;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004e;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004e;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004e;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004e;P1=0;0.866;0.5;#000000;0;fix`)
@Punkt(`BR0004e;P4=0;-0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0004e;P5=0;-0.866;0.5;#000000;0;fix`)
@Kreissektor(`BR0004e;[M;P4;P1];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004e;[M;P1;P5];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004e;[[0;0];[0;1];[0;0];[0.866;0.5];[0;0];[0.866;-0.5];[0;0];[0;-1];[0;0];[-0.866;-0.5];[0;0];[-0.866;0.5]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004e;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  5  ]] @canvas \
Nenner: [[  6  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$f)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004f;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004f;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004f;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004f;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004f;P1=0;0.3827;0.9239;#000000;0;fix`)
@Punkt(`BR0004f;P2=0;0.7071;0.7071;#000000;0;fix`)
@Punkt(`BR0004f;P3=0;0.9239;0.3827;#000000;0;fix`)
@Punkt(`BR0004f;P4=0;1;0;#000000;0;fix`)
@Punkt(`BR0004f;P5=0;0.9239;-0.3827;#000000;0;fix`)
@Punkt(`BR0004f;P6=0;0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0004f;P7=0;0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0004f;P8=0;0;-1;#000000;0;fix`)
@Punkt(`BR0004f;P9=0;-0.3827;-0.9239;#000000;0;fix`)
@Punkt(`BR0004f;P10=0;-0.7071;-0.7071;#000000;0;fix`)
@Punkt(`BR0004f;P11=0;-0.9239;-0.3827;#000000;0;fix`)
@Punkt(`BR0004f;P12=0;-1;0;#000000;0;fix`)
@Punkt(`BR0004f;P13=0;-0.9239;0.3827;#000000;0;fix`)
@Punkt(`BR0004f;P14=0;-0.7071;0.7071;#000000;0;fix`)
@Punkt(`BR0004f;P15=0;-0.3827;0.9239;#000000;0;fix`)
@Kreissektor(`BR0004f;[M;P2;P1];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P4;P3];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P6;P5];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P8;P7];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P10;P9];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P12;P11];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P14;P13];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004f;[M;P0;P15];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004f;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004f;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  8  ]] @canvas \
Nenner: [[ 16  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$g)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004g;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004g;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004g;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004g;P0=0;0;1;#000000;0;fix`)
@Kreis(`BR0004g;k_grau=0;M;#8f8f8f;1;radius=P0`)
@Strecke(`BR0004g;[[0;0];[0;1];[0;0];[0.866;0.5];[0;0];[0.866;-0.5];[0;0];[0;-1];[0;0];[-0.866;-0.5];[0;0];[-0.866;0.5]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004g;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  6  ]] @canvas \
Nenner: [[  6  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$h)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004h;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004h;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004h;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004h;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004h;P1=0;0.7071;0.7071;#000000;0;fix`)
@Punkt(`BR0004h;P4=0;0;-1;#000000;0;fix`)
@Punkt(`BR0004h;P5=0;-0.7071;-0.7071;#000000;0;fix`)
@Kreissektor(`BR0004h;[M;P1;P0];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004h;[M;P5;P4];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004h;[[0;0];[0;1];[0;0];[0.7071;0.7071];[0;0];[1;0];[0;0];[0.7071;-0.7071];[0;0];[0;-1];[0;0];[-0.7071;-0.7071];[0;0];[-1;0];[0;0];[-0.7071;0.7071]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004h;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  2  ]] @canvas \
Nenner: [[  8  ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$i)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004i;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004i;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004i;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004i;P0=0;0;1;#000000;0;fix`)
@Punkt(`BR0004i;P1=0;0.5;0.866;#000000;0;fix`)
@Punkt(`BR0004i;P2=0;0.866;0.5;#000000;0;fix`)
@Punkt(`BR0004i;P4=0;0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0004i;P5=0;0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0004i;P7=0;-0.5;-0.866;#000000;0;fix`)
@Punkt(`BR0004i;P8=0;-0.866;-0.5;#000000;0;fix`)
@Punkt(`BR0004i;P10=0;-0.866;0.5;#000000;0;fix`)
@Punkt(`BR0004i;P11=0;-0.5;0.866;#000000;0;fix`)
@Kreissektor(`BR0004i;[M;P1;P11];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004i;[M;P4;P2];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004i;[M;P7;P5];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Kreissektor(`BR0004i;[M;P10;P8];#000000;0.44;\,=0;inhalt=0;umfang=0`)
@Strecke(`BR0004i;[[0;0];[0;1];[0;0];[0.5;0.866];[0;0];[0.866;0.5];[0;0];[1;0];[0;0];[0.866;-0.5];[0;0];[0.5;-0.866];[0;0];[0;-1];[0;0];[-0.5;-0.866];[0;0];[-0.866;-0.5];[0;0];[-1;0];[0;0];[-0.866;0.5];[0;0];[-0.5;0.866]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004i;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  8  ]] @canvas \
Nenner: [[  12 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

<div class="flex-child">

__$j)\;\;$__

<center>

<!-- style="max-width:300px" -->
@Koordinatensystem(`xmin=-1.1;xmax=1.1;ymin=-1.1;ymax=1.1;width=220;id=BR0004j;achsen=0;grid=0;border=0`)

@Flaeche(`BR0004j;[[-1.08;-1.08];[1.08;-1.08];[1.08;1.08];[-1.08;1.08]];#ffffff;1;inhalt=0;umfang=0`)
@Punkt(`BR0004j;M=0;0;0;#000000;0;fix`)
@Punkt(`BR0004j;P0=0;0;1;#000000;0;fix`)
@Strecke(`BR0004j;[[0;0];[0;1];[0;0];[0.3827;0.9239];[0;0];[0.7071;0.7071];[0;0];[0.9239;0.3827];[0;0];[1;0];[0;0];[0.9239;-0.3827];[0;0];[0.7071;-0.7071];[0;0];[0.3827;-0.9239];[0;0];[0;-1];[0;0];[-0.3827;-0.9239];[0;0];[-0.7071;-0.7071];[0;0];[-0.9239;-0.3827];[0;0];[-1;0];[0;0];[-0.9239;0.3827];[0;0];[-0.7071;0.7071];[0;0];[-0.3827;0.9239]];#000000;\,=0;design=-;1px`)
@Kreis(`BR0004j;k=0;M;#000000;0;radius=P0`)

</center>


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
Zähler: [[  0  ]] @canvas \
Nenner: [[  16 ]] @canvas 
[[?]] @Explain

@resetter

@ADetails(1=BE; Zahlenverständnis, Bruch erkennen)

</div>

</section>







