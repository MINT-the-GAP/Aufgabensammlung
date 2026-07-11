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


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/Proposal/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md















tags: Gleichungssysteme, Sachaufgabe, schwer, normal, Berechnen

comment: Löse eine Sachaufgabe zu Zuckergehalten in Säften mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Zuckergehalten in Säften


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/4.png" width="120" height="30">  \
Es werden drei Fruchtsäfte mit unterschiedlichen Zuckergehalten gemischt: Saft A enthält $120\,\text{g}$ Zucker je Liter, Saft B $80\,\text{g}$ je Liter und Saft C $50\,\text{g}$ je Liter. Insgesamt werden $9$ Liter gemischt. Der Gesamtzuckergehalt beträgt $815\,\text{g}$. Außerdem wird von Saft B einen halben Liter mehr als von Saft A verwendet.  
**Berechne** die Literanteile der drei Säfte.



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  7/2  ]] @canvas, $y$ = [[  4  ]] @canvas und $z$ = [[  3/2  ]] @canvas
@Algebrite.check([ 7/2; 4; 3/2 ])
************
Bezeichne mit $x$ die Liter von Saft A, mit $y$ die Liter von Saft B und mit $z$ die Liter von Saft C.
$$
\begin{align*}
I.& \qquad x + y + z = 9 \\
II.& \qquad 120x + 80y + 50z = 815 \\
III.& \qquad y = x + \dfrac{1}{2} \\ \hline
I \cap III:& \qquad x + \left(x + \dfrac{1}{2}\right) + z = 9 \\
& \qquad 2x + z = \dfrac{17}{2} \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 120x + 80\!\left(x + \dfrac{1}{2}\right) + 50z = 815 \\
& \qquad 200x + 50z = 815 - 40 = 775 \quad \left| :25 \right. \\
& \qquad 8x + 2z = 31 \quad \text{(V)} \\ \hline
(V) - 2\cdot(IV):& \qquad (8x + 2z) - (4x + 2z) = 31 - 17 \\
& \qquad 4x = 14 \;\Rightarrow\; x = \dfrac{7}{2} \\[6pt]
III:& \qquad y = x + \dfrac{1}{2} = \dfrac{7}{2} + \dfrac{1}{2} = 4 \\[6pt]
I:& \qquad z = 9 - x - y = 9 - \dfrac{7}{2} - 4 = \dfrac{3}{2}
\end{align*}
$$
Die Anteile betragen $ \dfrac{7}{2}\,\ell$ (Saft A), $4\,\ell$ (Saft B) und $ \dfrac{3}{2}\,\ell$ (Saft C).
************


@ADetails(1=BE; Gleichungssysteme, Bruchrechnung, Sachaufgabe)



