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
|  $r$  |   $s$   |  $4\cdot s$   |  $r + s$     | $s \cdot s$ | $r \cdot r \cdot r$ |
| :---: | :-----: | :-----------: | :----------: | :---------: | :---------: |
|   4   |    6   |    [[ 24 ]]    |   [[ 10 ]]   |  [[ 36  ]]  |  [[ 64  ]]  |
|   3   |    4   |    [[ 16 ]]    |   [[ 7  ]]   |  [[ 16  ]]  |  [[ 27  ]]  |
|   6   |    8   |    [[ 32 ]]    |   [[ 14 ]]   |  [[ 64  ]]  |  [[ 216 ]]  |
|   5   |    11  |    [[ 44 ]]    |   [[ 16 ]]   |  [[ 121 ]]  |  [[ 125 ]]  |