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



**Berechne** den Wert des Terms.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ $ \left( 2a : b \right) \cdot c = $ [[  10/3  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{5}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{5}{2}$
@Algebrite.check(10/3)
************
$$
\begin{align*}
\left( 2a : b \right) \cdot c
&= \left( 2\cdot\dfrac{3}{5} : \dfrac{9}{10} \right) \cdot \dfrac{5}{2} \\
&= \left( \dfrac{6}{5} \cdot \dfrac{10}{9} \right) \cdot \dfrac{5}{2} \\
&= \dfrac{6\cdot 10\cdot 5}{5\cdot 9\cdot 2}
= \dfrac{60}{18}
= \dfrac{10}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \left( a + b \right) : c = $ [[  1  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{1}{3}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(1)
************
$$
\begin{align*}
\left( a + b \right) : c
&= \left( \dfrac{1}{2} + \dfrac{1}{3} \right) : \dfrac{5}{6} \\
&= \left( \dfrac{3}{6} + \dfrac{2}{6} \right) : \dfrac{5}{6}
= \dfrac{5}{6} : \dfrac{5}{6} \\
&= \dfrac{5}{6}\cdot\dfrac{6}{5}
= 1
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \left( a : b \right)\cdot\left( c : a \right) = $ [[  15/4  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{7}\;\; \wedge\;\; b=\dfrac{2}{5}\;\; \wedge\;\; c=\dfrac{3}{2}$
@Algebrite.check(15/4)
************
$$
\begin{align*}
\left( a : b \right)\cdot\left( c : a \right)
&= \left( \dfrac{4}{7} : \dfrac{2}{5} \right) \cdot \left( \dfrac{3}{2} : \dfrac{4}{7} \right) \\
&= \left( \dfrac{4}{7}\cdot\dfrac{5}{2} \right)\cdot\left( \dfrac{3}{2}\cdot\dfrac{7}{4} \right) \\
&= \dfrac{4\cdot5}{7\cdot2}\cdot\dfrac{3\cdot7}{2\cdot4}
= \dfrac{20}{14}\cdot\dfrac{21}{8} \\
&= \dfrac{20\cdot21}{14\cdot8}
= \dfrac{420}{112}
= \dfrac{15}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ 3a \cdot \left( b : c \right) = $ [[  3  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{3}{5}$
@Algebrite.check(3)
************
$$
\begin{align*}
3a \cdot \left( b : c \right)
&= 3\cdot\dfrac{2}{3} \cdot \left( \dfrac{9}{10} : \dfrac{3}{5} \right) \\
&= 2 \cdot \left( \dfrac{9}{10}\cdot\dfrac{5}{3} \right)
= 2 \cdot \dfrac{45}{30} \\
&= 2 \cdot \dfrac{3}{2}
= 3
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \left( a + c \right)\cdot\left( b : 2a \right) = $ [[  25/36  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{4}\;\; \wedge\;\; b=\dfrac{5}{6}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(25/36)
************
$$
\begin{align*}
\left( a + c \right)\cdot\left( b : 2a \right)
&= \left( \dfrac{3}{4} + \dfrac{1}{2} \right)\cdot\left( \dfrac{5}{6} : 2\cdot\dfrac{3}{4} \right) \\
&= \left( \dfrac{3}{4} + \dfrac{2}{4} \right)\cdot\left( \dfrac{5}{6} : \dfrac{3}{2} \right) \\
&= \dfrac{5}{4}\cdot\left( \dfrac{5}{6}\cdot\dfrac{2}{3} \right)
= \dfrac{5}{4}\cdot\dfrac{10}{18} \\
&= \dfrac{5}{4}\cdot\dfrac{5}{9}
= \dfrac{25}{36}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \dfrac{ab + c}{\,\dfrac{b}{2}\,} = $ [[  64/25  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{5}{8}\;\; \wedge\;\; c=\dfrac{3}{10}$
@Algebrite.check(64/25)
************
$$
\begin{align*}
\dfrac{ab + c}{\,\dfrac{b}{2}\,}
&= \dfrac{\left(\dfrac{4}{5}\cdot\dfrac{5}{8}\right) + \dfrac{3}{10}}{\,\dfrac{5}{8}\cdot\dfrac{1}{2}\,} \\
&= \dfrac{\dfrac{4}{8} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{\dfrac{1}{2} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,} \\
&= \dfrac{\dfrac{5}{10} + \dfrac{3}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{\dfrac{8}{10}}{\,\dfrac{5}{16}\,}
= \dfrac{4}{5} : \dfrac{5}{16} \\
&= \dfrac{4}{5}\cdot\dfrac{16}{5}
= \dfrac{64}{25}
\end{align*}
$$
************
</div>

</section>







