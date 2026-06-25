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
















tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit fahrenden Autos mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Zwei Autos


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Ein Auto fährt mit einer konstanten Geschwindigkeit von $60\,\dfrac{\text{km}}{\text{h}}$ los.  
Ein zweites Auto startet zwei Stunden später, ist aber schneller und fährt mit $90\,\dfrac{\text{km}}{\text{h}}$.  
**Berechne**, nach wie vielen Stunden beide Autos die gleiche Strecke zurückgelegt haben.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  6  ]] @canvas
@Algebrite.check(6)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
60x \;\stackrel{!}{=}\; 90(x - 2)
$$

$$
\begin{align*}
60x &= 90x - 180 \quad \left|\, -90x \right.\\[2pt]
-30x &= -180 \quad \left|\, :(-30) \right.\\[2pt]
x &= 6
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{60\cdot 6}_{\text{1. Auto}} = 360\ \text{km} \\
&\quad\text{und}\quad \\
&\underbrace{90\cdot (6-2)}_{\text{2. Auto}} = 90\cdot 4 = 360\ \text{km}
\end{align*}
$$

Deutung: Nach 6 Stunden Fahrzeit des ersten Autos bzw. nach 4 Stunden des zweiten Autos haben beide die gleiche Strecke zurückgelegt.

************

@ADetails(1=BE; Äquivalenzumformung, Sachaufgabe)

