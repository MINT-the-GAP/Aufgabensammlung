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









tags: Koordinatensystem, Punkt, Rechteck, Umfang, leicht, niedrig, Zeichnen

comment: Erzeuge im Koordinatensystem ein Rechteck mit einem vorgegebenen Umfang.

author: Martin Lommatzsch

-->




# Rechtecke mit vorgegebenem Umfang


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Erzeuge** jeweils ein Rechteck mit dem angegebenen Umfang.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Erzeuge ein Rechteck mit $u=26\,LE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0044a;1;1;1`)
@AxisLabel(`id=RA0044a;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0044a;tools=[200;510;920]`)

@GeometrieQuiz(`RA0044a;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Umfang(26;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Umfang, Koordinatensystem)

</div>


<div class="flex-child">

__$b)\;\;$__ Erzeuge ein Rechteck mit $u=28\,LE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0044b;1;1;1`)
@AxisLabel(`id=RA0044b;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0044b;tools=[200;510;920]`)

@GeometrieQuiz(`RA0044b;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Umfang(28;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Umfang, Koordinatensystem)

</div>


<div class="flex-child">

__$c)\;\;$__ Erzeuge ein Rechteck mit $u=30\,LE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0044c;1;1;1`)
@AxisLabel(`id=RA0044c;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0044c;tools=[200;510;920]`)

@GeometrieQuiz(`RA0044c;4;Konstruktion(offen;W90,W90,W90,W90;winkeltoleranz=1);Umfang(30;0.05)`,`<!-- data-solution-timer="5s" data-solution-timer-start="oncheck" data-solution-timer-badge="off" data-solution-button="5" data-hint-button="3" -->`)

@resetter

@ADetails(1=BE; Rechteck, Umfang, Koordinatensystem)

</div>


</section>