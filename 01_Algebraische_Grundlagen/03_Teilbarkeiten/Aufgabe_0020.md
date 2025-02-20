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

$a)\;\; \text{kgV}\left(\text{kgV}(4;6);\text{kgV}(9;4)\right) =$ [[ 72  ]]

<br>

$b)\;\; \text{kgV}(9;7)-\text{ggT}(24;64) =$ [[ 55  ]]

<br>

$c)\;\; \text{ggT}(44;121) \cdot \text{ggT}(56;104) =$ [[  88 ]]

<br>

$d)\;\; \text{kgV}(5;4)+\text{kgV}(3;7;5) =$ [[ 420 ]]

<br>