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


tags: Bruchrechnung, Vorrangsregeln, Distributivgesetz, schwer, normal, Berechnen

comment: Verrechne vier Brüche miteinander.

author: Martin Lommatzsch

-->




# Rechnen mit vier Brüchen





**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{3} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{4}{5} - \dfrac{1}{10} \right) = $ [[  5/7  ]]
@Algebrite.check(5/7)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{3} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{4}{5} - \dfrac{1}{10} \right)
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{8}{10} - \dfrac{1}{10} \right) \\
&= \left( \dfrac{5}{6} \right)\!\cdot\dfrac{3}{5} : \left( \dfrac{7}{10} \right) \\
&= \dfrac{5\cdot 3}{6\cdot 5} : \dfrac{7}{10} \\
&= \dfrac{3}{6} : \dfrac{7}{10} \\
&= \dfrac{1}{2} \cdot \dfrac{10}{7} \\
&= \dfrac{10}{14}
= \dfrac{5}{7}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{4} - \dfrac{1}{6} \right) : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{5} = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\left( \dfrac{3}{4} - \dfrac{1}{6} \right) : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{5}
&= \left( \dfrac{9}{12} - \dfrac{2}{12} \right) : \left( \dfrac{3}{6} + \dfrac{2}{6} \right) + \dfrac{1}{5} \\
&= \left( \dfrac{7}{12} \right) : \left( \dfrac{5}{6} \right) + \dfrac{1}{5} \\
&= \dfrac{7}{12}\cdot\dfrac{6}{5} + \dfrac{1}{5} \\
&= \dfrac{42}{60} + \dfrac{12}{60} \\
&= \dfrac{54}{60}
= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( \dfrac{2}{3} : \dfrac{4}{5} \right) + \left( \dfrac{1}{4} : \dfrac{1}{8} \right) - \dfrac{1}{6} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\left( \dfrac{2}{3} : \dfrac{4}{5} \right) + \left( \dfrac{1}{4} : \dfrac{1}{8} \right) - \dfrac{1}{6}
&= \left( \dfrac{2}{3}\cdot\dfrac{5}{4} \right) + \left( \dfrac{1}{4}\cdot\dfrac{8}{1} \right) - \dfrac{1}{6} \\
&= \dfrac{10}{12} + 2 - \dfrac{1}{6} \\
&= \dfrac{5}{6} + 2 - \dfrac{1}{6} \\
&= 2 + \dfrac{4}{6}
= 2 + \dfrac{2}{3}
= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{5}{8} + \dfrac{1}{4} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\left( \dfrac{5}{8} + \dfrac{1}{4} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3}
&= \left( \dfrac{5}{8} + \dfrac{2}{8} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \left( \dfrac{7}{8} \right)\!\cdot\dfrac{2}{5} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \dfrac{14}{40} : \dfrac{3}{10} - \dfrac{1}{3} \\
&= \dfrac{7}{20}\cdot\dfrac{10}{3} - \dfrac{1}{3} \\
&= \dfrac{70}{60} - \dfrac{1}{3}
= \dfrac{7}{6} - \dfrac{1}{3} \\
&= \dfrac{7}{6} - \dfrac{2}{6}
= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \dfrac{1}{2} : \left( \dfrac{1}{3} + \dfrac{1}{6} \right) + \left( \dfrac{3}{5} - \dfrac{1}{2} \right) = $ [[  11/10  ]]
@Algebrite.check(11/10)
************
$$
\begin{align*}
\dfrac{1}{2} : \left( \dfrac{1}{3} + \dfrac{1}{6} \right) + \left( \dfrac{3}{5} - \dfrac{1}{2} \right)
&= \dfrac{1}{2} : \left( \dfrac{2}{6} + \dfrac{1}{6} \right) + \left( \dfrac{6}{10} - \dfrac{5}{10} \right) \\
&= \dfrac{1}{2} : \left( \dfrac{3}{6} \right) + \dfrac{1}{10} \\
&= \dfrac{1}{2} : \dfrac{1}{2} + \dfrac{1}{10} \\
&= 1 + \dfrac{1}{10}
= \dfrac{11}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{12} : \dfrac{1}{3} - \dfrac{1}{4} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{12} : \dfrac{1}{3} - \dfrac{1}{4}
&= \left( \dfrac{4}{9}\cdot\dfrac{3}{2} \right) + \left( \dfrac{1}{12}\cdot 3 \right) - \dfrac{1}{4} \\
&= \dfrac{12}{18} + \dfrac{3}{12} - \dfrac{1}{4} \\
&= \dfrac{2}{3} + \dfrac{1}{4} - \dfrac{1}{4} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

</section>












