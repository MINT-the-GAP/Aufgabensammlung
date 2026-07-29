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

tags: Strecke, Messen, sehr leicht, sehr niedrig, Angeben

comment: Miss die dargestellten Strecken mit dem Geodreieck und gib die Streckenlänge an.

author: Martin Lommatzsch

-->

# Streckenlängen messen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Miss** die markierten Strecken mit dem Geodreieck und **gib** die Länge in LE an.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012a;0;0;1`)
@SetSquare(`GL0012a`)

@Point(`GL0012a;A;1;0;#ff00ff;1;fix`)
@Point(`GL0012a;B;5;0;#ff00ff;1;fix`)
@Strecke(`GL0012a;[A;B];#ff00ff;s=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{AB}| =$ [[ 4 ]] LE
@Algebrite.check2(4)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012b;0;0;1`)
@SetSquare(`GL0012b`)

@Point(`GL0012b;C;2;0;#ff00ff;1;fix`)
@Point(`GL0012b;D;9;0;#ff00ff;1;fix`)
@Strecke(`GL0012b;[C;D];#ff00ff;t=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{CD}| =$ [[ 7 ]] LE
@Algebrite.check2(7)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012c;0;0;1`)
@SetSquare(`GL0012c`)

@Point(`GL0012c;E;1;0;#ff00ff;1;fix`)
@Point(`GL0012c;F;11;0;#ff00ff;1;fix`)
@Strecke(`GL0012c;[E;F];#ff00ff;u=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{EF}| =$ [[ 10 ]] LE
@Algebrite.check2(10)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012d;0;0;1`)
@SetSquare(`GL0012d`)

@Point(`GL0012d;G;3;0;#ff00ff;1;fix`)
@Point(`GL0012d;H;8;0;#ff00ff;1;fix`)
@Strecke(`GL0012d;[G;H];#ff00ff;v=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{GH}| =$ [[ 5 ]] LE
@Algebrite.check2(5)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012e;0;0;1`)
@SetSquare(`GL0012e`)

@Point(`GL0012e;I;2;0;#ff00ff;1;fix`)
@Point(`GL0012e;J;10;0;#ff00ff;1;fix`)
@Strecke(`GL0012e;[I;J];#ff00ff;w=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{IJ}| =$ [[ 8 ]] LE
@Algebrite.check2(8)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-1;xmax=12;ymin=-4;ymax=4;width=600;id=GL0012f;0;0;1`)
@SetSquare(`GL0012f`)

@Point(`GL0012f;K;4;0;#ff00ff;1;fix`)
@Point(`GL0012f;L;6;0;#ff00ff;1;fix`)
@Strecke(`GL0012f;[K;L];#ff00ff;x=0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$|\overline{KL}| =$ [[ 2 ]] LE
@Algebrite.check2(2)
[[?]] @Explain

@resetter

@ADetails(1=BE; Strecke, Messen)

</div>

</section>
