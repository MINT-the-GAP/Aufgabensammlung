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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


tags: Kontingenztafel, Vierfeldertafel, unbedingte Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Fülle die Vierfeldertafel für eine unbedingte Wahrscheinlichkeit aus.

author: Martin Lommatzsch

-->




# unbedingte Vierfeldertafel

**Fülle** alle Felder der Kontingenztafel (Vierfeldertafel) für eine unbedingte Wahrscheinlichkeit in relativen Zahlen **aus**.




<!-- data-type="none"
data-sortable="false" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       | [[ 0,03 ]] @Algebrite.check(3/100) | [[ 0,57 ]] @Algebrite.check(57/100) | [[ 0,6  ]] @Algebrite.check(60/100) |
| $\bar{B}$ |   $2\%$    |   $0,38$   | [[ 0,4  ]] @Algebrite.check(40/100) |
|           | [[ 0,05 ]] @Algebrite.check(5/100) | [[ 0,95 ]] @Algebrite.check(95/100) |      1     |
