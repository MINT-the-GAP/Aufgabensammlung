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



tags: Bruchrechnung, Mengen, leicht, niedrig, Bestimmen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen?

author: Martin Lommatzsch

-->




# Lösungsmengen von Ungleichungen







**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $2x + 6 \leq 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
2x + 6 &\leq 20 \quad \left| -6 \right. \\
2x &\leq 14 \quad \left| :2 \right. \\
x &\leq 7
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 4 < 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
3x - 4 &< 14 \quad \left| +4 \right. \\
3x &< 18 \quad \left| :3 \right. \\
x &< 6 \;\;\Rightarrow\;\; x \le 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{4} + 5 \geq 11$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  24  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{4} + 5 &\ge 11 \quad \left| -5 \right. \\
\frac{x}{4} &\ge 6 \quad \left| \cdot 4 \right. \\
x &\ge 24
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5x + 3 > 28$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  6  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
5x + 3 &> 28 \quad \left| -3 \right. \\
5x &> 25 \quad \left| :5 \right. \\
x &> 5 \;\;\Rightarrow\;\; x \ge 6 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{x}{3} + 2 \leq 13$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  33  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{3} + 2 &\le 13 \quad \left| -2 \right. \\
\frac{x}{3} &\le 11 \quad \left| \cdot 3 \right. \\
x &\le 33
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $6x - 6 > 30$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
6x - 6 &> 30 \quad \left| +6 \right. \\
6x &> 36 \quad \left| :6 \right. \\
x &> 6 \;\;\Rightarrow\;\; x \ge 7 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>


</section>








