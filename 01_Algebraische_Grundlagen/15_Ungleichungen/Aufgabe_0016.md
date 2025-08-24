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
__$a)\;\;$__ $\,\dfrac{3}{5}x + 2 \leq \dfrac{1}{5}x + \dfrac{11}{5}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  1/2  ]]   $\left.   \right\}$
@Algebrite.check(1/2)
******************
$$
\begin{align*}
\dfrac{3}{5}x + 2 &\le \dfrac{1}{5}x + \dfrac{11}{5} \quad \left| -\dfrac{1}{5}x \right. \\
\dfrac{2}{5}x + 2 &\le \dfrac{11}{5} \quad \left| -2 \right. \\
\dfrac{2}{5}x &\le \dfrac{1}{5} \quad \left| :\dfrac{2}{5} \right. \\
x &\le \dfrac{1}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$b)\;\;$__ $\,\dfrac{2}{3}x - \dfrac{5}{3} > \dfrac{1}{6}x + \dfrac{1}{3}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
@Algebrite.check(5)
******************
$$
\begin{align*}
\dfrac{2}{3}x - \dfrac{5}{3} &> \dfrac{1}{6}x + \dfrac{1}{3} \quad \left| -\dfrac{1}{6}x \right. \\
\dfrac{1}{2}x - \dfrac{5}{3} &> \dfrac{1}{3} \quad \left| +\dfrac{5}{3} \right. \\
\dfrac{1}{2}x &> 2 \quad \left| \cdot 2 \right. \\
x &> 4 \;\;\Rightarrow\;\; x \ge 5 \text{ für } \mathbb{N}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$c)\;\;$__ $-\dfrac{3}{4}x + \dfrac{7}{2} \ge \dfrac{1}{4}x - 1$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  9/2  ]]   $\left.   \right\}$
@Algebrite.check(9/2)
******************
$$
\begin{align*}
-\dfrac{3}{4}x + \dfrac{7}{2} &\ge \dfrac{1}{4}x - 1 \quad \left| +\dfrac{3}{4}x \right. \\
\dfrac{7}{2} &\ge x - 1 \quad \left| +1 \right. \\
\dfrac{9}{2} &\ge x \quad \Rightarrow\; x \le \dfrac{9}{2}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$d)\;\;$__ $\,5x - \dfrac{7}{2} < 3x + \dfrac{1}{2}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \leq $   [[  1  ]]   $\left.   \right\}$
@Algebrite.check(1)
******************
$$
\begin{align*}
5x - \dfrac{7}{2} &< 3x + \dfrac{1}{2} \quad \left| -3x \right. \\
2x - \dfrac{7}{2} &< \dfrac{1}{2} \quad \left| +\dfrac{7}{2} \right. \\
2x &< 4 \quad \left| :2 \right. \\
x &< 2 \;\;\Rightarrow\;\; x \le 1 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$e)\;\;$__ $\, -2x + \dfrac{5}{3} > -\dfrac{1}{3}x + 1 \,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x < $   [[  2/5  ]]   $\left.   \right\}$
@Algebrite.check(2/5)
******************
$$
\begin{align*}
-2x + \dfrac{5}{3} &> -\dfrac{1}{3}x + 1 \quad \left| +\dfrac{1}{3}x \right. \\
-\dfrac{5}{3}x + \dfrac{5}{3} &> 1 \quad \left| -\dfrac{5}{3} \right. \\
-\dfrac{5}{3}x &> -\dfrac{2}{3} \quad \left| :\left(-\dfrac{5}{3}\right) \right. \\
x &< \dfrac{2}{5}
\end{align*}
$$
******************
</div>

<div class="flex-child">
__$f)\;\;$__ $\,\dfrac{1}{2}x + \dfrac{5}{4} \ge -\dfrac{3}{4}x + \dfrac{1}{2}\,$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  0  ]]   $\left.   \right\}$
@Algebrite.check(0)
******************
$$
\begin{align*}
\dfrac{1}{2}x + \dfrac{5}{4} &\ge -\dfrac{3}{4}x + \dfrac{1}{2} \quad \left| +\dfrac{3}{4}x \right. \\
\dfrac{5}{4}x + \dfrac{5}{4} &\ge \dfrac{1}{2} \quad \left| -\dfrac{5}{4} \right. \\
\dfrac{5}{4}x &\ge -\dfrac{3}{4} \quad \left| :\dfrac{5}{4} \right. \\
x &\ge -\dfrac{3}{5} \;\;\Rightarrow\;\; x \ge 0 \text{ für } \mathbb{Z}
\end{align*}
$$
******************
</div>
</section>













