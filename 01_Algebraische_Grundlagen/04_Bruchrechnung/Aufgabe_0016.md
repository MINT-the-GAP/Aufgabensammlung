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
__$a)\;\;$__ $  7 + \dfrac{3}{10} = $ [[  73/10  ]]
@Algebrite.check(73/10)
************
$$
\begin{align*}
7 + \dfrac{3}{10} &= \dfrac{7 \cdot 10}{1 \cdot 10} + \dfrac{3}{10} \\
&= \dfrac{70}{10} + \dfrac{3}{10} \\
&= \dfrac{70+3}{10} \\
&= \dfrac{73}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  2 + \dfrac{9}{13} = $ [[  35/13  ]]
@Algebrite.check(35/13)
************
$$
\begin{align*}
2 + \dfrac{9}{13} &= \dfrac{2 \cdot 13}{1 \cdot 13} + \dfrac{9}{13} \\
&= \dfrac{26}{13} + \dfrac{9}{13} \\
&= \dfrac{26+9}{13} \\
&= \dfrac{35}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  5 + \dfrac{4}{9} = $ [[  49/9  ]]
@Algebrite.check(49/9)
************
$$
\begin{align*}
5 + \dfrac{4}{9} &= \dfrac{5 \cdot 9}{1 \cdot 9} + \dfrac{4}{9} \\
&= \dfrac{45}{9} + \dfrac{4}{9} \\
&= \dfrac{45+4}{9} \\
&= \dfrac{49}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  8 + \dfrac{7}{12} = $ [[  103/12  ]]
@Algebrite.check(103/12)
************
$$
\begin{align*}
8 + \dfrac{7}{12} &= \dfrac{8 \cdot 12}{1 \cdot 12} + \dfrac{7}{12} \\
&= \dfrac{96}{12} + \dfrac{7}{12} \\
&= \dfrac{96+7}{12} \\
&= \dfrac{103}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  3 + \dfrac{5}{14} = $ [[  47/14  ]]
@Algebrite.check(47/14)
************
$$
\begin{align*}
3 + \dfrac{5}{14} &= \dfrac{3 \cdot 14}{1 \cdot 14} + \dfrac{5}{14} \\
&= \dfrac{42}{14} + \dfrac{5}{14} \\
&= \dfrac{42+5}{14} \\
&= \dfrac{47}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  4 + \dfrac{11}{15} = $ [[  71/15  ]]
@Algebrite.check(71/15)
************
$$
\begin{align*}
4 + \dfrac{11}{15} &= \dfrac{4 \cdot 15}{1 \cdot 15} + \dfrac{11}{15} \\
&= \dfrac{60}{15} + \dfrac{11}{15} \\
&= \dfrac{60+11}{15} \\
&= \dfrac{71}{15}
\end{align*}
$$
************
</div>

</section>





