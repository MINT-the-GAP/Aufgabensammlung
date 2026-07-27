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

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

tags: Strecke, Messen, sehr leicht, niedrig, Angeben, Dezimalzahlen

comment: Miss die dargestellten Strecken mit dem Geodreieck und gib die Streckenlänge als Dezimalzahl in LE an.

author: Martin Lommatzsch

-->

# Streckenlängen messen (Dezimalzahlen)

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Miss** die markierten Strecken mit dem Geodreieck und **gib** die Länge als Dezimalzahl in LE an.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013a;0;0;1`)
@SetSquare(`GL0013a`)

@Point(`GL0013a;A;1.1;0;#ff00ff;1;fix`)
@Point(`GL0013a;B;4.3;0;#ff00ff;1;fix`)
@Strecke(`GL0013a;[A;B];#ff00ff;s=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->

$|\overline{AB}| =$ [[ 3,2 ]] LE
@Algebrite.check2(3.2)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013b;0;0;1`)
@SetSquare(`GL0013b`)

@Point(`GL0013b;C;2.4;0;#ff00ff;1;fix`)
@Point(`GL0013b;D;7.8;0;#ff00ff;1;fix`)
@Strecke(`GL0013b;[C;D];#ff00ff;t=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{CD}| =$ [[ 5,4 ]] LE
@Algebrite.check2(5.4)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013c;0;0;1`)
@SetSquare(`GL0013c`)

@Point(`GL0013c;E;1.7;0;#ff00ff;1;fix`)
@Point(`GL0013c;F;7.6;0;#ff00ff;1;fix`)
@Strecke(`GL0013c;[E;F];#ff00ff;u=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{EF}| =$ [[ 5,9 ]] LE
@Algebrite.check2(5.9)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013d;0;0;1`)
@SetSquare(`GL0013d`)

@Point(`GL0013d;G;3.2;0;#ff00ff;1;fix`)
@Point(`GL0013d;H;5.8;0;#ff00ff;1;fix`)
@Strecke(`GL0013d;[G;H];#ff00ff;v=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{GH}| =$ [[ 2,6 ]] LE
@Algebrite.check2(2.6)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013e;0;0;1`)
@SetSquare(`GL0013e`)

@Point(`GL0013e;I;2.3;0;#ff00ff;1;fix`)
@Point(`GL0013e;J;9.4;0;#ff00ff;1;fix`)
@Strecke(`GL0013e;[I;J];#ff00ff;w=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{IJ}| =$ [[ 7,1 ]] LE
@Algebrite.check2(7.1)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0013f;0;0;1`)
@SetSquare(`GL0013f`)

@Point(`GL0013f;K;4.6;0;#ff00ff;1;fix`)
@Point(`GL0013f;L;10.8;0;#ff00ff;1;fix`)
@Strecke(`GL0013f;[K;L];#ff00ff;x=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{KL}| =$ [[ 6,2 ]] LE
@Algebrite.check2(6.2)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

</section>
