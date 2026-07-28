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

tags: Dreieck, Konstruktion, Kongruenz, sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz SsW.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz SsW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=6\,\mathrm{cm}$ und $b=4\,\mathrm{cm}$ sowie dem Winkel $\alpha=50^\circ$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=600;id=D5401`)
@AchsenBeschriftung(`id=D5401;xlabel=$x$;ylabel=$y$`)
@DGS(`D5401;tools=[200;510;920]`)

@KonstruktionQuiz(`D5401;3;fest;S6,S4,W50;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=10\,\mathrm{cm}$ und $b=7\,\mathrm{cm}$ sowie dem Winkel $\alpha=30^\circ$.

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=9;width=600;id=D5402`)
@AchsenBeschriftung(`id=D5402;xlabel=$x$;ylabel=$y$`)
@DGS(`D5402;tools=[200;510;920]`)

@KonstruktionQuiz(`D5402;3;fest;S10,S7,W30;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=9\,\mathrm{cm}$ und $b=5\,\mathrm{cm}$ sowie dem Winkel $\alpha=65^\circ$.

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=10;width=600;id=D5403`)
@AchsenBeschriftung(`id=D5403;xlabel=$x$;ylabel=$y$`)
@DGS(`D5403;tools=[200;510;920]`)

@KonstruktionQuiz(`D5403;3;fest;S9,S5,W65;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

</section>
