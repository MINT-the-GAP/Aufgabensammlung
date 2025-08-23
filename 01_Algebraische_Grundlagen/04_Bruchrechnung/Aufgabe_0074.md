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
__$a)\;\;$__ $ 4\tfrac{2}{5} = $ [[  22/5  ]] 
@Algebrite.check(22/5)
************
$$
\begin{align*}
4\tfrac{2}{5} &= 4 + \dfrac{2}{5} \\
              &= \dfrac{20}{5} + \dfrac{2}{5} \\
              &= \dfrac{22}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 3\tfrac{7}{8} = $ [[  31/8  ]] 
@Algebrite.check(31/8)
************
$$
\begin{align*}
3\tfrac{7}{8} &= 3 + \dfrac{7}{8} \\
              &= \dfrac{24}{8} + \dfrac{7}{8} \\
              &= \dfrac{31}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 7\tfrac{5}{6} = $ [[  47/6  ]] 
@Algebrite.check(47/6)
************
$$
\begin{align*}
7\tfrac{5}{6} &= 7 + \dfrac{5}{6} \\
              &= \dfrac{42}{6} + \dfrac{5}{6} \\
              &= \dfrac{47}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 2\tfrac{9}{10} = $ [[  29/10  ]] 
@Algebrite.check(29/10)
************
$$
\begin{align*}
2\tfrac{9}{10} &= 2 + \dfrac{9}{10} \\
               &= \dfrac{20}{10} + \dfrac{9}{10} \\
               &= \dfrac{29}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 5\tfrac{11}{12} = $ [[  71/12  ]] 
@Algebrite.check(71/12)
************
$$
\begin{align*}
5\tfrac{11}{12} &= 5 + \dfrac{11}{12} \\
                &= \dfrac{60}{12} + \dfrac{11}{12} \\
                &= \dfrac{71}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 9\tfrac{4}{7} = $ [[  67/7  ]] 
@Algebrite.check(67/7)
************
$$
\begin{align*}
9\tfrac{4}{7} &= 9 + \dfrac{4}{7} \\
              &= \dfrac{63}{7} + \dfrac{4}{7} \\
              &= \dfrac{67}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 6\tfrac{3}{11} = $ [[  69/11  ]] 
@Algebrite.check(69/11)
************
$$
\begin{align*}
6\tfrac{3}{11} &= 6 + \dfrac{3}{11} \\
               &= \dfrac{66}{11} + \dfrac{3}{11} \\
               &= \dfrac{69}{11}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{2}{9} = $ [[  74/9  ]] 
@Algebrite.check(74/9)
************
$$
\begin{align*}
8\tfrac{2}{9} &= 8 + \dfrac{2}{9} \\
              &= \dfrac{72}{9} + \dfrac{2}{9} \\
              &= \dfrac{74}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 1\tfrac{6}{7} = $ [[  13/7  ]] 
@Algebrite.check(13/7)
************
$$
\begin{align*}
1\tfrac{6}{7} &= 1 + \dfrac{6}{7} \\
              &= \dfrac{7}{7} + \dfrac{6}{7} \\
              &= \dfrac{13}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 10\tfrac{5}{6} = $ [[  65/6  ]] 
@Algebrite.check(65/6)
************
$$
\begin{align*}
10\tfrac{5}{6} &= 10 + \dfrac{5}{6} \\
               &= \dfrac{60}{6} + \dfrac{5}{6} \\
               &= \dfrac{65}{6}
\end{align*}
$$
************
</div>

</section>









