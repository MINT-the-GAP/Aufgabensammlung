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
__$a)\;\;$__ $ \dfrac{5}{12} : 5 = $ [[  1/12  ]]
@Algebrite.check(1/12)
************
$$
\begin{align*}
\dfrac{5}{12} : 5
&= \dfrac{5}{12} : \dfrac{5}{1} \\
&= \dfrac{5}{12} \cdot \dfrac{1}{5} \\
&= \dfrac{5 \cdot 1}{12 \cdot 5} \\
&= \dfrac{5}{60}
= \dfrac{1}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \dfrac{7}{15} : 3 = $ [[  7/45  ]]
@Algebrite.check(7/45)
************
$$
\begin{align*}
\dfrac{7}{15} : 3
&= \dfrac{7}{15} : \dfrac{3}{1} \\
&= \dfrac{7}{15} \cdot \dfrac{1}{3} \\
&= \dfrac{7 \cdot 1}{15 \cdot 3} \\
&= \dfrac{7}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{9}{14} : 6 = $ [[  3/28  ]]
@Algebrite.check(3/28)
************
$$
\begin{align*}
\dfrac{9}{14} : 6
&= \dfrac{9}{14} : \dfrac{6}{1} \\
&= \dfrac{9}{14} \cdot \dfrac{1}{6} \\
&= \dfrac{9 \cdot 1}{14 \cdot 6} \\
&= \dfrac{9}{84}
= \dfrac{3}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{11}{18} : 2 = $ [[  11/36  ]]
@Algebrite.check(11/36)
************
$$
\begin{align*}
\dfrac{11}{18} : 2
&= \dfrac{11}{18} : \dfrac{2}{1} \\
&= \dfrac{11}{18} \cdot \dfrac{1}{2} \\
&= \dfrac{11 \cdot 1}{18 \cdot 2} \\
&= \dfrac{11}{36}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{8}{9} : 4 = $ [[  2/9  ]]
@Algebrite.check(2/9)
************
$$
\begin{align*}
\dfrac{8}{9} : 4
&= \dfrac{8}{9} : \dfrac{4}{1} \\
&= \dfrac{8}{9} \cdot \dfrac{1}{4} \\
&= \dfrac{8 \cdot 1}{9 \cdot 4} \\
&= \dfrac{8}{36}
= \dfrac{2}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{13}{20} : 5 = $ [[  13/100  ]]
@Algebrite.check(13/100)
************
$$
\begin{align*}
\dfrac{13}{20} : 5
&= \dfrac{13}{20} : \dfrac{5}{1} \\
&= \dfrac{13}{20} \cdot \dfrac{1}{5} \\
&= \dfrac{13 \cdot 1}{20 \cdot 5} \\
&= \dfrac{13}{100}
\end{align*}
$$
************
</div>

</section>





