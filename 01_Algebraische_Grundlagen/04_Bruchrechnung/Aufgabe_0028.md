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





tags: Bruchrechnung, Addition, Subtraktion, leicht, niedrig, Berechne

comment: Addiere oder Subtrahiere zwei Brüche.

author: Martin Lommatzsch

-->




# Subtraktion oder Addition von Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{8} + \dfrac{5}{12} = $ [[  19/24  ]]
@Algebrite.check(19/24)
************
$$
\begin{align*}
\dfrac{3}{8} + \dfrac{5}{12}
&= \dfrac{3\cdot 3}{8\cdot 3} + \dfrac{5\cdot 2}{12\cdot 2} \\
&= \dfrac{9}{24} + \dfrac{10}{24} \\
&= \dfrac{19}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{9} - \dfrac{2}{15} = $ [[  29/45  ]]
@Algebrite.check(29/45)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{2}{15}
&= \dfrac{7\cdot 5}{9\cdot 5} - \dfrac{2\cdot 3}{15\cdot 3} \\
&= \dfrac{35}{45} - \dfrac{6}{45} \\
&= \dfrac{29}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{7}{18} = $ [[  11/9  ]]
@Algebrite.check(11/9)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{7}{18}
&= \dfrac{5\cdot 3}{6\cdot 3} + \dfrac{7}{18} \\
&= \dfrac{15}{18} + \dfrac{7}{18} \\
&= \dfrac{22}{18} \\
&= \dfrac{11}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{20} - \dfrac{1}{10} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\dfrac{11}{20} - \dfrac{1}{10}
&= \dfrac{11}{20} - \dfrac{1\cdot 2}{10\cdot 2} \\
&= \dfrac{11}{20} - \dfrac{2}{20} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{7} + \dfrac{3}{14} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{2}{7} + \dfrac{3}{14}
&= \dfrac{2\cdot 2}{7\cdot 2} + \dfrac{3}{14} \\
&= \dfrac{4}{14} + \dfrac{3}{14} \\
&= \dfrac{7}{14} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{16} - \dfrac{1}{8} = $ [[  7/16  ]]
@Algebrite.check(7/16)
************
$$
\begin{align*}
\dfrac{9}{16} - \dfrac{1}{8}
&= \dfrac{9}{16} - \dfrac{1\cdot 2}{8\cdot 2} \\
&= \dfrac{9}{16} - \dfrac{2}{16} \\
&= \dfrac{7}{16}
\end{align*}
$$
************
</div>

</section>

