<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Tabelle, Parameter, Negative Zahlen, Vorrangsregeln, leicht, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit

**Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" -->
|  $t$  |   $k$  |   $d$   |  $ t+k-d $  |  $ t \cdot d $ | $ d - k \cdot t $ |
| :---: | :----: | :-----: | :------:    | :----------:   | :-----------:     |
|  5    |   -6   |    8    | [[ -9  ]]   |   [[  40 ]]    |  [[ 38  ]]        |
|  -8   |   4    |    -6   | [[ -10 ]]   |   [[  48 ]]    |  [[ 18  ]]        |
|  -4   |   -7   |    9    | [[ -20 ]]   |   [[ -36 ]]    |  [[ -19 ]]        |
|   3   |   -5   |    -8   | [[ 6   ]]   |   [[ -24 ]]    |  [[ 7   ]]        |