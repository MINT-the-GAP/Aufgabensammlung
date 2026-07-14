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















tags: Äquivalenzumformung, Sachaufgabe, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Löse eine Sachaufgabe mit Wasserbecken mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Wasserbecken 

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Ein Becken wird pro Minute um 0,75 Liter aufgefüllt; zu Beginn sind 2,5 Liter enthalten.  
Ein zweites Becken enthält anfangs 7,25 Liter, dabei werden pro Minute 0,5 Liter abgelassen.  
**Berechne**, nach wie vielen Minuten beide Becken gleich viel Wasser enthalten.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  19/5  ]] @canvas
@Algebrite.check(19/5)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{4}x + \dfrac{5}{2} \;\stackrel{!}{=}\; \dfrac{29}{4} - \dfrac{1}{2}x
$$

$$
\begin{align*}
\dfrac{3}{4}x + \dfrac{5}{2} &= \dfrac{29}{4} - \dfrac{1}{2}x \quad \left|\, +\dfrac{1}{2}x \right.\\[2pt]
\left(\dfrac{3}{4}+\dfrac{1}{2}\right)x + \dfrac{5}{2} &= \dfrac{29}{4} \quad \left|\, -\dfrac{5}{2} \right.\\[2pt]
\dfrac{5}{4}x &= \dfrac{29}{4} - \dfrac{10}{4} = \dfrac{19}{4} \quad \left|\, :\dfrac{5}{4} \right.\\[2pt]
x &= \dfrac{19}{4}\cdot\dfrac{4}{5} = \dfrac{19}{5}
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{4}\cdot\dfrac{19}{5} + \dfrac{5}{2}}_{\text{1. Becken}}
= \dfrac{57}{20} + \dfrac{50}{20}
= \dfrac{107}{20}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{29}{4} - \dfrac{1}{2}\cdot\dfrac{19}{5}}_{\text{2. Becken}}
= \dfrac{145}{20} - \dfrac{38}{20}
= \dfrac{107}{20}
\end{align*}
$$

Deutung:
Nach $\dfrac{19}{5}\approx 3,8$ Minuten ist der Füllstand in beiden Becken gleich ( $\dfrac{107}{20}=5,35$ Liter)
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)