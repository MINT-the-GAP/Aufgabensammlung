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
__$a)\;\;$__ Die positive Differenz aus $23$ und $47$ wird mit $4$ multipliziert. \
-->[[  96  ]]
<br>
<br>
__$b)\;\;$__ Der Term ist ein Quotient mit dem Dividenden $7$, während der Divisor sich aus der Summe von $23$ und $33$ bildet. \
-->[[  8   ]]
<br>
<br>
__$c)\;\;$__ Die Summanden $13$, $54$ und $23$ werden mit $11$ multipliziert. \
-->[[  990 ]]
<br>
<br>
__$d)\;\;$__ Die Summe aus $8$ und $7$ wird mit der Differenz aus dem Minuenden $19$ und den Subtrahenden $14$ multipliziert. \
-->[[  75  ]]

<br>
<br>
<br>
<br>

