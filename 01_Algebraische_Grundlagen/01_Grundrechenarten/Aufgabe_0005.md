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


tags: Vokabeln, Grundrechenarten, Vorrangsregeln, mittel, niedrig, Angeben

comment: Ein Term wird durch die Fachsprache beschrieben. Gib den Wert dieses Terms an.

author: Martin Lommatzsch

-->




# Fachsprache von Termen

**Gib** den Wert des beschriebenen Terms **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ Die positive Differenz aus $23$ und $47$ wird mit $4$ multipliziert. \
-->[[  96  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ Der Term ist ein Quotient mit dem Dividenden $7$, während der Divisor sich aus der Summe von $23$ und $33$ bildet. \
-->[[  8   ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ Die Summanden $13$, $54$ und $23$ werden mit $11$ multipliziert. \
-->[[  990 ]]
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ Die Summe aus $8$ und $7$ wird mit der Differenz aus dem Minuenden $19$ und den Subtrahenden $14$ multipliziert. \
-->[[  75  ]]

</div>
</section>
<br>
<br>
<br>
<br>

