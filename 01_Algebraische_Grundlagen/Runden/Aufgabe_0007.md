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



tags: Runden, mittel, sehr niedrig, Angeben

comment: Runde eine natürliche Zahl auf unterschiedliche Stellen in einer Tabelle.

author: Martin Lommatzsch

-->




# Runden in Tabellen

**Gib** den auf die angegebene Stelle gerundeten Wert in den freien Tabellenfeldern **an**.

<!-- data-type="none" -->
|   Zahl    |    Zehner     |   Hunderter    |   Tausender    |   Zehntausender    |   Hunderttausender   |
|  :-----:  |    :-----:    |   :-----:      |     :-----:    |     :-----:        |       :-----:        |
| $548062$  | [[ 548060  ]] |  [[ 548100  ]] | [[ 548000  ]]  |    [[ 550000  ]]   |     [[ 500000  ]]    |
| $48991$   | [[ 48990   ]] |  [[ 49000   ]] | [[ 49000   ]]  |    [[ 50000   ]]   |     [[   0     ]]    |
| $5184612$ | [[ 5184610 ]] |  [[ 5184600 ]] | [[ 5185000 ]]  |    [[ 5180000 ]]   |     [[ 5200000 ]]    |
|  $84151$  | [[ 84150   ]] |  [[ 84200   ]] | [[ 84000   ]]  |    [[ 80000   ]]   |     [[ 100000  ]]    |
| $2504468$ | [[ 2504470 ]] |  [[ 2504500 ]] | [[ 2504000 ]]  |    [[ 2500000 ]]   |     [[ 2500000 ]]    |

