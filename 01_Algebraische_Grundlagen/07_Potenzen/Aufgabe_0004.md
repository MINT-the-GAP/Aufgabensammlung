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



tags: Potenzen, Negative Zahlen, leicht, niedrig, Angeben

comment: Gib den Wert einer Potenz an.

author: Martin Lommatzsch

-->




# Potenzwerte und Vorzeichen


**Gib** den Wert des Terms **an**.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $-2^4 = $ [[  -16  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $(-4)^4 = $ [[  256  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $(-5)^3 = $ [[ -125  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $-4^3 = $ [[ -64  ]]



</div>
</section>

<br>
<br>
<br>
<br>
<br>
<br>
 