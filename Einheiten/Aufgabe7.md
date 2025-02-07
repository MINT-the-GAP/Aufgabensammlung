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

__$a)\;\;$__ Wie viele Minuten sind von 10:30$\,$Uhr bis 13:30$\,$Uhr vergangen? \
[[  180  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ Wie viele Minuten sind von 06:20$\,$Uhr bis 8:40$\,$Uhr vergangen? \
[[  140  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ Wie viele Minuten sind von 18:15$\,$Uhr bis 23:30$\,$Uhr vergangen? \
[[  315  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ Wie viele Minuten sind von 08:10$\,$Uhr bis 15:45$\,$Uhr vergangen? \
[[  455  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ Wie viele Minuten sind von 01:00$\,$Uhr bis 14:22$\,$Uhr vergangen? \
[[  802  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ Wie viele Minuten sind von 07:50$\,$Uhr bis 11:17$\,$Uhr vergangen? \
[[  207  ]] $\,\text{min}$

</div>


</section>

<br>
<br>
<br>
<br>
<br>