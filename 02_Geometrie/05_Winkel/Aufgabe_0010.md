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

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010a;0;0;0`)

@Punkt(`WA0010a;Z;1.1;0.2;#e63946;0;fix`)
@Punkt(`WA0010a;Y;-0.4;1.7;#e63946;0;fix`)
@Punkt(`WA0010a;B;1.1;2.7;#e63946;0;fix`)
@Punkt(`WA0010a;A;1.1;-1.3;#e63946;0;fix`)
@Punkt(`WA0010a;C;-0.4;3.2;#e63946;0;fix`)
@Punkt(`WA0010a;D;-0.4;-1.3;#e63946;0;fix`)
@Punkt(`WA0010a;G;-1.4;2.7;#e63946;0;fix`)
@Punkt(`WA0010a;H;2.1;-0.8;#e63946;0;fix`)

@Strecke(`WA0010a;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010a;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010a;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010a;[-0.4;3.4];$f$;#ff00ff;1`)
@KoordText(`WA0010a;[1.1;2.9];$g$;#ff00ff;1`)

@Winkel(`WA0010a;58^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0010a;\upsilon;[H;Z;B];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\upsilon =$ [[ 122 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)


</div>

<div class="flex-child">



__$b)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010b;0;0;0`)

@Punkt(`WA0010b;Z;1.3;0.2;#e63946;0;fix`)
@Punkt(`WA0010b;Y;-0.7;1.2;#e63946;0;fix`)
@Punkt(`WA0010b;B;0.7;3.2;#e63946;0;fix`)
@Punkt(`WA0010b;A;1.7;-1.8;#e63946;0;fix`)
@Punkt(`WA0010b;C;-1.1;3.2;#e63946;0;fix`)
@Punkt(`WA0010b;D;-0.1;-1.8;#e63946;0;fix`)
@Punkt(`WA0010b;G;-1.9;1.8;#e63946;0;fix`)
@Punkt(`WA0010b;H;2.9;-0.6;#e63946;0;fix`)

@Strecke(`WA0010b;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010b;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010b;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010b;[-1.1;3.4];$f$;#ff00ff;1`)
@KoordText(`WA0010b;[0.75;3.4];$g$;#ff00ff;1`)

@Winkel(`WA0010b;41^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0010b;\delta;[D;Y;Z];#00ffff;0.99;0`)



<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\delta =$ [[ 41 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010c;0;0;0`)

@Punkt(`WA0010c;Z;1.1;-0.6;#e63946;0;fix`)
@Punkt(`WA0010c;Y;-0.2;2;#e63946;0;fix`)
@Punkt(`WA0010c;B;-0.1;-0.6;#e63946;0;fix`)
@Punkt(`WA0010c;A;2.6;-0.6;#e63946;0;fix`)
@Punkt(`WA0010c;C;-1.4;2;#e63946;0;fix`)
@Punkt(`WA0010c;D;1.3;2;#e63946;0;fix`)
@Punkt(`WA0010c;G;-0.8;3.2;#e63946;0;fix`)
@Punkt(`WA0010c;H;1.7;-1.8;#e63946;0;fix`)

@Strecke(`WA0010c;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010c;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010c;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010c;[-1.4;2.25];$f$;#ff00ff;1`)
@KoordText(`WA0010c;[-0.1;-0.35];$g$;#ff00ff;1`)

@Winkel(`WA0010c;133^\circ;[A;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0010c;\pi;[Y;Z;B];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\pi =$ [[ 47 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010d;0;0;0`)

@Punkt(`WA0010d;Z;1.1;0.2;#e63946;0;fix`)
@Punkt(`WA0010d;Y;0;1.2;#e63946;0;fix`)
@Punkt(`WA0010d;B;1.9;2.2;#e63946;0;fix`)
@Punkt(`WA0010d;A;0.3;-1.8;#e63946;0;fix`)
@Punkt(`WA0010d;C;0.4;2.2;#e63946;0;fix`)
@Punkt(`WA0010d;D;-1.2;-1.8;#e63946;0;fix`)
@Punkt(`WA0010d;G;-1.1;2.2;#e63946;0;fix`)
@Punkt(`WA0010d;H;2.1;-0.7;#e63946;0;fix`)

@Strecke(`WA0010d;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010d;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010d;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010d;[0.35;2.45];$f$;#ff00ff;1`)
@KoordText(`WA0010d;[1.9;2.45];$g$;#ff00ff;1`)

@Winkel(`WA0010d;27^\circ;[B;Z;Y];#00ffff;0.99;0`)
@Winkel(`WA0010d;\theta;[Y;Z;A];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\theta =$ [[ 153 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$e)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010e;0;0;0`)

@Punkt(`WA0010e;Z;1.9;0.6;#e63946;0;fix`)
@Punkt(`WA0010e;Y;-0.6;-0.3;#e63946;0;fix`)
@Punkt(`WA0010e;B;1.9;3.4;#e63946;0;fix`)
@Punkt(`WA0010e;A;1.9;-2;#e63946;0;fix`)
@Punkt(`WA0010e;C;-0.6;3.4;#e63946;0;fix`)
@Punkt(`WA0010e;D;-0.6;-2;#e63946;0;fix`)
@Punkt(`WA0010e;G;-2;-0.8;#e63946;0;fix`)
@Punkt(`WA0010e;H;3.85;1.3;#e63946;0;fix`)

@Strecke(`WA0010e;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010e;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010e;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010e;[-0.6;3.55];$f$;#ff00ff;1`)
@KoordText(`WA0010e;[1.9;3.55];$g$;#ff00ff;1`)

@Winkel(`WA0010e;95^\circ;[D;Y;Z];#00ffff;0.99;0`)
@Winkel(`WA0010e;\iota;[Z;Y;C];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\iota =$ [[ 85 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

<div class="flex-child">

__$f)\;\;$__

@CoordinateSystem(`xmin=-2.75;xmax=4.25;ymin=-2.25;ymax=3.75;width=400;id=WA0010f;0;0;0`)

@Punkt(`WA0010f;Z;0.7;0.2;#e63946;0;fix`)
@Punkt(`WA0010f;Y;-1.3;1.2;#e63946;0;fix`)
@Punkt(`WA0010f;B;-0.5;1.7;#e63946;0;fix`)
@Punkt(`WA0010f;A;2.3;-1.8;#e63946;0;fix`)
@Punkt(`WA0010f;C;-2.18;2.3;#e63946;0;fix`)
@Punkt(`WA0010f;D;0.62;-1.2;#e63946;0;fix`)
@Punkt(`WA0010f;G;-2.3;1.7;#e63946;0;fix`)
@Punkt(`WA0010f;H;2.1;-0.5;#e63946;0;fix`)

@Strecke(`WA0010f;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0010f;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0010f;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0010f;[-2.1;2.45];$f$;#ff00ff;1`)
@KoordText(`WA0010f;[-0.5;1.95];$g$;#ff00ff;1`)

@Winkel(`WA0010f;166^\circ;[Y;Z;A];#00ffff;0.99;0`)
@Winkel(`WA0010f;\varepsilon;[G;Y;D];#00ffff;0.99;0`)

<!-- data-solution-timer="5s"
data-solution-timer-start="oncheck"
data-solution-timer-badge="off"
data-solution-button="5"
data-hint-button="3"  -->
$\varepsilon =$ [[ 166 ]]$^\circ$

@ADetails(1=BE; Winkelbeziehung)

</div>

</section>





