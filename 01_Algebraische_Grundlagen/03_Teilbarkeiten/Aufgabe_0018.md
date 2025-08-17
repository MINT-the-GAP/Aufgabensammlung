<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: kgV, mittel, sehr niedrig, Angeben

comment: Gib das kleinste gemeinsame Vielfache an.

author: Martin Lommatzsch

-->




# kleinste gemeinsame Vielfache


**Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{kgV}(6;9;8) =$ [[  72  ]]

</div>

<div class="flex-child">

$b)\;\; \text{kgV}(15;25;4) =$ [[  300 ]]

</div>

<div class="flex-child">

$c)\;\; \text{kgV}(4;11;3) =$ [[  132 ]]

</div>

<div class="flex-child">

$d)\;\; \text{kgV}(11;13;17) =$ [[ 2431 ]]

</div>

</section>