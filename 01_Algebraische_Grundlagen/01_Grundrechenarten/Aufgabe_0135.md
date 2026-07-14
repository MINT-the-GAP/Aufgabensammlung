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

tags: Division, Addition, Grundrechenarten, Sachaufgabe, Vorrangsregeln, normal, mittel, Berechnen

comment: Löse eine Sachaufgabe mit Division und Addition zu Schrauben in Lagerkisten.

author: Martin Lommatzsch

base:   https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/01_Algebraische_Grundlagen/
-->

# Sachaufgabe - Schrauben in Lagerkisten

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">

In einem Baumarkt werden $9366$ Schrauben gleichmäßig auf $6$ Lagerkisten verteilt. Danach kommen in jede Lagerkiste noch $248$ weitere Schrauben aus einer Nachlieferung.

**Berechne**, wie viele Schrauben jede Lagerkiste am Ende enthält.

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Jede Lagerkiste enthält am Ende [[ 1809 ]] Schrauben. @canvas
****************

<section class="dynFlex">

<div class="flex-child">
$$
\begin{align*}
 9366:6 &= 1561 \\
 \underline{-\textcolor{blue}{6}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\
 33\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{green}{30}}\hspace{0.5em}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 36\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{orange}{36}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 6\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 \underline{-\textcolor{red}{6}}\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
 0\hspace{0.85em}\hspace{0.5em}\hspace{0.5em} & \\
\end{align*}
$$

</div>

<div class="flex-child">
$$
\begin{align*}
 1561& \\
+\hspace{0.5em}248& \\
 \hspace{0.5em}\textcolor{red}{1}\hspace{0.5em}\hspace{0.5em}& \\ \hline
 1809& \\
\end{align*}
$$

</div>

</section>

Nach der Verteilung enthält jede Lagerkiste zuerst $1561$ Schrauben. Mit der Nachlieferung sind es am Ende $1809$ Schrauben.
****************

@ADetails(1=BE;Sachaufgabe, Division, Addition, Grundrechenarten)