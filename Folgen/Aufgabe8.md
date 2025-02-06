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

tags: Folgen, Meister

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$1 \quad 4 \quad 18 \quad 48 \quad 125 \quad 288 \quad  367 \quad $ [[ 1344 ]] $\quad$ [[ 2754 ]] $\quad$ [[ 5500 ]] \

[[?]] Musterbeschreibung: Die Fibonacci Zahlen werden mit den aufsteigenden Quadratzahlen multipliziert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$0 \quad 1 \quad 6 \quad 15 \quad 28 \quad 45 \quad 66 \quad 91 \quad 120 \quad$ [[ 153 ]] $\quad$ [[ 190 ]] $\quad$ [[ 231 ]] \

[[?]] Musterbeschreibung: Der Folgenterm ist $n\cdot(2\cdot n -1)$.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$1 \quad 4 \quad 11 \quad 24 \quad 50 \quad 80 \quad 154 \quad 220 \quad $ [[ 375 ]] $\quad$ [[ 444 ]] $\quad$ [[ 781 ]] \

[[?]] Musterbeschreibung: Die Folge beschreibt, wie viele Teilflächen durch die Diagonalen in einem $n$-Eck entstehen. Startend mit einem Dreieck.

</div>

</section>

<br>
<br>
<br>
<br>