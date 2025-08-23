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
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{2}{3} - \dfrac{1}{6} \right) = $ [[  9/10  ]]
@Algebrite.check(9/10)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{2}{3} - \dfrac{1}{6} \right)
&= \left( \dfrac{2}{4} + \dfrac{1}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{4}{6} - \dfrac{1}{6} \right) \\
&= \left( \dfrac{3}{4} \right)\cdot\dfrac{3}{5} : \left( \dfrac{3}{6} \right) \\
&= \dfrac{9}{20} : \dfrac{1}{2} \\
&= \dfrac{9}{20}\cdot\dfrac{2}{1} \\
&= \dfrac{18}{20} \\
&= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{4} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} = $ [[  11/12  ]]
@Algebrite.check(11/12)
************
$$
\begin{align*}
\left( \dfrac{3}{4} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3}
&= \left( \dfrac{6}{8} - \dfrac{1}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} \\
&= \left( \dfrac{5}{8} \right) : \dfrac{1}{2} - \dfrac{1}{3} \\
&= \dfrac{5}{8}\cdot\dfrac{2}{1} - \dfrac{1}{3} \\
&= \dfrac{10}{8} - \dfrac{1}{3} \\
&= \dfrac{5}{4} - \dfrac{1}{3} \\
&= \dfrac{15}{12} - \dfrac{4}{12} \\
&= \dfrac{11}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{1}{2} : \dfrac{2}{5} + \left( \dfrac{3}{10} - \dfrac{1}{5} \right) = $ [[  27/20  ]]
@Algebrite.check(27/20)
************
$$
\begin{align*}
\dfrac{1}{2} : \dfrac{2}{5} + \left( \dfrac{3}{10} - \dfrac{1}{5} \right)
&= \dfrac{1}{2}\cdot\dfrac{5}{2} + \left( \dfrac{3}{10} - \dfrac{2}{10} \right) \\
&= \dfrac{5}{4} + \dfrac{1}{10} \\
&= \dfrac{25}{20} + \dfrac{2}{20} \\
&= \dfrac{27}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{5}{6} + \dfrac{1}{3} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} = $ [[  28/45  ]]
@Algebrite.check(28/45)
************
$$
\begin{align*}
\left( \dfrac{5}{6} + \dfrac{1}{3} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4}
&= \left( \dfrac{5}{6} + \dfrac{2}{6} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} \\
&= \left( \dfrac{7}{6} \right)\cdot\dfrac{2}{5} : \dfrac{3}{4} \\
&= \dfrac{14}{30} : \dfrac{3}{4} \\
&= \dfrac{7}{15} : \dfrac{3}{4} \\
&= \dfrac{7}{15}\cdot\dfrac{4}{3} \\
&= \dfrac{28}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) - \dfrac{1}{6} + \dfrac{1}{4} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left( \dfrac{4}{9} : \dfrac{2}{3} \right) - \dfrac{1}{6} + \dfrac{1}{4}
&= \left( \dfrac{4}{9}\cdot\dfrac{3}{2} \right) - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{12}{18} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{2}{3} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{4}{6} - \dfrac{1}{6} + \dfrac{1}{4} \\
&= \dfrac{3}{6} + \dfrac{1}{4} \\
&= \dfrac{1}{2} + \dfrac{1}{4} \\
&= \dfrac{2}{4} + \dfrac{1}{4} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{1}{5} + \dfrac{3}{10} \right) : \left( \dfrac{1}{2}\cdot\dfrac{2}{3} \right) = $ [[  3/2  ]]
@Algebrite.check(3/2)
************
$$
\begin{align*}
\left( \dfrac{1}{5} + \dfrac{3}{10} \right) : \left( \dfrac{1}{2}\cdot\dfrac{2}{3} \right)
&= \left( \dfrac{2}{10} + \dfrac{3}{10} \right) : \left( \dfrac{2}{6} \right) \\
&= \left( \dfrac{5}{10} \right) : \left( \dfrac{1}{3} \right) \\
&= \dfrac{1}{2} : \dfrac{1}{3} \\
&= \dfrac{1}{2}\cdot\dfrac{3}{1} \\
&= \dfrac{3}{2}
\end{align*}
$$
************
</div>

</section>







