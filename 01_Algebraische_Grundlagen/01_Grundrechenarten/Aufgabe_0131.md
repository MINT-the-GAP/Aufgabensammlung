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

tags: Addition, Division, Grundrechenarten, Sachaufgabe, Vorrangsregeln, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Addition und Division zu Eintrittsbändern bei einem Festival.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Eintrittsbänder für ein Festival

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Für ein Stadtfestival werden $1847$ grüne, $2365$ blaue und $1716$ rote Eintrittsbänder geliefert. Alle Eintrittsbänder werden anschließend gleichmäßig auf $6$ Ausgabestellen verteilt.

**Berechne**, wie viele Eintrittsbänder jede Ausgabestelle erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jede Ausgabestelle erhält [[ 988 ]] Eintrittsbänder. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 1847& \\
+2365& \\
+1716& \\
 \textcolor{red}{1}\textcolor{red}{1}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 5928& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 5928:6 &= 988 \\
 \underline{-\textcolor{blue}{54}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 52\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{48}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 48\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{48}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Insgesamt sind es zuerst $5928$ Eintrittsbänder. Jede Ausgabestelle erhält also $988$ Eintrittsbänder.
****************

@ADetails(1=BE;Sachaufgabe, Addition, Division, Grundrechenarten)