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

<br>

<!-- data-type="none" -->
|  $a$  |   $b$   |   $c$   |  $a+c$   |  $c + b$     |  $b : a$ | $2 \cdot a \cdot c$ |
| :---: | :-----: | :-----: | :------: | :----------: | :------: | :---------: |
|   4   |     8   |     2   | [[ 6  ]] |   [[  10 ]]  | [[  2 ]] |  [[ 16 ]]   |
|   6   |    12   |     7   | [[ 13 ]] |   [[  19 ]]  | [[  2 ]] |  [[ 84 ]]   |
|   5   |    25   |     3   | [[ 8  ]] |   [[  8  ]]  | [[  5 ]] |  [[ 30 ]]   |
|   9   |    27   |     2   | [[ 11 ]] |   [[  11 ]]  | [[  3 ]] |  [[ 36 ]]   |