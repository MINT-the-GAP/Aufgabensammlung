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






tags: Parameter, Term, leicht, mittel, Angeben, Fläche

comment: Gib den Summenterm der dargestellten Flächeninhalte an.

author: Martin Lommatzsch

-->




# Flächeninhalte von Polygonen als Summe



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** den Term der gesamten dargestellten Flächeninhalte **an**.



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=8;width=450;id=PA0053a;0;0;0`)

@Flaeche(`PA0053a;[[0;1];[2;1];[1;3]];#ef476f;0.35`)
@Flaeche(`PA0053a;[[3;1];[5;1];[4;3]];#ef476f;0.35`)
@Flaeche(`PA0053a;[[7;1];[10;1];[10;3];[7;3]];#118ab2;0.35`)
@Flaeche(`PA0053a;[[9;4.3];[12;4.3];[10.5;6.5]];#ffd166;0.35`)

@KoordText(`PA0053a;[1;1.8];J;#111111;1`)
@KoordText(`PA0053a;[4;1.8];J;#111111;1`)
@KoordText(`PA0053a;[8.5;2];U;#111111;1`)
@KoordText(`PA0053a;[10.5;5.1];B;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * J + U + B  ]] @canvas
@Algebrite.check(` 2 * J + U + B `)


</div>


<div class="flex-child">

__$b)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=8;width=450;id=PA0053b;0;0;0`)

@Flaeche(`PA0053b;[[0;1];[3;1];[2.5;3];[0.5;3]];#f6bd60;0.35`)
@Flaeche(`PA0053b;[[4;1];[7;1];[6.5;3];[4.5;3]];#f6bd60;0.35`)
@Flaeche(`PA0053b;[[8;1];[11;1];[10.5;3];[8.5;3]];#f6bd60;0.35`)
@Flaeche(`PA0053b;[[9.5;4.5];[12;4.5];[10.75;6.7]];#43aa8b;0.35`)
@Flaeche(`PA0053b;[[0;4.3];[2.6;4.3];[1.3;6.5]];#277da1;0.35`)

@KoordText(`PA0053b;[1.5;2];W;#111111;1`)
@KoordText(`PA0053b;[5.5;2];W;#111111;1`)
@KoordText(`PA0053b;[9.5;2];W;#111111;1`)
@KoordText(`PA0053b;[10.7;5.2];A;#111111;1`)
@KoordText(`PA0053b;[1.3;5.1];M;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  3 * W + A + M  ]] @canvas
@Algebrite.check(` 3 * W + A + M `)


</div>


<div class="flex-child">

__$c)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=8;width=450;id=PA0053c;0;0;0`)

@Flaeche(`PA0053c;[[0;1];[2;1];[2.8;2.5];[1;4];[-0.8;2.5]];#ff006e;0.35`)
@Flaeche(`PA0053c;[[4;1];[6;1];[6.8;2.5];[5;4];[3.2;2.5]];#ff006e;0.35`)
@Flaeche(`PA0053c;[[8;1];[11;1];[11;3];[8;3]];#3a86ff;0.35`)
@Flaeche(`PA0053c;[[9;4.3];[12;4.3];[10.5;6.5]];#ffbe0b;0.35`)
@Flaeche(`PA0053c;[[12;1.2];[13.5;1.2];[13.5;3.2];[12;3.2]];#4cc9f0;0.35`)

@KoordText(`PA0053c;[1;2.4];T;#111111;1`)
@KoordText(`PA0053c;[5;2.4];T;#111111;1`)
@KoordText(`PA0053c;[9.5;2];C;#111111;1`)
@KoordText(`PA0053c;[10.5;5.1];R;#111111;1`)
@KoordText(`PA0053c;[12.75;2.2];G;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  2 * T + 2 * C + R  ]] @canvas
@Algebrite.check(` 2 * T + G + C + R `)


</div>


<div class="flex-child">

__$d)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=8;width=450;id=PA0053d;0;0;0`)

@Flaeche(`PA0053d;[[0;1];[2;1];[1;3]];#e63946;0.35`)
@Flaeche(`PA0053d;[[3;1];[5;1];[4;3]];#e63946;0.35`)
@Flaeche(`PA0053d;[[6;1];[8;1];[7;3]];#e63946;0.35`)
@Flaeche(`PA0053d;[[9;1];[11.5;1];[11.5;3.2];[9;3.2]];#457b9d;0.35`)
@Flaeche(`PA0053d;[[10;4.3];[13;4.3];[11.5;6.6]];#7209b7;0.35`)

