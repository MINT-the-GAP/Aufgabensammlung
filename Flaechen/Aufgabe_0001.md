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

tags: Einheiten, Rechteck, Länge, Fläche, leicht

-->





# Aufgabe 1


**Kreuze** die zutreffenden Antworten auf die Fragen **an**.

<br>
 





<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Welche der angegebenen Wertepaare beschreibt den größten Flächeninhalt eines Rechtecks?


- [[ ]] $a=5\,$cm$\;\;\wedge\;\; b=6\,$cm
- [[ ]] $a=8\,$cm$\;\;\wedge\;\; b=3\,$cm
- [[ ]] $a=3\,$cm$\;\;\wedge\;\; b=10\,$cm
- [[ ]] $a=7\,$cm$\;\;\wedge\;\; b=4\,$cm
- [[X]] $a=2\,$cm$\;\;\wedge\;\; b=16\,$cm

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

__$b)\;\;$__ Welche der angegebenen Wertepaare beschreibt den kleinsten Umfang eines Rechtecks?


- [[X]] $a=5\,$cm$\;\;\wedge\;\; b=6\,$cm
- [[X]] $a=8\,$cm$\;\;\wedge\;\; b=3\,$cm
- [[ ]] $a=3\,$cm$\;\;\wedge\;\; b=10\,$cm
- [[X]] $a=7\,$cm$\;\;\wedge\;\; b=4\,$cm
- [[ ]] $a=2\,$cm$\;\;\wedge\;\; b=16\,$cm

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