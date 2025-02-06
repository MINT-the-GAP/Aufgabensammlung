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

tags: Folgen, Einsteiger

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.


<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$1 \quad 2 \quad 4 \quad 8 \quad 16 \quad 32 \quad 64 \quad$ [[ 128 ]] $\quad$ [[ 256 ]] $\quad$ [[ 512 ]] \

[[?]] Musterbeschreibung: Die vorherige Zahl wird mit $2$ multipliziert.

</div>


</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$5 \quad 10 \quad 15 \quad 20 \quad 25 \quad 30 \quad $ [[ 35 ]] $\quad$ [[ 40 ]] $\quad$ [[ 45 ]] \

[[?]] Musterbeschreibung: Die $5$er-Reihe.

</div>

</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$7 \quad 19 \quad 31 \quad 43 \quad 55 \quad 67 \quad$ [[ 79 ]] $\quad$ [[ 91 ]] $\quad$ [[ 103 ]] \

[[?]] Musterbeschreibung: Startend bei der $7$ wird zur vorherigen Zahl immer $12$ addiert.

</div>

</section>



<br>
<br>
<br>
<br>