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

tags: Dreiecke, Konstruktion, Kongruenz,  sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz WSW.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz WSW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=5\,\mathrm{cm}$ sowie den Winkeln $\alpha=35^\circ$ und $\beta=95^\circ$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=9;width=600;id=D5801`)
@AchsenBeschriftung(`id=D5801;xlabel=$x$;ylabel=$y$`)
@DGS(`D5801;tools=[200;510;920]`)

@KonstruktionQuiz(`D5801;3;fest;W35,S5,W95;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=7\,\mathrm{cm}$ sowie den Winkeln $\alpha=60^\circ$ und $\beta=55^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=9;width=600;id=D5802`)
@AchsenBeschriftung(`id=D5802;xlabel=$x$;ylabel=$y$`)
@DGS(`D5802;tools=[200;510;920]`)

@KonstruktionQuiz(`D5802;3;fest;W60,S7,W55;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=9\,\mathrm{cm}$ sowie den Winkeln $\alpha=25^\circ$ und $\beta=85^\circ$.

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=10;width=600;id=D5803`)
@AchsenBeschriftung(`id=D5803;xlabel=$x$;ylabel=$y$`)
@DGS(`D5803;tools=[200;510;920]`)

@KonstruktionQuiz(`D5803;3;fest;W25,S9,W85;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

</section>
