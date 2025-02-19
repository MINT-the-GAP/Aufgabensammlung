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



tags: Runden, schwer, sehr niedrig, Angeben

comment: Was ist die größte beziehungsweise kleinste Zahl, die zur gerunden Zahl führt?

author: Martin Lommatzsch

-->




# Grenzen des Runden

Gegeben sei eine gerundete Zahl. **Gib** jeweils die kleinste und die größte Zahl **an**, die nach dem Runden zur gegebenen Zahl wird.

<!-- data-type="none" -->
| gerundete Zahl | wurde gerundete auf | kleinste Zahl |  größte Zahl  |
|  :----------:  | :-----------------: | :-----------: |  :---------:  |
|    $6000000$   |  Hunderttausender   | [[ 5950000 ]] | [[ 6049999 ]] |
|      $100$     |        Zehner       | [[   50   ]]  | [[  149    ]] |
|    $794000$    |      Tausender      | [[ 793500  ]] | [[ 794499  ]] |
|      $0$       |      Tausender      | [[ 0       ]] | [[ 499     ]] |
|      $6400$    |      Hunderter      | [[ 6350    ]] | [[ 6449    ]] |

