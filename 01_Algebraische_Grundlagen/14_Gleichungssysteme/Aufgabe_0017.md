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

comment: Löse eine Sachaufgabe zu Einnahmen auf einem Schulfest mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Einnahmen beim Schulfest



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Beim Schulfest verkauft die betrachtet Klasse Kuchenstücke und Waffeln. Am Ende stehen insgesamt 26 verkaufte Teile auf der Liste. Ein Kuchenstück kostet 2 €, eine Waffel 3 €. Zusammen wurden 62 € eingenommen. **Berechne**, wie viele Kuchenstücke und wie viele Waffeln verkauft wurden.





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  16  ]] @canvas und $y$ = [[  10  ]] @canvas 
@Algebrite.check([ 16; 10 ])
************
Bezeichne mit $x$ die Anzahl der Kuchenstücke und mit $y$ die Anzahl der Waffeln.
$$
\begin{align*}
I.& \qquad x + y = 26 \\
II.& \qquad 2x + 3y = 62  \\ \hline
I.& \qquad x + y = 26 \quad \left| \cdot 2 \right. \\
& \qquad 2x + 2y = 52 \\ \hline
II. - 2\cdot I:& \qquad (2x + 3y) - (2x + 2y) = 62 - 52 \\
& \qquad y = 10 \\[6pt]
y \cap I:& \qquad x + 10 = 26 \quad \left| -10 \right. \\
& \qquad x = 16
\end{align*}
$$
Es wurden 16 Kuchenstücke und 10 Waffeln verkauft.
************


@ADetails(1=BE; Gleichungssysteme, Sachaufgabe)






