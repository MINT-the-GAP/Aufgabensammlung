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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/Proposal/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md


tags: Winkel, Messen, sehr leicht, sehr niedrig, Angeben

comment: Miss die hervorgehobenen Winkel mit dem Geodreieck und gib sie mit einer Genauigkeit von +-0,5 Grad an.

author: Martin Lommatzsch

-->


# Winkel messen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Miss** die markierten Winkel **mit** dem Geodreieck und **gib** das Maß in Grad an.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013a;0;0;1`)
@SetSquare(`WA0013a`)
@DGS(`WA0013a;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013a;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013a;B;2.46;1.72;#e63946;0;fix`)

@Strecke(`WA0013a;[Z;A];#ff00ff;`)
@Strecke(`WA0013a;[Z;B];#ff00ff;`)
@Winkel(`WA0013a;\alpha;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\alpha =$ [[ 35 ]]$^\circ$
@Algebrite.check2(35,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013b;0;0;1`)
@SetSquare(`WA0013b`)
@DGS(`WA0013b;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013b;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013b;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013b;B;1.41;2.65;#e63946;0;fix`)

@Strecke(`WA0013b;[Z;A];#ff00ff;`)
@Strecke(`WA0013b;[Z;B];#ff00ff;`)
@Winkel(`WA0013b;\beta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 62 ]]$^\circ$
@Algebrite.check2(62,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013c;0;0;1`)
@SetSquare(`WA0013c`)
@DGS(`WA0013c;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013c;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013c;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013c;B;-0.37;2.98;#e63946;0;fix`)

@Strecke(`WA0013c;[Z;A];#ff00ff;`)
@Strecke(`WA0013c;[Z;B];#ff00ff;`)
@Winkel(`WA0013c;\gamma;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\gamma =$ [[ 97 ]]$^\circ$
@Algebrite.check2(97,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013d;0;0;1`)
@SetSquare(`WA0013d`)
@DGS(`WA0013d;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013d;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013d;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013d;B;-1.41;2.65;#e63946;0;fix`)

@Strecke(`WA0013d;[Z;A];#ff00ff;`)
@Strecke(`WA0013d;[Z;B];#ff00ff;`)
@Winkel(`WA0013d;\delta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\delta =$ [[ 118 ]]$^\circ$
@Algebrite.check2(118,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013e;0;0;1`)
@SetSquare(`WA0013e`)
@DGS(`WA0013e;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013e;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013e;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013e;B;-2.40;-1.81;#e63946;0;fix`)

@Strecke(`WA0013e;[Z;A];#ff00ff;`)
@Strecke(`WA0013e;[Z;B];#ff00ff;`)
@Winkel(`WA0013e;\epsilon;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\epsilon =$ [[ 217 ]]$^\circ$
@Algebrite.check2(217,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0013f;0;0;1`)
@SetSquare(`WA0013f`)
@DGS(`WA0013f;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0013f;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0013f;A;3;0;#e63946;0;fix`)
@Punkt(`WA0013f;B;0.70;-2.92;#e63946;0;fix`)

@Strecke(`WA0013f;[Z;A];#ff00ff;`)
@Strecke(`WA0013f;[Z;B];#ff00ff;`)
@Winkel(`WA0013f;\zeta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\zeta =$ [[ 283,5 ]]$^\circ$
@Algebrite.check2(283.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

</section>
