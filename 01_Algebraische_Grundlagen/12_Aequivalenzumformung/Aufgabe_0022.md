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

__$d)\;\;$__ $ \; 7x + \dfrac{1}{2} = 3x - \dfrac{7}{2} \;$ \
$x$ = [[  -1  ]]
@Algebrite.check(-1)
************
$$
\begin{align*}
7x + \dfrac{1}{2} &= 3x - \dfrac{7}{2} \quad \left| -3x \right. \\
4x + \dfrac{1}{2} &= -\dfrac{7}{2} \quad \left| -\dfrac{1}{2} \right. \\
4x &= -\dfrac{8}{2} \\
4x &= -4 \quad \left| :4 \right. \\
x &= -1
\end{align*}
$$
************
</div>
<div class="flex-child">

__$e)\;\;$__ $ \; 2x - \dfrac{7}{3} = \dfrac{1}{3}x + 5 \;$ \
$x$ = [[  22/5  ]]
@Algebrite.check(22/5)
************
$$
\begin{align*}
2x - \dfrac{7}{3} &= \dfrac{1}{3}x + 5 \quad \left| -\dfrac{1}{3}x \right. \\
\dfrac{5}{3}x - \dfrac{7}{3} &= 5 \quad \left| +\dfrac{7}{3} \right. \\
\dfrac{5}{3}x &= \dfrac{15}{3} + \dfrac{7}{3} \\
\dfrac{5}{3}x &= \dfrac{22}{3} \quad \left| :\dfrac{5}{3} \right. \\
x &= \dfrac{22}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$f)\;\;$__ $ \; \dfrac{3}{2}x + 4 = \dfrac{5}{4}x - 2 \;$ \
$x$ = [[  -24  ]]
@Algebrite.check(-24)
************
$$
\begin{align*}
\dfrac{3}{2}x + 4 &= \dfrac{5}{4}x - 2 \\
\dfrac{6}{4}x + 4 &= \dfrac{5}{4}x - 2 \quad \left| -\dfrac{5}{4}x \right. \\
\dfrac{1}{4}x + 4 &= -2 \quad \left| -4 \right. \\
\dfrac{1}{4}x &= -6 \quad \left| :\dfrac{1}{4} \right. \\
x &= -24
\end{align*}
$$
************
</div>
<div class="flex-child">

__$d)\;\;$__ $ 2(x-3) = \dfrac{1}{2}x - 1 $ \
$x$ = [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
2(x-3) &= \dfrac{1}{2}x - 1  \\
2x - 3\cdot 2 &= \dfrac{1}{2}x - 1 \\
2x - 6 &= \dfrac{1}{2}x - 1 \quad \left| -\dfrac{1}{2}x \right. \\
\dfrac{3}{2}x - 6 &= -1 \quad \left| +6 \right. \\
\dfrac{3}{2}x &= 5 \quad \left| :\dfrac{3}{2} \right. \\
x &= \dfrac{10}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$e)\;\;$__ $ 3(x+2) - \dfrac{5}{2} = 2x $ \
$x$ = [[  -7/2  ]]
@Algebrite.check(-7/2)
************
$$
\begin{align*}
 3(x+2) - \dfrac{5}{2} &= 2x  \\
3x + 6 - \dfrac{5}{2} &= 2x \\
3x + \dfrac{12}{2} - \dfrac{5}{2} &= 2x \\
3x + \dfrac{7}{2} &= 2x \quad \left| -2x \right. \\
x + \dfrac{7}{2} &= 0 \quad \left| -\dfrac{7}{2} \right. \\
x &= -\dfrac{7}{2}
\end{align*}
$$
************
</div>
<div class="flex-child">

__$f)\;\;$__ $  \dfrac{3}{4}(2x-1) = x + \dfrac{1}{2} $ \
$x$ = [[  5/2  ]]
@Algebrite.check(5/2)
************
$$
\begin{align*}
\dfrac{3}{4}(2x-1) &= x + \dfrac{1}{2} \\
\dfrac{3}{2}x - \dfrac{3}{4} &= x + \dfrac{1}{2} \quad \left| -x \right. \\
\dfrac{1}{2}x - \dfrac{3}{4} &= \dfrac{1}{2} \quad \left| +\dfrac{3}{4} \right. \\
\dfrac{1}{2}x &= \dfrac{5}{4} \quad \left| :\dfrac{1}{2} \right. \\
x &= \dfrac{5}{2}
\end{align*}
$$
************
</div>
</section>