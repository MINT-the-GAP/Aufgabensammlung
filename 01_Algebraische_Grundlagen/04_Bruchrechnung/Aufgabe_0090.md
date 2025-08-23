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
__$a)\;\;$__ Wie viel sind $\dfrac{7}{12}$ von $50\,$kg?  \
[[  175/6  ]]kg
************
$$
\begin{align*}
\dfrac{7}{12}\cdot 50
&= \dfrac{7\cdot 50}{12} \\
&= \dfrac{350}{12} \\
&= \dfrac{175}{6}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$b)\;\;$__ Wie viel sind $\dfrac{9}{14}$ von $25\,$l?  \
[[  225/14  ]]l
************
$$
\begin{align*}
\dfrac{9}{14}\cdot 25
&= \dfrac{9\cdot 25}{14} \\
&= \dfrac{225}{14}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$c)\;\;$__ Wie viel sind $\dfrac{11}{15}$ von $40\,$m?  \
[[  88/3  ]]m
************
$$
\begin{align*}
\dfrac{11}{15}\cdot 40
&= \dfrac{11\cdot 40}{15} \\
&= \dfrac{440}{15} \\
&= \dfrac{88}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$d)\;\;$__ Wie viel sind $\dfrac{5}{9}$ von $22\,$cm?  \
[[  110/9  ]]cm
************
$$
\begin{align*}
\dfrac{5}{9}\cdot 22
&= \dfrac{5\cdot 22}{9} \\
&= \dfrac{110}{9}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$e)\;\;$__ Wie viel sind $\dfrac{13}{16}$ von $18\,$kg?  \
[[  117/8  ]]kg
************
$$
\begin{align*}
\dfrac{13}{16}\cdot 18
&= \dfrac{13\cdot 18}{16} \\
&= \dfrac{234}{16} \\
&= \dfrac{117}{8}
\end{align*}
$$
************
</div>


<div class="flex-child">

<!-- data-solution-button="5"-->
__$f)\;\;$__ Wie viel sind $\dfrac{7}{20}$ von $33\,$m?  \
[[  231/20  ]]m
************
$$
\begin{align*}
\dfrac{7}{20}\cdot 33
&= \dfrac{7\cdot 33}{20} \\
&= \dfrac{231}{20}
\end{align*}
$$
************
</div>

</section>







