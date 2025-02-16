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

tags: Tabelle, Parameter, Vorrangsregeln, leicht

-->




# Aufgabe 1

**Fülle** die freien Felder der Tabelle **aus**.

<br>

<!-- data-type="none" -->
|  $a$  |   $c$  |   $r$   |  $a\cdot c - r$  |  $ r + a \cdot c$ | $(r+c)\cdot a$ |
| :---: | :----: | :-----: | :------:         | :----------:      | :-----------:  |
|   8   |    7   |     6   | [[ 50 ]]         |   [[ 62 ]]        |  [[  104  ]]   |
|   6   |    5   |     8   | [[ 22 ]]         |   [[ 38 ]]        |  [[  78  ]]    |
|   4   |    9   |     3   | [[ 33 ]]         |   [[ 39 ]]        |  [[  48  ]]    |
|   9   |    3   |     5   | [[ 22 ]]         |   [[ 33 ]]        |  [[  135  ]]   |