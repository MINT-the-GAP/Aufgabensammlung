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


tags: Einheiten, Länge, Volumen, leicht, sehr niedrig, Angeben

comment: Rechne die Volumeneinheit richtig um.

author: Martin Lommatzsch

-->




# Volumeneinheiten


**Rechne** alles in die angegebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $20\,\text{dm}^3 = $ [[   20000000  ]] $\,\text{mm}^3$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $49\,\text{dm}^3 = $ [[     49     ]] $\,\text{l}$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $51\,\text{l} = $ [[     51000  ]] $\,\text{ml}$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $2\,\text{m}^3 = $ [[ 2000000000 ]] $\,\text{mm}^3$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $8000000\,\text{cm}^3 = $ [[    8000    ]] $\,\text{dm}^3$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $117\,\text{l} = $ [[   117000   ]] $\,\text{cm}^3$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>