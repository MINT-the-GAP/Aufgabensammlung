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
__$a)\;\;$__ $  \dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4} = $ [[  1  ]]
@Algebrite.check(1)
************
$$
\begin{align*}
\dfrac{1}{2} + \dfrac{2}{3} \cdot \dfrac{3}{4}
&= \dfrac{1}{2} + \dfrac{6}{12} \\
&= \dfrac{1}{2} + \dfrac{1}{2} \\
&= 1
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__ $  \dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3} = $ [[  1/2  ]]
@Algebrite.check(1/2)
************
$$
\begin{align*}
\dfrac{5}{6} - \dfrac{1}{2} \cdot \dfrac{2}{3}
&= \dfrac{5}{6} - \dfrac{2}{6} \\
&= \dfrac{5-2}{6} \\
&= \dfrac{1}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__ $  \dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2} = $ [[  31/20  ]]
@Algebrite.check(31/20)
************
$$
\begin{align*}
\dfrac{3}{4} + \dfrac{2}{5} : \dfrac{1}{2}
&= \dfrac{3}{4} + \dfrac{2}{5} \cdot \dfrac{2}{1} \\
&= \dfrac{3}{4} + \dfrac{4}{5} \\
&= \dfrac{15}{20} + \dfrac{16}{20} \\
&= \dfrac{31}{20}
\end{align*}
$$
************
</div>

<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__ $  \dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2} = $ [[  3/8  ]]
@Algebrite.check(3/8)
************
$$
\begin{align*}
\dfrac{7}{8} - \dfrac{3}{4} : \dfrac{3}{2}
&= \dfrac{7}{8} - \dfrac{3}{4} \cdot \dfrac{2}{3} \\
&= \dfrac{7}{8} - \dfrac{6}{12} \\
&= \dfrac{7}{8} - \dfrac{1}{2} \\
&= \dfrac{7}{8} - \dfrac{4}{8} \\
&= \dfrac{3}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $  \dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8} = $ [[  5/6  ]]
@Algebrite.check(5/6)
************
$$
\begin{align*}
\dfrac{2}{3} + \dfrac{4}{9} \cdot \dfrac{3}{8}
&= \dfrac{2}{3} + \dfrac{12}{72} \\
&= \dfrac{2}{3} + \dfrac{1}{6} \\
&= \dfrac{4}{6} + \dfrac{1}{6} \\
&= \dfrac{5}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $  \dfrac{5}{12} - \dfrac{1}{6} \cdot \dfrac{3}{4} = $ [[  7/24  ]]
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

</section>




