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











tags: Winkel, Winkelbeziehungen, sehr leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Direkte Winkelbeziehungen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** das gesuchte Winkelmaß sowie die Winkelbeziehung zum gegebenen Winkel **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)


<section class="dynFlex">

<div class="flex-child">


__$a)\;\;$__




@CoordinateSystem(`xmin=-2.5;xmax=4;ymin=-2;ymax=3.5;width=500;id=WA0002a;0;0;0`)

@Punkt(`WA0002a;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0002a;Y;1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0002a;B;2.5;0;#e63946;0;fix`)
@Punkt(`WA0002a;A;-1.5;0;#e63946;0;fix`)
@Punkt(`WA0002a;C;3;1.5;#e63946;0;fix`)
@Punkt(`WA0002a;D;-1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0002a;G;2.5;2.5;#e63946;0;fix`)
@Punkt(`WA0002a;H;-1;-1;#e63946;0;fix`)

@Strecke(`WA0002a;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0002a;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0002a;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0002a;[3.2;1.5];$f$;#ff00ff;1`)
@KoordText(`WA0002a;[2.7;0];$g$;#ff00ff;1`)

@Winkel(`WA0002a;\epsilon=71^\circ\;\;\;;[A;Z;H];#00ffff;0.99;0`)

@Winkel(`WA0002a;\xi;[G;Y;D];#00ffff;0.99;0`)



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\xi =$ [[ 109 ]]$^\circ$ und es handelt sich um die Beziehung eines [[Nebenwinkels|Scheitelwinkels|Stufenwinkels|(Wechselwinkels)]].

@ADetails(1=BE; Winkelbeziehung)


</div>

<div class="flex-child">



__$b)\;\;$__


@CoordinateSystem(`xmin=-2.5;xmax=4;ymin=-2;ymax=3.5;width=500;id=WA0002b;0;0;0`)

@Punkt(`WA0002b;Z;0;0;#e63946;0;fix`)
@Punkt(`WA0002b;Y;1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0002b;B;2.5;0;#e63946;0;fix`)
@Punkt(`WA0002b;A;-1.5;0;#e63946;0;fix`)
@Punkt(`WA0002b;C;3;1.5;#e63946;0;fix`)
@Punkt(`WA0002b;D;-1.5;1.5;#e63946;0;fix`)
@Punkt(`WA0002b;G;2.5;2.5;#e63946;0;fix`)
@Punkt(`WA0002b;H;-1;-1;#e63946;0;fix`)

@Strecke(`WA0002b;[A;B];#ff00ff;0.5;0`)
@Strecke(`WA0002b;[C;D];#ff00ff;0.5;0`)
@Strecke(`WA0002b;[H;G];#ff00ff;0.5;0`)

@KoordText(`WA0002b;[3.2;1.5];$f$;#ff00ff;1`)
@KoordText(`WA0002b;[2.7;0];$g$;#ff00ff;1`)

@Winkel(`WA0002b;\gamma;[C;Y;G];#00ffff;0.99;0`)

@Winkel(`WA0002b;\omega=34^\circ\;\;;[D;Y;Z];#00ffff;0.99;0`)




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
$\gamma =$ [[ 34 ]]$^\circ$ und es handelt sich um die Beziehung eines [[Nebenwinkels|(Scheitelwinkels)|Stufenwinkels|Wechselwinkels]].

@ADetails(1=BE; Winkelbeziehung)

</div>

</section>





