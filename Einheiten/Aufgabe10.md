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

tags: Einheiten, Zeit, mittel

-->




# Aufgabe 1

**Gib** die Antwort **an**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Wie viele Minuten sind von 14:44$\,$Uhr bis 18:52$\,$Uhr vergangen? \
[[  248  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ Wie viele Minuten sind von 07:30$\,$Uhr bis 13:28$\,$Uhr vergangen? \
[[  352  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ Wie viele Sekunden sind von 19:37$\,$Uhr bis 19:49$\,$Uhr vergangen? \
[[  720  ]] $\,\text{s}$

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ Wie viele Stunden sind von 09:30$\,$Uhr bis 03:30$\,$Uhr vergangen? \
[[  18   ]] $\,\text{h}$

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ Wie viele Minuten sind von 22:45$\,$Uhr bis 05:15$\,$Uhr vergangen? \
[[  390  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ Wie viele Minuten sind von 23:54$\,$Uhr bis 11:32$\,$Uhr vergangen? \
[[  698  ]] $\,\text{min}$

</div>


</section>

<br>
<br>
<br>
<br>
<br>