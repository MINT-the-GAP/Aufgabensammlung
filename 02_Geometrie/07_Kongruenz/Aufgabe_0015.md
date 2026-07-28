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

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=60^\circ$ und $\beta=50^\circ$ sowie der Seitenlänge $a=7\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=9;width=600;id=D6101`)
@AchsenBeschriftung(`id=D6101;xlabel=$x$;ylabel=$y$`)
@DGS(`D6101;tools=[200;510;920]`)

@KonstruktionQuiz(`D6101;3;fest;W60,W50,S7;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=35^\circ$ und $\beta=95^\circ$ sowie der Seitenlänge $a=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=10;width=600;id=D6102`)
@AchsenBeschriftung(`id=D6102;xlabel=$x$;ylabel=$y$`)
@DGS(`D6102;tools=[200;510;920]`)

@KonstruktionQuiz(`D6102;3;fest;W35,W95,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=45^\circ$ und $\beta=70^\circ$ sowie der Seitenlänge $a=9\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=10;width=600;id=D6103`)
@AchsenBeschriftung(`id=D6103;xlabel=$x$;ylabel=$y$`)
@DGS(`D6103;tools=[200;510;920]`)

@KonstruktionQuiz(`D6103;3;fest;W45,W70,S9;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

</section>
