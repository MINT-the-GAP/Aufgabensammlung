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

tags: Tabelle, Parameter, Negative Zahlen, Vorrangsregeln, leicht

-->




# Aufgabe 1

**Fülle** die freien Felder der Tabelle **aus**.

<br>

<!-- data-type="none" -->
|  $t$  |   $k$  |   $d$   |  $ t+k-d $  |  $ t \cdot d $ | $ d - k \cdot t $ |
| :---: | :----: | :-----: | :------:    | :----------:   | :-----------:     |
|  5    |   -6   |    8    | [[ -9  ]]   |   [[  40 ]]    |  [[ 38  ]]        |
|  -8   |   4    |    -6   | [[ -10 ]]   |   [[  48 ]]    |  [[ 18  ]]        |
|  -4   |   -7   |    9    | [[ -20 ]]   |   [[ -36 ]]    |  [[ -19 ]]        |
|   3   |   -5   |    -8   | [[ 6   ]]   |   [[ -24 ]]    |  [[ 7   ]]        |