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

<br>

<!-- data-type="none" -->
|  $z$  |   $r$  |   $s$   |  $ z+r\cdot s $  |  $ z+r+2 \cdot s $ | $ |s|\cdot s - r $ |
| :---: | :----: | :-----: | :---------:      | :----------:       | :-----------:      |
|  6    |   -5   |   -4    | [[ 26  ]]        |   [[ -7  ]]        |  [[ -11 ]]         |
|  -8   |   3    |    -6   | [[ -30 ]]        |   [[ -17 ]]        |  [[ -39 ]]         |
|   -3  |   7    |    -4   | [[ -31 ]]        |   [[ -4  ]]        |  [[ -23 ]]         |
|   7   |   -9   |    -5   | [[ 52  ]]        |   [[ -12 ]]        |  [[ -16 ]]         |