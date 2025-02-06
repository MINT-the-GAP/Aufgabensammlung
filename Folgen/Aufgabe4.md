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

tags: Folgen, Experte

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$194 \quad 183 \quad 169 \quad 152 \quad 132 \quad 109 \quad $ [[ 83 ]] $\quad$ [[ 57 ]] $\quad$ [[ 28 ]] \

[[?]] Musterbeschreibung: Um $3$ wachsender Subtrahend wird vom vorherigen Wert subtrahiert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$1 \quad 16 \quad 81 \quad 256 \quad 625 \quad $ [[ 1296 ]] $\quad$ [[ 2401 ]] $\quad$ [[ 4096 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden natürlichen Zahlen hoch $4$.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$0 \quad 1 \quad 10 \quad 11 \quad 100 \quad 101 \quad 110 \quad 111 \quad $ [[ 1000 ]] $\quad$ [[ 1001 ]] $\quad$ [[ 1010 ]] \

[[?]] Musterbeschreibung: Die aufsteigenden Zahlen in binär.

</div>

</section>

<br>
<br>
<br>
<br>