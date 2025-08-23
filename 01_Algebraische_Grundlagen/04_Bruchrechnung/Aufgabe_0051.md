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
__$a)\;\;$__ $  \dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12} = $ [[  11/4  ]]
@Algebrite.check(11/4)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12}
&= \dfrac{3}{4} + \dfrac{5}{6} \cdot \dfrac{12}{5} \\
&= \dfrac{3}{4} + 2 \\
&= \dfrac{3}{4} + \dfrac{8}{4} \\
&= \dfrac{11}{4}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{3}{4} - \dfrac{1}{2} \cdot \dfrac{1}{4} = $ [[  5/8  ]]
@Algebrite.check(5/8)
************
$$
\begin{align*}
\dfrac{3}{4} - \dfrac{1}{2} \cdot \dfrac{1}{4}
&= \dfrac{3}{4} - \dfrac{1}{8} \\
&= \dfrac{6}{8} - \dfrac{1}{8} \\
&= \dfrac{5}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{2}{3} + \dfrac{3}{5} : \dfrac{3}{10} = $ [[  8/3  ]]
@Algebrite.check(8/3)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{3}{5} : \dfrac{3}{10}
&= \dfrac{2}{3} + \dfrac{3}{5} \cdot \dfrac{10}{3} \\
&= \dfrac{2}{3} + 2 \\
&= \dfrac{2}{3} + \dfrac{6}{3} \\
&= \dfrac{8}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4} = $ [[  7/24  ]]
@Algebrite.check(7/24)
************
$$
\begin{align*}
\dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4}
&= \dfrac{5}{12} - \dfrac{3}{24} \\
&= \dfrac{5}{12} - \dfrac{1}{8} \\
&= \dfrac{10}{24} - \dfrac{3}{24} \\
&= \dfrac{7}{24}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{3} \cdot \dfrac{1}{2} = $ [[  2/3  ]]
@Algebrite.check(2/3)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{3} \cdot \dfrac{1}{2}
&= \dfrac{5}{6} - \dfrac{1}{6} \\
&= \dfrac{4}{6} \\
&= \dfrac{2}{3}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{7}{8} + \dfrac{1}{4} : \dfrac{1}{2} = $ [[  11/8  ]]
@Algebrite.check(11/8)
************
$$
\begin{align*}
\dfrac{7}{8} + \dfrac{1}{4} : \dfrac{1}{2}
&= \dfrac{7}{8} + \dfrac{1}{4} \cdot \dfrac{2}{1} \\
&= \dfrac{7}{8} + \dfrac{2}{4} \\
&= \dfrac{7}{8} + \dfrac{1}{2} \\
&= \dfrac{7}{8} + \dfrac{4}{8} \\
&= \dfrac{11}{8}
\end{align*}
$$
************
</div>

</section>






