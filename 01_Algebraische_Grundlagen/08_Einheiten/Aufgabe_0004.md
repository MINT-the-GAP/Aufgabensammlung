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


tags: Einheiten, Länge, Zeit, Masse, Fläche, leicht, sehr niedrig, Angeben

comment: Rechne von der einen Einheit in eine andere um.

author: Martin Lommatzsch

-->




# Umrechnungen von Einheiten

**Rechne** in die angebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $9\,\text{m} = $ [[ 900   ]] $\,\text{cm}$ \

<br>
</div>
<div class="flex-child">

__$b)\;\;$__ $85000\,\text{g} = $ [[ 85    ]] $\,\text{kg}$ \

<br>
</div>
<div class="flex-child">

__$c)\;\;$__ $3\,\text{h} = $ [[ 180   ]] $\,\text{min}$ \

<br>
</div>
<div class="flex-child">

__$d)\;\;$__ $5000\,\text{mm} = $ [[  50   ]] $\,\text{dm}$ \

<br>
</div>
<div class="flex-child">

__$e)\;\;$__ $1\,\text{m}^2 = $ [[  100  ]] $\,\text{dm}^2$ \

<br>
</div>
<div class="flex-child">

__$f)\;\;$__ $3600\,\text{h} = $ [[   1   ]] $\,\text{s}$ \

<br>
</div>


</section>

<br>
<br>
<br>
<br>
<br>