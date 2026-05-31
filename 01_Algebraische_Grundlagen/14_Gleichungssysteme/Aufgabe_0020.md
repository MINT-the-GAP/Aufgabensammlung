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

comment: Löse eine Sachaufgabe zu Sitzplätzen im Innenhof mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Sitzplätze im Innenhof


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Auf einem Innenhof stehen Bänke: einige sind 2er-Bänke, andere 3er-Bänke. Insgesamt sind es 22 Bänke mit zusammen 56 Sitzplätzen.  
**Berechne** die Anzahl der 2er-Bänke und der 3er-Bänke.

<!-- data-solution-button="5"-->
$x$ = [[  10  ]] @canvas und $y$ = [[  12  ]] @canvas
@Algebrite.check([ 10; 12 ])
************
Bezeichne mit $x$ die Anzahl der 2er-Bänke und mit $y$ die Anzahl der 3er-Bänke.
$$
\begin{align*}
I.& \qquad x + y = 22 \\
II.& \qquad 2x + 3y = 56 \\ \hline
I.& \qquad x + y = 22 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 44 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 56 - 44 \\
& \qquad y = 12 \\[6pt]
y \cap I:& \qquad x + 12 = 22 \quad \left| -12 \right. \\
& \qquad x = 10
\end{align*}
$$
Es gibt 10 2er-Bänke und 12 3er-Bänke.
************






