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


$a)\;\; \text{kgV}(15;35):\text{ggT}(42;91) =$ [[  15 ]]

<br>

$b)\;\; \text{ggT}(72;132) \cdot \text{ggT}(105;45) =$ [[  60 ]]

<br>

$c)\;\; \text{kgV}\left(\text{ggT}(14;49);\text{ggT}(256;36)\right) =$ [[ 28  ]]

<br>

$d)\;\; \text{ggT}\left(\text{kgV}(8;6);\text{kgV}(16;12)\right)  =$ [[ 12  ]]

<br>