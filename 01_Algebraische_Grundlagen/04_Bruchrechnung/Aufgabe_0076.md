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



tags: Bruchrechnung, Vorrangsregeln, schwer, normal, Berechnen

comment: Rechne mit Brüchen, ohne dass direkt ein Bruch dargestellt ist.

author: Martin Lommatzsch

-->




# Versteckte Brüche



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \;(2:3)\;+\;(5:12)\;-\;(1:6)\;=\; $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
(2:3)+(5:12)-(1:6)
&= \dfrac{2}{3}+\dfrac{5}{12}-\dfrac{1}{6} \\
&= \dfrac{8}{12}+\dfrac{5}{12}-\dfrac{2}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \;(5:8)\;+\;(7:12):(7:18)\;=\; $ [[  17/8  ]]
@Algebrite.check(17/8)
************
$$
\begin{align*}
(5:8)+(7:12):(7:18)
&= \dfrac{5}{8}+\left(\dfrac{7}{12}:\dfrac{7}{18}\right) \\
&= \dfrac{5}{8}+\left(\dfrac{7}{12}\cdot\dfrac{18}{7}\right) \\
&= \dfrac{5}{8}+\dfrac{18}{12}
= \dfrac{5}{8}+\dfrac{3}{2} \\
&= \dfrac{5}{8}+\dfrac{12}{8}
= \dfrac{17}{8}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \;(4:9)\cdot(9:8)\;+\;(1:6)\;=\; $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
(4:9)\cdot(9:8)+(1:6)
&= \left(\dfrac{4}{9}\cdot\dfrac{9}{8}\right)+\dfrac{1}{6} \\
&= \dfrac{4}{8}+\dfrac{1}{6}
= \dfrac{1}{2}+\dfrac{1}{6} \\
&= \dfrac{3}{6}+\dfrac{1}{6}
= \dfrac{2}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \;(7:15)\;-\;(1:5)\cdot(3:2)\;+\;(2:3)\;=\; $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
(7:15)-(1:5)\cdot(3:2)+(2:3)
&= \dfrac{7}{15}-\left(\dfrac{1}{5}\cdot\dfrac{3}{2}\right)+\dfrac{2}{3} \\
&= \dfrac{7}{15}-\dfrac{3}{10}+\dfrac{2}{3} \\
&= \dfrac{14}{30}-\dfrac{9}{30}+\dfrac{20}{30} \\
&= \dfrac{25}{30}
= \dfrac{5}{6}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \;(6:7):(3:14)\;-\;(2:5)\;+\;(1:2)\;=\; $ [[  41/10  ]]
@Algebrite.check(41/10)
************
$$
\begin{align*}
(6:7):(3:14)-(2:5)+(1:2)
&= \left(\dfrac{6}{7}:\dfrac{3}{14}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= \left(\dfrac{6}{7}\cdot\dfrac{14}{3}\right)-\dfrac{2}{5}+\dfrac{1}{2} \\
&= 4 - \dfrac{2}{5} + \dfrac{1}{2}
= 4 + \left(-\dfrac{4}{10}+\dfrac{5}{10}\right) \\
&= 4 + \dfrac{1}{10}
= \dfrac{41}{10}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \;(3:4)\cdot\big((5:6)+(1:3)\big)\;:\;(9:8)\;=\; $ [[  7/9  ]]
@Algebrite.check(7/9)
************
$$
\begin{align*}
(3:4)\cdot\big((5:6)+(1:3)\big):(9:8)
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{1}{3}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\left(\dfrac{5}{6}+\dfrac{2}{6}\right)\right):\dfrac{9}{8} \\
&= \left(\dfrac{3}{4}\cdot\dfrac{7}{6}\right):\dfrac{9}{8}
= \dfrac{21}{24}:\dfrac{9}{8} \\
&= \dfrac{7}{8}\cdot\dfrac{8}{9}
= \dfrac{7}{9}
\end{align*}
$$
************
</div>

</section>




