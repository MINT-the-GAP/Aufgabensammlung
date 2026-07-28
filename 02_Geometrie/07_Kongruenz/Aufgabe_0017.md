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

tags: Dreieck, Konstruktion, Kongruenz, leicht, niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit unterschiedlichen Kongruenzsätzen.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit gemischten Kongruenzsätzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=8\,\mathrm{cm}$ und $b=5\,\mathrm{cm}$ sowie dem Winkel $\alpha=35^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=8;width=600;id=D6301`)
@AchsenBeschriftung(`id=D6301;xlabel=$x$;ylabel=$y$`)
@DGS(`D6301;tools=[200;510;920]`)

@KonstruktionQuiz(`D6301;3;fest;S8,S5,W35;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=50^\circ$ und $\beta=70^\circ$ sowie der Seitenlänge $a=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=600;id=D6302`)
@AchsenBeschriftung(`id=D6302;xlabel=$x$;ylabel=$y$`)
@DGS(`D6302;tools=[200;510;920]`)

@KonstruktionQuiz(`D6302;3;fest;W50,W70,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $c=5\,\mathrm{cm}$ und $b=4\,\mathrm{cm}$ sowie dem eingeschlossenen Winkel $\alpha=60^\circ$.

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=8;width=600;id=D6303`)
@AchsenBeschriftung(`id=D6303;xlabel=$x$;ylabel=$y$`)
@DGS(`D6303;tools=[200;510;920]`)

@KonstruktionQuiz(`D6303;3;fest;S5,W60,S4;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)

</div>

</section>
