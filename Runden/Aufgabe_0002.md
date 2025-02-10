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

tags: Runden, sehr leicht

-->




# Aufgabe 1

**Gib** den auf Hunderter gerundeten Wert **an**.


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$7664 \approx$ [[7700]]

</div>



<div class="flex-child">

__$b)\;\;$__

$4467 \approx$ [[4500]]

</div>




<div class="flex-child">

__$c)\;\;$__

$2454 \approx$ [[2400]]

</div>




<div class="flex-child">

__$d)\;\;$__

$2163 \approx$ [[2200]]

</div>




<div class="flex-child">

__$e)\;\;$__

$2389 \approx$ [[2400]]

</div>



<div class="flex-child">

__$f)\;\;$__

$15314 \approx$ [[15300]]

</div>


</section>