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
















tags: Dreieck, Konstruktion, Kongruenz, SSS, sehr leicht, sehr niedrig, Zeichnen

comment: Konstruiere Dreiecke im Koordinatensystem mit dem Kongruenzsatz SSS.

author: Martin Lommatzsch

-->




# Dreieckskonstruktion mit Kongruenzsatz SSS


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Konstruiere** jeweils ein passendes Dreieck.



<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=6\,\mathrm{cm}$, $b=5\,\mathrm{cm}$ und $c=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=7;ymin=-1;ymax=6;width=600;id=D4701`)
@AchsenBeschriftung(`id=D4701;xlabel=$x$;ylabel=$y$`)
@DGS(`D4701;tools=[200;510;920]`)

@KonstruktionQuiz(`D4701;3;fest;S6,S5,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)

@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)


</div>


<div class="flex-child">

__$b)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=7\,\mathrm{cm}$, $b=6\,\mathrm{cm}$ und $c=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=7;width=600;id=D4702`)
@AchsenBeschriftung(`id=D4702;xlabel=$x$;ylabel=$y$`)
@DGS(`D4702;tools=[200;510;920]`)

@KonstruktionQuiz(`D4702;3;fest;S7,S6,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)


</div>


<div class="flex-child">

__$c)\;\;$__ **Konstruiere** das Dreieck $ABC$ mit den Seitenlängen $a=8\,\mathrm{cm}$, $b=7\,\mathrm{cm}$ und $c=5\,\mathrm{cm}$.

@Koordinatensystem(`xmin=-1;xmax=10;ymin=-1;ymax=7;width=600;id=D4703`)
@AchsenBeschriftung(`id=D4703;xlabel=$x$;ylabel=$y$`)
@DGS(`D4703;tools=[200;510;920]`)

@KonstruktionQuiz(`D4703;3;fest;S8,S7,S5;streckentoleranz=0.05;winkeltoleranz=1`,`<!-- data-solution-button="5" -->`)


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)



</div>


</section>