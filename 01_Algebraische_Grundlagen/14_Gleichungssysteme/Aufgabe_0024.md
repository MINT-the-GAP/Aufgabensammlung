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















tags: Gleichungssysteme, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zu Gerätelaufzeiten mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Gerätelaufzeiten


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Zwei Geräte laufen an einem Tag zusammen 5 Stunden. Gerät A kostet pro Stunde 1,40 €, Gerät B pro Stunde 0,90 €. Am Ende betragen die Gesamtkosten 6,70 €.  
**Berechne** die Laufzeiten beider Geräte.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  22/5  ]] @canvas und $y$ = [[  3/5  ]] @canvas
@Algebrite.check([ 22/5; 3/5 ])
************
Bezeichne mit $x$ die Laufzeit von Gerät A (in Stunden) und mit $y$ die Laufzeit von Gerät B.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 1{,}4x + 0{,}9y = 6{,}7 \\ \hline
\text{Zehnfaches von } II\!:& \qquad 14x + 9y = 67 \\
9\cdot I\!:& \qquad 9x + 9y = 45 \\ \hline
(14x{+}9y) - (9x{+}9y):& \qquad 5x = 22 \;\Rightarrow\; x = \dfrac{22}{5} \\[6pt]
x \cap I:& \qquad \dfrac{22}{5} + y = 5 \;\Rightarrow\; y = 5 - \dfrac{22}{5} = \dfrac{3}{5}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{22}{5}\,\text{h} $ und $ \dfrac{3}{5}\,\text{h} $.
************


@ADetails(1=BE; Gleichungssysteme, Bruchrechnung, Sachaufgabe)





