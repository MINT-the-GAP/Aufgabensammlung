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
__$a)\;\;$__ Von der Summe aus $44$ und $18$ wird $29$ subtrahiert.\
-->[[  33  ]]
<br>
<br>
__$b)\;\;$__ Der ganzzahlige Quotient besteht aus den Zahlen $5$ und $70$.\
-->[[  14  ]]
<br>
<br>
__$c)\;\;$__ Das Produkt der Zahlen $9$ und $4$ wird mit $5$ multipliziert.\
-->[[  180 ]]
<br>
<br>
__$d)\;\;$__ Die positive Differenz aus $38$ und $57$ wird um $14$ addiert.\
-->[[  33  ]]

<br>
<br>
<br>
<br>

