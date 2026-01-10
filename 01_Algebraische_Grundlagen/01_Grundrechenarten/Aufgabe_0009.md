<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Vokabeln, Zahlenverständnis, sehr leicht, sehr niedrig, Angeben

comment: Eine Zahl besteht aus verschiedenen Ziffern, sortiere sie in die Stellenwerttafel ein.

author: Martin Lommatzsch

-->




# In die Stellenwerttafel einsortieren

**Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)



<br>

__$a)\;\;$__ 835069

<!-- data-type="none" -->
|  Millionener  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 8 ]]      |       [[ 3 ]]     |    [[ 5 ]]   |   [[ 0 ]]  |  [[ 6 ]]  | [[ 9 ]] |

<br>

__$b)\;\;$__ 9841631

<!-- data-type="none" -->
|  Millionener  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 9 ]]   |       [[ 8 ]]      |       [[ 4 ]]     |    [[ 1 ]]   |   [[ 6 ]]  |  [[ 3 ]]  | [[ 1 ]] |
<br>

__$c)\;\;$__ 620551

<!-- data-type="none" -->
|  Millionener  |  Hunderttausender  |   Zehntausender   |  Tausender   |  Hunderter |  Zehner   |  Einer  |
| :---------: | :----------------: | :---------------: | :----------: | :--------: | :-------: | :-----: |
|   [[ 0 ]]   |       [[ 6 ]]      |       [[ 2 ]]     |    [[ 0 ]]   |   [[ 5 ]]  |  [[ 5 ]]  | [[ 1 ]] |


<br>
<br>
<br>
<br>
<br>
<br>