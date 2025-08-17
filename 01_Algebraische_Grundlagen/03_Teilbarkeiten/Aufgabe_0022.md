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


tags: kgV, ggT, Vorrangsregeln, schwer, normal, Angeben

comment: Rechne mit kleinsten gemeinsamen Vielfachen und größten gemeinsamen Teilern.

author: Martin Lommatzsch

-->




# Rechnen mit Vielfachen und Teilern


**Gib** den Wert des Terms **an**.





$a)\;\; \text{kgV}(6;8) + \text{kgV}(5;4) \cdot \text{ggT}(35;63) =$ [[ 164 ]]



$b)\;\; \text{kgV}(16;12) : \text{ggT}(96;56) - \text{ggT}(15;33) =$ [[  3  ]]



$c)\;\; \text{kgV}\left(\text{ggT}(45;36);\text{ggT}(24;16)\right) - \text{ggT}(75;100) =$ [[  47 ]]

