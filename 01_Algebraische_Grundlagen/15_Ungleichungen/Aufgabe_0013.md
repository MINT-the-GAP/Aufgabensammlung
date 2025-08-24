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




tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, mittel, normal, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen




**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 10 \geq 4 - 5x + 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -4  ]]   $\left.   \right\}$
@Algebrite.check(-4)
******************
$$
\begin{align*}
-2x + 10 &\geq 4 - 5x + 2 \\
-2x + 10 &\geq -5x + 6 \quad \left| +5x \right. \\
3x + 10 &\geq 6 \quad \left| -10 \right. \\
3x &\geq -4 \quad \left| :3 \right. \\
x &\geq -\tfrac{4}{3}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 7 < 2x + 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
3x - 7 &< 2x + 5 \quad \left| -2x \right. \\
x - 7 &< 5 \quad \left| +7 \right. \\
x &< 12 \;\;\Rightarrow\;\; x \leq 11 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $4x + 3 > 2x + 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
4x + 3 &> 2x + 9 \quad \left| -2x \right. \\
2x + 3 &> 9 \quad \left| -3 \right. \\
2x &> 6 \quad \left| :2 \right. \\
x &> 3 \;\;\Rightarrow\;\; x \geq 4 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $7 - 2x \leq x + 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
7 - 2x &\leq x + 4 \quad \left| -7 \right. \\
-2x &\leq x - 3 \quad \left| -x \right. \\
-3x &\leq -3 \quad \left| :(-3) \right. \\
x &\geq 1
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $5x - 8 \geq 3x - 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
5x - 8 &\geq 3x - 2 \quad \left| -3x \right. \\
2x - 8 &\geq -2 \quad \left| +8 \right. \\
2x &\geq 6 \quad \left| :2 \right. \\
x &\geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-4x + 5 < 2x - 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-4x + 5 &< 2x - 7 \quad \left| -2x \right. \\
-6x + 5 &< -7 \quad \left| -5 \right. \\
-6x &< -12 \quad \left| :(-6) \right. \\
x &> 2 \;\;\Rightarrow\;\; x \geq 2 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>













