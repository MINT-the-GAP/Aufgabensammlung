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
__$a)\;\;$__ $ \left( \dfrac{2}{3} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2} = $ [[  7/6  ]]
@Algebrite.check(7/6)
************
$$
\begin{align*}
\left( \dfrac{2}{3} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2}
&= \left( \dfrac{4}{6} - \dfrac{1}{6} \right) : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{3}{6} : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{1}{2} : \dfrac{3}{4} + \dfrac{1}{2} \\
&= \dfrac{1}{2} \cdot \dfrac{4}{3} + \dfrac{1}{2} \\
&= \dfrac{4}{6} + \dfrac{1}{2} \\
&= \dfrac{2}{3} + \dfrac{1}{2} \\
&= \dfrac{4}{6} + \dfrac{3}{6} \\
&= \dfrac{7}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( \dfrac{5}{8} + \dfrac{1}{4} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6} = $ [[  5/12  ]]
@Algebrite.check(5/12)
************
$$
\begin{align*}
\left( \dfrac{5}{8} + \dfrac{1}{4} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6}
&= \left( \dfrac{5}{8} + \dfrac{2}{8} \right) \cdot \dfrac{2}{3} - \dfrac{1}{6} \\
&= \dfrac{7}{8} \cdot \dfrac{2}{3} - \dfrac{1}{6} \\
&= \dfrac{14}{24} - \dfrac{1}{6} \\
&= \dfrac{7}{12} - \dfrac{1}{6} \\
&= \dfrac{7}{12} - \dfrac{2}{12} \\
&= \dfrac{5}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \dfrac{3}{4} : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{6} = $ [[  16/15  ]]
@Algebrite.check(16/15)
************
$$
\begin{align*}
\dfrac{3}{4} : \left( \dfrac{1}{2} + \dfrac{1}{3} \right) + \dfrac{1}{6}
&= \dfrac{3}{4} : \left( \dfrac{3}{6} + \dfrac{2}{6} \right) + \dfrac{1}{6} \\
&= \dfrac{3}{4} : \dfrac{5}{6} + \dfrac{1}{6} \\
&= \dfrac{3}{4} \cdot \dfrac{6}{5} + \dfrac{1}{6} \\
&= \dfrac{18}{20} + \dfrac{1}{6} \\
&= \dfrac{9}{10} + \dfrac{1}{6} \\
&= \dfrac{27}{30} + \dfrac{5}{30} \\
&= \dfrac{32}{30} \\
&= \dfrac{16}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( \dfrac{2}{5} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3} = $ [[  11/15  ]]
@Algebrite.check(11/15)
************
$$
\begin{align*}
\left( \dfrac{2}{5} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3}
&= \left( \dfrac{4}{10} + \dfrac{3}{10} \right) : \dfrac{1}{2} - \dfrac{2}{3} \\
&= \dfrac{7}{10} : \dfrac{1}{2} - \dfrac{2}{3} \\
&= \dfrac{7}{10} \cdot \dfrac{2}{1} - \dfrac{2}{3} \\
&= \dfrac{14}{10} - \dfrac{2}{3} \\
&= \dfrac{7}{5} - \dfrac{2}{3} \\
&= \dfrac{21}{15} - \dfrac{10}{15} \\
&= \dfrac{11}{15}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( \dfrac{4}{9} - \dfrac{1}{6} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\left( \dfrac{4}{9} - \dfrac{1}{6} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3}
&= \left( \dfrac{8}{18} - \dfrac{3}{18} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} \\
&= \left( \dfrac{5}{18} \right) \cdot \dfrac{3}{2} + \dfrac{1}{3} \\
&= \dfrac{15}{36} + \dfrac{1}{3} \\
&= \dfrac{5}{12} + \dfrac{1}{3} \\
&= \dfrac{5}{12} + \dfrac{4}{12} \\
&= \dfrac{9}{12} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{5}{6} : \left( \dfrac{1}{3} + \dfrac{1}{2} \right) - \dfrac{1}{4} = $ [[  3/4  ]]
@Algebrite.check(3/4)
************
$$
\begin{align*}
\dfrac{5}{6} : \left( \dfrac{1}{3} + \dfrac{1}{2} \right) - \dfrac{1}{4}
&= \dfrac{5}{6} : \left( \dfrac{2}{6} + \dfrac{3}{6} \right) - \dfrac{1}{4} \\
&= \dfrac{5}{6} : \dfrac{5}{6} - \dfrac{1}{4} \\
&= 1 - \dfrac{1}{4} \\
&= \dfrac{3}{4}
\end{align*}
$$
************
</div>

</section>










