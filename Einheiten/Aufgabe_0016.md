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

tags: Einheiten, Länge, Fläche, leicht

-->




# Aufgabe 1


**Rechne** alles in die angegebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $7\,\text{m}^2 = $ [[  70000  ]] $\,\text{cm}^2$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $4\,\text{km}^2 = $ [[ 4000000 ]] $\,\text{m}^2$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $5000\,\text{cm}^2 = $ [[    50   ]] $\,\text{dm}^2$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $9\,\text{m}^2 = $ [[ 9000000 ]] $\,\text{mm}^2$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $1100000\,\text{cm}^2 = $ [[   110   ]] $\,\text{m}^2$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $70\,\text{dm}^2 = $ [[ 700000  ]] $\,\text{mm}^2$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>