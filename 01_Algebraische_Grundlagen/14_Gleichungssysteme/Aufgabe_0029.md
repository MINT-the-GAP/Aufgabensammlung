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















tags: Gleichungssysteme, Sachaufgabe, mittel, niedrig, Berechnen

comment: Löse eine Sachaufgabe zu Stühlen im Klassenzimmer mittels der Gleichungssysteme.

author: Martin Lommatzsch

-->




# Textaufgabe Gleichungssysteme - Stühle im Klassenzimmer


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
In einem Klassenzimmer sind Stühle aus Holz, Kunststoff und Metall aufgestellt. Insgesamt gibt es 36 Stühle. Die Holzstühle wiegen jeweils 5 kg, die Kunststoffstühle 3 kg und die Metallstühle 7 kg. Zusammen beträgt das Gewicht aller Stühle 164 kg. Außerdem sind doppelt so viele Kunststoffstühle vorhanden wie Metallstühle.  
**Berechne** die Anzahl der Holz-, Kunststoff- und Metallstühle.




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
$x$ = [[  12  ]] @canvas, $y$ = [[  16  ]] @canvas und $z$ = [[  8  ]] @canvas
@Algebrite.check([ 12; 16; 8 ])
************

Bezeichne mit $x$ die Anzahl der Holzstühle, mit $y$ die Anzahl der Kunststoffstühle und mit $z$ die Anzahl der Metallstühle.

$$
\begin{align*}
I.& \qquad x + y + z = 36 \\
II.& \qquad 5x + 3y + 7z = 164 \\
III.& \qquad y = 2z \\ \hline
I \cap III:& \qquad x + 2z + z = 36 \\
& \qquad x + 3z = 36 \quad \text{(IV)} \\[6pt]
II \cap III:& \qquad 5x + 3(2z) + 7z = 164 \\
& \qquad 5x + 6z + 7z = 164 \\
& \qquad 5x + 13z = 164 \quad \text{(V)} \\ \hline
\text{Aus (IV):}& \qquad x = 36 - 3z \\[6pt]
\text{In (V):}& \qquad 5(36 - 3z) + 13z = 164 \\
& \qquad 180 - 15z + 13z = 164 \\
& \qquad 180 - 2z = 164 \quad \left| -180 \right. \\
& \qquad -2z = -16 \quad \left| :(-2) \right. \\
& \qquad z = 8 \\[6pt]
z \text{ in } III:& \qquad y = 2 \cdot 8 \\
& \qquad y = 16 \\[6pt]
y,z \text{ in } I:& \qquad x + 16 + 8 = 36 \\
& \qquad x + 24 = 36 \quad \left| -24 \right. \\
& \qquad x = 12
\end{align*}
$$

Es gibt also $12$ Holzstühle, $16$ Kunststoffstühle und $8$ Metallstühle.

************


@ADetails(1=BE; Gleichungssysteme, Sachaufgabe)





