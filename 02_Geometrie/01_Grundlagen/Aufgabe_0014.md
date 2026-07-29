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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
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

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014a;0;0;1`)
@SetSquare(`GL0014a`)

@Point(`GL0014a;A;0.8;0;#ff00ff;1;fix`)
@Point(`GL0014a;B;4.2;0;#ff00ff;1;fix`)
@Strecke(`GL0014a;[A;B];#ff00ff;s=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{AB}| =$ [[ 3,4 ]] LE
@Algebrite.check2(3.4)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014b;0;0;1`)
@SetSquare(`GL0014b`)

@Point(`GL0014b;C;2.1;0;#ff00ff;1;fix`)
@Point(`GL0014b;D;6.8;0;#ff00ff;1;fix`)
@Strecke(`GL0014b;[C;D];#ff00ff;t=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{CD}| =$ [[ 4,7 ]] LE
@Algebrite.check2(4.7)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014c;0;0;1`)
@SetSquare(`GL0014c`)

@Point(`GL0014c;E;1.3;0;#ff00ff;1;fix`)
@Point(`GL0014c;F;9.6;0;#ff00ff;1;fix`)
@Strecke(`GL0014c;[E;F];#ff00ff;u=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{EF}| =$ [[ 8,3 ]] LE
@Algebrite.check2(8.3)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014d;0;0;1`)
@SetSquare(`GL0014d`)

@Point(`GL0014d;G;3.4;0;#ff00ff;1;fix`)
@Point(`GL0014d;H;8.1;0;#ff00ff;1;fix`)
@Strecke(`GL0014d;[G;H];#ff00ff;v=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{GH}| =$ [[ 4,7 ]] LE
@Algebrite.check2(4.7)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014e;0;0;1`)
@SetSquare(`GL0014e`)

@Point(`GL0014e;I;2.6;0;#ff00ff;1;fix`)
@Point(`GL0014e;J;5.4;0;#ff00ff;1;fix`)
@Strecke(`GL0014e;[I;J];#ff00ff;w=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{IJ}| =$ [[ 2,8 ]] LE
@Algebrite.check2(2.8)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0014f;0;0;1`)
@SetSquare(`GL0014f`)

@Point(`GL0014f;K;4.1;0;#ff00ff;1;fix`)
@Point(`GL0014f;L;10.9;0;#ff00ff;1;fix`)
@Strecke(`GL0014f;[K;L];#ff00ff;x=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{KL}| =$ [[ 6,8 ]] LE
@Algebrite.check2(6.8)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

</section>
