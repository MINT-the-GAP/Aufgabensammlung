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

comment: Löse eine Sachaufgabe mit einem Technikprojekt mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Technikprojekt


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Für ein Technikprojekt steht ein Budget von $85\,\text{€}$ zur Verfügung.  
Zunächst werden für Materialien $\dfrac{3}{10}$ des Budgets ausgegeben.  
Später erhält die Gruppe eine Rückerstattung in Höhe von $\dfrac{1}{8}$ des **gesamten** Budgets (Gutschrift).  
**Berechne** den am Ende verfügbare Betrag als Bruch. 



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  561/8  ]]  € @canvas
@Algebrite.check(561/8)
************
$$
\begin{align*}
\text{Ausgabe:}\quad & \dfrac{3}{10}\cdot 85\,\text{€}
= \dfrac{255}{10}\,\text{€}
= \dfrac{51}{2}\,\text{€} \\[4pt]
\text{Rest nach Kauf:}\quad & 85\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{170}{2}\,\text{€} - \dfrac{51}{2}\,\text{€}
= \dfrac{119}{2}\,\text{€} \\[4pt]
\text{Gutschrift:}\quad & \dfrac{1}{8}\cdot 85\,\text{€}
= \dfrac{85}{8}\,\text{€} \\[4pt]
\text{Endbetrag:}\quad & \dfrac{119}{2}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{476}{8}\,\text{€} + \dfrac{85}{8}\,\text{€}
= \dfrac{561}{8}\,\text{€}
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)
