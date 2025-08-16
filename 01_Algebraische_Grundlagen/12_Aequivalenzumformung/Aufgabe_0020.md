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



tags: Äquivalenzumformung, Distributivgesetz, leicht, niedrig, Berechnen, 

comment: Führe eine Äquivalenzumformung mit natürlichen Zahlen aus.

author: Martin Lommatzsch

-->




# Einfache Äquivalenzumformung


**Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $  2(4x-5) = 3x + 13 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
2(4x-5) &= 3x + 13 \\
8x - 10 &= 3x + 13 \quad \left| -3x \right. \\
5x - 10 &= 13 \quad \left| +10 \right. \\
5x &= 23 \quad \left| :5 \right. \\
x &= 3
\end{align*}
$$
************
</div>
<div class="flex-child">

__$b)\;\;$__ $  3(2x+1) = 4x + 11 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
3(2x+1) &= 4x + 11 \\
6x + 3 &= 4x + 11 \quad \left| -4x \right. \\
2x + 3 &= 11 \quad \left| -3 \right. \\
2x &= 8 \quad \left| :2 \right. \\
x &= 4
\end{align*}
$$
************

</div>
<div class="flex-child">

__$c)\;\;$__ $  2(5x-4) = 3x + 14 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(5x-4) &= 3x + 14 \\
10x - 8 &= 3x + 14 \quad \left| -3x \right. \\
7x - 8 &= 14 \quad \left| +8 \right. \\
7x &= 22 \quad \left| :7 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">

__$d)\;\;$__ $  7(x-2) + 1 = 3x + 8 $ \
$x$ = [[  3  ]]
************
$$
\begin{align*}
 7(x-2) + 1 &= 3x + 8 \\
7x - 14 + 1 &= 3x + 8 \\
7x - 13 &= 3x + 8 \quad \left| -3x \right. \\
4x - 13 &= 8 \quad \left| +13 \right. \\
4x &= 21 \quad \left| :4 \right. \\
x &= 3
\end{align*}
$$
************
</div>
</section>
