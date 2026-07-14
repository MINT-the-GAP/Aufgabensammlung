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

















tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, Bruchrechnung, mittel, normal, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen




<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/3.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.




<section class="dynFlex">
<div class="flex-child">
__$a)\;\;$__ $\dfrac{5}{6}x - 1 > \dfrac{1}{2}x + \dfrac{1}{2}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x > $   [[  9/2  ]] @canvas   $\left.   \right\}$
@Algebrite.check(9/2)
******************
$$
\begin{align*}
\dfrac{5}{6}x - 1 &> \dfrac{1}{2}x + \dfrac{1}{2} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{3}x - 1 &> \dfrac{1}{2} \quad \left| +1 \right. \\
\dfrac{1}{3}x &> \dfrac{3}{2} \quad \left| \cdot 3 \right. \\
x &> \dfrac{9}{2}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 1 < x + \dfrac{5}{2}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  3  ]] @canvas   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
2x - 1 &< x + \dfrac{5}{2} \quad \left| -x \right. \\
x - 1 &< \dfrac{5}{2} \quad \left| +1 \right. \\
x &< \dfrac{7}{2} \;\;\Rightarrow\;\; x \leq 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$c)\;\;$__ $-\,\dfrac{3}{2}x + 4 \geq \dfrac{1}{2}x - 1$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  5/2  ]] @canvas   $\left.   \right\}$
@Algebrite.check(5/2)
******************
$$
\begin{align*}
-\,\dfrac{3}{2}x + 4 &\geq \dfrac{1}{2}x - 1 \quad \left| -\dfrac{1}{2}x \right. \\
-2x + 4 &\geq -1 \quad \left| -4 \right. \\
-2x &\geq -5 \quad \left| :(-2) \right. \\
x &\leq \dfrac{5}{2}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{2}{3}x - 1 > \dfrac{1}{2}x - \dfrac{1}{4}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]] @canvas   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
\dfrac{2}{3}x - 1 &> \dfrac{1}{2}x - \dfrac{1}{4} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{6}x - 1 &> -\dfrac{1}{4} \quad \left| +1 \right. \\
\dfrac{1}{6}x &> \dfrac{3}{4} \quad \left| \cdot 6 \right. \\
x &> \dfrac{9}{2} \;\;\Rightarrow\;\; x \geq 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$e)\;\;$__ $3x - 4 > 2x + \dfrac{7}{2}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  8  ]] @canvas   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
3x - 4 &> 2x + \dfrac{7}{2} \quad \left| -2x \right. \\
x - 4 &> \dfrac{7}{2} \quad \left| +4 \right. \\
x &> \dfrac{15}{2} \;\;\Rightarrow\;\; x \geq 8 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{1}{2}x + 1 \leq -x + \dfrac{4}{3}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  2/9  ]] @canvas   $\left.   \right\}$
@Algebrite.check(2/9)
******************
$$
\begin{align*}
\dfrac{1}{2}x + 1 &\leq -x + \dfrac{4}{3} \quad \left| +x \right. \\
\dfrac{3}{2}x + 1 &\leq \dfrac{4}{3} \quad \left| -1 \right. \\
\dfrac{3}{2}x &\leq \dfrac{1}{3} \quad \left| :\dfrac{3}{2} \right. \\
x &\leq \dfrac{2}{9}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>
</section>









