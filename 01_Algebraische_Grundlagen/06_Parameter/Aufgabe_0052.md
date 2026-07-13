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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
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

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=8;width=450;id=PA0052a;0;0;0`)

@Flaeche(`PA0052a;[[1;1];[4;1];[4;3];[1;3]];#577590;0.35`)
@Flaeche(`PA0052a;[[1;4.2];[4;4.2];[4;6.2];[1;6.2]];#577590;0.35`)
@Flaeche(`PA0052a;[[6;1.2];[9;1.2];[10;3.2];[8;5.2];[6;3.2]];#f94144;0.35`)

@KoordText(`PA0052a;[2.5;2];Z;#111111;1`)
@KoordText(`PA0052a;[2.5;5.2];Z;#111111;1`)
@KoordText(`PA0052a;[7.8;3.1];C;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * Z + C  ]] @canvas
@Algebrite.check(` 2 * Z + C `)


</div>


<div class="flex-child">

__$b)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0052b;0;0;0`)

@Flaeche(`PA0052b;[[0;1];[2.5;1];[1.25;3.4]];#90be6d;0.35`)
@Flaeche(`PA0052b;[[3.5;1];[6.5;1];[6;3.2];[4;3.2]];#f3722c;0.35`)
@Flaeche(`PA0052b;[[8;1];[11;1];[10.5;3.2];[8.5;3.2]];#f3722c;0.35`)
@Flaeche(`PA0052b;[[0.2;4.3];[2.7;4.3];[1.45;6.6]];#90be6d;0.35`)
@Flaeche(`PA0052b;[[7.5;4.4];[10.5;4.4];[9;6.6]];#577590;0.35`)

@KoordText(`PA0052b;[1.25;2.1];Y;#111111;1`)
@KoordText(`PA0052b;[1.45;5.2];Y;#111111;1`)
@KoordText(`PA0052b;[5;2.1];R;#111111;1`)
@KoordText(`PA0052b;[9.5;2.1];R;#111111;1`)
@KoordText(`PA0052b;[9;5.2];M;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * Y + 2 * R + M  ]] @canvas
@Algebrite.check(` 2 * Y + 2 * R + M `)


</div>


<div class="flex-child">

__$c)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=9;width=450;id=PA0052c;0;0;0`)

@Flaeche(`PA0052c;[[0;1];[2;1];[3;2.5];[1.5;4];[-0.2;2.8]];#277da1;0.35`)
@Flaeche(`PA0052c;[[4;1];[6;1];[7;2.5];[5.5;4];[3.8;2.8]];#277da1;0.35`)
@Flaeche(`PA0052c;[[8;1];[11.5;1];[11.5;3.3];[8;3.3]];#f8961e;0.35`)
@Flaeche(`PA0052c;[[9;4.5];[12.5;4.5];[10.75;7]];#f94144;0.35`)
@Flaeche(`PA0052c;[[12.2;1.2];[13.6;1.2];[13.6;2.8];[12.2;2.8]];#43aa8b;0.35`)

@KoordText(`PA0052c;[1.4;2.4];K;#111111;1`)
@KoordText(`PA0052c;[5.4;2.4];K;#111111;1`)
@KoordText(`PA0052c;[9.75;2.1];B;#111111;1`)
@KoordText(`PA0052c;[10.75;5.4];P;#111111;1`)
@KoordText(`PA0052c;[12.9;2];T;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * K + B + P + T  ]] @canvas
@Algebrite.check(` 2 * K + B + P + T `)


</div>


<div class="flex-child">

__$d)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=9;width=450;id=PA0052d;0;0;0`)

@Flaeche(`PA0052d;[[0.5;1];[2.5;1];[3.5;2.3];[2.5;3.8];[0.5;3.8];[-0.5;2.3]];#4d908e;0.35`)
@Flaeche(`PA0052d;[[4.5;1];[6.5;1];[7.5;2.3];[6.5;3.8];[4.5;3.8];[3.5;2.3]];#4d908e;0.35`)
@Flaeche(`PA0052d;[[8;1];[11;1];[10.5;3.8];[8.5;3.8]];#f9844a;0.35`)
@Flaeche(`PA0052d;[[8.8;4.5];[12.2;4.5];[12.2;6.8];[8.8;6.8]];#577590;0.35`)
@Flaeche(`PA0052d;[[0.3;4.6];[3.3;4.6];[1.8;6.9]];#f94144;0.35`)

