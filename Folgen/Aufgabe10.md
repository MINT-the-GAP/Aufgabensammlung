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

tags: Folgen, Fortgeschrittene

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.



<br>



<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$53 \quad 55 \quad 59 \quad 65 \quad 73 \quad 83 \quad 95 \quad $ [[ 109 ]] $\quad$ [[ 125 ]] $\quad$ [[ 143 ]] \

[[?]] Musterbeschreibung: Zur vorherigen Zahl wird die nächst größere gerade Zahl addiert.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$b \quad D \quad f \quad H \quad j \quad L \quad $ [[ n ]] $\quad$ [[ P ]] $\quad$ [[ r ]] \

[[?]] Musterbeschreibung: Immer jeweils der übernächste Buchstabe des Alphabets abwechselnd klein und groß geschrieben.

</div>

</section>


<br>



<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$542 \quad  \quad 519 \quad 496 \quad 473 \quad 450 \quad 427 \quad 404 \quad $ [[ 381 ]] $\quad$ [[ 358 ]] $\quad$ [[ 335 ]] \

[[?]] Musterbeschreibung: Von der vorherigen Zahl wird $23$ subtrahiert.

</div>

</section>

<br>
<br>
<br>
<br>