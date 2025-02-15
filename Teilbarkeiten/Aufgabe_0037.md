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

tags: Teilbarkeiten, Quersumme, sehr leicht

-->





# Aufgabe 1


**Gib** den Wert der Quersumme an.

<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__ $75946873$

<br>
--> [[ 49 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$b)\;\;$__ $64838390$

<br>
--> [[ 41 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$c)\;\;$__ $23758627$

<br>
--> [[ 40 ]]
<br>
<br>
<br>

</div>
</section>

<section class="flex-container">
<div class="flex-child">

__$d)\;\;$__ $32950250$

<br>
--> [[ 26 ]]
<br>
<br>
<br>

</div>
</section>

<br>
<br>
<br>
<br>
<br>