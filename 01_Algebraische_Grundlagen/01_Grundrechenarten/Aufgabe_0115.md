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

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Aufklebern in Verpackungen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Aufkleber in Verpackungen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">


Ein Bastelgeschäft packt $324$ Kartons. In jeden Karton kommen $6$ kleine Tütchen. In jedem Tütchen liegen $8$ Aufkleber.

**Berechne**, wie viele Aufkleber insgesamt verpackt werden.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Insgesamt werden [[ 15552 ]] Aufkleber verpackt. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 324\cdot 6& \\ \hline
+1800& \\
+120& \\
+24& \\ \hline
 1944&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 1944\cdot 8& \\ \hline
+8000& \\
+7200& \\
+320& \\
+32& \\ \hline
 15552&
\end{align*}
$$

</div>

</section>

Insgesamt werden $15552$ Aufkleber verpackt.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Grundrechenarten)
