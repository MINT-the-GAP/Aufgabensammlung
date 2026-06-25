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


















tags: Ungleichungen, Mengen, negative Zahlen, Bruchrechnung, Sachaufgabe, mittel, normal, Berechnen

comment: Löse eine Sachaufgabe zu einem Bücherregal mithilfe von Ungleichungen.

author: Martin Lommatzsch

-->




# Textaufgabe Ungleichungen - Bücherregal


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
Ein Regal fasst maximal $50$ Bücher. Zu Beginn stehen bereits $18$ Bücher darin. Jede neue Lieferung enthält $\dfrac{11}{3}$ Bücher im Durchschnitt (z. B. durch wechselnde Buchmengen pro Paket).  
**Berechne** die Anzahl der Lieferungen $x$, sodass die Kapazität des Regals überschritten wird.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \{ x \in \mathbb{N} \;|\; x \geq $ [[ 9 ]] @canvas $\}$
@Algebrite.check(9)
******************
$$
\begin{align*}
18 + \dfrac{11}{3}x &> 50 \quad \left| \; -18 \; \right. \\
\dfrac{11}{3}x &> 32 \quad \left| \; :\dfrac{11}{3} \; \right. \\
x &> \dfrac{96}{11} \\[4pt]
\Rightarrow\;\; \mathbb{N}\text{:}\quad x &\ge 9
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung, Sachaufgabe)


