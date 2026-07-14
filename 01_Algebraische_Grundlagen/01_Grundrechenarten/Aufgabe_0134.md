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

tags: Multiplikation, Subtraktion, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Multiplikation und Subtraktion zu Knöpfen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Knöpfe in Nähsets

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Eine Werkstatt packt $384$ Nähsets. In jedes Nähset sollen vorerst $17$ Knöpfe kommen. Durch eine Sonderbestellung werden $1432$ Knöpfe aus den Nähsets wieder rausgenommen.

**Berechne**, wie viele Knöpfe für die normalen Nähsets insgesamt übrig bleiben.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Für die normalen Nähsets bleiben [[ 5096 ]] Knöpfe übrig. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 384\cdot 17& \\ \hline
+2688& \\
+3840& \\ \hline
 6528&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 6528& \\
- 1432& \\
- \hspace{0.5em}\hspace{0.5em}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 5096& \\
\end{align*}
$$

</div>

</section>

Zuerst sind es $6528$ Knöpfe. Danach bleiben $5096$ Knöpfe übrig.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Subtraktion, Grundrechenarten)