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

comment: Löse eine Sachaufgabe zu Nussmischungen mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Nussmischungen


Für eine Nussmischung werden Mandeln (6 €/kg), Erdnüsse (4 €/kg) und Cashews (10 €/kg) gemischt. Insgesamt entstehen $ \dfrac{15}{2}\,\text{kg} $ Mischung. Der Materialwert beträgt 47 €. Außerdem werden um ein halbes Kilogramm mehr Erdnüsse als Mandeln verwendet.  
**Berechne** die eingesetzten Kilogramm der drei Sorten.

<!-- data-solution-button="5"-->
$x$ = [[  5/2  ]] @canvas, $y$ = [[  3  ]] @canvas und $z$ = [[  2  ]] @canvas
@Algebrite.check([ 5/2; 3; 2 ])
************
Bezeichne mit $x$ die Kilogramm Mandeln, mit $y$ die Kilogramm Erdnüsse und mit $z$ die Kilogramm Cashews.
$$
\begin{align*}
I.& \qquad x + y + z = \dfrac{15}{2} \\
II.& \qquad 6x + 4y + 10z = 47 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = \dfrac{15}{2} \\
& \qquad 2x + z = 7 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 6x + 4\!\left(x + \dfrac{1}{2}\right) + 10z = 47 \\
& \qquad 10x + 2 + 10z = 47 \\
& \qquad 10x + 10z = 45 \quad \left| :5 \right. \\
& \qquad 2x + 2z = 9 \quad \text{(V)} \\ \hline
\text{(V)} - 2\cdot\text{(IV)}:& \qquad (2x + 2z) - (4x + 2z) = 9 - 14 \\
& \qquad -2x = -5 \;\Rightarrow\; x = \dfrac{5}{2} \\[6pt]
III:& \qquad y = x + \dfrac{1}{2} = \dfrac{5}{2} + \dfrac{1}{2} = 3 \\[6pt]
IV:& \qquad 2\cdot \dfrac{5}{2} + z = 7 \;\Rightarrow\; 5 + z = 7 \;\Rightarrow\; z = 2
\end{align*}
$$
Es werden $ \dfrac{5}{2}\,\text{kg} $ Mandeln, $ 3\,\text{kg} $ Erdnüsse und $ 2\,\text{kg} $ Cashews verwendet.
************





