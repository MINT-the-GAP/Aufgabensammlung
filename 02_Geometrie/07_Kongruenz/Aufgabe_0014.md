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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

tags: Dreieck, Konstruktion, Kongruenz,  sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz WWS.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz WWS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=50^\circ$ und $\beta=75^\circ$ sowie der Seitenlänge $a=4\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=8;width=600;id=D6001`)
@AchsenBeschriftung(`id=D6001;xlabel=$x$;ylabel=$y$`)
@DGS(`D6001;tools=[200;510;920]`)

@KonstruktionQuiz(`D6001;3;fest;W50,W75,S4;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=40^\circ$ und $\beta=65^\circ$ sowie der Seitenlänge $a=8\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=9;width=600;id=D6002`)
@AchsenBeschriftung(`id=D6002;xlabel=$x$;ylabel=$y$`)
@DGS(`D6002;tools=[200;510;920]`)

@KonstruktionQuiz(`D6002;3;fest;W40,W65,S8;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=30^\circ$ und $\beta=85^\circ$ sowie der Seitenlänge $a=6\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=10;width=600;id=D6003`)
@AchsenBeschriftung(`id=D6003;xlabel=$x$;ylabel=$y$`)
@DGS(`D6003;tools=[200;510;920]`)

@KonstruktionQuiz(`D6003;3;fest;W30,W85,S6;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

</section>
