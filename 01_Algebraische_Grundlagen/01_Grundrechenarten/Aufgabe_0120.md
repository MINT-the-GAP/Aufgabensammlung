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

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Flyern für Filialen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Flyer für Auslagefächer

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Eine Druckerei produziert $45024$ Flyer. Zuerst werden sie gleichmäßig auf $8$ Filialen verteilt. Jede Filiale teilt ihre Flyer anschließend gleichmäßig auf $3$ Auslagefächer auf, in denen über Monate die Flyer ausliegen sollen und immer wieder nachgefüllt werden.

**Berechne**, wie viele Flyer jedes Auslagefach erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jedes Auslagefach erhält [[ 1876 ]] Flyer. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 45024:8 &= 5628 \\
 \underline{-\textcolor{blue}{40}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 50\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{48}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 22\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{16}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 64\hspace{0.85em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{64}}\hspace{0.85em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 5628:3 &= 1876 \\
 \underline{-\textcolor{blue}{3}}\hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 26\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{24}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 22\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{21}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 18\hspace{0.85em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{18}}\hspace{0.85em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Jedes Auslagefach erhält $1876$ Flyer.
****************

@ADetails(1=BE;Sachaufgabe, Division, Grundrechenarten)