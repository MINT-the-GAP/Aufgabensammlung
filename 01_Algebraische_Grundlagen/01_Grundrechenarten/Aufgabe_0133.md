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

tags: Subtraktion, Division, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Subtraktion und Division zu Eintrittskarten.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Eintrittskarten am Stadion

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Für ein Turnier werden $7421$ Eintrittskarten gedruckt. Davon gehen $809$ Karten an Ehrengäste. Die übrigen Karten werden gleichmäßig auf $6$ Tageskassen verteilt.

**Berechne**, wie viele Eintrittskarten jede Tageskasse erhält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jede Tageskasse erhält [[ 1102 ]] Eintrittskarten. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 7421& \\
- \hspace{0.5em}809& \\
- \hspace{0.5em}\hspace{0.5em}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 6612& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 6612:6 &= 1102 \\
 \underline{-\textcolor{blue}{6}}\hspace{0.5em}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 06\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{6}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 01\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{0}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 12\hspace{0.85em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{12}}\hspace{0.85em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Nach dem Abzug bleiben $6612$ Eintrittskarten. Jede Tageskasse erhält also $1102$ Karten.
****************

@ADetails(1=BE;Sachaufgabe, Subtraktion, Division, Grundrechenarten)