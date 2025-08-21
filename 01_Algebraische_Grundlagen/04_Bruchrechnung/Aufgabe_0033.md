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


tags: Bruchrechnung, Division, sehr leicht, sehr niedrig, Berechne

comment: Dividiere Brüche durch natürlichen Zahlen.

author: Martin Lommatzsch

-->




# Division von Brüchen durch natürliche Zahlen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{4} : 2 = $ [[  3/8  ]]
@Algebrite.check(3/8)
************
$$
\begin{align*}
\dfrac{3}{4} : 2 &= \dfrac{3}{4} : \dfrac{2}{1} \\
&= \dfrac{3}{4} \cdot \dfrac{1}{2} \\
&= \dfrac{3 \cdot 1}{4 \cdot 2} \\
&= \dfrac{3}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} : 5 = $ [[  1/6  ]]
@Algebrite.check(1/6)
************
$$
\begin{align*}
\dfrac{5}{6} : 5 &= \dfrac{5}{6} : \dfrac{5}{1} \\
&= \dfrac{5}{6} \cdot \dfrac{1}{5} \\
&= \dfrac{5 \cdot 1}{6 \cdot 5} \\
&= \dfrac{1}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{8} : 7 = $ [[  1/8  ]]
@Algebrite.check(1/8)
************
$$
\begin{align*}
\dfrac{7}{8} : 7 &= \dfrac{7}{8} : \dfrac{7}{1} \\
&= \dfrac{7}{8} \cdot \dfrac{1}{7} \\
&= \dfrac{7 \cdot 1}{8 \cdot 7} \\
&= \dfrac{1}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} : 3 = $ [[  3/10  ]]
@Algebrite.check(3/10)
************
$$
\begin{align*}
\dfrac{9}{10} : 3 &= \dfrac{9}{10} : \dfrac{3}{1} \\
&= \dfrac{9}{10} \cdot \dfrac{1}{3} \\
&= \dfrac{9 \cdot 1}{10 \cdot 3} \\
&= \dfrac{9}{30} \\
&= \dfrac{3}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{9} : 2 = $ [[  2/9  ]]
@Algebrite.check(2/9)
************
$$
\begin{align*}
\dfrac{4}{9} : 2 &= \dfrac{4}{9} : \dfrac{2}{1} \\
&= \dfrac{4}{9} \cdot \dfrac{1}{2} \\
&= \dfrac{4 \cdot 1}{9 \cdot 2} \\
&= \dfrac{4}{18} \\
&= \dfrac{2}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{11} : 5 = $ [[  2/11  ]]
@Algebrite.check(2/11)
************
$$
\begin{align*}
\dfrac{10}{11} : 5 &= \dfrac{10}{11} : \dfrac{5}{1} \\
&= \dfrac{10}{11} \cdot \dfrac{1}{5} \\
&= \dfrac{10 \cdot 1}{11 \cdot 5} \\
&= \dfrac{10}{55} \\
&= \dfrac{2}{11}
\end{align*}
$$
************
</div>

</section>





