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
__$a)\;\;$__ $3x + 9 \leq 30$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
3x + 9 &\le 30 \quad \left| -9 \right. \\
3x &\le 21 \quad \left| :3 \right. \\
x &\le 7
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{x}{2} + 4 > 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  17  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{2} + 4 &> 12 \quad \left| -4 \right. \\
\frac{x}{2} &> 8 \quad \left| \cdot 2 \right. \\
x &> 16 \;\;\Rightarrow\;\; x \ge 17 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $5x - 5 \geq 20$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
5x - 5 &\ge 20 \quad \left| +5 \right. \\
5x &\ge 25 \quad \left| :5 \right. \\
x &\ge 5
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\dfrac{x}{6} + 3 < 10$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  41  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
\frac{x}{6} + 3 &< 10 \quad \left| -3 \right. \\
\frac{x}{6} &< 7 \quad \left| \cdot 6 \right. \\
x &< 42 \;\;\Rightarrow\;\; x \le 41 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $4x + 2 \geq 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  4  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
4x + 2 &\ge 18 \quad \left| -2 \right. \\
4x &\ge 16 \quad \left| :4 \right. \\
x &\ge 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $6x - 12 < 24$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  5  ]]   $\left.   \right\}$
******************
$$
\begin{align*}
6x - 12 &< 24 \quad \left| +12 \right. \\
6x &< 36 \quad \left| :6 \right. \\
x &< 6 \;\;\Rightarrow\;\; x \le 5 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

</section>



