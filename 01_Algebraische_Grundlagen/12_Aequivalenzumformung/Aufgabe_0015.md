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


__$a)\;\;$__ $ 2x - 8 = 3x - 10 $ \
$x$ = [[  2  ]]
************
$$
\begin{align*}
2x - 8 &= 3x - 10 \quad \left| -2x \right. \\
-8 &= x - 10 \quad \left| +10 \right. \\
2 &= x
\end{align*}
$$
************


</div>
<div class="flex-child">


__$b)\;\;$__  $ 5x - 12 = 3x + 6 \;$ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
5x - 12 &= 3x + 6 \quad \left| -3x \right. \\
2x - 12 &= 6 \quad \left| +12 \right. \\
2x &= 18 \quad \left| :2 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">


__$c)\;\;$__   $ 3x + 12 = 5x - 2 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
3x + 12 &= 5x - 2 \quad \left| -3x \right. \\
12 &= 2x - 2 \quad \left| +2 \right. \\
14 &= 2x \quad \left| :2 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">


__$d)\;\;$__  $ 8x - 5 = 3x + 20 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
8x - 5 &= 3x + 20 \quad \left| -3x \right. \\
5x - 5 &= 20 \quad \left| +5 \right. \\
5x &= 25 \quad \left| :5 \right. \\
x &= 5
\end{align*}
$$
************


</div>
</section>




