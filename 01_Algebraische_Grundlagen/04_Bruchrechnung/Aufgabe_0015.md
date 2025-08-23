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


tags: Bruchrechnung, Addition, sehr leicht, sehr niedrig, Berechne

comment: Addiere Brüche mit natürlichen Zahlen.

author: Martin Lommatzsch

-->




# Addition von Brüchen mit natürlichen Zahlen




**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3 + \dfrac{5}{11} = $ [[  38/11  ]]
@Algebrite.check(38/11)
************
$$
\begin{align*}
3 + \dfrac{5}{11} &= \dfrac{3 \cdot 11}{1 \cdot 11} + \dfrac{5}{11} \\
&= \dfrac{33}{11} + \dfrac{5}{11} \\
&= \dfrac{33+5}{11} \\
&= \dfrac{38}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  1 + \dfrac{7}{12} = $ [[  19/12  ]]
@Algebrite.check(19/12)
************
$$
\begin{align*}
1 + \dfrac{7}{12} &= \dfrac{1 \cdot 12}{1 \cdot 12} + \dfrac{7}{12} \\
&= \dfrac{12}{12} + \dfrac{7}{12} \\
&= \dfrac{12+7}{12} \\
&= \dfrac{19}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  4 + \dfrac{2}{9} = $ [[  38/9  ]]
@Algebrite.check(38/9)
************
$$
\begin{align*}
4 + \dfrac{2}{9} &= \dfrac{4 \cdot 9}{1 \cdot 9} + \dfrac{2}{9} \\
&= \dfrac{36}{9} + \dfrac{2}{9} \\
&= \dfrac{36+2}{9} \\
&= \dfrac{38}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  5 + \dfrac{3}{14} = $ [[  73/14  ]]
@Algebrite.check(73/14)
************
$$
\begin{align*}
5 + \dfrac{3}{14} &= \dfrac{5 \cdot 14}{1 \cdot 14} + \dfrac{3}{14} \\
&= \dfrac{70}{14} + \dfrac{3}{14} \\
&= \dfrac{70+3}{14} \\
&= \dfrac{73}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  2 + \dfrac{11}{15} = $ [[  41/15  ]]
@Algebrite.check(41/15)
************
$$
\begin{align*}
2 + \dfrac{11}{15} &= \dfrac{2 \cdot 15}{1 \cdot 15} + \dfrac{11}{15} \\
&= \dfrac{30}{15} + \dfrac{11}{15} \\
&= \dfrac{30+11}{15} \\
&= \dfrac{41}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  6 + \dfrac{1}{8} = $ [[  49/8  ]]
@Algebrite.check(49/8)
************
$$
\begin{align*}
6 + \dfrac{1}{8} &= \dfrac{6 \cdot 8}{1 \cdot 8} + \dfrac{1}{8} \\
&= \dfrac{48}{8} + \dfrac{1}{8} \\
&= \dfrac{48+1}{8} \\
&= \dfrac{49}{8}
\end{align*}
$$
************
</div>

</section>





