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
|  $a$  |   $c$  |   $e$   |  $ e \cdot e - c $  |  $ |a|-|c| $ | $ a \cdot c \cdot e $ |
| :---: | :----: | :-----: | :------------:      | :----------: | :-------------------: |
|   -2  |    -7  |    -4   | [[ 23 ]]            |   [[ -5 ]]   |  [[ -56  ]]           |
|   4   |   -9   |    3    | [[ 18 ]]            |   [[ -5 ]]   |  [[ -108 ]]           |
|   -5  |   4    |   -2    | [[ 0  ]]            |   [[ 1  ]]   |  [[ 40   ]]           |
|   -7  |   -5   |    9    | [[ 86 ]]            |   [[ 2  ]]   |  [[ 315  ]]           |