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

comment: Löse eine Sachaufgabe zu einem Kartenspiel mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Kartenspiel



Ein Kartenspiel besteht aus grünen und blauen Karten. Insgesamt sind es 28 Karten. Jede grüne Karte zählt 3 Punkte, jede blaue Karte 5 Punkte. Zusammen ergeben alle Karten 112 Punkte.  
**Berechne** die Anzahl der grünen und der blauen Karten.

<!-- data-solution-button="5"-->
$x$ = [[  14  ]] und $y$ = [[  14  ]]
@Algebrite.check([ 14; 14 ])
************
Bezeichne mit $x$ die Anzahl der grünen Karten (3 Punkte) und mit $y$ die Anzahl der blauen Karten (5 Punkte).
$$
\begin{align*}
I.& \qquad x + y = 28 \\
II.& \qquad 3x + 5y = 112 \\ \hline
I.& \qquad x + y = 28 \quad \left| \cdot 3 \right. \\
& \qquad 3x + 3y = 84 \\ \hline
II. - 3\cdot I:& \qquad (3x + 5y) - (3x + 3y) = 112 - 84 \\
& \qquad 2y = 28 \quad \left| :2 \right. \\
& \qquad y = 14 \\[6pt]
y \cap I:& \qquad x + 14 = 28 \quad \left| -14 \right. \\
& \qquad x = 14
\end{align*}
$$
Es gibt 14 grüne und 14 blaue Karten.
************






