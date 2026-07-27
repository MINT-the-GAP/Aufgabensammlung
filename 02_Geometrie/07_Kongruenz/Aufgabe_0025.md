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

comment: Beschreibe die Konstruktion eines Dreiecks mit dem Kongruenzsatz SWS.

author: Martin Lommatzsch

-->

# Dreieckskonstruktion mit dem Kongruenzsatz SWS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Beschreibe** die Konstruktion eines Dreiecks mit dem Kongruenzsatz SWS.

Gegeben sei ein Dreieck $ABC$ mit den Seitenlängen $b=5\,\mathrm{cm}$ und $c=7\,\mathrm{cm}$ sowie dem Winkel $\alpha=60^\circ$.

**Beschreibe** schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.66;solution=1;feedback=1)
Zuerst wird die Seite $\overline{AB}$ mit der Länge $c=7\,\mathrm{cm}$ gezeichnet. Dann wird in $A$ an der Seite $\overline{AB}$ der Winkel $\alpha=60^\circ$ gezeichnet. Anschließend wird ein Kreis um $A$ mit dem Radius $b=5\,\mathrm{cm}$ gezeichnet. Der Schnittpunkt des Kreises mit dem freien Schenkel des Winkels wird mit $C$ gekennzeichnet. Abschließend wird $C$ mit $B$ verbunden. So entsteht das Dreieck $ABC$ mit den zwei vorgegebenen Seitenlängen und dem eingeschlossenen Winkel.
```



@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)
