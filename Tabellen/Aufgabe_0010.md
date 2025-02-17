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
|  $z$  |   $r$  |   $s$   |  $ z+r\cdot s $  |  $ z+r+2 \cdot s $ | $ |s|\cdot s - r $ |
| :---: | :----: | :-----: | :---------:      | :----------:       | :-----------:      |
|  6    |   -5   |   -4    | [[ 26  ]]        |   [[ -7  ]]        |  [[ -11 ]]         |
|  -8   |   3    |    -6   | [[ -30 ]]        |   [[ -17 ]]        |  [[ -39 ]]         |
|   -3  |   7    |    -4   | [[ -31 ]]        |   [[ -4  ]]        |  [[ -23 ]]         |
|   7   |   -9   |    -5   | [[ 52  ]]        |   [[ -12 ]]        |  [[ -16 ]]         |