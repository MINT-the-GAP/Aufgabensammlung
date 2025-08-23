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



tags: Bruchrechnung, Division, Multiplikation, mittel, niedrig, Berechnen

comment: Division und Multiplikation mit drei Brüche.

author: Martin Lommatzsch

-->




# Division und Multiplikation mit Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{3} \cdot \dfrac{5}{6} : \dfrac{4}{7} = $ [[  35/36  ]]
@Algebrite.check(35/36)
************
$$
\begin{align*}
\dfrac{2}{3} \cdot \dfrac{5}{6} : \dfrac{4}{7}
&= \dfrac{2}{3} \cdot \dfrac{5}{6} \cdot \dfrac{7}{4} \\
&= \dfrac{2 \cdot 5 \cdot 7}{3 \cdot 6 \cdot 4} \\
&= \dfrac{70}{72} \\
&= \dfrac{35}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} : \dfrac{2}{5} \cdot \dfrac{7}{6} = $ [[  35/16  ]]
@Algebrite.check(35/16)
************
$$
\begin{align*}
\dfrac{3}{4} : \dfrac{2}{5} \cdot \dfrac{7}{6}
&= \dfrac{3}{4} \cdot \dfrac{5}{2} \cdot \dfrac{7}{6} \\
&= \dfrac{3 \cdot 5 \cdot 7}{4 \cdot 2 \cdot 6} \\
&= \dfrac{105}{48} \\
&= \dfrac{35}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{8} \cdot \dfrac{3}{7} : \dfrac{2}{9} = $ [[  135/112  ]]
@Algebrite.check(135/112)
************
$$
\begin{align*}
\dfrac{5}{8} \cdot \dfrac{3}{7} : \dfrac{2}{9}
&= \dfrac{5}{8} \cdot \dfrac{3}{7} \cdot \dfrac{9}{2} \\
&= \dfrac{5 \cdot 3 \cdot 9}{8 \cdot 7 \cdot 2} \\
&= \dfrac{135}{112}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{9} : \dfrac{5}{6} \cdot \dfrac{2}{3} = $ [[  14/45  ]]
@Algebrite.check(14/45)
************
$$
\begin{align*}
\dfrac{7}{9} : \dfrac{5}{6} \cdot \dfrac{2}{3}
&= \dfrac{7}{9} \cdot \dfrac{6}{5} \cdot \dfrac{2}{3} \\
&= \dfrac{7 \cdot 6 \cdot 2}{9 \cdot 5 \cdot 3} \\
&= \dfrac{84}{135} \\
&= \dfrac{14}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{5} \cdot \dfrac{7}{8} : \dfrac{3}{10} = $ [[  14/3  ]]
@Algebrite.check(14/3)
************
$$
\begin{align*}
\dfrac{4}{5} \cdot \dfrac{7}{8} : \dfrac{3}{10}
&= \dfrac{4}{5} \cdot \dfrac{7}{8} \cdot \dfrac{10}{3} \\
&= \dfrac{4 \cdot 7 \cdot 10}{5 \cdot 8 \cdot 3} \\
&= \dfrac{280}{120} \\
&= \dfrac{14}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{10} : \dfrac{3}{4} \cdot \dfrac{5}{6} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{9}{10} : \dfrac{3}{4} \cdot \dfrac{5}{6}
&= \dfrac{9}{10} \cdot \dfrac{4}{3} \cdot \dfrac{5}{6} \\
&= \dfrac{9 \cdot 4 \cdot 5}{10 \cdot 3 \cdot 6} \\
&= \dfrac{180}{180} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

</section>







