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

comment: Subtrahiere Brüche von natürlichen Zahlen und anders herum.

author: Martin Lommatzsch

-->




# Subtraktion mit Brüchen und natürlichen Zahlen



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  3 - \dfrac{2}{9} = $ [[  25/9  ]]
@Algebrite.check(25/9)
************
$$
\begin{align*}
3 - \dfrac{2}{9} &= \dfrac{3 \cdot 9}{1 \cdot 9} - \dfrac{2}{9} \\
&= \dfrac{27}{9} - \dfrac{2}{9} \\
&= \dfrac{27-2}{9} \\
&= \dfrac{25}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{11}{6} - 1 = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{11}{6} - 1 &= \dfrac{11}{6} - \dfrac{1 \cdot 6}{1 \cdot 6} \\
&= \dfrac{11}{6} - \dfrac{6}{6} \\
&= \dfrac{11-6}{6} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  7 - \dfrac{5}{12} = $ [[  79/12  ]]
@Algebrite.check(79/12)
************
$$
\begin{align*}
7 - \dfrac{5}{12} &= \dfrac{7 \cdot 12}{1 \cdot 12} - \dfrac{5}{12} \\
&= \dfrac{84}{12} - \dfrac{5}{12} \\
&= \dfrac{84-5}{12} \\
&= \dfrac{79}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{5} - 1 = $ [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
\dfrac{9}{5} - 1 &= \dfrac{9}{5} - \dfrac{1 \cdot 5}{1 \cdot 5} \\
&= \dfrac{9}{5} - \dfrac{5}{5} \\
&= \dfrac{9-5}{5} \\
&= \dfrac{4}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  4 - \dfrac{7}{16} = $ [[  57/16  ]]
@Algebrite.check(57/16)
************
$$
\begin{align*}
4 - \dfrac{7}{16} &= \dfrac{4 \cdot 16}{1 \cdot 16} - \dfrac{7}{16} \\
&= \dfrac{64}{16} - \dfrac{7}{16} \\
&= \dfrac{64-7}{16} \\
&= \dfrac{57}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{13}{8} - 1 = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{13}{8} - 1 &= \dfrac{13}{8} - \dfrac{1 \cdot 8}{1 \cdot 8} \\
&= \dfrac{13}{8} - \dfrac{8}{8} \\
&= \dfrac{13-8}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

</section>










