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











tags: Gleichungssysteme, sehr leicht, sehr niedrig, Angeben

comment: Gib die Lösungsverfahren an, die am jeweiligen Beispiel präsentiert wurde.

author: Martin Lommatzsch

-->




# Verfahrensbestimmung zum Lösen von Gleichungssystemen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** das verwendete Lösungsverfahren **an**.




__$a)\;\;$__ 
$$
\begin{align*}
I.& \qquad 3x + y = 16 \\  
II.& \qquad x + 4y = 9   \\ \hline
I. &\qquad 3x + y = 16 \quad \left| -3x \right. \\
&\qquad y = 16 - 3x \\ \hline
I. \cap II. &\qquad x + 4(16 - 3x) = 9 \\
&\qquad x + 64 - 12x = 9 \\
&\qquad -11x + 64 = 9 \quad \left| -64 \right. \\
&\qquad -11x = -55 \quad \left| :(-11) \right. \\
&\qquad x = 5 \\
x \cap I. &\qquad 3\cdot 5 + y = 16 \\
&\qquad 15 + y = 16 \quad \left| -15 \right. \\
&\qquad y = 1
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]

@ADetails(1=BE; Gleichungssysteme)


$$
\begin{align*}
I.& \qquad 5x + 2y = 20 \\
II.& \qquad 2x + 3y = 19 \\ \hline
I.& \qquad 5x + 2y = 20 \quad \left|\cdot 3 \right. \\
& \qquad 15x + 6y = 60 \\
II.& \qquad 2x + 3y = 19 \quad \left|\cdot 2 \right. \\
& \qquad 4x + 6y = 38 \\ \hline
(I.-II.)& \qquad (15x-4x) + (6y-6y) = 60-38 \\
& \qquad 11x = 22 \quad \left| :11 \right. \\
& \qquad x = 2 \\
x \text{ in } II.& \qquad 2\cdot 2 + 3y = 19 \\
& \qquad 4 + 3y = 19 \quad \left| -4 \right. \\
& \qquad 3y = 15 \quad \left| :3 \right. \\
& \qquad y = 5
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]

@ADetails(1=BE; Gleichungssysteme)


__$c)\;\;$__ 
$$
\begin{align*}
I. &\qquad 5x + 2y = 26 \quad \left| -5x \right. \\
II.&\qquad 3x - y = 9 \quad \left| -3x \right. \\ \hline
I. &\qquad 2y = 26 - 5x \quad \left| :2 \right. \\
I. &\qquad y = \dfrac{26 - 5x}{2} \\
II.&\qquad -y = 9 - 3x \quad \left| \cdot(-1) \right. \\
II.&\qquad y = 3x - 9 \\[4pt]
I. \cap II. &\qquad \dfrac{26 - 5x}{2} = 3x - 9 \\
&\qquad 26 - 5x = 6x - 18 \\
&\qquad 26 + 18 = 6x + 5x \\
&\qquad 44 = 11x \quad \left| :11 \right. \\
&\qquad x = 4 \\
x \cap II. &\qquad 3\cdot 4 - y = 9 \\
&\qquad 12 - y = 9 \quad \left| -12 \right. \\
&\qquad -y = -3 \quad \left| \cdot(-1) \right. \\
&\qquad y = 3
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]

@ADetails(1=BE; Gleichungssysteme)


__$d)\;\;$__ 
$$
\begin{align*}
I. &\qquad 3x + y = 11 \quad \left| -3x \right. \\
II.&\qquad 2x + 3y = 19 \quad \left| -2x \right. \\ \hline
I. &\qquad y = 11 - 3x \\
II.&\qquad 3y = 19 - 2x \quad \left| :3 \right. \\
II.&\qquad y = \dfrac{19 - 2x}{3} \\[4pt]
I. \cap II. &\qquad 11 - 3x = \dfrac{19 - 2x}{3} \\
&\qquad 3(11 - 3x) = 19 - 2x \\
&\qquad 33 - 9x = 19 - 2x \quad \left| -19 \right. \\
&\qquad 14 - 9x = -2x \quad \left| +9x \right. \\
&\qquad 14 = 7x \quad \left| :7 \right. \\
&\qquad x = 2 \\
x \cap I. &\qquad 3\cdot 2 + y = 11 \\
&\qquad 6 + y = 11 \quad \left| -6 \right. \\
&\qquad y = 5
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[Einsetzungsverfahren|(Gleichsetzungsverfahren)|Additionsverfahren]]

@ADetails(1=BE; Gleichungssysteme)


__$e)\;\;$__ 
$$
\begin{align*}
I.& \qquad 2x + y = 10 \\  
II.& \qquad x + 3y = 15   \\ \hline
II. &\qquad x + 3y = 15 \quad \left| -3y \right. \\
&\qquad x = 15 - 3y \\ \hline
I. \cap II. &\qquad 2(15 - 3y) + y = 10 \\
&\qquad 30 - 6y + y = 10 \\
&\qquad -5y = -20 \quad \left| :(-5) \right. \\
&\qquad y = 4 \\
y \cap II. &\qquad x + 3\cdot 4 = 15 \\
&\qquad x + 12 = 15 \quad \left| -12 \right. \\
&\qquad x = 3
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[(Einsetzungsverfahren)|Gleichsetzungsverfahren|Additionsverfahren]]

@ADetails(1=BE; Gleichungssysteme)


__$f)\;\;$__ 
$$
\begin{align*}
I.& \qquad x + 4y = 22 \quad \left|\cdot 2 \right. \\
& \qquad 2x + 8y = 44 \\
II.& \qquad 2x + 3y = 19 \\ \hline
(I.-II.)& \qquad (2x-2x) + (8y-3y) = 44-19 \\
& \qquad 5y = 25 \quad \left| :5 \right. \\
& \qquad y = 5 \\
y \cap I.& \qquad x + 4\cdot 5 = 22 \\
& \qquad x + 20 = 22 \quad \left| -20 \right. \\
& \qquad x = 2
\end{align*}
$$



<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
[[Einsetzungsverfahren|Gleichsetzungsverfahren|(Additionsverfahren)]]

@ADetails(1=BE; Gleichungssysteme)
