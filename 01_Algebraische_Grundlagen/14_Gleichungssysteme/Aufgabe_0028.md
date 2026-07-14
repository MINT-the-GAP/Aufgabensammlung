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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Gleichungssysteme, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Tickets einer Veranstaltung mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Tickets einer Veranstaltung




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Bei einer Veranstaltung werden drei Ticketarten verkauft: Einzeltickets zu 2 €, Tagestickets zu 5 € und ermäßigte Tickets zu 3 €. Insgesamt werden 24 Tickets verkauft und der Umsatz beträgt 78 €. Außerdem gibt es vier ermäßigte Tickets weniger als Einzeltickets.  
**Berechne** die Anzahl der drei Ticketarten.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  10  ]] @canvas, $y$ = [[  8  ]] @canvas und $z$ = [[  6  ]] @canvas
@Algebrite.check([ 10; 8; 6 ])
************
Bezeichne mit $x$ die Anzahl der Einzeltickets, mit $y$ die Anzahl der Tagestickets und mit $z$ die Anzahl der ermäßigten Tickets.
$$
\begin{align*}
I.& \qquad x + y + z = 24 \\
II.& \qquad 2x + 5y + 3z = 78 \\
III.& \qquad z = x - 4 \\ \hline
I \cap III:& \qquad x + y + (x - 4) = 24 \\
& \qquad 2x + y = 28 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 2x + 5y + 3(x - 4) = 78 \\
& \qquad 5x + 5y = 90 \quad \left| :5 \right. \\
& \qquad x + y = 18 \quad \text{(V)} \\ \hline
(IV) - (V):& \qquad (2x + y) - (x + y) = 28 - 18 \\
& \qquad x = 10 \\[6pt]
\text{Dann:}& \qquad y = 18 - 10 = 8,\quad z = x - 4 = 6
\end{align*}
$$
Es wurden $10$ Einzeltickets, $8$ Tagestickets und $6$ ermäßigte Tickets verkauft.
************


@ADetails(1=BE; Gleichungssysteme, Sachaufgabe)




