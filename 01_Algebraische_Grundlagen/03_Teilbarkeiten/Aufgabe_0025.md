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

tags: kgV, ggT, Vorrangsregeln, sehr schwer, normal, Angeben

comment: Rechne mit kleinsten gemeinsamen Vielfachen und größten gemeinsamen Teilern.

author: Martin Lommatzsch

-->




# Rechnen mit Vielfachen und Teilern


**Gib** den Wert des Terms **an**.

<br>

$a)\;\; \text{kgV}(4;3):\text{ggT}(25;15) + \text{kgV}(8;6):\text{ggT}(45;55) =$ [[  12 ]]

<br>

$b)\;\; \text{ggT}(144;20) \cdot \left( \text{ggT}(400;280;32) + \text{ggT}(256;64;786;152) \right) =$ [[ 40  ]]

<br>