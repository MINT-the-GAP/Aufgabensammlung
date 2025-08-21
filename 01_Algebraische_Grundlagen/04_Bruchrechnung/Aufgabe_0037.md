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


tags: Bruchrechnung, Multiplikation, leicht, sehr niedrig, Berechne

comment: Multipliziere zwei Brüche.

author: Martin Lommatzsch

-->




# Multiplikation von Brüchen


**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{8} \cdot \dfrac{5}{7} = $ [[  15/56  ]]
@Algebrite.check(15/56)
************
$$
\begin{align*}
\dfrac{3}{8} \cdot \dfrac{5}{7}
&= \dfrac{3 \cdot 5}{8 \cdot 7} \\
&= \dfrac{15}{56}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{9} \cdot \dfrac{7}{10} = $ [[  77/90  ]]
@Algebrite.check(28/90)
************
$$
\begin{align*}
\dfrac{11}{9} \cdot \dfrac{7}{10}
&= \dfrac{11 \cdot 7}{9 \cdot 10} \\
&= \dfrac{77}{90}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{11} \cdot \dfrac{9}{13} = $ [[  18/143  ]]
@Algebrite.check(18/143)
************
$$
\begin{align*}
\dfrac{2}{11} \cdot \dfrac{9}{13}
&= \dfrac{2 \cdot 9}{11 \cdot 13} \\
&= \dfrac{18}{143}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{7}{8} = $ [[  35/96  ]]
@Algebrite.check(35/96)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{7}{8}
&= \dfrac{5 \cdot 7}{12 \cdot 8} \\
&= \dfrac{35}{96}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{13} \cdot \dfrac{5}{14} = $ [[  25/182  ]]
@Algebrite.check(30/182)
************
$$
\begin{align*}
\dfrac{5}{13} \cdot \dfrac{5}{14}
&= \dfrac{5 \cdot 5}{13 \cdot 14} \\
&= \dfrac{25}{182}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{15} \cdot \dfrac{4}{11} = $ [[  28/165  ]]
@Algebrite.check(28/165)
************
$$
\begin{align*}
\dfrac{7}{15} \cdot \dfrac{4}{11}
&= \dfrac{7 \cdot 4}{15 \cdot 11} \\
&= \dfrac{28}{165}
\end{align*}
$$
************
</div>

</section>








