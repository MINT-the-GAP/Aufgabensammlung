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
__$a)\;\;$__ $ 3\tfrac{2}{7} = $ [[  23/7  ]] 
@Algebrite.check(23/7)
************
$$
\begin{align*}
3\tfrac{2}{7} &= 3 + \dfrac{2}{7} \\
              &= \dfrac{21}{7} + \dfrac{2}{7} \\
              &= \dfrac{23}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 6\tfrac{5}{8} = $ [[  53/8  ]] 
@Algebrite.check(53/8)
************
$$
\begin{align*}
6\tfrac{5}{8} &= 6 + \dfrac{5}{8} \\
              &= \dfrac{48}{8} + \dfrac{5}{8} \\
              &= \dfrac{53}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 1\tfrac{3}{10} = $ [[  13/10  ]] 
@Algebrite.check(13/10)
************
$$
\begin{align*}
1\tfrac{3}{10} &= 1 + \dfrac{3}{10} \\
               &= \dfrac{10}{10} + \dfrac{3}{10} \\
               &= \dfrac{13}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 9\tfrac{4}{9} = $ [[  85/9  ]] 
@Algebrite.check(85/9)
************
$$
\begin{align*}
9\tfrac{4}{9} &= 9 + \dfrac{4}{9} \\
              &= \dfrac{81}{9} + \dfrac{4}{9} \\
              &= \dfrac{85}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 7\tfrac{11}{12} = $ [[  95/12  ]] 
@Algebrite.check(95/12)
************
$$
\begin{align*}
7\tfrac{11}{12} &= 7 + \dfrac{11}{12} \\
                &= \dfrac{84}{12} + \dfrac{11}{12} \\
                &= \dfrac{95}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 2\tfrac{5}{13} = $ [[  31/13  ]] 
@Algebrite.check(31/13)
************
$$
\begin{align*}
2\tfrac{5}{13} &= 2 + \dfrac{5}{13} \\
               &= \dfrac{26}{13} + \dfrac{5}{13} \\
               &= \dfrac{31}{13}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 4\tfrac{7}{15} = $ [[  67/15  ]] 
@Algebrite.check(67/15)
************
$$
\begin{align*}
4\tfrac{7}{15} &= 4 + \dfrac{7}{15} \\
               &= \dfrac{60}{15} + \dfrac{7}{15} \\
               &= \dfrac{67}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 10\tfrac{3}{4} = $ [[  43/4  ]] 
@Algebrite.check(43/4)
************
$$
\begin{align*}
10\tfrac{3}{4} &= 10 + \dfrac{3}{4} \\
               &= \dfrac{40}{4} + \dfrac{3}{4} \\
               &= \dfrac{43}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 5\tfrac{1}{6} = $ [[  31/6  ]] 
@Algebrite.check(31/6)
************
$$
\begin{align*}
5\tfrac{1}{6} &= 5 + \dfrac{1}{6} \\
              &= \dfrac{30}{6} + \dfrac{1}{6} \\
              &= \dfrac{31}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 8\tfrac{2}{11} = $ [[  90/11  ]] 
@Algebrite.check(90/11)
************
$$
\begin{align*}
8\tfrac{2}{11} &= 8 + \dfrac{2}{11} \\
               &= \dfrac{88}{11} + \dfrac{2}{11} \\
               &= \dfrac{90}{11}
\end{align*}
$$
************
</div>

</section>






