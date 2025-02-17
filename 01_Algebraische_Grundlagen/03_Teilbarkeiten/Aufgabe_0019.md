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


tags: kgV, ggT, mittel, niedrig, Angeben

comment: Rechne mit kleinsten gemeinsamen Vielfachen und größten gemeinsamen Teilern.

author: Martin Lommatzsch

-->




# Rechnen mit Vielfachen und Teilern


**Gib** den Wert des Terms **an**.

<br>


<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{kgV}(4;6) + \text{ggT}(55;35) =$ [[ 17  ]]

</div>

<div class="flex-child">

$b)\;\; \text{kgV}\left(6;ggT(24;33) \right) =$ [[  6  ]]

</div>

<div class="flex-child">

$c)\;\; \text{ggT}(45;81) \cdot \text{kgV}(8;6) =$ [[ 216 ]]

</div>

<div class="flex-child">

$d)\;\; \text{ggT}\left( 72 ; kgV(9;4) \right) =$ [[ 36  ]]

</div>

</section>