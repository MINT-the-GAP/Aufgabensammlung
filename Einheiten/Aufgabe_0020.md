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

tags: Einheiten, Länge, Volumen, mittel

-->




# Aufgabe 1


**Rechne** alles in die angegebene Einheit **um**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ $3\,\text{dm}^3 = $ [[   3000    ]] $\,\text{ml}$ \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ $80\,\text{cl} = $ [[    800    ]] $\,\text{ml}$ \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ $410000\,\text{dm}^3 = $ [[    410    ]] $\,\text{m}^3$ \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ $9500000000\,\text{cm}^3 = $ [[    9500   ]] $\,\text{m}^3$ \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ $120\,\text{l} = $ [[ 120000000 ]] $\,\text{mm}^3$ \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ $50000\,\text{l} = $ [[     50     ]] $\,\text{cm}^3$ \

</div>


</section>

<br>
<br>
<br>
<br>
<br>