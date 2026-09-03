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
```text @LLMQuiz(0.55;coverage=0.66;solution=1;feedback=1,`Für ein Dreieck $ABC$ sind die Winkel $\alpha=60^\circ$, $\beta=60^\circ$ und $\gamma=60^\circ$ gegeben. Begründe, warum diese drei Winkel für die eindeutige Konstruktion des Dreiecks nicht ausreichen und WWW deshalb kein Kongruenzsatz ist.`)
<!-- lia-llm:criterion -->
Die drei Winkel legen nur die Form, aber keine Seitenlänge und damit nicht die Größe des Dreiecks fest.
<!-- lia-llm:criterion -->
Dreiecke mit denselben Winkeln können verschieden groß und deshalb nicht kongruent sein.
<!-- lia-llm:criterion -->
Darum ist die Konstruktion nicht eindeutig und WWW kein Kongruenzsatz.
<!-- lia-llm:solution -->
Die drei Winkel legen nur die Form eines Dreiecks fest, nicht aber seine Größe. Bei drei Winkeln von jeweils $60^\circ$ entsteht zwar immer ein gleichseitiges Dreieck, seine Seitenlänge kann jedoch beliebig gewählt werden. Beispielsweise besitzen gleichseitige Dreiecke mit den Seitenlängen $4\,\mathrm{cm}$ und $8\,\mathrm{cm}$ dieselben Winkel. Sie sind ähnlich, aber wegen ihrer verschiedenen Seitenlängen nicht kongruent. Ohne eine vorgegebene Seitenlänge fehlt somit der Maßstab, weshalb WWW kein Kongruenzsatz ist.
```


@resetter

@ADetails(BE=2; Dreieck, Konstruktion, Kongruenz, WWW)
