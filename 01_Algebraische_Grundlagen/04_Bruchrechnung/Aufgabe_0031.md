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


tags: Bruchrechnung, Multiplikation, sehr leicht, sehr niedrig, Berechne

comment: Multipliziere Brüche mit natürlichen Zahlen.

author: Martin Lommatzsch

-->




# Multiplikation von Brüchen mit natürlichen Zahlen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{7} \cdot 5 = $ [[  10/7  ]]
@Algebrite.check(10/7)
************
$$
\begin{align*}
\dfrac{2}{7} \cdot 5 &= \dfrac{2}{7} \cdot \dfrac{5}{1} \\
&= \dfrac{2 \cdot 5}{7 \cdot 1} \\
&= \dfrac{10}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{9} \cdot 4 = $ [[  20/9  ]]
@Algebrite.check(20/9)
************
$$
\begin{align*}
\dfrac{5}{9} \cdot 4 &= \dfrac{5}{9} \cdot \dfrac{4}{1} \\
&= \dfrac{5 \cdot 4}{9 \cdot 1} \\
&= \dfrac{20}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{11} \cdot 3 = $ [[  21/11  ]]
@Algebrite.check(21/11)
************
$$
\begin{align*}
\dfrac{7}{11} \cdot 3 &= \dfrac{7}{11} \cdot \dfrac{3}{1} \\
&= \dfrac{7 \cdot 3}{11 \cdot 1} \\
&= \dfrac{21}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{4}{13} \cdot 6 = $ [[  24/13  ]]
@Algebrite.check(24/13)
************
$$
\begin{align*}
\dfrac{4}{13} \cdot 6 &= \dfrac{4}{13} \cdot \dfrac{6}{1} \\
&= \dfrac{4 \cdot 6}{13 \cdot 1} \\
&= \dfrac{24}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{14} \cdot 5 = $ [[  25/14  ]]
@Algebrite.check(25/14)
************
$$
\begin{align*}
\dfrac{5}{14} \cdot 5 &= \dfrac{5}{14} \cdot \dfrac{5}{1} \\
&= \dfrac{5 \cdot 5}{14 \cdot 1} \\
&= \dfrac{25}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{25} \cdot 7 = $ [[  63/25  ]]
@Algebrite.check(63/25)
************
$$
\begin{align*}
\dfrac{9}{25} \cdot 7 &= \dfrac{9}{25} \cdot \dfrac{7}{1} \\
&= \dfrac{9 \cdot 7}{25 \cdot 1} \\
&= \dfrac{63}{25}
\end{align*}
$$
************
</div>

</section>






