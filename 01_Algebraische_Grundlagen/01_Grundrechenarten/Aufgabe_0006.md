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


tags: Vokabeln, Grundrechenarten, Vorrangsregeln, mittel, niedrig, Angeben

comment: Ein Term wird durch die Fachsprache beschrieben. Gib den Wert dieses Terms an.

author: Martin Lommatzsch

-->




# Fachsprache von Termen

**Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Ein Produkt besteht aus den Summen aus $4$ und $3$ sowie $6$ und $2$. \
[[  56  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ Der Minuend ist die positive Differenz aus $95$ und $33$, während der Subtrahend $27$ ist. \
[[  35  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ Der Dividend ist die Summe aus $41$ und $54$, während der Divisor aus der positiven Differenz aus $83$ und $78$ besteht. \
[[  19  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ Die ganzzahligen Quotienten aus $56$ und $8$ sowie $84$ und $12$ werden miteinander multipliziert.\
[[  49  ]]

</div>
</section>





