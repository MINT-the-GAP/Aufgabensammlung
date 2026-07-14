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

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Lesezeichen für Bücherpakete.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Lesezeichen für Bücherpakete

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Eine Buchhandlung packt $347$ Geschenkpakete. In jedes Paket kommen $3$ Bücher. Zu jedem Buch wird noch ein Lesezeichen beigelegt.

**Berechne**, wie viele Lesezeichen insgesamt beigelegt werden.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Insgesamt werden [[ 7287 ]] Lesezeichen beigelegt. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 347\cdot 3& \\ \hline
+900& \\
+120& \\
+21& \\ \hline
 1041&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 1041\cdot 7& \\ \hline
+7000& \\
+280& \\
+7& \\ \hline
 7287&
\end{align*}
$$

</div>

</section>

Insgesamt werden $7287$ Lesezeichen beigelegt.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Grundrechenarten)