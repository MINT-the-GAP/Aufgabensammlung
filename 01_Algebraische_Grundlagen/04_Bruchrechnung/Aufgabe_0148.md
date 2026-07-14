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

















tags: Bruchrechnung, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit Reinigungsmischungenn mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Reinigungsmischungen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
In einem Labor werden Reinigungsmischungen angesetzt.  
Eine Mischung besteht aus $\dfrac{3}{8}\,\ell$ Lösung A und $\dfrac{1}{4}\,\ell$ Lösung B.  
Es werden $6$ Mischungen hergestellt; danach werden für Tests $\dfrac{2}{3}\,\ell$ des **Gesamtergebnisses** entnommen.  
**Bestimme** die verbleibende Flüssigkeitsmenge. 



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-show-partial-solution 
data-solution-button="5" 
data-hint-button="3"  -->
[[  37/12  ]]   $\ell$ @canvas
@Algebrite.check(37/12)
************
$$
\begin{align*}
\text{Term:}\quad & 6\cdot\Big(\dfrac{3}{8}\,\ell+\dfrac{1}{4}\,\ell\Big)-\dfrac{2}{3}\,\ell \\[4pt]
\text{(Distributivgesetz)}\quad & = 6\cdot\dfrac{3}{8}\,\ell + 6\cdot\dfrac{1}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{18}{8}\,\ell + \dfrac{6}{4}\,\ell - \dfrac{2}{3}\,\ell
= \dfrac{9}{4}\,\ell + \dfrac{3}{2}\,\ell - \dfrac{2}{3}\,\ell \\
&= \Big(\dfrac{9}{4}+\dfrac{6}{4}\Big)\ell - \dfrac{2}{3}\,\ell
= \dfrac{15}{4}\,\ell - \dfrac{2}{3}\,\ell \\
&= \dfrac{45}{12}\,\ell - \dfrac{8}{12}\,\ell
= \dfrac{37}{12}\,\ell
\end{align*}
$$
************

@ADetails(1=BE; Bruchrechnung, Sachaufgabe)