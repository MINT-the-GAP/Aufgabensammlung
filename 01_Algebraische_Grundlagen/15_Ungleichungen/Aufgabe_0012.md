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


















tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, leicht, normal, Bestimmen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Vorzeichen und Lösungsmengen bei Ungleichungen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="dynFlex">
<div class="flex-child">
__$a)\;\;$__ $-2x + 10 \geq 4$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]] @canvas   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-2x + 10 &\geq 4 \quad \left| -10 \right. \\
-2x &\geq -6 \quad \left| :(-2) \right. \\
x &\leq 3
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 2 < 7$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  2  ]] @canvas   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
3x - 2 &< 7 \quad \left| +2 \right. \\
3x &< 9 \quad \left| :3 \right. \\
x &< 3 \;\;\Rightarrow\;\; x \leq 2 \text{ für } \mathbb{N}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{-5} - 1 \leq 2$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  -15  ]] @canvas   $\left.   \right\}$
@Algebrite.check(-15)
******************
$$
\begin{align*}
\frac{x}{-5} - 1 &\leq 2 \quad \left| +1 \right. \\
\frac{x}{-5} &\leq 3 \quad \left| \cdot (-5) \right. \\
x &\geq -15
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$d)\;\;$__ $-4x - 6 > 2$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  -3  ]] @canvas   $\left.   \right\}$
@Algebrite.check(-3)
******************
$$
\begin{align*}
-4x - 6 &> 2 \quad \left| +6 \right. \\
-4x &> 8 \quad \left| :(-4) \right. \\
x &< -2 \;\;\Rightarrow\;\; x \leq -3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$e)\;\;$__ $5x + 4 \geq -6$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -2  ]] @canvas   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
5x + 4 &\geq -6 \quad \left| -4 \right. \\
5x &\geq -10 \quad \left| :5 \right. \\
x &\geq -2
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{x}{3} + 2 > -4$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  -17  ]] @canvas   $\left.   \right\}$
@Algebrite.check(-17)
******************
$$
\begin{align*}
\frac{x}{3} + 2 &> -4 \quad \left| -2 \right. \\
\frac{x}{3} &> -6 \quad \left| \cdot 3 \right. \\
x &> -18 \;\;\Rightarrow\;\; x \geq -17 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen)
</div>
</section>











