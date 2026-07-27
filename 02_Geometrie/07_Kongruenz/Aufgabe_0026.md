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

tags: Dreieck, Konstruktion, Kongruenz, leicht, niedrig, Erklären

comment: Erkläre, warum die Dreieckskonstruktionen nach WWS und WSW fast gleich ablaufen.

author: Martin Lommatzsch

-->

# Zusammenhang zwischen WWS und WSW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Erkläre**, warum die Konstruktionen von Dreiecken nach den Kongruenzsätzen WWS und WSW fast gleich ablaufen.


<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.66;solution=1;feedback=1)
Bei WSW sind eine Seite und die beiden an dieser Seite anliegenden Winkel gegeben. Deshalb wird zuerst die gegebene Seite gezeichnet. Anschließend werden die beiden Winkel an den Endpunkten der Seite gezeichnet. Der Schnittpunkt der freien Winkelschenkel ergibt den dritten Eckpunkt.

Bei WWS liegt die gegebene Seite nicht zwischen den beiden gegebenen Winkeln. Deshalb wird zuerst der noch fehlende dritte Winkel mit der Winkelsumme im Dreieck berechnet. Danach sind ebenfalls die gegebene Seite und die beiden an ihr anliegenden Winkel bekannt. Die weitere Konstruktion verläuft daher genau wie bei WSW: Die Seite wird gezeichnet, die beiden anliegenden Winkel werden gezeichnet und ihr Schnittpunkt bildet den dritten Eckpunkt. WWS unterscheidet sich von WSW bei der Konstruktion also nur durch die vorherige Berechnung des fehlenden Winkels.
```


@resetter

@ADetails(BE=2; Dreieck, Konstruktion, Kongruenz, WWS, WSW)
