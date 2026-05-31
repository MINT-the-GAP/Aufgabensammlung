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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Gleichungssysteme, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Tieren auf einer Weide mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Tiere auf einer Weide


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Auf einer Weide sind Hühner und Ziegen. Insgesamt zählst du 21 Tiere. Zusammen haben die Tiere 62 Beine.  
**Berechne** die Anzahl der Hühner und der Ziegen.

<!-- data-solution-button="5"-->
$x$ = [[  11  ]] @canvas und $y$ = [[  10  ]] @canvas
@Algebrite.check([ 11; 10 ])
************
Bezeichne mit $x$ die Anzahl der Hühner (je 2 Beine) und mit $y$ die Anzahl der Ziegen (je 4 Beine).
$$
\begin{align*}
I.& \qquad x + y = 21 \\
II.& \qquad 2x + 4y = 62 \\ \hline
II.& \qquad 2x + 4y = 62 \quad \left| :2 \right. \\
& \qquad x + 2y = 31 \\ \hline
(x + 2y) - (x + y):& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 21 \quad \left| -10 \right. \\
& \qquad x = 11
\end{align*}
$$
Es gibt 11 Hühner und 10 Ziegen.
************



