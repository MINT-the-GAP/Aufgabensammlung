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

<br>


<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{ggT}(39;169) =$ [[ 13  ]]

</div>

<div class="flex-child">

$b)\;\; \text{ggT}(45;75) =$ [[  15 ]]

</div>

<div class="flex-child">

$c)\;\; \text{ggT}(95;38) =$ [[ 19 ]]

</div>

<div class="flex-child">

$d)\;\; \text{ggT}(47;39) =$ [[  1  ]]

</div>

<div class="flex-child">

$e)\;\; \text{ggT}(1750;4750) =$ [[ 250 ]]

</div>

<div class="flex-child">

$f)\;\; \text{ggT}(420;960) =$ [[ 60  ]]

</div>

</section>