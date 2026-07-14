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

@Koordinatensystem(`xmin=-1;xmax=8;ymin=-1;ymax=7;width=450;id=PA0049a;0;0;0`)


@Strecke(`PA0049a;[[0;0];[3;0]];#ff595e;p;0`)
@Strecke(`PA0049a;[[0;1];[3;1]];#ff595e;p;0`)
@Strecke(`PA0049a;[[0;2];[3;2]];#ff595e;p;0`)
@Strecke(`PA0049a;[[5;0];[5;4]];#1982c4;q;0`)
@Strecke(`PA0049a;[[1;4];[4;6]];#8ac926;r;0`)
@Strecke(`PA0049a;[[2;4];[5;6]];#8ac926;r;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3 * p + q + 2 * r  ]] @canvas
@Algebrite.check(` 3 * p + q + 2 * r `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$b)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=7;width=450;id=PA0049b;0;0;0`)


@Strecke(`PA0049b;[[0;0];[5;0]];#ffca3a;m;0`)
@Strecke(`PA0049b;[[0;1];[5;1]];#ffca3a;m;0`)
@Strecke(`PA0049b;[[0;3];[0;6]];#1982c4;n;0`)
@Strecke(`PA0049b;[[2;2];[6;5]];#6a4c93;o;0`)
@Strecke(`PA0049b;[[7;4];[8;4]];#2ec4b6;t;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * m + n + o + t  ]] @canvas
@Algebrite.check(` 2 * m + n + o + t `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$c)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=7;width=450;id=PA0049c;0;0;0`)


@Strecke(`PA0049c;[[0;0];[0;2]];#3a86ff;k;0`)
@Strecke(`PA0049c;[[1;0];[1;2]];#3a86ff;k;0`)
@Strecke(`PA0049c;[[2;0];[2;2]];#3a86ff;k;0`)
@Strecke(`PA0049c;[[3;0];[3;2]];#3a86ff;k;0`)
@Strecke(`PA0049c;[[5;3];[8;3]];#ff006e;l;0`)
@Strecke(`PA0049c;[[5;4];[8;4]];#ff006e;l;0`)
@Strecke(`PA0049c;[[5;0];[8;2]];#8338ec;w;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  4 * k + 2 * l + w  ]] @canvas
@Algebrite.check(` 4 * k + 2 * l + w `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$d)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0049d;0;0;0`)

@Strecke(`PA0049d;[[0;0];[4;0]];#ff9f1c;u;0`)
@Strecke(`PA0049d;[[6;1];[6;5]];#ff9f1c;u;0`)
@Strecke(`PA0049d;[[0;2];[0;6]];#2ec4b6;v;0`)
@Strecke(`PA0049d;[[2;2];[5;5]];#e71d36;w;0`)
@Strecke(`PA0049d;[[7;0];[9;0]];#ff00ff;x;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * u + v + w + x  ]] @canvas
@Algebrite.check(` 2 * u + v + w + x `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$e)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0049e;0;0;0`)


@Strecke(`PA0049e;[[0;0];[3;0]];#118ab2;g;0`)
@Strecke(`PA0049e;[[5;1];[5;4]];#118ab2;g;0`)
@Strecke(`PA0049e;[[1;2];[4;4]];#06d6a0;h;0`)
@Strecke(`PA0049e;[[1;4];[4;2]];#06d6a0;h;0`)
@Strecke(`PA0049e;[[7;1];[7;6]];#ffd166;i;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * g + 2 * h + i  ]] @canvas
@Algebrite.check(` 2 * g + 2 * h + i `)

@ADetails(1=BE; Term, Parameter)

</div> 


<div class="flex-child">

__$f)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=450;id=PA0049f;0;0;0`)


@Strecke(`PA0049f;[[0;0];[5;0]];#ef476f;a;0`)
@Strecke(`PA0049f;[[0;1];[5;1]];#ef476f;a;0`)
@Strecke(`PA0049f;[[0;3];[0;6]];#118ab2;b;0`)
@Strecke(`PA0049f;[[2;3];[5;7]];#06d6a0;c;0`)
@Strecke(`PA0049f;[[6;3];[3;7]];#06d6a0;c;0`)
@Strecke(`PA0049f;[[7;5];[9;5]];#ffd166;d;0`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * a + b + 2 * c + d  ]] @canvas
@Algebrite.check(` 2 * a + b + 2 * c + d `)

@ADetails(1=BE; Term, Parameter)

</div> 


</section>


