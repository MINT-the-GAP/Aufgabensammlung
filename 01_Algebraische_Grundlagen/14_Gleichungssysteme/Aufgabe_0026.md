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















tags: Gleichungssysteme, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zu Arbeitszeiten bei Textkapiteln mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Arbeitszeiten bei Textkapiteln



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Ein Mensch bearbeitet an einem Nachmittag zwei Textkapitel. Insgesamt arbeitet dieser 5 Stunden. Beim ersten Kapitel schafft er 60 Seiten pro Stunde, beim zweiten 40 Seiten pro Stunde. Am Ende hast der Mensch zusammen 255 Seiten bearbeitet.  
**Berechne** die Arbeitszeiten für beide Kapitel.

<!-- data-solution-button="5"-->
$x$ = [[  11/4  ]] @canvas und $y$ = [[  9/4  ]] @canvas
@Algebrite.check([ 11/4; 9/4 ])
************
Bezeichne mit $x$ die Zeit am ersten Kapitel (in Stunden) und mit $y$ die Zeit am zweiten Kapitel.
$$
\begin{align*}
I.& \qquad x + y = 5 \\
II.& \qquad 60x + 40y = 255 \\ \hline
40\cdot I\!:& \qquad 40x + 40y = 200 \\ \hline
II - (40\cdot I)\!:& \qquad (60x + 40y) - (40x + 40y) = 255 - 200 \\
& \qquad 20x = 55 \;\Rightarrow\; x = \dfrac{55}{20} = \dfrac{11}{4} \\[6pt]
x \cap I\!:& \qquad \dfrac{11}{4} + y = 5 
\;\Rightarrow\; y = 5 - \dfrac{11}{4} 
= \dfrac{20 - 11}{4} 
= \dfrac{9}{4}
\end{align*}
$$
Die Arbeitszeiten betragen $ \dfrac{11}{4}\,\text{h}$ (erstes Kapitel) und $ \dfrac{9}{4}\,\text{h}$ (zweites Kapitel).
************




