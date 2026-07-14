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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
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

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0001a;0;0;0`)
@Punkt(`TR0001a;A;-2;0;#000000;0;fix`)
@Punkt(`TR0001a;B;2;0;#000000;0;fix`)
@Punkt(`TR0001a;C;2;3;#000000;0;fix`)
@Strecke(`TR0001a;[A;B];#ff00ff;1;0`)
@Strecke(`TR0001a;[B;C];#ff00ff;1;0`)
@Strecke(`TR0001a;[C;A];#ff00ff;1;0`)
@KoordText(`TR0001a;[0;-0.35];$f$;#ff00ff;1`)
@KoordText(`TR0001a;[2.25;1.5];$g$;#ff00ff;1`)
@KoordText(`TR0001a;[-0.2;2.0];$h$;#ff00ff;1`)
@Winkel(`TR0001a;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0001a;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0001a;\delta;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0001a;\varphi;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[($\sin$)|$\cos$|$\tan$|$\text{cot}$]] $(\delta)= \frac{h}{g}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0001b;0;0;0`)
@Punkt(`TR0001b;A;-2;0;#000000;0;fix`)
@Punkt(`TR0001b;B;2;0;#000000;0;fix`)
@Punkt(`TR0001b;C;2;3;#000000;0;fix`)
@Strecke(`TR0001b;[A;B];#ff00ff;1;0`)
@Strecke(`TR0001b;[B;C];#ff00ff;1;0`)
@Strecke(`TR0001b;[C;A];#ff00ff;1;0`)
@KoordText(`TR0001b;[0;-0.35];$n$;#ff00ff;1`)
@KoordText(`TR0001b;[2.25;1.5];$z$;#ff00ff;1`)
@KoordText(`TR0001b;[-0.2;2.0];$r$;#ff00ff;1`)
@Winkel(`TR0001b;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0001b;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0001b;\gamma;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0001b;\theta;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ $\cos($ [[$z$|($\gamma$)|$\theta$]] $)= \frac{n}{r}$


@ADetails(1=BE; Trigonometrie)

</div>




<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0001c;0;0;0`)
@Punkt(`TR0001c;A;-2;0;#000000;0;fix`)
@Punkt(`TR0001c;B;2;0;#000000;0;fix`)
@Punkt(`TR0001c;C;2;3;#000000;0;fix`)
@Strecke(`TR0001c;[A;B];#ff00ff;1;0`)
@Strecke(`TR0001c;[B;C];#ff00ff;1;0`)
@Strecke(`TR0001c;[C;A];#ff00ff;1;0`)
@KoordText(`TR0001c;[0;-0.35];$x$;#ff00ff;1`)
@KoordText(`TR0001c;[2.25;1.5];$y$;#ff00ff;1`)
@KoordText(`TR0001c;[-0.2;2.0];$t$;#ff00ff;1`)
@Winkel(`TR0001c;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0001c;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0001c;\xi;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0001c;\omega;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[$\sin$|$\cos$|($\tan$)|$\text{cot}$]] $(\xi)= \frac{h}{g}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0001d;0;0;0`)
@Punkt(`TR0001d;A;-2;0;#000000;0;fix`)
@Punkt(`TR0001d;B;2;0;#000000;0;fix`)
@Punkt(`TR0001d;C;2;3;#000000;0;fix`)
@Strecke(`TR0001d;[A;B];#ff00ff;1;0`)
@Strecke(`TR0001d;[B;C];#ff00ff;1;0`)
@Strecke(`TR0001d;[C;A];#ff00ff;1;0`)
@KoordText(`TR0001d;[0;-0.35];$k$;#ff00ff;1`)
@KoordText(`TR0001d;[2.25;1.5];$p$;#ff00ff;1`)
@KoordText(`TR0001d;[-0.2;2.0];$v$;#ff00ff;1`)
@Winkel(`TR0001d;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0001d;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0001d;\mu;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0001d;\kappa;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ [[ v ]]$^2 = $ [[ k ]]$^2 + p^2$


@ADetails(1=BE; Trigonometrie, Satz des Pythagoras)

</div>

</section>













