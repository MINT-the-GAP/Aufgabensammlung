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

tags: Dreiecke, Konstruktion, Kongruenz, sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz WSW.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz WSW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=4\,\mathrm{cm}$ sowie den Winkeln $\alpha=50^\circ$ und $\beta=80^\circ$.

@Koordinatensystem(`xmin=-1;xmax=9;ymin=-1;ymax=8;width=600;id=D5701`)
@AchsenBeschriftung(`id=D5701;xlabel=$x$;ylabel=$y$`)
@DGS(`D5701;tools=[200;510;920]`)

@KonstruktionQuiz(`D5701;3;fest;W50,S4,W80;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=8\,\mathrm{cm}$ sowie den Winkeln $\alpha=45^\circ$ und $\beta=60^\circ$.

@Koordinatensystem(`xmin=-1;xmax=13;ymin=-1;ymax=9;width=600;id=D5702`)
@AchsenBeschriftung(`id=D5702;xlabel=$x$;ylabel=$y$`)
@DGS(`D5702;tools=[200;510;920]`)

@KonstruktionQuiz(`D5702;3;fest;W45,S8,W60;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=6\,\mathrm{cm}$ sowie den Winkeln $\alpha=30^\circ$ und $\beta=85^\circ$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=9;width=600;id=D5703`)
@AchsenBeschriftung(`id=D5703;xlabel=$x$;ylabel=$y$`)
@DGS(`D5703;tools=[200;510;920]`)

@KonstruktionQuiz(`D5703;3;fest;W30,S6,W85;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

</section>
