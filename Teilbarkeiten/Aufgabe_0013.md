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

tags: kgV, leicht

-->




# Aufgabe 1


**Gib** den Wert des Terms **an**.

<br>


<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{kgV}(16;10) =$ [[ 80  ]]

</div>

<div class="flex-child">

$b)\;\; \text{kgV}(12;7) =$ [[  84 ]]

</div>

<div class="flex-child">

$c)\;\; \text{kgV}(6;8) =$ [[  24 ]]

</div>

<div class="flex-child">

$d)\;\; \text{kgV}(15;12) =$ [[  60 ]]

</div>

<div class="flex-child">

$e)\;\; \text{kgV}(13;11) =$ [[ 143 ]]

</div>

<div class="flex-child">

$f)\;\; \text{kgV}(32;3) =$ [[  96  ]]

</div>

</section>