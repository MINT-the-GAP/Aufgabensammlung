<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Vokabeln, Dezimalzahlen, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Schreibe aus der Stellenwerttafel die Zahl nieder.

author: Martin Lommatzsch

-->




# Dezimalzahlen in Stellenwerttafeln

**Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)



<br>

__$a)\;\;$__ 7,058

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 7 ]] |  [[ 0 ]]  |    [[ 5 ]]  |  [[ 8 ]]    |     [[ 0 ]]       |

<br>

__$b)\;\;$__ 614,82

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 6 ]]   | [[ 1 ]] | [[ 4 ]] |  [[ 8 ]]  |    [[ 2 ]]  |  [[ 0 ]]    |     [[ 0 ]]       |

<br>

__$c)\;\;$__ 50,1903

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 5 ]] | [[ 0 ]] |  [[ 1 ]]  |    [[ 9 ]]  |  [[ 0 ]]    |     [[ 3 ]]       |


<br>

<br>
<br>
<br>
<br>
<br>
<br>