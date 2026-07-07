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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md












tags: Rechteck, Länge, Fläche, Umfang, sehr leicht, sehr niedrig, Angeben

comment: Wie viele kleine Strecken umranden die gesamte Fläche?

author: Martin Lommatzsch

-->




# Einheitsrandstrecken


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** Anzahl der umrandenden Strecken **an**.


 
<section class="dynFlex">
<div class="flex-child">

__$a)\;\;$__ 



@CoordinateSystem(`xmin=-0.5;xmax=10.25;ymin=-0.5;ymax=3.25;width=400;id=A0007a;0;0;0`)

@Flaeche(`A0007a;[[0.1;0.1];[0.1;0.9];[0.9;0.9];[0.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[1.1;0.1];[1.1;0.9];[1.9;0.9];[1.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[2.1;0.1];[2.1;0.9];[2.9;0.9];[2.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[3.1;0.1];[3.1;0.9];[3.9;0.9];[3.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[4.1;0.1];[4.1;0.9];[4.9;0.9];[4.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)

@Flaeche(`A0007a;[[0.1;1.1];[0.1;1.9];[0.9;1.9];[0.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[1.1;1.1];[1.1;1.9];[1.9;1.9];[1.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[2.1;1.1];[2.1;1.9];[2.9;1.9];[2.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[3.1;1.1];[3.1;1.9];[3.9;1.9];[3.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[4.1;1.1];[4.1;1.9];[4.9;1.9];[4.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)

@Flaeche(`A0007a;[[0.1;2.1];[0.1;2.9];[0.9;2.9];[0.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[1.1;2.1];[1.1;2.9];[1.9;2.9];[1.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[2.1;2.1];[2.1;2.9];[2.9;2.9];[2.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[3.1;2.1];[3.1;2.9];[3.9;2.9];[3.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007a;[[4.1;2.1];[4.1;2.9];[4.9;2.9];[4.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)


@Strecke(`A0007a;[[0.1;0];[0.9;0]];#ff00ff;length=0`)
@Strecke(`A0007a;[[1.1;0];[1.9;0]];#ff00ff;length=0`)
@Strecke(`A0007a;[[2.1;0];[2.9;0]];#ff00ff;length=0`)
@Strecke(`A0007a;[[3.1;0];[3.9;0]];#ff00ff;length=0`)
@Strecke(`A0007a;[[4.1;0];[4.9;0]];#ff00ff;length=0`)

@Strecke(`A0007a;[[0.1;3];[0.9;3]];#ff00ff;length=0`)
@Strecke(`A0007a;[[1.1;3];[1.9;3]];#ff00ff;length=0`)
@Strecke(`A0007a;[[2.1;3];[2.9;3]];#ff00ff;length=0`)
@Strecke(`A0007a;[[3.1;3];[3.9;3]];#ff00ff;length=0`)
@Strecke(`A0007a;[[4.1;3];[4.9;3]];#ff00ff;length=0`)

@Strecke(`A0007a;[[0;0.1];[0;0.9]];#ff00ff;length=0`)
@Strecke(`A0007a;[[0;1.1];[0;1.9]];#ff00ff;length=0`)
@Strecke(`A0007a;[[0;2.1];[0;2.9]];#ff00ff;length=0`)

@Strecke(`A0007a;[[5;0.1];[5;0.9]];#ff00ff;length=0`)
@Strecke(`A0007a;[[5;1.1];[5;1.9]];#ff00ff;length=0`)
@Strecke(`A0007a;[[5;2.1];[5;2.9]];#ff00ff;length=0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Es sind [[ 16  ]] umrandende Strecken.





</div>
<div class="flex-child">

__$b)\;\;$__ 


@CoordinateSystem(`xmin=-0.5;xmax=10.25;ymin=-0.5;ymax=4.25;width=400;id=A0007b;0;0;0`)

@Flaeche(`A0007b;[[0.1;0.1];[0.1;0.9];[0.9;0.9];[0.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[1.1;0.1];[1.1;0.9];[1.9;0.9];[1.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[2.1;0.1];[2.1;0.9];[2.9;0.9];[2.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[3.1;0.1];[3.1;0.9];[3.9;0.9];[3.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[4.1;0.1];[4.1;0.9];[4.9;0.9];[4.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[5.1;0.1];[5.1;0.9];[5.9;0.9];[5.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[6.1;0.1];[6.1;0.9];[6.9;0.9];[6.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[7.1;0.1];[7.1;0.9];[7.9;0.9];[7.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[8.1;0.1];[8.1;0.9];[8.9;0.9];[8.9;0.1]];#00ff00;1.0;inhalt=0;umfang=0`)

@Flaeche(`A0007b;[[0.1;1.1];[0.1;1.9];[0.9;1.9];[0.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[1.1;1.1];[1.1;1.9];[1.9;1.9];[1.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[2.1;1.1];[2.1;1.9];[2.9;1.9];[2.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[3.1;1.1];[3.1;1.9];[3.9;1.9];[3.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[4.1;1.1];[4.1;1.9];[4.9;1.9];[4.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[5.1;1.1];[5.1;1.9];[5.9;1.9];[5.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[6.1;1.1];[6.1;1.9];[6.9;1.9];[6.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[7.1;1.1];[7.1;1.9];[7.9;1.9];[7.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[8.1;1.1];[8.1;1.9];[8.9;1.9];[8.9;1.1]];#00ff00;1.0;inhalt=0;umfang=0`)

@Flaeche(`A0007b;[[0.1;2.1];[0.1;2.9];[0.9;2.9];[0.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[1.1;2.1];[1.1;2.9];[1.9;2.9];[1.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[2.1;2.1];[2.1;2.9];[2.9;2.9];[2.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[3.1;2.1];[3.1;2.9];[3.9;2.9];[3.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[4.1;2.1];[4.1;2.9];[4.9;2.9];[4.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[5.1;2.1];[5.1;2.9];[5.9;2.9];[5.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[6.1;2.1];[6.1;2.9];[6.9;2.9];[6.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[7.1;2.1];[7.1;2.9];[7.9;2.9];[7.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[8.1;2.1];[8.1;2.9];[8.9;2.9];[8.9;2.1]];#00ff00;1.0;inhalt=0;umfang=0`)

@Flaeche(`A0007b;[[0.1;3.1];[0.1;3.9];[0.9;3.9];[0.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[1.1;3.1];[1.1;3.9];[1.9;3.9];[1.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[2.1;3.1];[2.1;3.9];[2.9;3.9];[2.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[3.1;3.1];[3.1;3.9];[3.9;3.9];[3.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[4.1;3.1];[4.1;3.9];[4.9;3.9];[4.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[5.1;3.1];[5.1;3.9];[5.9;3.9];[5.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[6.1;3.1];[6.1;3.9];[6.9;3.9];[6.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[7.1;3.1];[7.1;3.9];[7.9;3.9];[7.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)
@Flaeche(`A0007b;[[8.1;3.1];[8.1;3.9];[8.9;3.9];[8.9;3.1]];#00ff00;1.0;inhalt=0;umfang=0`)


@Strecke(`A0007b;[[0.1;0];[0.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[1.1;0];[1.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[2.1;0];[2.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[3.1;0];[3.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[4.1;0];[4.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[5.1;0];[5.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[6.1;0];[6.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[7.1;0];[7.9;0]];#ff00ff;length=0`)
@Strecke(`A0007b;[[8.1;0];[8.9;0]];#ff00ff;length=0`)

@Strecke(`A0007b;[[0.1;4];[0.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[1.1;4];[1.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[2.1;4];[2.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[3.1;4];[3.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[4.1;4];[4.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[5.1;4];[5.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[6.1;4];[6.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[7.1;4];[7.9;4]];#ff00ff;length=0`)
@Strecke(`A0007b;[[8.1;4];[8.9;4]];#ff00ff;length=0`)

@Strecke(`A0007b;[[0;0.1];[0;0.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[0;1.1];[0;1.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[0;2.1];[0;2.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[0;3.1];[0;3.9]];#ff00ff;length=0`)

@Strecke(`A0007b;[[9;0.1];[9;0.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[9;1.1];[9;1.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[9;2.1];[9;2.9]];#ff00ff;length=0`)
@Strecke(`A0007b;[[9;3.1];[9;3.9]];#ff00ff;length=0`)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Es sind [[ 26  ]] umrandende Strecken.





</div>
</section>


 







