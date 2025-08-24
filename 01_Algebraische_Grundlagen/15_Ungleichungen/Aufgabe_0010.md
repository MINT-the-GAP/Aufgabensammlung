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



tags: Bruchrechnung, negative Zahlen, leicht, niedrig, Angeben

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Vorzeichen.

author: Martin Lommatzsch

-->




# Vorzeichen und Ungleichungen



**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 4 < -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
-2x + 4 &< -6 \quad \left| -4 \right. \\
-2x &< -10 \quad \left| :(-2) \right. \\
x &> 5
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 12 \geq -3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
3x - 12 &\geq -3 \quad \left| +12 \right. \\
3x &\geq 9 \quad \left| :3 \right. \\
x &\geq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-4x - 2 \geq 6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
-4x - 2 &\geq 6 \quad \left| +2 \right. \\
-4x &\geq 8 \quad \left| :(-4) \right. \\
x &\leq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $5 - x < 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
5 - x &< 1 \quad \left| -5 \right. \\
-x &< -4 \quad \left| :(-1) \right. \\
x &> 4
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{x}{-2} + 7 > 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  -8  ]]   $\left.   \right\}$
@Algebrite.check(-8)
******************
$$
\begin{align*}
\frac{x}{-2} + 7 &> 3 \quad \left| -7 \right. \\
\frac{x}{-2} &> -4 \quad \left| \cdot (-2) \right. \\
x &< -8
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-6x + 9 \leq -3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-6x + 9 &\leq -3 \quad \left| -9 \right. \\
-6x &\leq -12 \quad \left| :(-6) \right. \\
x &\geq 2
\end{align*}
$$
******************
</div>
</section>







