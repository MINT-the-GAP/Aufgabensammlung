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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Trigonometrie, sehr leicht, sehr niedrig, Angeben

comment: Setze die passende Größe in die gegebene Gleichung zum gegebenen rechtwinkligen Dreieck ein.

author: Martin Lommatzsch

-->




# Gleichungen im rechtwinkligen Dreieck


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Fülle** die Lücke in der Gleichung aus, sodass die Gleichung eine wahre mathematische Aussage zum gegebenen Dreieck darstellt.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0002a;0;0;0`)
@Punkt(`TR0002a;A;-2;0;#000000;0;fix`)
@Punkt(`TR0002a;B;2;0;#000000;0;fix`)
@Punkt(`TR0002a;C;2;3;#000000;0;fix`)
@Strecke(`TR0002a;[A;B];#ff00ff;1;0`)
@Strecke(`TR0002a;[B;C];#ff00ff;1;0`)
@Strecke(`TR0002a;[C;A];#ff00ff;1;0`)
@KoordText(`TR0002a;[0;-0.35];$b$;#ff00ff;1`)
@KoordText(`TR0002a;[2.25;1.5];$d$;#ff00ff;1`)
@KoordText(`TR0002a;[-0.2;2.0];$f$;#ff00ff;1`)
@Winkel(`TR0002a;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0002a;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0002a;\alpha;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0002a;\chi;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[$\sin$|($\cos$)|$\tan$|$\text{cot}$]] $(\alpha)= \frac{b}{f}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0002b;0;0;0`)
@Punkt(`TR0002b;A;-2;0;#000000;0;fix`)
@Punkt(`TR0002b;B;2;0;#000000;0;fix`)
@Punkt(`TR0002b;C;2;3;#000000;0;fix`)
@Strecke(`TR0002b;[A;B];#ff00ff;1;0`)
@Strecke(`TR0002b;[B;C];#ff00ff;1;0`)
@Strecke(`TR0002b;[C;A];#ff00ff;1;0`)
@KoordText(`TR0002b;[0;-0.35];$k$;#ff00ff;1`)
@KoordText(`TR0002b;[2.25;1.5];$s$;#ff00ff;1`)
@KoordText(`TR0002b;[-0.2;2.0];$c$;#ff00ff;1`)
@Winkel(`TR0002b;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0002b;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0002b;\psi;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0002b;\epsilon;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ [[ s ]]$^2 = $ [[ c ]]$^2 - k^2$


@ADetails(1=BE; Trigonometrie, Satz des Pythagoras)

</div>




<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0002c;0;0;0`)
@Punkt(`TR0002c;A;-2;0;#000000;0;fix`)
@Punkt(`TR0002c;B;2;0;#000000;0;fix`)
@Punkt(`TR0002c;C;2;3;#000000;0;fix`)
@Strecke(`TR0002c;[A;B];#ff00ff;1;0`)
@Strecke(`TR0002c;[B;C];#ff00ff;1;0`)
@Strecke(`TR0002c;[C;A];#ff00ff;1;0`)
@KoordText(`TR0002c;[0;-0.35];$x$;#ff00ff;1`)
@KoordText(`TR0002c;[2.25;1.5];$y$;#ff00ff;1`)
@KoordText(`TR0002c;[-0.2;2.0];$t$;#ff00ff;1`)
@Winkel(`TR0002c;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0002c;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0002c;\rho;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0002c;\nu;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[$\sin$|$\cos$|($\tan$)|($\text{cot}$)]] $(\rho)= \frac{x}{y}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0002d;0;0;0`)
@Punkt(`TR0002d;A;-2;0;#000000;0;fix`)
@Punkt(`TR0002d;B;2;0;#000000;0;fix`)
@Punkt(`TR0002d;C;2;3;#000000;0;fix`)
@Strecke(`TR0002d;[A;B];#ff00ff;1;0`)
@Strecke(`TR0002d;[B;C];#ff00ff;1;0`)
@Strecke(`TR0002d;[C;A];#ff00ff;1;0`)
@KoordText(`TR0002d;[0;-0.35];$k$;#ff00ff;1`)
@KoordText(`TR0002d;[2.25;1.5];$p$;#ff00ff;1`)
@KoordText(`TR0002d;[-0.2;2.0];$v$;#ff00ff;1`)
@Winkel(`TR0002d;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0002d;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0002d;\beta;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0002d;\zeta;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$   $\sin(\zeta)$= [[$\frac{p}{v}$|$\frac{v}{p}$|$\frac{k}{p}$|$\frac{p}{k}$|($\frac{k}{v}$)|$\frac{v}{k}$]]


@ADetails(1=BE; Trigonometrie)

</div>

</section>