@KoordText(`PA0053d;[1;1.8];L;#111111;1`)
@KoordText(`PA0053d;[4;1.8];L;#111111;1`)
@KoordText(`PA0053d;[7;1.8];L;#111111;1`)
@KoordText(`PA0053d;[10.1;2.1];P;#111111;1`)
@KoordText(`PA0053d;[11.5;5.2];G;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  3 * L + P + G  ]] @canvas
@Algebrite.check(` 3 * L + P + G `)


</div>


<div class="flex-child">

__$e)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=9;width=450;id=PA0053e;0;0;0`)

@Flaeche(`PA0053e;[[0;1];[2;1];[1;3]];#b5179e;0.35`)
@Flaeche(`PA0053e;[[3;1];[5;1];[4;3]];#b5179e;0.35`)
@Flaeche(`PA0053e;[[6;1];[8;1];[7;3]];#b5179e;0.35`)
@Flaeche(`PA0053e;[[9;1];[11;1];[10;3]];#b5179e;0.35`)
@Flaeche(`PA0053e;[[9;4.2];[12;4.2];[11;6.4]];#4cc9f0;0.35`)
@Flaeche(`PA0053e;[[0;4.2];[2.6;4.2];[2.6;6.4];[0;6.4]];#f9c74f;0.35`)
@Flaeche(`PA0053e;[[4.5;4.5];[7.2;4.5];[5.85;7.2]];#90be6d;0.35`)

@KoordText(`PA0053e;[1;1.8];V;#111111;1`)
@KoordText(`PA0053e;[4;1.8];V;#111111;1`)
@KoordText(`PA0053e;[7;1.8];V;#111111;1`)
@KoordText(`PA0053e;[10;1.8];V;#111111;1`)
@KoordText(`PA0053e;[10.7;5.1];X;#111111;1`)
@KoordText(`PA0053e;[1.3;5.2];N;#111111;1`)
@KoordText(`PA0053e;[5.85;5.5];E;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  4 * V + X + N + E  ]] @canvas
@Algebrite.check(` 4 * V + X + N + E `)


</div>


<div class="flex-child">

__$f)\;\;$__

@Koordinatensystem(`xmin=-1;xmax=15;ymin=-1;ymax=9;width=450;id=PA0053f;0;0;0`)

@Flaeche(`PA0053f;[[0;1];[2;1];[1;3]];#ffafcc;0.35`)
@Flaeche(`PA0053f;[[3;1];[5;1];[4;3]];#ffafcc;0.35`)
@Flaeche(`PA0053f;[[6;1];[8;1];[7;3]];#ffafcc;0.35`)
@Flaeche(`PA0053f;[[9;1];[11.5;1];[11;3.3];[9.5;3.3]];#bde0fe;0.35`)
@Flaeche(`PA0053f;[[12;1];[14.5;1];[14;3.3];[12.5;3.3]];#bde0fe;0.35`)
@Flaeche(`PA0053f;[[10.2;4.4];[13.4;4.4];[11.8;6.9]];#cdb4db;0.35`)
@Flaeche(`PA0053f;[[0;4.3];[2.8;4.3];[2.8;6.6];[0;6.6]];#90e0ef;0.35`)
@Flaeche(`PA0053f;[[4.7;4.8];[7.5;4.8];[6.1;7.3]];#f28482;0.35`)

@KoordText(`PA0053f;[1;1.8];Q;#111111;1`)
@KoordText(`PA0053f;[4;1.8];Q;#111111;1`)
@KoordText(`PA0053f;[7;1.8];Q;#111111;1`)
@KoordText(`PA0053f;[10.2;2.1];H;#111111;1`)
@KoordText(`PA0053f;[13.2;2.1];H;#111111;1`)
@KoordText(`PA0053f;[11.8;5.5];D;#111111;1`)
@KoordText(`PA0053f;[1.4;5.3];Y;#111111;1`)
@KoordText(`PA0053f;[6.1;5.8];K;#111111;1`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
[[  3 * Q + 2 * H + D + Y + K  ]] @canvas
@Algebrite.check(` 3 * Q + 2 * H + D + Y + K `)


</div>


</section>

@ADetails(1=BE; Parameter, Term, Fläche)
