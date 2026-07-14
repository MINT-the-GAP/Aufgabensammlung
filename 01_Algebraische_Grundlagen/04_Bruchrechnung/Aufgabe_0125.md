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


















tags: Bruchrechnung, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit einem Garten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Garten


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Ein rechteckiger Garten besitzt eine Länge von $18\,\text{m}$. Die Breite beträgt $\dfrac{3}{4}$ der Länge. Für ein Blumenbeet wird ein Anteil von $\dfrac{2}{5}$ der gesamten Fläche genutzt.  
**Berechne** die Fläche des Blumenbeets.   



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  486/5  ]]  m$^2$ @canvas
@Algebrite.check(486/5)
************
$$
\begin{align*}
\text{Breite:}\quad & \dfrac{3}{4}\cdot 18\,\text{m}
= \dfrac{54}{4}\,\text{m}
= \dfrac{27}{2}\,\text{m} \\
\text{Fläche ges.:}\quad & 18\,\text{m}\cdot \dfrac{27}{2}\,\text{m}
= \dfrac{486}{2}\,\text{m}^2
= 243\,\text{m}^2 \\
\text{Beet:}\quad & \dfrac{2}{5}\cdot 243\,\text{m}^2
= \dfrac{486}{5}\,\text{m}^2
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)
