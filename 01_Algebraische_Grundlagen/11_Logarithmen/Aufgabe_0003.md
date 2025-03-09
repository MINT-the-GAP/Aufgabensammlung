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


tags: Logarithmen, sehr leicht, sehr niedrig, Angeben

comment: Gib den Wert eines Logarithmus an.

author: Martin Lommatzsch

-->




# Logarithmuswerte


**Gib** den Wert des Terms **an**.



<section class="flex-container">
<div class="flex-child">
__$a)\;\;$__ $\log_{6}\left( 216 \right) = $ [[  3  ]]

</div>
<div class="flex-child">

__$b)\;\;$__ $\log_{2}\left( 64 \right) = $ [[  6  ]]

</div>
<div class="flex-child">

__$c)\;\;$__ $\log_{11}\left( 14641 \right) = $ [[  4  ]]

</div>
<div class="flex-child">

__$d)\;\;$__ $\log_{17}\left( 1 \right) = $ [[  0  ]]




</div>
</section>

<br>
<br>
<br>
<br>
<br>
 