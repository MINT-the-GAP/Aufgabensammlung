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

tags: Dreiecke, Konstruktion, Kongruenz, leicht, niedrig, Begründen

comment: Begründe mithilfe der Dreiecksungleichung, warum aus den vorgegebenen Seitenlängen kein Dreieck konstruiert werden kann.

author: Martin Lommatzsch

-->

# Nicht konstruierbares Dreieck

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Ein Dreieck $ABC$ soll mit den Seitenlängen $a=8\,\mathrm{cm}$, $b=3\,\mathrm{cm}$ und $c=4\,\mathrm{cm}$ konstruiert werden.

**Begründe**, warum ein Dreieck mit diesen Seitenlängen nicht konstruiert werden kann.

<!-- data-solution-button="off" data-llm-textarea="6" -->
[[Antwort]]
[[?]] @Explain
```text @LLMQuiz(0.66;solution=1;feedback=1)
In jedem Dreieck muss die Summe der Längen zweier Seiten größer als die Länge der dritten Seite sein. Hier gilt jedoch $b+c=3\,\mathrm{cm}+4\,\mathrm{cm}=7\,\mathrm{cm}<8\,\mathrm{cm}=a$. Damit ist die Dreiecksungleichung verletzt.

Auch bei der Konstruktion wird das Problem sichtbar: Zuerst wird die Seite $\overline{BC}$ mit der Länge $a=8\,\mathrm{cm}$ gezeichnet. Der Kreis um $B$ mit dem Radius $c=4\,\mathrm{cm}$ und der Kreis um $C$ mit dem Radius $b=3\,\mathrm{cm}$ haben keinen Schnittpunkt, da die Summe ihrer Radien mit $7\,\mathrm{cm}$ kleiner als der Abstand ihrer Mittelpunkte ist. Deshalb kann kein Punkt $A$ gefunden und somit kein Dreieck mit diesen Seitenlängen konstruiert werden.
```

@resetter

@ADetails(BE=2; Dreieck, Konstruktion, Kongruenz, SSS, Dreiecksungleichung)
