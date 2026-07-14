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


















tags: Ungleichungen, Mengen, negative Zahlen, Bruchrechnung, Sachaufgabe, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zur Temperatur im Kühlraum mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Temperatur im Kühlraum


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Ein Kühlraum hat zu Beginn eine Temperatur von $-6^\circ\mathrm{C}$. Durch Aufheizen steigt die Temperatur pro Stunde um $0,75^\circ\mathrm{C}$.  
**Berechne** die kleinste natürliche Zahl $x$ (Stunden), sodass die Temperatur mindestens $2^\circ\mathrm{C}$ beträgt.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 11 ]] @canvas $\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
-6 + \dfrac{3}{4}x &\ge 2 \quad \left| \; +6 \; \right. \\
\dfrac{3}{4}x &\ge 8 \quad \left| \; :\dfrac{3}{4} \; \right. \\
x &\ge \dfrac{32}{3} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 11
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung, Sachaufgabe)
