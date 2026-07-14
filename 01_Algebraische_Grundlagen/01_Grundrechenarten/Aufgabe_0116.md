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

tags: Multiplikation, Grundrechenarten, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Trinkflaschen mit Etiketten.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Trinkflaschen mit Etiketten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Ein Getränkehändler packt $286$ Kisten. In jede Kiste kommen $5$ Flaschen. Auf jede Flasche lässt der Händler noch $4$ Etiketten kleben.

**Berechne**, wie viele Etiketten insgesamt benötigt werden.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Insgesamt werden [[ 5720 ]] Etiketten verpackt. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 286\cdot 5& \\ \hline
+1000& \\
+400& \\
+30& \\
+20& \\ \hline
 1430&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 1430\cdot 4& \\ \hline
+4000& \\
+1200& \\
+80& \\
+40& \\ \hline
 5720&
\end{align*}
$$

</div>

</section>

Insgesamt werden $5720$ Etiketten verpackt.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Grundrechenarten)