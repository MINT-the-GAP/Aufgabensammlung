<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Vokabeln, Grundrechenarten, leicht, sehr niedrig, Angeben

comment: Ein Term wird durch die Fachsprache beschrieben. Gib den Wert dieses Terms an.

author: Martin Lommatzsch

-->




# Fachsprache von Termen

**Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ Ein Produkt aus $7$ und $8$ wird durch $4$ dividiert.\
-->[[  14  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Der Term besteht aus den Faktoren $2$, $6$, $3$ und  $5$.\
-->[[  180 ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Der Dividend $6$ und der Divisor $78$ bilden ein Produkt mit $8$.\
-->[[  104 ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Der Subtrahend $19$ und der Minuend $73$ bilden eine Differenz, die mit $17$ addiert wird.\
-->[[  71  ]]

</div>
</section>
<br>
<br>
<br>
<br>

