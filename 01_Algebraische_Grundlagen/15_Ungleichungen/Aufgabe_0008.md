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

















tags: Ungleichungen, Bruchrechnung, Mengen, leicht, niedrig, Bestimmen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen?

author: Martin Lommatzsch

-->




# Lösungsmengen von Ungleichungen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.








<section class="dynFlex">
<div class="flex-child">
__$a)\;\;$__ $3x + 9 \leq 30$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  7  ]] @canvas   $\left.   \right\}$
@Algebrite.check(7)
******************
$$
\begin{align*}
3x + 9 &\le 30 \quad \left| -9 \right. \\
3x &\le 21 \quad \left| :3 \right. \\
x &\le 7
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{x}{2} + 4 > 12$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  17  ]] @canvas   $\left.   \right\}$
@Algebrite.check(17)
******************
$$
\begin{align*}
\frac{x}{2} + 4 &> 12 \quad \left| -4 \right. \\
\frac{x}{2} &> 8 \quad \left| \cdot 2 \right. \\
x &> 16 \;\;\Rightarrow\;\; x \ge 17 \text{ für } \mathbb{N}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$c)\;\;$__ $5x - 5 \geq 20$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  5  ]] @canvas   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
5x - 5 &\ge 20 \quad \left| +5 \right. \\
5x &\ge 25 \quad \left| :5 \right. \\
x &\ge 5
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{x}{6} + 3 < 10$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  41  ]] @canvas   $\left.   \right\}$
@Algebrite.check(41)
******************
$$
\begin{align*}
\frac{x}{6} + 3 &< 10 \quad \left| -3 \right. \\
\frac{x}{6} &< 7 \quad \left| \cdot 6 \right. \\
x &< 42 \;\;\Rightarrow\;\; x \le 41 \text{ für } \mathbb{N}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$e)\;\;$__ $4x + 2 \geq 18$ 


<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  4  ]] @canvas   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
4x + 2 &\ge 18 \quad \left| -2 \right. \\
4x &\ge 16 \quad \left| :4 \right. \\
x &\ge 4
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$f)\;\;$__ $6x - 12 < 24$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  5  ]] @canvas   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
6x - 12 &< 24 \quad \left| +12 \right. \\
6x &< 36 \quad \left| :6 \right. \\
x &< 6 \;\;\Rightarrow\;\; x \le 5 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

</section>



