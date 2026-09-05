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


tags: Dreiecke, Konstruktion, Kongruenz, leicht, sehr niedrig, Beschreiben

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
```text @LLMQuiz(0.55;coverage=0.55;solution=1;feedback=1;assessmentengine=quality;Rechtschreibung=1;Satzbau=1,`Gegeben sei ein Dreieck $ABC$ mit den Winkeln $\alpha=60^\circ$ und $\beta=90^\circ$ sowie der Seitenlänge $a=5\,\mathrm{cm}$. Beschreibe schrittweise, wie das Dreieck mit dem Kongruenzsatz WWS mit Zirkel und Lineal konstruiert wird.`)
<!-- lia-llm:criterion -->
Der dritte Winkel wird mit $\gamma=180^\circ-60^\circ-90^\circ=30^\circ$ berechnet.
<!-- lia-llm:criterion -->
Die Seite $\overline{BC}$ wird mit der Länge $a=5\,\mathrm{cm}$ gezeichnet.
<!-- lia-llm:criterion -->
In $B$ wird an $\overline{BC}$ der Winkel $\beta=90^\circ$ konstruiert.
<!-- lia-llm:criterion -->
In $C$ wird auf derselben Seite der Strecke der Winkel $\gamma=30^\circ$ konstruiert.
<!-- lia-llm:criterion -->
Der Schnittpunkt der beiden freien Winkelschenkel wird als $A$ markiert.
<!-- lia-llm:solution -->
Zuerst wird der dritte Winkel mit $\gamma=180^\circ-60^\circ-90^\circ=30^\circ$ berechnet. Danach wird die Seite $\overline{BC}$ mit der Länge $a=5\,\mathrm{cm}$ gezeichnet. In $B$ wird an $\overline{BC}$ der Winkel $\beta=90^\circ$ konstruiert. In $C$ wird auf derselben Seite der Strecke der Winkel $\gamma=30^\circ$ abgetragen. Der Schnittpunkt der freien Winkelschenkel wird als $A$ markiert.
```


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, WWS)
