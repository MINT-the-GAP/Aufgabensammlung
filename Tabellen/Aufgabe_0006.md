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
|  $z$  |   $x$  |   $n$   |  $n - x - z$  |  $ n - x \cdot z$ | $ n - 4 \cdot z$ |
| :---: | :----: | :-----: | :------:      | :----------:      | :-----------:    |
|   8   |    6   |    96   | [[ 82 ]]      |   [[ 40 ]]        |  [[  64  ]]      |
|   12  |    5   |    84   | [[ 67 ]]      |   [[ 24 ]]        |  [[  36  ]]      |
|   3   |    14  |    67   | [[ 50 ]]      |   [[ 25 ]]        |  [[  55  ]]      |
|   7   |    9   |    79   | [[ 63 ]]      |   [[ 16 ]]        |  [[  51  ]]      |