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

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011a;0;0;0`)

@Punkt(`WA0011a;Z;1;0.3;#e63946;0;fix`)
@Punkt(`WA0011a;Y;-0.5;1.8;#e63946;0;fix`)
@Punkt(`WA0011a;B;1;2.8;#e63946;0;fix`)
@Punkt(`WA0011a;A;1;-1.2;#e63946;0;fix`)
@Punkt(`WA0011a;C;-0.5;3.3;#e63946;0;fix`)
@Punkt(`WA0011a;D;-0.5;-1.2;#e63946;0;fix`)
@Punkt(`WA0011a;G;-1.5;2.8;#e63946;0;fix`)
@Punkt(`WA0011a;H;2;-0.7;#e63946;0;fix`)

@Strecke(`WA0011a;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011a;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011a;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011a;[-0.5;3.45];$f$;#ff00ff;1`)
@KoordText(`WA0011a;[1;2.95];$g$;#ff00ff;1`)

@Winkel(`WA0011a;74^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0011a;\eta;[H;Z;B];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\eta =$ [[ 106 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)


</div>

<div class="flex-child">



__$b)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011b;0;0;0`)

@Punkt(`WA0011b;Z;1.2;0.3;#e63946;0;fix`)
@Punkt(`WA0011b;Y;-0.8;1.3;#e63946;0;fix`)
@Punkt(`WA0011b;B;0.6;3.3;#e63946;0;fix`)
@Punkt(`WA0011b;A;1.6;-1.7;#e63946;0;fix`)
@Punkt(`WA0011b;C;-1.2;3.3;#e63946;0;fix`)
@Punkt(`WA0011b;D;-0.2;-1.7;#e63946;0;fix`)
@Punkt(`WA0011b;G;-2;1.9;#e63946;0;fix`)
@Punkt(`WA0011b;H;2.8;-0.5;#e63946;0;fix`)

@Strecke(`WA0011b;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011b;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011b;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011b;[-1.15;3.45];$f$;#ff00ff;1`)
@KoordText(`WA0011b;[0.7;3.45];$g$;#ff00ff;1`)

@Winkel(`WA0011b;63^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0011b;\sigma;[D;Y;Z];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\sigma =$ [[ 63 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011c;0;0;0`)

@Punkt(`WA0011c;Z;1;-0.5;#e63946;0;fix`)
@Punkt(`WA0011c;Y;-0.3;2.1;#e63946;0;fix`)
@Punkt(`WA0011c;B;-0.2;-0.5;#e63946;0;fix`)
@Punkt(`WA0011c;A;2.5;-0.5;#e63946;0;fix`)
@Punkt(`WA0011c;C;-1.5;2.1;#e63946;0;fix`)
@Punkt(`WA0011c;D;1.2;2.1;#e63946;0;fix`)
@Punkt(`WA0011c;G;-0.9;3.3;#e63946;0;fix`)
@Punkt(`WA0011c;H;1.6;-1.7;#e63946;0;fix`)

@Strecke(`WA0011c;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011c;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011c;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011c;[-1.45;2.3];$f$;#ff00ff;1`)
@KoordText(`WA0011c;[-0.2;-0.35];$g$;#ff00ff;1`)

@Winkel(`WA0011c;121^\circ;[A;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0011c;\kappa;[Y;Z;B];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\kappa =$ [[ 59 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011d;0;0;0`)

@Punkt(`WA0011d;Z;1;0.3;#e63946;0;fix`)
@Punkt(`WA0011d;Y;-0.1;1.3;#e63946;0;fix`)
@Punkt(`WA0011d;B;1.8;2.3;#e63946;0;fix`)
@Punkt(`WA0011d;A;0.2;-1.7;#e63946;0;fix`)
@Punkt(`WA0011d;C;0.3;2.3;#e63946;0;fix`)
@Punkt(`WA0011d;D;-1.3;-1.7;#e63946;0;fix`)
@Punkt(`WA0011d;G;-1.2;2.3;#e63946;0;fix`)
@Punkt(`WA0011d;H;2;-0.6;#e63946;0;fix`)

@Strecke(`WA0011d;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011d;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011d;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011d;[0.35;2.55];$f$;#ff00ff;1`)
@KoordText(`WA0011d;[1.8;2.55];$g$;#ff00ff;1`)

@Winkel(`WA0011d;46^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0011d;\lambda;[Y;Z;A];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\lambda =$ [[ 134 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011e;0;0;0`)

@Punkt(`WA0011e;Z;1.8;0.7;#e63946;0;fix`)
@Punkt(`WA0011e;Y;-0.7;-0.2;#e63946;0;fix`)
@Punkt(`WA0011e;B;1.8;3.5;#e63946;0;fix`)
@Punkt(`WA0011e;A;1.8;-1.9;#e63946;0;fix`)
@Punkt(`WA0011e;C;-0.7;3.5;#e63946;0;fix`)
@Punkt(`WA0011e;D;-0.7;-1.9;#e63946;0;fix`)
@Punkt(`WA0011e;G;-2.1;-0.7;#e63946;0;fix`)
@Punkt(`WA0011e;H;3.75;1.4;#e63946;0;fix`)

@Strecke(`WA0011e;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011e;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011e;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011e;[-0.65;3.35];$f$;#ff00ff;1`)
@KoordText(`WA0011e;[1.7;3.35];$g$;#ff00ff;1`)

@Winkel(`WA0011e;112^\circ;[D;Y;Z];#00ffff;0.99;0`)
@Winkel(`WA0011e;\omega;[Z;Y;C];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\omega =$ [[ 68 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0011f;0;0;0`)

@Punkt(`WA0011f;Z;0.6;0.3;#e63946;0;fix`)
@Punkt(`WA0011f;Y;-1.4;1.3;#e63946;0;fix`)
@Punkt(`WA0011f;B;-0.6;1.8;#e63946;0;fix`)
@Punkt(`WA0011f;A;2.2;-1.7;#e63946;0;fix`)
@Punkt(`WA0011f;C;-2.28;2.4;#e63946;0;fix`)
@Punkt(`WA0011f;D;0.52;-1.1;#e63946;0;fix`)
@Punkt(`WA0011f;G;-2.4;1.8;#e63946;0;fix`)
@Punkt(`WA0011f;H;2;-0.4;#e63946;0;fix`)

@Strecke(`WA0011f;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0011f;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0011f;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0011f;[-2.2;2.55];$f$;#ff00ff;1`)
@KoordText(`WA0011f;[-0.6;2.05];$g$;#ff00ff;1`)

@Winkel(`WA0011f;148^\circ;[Y;Z;A];#00ffff;0.99;0`)
@Winkel(`WA0011f;\chi;[G;Y;D];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\chi =$ [[ 148 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

</section>





