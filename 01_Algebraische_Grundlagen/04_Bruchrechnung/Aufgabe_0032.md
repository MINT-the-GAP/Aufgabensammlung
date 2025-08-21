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
__$a)\;\;$__ $  \dfrac{3}{8} \cdot 5 = $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
\dfrac{3}{8} \cdot 5 &= \dfrac{3}{8} \cdot \dfrac{5}{1} \\
&= \dfrac{3 \cdot 5}{8 \cdot 1} \\
&= \dfrac{15}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{12} \cdot 4 = $ [[  7/4  ]]
@Algebrite.check(7/4)
************
$$
\begin{align*}
\dfrac{7}{12} \cdot 4 &= \dfrac{7}{12} \cdot \dfrac{4}{1} \\
&= \dfrac{7 \cdot 4}{12 \cdot 1} \\
&= \dfrac{28}{12} \\
&= \dfrac{7}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{9} \cdot 7 = $ [[  14/9  ]]
@Algebrite.check(14/9)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot 7 &= \dfrac{2}{9} \cdot \dfrac{7}{1} \\
&= \dfrac{2 \cdot 7}{9 \cdot 1} \\
&= \dfrac{14}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{11}{15} \cdot 3 = $ [[  33/15  ]]
@Algebrite.check(33/15)
************
$$
\begin{align*}
\dfrac{11}{15} \cdot 3 &= \dfrac{11}{15} \cdot \dfrac{3}{1} \\
&= \dfrac{11 \cdot 3}{15 \cdot 1} \\
&= \dfrac{33}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{6}{17} \cdot 5 = $ [[  30/17  ]]
@Algebrite.check(30/17)
************
$$
\begin{align*}
\dfrac{6}{17} \cdot 5 &= \dfrac{6}{17} \cdot \dfrac{5}{1} \\
&= \dfrac{6 \cdot 5}{17 \cdot 1} \\
&= \dfrac{30}{17}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{19} \cdot 2 = $ [[  16/19  ]]
@Algebrite.check(16/19)
************
$$
\begin{align*}
\dfrac{8}{19} \cdot 2 &= \dfrac{8}{19} \cdot \dfrac{2}{1} \\
&= \dfrac{8 \cdot 2}{19 \cdot 1} \\
&= \dfrac{16}{19}
\end{align*}
$$
************
</div>

</section>





