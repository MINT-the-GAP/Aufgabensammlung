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



tags: Bruchrechnung, Mengen, negative Zahlen, leicht, normal, Bestimmen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Vorzeichen und Lösungsmengen bei Ungleichungen




**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.



**Bestimme** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.

<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-3x + 7 \leq 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  2  ]]   $\left.   \right\}$
@Algebrite.check(2)
******************
$$
\begin{align*}
-3x + 7 &\leq 1 \quad \left| -7 \right. \\
-3x &\leq -6 \quad \left| :(-3) \right. \\
x &\geq 2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $2x - 5 < 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  6  ]]   $\left.   \right\}$
@Algebrite.check(6)
******************
$$
\begin{align*}
2x - 5 &< 9 \quad \left| +5 \right. \\
2x &< 14 \quad \left| :2 \right. \\
x &< 7 \;\;\Rightarrow\;\; x \leq 6 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{x}{-4} + 3 \geq -2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  20  ]]   $\left.   \right\}$
@Algebrite.check(20)
******************
$$
\begin{align*}
\frac{x}{-4} + 3 &\geq -2 \quad \left| -3 \right. \\
\frac{x}{-4} &\geq -5 \quad \left| \cdot (-4) \right. \\
x &\leq 20
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-2x - 8 > 0$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  -5  ]]   $\left.   \right\}$
@Algebrite.check(-5)
******************
$$
\begin{align*}
-2x - 8 &> 0 \quad \left| +8 \right. \\
-2x &> 8 \quad \left| :(-2) \right. \\
x &< -4 \;\;\Rightarrow\;\; x \leq -5 \text{ für } \mathbb{N? nein, hier } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $4x + 6 \geq -2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
4x + 6 &\geq -2 \quad \left| -6 \right. \\
4x &\geq -8 \quad \left| :4 \right. \\
x &\geq -2
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\dfrac{x}{3} - 5 < -1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
@Algebrite.check(11)
******************
$$
\begin{align*}
\frac{x}{3} - 5 &< -1 \quad \left| +5 \right. \\
\frac{x}{3} &< 4 \quad \left| \cdot 3 \right. \\
x &< 12 \;\;\Rightarrow\;\; x \leq 11 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>








