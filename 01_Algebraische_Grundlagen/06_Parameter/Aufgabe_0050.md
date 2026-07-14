<!--
version:  0.0.1
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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md






tags: Parameter, Term, sehr leicht, sehr niedrig, Angeben

comment: Setze fuer die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Streckenlängen als Term



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** die Terme für die gesamte Länge der dargestellten Strecken **an**.



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=8;ymin=-1;ymax=7;width=450;id=PA0050a;0;0;0`)


@Strecke(`PA0050a;[[0;0];[4;0]];#ff006e;j;0`)
@Strecke(`PA0050a;[[0;1];[4;1]];#ff006e;j;0`)
@Strecke(`PA0050a;[[0;2];[4;2]];#ff006e;j;0`)
@Strecke(`PA0050a;[[6;0];[6;3]];#3a86ff;k;0`)
@Strecke(`PA0050a;[[2;4];[5;6]];#ffbe0b;l;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3 * j + k + l  ]] @canvas
@Algebrite.check(` 3 * j + k + l `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$b)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=7;width=450;id=PA0050b;0;0;0`)


@Strecke(`PA0050b;[[0;0];[2;0]];#8338ec;m;0`)
@Strecke(`PA0050b;[[0;1];[2;1]];#8338ec;m;0`)
@Strecke(`PA0050b;[[0;2];[2;2]];#8338ec;m;0`)
@Strecke(`PA0050b;[[4;0];[4;5]];#219ebc;n;0`)
@Strecke(`PA0050b;[[6;1];[8;4]];#fb8500;o;0`)
@Strecke(`PA0050b;[[6;5];[8;5]];#8ecae6;p;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3 * m + n + o + p  ]] @canvas
@Algebrite.check(` 3 * m + n + o + p `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$c)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=7;width=450;id=PA0050c;0;0;0`)


@Strecke(`PA0050c;[[0;0];[0;3]];#06d6a0;q;0`)
@Strecke(`PA0050c;[[1;0];[1;3]];#06d6a0;q;0`)
@Strecke(`PA0050c;[[2;0];[2;3]];#06d6a0;q;0`)
@Strecke(`PA0050c;[[4;1];[8;1]];#ef476f;r;0`)
@Strecke(`PA0050c;[[4;2];[8;2]];#ef476f;r;0`)
@Strecke(`PA0050c;[[5;4];[8;6]];#118ab2;s;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3 * q + 2 * r + s  ]] @canvas
@Algebrite.check(` 3 * q + 2 * r + s `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$d)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0050d;0;0;0`)

@Strecke(`PA0050d;[[0;0];[4;0]];#e63946;t;0`)
@Strecke(`PA0050d;[[7;1];[7;5]];#e63946;t;0`)
@Strecke(`PA0050d;[[0;2];[0;6]];#457b9d;u;0`)
@Strecke(`PA0050d;[[2;2];[6;5]];#ff00ff;v;0`)
@Strecke(`PA0050d;[[8;0];[9;3]];#a8dadc;w;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * t + u + v + w  ]] @canvas
@Algebrite.check(` 2 * t + u + v + w `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$e)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0050e;0;0;0`)


@Strecke(`PA0050e;[[0;0];[3;0]];#2a9d8f;a;0`)
@Strecke(`PA0050e;[[0;1];[3;1]];#2a9d8f;a;0`)
@Strecke(`PA0050e;[[5;0];[5;3]];#f4a261;b;0`)
@Strecke(`PA0050e;[[7;2];[4;6]];#e76f51;c;0`)
@Strecke(`PA0050e;[[7;6];[4;2]];#e76f51;c;0`)
@Strecke(`PA0050e;[[8;0];[9;0]];#ff00ff;d;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * a + b + 2 * c + d  ]] @canvas
@Algebrite.check(` 2 * a + b + 2 * c + d `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$f)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0050f;0;0;0`)


@Strecke(`PA0050f;[[0;0];[5;0]];#9d4edd;e;0`)
@Strecke(`PA0050f;[[0;1];[5;1]];#9d4edd;e;0`)
@Strecke(`PA0050f;[[0;3];[0;7]];#4cc9f0;f;0`)
@Strecke(`PA0050f;[[2;3];[5;7]];#f72585;g;0`)
@Strecke(`PA0050f;[[6;3];[3;7]];#f72585;g;0`)
@Strecke(`PA0050f;[[7;5];[9;5]];#b5179e;h;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * e + f + 2 * g + h  ]] @canvas
@Algebrite.check(` 2 * e + f + 2 * g + h `)

@ADetails(1=BE; Term, Parameter)

</div> 


</section>

