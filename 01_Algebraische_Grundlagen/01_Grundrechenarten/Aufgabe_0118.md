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

tags: Division, Grundrechenarten, Sachaufgabe, leicht, niedrig, Berechnen

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Prospekten auf einer Messe.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Prospekte auf einer Messe

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Eine Druckerei liefert $8640$ Prospekte für eine Messe. Zuerst werden sie gleichmäßig auf $6$ Messestände verteilt. Jeder Messestand legt seine Prospekte anschließend gleichmäßig in $4$ Prospektständer.

**Berechne**, wie viele Prospekte jeder Prospektständer erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jeder Prospektständer erhält [[ 360 ]] Prospekte. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 8640:6 &= 1440 \\
 \underline{-\textcolor{blue}{6}}\hspace{0.5em}
 \hspace{0.5em}
 \hspace{0.85em}
 \hspace{0.5em}
 \hspace{0.5em}& \\
 26\hspace{0.5em}
 \hspace{0.85em}
 \hspace{0.5em}
 \hspace{0.5em}& \\
 \underline{-\textcolor{green}{24}}\hspace{0.5em}
 \hspace{0.5em}
 \hspace{0.85em}
 \hspace{0.5em}& \\
 24\hspace{0.5em}
 \hspace{0.85em}
 \hspace{0.5em}& \\
 \underline{-\textcolor{orange}{24}}\hspace{0.5em}
 \hspace{0.85em}
 \hspace{0.5em}& \\
 00
 \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
 \underline{-\hspace{0.5em}\textcolor{red}{0}}\hspace{0.5em}\hspace{0.5em}
 \hspace{0.5em}& \\
 0
 \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 1440:4 &= 360 \\
 \underline{-\textcolor{blue}{12}}\hspace{0.5em}
 \hspace{0.5em}
 \hspace{0.85em}\hspace{0.5em}& \\
 24\hspace{0.5em}
 \hspace{0.85em}\hspace{0.5em}& \\
 \underline{-\textcolor{green}{24}}\hspace{0.5em}
 \hspace{0.5em}
 \hspace{0.85em}& \\
 00
 \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
 \underline{-\hspace{0.5em}\textcolor{red}{0}}\hspace{0.5em}\hspace{0.5em}
 \hspace{0.5em}& \\
 0
 \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
\end{align*}
$$

</div>

</section>

Jeder Prospektständer erhält $360$ Prospekte.
****************

@ADetails(1=BE;Sachaufgabe, Division, Grundrechenarten)