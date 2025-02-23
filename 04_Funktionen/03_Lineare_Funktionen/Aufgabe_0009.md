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


tags: Lineare Funktionen, sehr leicht, sehr niedrig, Angeben

comment: Fülle Wertetabellen für lineare Funktionen aus.

author: Martin Lommatzsch

-->




# Wertetabellen für lineare Funktionen



**Fülle** die leeren Felder der Wertetabelle für die gegebene Funktion **aus**.




__$a)\;\;$__ Gegeben sei die lineare Funktion $f(x) = 5 \cdot x - 2$. 

<br>

<!-- data-type="none"
data-sortable="false" -->
|   x   |    3     |     5    |    8     |    11    |
| :---: | :------: | :------: | :------: | :------: |
|  f(x) | [[ 12 ]] | [[ 23 ]] | [[ 38 ]] | [[ 53 ]] |

<br>
<br>
<br>


__$b)\;\;$__ Gegeben sei die lineare Funktion $f(x) = 3 \cdot x + 7$. 

<br>

<!-- data-type="none"
data-sortable="false" -->
|   x   | [[  2 ]] |     7    | [[ 12 ]] |    15    |
| :---: | :------: | :------: | :------: | :------: |
|  f(x) |    13    | [[ 28 ]] |    43    | [[ 52 ]] |

<br>
<br>
<br>
