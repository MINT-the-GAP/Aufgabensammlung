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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Gleichungssysteme, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe zu Laufzeiten von Geräten mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Laufzeiten von Geräten



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
Es werden drei elektrische Geräte mit den Leistungen $1{,}2\,\text{kW}$, $0{,}9\,\text{kW}$ und $0{,}6\,\text{kW}$ verwendet. Zusammen laufen sie $5$ Stunden. Insgesamt werden $5{,}1\,\text{kWh}$ zugeführt. Außerdem läuft das zweite Gerät eine halbe Stunde länger als das erste.  
**Berechne** die Laufzeiten der drei Geräte.

<!-- data-solution-button="5"-->
$x$ = [[  13/6  ]] @canvas, $y$ = [[  8/3  ]] @canvas und $z$ = [[  1/6  ]] @canvas
@Algebrite.check([ 13/6; 8/3; 1/6 ])
************
Bezeichne mit $x$ die Laufzeit des ersten Geräts ($1{,}2\,\text{kW}$), mit $y$ die Laufzeit des zweiten Geräts ($0{,}9\,\text{kW}$) und mit $z$ die Laufzeit des dritten Geräts ($0{,}6\,\text{kW}$).
$$
\begin{align*}
I.& \qquad x + y + z = 5 \\
II.& \qquad 1{,}2x + 0{,}9y + 0{,}6z = 5{,}1 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
\text{Zehnfaches von } II\!:& \qquad 12x + 9y + 6z = 51 \\[6pt]
\text{Aus } I \text{ und } III\!:& \qquad x + (x + \dfrac{1}{2}) + z = 5 \\
& \qquad 2x + z = \dfrac{9}{2} \quad \text{(IV)} \\[6pt]
\text{Setze } y = x + \dfrac{1}{2} \text{ in } (10\cdot II)\!:& \qquad 12x + 9\!\left(x + \dfrac{1}{2}\right) + 6z = 51 \\
& \qquad 21x + 6z = \dfrac{93}{2} \quad \left| \cdot 2 \right. \\
& \qquad 42x + 12z = 93 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad 2x + z = \dfrac{9}{2} \;\Rightarrow\; 12x + 6z = 27 \quad \text{(VI)} \\[6pt]
\text{(V) } - 2\cdot\text{(VI):}& \qquad (42x + 12z) - (24x + 12z) = 93 - 54 \\
& \qquad 18x = 39 \;\Rightarrow\; x = \dfrac{13}{6} \\[6pt]
\text{Dann:}& \qquad y = x + \dfrac{1}{2} = \dfrac{13}{6} + \dfrac{3}{6} = \dfrac{8}{3} \\[6pt]
I:& \qquad z = 5 - x - y = 5 - \dfrac{13}{6} - \dfrac{8}{3} = \dfrac{1}{6}
\end{align*}
$$
Die Laufzeiten betragen $ \dfrac{13}{6}\,\text{h}$, $ \dfrac{8}{3}\,\text{h}$ und $ \dfrac{1}{6}\,\text{h}$.
************





