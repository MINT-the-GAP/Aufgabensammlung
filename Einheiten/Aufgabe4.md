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

tags: Einheiten, Länge, Zeit, Masse, Fläche, leicht

-->




# Aufgabe 1

**Rechne** in die angebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $9\,\text{m} = $ [[ 900   ]] $\,\text{cm}$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $85000\,\text{g} = $ [[ 85    ]] $\,\text{kg}$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $3\,\text{h} = $ [[ 180   ]] $\,\text{min}$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $5000\,\text{mm} = $ [[  50   ]] $\,\text{dm}$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $1\,\text{m}^2 = $ [[  100  ]] $\,\text{dm}^2$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $3600\,\text{h} = $ [[   1   ]] $\,\text{s}$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>