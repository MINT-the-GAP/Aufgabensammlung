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

__$a)\;\;$__ $420\,\text{min} = $ [[    7   ]] $\,\text{h}$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $25\,\text{m} = $ [[  2500  ]] $\,\text{cm}$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $780000\,\text{kg} = $ [[   780  ]] $\,\text{t}$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $87\,\text{dm} = $ [[  8700  ]] $\,\text{mm}$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $2\,\text{km} = $ [[ 200000 ]] $\,\text{cm}$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $50000\,\text{cm}^2 = $ [[   5   ]] $\,\text{m}^2$ \

<br>
</div>


</section>

<br>
<br>
<br>
<br>
<br>