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







tags: Parameter, Term, sehr leicht, niedrig, Angeben, Fläche

comment: Gib den Summenterm der dargestellten Flächeninhalte an.

author: Martin Lommatzsch

-->




# Flächeninhalte von Polygonen als Summe



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** den Term der gesamten dargestellten Flächeninhalte **an**.



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=7;width=450;id=PA0051a;0;0;0`)

@Flaeche(`PA0051a;[[0;1];[2;1];[1;3]];#ef476f;0.35`)
@Flaeche(`PA0051a;[[3;1];[5;1];[4;3]];#ef476f;0.35`)
@Flaeche(`PA0051a;[[7;1];[10;1];[10;3];[7;3]];#118ab2;0.35`)

@KoordText(`PA0051a;[1;1.8];Q;#111111;1`)
@KoordText(`PA0051a;[4;1.8];Q;#111111;1`)
@KoordText(`PA0051a;[8.5;2];M;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * Q + M  ]] @canvas
@Algebrite.check(` 2 * Q + M `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


<div class="flex-child">

__$b)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0051b;0;0;0`)

@Flaeche(`PA0051b;[[0;1];[3;1];[2.5;3];[0.5;3]];#ffd166;0.35`)
@Flaeche(`PA0051b;[[4;1];[7;1];[6.5;3];[4.5;3]];#ffd166;0.35`)
@Flaeche(`PA0051b;[[8;1];[11;1];[10.5;3];[8.5;3]];#ffd166;0.35`)
@Flaeche(`PA0051b;[[9.5;4.5];[12;4.5];[10.75;6.7]];#06d6a0;0.35`)

@KoordText(`PA0051b;[1.5;2];R;#111111;1`)
@KoordText(`PA0051b;[5.5;2];R;#111111;1`)
@KoordText(`PA0051b;[9.5;2];R;#111111;1`)
@KoordText(`PA0051b;[10.7;5.2];K;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  3 * R + K  ]] @canvas
@Algebrite.check(` 3 * R + K `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


<div class="flex-child">

__$c)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0051c;0;0;0`)

@Flaeche(`PA0051c;[[0;1];[2;1];[2.8;2.5];[1;4];[-0.8;2.5]];#ff006e;0.35`)
@Flaeche(`PA0051c;[[4;1];[6;1];[6.8;2.5];[5;4];[3.2;2.5]];#ff006e;0.35`)
@Flaeche(`PA0051c;[[8;1];[11;1];[11;3];[8;3]];#3a86ff;0.35`)
@Flaeche(`PA0051c;[[9;4.3];[12;4.3];[10.5;6.5]];#ffbe0b;0.35`)

@KoordText(`PA0051c;[1;2.4];L;#111111;1`)
@KoordText(`PA0051c;[5;2.4];L;#111111;1`)
@KoordText(`PA0051c;[9.5;2];A;#111111;1`)
@KoordText(`PA0051c;[10.5;5.1];T;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * L + A + T  ]] @canvas
@Algebrite.check(` 2 * L + A + T `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


<div class="flex-child">

__$d)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0051d;0;0;0`)

@Flaeche(`PA0051d;[[0;1];[3;1];[2;3];[-1;3]];#8ecae6;0.35`)
@Flaeche(`PA0051d;[[4;1];[6;1];[7;3.5];[5;4.5];[3.5;3]];#8ecae6;0.35`)
@Flaeche(`PA0051d;[[8;1];[10.8;1];[10.8;3.2];[8;3.2]];#fb8500;0.35`)
@Flaeche(`PA0051d;[[9;4.5];[12;4.5];[11;6.5]];#219ebc;0.35`)

@KoordText(`PA0051d;[1;2.1];C;#111111;1`)
@KoordText(`PA0051d;[5;2.7];C;#111111;1`)
@KoordText(`PA0051d;[9.2;2.1];P;#111111;1`)
@KoordText(`PA0051d;[10.7;5.3];F;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * C + P + F  ]] @canvas
@Algebrite.check(` 2 * C + P + F `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


<div class="flex-child">

__$e)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0051e;0;0;0`)

@Flaeche(`PA0051e;[[0;1];[2;1];[1;3]];#e63946;0.35`)
@Flaeche(`PA0051e;[[3;1];[5;1];[4;3]];#e63946;0.35`)
@Flaeche(`PA0051e;[[6;1];[8;1];[7;3]];#e63946;0.35`)
@Flaeche(`PA0051e;[[9;1];[11;1];[10;3]];#e63946;0.35`)
@Flaeche(`PA0051e;[[9;4.2];[12;4.2];[11;6.4];[8;6.4]];#457b9d;0.35`)
@Flaeche(`PA0051e;[[0;4.2];[2.5;4.2];[1.25;6.2]];#7209b7;0.35`)

@KoordText(`PA0051e;[1;1.8];K;#111111;1`)
@KoordText(`PA0051e;[4;1.8];K;#111111;1`)
@KoordText(`PA0051e;[7;1.8];K;#111111;1`)
@KoordText(`PA0051e;[10;1.8];K;#111111;1`)
@KoordText(`PA0051e;[10;5.3];L;#111111;1`)
@KoordText(`PA0051e;[1.25;5];N;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  4 * K + L + N  ]] @canvas
@Algebrite.check(` 4 * K + L + N `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


<div class="flex-child">

__$f)\;\;$__ 

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0051f;0;0;0`)

@Flaeche(`PA0051f;[[0;1];[3;1];[2.5;3];[0.5;3]];#ffafcc;0.35`)
@Flaeche(`PA0051f;[[4;1];[7;1];[6.5;3];[4.5;3]];#ffafcc;0.35`)
@Flaeche(`PA0051f;[[8;1];[10;1];[11;3];[9;5];[7.5;3]];#bde0fe;0.35`)
@Flaeche(`PA0051f;[[9;5.2];[12;5.2];[10.5;7]];#cdb4db;0.35`)
@Flaeche(`PA0051f;[[0;4.2];[2.5;4.2];[2.5;6.2];[0;6.2]];#90e0ef;0.35`)
@Flaeche(`PA0051f;[[5.5;4.8];[8;4.8];[6.75;6.9]];#f28482;0.35`)

@KoordText(`PA0051f;[1.5;2];X;#111111;1`)
@KoordText(`PA0051f;[5.5;2];X;#111111;1`)
@KoordText(`PA0051f;[9;2.7];G;#111111;1`)
@KoordText(`PA0051f;[10.5;6.1];R;#111111;1`)
@KoordText(`PA0051f;[1.25;5.2];D;#111111;1`)
@KoordText(`PA0051f;[6.75;5.7];G;#111111;1`)

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[  2 * X + 2 * G + R + D  ]] @canvas
@Algebrite.check(` 2 * X + 2 * G + R + D `)

@ADetails(1=BE; Parameter, Term, Fläche)

</div> 


</section>

