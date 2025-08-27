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


tags: Tabelle, Parameter, sehr leicht, sehr niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit

**Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" -->
|  $a$  |   $b$   |  $a+b$   |  $a \cdot b$ |  $b-a$   | $2 \cdot a$ |
| :---: | :-----: | :------: | :----------: | :------: | :---------: |
|   3   |     7   | [[ 10 ]] |   [[  21 ]]  | [[  4 ]] |  [[  6 ]]   |
|   5   |     6   | [[ 11 ]] |   [[  30 ]]  | [[  1 ]] |  [[ 10 ]]   |
|   9   |    14   | [[ 23 ]] |   [[ 126 ]]  | [[  5 ]] |  [[ 18 ]]   |
|   8   |    16   | [[ 24 ]] |   [[ 144 ]]  | [[  8 ]] |  [[ 16 ]]   |