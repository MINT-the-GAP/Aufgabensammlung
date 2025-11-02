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



tags: Ungleichungen, Bruchrechnung, Mengen, sehr leicht, niedrig, Angeben

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen?

author: Martin Lommatzsch

-->




# Lösungsmengen von Ungleichungen





**Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $3x < 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x < $   [[  6  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x + 7 \geq 12$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x \geq $   [[  5  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{4} \leq 6$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  24  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $x - 5 > 10$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x > $   [[  15  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$e)\;\;$__  $2x \geq 14$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x > $   [[  6  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$f)\;\;$__  $\dfrac{x}{9} \geq 2$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x > $   [[  17  ]]   $\left.   \right\}$
</div>

</section>










