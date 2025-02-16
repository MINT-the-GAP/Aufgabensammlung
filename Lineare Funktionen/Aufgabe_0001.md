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

tags: lineare Funktionen, leicht

-->




# Aufgabe 1



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Gegeben sei die lineare Funktion $f(x) = -x+5$. Bestimme die jeweilige fehlende Koordinate der Punkte $A$ und $B$. 

<br>

--> $A(9|$ [[  -4  ]] $)$ und $B($ [[  -3  ]] $|8)$

<br>
<br>
<br>

</div>

</section>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__ Gegeben sei die lineare Funktion $f(x) = 4x-6$. Bestimme die jeweilige fehlende Koordinate der Punkte $A$ und $B$. 

<br>

--> $A(7|$ [[  22  ]] $)$ und $B($ [[  -3  ]] $|-18)$

<br>
<br>
<br>

</div>

</section>