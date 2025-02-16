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

tags: Vokabeln, Grundrechenarten, leicht

-->




# Aufgabe 1

**Gib** den Wert des beschriebenen Terms **an**.

<br>
__$a)\;\;$__ Ein Produkt aus $7$ und $8$ wird durch $4$ dividiert.\
-->[[  14  ]]
<br>
<br>
__$b)\;\;$__ Der Term besteht aus den Faktoren $2$, $6$, $3$ und  $5$.\
-->[[  180 ]]
<br>
<br>
__$c)\;\;$__ Der Dividend $6$ und der Divisor $78$ bilden ein Produkt mit $8$.\
-->[[  104 ]]
<br>
<br>
__$d)\;\;$__ Der Subtrahend $19$ und der Minuend $73$ bilden eine Differenz, die mit $17$ addiert wird.\
-->[[  71  ]]

<br>
<br>
<br>
<br>

