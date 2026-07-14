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
__$a)\;\;$__ $\dfrac{1}{3}x + 1 \leq \dfrac{3}{5}x + \dfrac{2}{3}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  5/4  ]] @canvas   $\left.   \right\}$
@Algebrite.check(5/4)
******************
$$
\begin{align*}
\dfrac{1}{3}x + 1 &\leq \dfrac{3}{5}x + \dfrac{2}{3} \quad \left| -\dfrac{1}{3}x \right. \\
1 &\leq \left(\dfrac{3}{5}-\dfrac{1}{3}\right)x + \dfrac{2}{3} = \dfrac{4}{15}x + \dfrac{2}{3} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{1}{3} &\leq \dfrac{4}{15}x \quad \left| :\dfrac{4}{15} \right. \\
x &\geq \dfrac{5}{4}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{2}{3}x - \dfrac{5}{3} > \dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  3  ]] @canvas   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
\dfrac{2}{3}x - \dfrac{5}{3} &> \dfrac{1}{6}x - \dfrac{1}{2} \quad \left| -\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x - \dfrac{5}{3} &> -\dfrac{1}{2} \quad \left| +\dfrac{5}{3} \right. \\
\dfrac{1}{2}x &> \dfrac{7}{6} \quad \left| \cdot 2 \right. \\
x &> \dfrac{7}{3} \;\;\Rightarrow\;\; x \ge 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$c)\;\;$__ $-\dfrac{3}{4}x + 2 \leq \dfrac{1}{2}x - \dfrac{1}{4}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  9/5  ]] @canvas   $\left.   \right\}$
@Algebrite.check(9/5)
******************
$$
\begin{align*}
-\dfrac{3}{4}x + 2 &\leq \dfrac{1}{2}x - \dfrac{1}{4} \quad \left| -\dfrac{1}{2}x \right. \\
-\dfrac{5}{4}x + 2 &\leq -\dfrac{1}{4} \quad \left| -2 \right. \\
-\dfrac{5}{4}x &\leq -\dfrac{9}{4} \quad \left| :\left(-\dfrac{5}{4}\right) \right. \\
x &\geq \dfrac{9}{5}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$d)\;\;$__ $-x + \dfrac{7}{2} < \dfrac{1}{3}x + 2$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  2  ]] @canvas   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-x + \dfrac{7}{2} &< \dfrac{1}{3}x + 2 \quad \left| +x \right. \\
\dfrac{7}{2} &< \dfrac{4}{3}x + 2 \quad \left| -2 \right. \\
\dfrac{3}{2} &< \dfrac{4}{3}x \quad \left| :\dfrac{4}{3} \right. \\
x &> \dfrac{9}{8} \;\;\Rightarrow\;\; x \ge 2 \text{ für } \mathbb{N}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{1}{2}x - 1 \geq \dfrac{3}{4}x - \dfrac{5}{2}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  6  ]] @canvas   $\left.   \right\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
\dfrac{1}{2}x - 1 &\geq \dfrac{3}{4}x - \dfrac{5}{2} \quad \left| -\dfrac{1}{2}x \right. \\
-1 &\geq \dfrac{1}{4}x - \dfrac{5}{2} \quad \left| +\dfrac{5}{2} \right. \\
\dfrac{3}{2} &\geq \dfrac{1}{4}x \quad \left| :\dfrac{1}{4} \right. \\
6 &\geq x \;\;\Rightarrow\;\; x \le 6
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>

<div class="flex-child">
__$f)\;\;$__ $-\dfrac{5}{6}x + \dfrac{1}{3} > \dfrac{1}{6}x - \dfrac{2}{3}$ 

<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3" -->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  0  ]] @canvas   $\left.   \right\}$
@Algebrite.check(0)
******************
$$
\begin{align*}
-\dfrac{5}{6}x + \dfrac{1}{3} &> \dfrac{1}{6}x - \dfrac{2}{3} \quad \left| -\dfrac{1}{6}x \right. \\
- x + \dfrac{1}{3} &> -\dfrac{2}{3} \quad \left| -\dfrac{1}{3} \right. \\
- x &> -1 \quad \left| :(-1) \right. \\
x &< 1 \;\;\Rightarrow\;\; x \le 0 \text{ für } \mathbb{Z}
\end{align*}
$$
******************


@ADetails(1=BE; Ungleichung, Mengen, Bruchrechnung)
</div>
</section>










