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

tags: Folgen, sehr leicht

-->




# Aufgabe 1

**Gib** nächsten Glieder der Folge **an**.


<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

$12 \quad 24 \quad 36 \quad 48 \quad 60 \quad 72 \quad 84 \quad$ [[ 96 ]] $\quad$ [[ 108 ]] $\quad$ [[ 120 ]] \

[[?]] Musterbeschreibung: Die $12$er-Reihe.

</div>


</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__

$1 \quad 12 \quad 123 \quad 1234 \quad 12345 \quad $ [[ 123456 ]] $\quad$ [[ 1234567 ]] $\quad$ [[ 1234567 ]] \

[[?]] Musterbeschreibung: Es wird immer die nächst höhere natürliche Zahl als Ziffer angehangen.

</div>

</section>


<br>


<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__

$11 \quad 101 \quad 1001 \quad 10001 \quad $ [[ 100001 ]] $\quad$ [[ 1000001 ]] $\quad$ [[ 10000001 ]] \

[[?]] Musterbeschreibung: Es wird immer eine $0$ in die Mitte der Zahl eingeschoben.

</div>

</section>



<br>
<br>
<br>
<br>