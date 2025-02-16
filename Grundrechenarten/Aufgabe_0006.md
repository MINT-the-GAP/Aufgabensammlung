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

tags: Vokabeln, Grundrechenarten, Vorrangsregeln, mittel

-->




# Aufgabe 1

**Gib** den Wert des beschriebenen Terms **an**.

<br>
__$a)\;\;$__ Ein Produkt besteht aus den Summen aus $4$ und $3$ sowie $6$ und $2$. \
-->[[  144 ]]
<br>
<br>
__$b)\;\;$__ Der Minuend ist die positive Differenz aus $95$ und $33$, während der Subtrahend $27$ ist. \
-->[[  35  ]]
<br>
<br>
__$c)\;\;$__ Der Divisor ist die Summe aus $41$ und $54$, während der Dividend aus der positiven Differenz aus $83$ und $78$ besteht. \
-->[[  19  ]]
<br>
<br>
__$d)\;\;$__ Die ganzzahligen Quotienten aus $56$ und $8$ sowie $84$ und $12$ werden miteinander multipliziert.\
-->[[  42  ]]

<br>
<br>
<br>
<br>

