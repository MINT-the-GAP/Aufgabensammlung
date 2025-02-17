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


tags: Einheiten, Länge, Fläche, mittel, sehr niedrig, Angeben

comment: Rechne die Flächeneinheit richtig um.

author: Martin Lommatzsch

-->




# Flächeneinheiten


**Rechne** alles in die angegebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $750000\,\text{m}^2 = $ [[      75      ]] $\,\text{ha}$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $7\,\text{km}^2 = $ [[ 70000000000 ]] $\,\text{cm}^2$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $8000\,\text{ha} = $ [[      80      ]] $\,\text{a}$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $20000\,\text{km}^2 = $ [[      200     ]] $\,\text{ha}$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $2000000000000\,\text{mm}^2 = $ [[       2      ]] $\,\text{km}^2$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $180\,\text{km}^2 = $ [[ 18000000000 ]] $\,\text{dm}^2$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>