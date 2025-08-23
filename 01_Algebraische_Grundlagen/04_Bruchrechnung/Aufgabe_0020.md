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


tags: Bruchrechnung, Subtraktion, sehr leicht, sehr niedrig, Berechne

comment: Subtrahiere verwandte Brüche.

author: Martin Lommatzsch

-->




# Subtraktion mit Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{13}{18} - \dfrac{1}{9} = $ [[  11/18  ]]
@Algebrite.check(11/18)
************
$$
\begin{align*}
\dfrac{13}{18} - \dfrac{1}{9} &= \dfrac{13}{18} - \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{13}{18} - \dfrac{2}{18} \\
&= \dfrac{13-2}{18} \\
&= \dfrac{11}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{20} - \dfrac{1}{5} = $ [[  7/20  ]]
@Algebrite.check(7/20)
************
$$
\begin{align*}
\dfrac{11}{20} - \dfrac{1}{5} &= \dfrac{11}{20} - \dfrac{1 \cdot 4}{5 \cdot 4} \\
&= \dfrac{11}{20} - \dfrac{4}{20} \\
&= \dfrac{11-4}{20} \\
&= \dfrac{7}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{11}{14} - \dfrac{1}{7} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\dfrac{11}{14} - \dfrac{1}{7} &= \dfrac{11}{14} - \dfrac{1 \cdot 2}{7 \cdot 2} \\
&= \dfrac{11}{14} - \dfrac{2}{14} \\
&= \dfrac{11-2}{14} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{15} - \dfrac{1}{5} = $ [[  4/15  ]]
@Algebrite.check(4/15)
************
$$
\begin{align*}
\dfrac{7}{15} - \dfrac{1}{5} &= \dfrac{7}{15} - \dfrac{1 \cdot 3}{5 \cdot 3} \\
&= \dfrac{7}{15} - \dfrac{3}{15} \\
&= \dfrac{7-3}{15} \\
&= \dfrac{4}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{16} - \dfrac{1}{8} = $ [[  9/16  ]]
@Algebrite.check(9/16)
************
$$
\begin{align*}
\dfrac{11}{16} - \dfrac{1}{8} &= \dfrac{11}{16} - \dfrac{1 \cdot 2}{8 \cdot 2} \\
&= \dfrac{11}{16} - \dfrac{2}{16} \\
&= \dfrac{11-2}{16} \\
&= \dfrac{9}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{9} - \dfrac{1}{3} = $ [[  4/9  ]]
@Algebrite.check(4/9)
************
$$
\begin{align*}
\dfrac{7}{9} - \dfrac{1}{3} &= \dfrac{7}{9} - \dfrac{1 \cdot 3}{3 \cdot 3} \\
&= \dfrac{7}{9} - \dfrac{3}{9} \\
&= \dfrac{7-3}{9} \\
&= \dfrac{4}{9}
\end{align*}
$$
************
</div>

</section>




