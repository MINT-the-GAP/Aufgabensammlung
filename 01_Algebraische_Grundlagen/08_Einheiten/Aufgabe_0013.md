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


tags: Einheiten, Länge, sehr leicht, sehr niedrig, Angeben

comment: Rechne die Längeneinheit richtig um.

author: Martin Lommatzsch

-->




# Längeneinheiten


**Rechne** in die angebene Einheit **um**.




<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $3\,\text{m} = $ [[  300  ]] $\,\text{cm}$ \

</div>

<div class="flex-child">

__$b)\;\;$__ $12\,\text{m} = $ [[  120  ]] $\,\text{dm}$ \

</div>

<div class="flex-child">

__$c)\;\;$__ $8000\,\text{mm} = $ [[   8   ]] $\,\text{m}$ \

</div>

<div class="flex-child">

__$d)\;\;$__ $17\,\text{m} = $ [[ 17000 ]] $\,\text{mm}$ \

</div>

<div class="flex-child">

__$e)\;\;$__ $5000\,\text{m} = $ [[   5   ]] $\,\text{km}$ \

</div>

<div class="flex-child">

__$f)\;\;$__ $37\,\text{dm} = $ [[  370  ]] $\,\text{cm}$ \

</div>


</section>





