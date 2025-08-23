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





<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ 2\tfrac{5}{6} = $ [[  17/6  ]] 
@Algebrite.check(17/6)
************
$$
\begin{align*}
2\tfrac{5}{6} &= 2 + \dfrac{5}{6} \\
              &= \dfrac{12}{6} + \dfrac{5}{6} \\
              &= \dfrac{17}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ 7\tfrac{1}{3} = $ [[  22/3  ]] 
@Algebrite.check(22/3)
************
$$
\begin{align*}
7\tfrac{1}{3} &= 7 + \dfrac{1}{3} \\
              &= \dfrac{21}{3} + \dfrac{1}{3} \\
              &= \dfrac{22}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ 4\tfrac{7}{8} = $ [[  39/8  ]] 
@Algebrite.check(39/8)
************
$$
\begin{align*}
4\tfrac{7}{8} &= 4 + \dfrac{7}{8} \\
              &= \dfrac{32}{8} + \dfrac{7}{8} \\
              &= \dfrac{39}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 9\tfrac{2}{5} = $ [[  47/5  ]] 
@Algebrite.check(47/5)
************
$$
\begin{align*}
9\tfrac{2}{5} &= 9 + \dfrac{2}{5} \\
              &= \dfrac{45}{5} + \dfrac{2}{5} \\
              &= \dfrac{47}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ 3\tfrac{3}{10} = $ [[  33/10  ]] 
@Algebrite.check(33/10)
************
$$
\begin{align*}
3\tfrac{3}{10} &= 3 + \dfrac{3}{10} \\
               &= \dfrac{30}{10} + \dfrac{3}{10} \\
               &= \dfrac{33}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ 6\tfrac{5}{12} = $ [[  77/12  ]] 
@Algebrite.check(77/12)
************
$$
\begin{align*}
6\tfrac{5}{12} &= 6 + \dfrac{5}{12} \\
               &= \dfrac{72}{12} + \dfrac{5}{12} \\
               &= \dfrac{77}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$g)\;\;$__ $ 1\tfrac{7}{9} = $ [[  16/9  ]] 
@Algebrite.check(16/9)
************
$$
\begin{align*}
1\tfrac{7}{9} &= 1 + \dfrac{7}{9} \\
              &= \dfrac{9}{9} + \dfrac{7}{9} \\
              &= \dfrac{16}{9}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$h)\;\;$__ $ 8\tfrac{11}{12} = $ [[  107/12  ]] 
@Algebrite.check(107/12)
************
$$
\begin{align*}
8\tfrac{11}{12} &= 8 + \dfrac{11}{12} \\
                &= \dfrac{96}{12} + \dfrac{11}{12} \\
                &= \dfrac{107}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$i)\;\;$__ $ 10\tfrac{1}{2} = $ [[  21/2  ]] 
@Algebrite.check(21/2)
************
$$
\begin{align*}
10\tfrac{1}{2} &= 10 + \dfrac{1}{2} \\
               &= \dfrac{20}{2} + \dfrac{1}{2} \\
               &= \dfrac{21}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$j)\;\;$__ $ 2\tfrac{4}{7} = $ [[  18/7  ]] 
@Algebrite.check(18/7)
************
$$
\begin{align*}
2\tfrac{4}{7} &= 2 + \dfrac{4}{7} \\
              &= \dfrac{14}{7} + \dfrac{4}{7} \\
              &= \dfrac{18}{7}
\end{align*}
$$
************
</div>

</section>







