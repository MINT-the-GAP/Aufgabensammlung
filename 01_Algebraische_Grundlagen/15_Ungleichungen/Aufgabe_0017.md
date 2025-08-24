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





tags: Ungleichungen, Bruchrechnung, Mengen, negative Zahlen, Bruchrechnung, mittel, normal, Berechnen

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen? Achte auf die Mengen und Vorzeichen.

author: Martin Lommatzsch

-->




# Ungleichungen




**Berechne** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\dfrac{4}{5}x + \dfrac{2}{3} \geq \dfrac{1}{2}x + \dfrac{5}{6}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \geq $   [[  5/9  ]]   $\left.   \right\}$
@Algebrite.check(5/9)
******************
$$
\begin{align*}
\dfrac{4}{5}x + \dfrac{2}{3} &\ge \dfrac{1}{2}x + \dfrac{5}{6} \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{10}x + \dfrac{2}{3} &\ge \dfrac{5}{6} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{3}{10}x &\ge \dfrac{1}{6} \quad \left| :\dfrac{3}{10} \right. \\
x &\ge \dfrac{5}{9}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\dfrac{3}{4}x - \dfrac{5}{2} < \dfrac{1}{2}x + 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  13  ]]   $\left.   \right\}$
@Algebrite.check(13)
******************
$$
\begin{align*}
\dfrac{3}{4}x - \dfrac{5}{2} &< \dfrac{1}{2}x + 1 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{1}{4}x - \dfrac{5}{2} &< 1 \quad \left| +\dfrac{5}{2} \right. \\
\dfrac{1}{4}x &< \dfrac{7}{2} \quad \left| \cdot 4 \right. \\
x &< 14 \;\;\Rightarrow\;\; x \le 13 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $\dfrac{2}{3}x + \dfrac{1}{3} > x - \dfrac{4}{3}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  4  ]]   $\left.   \right\}$
@Algebrite.check(4)
******************
$$
\begin{align*}
\dfrac{2}{3}x + \dfrac{1}{3} &> x - \dfrac{4}{3} \quad \left| -x \right. \\
-\dfrac{1}{3}x + \dfrac{1}{3} &> -\dfrac{4}{3} \quad \left| -\dfrac{1}{3} \right. \\
-\dfrac{1}{3}x &> -\dfrac{5}{3} \quad \left| :\left(-\dfrac{1}{3}\right) \right. \\
x &< 5 \;\;\Rightarrow\;\; x \le 4 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $-\dfrac{3}{2}x - 1 \ge \dfrac{1}{4}x - \dfrac{3}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  2/7  ]]   $\left.   \right\}$
@Algebrite.check(2/7)
******************
$$
\begin{align*}
-\dfrac{3}{2}x - 1 &\ge \dfrac{1}{4}x - \dfrac{3}{2} \quad \left| +\dfrac{3}{2}x \right. \\
-1 &\ge \dfrac{7}{4}x - \dfrac{3}{2} \quad \left| +\dfrac{3}{2} \right. \\
\dfrac{1}{2} &\ge \dfrac{7}{4}x \quad \left| :\dfrac{7}{4} \right. \\
x &\le \dfrac{2}{7}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\dfrac{1}{3}x + \dfrac{2}{3} > -\dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  -2  ]]   $\left.   \right\}$
@Algebrite.check(-2)
******************
$$
\begin{align*}
\dfrac{1}{3}x + \dfrac{2}{3} &> -\dfrac{1}{6}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x + \dfrac{2}{3} &> -\dfrac{1}{2} \quad \left| -\dfrac{2}{3} \right. \\
\dfrac{1}{2}x &> -\dfrac{7}{6} \quad \left| \cdot 2 \right. \\
x &> -\dfrac{7}{3} \;\;\Rightarrow\;\; x \ge -2 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $-\dfrac{1}{2}x + \dfrac{1}{3} > \dfrac{1}{6}x - \dfrac{1}{2}$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  5/4  ]]   $\left.   \right\}$
@Algebrite.check(5/4)
******************
$$
\begin{align*}
-\dfrac{1}{2}x + \dfrac{1}{3} &> \dfrac{1}{6}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{2}x \right. \\
\dfrac{1}{3} &> \dfrac{2}{3}x - \dfrac{1}{2} \quad \left| +\dfrac{1}{2} \right. \\
\dfrac{5}{6} &> \dfrac{2}{3}x \quad \left| :\dfrac{2}{3} \right. \\
\dfrac{5}{4} &> x \quad \Rightarrow\; x < \dfrac{5}{4}
\end{align*}
$$
******************
</div>
</section>












