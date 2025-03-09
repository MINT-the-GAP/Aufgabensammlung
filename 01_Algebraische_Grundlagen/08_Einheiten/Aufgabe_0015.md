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


tags: Einheiten, Länge, Fläche, sehr leicht, sehr niedrig, Angeben

comment: Rechne die Flächeneinheit richtig um.

author: Martin Lommatzsch

-->




# Flächeneinheiten


**Rechne** alles in die angegebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $2\,\text{cm}^2 = $ [[  200  ]] $\,\text{mm}^2$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $1\,\text{m}^2 = $ [[ 10000 ]] $\,\text{cm}^2$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $11\,\text{dm}^2 = $ [[ 1100  ]] $\,\text{cm}^2$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $3\,\text{m}^2 = $ [[  300  ]] $\,\text{dm}^2$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $400\,\text{dm}^2 = $ [[   4   ]] $\,\text{m}^2$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $1000\,\text{mm}^2 = $ [[   10  ]] $\,\text{cm}^2$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>