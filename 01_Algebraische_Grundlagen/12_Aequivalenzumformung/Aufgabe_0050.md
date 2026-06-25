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















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, sehr schwer, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Zügen an der Küstenlinie mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Züge an der Küstenlinie

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/5.png" width="120" height="30">  \
Entlang einer geraden Küstenlinie steht ein Leuchtturm als Nullpunkt der Entfernungsskala.  
Ein Schnellzug A startet 55 km westlich des Leuchtturms und fährt ostwärts mit $110\,\dfrac{\text{km}}{\text{h}}$.  
Ein Regionalzug B befindet sich 145 km östlich des Leuchtturms, fährt aber erst 15 Minuten später westwärts mit $80\,\dfrac{\text{km}}{\text{h}}$ los.  
**Berechne**, nach wie vielen Stunden seit Abfahrt von Zug A beide Züge an derselben Position relativ zum Leuchtturm sind.  




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  22/19  ]] @canvas
@Algebrite.check(22/19)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
-55 + 110x \;\stackrel{!}{=}\; 145 - 80\,\bigl(x - \tfrac{1}{4}\bigr)
$$

$$
\begin{align*}
-55 + 110x &= 145 - 80x + 20 \\[2pt]
-55 + 110x &= 165 - 80x \quad \left|\, +80x \right.\\[2pt]
-55 + 190x &= 165 \quad \left|\, +55 \right.\\[2pt]
190x &= 220 \quad \left|\, :190 \right.\\[2pt]
x &= \dfrac{22}{19}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{-55 + 110\cdot \dfrac{22}{19}}_{\text{Zug A}}
= -\dfrac{1045}{19} + \dfrac{2420}{19}
= \dfrac{1375}{19}    \\
&\quad\text{und}\quad    \\
&\underbrace{145 - 80\!\left(\dfrac{22}{19} - \dfrac{1}{4}\right)}_{\text{Zug B}}
= \dfrac{2755}{19} - \dfrac{1380}{19}
= \dfrac{1375}{19}
\end{align*}
$$


Deutung: Nach $\dfrac{22}{19}\approx 1{,}16$ Stunden (ca. 69,5 Minuten) treffen sich die Züge $\dfrac{1375}{19}\approx 72{,}4$ km östlich vom Leuchtturm.

************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)
