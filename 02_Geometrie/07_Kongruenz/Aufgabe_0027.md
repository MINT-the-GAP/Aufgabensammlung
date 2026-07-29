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

tags: Dreiecke, Konstruktion, Kongruenz, leicht, niedrig, Begründen

comment: Begründe, warum drei vorgegebene Winkel für die eindeutige Konstruktion eines Dreiecks nicht ausreichen.

author: Martin Lommatzsch

-->

# Warum WWW kein Kongruenzsatz ist

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Für ein Dreieck $ABC$ seien die drei Winkel $\alpha=60^\circ$, $\beta=60^\circ$ und $\gamma=60^\circ$ gegeben.

**Begründe**, warum diese drei Winkel für die eindeutige Konstruktion des Dreiecks nicht ausreichen und WWW deshalb kein Kongruenzsatz ist.

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.66;solution=1;feedback=1)
Die drei Winkel legen nur die Form eines Dreiecks fest, nicht aber seine Größe. Bei den gegebenen Winkeln entsteht zwar immer ein gleichseitiges Dreieck, seine Seitenlänge kann jedoch beliebig gewählt werden. So können beispielsweise ein Dreieck mit der Seitenlänge $4\,\mathrm{cm}$ und ein Dreieck mit der Seitenlänge $8\,\mathrm{cm}$ dieselben drei Winkel besitzen.

Diese Dreiecke sind ähnlich, aber wegen ihrer unterschiedlichen Seitenlängen nicht kongruent. Außerdem ist der dritte Winkel keine zusätzliche unabhängige Angabe, da er sich bereits aus den beiden anderen Winkeln und der Winkelsumme von $180^\circ$ ergibt. Ohne mindestens eine vorgegebene Seitenlänge ist der Maßstab nicht festgelegt. Deshalb sind mit denselben drei Winkeln unendlich viele unterschiedlich große Dreiecke möglich und WWW reicht für eine eindeutige Konstruktion nicht aus.
```


@resetter

@ADetails(BE=2; Dreieck, Konstruktion, Kongruenz, WWW)
