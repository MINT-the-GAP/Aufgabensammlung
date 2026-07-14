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

tags: Addition, Division, Grundrechenarten, Vorrangsregeln, Sachaufgabe, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Addition und Division zu Flyern auf einer Messe.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Flyer auf Messetischen

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

Für eine Messe treffen $1845$ Flyer eines Verlags, $2267$ Flyer eines zweiten Verlags und $1592$ Flyer eines dritten Verlags ein. Anschließend werden alle Flyer gleichmäßig für $8$ Messetische verteilt.

**Berechne**, wie viele Flyer auf jedem Messetisch ausgelegt werden können.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Auf jedem Messetisch können [[ 713 ]] Flyer ausgelegt werden. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 1845& \\
+2267& \\
+1592& \\
 \textcolor{red}{1}\textcolor{red}{2}\textcolor{red}{1}\hspace{0.5em}& \\ \hline
 5704& \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 5704:8 &= 713 \\
 \underline{-\textcolor{blue}{56}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}& \\
 10\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{8}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 24\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{24}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

</section>

Zuerst sind es insgesamt $5704$ Flyer. Auf jedem Messetisch können also $713$ Flyer ausgelegt werden.
****************

@ADetails(1=BE;Sachaufgabe, Addition, Division, Grundrechenarten)