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

tags: Teilbarkeiten, sehr leicht

-->





# Aufgabe 1

**Kreuze** die zutreffenden Antworten auf die Fragen **an**.

<br>

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Welche der folgenden Zahlen ist durch $2$ teilbar?


- [[X]] $952$
- [[ ]] $843$
- [[ ]] $657$
- [[X]] $254$
- [[X]] $380$

<br>
<br>
<br>

</div>

</section>



<section class="flex-container">

<div class="flex-child">

__$b)\;\;$__ Welche der folgenden Zahlen ist durch $5$ teilbar?


- [[X]] $325$
- [[ ]] $621$
- [[X]] $840$
- [[ ]] $942$
- [[ ]] $674$


<br>
<br>
<br>

</div>

</section>





<section class="flex-container">

<div class="flex-child">

__$c)\;\;$__ Welche der folgenden Zahlen ist durch $3$ teilbar?


- [[ ]] $512$
- [[X]] $360$
- [[X]] $135$
- [[ ]] $784$
- [[X]] $681$

<br>
<br>
<br>

<br>
<br>
<br>

</div>

</section>







<section class="flex-container">

<div class="flex-child">

__$d)\;\;$__ Welche der folgenden Zahlen ist durch $8$ teilbar?


- [[ ]] $355$
- [[X]] $464$
- [[ ]] $789$
- [[ ]] $388$
- [[ ]] $639$

<br>
<br>
<br>

</div>

</section>






<section class="flex-container">

<div class="flex-child">

__$e)\;\;$__ Welche der folgenden Zahlen ist durch $9$ teilbar?


- [[X]] $504$
- [[ ]] $821$
- [[X]] $927$
- [[ ]] $487$
- [[X]] $1017$

<br>
<br>
<br>

<br>
<br>
<br>

</div>

</section>







<section class="flex-container">

<div class="flex-child">

__$f)\;\;$__ Welche der folgenden Zahlen ist durch $4$ teilbar?


- [[ ]] $474$
- [[ ]] $954$
- [[X]] $796$
- [[ ]] $326$
- [[X]] $512$

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