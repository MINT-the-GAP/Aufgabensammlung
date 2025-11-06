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


tags: Bruchrechnung, leicht, niedrig, Berechnen

comment: Wie viel sind zum Beispiel $\frac{1}{4}$ von 4000€? Bestimme den Anteilswert.

author: Martin Lommatzsch

-->




# Bruchanteile von Bruchanteilen


**Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $\dfrac{5}{6}$ von $36\,$€?  \
[[  105/2  ]]€
@Algebrite.check(105/2)
************
$$
\begin{align*}
\dfrac{7}{4}\cdot\dfrac{5}{6}\cdot 36\,\text{€}
&= \dfrac{7\cdot 5\cdot 36\,\text{€}}{4\cdot 6}
= \dfrac{35\cdot36}{24}\,\text{€}
= \dfrac{35\cdot 3}{2}\,\text{€}
= \dfrac{105}{2}\,\text{€}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $\dfrac{2}{3}$ von $45\,$kg?  \
[[  135/4  ]]kg
@Algebrite.check(135/4)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot\dfrac{2}{3}\cdot 45\,\text{kg}
&= \dfrac{9\cdot 2\cdot 45\,\text{kg}}{8\cdot 3}
= \dfrac{810}{24}\,\text{kg}
= \dfrac{135}{4}\,\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $\dfrac{7}{9}$ von $80\,$min?  \
[[  448/9  ]]min
@Algebrite.check(448/9)
************
$$
\begin{align*}
\dfrac{4}{5}\cdot\dfrac{7}{9}\cdot 80\,\text{min}
&= \dfrac{4\cdot 7\cdot 80\,\text{min}}{5\cdot 9}
= \dfrac{2240}{45}\,\text{min}
= \dfrac{448}{9}\,\text{min}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{11}{12}$ von $\dfrac{3}{5}$ von $95\,\ell$?  \
[[  209/4  ]] $\ell$
@Algebrite.check(209/4)
************
$$
\begin{align*}
\dfrac{11}{12}\cdot\dfrac{3}{5}\cdot 95\,\ell
&= \dfrac{11\cdot 3\cdot 95\,\ell}{12\cdot 5} 
= \dfrac{3135}{60}\,\ell
= \dfrac{209}{4}\,\ell
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $\dfrac{7}{8}$ von $64\,$m?  \
[[  140/3  ]]m
@Algebrite.check(140/3)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot\dfrac{7}{8}\cdot 64\,\text{m}
&= \dfrac{5\cdot 7\cdot 64}{6\cdot 8}\,\text{m}
= \dfrac{2240}{48}\,\text{m}
= \dfrac{140}{3}\,\text{m}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{7}{5}$ von $\dfrac{3}{8}$ von $50\,$€?  \
[[  105/4  ]]€
@Algebrite.check(105/4)
************
$$
\begin{align*}
\dfrac{7}{5}\cdot\dfrac{3}{8}\cdot 50\,\text{€}
&= \dfrac{7\cdot 3\cdot 50\,\text{€}}{5\cdot 8}
= \dfrac{1050}{40}\,\text{€}
= \dfrac{105}{4}\,\text{€}
\end{align*}
$$
************
</div>

</section>


