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


tags: Einheiten, Länge, Volumen, mittel, sehr niedrig, Angeben

comment: Rechne die Volumeneinheit richtig um.

author: Martin Lommatzsch

-->




# Volumeneinheiten


**Rechne** alles in die angegebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $3\,\text{dm}^3 = $ [[   3000    ]] $\,\text{ml}$ \

</div>

<div class="flex-child">

__$b)\;\;$__ $80\,\text{cl} = $ [[    800    ]] $\,\text{ml}$ \

</div>

<div class="flex-child">

__$c)\;\;$__ $410000\,\text{dm}^3 = $ [[    410    ]] $\,\text{m}^3$ \

</div>

<div class="flex-child">

__$d)\;\;$__ $9500000000\,\text{cm}^3 = $ [[    9500   ]] $\,\text{m}^3$ \

</div>

<div class="flex-child">

__$e)\;\;$__ $120\,\ell = $ [[ 120000000 ]] $\,\text{mm}^3$ \

</div>

<div class="flex-child">

__$f)\;\;$__ $50000\,\ell = $ [[     50     ]] $\,\text{cm}^3$ \

</div>


</section>





