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
__$a)\;\;$__ $ \left( 3a + b \right) : \left( 2c \right) = $ [[  7/3  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{3}\;\; \wedge\;\; b=\dfrac{1}{6}\;\; \wedge\;\; c=\dfrac{1}{4}$
@Algebrite.check(7/3)
************
$$
\begin{align*}
\left( 3a + b \right) : \left( 2c \right)
&= \left( 3\cdot\dfrac{1}{3} + \dfrac{1}{6} \right) : \left( 2\cdot\dfrac{1}{4} \right) \\
&= \left( 1 + \dfrac{1}{6} \right) : \dfrac{1}{2}
= \left( \dfrac{6}{6} + \dfrac{1}{6} \right) : \dfrac{1}{2} \\
&= \dfrac{7}{6} : \dfrac{1}{2}
= \dfrac{7}{6} \cdot \dfrac{2}{1} \\
&= \dfrac{14}{6}
= \dfrac{7}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( a : b \right) + \left( c : a \right) = $ [[  31/20  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{5}\;\; \wedge\;\; b=\dfrac{1}{2}\;\; \wedge\;\; c=\dfrac{3}{10}$
@Algebrite.check(31/20)
************
$$
\begin{align*}
\left( a : b \right) + \left( c : a \right)
&= \left( \dfrac{2}{5} : \dfrac{1}{2} \right) + \left( \dfrac{3}{10} : \dfrac{2}{5} \right) \\
&= \left( \dfrac{2}{5}\cdot\dfrac{2}{1} \right) + \left( \dfrac{3}{10}\cdot\dfrac{5}{2} \right) \\
&= \dfrac{4}{5} + \dfrac{15}{20}
= \dfrac{16}{20} + \dfrac{15}{20} \\
&= \dfrac{31}{20}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( 2a - b \right)\cdot\left( c : a \right) = $ [[  6/5  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{8}\;\; \wedge\;\; b=\dfrac{1}{4}\;\; \wedge\;\; c=\dfrac{9}{10}$
@Algebrite.check(6/5)
************
$$
\begin{align*}
\left( 2a - b \right)\cdot\left( c : a \right)
&= \left( 2\cdot\dfrac{3}{8} - \dfrac{1}{4} \right)\cdot\left( \dfrac{9}{10} : \dfrac{3}{8} \right) \\
&= \left( \dfrac{6}{8} - \dfrac{2}{8} \right)\cdot\left( \dfrac{9}{10}\cdot\dfrac{8}{3} \right) \\
&= \dfrac{4}{8}\cdot \dfrac{72}{30}
= \dfrac{1}{2}\cdot \dfrac{12}{5} \\
&= \dfrac{12}{10}
= \dfrac{6}{5}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \left( a + c \right) : \left( b - a \right) = $ [[  5/2  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{6}\;\; \wedge\;\; b=\dfrac{1}{2}\;\; \wedge\;\; c=\dfrac{2}{3}$
@Algebrite.check(5/2)
************
$$
\begin{align*}
\left( a + c \right) : \left( b - a \right)
&= \left( \dfrac{1}{6} + \dfrac{2}{3} \right) : \left( \dfrac{1}{2} - \dfrac{1}{6} \right) \\
&= \left( \dfrac{1}{6} + \dfrac{4}{6} \right) : \left( \dfrac{3}{6} - \dfrac{1}{6} \right) \\
&= \dfrac{5}{6} : \dfrac{2}{6}
= \dfrac{5}{6}\cdot\dfrac{6}{2} \\
&= \dfrac{5}{2}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( a : 2 + b : 3 \right)\cdot \left( 3c \right) = $ [[  13/8  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(13/8)
************
$$
\begin{align*}
\left( a : 2 + b : 3 \right)\cdot \left( 3c \right)
&= \left( \dfrac{4}{5} : 2 + \dfrac{3}{4} : 3 \right)\cdot \left( 3\cdot\dfrac{5}{6} \right) \\
&= \left( \dfrac{4}{5}\cdot\dfrac{1}{2} + \dfrac{3}{4}\cdot\dfrac{1}{3} \right)\cdot \dfrac{15}{6} \\
&= \left( \dfrac{2}{5} + \dfrac{1}{4} \right)\cdot \dfrac{5}{2} \\
&= \left( \dfrac{8}{20} + \dfrac{5}{20} \right)\cdot \dfrac{5}{2} \\
&= \dfrac{13}{20}\cdot \dfrac{5}{2}
= \dfrac{65}{40}
= \dfrac{13}{8}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \left( a + b \right) : \left( c - a \right)\cdot b = $ [[  13/25  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{4}\;\; \wedge\;\; b=\dfrac{2}{5}\;\; \wedge\;\; c=\dfrac{3}{4}$
@Algebrite.check(13/25)
************
$$
\begin{align*}
\left( a + b \right) : \left( c - a \right)\cdot b
&= \left( \dfrac{1}{4} + \dfrac{2}{5} \right) : \left( \dfrac{3}{4} - \dfrac{1}{4} \right) \cdot \dfrac{2}{5} \\
&= \left( \dfrac{5}{20} + \dfrac{8}{20} \right) : \dfrac{1}{2} \cdot \dfrac{2}{5} \\
&= \dfrac{13}{20} : \dfrac{1}{2} \cdot \dfrac{2}{5}
= \dfrac{13}{20}\cdot\dfrac{2}{1}\cdot\dfrac{2}{5} \\
&= \dfrac{52}{20}\cdot\dfrac{1}{5}
= \dfrac{52}{100}
= \dfrac{13}{25}
\end{align*}
$$
************
</div>

</section>



