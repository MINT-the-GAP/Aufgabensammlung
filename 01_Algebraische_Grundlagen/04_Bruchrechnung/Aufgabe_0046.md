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
__$a)\;\;$__ $  \dfrac{3}{4} \cdot \dfrac{5}{6} : \dfrac{2}{7} = $ [[  105/48  ]] = [[  35/16  ]]
@Algebrite.check(35/16)
************
$$
\begin{align*}
\dfrac{3}{4} \cdot \dfrac{5}{6} : \dfrac{2}{7}
&= \dfrac{3}{4} \cdot \dfrac{5}{6} \cdot \dfrac{7}{2} \\
&= \dfrac{3 \cdot 5 \cdot 7}{4 \cdot 6 \cdot 2} \\
&= \dfrac{105}{48} \\
&= \dfrac{35}{16}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} : \dfrac{2}{3} \cdot \dfrac{5}{6} = $ [[  35/32  ]]
@Algebrite.check(35/32)
************
$$
\begin{align*}
\dfrac{7}{8} : \dfrac{2}{3} \cdot \dfrac{5}{6}
&= \dfrac{7}{8} \cdot \dfrac{3}{2} \cdot \dfrac{5}{6} \\
&= \dfrac{7 \cdot 3 \cdot 5}{8 \cdot 2 \cdot 6} \\
&= \dfrac{105}{96} \\
&= \dfrac{35}{32}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{9}{10} \cdot \dfrac{4}{7} : \dfrac{6}{5} = $ [[  3/7  ]]
@Algebrite.check(3/7)
************
$$
\begin{align*}
\dfrac{9}{10} \cdot \dfrac{4}{7} : \dfrac{6}{5}
&= \dfrac{9}{10} \cdot \dfrac{4}{7} \cdot \dfrac{5}{6} \\
&= \dfrac{9 \cdot 4 \cdot 5}{10 \cdot 7 \cdot 6} \\
&= \dfrac{180}{420} \\
&= \dfrac{3}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{2}{5} : \dfrac{3}{10} \cdot \dfrac{7}{9} = $ [[  14/27  ]]
@Algebrite.check(14/27)
************
$$
\begin{align*}
\dfrac{2}{5} : \dfrac{3}{10} \cdot \dfrac{7}{9}
&= \dfrac{2}{5} \cdot \dfrac{10}{3} \cdot \dfrac{7}{9} \\
&= \dfrac{2 \cdot 10 \cdot 7}{5 \cdot 3 \cdot 9} \\
&= \dfrac{140}{135} \\
&= \dfrac{14}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{8}{9} \cdot \dfrac{3}{4} : \dfrac{2}{5} = $ [[  30/9  ]] = [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{8}{9} \cdot \dfrac{3}{4} : \dfrac{2}{5}
&= \dfrac{8}{9} \cdot \dfrac{3}{4} \cdot \dfrac{5}{2} \\
&= \dfrac{8 \cdot 3 \cdot 5}{9 \cdot 4 \cdot 2} \\
&= \dfrac{120}{72} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{6} : \dfrac{10}{9} \cdot \dfrac{7}{8} = $ [[  21/32  ]]
@Algebrite.check(21/32)
************
$$
\begin{align*}
\dfrac{5}{6} : \dfrac{10}{9} \cdot \dfrac{7}{8}
&= \dfrac{5}{6} \cdot \dfrac{9}{10} \cdot \dfrac{7}{8} \\
&= \dfrac{5 \cdot 9 \cdot 7}{6 \cdot 10 \cdot 8} \\
&= \dfrac{315}{480} \\
&= \dfrac{21}{32}
\end{align*}
$$
************
</div>

</section>



