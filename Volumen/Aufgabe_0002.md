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

tags: Einheiten, Quader, Länge, Volumen, Fläche, leicht

-->





# Aufgabe 1


**Kreuze** die zutreffenden Antworten auf die Fragen **an**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Ein Würfel besitzt einen Volumeninhalt von $64\,$cm$^3$. Wie groß ist die Kantenlänge?


- [[ ]] $a=3\,$cm
- [[X]] $a=4\,$cm
- [[ ]] $a=6\,$cm
- [[ ]] $a=8\,$cm
- [[ ]] $a=16\,$cm

<br>
<br>
<br>

<br>
<br>
<br>

</div>

</section>







<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__ Ein Würfel besitzt einen Oberflächeninhalt von $150\,$cm$^2$. Wie groß ist die Kantenlänge?


- [[ ]] $a=3\,$cm
- [[ ]] $a=4\,$cm
- [[X]] $a=5\,$cm
- [[ ]] $a=6\,$cm
- [[ ]] $a=8\,$cm

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