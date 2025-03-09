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


tags: Potenzen, sehr leicht sehr, niedrig, Angeben

comment: Gib den Wert einer Potenz an.

author: Martin Lommatzsch

-->




# Potenzwerte


**Gib** den Wert des Terms **an**.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $10^5 = $ [[ 100000 ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $2^11 = $ [[  2048  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $6^3 = $ [[  216   ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $13^2 = $ [[ 169 ]]



</div>
</section>

<br>
<br>
<br>
<br>
<br>
<br>
 