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

comment: Löse eine Sachaufgabe mit Subtraktion und Division zu Etiketten für Pakete.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Etiketten für Pakete

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Eine Druckerei stellt $8754$ Versandetiketten her. Davon werden $1230$ Etiketten für Probedrucke und Kontrollen aussortiert. Die übrigen Etiketten werden gleichmäßig auf $6$ Versandboxen verteilt.

**Berechne**, wie viele Etiketten in jede Versandbox kommen.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
In jede Versandbox kommen [[ 1254 ]] Etiketten. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 8754& \\
- 1230& \\
- \hspace{0.5em}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\ \hline
 7524& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 7524:6 &= 1254 \\
 \underline{-\textcolor{blue}{6}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
 15\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{12}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 32\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{30}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 24\hspace{0.85em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{24}}\hspace{0.85em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Nach dem Aussortieren bleiben $7524$ Etiketten. In jede Versandbox kommen also $1254$ Etiketten.
****************

@ADetails(1=BE;Sachaufgabe, Subtraktion, Division, Grundrechenarten)