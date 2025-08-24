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
__$a)\;\;$__ $-3x + 9 \geq 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-3x + 9 &\geq 0 \quad \left| -9 \right. \\
-3x &\geq -9 \quad \left| :(-3) \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 7 \leq -1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
2x - 7 &\leq -1 \quad \left| +7 \right. \\
2x &\leq 6 \quad \left| :2 \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-5x - 10 < 5$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  -3  ]]   $\left.   \right\}$
@Algebrite.check(-3)
******************
$$
\begin{align*}
-5x - 10 &< 5 \quad \left| +10 \right. \\
-5x &< 15 \quad \left| :(-5) \right. \\
x &> -3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $7 - 2x > 3$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
7 - 2x &> 3 \quad \left| -7 \right. \\
-2x &> -4 \quad \left| :(-2) \right. \\
x &< 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $-4x + 2 \geq -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-4x + 2 &\geq -6 \quad \left| -2 \right. \\
-4x &\geq -8 \quad \left| :(-4) \right. \\
x &\leq 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-6x - 12 > 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
-6x - 12 &> 0 \quad \left| +12 \right. \\
-6x &> 12 \quad \left| :(-6) \right. \\
x &< -2
\end{align*}
$$
******************
</div>

</section>






