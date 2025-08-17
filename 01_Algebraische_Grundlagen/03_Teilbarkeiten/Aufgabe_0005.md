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


tags: ggT, leicht, sehr niedrig, Angeben

comment: Gib den größten gemeinsamen Teiler an.

author: Martin Lommatzsch

-->




# größter gemeinsamer Teiler


**Gib** den Wert des Terms **an**.




<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{ggT}(28;91) =$ [[  7  ]]

</div>

<div class="flex-child">

$b)\;\; \text{ggT}(23;29) =$ [[  1  ]]

</div>

<div class="flex-child">

$c)\;\; \text{ggT}(68;51) =$ [[ 17  ]]

</div>

<div class="flex-child">

$d)\;\; \text{ggT}(24;60) =$ [[ 12  ]]

</div>

<div class="flex-child">

$e)\;\; \text{ggT}(81;27) =$ [[  9  ]]

</div>

<div class="flex-child">

$f)\;\; \text{ggT}(175;325) =$ [[ 25  ]]

</div>

</section>