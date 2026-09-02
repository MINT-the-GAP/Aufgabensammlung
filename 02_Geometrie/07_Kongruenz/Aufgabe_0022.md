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

comment: Beschreibe die Konstruktion eines Dreiecks mit dem Kongruenzsatz SsW.

author: Martin Lommatzsch

-->

# Dreieckskonstruktion mit dem Kongruenzsatz SsW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Beschreibe** die Konstruktion eines Dreiecks mit dem Kongruenzsatz SsW.

Gegeben sei ein Dreieck $ABC$ mit den Seitenlängen $a=6\,\mathrm{cm}$ und $b=4\,\mathrm{cm}$ sowie dem Winkel $\alpha=60^\circ$.

**Beschreibe** schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz.question(0.55;solution=1;feedback=1;Rechtschreibung=1;Satzbau=1,`Beschreibe schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.`)
<!-- lia-llm:criterion -->
Die Seite $\overline{AC}$ wird mit der Länge $b=4\,\mathrm{cm}$ gezeichnet.
<!-- lia-llm:criterion -->
In $A$ wird an $\overline{AC}$ der Winkel $\alpha=60^\circ$ konstruiert.
<!-- lia-llm:criterion -->
Um $C$ wird ein Kreis oder Kreisbogen mit dem Radius $a=6\,\mathrm{cm}$ konstruiert.
<!-- lia-llm:criterion -->
Der Schnittpunkt des Kreises oder Kreisbogens mit dem freien Winkelschenkel wird als $B$ markiert.
<!-- lia-llm:criterion -->
$B$ und $C$ werden verbunden.
<!-- lia-llm:solution -->
Zuerst wird die Seite $\overline{AC}$ mit der Länge $b=4\,\mathrm{cm}$ gezeichnet. In $A$ wird an $\overline{AC}$ der Winkel $\alpha=60^\circ$ konstruiert. Danach wird ein Kreis um $C$ mit dem Radius $a=6\,\mathrm{cm}$ gezeichnet. Sein Schnittpunkt mit dem freien Winkelschenkel wird als $B$ markiert. Abschließend werden $B$ und $C$ verbunden.
```


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SsW)
