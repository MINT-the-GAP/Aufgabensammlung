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
__$a)\;\;$__ $  \dfrac{6}{11} : \dfrac{3}{22} = $ [[  4  ]]
@Algebrite.check(4)
************
$$
\begin{align*}
\dfrac{6}{11} : \dfrac{3}{22}
&= \dfrac{6}{11} \cdot \dfrac{22}{3} \\
&= \dfrac{6 \cdot 22}{11 \cdot 3} \\
&= \dfrac{132}{33} \\
&= 4
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{12} : \dfrac{10}{18} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{12} : \dfrac{10}{18}
&= \dfrac{5}{12} \cdot \dfrac{18}{10} \\
&= \dfrac{5 \cdot 18}{12 \cdot 10} \\
&= \dfrac{90}{120} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{7}{16} : \dfrac{14}{24} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{7}{16} : \dfrac{14}{24}
&= \dfrac{7}{16} \cdot \dfrac{24}{14} \\
&= \dfrac{7 \cdot 24}{16 \cdot 14} \\
&= \dfrac{168}{224} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{9}{20} : \dfrac{3}{25} = $ [[  15/4  ]]
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
__$e)\;\;$__ $  \dfrac{4}{9} : \dfrac{2}{15} = $ [[  10/3  ]]
@Algebrite.check(10/3)
************
$$
\begin{align*}
\dfrac{4}{9} : \dfrac{2}{15}
&= \dfrac{4}{9} \cdot \dfrac{15}{2} \\
&= \dfrac{4 \cdot 15}{9 \cdot 2} \\
&= \dfrac{60}{18} \\
&= \dfrac{10}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{10}{21} : \dfrac{5}{14} = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\dfrac{10}{21} : \dfrac{5}{14}
&= \dfrac{10}{21} \cdot \dfrac{14}{5} \\
&= \dfrac{10 \cdot 14}{21 \cdot 5} \\
&= \dfrac{140}{105} \\
&= \dfrac{4}{3}
\end{align*}
$$
************
</div>

</section>






