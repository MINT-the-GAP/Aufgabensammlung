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

$97 \quad 91 \quad 85 \quad 79 \quad 73 \quad 67 \quad $ [[ 61 ]] $\quad$ [[ 55 ]] $\quad$ [[ 49 ]] \

[[?]] Musterbeschreibung: Von der vorherigen Zahl wird $6$ subtrahiert.

</div>


</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$1 \quad 11 \quad 111 \quad 1111 \quad 11111 \quad $ [[ 111111 ]] $\quad$ [[ 1111111 ]] $\quad$ [[ 11111111 ]] \

[[?]] Musterbeschreibung: Die nächste $10$er-Potenz wird zur vorherigen Zahl addiert.

</div>

</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$43 \quad 57 \quad 71 \quad 85 \quad 99 \quad 113 \quad$ [[ 127 ]] $\quad$ [[ 141 ]] $\quad$ [[ 155 ]] \

[[?]] Musterbeschreibung: Startend bei der $43$ wird zur vorherigen Zahl immer $14$ addiert.

</div>

</section>



<br>
<br>
<br>
<br>