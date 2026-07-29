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
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz SsW.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz SsW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=5\,\mathrm{cm}$ und $b=3\,\mathrm{cm}$ sowie dem Winkel $\alpha=35^\circ$.

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=7;width=600;id=D5501`)
@AchsenBeschriftung(`id=D5501;xlabel=$x$;ylabel=$y$`)
@DGS(`D5501;tools=[200;510;920]`)

@KonstruktionQuiz(`D5501;3;fest;S5,S3,W35;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=8\,\mathrm{cm}$ und $b=5\,\mathrm{cm}$ sowie dem Winkel $\alpha=45^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=8;width=600;id=D5502`)
@AchsenBeschriftung(`id=D5502;xlabel=$x$;ylabel=$y$`)
@DGS(`D5502;tools=[200;510;920]`)

@KonstruktionQuiz(`D5502;3;fest;S8,S5,W45;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=11\,\mathrm{cm}$ und $b=8\,\mathrm{cm}$ sowie dem Winkel $\alpha=25^\circ$.

@Koordinatensystem(`xmin=-1;xmax=15;ymin=-1;ymax=9;width=600;id=D5503`)
@AchsenBeschriftung(`id=D5503;xlabel=$x$;ylabel=$y$`)
@DGS(`D5503;tools=[200;510;920]`)

@KonstruktionQuiz(`D5503;3;fest;S11,S8,W25;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

</section>
