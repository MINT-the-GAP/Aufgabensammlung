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



tags: Äquivalenzumformung, leicht, sehr niedrig, Berechnen, 

comment: Führe eine Äquivalenzumformung mit natürlichen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung mit natürlichen Zahlen


**Berechne** den Lösungswert für die Unbekannte.




<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $ 2x + 10 = 4x - 6 $ \
$x$ = [[  8  ]]
************
$$
\begin{align*}
2x + 10 &= 4x - 6 \quad \left| -2x \right. \\
10 &= 2x - 6 \quad \left| +6 \right. \\
16 &= 2x \quad \left| :2 \right. \\
x &= 8
\end{align*}
$$
************


</div>
<div class="flex-child">


__$b)\;\;$__  $ \;9x - 15 = 6x + 12 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
9x - 15 &= 6x + 12 \quad \left| -6x \right. \\
3x - 15 &= 12 \quad \left| +15 \right. \\
3x &= 27 \quad \left| :3 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">


__$c)\;\;$__   $ 2x + 14 = 3x + 5 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
2x + 14 &= 3x + 5 \quad \left| -2x \right. \\
14 &= x + 5 \quad \left| -5 \right. \\
9 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">


__$d)\;\;$__  $ 7x - 9 = 2x + 16 \;$ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 9 &= 2x + 16 \quad \left| -2x \right. \\
5x - 9 &= 16 \quad \left| +9 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>



