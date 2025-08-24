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



tags: Bruchrechnung, Mengen, sehr leicht, niedrig, Angeben

comment: Die Lösungsmenge braucht noch einen Wert, findest du diesen?

author: Martin Lommatzsch

-->




# Lösungsmengen von Ungleichungen





**Gib** den gesuchten Wert innerhalb der Lösungsmenge, die die Ungleichung beschreibt, **an**.



<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ $ 2x \leq 18$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x < $   [[  8  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$b)\;\;$__  $x + 8 \leq 17$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Q} \right| x \leq $   [[  9  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$c)\;\;$__  $\dfrac{x}{6} \geq 7$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{Z} \right| x > $   [[  42  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$d)\;\;$__  $x - 6 > 9$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x > $   [[  3  ]]   $\left.   \right\}$
</div>


<div class="flex-child">
__$e)\;\;$__  $x + 4 \leq 15$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{R} \right| x \leq $   [[  11  ]]   $\left.   \right\}$
</div>

<div class="flex-child">
__$f)\;\;$__  $5x < 40$ 

<!-- data-solution-button="5"-->
$\mathbb{L} = \left\{ x \in \mathbb{N} \right| x \leq $   [[  7  ]]   $\left.   \right\}$
</div>

</section>








