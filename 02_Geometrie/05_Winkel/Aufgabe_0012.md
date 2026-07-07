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

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012a;0;0;0`)

@Punkt(`WA0012a;Z;0.3;1.3;#e63946;0;fix`)
@Punkt(`WA0012a;Y;1.8;-0.2;#e63946;0;fix`)
@Punkt(`WA0012a;B;0.3;-1.2;#e63946;0;fix`)
@Punkt(`WA0012a;A;0.3;2.8;#e63946;0;fix`)
@Punkt(`WA0012a;C;1.8;-1.7;#e63946;0;fix`)
@Punkt(`WA0012a;D;1.8;2.8;#e63946;0;fix`)
@Punkt(`WA0012a;G;2.8;-1.2;#e63946;0;fix`)
@Punkt(`WA0012a;H;-0.7;2.3;#e63946;0;fix`)

@Strecke(`WA0012a;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012a;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012a;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012a;[1.85;-1.85];$f$;#ff00ff;1`)
@KoordText(`WA0012a;[0.35;-1.35];$g$;#ff00ff;1`)

@Winkel(`WA0012a;69^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0012a;\nu;[H;Z;B];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\nu =$ [[ 111 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)


</div>

<div class="flex-child">



__$b)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012b;0;0;0`)

@Punkt(`WA0012b;Z;0.1;1.3;#e63946;0;fix`)
@Punkt(`WA0012b;Y;2.1;0.3;#e63946;0;fix`)
@Punkt(`WA0012b;B;0.7;-1.7;#e63946;0;fix`)
@Punkt(`WA0012b;A;-0.3;3.3;#e63946;0;fix`)
@Punkt(`WA0012b;C;2.5;-1.7;#e63946;0;fix`)
@Punkt(`WA0012b;D;1.5;3.3;#e63946;0;fix`)
@Punkt(`WA0012b;G;3.3;-0.3;#e63946;0;fix`)
@Punkt(`WA0012b;H;-1.5;2.1;#e63946;0;fix`)

@Strecke(`WA0012b;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012b;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012b;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012b;[2.55;-1.85];$f$;#ff00ff;1`)
@KoordText(`WA0012b;[0.7;-1.85];$g$;#ff00ff;1`)

@Winkel(`WA0012b;37^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0012b;\rho;[D;Y;Z];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\rho =$ [[ 37 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012c;0;0;0`)

@Punkt(`WA0012c;Z;0.3;2.1;#e63946;0;fix`)
@Punkt(`WA0012c;Y;1.6;-0.5;#e63946;0;fix`)
@Punkt(`WA0012c;B;1.5;2.1;#e63946;0;fix`)
@Punkt(`WA0012c;A;-1.2;2.1;#e63946;0;fix`)
@Punkt(`WA0012c;C;2.8;-0.5;#e63946;0;fix`)
@Punkt(`WA0012c;D;0.1;-0.5;#e63946;0;fix`)
@Punkt(`WA0012c;G;2.2;-1.7;#e63946;0;fix`)
@Punkt(`WA0012c;H;-0.3;3.3;#e63946;0;fix`)

@Strecke(`WA0012c;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012c;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012c;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012c;[2.75;-0.75];$f$;#ff00ff;1`)
@KoordText(`WA0012c;[1.5;1.85];$g$;#ff00ff;1`)

@Winkel(`WA0012c;126^\circ;[A;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0012c;\mu;[Y;Z;B];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\mu =$ [[ 54 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012d;0;0;0`)

@Punkt(`WA0012d;Z;0.3;1.3;#e63946;0;fix`)
@Punkt(`WA0012d;Y;1.4;0.3;#e63946;0;fix`)
@Punkt(`WA0012d;B;-0.5;-0.7;#e63946;0;fix`)
@Punkt(`WA0012d;A;1.1;3.3;#e63946;0;fix`)
@Punkt(`WA0012d;C;1;-0.7;#e63946;0;fix`)
@Punkt(`WA0012d;D;2.6;3.3;#e63946;0;fix`)
@Punkt(`WA0012d;G;2.5;-0.7;#e63946;0;fix`)
@Punkt(`WA0012d;H;-0.7;2.2;#e63946;0;fix`)

@Strecke(`WA0012d;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012d;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012d;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012d;[1.05;-0.9];$f$;#ff00ff;1`)
@KoordText(`WA0012d;[-0.45;-0.9];$g$;#ff00ff;1`)

@Winkel(`WA0012d;31^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0012d;\beta;[Y;Z;A];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\beta =$ [[ 149 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012e;0;0;0`)

@Punkt(`WA0012e;Z;-0.5;0.9;#e63946;0;fix`)
@Punkt(`WA0012e;Y;2;1.8;#e63946;0;fix`)
@Punkt(`WA0012e;B;-0.5;-1.9;#e63946;0;fix`)
@Punkt(`WA0012e;A;-0.5;3.5;#e63946;0;fix`)
@Punkt(`WA0012e;C;2;-1.9;#e63946;0;fix`)
@Punkt(`WA0012e;D;2;3.5;#e63946;0;fix`)
@Punkt(`WA0012e;G;3.4;2.3;#e63946;0;fix`)
@Punkt(`WA0012e;H;-2.45;0.2;#e63946;0;fix`)

@Strecke(`WA0012e;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012e;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012e;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012e;[2;-1.75];$f$;#ff00ff;1`)
@KoordText(`WA0012e;[-0.5;-1.75];$g$;#ff00ff;1`)

@Winkel(`WA0012e;104^\circ;[D;Y;Z];#00ffff;0.99;0`)
@Winkel(`WA0012e;\zeta;[Z;Y;C];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\zeta =$ [[ 76 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0012f;0;0;0`)

@Punkt(`WA0012f;Z;0.7;1.3;#e63946;0;fix`)
@Punkt(`WA0012f;Y;2.7;0.3;#e63946;0;fix`)
@Punkt(`WA0012f;B;1.9;-0.2;#e63946;0;fix`)
@Punkt(`WA0012f;A;-0.9;3.3;#e63946;0;fix`)
@Punkt(`WA0012f;C;3.58;-0.8;#e63946;0;fix`)
@Punkt(`WA0012f;D;0.78;2.7;#e63946;0;fix`)
@Punkt(`WA0012f;G;3.7;-0.2;#e63946;0;fix`)
@Punkt(`WA0012f;H;-0.7;2;#e63946;0;fix`)

@Strecke(`WA0012f;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0012f;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0012f;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0012f;[3.5;-0.95];$f$;#ff00ff;1`)
@KoordText(`WA0012f;[1.9;-0.45];$g$;#ff00ff;1`)

@Winkel(`WA0012f;159^\circ;[Y;Z;A];#00ffff;0.99;0`)
@Winkel(`WA0012f;\tau;[G;Y;D];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\tau =$ [[ 159 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

</section>





