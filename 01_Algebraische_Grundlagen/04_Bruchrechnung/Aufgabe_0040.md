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



tags: Bruchrechnung, Division, leicht, sehr niedrig, Berechnen

comment: Division mit zwei Brüche.

author: Martin Lommatzsch

-->




# Division mit Brüchen



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{4}{9} : \dfrac{7}{6} = $ [[  8/21  ]]
@Algebrite.check(8/21)
************
$$
\begin{align*}
\dfrac{4}{9} : \dfrac{7}{6}  & =  \dfrac{4}{9} \cdot \dfrac{6}{7}   \\
 & = \dfrac{4 \cdot 6}{9 \cdot 7}  \\
 & = \dfrac{4 \cdot 2}{3 \cdot 7}  \\
 & = \dfrac{8}{21} \\
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{8} : \dfrac{3}{4} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{5}{8} : \dfrac{3}{4}
&= \dfrac{5}{8} \cdot \dfrac{4}{3} \\
&= \dfrac{5 \cdot 4}{8 \cdot 3} \\
&= \dfrac{20}{24} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{12} : \dfrac{5}{18} = $ [[  21/10  ]]
@Algebrite.check(21/10)
************
$$
\begin{align*}
\dfrac{7}{12} : \dfrac{5}{18}
&= \dfrac{7}{12} \cdot \dfrac{18}{5} \\
&= \dfrac{7 \cdot 18}{12 \cdot 5} \\
&= \dfrac{126}{60} \\
&= \dfrac{21}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{14} : \dfrac{3}{7} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{9}{14} : \dfrac{3}{7}
&= \dfrac{9}{14} \cdot \dfrac{7}{3} \\
&= \dfrac{9 \cdot 7}{14 \cdot 3} \\
&= \dfrac{63}{42} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{11}{15} : \dfrac{22}{45} = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\dfrac{11}{15} : \dfrac{22}{45}
&= \dfrac{11}{15} \cdot \dfrac{45}{22} \\
&= \dfrac{11 \cdot 45}{15 \cdot 22} \\
&= \dfrac{495}{330} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{8}{21} : \dfrac{4}{9} = $ [[  6/7  ]]
@Algebrite.check(6/7)
************
$$
\begin{align*}
\dfrac{8}{21} : \dfrac{4}{9}
&= \dfrac{8}{21} \cdot \dfrac{9}{4} \\
&= \dfrac{8 \cdot 9}{21 \cdot 4} \\
&= \dfrac{72}{84} \\
&= \dfrac{6}{7}
\end{align*}
$$
************
</div>

</section>










