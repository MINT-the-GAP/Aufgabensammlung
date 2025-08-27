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
|  $u$  |   $v$   |   $x$   |  $v-u$   |  $v - x$     | $u \cdot x$  | $v \cdot x$ |
| :---: | :-----: | :-----: | :------: | :----------: | :---------:  | :---------: |
|   7   |    28   |     5   | [[ 21 ]] |   [[  23 ]]  |  [[  35  ]]  |  [[ 140 ]]  |
|   3   |    13   |     2   | [[ 10 ]] |   [[  11 ]]  |  [[  39  ]]  |  [[ 26  ]]  |
|   9   |    18   |     3   | [[ 9  ]] |   [[  15 ]]  |  [[  162 ]]  |  [[ 54  ]]  |
|   4   |    22   |     8   | [[ 18 ]] |   [[  14 ]]  |  [[  88  ]]  |  [[ 176 ]]  |