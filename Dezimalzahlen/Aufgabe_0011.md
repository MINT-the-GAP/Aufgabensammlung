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


.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: Vokabeln, Zahlenverständnis, sehr leicht

-->




# Aufgabe 1

**Sortiere** die Zahlen in die Stellenwerttafel **ein**. (Falls an einer Stelle nichts eingetragen werden soll, trage eine $0$ ein.)



<br>

__$a)\;\;$__ 17,054

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 1 ]] | [[ 7 ]] |  [[ 0 ]]  |    [[ 5 ]]  |  [[ 4 ]]    |     [[ 0 ]]       |

<br>

__$b)\;\;$__ 146,7912

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 1 ]]   | [[ 4 ]] | [[ 6 ]] |  [[ 7 ]]  |    [[ 9 ]]  |  [[ 1 ]]    |     [[ 2 ]]       |
<br>

__$c)\;\;$__ 0,0077

<!-- data-type="none" -->
|  Hunderter  |  Zehner |  Einer  |  Zehntel  | Hundertstel | Tausendstel |  Zehntausendstel  |
| :---------: | :-----: | :-----: | :-------: | :---------: | :---------: | :---------------: |
|   [[ 0 ]]   | [[ 0 ]] | [[ 0 ]] |  [[ 0 ]]  |    [[ 0 ]]  |  [[ 7 ]]    |     [[ 7 ]]       |


