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


tags: lineare Funktionen, negative Zahlen, leicht, niedrig, Angeben

comment: Fülle Wertetabellen für lineare Funktionen aus. Achte auf die Vorzeichen.

author: Martin Lommatzsch

-->




# Wertetabellen für lineare Funktionen



**Fülle** die leeren Felder der Wertetabelle für die gegebene Funktion **aus**.



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Gegeben sei die lineare Funktion $f(x) = 7 x - 22$. 

<br>

|   x   |    -4     |     3     |    9      |   -6      |
| :---: | :-------: | :-------: | :-------: | :-------: |
|  f(x) | [[ -50 ]] | [[ -1  ]] | [[ 41  ]] | [[ -64 ]] |

<br>
<br>
<br>

</div>


<div class="flex-child">

__$b)\;\;$__ Gegeben sei die lineare Funktion $f(x) = -8 \cdot x - 14$. 

<br>

|   x   | [[  4  ]] |     6     | [[  -7 ]] |     -5    |
| :---: | :-------: | :-------: | :-------: | :-------: |
|  f(x) |    -46    | [[ -62 ]] |    42     | [[  26 ]] |

<br>
<br>
<br>

</div>

</section>