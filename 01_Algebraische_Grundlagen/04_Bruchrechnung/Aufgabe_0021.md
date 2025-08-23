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
__$a)\;\;$__ $  2 - \dfrac{3}{5} = $ [[  7/5  ]]
@Algebrite.check(7/5)
************
$$
\begin{align*}
2 - \dfrac{3}{5} &= \dfrac{2 \cdot 5}{1 \cdot 5} - \dfrac{3}{5} \\
&= \dfrac{10}{5} - \dfrac{3}{5} \\
&= \dfrac{10-3}{5} \\
&= \dfrac{7}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  3 - \dfrac{7}{8} = $ [[  17/8  ]]
@Algebrite.check(17/8)
************
$$
\begin{align*}
3 - \dfrac{7}{8} &= \dfrac{3 \cdot 8}{1 \cdot 8} - \dfrac{7}{8} \\
&= \dfrac{24}{8} - \dfrac{7}{8} \\
&= \dfrac{24-7}{8} \\
&= \dfrac{17}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{19}{6} - 2 = $ [[  7/6  ]]
@Algebrite.check(7/6)
************
$$
\begin{align*}
\dfrac{19}{6} - 2 &= \dfrac{19}{6} - \dfrac{2 \cdot 6}{1 \cdot 6} \\
&= \dfrac{19}{6} - \dfrac{12}{6} \\
&= \dfrac{19-12}{6} \\
&= \dfrac{7}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  4 - \dfrac{9}{10} = $ [[  31/10  ]]
@Algebrite.check(31/10)
************
$$
\begin{align*}
4 - \dfrac{9}{10} &= \dfrac{4 \cdot 10}{1 \cdot 10} - \dfrac{9}{10} \\
&= \dfrac{40}{10} - \dfrac{9}{10} \\
&= \dfrac{40-9}{10} \\
&= \dfrac{31}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{17}{4} - 3 = $ [[  5/4  ]]
@Algebrite.check(5/4)
************
$$
\begin{align*}
\dfrac{17}{4} - 3 &= \dfrac{17}{4} - \dfrac{3 \cdot 4}{1 \cdot 4} \\
&= \dfrac{17}{4} - \dfrac{12}{4} \\
&= \dfrac{17-12}{4} \\
&= \dfrac{5}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  5 - \dfrac{11}{12} = $ [[  49/12  ]]
@Algebrite.check(49/12)
************
$$
\begin{align*}
5 - \dfrac{11}{12} &= \dfrac{5 \cdot 12}{1 \cdot 12} - \dfrac{11}{12} \\
&= \dfrac{60}{12} - \dfrac{11}{12} \\
&= \dfrac{60-11}{12} \\
&= \dfrac{49}{12}
\end{align*}
$$
************
</div>

</section>









