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
__$a)\;\;$__ $  \dfrac{5}{12} + \dfrac{1}{6} = $ [[  7/12  ]]
@Algebrite.check(7/12)
************
$$
\begin{align*}
\dfrac{5}{12} + \dfrac{1}{6} &= \dfrac{5}{12} + \dfrac{1 \cdot 2}{6 \cdot 2} \\
&= \dfrac{5}{12} + \dfrac{2}{12} \\
&= \dfrac{7}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{9}{16} + \dfrac{1}{8} = $ [[  11/16  ]]
@Algebrite.check(11/16)
************
$$
\begin{align*}
\dfrac{9}{16} + \dfrac{1}{8} &= \dfrac{9}{16} + \dfrac{1 \cdot 2}{8 \cdot 2} \\
&= \dfrac{9}{16} + \dfrac{2}{16} \\
&= \dfrac{11}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{18} + \dfrac{1}{9} = $ [[  7/18  ]]
@Algebrite.check(7/18)
************
$$
\begin{align*}
\dfrac{5}{18} + \dfrac{1}{9} &= \dfrac{5}{18} + \dfrac{1 \cdot 2}{9 \cdot 2} \\
&= \dfrac{5}{18} + \dfrac{2}{18} \\
&= \dfrac{7}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{15}{28} + \dfrac{1}{7} = $ [[  19/28  ]]
@Algebrite.check(19/28)
************
$$
\begin{align*}
\dfrac{15}{28} + \dfrac{1}{7} &= \dfrac{15}{28} + \dfrac{1 \cdot 4}{7 \cdot 4} \\
&= \dfrac{15}{28} + \dfrac{4}{28} \\
&= \dfrac{19}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{8}{21} + \dfrac{1}{7} = $ [[  11/21  ]]
@Algebrite.check(11/21)
************
$$
\begin{align*}
\dfrac{8}{21} + \dfrac{1}{7} &= \dfrac{8}{21} + \dfrac{1 \cdot 3}{7 \cdot 3} \\
&= \dfrac{8}{21} + \dfrac{3}{21} \\
&= \dfrac{11}{21}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{16}{30} + \dfrac{1}{10} = $ [[  19/30  ]]
@Algebrite.check(22/30)
************
$$
\begin{align*}
\dfrac{16}{30} + \dfrac{1}{10} &= \dfrac{16}{30} + \dfrac{1 \cdot 3}{10 \cdot 3} \\
&= \dfrac{16}{30} + \dfrac{3}{30} \\
&= \dfrac{19}{30}
\end{align*}
$$
************
</div>

</section>







