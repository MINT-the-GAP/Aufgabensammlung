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

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016a;0;0;1`)
@SetSquare(`WA0016a`)
@DGS(`WA0016a;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016a;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016a;B;2.83;1.00;#e63946;0;fix`)

@Strecke(`WA0016a;[Z;A];#ff00ff;`)
@Strecke(`WA0016a;[Z;B];#ff00ff;`)
@Winkel(`WA0016a;\alpha;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\alpha =$ [[ 19,5 ]]$^\circ$
@Algebrite.check2(19.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016b;0;0;1`)
@SetSquare(`WA0016b`)
@DGS(`WA0016b;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016b;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016b;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016b;B;8;2.87;#e63946;0;fix`)

@Strecke(`WA0016b;[Z;A];#ff00ff;`)
@Strecke(`WA0016b;[Z;B];#ff00ff;`)
@Winkel(`WA0016b;\beta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 73 ]]$^\circ$
@Algebrite.check2(73,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016c;0;0;1`)
@SetSquare(`WA0016c`)
@DGS(`WA0016c;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016c;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016c;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016c;B;0.10;3.00;#e63946;0;fix`)

@Strecke(`WA0016c;[Z;A];#ff00ff;`)
@Strecke(`WA0016c;[Z;B];#ff00ff;`)
@Winkel(`WA0016c;\gamma;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\gamma =$ [[ 88 ]]$^\circ$
@Algebrite.check2(88,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016d;0;0;1`)
@SetSquare(`WA0016d`)
@DGS(`WA0016d;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016d;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016d;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016d;B;-1.20;2.75;#e63946;0;fix`)

@Strecke(`WA0016d;[Z;A];#ff00ff;`)
@Strecke(`WA0016d;[Z;B];#ff00ff;`)
@Winkel(`WA0016d;\delta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\delta =$ [[ 113,5 ]]$^\circ$
@Algebrite.check2(113.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016e;0;0;1`)
@SetSquare(`WA0016e`)
@DGS(`WA0016e;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016e;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016e;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016e;B;-2.26;-1.97;#e63946;0;fix`)

@Strecke(`WA0016e;[Z;A];#ff00ff;`)
@Strecke(`WA0016e;[Z;B];#ff00ff;`)
@Winkel(`WA0016e;\epsilon;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\epsilon =$ [[ 221 ]]$^\circ$
@Algebrite.check2(221,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0016f;0;0;1`)
@SetSquare(`WA0016f`)
@DGS(`WA0016f;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0016f;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0016f;A;3;0;#e63946;0;fix`)
@Punkt(`WA0016f;B;-2.88;-0.83;#e63946;0;fix`)

@Strecke(`WA0016f;[Z;A];#ff00ff;`)
@Strecke(`WA0016f;[Z;B];#ff00ff;`)
@Winkel(`WA0016f;\zeta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\zeta =$ [[ 196 ]]$^\circ$
@Algebrite.check2(196,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

</section>