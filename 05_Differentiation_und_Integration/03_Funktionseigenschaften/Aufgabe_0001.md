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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Grenzwerte, Definitionsbereich, Wertebereich, Verhalten, mittel, niedrig, Angeben

comment: Welche Eigenschaften passen zum dargestellten Graphen?

author: Martin Lommatzsch

-->




# Eigenschaften von Funktionen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Gib an**, welche der Eigenschaften zum im Koordinatensystem dargestellten Graphen passen.




<section class="dynFlex">
<div class="flex-child">

__$a)\;\;$__

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=FEIG0001_a;1;1;1`)
@AxisLabel(`id=FEIG0001_a;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`FEIG0001_a;f1;x+1/(2*(x+1)^2);#ff0000`)





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[X]] $\mathbb{D} = \left\{x \in \mathbb{R}  \setminus \left\{-1\right\} \right\}$
[[X]] $\mathbb{W} = \mathbb{R}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) =  -\infty$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = \infty$
[[ ]] $\lim\limits_{x \nearrow -1} f(x) = -\infty$
[[X]] $\lim\limits_{x \searrow -1} f(x) = \infty$


@ADetails(1=BE; Definitionsbereich, Wertebereich, Verhalten)

</div>
<div class="flex-child">


__$b)\;\;$__

@CoordinateSystem(`xmin=-4;xmax=4;ymin=-4;ymax=4;width=300;id=FEIG0001_b;1;1;1`)
@AxisLabel(`id=FEIG0001_b;xlabel=$x$;ylabel=$y$`)
@PlotFunction(`FEIG0001_b;f2;abs(x);#ff0000`)





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[ ]] $\mathbb{D} = \mathbb{R}^+$
[[ ]] $\mathbb{W} = \mathbb{R}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) = \infty$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = \infty$
[[X]] $\lim\limits_{x \nearrow -1} f(x) = 1$
[[ ]] $\lim\limits_{x \searrow -1} f(x) = -1$


@ADetails(1=BE; Definitionsbereich, Wertebereich, Verhalten)


</div>
</section>











