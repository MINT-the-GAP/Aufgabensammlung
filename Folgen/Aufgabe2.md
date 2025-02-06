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

tags: Folgen, Übende

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.


<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$1 \quad 1 \quad 2 \quad 3 \quad 5 \quad 8 \quad 13 \quad$ [[ 21 ]] $\quad$ [[ 34 ]] $\quad$ [[ 55 ]] \

[[?]] Musterbeschreibung: Die beiden vorherigen Zahlen werden miteinander addiert.

</div>


</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$1 \quad 4 \quad 9 \quad 16 \quad 25 \quad 36 \quad 49 \quad$ [[ 64 ]] $\quad$ [[ 81 ]] $\quad$ [[ 100 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen werden quadriert.
</div>

</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$A \quad C \quad E \quad G \quad I \quad K \quad M \quad$ [[ O ]] $\quad$ [[ Q ]] $\quad$ [[ S ]] \

[[?]] Musterbeschreibung: Immer der übernächste Buchstabe des Alphabets

</div>

</section>



<br>
<br>
<br>
<br>