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


tags: quadratische Funktionen, sehr leicht, sehr niedrig, Angeben

comment: Fülle Wertetabellen für quadratische Funktionen aus.

author: Martin Lommatzsch

-->




# Wertetabellen für quadratische Funktionen



**Fülle** die leeren Felder der Wertetabelle für die gegebene Funktion **aus**.




__$a)\;\;$__ Gegeben sei die quadratische Funktion $f(x) = x^2 - x - 2 $. 

<br>

<!-- data-type="none"
data-sortable="false" -->
|   x   |    2     |     4    |    5     |     7    |
| :---: | :------: | :------: | :------: | :------: |
|  f(x) | [[  0 ]] | [[ 10 ]] | [[ 18 ]] | [[ 40 ]] |

<br>
<br>
<br>


__$b)\;\;$__ Gegeben sei die quadratische Funktion $f(x) = x^2 + 4x $. 

<br>

<!-- data-type="none"
data-sortable="false" -->
|   x   |    1     |    4     |     7    |    11    |
| :---: | :------: | :------: | :------: | :------: |
|  f(x) | [[  5 ]] | [[ 32 ]] | [[ 77 ]] | [[165 ]] |

<br>
<br>
<br>
