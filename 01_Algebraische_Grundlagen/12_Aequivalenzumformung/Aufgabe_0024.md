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



tags: Äquivalenzumformung, Distributivgesetz, Bruchrechnung, negative Zahlen, mittel, normal, Berechnen, 

comment: Führe eine Äquivalenzumformung mit rationalen Zahlen aus.

author: Martin Lommatzsch

-->




# Äquivalenzumformung



**Berechne** den Lösungswert für die Unbekannte.



<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $  4x - 3 = \dfrac{1}{2}x + 9 $ \
$x$ = [[  24/7  ]]
@Algebrite.check(24/7)
************
$$
\begin{align*}
4x - 3 &= \dfrac{1}{2}x + 9 \quad \left| -\dfrac{1}{2}x \right. \\
\left(4 - \dfrac{1}{2}\right)x - 3 &= 9 \\
\dfrac{7}{2}x - 3 &= 9 \quad \left| +3 \right. \\
\dfrac{7}{2}x &= 12 \quad \left| :\dfrac{7}{2} \right. \\
x &= \dfrac{24}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$b)\;\;$__ $  3(2x+1) - 4 = x + 5 $ \
$x$ = [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
3(2x+1) - 4 &= x + 5 \\
6x + 3 - 4 &= x + 5 \\
6x - 1 &= x + 5 \quad \left| -x \right. \\
5x - 1 &= 5 \quad \left| +1 \right. \\
5x &= 6 \quad \left| :5 \right. \\
x &= \dfrac{6}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$c)\;\;$__ $  \dfrac{1}{3}x - 2 = \dfrac{3}{5}x + 1 $ \
$x$ = [[  -45/4  ]]
@Algebrite.check(-45/4)
************
$$
\begin{align*}
\dfrac{1}{3}x - 2 &= \dfrac{3}{5}x + 1 \quad \left| -\dfrac{3}{5}x \right. \\
\left(\dfrac{1}{3} - \dfrac{3}{5}\right)x - 2 &= 1 \\
-\dfrac{4}{15}x - 2 &= 1 \quad \left| +2 \right. \\
-\dfrac{4}{15}x &= 3 \quad \left| \cdot(-1) \right. \\
\dfrac{4}{15}x &= -3 \quad \left| :\dfrac{4}{15} \right. \\
x &= -\dfrac{45}{4}
\end{align*}
$$
************

</div>
<div class="flex-child">

__$d)\;\;$__ $  2x + 5 = \dfrac{4}{3}x - 1 $ \
$x$ = [[  -9  ]]
@Algebrite.check(-9)
************
$$
\begin{align*}
2x + 5 &= \dfrac{4}{3}x - 1 \quad \left| -\dfrac{4}{3}x \right. \\
\left(2 - \dfrac{4}{3}\right)x + 5 &= -1 \\
\dfrac{2}{3}x + 5 &= -1 \quad \left| -5 \right. \\
\dfrac{2}{3}x &= -6 \quad \left| :\dfrac{2}{3} \right. \\
x &= -9
\end{align*}
$$
************
</div>
<div class="flex-child">

__$e)\;\;$__ $  \dfrac{5}{4}x - 3 = 2 - \dfrac{1}{2}x $ \
$x$ = [[  20/7  ]]
@Algebrite.check(20/7)
************
$$
\begin{align*}
\dfrac{5}{4}x - 3 &= 2 - \dfrac{1}{2}x \quad \left| +\dfrac{1}{2}x \right. \\
\left(\dfrac{5}{4} + \dfrac{1}{2}\right)x - 3 &= 2 \\
\dfrac{7}{4}x - 3 &= 2 \quad \left| +3 \right. \\
\dfrac{7}{4}x &= 5 \quad \left| :\dfrac{7}{4} \right. \\
x &= \dfrac{20}{7}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$f)\;\;$__ $  2\left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} = \dfrac{5}{3}x - 1 $ \
$x$ = [[  5  ]]
@Algebrite.check(5)
************
$$
\begin{align*}
2 \left(x - \dfrac{3}{2}\right) + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - 3 + \dfrac{1}{3} &= \dfrac{5}{3}x - 1 \\
2x - \dfrac{8}{3} &= \dfrac{5}{3}x - 1 \quad \left| -\dfrac{5}{3}x \right. \\
\left(2 - \dfrac{5}{3}\right)x - \dfrac{8}{3} &= -1 \\
\dfrac{1}{3}x - \dfrac{8}{3} &= -1 \quad \left| +\dfrac{8}{3} \right. \\
\dfrac{1}{3}x &= \dfrac{5}{3} \quad \left| :\dfrac{1}{3} \right. \\
x &= 5
\end{align*}
$$
************
</div>
</section>



