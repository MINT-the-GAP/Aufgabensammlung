<!--
version:  0.0.1
language: de


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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



tags: Äquivalenzumformung, leicht, niedrig, Berechnen, 

comment: Führe eine Äquivalenzumformung mit natürlichen Zahlen aus.

author: Martin Lommatzsch

-->




# Einfache Äquivalenzumformung




**Berechne** den Lösungswert für die Unbekannte.


<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $  2x + 4 + 9 = 6x - 3 - 7 $ \
$x$ = [[  4  ]]
************
$$
\begin{align*}
2x + 4 + 9 &= 6x - 3 - 7 \\
2x + 13 &= 6x - 10 \quad \left| +10 \right. \\
2x + 23 &= 6x  \quad \left| -2x \right. \\
23 &= 4x \quad \left| :4 \right. \\
x &= 4
\end{align*}
$$
************
</div>
<div class="flex-child">

__$b)\;\;$__ $  3x + 5 + x = 2x + 17 - x $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
3x + 5 + x &= 2x + 17 - x \\
4x + 5 &= x + 17 \quad \left| -x \right. \\
3x + 5 &= 17 \quad \left| -5 \right. \\
3x &= 12 \quad \left| :3 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">

__$c)\;\;$__ $  5x - 7 + 2x = 3x + 13 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
5x - 7 + 2x &= 3x + 13 \\
7x - 7 &= 3x + 13 \quad \left| -3x \right. \\
4x - 7 &= 13 \quad \left| +7 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">

__$d)\;\;$__ $  2x + 4 + 9x = 6x - 3 - 7 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2x + 4 + 9x &= 6x - 3 - 7 \\
11x + 4 &= 6x - 10 \quad \left| -6x \right. \\
5x + 4 &= -10 \quad \left| -4 \right. \\
5x &= -14 \quad \left| :(-5) \right. \\
x &= 2
\end{align*}
$$
************
</div>
</section>


