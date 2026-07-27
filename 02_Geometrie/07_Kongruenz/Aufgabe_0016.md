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

__$a)\;\;$__ **Konstruiere** ein Dreieck mit der Eigenschaft $S6,S5,S4$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=600;id=D6201`)
@AchsenBeschriftung(`id=D6201;xlabel=$x$;ylabel=$y$`)
@DGS(`D6201;tools=[200;510;920]`)

@KonstruktionQuiz(`D6201;3;fest;S6,S5,S4;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** ein Dreieck mit der Eigenschaft $S4,W70,S6$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=8;width=600;id=D6202`)
@AchsenBeschriftung(`id=D6202;xlabel=$x$;ylabel=$y$`)
@DGS(`D6202;tools=[200;510;920]`)

@KonstruktionQuiz(`D6202;3;fest;S4,W70,S6;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** ein Dreieck mit der Eigenschaft $W40,S5,W80$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=9;width=600;id=D6203`)
@AchsenBeschriftung(`id=D6203;xlabel=$x$;ylabel=$y$`)
@DGS(`D6203;tools=[200;510;920]`)

@KonstruktionQuiz(`D6203;3;fest;W40,S5,W80;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

</section>
