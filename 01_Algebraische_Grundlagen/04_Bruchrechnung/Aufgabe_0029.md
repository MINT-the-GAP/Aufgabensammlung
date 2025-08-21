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
__$a)\;\;$__ $  \dfrac{5}{12} + \dfrac{1}{4} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{5}{12} + \dfrac{1}{4}
&= \dfrac{5}{12} + \dfrac{1\cdot 3}{4\cdot 3} \\
&= \dfrac{5}{12} + \dfrac{3}{12} \\
&= \dfrac{5+3}{12} \\
&= \dfrac{8}{12} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{4}{15} + \dfrac{1}{6} = $ [[  13/30  ]]
@Algebrite.check(13/30)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{1}{6}
&= \dfrac{4\cdot 2}{15\cdot 2} + \dfrac{1\cdot 5}{6\cdot 5} \\
&= \dfrac{8}{30} + \dfrac{5}{30} \\
&= \dfrac{8+5}{30} \\
&= \dfrac{13}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{18} - \dfrac{1}{6} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{11}{18} - \dfrac{1}{6}
&= \dfrac{11}{18} - \dfrac{1\cdot 3}{6\cdot 3} \\
&= \dfrac{11}{18} - \dfrac{3}{18} \\
&= \dfrac{11-3}{18} \\
&= \dfrac{8}{18} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{10} + \dfrac{2}{5} = $ [[  7/10  ]]
@Algebrite.check(7/10)
************
$$
\begin{align*}
\dfrac{3}{10} + \dfrac{2}{5}
&= \dfrac{3}{10} + \dfrac{2\cdot 2}{5\cdot 2} \\
&= \dfrac{3}{10} + \dfrac{4}{10} \\
&= \dfrac{3+4}{10} \\
&= \dfrac{7}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{8} + \dfrac{3}{12} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{5}{8} + \dfrac{3}{12}
&= \dfrac{5\cdot 3}{8\cdot 3} + \dfrac{3\cdot 2}{12\cdot 2} \\
&= \dfrac{15}{24} + \dfrac{6}{24} \\
&= \dfrac{15+6}{24} \\
&= \dfrac{21}{24} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{12} - \dfrac{1}{8} = $ [[  11/24  ]]
@Algebrite.check(11/24)
************
$$
\begin{align*}
\dfrac{7}{12} - \dfrac{1}{8}
&= \dfrac{7\cdot 2}{12\cdot 2} - \dfrac{1\cdot 3}{8\cdot 3} \\
&= \dfrac{14}{24} - \dfrac{3}{24} \\
&= \dfrac{14-3}{24} \\
&= \dfrac{11}{24}
\end{align*}
$$
************
</div>

</section>


