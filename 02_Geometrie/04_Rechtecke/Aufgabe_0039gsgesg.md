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

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md










tags: Koordinatensystem, Punkt, Rechteck, Fläche, sehr leicht, niedrig, Zeichnen

comment: Erzeuge im Koordinatensystem ein Rechteck mit einem vorgegebenen Flächeninhalt.

author: Martin Lommatzsch

-->




# Rechtecke mit vorgegebenem Flächeninhalt


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Erzeuge** jeweils ein Rechteck mit dem angegebenen Flächeninhalt.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ Erzeuge ein Rechteck mit $A=12\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0039a;1;1;1`)
@AxisLabel(`id=RA0039a;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0039a;tools=[200;510;920]`)

Form:
@ConstructionQuiz(`RA0039a;4;open;W90,W90,W90,W90;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

Fläche:
@FlaecheQuiz(`RA0039a;4;12;0.05`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


<div class="flex-child">

__$b)\;\;$__ Erzeuge ein Rechteck mit $A=18\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0039b;1;1;1`)
@AxisLabel(`id=RA0039b;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0039b;tools=[200;510;920]`)

Form:
@ConstructionQuiz(`RA0039b;4;open;W90,W90,W90,W90;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

Fläche:
@FlaecheQuiz(`RA0039b;4;18;0.05`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


<div class="flex-child">

__$c)\;\;$__ Erzeuge ein Rechteck mit $A=20\,FE$.

@CoordinateSystem(`xmin=-1;xmax=9;ymin=-1;ymax=9;width=500;id=RA0039c;1;1;1`)
@AxisLabel(`id=RA0039c;xlabel=$x$;ylabel=$y$`)
@DGS(`RA0039c;tools=[200;510;920]`)

Form:
@ConstructionQuiz(`RA0039c;4;open;W90,W90,W90,W90;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

Fläche:
@FlaecheQuiz(`RA0039c;4;20;0.05`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(1=BE; Rechteck, Fläche, Koordinatensystem)

</div>


</section>