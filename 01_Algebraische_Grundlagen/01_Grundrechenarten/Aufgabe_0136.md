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

tags: Addition, Subtraktion, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Addition und Subtraktion zu Bechern auf einem Straßenfest.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Becher auf einem Straßenfest

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Für ein Straßenfest werden am Vormittag $2486$ Becher geliefert. Mittags kommen noch $3175$ weitere Becher dazu. Am Nachmittag werden $864$ Becher an einen Nachbarstand abgegeben.

**Berechne**, wie viele Becher danach noch am eigenen Stand verblieben sind.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Danach bleiben [[ 4797 ]] Becher am Stand. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 2486& \\
+3175& \\
 \hspace{0.5em}\textcolor{red}{1}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 5661& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 5661& \\
- \hspace{0.5em}864& \\
- \hspace{0.5em}\textcolor{red}{1}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 4797& \\
\end{align*}
$$

</div>

</section>

Zuerst sind es $5661$ Becher. Nach der Abgabe bleiben $4797$ Becher am Stand.
****************

@ADetails(1=BE;Sachaufgabe, Addition, Subtraktion, Grundrechenarten)