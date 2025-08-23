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
__$a)\;\;$__ $ \left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{3}{4} - \dfrac{1}{6} = $ [[  17/18  ]]
@Algebrite.check(17/18)
************
$$
\begin{align*}
\left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{3}{4} - \dfrac{1}{6}
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right) : \dfrac{3}{4} - \dfrac{1}{6} \\
&= \left( \dfrac{5}{6} \right) : \dfrac{3}{4} - \dfrac{1}{6} \\
&= \left( \dfrac{5}{6} \cdot \dfrac{4}{3} \right) - \dfrac{1}{6} \\
&= \dfrac{20}{18} - \dfrac{1}{6}
= \dfrac{10}{9} - \dfrac{1}{6} \\
&= \dfrac{20}{18} - \dfrac{3}{18}
= \dfrac{17}{18}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{3}{5} : \dfrac{1}{2} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} = $ [[  21/20  ]]
@Algebrite.check(21/20)
************
$$
\begin{align*}
\left( \dfrac{3}{5} : \dfrac{1}{2} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4}
&= \left( \dfrac{3}{5} \cdot \dfrac{2}{1} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} \\
&= \left( \dfrac{6}{5} \right) \cdot \dfrac{2}{3} + \dfrac{1}{4} \\
&= \dfrac{12}{15} + \dfrac{1}{4}
= \dfrac{4}{5} + \dfrac{1}{4} \\
&= \dfrac{16}{20} + \dfrac{5}{20}
= \dfrac{21}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( \dfrac{5}{6} - \dfrac{1}{3} \right) : \left( \dfrac{1}{4} + \dfrac{1}{8} \right) = $ [[  4/3  ]]
@Algebrite.check(4/3)
************
$$
\begin{align*}
\left( \dfrac{5}{6} - \dfrac{1}{3} \right) : \left( \dfrac{1}{4} + \dfrac{1}{8} \right)
&= \left( \dfrac{5}{6} - \dfrac{2}{6} \right) : \left( \dfrac{2}{8} + \dfrac{1}{8} \right) \\
&= \left( \dfrac{3}{6} \right) : \left( \dfrac{3}{8} \right) \\
&= \dfrac{1}{2} : \dfrac{3}{8}
= \dfrac{1}{2} \cdot \dfrac{8}{3} \\
&= \dfrac{8}{6}
= \dfrac{4}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{2}{5} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\left( \dfrac{2}{5} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8}
&= \left( \dfrac{4}{10} + \dfrac{1}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \left( \dfrac{5}{10} \right) \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{1}{2} \cdot \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{3}{8} - \dfrac{1}{8}
= \dfrac{2}{8}
= \dfrac{1}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} : \dfrac{2}{3} \right) + \dfrac{1}{6} - \dfrac{1}{12} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
 \dfrac{4}{9} : \dfrac{2}{3}  + \dfrac{1}{6} - \dfrac{1}{12}
&=  \dfrac{4}{9} \cdot \dfrac{3}{2}  + \dfrac{1}{6} - \dfrac{1}{12} \\
&= \dfrac{12}{18} + \dfrac{1}{6} - \dfrac{1}{12}
= \dfrac{2}{3} + \dfrac{1}{6} - \dfrac{1}{12} \\
&= \dfrac{4}{6} + \dfrac{1}{6} - \dfrac{1}{12}
= \dfrac{5}{6} - \dfrac{1}{12} \\
&= \dfrac{10}{12} - \dfrac{1}{12}
= \dfrac{9}{12}
= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( \dfrac{3}{7} + \dfrac{2}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3} = $ [[  25/21  ]]
@Algebrite.check(25/21)
************
$$
\begin{align*}
\left( \dfrac{3}{7} + \dfrac{2}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3}
&= \left( \dfrac{5}{7} \right) : \dfrac{5}{6} + \dfrac{1}{3} \\
&= \left( \dfrac{5}{7} \cdot \dfrac{6}{5} \right) + \dfrac{1}{3} \\
&= \dfrac{6}{7} + \dfrac{1}{3}
= \dfrac{18}{21} + \dfrac{7}{21} \\
&= \dfrac{25}{21}
\end{align*}
$$
************
</div>

</section>










