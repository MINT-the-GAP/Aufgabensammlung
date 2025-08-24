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






tags: Bruchrechnung, Mengen, negative Zahlen, Bruchrechnung, Distributivgesetz, schwer, hoch, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen mit Klammern




**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-\dfrac{3}{2}(x-4) + 1 > \dfrac{1}{3}(x+5) - 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
-\dfrac{3}{2}(x-4) + 1 &> \dfrac{1}{3}(x+5) - 2 \\
-\dfrac{3}{2}x + 6 + 1 &> \dfrac{1}{3}x + \dfrac{5}{3} - 2 \\
-\dfrac{3}{2}x + 7 &> \dfrac{1}{3}x - \dfrac{1}{3} \quad \left| +\dfrac{3}{2}x \right. \\
7 &> \dfrac{11}{6}x - \dfrac{1}{3} \quad \left| +\dfrac{1}{3} \right. \\
\dfrac{22}{3} &> \dfrac{11}{6}x \quad \left| :\dfrac{11}{6} \right. \\
4 &> x \;\;\Rightarrow\;\; x < 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{5}{4}(x+2) \leq x + \dfrac{9}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
\dfrac{5}{4}(x+2) &\le x + \dfrac{9}{2} \\
\dfrac{5}{4}x + \dfrac{5}{2} &\le x + \dfrac{9}{2} \quad \left| -x \right. \\
\dfrac{1}{4}x + \dfrac{5}{2} &\le \dfrac{9}{2} \quad \left| -\dfrac{5}{2} \right. \\
\dfrac{1}{4}x &\le 2 \quad \left| \cdot 4 \right. \\
x &\le 8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-2\!\left(x-\dfrac{3}{2}\right) + \dfrac{1}{2} \;\ge\; \dfrac{1}{2}(x-1) - 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  14/5  ]]   $\left.   \right\}$
@Algebrite.check(14/5)
******************
$$
\begin{align*}
-2\!\left(x-\dfrac{3}{2}\right) + \dfrac{1}{2} &\ge \dfrac{1}{2}(x-1) - 3 \\
-2x + 3 + \dfrac{1}{2} &\ge \dfrac{1}{2}x - \dfrac{1}{2} - 3 \\
-2x + \dfrac{7}{2} &\ge \dfrac{1}{2}x - \dfrac{7}{2} \quad \left| +2x \right. \\
\dfrac{7}{2} &\ge \dfrac{5}{2}x - \dfrac{7}{2} \quad \left| +\dfrac{7}{2} \right. \\
7 &\ge \dfrac{5}{2}x \quad \left| :\dfrac{5}{2} \right. \\
\dfrac{14}{5} &\ge x \;\;\Rightarrow\;\; x \le \dfrac{14}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{3}{2}(x-4) - \dfrac{1}{3}x \;>\; -\dfrac{1}{6}(2x-3) + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
\dfrac{3}{2}(x-4) - \dfrac{1}{3}x &> -\dfrac{1}{6}(2x-3) + 5 \\
\dfrac{3}{2}x - 6 - \dfrac{1}{3}x &> -\dfrac{1}{3}x + \dfrac{1}{2} + 5 \\
\dfrac{7}{6}x - 6 &> -\dfrac{1}{3}x + \dfrac{11}{2} \quad \left| +\dfrac{1}{3}x \right. \\
\dfrac{3}{2}x - 6 &> \dfrac{11}{2} \quad \left| +6 \right. \\
\dfrac{3}{2}x &> \dfrac{23}{2} \quad \left| :\dfrac{3}{2} \right. \\
x &> \dfrac{23}{3} \;\;\Rightarrow\;\; x \ge 8 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-\,\dfrac{2}{3}(x+6) + \dfrac{5}{3} \;\le\; \dfrac{1}{2}(3x-2) - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  -2/13  ]]   $\left.   \right\}$
@Algebrite.check(-2/13)
******************
$$
\begin{align*}
-\dfrac{2}{3}(x+6) + \dfrac{5}{3} &\le \dfrac{1}{2}(3x-2) - 1 \\
-\dfrac{2}{3}x - 4 + \dfrac{5}{3} &\le \dfrac{3}{2}x - 2 \\
-\dfrac{2}{3}x - \dfrac{7}{3} &\le \dfrac{3}{2}x - 2 \quad \left| +\dfrac{2}{3}x \right. \\
-\dfrac{7}{3} &\le \left(\dfrac{3}{2}+\dfrac{2}{3}\right)x - 2 = \dfrac{13}{6}x - 2 \quad \left| +2 \right. \\
-\dfrac{1}{3} &\le \dfrac{13}{6}x \quad \left| \cdot \dfrac{6}{13} \right. \\
-\dfrac{2}{13} &\le x \;\;\Rightarrow\;\; x \ge -\dfrac{2}{13}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{4}{3}(x-1) \;>\; \dfrac{2}{3}x + \dfrac{1}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
\dfrac{4}{3}(x-1) &> \dfrac{2}{3}x + \dfrac{1}{3} \\
\dfrac{4}{3}x - \dfrac{4}{3} &> \dfrac{2}{3}x + \dfrac{1}{3} \quad \left| -\dfrac{2}{3}x \right. \\
\dfrac{2}{3}x - \dfrac{4}{3} &> \dfrac{1}{3} \quad \left| +\dfrac{4}{3} \right. \\
\dfrac{2}{3}x &> \dfrac{5}{3} \quad \left| \cdot \dfrac{3}{2} \right. \\
x &> \dfrac{5}{2} \;\;\Rightarrow\;\; x \ge 3 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>
</section>












