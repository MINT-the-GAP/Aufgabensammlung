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

__$a)\;\;$__ $  4x + 6 - 2x + 3 = x + 17 $ \
$x$ = [[  8  ]]
************
$$
\begin{align*} 
4x + 6 - 2x + 3 &= x + 17  \\
2x + 9 &= x + 17 \quad \left| -x \right. \\
x + 9 &= 17 \quad \left| -9 \right. \\
x &= 8
\end{align*}
$$
************
</div>
<div class="flex-child">

__$b)\;\;$__ $  6x - 5 + 2x = 3x + 25 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
 6x - 5 + 2x &= 3x + 25 \\
8x - 5 &= 3x + 25 \quad \left| -3x \right. \\
5x - 5 &= 25 \quad \left| +5 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
<div class="flex-child">

__$c)\;\;$__ $  7x + 3 - 2x = 4x + 8 $ \
$x$ = [[  1  ]]
************
$$
\begin{align*}
7x + 3 - 2x &= 4x + 8 \\
5x + 3 &= 4x + 8 \quad \left| -4x \right. \\
x + 3 &= 8 \quad \left| -3 \right. \\
x &= 5
\end{align*}
$$
************
</div>
<div class="flex-child">

__$d)\;\;$__ $  9x - 4 + x = 5x + 26 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
9x - 4 + x &= 5x + 26 \\
10x - 4 &= 5x + 26 \quad \left| -5x \right. \\
5x - 4 &= 26 \quad \left| +4 \right. \\
5x &= 30 \quad \left| :5 \right. \\
x &= 6
\end{align*}
$$
************
</div>
</section>


