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

tags: kgV, ggT, Vorrangsregeln, schwer

-->




# Aufgabe 1


**Gib** den Wert des Terms **an**.

<br>


<section class="flex-container">

<div class="flex-child">

$a)\;\; \text{kgV}(12;7) - \text{ggT}(24;144;4) \cdot \text{ggT}(66;121) = $ [[  40 ]]

</div>

<div class="flex-child">

$b)\;\; \text{kgV}\left(3;\text{kgV}(5;7)\right)-\text{ggT}\left(24;\text{ggT}(36;60)\right) =$ [[  93 ]]

</div>

<div class="flex-child">

$c)\;\; \text{kgV}\left(\text{ggT}(45;115);\text{ggT}(51;187)\right) - \text{kgV}(7;3) =$ [[  44 ]]

</div>

</section>