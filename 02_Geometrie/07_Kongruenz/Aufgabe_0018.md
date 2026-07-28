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

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=6\,\mathrm{cm}$ sowie den Winkeln $\alpha=35^\circ$ und $\beta=75^\circ$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=9;width=600;id=D6401`)
@AchsenBeschriftung(`id=D6401;xlabel=$x$;ylabel=$y$`)
@DGS(`D6401;tools=[200;510;920]`)

@KonstruktionQuiz(`D6401;3;fest;W35,S6,W75;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=7\,\mathrm{cm}$, $b=6\,\mathrm{cm}$ und $c=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=8;width=600;id=D6402`)
@AchsenBeschriftung(`id=D6402;xlabel=$x$;ylabel=$y$`)
@DGS(`D6402;tools=[200;510;920]`)

@KonstruktionQuiz(`D6402;3;fest;S7,S6,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=9\,\mathrm{cm}$ und $b=5\,\mathrm{cm}$ sowie dem Winkel $\alpha=40^\circ$.

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=9;width=600;id=D6403`)
@AchsenBeschriftung(`id=D6403;xlabel=$x$;ylabel=$y$`)
@DGS(`D6403;tools=[200;510;920]`)

@KonstruktionQuiz(`D6403;3;fest;S9,S5,W40;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

</section>
