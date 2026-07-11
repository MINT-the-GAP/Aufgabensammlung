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

















tags: Bruchrechnung, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit einer Sammelaktion mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Sammelaktion



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
Für eine Sammelaktion bringt jede der acht Klassen denselben Beitrag:  
pro Klasse $\left(\dfrac{3}{5}\,\text{kg} + \dfrac{1}{4}\,\text{kg}\right)$ Papier.  
Von der gesamten eingesammelten Masse wird anschließend $\dfrac{1}{5}$ direkt recycelt.  
Der verbleibende Rest wird gleichmäßig auf sechs Kisten verteilt.  
**Berechne** die Masse pro Kiste als Bruch. 




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  68/75  ]]  kg @canvas
@Algebrite.check(68/75)
************
$$
\begin{align*}
\text{Pro Klasse:}\quad 
&\left(\dfrac{3}{5}+\dfrac{1}{4}\right)\,\text{kg}
= \left(\dfrac{12}{20}+\dfrac{5}{20}\right)\,\text{kg}
= \dfrac{17}{20}\,\text{kg} \\[4pt]
\text{Gesamt:}\quad 
&8\cdot \dfrac{17}{20}\,\text{kg}
= \dfrac{136}{20}\,\text{kg}
= \dfrac{34}{5}\,\text{kg} \\[6pt]
\text{Nach Recycling:}\quad 
&\left(1-\dfrac{1}{5}\right)\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{4}{5}\cdot \dfrac{34}{5}\,\text{kg}
= \dfrac{136}{25}\,\text{kg} \\[6pt]
\text{Gleichmäßig auf 6 Kisten:}\quad 
&\dfrac{136}{25}\,\text{kg} : 6
= \dfrac{136}{25}\,\text{kg} \cdot \dfrac{1}{6}
= \dfrac{136}{150}\,\text{kg}
= \dfrac{68}{75}\,\text{kg}
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)
