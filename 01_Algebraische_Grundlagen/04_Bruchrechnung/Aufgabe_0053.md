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



tags: Bruchrechnung, Distributivgesetz, mittel, normal, Berechnen

comment: Rechne mit drei Brüchen und beachte das Distributivgesetz.

author: Martin Lommatzsch

-->




# Bruchrechnung mit Klammern



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left(\dfrac{1}{2} + \dfrac{1}{3}\right) \cdot \dfrac{3}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\left(\dfrac{1}{2} + \dfrac{1}{3}\right) \cdot \dfrac{3}{4}
&= \left(\dfrac{3}{6} + \dfrac{2}{6}\right) \cdot \dfrac{3}{4} \\
&= \dfrac{5}{6} \cdot \dfrac{3}{4} \\
&= \dfrac{15}{24} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left(\dfrac{5}{6} - \dfrac{1}{4}\right) : \dfrac{2}{3} = $ [[  7/8  ]]
@Algebrite.check(7/8)
************
$$
\begin{align*}
\left(\dfrac{5}{6} - \dfrac{1}{4}\right) : \dfrac{2}{3}
&= \left(\dfrac{10}{12} - \dfrac{3}{12}\right) : \dfrac{2}{3} \\
&= \dfrac{7}{12} \cdot \dfrac{3}{2} \\
&= \dfrac{21}{24} \\
&= \dfrac{7}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left(\dfrac{3}{5} + \dfrac{1}{10}\right) : \dfrac{3}{4} = $ [[  14/15  ]]
@Algebrite.check(14/15)
************
$$
\begin{align*}
\left(\dfrac{3}{5} + \dfrac{1}{10}\right) : \dfrac{3}{4}
&= \left(\dfrac{6}{10} + \dfrac{1}{10}\right) : \dfrac{3}{4} \\
&= \dfrac{7}{10} \cdot \dfrac{4}{3} \\
&= \dfrac{28}{30} \\
&= \dfrac{14}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \dfrac{4}{7} \cdot \left(\dfrac{1}{2} + \dfrac{3}{14}\right) = $ [[  20/49  ]]
@Algebrite.check(20/49)
************
$$
\begin{align*}
\dfrac{4}{7} \cdot \left(\dfrac{1}{2} + \dfrac{3}{14}\right)
&= \dfrac{4}{7} \cdot \left(\dfrac{7}{14} + \dfrac{3}{14}\right) \\
&= \dfrac{4}{7} \cdot \dfrac{10}{14} \\
&= \dfrac{4}{7} \cdot \dfrac{5}{7} \\
&= \dfrac{20}{49}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left(\dfrac{5}{12} + \dfrac{1}{3}\right) \cdot \dfrac{3}{5} = $ [[  9/20  ]]
@Algebrite.check(9/20)
************
$$
\begin{align*}
\left(\dfrac{5}{12} + \dfrac{1}{3}\right) \cdot \dfrac{3}{5}
&= \left(\dfrac{5}{12} + \dfrac{4}{12}\right) \cdot \dfrac{3}{5} \\
&= \dfrac{9}{12} \cdot \dfrac{3}{5} \\
&= \dfrac{27}{60} \\
&= \dfrac{9}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left(\dfrac{7}{8} - \dfrac{1}{2}\right) : \dfrac{7}{12} = $ [[  9/14  ]]
@Algebrite.check(9/14)
************
$$
\begin{align*}
\left(\dfrac{7}{8} - \dfrac{1}{2}\right) : \dfrac{7}{12}
&= \left(\dfrac{7}{8} - \dfrac{4}{8}\right) : \dfrac{7}{12} \\
&= \dfrac{3}{8} \cdot \dfrac{12}{7} \\
&= \dfrac{36}{56} \\
&= \dfrac{9}{14}
\end{align*}
$$
************
</div>

</section>






