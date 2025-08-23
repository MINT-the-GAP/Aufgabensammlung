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
__$a)\;\;$__ $  \dfrac{2}{5} \cdot \dfrac{3}{7} = $ [[  6/35  ]]
@Algebrite.check(6/35)
************
$$
\begin{align*}
\dfrac{2}{5} \cdot \dfrac{3}{7}
&= \dfrac{2 \cdot 3}{5 \cdot 7} \\
&= \dfrac{6}{35}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{2}{9} \cdot \dfrac{5}{7} = $ [[  10/63  ]]
@Algebrite.check(10/63)
************
$$
\begin{align*}
\dfrac{2}{9} \cdot \dfrac{5}{7}
&= \dfrac{2 \cdot 5}{9 \cdot 7} \\
&= \dfrac{10}{63}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{11} \cdot \dfrac{2}{9} = $ [[  14/99  ]]
@Algebrite.check(14/99)
************
$$
\begin{align*}
\dfrac{7}{11} \cdot \dfrac{2}{9}
&= \dfrac{7 \cdot 2}{11 \cdot 9} \\
&= \dfrac{14}{99}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{14} \cdot \dfrac{3}{11} = $ [[  15/154  ]]
@Algebrite.check(15/154)
************
$$
\begin{align*}
\dfrac{5}{14} \cdot \dfrac{3}{11}
&= \dfrac{5 \cdot 3}{14 \cdot 11} \\
&= \dfrac{15}{154}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{3}{10} \cdot \dfrac{7}{13} = $ [[  21/130  ]]
@Algebrite.check(21/130)
************
$$
\begin{align*}
\dfrac{3}{10} \cdot \dfrac{7}{13}
&= \dfrac{3 \cdot 7}{10 \cdot 13} \\
&= \dfrac{21}{130}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{15} \cdot \dfrac{7}{11} = $ [[  56/165  ]]
@Algebrite.check(56/165)
************
$$
\begin{align*}
\dfrac{8}{15} \cdot \dfrac{7}{11}
&= \dfrac{8 \cdot 7}{15 \cdot 11} \\
&= \dfrac{56}{165}
\end{align*}
$$
************
</div>

</section>





