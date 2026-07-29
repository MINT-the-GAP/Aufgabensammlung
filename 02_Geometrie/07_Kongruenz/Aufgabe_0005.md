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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

tags: Dreiecke, Konstruktion, Kongruenz, sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz SWS.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz SWS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $c=3\,\mathrm{cm}$ und $b=6\,\mathrm{cm}$ sowie dem eingeschlossenen Winkel $\alpha=50^\circ$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=600;id=D5101`)
@AchsenBeschriftung(`id=D5101;xlabel=$x$;ylabel=$y$`)
@DGS(`D5101;tools=[200;510;920]`)

@KonstruktionQuiz(`D5101;3;fest;S3,W50,S6;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $c=8\,\mathrm{cm}$ und $b=5\,\mathrm{cm}$ sowie dem eingeschlossenen Winkel $\alpha=30^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=8;width=600;id=D5102`)
@AchsenBeschriftung(`id=D5102;xlabel=$x$;ylabel=$y$`)
@DGS(`D5102;tools=[200;510;920]`)

@KonstruktionQuiz(`D5102;3;fest;S8,W30,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $c=7\,\mathrm{cm}$ und $b=4\,\mathrm{cm}$ sowie dem eingeschlossenen Winkel $\alpha=75^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=9;width=600;id=D5103`)
@AchsenBeschriftung(`id=D5103;xlabel=$x$;ylabel=$y$`)
@DGS(`D5103;tools=[200;510;920]`)

@KonstruktionQuiz(`D5103;3;fest;S7,W75,S4;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)

</div>

</section>
