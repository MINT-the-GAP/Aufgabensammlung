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



tags: Bruchrechnung, Vorrangsregeln, mittel, normal, Berechnen

comment: Rechne mit drei Brüchen und beachte die Vorrangsregeln.

author: Martin Lommatzsch

-->




# Bruchrechnung mit Vorrangsregeln


**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__ $  \dfrac{2}{5} \cdot \dfrac{3}{4} + \dfrac{1}{2} = $ [[  4/5  ]]
@Algebrite.check(4/5)
************
$$
\begin{align*}
\dfrac{2}{5} \cdot \dfrac{3}{4} + \dfrac{1}{2}
&= \dfrac{6}{20} + \dfrac{1}{2} \\
&= \dfrac{6}{20} + \dfrac{10}{20} \\
&= \dfrac{16}{20} \\
&= \dfrac{4}{5}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{7}{8} - \dfrac{1}{2} \cdot \dfrac{3}{4} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{1}{2} \cdot \dfrac{3}{4}
&= \dfrac{7}{8} - \dfrac{3}{8} \\
&= \dfrac{4}{8} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{5}{6} + \dfrac{2}{3} : \dfrac{4}{9} = $ [[  7/3  ]]
@Algebrite.check(7/3)
************
$$
\begin{align*}
\dfrac{5}{6} + \dfrac{2}{3} : \dfrac{4}{9}
&= \dfrac{5}{6} + \dfrac{2}{3} \cdot \dfrac{9}{4} \\
&= \dfrac{5}{6} + \dfrac{18}{12} \\
&= \dfrac{5}{6} + \dfrac{3}{2} \\
&= \dfrac{5}{6} + \dfrac{9}{6} \\
&= \dfrac{14}{6} = \dfrac{7}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{3}{10} : \dfrac{3}{5} - \dfrac{1}{4} = $ [[  1/4  ]]
@Algebrite.check(1/4)
************
$$
\begin{align*}
\dfrac{3}{10} : \dfrac{3}{5} - \dfrac{1}{4}
&= \dfrac{3}{10} \cdot \dfrac{5}{3} - \dfrac{1}{4} \\
&= \dfrac{15}{30} - \dfrac{1}{4} \\
&= \dfrac{1}{2} - \dfrac{1}{4} \\
&= \dfrac{1}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{4}{7} + \dfrac{2}{3} \cdot \dfrac{3}{8} = $ [[  23/28  ]]
@Algebrite.check(23/28)
************
$$
\begin{align*}
\dfrac{4}{7} + \dfrac{2}{3} \cdot \dfrac{3}{8}
&= \dfrac{4}{7} + \dfrac{6}{24} \\
&= \dfrac{4}{7} + \dfrac{1}{4} \\
&= \dfrac{16}{28} + \dfrac{7}{28} \\
&= \dfrac{23}{28}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{9}{10} - \dfrac{2}{5} : \dfrac{3}{4} = $ [[  11/30  ]]
@Algebrite.check(11/30)
************
$$
\begin{align*}
\dfrac{9}{10} - \dfrac{2}{5} : \dfrac{3}{4}
&= \dfrac{9}{10} - \dfrac{2}{5} \cdot \dfrac{4}{3} \\
&= \dfrac{9}{10} - \dfrac{8}{15} \\
&= \dfrac{27}{30} - \dfrac{16}{30} \\
&= \dfrac{11}{30}
\end{align*}
$$
************
</div>

</section>




