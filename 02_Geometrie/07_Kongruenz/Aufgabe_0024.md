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

tags: Dreieck, Konstruktion, Kongruenz, leicht, sehr niedrig, Beschreiben

comment: Beschreibe die Konstruktion eines Dreiecks mit dem Kongruenzsatz WWS.

author: Martin Lommatzsch

-->

# Dreieckskonstruktion mit dem Kongruenzsatz WWS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Beschreibe** die Konstruktion eines Dreiecks mit dem Kongruenzsatz WWS.

Gegeben sei ein Dreieck $ABC$ mit den Winkeln $\alpha=60^\circ$ und $\beta=90^\circ$ sowie der Seitenlänge $a=5\,\mathrm{cm}$.

**Beschreibe** schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.66;solution=1;feedback=1)
Zuerst wird der dritte Winkel mit $\gamma=180^\circ-60^\circ-90^\circ=30^\circ$ berechnet. Dann wird die Seite $\overline{BC}$ mit der Länge $a=5\,\mathrm{cm}$ gezeichnet. In $B$ wird an der Seite $\overline{BC}$ der Winkel $\beta=90^\circ$ gezeichnet. In $C$ wird auf derselben Seite der Strecke $\overline{BC}$ der berechnete Winkel $\gamma=30^\circ$ gezeichnet. Der Schnittpunkt der beiden freien Winkelschenkel wird mit $A$ gekennzeichnet. So entsteht das Dreieck $ABC$ mit den zwei vorgegebenen Winkeln und der vorgegebenen Seite.
```


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)
