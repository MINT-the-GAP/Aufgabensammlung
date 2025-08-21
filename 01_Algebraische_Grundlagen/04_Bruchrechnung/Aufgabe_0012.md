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


tags: Bruchrechnung, Addition, sehr leicht, sehr niedrig, Berechne

comment: Addiere verwandte Brüche.

author: Martin Lommatzsch

-->




# Addition von Brüchen




**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{14} + \dfrac{1}{7} = $ [[  5/14  ]]
@Algebrite.check(5/14)
************
$$
\begin{align*}
\dfrac{3}{14} + \dfrac{1}{7} &= \dfrac{3}{14} + \dfrac{1 \cdot 2}{7 \cdot 2} \\
&= \dfrac{3}{14} + \dfrac{2}{14} \\
&= \dfrac{5}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{1}{9} + \dfrac{1}{3} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{1}{9} + \dfrac{1}{3} &= \dfrac{1}{9} + \dfrac{1 \cdot 3}{3 \cdot 3} \\
&= \dfrac{1}{9} + \dfrac{3}{9} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{8} + \dfrac{1}{4} = $ [[  9/8  ]]
@Algebrite.check(9/8)
************
$$
\begin{align*}
\dfrac{7}{8} + \dfrac{1}{4} &= \dfrac{7}{8} + \dfrac{1 \cdot 2}{4 \cdot 2} \\
&= \dfrac{7}{8} + \dfrac{2}{8} \\
&= \dfrac{9}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{13}{20} + \dfrac{1}{5} = $ [[  17/20  ]]
@Algebrite.check(17/20)
************
$$
\begin{align*}
\dfrac{13}{20} + \dfrac{1}{5} &= \dfrac{13}{20} + \dfrac{1 \cdot 4}{5 \cdot 4} \\
&= \dfrac{13}{20} + \dfrac{4}{20} \\
&= \dfrac{17}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{15} + \dfrac{1}{5} = $ [[  7/15  ]]
@Algebrite.check(7/15)
************
$$
\begin{align*}
\dfrac{4}{15} + \dfrac{1}{5} &= \dfrac{4}{15} + \dfrac{1 \cdot 3}{5 \cdot 3} \\
&= \dfrac{4}{15} + \dfrac{3}{15} \\
&= \dfrac{7}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{28} + \dfrac{1}{14} = $ [[  13/28  ]]
@Algebrite.check(13/28)
************
$$
\begin{align*}
\dfrac{11}{28} + \dfrac{1}{14} &= \dfrac{11}{28} + \dfrac{1 \cdot 2}{14 \cdot 2} \\
&= \dfrac{11}{28} + \dfrac{2}{28} \\
&= \dfrac{13}{28}
\end{align*}
$$
************
</div>

</section>






