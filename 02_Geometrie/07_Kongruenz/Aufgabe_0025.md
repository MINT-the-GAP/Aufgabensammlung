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
```text @LLMQuiz.question(0.55;solution=1;feedback=1;Rechtschreibung=1;Satzbau=1,`Beschreibe schrittweise, wie das gegebene Dreieck mit Zirkel und Lineal konstruiert wird.`)
<!-- lia-llm:criterion -->
Eine der beiden gegebenen Seiten, die den Winkel $\alpha$ einschließen, wird in ihrer vorgegebenen Länge mit dem Endpunkt $A$ gezeichnet.
<!-- lia-llm:criterion -->
In $A$ wird an dieser Seite der Winkel $\alpha=60^\circ$ konstruiert.
<!-- lia-llm:criterion -->
Auf dem freien Winkelschenkel wird von $A$ aus die Länge der anderen gegebenen Seite abgetragen.
<!-- lia-llm:criterion -->
Der Endpunkt der abgetragenen Strecke wird als dritter Eckpunkt markiert.
<!-- lia-llm:criterion -->
Die beiden noch nicht verbundenen Eckpunkte $B$ und $C$ werden verbunden.
<!-- lia-llm:solution -->
Zuerst wird die Seite $\overline{AB}$ mit der Länge $c=7\,\mathrm{cm}$ gezeichnet. In $A$ wird an $\overline{AB}$ der Winkel $\alpha=60^\circ$ konstruiert. Auf dem freien Winkelschenkel wird von $A$ aus die Länge $b=5\,\mathrm{cm}$ abgetragen und der Endpunkt als $C$ markiert. Abschließend werden $B$ und $C$ verbunden.
```



@resetter

@ADetails(BE=1; Dreieck, Konstruktion, SWS)
