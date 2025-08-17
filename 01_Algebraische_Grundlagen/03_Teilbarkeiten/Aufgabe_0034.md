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


tags: Teilbarkeiten, Quersumme, sehr leicht, sehr niedrig, Angeben

comment: Addiere alle Ziffern einer Zahl und erhalte die Quersumme.

author: Martin Lommatzsch

-->




# Quersumme angeben


**Gib** den Wert der Quersumme **an**.

<section class="flex-container">
<div class="flex-child">


__$a)\;\;$__ $z= 20355726$ \
$Q(z) =$ [[ 30 ]]

</div>
<div class="flex-child">


__$b)\;\;$__ $z=  94101501$ \
$Q(z) =$ [[ 21 ]]

</div>
<div class="flex-child">


__$c)\;\;$__ $z=  34620512$\
$Q(z) =$ [[ 23 ]]

</div>
<div class="flex-child">


__$d)\;\;$__ $z=  23500325$\
$Q(z) =$ [[ 20 ]]

</div>
</section>