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



tags: Bruchrechnung, leicht, niedrig, Berechnen

comment: Wie viel sind zum Beispiel $\frac{1}{4}$ von 4000€? Bestimme den Anteilswert.

author: Martin Lommatzsch

-->




# Bruchanteile von Bruchanteilen


**Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{4}$ von $\dfrac{2}{3}$ von $35\,$€?  \
[[  245/6  ]]€
@Algebrite.check(245/6)
************
$$
\begin{align*}
\dfrac{7}{4}\cdot\dfrac{2}{3}\cdot 35\,\text{€}
&= \dfrac{7\cdot 2 \cdot 35\,\text{€}}{4\cdot 3} \\
&= \dfrac{490}{12}\,\text{€} \\
&= \dfrac{245}{6}\,\text{€}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $\dfrac{2}{5}$ von $55\,$kg?  \
[[  99/4  ]]kg
@Algebrite.check(99/4)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot\dfrac{2}{5}\cdot 55\,\text{kg}
&= \dfrac{9\cdot 2 \cdot 55}{8\cdot 5}\,\text{kg} \\
&= \dfrac{990}{40}\,\text{kg} \\
&= \dfrac{99}{4}\,\text{kg}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{11}{12}$ von $\dfrac{5}{7}$ von $80\,\ell$?  \
[[  1100/21  ]] $\ell$
@Algebrite.check(1100/21)
************
$$
\begin{align*}
\dfrac{11}{12}\cdot\dfrac{5}{7}\cdot 80\,\ell
&= \dfrac{11\cdot 5 \cdot 80\,\ell}{12\cdot 7} \\
&= \dfrac{4400}{84} \,\ell \\
&= \dfrac{1100}{21}\,\ell
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $\dfrac{7}{9}$ von $65\,$m?  \
[[  2275/54  ]]m
@Algebrite.check(2275/54)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot\dfrac{7}{9}\cdot 65\,\text{m}
&= \dfrac{5\cdot 7 \cdot 65\,\text{m}}{6\cdot 9} \\
&= \dfrac{2275}{54}\,\text{m}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{4}{5}$ von $\dfrac{3}{8}$ von $96\,$min?  \
[[  144/5  ]]min
@Algebrite.check(144/5)
************
$$
\begin{align*}
\dfrac{4}{5}\cdot\dfrac{3}{8}\cdot 96\,\text{min}
&= \dfrac{4\cdot 3 \cdot 96\,\text{min}}{5\cdot 8} \\
&= \dfrac{1152}{40}\,\text{min} \\
&= \dfrac{144}{5}\,\text{min}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{13}{10}$ von $\dfrac{3}{4}$ von $30\,$€?  \
[[  117/4  ]]€
@Algebrite.check(117/4)
************
$$
\begin{align*}
\dfrac{13}{10}\cdot\dfrac{3}{4}\cdot 30\,\text{€}
&= \dfrac{13\cdot 3 \cdot 30\,\text{€}}{10\cdot 4} \\
&= \dfrac{1170}{40}\,\text{€} \\
&= \dfrac{117}{4}\,\text{€}
\end{align*}
$$
************
</div>

</section>



