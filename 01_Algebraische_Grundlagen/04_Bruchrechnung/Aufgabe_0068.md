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
__$a)\;\;$__ $ \; a : b + 2c \; = $ [[  11/6  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{5}\;\; \wedge\;\; b=\dfrac{9}{10}\;\; \wedge\;\; c=\dfrac{7}{12}$
@Algebrite.check(11/6)
************
$$
\begin{align*}
a : b + 2c
&= \dfrac{3}{5} : \dfrac{9}{10} + 2\cdot\dfrac{7}{12} \\
&= \dfrac{3}{5}\cdot\dfrac{10}{9} + \dfrac{14}{12} \\
&= \dfrac{30}{45} + \dfrac{7}{6}
= \dfrac{2}{3} + \dfrac{7}{6} \\
&= \dfrac{4}{6} + \dfrac{7}{6}
= \dfrac{11}{6}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ $ \; 3a - b : 2 + c : b \; = $ [[  161/72  ]] $\;\;\text{mit:}\;\; a=\dfrac{1}{2}\;\; \wedge\;\; b=\dfrac{3}{4}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(161/72)
************
$$
\begin{align*}
3a - b : 2 + c : b
&= 3\cdot\dfrac{1}{2} - \dfrac{3}{4} : 2 + \dfrac{5}{6} : \dfrac{3}{4} \\
&= \dfrac{3}{2} - \dfrac{3}{4}\cdot\dfrac{1}{2} + \dfrac{5}{6}\cdot\dfrac{4}{3} \\
&= \dfrac{3}{2} - \dfrac{3}{8} + \dfrac{20}{18}
= \dfrac{3}{2} - \dfrac{3}{8} + \dfrac{10}{9} \\
&= \left(\dfrac{12}{8} - \dfrac{3}{8}\right) + \dfrac{10}{9}
= \dfrac{9}{8} + \dfrac{10}{9} \\
&= \dfrac{81}{72} + \dfrac{80}{72}
= \dfrac{161}{72}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ $ \; ab + c : 2 - a : c \; = $ [[  1/45  ]] $\;\;\text{mit:}\;\; a=\dfrac{2}{3}\;\; \wedge\;\; b=\dfrac{5}{4}\;\; \wedge\;\; c=\dfrac{3}{5}$
@Algebrite.check(1/45)
************
$$
\begin{align*}
ab + c : 2 - a : c
&= \left(\dfrac{2}{3}\cdot\dfrac{5}{4}\right) + \dfrac{3}{5} : 2 - \dfrac{2}{3} : \dfrac{3}{5} \\
&= \dfrac{10}{12} + \dfrac{3}{5}\cdot\dfrac{1}{2} - \dfrac{2}{3}\cdot\dfrac{5}{3} \\
&= \dfrac{5}{6} + \dfrac{3}{10} - \dfrac{10}{9} \\
&= \dfrac{75}{90} + \dfrac{27}{90} - \dfrac{100}{90} \\
&= \dfrac{2}{90}
= \dfrac{1}{45}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ $ \; a : (3b) + 2c - b : a \; = $ [[  17/30  ]] $\;\;\text{mit:}\;\; a=\dfrac{4}{5}\;\; \wedge\;\; b=\dfrac{2}{3}\;\; \wedge\;\; c=\dfrac{1}{2}$
@Algebrite.check(17/30)
************
$$
\begin{align*}
a : (3b) + 2c - b : a
&= \dfrac{4}{5} : \big(3\cdot\dfrac{2}{3}\big) + 2\cdot\dfrac{1}{2} - \dfrac{2}{3} : \dfrac{4}{5} \\
&= \dfrac{4}{5} : 2 + 1 - \dfrac{2}{3}\cdot\dfrac{5}{4} \\
&= \dfrac{4}{5}\cdot\dfrac{1}{2} + 1 - \dfrac{10}{12} \\
&= \dfrac{2}{5} + 1 - \dfrac{5}{6} \\
&= \dfrac{12}{30} + \dfrac{30}{30} - \dfrac{25}{30} \\
&= \dfrac{17}{30}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ $ \; 2a + bc : a - c : 2 \; = $ [[  89/27  ]] $\;\;\text{mit:}\;\; a=\dfrac{3}{8}\;\; \wedge\;\; b=\dfrac{4}{3}\;\; \wedge\;\; c=\dfrac{5}{6}$
@Algebrite.check(89/27)
************
$$
\begin{align*}
2a + bc : a - c : 2
&= 2\cdot\dfrac{3}{8} + \left(\dfrac{4}{3}\cdot\dfrac{5}{6}\right) : \dfrac{3}{8} - \dfrac{5}{6} : 2 \\
&= \dfrac{3}{4} + \dfrac{20}{18} : \dfrac{3}{8} - \dfrac{5}{6}\cdot\dfrac{1}{2} \\
&= \dfrac{3}{4} + \dfrac{10}{9}\cdot\dfrac{8}{3} - \dfrac{5}{12} \\
&= \dfrac{3}{4} + \dfrac{80}{27} - \dfrac{5}{12} \\
&= \dfrac{81}{108} + \dfrac{320}{108} - \dfrac{45}{108} \\
&= \dfrac{356}{108}
= \dfrac{89}{27}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ $ \; a : b + c : (2a) + 3b - a \; = $ [[  263/90  ]] $\;\;\text{mit:}\;\; a=\dfrac{5}{12}\;\; \wedge\;\; b=\dfrac{3}{10}\;\; \wedge\;\; c=\dfrac{7}{8}$
@Algebrite.check(263/90)
************
$$
\begin{align*}
a : b + c : (2a) + 3b - a
&= \dfrac{5}{12} : \dfrac{3}{10} + \dfrac{7}{8} : \big(2\cdot\dfrac{5}{12}\big) + 3\cdot\dfrac{3}{10} - \dfrac{5}{12} \\
&= \dfrac{5}{12}\cdot\dfrac{10}{3} + \dfrac{7}{8} : \dfrac{5}{6} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{50}{36} + \dfrac{7}{8}\cdot\dfrac{6}{5} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{25}{18} + \dfrac{42}{40} + \dfrac{9}{10} - \dfrac{5}{12} \\
&= \dfrac{250}{180} + \dfrac{189}{180} + \dfrac{162}{180} - \dfrac{75}{180} \\
&= \dfrac{526}{180}
= \dfrac{263}{90}
\end{align*}
$$
************
</div>

</section>





