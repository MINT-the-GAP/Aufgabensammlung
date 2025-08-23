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



tags: Bruchrechnung, Einsetzungsverfahren, mittel, normal, Berechnen

comment: Setze Brüche ein und verrechne diese.

author: Martin Lommatzsch

-->




# Einsetzen von Brüchen



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \; 2a + b : c \; = $ [[  7/2  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{5}{6}\;\; \wedge\;\; c=\dfrac{5}{12}$
@Algebrite.check(7/2)
************
$$
\begin{align*}
2a + b : c
&= 2\cdot\dfrac{3}{4} + \dfrac{5}{6} : \dfrac{5}{12} \\
&= \dfrac{6}{4} + \dfrac{5}{6}\cdot\dfrac{12}{5} \\
&= \dfrac{3}{2} + 2 \\
&= \dfrac{3}{2} + \dfrac{4}{2} \\
&= \dfrac{7}{2}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \; a : 2 + bc \; = $ [[  9/10  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{5}{3}$
@Algebrite.check(9/10)
************
$$
\begin{align*}
a : 2 + bc
&= \dfrac{4}{5} : 2 + \dfrac{3}{10}\cdot\dfrac{5}{3} \\
&= \dfrac{4}{5}\cdot\dfrac{1}{2} + \dfrac{15}{30} \\
&= \dfrac{4}{10} + \dfrac{1}{2} \\
&= \dfrac{2}{5} + \dfrac{1}{2} \\
&= \dfrac{4}{10} + \dfrac{5}{10} \\
&= \dfrac{9}{10}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \; 3a : b + c : 2 \; = $ [[  59/12  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{4}{9}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(59/12)
************
$$
\begin{align*}
3a : b + c : 2
&= 3\cdot\dfrac{2}{3} : \dfrac{4}{9} + \dfrac{5}{6} : 2 \\
&= 2 : \dfrac{4}{9} + \dfrac{5}{6}\cdot\dfrac{1}{2} \\
&= 2\cdot\dfrac{9}{4} + \dfrac{5}{12} \\
&= \dfrac{18}{4} + \dfrac{5}{12}
= \dfrac{9}{2} + \dfrac{5}{12} \\
&= \dfrac{54}{12} + \dfrac{5}{12}
= \dfrac{59}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \; a + b : 3 + 2c \; = $ [[  25/12  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{2}{3}$
@Algebrite.check(25/12)
************
$$
\begin{align*}
a + b : 3 + 2c
&= \dfrac{1}{2} + \dfrac{3}{4} : 3 + 2\cdot\dfrac{2}{3} \\
&= \dfrac{1}{2} + \dfrac{3}{4}\cdot\dfrac{1}{3} + \dfrac{4}{3} \\
&= \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{4}{3} \\
&= \dfrac{6}{12} + \dfrac{3}{12} + \dfrac{16}{12} \\
&= \dfrac{25}{12}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; ab + a : 2 - c : b \; = $ [[  1/8  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{2}{3}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(1/8)
************
$$
\begin{align*}
ab + a : 2 - c : b
&= \dfrac{3}{4}\cdot\dfrac{2}{3} + \dfrac{3}{4} : 2 - \dfrac{1}{2} : \dfrac{2}{3} \\
&= \dfrac{6}{12} + \dfrac{3}{4}\cdot\dfrac{1}{2} - \dfrac{1}{2}\cdot\dfrac{3}{2} \\
&= \dfrac{1}{2} + \dfrac{3}{8} - \dfrac{3}{4} \\
&= \dfrac{4}{8} + \dfrac{3}{8} - \dfrac{6}{8} \\
&= \dfrac{1}{8}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \; 4a - b : 2 + c : a \; = $ [[  27/10  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{5}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(27/10)
************
$$
\begin{align*}
4a - b : 2 + c : a
&= 4\cdot\dfrac{2}{5} - \dfrac{3}{10} : 2 + \dfrac{1}{2} : \dfrac{2}{5} \\
&= \dfrac{8}{5} - \dfrac{3}{10}\cdot\dfrac{1}{2} + \dfrac{1}{2}\cdot\dfrac{5}{2} \\
&= \dfrac{8}{5} - \dfrac{3}{20} + \dfrac{5}{4} \\
&= \dfrac{32}{20} - \dfrac{3}{20} + \dfrac{25}{20} \\
&= \dfrac{54}{20}
= \dfrac{27}{10}
\end{align*}
$$
************
</div>

</section>



