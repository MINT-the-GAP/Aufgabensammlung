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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md









tags: Koordinatensystem, Punkt, Rechteck, Fläche, leicht, niedrig, Zeichnen

comment: Erzeuge im Koordinatensystem ein Rechteck mit einem vorgegebenen Flächeninhalt.

author: Martin Lommatzsch

-->




# Rechtecke mit vorgegebenem Flächeninhalt


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Erzeuge** jeweils ein Rechteck mit dem angegebenen Flächeninhalt.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Erzeuge ein Rechteck mit $A=24\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0040a;1;1;1`)
@AxisLabel(`id=RA0040a;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0040a;tools=[200;510;920]`)

@GeometrieQuiz(`RA0040a;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Flaeche(24;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


<div class="flex-child">

__$b)\;\;$__ Erzeuge ein Rechteck mit $A=28\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0040b;1;1;1`)
@AxisLabel(`id=RA0040b;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0040b;tools=[200;510;920]`)

@GeometrieQuiz(`RA0040b;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Flaeche(28;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


<div class="flex-child">

__$c)\;\;$__ Erzeuge ein Rechteck mit $A=32\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0040c;1;1;1`)
@AxisLabel(`id=RA0040c;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0040c;tools=[200;510;920]`)

@GeometrieQuiz(`RA0040c;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Flaeche(32;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


</section>