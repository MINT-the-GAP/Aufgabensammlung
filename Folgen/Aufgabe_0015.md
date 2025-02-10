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

__$a)$__

$4 \quad 9 \quad 25 \quad 49 \quad 121 \quad 169 \quad 289 \quad $ [[ 361 ]] $\quad$ [[ 529 ]] $\quad$ [[ 841 ]] \

[[?]] Musterbeschreibung: Die Primzahlen werden quadriert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$b)$__

$1 \quad 5 \quad 14 \quad 30 \quad 55 \quad 91 \quad 140 \quad 204 \quad$ [[ 285 ]] $\quad$ [[ 385 ]] $\quad$ [[ 506 ]] \

[[?]] Musterbeschreibung: Die vorherigen Zahlen werden mit den aufsteigenden Quadratzahlen addiert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$c)$__

$A \quad Z \quad b \quad y \quad C \quad X \quad d \quad $ [[ w ]] $\quad$ [[ E ]] $\quad$ [[ V ]] \

[[?]] Musterbeschreibung: Abwechselnd vom Anfang und Ende des Alphabets wird ein Buchstabe weiter zur Mitte gegangen, nach zwei Buchstaben wird zwischen Groß- und Kleinschreibung gewechselt.

</div>

</section>

<br>
<br>
<br>
<br>