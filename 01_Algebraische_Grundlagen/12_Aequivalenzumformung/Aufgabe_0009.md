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













tags: Äquivalenzumformung, leicht, sehr niedrig, Angeben, 

comment: Beschreibe die Äquivalenzumformung durch einen Lückentext.

author: Martin Lommatzsch

-->




# Lückentext zur Äquivalenzumformung


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
Im Folgenden ist eine Äquivalenzumformung dargestellt und das Vorgehen ist in einem Lückentext beschrieben. **Fülle** die Lücken **aus**.




$$
\begin{align*}
  \dfrac{3}{x-2} & = \dfrac{4}{3x+7}    \quad \left|  \cdot (x-2)  \right. \\
  3 & = \dfrac{4}{3x+7} (x-2)    \quad \left|  \cdot (3x+7) \right. \\
  3(3x+7) & = 4 (x-2)      \\
  9x+21 & = 4x-8     \quad \left| -4x \right.     \\
  5x+21 & = -8     \quad \left| -21 \right.     \\
  5x  & = -29     \quad \left| :5 \right.     \\
  x  & = -\dfrac{29}{5}       \\
\end{align*}
$$


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" 
data-show-partial-solution -->
Bei dieser Gleichung steht die gesuchte Unbekannte auf beiden Seiten des Gleichheitszeichen im [[  Nenner  ]] . Um dies aufzuheben wird mit $(x-2)$ und dann mit $(3x+7)$ auf beiden Seiten des Gleichheitszeichen [[  multipliziert  ]] . Die [[  Klammern  ]]  sind dabei wichtig, aufgrund der Regel: Punkt- vor [[  Strichrechnung  ]] . Anschließend wird das [[  Distributivgesetz  ]]  benutzt, um die Klammern aufzulösen. Nun wird die Gleichung mit der Strichrechnung sortiert, indem erst $-4x$ und dann [[  -21  ]]  auf beiden Seiten des Gleichheitszeichen gerechnet wird. Abschließend wird durch den [[  Vorfaktor  ]]  $5$ dividiert.



@ADetails(1=BE; Äquivalenzumformung)








