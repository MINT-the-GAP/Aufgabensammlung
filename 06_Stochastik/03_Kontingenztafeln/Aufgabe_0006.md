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


tags: Kontingenztafel, Vierfeldertafel, bedingte Wahrscheinlichkeit, sehr leicht, sehr niedrig, Angeben

comment: Fülle die Vierfeldertafel für eine bedingte Wahrscheinlichkeit aus.

author: Martin Lommatzsch

-->




# bedingte Vierfeldertafel

**Fülle** alle Felder der Kontingenztafel (Vierfeldertafel) für eine bedingte Wahrscheinlichkeit in relativen Zahlen mit Dezimalzahlen **aus**.




<!-- data-type="none"
data-sortable="false" -->
|           |     $A$    | $\bar{A}$  |            |
| :-------: | :--------: | :-------:  | :--------: |
| $B$       | [[ 0,21 ]] @Algebrite.check(21/100) | [[ 0,45 ]] @Algebrite.check(45/100) |    0,66    |
| $\bar{B}$ |    0,22    | [[ 0,12 ]] @Algebrite.check(12/100) | [[ 0,34 ]] @Algebrite.check(34/100) |
|           | [[ 0,43 ]] @Algebrite.check(43/100) |    0,57    |      1     |
