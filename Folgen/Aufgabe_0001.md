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

tags: Folgen, leicht

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.


<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$1 \quad 3 \quad 9 \quad 27 \quad 81 \quad $ [[ 243 ]] $\quad$ [[ 729 ]] $\quad$ [[ 2187 ]] \

[[?]] Musterbeschreibung: Die vorherige Zahl wird mit $3$ multipliziert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$2 \quad 3 \quad 5 \quad 7 \quad 11 \quad 13 \quad 17 \quad $ [[ 23 ]] $\quad$ [[ 29 ]] $\quad$ [[ 31 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden Primzahlen

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$3 \quad 8 \quad 15 \quad 24 \quad 35 \quad $ [[ 48 ]] $\quad$ [[ 63 ]] $\quad$ [[ 80 ]] 
\

[[?]] Musterbeschreibung: Die Ausgangszahl wird mit der aufsteigenden ungeraden Zahl addiert, startend bei $3$.
</div>


</section>

<br>
<br>
<br>
<br>