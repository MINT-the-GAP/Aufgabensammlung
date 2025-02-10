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

tags: Folgen, schwer

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.


<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$1 \quad 8 \quad 27 \quad 64 \quad 125 \quad$ [[ 216 ]] $\quad$ [[ 343 ]] $\quad$ [[ 512 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen hoch $3$.

</div>


</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$3 \quad 5 \quad 8 \quad 11 \quad 16 \quad 19 \quad 24 \quad 27 \quad 32 \quad$ [[ 39 ]] $\quad$ [[ 42 ]] $\quad$ [[ 49 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen addiert mit den aufsteigenden Primzahlen: $1+2$ dann $2+3$ dann $3+5$ und so weiter.

</div>

</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$1 \quad 5 \quad 14 \quad 30 \quad 55 \quad 91 \quad$ [[ 140 ]] $\quad$ [[ 204 ]] $\quad$ [[ 285 ]] \

[[?]] Musterbeschreibung: Die zuvorige Zahl wird mit der aufsteigenden Quadratzahl startend bei $2$ addiert.

</div>

</section>



<br>
<br>
<br>
<br>