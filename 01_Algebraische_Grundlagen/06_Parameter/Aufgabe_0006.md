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

<br>

<!-- data-type="none"
data-sortable="false" -->
|  $z$  |   $x$  |   $n$   |  $n - x - z$  |  $ n - x \cdot z$ | $ n - 4 \cdot z$ |
| :---: | :----: | :-----: | :------:      | :----------:      | :-----------:    |
|   8   |    6   |    96   | [[ 82 ]]      |   [[ 40 ]]        |  [[  64  ]]      |
|   12  |    5   |    84   | [[ 67 ]]      |   [[ 24 ]]        |  [[  36  ]]      |
|   3   |    14  |    67   | [[ 50 ]]      |   [[ 25 ]]        |  [[  55  ]]      |
|   7   |    9   |    79   | [[ 63 ]]      |   [[ 16 ]]        |  [[  51  ]]      |