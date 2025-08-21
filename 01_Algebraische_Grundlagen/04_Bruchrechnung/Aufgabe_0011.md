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
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{1}{8} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{1}{8} & = \dfrac{1 \cdot 4}{2 \cdot 4} + \dfrac{1}{8}  \\
 & = \dfrac{4}{8} + \dfrac{1}{8}  \\
 & = \dfrac{4+1}{8}  \\
 & = \dfrac{5}{8} \\
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{1}{3} + \dfrac{1}{6} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{1}{3} + \dfrac{1}{6} & = \dfrac{1 \cdot 2}{3 \cdot 2} + \dfrac{1}{6}  \\
 & = \dfrac{2}{6} + \dfrac{1}{6}  \\
 & = \dfrac{2+1}{6}  \\
 & = \dfrac{3}{6} = \dfrac{1}{2} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{5} + \dfrac{1}{10} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{2}{5} + \dfrac{1}{10} & = \dfrac{2 \cdot 2}{5 \cdot 2} + \dfrac{1}{10}  \\
 & = \dfrac{4}{10} + \dfrac{1}{10}  \\
 & = \dfrac{4+1}{10}  \\
 & = \dfrac{5}{10} = \dfrac{1}{2} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{4} + \dfrac{1}{8} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{1}{8} & = \dfrac{3 \cdot 2}{4 \cdot 2} + \dfrac{1}{8}  \\
 & = \dfrac{6}{8} + \dfrac{1}{8}  \\
 & = \dfrac{6+1}{8}  \\
 & = \dfrac{7}{8} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{6} + \dfrac{1}{12} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{1}{12} & = \dfrac{5 \cdot 2}{6 \cdot 2} + \dfrac{1}{12}  \\
 & = \dfrac{10}{12} + \dfrac{1}{12}  \\
 & = \dfrac{10+1}{12}  \\
 & = \dfrac{11}{12} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{10} + \dfrac{1}{5} = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\dfrac{7}{10} + \dfrac{1}{5} & = \dfrac{7}{10} + \dfrac{1 \cdot 2}{5 \cdot 2}  \\
 & = \dfrac{7}{10} + \dfrac{2}{10}  \\
 & = \dfrac{7+2}{10}  \\
 & = \dfrac{9}{10} \\
\end{align*}
$$
************
</div>

</section>





