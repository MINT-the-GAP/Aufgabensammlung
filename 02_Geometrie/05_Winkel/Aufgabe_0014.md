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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

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

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014a;0;0;1`)
@SetSquare(`WA0014a`)
@DGS(`WA0014a;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014a;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014a;B;2.65;1.41;#e63946;0;fix`)

@Strecke(`WA0014a;[Z;A];#ff00ff;`)
@Strecke(`WA0014a;[Z;B];#ff00ff;`)
@Winkel(`WA0014a;\alpha;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\alpha =$ [[ 28 ]]$^\circ$
@Algebrite.check2(28,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014b;0;0;1`)
@SetSquare(`WA0014b`)
@DGS(`WA0014b;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014b;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014b;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014b;B;1.76;2.43;#e63946;0;fix`)

@Strecke(`WA0014b;[Z;A];#ff00ff;`)
@Strecke(`WA0014b;[Z;B];#ff00ff;`)
@Winkel(`WA0014b;\beta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 54 ]]$^\circ$
@Algebrite.check2(54,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014c;0;0;1`)
@SetSquare(`WA0014c`)
@DGS(`WA0014c;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014c;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014c;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014c;B;0.34;2.98;#e63946;0;fix`)

@Strecke(`WA0014c;[Z;A];#ff00ff;`)
@Strecke(`WA0014c;[Z;B];#ff00ff;`)
@Winkel(`WA0014c;\gamma;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\gamma =$ [[ 83,5 ]]$^\circ$
@Algebrite.check2(83.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014d;0;0;1`)
@SetSquare(`WA0014d`)
@DGS(`WA0014d;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014d;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014d;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014d;B;-0.98;2.84;#e63946;0;fix`)

@Strecke(`WA0014d;[Z;A];#ff00ff;`)
@Strecke(`WA0014d;[Z;B];#ff00ff;`)
@Winkel(`WA0014d;\delta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\delta =$ [[ 109 ]]$^\circ$
@Algebrite.check2(109,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014e;0;0;1`)
@SetSquare(`WA0014e`)
@DGS(`WA0014e;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014e;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014e;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014e;B;-2.01;-2.23;#e63946;0;fix`)

@Strecke(`WA0014e;[Z;A];#ff00ff;`)
@Strecke(`WA0014e;[Z;B];#ff00ff;`)
@Winkel(`WA0014e;\epsilon;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\epsilon =$ [[ 228 ]]$^\circ$
@Algebrite.check2(228,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0014f;0;0;1`)
@SetSquare(`WA0014f`)
@DGS(`WA0014f;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0014f;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0014f;A;3;0;#e63946;0;fix`)
@Punkt(`WA0014f;B;-2.76;-1.17;#e63946;0;fix`)

@Strecke(`WA0014f;[Z;A];#ff00ff;`)
@Strecke(`WA0014f;[Z;B];#ff00ff;`)
@Winkel(`WA0014f;\zeta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\zeta =$ [[ 203 ]]$^\circ$
@Algebrite.check2(203,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

</section>