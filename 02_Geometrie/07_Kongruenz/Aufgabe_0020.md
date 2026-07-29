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

tags: Dreiecke, Konstruktion, Kongruenz, leicht, niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit unterschiedlichen Kongruenzsätzen.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit gemischten Kongruenzsätzen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=7\,\mathrm{cm}$ und $b=4\,\mathrm{cm}$ sowie dem Winkel $\alpha=50^\circ$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=8;width=600;id=D6601`)
@AchsenBeschriftung(`id=D6601;xlabel=$x$;ylabel=$y$`)
@DGS(`D6601;tools=[200;510;920]`)

@KonstruktionQuiz(`D6601;3;fest;S7,S4,W50;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit der Seitenlänge $c=6\,\mathrm{cm}$ sowie den Winkeln $\alpha=55^\circ$ und $\beta=65^\circ$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=9;width=600;id=D6602`)
@AchsenBeschriftung(`id=D6602;xlabel=$x$;ylabel=$y$`)
@DGS(`D6602;tools=[200;510;920]`)

@KonstruktionQuiz(`D6602;3;fest;W55,S6,W65;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WSW)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Winkeln $\alpha=45^\circ$ und $\beta=75^\circ$ sowie der Seitenlänge $a=6\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=9;width=600;id=D6603`)
@AchsenBeschriftung(`id=D6603;xlabel=$x$;ylabel=$y$`)
@DGS(`D6603;tools=[200;510;920]`)

@KonstruktionQuiz(`D6603;3;fest;W45,W75,S6;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)

</div>

</section>
