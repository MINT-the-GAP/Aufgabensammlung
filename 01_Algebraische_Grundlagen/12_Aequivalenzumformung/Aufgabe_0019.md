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
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  4(2x-3) = 2x + 10 $ \
$x$ = [[  11/3  ]]
@Algebrite.check(11/3)
************
$$
\begin{align*}
4(2x-3) &= 2x + 10 \\
8x - 12 &= 2x + 10 \quad \left| -2x \right. \\
6x - 12 &= 10 \quad \left| +12 \right. \\
6x &= 22 \quad \left| :6 \right. \\
x &= \dfrac{11}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3(2x+4) = x + 19 $ \
$x$ = [[  7/5  ]]
@Algebrite.check(7/5)
************
$$
\begin{align*}
3(2x+4) &= x + 19 \\
6x + 12 &= x + 19 \quad \left| -x \right. \\
5x + 12 &= 19 \quad \left| -12 \right. \\
5x &= 7 \quad \left| :5 \right. \\
x &= \dfrac{7}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  2(3x-1) + 5 = 4x + 7 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2(3x-1) + 5 &= 4x + 7 \\
6x - 2 + 5 &= 4x + 7 \\
6x + 3 &= 4x + 7 \quad \left| -4x \right. \\
2x + 3 &= 7 \quad \left| -3 \right. \\
2x &= 4 \quad \left| :2 \right. \\
x &= 2
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5(x+2) - 3 = 2x + 12 $ \
$x$ = [[  5/3  ]]
@Algebrite.check(5/3)
************
$$
\begin{align*}
5(x+2) - 3 &= 2x + 12 \\
5x + 10 - 3 &= 2x + 12 \\
5x + 7 &= 2x + 12 \quad \left| -2x \right. \\
3x + 7 &= 12 \quad \left| -7 \right. \\
3x &= 5 \quad \left| :3 \right. \\
x &= \dfrac{5}{3}
\end{align*}
$$
************
</div>
</section>