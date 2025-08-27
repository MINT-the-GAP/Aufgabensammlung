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


tags: Tabelle, Parameter, Vorrangsregeln, leicht, niedrig, Angeben

comment: Setze für die Parameter Werte ein und fülle alle Felder der Tabelle aus.

author: Martin Lommatzsch

-->




# Tabellenarbeit

**Fülle** die freien Felder der Tabelle **aus**.



<!-- data-type="none"
data-sortable="false" -->
|  $a$  |   $c$  |   $r$   |  $a\cdot c - r$  |  $ r + a \cdot c$ | $(r+c)\cdot a$ |
| :---: | :----: | :-----: | :------:         | :----------:      | :-----------:  |
|   8   |    7   |     6   | [[ 50 ]]         |   [[ 62 ]]        |  [[  104  ]]   |
|   6   |    5   |     8   | [[ 22 ]]         |   [[ 38 ]]        |  [[  78  ]]    |
|   4   |    9   |     3   | [[ 33 ]]         |   [[ 39 ]]        |  [[  48  ]]    |
|   9   |    3   |     5   | [[ 22 ]]         |   [[ 33 ]]        |  [[  135  ]]   |