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
















tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit Bezahlmodellen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Wasser in Behältern

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Ein Behälter wird täglich mit vier Litern Wasser aufgefüllt. Zu Beginn sind bereits zwei Liter enthalten.  
Ein zweiter Behälter enthält anfangs 14 Liter Wasser, verliert jedoch jeden Tag einen Liter.  
**Berechne**, nach wie vielen Tagen beide Behälter gleich viel Wasser enthalten.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  12/5  ]] @canvas
@Algebrite.check(12/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
4x + 2 \;\stackrel{!}{=}\; 14 - x
$$

$$
\begin{align*}
4x + 2 &= 14 - x \quad \left|\, +x \right.\\[2pt]
5x + 2 &= 14 \quad \left|\, -2 \right.\\[2pt]
5x &= 12 \quad \left|\, :5 \right.\\[2pt]
x &= \dfrac{12}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{4\cdot \dfrac{12}{5} + 2}_{\text{1. Behälter}} 
= \dfrac{48}{5} + \dfrac{10}{5} = \dfrac{58}{5} = 11,6   \\
&\quad\text{und}\quad    \\
\underbrace{14 - \dfrac{12}{5}}_{\text{2. Behälter}}
&= \dfrac{70}{5} - \dfrac{12}{5} = \dfrac{58}{5} = 11,6
\end{align*}
$$


Deutung: Nach $\dfrac{12}{5} = 2{,}4$ Tagen haben beide Behälter gleich viel Wasser.
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)