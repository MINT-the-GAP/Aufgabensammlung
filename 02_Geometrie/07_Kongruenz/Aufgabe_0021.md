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

comment: Beschreibe die Konstruktion eines Dreiecks mit dem Kongruenzsatz SSS.

author: Martin Lommatzsch

-->

# Dreieckskonstruktion mit dem Kongruenzsatz SSS

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Beschreibe** die Konstruktion eines Dreiecks mit dem Kongruenzsatz SSS.

Gegeben sei ein Dreieck $ABC$ mit den Seitenlängen $a=5\,\mathrm{cm}$, $b=4\,\mathrm{cm}$ und $c=6\,\mathrm{cm}$.

**Beschreibe** schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird. 

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz.question(0.55;solution=1;feedback=1;Rechtschreibung=1;Satzbau=1,`Beschreibe schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.`)
<!-- lia-llm:criterion -->
Eine der drei gegebenen Seiten wird in ihrer vorgegebenen Länge als Grundseite gezeichnet.
<!-- lia-llm:criterion -->
Um einen Endpunkt der Grundseite wird ein Kreis oder Kreisbogen mit dem Radius der zugehörigen zweiten Seitenlänge konstruiert.
<!-- lia-llm:criterion -->
Um den anderen Endpunkt der Grundseite wird ein Kreis oder Kreisbogen mit dem Radius der verbleibenden dritten Seitenlänge konstruiert.
<!-- lia-llm:criterion -->
Ein Schnittpunkt der Kreise oder Kreisbögen wird als dritter Eckpunkt gewählt.
<!-- lia-llm:criterion -->
Der dritte Eckpunkt wird mit beiden Endpunkten der Grundseite verbunden.
<!-- lia-llm:solution -->
Zuerst wird die Grundseite $\overline{AB}$ mit der Länge $c=6\,\mathrm{cm}$ gezeichnet. Danach wird ein Kreis um $A$ mit dem Radius $b=4\,\mathrm{cm}$ und ein Kreis um $B$ mit dem Radius $a=5\,\mathrm{cm}$ gezeichnet. Einer der beiden Schnittpunkte wird als $C$ markiert. Abschließend werden $A$ und $B$ mit $C$ verbunden.
```


@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SSS)


