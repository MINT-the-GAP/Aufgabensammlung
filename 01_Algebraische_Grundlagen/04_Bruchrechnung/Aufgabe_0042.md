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
__$a)\;\;$__ $  \dfrac{3}{7} : \dfrac{9}{14} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{3}{7} : \dfrac{9}{14}
&= \dfrac{3}{7} \cdot \dfrac{14}{9} \\
&= \dfrac{3 \cdot 14}{7 \cdot 9} \\
&= \dfrac{42}{63} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{8}{15} : \dfrac{4}{9} = $ [[  6/5  ]]
@Algebrite.check(6/5)
************
$$
\begin{align*}
\dfrac{8}{15} : \dfrac{4}{9}
&= \dfrac{8}{15} \cdot \dfrac{9}{4} \\
&= \dfrac{8 \cdot 9}{15 \cdot 4} \\
&= \dfrac{72}{60} \\
&= \dfrac{6}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{12} : \dfrac{10}{21} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\dfrac{5}{12} : \dfrac{10}{21}
&= \dfrac{5}{12} \cdot \dfrac{21}{10} \\
&= \dfrac{5 \cdot 21}{12 \cdot 10} \\
&= \dfrac{105}{120} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{18} : \dfrac{14}{27} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{7}{18} : \dfrac{14}{27}
&= \dfrac{7}{18} \cdot \dfrac{27}{14} \\
&= \dfrac{7 \cdot 27}{18 \cdot 14} \\
&= \dfrac{189}{252} \\
&= \dfrac{27}{36} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{9}{20} : \dfrac{3}{25} = $ [[  15/4  ]]
@Algebrite.check(15/4)
************
$$
\begin{align*}
\dfrac{9}{20} : \dfrac{3}{25}
&= \dfrac{9}{20} \cdot \dfrac{25}{3} \\
&= \dfrac{9 \cdot 25}{20 \cdot 3} \\
&= \dfrac{225}{60} \\
&= \dfrac{15}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{11}{24} : \dfrac{22}{36} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{11}{24} : \dfrac{22}{36}
&= \dfrac{11}{24} \cdot \dfrac{36}{22} \\
&= \dfrac{11 \cdot 36}{24 \cdot 22} \\
&= \dfrac{396}{528} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

</section>



