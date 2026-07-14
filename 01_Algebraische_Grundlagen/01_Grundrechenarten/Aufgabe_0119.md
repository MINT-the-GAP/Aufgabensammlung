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

comment: Löse eine Sachaufgabe mit natürlichen Zahlen zu Schrauben auf Baustellen.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Schrauben für Montageteams

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">

Ein Logistikzentrum liefert $27636$ Schrauben. Zuerst werden sie gleichmäßig auf $7$ Baustellen verteilt. Jede Baustelle teilt ihre Schrauben anschließend gleichmäßig auf $4$ Montageteams auf.

**Berechne**, wie viele Schrauben jedes Montageteam erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jedes Montageteam erhält [[ 987 ]] Schrauben. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 27636:7 &= 3948 \\
 \underline{-\textcolor{blue}{21}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 66\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{63}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 33\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{28}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 56\hspace{0.85em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{56}}\hspace{0.85em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 3948:4 &= 987 \\
 \underline{-\textcolor{blue}{36}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 34\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{32}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 28\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{28}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Jedes Montageteam erhält $987$ Schrauben.
****************

@ADetails(1=BE;Sachaufgabe, Division, Grundrechenarten)