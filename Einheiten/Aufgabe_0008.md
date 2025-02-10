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

tags: Einheiten, Zeit, leicht

-->




# Aufgabe 1

**Gib** die Antwort **an**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Wie viel Zeit ist von 12:30$\,$Uhr bis 15:40$\,$Uhr vergangen? \
[[   3   ]] $\,\text{h}$ und [[   10  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ Wie viel Zeit ist von 09:15$\,$Uhr bis 17:40$\,$Uhr vergangen? \
[[   8   ]] $\,\text{h}$ und [[   25  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ Wie viel Zeit ist von 7:05$\,$Uhr bis 14:20$\,$Uhr vergangen? \
[[   7   ]] $\,\text{h}$ und [[   15  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ Wie viel Zeit ist von 10:40$\,$Uhr bis 19:30$\,$Uhr vergangen? \
[[   8   ]] $\,\text{h}$ und [[   50  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ Wie viel Zeit ist von 05:50$\,$Uhr bis 21:20$\,$Uhr vergangen? \
[[  15   ]] $\,\text{h}$ und [[   30  ]] $\,\text{min}$

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ Wie viel Zeit ist von 07:25$\,$Uhr bis 18:40$\,$Uhr vergangen? \
[[  11   ]] $\,\text{h}$ und [[   15  ]] $\,\text{min}$

</div>


</section>

<br>
<br>
<br>
<br>
<br>