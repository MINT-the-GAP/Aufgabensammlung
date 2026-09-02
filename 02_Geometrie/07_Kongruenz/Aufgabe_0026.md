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


tags: Dreiecke, Konstruktion, Kongruenz, leicht, niedrig, Erklären

comment: Erkläre, warum die Dreieckskonstruktionen nach WWS und WSW fast gleich ablaufen.

author: Martin Lommatzsch

-->

# Zusammenhang zwischen WWS und WSW

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Erkläre**, warum die Konstruktionen von Dreiecken nach den Kongruenzsätzen WWS und WSW fast gleich ablaufen.


<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz.question(0.55;solution=1;feedback=1;Rechtschreibung=1;Satzbau=1,`Erkläre, warum die Konstruktionen von Dreiecken nach den Kongruenzsätzen WWS und WSW fast gleich ablaufen.`)
<!-- lia-llm:criterion -->
Bei WSW liegt die gegebene Seite zwischen den beiden gegebenen Winkeln.
<!-- lia-llm:criterion -->
Bei WSW wird die gegebene Seite zuerst gezeichnet.
<!-- lia-llm:criterion -->
An den beiden Endpunkten der Seite werden die gegebenen Winkel konstruiert.
<!-- lia-llm:criterion -->
Der Schnittpunkt der freien Winkelschenkel ergibt den dritten Eckpunkt.
<!-- lia-llm:criterion -->
Bei WWS liegt die gegebene Seite nicht zwischen den beiden gegebenen Winkeln.
<!-- lia-llm:criterion -->
Bei WWS wird der fehlende anliegende Winkel mit der Innenwinkelsumme von $180^\circ$ berechnet.
<!-- lia-llm:criterion -->
Nach der Winkelberechnung sind auch bei WWS eine Seite und die beiden an ihr anliegenden Winkel bekannt.
<!-- lia-llm:criterion -->
Die weitere Konstruktion verläuft bei WWS genauso wie bei WSW.
<!-- lia-llm:solution -->
Bei WSW sind eine Seite und die beiden an dieser Seite anliegenden Winkel gegeben. Deshalb wird die Seite gezeichnet, an ihren Endpunkten werden die beiden Winkel konstruiert und der Schnittpunkt der freien Winkelschenkel ergibt den dritten Eckpunkt. Bei WWS liegt die gegebene Seite zunächst nicht zwischen den beiden gegebenen Winkeln. Aus der Winkelsumme wird daher zuerst der fehlende dritte Winkel berechnet. Danach sind ebenfalls eine Seite und ihre beiden anliegenden Winkel bekannt, sodass die weitere Konstruktion genauso wie bei WSW verläuft.
```


@resetter

@ADetails(BE=2; Dreieck, Konstruktion, Kongruenz, WWS, WSW)
