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

tags: Teilbarkeiten, leicht

-->





# Aufgabe 1


**Entscheide**, ob die es sich um einen Teiler $\mid$ oder keinem Teiler $\nmid$ der Zahl handelt.

<br>

__$a)\;\;$__ $8$ [[ ($\mid$) | $\nmid$ ]] $1416$ \
<br>
__$b)\;\;$__ $9$ [[ $\mid$ | ($\nmid$) ]] $6707$ \
<br>
__$c)\;\;$__ $6$ [[ ($\mid$) | $\nmid$ ]] $8424$ \
<br>
__$d)\;\;$__ $10$ [[ ($\mid$) | $\nmid$ ]] $9200$ \
<br>
__$e)\;\;$__ $4$ [[ $\mid$ | ($\nmid$) ]] $9846$ \
<br>
__$f)\;\;$__ $7$ [[ ($\mid$) | $\nmid$ ]] $7098$ 
<br>


<br>
<br>
<br>
<br>
<br>