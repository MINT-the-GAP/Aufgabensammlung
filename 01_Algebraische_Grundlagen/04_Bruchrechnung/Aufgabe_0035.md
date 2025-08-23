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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md


tags: Bruchrechnung, Multiplikation, leicht, sehr niedrig, Berechne

comment: Multipliziere zwei Brüche.

author: Martin Lommatzsch

-->




# Multiplikation von Brüchen



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{3} \cdot \dfrac{5}{7} = $ [[  10/21  ]]
@Algebrite.check(10/21)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{5}{7}
&= \dfrac{2 \cdot 5}{3 \cdot 7} \\
&= \dfrac{10}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} \cdot \dfrac{5}{7} = $ [[  15/28  ]]
@Algebrite.check(15/28)
************
$$
\begin{align*}
\dfrac{3}{4} \cdot \dfrac{5}{7}
&= \dfrac{3 \cdot 5}{4 \cdot 7} \\
&= \dfrac{15}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{9} \cdot \dfrac{5}{7} = $ [[  20/63  ]]
@Algebrite.check(20/63)
************
$$
\begin{align*}
\dfrac{4}{9} \cdot \dfrac{5}{7}
&= \dfrac{4 \cdot 5}{9 \cdot 7} \\
&= \dfrac{20}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{8} \cdot \dfrac{7}{9} = $ [[  35/72  ]]
@Algebrite.check(35/72)
************
$$
\begin{align*}
\dfrac{5}{8} \cdot \dfrac{7}{9}
&= \dfrac{5 \cdot 7}{8 \cdot 9} \\
&= \dfrac{35}{72}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \cdot \dfrac{7}{11} = $ [[  21/110  ]]
@Algebrite.check(21/110)
************
$$
\begin{align*}
\dfrac{3}{10} \cdot \dfrac{7}{11}
&= \dfrac{3 \cdot 7}{10 \cdot 11} \\
&= \dfrac{21}{110}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{7}{13} = $ [[  35/156  ]]
@Algebrite.check(35/156)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{7}{13}
&= \dfrac{5 \cdot 7}{12 \cdot 13} \\
&= \dfrac{35}{156}
\end{align*}
$$
************
</div>

</section>






