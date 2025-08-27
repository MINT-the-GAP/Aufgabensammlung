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
|  $k$  |   $g$  |   $u$   |  $ (k-g):u $  |  $ k - g \cdot u $ | $ u \cdot u + k \cdot g $ |
| :---: | :----: | :-----: | :------:      | :----------:       | :-----------:             |
|   23  |   5    |    3    | [[ 6 ]]       |   [[ 8 ]]          |  [[  124  ]]              |
|   21  |   7    |    2    | [[ 7 ]]       |   [[ 7 ]]          |  [[  151  ]]              |
|   54  |   9    |    5    | [[ 9 ]]       |   [[ 9 ]]          |  [[  511  ]]              |
|   57  |   13   |    4    | [[ 11 ]]      |   [[ 4 ]]          |  [[  757  ]]              |