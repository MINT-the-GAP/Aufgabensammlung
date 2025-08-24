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




tags: Bruchrechnung, Mengen, negative Zahlen, mittel, normal, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen




**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.




<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $2x + 5 > x + 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
2x + 5 &> x + 9 \quad \left| -x \right. \\
x + 5 &> 9 \quad \left| -5 \right. \\
x &> 4 \;\;\Rightarrow\;\; x \geq 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $-3x + 7 \leq 2x - 8$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-3x + 7 &\leq 2x - 8 \quad \left| +3x \right. \\
7 &\leq 5x - 8 \quad \left| +8 \right. \\
15 &\leq 5x \quad \left| :5 \right. \\
3 &\leq x \;\;\Rightarrow\;\; x \geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $4x - 6 < 3x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  8  ]]   $\left.   \right\}$
@Algebrite.check(8)
******************
$$
\begin{align*}
4x - 6 &< 3x + 2 \quad \left| -3x \right. \\
x - 6 &< 2 \quad \left| +6 \right. \\
x &< 8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5x + 4 \geq 2x + 16$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
5x + 4 &\geq 2x + 16 \quad \left| -2x \right. \\
3x + 4 &\geq 16 \quad \left| -4 \right. \\
3x &\geq 12 \quad \left| :3 \right. \\
x &\geq 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $7 - 2x > 5x - 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
7 - 2x &> 5x - 14 \quad \left| -5x \right. \\
7 - 7x &> -14 \quad \left| -7 \right. \\
-7x &> -21 \quad \left| :(-7) \right. \\
x &< 3 \;\;\Rightarrow\;\; x \leq 3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-4x + 9 \leq 3x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
-4x + 9 &\leq 3x + 2 \quad \left| -3x \right. \\
-7x + 9 &\leq 2 \quad \left| -9 \right. \\
-7x &\leq -7 \quad \left| :(-7) \right. \\
x &\geq 1
\end{align*}
$$
******************
</div>
</section>










