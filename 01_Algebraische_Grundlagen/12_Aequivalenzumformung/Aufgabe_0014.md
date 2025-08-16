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


__$a)\;\;$__  $ 4x + 5 = 3x + 14 $ \
$x$ = [[  9  ]]
************
$$
\begin{align*}
4x + 5 &= 3x + 14 \quad \left| -3x \right. \\
x + 5 &= 14 \quad \left| -5 \right. \\
x &= 9
\end{align*}
$$
************


</div>
<div class="flex-child">


__$b)\;\;$__  $ 7x - 4 = 3x + 16 $ \
$x$ = [[  5  ]]
************
$$
\begin{align*}
7x - 4 &= 3x + 16 \quad \left| -3x \right. \\
4x - 4 &= 16 \quad \left| +4 \right. \\
4x &= 20 \quad \left| :4 \right. \\
x &= 5
\end{align*}
$$
************


</div>
<div class="flex-child">


__$c)\;\;$__   $ 6x - 8 = 2x + 20 $ \
$x$ = [[  7  ]]
************
$$
\begin{align*}
6x - 8 &= 2x + 20 \quad \left| -2x \right. \\
4x - 8 &= 20 \quad \left| +8 \right. \\
4x &= 28 \quad \left| :4 \right. \\
x &= 7
\end{align*}
$$
************


</div>
<div class="flex-child">


__$d)\;\;$__  $ 10x - 12 = 4x + 24 $ \
$x$ = [[  6  ]]
************
$$
\begin{align*}
10x - 12 &= 4x + 24 \quad \left| -4x \right. \\
6x - 12 &= 24 \quad \left| +12 \right. \\
6x &= 36 \quad \left| :6 \right. \\
x &= 6
\end{align*}
$$
************


</div>
</section>




