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

















tags: Bruchrechnung, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit Teiglingen mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Teiglinge

In der Backstube steht ein Mehlsack mit $24\,\text{kg}$.  
Am Vormittag werden für Teiglinge $\dfrac{3}{8}$ der Gesamtmasse verbraucht.  
Am Nachmittag wird für eine zweite Charge die Hälfte der verbleibenden Masse genutzt.  
**Berechne** die am Ende noch vorhandene Mehlmenge als Bruch. 

<!-- data-solution-button="5"-->
[[  15/2  ]] @canvas kg
@Algebrite.check(15/2)
************
$$
\begin{align*}
\text{Vormittag:}\quad & \dfrac{3}{8}\cdot 24\,\text{kg}
= \dfrac{72}{8}\,\text{kg}
= 9\,\text{kg} \\[4pt]
\text{Rest 1:}\quad & 24\,\text{kg} - 9\,\text{kg} = 15\,\text{kg} \\[4pt]
\text{Nachmittag:}\quad & \dfrac{1}{2}\cdot 15\,\text{kg}
= \dfrac{15}{2}\,\text{kg} \\[4pt]
\text{Rest ges.:}\quad & 15\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{30}{2}\,\text{kg} - \dfrac{15}{2}\,\text{kg}
= \dfrac{15}{2}\,\text{kg}
\end{align*}
$$
************
