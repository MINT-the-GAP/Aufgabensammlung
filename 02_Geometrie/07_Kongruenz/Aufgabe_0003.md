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

tags: Dreiecke, Konstruktion, Kongruenz, SSS,  sehr leicht, sehr niedrig, Zeichnen
comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz SSS.
author: Martin Lommatzsch
-->

# Dreieckskonstruktion mit Kongruenzsatz SSS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.

<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=4\,\mathrm{cm}$, $b=3\,\mathrm{cm}$ und $c=3\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=8;ymin=-1;ymax=6;width=600;id=D4901`)
@AchsenBeschriftung(`id=D4901;xlabel=$x$;ylabel=$y$`)
@DGS(`D4901;tools=[200;510;920]`)

@KonstruktionQuiz(`D4901;3;fest;S4,S3,S3;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)

</div>

<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=8\,\mathrm{cm}$, $b=6\,\mathrm{cm}$ und $c=6\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=11;ymin=-1;ymax=8;width=600;id=D4902`)
@AchsenBeschriftung(`id=D4902;xlabel=$x$;ylabel=$y$`)
@DGS(`D4902;tools=[200;510;920]`)

@KonstruktionQuiz(`D4902;3;fest;S8,S6,S6;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)

</div>

<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=11\,\mathrm{cm}$, $b=7\,\mathrm{cm}$ und $c=8\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=14;ymin=-1;ymax=9;width=600;id=D4903`)
@AchsenBeschriftung(`id=D4903;xlabel=$x$;ylabel=$y$`)
@DGS(`D4903;tools=[200;510;920]`)

@KonstruktionQuiz(`D4903;3;fest;S11,S7,S8;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)

</div>

</section>
