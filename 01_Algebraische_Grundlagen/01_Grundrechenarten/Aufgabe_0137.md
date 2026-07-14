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

tags: Multiplikation, Division, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Multiplikation und Division zu Schraubenpackungen im Lager.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Schraubenpackungen im Lager

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Ein Lagerhaus erhält $248$ Kartons. In jedem Karton befinden sich $18$ Schraubenpackungen. Alle Schraubenpackungen werden gleichmäßig auf $6$ Regale verteilt.

**Berechne**, wie viele Schraubenpackungen in jedem Regal liegen.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
In jedem Regal liegen [[ 744 ]] Schraubenpackungen. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 248\cdot 18& \\ \hline
+1984& \\
+2480& \\ \hline
 4464&
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 4464:6 &= 744 \\
 \underline{-\textcolor{blue}{42}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 26\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{24}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 24\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{24}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Zuerst sind es insgesamt $4464$ Schraubenpackungen. In jedem Regal liegen also $744$ Packungen.
****************

@ADetails(1=BE;Sachaufgabe, Multiplikation, Division, Grundrechenarten)