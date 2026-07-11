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

comment: Löse eine Sachaufgabe mit einer Holzplatte mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Holzplatte


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Für eine Ausstellungsfläche wird eine Holzplatte als Rechteck verwendet.  
Die Länge beträgt $32\,\text{cm}$, die Breite ist $\dfrac{5}{12}$ der Länge.  
Von der gesamten Fläche wird zunächst $\dfrac{3}{8}$ für Befestigungen reserviert.  
Von der verbleibenden Fläche wird anschließend $\dfrac{1}{3}$ farbig lackiert.  
**Berechne** die am Ende nicht lackierte Nutzfläche als Bruch. 



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  1600/9  ]]  cm^2 @canvas
@Algebrite.check(1600/9)
************
$$
\begin{align*}
\text{Breite:}\;& \dfrac{5}{12}\cdot 32\,\text{cm}
= \dfrac{160}{12}\,\text{cm}
= \dfrac{40}{3}\,\text{cm} \\[4pt]
\text{Gesamtfläche:}\;& 32\,\text{cm}\cdot \dfrac{40}{3}\,\text{cm}
= \dfrac{1280}{3}\,\text{cm}^2 \\[6pt]
\text{Reserviert:}\;& \dfrac{3}{8}\cdot \dfrac{1280}{3}\,\text{cm}^2
= \dfrac{1280}{8}\,\text{cm}^2
= 160\,\text{cm}^2 \\[4pt]
\text{Rest 1:}\;& \dfrac{1280}{3}\,\text{cm}^2 - 160\,\text{cm}^2
= \dfrac{1280-480}{3}\,\text{cm}^2
= \dfrac{800}{3}\,\text{cm}^2 \\[6pt]
\text{Lackiert:}\;& \dfrac{1}{3}\cdot \dfrac{800}{3}\,\text{cm}^2
= \dfrac{800}{9}\,\text{cm}^2 \\[4pt]
\text{Nicht lackiert:}\;& \dfrac{800}{3}\,\text{cm}^2 - \dfrac{800}{9}\,\text{cm}^2
= \dfrac{2400-800}{9}\,\text{cm}^2
= \dfrac{1600}{9}\,\text{cm}^2
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)