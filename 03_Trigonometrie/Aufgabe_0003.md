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

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0003a;0;0;0`)
@Punkt(`TR0003a;A;-2;0;#000000;0;fix`)
@Punkt(`TR0003a;B;2;0;#000000;0;fix`)
@Punkt(`TR0003a;C;2;3;#000000;0;fix`)
@Strecke(`TR0003a;[A;B];#ff00ff;1;0`)
@Strecke(`TR0003a;[B;C];#ff00ff;1;0`)
@Strecke(`TR0003a;[C;A];#ff00ff;1;0`)
@KoordText(`TR0003a;[0;-0.35];$a$;#ff00ff;1`)
@KoordText(`TR0003a;[2.25;1.5];$d$;#ff00ff;1`)
@KoordText(`TR0003a;[-0.2;2.0];$c$;#ff00ff;1`)
@Winkel(`TR0003a;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0003a;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0003a;\kappa;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0003a;\phi;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ [[ c ]]$^2 = $ [[ d ]]$^2 + a^2$


@ADetails(1=BE; Trigonometrie, Satz des Pythagoras)


</div>

<div class="flex-child">

__$b)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0003b;0;0;0`)
@Punkt(`TR0003b;A;-2;0;#000000;0;fix`)
@Punkt(`TR0003b;B;2;0;#000000;0;fix`)
@Punkt(`TR0003b;C;2;3;#000000;0;fix`)
@Strecke(`TR0003b;[A;B];#ff00ff;1;0`)
@Strecke(`TR0003b;[B;C];#ff00ff;1;0`)
@Strecke(`TR0003b;[C;A];#ff00ff;1;0`)
@KoordText(`TR0003b;[0;-0.35];$k$;#ff00ff;1`)
@KoordText(`TR0003b;[2.25;1.5];$l$;#ff00ff;1`)
@KoordText(`TR0003b;[-0.2;2.0];$h$;#ff00ff;1`)
@Winkel(`TR0003b;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0003b;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0003b;\delta;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0003b;\rho;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ $\cos($ [[$l$|($\delta$)|$\rho$]] $)= \frac{k}{h}$


@ADetails(1=BE; Trigonometrie)

</div>




<div class="flex-child">

__$c)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0003c;0;0;0`)
@Punkt(`TR0003c;A;-2;0;#000000;0;fix`)
@Punkt(`TR0003c;B;2;0;#000000;0;fix`)
@Punkt(`TR0003c;C;2;3;#000000;0;fix`)
@Strecke(`TR0003c;[A;B];#ff00ff;1;0`)
@Strecke(`TR0003c;[B;C];#ff00ff;1;0`)
@Strecke(`TR0003c;[C;A];#ff00ff;1;0`)
@KoordText(`TR0003c;[0;-0.35];$g$;#ff00ff;1`)
@KoordText(`TR0003c;[2.25;1.5];$z$;#ff00ff;1`)
@KoordText(`TR0003c;[-0.2;2.0];$u$;#ff00ff;1`)
@Winkel(`TR0003c;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0003c;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0003c;\psi;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0003c;\chi;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[($\sin$)|$\cos$|$\tan$|$\text{cot}$]] $(\psi)= \frac{z}{u}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$d)\;\;$__

@CoordinateSystem(`xmin=-2.8;xmax=2.8;ymin=-0.8;ymax=3.8;width=360;id=TR0003d;0;0;0`)
@Punkt(`TR0003d;A;-2;0;#000000;0;fix`)
@Punkt(`TR0003d;B;2;0;#000000;0;fix`)
@Punkt(`TR0003d;C;2;3;#000000;0;fix`)
@Strecke(`TR0003d;[A;B];#ff00ff;1;0`)
@Strecke(`TR0003d;[B;C];#ff00ff;1;0`)
@Strecke(`TR0003d;[C;A];#ff00ff;1;0`)
@KoordText(`TR0003d;[0;-0.35];$r$;#ff00ff;1`)
@KoordText(`TR0003d;[2.25;1.5];$a$;#ff00ff;1`)
@KoordText(`TR0003d;[-0.2;2.0];$s$;#ff00ff;1`)
@Winkel(`TR0003d;\,;[C;B;A];#00ffff;0.45;0`)
@KoordText(`TR0003d;[1.78;0.18];$\cdot$;#00ffff;1`)
@Winkel(`TR0003d;\alpha;[B;A;C];#00ffff;0.7;0`)
@Winkel(`TR0003d;\sigma;[A;C;B];#00ffff;0.7;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[$\sin$|$\cos$|($\tan$)|$\text{cot}$]] $(\sigma)= \frac{r}{s}$


@ADetails(1=BE; Trigonometrie)

</div>

</section>













