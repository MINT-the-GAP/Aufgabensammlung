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


tags: Vokabeln, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Eine Zahl besteht aus verschiedenen Ziffern, sortiere sie in die Stellenwerttafel ein.

author: Martin Lommatzsch

-->




# In die Stellenwerttafel einsortieren

**Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)



<br>

__$a)\;\;$__ 910772

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 9 ]]      |       [[ 1 ]]     |    [[ 0 ]]   |   [[ 7 ]]  |  [[ 7 ]]  | [[ 2 ]] |

<br>

__$b)\;\;$__ 1349310

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 1 ]]   |       [[ 3 ]]      |       [[ 4 ]]     |    [[ 9 ]]   |   [[ 3 ]]  |  [[ 1 ]]  | [[ 0 ]] |
<br>

__$c)\;\;$__ 13792

<!-- data-type="none" -->
|  Millioner  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 0 ]]      |       [[ 1 ]]     |    [[ 3 ]]   |   [[ 7 ]]  |  [[ 9 ]]  | [[ 2 ]] |


