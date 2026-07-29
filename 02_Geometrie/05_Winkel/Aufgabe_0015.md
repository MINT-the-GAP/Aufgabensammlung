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

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015a;0;0;1`)
@SetSquare(`WA0015a`)
@DGS(`WA0015a;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015a;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015a;B;2.26;1.97;#e63946;0;fix`)

@Strecke(`WA0015a;[Z;A];#ff00ff;`)
@Strecke(`WA0015a;[Z;B];#ff00ff;`)
@Winkel(`WA0015a;\alpha;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\alpha =$ [[ 41 ]]$^\circ$
@Algebrite.check2(41,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015b;0;0;1`)
@SetSquare(`WA0015b`)
@DGS(`WA0015b;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015b;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015b;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015b;B;1.10;2.79;#e63946;0;fix`)

@Strecke(`WA0015b;[Z;A];#ff00ff;`)
@Strecke(`WA0015b;[Z;B];#ff00ff;`)
@Winkel(`WA0015b;\beta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 68,5 ]]$^\circ$
@Algebrite.check2(68.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015c;0;0;1`)
@SetSquare(`WA0015c`)
@DGS(`WA0015c;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015c;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015c;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015c;B;-0.05;3.00;#e63946;0;fix`)

@Strecke(`WA0015c;[Z;A];#ff00ff;`)
@Strecke(`WA0015c;[Z;B];#ff00ff;`)
@Winkel(`WA0015c;\gamma;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\gamma =$ [[ 91 ]]$^\circ$
@Algebrite.check2(91,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015d;0;0;1`)
@SetSquare(`WA0015d`)
@DGS(`WA0015d;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015d;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015d;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015d;B;-1.68;2.49;#e63946;0;fix`)

@Strecke(`WA0015d;[Z;A];#ff00ff;`)
@Strecke(`WA0015d;[Z;B];#ff00ff;`)
@Winkel(`WA0015d;\delta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\delta =$ [[ 124 ]]$^\circ$
@Algebrite.check2(124,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015e;0;0;1`)
@SetSquare(`WA0015e`)
@DGS(`WA0015e;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015e;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015e;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015e;B;-2.50;-1.65;#e63946;0;fix`)

@Strecke(`WA0015e;[Z;A];#ff00ff;`)
@Strecke(`WA0015e;[Z;B];#ff00ff;`)
@Winkel(`WA0015e;\epsilon;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\epsilon =$ [[ 213,5 ]]$^\circ$
@Algebrite.check2(213.5,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-3.4;xmax=3.8;ymin=-2.8;ymax=3.8;width=600;id=WA0015f;0;0;1`)
@SetSquare(`WA0015f`)
@DGS(`WA0015f;tools=[0];restrictions=[100;300;400]`)

@Punkt(`WA0015f;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0015f;A;3;0;#e63946;0;fix`)
@Punkt(`WA0015f;B;-2.96;-0.47;#e63946;0;fix`)

@Strecke(`WA0015f;[Z;A];#ff00ff;`)
@Strecke(`WA0015f;[Z;B];#ff00ff;`)
@Winkel(`WA0015f;\zeta;[A;Z;B];#00ffff;0.78;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\zeta =$ [[ 189 ]]$^\circ$
@Algebrite.check2(189,0.5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Winkel, Messen)

</div>

</section>