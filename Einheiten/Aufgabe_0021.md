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

tags: Einheiten, Länge, Zeit, Masse, Fläche, Volumen, leicht

-->





# Aufgabe 1


**Kreuze** die zutreffenden Antworten auf die Fragen **an**.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Welche der Volumeninhalte beschreibt den größten Volumeninhalt?


- [[ ]] $400000\,$cm$^3$
- [[X]] $40000\,$dm$^3$
- [[ ]] $4000\,$l
- [[ ]] $4\,$m$^3$
- [[ ]] $40000000\,$mm$^3$

<br>
<br>
<br>

</div>

</section>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__ Welche angegebene Zeit ist die niedrigste?


- [[ ]] $1,8\,$h
- [[ ]] $6400\,$s
- [[ ]] $5500000\,$ms
- [[ ]] $0,1\,$d
- [[X]] $102\,$min

<br>
<br>
<br>

</div>

</section>





<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__ Welche angegebenen Längen sind die größten?


- [[X]] $248\,$dm
- [[ ]] $248000\,$mm
- [[X]] $0,0248\,$km
- [[ ]] $24,8\,$cm
- [[ ]] $2,48\,$m

<br>
<br>
<br>

</div>

</section>







<section class="flex-container">

<div class="flex-child">

__$d)\;\;$__ Welche angegebenen Flächen sind die kleinsten?


- [[X]] $234\,$dm$^2$
- [[X]] $2340000\,$mm$^2$
- [[ ]] $0,0234\,$ha
- [[X]] $23400\,$cm$^2$
- [[ ]] $23,4\,$m$^2$

<br>
<br>
<br>

</div>

</section>


<br>
<br>
<br>
<br>
<br>