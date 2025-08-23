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



tags: Bruchrechnung, Division, Multiplikation, leicht, niedrig, Berechnen

comment: Division und Multiplikation mit zwei Brüche.

author: Martin Lommatzsch

-->




# Division und Multiplikation mit Brüchen

**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{3}{5} \cdot \dfrac{7}{8} = $ [[  21/40  ]]
@Algebrite.check(21/40)
************
$$
\begin{align*}
\dfrac{3}{5} \cdot \dfrac{7}{8}
&= \dfrac{3 \cdot 7}{5 \cdot 8} \\
&= \dfrac{21}{40}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} : \dfrac{10}{9} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{6} : \dfrac{10}{9}
&= \dfrac{5}{6} \cdot \dfrac{9}{10} \\
&= \dfrac{45}{60} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{4}{7} \cdot \dfrac{6}{11} = $ [[  24/77  ]]
@Algebrite.check(24/77)
************
$$
\begin{align*}
\dfrac{4}{7} \cdot \dfrac{6}{11}
&= \dfrac{4 \cdot 6}{7 \cdot 11} \\
&= \dfrac{24}{77}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{10} : \dfrac{3}{20} = $ [[  6  ]]
@Algebrite.check(6)
************
$$
\begin{align*}
\dfrac{9}{10} : \dfrac{3}{20}
&= \dfrac{9}{10} \cdot \dfrac{20}{3} \\
&= \dfrac{180}{30} \\
&= 6
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{7}{12} \cdot \dfrac{5}{9} = $ [[  35/108  ]]
@Algebrite.check(35/108)
************
$$
\begin{align*}
\dfrac{7}{12} \cdot \dfrac{5}{9}
&= \dfrac{7 \cdot 5}{12 \cdot 9} \\
&= \dfrac{35}{108}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$g)\;\;$__ $  \dfrac{5}{12} \cdot \dfrac{9}{14} = $ [[  15/56  ]]
@Algebrite.check(15/56)
************
$$
\begin{align*}
\dfrac{5}{12} \cdot \dfrac{9}{14}
&= \dfrac{5 \cdot 9}{12 \cdot 14} \\
&= \dfrac{45}{168} \\
&= \dfrac{15}{56}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$h)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>


</section>








