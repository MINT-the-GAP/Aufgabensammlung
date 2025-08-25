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


tags: Bruchrechnung, leicht, sehr niedrig, Berechnen

comment: Wie viel sind zum Beispiel $\frac{1}{4}$ von 4000€? Bestimme den Anteilswert.

author: Martin Lommatzsch

-->




# Bruchanteile von Etwas


**Berechne** den Wert des Terms hinter der Fragestellung.



<section class="flex-container">

<div class="flex-child">

<!-- data-solution-button="5"-->
__$a)\;\;$__ Wie viel sind $\dfrac{7}{12}$ von $54\,$kg?  \
[[  63/2  ]]kg
@Algebrite.check(63/2)
************
$$
\begin{align*}
\dfrac{7}{12}\cdot 54\;\text{kg}
&= \dfrac{7\cdot 54}{12}\;\text{kg} \\
&= \dfrac{7\cdot \,9}{2}\;\text{kg} \\
&= \dfrac{63}{2}\;\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{5}{6}$ von $49\,$m$^2$?  \
[[  245/6  ]]m$^2$
@Algebrite.check(245/6)
************
$$
\begin{align*}
\dfrac{5}{6}\cdot 49\;\text{m$^2$}
&= \dfrac{5\cdot 49}{6}\;\text{m$^2$} \\
&= \dfrac{245}{6}\;\text{m$^2$} 
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{9}{8}$ von $20\,$h?  \
[[  45/2  ]]h
@Algebrite.check(45/2)
************
$$
\begin{align*}
\dfrac{9}{8}\cdot 20\;\text{h}
&= \dfrac{9\cdot 20}{8}\;\text{h} \\
&= \dfrac{9\cdot \,5}{2}\;\text{h} \\
&= \dfrac{45}{2}\;\text{h}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{13}{15}$ von $36\,$kg?  \
[[  156/5  ]]kg
@Algebrite.check(156/5)
************
$$
\begin{align*}
\dfrac{13}{15}\cdot 36\;\text{kg}
&= \dfrac{13\cdot 36}{15}\;\text{kg} \\
&= \dfrac{13\cdot 12}{5}\;\text{kg} \\
&= \dfrac{156}{5}\;\text{kg}
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{3}{7}$ von $85\,$min?  \
[[  255/7  ]]min
@Algebrite.check(255/7)
************
$$
\begin{align*}
\dfrac{3}{7}\cdot 85\;\text{min}
&= \dfrac{3\cdot 85}{7}\;\text{min} \\
&= \dfrac{255}{7}\;\text{min} 
\end{align*}
$$
************
</div>

<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{17}{12}$ von $18\,$m?  \
[[  51/2  ]]m
@Algebrite.check(51/2)
************
$$
\begin{align*}
\dfrac{17}{12}\cdot 18\;\text{m}
&= \dfrac{17\cdot 18}{12}\;\text{m} \\
&= \dfrac{17\cdot \,3}{2}\;\text{m} \\
&= \dfrac{51}{2}\;\text{m}
\end{align*}
$$
************
</div>

</section>



