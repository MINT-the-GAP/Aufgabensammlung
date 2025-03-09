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


tags: Einheiten, Länge, leicht, sehr niedrig, Angeben

comment: Rechne die Längeneinheit richtig um.

author: Martin Lommatzsch

-->




# Längeneinheiten


**Rechne** in die angebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $20\,\text{cm} = $ [[  200  ]] $\,\text{mm}$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $3400\,\text{dm} = $ [[  340  ]] $\,\text{m}$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $7000\,\text{mm} = $ [[  70   ]] $\,\text{dm}$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $3\,\text{km} = $ [[ 30000 ]] $\,\text{dm}$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $65000\,\text{cm} = $ [[  650  ]] $\,\text{m}$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $4000000\,\text{cm} = $ [[   40  ]] $\,\text{km}$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>