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















tags: Gleichungssysteme, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Münzen in einem Kassenfach mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Münzen in einem Kassenfach




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
In einem Kassenfach liegen 1-€, 2-€ und 50-Cent-Münzen. Insgesamt sind es 30 Münzen. Der Gesamtwert beträgt 33 €. Außerdem gibt es zwei 50-Cent-Münzen weniger als 1-€-Münzen.  
**Berechne** die Anzahl der 1-€, 2-€ und 50-Cent-Münzen.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  12  ]] @canvas, $y$ = [[  8  ]] @canvas und $z$ = [[  10  ]] @canvas
@Algebrite.check([ 12; 8; 10 ])
************
Bezeichne mit $x$ die Anzahl der 1-€-Münzen, mit $y$ die Anzahl der 2-€-Münzen und mit $z$ die Anzahl der 50-Cent-Münzen.
$$
\begin{align*}
I.& \qquad x + y + z = 30 \\
II.& \qquad 100x + 200y + 50z = 3300 \\
III.& \qquad z = x - 2 \\ \hline
I \cap III:& \qquad x + y + (x - 2) = 30 \\
& \qquad 2x + y = 32 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 100x + 200y + 50(x - 2) = 3300 \\
& \qquad 150x + 200y = 3400 \quad \left| :50 \right. \\
& \qquad 3x + 4y = 68 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad y = 32 - 2x \\[6pt]
\text{In (V):}& \qquad 3x + 4(32 - 2x) = 68 \\
& \qquad 3x + 128 - 8x = 68 \\
& \qquad -5x = -60 \;\Rightarrow\; x = 12 \\[6pt]
\text{Dann:}& \qquad y = 32 - 2\cdot 12 = 8 \\
& \qquad z = x - 2 = 10
\end{align*}
$$
Es liegen $12$ Stück 1-€-Münzen, $8$ Stück 2-€-Münzen und $10$ Stück 50-Cent-Münzen im Kassenfach.
************


@ADetails(1=BE; Gleichungssysteme, Sachaufgabe)