@KoordText(`PA0052d;[1.5;2.3];G;#111111;1`)
@KoordText(`PA0052d;[5.5;2.3];G;#111111;1`)
@KoordText(`PA0052d;[9.5;2.3];N;#111111;1`)
@KoordText(`PA0052d;[10.5;5.6];D;#111111;1`)
@KoordText(`PA0052d;[1.8;5.4];L;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * G + N + D + L  ]] @canvas
@Algebrite.check(` 2 * G + N + D + L `)


</div>


<div class="flex-child">

__$e)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=15;ymin=-1;ymax=9;width=450;id=PA0052e;0;0;0`)

@Flaeche(`PA0052e;[[0;1];[2;1];[1;3]];#f72585;0.35`)
@Flaeche(`PA0052e;[[3;1];[5;1];[4;3]];#f72585;0.35`)
@Flaeche(`PA0052e;[[6;1];[8;1];[7;3]];#f72585;0.35`)
@Flaeche(`PA0052e;[[1;4.5];[3;4.5];[2;6.5]];#f72585;0.35`)
@Flaeche(`PA0052e;[[9;1];[12;1];[12;3.5];[9;3.5]];#4cc9f0;0.35`)
@Flaeche(`PA0052e;[[10;4.2];[13.5;4.2];[14;5.6];[12.5;7.2];[10.2;6.1]];#7209b7;0.35`)
@Flaeche(`PA0052e;[[5;4.8];[8.2;4.8];[6.6;7.4]];#90be6d;0.35`)

@KoordText(`PA0052e;[1;1.8];H;#111111;1`)
@KoordText(`PA0052e;[4;1.8];H;#111111;1`)
@KoordText(`PA0052e;[7;1.8];H;#111111;1`)
@KoordText(`PA0052e;[2;5.3];H;#111111;1`)
@KoordText(`PA0052e;[10.5;2.2];Q;#111111;1`)
@KoordText(`PA0052e;[12.1;5.6];V;#111111;1`)
@KoordText(`PA0052e;[6.6;5.8];A;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  4 * H + Q + V + A  ]] @canvas
@Algebrite.check(` 4 * H + Q + V + A `)


</div>


<div class="flex-child">

__$f)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=16;ymin=-1;ymax=10;width=450;id=PA0052f;0;0;0`)

@Flaeche(`PA0052f;[[0;1];[3;1];[3;3.5];[0;3.5]];#577590;0.35`)
@Flaeche(`PA0052f;[[0;4.5];[3;4.5];[3;7];[0;7]];#577590;0.35`)
@Flaeche(`PA0052f;[[4;1];[6.5;1];[7.5;2.5];[6;4];[4;3]];#f3722c;0.35`)
@Flaeche(`PA0052f;[[8;1];[10.5;1];[11.5;2.5];[10;4];[8;3]];#f3722c;0.35`)
@Flaeche(`PA0052f;[[12;1];[15;1];[14.3;3.8];[12.7;3.8]];#43aa8b;0.35`)
@Flaeche(`PA0052f;[[12.2;4.7];[15.4;4.7];[13.8;7.8]];#f94144;0.35`)
@Flaeche(`PA0052f;[[4;4.8];[6;4.8];[7;6.1];[6;7.4];[4;7.4];[3.5;6.1]];#90be6d;0.35`)
@Flaeche(`PA0052f;[[8.3;4.9];[11.3;4.9];[9.8;7.6]];#4d908e;0.35`)

@KoordText(`PA0052f;[1.5;2.1];S;#111111;1`)
@KoordText(`PA0052f;[1.5;5.6];S;#111111;1`)
@KoordText(`PA0052f;[5.6;2.3];P;#111111;1`)
@KoordText(`PA0052f;[9.6;2.3];P;#111111;1`)
@KoordText(`PA0052f;[13.5;2.2];M;#111111;1`)
@KoordText(`PA0052f;[13.8;5.7];R;#111111;1`)
@KoordText(`PA0052f;[5.2;6.1];K;#111111;1`)
@KoordText(`PA0052f;[9.8;5.8];D;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * S + 2 * P + M + R + K + D  ]] @canvas
@Algebrite.check(` 2 * S + 2 * P + M + R + K + D `)


</div>


</section>

@ADetails(1=BE; Parameter, Term, Fläche)
