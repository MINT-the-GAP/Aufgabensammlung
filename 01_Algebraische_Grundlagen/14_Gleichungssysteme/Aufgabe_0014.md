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
















tags: Gleichungssysteme, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen

comment: Löse Gleichungssysteme mit rationalen Zahlen.

author: Martin Lommatzsch

-->




# Gleichungssysteme lösen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** die Lösungen des gegebenen Gleichungssystems.



<section class="dynFlex">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 2x + 3y = 7 \\  
II.& \qquad 5x - y = 4  
\end{align*}
$$  
$x$ = [[  19/17  ]] @canvas und  $y$ = [[  27/17  ]] @canvas 
@Algebrite.check([ 19/17; 27/17 ])
************

$$
\begin{align*}
I.& \qquad 2x + 3y = 7 \\  
II.& \qquad 5x - y = 4  \\ \hline
II.& \qquad 5x - y = 4 \quad \left| -5x \right. \\
& \qquad -y = 4 - 5x \quad \left| \cdot(-1) \right. \\
& \qquad y = 5x - 4 \\ \hline
I. \cap II.& \qquad 2x + 3(5x - 4) = 7 \\
& \qquad 2x + 15x - 12 = 7 \\
& \qquad 17x - 12 = 7 \quad \left| +12 \right. \\
& \qquad 17x = 19 \quad \left| :17 \right. \\
& \qquad x = \dfrac{19}{17} \\[6pt]
x \cap II.& \qquad y = 5\cdot \dfrac{19}{17} - 4 \\
& \qquad y = \dfrac{95}{17} - \dfrac{68}{17} \\
& \qquad y = \dfrac{27}{17}
\end{align*}
$$

************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 3x - 2y = 1 \\  
II.& \qquad 4x + y = 7  
\end{align*}
$$  
$x$ = [[  15/11  ]] @canvas und  $y$ = [[  17/11  ]] @canvas 
@Algebrite.check([ 15/11; 17/11 ])
************

$$
\begin{align*}
I.& \qquad 3x - 2y = 1 \\  
II.& \qquad 4x + y = 7  \\ \hline
II.& \qquad 4x + y = 7 \quad \left| -4x \right. \\
& \qquad y = 7 - 4x \\ \hline
I. \cap II.& \qquad 3x - 2(7 - 4x) = 1 \\
& \qquad 3x - 14 + 8x = 1 \\
& \qquad 11x - 14 = 1 \quad \left| +14 \right. \\
& \qquad 11x = 15 \quad \left| :11 \right. \\
& \qquad x = \dfrac{15}{11} \\[6pt]
x \cap II.& \qquad y = 7 - 4\cdot \dfrac{15}{11} \\
& \qquad y = \dfrac{77}{11} - \dfrac{60}{11} \\
& \qquad y = \dfrac{17}{11}
\end{align*}
$$

************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 5x + 2y = 8 \\  
II.& \qquad 3x - y = 2  
\end{align*}
$$  
$x$ = [[  12/11  ]] @canvas und  $y$ = [[  14/11  ]] @canvas 
@Algebrite.check([ 12/11; 14/11 ])
************

$$
\begin{align*}
I.& \qquad 5x + 2y = 8 \\  
II.& \qquad 3x - y = 2  \\ \hline
II.& \qquad 3x - y = 2 \quad \left| -3x \right. \\
& \qquad -y = 2 - 3x \quad \left| \cdot(-1) \right. \\
& \qquad y = 3x - 2 \\ \hline
I. \cap II.& \qquad 5x + 2(3x - 2) = 8 \\
& \qquad 5x + 6x - 4 = 8 \\
& \qquad 11x - 4 = 8 \quad \left| +4 \right. \\
& \qquad 11x = 12 \quad \left| :11 \right. \\
& \qquad x = \dfrac{12}{11} \\[6pt]
x \cap II.& \qquad y = 3\cdot \dfrac{12}{11} - 2 \\
& \qquad y = \dfrac{36}{11} - \dfrac{22}{11} \\
& \qquad y = \dfrac{14}{11}
\end{align*}
$$

************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 7x - 3y = 5 \\  
II.& \qquad 2x + y = 4  
\end{align*}
$$  
$x$ = [[  17/13  ]] @canvas und  $y$ = [[  18/13  ]] @canvas 
@Algebrite.check([ 17/13; 18/13 ])
************

$$
\begin{align*}
I.& \qquad 7x - 3y = 5 \\  
II.& \qquad 2x + y = 4  \\ \hline
II.& \qquad 2x + y = 4 \quad \left| -2x \right. \\
& \qquad y = 4 - 2x \\ \hline
I. \cap II.& \qquad 7x - 3(4 - 2x) = 5 \\
& \qquad 7x - 12 + 6x = 5 \\
& \qquad 13x - 12 = 5 \quad \left| +12 \right. \\
& \qquad 13x = 17 \quad \left| :13 \right. \\
& \qquad x = \dfrac{17}{13} \\[6pt]
x \cap II.& \qquad y = 4 - 2\cdot \dfrac{17}{13} \\
& \qquad y = \dfrac{52}{13} - \dfrac{34}{13} \\
& \qquad y = \dfrac{18}{13}
\end{align*}
$$

************
</div>


</section>






