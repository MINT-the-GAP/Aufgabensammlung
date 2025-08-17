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


tags: kgV, sehr leicht, sehr niedrig, Angeben

comment: Gib das kleinste gemeinsame Vielfache an.

author: Martin Lommatzsch

-->




# kleinste gemeinsame Vielfache


**Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{kgV}(4;7) =$ [[ 28  ]]

</div>

<div class="flex-child">

$b)\;\; \text{kgV}(9;3) =$ [[  9  ]]

</div>

<div class="flex-child">

$c)\;\; \text{kgV}(10;8) =$ [[  40 ]]

</div>

<div class="flex-child">

$d)\;\; \text{kgV}(7;9) =$ [[  63 ]]

</div>

<div class="flex-child">

$e)\;\; \text{kgV}(15;10) =$ [[ 30  ]]

</div>

<div class="flex-child">

$f)\;\; \text{kgV}(11;7) =$ [[ 77  ]]

</div>

</section>