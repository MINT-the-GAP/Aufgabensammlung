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



tags: Bruchrechnung, Zahlenverständnis, sehr leicht, sehr niedrig, Bestimmen

comment: Wandle gemischte Zahlen in einen unechten Bruch um.

author: Martin Lommatzsch

-->




# Von gemischten Zahlen zu unechten Brüchen




**Bestimme** unechten Bruch aus der gemischten Zahl.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2\tfrac{7}{9} = $ [[  25/9  ]] 
@Algebrite.check(25/9)
************
$$
\begin{align*}
2\tfrac{7}{9} &= 2 + \dfrac{7}{9} \\
              &= \dfrac{18}{9} + \dfrac{7}{9} \\
              &= \dfrac{25}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6\tfrac{1}{5} = $ [[  31/5  ]] 
@Algebrite.check(31/5)
************
$$
\begin{align*}
6\tfrac{1}{5} &= 6 + \dfrac{1}{5} \\
              &= \dfrac{30}{5} + \dfrac{1}{5} \\
              &= \dfrac{31}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 9\tfrac{2}{7} = $ [[  65/7  ]] 
@Algebrite.check(65/7)
************
$$
\begin{align*}
9\tfrac{2}{7} &= 9 + \dfrac{2}{7} \\
              &= \dfrac{63}{7} + \dfrac{2}{7} \\
              &= \dfrac{65}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 4\tfrac{3}{11} = $ [[  47/11  ]] 
@Algebrite.check(47/11)
************
$$
\begin{align*}
4\tfrac{3}{11} &= 4 + \dfrac{3}{11} \\
               &= \dfrac{44}{11} + \dfrac{3}{11} \\
               &= \dfrac{47}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 7\tfrac{9}{10} = $ [[  79/10  ]] 
@Algebrite.check(79/10)
************
$$
\begin{align*}
7\tfrac{9}{10} &= 7 + \dfrac{9}{10} \\
               &= \dfrac{70}{10} + \dfrac{9}{10} \\
               &= \dfrac{79}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 5\tfrac{8}{13} = $ [[  73/13  ]] 
@Algebrite.check(73/13)
************
$$
\begin{align*}
5\tfrac{8}{13} &= 5 + \dfrac{8}{13} \\
               &= \dfrac{65}{13} + \dfrac{8}{13} \\
               &= \dfrac{73}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 3\tfrac{11}{12} = $ [[  47/12  ]] 
@Algebrite.check(47/12)
************
$$
\begin{align*}
3\tfrac{11}{12} &= 3 + \dfrac{11}{12} \\
                &= \dfrac{36}{12} + \dfrac{11}{12} \\
                &= \dfrac{47}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{4}{9} = $ [[  76/9  ]] 
@Algebrite.check(76/9)
************
$$
\begin{align*}
8\tfrac{4}{9} &= 8 + \dfrac{4}{9} \\
              &= \dfrac{72}{9} + \dfrac{4}{9} \\
              &= \dfrac{76}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 1\tfrac{5}{6} = $ [[  11/6  ]] 
@Algebrite.check(11/6)
************
$$
\begin{align*}
1\tfrac{5}{6} &= 1 + \dfrac{5}{6} \\
              &= \dfrac{6}{6} + \dfrac{5}{6} \\
              &= \dfrac{11}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 10\tfrac{7}{8} = $ [[  87/8  ]] 
@Algebrite.check(87/8)
************
$$
\begin{align*}
10\tfrac{7}{8} &= 10 + \dfrac{7}{8} \\
               &= \dfrac{80}{8} + \dfrac{7}{8} \\
               &= \dfrac{87}{8}
\end{align*}
$$
************
</div>

</section>







