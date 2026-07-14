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

comment: Löse eine Sachaufgabe mit einer Reinigungslösung mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Reinigungslösung



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Für die Reinigung steht eine $5\,\ell$-Kanisterlösung bereit. Zuerst verschüttet sich $\dfrac{3}{10}$ des Inhalts, danach wird $\dfrac{1}{4}$ der verbleibenden Menge für die Gerätepflege genutzt.  
**Berechne** das restliche Volumen im Kanister. 



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  21/8  ]]  $\ell$ @canvas
@Algebrite.check(21/8)
************
$$
\begin{align*}
\text{Verschüttet:}\quad & \dfrac{3}{10}\cdot 5\,\ell
= \dfrac{15}{10}\,\ell
= \dfrac{3}{2}\,\ell \\
\text{Rest 1:}\quad & 5\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{10}{2}\,\ell - \dfrac{3}{2}\,\ell
= \dfrac{7}{2}\,\ell \\
\text{Verbrauch:}\quad & \dfrac{1}{4}\cdot \dfrac{7}{2}\,\ell
= \dfrac{7}{8}\,\ell \\
\text{Endrest:}\quad & \dfrac{7}{2}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{28}{8}\,\ell - \dfrac{7}{8}\,\ell
= \dfrac{21}{8}\,\ell
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)