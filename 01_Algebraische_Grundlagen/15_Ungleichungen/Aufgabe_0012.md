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




tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, leicht, normal, Bestimmen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Vorzeichen und Lösungsmengen bei Ungleichungen



**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2x + 10 \geq 4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  3  ]]   $\left.   \right\}$
@Algebrite.check(3)
******************
$$
\begin{align*}
-2x + 10 &\geq 4 \quad \left| -10 \right. \\
-2x &\geq -6 \quad \left| :(-2) \right. \\
x &\leq 3
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $3x - 2 < 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
3x - 2 &< 7 \quad \left| +2 \right. \\
3x &< 9 \quad \left| :3 \right. \\
x &< 3 \;\;\Rightarrow\;\; x \leq 2 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{-5} - 1 \leq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  -15  ]]   $\left.   \right\}$
@Algebrite.check(-15)
******************
$$
\begin{align*}
\frac{x}{-5} - 1 &\leq 2 \quad \left| +1 \right. \\
\frac{x}{-5} &\leq 3 \quad \left| \cdot (-5) \right. \\
x &\geq -15
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-4x - 6 > 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  -3  ]]   $\left.   \right\}$
@Algebrite.check(-3)
******************
$$
\begin{align*}
-4x - 6 &> 2 \quad \left| +6 \right. \\
-4x &> 8 \quad \left| :(-4) \right. \\
x &< -2 \;\;\Rightarrow\;\; x \leq -3 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $5x + 4 \geq -6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
5x + 4 &\geq -6 \quad \left| -4 \right. \\
5x &\geq -10 \quad \left| :5 \right. \\
x &\geq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{x}{3} + 2 > -4$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  -17  ]]   $\left.   \right\}$
@Algebrite.check(-17)
******************
$$
\begin{align*}
\frac{x}{3} + 2 &> -4 \quad \left| -2 \right. \\
\frac{x}{3} &> -6 \quad \left| \cdot 3 \right. \\
x &> -18 \;\;\Rightarrow\;\; x \geq -17 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>











