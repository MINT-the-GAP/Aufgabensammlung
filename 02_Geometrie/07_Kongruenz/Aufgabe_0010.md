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
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz WSW.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz WSW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=6\,\mathrm{cm}$ sowie den Winkeln $\alpha=40^\circ$ und $\beta=70^\circ$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=8;width=600;id=D5601`)
@AchsenBeschriftung(`id=D5601;xlabel=$x$;ylabel=$y$`)
@DGS(`D5601;tools=[200;510;920]`)

@KonstruktionQuiz(`D5601;3;fest;W40,S6,W70;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=5\,\mathrm{cm}$ sowie den Winkeln $\alpha=55^\circ$ und $\beta=65^\circ$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=8;width=600;id=D5602`)
@AchsenBeschriftung(`id=D5602;xlabel=$x$;ylabel=$y$`)
@DGS(`D5602;tools=[200;510;920]`)

@KonstruktionQuiz(`D5602;3;fest;W55,S5,W65;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=7\,\mathrm{cm}$ sowie den Winkeln $\alpha=35^\circ$ und $\beta=75^\circ$.

@Koordinatensystem(`xmin=-1;xmax=12;ymin=-1;ymax=9;width=600;id=D5603`)
@AchsenBeschriftung(`id=D5603;xlabel=$x$;ylabel=$y$`)
@DGS(`D5603;tools=[200;510;920]`)

@KonstruktionQuiz(`D5603;3;fest;W35,S7,W75;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

</section>
