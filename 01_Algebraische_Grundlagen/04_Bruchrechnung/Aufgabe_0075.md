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
__$a)\;\;$__ $ \;(3:4)\,\cdot\,(7:9)\;-\;(1:8)\;=\; $ [[  11/24  ]]
@Algebrite.check(11/24)
************
$$
\begin{align*}
(3:4)\cdot(7:9)-(1:8)
&= \dfrac{3}{4}\cdot\dfrac{7}{9}-\dfrac{1}{8} \\
&= \dfrac{21}{36}-\dfrac{1}{8}
= \dfrac{7}{12}-\dfrac{1}{8} \\
&= \dfrac{14}{24}-\dfrac{3}{24}
= \dfrac{11}{24}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \;(5:6)\;+\;(3:8):(9:4)\;=\; $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
(5:6)+(3:8):(9:4)
&= \dfrac{5}{6}+\left(\dfrac{3}{8}:\dfrac{9}{4}\right) \\
&= \dfrac{5}{6}+\left(\dfrac{3}{8}\cdot\dfrac{4}{9}\right)
= \dfrac{5}{6}+\dfrac{12}{72} \\
&= \dfrac{5}{6}+\dfrac{1}{6}
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \;(2:5):(3:10)\;+\;(1:2)\cdot(3:7)\;=\; $ [[  65/42  ]]
@Algebrite.check(65/42)
************
$$
\begin{align*}
(2:5):(3:10)+(1:2)\cdot(3:7)
&= \left(\dfrac{2}{5}:\dfrac{3}{10}\right)+\dfrac{1}{2}\cdot\dfrac{3}{7} \\
&= \left(\dfrac{2}{5}\cdot\dfrac{10}{3}\right)+\dfrac{3}{14}
= \dfrac{20}{15}+\dfrac{3}{14} \\
&= \dfrac{4}{3}+\dfrac{3}{14}
= \dfrac{56}{42}+\dfrac{9}{42}
= \dfrac{65}{42}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \;(7:12)\;+\;(5:18)\;-\;(1:9)\cdot(3:2)\;=\; $ [[  25/36  ]]
@Algebrite.check(25/36)
************
$$
\begin{align*}
(7:12)+(5:18)-(1:9)\cdot(3:2)
&= \dfrac{7}{12}+\dfrac{5}{18}-\left(\dfrac{1}{9}\cdot\dfrac{3}{2}\right) \\
&= \dfrac{7}{12}+\dfrac{5}{18}-\dfrac{3}{18}
= \dfrac{7}{12}+\dfrac{1}{6} \\
&= \dfrac{21}{36}+\dfrac{6}{36}
= \dfrac{25}{36}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \;(4:9):(2:3)\;+\;(5:12):(5:18)\;=\; $ [[  13/6  ]]
@Algebrite.check(13/6)
************
$$
\begin{align*}
(4:9):(2:3)+(5:12):(5:18)
&= \left(\dfrac{4}{9}:\dfrac{2}{3}\right)+\left(\dfrac{5}{12}:\dfrac{5}{18}\right) \\
&= \dfrac{4}{9}\cdot\dfrac{3}{2}+\dfrac{5}{12}\cdot\dfrac{18}{5} \\
&= \dfrac{12}{18}+\dfrac{18}{12}
= \dfrac{2}{3}+\dfrac{3}{2} \\
&= \dfrac{4}{6}+\dfrac{9}{6}
= \dfrac{13}{6}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \;(3:5)\cdot\big((7:8)-(1:4)\big)\;+\;(2:3):(4:9)\;=\; $ [[  15/8  ]]
@Algebrite.check(15/8)
************
$$
\begin{align*}
(3:5)\cdot\big((7:8)-(1:4)\big)+(2:3):(4:9)
&= \dfrac{3}{5}\cdot\left(\dfrac{7}{8}-\dfrac{1}{4}\right)+\left(\dfrac{2}{3}:\dfrac{4}{9}\right) \\
&= \dfrac{3}{5}\cdot\left(\dfrac{7}{8}-\dfrac{2}{8}\right)+\dfrac{2}{3}\cdot\dfrac{9}{4} \\
&= \dfrac{3}{5}\cdot\dfrac{5}{8}+\dfrac{18}{12}
= \dfrac{3}{8}+\dfrac{3}{2} \\
&= \dfrac{3}{8}+\dfrac{12}{8}
= \dfrac{15}{8}
\end{align*}
$$
************
</div>

</section>





