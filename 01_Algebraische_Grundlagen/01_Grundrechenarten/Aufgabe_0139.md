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

tags: Multiplikation, Addition, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Multiplikation und Addition zu Bleistiften.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Bleistifte für Klassenräume

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Eine Schule bestellt $132$ Kisten mit Bleistiften. In jeder Kiste liegen $24$ Bleistifte. Zusätzlich kommen noch $876$ einzelne Ersatzbleistifte dazu.

**Berechne**, wie viele Bleistifte die Schule insgesamt erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Die Schule erhält insgesamt [[ 4044 ]] Bleistifte. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 132\cdot 24& \\ \hline
+\hspace{0.5em}528& \\
+2640& \\ \hline
 3168&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 3168& \\
+\hspace{0.5em}876& \\
 \textcolor{red}{1}\textcolor{red}{1}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 4044& \\
\end{align*}
$$

</div>

</section>

Zuerst sind es $3168$ Bleistifte aus den Kisten. Mit den Ersatzbleistiften sind es insgesamt $4044$ Bleistifte.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Addition, Grundrechenarten)