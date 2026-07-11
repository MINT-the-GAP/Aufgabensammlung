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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md

















tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit Gartenflächen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Gartenfläche


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Für einen Schulgarten wird eine rechteckige Fläche abgesteckt. Die Länge beträgt $18\,\text{m}$, die Breite ist $\dfrac{7}{12}$ der Länge.  
Zunächst werden für Beete $\dfrac{2}{3}$ der gesamten Rasenfläche vorgesehen.  
Von der verbleibenden Fläche wird anschließend $\dfrac{1}{5}$ für Wege reserviert.  
**Berechne** die am Ende nutzbare Gartenfläche. 



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  252/5  ]] m^2
@Algebrite.check(252/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{7}{12}\cdot 18\,\text{m}
= \dfrac{7}{12}\cdot \dfrac{18}{1}\,\text{m}
= \dfrac{126}{12}\,\text{m}
= \dfrac{21}{2}\,\text{m} \\[4pt]
\text{Gesamtfläche:}\quad & 18\,\text{m}\cdot \dfrac{21}{2}\,\text{m}
= \dfrac{378}{2}\,\text{m}^2
= 189\,\text{m}^2 \\[4pt]
\text{Beete:}\quad & \dfrac{2}{3}\cdot 189\,\text{m}^2
= 126\,\text{m}^2 \\[4pt]
\text{Rest 1:}\quad & 189\,\text{m}^2 - 126\,\text{m}^2
= 63\,\text{m}^2 \\[4pt]
\text{Wege:}\quad & \dfrac{1}{5}\cdot 63\,\text{m}^2
= \dfrac{63}{5}\,\text{m}^2 \\[4pt]
\text{Nutzfläche:}\quad & 63\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{315}{5}\,\text{m}^2 - \dfrac{63}{5}\,\text{m}^2
= \dfrac{252}{5}\,\text{m}^2
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)
