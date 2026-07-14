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















tags: Äquivalenzumformung, Sachaufgabe, niedrig, leicht, Berechnen, 

comment: Löse eine Sachaufgabe mit Bezahlmodellen mittels der Äquivalenzumformung.

author: Martin Lommatzsch

-->




# Textaufgabe Äquivalenzumformung - Copyshop

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
In einem Copyshop kann zwischen zwei Bezahlmodellen gewählt werden. In Modell A fällt eine einmalige Grundgebühr von 0,75 € an; jede Kopie kostet zusätzlich 0,30 €. In Modell B beträgt die einmalige Grundgebühr 3,75 €, dafür kostet jede Kopie nur 0,15 €. **Berechne**, nach wie vielen Kopien die Gesamtkosten beider Modelle genau gleich sind.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$x$ = [[  20  ]] @canvas
@Algebrite.check(20)
************
$$
\textbf{Gleichung aus dem Text:}\quad 
\dfrac{3}{10}x + \dfrac{3}{4} \;\stackrel{!}{=}\; \dfrac{3}{20}x + \dfrac{15}{4}
$$

$$
\begin{align*}
\dfrac{3}{10}x + \dfrac{3}{4} &= \dfrac{3}{20}x + \dfrac{15}{4} \quad \left|\, -\dfrac{3}{20}x \right.\\[2pt]
\left(\dfrac{3}{10}-\dfrac{3}{20}\right)x + \dfrac{3}{4} &= \dfrac{15}{4} \quad \left|\, -\dfrac{3}{4} \right.\\[2pt]
\dfrac{3}{20}x &= \dfrac{12}{4} = 3 \quad \left|\, :\dfrac{3}{20} \right.\\[2pt]
x &= 20
\end{align*}
$$

$$
\begin{align*}
\textbf{Probe:}\quad 
&\underbrace{\dfrac{3}{10}\cdot 20 + \dfrac{3}{4}}_{\text{Modell A}}
= 6 + 0,75
= 6,75\ \text{€}  \\
&\quad\text{und}\quad  \\
&\underbrace{\dfrac{3}{20}\cdot 20 + \dfrac{15}{4}}_{\text{Modell B}}
= 3 + 3,75
= 6,75\ \text{€}
\end{align*}
$$



Deutung: Für $x<20$ ist Modell A günstiger; für $x>20$ ist Modell B günstiger.
************

@ADetails(1=BE; Äquivalenzumformung, Bruchrechnung, Sachaufgabe)