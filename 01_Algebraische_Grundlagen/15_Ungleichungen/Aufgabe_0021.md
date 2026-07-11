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


















tags: Ungleichungen, Sachaufgabe, sehr leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Datenvolumen bei Handytarifen mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Datenvolumen bei Handytarifen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Tarif A kostet 8 € Grundpreis und 3 € je GB. Tarif B kostet 2 € Grundpreis und 5 € je GB.  
**Berechne**, ab welchem Datenvolumen $x$ (in GB) Tarif A nicht teurer als Tarif B ist.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 3 ]] @canvas $\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
8 + 3x &\leq 2 + 5x \quad \left|\, -2 \right.
8 -2 + 3x &\leq  5x \quad \left|\, -3x \right.
8 - 2 &\leq 5x - 3x  \\
6 &\leq 2x \quad \left|\, :2 \right. \\
x &\geq 3
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Sachaufgabe)
