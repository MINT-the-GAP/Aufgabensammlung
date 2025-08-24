<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}


import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md






tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, Bruchrechnung, Distributivgesetz, schwer, hoch, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen mit Klammern




**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-\dfrac{3}{4}(x-2) + 5 \;\leq\; \dfrac{1}{2}(x+1) + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $ [[ 16/5 ]] $\left. \right\}$
@Algebrite.check(16/5)
******************
$$
\begin{align*}
-\dfrac{3}{4}(x-2) + 5 &\le \dfrac{1}{2}(x+1) + 2 \\
-\dfrac{3}{4}x + \dfrac{3}{2} + 5 &\le \dfrac{1}{2}x + \dfrac{1}{2} + 2 \\
-\dfrac{3}{4}x + \dfrac{13}{2} &\le \dfrac{1}{2}x + \dfrac{5}{2} \quad \left| \; +\dfrac{3}{4}x \; \right. \\
\dfrac{13}{2} &\le \dfrac{5}{4}x + \dfrac{5}{2} \quad \left| \; -\dfrac{5}{2} \; \right. \\
4 &\le \dfrac{5}{4}x \quad \left| \; :\dfrac{5}{4} \; \right. \\
x &\ge \dfrac{16}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{2}{3}(x-6) \;>\; -\dfrac{1}{2}(x-4) + 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $ [[ 7 ]] $\left. \right\}$
@Algebrite.check(7)
******************
$$
\begin{align*}
\dfrac{2}{3}(x-6) &> -\dfrac{1}{2}(x-4) + 1 \\
\dfrac{2}{3}x - 4 &> -\dfrac{1}{2}x + 3 \quad \left| \; +\dfrac{1}{2}x \; \right. \\
\dfrac{7}{6}x - 4 &> 3 \quad \left| \; +4 \; \right. \\
\dfrac{7}{6}x &> 7 \quad \left| \; :\dfrac{7}{6} \; \right. \\
x &> 6 \;\;\Rightarrow\;\; x \ge 7 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-2(x+5) + \dfrac{1}{3}(3x-6) \;\ge\; \dfrac{1}{4}(8-2x) - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $ [[ -26 ]] $\left. \right\}$
@Algebrite.check(-26)
******************
$$
\begin{align*}
-2(x+5) + \dfrac{1}{3}(3x-6) &\ge \dfrac{1}{4}(8-2x) - 1 \\
-2x - 10 + x - 2 &\ge 2 - \dfrac{1}{2}x - 1 \\
-x - 12 &\ge 1 - \dfrac{1}{2}x \quad \left| \; +\dfrac{1}{2}x \; \right. \\
-\dfrac{1}{2}x - 12 &\ge 1 \quad \left| \; +12 \; \right. \\
-\dfrac{1}{2}x &\ge 13 \quad \left| \; :(-\dfrac{1}{2}) \; \right. \\
x &\le -26
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{3}{2}(x-2) - \dfrac{1}{3}(x+3) \;<\; x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $ [[ 20 ]] $\left. \right\}$
@Algebrite.check(20)
******************
$$
\begin{align*}
\dfrac{3}{2}(x-2) - \dfrac{1}{3}(x+3) &< x - \dfrac{1}{2} \\
\dfrac{3}{2}x - 3 - \dfrac{1}{3}x - 1 &< x - \dfrac{1}{2} \\
\dfrac{7}{6}x - 4 &< x - \dfrac{1}{2} \quad \left| \; -x \; \right. \\
-4 &< \left(1-\dfrac{7}{6}\right)x - \dfrac{1}{2} = -\dfrac{1}{6}x - \dfrac{1}{2} \quad \left| \; +\dfrac{1}{2} \; \right. \\
-\dfrac{7}{2} &< -\dfrac{1}{6}x \quad \left| \; \cdot(-6) \; \right. \\
21 &> x \;\;\Rightarrow\;\; x \le 20 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-\dfrac{1}{2}(2x-5) + 3 \;\ge\; \dfrac{3}{4}(x-1) + \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $ [[ 23/7 ]] $\left. \right\}$
@Algebrite.check(23/7)
******************
$$
\begin{align*}
-\dfrac{1}{2}(2x-5) + 3 &\ge \dfrac{3}{4}(x-1) + \dfrac{1}{2} \\
-x + \dfrac{5}{2} + 3 &\ge \dfrac{3}{4}x - \dfrac{3}{4} + \dfrac{1}{2} \\
-x + \dfrac{11}{2} &\ge \dfrac{3}{4}x - \dfrac{1}{4} \quad \left| \; +x \; \right. \\
\dfrac{11}{2} &\ge \dfrac{7}{4}x - \dfrac{1}{4} \quad \left| \; +\dfrac{1}{4} \; \right. \\
\dfrac{23}{4} &\ge \dfrac{7}{4}x \quad \left| \; :\dfrac{7}{4} \; \right. \\
\dfrac{23}{7} &\ge x \;\;\Rightarrow\;\; x \le \dfrac{23}{7}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $4\!\left(x+\dfrac{1}{2}\right) - \dfrac{2}{3}(3x-1) \;>\; -x + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $ [[ 1 ]] $\left. \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
4\!\left(x+\dfrac{1}{2}\right) - \dfrac{2}{3}(3x-1) &> -x + 5 \\
4x + 2 - 2x + \dfrac{2}{3} &> -x + 5 \\
2x + \dfrac{8}{3} &> -x + 5 \quad \left| \; +x \; \right. \\
3x + \dfrac{8}{3} &> 5 \quad \left| \; -\dfrac{8}{3} \; \right. \\
3x &> \dfrac{7}{3} \quad \left| \; :3 \; \right. \\
x &> \dfrac{7}{9} \;\;\Rightarrow\;\; x \ge 1 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>
</section>












