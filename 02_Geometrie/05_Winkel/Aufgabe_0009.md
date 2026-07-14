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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Winkel, Winkelbeziehungen, leicht, sehr niedrig, Angeben

comment: Ein Winkelbeziehung ist bekannt, wie groß ist das gesuchte Winkelbeziehung?

author: Martin Lommatzsch

-->




# Winkelbeziehungen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** das gesuchte Winkelbeziehung **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009a;0;0;0`)

@Punkt(`WA0009a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0009a;Y;1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0009a;B;2.5;0;#e63946;0;fix`)
@Punkt(`WA0009a;A;-1.5;0;#e63946;0;fix`)
@Punkt(`WA0009a;C;3;1.5;#e63946;0;fix`)
@Punkt(`WA0009a;D;-1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0009a;G;2.5;2.5;#e63946;0;fix`)
@Punkt(`WA0009a;H;-1;-1;#e63946;0;fix`)

@Strecke(`WA0009a;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009a;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009a;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009a;[3.2;1.5];$f$;#ff00ff;1`)
@KoordText(`WA0009a;[2.7;0];$g$;#ff00ff;1`)

@Winkel(`WA0009a;67^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0009a;\lambda;[H;Z;B];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\lambda =$ [[ 113 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009b;0;0;0`)

@Punkt(`WA0009b;Z;0;-0.2;#e63946;0;fix`)
@Punkt(`WA0009b;Y;1;1.8;#e63946;0;fix`)
@Punkt(`WA0009b;B;3;0.4;#e63946;0;fix`)
@Punkt(`WA0009b;A;-2;-0.6;#e63946;0;fix`)
@Punkt(`WA0009b;C;3;2.2;#e63946;0;fix`)
@Punkt(`WA0009b;D;-2;1.2;#e63946;0;fix`)
@Punkt(`WA0009b;G;1.6;3;#e63946;0;fix`)
@Punkt(`WA0009b;H;-0.8;-1.8;#e63946;0;fix`)

@Strecke(`WA0009b;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009b;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009b;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009b;[3.2;2.2];$f$;#ff00ff;1`)
@KoordText(`WA0009b;[3.2;0.35];$g$;#ff00ff;1`)

@Winkel(`WA0009b;52^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0009b;\omega;[D;Y;Z];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\omega =$ [[ 52 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009c;0;0;0`)

@Punkt(`WA0009c;Z;-0.8;0;#e63946;0;fix`)
@Punkt(`WA0009c;Y;1.8;1.3;#e63946;0;fix`)
@Punkt(`WA0009c;B;-0.8;1.2;#e63946;0;fix`)
@Punkt(`WA0009c;A;-0.8;-1.5;#e63946;0;fix`)
@Punkt(`WA0009c;C;1.8;2.5;#e63946;0;fix`)
@Punkt(`WA0009c;D;1.8;-0.2;#e63946;0;fix`)
@Punkt(`WA0009c;G;3;1.9;#e63946;0;fix`)
@Punkt(`WA0009c;H;-2;-0.6;#e63946;0;fix`)

@Strecke(`WA0009c;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009c;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009c;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009c;[2.05;2.5];$f$;#ff00ff;1`)
@KoordText(`WA0009c;[-0.55;1.2];$g$;#ff00ff;1`)

@Winkel(`WA0009c;119^\circ;[A;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0009c;\varphi;[Y;Z;B];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\varphi =$ [[ 61 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009d;0;0;0`)

@Punkt(`WA0009d;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0009d;Y;1;1.1;#e63946;0;fix`)
@Punkt(`WA0009d;B;2;-0.8;#e63946;0;fix`)
@Punkt(`WA0009d;A;-2;0.8;#e63946;0;fix`)
@Punkt(`WA0009d;C;2;0.7;#e63946;0;fix`)
@Punkt(`WA0009d;D;-2;2.3;#e63946;0;fix`)
@Punkt(`WA0009d;G;2;2.2;#e63946;0;fix`)
@Punkt(`WA0009d;H;-0.9;-1;#e63946;0;fix`)

@Strecke(`WA0009d;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009d;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009d;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009d;[2.25;0.75];$f$;#ff00ff;1`)
@KoordText(`WA0009d;[2.25;-0.8];$g$;#ff00ff;1`)

@Winkel(`WA0009d;34^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0009d;\kappa;[Y;Z;A];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\kappa =$ [[ 146 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009e;0;0;0`)

@Punkt(`WA0009e;Z;0.4;-0.8;#e63946;0;fix`)
@Punkt(`WA0009e;Y;-0.5;1.7;#e63946;0;fix`)
@Punkt(`WA0009e;B;3.2;-0.8;#e63946;0;fix`)
@Punkt(`WA0009e;A;-2.2;-0.8;#e63946;0;fix`)
@Punkt(`WA0009e;C;3.2;1.7;#e63946;0;fix`)
@Punkt(`WA0009e;D;-2.2;1.7;#e63946;0;fix`)
@Punkt(`WA0009e;G;-1;3.1;#e63946;0;fix`)
@Punkt(`WA0009e;H;1.1;-2.75;#e63946;0;fix`)

@Strecke(`WA0009e;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009e;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009e;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009e;[3.35;1.7];$f$;#ff00ff;1`)
@KoordText(`WA0009e;[3.35;-0.8];$g$;#ff00ff;1`)

@Winkel(`WA0009e;108^\circ;[D;Y;Z];#00ffff;0.99;0`)
@Winkel(`WA0009e;\beta;[Z;Y;C];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 72 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0009f;0;0;0`)

@Punkt(`WA0009f;Z;0;0.4;#e63946;0;fix`)
@Punkt(`WA0009f;Y;1;2.4;#e63946;0;fix`)
@Punkt(`WA0009f;B;1.5;1.6;#e63946;0;fix`)
@Punkt(`WA0009f;A;-2;-1.2;#e63946;0;fix`)
@Punkt(`WA0009f;C;2.1;3.28;#e63946;0;fix`)
@Punkt(`WA0009f;D;-1.4;0.48;#e63946;0;fix`)
@Punkt(`WA0009f;G;1.5;3.4;#e63946;0;fix`)
@Punkt(`WA0009f;H;-0.7;-1;#e63946;0;fix`)

@Strecke(`WA0009f;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0009f;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0009f;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0009f;[2.25;3.2];$f$;#ff00ff;1`)
@KoordText(`WA0009f;[1.75;1.6];$g$;#ff00ff;1`)

@Winkel(`WA0009f;155^\circ;[Y;Z;A];#00ffff;0.99;0`)
@Winkel(`WA0009f;\mu;[G;Y;D];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\mu =$ [[ 155 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

</section>





